import{Cn as e,Ct as t,Ot as n,Tt as r,dt as i,ft as a,jt as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";import{t as b}from"./dist-e4C_zMaa.js";var x=e=>b(e).html;function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>l(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>l(`preview`))}}));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`Markdown 编辑器（移植自 Vue）`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{w.value=`preview`}),d(y,s(`效果`));let S=u(`button`,_);d(_,S),t(S,`role`,`tab`),f(()=>{r(S,`tab ${w.value===`code`?`tab-active`:``}`)}),c(S,`click`,()=>{w.value=`code`}),d(S,s(`代码`));let T=u(`div`,e);d(e,T),r(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);d(T,E),f(()=>{let e=w.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,T,E))}),d(T,s(` `));let D=i(`rue:slot:anchor`);return d(T,D),f(()=>{let e=w.value===`preview`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow`);let i=u(`div`,t);d(t,i),r(i,`card-body grid gap-4`);let s=u(`div`,i);d(i,s),r(s,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let l=u(`textarea`,s);d(s,l),r(l,`textarea textarea-bordered rounded-none border-r`),f(()=>{o(l,b.value)}),c(l,`input`,C);let p=u(`div`,s);return d(s,p),r(p,`p-4 overflow-auto`),f(()=>{let e={__html:x(b.value)};n(p,e&&`__html`in e?e.__html:``)}),e}):``;p(()=>h(e,T,D))}),e})}),l,_),l})};export{C as default};