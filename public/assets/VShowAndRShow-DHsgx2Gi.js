import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,pt as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,r as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=()=>{let{activeTab:S,showChart:C,showNotice:w}=v(`useSetup:0:0`,()=>o(()=>({activeTab:v(`ref:1:0`,()=>_(`code`)),showChart:v(`ref:1:1`,()=>_(!0)),showNotice:v(`ref:1:2`,()=>_(!1))})));return l(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),f(h(x,{children:l(()=>{let o=e(),_=s(`h1`,o);i(o,_),u(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,g(`v-show / r-show`));let v=s(`div`,o);i(o,v),m(v,`role`,`tablist`),u(v,`tabs tabs-box`);let x=s(`button`,v);i(v,x),m(x,`role`,`tab`),n(()=>{u(x,`tab ${S.value===`preview`?`tab-active`:``}`)}),a(x,`click`,()=>{S.value=`preview`}),i(x,g(`效果`));let T=s(`button`,v);i(v,T),m(T,`role`,`tab`),n(()=>{u(T,`tab ${S.value===`code`?`tab-active`:``}`)}),a(T,`click`,()=>{S.value=`code`}),i(T,g(`代码`));let E=s(`div`,o);i(o,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=t(`rue:slot:anchor`);i(E,D),n(()=>{let a=S.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VShowAndRShow;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,E,D))}),i(E,g(` `));let O=t(`rue:slot:anchor`);return i(E,O),n(()=>{let t=S.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body grid gap-6`);let l=s(`section`,o);i(o,l),u(l,`space-y-3`);let f=s(`div`,l);i(l,f),u(f,`flex flex-wrap items-center justify-between gap-3`);let m=s(`h2`,f);i(f,m),u(m,`text-xl font-semibold`),i(m,g(`v-show`));let h=s(`button`,f);i(f,h),u(h,`btn btn-sm`),a(h,`click`,()=>{C.value=!C.value});let _=d(h);i(h,_),n(()=>{c(_,C.value?`隐藏面板`:`显示面板`)});let v=s(`div`,l);i(l,v),u(v,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let b=s(`div`,v);i(v,b),n(()=>{p(b,y(void 0,C.value))}),u(b,`alert alert-info`),i(b,g(`v-show 会通过样式切换可见性，但节点仍然保留在 DOM 中。`));let x=s(`p`,l);i(l,x),u(x,`text-sm opacity-70`),i(x,g(`当前状态：`));let S=d(x);i(x,S),n(()=>{c(S,C.value?`显示`:`隐藏`)});let T=s(`section`,o);i(o,T),u(T,`space-y-3`);let E=s(`div`,T);i(T,E),u(E,`flex flex-wrap items-center justify-between gap-3`);let D=s(`h2`,E);i(E,D),u(D,`text-xl font-semibold`),i(D,g(`r-show`));let O=s(`button`,E);i(E,O),u(O,`btn btn-sm`),a(O,`click`,()=>{w.value=!w.value});let k=d(O);i(O,k),n(()=>{c(k,w.value?`隐藏通知`:`显示通知`)});let A=s(`div`,T);i(T,A),u(A,`min-h-28 rounded-box border border-dashed border-base-300 p-4`);let j=s(`div`,A);i(A,j),n(()=>{p(j,y(void 0,w.value))}),u(j,`alert alert-success`),i(j,g(`r-show 适合需要保留节点状态、只切换显示的场景。`));let M=s(`p`,T);i(T,M),u(M,`text-sm opacity-70`),i(M,g(`当前状态：`));let N=d(M);return i(M,N),n(()=>{c(N,w.value?`显示`:`隐藏`)}),t}):``;r(()=>f(t,E,O))}),o})}),_,v),_})};export{S as default};