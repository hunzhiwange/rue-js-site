const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-Bxaoex2M.js","assets/vapor-runtime-C1rlwc61.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-D9dNBMD6.js"])))=>i.map(i=>d[i]);
import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Suspense-BszUSQSZ.js";import{t as _}from"./useComponent-LlDExZyC.js";import{t as v}from"./preload-helper-CsoeaaUJ.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./src-BLzF0BqW.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=e=>new Promise(t=>setTimeout(t,e)),C=(e,t)=>S(t).then(e),w=_(()=>C(()=>v(()=>import(`./AsyncRevenuePanel-Bxaoex2M.js`),__vite__mapDeps([0,1,2])),900)),T=_(()=>C(()=>v(()=>import(`./AsyncActivityPanel-D9dNBMD6.js`),__vite__mapDeps([3,1,2])),1400)),E=_(()=>C(()=>v(()=>import(`./AsyncActivityPanel-D9dNBMD6.js`),__vite__mapDeps([3,1,2])),1800),{loading:()=>l(n=>{let i=o(`div`,n);e(i,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let a=o(`span`,i);return t(i,a),e(a,`loading loading-spinner loading-sm mr-2`),t(i,r(`本地 loading：这个异步组件设置了 suspensible: false`)),i}),suspensible:!1}),D=r=>l(a=>{let s=o(`div`,a);e(s,`rounded-box border border-dashed border-base-300 bg-base-200 p-4`);let c=o(`div`,s);t(s,c),e(c,`flex items-center gap-3`);let l=o(`span`,c);t(c,l),e(l,`loading loading-spinner loading-md text-primary`);let d=o(`div`,c);t(c,d);let f=o(`div`,d);t(d,f),e(f,`font-semibold`);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let e=r.title;p(()=>u(e,f,m))});let h=o(`div`,d);t(d,h),e(h,`text-sm opacity-70`);let g=i(`rue:slot:anchor`);t(h,g),n(()=>{let e=r.detail;p(()=>u(e,h,g))});let _=o(`div`,s);t(s,_),e(_,`mt-4 grid gap-3 md:grid-cols-2`);let v=o(`div`,_);t(_,v),e(v,`skeleton h-24 rounded-box`);let y=o(`div`,_);return t(_,y),e(y,`skeleton h-24 rounded-box`),s}),O=`import { Suspense, useComponent } from '@rue-js/rue';

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
}`,k=()=>{let{activeTab:_}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>c(`preview`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(x,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`mb-4 text-5xl font-semibold md:mb-4`),t(f,r(`Suspense 异步边界`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let v=o(`button`,h);t(h,v),s(v,`role`,`tab`),n(()=>{e(v,String(`tab ${_.value===`preview`?`tab-active`:``}`))}),m(v,`click`,()=>{_.value=`preview`}),t(v,r(`效果`));let x=o(`button`,h);t(h,x),s(x,`role`,`tab`),n(()=>{e(x,String(`tab ${_.value===`code`?`tab-active`:``}`))}),m(x,`click`,()=>{_.value=`code`}),t(x,r(`代码`));let S=o(`div`,c);t(c,S),n(()=>{e(S,String(`mt-4 grid gap-6 ${_.value===`preview`?``:`hidden`}`))});let C=o(`div`,S);t(S,C),e(C,`card bg-base-100 shadow`);let k=o(`div`,C);t(C,k),e(k,`card-body gap-6`);let A=o(`section`,k);t(k,A),e(A,`space-y-3`);let j=o(`div`,A);t(A,j);let M=o(`h2`,j);t(j,M),e(M,`text-xl font-semibold`),t(M,r(`1. 一个边界等待多个异步组件`));let N=o(`p`,j);t(j,N),e(N,`text-sm opacity-75`),t(N,r(`两个子组件都通过 useComponent 动态导入；任意一个未完成时，Suspense 显示同一个 fallback。`));let P=o(`div`,A);t(A,P),e(P,`rounded-box border border-dashed border-base-300 p-4`);let F=i(`rue:component:anchor`);t(P,F);let I=l(()=>{let n=a(),r=o(`div`,n);t(n,r),e(r,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let s=i(`rue:component:anchor`);t(r,s),u(d(w,{period:`Q2`}),r,s);let c=i(`rue:component:anchor`);return t(r,c),u(d(T,{title:`统一边界内的活动流`}),r,c),n});n(()=>{let e=d(g,{fallback:b(D,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:I});p(()=>u(e,P,F))});let L=o(`section`,k);t(k,L),e(L,`space-y-3`);let R=o(`div`,L);t(L,R);let z=o(`h2`,R);t(R,z),e(z,`text-xl font-semibold`),t(z,r(`2. 退出 Suspense 控制`));let B=o(`p`,R);t(R,B),e(B,`text-sm opacity-75`),t(B,r(`useComponent 设置 suspensible: false 后，即使外层有 Suspense，也会使用组件自己的 loading。`));let V=o(`div`,L);t(L,V),e(V,`rounded-box border border-dashed border-base-300 p-4`);let H=i(`rue:component:anchor`);t(V,H);let U=d(E,{title:`本地 loading 控制的活动流`});n(()=>{let e=d(g,{fallback:b(D,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:U});p(()=>u(e,V,H))});let W=o(`div`,k);t(k,W),s(W,`role`,`alert`),e(W,`alert alert-info alert-soft`);let G=o(`span`,W);t(W,G),t(G,r(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let K=o(`div`,c);t(c,K),n(()=>{e(K,String(`mt-4 grid gap-6 ${_.value===`code`?``:`hidden`}`))});let q=o(`div`,K);t(K,q),e(q,`card bg-base-100 shadow`);let J=o(`div`,q);t(q,J),e(J,`card-body p-0`);let Y=i(`rue:component:anchor`);return t(J,Y),n(()=>{let e=d(y,{className:`h-full`,lang:`tsx`,code:O});p(()=>u(e,J,Y))}),c})}),f,h),f})};export{k as default};