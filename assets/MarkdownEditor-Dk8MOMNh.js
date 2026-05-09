import{A as e,F as t,H as n,I as r,J as i,K as a,N as o,P as s,W as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";import{t as y}from"./markdown-it-CWMZn7Jz.js";var b=new y({html:!0,linkify:!0,breaks:!0});function x(e,t=100){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}var S=()=>{let{input:y,update:S,activeTab:C}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`ref:1:0`,()=>f(`# hello`));return{input:e,update:x(t=>{e.value=t.target.value},100),activeTab:g(`ref:1:1`,()=>f(`preview`))}}));return m(()=>{let f=s(),h=o(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=s(),h=t(`h1`);u(f,h),c(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`Markdown 编辑器（移植自 Vue）`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),c(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{c(v,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{C.value=`preview`}),u(v,r(`效果`));let x=t(`button`);u(g,x),n(x,`role`,`tab`),d(()=>{c(x,String(`tab ${C.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{C.value=`code`}),u(x,r(`代码`));let w=t(`div`);u(f,w),c(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=o(`rue:slot:anchor`);u(w,T),d(()=>{l(C.value===`code`?m(()=>{let e=s(),n=t(`div`);u(e,n),c(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=t(`div`);u(n,r),c(r,`card-body p-0`);let i=o(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';
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

export default MarkdownEditor;`}),r,i)}),e}):``,w,T)}),u(w,r(` `));let E=o(`rue:slot:anchor`);return u(w,E),d(()=>{l(C.value===`preview`?m(()=>{let n=s(),r=t(`div`);u(n,r),c(r,`card bg-base-100 shadow`);let o=t(`div`);u(r,o),c(o,`card-body grid gap-4`);let l=t(`div`);u(o,l),c(l,`grid grid-cols-2 gap-0 h-[360px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-black/5`);let f=t(`textarea`);u(l,f),c(f,`textarea textarea-bordered rounded-none border-r`),d(()=>{i(f,y.value)}),e(f,`input`,S);let p=t(`div`);return u(l,p),c(p,`p-4 overflow-auto`),d(()=>{let e={__html:b.render(y.value)};a(p,e&&`__html`in e?e.__html:``)}),n}):``,w,E)}),f})}),f,h),f})};export{S as default};