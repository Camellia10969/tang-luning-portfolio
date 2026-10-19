export type MixueVisual = {
  id: string; src: string; title: string; alt: string; caption: string;
  source: string; sourcePage: string; kind: '原报告局部图' | '依据原报告重绘';
  width: number; height: number;
};

export const mixueVisuals: MixueVisual[] = [
  {
    id: 'strategy-esg',
    src: 'assets/mixue/strategy-esg-original.png',
    title: '三个战略，怎样与 ESG 相互连接？',
    alt: '原报告图三-1：全球供应链优化、本土化运营深耕、高质平价品牌战略围绕ESG协同机制形成双向分析框架。',
    caption: '保留原报告的分析框架：品牌、本土运营和供应链三条线，分别拆到环境、社会与治理问题。双向箭头表达报告的机制解释。',
    source: '案例报告第三章，图三-1“蜜雪冰城商业战略与ESG的双向协同机制”',
    sourcePage: '原 DOCX 图目录标注第 23 页',
    kind: '原报告局部图', width: 1479, height: 782,
  },
  {
    id: 'assessment-method',
    src: 'assets/mixue/assessment-method.svg',
    title: '从公开披露，到可解释的议题判断',
    alt: '方法示意：定位公开披露依据，拆解E/S/G九项议题，按四项标准综合形成1至5分量表，再解释差异。',
    caption: '依据原文方法说明重绘：以 2024 年 ESG 报告等材料为评分依据，自建九议题、五分制量表；评分与外部机构评级分别理解。',
    source: '案例报告第二章“ESG评估框架与数据来源说明”及表二-3',
    sourcePage: '原 DOCX 目录对应第 14—16 页',
    kind: '依据原报告重绘', width: 1200, height: 640,
  },
  {
    id: 'supply-chain',
    src: 'assets/mixue/supply-chain-logic.svg',
    title: '将成本、品质与责任放回同一条链',
    alt: '供应链分析示意：原料、生产、物流和管理四端，依次对应采购价格、资源消耗、库存时效和可追溯性等追踪变量。',
    caption: '将原图四端框架重绘为可追踪的变量链：采购、生产、配送、管理反馈。图中不沿用尚未独立核对的预测准确率或降本数字。',
    source: '案例报告第三章，图三-4“蜜雪冰城全球供应链四维战略框架图”及相邻正文',
    sourcePage: '原 DOCX 图目录标注第 33 页',
    kind: '依据原报告重绘', width: 1200, height: 640,
  },
];

export const mixueLogicSteps = [
  {
    id: 'question', label: '01 / 问题', title: '低价之外，什么支撑海外经营？',
    body: '将出海竞争力拆成品牌定位、本土运营和供应链三个问题，追踪各自与环境、社会、治理的联系。',
    evidence: '原图三-1呈现整体机制框架。',
    source: '第三章图三-1，DOCX 图目录标注第23页',
    visualId: 'strategy-esg',
  },
  {
    id: 'measure', label: '02 / 测量', title: '把 ESG 叙述拆成九个议题',
    body: '原报告选取九项茶饮行业相关议题，以管理目标、披露完整性、措施实质性与行业实践差距为依据，综合形成1—5分判断。',
    evidence: '依据为公司2024年ESG报告与公开风险评论；属于案例自建量表。',
    source: '第二章“ESG评估框架与数据来源说明”，DOCX 目录对应第14—16页',
    visualId: 'assessment-method',
  },
  {
    id: 'explain', label: '03 / 解释', title: '让评分回到真实的业务环节',
    body: '以供应链为例，分别追踪采购、生产、物流和管理环节，连接成本、品质、时效、资源消耗与责任要求。',
    evidence: '原图三-4将供应链拆成四端；网页将其重绘为变量框架。',
    source: '第三章图三-4，DOCX 图目录标注第33页',
    visualId: 'supply-chain',
  },
  {
    id: 'review', label: '04 / 复核', title: '把机制判断与效果证据分开',
    body: '综合评分帮助定位强弱，财务、经营与社媒材料补充案例背景。它们尚不足以单独识别ESG造成的经营改善。',
    evidence: '区分报告采用的事实、预测和作者解释；历史预测保留所属时点。',
    source: '第二章量化分析与第三章机制分析；网页证据整理',
    visualId: 'strategy-esg',
  },
] as const;

export const mixueSourceNote = '已读取同题原 DOCX；本次未取得用户提及的 PDF 版。页码依据原 DOCX 目录标注，具体排版可能随软件变化。';
