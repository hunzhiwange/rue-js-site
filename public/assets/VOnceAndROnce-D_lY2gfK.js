import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nn as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>o(()=>({activeTab:v(`ref:1:0`,()=>t(`code`)),onceMessage:v(`ref:1:1`,()=>t(`首次渲染`)),onceCount:v(`ref:1:2`,()=>t(0))})));return c(t=>{let o=h(),w=a(`rue:component:anchor`);return n(o,w),f(m(b,{children:c(()=>{let t=h(),o=d(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,p(`v-once / r-once`));let b=d(`div`,t);n(t,b),l(b,`role`,`tablist`),i(b,`tabs tabs-box`);let w=d(`button`,b);n(b,w),l(w,`role`,`tab`),_(()=>{i(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(w,`click`,()=>{x.value=`preview`}),n(w,p(`效果`));let T=d(`button`,b);n(b,T),l(T,`role`,`tab`),_(()=>{i(T,`tab ${x.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{x.value=`code`}),n(T,p(`代码`));let E=d(`div`,t);n(t,E),i(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),_(()=>{let t=x.value===`code`?c(()=>{let t=h(),r=d(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),_(()=>{let t=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});e(()=>f(t,o,s))}),t}):``;e(()=>f(t,E,D))}),n(E,p(` `));let O=a(`rue:slot:anchor`);return n(E,O),_(()=>{let t=x.value===`preview`?c(()=>{let e=h(),t=d(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let o=d(`div`,t);n(t,o),i(o,`card-body grid gap-6`);let l=d(`section`,o);n(o,l),i(l,`space-y-3`);let m=d(`div`,l);n(l,m),i(m,`flex flex-wrap items-center justify-between gap-3`);let y=d(`h2`,m);n(m,y),i(y,`text-xl font-semibold`),n(y,p(`v-once / r-once`));let b=d(`button`,m);n(m,b),i(b,`btn btn-sm`),r(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),n(b,p(`更新数据`));let x=d(`div`,l);n(l,x),i(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=d(`div`,x);n(x,w),i(w,`space-y-2`);let T=d(`div`,w);n(w,T),i(T,`text-sm opacity-70`),n(T,p(`当前值：`));let E=s(T);n(T,E),_(()=>{g(E,S.value)});let D=a(`rue:slot:anchor`);n(w,D),f(v(`useMemo:3372:3496`,()=>u(()=>c(()=>{let e=h(),t=d(`span`,e);n(e,t),i(t,`badge badge-primary badge-lg`);let r=s(t);return n(t,r),g(r,S.value),e}),[])),w,D);let O=d(`div`,x);n(x,O),i(O,`space-y-2`);let k=d(`div`,O);n(O,k),i(k,`text-sm opacity-70`),n(k,p(`当前计数：`));let A=s(k);n(k,A),_(()=>{g(A,C.value)});let j=a(`rue:slot:anchor`);return n(O,j),f(v(`useMemo:3683:3814`,()=>u(()=>c(()=>{let e=h(),t=d(`span`,e);n(e,t),i(t,`badge badge-secondary badge-lg`),n(t,p(`count: `));let r=s(t);return n(t,r),g(r,C.value),e}),[])),O,j),e}):``;e(()=>f(t,E,O))}),t})}),o,w),o})};export{x as default};