import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,pt as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y}from"./vapor-helpers-vapor-CJFAWine.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./SidebarPlaygroundExample-KML-rOvA.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>n(()=>{let[e,t]=y(`useState:1:0`,()=>h(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>r(`code`))}}));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),g(_(x,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`受控输入`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let y=e(`button`,h);o(h,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{w.value=`preview`}),o(y,u(`效果`));let x=e(`button`,h);o(h,x),p(x,`role`,`tab`),s(()=>{l(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{w.value=`code`}),o(x,u(`代码`));let T=e(`div`,n);o(n,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);o(T,E),s(()=>{let t=w.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});a(()=>g(e,r,u))}),t}):``;a(()=>g(t,T,E))}),o(T,u(` `));let D=c(`rue:slot:anchor`);return o(T,D),s(()=>{let n=w.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-4`);let c=e(`input`,a);o(a,c),l(c,`input input-bordered`),s(()=>{m(c,S.value)}),t(c,`input`,e=>C(e.target.value)),p(c,`placeholder`,`输入试试`);let d=e(`div`,a);o(a,d),o(d,u(`当前：`));let h=v(d);return o(d,h),s(()=>{f(h,S.value)}),n}):``;a(()=>g(n,T,D))}),n})}),r,h),r})};export{S as default};