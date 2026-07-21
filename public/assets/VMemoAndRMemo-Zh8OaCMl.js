import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p,xn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,s as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>e(()=>({activeTab:y(`ref:1:0`,()=>l(`code`)),selectedId:y(`ref:1:1`,()=>l(1)),refreshCount:y(`ref:1:2`,()=>l(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return h(e=>{let l=a(),D=i(`rue:component:anchor`);return d(l,D),g(v(S,{children:h(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`v-memo / r-memo`));let S=u(`div`,e);d(e,S),t(S,`role`,`tablist`),r(S,`tabs tabs-box`);let D=u(`button`,S);d(S,D),t(D,`role`,`tab`),f(()=>{r(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),c(D,`click`,()=>{C.value=`preview`}),d(D,s(`效果`));let O=u(`button`,S);d(S,O),t(O,`role`,`tab`),f(()=>{r(O,`tab ${C.value===`code`?`tab-active`:``}`)}),c(O,`click`,()=>{C.value=`code`}),d(O,s(`代码`));let k=u(`div`,e);d(e,k),r(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=i(`rue:slot:anchor`);d(k,A),f(()=>{let e=C.value===`code`?h(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});p(()=>g(e,n,o))}),e}):``;p(()=>g(e,k,A))}),d(k,s(` `));let j=i(`rue:slot:anchor`);return d(k,j),f(()=>{let e=C.value===`preview`?h(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`card bg-base-100 shadow`);let v=u(`div`,l);d(l,v),r(v,`card-body grid gap-6`);let x=u(`section`,v);d(v,x),r(x,`space-y-3`);let S=u(`div`,x);d(x,S),r(S,`flex flex-wrap items-center justify-between gap-3`);let C=u(`h2`,S);d(S,C),r(C,`text-xl font-semibold`),d(C,s(`v-memo / r-memo`));let D=u(`div`,S);d(S,D),r(D,`join`);let O=i(`rue:list:start`),k=i(`rue:list:end`);d(D,O),d(D,k);let A=new Map;f(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(e,n,o,s,l)=>{g(h(()=>{let n=a(),o=u(`button`,n);d(n,o),f(()=>{t(o,`key`,String(e.id))}),f(()=>{r(o,`btn btn-sm join-item ${w.value===e.id?`btn-active`:``}`)}),c(o,`click`,()=>{w.value=e.id});let s=i(`rue:slot:anchor`);return d(o,s),f(()=>{let t=e.name;p(()=>g(t,o,s))}),n}),n,o)}})});let j=u(`button`,D);d(D,j),r(j,`btn btn-sm join-item`),c(j,`click`,()=>{T.value+=1}),d(j,s(`刷新`));let M=u(`div`,x);d(x,M),r(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=i(`rue:list:start`),P=i(`rue:list:end`);d(M,N),d(M,P);let F=new Map;f(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(e,c,l,f,v)=>{_(y(`useMemo:3706:4293`,()=>m(()=>h(()=>{let c=a(),l=u(`div`,c);d(c,l),t(l,`key`,String(e.id)),r(l,`alert ${e.id===w.value?`alert-success`:`alert-ghost`}`);let f=u(`span`,l);d(l,f),r(f,`font-semibold`);let m=i(`rue:slot:anchor`);d(f,m);{let t=e.name;p(()=>g(t,f,m))}let h=u(`span`,l);d(l,h),d(h,s(`分数：`));let _=i(`rue:slot:anchor`);d(h,_);{let t=e.score;p(()=>g(t,h,_))}let v=u(`span`,l);d(l,v),d(v,s(`选中：`));let y=o(v);d(v,y),n(y,e.id===w.value?`是`:`否`);let b=u(`span`,l);d(l,b),d(b,s(`刷新：`));let x=o(b);return d(b,x),n(x,T.value),c}),[e.id===w.value])),c,l,f)}})}),d(M,s(` `));let I=i(`rue:slot:anchor`);return d(M,I),f(()=>{let e=y(`useMemo:4334:4544`,()=>m(()=>h(()=>{let e=a(),t=u(`p`,e);d(e,t),r(t,`badge badge-outline badge-lg`),d(t,s(`selected id: `));let i=o(t);d(t,i),n(i,w.value);let c=u(`span`,t);d(t,c),d(c,s(`refresh: `));let l=o(c);return d(c,l),n(l,T.value),e}),[w.value]));p(()=>g(e,M,I))}),e}):``;p(()=>g(e,k,j))}),e})}),l,D),l})};export{C as default};