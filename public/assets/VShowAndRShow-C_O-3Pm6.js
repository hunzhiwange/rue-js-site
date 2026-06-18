import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v,r as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>r(`code`)),showChart:v(`ref:1:1`,()=>r(!0)),showNotice:v(`ref:1:2`,()=>r(!1))})));return d(r=>{let m=s(),v=a(`rue:component:anchor`);return n(m,v),h(_(x,{children:d(()=>{let r=s(),m=i(`h1`,r);n(r,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,e(`v-show / r-show`));let v=i(`div`,r);n(r,v),c(v,`role`,`tablist`),g(v,`tabs tabs-box`);let x=i(`button`,v);n(v,x),c(x,`role`,`tab`),o(()=>{g(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),p(x,`click`,()=>{S.value=`preview`}),n(x,e(`效果`));let T=i(`button`,v);n(v,T),c(T,`role`,`tab`),o(()=>{g(T,`tab ${S.value===`code`?`tab-active`:``}`)}),p(T,`click`,()=>{S.value=`code`}),n(T,e(`代码`));let E=i(`div`,r);n(r,E),g(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),o(()=>{let e=S.value===`code`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),g(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),g(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});t(()=>h(e,c,l))}),e}):``;t(()=>h(e,E,D))}),n(E,e(` `));let O=a(`rue:slot:anchor`);return n(E,O),o(()=>{let r=S.value===`preview`?d(()=>{let t=s(),r=i(`div`,t);n(t,r),g(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),g(a,`card-body grid gap-6`);let c=i(`section`,a);n(a,c),g(c,`space-y-3`);let d=i(`div`,c);n(c,d),g(d,`flex flex-wrap items-center justify-between gap-3`);let m=i(`h2`,d);n(d,m),g(m,`text-xl font-semibold`),n(m,e(`v-show`));let h=i(`button`,d);n(d,h),g(h,`btn btn-sm`),p(h,`click`,()=>{C.value=!C.value});let _=u(h);n(h,_),o(()=>{f(_,C.value?`隐藏面板`:`显示面板`)});let v=i(`div`,c);n(c,v),g(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=i(`div`,v);n(v,b),o(()=>{l(b,y(void 0,C.value))}),g(b,`alert alert-info`),n(b,e(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=i(`p`,c);n(c,x),g(x,`text-sm opacity-70`),n(x,e(`当前状态：`));let S=u(x);n(x,S),o(()=>{f(S,C.value?`显示`:`隐藏`)});let T=i(`section`,a);n(a,T),g(T,`space-y-3`);let E=i(`div`,T);n(T,E),g(E,`flex flex-wrap items-center justify-between gap-3`);let D=i(`h2`,E);n(E,D),g(D,`text-xl font-semibold`),n(D,e(`r-show`));let O=i(`button`,E);n(E,O),g(O,`btn btn-sm`),p(O,`click`,()=>{w.value=!w.value});let k=u(O);n(O,k),o(()=>{f(k,w.value?`隐藏通知`:`显示通知`)});let A=i(`div`,T);n(T,A),g(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=i(`div`,A);n(A,j),o(()=>{l(j,y(void 0,w.value))}),g(j,`alert alert-success`),n(j,e(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=i(`p`,T);n(T,M),g(M,`text-sm opacity-70`),n(M,e(`当前状态：`));let N=u(M);return n(M,N),o(()=>{f(N,w.value?`显示`:`隐藏`)}),t}):``;t(()=>h(r,E,O))}),r})}),m,v),m})};export{S as default};