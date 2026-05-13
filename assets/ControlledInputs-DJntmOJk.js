import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _,vt as v}from"./vapor-runtime-D3a-68js.js";import{a as y}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as b}from"./Code-2C2psoH3.js";import{t as x}from"./SidebarPlaygroundExample-DKa0aI1C.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>u(()=>{let[e,t]=y(`useState:1:0`,()=>v(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>m(`code`))}}));return _(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),f(g(x,{children:_(()=>{let u=e(),m=n(`h1`);i(u,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`受控输入`));let v=n(`div`);i(u,v),s(v,`role`,`tablist`),t(v,`tabs tabs-box`);let y=n(`button`);i(v,y),s(y,`role`,`tab`),d(()=>{t(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),p(y,`click`,()=>{w.value=`preview`}),i(y,r(`效果`));let x=n(`button`);i(v,x),s(x,`role`,`tab`),d(()=>{t(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),p(x,`click`,()=>{w.value=`code`}),i(x,r(`代码`));let T=n(`div`);i(u,T),t(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);i(T,E),d(()=>{let r=w.value===`code`?_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});h(()=>f(e,s,c))}),r}):``;h(()=>f(r,T,E))}),i(T,r(` `));let D=a(`rue:slot:anchor`);return i(T,D),d(()=>{let a=w.value===`preview`?_(()=>{let a=e(),u=n(`div`);i(a,u),t(u,`card bg-base-100 shadow`);let f=n(`div`);i(u,f),t(f,`card-body grid gap-4`);let m=n(`input`);i(f,m),t(m,`input input-bordered`),d(()=>{c(m,S.value)}),p(m,`input`,e=>C(e.target.value)),s(m,`placeholder`,`输入试试`);let h=n(`div`);i(f,h),i(h,r(`当前：`));let g=o(h);return i(h,g),d(()=>{l(g,S.value)}),a}):``;h(()=>f(a,T,D))}),u})}),u,m),u})};export{S as default};