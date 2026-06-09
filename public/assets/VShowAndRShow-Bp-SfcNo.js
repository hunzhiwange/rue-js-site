import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,ft as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v,r as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>i(`code`)),showChart:v(`ref:1:1`,()=>i(!0)),showNotice:v(`ref:1:2`,()=>i(!1))})));return d(i=>{let m=r(),v=s(`rue:component:anchor`);return o(m,v),h(g(x,{children:d(()=>{let i=r(),m=e(`h1`,i);o(i,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,l(`v-show / r-show`));let v=e(`div`,i);o(i,v),p(v,`role`,`tablist`),c(v,`tabs tabs-box`);let x=e(`button`,v);o(v,x),p(x,`role`,`tab`),a(()=>{c(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),n(x,`click`,()=>{S.value=`preview`}),o(x,l(`效果`));let T=e(`button`,v);o(v,T),p(T,`role`,`tab`),a(()=>{c(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),n(T,`click`,()=>{S.value=`code`}),o(T,l(`代码`));let E=e(`div`,i);o(i,E),c(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=s(`rue:slot:anchor`);o(E,D),a(()=>{let n=S.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});t(()=>h(e,l,u))}),n}):``;t(()=>h(n,E,D))}),o(E,l(` `));let O=s(`rue:slot:anchor`);return o(E,O),a(()=>{let i=S.value===`preview`?d(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-6`);let d=e(`section`,s);o(s,d),c(d,`space-y-3`);let p=e(`div`,d);o(d,p),c(p,`flex flex-wrap items-center justify-between gap-3`);let m=e(`h2`,p);o(p,m),c(m,`text-xl font-semibold`),o(m,l(`v-show`));let h=e(`button`,p);o(p,h),c(h,`btn btn-sm`),n(h,`click`,()=>{C.value=!C.value});let g=_(h);o(h,g),a(()=>{f(g,C.value?`隐藏面板`:`显示面板`)});let v=e(`div`,d);o(d,v),c(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=e(`div`,v);o(v,b),a(()=>{u(b,y(void 0,C.value))}),c(b,`alert alert-info`),o(b,l(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=e(`p`,d);o(d,x),c(x,`text-sm opacity-70`),o(x,l(`当前状态：`));let S=_(x);o(x,S),a(()=>{f(S,C.value?`显示`:`隐藏`)});let T=e(`section`,s);o(s,T),c(T,`space-y-3`);let E=e(`div`,T);o(T,E),c(E,`flex flex-wrap items-center justify-between gap-3`);let D=e(`h2`,E);o(E,D),c(D,`text-xl font-semibold`),o(D,l(`r-show`));let O=e(`button`,E);o(E,O),c(O,`btn btn-sm`),n(O,`click`,()=>{w.value=!w.value});let k=_(O);o(O,k),a(()=>{f(k,w.value?`隐藏通知`:`显示通知`)});let A=e(`div`,T);o(T,A),c(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=e(`div`,A);o(A,j),a(()=>{u(j,y(void 0,w.value))}),c(j,`alert alert-success`),o(j,l(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=e(`p`,T);o(T,M),c(M,`text-sm opacity-70`),o(M,l(`当前状态：`));let N=_(M);return o(M,N),a(()=>{f(N,w.value?`显示`:`隐藏`)}),t}):``;t(()=>h(i,E,O))}),i})}),m,v),m})};export{S as default};