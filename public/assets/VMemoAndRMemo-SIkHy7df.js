import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nn as u,nt as d,o as f,rt as p,s as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>o(()=>({activeTab:y(`ref:1:0`,()=>t(`code`)),selectedId:y(`ref:1:1`,()=>t(1)),refreshCount:y(`ref:1:2`,()=>t(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return c(t=>{let o=g(),D=a(`rue:component:anchor`);return n(o,D),f(h(S,{children:c(()=>{let t=g(),o=d(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,p(`v-memo / r-memo`));let S=d(`div`,t);n(t,S),l(S,`role`,`tablist`),i(S,`tabs tabs-box`);let D=d(`button`,S);n(S,D),l(D,`role`,`tab`),v(()=>{i(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(D,`click`,()=>{C.value=`preview`}),n(D,p(`效果`));let O=d(`button`,S);n(S,O),l(O,`role`,`tab`),v(()=>{i(O,`tab ${C.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{C.value=`code`}),n(O,p(`代码`));let k=d(`div`,t);n(t,k),i(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);n(k,A),v(()=>{let t=C.value===`code`?c(()=>{let t=g(),r=d(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),v(()=>{let t=h(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});e(()=>f(t,o,s))}),t}):``;e(()=>f(t,k,A))}),n(k,p(` `));let j=a(`rue:slot:anchor`);return n(k,j),v(()=>{let t=C.value===`preview`?c(()=>{let t=g(),o=d(`div`,t);n(t,o),i(o,`card bg-base-100 shadow`);let h=d(`div`,o);n(o,h),i(h,`card-body grid gap-6`);let x=d(`section`,h);n(h,x),i(x,`space-y-3`);let S=d(`div`,x);n(x,S),i(S,`flex flex-wrap items-center justify-between gap-3`);let C=d(`h2`,S);n(S,C),i(C,`text-xl font-semibold`),n(C,p(`v-memo / r-memo`));let D=d(`div`,S);n(S,D),i(D,`join`);let O=a(`rue:list:start`),k=a(`rue:list:end`);n(D,O),n(D,k);let A=new Map;v(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,o,s,u,p)=>{f(c(()=>{let o=g(),s=d(`button`,o);n(o,s),v(()=>{l(s,`key`,String(t.id))}),v(()=>{i(s,`btn btn-sm join-item ${w.value===t.id?`btn-active`:``}`)}),r(s,`click`,()=>{w.value=t.id});let c=a(`rue:slot:anchor`);return n(s,c),v(()=>{let n=t.name;e(()=>f(n,s,c))}),o}),o,s)}})});let j=d(`button`,D);n(D,j),i(j,`btn btn-sm join-item`),r(j,`click`,()=>{T.value+=1}),n(j,p(`刷新`));let M=d(`div`,x);n(x,M),i(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=a(`rue:list:start`),P=a(`rue:list:end`);n(M,N),n(M,P);let F=new Map;v(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(t,r,o,h,v)=>{m(y(`useMemo:3706:4293`,()=>u(()=>c(()=>{let r=g(),o=d(`div`,r);n(r,o),l(o,`key`,String(t.id)),i(o,`alert ${t.id===w.value?`alert-success`:`alert-ghost`}`);let c=d(`span`,o);n(o,c),i(c,`font-semibold`);let u=a(`rue:slot:anchor`);n(c,u);{let n=t.name;e(()=>f(n,c,u))}let m=d(`span`,o);n(o,m),n(m,p(`分数：`));let h=a(`rue:slot:anchor`);n(m,h);{let n=t.score;e(()=>f(n,m,h))}let v=d(`span`,o);n(o,v),n(v,p(`选中：`));let y=s(v);n(v,y),_(y,t.id===w.value?`是`:`否`);let b=d(`span`,o);n(o,b),n(b,p(`刷新：`));let x=s(b);return n(b,x),_(x,T.value),r}),[t.id===w.value])),r,o,h)}})}),n(M,p(` `));let I=a(`rue:slot:anchor`);return n(M,I),v(()=>{let t=y(`useMemo:4334:4544`,()=>u(()=>c(()=>{let e=g(),t=d(`p`,e);n(e,t),i(t,`badge badge-outline badge-lg`),n(t,p(`selected id: `));let r=s(t);n(t,r),_(r,w.value);let a=d(`span`,t);n(t,a),n(a,p(`refresh: `));let o=s(a);return n(a,o),_(o,T.value),e}),[w.value]));e(()=>f(t,M,I))}),t}):``;e(()=>f(t,k,j))}),t})}),o,D),o})};export{C as default};