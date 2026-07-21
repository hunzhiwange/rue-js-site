import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m,wn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>e(()=>{let[e,t]=y(`useState:1:0`,()=>h(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>u(`code`))}}));return g(e=>{let u=a(),h=i(`rue:component:anchor`);return f(u,h),_(v(x,{children:g(()=>{let e=a(),u=d(`h1`,e);f(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`受控输入`));let h=d(`div`,e);f(e,h),t(h,`role`,`tablist`),r(h,`tabs tabs-box`);let y=d(`button`,h);f(h,y),t(y,`role`,`tab`),p(()=>{r(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),l(y,`click`,()=>{w.value=`preview`}),f(y,c(`效果`));let x=d(`button`,h);f(h,x),t(x,`role`,`tab`),p(()=>{r(x,`tab ${w.value===`code`?`tab-active`:``}`)}),l(x,`click`,()=>{w.value=`code`}),f(x,c(`代码`));let T=d(`div`,e);f(e,T),r(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);f(T,E),p(()=>{let e=w.value===`code`?g(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let n=d(`div`,t);f(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return f(n,o),p(()=>{let e=v(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

const ControlledInputs: FC = () => {
  const [text, setText] = useState('');
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <input
          className="input input-bordered"
          value={text.value}
          onInput={(e: any) => setText((e.target as HTMLInputElement).value)}
          placeholder="输入试试"
        />
        <div>当前：{text.value}</div>
      </div>
    </div>
  );
};

export default ControlledInputs;`});m(()=>_(e,n,o))}),e}):``;m(()=>_(e,T,E))}),f(T,c(` `));let D=i(`rue:slot:anchor`);return f(T,D),p(()=>{let e=w.value===`preview`?g(()=>{let e=a(),i=d(`div`,e);f(e,i),r(i,`card bg-base-100 shadow`);let u=d(`div`,i);f(i,u),r(u,`card-body grid gap-4`);let m=d(`input`,u);f(u,m),r(m,`input input-bordered`),p(()=>{s(m,S.value)}),l(m,`input`,e=>C(e.target.value)),t(m,`placeholder`,`输入试试`);let h=d(`div`,u);f(u,h),f(h,c(`当前：`));let g=o(h);return f(h,g),p(()=>{n(g,S.value)}),e}):``;m(()=>_(e,T,D))}),e})}),u,h),u})};export{S as default};