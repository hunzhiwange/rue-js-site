import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,ft as d,l as f,mt as p,ot as m,t as h,u as g,ut as _,z as v}from"./vapor-runtime-Dfq7aA8z.js";import{a as y,n as b}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as x}from"./Code-CLTo4rRM.js";import{t as S}from"./SidebarPlaygroundExample-DOFGFBd1.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>p(()=>({activeTab:y(`ref:1:0`,()=>m(`code`)),selectedId:y(`ref:1:1`,()=>m(1)),refreshCount:y(`ref:1:2`,()=>m(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return u(p=>{let m=t(),D=e(`rue:component:anchor`);return a(m,D),f(h(S,{children:u(()=>{let p=t(),m=r(`h1`,p);a(p,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-memo / r-memo`));let S=r(`div`,p);a(p,S),c(S,`role`,`tablist`),n(S,`tabs tabs-box`);let D=r(`button`,S);a(S,D),c(D,`role`,`tab`),l(()=>{n(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(D,`click`,()=>{C.value=`preview`}),a(D,s(`效果`));let O=r(`button`,S);a(S,O),c(O,`role`,`tab`),l(()=>{n(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(O,`click`,()=>{C.value=`code`}),a(O,s(`代码`));let k=r(`div`,p);a(p,k),n(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);a(k,A),l(()=>{let i=C.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});_(()=>f(e,s,c))}),i}):``;_(()=>f(i,k,A))}),a(k,s(` `));let j=e(`rue:slot:anchor`);return a(k,j),l(()=>{let p=C.value===`preview`?u(()=>{let p=t(),m=r(`div`,p);a(p,m),n(m,`card bg-base-100 shadow`);let h=r(`div`,m);a(m,h),n(h,`card-body grid gap-6`);let x=r(`section`,h);a(h,x),n(x,`space-y-3`);let S=r(`div`,x);a(x,S),n(S,`flex flex-wrap items-center justify-between gap-3`);let C=r(`h2`,S);a(S,C),n(C,`text-xl font-semibold`),a(C,s(`v-memo / r-memo`));let D=r(`div`,S);a(S,D),n(D,`join`);let O=e(`rue:list:start`),k=e(`rue:list:end`);a(D,O),a(D,k);let A=new Map;l(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(o,s,d,p,m)=>{f(u(()=>{let s=t(),u=r(`button`,s);a(s,u),l(()=>{c(u,`key`,String(o.id))}),l(()=>{n(u,String(`btn btn-sm join-item ${w.value===o.id?`btn-active`:``}`))}),i(u,`click`,()=>{w.value=o.id});let d=e(`rue:slot:anchor`);return a(u,d),l(()=>{let e=o.name;_(()=>f(e,u,d))}),s}),s,d)}})});let j=r(`button`,D);a(D,j),n(j,`btn btn-sm join-item`),i(j,`click`,()=>{T.value+=1}),a(j,s(`刷新`));let M=r(`div`,x);a(x,M),n(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=e(`rue:list:start`),P=e(`rue:list:end`);a(M,N),a(M,P);let F=new Map;l(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(i,l,p,m,h)=>{g(y(`useMemo:3706:4293`,()=>d(()=>u(()=>{let l=t(),u=r(`div`,l);a(l,u),c(u,`key`,String(i.id)),n(u,String(`alert ${i.id===w.value?`alert-success`:`alert-ghost`}`));let d=r(`span`,u);a(u,d),n(d,`font-semibold`);let p=e(`rue:slot:anchor`);a(d,p);{let e=i.name;_(()=>f(e,d,p))}let m=r(`span`,u);a(u,m),a(m,s(`分数：`));let h=e(`rue:slot:anchor`);a(m,h);{let e=i.score;_(()=>f(e,m,h))}let g=r(`span`,u);a(u,g),a(g,s(`选中：`));let y=v(g);a(g,y),o(y,i.id===w.value?`是`:`否`);let b=r(`span`,u);a(u,b),a(b,s(`刷新：`));let x=v(b);return a(b,x),o(x,T.value),l}),[i.id===w.value])),l,p,m)}})}),a(M,s(` `));let I=e(`rue:slot:anchor`);return a(M,I),l(()=>{let e=y(`useMemo:4334:4544`,()=>d(()=>u(()=>{let e=t(),i=r(`p`,e);a(e,i),n(i,`badge badge-outline badge-lg`),a(i,s(`selected id: `));let c=v(i);a(i,c),o(c,w.value);let l=r(`span`,i);a(i,l),a(l,s(`refresh: `));let u=v(l);return a(l,u),o(u,T.value),e}),[w.value]));_(()=>f(e,M,I))}),p}):``;_(()=>f(p,k,j))}),p})}),m,D),m})};export{C as default};