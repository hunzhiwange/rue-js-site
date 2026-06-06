import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,it as l,l as u,nt as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";import{t as b}from"./markdown-it-W76aLzgK.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`ref:1:0`,()=>c(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>c(`preview`))}}));return u(c=>{let m=a(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:u(()=>{let c=a(),m=o(`h1`,c);t(c,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`Markdown 编辑器（移植自 Vue）`));let _=o(`div`,c);t(c,_),s(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=o(`button`,_);t(_,y),s(y,`role`,`tab`),n(()=>{e(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{w.value=`preview`}),t(y,r(`效果`));let S=o(`button`,_);t(_,S),s(S,`role`,`tab`),n(()=>{e(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),g(S,`click`,()=>{w.value=`code`}),t(S,r(`代码`));let T=o(`div`,c);t(c,T),e(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);t(T,E),n(()=>{let r=w.value===`code`?u(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,T,E))}),t(T,r(` `));let D=i(`rue:slot:anchor`);return t(T,D),n(()=>{let r=w.value===`preview`?u(()=>{let r=a(),i=o(`div`,r);t(r,i),e(i,`card bg-base-100 shadow`);let s=o(`div`,i);t(i,s),e(s,`card-body grid gap-4`);let c=o(`div`,s);t(s,c),e(c,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let u=o(`textarea`,c);t(c,u),e(u,`textarea textarea-bordered rounded-none border-r`),n(()=>{l(u,b.value)}),g(u,`input`,C);let f=o(`div`,c);return t(c,f),e(f,`p-4 overflow-auto`),n(()=>{let e={__html:x.render(b.value)};d(f,e&&`__html`in e?e.__html:``)}),r}):``;h(()=>f(r,T,D))}),c})}),m,_),m})};export{C as default};