import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,et as l,gt as u,ht as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>a(()=>{let[e,t]=y(`useState:1:0`,()=>s(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>n(`code`))}}));return f(n=>{let a=l(),s=e(`rue:component:anchor`);return o(a,s),m(g(x,{children:f(()=>{let n=l(),a=_(`h1`,n);o(n,a),v(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,p(`受控输入`));let s=_(`div`,n);o(n,s),c(s,`role`,`tablist`),v(s,`tabs tabs-box`);let y=_(`button`,s);o(s,y),c(y,`role`,`tab`),t(()=>{v(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{w.value=`preview`}),o(y,p(`效果`));let x=_(`button`,s);o(s,x),c(x,`role`,`tab`),t(()=>{v(x,`tab ${w.value===`code`?`tab-active`:``}`)}),i(x,`click`,()=>{w.value=`code`}),o(x,p(`代码`));let T=_(`div`,n);o(n,T),v(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);o(T,E),t(()=>{let n=w.value===`code`?f(()=>{let n=l(),i=_(`div`,n);o(n,i),v(i,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let a=_(`div`,i);o(i,a),v(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});r(()=>m(e,a,s))}),n}):``;r(()=>m(n,T,E))}),o(T,p(` `));let D=e(`rue:slot:anchor`);return o(T,D),t(()=>{let e=w.value===`preview`?f(()=>{let e=l(),n=_(`div`,e);o(e,n),v(n,`card bg-base-100 shadow`);let r=_(`div`,n);o(n,r),v(r,`card-body grid gap-4`);let a=_(`input`,r);o(r,a),v(a,`input input-bordered`),t(()=>{d(a,S.value)}),i(a,`input`,e=>C(e.target.value)),c(a,`placeholder`,`输入试试`);let s=_(`div`,r);o(r,s),o(s,p(`当前：`));let f=h(s);return o(s,f),t(()=>{u(f,S.value)}),e}):``;r(()=>m(e,T,D))}),n})}),a,s),a})};export{S as default};