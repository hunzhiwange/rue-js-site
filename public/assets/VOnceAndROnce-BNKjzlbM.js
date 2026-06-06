import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Wt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,s as h,t as g,tt as _}from"./vapor-runtime-DHPuOjqh.js";import{a as v}from"./vapor-helpers-vapor-CJFAWine.js";import{t as y}from"./Code-Ds9lKLk6.js";import{t as b}from"./SidebarPlaygroundExample-KML-rOvA.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>n(()=>({activeTab:v(`ref:1:0`,()=>r(`code`)),onceMessage:v(`ref:1:1`,()=>r(`首次渲染`)),onceCount:v(`ref:1:2`,()=>r(0))})));return f(n=>{let r=i(),w=l(`rue:component:anchor`);return s(r,w),h(g(b,{children:f(()=>{let n=i(),r=e(`h1`,n);s(n,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,d(`v-once / r-once`));let b=e(`div`,n);s(n,b),m(b,`role`,`tablist`),u(b,`tabs tabs-box`);let w=e(`button`,b);s(b,w),m(w,`role`,`tab`),c(()=>{u(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(w,`click`,()=>{x.value=`preview`}),s(w,d(`效果`));let T=e(`button`,b);s(b,T),m(T,`role`,`tab`),c(()=>{u(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(T,`click`,()=>{x.value=`code`}),s(T,d(`代码`));let E=e(`div`,n);s(n,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=l(`rue:slot:anchor`);s(E,D),c(()=>{let t=x.value===`code`?f(()=>{let t=i(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let o=l(`rue:component:anchor`);return s(r,o),c(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});a(()=>h(e,r,o))}),t}):``;a(()=>h(t,E,D))}),s(E,d(` `));let O=l(`rue:slot:anchor`);return s(E,O),c(()=>{let n=x.value===`preview`?f(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`card bg-base-100 shadow`);let a=e(`div`,r);s(r,a),u(a,`card-body grid gap-6`);let m=e(`section`,a);s(a,m),u(m,`space-y-3`);let g=e(`div`,m);s(m,g),u(g,`flex flex-wrap items-center justify-between gap-3`);let y=e(`h2`,g);s(g,y),u(y,`text-xl font-semibold`),s(y,d(`v-once / r-once`));let b=e(`button`,g);s(g,b),u(b,`btn btn-sm`),t(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),s(b,d(`更新数据`));let x=e(`div`,m);s(m,x),u(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=e(`div`,x);s(x,w),u(w,`space-y-2`);let T=e(`div`,w);s(w,T),u(T,`text-sm opacity-70`),s(T,d(`当前值：`));let E=_(T);s(T,E),c(()=>{p(E,S.value)});let D=l(`rue:slot:anchor`);s(w,D),h(v(`useMemo:3372:3496`,()=>o(()=>f(()=>{let t=i(),n=e(`span`,t);s(t,n),u(n,`badge badge-primary badge-lg`);let r=_(n);return s(n,r),p(r,S.value),t}),[])),w,D);let O=e(`div`,x);s(x,O),u(O,`space-y-2`);let k=e(`div`,O);s(O,k),u(k,`text-sm opacity-70`),s(k,d(`当前计数：`));let A=_(k);s(k,A),c(()=>{p(A,C.value)});let j=l(`rue:slot:anchor`);return s(O,j),h(v(`useMemo:3683:3814`,()=>o(()=>f(()=>{let t=i(),n=e(`span`,t);s(t,n),u(n,`badge badge-secondary badge-lg`),s(n,d(`count: `));let r=_(n);return s(n,r),p(r,C.value),t}),[])),O,j),n}):``;a(()=>h(n,E,O))}),n})}),r,w),r})};export{x as default};