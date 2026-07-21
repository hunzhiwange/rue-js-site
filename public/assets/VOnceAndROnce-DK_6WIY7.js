import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p,xn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>e(()=>({activeTab:v(`ref:1:0`,()=>l(`code`)),onceMessage:v(`ref:1:1`,()=>l(`首次渲染`)),onceCount:v(`ref:1:2`,()=>l(0))})));return h(e=>{let l=a(),w=i(`rue:component:anchor`);return d(l,w),g(_(b,{children:h(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`v-once / r-once`));let b=u(`div`,e);d(e,b),t(b,`role`,`tablist`),r(b,`tabs tabs-box`);let w=u(`button`,b);d(b,w),t(w,`role`,`tab`),f(()=>{r(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),c(w,`click`,()=>{x.value=`preview`}),d(w,s(`效果`));let T=u(`button`,b);d(b,T),t(T,`role`,`tab`),f(()=>{r(T,`tab ${x.value===`code`?`tab-active`:``}`)}),c(T,`click`,()=>{x.value=`code`}),d(T,s(`代码`));let E=u(`div`,e);d(e,E),r(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);d(E,D),f(()=>{let e=x.value===`code`?h(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=_(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});p(()=>g(e,n,o))}),e}):``;p(()=>g(e,E,D))}),d(E,s(` `));let O=i(`rue:slot:anchor`);return d(E,O),f(()=>{let e=x.value===`preview`?h(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow`);let l=u(`div`,t);d(t,l),r(l,`card-body grid gap-6`);let p=u(`section`,l);d(l,p),r(p,`space-y-3`);let _=u(`div`,p);d(p,_),r(_,`flex flex-wrap items-center justify-between gap-3`);let y=u(`h2`,_);d(_,y),r(y,`text-xl font-semibold`),d(y,s(`v-once / r-once`));let b=u(`button`,_);d(_,b),r(b,`btn btn-sm`),c(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),d(b,s(`更新数据`));let x=u(`div`,p);d(p,x),r(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=u(`div`,x);d(x,w),r(w,`space-y-2`);let T=u(`div`,w);d(w,T),r(T,`text-sm opacity-70`),d(T,s(`当前值：`));let E=o(T);d(T,E),f(()=>{n(E,S.value)});let D=i(`rue:slot:anchor`);d(w,D),g(v(`useMemo:3372:3496`,()=>m(()=>h(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`badge badge-primary badge-lg`);let i=o(t);return d(t,i),n(i,S.value),e}),[])),w,D);let O=u(`div`,x);d(x,O),r(O,`space-y-2`);let k=u(`div`,O);d(O,k),r(k,`text-sm opacity-70`),d(k,s(`当前计数：`));let A=o(k);d(k,A),f(()=>{n(A,C.value)});let j=i(`rue:slot:anchor`);return d(O,j),g(v(`useMemo:3683:3814`,()=>m(()=>h(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`badge badge-secondary badge-lg`),d(t,s(`count: `));let i=o(t);return d(t,i),n(i,C.value),e}),[])),O,j),e}):``;p(()=>g(e,E,O))}),e})}),l,w),l})};export{x as default};