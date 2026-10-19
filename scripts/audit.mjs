import { readdir, readFile, stat, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(), dist=path.join(root,'dist');
async function walk(dir){const out=[];for(const n of await readdir(dir)){const p=path.join(dir,n);(await stat(p)).isDirectory()?out.push(...await walk(p)):out.push(p);}return out;}
const files=await walk(dist), htmls=files.filter(p=>p.endsWith('.html')), errors=[];
const exists=new Set(files.map(p=>path.resolve(p)));
const base=(process.env.BASE_PATH||'/').replace(/\/$/,'');
const sensitive=[/SOURCE_REQUIRED/,/AUTHOR_CONFIRMATION_REQUIRED/,/[CD]:[\\/]/,/wxid_[A-Za-z0-9_]+/,/(?<!\d)1[3-9]\d{9}(?!\d)/,/\bS\d{12,15}\b/,/DASHSCOPE_API_KEY/];
let checked=0;
for(const file of files){
  if(/\.(docx?|pptx?|xlsx?|csv|parquet|pdf|env)$/i.test(file))errors.push(`Restricted file in build: ${path.relative(dist,file)}`);
  if(!/\.(html|js|css|json|svg)$/.test(file))continue;
  const text=await readFile(file,'utf8');
  for(const re of sensitive)if(re.test(text))errors.push(`Private/placeholder pattern ${re} in ${path.relative(dist,file)}`);
  if(!file.endsWith('.html'))continue;
  if(!/<html[^>]+lang="zh-CN"/.test(text))errors.push(`Missing document language: ${file}`);
  const ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  if(new Set(ids).size!==ids.length)errors.push(`Duplicate DOM ids: ${file}`);
  if((text.match(/<h1\b/g)||[]).length!==1)errors.push(`Expected one H1: ${file}`);
  for(const [,raw] of text.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    if(/^(?:https?:|mailto:|data:|tel:)/.test(raw))continue;
    const [url,hash]=raw.split('#');let target;
    if(!url)target=file;
    else if(url.startsWith('/'))target=path.join(dist,decodeURIComponent(base&&url.startsWith(base+'/')?url.slice(base.length):url));
    else target=path.resolve(path.dirname(file),decodeURIComponent(url.split('?')[0]));
    if(url.endsWith('/'))target=path.join(target,'index.html');
    if(!exists.has(path.resolve(target))){errors.push(`Broken internal resource: ${path.relative(dist,file)} -> ${raw}`);continue;}
    if(hash&&target.endsWith('.html')){const content=target===file?text:await readFile(target,'utf8');if(!content.includes(`id="${decodeURIComponent(hash)}"`))errors.push(`Missing anchor: ${raw}`);}
    checked++;
  }
}
const report={status:errors.length?'FAIL':'PASS',htmlPages:htmls.length,totalFiles:files.length,internalResourcesChecked:checked,restrictedFiles:0,errors};
await mkdir(path.join(root,'qa'),{recursive:true});await writeFile(path.join(root,'qa/static-audit.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
