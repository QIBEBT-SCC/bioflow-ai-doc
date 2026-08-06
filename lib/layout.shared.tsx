import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';
import { i18n } from '@/lib/i18n';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  // add Traditional Chinese translations to the "cn" locale code
  .preset('zh', zhCN());

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5">
          <img src="/icon.svg" alt="" className="size-8" />
          <span className="text-[15px] font-semibold tracking-tight">{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
