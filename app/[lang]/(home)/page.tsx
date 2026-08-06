import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Container,
  FileText,
  Gauge,
  Network,
  Play,
  Sparkles,
  Workflow,
} from 'lucide-react';

const copy = {
  zh: {
    eyebrow: '面向生物信息学研究的智能工作流平台',
    titleLead: '让复杂的生物信息学分析，',
    titleAccent: '变得清晰、智能、可复现。',
    description:
      '通过可视化节点编排分析流程，让 AI 协助完成工具选择与工作流设计，并在隔离的容器环境中可靠执行每一步。',
    docs: '浏览文档',
    quickStart: '快速开始',
    visualLabel: '可视化工作流编辑器',
    visualState: '工作流已就绪',
    visualMeta: '节点连接完成，可以开始运行',
    aiPrompt: '帮我设计一个从原始测序数据开始的分析流程',
    aiLabel: 'AI 工作流设计助手',
    aiPlaceholder: '对话界面截图待补充',
    proof: ['节点式编排', '容器化执行', '多模型支持'],
    sectionEyebrow: '从想法到结果',
    sectionTitle: '为真实研究流程而设计',
    sectionDescription:
      '把工具、数据、参数和运行状态放进同一个工作空间，减少环境配置与流程衔接带来的摩擦。',
    features: [
      {
        title: 'AI 驱动的设计',
        description: '用自然语言描述研究目标，AI 辅助规划步骤、发现工具并生成可编辑的工作流。',
      },
      {
        title: '可视化节点编排',
        description: '通过拖拽连接工具、数据和自定义脚本，让依赖关系与数据流一目了然。',
      },
      {
        title: '可复现的容器执行',
        description: '每个工具在隔离的 Docker 或 Podman 容器中运行，避免依赖冲突并保留执行记录。',
      },
    ],
    showcaseEyebrow: '真实产品界面',
    showcaseTitle: '从流程设计到运行结果，全程清晰可见',
    showcaseDescription: '在同一个平台中构建工作流、追踪样本运行，并深入查看每个任务的资源使用情况。',
    editorTitle: '可视化工作流编辑器',
    editorDescription: '在画布上连接输入数据、分析工具与下游结果，复杂依赖保持直观。',
    runTitle: '工作流运行实例',
    runDescription: '查看任务状态、输出文件、运行日志以及节点级执行结果。',
    monitorTitle: '任务资源监控',
    monitorDescription: '检查 CPU、内存与 I/O 使用情况，快速定位性能与运行问题。',
    journeyEyebrow: '工作方式',
    journeyTitle: '研究目标，不必从环境配置开始',
    steps: [
      {
        number: '01',
        title: '描述分析目标',
        description: '从自然语言需求、指定工具或论文方法出发。',
      },
      {
        number: '02',
        title: '构建与调整流程',
        description: '在可视化画布中检查节点、参数和数据依赖。',
      },
      {
        number: '03',
        title: '运行并持续监控',
        description: '按样本执行任务，查看实时状态、日志与输出。',
      },
    ],
    finalTitle: '准备好构建第一个工作流了吗？',
    finalDescription: '从快速开始了解部署方式，或进入文档深入探索平台能力。',
    finalPrimary: '开始使用 BioFlowAI',
    finalSecondary: '了解平台能力',
  },
  en: {
    eyebrow: 'Intelligent workflows for bioinformatics research',
    titleLead: 'Make complex bioinformatics',
    titleAccent: 'clear, intelligent, and reproducible.',
    description:
      'Compose analyses visually, let AI assist with tool discovery and workflow design, then run every step reliably in isolated containers.',
    docs: 'Explore the docs',
    quickStart: 'Quick start',
    visualLabel: 'Visual workflow editor',
    visualState: 'Workflow ready',
    visualMeta: 'Nodes connected and ready to run',
    aiPrompt: 'Design an analysis pipeline starting from raw sequencing data',
    aiLabel: 'AI workflow assistant',
    aiPlaceholder: 'Conversation screenshot coming soon',
    proof: ['Node-based design', 'Container execution', 'Multi-model support'],
    sectionEyebrow: 'From intent to insight',
    sectionTitle: 'Built for real research workflows',
    sectionDescription:
      'Bring tools, data, parameters, and run status into one workspace, with less friction between setup and analysis.',
    features: [
      {
        title: 'AI-powered design',
        description: 'Describe a research goal in natural language. AI helps plan steps, discover tools, and create an editable workflow.',
      },
      {
        title: 'Visual node composition',
        description: 'Connect tools, data, and custom scripts on a canvas where dependencies and data flow stay easy to understand.',
      },
      {
        title: 'Reproducible execution',
        description: 'Run each tool in an isolated Docker or Podman container to avoid dependency conflicts and preserve execution history.',
      },
    ],
    showcaseEyebrow: 'The product in action',
    showcaseTitle: 'A clear view from workflow design to execution results',
    showcaseDescription: 'Build workflows, follow sample runs, and inspect resource usage for every task in one platform.',
    editorTitle: 'Visual workflow editor',
    editorDescription: 'Connect inputs, analysis tools, and downstream results on a canvas where complex dependencies remain easy to follow.',
    runTitle: 'Workflow run instance',
    runDescription: 'Inspect task status, output files, execution logs, and node-level results.',
    monitorTitle: 'Task resource monitoring',
    monitorDescription: 'Review CPU, memory, and I/O usage to identify performance and execution issues quickly.',
    journeyEyebrow: 'How it works',
    journeyTitle: 'Start with the research question, not the environment setup',
    steps: [
      {
        number: '01',
        title: 'Describe the analysis',
        description: 'Begin with a natural-language goal, a specific tool, or a paper method.',
      },
      {
        number: '02',
        title: 'Build and refine',
        description: 'Review nodes, parameters, and data dependencies on the visual canvas.',
      },
      {
        number: '03',
        title: 'Run and monitor',
        description: 'Execute per sample and inspect live status, logs, and outputs.',
      },
    ],
    finalTitle: 'Ready to build your first workflow?',
    finalDescription: 'Use the quick start to deploy BioFlowAI, or explore the docs for a deeper look at the platform.',
    finalPrimary: 'Get started with BioFlowAI',
    finalSecondary: 'Learn about the platform',
  },
} as const;

const featureIcons = [Bot, Network, Container];
const stepIcons = [FileText, Workflow, Play];

function localPath(lang: string, path: string) {
  return lang === 'zh' ? `/zh${path}` : path;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === 'zh';

  return {
    title: isZh ? 'BioFlowAI — 智能生物信息学工作流平台' : 'BioFlowAI — Intelligent Bioinformatics Workflows',
    description: isZh
      ? '通过可视化节点、AI 辅助设计和容器化执行，构建清晰、智能、可复现的生物信息学分析流程。'
      : 'Build clear, intelligent, and reproducible bioinformatics analyses with visual nodes, AI-assisted design, and containerized execution.',
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = lang === 'zh' ? copy.zh : copy.en;
  const docsHref = localPath(lang, '/docs');
  const quickStartHref = localPath(lang, '/docs/introduction/quick-start');
  const overviewHref = localPath(lang, '/docs/introduction/what-is-bioflow-ai');

  return (
    <main className="bioflow-home flex-1 overflow-hidden">
      <section className="bioflow-hero relative border-b border-fd-border/70">
        <div className="bioflow-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-28 xl:px-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-sm font-medium text-cyan-800 dark:text-cyan-300">
              <Sparkles className="size-4" aria-hidden="true" />
              {t.eyebrow}
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-fd-foreground sm:text-5xl lg:text-[3.65rem] lg:leading-[1.07]">
              {t.titleLead}{' '}
              <span className="bioflow-gradient-text">{t.titleAccent}</span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-fd-muted-foreground">
              {t.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={docsHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-fd-primary px-5 py-3 font-medium text-fd-primary-foreground shadow-lg shadow-cyan-950/10 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
              >
                {t.docs}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={quickStartHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-fd-border bg-fd-background/75 px-5 py-3 font-medium text-fd-foreground backdrop-blur transition hover:-translate-y-0.5 hover:bg-fd-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
              >
                <Play className="size-4 fill-current" aria-hidden="true" />
                {t.quickStart}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-fd-muted-foreground">
              {t.proof.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-500" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl lg:mx-0">
            <div className="bioflow-orb absolute -inset-16" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-2 shadow-[0_28px_90px_-32px_rgba(14,116,144,0.38)] ring-1 ring-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/80 dark:ring-white/10">
              <div className="flex items-center justify-between border-b border-slate-200/80 px-3 py-2.5 dark:border-white/10">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Network className="size-3.5" aria-hidden="true" />
                  {t.visualLabel}
                </div>
                <div className="w-10" aria-hidden="true" />
              </div>
              <div className="relative aspect-[2.07/1] overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900">
                <Image
                  src="/editor.jpeg"
                  alt={t.visualLabel}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5" />
              </div>
            </div>

            <div className="bioflow-float absolute -bottom-7 -left-3 hidden w-[17rem] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-slate-950/10 backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/90">
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-700 dark:text-cyan-300">
                <span className="grid size-7 place-items-center rounded-lg bg-cyan-500/10">
                  <Bot className="size-4" aria-hidden="true" />
                </span>
                {t.aiLabel}
              </div>
              <p className="mt-3 text-sm leading-5 text-slate-700 dark:text-slate-200">“{t.aiPrompt}”</p>
              <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">{t.aiPlaceholder}</p>
            </div>

            <div className="bioflow-float-delayed absolute -right-3 -top-7 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-slate-950/10 backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.visualState}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{t.visualMeta}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">{t.sectionEyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fd-foreground sm:text-4xl">{t.sectionTitle}</h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-fd-muted-foreground">{t.sectionDescription}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article
                key={feature.title}
                className="bioflow-feature-card group rounded-2xl border border-fd-border bg-fd-card p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/5"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 text-cyan-700 ring-1 ring-cyan-500/15 transition group-hover:scale-105 dark:text-cyan-300">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-fd-foreground">{feature.title}</h3>
                <p className="mt-3 leading-7 text-fd-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-fd-border/70 bg-fd-muted/30">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">{t.showcaseEyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fd-foreground sm:text-4xl">{t.showcaseTitle}</h2>
            <p className="mt-5 text-pretty text-lg leading-8 text-fd-muted-foreground">{t.showcaseDescription}</p>
          </div>

          <div className="mt-12 space-y-6">
            <article className="bioflow-product-shot overflow-hidden rounded-3xl border border-fd-border bg-fd-card shadow-xl shadow-cyan-950/5">
              <div className="relative aspect-[2.07/1] overflow-hidden border-b border-fd-border bg-white">
                <Image
                  src="/editor.jpeg"
                  alt={t.editorTitle}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-2 p-6 sm:grid-cols-[0.4fr_0.6fr] sm:items-start sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-fd-foreground">{t.editorTitle}</h3>
                <p className="leading-7 text-fd-muted-foreground">{t.editorDescription}</p>
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="bioflow-product-shot overflow-hidden rounded-3xl border border-fd-border bg-fd-card shadow-lg shadow-cyan-950/5">
                <div className="relative aspect-[2.07/1] overflow-hidden border-b border-fd-border bg-white">
                  <Image
                    src="/run_instance.jpeg"
                    alt={t.runTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-fd-foreground">{t.runTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{t.runDescription}</p>
                </div>
              </article>

              <article className="bioflow-product-shot overflow-hidden rounded-3xl border border-fd-border bg-fd-card shadow-lg shadow-cyan-950/5">
                <div className="relative aspect-[2.07/1] overflow-hidden border-b border-fd-border bg-white">
                  <Image
                    src="/monitor.jpeg"
                    alt={t.monitorTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-fd-foreground">{t.monitorTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{t.monitorDescription}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">{t.journeyEyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fd-foreground sm:text-4xl">{t.journeyTitle}</h2>
          </div>

          <ol className="relative grid gap-4 md:grid-cols-3">
            {t.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.number} className="relative rounded-2xl border border-fd-border bg-fd-background p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-widest text-cyan-700 dark:text-cyan-400">{step.number}</span>
                    <Icon className="size-5 text-fd-muted-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-semibold text-fd-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{step.description}</p>
                  {index < t.steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 rounded-full border border-fd-border bg-fd-background p-1 text-fd-muted-foreground md:block" aria-hidden="true" />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="bioflow-cta relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950 px-6 py-14 text-center text-white shadow-2xl shadow-cyan-950/10 sm:px-12 lg:py-20">
          <div className="bioflow-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <Boxes className="relative mx-auto size-8 text-cyan-300" aria-hidden="true" />
          <h2 className="relative mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t.finalTitle}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty leading-7 text-slate-300">{t.finalDescription}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={quickStartHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.finalPrimary}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={overviewHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Gauge className="size-4" aria-hidden="true" />
              {t.finalSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
