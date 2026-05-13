import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Y as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v,r as y}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as b}from"./Code-2C2psoH3.js";import{t as x}from"./SidebarPlaygroundExample-DKa0aI1C.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>u(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),showChart:v(`ref:1:1`,()=>m(!0)),showNotice:v(`ref:1:2`,()=>m(!1))})));return _(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),f(g(x,{children:_(()=>{let u=e(),m=n(`h1`);i(u,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`v-show / r-show`));let v=n(`div`);i(u,v),s(v,`role`,`tablist`),t(v,`tabs tabs-box`);let x=n(`button`);i(v,x),s(x,`role`,`tab`),d(()=>{t(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),p(x,`click`,()=>{S.value=`preview`}),i(x,r(`效果`));let T=n(`button`);i(v,T),s(T,`role`,`tab`),d(()=>{t(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),p(T,`click`,()=>{S.value=`code`}),i(T,r(`代码`));let E=n(`div`);i(u,E),t(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);i(E,D),d(()=>{let r=S.value===`code`?_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});h(()=>f(e,s,c))}),r}):``;h(()=>f(r,E,D))}),i(E,r(` `));let O=a(`rue:slot:anchor`);return i(E,O),d(()=>{let a=S.value===`preview`?_(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`card bg-base-100 shadow`);let u=n(`div`);i(s,u),t(u,`card-body grid gap-6`);let f=n(`section`);i(u,f),t(f,`space-y-3`);let m=n(`div`);i(f,m),t(m,`flex flex-wrap items-center justify-between gap-3`);let h=n(`h2`);i(m,h),t(h,`text-xl font-semibold`),i(h,r(`v-show`));let g=n(`button`);i(m,g),t(g,`btn btn-sm`),p(g,`click`,()=>{C.value=!C.value});let _=o(g);i(g,_),d(()=>{l(_,C.value?`隐藏面板`:`显示面板`)});let v=n(`div`);i(f,v),t(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=n(`div`);i(v,b),d(()=>{c(b,y(void 0,C.value))}),t(b,`alert alert-info`),i(b,r(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=n(`p`);i(f,x),t(x,`text-sm opacity-70`),i(x,r(`当前状态：`));let S=o(x);i(x,S),d(()=>{l(S,C.value?`显示`:`隐藏`)});let T=n(`section`);i(u,T),t(T,`space-y-3`);let E=n(`div`);i(T,E),t(E,`flex flex-wrap items-center justify-between gap-3`);let D=n(`h2`);i(E,D),t(D,`text-xl font-semibold`),i(D,r(`r-show`));let O=n(`button`);i(E,O),t(O,`btn btn-sm`),p(O,`click`,()=>{w.value=!w.value});let k=o(O);i(O,k),d(()=>{l(k,w.value?`隐藏通知`:`显示通知`)});let A=n(`div`);i(T,A),t(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=n(`div`);i(A,j),d(()=>{c(j,y(void 0,w.value))}),t(j,`alert alert-success`),i(j,r(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=n(`p`);i(T,M),t(M,`text-sm opacity-70`),i(M,r(`当前状态：`));let N=o(M);return i(M,N),d(()=>{l(N,w.value?`显示`:`隐藏`)}),a}):``;h(()=>f(a,E,O))}),u})}),u,m),u})};export{S as default};