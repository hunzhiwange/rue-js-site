import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,wt as g,xt as _}from"./vapor-runtime-BAZOdMd8.js";import{a as v}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./SidebarPlaygroundExample-B8LFNSBu.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>t(()=>({activeTab:v(`ref:1:0`,()=>c(`code`)),onceMessage:v(`ref:1:1`,()=>c(`首次渲染`)),onceCount:v(`ref:1:2`,()=>c(0))})));return l(t=>{let c=n(),w=s(`rue:component:anchor`);return r(c,w),d(m(b,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`v-once / r-once`));let b=a(`div`,t);r(t,b),e(b,`role`,`tablist`),h(b,`tabs tabs-box`);let w=a(`button`,b);r(b,w),e(w,`role`,`tab`),u(()=>{h(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),o(w,`click`,()=>{x.value=`preview`}),r(w,f(`效果`));let T=a(`button`,b);r(b,T),e(T,`role`,`tab`),u(()=>{h(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),o(T,`click`,()=>{x.value=`code`}),r(T,f(`代码`));let E=a(`div`,t);r(t,E),h(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=s(`rue:slot:anchor`);r(E,D),u(()=>{let e=x.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});_(()=>d(e,i,o))}),e}):``;_(()=>d(e,E,D))}),r(E,f(` `));let O=s(`rue:slot:anchor`);return r(E,O),u(()=>{let e=x.value===`preview`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow`);let c=a(`div`,t);r(t,c),h(c,`card-body grid gap-6`);let m=a(`section`,c);r(c,m),h(m,`space-y-3`);let _=a(`div`,m);r(m,_),h(_,`flex flex-wrap items-center justify-between gap-3`);let y=a(`h2`,_);r(_,y),h(y,`text-xl font-semibold`),r(y,f(`v-once / r-once`));let b=a(`button`,_);r(_,b),h(b,`btn btn-sm`),o(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),r(b,f(`更新数据`));let x=a(`div`,m);r(m,x),h(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=a(`div`,x);r(x,w),h(w,`space-y-2`);let T=a(`div`,w);r(w,T),h(T,`text-sm opacity-70`),r(T,f(`当前值：`));let E=i(T);r(T,E),u(()=>{p(E,S.value)});let D=s(`rue:slot:anchor`);r(w,D),d(v(`useMemo:3372:3496`,()=>g(()=>l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`badge badge-primary badge-lg`);let o=i(t);return r(t,o),p(o,S.value),e}),[])),w,D);let O=a(`div`,x);r(x,O),h(O,`space-y-2`);let k=a(`div`,O);r(O,k),h(k,`text-sm opacity-70`),r(k,f(`当前计数：`));let A=i(k);r(k,A),u(()=>{p(A,C.value)});let j=s(`rue:slot:anchor`);return r(O,j),d(v(`useMemo:3683:3814`,()=>g(()=>l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`badge badge-secondary badge-lg`),r(t,f(`count: `));let o=i(t);return r(t,o),p(o,C.value),e}),[])),O,j),e}):``;_(()=>d(e,E,O))}),t})}),c,w),c})};export{x as default};