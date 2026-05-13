import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,ht as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=()=>{let{activeTab:x,onceMessage:S,onceCount:C}=v(`useSetup:0:0`,()=>l(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),onceMessage:v(`ref:1:1`,()=>m(`首次渲染`)),onceCount:v(`ref:1:2`,()=>m(0))})));return _(()=>{let l=e(),m=a(`rue:component:anchor`);return i(l,m),d(g(b,{children:_(()=>{let l=e(),m=n(`h1`);i(l,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`v-once / r-once`));let b=n(`div`);i(l,b),s(b,`role`,`tablist`),t(b,`tabs tabs-box`);let w=n(`button`);i(b,w),s(w,`role`,`tab`),u(()=>{t(w,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),p(w,`click`,()=>{x.value=`preview`}),i(w,r(`效果`));let T=n(`button`);i(b,T),s(T,`role`,`tab`),u(()=>{t(T,String(`tab ${x.value===`code`?`tab-active`:``}`))}),p(T,`click`,()=>{x.value=`code`}),i(T,r(`代码`));let E=n(`div`);i(l,E),t(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);i(E,D),u(()=>{let r=x.value===`code`?_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`});h(()=>d(e,s,c))}),r}):``;h(()=>d(r,E,D))}),i(E,r(` `));let O=a(`rue:slot:anchor`);return i(E,O),u(()=>{let s=x.value===`preview`?_(()=>{let s=e(),l=n(`div`);i(s,l),t(l,`card bg-base-100 shadow`);let m=n(`div`);i(l,m),t(m,`card-body grid gap-6`);let h=n(`section`);i(m,h),t(h,`space-y-3`);let g=n(`div`);i(h,g),t(g,`flex flex-wrap items-center justify-between gap-3`);let y=n(`h2`);i(g,y),t(y,`text-xl font-semibold`),i(y,r(`v-once / r-once`));let b=n(`button`);i(g,b),t(b,`btn btn-sm`),p(b,`click`,()=>{C.value+=1,S.value=`已更新 ${C.value} 次`}),i(b,r(`更新数据`));let x=n(`div`);i(h,x),t(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=n(`div`);i(x,w),t(w,`space-y-2`);let T=n(`div`);i(w,T),t(T,`text-sm opacity-70`),i(T,r(`当前值：`));let E=o(T);i(T,E),u(()=>{c(E,S.value)});let D=a(`rue:slot:anchor`);i(w,D),d(v(`useMemo:3372:3496`,()=>f(()=>_(()=>{let r=e(),a=n(`span`);i(r,a),t(a,`badge badge-primary badge-lg`);let s=o(a);return i(a,s),c(s,S.value),r}),[])),w,D);let O=n(`div`);i(x,O),t(O,`space-y-2`);let k=n(`div`);i(O,k),t(k,`text-sm opacity-70`),i(k,r(`当前计数：`));let A=o(k);i(k,A),u(()=>{c(A,C.value)});let j=a(`rue:slot:anchor`);return i(O,j),d(v(`useMemo:3683:3814`,()=>f(()=>_(()=>{let a=e(),s=n(`span`);i(a,s),t(s,`badge badge-secondary badge-lg`),i(s,r(`count: `));let l=o(s);return i(s,l),c(l,C.value),a}),[])),O,j),s}):``;h(()=>d(s,E,O))}),l})}),l,m),l})};export{x as default};