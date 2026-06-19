import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>a(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),title:v(`ref:1:1`,()=>n(`Rue 文本指令`)),status:v(`ref:1:2`,()=>n(`等待同步`))})));return d(n=>{let a=c(),v=e(`rue:component:anchor`);return o(a,v),p(h(b,{children:d(()=>{let n=c(),a=g(`h1`,n);o(n,a),_(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,f(`v-text / r-text`));let v=g(`div`,n);o(n,v),s(v,`role`,`tablist`),_(v,`tabs tabs-box`);let b=g(`button`,v);o(v,b),s(b,`role`,`tab`),t(()=>{_(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{x.value=`preview`}),o(b,f(`效果`));let w=g(`button`,v);o(v,w),s(w,`role`,`tab`),t(()=>{_(w,`tab ${x.value===`code`?`tab-active`:``}`)}),i(w,`click`,()=>{x.value=`code`}),o(w,f(`代码`));let T=g(`div`,n);o(n,T),_(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);o(T,E),t(()=>{let n=x.value===`code`?d(()=>{let n=c(),i=g(`div`,n);o(n,i),_(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);o(i,a),_(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});r(()=>p(e,a,s))}),n}):``;r(()=>p(n,T,E))}),o(T,f(` `));let D=e(`rue:slot:anchor`);return o(T,D),t(()=>{let e=x.value===`preview`?d(()=>{let e=c(),n=g(`div`,e);o(e,n),_(n,`card bg-base-100 shadow`);let r=g(`div`,n);o(n,r),_(r,`card-body grid gap-6`);let a=g(`section`,r);o(r,a),_(a,`space-y-3`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-center gap-3`);let d=g(`input`,s);o(s,d),_(d,`input input-bordered`),t(()=>{u(d,S.value)}),i(d,`input`,e=>{S.value=e.target.value});let p=g(`button`,s);o(s,p),_(p,`btn btn-sm`),i(p,`click`,()=>{C.value=`已同步：`+S.value}),o(p,f(`同步状态`));let h=g(`div`,a);o(a,h),_(h,`rounded-box border border-base-300 p-4 grid gap-3`);let v=g(`h2`,h);o(h,v),_(v,`text-xl font-semibold`);let y=m(v);o(v,y),t(()=>{l(y,S.value)});let b=g(`p`,h);o(h,b),_(b,`alert alert-info`);let x=m(b);return o(b,x),t(()=>{l(x,C.value)}),e}):``;r(()=>p(e,T,D))}),n})}),a,v),a})};export{x as default};