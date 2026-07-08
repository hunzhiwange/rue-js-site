import{Q as e,Vt as t,Xt as n,Z as r,dt as i,gt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h,yt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-BoXKy3gJ.js";import{r as y}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";import{n as b}from"./dist-mg-ZehGS.js";var x=e=>b(e).html;function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>u(()=>{let e=_(`ref:1:0`,()=>n(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>n(`preview`))}}));return s(n=>{let u=c(),_=h(`rue:component:anchor`);return e(u,_),l(p(y,{children:s(()=>{let n=c(),u=f(`h1`,n);e(n,u),d(u,`text-5xl font-semibold mb-4 md:mb-4`),e(u,o(`Markdown 编辑器（移植自 Vue）`));let _=f(`div`,n);e(n,_),i(_,`role`,`tablist`),d(_,`tabs tabs-box`);let y=f(`button`,_);e(_,y),i(y,`role`,`tab`),t(()=>{d(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{w.value=`preview`}),e(y,o(`效果`));let S=f(`button`,_);e(_,S),i(S,`role`,`tab`),t(()=>{d(S,`tab ${w.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{w.value=`code`}),e(S,o(`代码`));let T=f(`div`,n);e(n,T),d(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=h(`rue:slot:anchor`);e(T,E),t(()=>{let n=w.value===`code`?s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=f(`div`,r);e(r,i),d(i,`card-body p-0`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
import { markdownToHtml } from 'satteri';

const renderMarkdown = (source: string) => markdownToHtml(source).html;

function debounce<T extends (...args: any[]) => void>(fn: T, wait = 100) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), wait) as unknown as number;
  };
}

const MarkdownEditor: FC = () => {
  const input = ref<string>('# hello');
  const update = debounce((e: any) => { input.value = (e.target as HTMLTextAreaElement).value; }, 100);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5">
          <textarea
            className="textarea textarea-bordered rounded-none border-r"
            value={input.value}
            onInput={update}
          />
          <div
            className="p-4 overflow-auto"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(input.value) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;`});m(()=>l(e,i,a))}),n}):``;m(()=>l(n,T,E))}),e(T,o(` `));let D=h(`rue:slot:anchor`);return e(T,D),t(()=>{let n=w.value===`preview`?s(()=>{let n=c(),i=f(`div`,n);e(n,i),d(i,`card bg-base-100 shadow`);let o=f(`div`,i);e(i,o),d(o,`card-body grid gap-4`);let s=f(`div`,o);e(o,s),d(s,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let l=f(`textarea`,s);e(s,l),d(l,`textarea textarea-bordered rounded-none border-r`),t(()=>{g(l,b.value)}),r(l,`input`,C);let u=f(`div`,s);return e(s,u),d(u,`p-4 overflow-auto`),t(()=>{let e={__html:x(b.value)};a(u,e&&`__html`in e?e.__html:``)}),n}):``;m(()=>l(n,T,D))}),n})}),u,_),u})};export{C as default};