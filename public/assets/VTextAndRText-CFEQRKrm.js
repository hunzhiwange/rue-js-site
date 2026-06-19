import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,mt as d,nt as f,o as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>o(()=>({activeTab:v(`ref:1:0`,()=>_(`code`)),title:v(`ref:1:1`,()=>_(`Rue 文本指令`)),status:v(`ref:1:2`,()=>_(`等待同步`))})));return l(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),p(h(b,{children:l(()=>{let o=e(),_=s(`h1`,o);i(o,_),u(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,g(`v-text / r-text`));let v=s(`div`,o);i(o,v),m(v,`role`,`tablist`),u(v,`tabs tabs-box`);let b=s(`button`,v);i(v,b),m(b,`role`,`tab`),n(()=>{u(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(b,`click`,()=>{x.value=`preview`}),i(b,g(`效果`));let w=s(`button`,v);i(v,w),m(w,`role`,`tab`),n(()=>{u(w,`tab ${x.value===`code`?`tab-active`:``}`)}),a(w,`click`,()=>{x.value=`code`}),i(w,g(`代码`));let T=s(`div`,o);i(o,T),u(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=t(`rue:slot:anchor`);i(T,E),n(()=>{let a=x.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});r(()=>p(e,c,l))}),a}):``;r(()=>p(a,T,E))}),i(T,g(` `));let D=t(`rue:slot:anchor`);return i(T,D),n(()=>{let t=x.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body grid gap-6`);let l=s(`section`,o);i(o,l),u(l,`space-y-3`);let p=s(`div`,l);i(l,p),u(p,`flex flex-wrap items-center gap-3`);let m=s(`input`,p);i(p,m),u(m,`input input-bordered`),n(()=>{d(m,S.value)}),a(m,`input`,e=>{S.value=e.target.value});let h=s(`button`,p);i(p,h),u(h,`btn btn-sm`),a(h,`click`,()=>{C.value=`已同步：`+S.value}),i(h,g(`同步状态`));let _=s(`div`,l);i(l,_),u(_,`rounded-box border border-base-300 p-4 grid gap-3`);let v=s(`h2`,_);i(_,v),u(v,`text-xl font-semibold`);let y=f(v);i(v,y),n(()=>{c(y,S.value)});let b=s(`p`,_);i(_,b),u(b,`alert alert-info`);let x=f(b);return i(b,x),n(()=>{c(x,C.value)}),t}):``;r(()=>p(t,T,D))}),o})}),_,v),_})};export{x as default};