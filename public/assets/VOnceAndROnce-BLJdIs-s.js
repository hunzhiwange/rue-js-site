import{$ as e,Gt as t,Ht as n,J as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>i(`code`)),onceMessage:v(`ref:1:1`,()=>i(`首次渲染`)),onceCount:v(`ref:1:2`,()=>i(0))})));return d(i=>{let m=c(),w=o(`rue:component:anchor`);return r(m,w),h(_(b,{children:d(()=>{let i=c(),m=a(`h1`,i);r(i,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),r(m,e(`v-once / r-once`));let b=a(`div`,i);r(i,b),l(b,`role`,`tablist`),g(b,`tabs tabs-box`);let w=a(`button`,b);r(b,w),l(w,`role`,`tab`),s(()=>{g(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),p(w,`click`,()=>{x.value=`preview`}),r(w,e(`效果`));let T=a(`button`,b);r(b,T),l(T,`role`,`tab`),s(()=>{g(T,`tab ${x.value===`code`?`tab-active`:``}`)}),p(T,`click`,()=>{x.value=`code`}),r(T,e(`代码`));let E=a(`div`,i);r(i,E),g(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=o(`rue:slot:anchor`);r(E,D),s(()=>{let e=x.value===`code`?d(()=>{let e=c(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),g(i,`card-body p-0`);let l=o(`rue:component:anchor`);return r(i,l),s(()=>{let e=_(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VOnceAndROnce: FC = () => {
  const onceMessage = ref('首次渲染');
  const onceCount = ref(0);

  return (
    <div className="grid gap-4">
      <button
        className="btn btn-sm"
        onClick={() => {
          onceCount.value += 1;
          onceMessage.value = \`已更新 \${onceCount.value} 次\`;
        }}
      >
        更新数据
      </button>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前值：{onceMessage.value}</div>
          <span v-once className="badge badge-primary badge-lg">
            {onceMessage.value}
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前计数：{onceCount.value}</div>
          <span r-once className="badge badge-secondary badge-lg">
            count: {onceCount.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VOnceAndROnce;`});n(()=>h(e,i,l))}),e}):``;n(()=>h(e,E,D))}),r(E,e(` `));let O=o(`rue:slot:anchor`);return r(E,O),s(()=>{let i=x.value===`preview`?d(()=>{let n=c(),i=a(`div`,n);r(n,i),g(i,`card bg-base-100 shadow`);let l=a(`div`,i);r(i,l),g(l,`card-body grid gap-6`);let m=a(`section`,l);r(l,m),g(m,`space-y-3`);let _=a(`div`,m);r(m,_),g(_,`flex flex-wrap items-center justify-between gap-3`);let y=a(`h2`,_);r(_,y),g(y,`text-xl font-semibold`),r(y,e(`v-once / r-once`));let b=a(`button`,_);r(_,b),g(b,`btn btn-sm`),p(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),r(b,e(`更新数据`));let x=a(`div`,m);r(m,x),g(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=a(`div`,x);r(x,w),g(w,`space-y-2`);let T=a(`div`,w);r(w,T),g(T,`text-sm opacity-70`),r(T,e(`当前值：`));let E=u(T);r(T,E),s(()=>{f(E,S.value)});let D=o(`rue:slot:anchor`);r(w,D),h(v(`useMemo:3372:3496`,()=>t(()=>d(()=>{let e=c(),t=a(`span`,e);r(e,t),g(t,`badge badge-primary badge-lg`);let n=u(t);return r(t,n),f(n,S.value),e}),[])),w,D);let O=a(`div`,x);r(x,O),g(O,`space-y-2`);let k=a(`div`,O);r(O,k),g(k,`text-sm opacity-70`),r(k,e(`当前计数：`));let A=u(k);r(k,A),s(()=>{f(A,C.value)});let j=o(`rue:slot:anchor`);return r(O,j),h(v(`useMemo:3683:3814`,()=>t(()=>d(()=>{let t=c(),n=a(`span`,t);r(t,n),g(n,`badge badge-secondary badge-lg`),r(n,e(`count: `));let i=u(n);return r(n,i),f(i,C.value),t}),[])),O,j),n}):``;n(()=>h(i,E,O))}),i})}),m,w),m})};export{x as default};