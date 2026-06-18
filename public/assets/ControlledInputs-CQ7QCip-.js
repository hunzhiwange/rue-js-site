import{$ as e,Ht as t,J as n,Jt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,ft as d,l as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>h(()=>{let[e,t]=y(`useState:1:0`,()=>r(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>i(`code`))}}));return f(r=>{let i=c(),h=o(`rue:component:anchor`);return n(i,h),g(v(x,{children:f(()=>{let r=c(),i=a(`h1`,r);n(r,i),_(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,e(`受控输入`));let h=a(`div`,r);n(r,h),l(h,`role`,`tablist`),_(h,`tabs tabs-box`);let y=a(`button`,h);n(h,y),l(y,`role`,`tab`),s(()=>{_(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),m(y,`click`,()=>{w.value=`preview`}),n(y,e(`效果`));let x=a(`button`,h);n(h,x),l(x,`role`,`tab`),s(()=>{_(x,`tab ${w.value===`code`?`tab-active`:``}`)}),m(x,`click`,()=>{w.value=`code`}),n(x,e(`代码`));let T=a(`div`,r);n(r,T),_(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=o(`rue:slot:anchor`);n(T,E),s(()=>{let e=w.value===`code`?f(()=>{let e=c(),r=a(`div`,e);n(e,r),_(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let i=a(`div`,r);n(r,i),_(i,`card-body p-0`);let l=o(`rue:component:anchor`);return n(i,l),s(()=>{let e=v(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});t(()=>g(e,i,l))}),e}):``;t(()=>g(e,T,E))}),n(T,e(` `));let D=o(`rue:slot:anchor`);return n(T,D),s(()=>{let r=w.value===`preview`?f(()=>{let t=c(),r=a(`div`,t);n(t,r),_(r,`card bg-base-100 shadow`);let i=a(`div`,r);n(r,i),_(i,`card-body grid gap-4`);let o=a(`input`,i);n(i,o),_(o,`input input-bordered`),s(()=>{d(o,S.value)}),m(o,`input`,e=>C(e.target.value)),l(o,`placeholder`,`输入试试`);let f=a(`div`,i);n(i,f),n(f,e(`当前：`));let h=u(f);return n(f,h),s(()=>{p(h,S.value)}),t}):``;t(()=>g(r,T,D))}),r})}),i,h),i})};export{S as default};