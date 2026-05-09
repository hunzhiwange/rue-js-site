import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,ct as u,j as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-CKndxKFn.js";import{a as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as v}from"./Code-B1JFTu6m.js";import{t as y}from"./SidebarPlaygroundExample-DlK8mtjC.js";var b=()=>{let{activeTab:b,onceMessage:x,onceCount:S}=_(`useSetup:0:0`,()=>g(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),onceMessage:_(`ref:1:1`,()=>p(`首次渲染`)),onceCount:_(`ref:1:2`,()=>p(0))})));return h(()=>{let p=o(),g=a(`rue:component:anchor`);return d(p,g),l(m(y,{children:h(()=>{let p=o(),g=t(`h1`);d(p,g),s(g,`text-5xl font-semibold mb-4 md:mb-4`),d(g,r(`v-once / r-once`));let y=t(`div`);d(p,y),n(y,`role`,`tablist`),s(y,`tabs tabs-box`);let C=t(`button`);d(y,C),n(C,`role`,`tab`),f(()=>{s(C,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(C,`click`,()=>{b.value=`preview`}),d(C,r(`效果`));let w=t(`button`);d(y,w),n(w,`role`,`tab`),f(()=>{s(w,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(w,`click`,()=>{b.value=`code`}),d(w,r(`代码`));let T=t(`div`);d(p,T),s(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);d(T,E),f(()=>{l(b.value===`code`?h(()=>{let e=o(),n=t(`div`);d(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);d(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return d(r,i),f(()=>{l(m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`}),r,i)}),e}):``,T,E)}),d(T,r(` `));let D=a(`rue:slot:anchor`);return d(T,D),f(()=>{l(b.value===`preview`?h(()=>{let n=o(),p=t(`div`);d(n,p),s(p,`card bg-base-100 shadow`);let m=t(`div`);d(p,m),s(m,`card-body grid gap-6`);let g=t(`section`);d(m,g),s(g,`space-y-3`);let v=t(`div`);d(g,v),s(v,`flex flex-wrap items-center justify-between gap-3`);let y=t(`h2`);d(v,y),s(y,`text-xl font-semibold`),d(y,r(`v-once / r-once`));let b=t(`button`);d(v,b),s(b,`btn btn-sm`),e(b,`click`,()=>{S.value+=1,x.value=`已更新 ${S.value} 次`}),d(b,r(`更新数据`));let C=t(`div`);d(g,C),s(C,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=t(`div`);d(C,w),s(w,`space-y-2`);let T=t(`div`);d(w,T),s(T,`text-sm opacity-70`),d(T,r(`当前值：`));let E=i(T);d(T,E),f(()=>{c(E,x.value)});let D=a(`rue:slot:anchor`);d(w,D),l(_(`useMemo:3372:3496`,()=>u(()=>h(()=>{let e=o(),n=t(`span`);d(e,n),s(n,`badge badge-primary badge-lg`);let r=i(n);return d(n,r),c(r,x.value),e}),[])),w,D);let O=t(`div`);d(C,O),s(O,`space-y-2`);let k=t(`div`);d(O,k),s(k,`text-sm opacity-70`),d(k,r(`当前计数：`));let A=i(k);d(k,A),f(()=>{c(A,S.value)});let j=a(`rue:slot:anchor`);return d(O,j),l(_(`useMemo:3683:3814`,()=>u(()=>h(()=>{let e=o(),n=t(`span`);d(e,n),s(n,`badge badge-secondary badge-lg`),d(n,r(`count: `));let a=i(n);return d(n,a),c(a,S.value),e}),[])),O,j),n}):``,T,D)}),p})}),p,g),p})};export{b as default};