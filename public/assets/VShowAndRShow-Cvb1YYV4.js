import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,rt as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,r as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>h(()=>({activeTab:v(`ref:1:0`,()=>u(`code`)),showChart:v(`ref:1:1`,()=>u(!0)),showNotice:v(`ref:1:2`,()=>u(!1))})));return d(u=>{let h=o(),v=i(`rue:component:anchor`);return t(h,v),p(m(x,{children:d(()=>{let u=o(),h=s(`h1`,u);t(u,h),e(h,`text-5xl font-semibold mb-4 md:mb-4`),t(h,r(`v-show / r-show`));let v=s(`div`,u);t(u,v),c(v,`role`,`tablist`),e(v,`tabs tabs-box`);let x=s(`button`,v);t(v,x),c(x,`role`,`tab`),n(()=>{e(x,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),_(x,`click`,()=>{S.value=`preview`}),t(x,r(`效果`));let T=s(`button`,v);t(v,T),c(T,`role`,`tab`),n(()=>{e(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),_(T,`click`,()=>{S.value=`code`}),t(T,r(`代码`));let E=s(`div`,u);t(u,E),e(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let r=S.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});g(()=>p(e,c,l))}),r}):``;g(()=>p(r,E,D))}),t(E,r(` `));let O=i(`rue:slot:anchor`);return t(E,O),n(()=>{let i=S.value===`preview`?d(()=>{let i=o(),c=s(`div`,i);t(i,c),e(c,`card bg-base-100 shadow`);let u=s(`div`,c);t(c,u),e(u,`card-body grid gap-6`);let d=s(`section`,u);t(u,d),e(d,`space-y-3`);let p=s(`div`,d);t(d,p),e(p,`flex flex-wrap items-center justify-between gap-3`);let m=s(`h2`,p);t(p,m),e(m,`text-xl font-semibold`),t(m,r(`v-show`));let h=s(`button`,p);t(p,h),e(h,`btn btn-sm`),_(h,`click`,()=>{C.value=!C.value});let g=a(h);t(h,g),n(()=>{l(g,C.value?`隐藏面板`:`显示面板`)});let v=s(`div`,d);t(d,v),e(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=s(`div`,v);t(v,b),n(()=>{f(b,y(void 0,C.value))}),e(b,`alert alert-info`),t(b,r(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=s(`p`,d);t(d,x),e(x,`text-sm opacity-70`),t(x,r(`当前状态：`));let S=a(x);t(x,S),n(()=>{l(S,C.value?`显示`:`隐藏`)});let T=s(`section`,u);t(u,T),e(T,`space-y-3`);let E=s(`div`,T);t(T,E),e(E,`flex flex-wrap items-center justify-between gap-3`);let D=s(`h2`,E);t(E,D),e(D,`text-xl font-semibold`),t(D,r(`r-show`));let O=s(`button`,E);t(E,O),e(O,`btn btn-sm`),_(O,`click`,()=>{w.value=!w.value});let k=a(O);t(O,k),n(()=>{l(k,w.value?`隐藏通知`:`显示通知`)});let A=s(`div`,T);t(T,A),e(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=s(`div`,A);t(A,j),n(()=>{f(j,y(void 0,w.value))}),e(j,`alert alert-success`),t(j,r(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=s(`p`,T);t(T,M),e(M,`text-sm opacity-70`),t(M,r(`当前状态：`));let N=a(M);return t(M,N),n(()=>{l(N,w.value?`显示`:`隐藏`)}),i}):``;g(()=>p(i,E,O))}),u})}),h,v),h})};export{S as default};