import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,Z as l,at as u,ht as d,it as f,l as p,s as m,t as h,wt as g,yt as _,z as v}from"./vapor-runtime-C1rlwc61.js";import{a as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>g(()=>{let[e,t]=y(`useState:1:0`,()=>o(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>d(`code`))}}));return p(o=>{let d=s(),g=i(`rue:component:anchor`);return t(d,g),m(h(x,{children:p(()=>{let o=s(),d=c(`h1`,o);t(o,d),e(d,`text-5xl font-semibold mb-4 md:mb-4`),t(d,r(`受控输入`));let g=c(`div`,o);t(o,g),l(g,`role`,`tablist`),e(g,`tabs tabs-box`);let y=c(`button`,g);t(g,y),l(y,`role`,`tab`),n(()=>{e(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),v(y,`click`,()=>{w.value=`preview`}),t(y,r(`效果`));let x=c(`button`,g);t(g,x),l(x,`role`,`tab`),n(()=>{e(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),v(x,`click`,()=>{w.value=`code`}),t(x,r(`代码`));let T=c(`div`,o);t(o,T),e(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);t(T,E),n(()=>{let r=w.value===`code`?p(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});_(()=>m(e,o,l))}),r}):``;_(()=>m(r,T,E))}),t(T,r(` `));let D=i(`rue:slot:anchor`);return t(T,D),n(()=>{let i=w.value===`preview`?p(()=>{let i=s(),o=c(`div`,i);t(i,o),e(o,`card bg-base-100 shadow`);let d=c(`div`,o);t(o,d),e(d,`card-body grid gap-4`);let p=c(`input`,d);t(d,p),e(p,`input input-bordered`),n(()=>{f(p,S.value)}),v(p,`input`,e=>C(e.target.value)),l(p,`placeholder`,`输入试试`);let m=c(`div`,d);t(d,m),t(m,r(`当前：`));let h=a(m);return t(m,h),n(()=>{u(h,S.value)}),i}):``;_(()=>m(i,T,D))}),o})}),d,g),d})};export{S as default};