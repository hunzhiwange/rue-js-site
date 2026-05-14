import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,l as f,mt as p,ot as m,t as h,ut as g,z as _}from"./vapor-runtime-Dfq7aA8z.js";import{a as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as y}from"./Code-CLTo4rRM.js";import{t as b}from"./SidebarPlaygroundExample-DOFGFBd1.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>p(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),title:v(`ref:1:1`,()=>m(`Rue 文本指令`)),status:v(`ref:1:2`,()=>m(`等待同步`))})));return d(p=>{let m=t(),v=e(`rue:component:anchor`);return a(m,v),f(h(b,{children:d(()=>{let p=t(),m=r(`h1`,p);a(p,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-text / r-text`));let v=r(`div`,p);a(p,v),c(v,`role`,`tablist`),n(v,`tabs tabs-box`);let b=r(`button`,v);a(v,b),c(b,`role`,`tab`),u(()=>{n(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{x.value=`preview`}),a(b,s(`效果`));let w=r(`button`,v);a(v,w),c(w,`role`,`tab`),u(()=>{n(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{x.value=`code`}),a(w,s(`代码`));let T=r(`div`,p);a(p,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),u(()=>{let i=x.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),u(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VTextAndRText: FC = () => {
  const title = ref('Rue 文本指令');
  const status = ref('等待同步');

  return (
    <div className="grid gap-4">
      <input className="input input-bordered" value={title.value} onInput={event => {
        title.value = (event.target as HTMLInputElement).value;
      }} />
      <button className="btn btn-sm" onClick={() => {
        status.value = '已同步：' + title.value;
      }}>
        同步状态
      </button>

      <h2 v-text="title.value" className="text-xl font-semibold"></h2>
      <p r-text={status.value} className="alert alert-info"></p>
    </div>
  );
};

export default VTextAndRText;`});g(()=>f(e,s,c))}),i}):``;g(()=>f(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),u(()=>{let e=x.value===`preview`?d(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`card bg-base-100 shadow`);let d=r(`div`,c);a(c,d),n(d,`card-body grid gap-6`);let f=r(`section`,d);a(d,f),n(f,`space-y-3`);let p=r(`div`,f);a(f,p),n(p,`flex flex-wrap items-center gap-3`);let m=r(`input`,p);a(p,m),n(m,`input input-bordered`),u(()=>{l(m,S.value)}),i(m,`input`,e=>{S.value=e.target.value});let h=r(`button`,p);a(p,h),n(h,`btn btn-sm`),i(h,`click`,()=>{C.value=`已同步：`+S.value}),a(h,s(`同步状态`));let g=r(`div`,f);a(f,g),n(g,`rounded-box border border-base-300 p-4 grid gap-3`);let v=r(`h2`,g);a(g,v),n(v,`text-xl font-semibold`);let y=_(v);a(v,y),u(()=>{o(y,S.value)});let b=r(`p`,g);a(g,b),n(b,`alert alert-info`);let x=_(b);return a(b,x),u(()=>{o(x,C.value)}),e}):``;g(()=>f(e,T,D))}),p})}),m,v),m})};export{x as default};