import{$ as e,B as t,Dt as n,G as r,H as i,K as a,St as o,U as s,W as c,Z as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>h(()=>({activeTab:v(`ref:1:0`,()=>d(`code`)),onceMessage:v(`ref:1:1`,()=>d(`首次渲染`)),onceCount:v(`ref:1:2`,()=>d(0))})));return f(d=>{let h=s(),w=i(`rue:component:anchor`);return t(h,w),p(m(b,{children:f(()=>{let d=s(),h=c(`h1`,d);t(d,h),e(h,`text-5xl font-semibold mb-4 md:mb-4`),t(h,r(`v-once / r-once`));let b=c(`div`,d);t(d,b),l(b,`role`,`tablist`),e(b,`tabs tabs-box`);let w=c(`button`,b);t(b,w),l(w,`role`,`tab`),n(()=>{e(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),_(w,`click`,()=>{x.value=`preview`}),t(w,r(`效果`));let T=c(`button`,b);t(b,T),l(T,`role`,`tab`),n(()=>{e(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),_(T,`click`,()=>{x.value=`code`}),t(T,r(`代码`));let E=c(`div`,d);t(d,E),e(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let r=x.value===`code`?f(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});g(()=>p(e,o,l))}),r}):``;g(()=>p(r,E,D))}),t(E,r(` `));let O=i(`rue:slot:anchor`);return t(E,O),n(()=>{let l=x.value===`preview`?f(()=>{let l=s(),d=c(`div`,l);t(l,d),e(d,`card bg-base-100 shadow`);let m=c(`div`,d);t(d,m),e(m,`card-body grid gap-6`);let h=c(`section`,m);t(m,h),e(h,`space-y-3`);let g=c(`div`,h);t(h,g),e(g,`flex flex-wrap items-center justify-between gap-3`);let y=c(`h2`,g);t(g,y),e(y,`text-xl font-semibold`),t(y,r(`v-once / r-once`));let b=c(`button`,g);t(g,b),e(b,`btn btn-sm`),_(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),t(b,r(`更新数据`));let x=c(`div`,h);t(h,x),e(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=c(`div`,x);t(x,w),e(w,`space-y-2`);let T=c(`div`,w);t(w,T),e(T,`text-sm opacity-70`),t(T,r(`当前值：`));let E=a(T);t(T,E),n(()=>{u(E,S.value)});let D=i(`rue:slot:anchor`);t(w,D),p(v(`useMemo:3372:3496`,()=>o(()=>f(()=>{let n=s(),r=c(`span`,n);t(n,r),e(r,`badge badge-primary badge-lg`);let i=a(r);return t(r,i),u(i,S.value),n}),[])),w,D);let O=c(`div`,x);t(x,O),e(O,`space-y-2`);let k=c(`div`,O);t(O,k),e(k,`text-sm opacity-70`),t(k,r(`当前计数：`));let A=a(k);t(k,A),n(()=>{u(A,C.value)});let j=i(`rue:slot:anchor`);return t(O,j),p(v(`useMemo:3683:3814`,()=>o(()=>f(()=>{let n=s(),i=c(`span`,n);t(n,i),e(i,`badge badge-secondary badge-lg`),t(i,r(`count: `));let o=a(i);return t(i,o),u(o,C.value),n}),[])),O,j),l}):``;g(()=>p(l,E,O))}),d})}),h,w),h})};export{x as default};