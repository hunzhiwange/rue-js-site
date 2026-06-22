import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,sn as m,t as h,tn as g,tt as _,yt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-C5NjdoiC.js";import{r as x}from"./SidebarPlaygroundExample-DpItFif-.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>d(()=>{let[e,t]=y(`useState:1:0`,()=>m(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>n(`code`))}}));return c(n=>{let d=l(),m=_(`rue:component:anchor`);return e(d,m),u(h(x,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`受控输入`));let m=p(`div`,n);e(n,m),o(m,`role`,`tablist`),f(m,`tabs tabs-box`);let y=p(`button`,m);e(m,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{w.value=`preview`}),e(y,s(`效果`));let x=p(`button`,m);e(m,x),o(x,`role`,`tab`),t(()=>{f(x,`tab ${w.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{w.value=`code`}),e(x,s(`代码`));let T=p(`div`,n);e(n,T),f(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=_(`rue:slot:anchor`);e(T,E),t(()=>{let n=w.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});g(()=>u(e,i,a))}),n}):``;g(()=>u(n,T,E))}),e(T,s(` `));let D=_(`rue:slot:anchor`);return e(T,D),t(()=>{let n=w.value===`preview`?c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`card bg-base-100 shadow`);let u=p(`div`,c);e(c,u),f(u,`card-body grid gap-4`);let d=p(`input`,u);e(u,d),f(d,`input input-bordered`),t(()=>{v(d,S.value)}),r(d,`input`,e=>C(e.target.value)),o(d,`placeholder`,`输入试试`);let m=p(`div`,u);e(u,m),e(m,s(`当前：`));let h=i(m);return e(m,h),t(()=>{a(h,S.value)}),n}):``;g(()=>u(n,T,D))}),n})}),d,m),d})};export{S as default};