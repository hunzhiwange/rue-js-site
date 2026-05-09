import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,ct as u,j as d,l as f,pt as p,rt as m,t as h,u as g,ut as _}from"./vapor-runtime-BZZbPG7x.js";import{a as v,n as y}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var S=()=>{let{activeTab:S,selectedId:C,refreshCount:w,rows:T}=v(`useSetup:0:0`,()=>_(()=>({activeTab:v(`ref:1:0`,()=>m(`code`)),selectedId:v(`ref:1:1`,()=>m(1)),refreshCount:v(`ref:1:2`,()=>m(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return g(()=>{let m=o(),_=a(`rue:component:anchor`);return d(m,_),l(h(x,{children:g(()=>{let m=o(),_=t(`h1`);d(m,_),s(_,`text-5xl font-semibold mb-4 md:mb-4`),d(_,r(`v-memo / r-memo`));let x=t(`div`);d(m,x),n(x,`role`,`tablist`),s(x,`tabs tabs-box`);let E=t(`button`);d(x,E),n(E,`role`,`tab`),p(()=>{s(E,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),e(E,`click`,()=>{S.value=`preview`}),d(E,r(`效果`));let D=t(`button`);d(x,D),n(D,`role`,`tab`),p(()=>{s(D,String(`tab ${S.value===`code`?`tab-active`:``}`))}),e(D,`click`,()=>{S.value=`code`}),d(D,r(`代码`));let O=t(`div`);d(m,O),s(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=a(`rue:slot:anchor`);d(O,k),p(()=>{l(S.value===`code`?g(()=>{let e=o(),n=t(`div`);d(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);d(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return d(r,i),p(()=>{l(h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`}),r,i)}),e}):``,O,k)}),d(O,r(` `));let A=a(`rue:slot:anchor`);return d(O,A),p(()=>{l(S.value===`preview`?g(()=>{let m=o(),h=t(`div`);d(m,h),s(h,`card bg-base-100 shadow`);let _=t(`div`);d(h,_),s(_,`card-body grid gap-6`);let b=t(`section`);d(_,b),s(b,`space-y-3`);let x=t(`div`);d(b,x),s(x,`flex flex-wrap items-center justify-between gap-3`);let S=t(`h2`);d(x,S),s(S,`text-xl font-semibold`),d(S,r(`v-memo / r-memo`));let E=t(`div`);d(x,E),s(E,`join`);let D=a(`rue:list:start`),O=a(`rue:list:end`);d(E,D),d(E,O);let k=new Map;p(()=>{k=y({items:T||[],getKey:(e,t)=>e.id,elements:k,parent:E,before:O,singleRoot:!0,start:D,renderItem:(r,i,c,u,f)=>{l(g(()=>{let i=o(),c=t(`button`);d(i,c),p(()=>{n(c,`key`,String(r.id))}),p(()=>{s(c,String(`btn btn-sm join-item ${C.value===r.id?`btn-active`:``}`))}),e(c,`click`,()=>{C.value=r.id});let u=a(`rue:slot:anchor`);return d(c,u),p(()=>{let e=r.name;l(e,c,u)}),i}),i,c)}})});let A=t(`button`);d(E,A),s(A,`btn btn-sm join-item`),e(A,`click`,()=>{w.value+=1}),d(A,r(`刷新`));let j=t(`div`);d(b,j),s(j,`rounded-box border border-base-300 p-4 grid gap-3`);let M=a(`rue:list:start`),N=a(`rue:list:end`);d(j,M),d(j,N);let P=new Map;p(()=>{P=y({items:T||[],getKey:(e,t)=>e.id,elements:P,parent:j,before:N,start:M,renderItem:(e,p,m,h,_)=>{f(v(`useMemo:3706:4293`,()=>u(()=>g(()=>{let u=o(),f=t(`div`);d(u,f),n(f,`key`,String(e.id)),s(f,String(`alert ${e.id===C.value?`alert-success`:`alert-ghost`}`));let p=t(`span`);d(f,p),s(p,`font-semibold`);let m=a(`rue:slot:anchor`);d(p,m);{let t=e.name;l(t,p,m)}let h=t(`span`);d(f,h),d(h,r(`分数：`));let g=a(`rue:slot:anchor`);d(h,g);{let t=e.score;l(t,h,g)}let _=t(`span`);d(f,_),d(_,r(`选中：`));let v=i(_);d(_,v),c(v,e.id===C.value?`是`:`否`);let y=t(`span`);d(f,y),d(y,r(`刷新：`));let b=i(y);return d(y,b),c(b,w.value),u}),[e.id===C.value])),p,m,h)}})}),d(j,r(` `));let F=a(`rue:slot:anchor`);return d(j,F),p(()=>{l(v(`useMemo:4334:4544`,()=>u(()=>g(()=>{let e=o(),n=t(`p`);d(e,n),s(n,`badge badge-outline badge-lg`),d(n,r(`selected id: `));let a=i(n);d(n,a),c(a,C.value);let l=t(`span`);d(n,l),d(l,r(`refresh: `));let u=i(l);return d(l,u),c(u,w.value),e}),[C.value])),j,F)}),m}):``,O,A)}),m})}),m,_),m})};export{S as default};