import{$ as e,Gt as t,Ht as n,J as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,c as u,et as d,l as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>h(()=>({activeTab:y(`ref:1:0`,()=>i(`code`)),selectedId:y(`ref:1:1`,()=>i(1)),refreshCount:y(`ref:1:2`,()=>i(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return f(i=>{let h=c(),D=o(`rue:component:anchor`);return r(h,D),g(v(S,{children:f(()=>{let i=c(),h=a(`h1`,i);r(i,h),_(h,`text-5xl font-semibold mb-4 md:mb-4`),r(h,e(`v-memo / r-memo`));let S=a(`div`,i);r(i,S),l(S,`role`,`tablist`),_(S,`tabs tabs-box`);let D=a(`button`,S);r(S,D),l(D,`role`,`tab`),s(()=>{_(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),m(D,`click`,()=>{C.value=`preview`}),r(D,e(`效果`));let O=a(`button`,S);r(S,O),l(O,`role`,`tab`),s(()=>{_(O,`tab ${C.value===`code`?`tab-active`:``}`)}),m(O,`click`,()=>{C.value=`code`}),r(O,e(`代码`));let k=a(`div`,i);r(i,k),_(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=o(`rue:slot:anchor`);r(k,A),s(()=>{let e=C.value===`code`?f(()=>{let e=c(),t=a(`div`,e);r(e,t),_(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),_(i,`card-body p-0`);let l=o(`rue:component:anchor`);return r(i,l),s(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VMemoAndRMemo: FC = () => {
  const selectedId = ref(1);
  const refreshCount = ref(0);
  const rows = [
    { id: 1, name: 'Alpha', score: 92 },
    { id: 2, name: 'Beta', score: 86 },
    { id: 3, name: 'Gamma', score: 78 },
  ];

  return (
    <div className="grid gap-4">
      {rows.map(row => (
        <div key={row.id} v-memo={[row.id === selectedId.value]} className="alert">
          <span>{row.name}</span>
          <span>selected: {row.id === selectedId.value ? 'yes' : 'no'}</span>
          <span>refresh: {refreshCount.value}</span>
        </div>
      ))}
      <p r-memo={[selectedId.value]} className="badge badge-outline">
        selected id: {selectedId.value}
        <span>refresh: {refreshCount.value}</span>
      </p>
    </div>
  );
};

export default VMemoAndRMemo;`});n(()=>g(e,i,l))}),e}):``;n(()=>g(e,k,A))}),r(k,e(` `));let j=o(`rue:slot:anchor`);return r(k,j),s(()=>{let i=C.value===`preview`?f(()=>{let i=c(),h=a(`div`,i);r(i,h),_(h,`card bg-base-100 shadow`);let v=a(`div`,h);r(h,v),_(v,`card-body grid gap-6`);let x=a(`section`,v);r(v,x),_(x,`space-y-3`);let S=a(`div`,x);r(x,S),_(S,`flex flex-wrap items-center justify-between gap-3`);let C=a(`h2`,S);r(S,C),_(C,`text-xl font-semibold`),r(C,e(`v-memo / r-memo`));let D=a(`div`,S);r(S,D),_(D,`join`);let O=o(`rue:list:start`),k=o(`rue:list:end`);r(D,O),r(D,k);let A=new Map;s(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(e,t,i,u,d)=>{g(f(()=>{let t=c(),i=a(`button`,t);r(t,i),s(()=>{l(i,`key`,String(e.id))}),s(()=>{_(i,`btn btn-sm join-item ${w.value===e.id?`btn-active`:``}`)}),m(i,`click`,()=>{w.value=e.id});let u=o(`rue:slot:anchor`);return r(i,u),s(()=>{let t=e.name;n(()=>g(t,i,u))}),t}),t,i)}})});let j=a(`button`,D);r(D,j),_(j,`btn btn-sm join-item`),m(j,`click`,()=>{T.value+=1}),r(j,e(`刷新`));let M=a(`div`,x);r(x,M),_(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=o(`rue:list:start`),P=o(`rue:list:end`);r(M,N),r(M,P);let F=new Map;s(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(i,s,m,h,v)=>{u(y(`useMemo:3706:4293`,()=>t(()=>f(()=>{let t=c(),s=a(`div`,t);r(t,s),l(s,`key`,String(i.id)),_(s,`alert ${i.id===w.value?`alert-success`:`alert-ghost`}`);let u=a(`span`,s);r(s,u),_(u,`font-semibold`);let f=o(`rue:slot:anchor`);r(u,f);{let e=i.name;n(()=>g(e,u,f))}let m=a(`span`,s);r(s,m),r(m,e(`分数：`));let h=o(`rue:slot:anchor`);r(m,h);{let e=i.score;n(()=>g(e,m,h))}let v=a(`span`,s);r(s,v),r(v,e(`选中：`));let y=d(v);r(v,y),p(y,i.id===w.value?`是`:`否`);let b=a(`span`,s);r(s,b),r(b,e(`刷新：`));let x=d(b);return r(b,x),p(x,T.value),t}),[i.id===w.value])),s,m,h)}})}),r(M,e(` `));let I=o(`rue:slot:anchor`);return r(M,I),s(()=>{let i=y(`useMemo:4334:4544`,()=>t(()=>f(()=>{let t=c(),n=a(`p`,t);r(t,n),_(n,`badge badge-outline badge-lg`),r(n,e(`selected id: `));let i=d(n);r(n,i),p(i,w.value);let o=a(`span`,n);r(n,o),r(o,e(`refresh: `));let s=d(o);return r(o,s),p(s,T.value),t}),[w.value]));n(()=>g(i,M,I))}),i}):``;n(()=>g(i,k,j))}),i})}),h,D),h})};export{C as default};