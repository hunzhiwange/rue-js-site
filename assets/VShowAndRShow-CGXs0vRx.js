import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,q as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-CKndxKFn.js";import{a as _,r as v}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as y}from"./Code-B1JFTu6m.js";import{t as b}from"./SidebarPlaygroundExample-DlK8mtjC.js";var x=()=>{let{activeTab:x,showChart:S,showNotice:C}=_(`useSetup:0:0`,()=>g(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),showChart:_(`ref:1:1`,()=>p(!0)),showNotice:_(`ref:1:2`,()=>p(!1))})));return h(()=>{let p=o(),g=a(`rue:component:anchor`);return u(p,g),l(m(b,{children:h(()=>{let p=o(),g=t(`h1`);u(p,g),s(g,`text-5xl font-semibold mb-4 md:mb-4`),u(g,r(`v-show / r-show`));let _=t(`div`);u(p,_),n(_,`role`,`tablist`),s(_,`tabs tabs-box`);let b=t(`button`);u(_,b),n(b,`role`,`tab`),d(()=>{s(b,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),e(b,`click`,()=>{x.value=`preview`}),u(b,r(`效果`));let w=t(`button`);u(_,w),n(w,`role`,`tab`),d(()=>{s(w,String(`tab ${x.value===`code`?`tab-active`:``}`))}),e(w,`click`,()=>{x.value=`code`}),u(w,r(`代码`));let T=t(`div`);u(p,T),s(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);u(T,E),d(()=>{l(x.value===`code`?h(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`}),r,i)}),e}):``,T,E)}),u(T,r(` `));let D=a(`rue:slot:anchor`);return u(T,D),d(()=>{l(x.value===`preview`?h(()=>{let n=o(),a=t(`div`);u(n,a),s(a,`card bg-base-100 shadow`);let l=t(`div`);u(a,l),s(l,`card-body grid gap-6`);let p=t(`section`);u(l,p),s(p,`space-y-3`);let m=t(`div`);u(p,m),s(m,`flex flex-wrap items-center justify-between gap-3`);let h=t(`h2`);u(m,h),s(h,`text-xl font-semibold`),u(h,r(`v-show`));let g=t(`button`);u(m,g),s(g,`btn btn-sm`),e(g,`click`,()=>{S.value=!S.value});let _=i(g);u(g,_),d(()=>{c(_,S.value?`隐藏面板`:`显示面板`)});let y=t(`div`);u(p,y),s(y,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=t(`div`);u(y,b),d(()=>{f(b,v(void 0,S.value))}),s(b,`alert alert-info`),u(b,r(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=t(`p`);u(p,x),s(x,`text-sm opacity-70`),u(x,r(`当前状态：`));let w=i(x);u(x,w),d(()=>{c(w,S.value?`显示`:`隐藏`)});let T=t(`section`);u(l,T),s(T,`space-y-3`);let E=t(`div`);u(T,E),s(E,`flex flex-wrap items-center justify-between gap-3`);let D=t(`h2`);u(E,D),s(D,`text-xl font-semibold`),u(D,r(`r-show`));let O=t(`button`);u(E,O),s(O,`btn btn-sm`),e(O,`click`,()=>{C.value=!C.value});let k=i(O);u(O,k),d(()=>{c(k,C.value?`隐藏通知`:`显示通知`)});let A=t(`div`);u(T,A),s(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=t(`div`);u(A,j),d(()=>{f(j,v(void 0,C.value))}),s(j,`alert alert-success`),u(j,r(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=t(`p`);u(T,M),s(M,`text-sm opacity-70`),u(M,r(`当前状态：`));let N=i(M);return u(M,N),d(()=>{c(N,C.value?`显示`:`隐藏`)}),n}):``,T,D)}),p})}),p,g),p})};export{x as default};