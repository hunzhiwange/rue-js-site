import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,X as l,d as u,dt as d,ht as f,l as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v,r as y}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as b}from"./Code-DQxnq0in.js";import{t as x}from"./SidebarPlaygroundExample-BwOo72z2.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>f(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),showChart:v(`ref:1:1`,()=>m(!0)),showNotice:v(`ref:1:2`,()=>m(!1))})));return u(f=>{let m=t(),v=e(`rue:component:anchor`);return a(m,v),p(h(x,{children:u(()=>{let f=t(),m=r(`h1`,f);a(f,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-show / r-show`));let v=r(`div`,f);a(f,v),c(v,`role`,`tablist`),n(v,`tabs tabs-box`);let x=r(`button`,v);a(v,x),c(x,`role`,`tab`),g(()=>{n(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),i(x,`click`,()=>{S.value=`preview`}),a(x,s(`效果`));let T=r(`button`,v);a(v,T),c(T,`role`,`tab`),g(()=>{n(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),i(T,`click`,()=>{S.value=`code`}),a(T,s(`代码`));let E=r(`div`,f);a(f,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),g(()=>{let i=S.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});d(()=>p(e,s,c))}),i}):``;d(()=>p(i,E,D))}),a(E,s(` `));let O=e(`rue:slot:anchor`);return a(E,O),g(()=>{let e=S.value===`preview`?u(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`card bg-base-100 shadow`);let u=r(`div`,c);a(c,u),n(u,`card-body grid gap-6`);let d=r(`section`,u);a(u,d),n(d,`space-y-3`);let f=r(`div`,d);a(d,f),n(f,`flex flex-wrap items-center justify-between gap-3`);let p=r(`h2`,f);a(f,p),n(p,`text-xl font-semibold`),a(p,s(`v-show`));let m=r(`button`,f);a(f,m),n(m,`btn btn-sm`),i(m,`click`,()=>{C.value=!C.value});let h=_(m);a(m,h),g(()=>{o(h,C.value?`隐藏面板`:`显示面板`)});let v=r(`div`,d);a(d,v),n(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=r(`div`,v);a(v,b),g(()=>{l(b,y(void 0,C.value))}),n(b,`alert alert-info`),a(b,s(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=r(`p`,d);a(d,x),n(x,`text-sm opacity-70`),a(x,s(`当前状态：`));let S=_(x);a(x,S),g(()=>{o(S,C.value?`显示`:`隐藏`)});let T=r(`section`,u);a(u,T),n(T,`space-y-3`);let E=r(`div`,T);a(T,E),n(E,`flex flex-wrap items-center justify-between gap-3`);let D=r(`h2`,E);a(E,D),n(D,`text-xl font-semibold`),a(D,s(`r-show`));let O=r(`button`,E);a(E,O),n(O,`btn btn-sm`),i(O,`click`,()=>{w.value=!w.value});let k=_(O);a(O,k),g(()=>{o(k,w.value?`隐藏通知`:`显示通知`)});let A=r(`div`,T);a(T,A),n(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=r(`div`,A);a(A,j),g(()=>{l(j,y(void 0,w.value))}),n(j,`alert alert-success`),a(j,s(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=r(`p`,T);a(T,M),n(M,`text-sm opacity-70`),a(M,s(`当前状态：`));let N=_(M);return a(M,N),g(()=>{o(N,w.value?`显示`:`隐藏`)}),e}):``;d(()=>p(e,E,O))}),f})}),m,v),m})};export{S as default};