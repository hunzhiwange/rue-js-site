const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-BEMGBFyA.js","assets/vapor-runtime-aZAg0Qkw.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-nCXt2vj5.js"])))=>i.map(i=>d[i]);
import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{i as g}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as _}from"./Suspense-CQIktluh.js";import{t as v}from"./useComponent-CXY7ukZy.js";import{t as y}from"./preload-helper-CM8YhcCa.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=e=>new Promise(t=>setTimeout(t,e)),C=(e,t)=>S(t).then(e),w=v(()=>C(()=>y(()=>import(`./AsyncRevenuePanel-BEMGBFyA.js`),__vite__mapDeps([0,1,2])),900)),T=v(()=>C(()=>y(()=>import(`./AsyncActivityPanel-nCXt2vj5.js`),__vite__mapDeps([3,1,2])),1400)),E=v(()=>C(()=>y(()=>import(`./AsyncActivityPanel-nCXt2vj5.js`),__vite__mapDeps([3,1,2])),1800),{loading:()=>u(t=>{let n=e(`div`,t);c(n,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let r=e(`span`,n);return o(n,r),c(r,`loading loading-spinner loading-sm mr-2`),o(n,l(`本地 loading：这个异步组件设置了 suspensible: false`)),n}),suspensible:!1}),D=n=>u(r=>{let i=e(`div`,r);c(i,`rounded-box border border-dashed border-base-300 bg-base-200 p-4`);let l=e(`div`,i);o(i,l),c(l,`flex items-center gap-3`);let u=e(`span`,l);o(l,u),c(u,`loading loading-spinner loading-md text-primary`);let d=e(`div`,l);o(l,d);let f=e(`div`,d);o(d,f),c(f,`font-semibold`);let m=s(`rue:slot:anchor`);o(f,m),a(()=>{let e=n.title;t(()=>p(e,f,m))});let h=e(`div`,d);o(d,h),c(h,`text-sm opacity-70`);let g=s(`rue:slot:anchor`);o(h,g),a(()=>{let e=n.detail;t(()=>p(e,h,g))});let _=e(`div`,i);o(i,_),c(_,`mt-4 grid gap-3 md:grid-cols-2`);let v=e(`div`,_);o(_,v),c(v,`skeleton h-24 rounded-box`);let y=e(`div`,_);return o(_,y),c(y,`skeleton h-24 rounded-box`),i}),O=`import { Suspense, useComponent } from '@rue-js/rue';

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
}`,k=()=>{let{activeTab:v}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>i(`preview`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(x,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`mb-4 text-5xl font-semibold md:mb-4`),o(f,l(`Suspense 异步边界`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let y=e(`button`,h);o(h,y),d(y,`role`,`tab`),a(()=>{c(y,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{v.value=`preview`}),o(y,l(`效果`));let x=e(`button`,h);o(h,x),d(x,`role`,`tab`),a(()=>{c(x,String(`tab ${v.value===`code`?`tab-active`:``}`))}),n(x,`click`,()=>{v.value=`code`}),o(x,l(`代码`));let S=e(`div`,i);o(i,S),a(()=>{c(S,String(`mt-4 grid gap-6 ${v.value===`preview`?``:`hidden`}`))});let C=e(`div`,S);o(S,C),c(C,`card bg-base-100 shadow`);let k=e(`div`,C);o(C,k),c(k,`card-body gap-6`);let A=e(`section`,k);o(k,A),c(A,`space-y-3`);let j=e(`div`,A);o(A,j);let M=e(`h2`,j);o(j,M),c(M,`text-xl font-semibold`),o(M,l(`1. 一个边界等待多个异步组件`));let N=e(`p`,j);o(j,N),c(N,`text-sm opacity-75`),o(N,l(`两个子组件都通过 useComponent 动态导入；任意一个未完成时，Suspense 显示同一个 fallback。`));let P=e(`div`,A);o(A,P),c(P,`rounded-box border border-dashed border-base-300 p-4`);let F=s(`rue:component:anchor`);o(P,F);let I=u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let i=s(`rue:component:anchor`);o(n,i),p(m(w,{period:`Q2`}),n,i);let a=s(`rue:component:anchor`);return o(n,a),p(m(T,{title:`统一边界内的活动流`}),n,a),t});a(()=>{let e=m(_,{fallback:g(D,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:I});t(()=>p(e,P,F))});let L=e(`section`,k);o(k,L),c(L,`space-y-3`);let R=e(`div`,L);o(L,R);let z=e(`h2`,R);o(R,z),c(z,`text-xl font-semibold`),o(z,l(`2. 退出 Suspense 控制`));let B=e(`p`,R);o(R,B),c(B,`text-sm opacity-75`),o(B,l(`useComponent 设置 suspensible: false 后，即使外层有 Suspense，也会使用组件自己的 loading。`));let V=e(`div`,L);o(L,V),c(V,`rounded-box border border-dashed border-base-300 p-4`);let H=s(`rue:component:anchor`);o(V,H);let U=m(E,{title:`本地 loading 控制的活动流`});a(()=>{let e=m(_,{fallback:g(D,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:U});t(()=>p(e,V,H))});let W=e(`div`,k);o(k,W),d(W,`role`,`alert`),c(W,`alert alert-info alert-soft`);let G=e(`span`,W);o(W,G),o(G,l(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let K=e(`div`,i);o(i,K),a(()=>{c(K,String(`mt-4 grid gap-6 ${v.value===`code`?``:`hidden`}`))});let q=e(`div`,K);o(K,q),c(q,`card bg-base-100 shadow`);let J=e(`div`,q);o(q,J),c(J,`card-body p-0`);let Y=s(`rue:component:anchor`);return o(J,Y),a(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:O});t(()=>p(e,J,Y))}),i})}),f,h),f})};export{k as default};