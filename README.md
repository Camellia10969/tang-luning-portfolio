# 唐露宁 · Research × AI

面向 Kimi 活动和 AI 产品 / 研究方向日常实习的个人作品集。基于 Astro 的静态站点，以研究问题、个人贡献、可操作解释与来源说明呈现真实材料。

## 本地使用

需要 Node.js ≥ 22.22.0、npm ≥ 9.6.5（当前 Astro 7.4.0 的最低要求）。Windows PowerShell 可使用 `npm.cmd`。

```powershell
cd D:\WorkPlace\tang-luning-portfolio
npm.cmd install
npm.cmd run dev
```

打开 [本地网站](http://127.0.0.1:4321/)。正式构建和预览：

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run audit
npm.cmd run preview
```

`dist/` 是静态网站成品；`src/` 是可编辑源代码。`/profile/` 为履历摘要，按钮调用浏览器原生打印，可选择保存为 PDF。

## 内容与结构

- `src/data/projects.ts`：项目文案、贡献范围、来源和研究阶段。
- `src/components/`：研究地图、证据示意台、规格切换、研究图等交互。
- `src/pages/`：首页、项目详情、履历摘要、参考说明和 404。
- `public/assets/green/`：第七稿论文原图 1—5。
- `src/data/green-specs.json`：由真实 CSV 整理的六种规格；不要用演示数据替换。
- `docs/CONTENT_AUDIT.md`：版本冲突、指标口径和未完成项。
- `docs/PUBLISHING.md`：公开范围、GitHub Pages 部署与提交前核对。
- `qa/`：本地检查与桌面 / 移动截图，默认不进入 Git。

`content/private/` 存放本地材料提取文本；`content/provenance.json` 保存本地来源路径映射。二者均已忽略，不属于网站发布内容。请勿将整个工作目录直接设为静态网站根目录。

## 部署状态

公开源码仓库：[Camellia10969/tang-luning-portfolio](https://github.com/Camellia10969/tang-luning-portfolio)。用户已授权本轮公开上传和部署，活动表单由用户提交。工作流仅手动触发，网站使用 GitHub Pages 项目子路径；真实上线结果见发布记录。

网站地址：[唐露宁 · 中文研究作品集](https://camellia10969.github.io/tang-luning-portfolio/)。

工作流根据仓库所有者和名称自动设置 `SITE_URL` 与 `BASE_PATH`，无需密钥。详见 [发布说明](docs/PUBLISHING.md)。

## 设计参考

[Case](https://github.com/erlandv/case) 的案例叙事、[Distill](https://distill.pub/2020/communicating-with-interactive-articles/) 的交互解释、[Bruno Simon](https://github.com/brunosimon/folio-2025) 的探索体验与 [Linear](https://linear.app/) 的信息层级。本站基于实际研究内容独立实现，未复制上述项目代码。

未找到此前提及的 `Tang_Luning_Research_Portfolio.html`，本项目另建目录，未覆盖该文件。
