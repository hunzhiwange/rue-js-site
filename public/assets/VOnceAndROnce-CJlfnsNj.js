import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,pt as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>d(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),onceMessage:v(`ref:1:1`,()=>m(`首次渲染`)),onceCount:v(`ref:1:2`,()=>m(0))})));return l(d=>{let m=t(),w=e(`rue:component:anchor`);return a(m,w),f(h(b,{children:l(()=>{let d=t(),m=r(`h1`,d);a(d,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-once / r-once`));let b=r(`div`,d);a(d,b),c(b,`role`,`tablist`),n(b,`tabs tabs-box`);let w=r(`button`,b);a(b,w),c(w,`role`,`tab`),g(()=>{n(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(w,`click`,()=>{x.value=`preview`}),a(w,s(`效果`));let T=r(`button`,b);a(b,T),c(T,`role`,`tab`),g(()=>{n(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(T,`click`,()=>{x.value=`code`}),a(T,s(`代码`));let E=r(`div`,d);a(d,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),g(()=>{let i=x.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,E,D))}),a(E,s(` `));let O=e(`rue:slot:anchor`);return a(E,O),g(()=>{let c=x.value===`preview`?l(()=>{let c=t(),u=r(`div`,c);a(c,u),n(u,`card bg-base-100 shadow`);let d=r(`div`,u);a(u,d),n(d,`card-body grid gap-6`);let m=r(`section`,d);a(d,m),n(m,`space-y-3`);let h=r(`div`,m);a(m,h),n(h,`flex flex-wrap items-center justify-between gap-3`);let y=r(`h2`,h);a(h,y),n(y,`text-xl font-semibold`),a(y,s(`v-once / r-once`));let b=r(`button`,h);a(h,b),n(b,`btn btn-sm`),i(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),a(b,s(`更新数据`));let x=r(`div`,m);a(m,x),n(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=r(`div`,x);a(x,w),n(w,`space-y-2`);let T=r(`div`,w);a(w,T),n(T,`text-sm opacity-70`),a(T,s(`当前值：`));let E=_(T);a(T,E),g(()=>{o(E,S.value)});let D=e(`rue:slot:anchor`);a(w,D),f(v(`useMemo:3372:3496`,()=>p(()=>l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`badge badge-primary badge-lg`);let s=_(i);return a(i,s),o(s,S.value),e}),[])),w,D);let O=r(`div`,x);a(x,O),n(O,`space-y-2`);let k=r(`div`,O);a(O,k),n(k,`text-sm opacity-70`),a(k,s(`当前计数：`));let A=_(k);a(k,A),g(()=>{o(A,C.value)});let j=e(`rue:slot:anchor`);return a(O,j),f(v(`useMemo:3683:3814`,()=>p(()=>l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`badge badge-secondary badge-lg`),a(i,s(`count: `));let c=_(i);return a(i,c),o(c,C.value),e}),[])),O,j),c}):``;u(()=>f(c,E,O))}),d})}),m,w),m})};export{x as default};