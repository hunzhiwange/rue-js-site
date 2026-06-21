import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,gt as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v,r as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>s(()=>({activeTab:v(`ref:1:0`,()=>t(`code`)),showChart:v(`ref:1:1`,()=>t(!0)),showNotice:v(`ref:1:2`,()=>t(!1))})));return l(t=>{let s=h(),v=a(`rue:component:anchor`);return n(s,v),f(m(x,{children:l(()=>{let t=h(),s=d(`h1`,t);n(t,s),i(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,p(`v-show / r-show`));let v=d(`div`,t);n(t,v),u(v,`role`,`tablist`),i(v,`tabs tabs-box`);let x=d(`button`,v);n(v,x),u(x,`role`,`tab`),_(()=>{i(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{S.value=`preview`}),n(x,p(`效果`));let T=d(`button`,v);n(v,T),u(T,`role`,`tab`),_(()=>{i(T,`tab ${S.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{S.value=`code`}),n(T,p(`代码`));let E=d(`div`,t);n(t,E),i(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),_(()=>{let t=S.value===`code`?l(()=>{let t=h(),r=d(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),_(()=>{let t=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});e(()=>f(t,o,s))}),t}):``;e(()=>f(t,E,D))}),n(E,p(` `));let O=a(`rue:slot:anchor`);return n(E,O),_(()=>{let t=S.value===`preview`?l(()=>{let e=h(),t=d(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=d(`div`,t);n(t,a),i(a,`card-body grid gap-6`);let s=d(`section`,a);n(a,s),i(s,`space-y-3`);let l=d(`div`,s);n(s,l),i(l,`flex flex-wrap items-center justify-between gap-3`);let u=d(`h2`,l);n(l,u),i(u,`text-xl font-semibold`),n(u,p(`v-show`));let f=d(`button`,l);n(l,f),i(f,`btn btn-sm`),r(f,`click`,()=>{C.value=!C.value});let m=c(f);n(f,m),_(()=>{g(m,C.value?`隐藏面板`:`显示面板`)});let v=d(`div`,s);n(s,v),i(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=d(`div`,v);n(v,b),_(()=>{o(b,y(void 0,C.value))}),i(b,`alert alert-info`),n(b,p(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=d(`p`,s);n(s,x),i(x,`text-sm opacity-70`),n(x,p(`当前状态：`));let S=c(x);n(x,S),_(()=>{g(S,C.value?`显示`:`隐藏`)});let T=d(`section`,a);n(a,T),i(T,`space-y-3`);let E=d(`div`,T);n(T,E),i(E,`flex flex-wrap items-center justify-between gap-3`);let D=d(`h2`,E);n(E,D),i(D,`text-xl font-semibold`),n(D,p(`r-show`));let O=d(`button`,E);n(E,O),i(O,`btn btn-sm`),r(O,`click`,()=>{w.value=!w.value});let k=c(O);n(O,k),_(()=>{g(k,w.value?`隐藏通知`:`显示通知`)});let A=d(`div`,T);n(T,A),i(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=d(`div`,A);n(A,j),_(()=>{o(j,y(void 0,w.value))}),i(j,`alert alert-success`),n(j,p(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=d(`p`,T);n(T,M),i(M,`text-sm opacity-70`),n(M,p(`当前状态：`));let N=c(M);return n(M,N),_(()=>{g(N,w.value?`显示`:`隐藏`)}),e}):``;e(()=>f(t,E,O))}),t})}),s,v),s})};export{S as default};