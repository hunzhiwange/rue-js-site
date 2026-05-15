import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,ht as f,l as p,mt as m,ot as h,t as g,ut as _,z as v}from"./vapor-runtime-Bp8DIxJg.js";import{a as y}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as b}from"./Code-D55WiaDx.js";import{t as x}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var S=()=>{let{text:S,setText:C,activeTab:w}=y(`useSetup:0:0`,()=>m(()=>{let[e,t]=y(`useState:1:0`,()=>f(``));return{text:e,setText:t,activeTab:y(`ref:1:1`,()=>h(`code`))}}));return d(f=>{let m=t(),h=e(`rue:component:anchor`);return a(m,h),p(g(x,{children:d(()=>{let f=t(),m=r(`h1`,f);a(f,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`受控输入`));let h=r(`div`,f);a(f,h),c(h,`role`,`tablist`),n(h,`tabs tabs-box`);let y=r(`button`,h);a(h,y),c(y,`role`,`tab`),u(()=>{n(y,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{w.value=`preview`}),a(y,s(`效果`));let x=r(`button`,h);a(h,x),c(x,`role`,`tab`),u(()=>{n(x,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(x,`click`,()=>{w.value=`code`}),a(x,s(`代码`));let T=r(`div`,f);a(f,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),u(()=>{let i=w.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[420px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),u(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState } from '@rue-js/rue';

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

export default ControlledInputs;`});_(()=>p(e,s,c))}),i}):``;_(()=>p(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),u(()=>{let e=w.value===`preview`?d(()=>{let e=t(),d=r(`div`,e);a(e,d),n(d,`card bg-base-100 shadow`);let f=r(`div`,d);a(d,f),n(f,`card-body grid gap-4`);let p=r(`input`,f);a(f,p),n(p,`input input-bordered`),u(()=>{l(p,S.value)}),i(p,`input`,e=>C(e.target.value)),c(p,`placeholder`,`输入试试`);let m=r(`div`,f);a(f,m),a(m,s(`当前：`));let h=v(m);return a(m,h),u(()=>{o(h,S.value)}),e}):``;_(()=>p(e,T,D))}),f})}),m,h),m})};export{S as default};