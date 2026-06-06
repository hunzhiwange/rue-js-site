import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,it as l,kt as u,l as d,ot as f,q as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as v}from"./Code-CliOXHNE.js";import{t as y}from"./SidebarPlaygroundExample-DXnPmR3z.js";import{t as b}from"./markdown-it-r1vHBBxQ.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`ref:1:0`,()=>s(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>s(`preview`))}}));return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),d(m(y,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),h(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,p(`Markdown 编辑器（移植自 Vue）`));let _=i(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),a(y,`click`,()=>{w.value=`preview`}),r(y,p(`效果`));let S=i(`button`,_);r(_,S),e(S,`role`,`tab`),u(()=>{h(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),a(S,`click`,()=>{w.value=`code`}),r(S,p(`代码`));let T=i(`div`,t);r(t,T),h(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=o(`rue:slot:anchor`);r(T,E),u(()=>{let e=w.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=i(`div`,t);r(t,a),h(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});g(()=>d(e,a,s))}),e}):``;g(()=>d(e,T,E))}),r(T,p(` `));let D=o(`rue:slot:anchor`);return r(T,D),u(()=>{let e=w.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),h(t,`card bg-base-100 shadow`);let o=i(`div`,t);r(t,o),h(o,`card-body grid gap-4`);let s=i(`div`,o);r(o,s),h(s,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let c=i(`textarea`,s);r(s,c),h(c,`textarea textarea-bordered rounded-none border-r`),u(()=>{f(c,b.value)}),a(c,`input`,C);let d=i(`div`,s);return r(s,d),h(d,`p-4 overflow-auto`),u(()=>{let e={__html:x.render(b.value)};l(d,e&&`__html`in e?e.__html:``)}),e}):``;g(()=>d(e,T,D))}),t})}),s,_),s})};export{C as default};