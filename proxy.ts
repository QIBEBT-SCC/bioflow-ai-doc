import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { i18n } from '@/lib/i18n';
import { docsContentRoute, docsRoute } from '@/lib/shared';

const i18nMiddleware = createI18nMiddleware(i18n);
const staticFilePattern = /\.[^/]+$/;

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

function removeLocalePrefix(pathname: string) {
  for (const lang of i18n.languages) {
    const prefix = `/${lang}`;

    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }

  return pathname;
}

function rewriteMarkdownRequest(request: NextRequest) {
  const pathname = removeLocalePrefix(request.nextUrl.pathname);
  const result = rewriteSuffix(pathname);

  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return null;
}

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // Public files must bypass locale rewriting. Keep `.md` requests in the
  // proxy because Fumadocs uses them for negotiated Markdown responses.
  if (staticFilePattern.test(pathname) && !pathname.endsWith('.md')) {
    return NextResponse.next();
  }

  return rewriteMarkdownRequest(request) ?? i18nMiddleware(request, event);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|llms.txt|llms-full.txt|llms.mdx|og).*)',
  ],
};
