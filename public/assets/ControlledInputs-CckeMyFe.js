import{$ as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>s(()=>{let[e,t]=y(`useState:1:0`,()=>a(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>v(`code`))}}));return u(a=>{let s=e(),v=t(`rue:component:anchor`);return i(s,v),m(g(x,{children:u(()=>{let a=e(),s=c(`h1`,a);i(a,s),d(s,`text-5xl font-semibold mb-4 md:mb-4`),i(s,_(`受控输入`));let v=c(`div`,a);i(a,v),h(v,`role`,`tablist`),d(v,`tabs tabs-box`);let y=c(`button`,v);i(v,y),h(y,`role`,`tab`),n(()=>{d(y,`tab ${w.value===`preview`?`tab-active`:``}`)}),o(y,`click`,()=>{w.value=`preview`}),i(y,_(`效果`));let x=c(`button`,v);i(v,x),h(x,`role`,`tab`),n(()=>{d(x,`tab ${w.value===`code`?`tab-active`:``}`)}),o(x,`click`,()=>{w.value=`code`}),i(x,_(`代码`));let T=c(`div`,a);i(a,T),d(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=t(`rue:slot:anchor`);i(T,E),n(()=>{let a=w.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let s=c(`div`,o);i(o,s),d(s,`card-body p-0`);let l=t(`rue:component:anchor`);return i(s,l),n(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});r(()=>m(e,s,l))}),a}):``;r(()=>m(a,T,E))}),i(T,_(` `));let D=t(`rue:slot:anchor`);return i(T,D),n(()=>{let t=w.value===`preview`?u(()=>{let t=e(),r=c(`div`,t);i(t,r),d(r,`card bg-base-100 shadow`);let a=c(`div`,r);i(r,a),d(a,`card-body grid gap-4`);let s=c(`input`,a);i(a,s),d(s,`input input-bordered`),n(()=>{f(s,S.value)}),o(s,`input`,e=>C(e.target.value)),h(s,`placeholder`,`输入试试`);let u=c(`div`,a);i(a,u),i(u,_(`当前：`));let m=p(u);return i(u,m),n(()=>{l(m,S.value)}),t}):``;r(()=>m(t,T,D))}),a})}),s,v),s})};export{S as default};