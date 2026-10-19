# 发布与维护

仓库为 [Camellia10969/tang-luning-portfolio](https://github.com/Camellia10969/tang-luning-portfolio)，主分支 `main`。用户已明确授权本轮公开上传和发布。活动报名表仍由用户提交。

## 自动构建

仓库 Pages 构建方式为 GitHub Actions。现有工作流仅手动触发，按仓库信息计算网站域名和子路径，依次安装依赖、类型检查、静态构建、资源审计，再部署 `dist/`。无需添加令牌或环境密钥。真实公开网址以 Actions 部署结果为准。

本地模拟路径时设置 `SITE_URL=https://camellia10969.github.io`、`BASE_PATH=/tang-luning-portfolio/`，依次运行 `npm run check`、`npm run build`、`npm run audit` 和 `npm run preview`。

## 上传范围

公开源码只包括网页、组件、图表配置、审核过的素材及安全制作文档。`content/`、私有来源审计、交付 ZIP、缓存、依赖与截图被忽略。不要上传整个工作目录。

五张绿色金融论文图、C3/C4 分组图和用户指定的行业、蜜雪案例局部图保留资料归属。真实数据重绘与生成方法图分别标明；完整报告、私人源路径、原始简历和许可数据库不上传。行业历史数据注明口径及公开核验范围。

## 后续维护

每次实质改动后运行必要检查，发布后访问首页与受影响的深层页面。依照工作区规范，未经该次任务授权，不自动执行后续推送或重新发布。

活动表单：[Kimi 活动报名](https://moonshot.feishu.cn/share/base/form/shrcnRAC4c3Xjlx6khcw2uSgTwh)。只在公开网址实际可访问后，将其用于报名材料。
