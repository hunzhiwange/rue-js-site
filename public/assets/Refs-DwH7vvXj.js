import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,et as c,l,lt as u,n as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,t as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=()=>{let{inputRef:x,focus:S,activeTab:C}=_(`useSetup:0:0`,()=>s(()=>{let e=_(`useRef:1:0`,()=>t());return{inputRef:e,focus:()=>{let t=e.current;console.info(t),t&&typeof t.focus==`function`&&t.focus()},activeTab:_(`ref:1:1`,()=>g(`code`))}}));return l(t=>{let s=e(),g=n(`rue:component:anchor`);return a(s,g),f(m(b,{children:l(()=>{let t=e(),s=c(`h1`,t);a(t,s),u(s,`text-5xl font-semibold mb-4 md:mb-4`),a(s,h(`Refs 基础`));let g=c(`div`,t);a(t,g),p(g,`role`,`tablist`),u(g,`tabs tabs-box`);let _=c(`button`,g);a(g,_),p(_,`role`,`tab`),r(()=>{u(_,`tab ${C.value===`preview`?`tab-active`:``}`)}),o(_,`click`,()=>{C.value=`preview`}),a(_,h(`效果`));let b=c(`button`,g);a(g,b),p(b,`role`,`tab`),r(()=>{u(b,`tab ${C.value===`code`?`tab-active`:``}`)}),o(b,`click`,()=>{C.value=`code`}),a(b,h(`代码`));let w=c(`div`,t);a(t,w),u(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=n(`rue:slot:anchor`);a(w,T),r(()=>{let t=C.value===`code`?l(()=>{let t=e(),o=c(`div`,t);a(t,o),u(o,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[520px]`);let s=c(`div`,o);a(o,s),u(s,`card-body p-0`);let l=n(`rue:component:anchor`);return a(s,l),r(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useRef } from '@rue-js/rue';

const Refs: FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current?.focus?.();
  };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          ref={inputRef}
          className="input input-bordered"
          placeholder="点击按钮自动聚焦"
        />
        <button className="btn btn-primary" onClick={focus}>
          聚焦
        </button>
      </div>
    </div>
  );
};

export default Refs;`});i(()=>f(e,s,l))}),t}):``;i(()=>f(t,w,T))}),a(w,h(` `));let E=n(`rue:slot:anchor`);return a(w,E),r(()=>{let t=C.value===`preview`?l(()=>{let t=e(),n=c(`div`,t);a(t,n),u(n,`card bg-base-100 shadow`);let r=c(`div`,n);a(n,r),u(r,`card-body grid gap-4`);let i=c(`input`,r);a(r,i);let s=v(i,()=>x);d(()=>{s()}),u(i,`input input-bordered`),p(i,`placeholder`,`点击按钮自动聚焦`);let l=c(`button`,r);return a(r,l),u(l,`btn btn-primary`),o(l,`click`,S),a(l,h(`聚焦`)),t}):``;i(()=>f(t,w,E))}),t})}),s,g),s})};export{x as default};