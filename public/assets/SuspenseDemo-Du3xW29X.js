const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-BBfq8ghn.js","assets/vapor-runtime-ACs_OvwU.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-7czq0JpD.js"])))=>i.map(i=>d[i]);
import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as g}from"./Suspense-ClgoXqHD.js";import{t as _}from"./useComponent-wqyAoohC.js";import{t as v}from"./preload-helper-CsoeaaUJ.js";import{t as y}from"./src-B0RvnZVV.js";import{t as b}from"./Code-CliOXHNE.js";import{t as x}from"./SidebarPlaygroundExample-DXnPmR3z.js";var S=e=>new Promise(t=>setTimeout(t,e)),C=(e,t)=>S(t).then(e),w=_(()=>C(()=>v(()=>import(`./AsyncRevenuePanel-BBfq8ghn.js`),__vite__mapDeps([0,1,2])),900)),T=_(()=>C(()=>v(()=>import(`./AsyncActivityPanel-7czq0JpD.js`),__vite__mapDeps([3,1,2])),1400)),E=_(()=>C(()=>v(()=>import(`./AsyncActivityPanel-7czq0JpD.js`),__vite__mapDeps([3,1,2])),1800),{loading:()=>c(e=>{let t=i(`div`,e);p(t,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let n=i(`span`,t);return r(t,n),p(n,`loading loading-spinner loading-sm mr-2`),r(t,d(`本地 loading：这个异步组件设置了 suspensible: false`)),t}),suspensible:!1}),D=e=>c(t=>{let n=i(`div`,t);p(n,`rounded-box border border-dashed border-base-300 bg-base-200 p-4`);let a=i(`div`,n);r(n,a),p(a,`flex items-center gap-3`);let s=i(`span`,a);r(a,s),p(s,`loading loading-spinner loading-md text-primary`);let c=i(`div`,a);r(a,c);let d=i(`div`,c);r(c,d),p(d,`font-semibold`);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let t=e.title;m(()=>u(t,d,f))});let h=i(`div`,c);r(c,h),p(h,`text-sm opacity-70`);let g=o(`rue:slot:anchor`);r(h,g),l(()=>{let t=e.detail;m(()=>u(t,h,g))});let _=i(`div`,n);r(n,_),p(_,`mt-4 grid gap-3 md:grid-cols-2`);let v=i(`div`,_);r(_,v),p(v,`skeleton h-24 rounded-box`);let y=i(`div`,_);return r(_,y),p(y,`skeleton h-24 rounded-box`),n}),O=`import { Suspense, useComponent } from '@rue-js/rue';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const AsyncRevenuePanel = useComponent(() =>
  wait(900).then(() => import('./suspense/AsyncRevenuePanel')),
);

const AsyncActivityPanel = useComponent(() =>
  wait(1400).then(() => import('./suspense/AsyncActivityPanel')),
);

const AsyncLocalActivityPanel = useComponent(
  () => wait(1800).then(() => import('./suspense/AsyncActivityPanel')),
  {
    loading: () => <div>本地 loading</div>,
    suspensible: false,
  },
);

export default function Demo() {
  return (
    <Suspense fallback={<div>统一 fallback...</div>}>
      <AsyncRevenuePanel period="Q2" />
      <AsyncActivityPanel title="统一边界内的活动流" />
    </Suspense>
  );
}`,k=()=>{let{activeTab:_}=h(`useSetup:0:0`,()=>t(()=>({activeTab:h(`ref:1:0`,()=>s(`preview`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(x,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`mb-4 text-5xl font-semibold md:mb-4`),r(s,d(`Suspense 异步边界`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let v=i(`button`,h);r(h,v),e(v,`role`,`tab`),l(()=>{p(v,String(`tab ${_.value===`preview`?`tab-active`:``}`))}),a(v,`click`,()=>{_.value=`preview`}),r(v,d(`效果`));let x=i(`button`,h);r(h,x),e(x,`role`,`tab`),l(()=>{p(x,String(`tab ${_.value===`code`?`tab-active`:``}`))}),a(x,`click`,()=>{_.value=`code`}),r(x,d(`代码`));let S=i(`div`,t);r(t,S),l(()=>{p(S,String(`mt-4 grid gap-6 ${_.value===`preview`?``:`hidden`}`))});let C=i(`div`,S);r(S,C),p(C,`card bg-base-100 shadow`);let k=i(`div`,C);r(C,k),p(k,`card-body gap-6`);let A=i(`section`,k);r(k,A),p(A,`space-y-3`);let j=i(`div`,A);r(A,j);let M=i(`h2`,j);r(j,M),p(M,`text-xl font-semibold`),r(M,d(`1. 一个边界等待多个异步组件`));let N=i(`p`,j);r(j,N),p(N,`text-sm opacity-75`),r(N,d(`两个子组件都通过 useComponent 动态导入；任意一个未完成时，Suspense 显示同一个 fallback。`));let P=i(`div`,A);r(A,P),p(P,`rounded-box border border-dashed border-base-300 p-4`);let F=o(`rue:component:anchor`);r(P,F);let I=c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let a=o(`rue:component:anchor`);r(t,a),u(f(w,{period:`Q2`}),t,a);let s=o(`rue:component:anchor`);return r(t,s),u(f(T,{title:`统一边界内的活动流`}),t,s),e});l(()=>{let e=f(g,{fallback:y(D,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:I});m(()=>u(e,P,F))});let L=i(`section`,k);r(k,L),p(L,`space-y-3`);let R=i(`div`,L);r(L,R);let z=i(`h2`,R);r(R,z),p(z,`text-xl font-semibold`),r(z,d(`2. 退出 Suspense 控制`));let B=i(`p`,R);r(R,B),p(B,`text-sm opacity-75`),r(B,d(`useComponent 设置 suspensible: false 后，即使外层有 Suspense，也会使用组件自己的 loading。`));let V=i(`div`,L);r(L,V),p(V,`rounded-box border border-dashed border-base-300 p-4`);let H=o(`rue:component:anchor`);r(V,H);let U=f(E,{title:`本地 loading 控制的活动流`});l(()=>{let e=f(g,{fallback:y(D,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:U});m(()=>u(e,V,H))});let W=i(`div`,k);r(k,W),e(W,`role`,`alert`),p(W,`alert alert-info alert-soft`);let G=i(`span`,W);r(W,G),r(G,d(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let K=i(`div`,t);r(t,K),l(()=>{p(K,String(`mt-4 grid gap-6 ${_.value===`code`?``:`hidden`}`))});let q=i(`div`,K);r(K,q),p(q,`card bg-base-100 shadow`);let J=i(`div`,q);r(q,J),p(J,`card-body p-0`);let Y=o(`rue:component:anchor`);return r(J,Y),l(()=>{let e=f(b,{className:`h-full`,lang:`tsx`,code:O});m(()=>u(e,J,Y))}),t})}),s,h),s})};export{k as default};