import{$ as e,Ht as t,J as n,Jt as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,pt as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>h(()=>{let[e,t]=y(`useState:1:0`,()=>r(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>a(`code`))}}));return d(r=>{let a=i(),h=c(`rue:component:anchor`);return s(a,h),g(_(x,{children:d(()=>{let r=i(),a=e(`h1`,r);s(r,a),l(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,u(`受控输入`));let h=e(`div`,r);s(r,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let y=e(`button`,h);s(h,y),p(y,`role`,`tab`),o(()=>{l(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{w.value=`preview`}),s(y,u(`效果`));let x=e(`button`,h);s(h,x),p(x,`role`,`tab`),o(()=>{l(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),n(x,`click`,()=>{w.value=`code`}),s(x,u(`代码`));let T=e(`div`,r);s(r,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);s(T,E),o(()=>{let n=w.value===`code`?d(()=>{let n=i(),r=e(`div`,n);s(n,r),l(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});t(()=>g(e,a,u))}),n}):``;t(()=>g(n,T,E))}),s(T,u(` `));let D=c(`rue:slot:anchor`);return s(T,D),o(()=>{let r=w.value===`preview`?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);s(r,a),l(a,`card-body grid gap-4`);let c=e(`input`,a);s(a,c),l(c,`input input-bordered`),o(()=>{m(c,S.value)}),n(c,`input`,e=>C(e.target.value)),p(c,`placeholder`,`输入试试`);let d=e(`div`,a);s(a,d),s(d,u(`当前：`));let h=v(d);return s(d,h),o(()=>{f(h,S.value)}),t}):``;t(()=>g(r,T,D))}),r})}),a,h),a})};export{S as default};