import{F as e,G as t,I as n,J as r,L as i,M as a,P as o,U as s,X as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";import{t as b}from"./markdown-it-Ovliqm41.js";var x=new b({html:!0,linkify:!0,breaks:!0});function S(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var C=()=>{let{input:b,update:C,activeTab:w}=_(`useSetup:0:0`,()=>l(()=>{let e=_(`ref:1:0`,()=>p(`# hello`));return{input:e,update:S(t=>{e.value=t.target.value},100),activeTab:_(`ref:1:1`,()=>p(`preview`))}}));return g(()=>{let l=e(),p=o(`rue:component:anchor`);return a(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);a(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,i(`Markdown 编辑器（移植自 Vue）`));let _=n(`div`);a(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);a(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{w.value=`preview`}),a(y,i(`效果`));let S=n(`button`);a(_,S),s(S,`role`,`tab`),u(()=>{t(S,String(`tab ${w.value===`code`?`tab-active`:``}`))}),f(S,`click`,()=>{w.value=`code`}),a(S,i(`代码`));let T=n(`div`);a(l,T),t(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=o(`rue:slot:anchor`);a(T,E),u(()=>{let r=w.value===`code`?g(()=>{let r=e(),i=n(`div`);a(r,i),t(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=n(`div`);a(i,s),t(s,`card-body p-0`);let c=o(`rue:component:anchor`);return a(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,T,E))}),a(T,i(` `));let D=o(`rue:slot:anchor`);return a(T,D),u(()=>{let i=w.value===`preview`?g(()=>{let i=e(),o=n(`div`);a(i,o),t(o,`card bg-base-100 shadow`);let s=n(`div`);a(o,s),t(s,`card-body grid gap-4`);let l=n(`div`);a(s,l),t(l,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let d=n(`textarea`);a(l,d),t(d,`textarea textarea-bordered rounded-none border-r`),u(()=>{c(d,b.value)}),f(d,`input`,C);let p=n(`div`);return a(l,p),t(p,`p-4 overflow-auto`),u(()=>{let e={__html:x.render(b.value)};r(p,e&&`__html`in e?e.__html:``)}),i}):``;m(()=>d(i,T,D))}),l})}),l,p),l})};export{C as default};