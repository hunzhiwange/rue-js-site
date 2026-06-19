import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,qt as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>o(()=>({activeTab:v(`ref:1:0`,()=>_(`code`)),onceMessage:v(`ref:1:1`,()=>_(`首次渲染`)),onceCount:v(`ref:1:2`,()=>_(0))})));return l(o=>{let _=e(),w=t(`rue:component:anchor`);return i(_,w),f(h(b,{children:l(()=>{let o=e(),_=s(`h1`,o);i(o,_),u(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,g(`v-once / r-once`));let b=s(`div`,o);i(o,b),m(b,`role`,`tablist`),u(b,`tabs tabs-box`);let w=s(`button`,b);i(b,w),m(w,`role`,`tab`),n(()=>{u(w,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(w,`click`,()=>{x.value=`preview`}),i(w,g(`效果`));let T=s(`button`,b);i(b,T),m(T,`role`,`tab`),n(()=>{u(T,`tab ${x.value===`code`?`tab-active`:``}`)}),a(T,`click`,()=>{x.value=`code`}),i(T,g(`代码`));let E=s(`div`,o);i(o,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=t(`rue:slot:anchor`);i(E,D),n(()=>{let a=x.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,E,D))}),i(E,g(` `));let O=t(`rue:slot:anchor`);return i(E,O),n(()=>{let o=x.value===`preview`?l(()=>{let r=e(),o=s(`div`,r);i(r,o),u(o,`card bg-base-100 shadow`);let m=s(`div`,o);i(o,m),u(m,`card-body grid gap-6`);let h=s(`section`,m);i(m,h),u(h,`space-y-3`);let _=s(`div`,h);i(h,_),u(_,`flex flex-wrap items-center justify-between gap-3`);let y=s(`h2`,_);i(_,y),u(y,`text-xl font-semibold`),i(y,g(`v-once / r-once`));let b=s(`button`,_);i(_,b),u(b,`btn btn-sm`),a(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),i(b,g(`更新数据`));let x=s(`div`,h);i(h,x),u(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=s(`div`,x);i(x,w),u(w,`space-y-2`);let T=s(`div`,w);i(w,T),u(T,`text-sm opacity-70`),i(T,g(`当前值：`));let E=d(T);i(T,E),n(()=>{c(E,S.value)});let D=t(`rue:slot:anchor`);i(w,D),f(v(`useMemo:3372:3496`,()=>p(()=>l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`badge badge-primary badge-lg`);let r=d(n);return i(n,r),c(r,S.value),t}),[])),w,D);let O=s(`div`,x);i(x,O),u(O,`space-y-2`);let k=s(`div`,O);i(O,k),u(k,`text-sm opacity-70`),i(k,g(`当前计数：`));let A=d(k);i(k,A),n(()=>{c(A,C.value)});let j=t(`rue:slot:anchor`);return i(O,j),f(v(`useMemo:3683:3814`,()=>p(()=>l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`badge badge-secondary badge-lg`),i(n,g(`count: `));let r=d(n);return i(n,r),c(r,C.value),t}),[])),O,j),r}):``;r(()=>f(o,E,O))}),o})}),_,w),_})};export{x as default};