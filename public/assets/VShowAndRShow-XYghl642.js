import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,mt as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,r as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>a(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),showChart:v(`ref:1:1`,()=>n(!0)),showNotice:v(`ref:1:2`,()=>n(!1))})));return u(n=>{let a=c(),v=e(`rue:component:anchor`);return o(a,v),p(h(x,{children:u(()=>{let n=c(),a=g(`h1`,n);o(n,a),_(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,f(`v-show / r-show`));let v=g(`div`,n);o(n,v),s(v,`role`,`tablist`),_(v,`tabs tabs-box`);let x=g(`button`,v);o(v,x),s(x,`role`,`tab`),t(()=>{_(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(x,`click`,()=>{S.value=`preview`}),o(x,f(`效果`));let T=g(`button`,v);o(v,T),s(T,`role`,`tab`),t(()=>{_(T,`tab ${S.value===`code`?`tab-active`:``}`)}),i(T,`click`,()=>{S.value=`code`}),o(T,f(`代码`));let E=g(`div`,n);o(n,E),_(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);o(E,D),t(()=>{let n=S.value===`code`?u(()=>{let n=c(),i=g(`div`,n);o(n,i),_(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);o(i,a),_(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VShowAndRShow: FC = () => {
  const showChart = ref(true);
  const showNotice = ref(false);

  return (
    <div className="grid gap-4">
      <div className="min-h-24 rounded-box border border-dashed p-4">
        <div v-show={showChart.value} className="alert alert-info">
          v-show 会切换 display，但不会销毁节点。
        </div>
      </div>

      <div className="min-h-24 rounded-box border border-dashed p-4">
        <div r-show={showNotice.value} className="alert alert-success">
          r-show 也会复用同样的显示控制逻辑。
        </div>
      </div>
    </div>
  );
};

export default VShowAndRShow;`});r(()=>p(e,a,s))}),n}):``;r(()=>p(n,E,D))}),o(E,f(` `));let O=e(`rue:slot:anchor`);return o(E,O),t(()=>{let e=S.value===`preview`?u(()=>{let e=c(),n=g(`div`,e);o(e,n),_(n,`card bg-base-100 shadow`);let r=g(`div`,n);o(n,r),_(r,`card-body grid gap-6`);let a=g(`section`,r);o(r,a),_(a,`space-y-3`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-center justify-between gap-3`);let u=g(`h2`,s);o(s,u),_(u,`text-xl font-semibold`),o(u,f(`v-show`));let p=g(`button`,s);o(s,p),_(p,`btn btn-sm`),i(p,`click`,()=>{C.value=!C.value});let h=m(p);o(p,h),t(()=>{l(h,C.value?`隐藏面板`:`显示面板`)});let v=g(`div`,a);o(a,v),_(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=g(`div`,v);o(v,b),t(()=>{d(b,y(void 0,C.value))}),_(b,`alert alert-info`),o(b,f(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=g(`p`,a);o(a,x),_(x,`text-sm opacity-70`),o(x,f(`当前状态：`));let S=m(x);o(x,S),t(()=>{l(S,C.value?`显示`:`隐藏`)});let T=g(`section`,r);o(r,T),_(T,`space-y-3`);let E=g(`div`,T);o(T,E),_(E,`flex flex-wrap items-center justify-between gap-3`);let D=g(`h2`,E);o(E,D),_(D,`text-xl font-semibold`),o(D,f(`r-show`));let O=g(`button`,E);o(E,O),_(O,`btn btn-sm`),i(O,`click`,()=>{w.value=!w.value});let k=m(O);o(O,k),t(()=>{l(k,w.value?`隐藏通知`:`显示通知`)});let A=g(`div`,T);o(T,A),_(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=g(`div`,A);o(A,j),t(()=>{d(j,y(void 0,w.value))}),_(j,`alert alert-success`),o(j,f(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=g(`p`,T);o(T,M),_(M,`text-sm opacity-70`),o(M,f(`当前状态：`));let N=m(M);return o(M,N),t(()=>{l(N,w.value?`显示`:`隐藏`)}),e}):``;r(()=>p(e,E,O))}),n})}),a,v),a})};export{S as default};