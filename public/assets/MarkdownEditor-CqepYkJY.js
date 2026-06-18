import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,ft as l,l as u,q as d,qt as f,s as p,st as m,t as h,ut as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";import{t as b}from"./markdown-it-Cd9HuwxL.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`ref:1:0`,()=>r(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>r(`preview`))}}));return u(r=>{let f=s(),_=a(`rue:component:anchor`);return n(f,_),p(h(y,{children:u(()=>{let r=s(),f=i(`h1`,r);n(r,f),m(f,`text-5xl font-semibold mb-4 md:mb-4`),n(f,e(`Markdown 编辑器（移植自 Vue）`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),m(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{m(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),d(y,`click`,()=>{w.value=`preview`}),n(y,e(`效果`));let S=i(`button`,_);n(_,S),c(S,`role`,`tab`),o(()=>{m(S,`tab ${w.value===`code`?`tab-active`:``}`)}),d(S,`click`,()=>{w.value=`code`}),n(S,e(`代码`));let T=i(`div`,r);n(r,T),m(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);n(T,E),o(()=>{let e=w.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),m(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=i(`div`,r);n(r,c),m(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});t(()=>p(e,c,l))}),e}):``;t(()=>p(e,T,E))}),n(T,e(` `));let D=a(`rue:slot:anchor`);return n(T,D),o(()=>{let e=w.value===`preview`?u(()=>{let e=s(),t=i(`div`,e);n(e,t),m(t,`card bg-base-100 shadow`);let r=i(`div`,t);n(t,r),m(r,`card-body grid gap-4`);let a=i(`div`,r);n(r,a),m(a,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let c=i(`textarea`,a);n(a,c),m(c,`textarea textarea-bordered rounded-none border-r`),o(()=>{l(c,b.value)}),d(c,`input`,C);let u=i(`div`,a);return n(a,u),m(u,`p-4 overflow-auto`),o(()=>{let e={__html:x.render(b.value)};g(u,e&&`__html`in e?e.__html:``)}),e}):``;t(()=>p(e,T,D))}),r})}),f,_),f})};export{C as default};