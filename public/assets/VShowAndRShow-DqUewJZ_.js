import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,at as l,d as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-ACs_OvwU.js";import{a as v,r as y}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as b}from"./Code-CliOXHNE.js";import{t as x}from"./SidebarPlaygroundExample-DXnPmR3z.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>t(()=>({activeTab:v(`ref:1:0`,()=>c(`code`)),showChart:v(`ref:1:1`,()=>c(!0)),showNotice:v(`ref:1:2`,()=>c(!1))})));return u(t=>{let c=n(),v=s(`rue:component:anchor`);return r(c,v),f(h(x,{children:u(()=>{let t=n(),c=a(`h1`,t);r(t,c),g(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,p(`v-show / r-show`));let v=a(`div`,t);r(t,v),e(v,`role`,`tablist`),g(v,`tabs tabs-box`);let x=a(`button`,v);r(v,x),e(x,`role`,`tab`),d(()=>{g(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),o(x,`click`,()=>{S.value=`preview`}),r(x,p(`效果`));let T=a(`button`,v);r(v,T),e(T,`role`,`tab`),d(()=>{g(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),o(T,`click`,()=>{S.value=`code`}),r(T,p(`代码`));let E=a(`div`,t);r(t,E),g(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=s(`rue:slot:anchor`);r(E,D),d(()=>{let e=S.value===`code`?u(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),g(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});_(()=>f(e,i,o))}),e}):``;_(()=>f(e,E,D))}),r(E,p(` `));let O=s(`rue:slot:anchor`);return r(E,O),d(()=>{let e=S.value===`preview`?u(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow`);let s=a(`div`,t);r(t,s),g(s,`card-body grid gap-6`);let c=a(`section`,s);r(s,c),g(c,`space-y-3`);let u=a(`div`,c);r(c,u),g(u,`flex flex-wrap items-center justify-between gap-3`);let f=a(`h2`,u);r(u,f),g(f,`text-xl font-semibold`),r(f,p(`v-show`));let h=a(`button`,u);r(u,h),g(h,`btn btn-sm`),o(h,`click`,()=>{C.value=!C.value});let _=i(h);r(h,_),d(()=>{m(_,C.value?`隐藏面板`:`显示面板`)});let v=a(`div`,c);r(c,v),g(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=a(`div`,v);r(v,b),d(()=>{l(b,y(void 0,C.value))}),g(b,`alert alert-info`),r(b,p(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=a(`p`,c);r(c,x),g(x,`text-sm opacity-70`),r(x,p(`当前状态：`));let S=i(x);r(x,S),d(()=>{m(S,C.value?`显示`:`隐藏`)});let T=a(`section`,s);r(s,T),g(T,`space-y-3`);let E=a(`div`,T);r(T,E),g(E,`flex flex-wrap items-center justify-between gap-3`);let D=a(`h2`,E);r(E,D),g(D,`text-xl font-semibold`),r(D,p(`r-show`));let O=a(`button`,E);r(E,O),g(O,`btn btn-sm`),o(O,`click`,()=>{w.value=!w.value});let k=i(O);r(O,k),d(()=>{m(k,w.value?`隐藏通知`:`显示通知`)});let A=a(`div`,T);r(T,A),g(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=a(`div`,A);r(A,j),d(()=>{l(j,y(void 0,w.value))}),g(j,`alert alert-success`),r(j,p(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=a(`p`,T);r(T,M),g(M,`text-sm opacity-70`),r(M,p(`当前状态：`));let N=i(M);return r(M,N),d(()=>{m(N,w.value?`显示`:`隐藏`)}),e}):``;_(()=>f(e,E,O))}),t})}),c,v),c})};export{S as default};