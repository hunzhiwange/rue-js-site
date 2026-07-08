import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,in as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{r as b}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>f(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),onceMessage:v(`ref:1:1`,()=>n(`首次渲染`)),onceCount:v(`ref:1:2`,()=>n(0))})));return l(n=>{let f=u(),w=_(`rue:component:anchor`);return e(f,w),d(h(b,{children:l(()=>{let n=u(),f=m(`h1`,n);e(n,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),e(f,c(`v-once / r-once`));let b=m(`div`,n);e(n,b),o(b,`role`,`tablist`),p(b,`tabs tabs-box`);let w=m(`button`,b);e(b,w),o(w,`role`,`tab`),t(()=>{p(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(w,`click`,()=>{x.value=`preview`}),e(w,c(`效果`));let T=m(`button`,b);e(b,T),o(T,`role`,`tab`),t(()=>{p(T,`tab ${x.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{x.value=`code`}),e(T,c(`代码`));let E=m(`div`,n);e(n,E),p(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=_(`rue:slot:anchor`);e(E,D),t(()=>{let n=x.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});g(()=>d(e,i,a))}),n}):``;g(()=>d(n,E,D))}),e(E,c(` `));let O=_(`rue:slot:anchor`);return e(E,O),t(()=>{let n=x.value===`preview`?l(()=>{let n=u(),o=m(`div`,n);e(n,o),p(o,`card bg-base-100 shadow`);let f=m(`div`,o);e(o,f),p(f,`card-body grid gap-6`);let h=m(`section`,f);e(f,h),p(h,`space-y-3`);let g=m(`div`,h);e(h,g),p(g,`flex flex-wrap items-center justify-between gap-3`);let y=m(`h2`,g);e(g,y),p(y,`text-xl font-semibold`),e(y,c(`v-once / r-once`));let b=m(`button`,g);e(g,b),p(b,`btn btn-sm`),r(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),e(b,c(`更新数据`));let x=m(`div`,h);e(h,x),p(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=m(`div`,x);e(x,w),p(w,`space-y-2`);let T=m(`div`,w);e(w,T),p(T,`text-sm opacity-70`),e(T,c(`当前值：`));let E=i(T);e(T,E),t(()=>{a(E,S.value)});let D=_(`rue:slot:anchor`);e(w,D),d(v(`useMemo:3372:3496`,()=>s(()=>l(()=>{let t=u(),n=m(`span`,t);e(t,n),p(n,`badge badge-primary badge-lg`);let r=i(n);return e(n,r),a(r,S.value),t}),[])),w,D);let O=m(`div`,x);e(x,O),p(O,`space-y-2`);let k=m(`div`,O);e(O,k),p(k,`text-sm opacity-70`),e(k,c(`当前计数：`));let A=i(k);e(k,A),t(()=>{a(A,C.value)});let j=_(`rue:slot:anchor`);return e(O,j),d(v(`useMemo:3683:3814`,()=>s(()=>l(()=>{let t=u(),n=m(`span`,t);e(t,n),p(n,`badge badge-secondary badge-lg`),e(n,c(`count: `));let r=i(n);return e(n,r),a(r,C.value),t}),[])),O,j),n}):``;g(()=>d(n,E,O))}),n})}),f,w),f})};export{x as default};