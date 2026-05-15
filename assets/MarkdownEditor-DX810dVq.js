import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,Y as c,Z as l,_t as u,d,l as f,mt as p,ot as m,t as h,ut as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as v}from"./Code-D55WiaDx.js";import{t as y}from"./SidebarPlaygroundExample-Cpkm7O-2.js";import{t as b}from"./markdown-it-C6QFGsBL.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>m(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>m(`preview`))}}));return d(p=>{let m=t(),_=e(`rue:component:anchor`);return a(m,_),f(h(y,{children:d(()=>{let p=t(),m=r(`h1`,p);a(p,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,o(`Markdown 编辑器（移植自 Vue）`));let _=r(`div`,p);a(p,_),s(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),s(y,`role`,`tab`),u(()=>{n(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{w.value=`preview`}),a(y,o(`效果`));let S=r(`button`,_);a(_,S),s(S,`role`,`tab`),u(()=>{n(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{w.value=`code`}),a(S,o(`代码`));let T=r(`div`,p);a(p,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),u(()=>{let i=w.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});g(()=>f(e,s,c))}),i}):``;g(()=>f(i,T,E))}),a(T,o(` `));let D=e(`rue:slot:anchor`);return a(T,D),u(()=>{let e=w.value===`preview`?d(()=>{let e=t(),o=r(`div`,e);a(e,o),n(o,`card bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body grid gap-4`);let d=r(`div`,s);a(s,d),n(d,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let f=r(`textarea`,d);a(d,f),n(f,`textarea textarea-bordered rounded-none border-r`),u(()=>{l(f,b.value)}),i(f,`input`,C);let p=r(`div`,d);return a(d,p),n(p,`p-4 overflow-auto`),u(()=>{let e={__html:x.render(b.value)};c(p,e&&`__html`in e?e.__html:``)}),e}):``;g(()=>f(e,T,D))}),p})}),m,_),m})};export{C as default};