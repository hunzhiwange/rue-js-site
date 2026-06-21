import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,l as c,lt as l,mt as u,nt as d,o as f,rt as p,t as m,tt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";import{t as b}from"./markdown-it-CnXmgGnJ.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>s(()=>{let e=_(`ref:1:0`,()=>t(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>t(`preview`))}}));return c(t=>{let s=h(),_=o(`rue:component:anchor`);return n(s,_),f(m(y,{children:c(()=>{let t=h(),s=d(`h1`,t);n(t,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,p(`Markdown 编辑器（移植自 Vue）`));let _=d(`div`,t);n(t,_),l(_,`role`,`tablist`),a(_,`tabs tabs-box`);let y=d(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{a(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{w.value=`preview`}),n(y,p(`效果`));let S=d(`button`,_);n(_,S),l(S,`role`,`tab`),g(()=>{a(S,`tab ${w.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{w.value=`code`}),n(S,p(`代码`));let T=d(`div`,t);n(t,T),a(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=o(`rue:slot:anchor`);n(T,E),g(()=>{let t=w.value===`code`?c(()=>{let t=h(),r=d(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=d(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),g(()=>{let t=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true, linkify: true, breaks: true });

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
            dangerouslySetInnerHTML={{ __html: md.render(input.value) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;`});e(()=>f(t,i,s))}),t}):``;e(()=>f(t,T,E))}),n(T,p(` `));let D=o(`rue:slot:anchor`);return n(T,D),g(()=>{let t=w.value===`preview`?c(()=>{let e=h(),t=d(`div`,e);n(e,t),a(t,`card bg-base-100 shadow`);let o=d(`div`,t);n(t,o),a(o,`card-body grid gap-4`);let s=d(`div`,o);n(o,s),a(s,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let c=d(`textarea`,s);n(s,c),a(c,`textarea textarea-bordered rounded-none border-r`),g(()=>{i(c,b.value)}),r(c,`input`,C);let l=d(`div`,s);return n(s,l),a(l,`p-4 overflow-auto`),g(()=>{let e={__html:x.render(b.value)};u(l,e&&`__html`in e?e.__html:``)}),e}):``;e(()=>f(t,T,D))}),t})}),s,_),s})};export{C as default};