import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,pt as h,qt as g,t as _,tt as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y}from"./vapor-helpers-vapor-DkadWylb.js";import{t as b}from"./Code-B_4lzH85.js";import{t as x}from"./SidebarPlaygroundExample-CtM-WHq_.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>n(()=>{let[e,t]=y(`useState:1:0`,()=>g(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>r(`code`))}}));return u(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),f(_(x,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`受控输入`));let g=e(`div`,n);o(n,g),m(g,`role`,`tablist`),l(g,`tabs tabs-box`);let y=e(`button`,g);o(g,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{w.value=`preview`}),o(y,d(`效果`));let x=e(`button`,g);o(g,x),m(x,`role`,`tab`),s(()=>{l(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{w.value=`code`}),o(x,d(`代码`));let T=e(`div`,n);o(n,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);o(T,E),s(()=>{let t=w.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,T,E))}),o(T,d(` `));let D=c(`rue:slot:anchor`);return o(T,D),s(()=>{let n=w.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-4`);let c=e(`input`,a);o(a,c),l(c,`input input-bordered`),s(()=>{h(c,S.value)}),t(c,`input`,e=>C(e.target.value)),m(c,`placeholder`,`输入试试`);let u=e(`div`,a);o(a,u),o(u,d(`当前：`));let f=v(u);return o(u,f),s(()=>{p(f,S.value)}),n}):``;a(()=>f(n,T,D))}),n})}),r,g),r})};export{S as default};