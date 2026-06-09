import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,dt as l,et as u,l as d,ot as f,pt as p,qt as m,s as h,t as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";import{t as b}from"./markdown-it-CCbN7ebJ.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`ref:1:0`,()=>i(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>i(`preview`))}}));return d(i=>{let m=r(),_=s(`rue:component:anchor`);return o(m,_),h(g(y,{children:d(()=>{let i=r(),m=e(`h1`,i);o(i,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,u(`Markdown 编辑器（移植自 Vue）`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{w.value=`preview`}),o(y,u(`效果`));let S=e(`button`,_);o(_,S),f(S,`role`,`tab`),a(()=>{c(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{w.value=`code`}),o(S,u(`代码`));let T=e(`div`,i);o(i,T),c(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);o(T,E),a(()=>{let n=w.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});t(()=>h(e,l,u))}),n}):``;t(()=>h(n,T,E))}),o(T,u(` `));let D=s(`rue:slot:anchor`);return o(T,D),a(()=>{let i=w.value===`preview`?d(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-4`);let u=e(`div`,s);o(s,u),c(u,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let d=e(`textarea`,u);o(u,d),c(d,`textarea textarea-bordered rounded-none border-r`),a(()=>{p(d,b.value)}),n(d,`input`,C);let f=e(`div`,u);return o(u,f),c(f,`p-4 overflow-auto`),a(()=>{let e={__html:x.render(b.value)};l(f,e&&`__html`in e?e.__html:``)}),t}):``;t(()=>h(i,T,D))}),i})}),m,_),m})};export{C as default};