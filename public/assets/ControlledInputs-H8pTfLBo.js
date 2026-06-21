import{$t as e,Jt as t,Q as n,Z as r,_t as i,an as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>c(()=>{let[e,n]=y(`useState:1:0`,()=>a(``));return{text:e,setText:n,activeTab:y(`ref:1:1`,()=>t(`code`))}}));return u(t=>{let a=g(),c=s(`rue:component:anchor`);return n(a,c),p(h(x,{children:u(()=>{let t=g(),a=f(`h1`,t);n(t,a),o(a,`text-5xl font-semibold mb-4 md:mb-4`),n(a,m(`受控输入`));let c=f(`div`,t);n(t,c),d(c,`role`,`tablist`),o(c,`tabs tabs-box`);let y=f(`button`,c);n(c,y),d(y,`role`,`tab`),v(()=>{o(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{w.value=`preview`}),n(y,m(`效果`));let x=f(`button`,c);n(c,x),d(x,`role`,`tab`),v(()=>{o(x,`tab ${w.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{w.value=`code`}),n(x,m(`代码`));let T=f(`div`,t);n(t,T),o(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);n(T,E),v(()=>{let t=w.value===`code`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),o(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let i=f(`div`,r);n(r,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return n(i,a),v(()=>{let t=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,T,E))}),n(T,m(` `));let D=s(`rue:slot:anchor`);return n(T,D),v(()=>{let t=w.value===`preview`?u(()=>{let e=g(),t=f(`div`,e);n(e,t),o(t,`card bg-base-100 shadow`);let a=f(`div`,t);n(t,a),o(a,`card-body grid gap-4`);let s=f(`input`,a);n(a,s),o(s,`input input-bordered`),v(()=>{i(s,S.value)}),r(s,`input`,e=>C(e.target.value)),d(s,`placeholder`,`输入试试`);let c=f(`div`,a);n(a,c),n(c,m(`当前：`));let u=l(c);return n(c,u),v(()=>{_(u,S.value)}),e}):``;e(()=>p(t,T,D))}),t})}),a,c),a})};export{S as default};