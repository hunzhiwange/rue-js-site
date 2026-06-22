import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,vt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v,r as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-C5NjdoiC.js";import{r as x}from"./SidebarPlaygroundExample-DpItFif-.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>d(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),showChart:v(`ref:1:1`,()=>n(!0)),showNotice:v(`ref:1:2`,()=>n(!1))})));return c(n=>{let d=l(),v=g(`rue:component:anchor`);return e(d,v),u(m(x,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`v-show / r-show`));let v=p(`div`,n);e(n,v),o(v,`role`,`tablist`),f(v,`tabs tabs-box`);let x=p(`button`,v);e(v,x),o(x,`role`,`tab`),t(()=>{f(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{S.value=`preview`}),e(x,s(`效果`));let T=p(`button`,v);e(v,T),o(T,`role`,`tab`),t(()=>{f(T,`tab ${S.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{S.value=`code`}),e(T,s(`代码`));let E=p(`div`,n);e(n,E),f(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=g(`rue:slot:anchor`);e(E,D),t(()=>{let n=S.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,E,D))}),e(E,s(` `));let O=g(`rue:slot:anchor`);return e(E,O),t(()=>{let n=S.value===`preview`?c(()=>{let n=l(),o=p(`div`,n);e(n,o),f(o,`card bg-base-100 shadow`);let c=p(`div`,o);e(o,c),f(c,`card-body grid gap-6`);let u=p(`section`,c);e(c,u),f(u,`space-y-3`);let d=p(`div`,u);e(u,d),f(d,`flex flex-wrap items-center justify-between gap-3`);let m=p(`h2`,d);e(d,m),f(m,`text-xl font-semibold`),e(m,s(`v-show`));let h=p(`button`,d);e(d,h),f(h,`btn btn-sm`),r(h,`click`,()=>{C.value=!C.value});let g=i(h);e(h,g),t(()=>{a(g,C.value?`隐藏面板`:`显示面板`)});let v=p(`div`,u);e(u,v),f(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=p(`div`,v);e(v,b),t(()=>{_(b,y(void 0,C.value))}),f(b,`alert alert-info`),e(b,s(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=p(`p`,u);e(u,x),f(x,`text-sm opacity-70`),e(x,s(`当前状态：`));let S=i(x);e(x,S),t(()=>{a(S,C.value?`显示`:`隐藏`)});let T=p(`section`,c);e(c,T),f(T,`space-y-3`);let E=p(`div`,T);e(T,E),f(E,`flex flex-wrap items-center justify-between gap-3`);let D=p(`h2`,E);e(E,D),f(D,`text-xl font-semibold`),e(D,s(`r-show`));let O=p(`button`,E);e(E,O),f(O,`btn btn-sm`),r(O,`click`,()=>{w.value=!w.value});let k=i(O);e(O,k),t(()=>{a(k,w.value?`隐藏通知`:`显示通知`)});let A=p(`div`,T);e(T,A),f(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=p(`div`,A);e(A,j),t(()=>{_(j,y(void 0,w.value))}),f(j,`alert alert-success`),e(j,s(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=p(`p`,T);e(T,M),f(M,`text-sm opacity-70`),e(M,s(`当前状态：`));let N=i(M);return e(M,N),t(()=>{a(N,w.value?`显示`:`隐藏`)}),n}):``;h(()=>u(n,E,O))}),n})}),d,v),d})};export{S as default};