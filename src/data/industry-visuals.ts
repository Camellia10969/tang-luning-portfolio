export type IndustryVisual = {
  id: string;
  src: string;
  title: string;
  caption: string;
  source: string;
  locator: string;
  kind: 'original' | 'redrawn' | 'concept';
  width: number;
  height: number;
  notes?: string[];
  links?: { label: string; url: string }[];
  data?: { label: string; value: number }[];
  unit?: string;
};

/** Selected figures from the historical research decks. No original files or private paths are exported. */
export const industryVisuals: Record<string, IndustryVisual[]> = {
  methionine: [
    {
      id: 'methionine-chain', src: '/assets/industry/methionine-chain-original.png',
      title: '从能源化工到饲料与养殖', kind: 'original', width: 1172, height: 380,
      caption: '原PPT中的独立产业链图，保留原图。蛋氨酸位于合成类饲料添加剂环节。',
      source: '蛋氨酸行业深度报告；原页注明渝三峡A《安信证券股份有限公司关于公司发行股份购买资产暨关联交易之独立财务顾问报告》、长城证券产业金融研究院。',
      locator: '2026年6月参考资料，第4页。',
      notes: ['本页拆解历史参考资料，不将原图表述为本人独立原创。']
    },
    {
      id: 'methionine-output', src: '/assets/industry/methionine-output-report.svg',
      title: '产量与产能分开观察', kind: 'redrawn', width: 1200, height: 640,
      caption: '按原PPT图表的实际数据重绘，2018—2023年国内蛋氨酸产量。未使用原图中类别数量不一致的同比序列。',
      source: '蛋氨酸行业深度报告；原页注明 Datayes、钢联数据、百川盈孚、长城证券产业金融研究院。',
      locator: '第17页，国内蛋氨酸产量及其变化。',
      notes: ['保留历史报告口径，未完成全部年份的独立公开来源核验；不代表当前产量。'],
      unit: '万吨',
      data: [{label:'2018',value:21},{label:'2019',value:20},{label:'2020',value:27},{label:'2021',value:33.8},{label:'2022',value:38.7},{label:'2023',value:58.62}]
    }
  ],
  biodiesel: [
    {
      id: 'biodiesel-chain', src: '/assets/industry/biodiesel-chain-original.png',
      title: '从废弃油脂到生物柴油', kind: 'original', width: 1039, height: 554,
      caption: '原PPT中的独立产业链图，保留原图。用于对照原料、转化与终端用途；图中比例和物耗仅为原图口径。',
      source: '生物柴油行业深度报告；原页注明前瞻产业研究院、百川盈孚、长城证券产业金融研究院。',
      locator: '第6页，生物柴油产业链。',
      notes: ['原图未提供比例和物耗的具体测算时点，不将其用于新的产量或利润计算。']
    },
    {
      id: 'biodiesel-markets', src: '/assets/industry/biodiesel-consumption-2024-report.svg',
      title: '消费市场与政策暴露', kind: 'redrawn', width: 1200, height: 640,
      caption: '按原PPT实际数据重绘2024年生物柴油消费份额，按能量消耗计；各地区合计为100%。',
      source: '生物柴油行业深度报告；原页注明 Wind、BP、长城证券产业金融研究院。',
      locator: '第24页，2024年各国及地区生物柴油消费量占比。',
      notes: ['历史报告口径，未独立核验统计范围及原始数据库；不与质量或体积口径直接比较。'],
      unit: '%', data:[{label:'欧盟',value:28.3},{label:'美国',value:26.7},{label:'印尼',value:20.3},{label:'巴西',value:11.4},{label:'其他国家',value:13.3}]
    }
  ],
  'polyester-roadshow': [
    {
      id: 'polyester-demand', src: '/assets/industry/polyester-revenue-2019-2024-report.svg',
      title: '先核对期间，再判断需求', kind: 'redrawn', width: 1200, height: 640,
      caption: '按原路演数据重绘2019—2024年营业收入。公开核对发现原图2025年数字对应1—11月，2026年为一季度，均未并入完整年度比较。',
      source: '路演材料（长丝+蛋氨酸）第7页；原页未单独注明图表来源。2023、2024年数据分别与中国纺织工业联合会、中国服装协会引用的国家统计局规模以上服装行业数据核对。',
      locator: '2026年5月25日历史路演，第7页。',
      notes: ['保留原PPT的一位小数。图示年度水平不等于同口径增速，企业统计范围可能随年份变化。','2025原值10118.1亿元对应2025年1—11月，未改成全年数；2026Q1原值2425.7亿元未展示。'],
      links:[
        {label:'2023年行业运行简报',url:'https://www.cntac.org.cn/zixun/shuju/202402/t20240207_4343250.html'},
        {label:'2024年行业运行简报',url:'https://www.cnga.org.cn/cngahtml/xwzx/cyyj/20250220/834.html'},
        {label:'2025年1—11月期间核对',url:'https://www.cntac.org.cn/zixun/shuju/202601/t20260108_4400970.html'}
      ],
      unit:'亿元',data:[{label:'2019',value:16010.3},{label:'2020',value:13697.3},{label:'2021',value:14823.4},{label:'2022',value:14538.9},{label:'2023',value:12104.7},{label:'2024',value:12699.2}]
    },
    {
      id: 'polyester-chain', src: '/assets/industry/polyester-variable-chain.svg',
      title: '把成本传导与需求条件并列', kind: 'concept', width: 1200, height: 640,
      caption: '依据原路演重新组织的概念图：一条追踪原料与产品价差，另一条追踪订单、库存及开工条件。箭头不表示量化因果效应。',
      source: '依据路演材料（长丝+蛋氨酸）第2—7页的变量关系整理，网页重新绘制。',
      locator: '2026年5月25日历史路演，第2—7页。'
    }
  ]
};

export default industryVisuals;
