import{$ as e,$t as t,Bt as n,Gt as r,Jt as i,X as a,Xt as o,Z as s,ct as c,et as l,gt as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>o(()=>({activeTab:v(`ref:1:0`,()=>n(`code`)),onceMessage:v(`ref:1:1`,()=>n(`首次渲染`)),onceCount:v(`ref:1:2`,()=>n(0))})));return d(n=>{let o=l(),w=e(`rue:component:anchor`);return s(o,w),p(h(b,{children:d(()=>{let n=l(),o=g(`h1`,n);s(n,o),_(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,f(`v-once / r-once`));let b=g(`div`,n);s(n,b),c(b,`role`,`tablist`),_(b,`tabs tabs-box`);let w=g(`button`,b);s(b,w),c(w,`role`,`tab`),t(()=>{_(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(w,`click`,()=>{x.value=`preview`}),s(w,f(`效果`));let T=g(`button`,b);s(b,T),c(T,`role`,`tab`),t(()=>{_(T,`tab ${x.value===`code`?`tab-active`:``}`)}),a(T,`click`,()=>{x.value=`code`}),s(T,f(`代码`));let E=g(`div`,n);s(n,E),_(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);s(E,D),t(()=>{let n=x.value===`code`?d(()=>{let n=l(),i=g(`div`,n);s(n,i),_(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);s(i,a),_(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});r(()=>p(e,a,o))}),n}):``;r(()=>p(n,E,D))}),s(E,f(` `));let O=e(`rue:slot:anchor`);return s(E,O),t(()=>{let n=x.value===`preview`?d(()=>{let n=l(),r=g(`div`,n);s(n,r),_(r,`card bg-base-100 shadow`);let o=g(`div`,r);s(r,o),_(o,`card-body grid gap-6`);let c=g(`section`,o);s(o,c),_(c,`space-y-3`);let h=g(`div`,c);s(c,h),_(h,`flex flex-wrap items-center justify-between gap-3`);let y=g(`h2`,h);s(h,y),_(y,`text-xl font-semibold`),s(y,f(`v-once / r-once`));let b=g(`button`,h);s(h,b),_(b,`btn btn-sm`),a(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),s(b,f(`更新数据`));let x=g(`div`,c);s(c,x),_(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=g(`div`,x);s(x,w),_(w,`space-y-2`);let T=g(`div`,w);s(w,T),_(T,`text-sm opacity-70`),s(T,f(`当前值：`));let E=m(T);s(T,E),t(()=>{u(E,S.value)});let D=e(`rue:slot:anchor`);s(w,D),p(v(`useMemo:3372:3496`,()=>i(()=>d(()=>{let e=l(),t=g(`span`,e);s(e,t),_(t,`badge badge-primary badge-lg`);let n=m(t);return s(t,n),u(n,S.value),e}),[])),w,D);let O=g(`div`,x);s(x,O),_(O,`space-y-2`);let k=g(`div`,O);s(O,k),_(k,`text-sm opacity-70`),s(k,f(`当前计数：`));let A=m(k);s(k,A),t(()=>{u(A,C.value)});let j=e(`rue:slot:anchor`);return s(O,j),p(v(`useMemo:3683:3814`,()=>i(()=>d(()=>{let e=l(),t=g(`span`,e);s(e,t),_(t,`badge badge-secondary badge-lg`),s(t,f(`count: `));let n=m(t);return s(t,n),u(n,C.value),e}),[])),O,j),n}):``;r(()=>p(n,E,O))}),n})}),o,w),o})};export{x as default};