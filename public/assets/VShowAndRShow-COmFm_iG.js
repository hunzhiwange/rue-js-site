import{At as e,Cn as t,Ct as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v,r as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>t(()=>({activeTab:v(`ref:1:0`,()=>u(`code`)),showChart:v(`ref:1:1`,()=>u(!0)),showNotice:v(`ref:1:2`,()=>u(!1))})));return h(t=>{let u=o(),v=a(`rue:component:anchor`);return f(u,v),g(_(x,{children:h(()=>{let t=o(),u=d(`h1`,t);f(t,u),i(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`v-show / r-show`));let v=d(`div`,t);f(t,v),n(v,`role`,`tablist`),i(v,`tabs tabs-box`);let x=d(`button`,v);f(v,x),n(x,`role`,`tab`),p(()=>{i(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),l(x,`click`,()=>{S.value=`preview`}),f(x,c(`效果`));let T=d(`button`,v);f(v,T),n(T,`role`,`tab`),p(()=>{i(T,`tab ${S.value===`code`?`tab-active`:``}`)}),l(T,`click`,()=>{S.value=`code`}),f(T,c(`代码`));let E=d(`div`,t);f(t,E),i(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);f(E,D),p(()=>{let e=S.value===`code`?h(()=>{let e=o(),t=d(`div`,e);f(e,t),i(t,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);f(t,n),i(n,`card-body p-0`);let r=a(`rue:component:anchor`);return f(n,r),p(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});m(()=>g(e,n,r))}),e}):``;m(()=>g(e,E,D))}),f(E,c(` `));let O=a(`rue:slot:anchor`);return f(E,O),p(()=>{let t=S.value===`preview`?h(()=>{let t=o(),n=d(`div`,t);f(t,n),i(n,`card bg-base-100 shadow`);let a=d(`div`,n);f(n,a),i(a,`card-body grid gap-6`);let u=d(`section`,a);f(a,u),i(u,`space-y-3`);let m=d(`div`,u);f(u,m),i(m,`flex flex-wrap items-center justify-between gap-3`);let h=d(`h2`,m);f(m,h),i(h,`text-xl font-semibold`),f(h,c(`v-show`));let g=d(`button`,m);f(m,g),i(g,`btn btn-sm`),l(g,`click`,()=>{C.value=!C.value});let _=s(g);f(g,_),p(()=>{r(_,C.value?`隐藏面板`:`显示面板`)});let v=d(`div`,u);f(u,v),i(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=d(`div`,v);f(v,b),p(()=>{let t=y(void 0,C.value);e(b,t)}),i(b,`alert alert-info`),f(b,c(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=d(`p`,u);f(u,x),i(x,`text-sm opacity-70`),f(x,c(`当前状态：`));let S=s(x);f(x,S),p(()=>{r(S,C.value?`显示`:`隐藏`)});let T=d(`section`,a);f(a,T),i(T,`space-y-3`);let E=d(`div`,T);f(T,E),i(E,`flex flex-wrap items-center justify-between gap-3`);let D=d(`h2`,E);f(E,D),i(D,`text-xl font-semibold`),f(D,c(`r-show`));let O=d(`button`,E);f(E,O),i(O,`btn btn-sm`),l(O,`click`,()=>{w.value=!w.value});let k=s(O);f(O,k),p(()=>{r(k,w.value?`隐藏通知`:`显示通知`)});let A=d(`div`,T);f(T,A),i(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=d(`div`,A);f(A,j),p(()=>{let t=y(void 0,w.value);e(j,t)}),i(j,`alert alert-success`),f(j,c(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=d(`p`,T);f(T,M),i(M,`text-sm opacity-70`),f(M,c(`当前状态：`));let N=s(M);return f(M,N),p(()=>{r(N,w.value?`显示`:`隐藏`)}),t}):``;m(()=>g(t,E,O))}),t})}),u,v),u})};export{S as default};