import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,ft as f,l as p,mt as m,ot as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,r as y}from"./vapor-helpers-vapor-DkadWylb.js";import{t as b}from"./Code-B_4lzH85.js";import{t as x}from"./SidebarPlaygroundExample-CtM-WHq_.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>n(()=>({activeTab:v(`ref:1:0`,()=>r(`code`)),showChart:v(`ref:1:1`,()=>r(!0)),showNotice:v(`ref:1:2`,()=>r(!1))})));return u(n=>{let r=i(),v=c(`rue:component:anchor`);return o(r,v),p(g(x,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`v-show / r-show`));let v=e(`div`,n);o(n,v),h(v,`role`,`tablist`),l(v,`tabs tabs-box`);let x=e(`button`,v);o(v,x),h(x,`role`,`tab`),s(()=>{l(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(x,`click`,()=>{S.value=`preview`}),o(x,d(`效果`));let T=e(`button`,v);o(v,T),h(T,`role`,`tab`),s(()=>{l(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(T,`click`,()=>{S.value=`code`}),o(T,d(`代码`));let E=e(`div`,n);o(n,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=c(`rue:slot:anchor`);o(E,D),s(()=>{let t=S.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,E,D))}),o(E,d(` `));let O=c(`rue:slot:anchor`);return o(E,O),s(()=>{let n=S.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let c=e(`section`,a);o(a,c),l(c,`space-y-3`);let u=e(`div`,c);o(c,u),l(u,`flex flex-wrap items-center justify-between gap-3`);let p=e(`h2`,u);o(u,p),l(p,`text-xl font-semibold`),o(p,d(`v-show`));let h=e(`button`,u);o(u,h),l(h,`btn btn-sm`),t(h,`click`,()=>{C.value=!C.value});let g=_(h);o(h,g),s(()=>{m(g,C.value?`隐藏面板`:`显示面板`)});let v=e(`div`,c);o(c,v),l(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=e(`div`,v);o(v,b),s(()=>{f(b,y(void 0,C.value))}),l(b,`alert alert-info`),o(b,d(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=e(`p`,c);o(c,x),l(x,`text-sm opacity-70`),o(x,d(`当前状态：`));let S=_(x);o(x,S),s(()=>{m(S,C.value?`显示`:`隐藏`)});let T=e(`section`,a);o(a,T),l(T,`space-y-3`);let E=e(`div`,T);o(T,E),l(E,`flex flex-wrap items-center justify-between gap-3`);let D=e(`h2`,E);o(E,D),l(D,`text-xl font-semibold`),o(D,d(`r-show`));let O=e(`button`,E);o(E,O),l(O,`btn btn-sm`),t(O,`click`,()=>{w.value=!w.value});let k=_(O);o(O,k),s(()=>{m(k,w.value?`隐藏通知`:`显示通知`)});let A=e(`div`,T);o(T,A),l(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=e(`div`,A);o(A,j),s(()=>{f(j,y(void 0,w.value))}),l(j,`alert alert-success`),o(j,d(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=e(`p`,T);o(T,M),l(M,`text-sm opacity-70`),o(M,d(`当前状态：`));let N=_(M);return o(M,N),s(()=>{m(N,w.value?`显示`:`隐藏`)}),n}):``;a(()=>p(n,E,O))}),n})}),r,v),r})};export{S as default};