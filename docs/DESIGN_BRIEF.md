# AI 产品与研究作品集

## 目标与主动作
为 Kimi「NO GENRE 夜庙 Talk」及日常实习交流提供可快速理解、可现场讲解、可深入核验的研究作品。目标岗位为 AI 产品与研究。主动作是进入代表项目，次动作是操作示例、阅读贡献和邮件联系。

## 信息结构
首页：定位 → 三类代表项目 → 交互示意台 → 补充研究 → 实习/教育/工具 → 联系。项目页：问题 → 工作流 → 方法/证据 → 难点与处理 → 贡献 → 来源 → 下一项目。活动表单支持日常实习、产品/数据类、作品附件、个人网页 URL 及现场展示意愿；本次仅阅读，未填写或提交。

## 视觉与布局
暖白纸面、墨绿、少量棕色；中文宋体标题与清晰无衬线正文。首页左右分栏，右侧为可切换的概念图；代表项目使用一大两小的非等宽结构。交互只解释内容，动效尊重 reduce-motion。

## 组件与状态
Layout → Atlas / EvidenceLab / Project cards / About / Contact。
项目页 → Project header / ResearchJourney / MetricEvidence / SpecChart / ChainExplorer / EvidenceFigure / ObstacleResolution / Sources / Project navigation。
搜索覆盖结果与空状态，图片弹窗支持 Escape、焦点管理及横向缩放；导航支持移动端展开；邮件复制有失败回退。静态内容无伪加载状态。所有演示例句显著标明人工示意，无模型推断。

## 内容决策
采用 Astro 静态页面和少量 TypeScript：便于深层链接、快速首屏、GitHub Pages 部署，无 API key 依赖。既有组合网页未找到；新建独立目录，不覆盖原始文件。

## QA 与发布边界
核对来源、编译、类型、内链、桌面/手机、键盘、主题与敏感材料隔离。原券商报告不进入 public。源路径和全文抽取保持本地。Git push 与外部发布遵守用户 AGENTS.md，待明确授权；当前交付本地预览与静态 build。
