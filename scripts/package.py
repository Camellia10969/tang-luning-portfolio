"""Package the reviewed website and editable source, excluding all private inputs."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
ROOT=Path(__file__).resolve().parents[1]
out=ROOT/'deliverables'; out.mkdir(exist_ok=True)
with ZipFile(out/'Tang-Luning-Portfolio-V3.zip','w',ZIP_DEFLATED) as z:
    for folder in ['src','public','.github','data']:
        for p in (ROOT/folder).rglob('*'):
            if p.is_file(): z.write(p,Path('source')/p.relative_to(ROOT))
    for name in ['package.json','package-lock.json','astro.config.mjs','tsconfig.json','.gitignore','README.md','预览网页.cmd','scripts/audit.mjs']:
        p=ROOT/name
        if p.exists(): z.write(p,Path('source')/name)
    for p in (ROOT/'dist').rglob('*'):
        if p.is_file(): z.write(p,Path('site')/p.relative_to(ROOT/'dist'))
    for name in ['desktop-home.jpg','mobile-home.jpg','mobile-esg-visual.jpg','mobile-reasoning.jpg','static-audit.json']:
        p=ROOT/'qa'/name
        if p.exists(): z.write(p,Path('preview')/name)
    for name in ['FIGURE_AUDIT.md','PUBLICATION_CHECKLIST.md','QA_REPORT.md','PUBLISHING.md']:
        p=ROOT/'docs'/name
        if p.exists(): z.write(p,Path('notes')/name)
    z.writestr('使用说明.txt','唐露宁中文研究作品集 V3\n\nsource/：可编辑源码。安装依赖后运行 npm run build 与 npm run preview，或使用预览网页.cmd。\nsite/：按 GitHub Pages 子路径构建的静态成品，适合部署到 /tang-luning-portfolio/；本地预览请先使用源码重新构建。\npreview/：桌面和手机截图及静态检查。\n\n不包含原始简历、完整报告、原始论文PDF、提取全文、私人路径映射及许可数据库。\n公开网址与实际发布记录见源码 README 和 notes 中的发布说明。活动表单由用户提交。\n')
print(out/'Tang-Luning-Portfolio-V3.zip')
