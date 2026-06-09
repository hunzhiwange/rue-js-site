import{$ as e,Gt as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>m(()=>({activeTab:v(`ref:1:0`,()=>a(`code`)),onceMessage:v(`ref:1:1`,()=>a(`首次渲染`)),onceCount:v(`ref:1:2`,()=>a(0))})));return d(a=>{let m=i(),w=c(`rue:component:anchor`);return s(m,w),h(g(b,{children:d(()=>{let a=i(),m=e(`h1`,a);s(a,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),s(m,u(`v-once / r-once`));let b=e(`div`,a);s(a,b),p(b,`role`,`tablist`),l(b,`tabs tabs-box`);let w=e(`button`,b);s(b,w),p(w,`role`,`tab`),o(()=>{l(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),r(w,`click`,()=>{x.value=`preview`}),s(w,u(`效果`));let T=e(`button`,b);s(b,T),p(T,`role`,`tab`),o(()=>{l(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),r(T,`click`,()=>{x.value=`code`}),s(T,u(`代码`));let E=e(`div`,a);s(a,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=c(`rue:slot:anchor`);s(E,D),o(()=>{let t=x.value===`code`?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});n(()=>h(e,a,u))}),t}):``;n(()=>h(t,E,D))}),s(E,u(` `));let O=c(`rue:slot:anchor`);return s(E,O),o(()=>{let a=x.value===`preview`?d(()=>{let n=i(),a=e(`div`,n);s(n,a),l(a,`card bg-base-100 shadow`);let p=e(`div`,a);s(a,p),l(p,`card-body grid gap-6`);let m=e(`section`,p);s(p,m),l(m,`space-y-3`);let g=e(`div`,m);s(m,g),l(g,`flex flex-wrap items-center justify-between gap-3`);let y=e(`h2`,g);s(g,y),l(y,`text-xl font-semibold`),s(y,u(`v-once / r-once`));let b=e(`button`,g);s(g,b),l(b,`btn btn-sm`),r(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),s(b,u(`更新数据`));let x=e(`div`,m);s(m,x),l(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=e(`div`,x);s(x,w),l(w,`space-y-2`);let T=e(`div`,w);s(w,T),l(T,`text-sm opacity-70`),s(T,u(`当前值：`));let E=_(T);s(T,E),o(()=>{f(E,S.value)});let D=c(`rue:slot:anchor`);s(w,D),h(v(`useMemo:3372:3496`,()=>t(()=>d(()=>{let t=i(),n=e(`span`,t);s(t,n),l(n,`badge badge-primary badge-lg`);let r=_(n);return s(n,r),f(r,S.value),t}),[])),w,D);let O=e(`div`,x);s(x,O),l(O,`space-y-2`);let k=e(`div`,O);s(O,k),l(k,`text-sm opacity-70`),s(k,u(`当前计数：`));let A=_(k);s(k,A),o(()=>{f(A,C.value)});let j=c(`rue:slot:anchor`);return s(O,j),h(v(`useMemo:3683:3814`,()=>t(()=>d(()=>{let t=i(),n=e(`span`,t);s(t,n),l(n,`badge badge-secondary badge-lg`),s(n,u(`count: `));let r=_(n);return s(n,r),f(r,C.value),t}),[])),O,j),n}):``;n(()=>h(a,E,O))}),a})}),m,w),m})};export{x as default};