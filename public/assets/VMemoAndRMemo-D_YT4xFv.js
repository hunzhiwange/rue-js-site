import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,pt as p,st as m,t as h,u as g,vt as _,z as v}from"./vapor-runtime-BuwLbCGk.js";import{a as y,n as b}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./SidebarPlaygroundExample-BwOo72z2.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>d(()=>({activeTab:y(`ref:1:0`,()=>m(`code`)),selectedId:y(`ref:1:1`,()=>m(1)),refreshCount:y(`ref:1:2`,()=>m(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return l(d=>{let m=t(),D=e(`rue:component:anchor`);return a(m,D),f(h(S,{children:l(()=>{let d=t(),m=r(`h1`,d);a(d,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-memo / r-memo`));let S=r(`div`,d);a(d,S),c(S,`role`,`tablist`),n(S,`tabs tabs-box`);let D=r(`button`,S);a(S,D),c(D,`role`,`tab`),_(()=>{n(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(D,`click`,()=>{C.value=`preview`}),a(D,s(`效果`));let O=r(`button`,S);a(S,O),c(O,`role`,`tab`),_(()=>{n(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(O,`click`,()=>{C.value=`code`}),a(O,s(`代码`));let k=r(`div`,d);a(d,k),n(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);a(k,A),_(()=>{let i=C.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),_(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,k,A))}),a(k,s(` `));let j=e(`rue:slot:anchor`);return a(k,j),_(()=>{let d=C.value===`preview`?l(()=>{let d=t(),m=r(`div`,d);a(d,m),n(m,`card bg-base-100 shadow`);let h=r(`div`,m);a(m,h),n(h,`card-body grid gap-6`);let x=r(`section`,h);a(h,x),n(x,`space-y-3`);let S=r(`div`,x);a(x,S),n(S,`flex flex-wrap items-center justify-between gap-3`);let C=r(`h2`,S);a(S,C),n(C,`text-xl font-semibold`),a(C,s(`v-memo / r-memo`));let D=r(`div`,S);a(S,D),n(D,`join`);let O=e(`rue:list:start`),k=e(`rue:list:end`);a(D,O),a(D,k);let A=new Map;_(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(o,s,d,p,m)=>{f(l(()=>{let s=t(),l=r(`button`,s);a(s,l),_(()=>{c(l,`key`,String(o.id))}),_(()=>{n(l,String(`btn btn-sm join-item ${w.value===o.id?`btn-active`:``}`))}),i(l,`click`,()=>{w.value=o.id});let d=e(`rue:slot:anchor`);return a(l,d),_(()=>{let e=o.name;u(()=>f(e,l,d))}),s}),s,d)}})});let j=r(`button`,D);a(D,j),n(j,`btn btn-sm join-item`),i(j,`click`,()=>{T.value+=1}),a(j,s(`刷新`));let M=r(`div`,x);a(x,M),n(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=e(`rue:list:start`),P=e(`rue:list:end`);a(M,N),a(M,P);let F=new Map;_(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(i,d,m,h,_)=>{g(y(`useMemo:3706:4293`,()=>p(()=>l(()=>{let l=t(),d=r(`div`,l);a(l,d),c(d,`key`,String(i.id)),n(d,String(`alert ${i.id===w.value?`alert-success`:`alert-ghost`}`));let p=r(`span`,d);a(d,p),n(p,`font-semibold`);let m=e(`rue:slot:anchor`);a(p,m);{let e=i.name;u(()=>f(e,p,m))}let h=r(`span`,d);a(d,h),a(h,s(`分数：`));let g=e(`rue:slot:anchor`);a(h,g);{let e=i.score;u(()=>f(e,h,g))}let _=r(`span`,d);a(d,_),a(_,s(`选中：`));let y=v(_);a(_,y),o(y,i.id===w.value?`是`:`否`);let b=r(`span`,d);a(d,b),a(b,s(`刷新：`));let x=v(b);return a(b,x),o(x,T.value),l}),[i.id===w.value])),d,m,h)}})}),a(M,s(` `));let I=e(`rue:slot:anchor`);return a(M,I),_(()=>{let e=y(`useMemo:4334:4544`,()=>p(()=>l(()=>{let e=t(),i=r(`p`,e);a(e,i),n(i,`badge badge-outline badge-lg`),a(i,s(`selected id: `));let c=v(i);a(i,c),o(c,w.value);let l=r(`span`,i);a(i,l),a(l,s(`refresh: `));let u=v(l);return a(l,u),o(u,T.value),e}),[w.value]));u(()=>f(e,M,I))}),d}):``;u(()=>f(d,k,j))}),d})}),m,D),m})};export{C as default};