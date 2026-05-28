const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-3fgdfaaV.js","assets/vapor-runtime-BR_2rwNk.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-Bu-i-mhC.js"])))=>i.map(i=>d[i]);
import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{r as g}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as _}from"./Suspense-CCHOoI9K.js";import{t as v}from"./useComponent-Dr3QEUK3.js";import{t as y}from"./preload-helper-CM8YhcCa.js";import{t as b}from"./Code-B_4lzH85.js";import{t as x}from"./SidebarPlaygroundExample-CtM-WHq_.js";var S=e=>new Promise(t=>setTimeout(t,e)),C=(e,t)=>S(t).then(e),w=v(()=>C(()=>y(()=>import(`./AsyncRevenuePanel-3fgdfaaV.js`),__vite__mapDeps([0,1,2])),900)),T=v(()=>C(()=>y(()=>import(`./AsyncActivityPanel-Bu-i-mhC.js`),__vite__mapDeps([3,1,2])),1400)),E=v(()=>C(()=>y(()=>import(`./AsyncActivityPanel-Bu-i-mhC.js`),__vite__mapDeps([3,1,2])),1800),{loading:()=>u(t=>{let n=e(`div`,t);l(n,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let r=e(`span`,n);return o(n,r),l(r,`loading loading-spinner loading-sm mr-2`),o(n,d(`本地 loading：这个异步组件设置了 suspensible: false`)),n}),suspensible:!1}),D=t=>u(n=>{let r=e(`div`,n);l(r,`rounded-box border border-dashed border-base-300 bg-base-200 p-4`);let i=e(`div`,r);o(r,i),l(i,`flex items-center gap-3`);let u=e(`span`,i);o(i,u),l(u,`loading loading-spinner loading-md text-primary`);let d=e(`div`,i);o(i,d);let p=e(`div`,d);o(d,p),l(p,`font-semibold`);let m=c(`rue:slot:anchor`);o(p,m),s(()=>{let e=t.title;a(()=>f(e,p,m))});let h=e(`div`,d);o(d,h),l(h,`text-sm opacity-70`);let g=c(`rue:slot:anchor`);o(h,g),s(()=>{let e=t.detail;a(()=>f(e,h,g))});let _=e(`div`,r);o(r,_),l(_,`mt-4 grid gap-3 md:grid-cols-2`);let v=e(`div`,_);o(_,v),l(v,`skeleton h-24 rounded-box`);let y=e(`div`,_);return o(_,y),l(y,`skeleton h-24 rounded-box`),r}),O=`import { Suspense, useComponent } from '@rue-js/rue';

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
}`,k=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`preview`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(x,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`mb-4 text-5xl font-semibold md:mb-4`),o(r,d(`Suspense 异步边界`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let y=e(`button`,h);o(h,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{v.value=`preview`}),o(y,d(`效果`));let x=e(`button`,h);o(h,x),p(x,`role`,`tab`),s(()=>{l(x,String(`tab ${v.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{v.value=`code`}),o(x,d(`代码`));let S=e(`div`,n);o(n,S),s(()=>{l(S,String(`mt-4 grid gap-6 ${v.value===`preview`?``:`hidden`}`))});let C=e(`div`,S);o(S,C),l(C,`card bg-base-100 shadow`);let k=e(`div`,C);o(C,k),l(k,`card-body gap-6`);let A=e(`section`,k);o(k,A),l(A,`space-y-3`);let j=e(`div`,A);o(A,j);let M=e(`h2`,j);o(j,M),l(M,`text-xl font-semibold`),o(M,d(`1. 一个边界等待多个异步组件`));let N=e(`p`,j);o(j,N),l(N,`text-sm opacity-75`),o(N,d(`两个子组件都通过 useComponent 动态导入；任意一个未完成时，Suspense 显示同一个 fallback。`));let P=e(`div`,A);o(A,P),l(P,`rounded-box border border-dashed border-base-300 p-4`);let F=c(`rue:component:anchor`);o(P,F);let I=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let r=c(`rue:component:anchor`);o(n,r),f(m(w,{period:`Q2`}),n,r);let a=c(`rue:component:anchor`);return o(n,a),f(m(T,{title:`统一边界内的活动流`}),n,a),t});s(()=>{let e=m(_,{fallback:g(D,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:I});a(()=>f(e,P,F))});let L=e(`section`,k);o(k,L),l(L,`space-y-3`);let R=e(`div`,L);o(L,R);let z=e(`h2`,R);o(R,z),l(z,`text-xl font-semibold`),o(z,d(`2. 退出 Suspense 控制`));let B=e(`p`,R);o(R,B),l(B,`text-sm opacity-75`),o(B,d(`useComponent 设置 suspensible: false 后，即使外层有 Suspense，也会使用组件自己的 loading。`));let V=e(`div`,L);o(L,V),l(V,`rounded-box border border-dashed border-base-300 p-4`);let H=c(`rue:component:anchor`);o(V,H);let U=m(E,{title:`本地 loading 控制的活动流`});s(()=>{let e=m(_,{fallback:g(D,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:U});a(()=>f(e,V,H))});let W=e(`div`,k);o(k,W),p(W,`role`,`alert`),l(W,`alert alert-info alert-soft`);let G=e(`span`,W);o(W,G),o(G,d(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let K=e(`div`,n);o(n,K),s(()=>{l(K,String(`mt-4 grid gap-6 ${v.value===`code`?``:`hidden`}`))});let q=e(`div`,K);o(K,q),l(q,`card bg-base-100 shadow`);let J=e(`div`,q);o(q,J),l(J,`card-body p-0`);let Y=c(`rue:component:anchor`);return o(J,Y),s(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:O});a(()=>f(e,J,Y))}),n})}),r,h),r})};export{k as default};