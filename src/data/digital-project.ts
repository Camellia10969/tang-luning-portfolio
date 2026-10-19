import type { Project } from './projects';

/** Source: jointly authored statistics course paper, PDF pages 1–12.
 * These are reported paper results, not independently rerun estimates.
 * Full source and interpretation checks: docs/DIGITAL_FINANCE_SOURCE_AUDIT.md.
 */
export const digitalProject: Project = {
  slug: 'digital-finance',
  number: '10',
  title: '数字普惠金融，如何连接居民收入？',
  en: 'Access, usage & the limits of an estimate',
  category: '课程研究 × 面板分析',
  description: '以 31 省、13 年的省级面板为线索，分开考察金融覆盖、使用深度与数字化程度。',
  role: '双人统计学课程研究 · 面板分析与方法复盘',
  date: '样本期：2011 — 2023',
  status: '课程论文 · 已完成',
  tags: ['面板数据', '固定效应', '方法复盘'],
  question: '金融服务的覆盖、使用与数字化，是否都与居民收入呈现相同的关系？',
  takeaway: '论文中覆盖广度与使用深度为正，数字化程度为负；解释结果需要回到变量定义、模型设定和识别条件。',
  journey: [
    { title: '定义问题', body: '区分金融服务能否接入、是否使用，以及数字化程度。' },
    { title: '组织面板', body: '论文记录：国家统计局收入数据与北大数字普惠金融指数，31 省 × 13 年，共 403 个观测。' },
    { title: '建立比较', body: '对收入和指数取对数，使用省份与年份固定效应，标准误在省份层面聚类。' },
    { title: '拆解结果', body: '分别估计三个指数维度，并比较东、中、西部分组结果。' },
    { title: '复核解释', body: '将论文报告结果、机制假设和需要进一步复现的问题分别记录。' },
  ],
  methods: [
    '论文样本为 2011—2023 年的 31 个省级单位，共 403 个观测；来源记录见第 4 页。',
    '第 5 页式（1）设定省份与年份双向固定效应，报告省份层面的聚类稳健标准误。',
    '分维度回归分别替换核心解释变量；区域分组的观测数分别为 143、104、156。',
    '第 9 页报告替换为农村居民收入、收入变量 1% 缩尾、剔除四个直辖市三项检验；需配套代码与数据进一步复现。',
  ],
  findings: [
    '论文表 2 报告总指数弹性 0.141，标准误 0.036；这里保留为论文报告的条件关联。',
    '表 3 的覆盖广度、使用深度和数字化程度系数分别为 0.058、0.061、−0.033；不同维度方向并不一致。',
    '表 4 的东、中、西部系数分别为 0.084、0.166、0.163；中部结果未达论文采用的常规显著性水平，分组系数差异仍需正式检验。',
    '收入增长机制在文中作为理论解释提出，尚无直接机制检验；固定效应本身也不能排除反向因果。',
  ],
  contribution: [
    '与秦诗琴共同署名完成《统计学》课程论文。',
    '论文附录记录使用 AI 辅助数据整理、Stata 代码与初稿，并由作者审核；网页按该披露保留工具使用信息。',
    '本页梳理研究问题、样本、模型与结果解释；两位作者的具体任务分工未在论文中单列。',
  ],
  obstacles: [
    {
      title: '显著性可以替代效应比较吗？',
      problem: '覆盖广度的星号更多，但其系数 0.058 小于使用深度的 0.061；单独比较星号不能确定哪个维度作用更大。',
      resolution: '分别记录系数、标准误与模型；维度差异需要专门检验后再下判断。',
    },
    {
      title: '时间趋势检验提供了什么？',
      problem: '表 2 同时列出完整年份固定效应与共同年份线性趋势，两者存在共线性。',
      resolution: '把这项设定列为复现核对点；不将“加入趋势后不变”单独作为新的稳健性证据。',
    },
    {
      title: '从关联走向因果，还缺什么？',
      problem: '数字金融与收入可能相互影响；论文未提供外生冲击或工具变量识别。',
      resolution: '将现有结果解释为面板模型中的条件关联；机制与因果识别作为后续研究问题。',
    },
  ],
  sources: [
    { title: '数字普惠金融发展对居民人均可支配收入的影响', locator: '《统计学》双人课程作业，第 1、4—10 页', kind: '本人共同署名课程论文' },
    { title: '论文结果表 2—4', locator: '第 5—7 页；系数与标准误已逐表核对', kind: '论文报告结果' },
    { title: 'AI 辅助工具使用声明', locator: '论文第 12 页；具体个人分工未单列', kind: '作者使用声明' },
  ],
};

/** Safe for a chart explicitly captioned “论文报告系数，未独立复现”.
 * Separate regressions; coefficient differences are not significance tests.
 */
export const reportedDigitalCoefficients = [
  { label: '总指数', coefficient: 0.141, standardError: 0.036, source: '表 2，第 5 页' },
  { label: '覆盖广度', coefficient: 0.058, standardError: 0.015, source: '表 3，第 6—7 页' },
  { label: '使用深度', coefficient: 0.061, standardError: 0.029, source: '表 3，第 6—7 页' },
  { label: '数字化程度', coefficient: -0.033, standardError: 0.016, source: '表 3，第 6—7 页' },
] as const;
