import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,yt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{r as b}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var x=()=>{let{activeTab:x,title:S,status:C}=v(`useSetup:0:0`,()=>d(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),title:v(`ref:1:1`,()=>n(`Rue 文本指令`)),status:v(`ref:1:2`,()=>n(`等待同步`))})));return c(n=>{let d=l(),v=g(`rue:component:anchor`);return e(d,v),u(m(b,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`v-text / r-text`));let v=p(`div`,n);e(n,v),o(v,`role`,`tablist`),f(v,`tabs tabs-box`);let b=p(`button`,v);e(v,b),o(b,`role`,`tab`),t(()=>{f(b,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(b,`click`,()=>{x.value=`preview`}),e(b,s(`效果`));let w=p(`button`,v);e(v,w),o(w,`role`,`tab`),t(()=>{f(w,`tab ${x.value===`code`?`tab-active`:``}`)}),r(w,`click`,()=>{x.value=`code`}),e(w,s(`代码`));let T=p(`div`,n);e(n,T),f(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=g(`rue:slot:anchor`);e(T,E),t(()=>{let n=x.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VTextAndRText;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,T,E))}),e(T,s(` `));let D=g(`rue:slot:anchor`);return e(T,D),t(()=>{let n=x.value===`preview`?c(()=>{let n=l(),o=p(`div`,n);e(n,o),f(o,`card bg-base-100 shadow`);let c=p(`div`,o);e(o,c),f(c,`card-body grid gap-6`);let u=p(`section`,c);e(c,u),f(u,`space-y-3`);let d=p(`div`,u);e(u,d),f(d,`flex flex-wrap items-center gap-3`);let m=p(`input`,d);e(d,m),f(m,`input input-bordered`),t(()=>{_(m,S.value)}),r(m,`input`,e=>{S.value=e.target.value});let h=p(`button`,d);e(d,h),f(h,`btn btn-sm`),r(h,`click`,()=>{C.value=`已同步：`+S.value}),e(h,s(`同步状态`));let g=p(`div`,u);e(u,g),f(g,`rounded-box border border-base-300 p-4 grid gap-3`);let v=p(`h2`,g);e(g,v),f(v,`text-xl font-semibold`);let y=i(v);e(v,y),t(()=>{a(y,S.value)});let b=p(`p`,g);e(g,b),f(b,`alert alert-info`);let x=i(b);return e(b,x),t(()=>{a(x,C.value)}),n}):``;h(()=>u(n,T,D))}),n})}),d,v),d})};export{x as default};