import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,dt as d,gt as f,ht as p,l as m,st as h,t as g,vt as _,z as v}from"./vapor-runtime-BuwLbCGk.js";import{a as y}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as b}from"./Code-DQxnq0in.js";import{t as x}from"./SidebarPlaygroundExample-BwOo72z2.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>p(()=>{let[e,t]=y(`useState:1:0`,()=>f(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>h(`code`))}}));return u(f=>{let p=t(),h=e(`rue:component:anchor`);return a(p,h),m(g(x,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`受控输入`));let h=r(`div`,f);a(f,h),c(h,`role`,`tablist`),n(h,`tabs tabs-box`);let y=r(`button`,h);a(h,y),c(y,`role`,`tab`),_(()=>{n(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{w.value=`preview`}),a(y,s(`效果`));let x=r(`button`,h);a(h,x),c(x,`role`,`tab`),_(()=>{n(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(x,`click`,()=>{w.value=`code`}),a(x,s(`代码`));let T=r(`div`,f);a(f,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),_(()=>{let i=w.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),_(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});d(()=>m(e,s,c))}),i}):``;d(()=>m(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),_(()=>{let e=w.value===`preview`?u(()=>{let e=t(),u=r(`div`,e);a(e,u),n(u,`card bg-base-100 shadow`);let d=r(`div`,u);a(u,d),n(d,`card-body grid gap-4`);let f=r(`input`,d);a(d,f),n(f,`input input-bordered`),_(()=>{l(f,S.value)}),i(f,`input`,e=>C(e.target.value)),c(f,`placeholder`,`输入试试`);let p=r(`div`,d);a(d,p),a(p,s(`当前：`));let m=v(p);return a(p,m),_(()=>{o(m,S.value)}),e}):``;d(()=>m(e,T,D))}),f})}),p,h),p})};export{S as default};