import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,_t as l,d as u,kt as d,l as f,ot as p,q as m,st as h,t as g,tt as _,xt as v}from"./vapor-runtime-BAZOdMd8.js";import{a as y}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as b}from"./Code-DY4Ua5uc.js";import{t as x}from"./SidebarPlaygroundExample-B8LFNSBu.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>n(()=>{let[e,n]=y(`useState:1:0`,()=>t(``));return{text:e,setText:n,activeTab:y(`ref:1:1`,()=>l(`code`))}}));return u(t=>{let n=r(),l=c(`rue:component:anchor`);return i(n,l),f(g(x,{children:u(()=>{let t=r(),n=o(`h1`,t);i(t,n),_(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,m(`受控输入`));let l=o(`div`,t);i(t,l),e(l,`role`,`tablist`),_(l,`tabs tabs-box`);let y=o(`button`,l);i(l,y),e(y,`role`,`tab`),d(()=>{_(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),s(y,`click`,()=>{w.value=`preview`}),i(y,m(`效果`));let x=o(`button`,l);i(l,x),e(x,`role`,`tab`),d(()=>{_(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),s(x,`click`,()=>{w.value=`code`}),i(x,m(`代码`));let T=o(`div`,t);i(t,T),_(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);i(T,E),d(()=>{let e=w.value===`code`?u(()=>{let e=r(),t=o(`div`,e);i(e,t),_(t,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let n=o(`div`,t);i(t,n),_(n,`card-body p-0`);let a=c(`rue:component:anchor`);return i(n,a),d(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});v(()=>f(e,n,a))}),e}):``;v(()=>f(e,T,E))}),i(T,m(` `));let D=c(`rue:slot:anchor`);return i(T,D),d(()=>{let t=w.value===`preview`?u(()=>{let t=r(),n=o(`div`,t);i(t,n),_(n,`card bg-base-100 shadow`);let c=o(`div`,n);i(n,c),_(c,`card-body grid gap-4`);let l=o(`input`,c);i(c,l),_(l,`input input-bordered`),d(()=>{p(l,S.value)}),s(l,`input`,e=>C(e.target.value)),e(l,`placeholder`,`输入试试`);let u=o(`div`,c);i(c,u),i(u,m(`当前：`));let f=a(u);return i(u,f),d(()=>{h(f,S.value)}),t}):``;v(()=>f(t,T,D))}),t})}),n,l),n})};export{S as default};