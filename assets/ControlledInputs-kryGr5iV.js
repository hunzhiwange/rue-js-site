import{A as e,F as t,H as n,I as r,J as i,L as a,N as o,P as s,W as c,Y as l,c as u,dt as d,j as f,pt as p,rt as m,t as h,u as g,ut as _}from"./vapor-runtime-CKndxKFn.js";import{a as v}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as y}from"./Code-B1JFTu6m.js";import{t as b}from"./SidebarPlaygroundExample-DlK8mtjC.js";var x=()=>{let{text:x,setText:S,activeTab:C}=v(`useSetup:0:0`,()=>_(()=>{let[e,t]=v(`useState:1:0`,()=>d(``));return{text:e,setText:t,activeTab:v(`ref:1:1`,()=>m(`code`))}}));return g(()=>{let d=s(),m=o(`rue:component:anchor`);return f(d,m),u(h(b,{children:g(()=>{let d=s(),m=t(`h1`);f(d,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),f(m,r(`受控输入`));let _=t(`div`);f(d,_),n(_,`role`,`tablist`),c(_,`tabs tabs-box`);let v=t(`button`);f(_,v),n(v,`role`,`tab`),p(()=>{c(v,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{C.value=`preview`}),f(v,r(`效果`));let b=t(`button`);f(_,b),n(b,`role`,`tab`),p(()=>{c(b,String(`tab ${C.value===`code`?`tab-active`:``}`))}),e(b,`click`,()=>{C.value=`code`}),f(b,r(`代码`));let w=t(`div`);f(d,w),c(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=o(`rue:slot:anchor`);f(w,T),p(()=>{u(C.value===`code`?g(()=>{let e=s(),n=t(`div`);f(e,n),c(n,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let r=t(`div`);f(n,r),c(r,`card-body p-0`);let i=o(`rue:component:anchor`);return f(r,i),p(()=>{u(h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`}),r,i)}),e}):``,w,T)}),f(w,r(` `));let E=o(`rue:slot:anchor`);return f(w,E),p(()=>{u(C.value===`preview`?g(()=>{let o=s(),u=t(`div`);f(o,u),c(u,`card bg-base-100 shadow`);let d=t(`div`);f(u,d),c(d,`card-body grid gap-4`);let m=t(`input`);f(d,m),c(m,`input input-bordered`),p(()=>{i(m,x.value)}),e(m,`input`,e=>S(e.target.value)),n(m,`placeholder`,`输入试试`);let h=t(`div`);f(d,h),f(h,r(`当前：`));let g=a(h);return f(h,g),p(()=>{l(g,x.value)}),o}):``,w,E)}),d})}),d,m),d})};export{x as default};