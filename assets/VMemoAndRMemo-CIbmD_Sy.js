import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,ht as f,j as p,l as m,lt as h,pt as g,t as _,u as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./SidebarPlaygroundExample-DKa0aI1C.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>l(()=>({activeTab:y(`ref:1:0`,()=>h(`code`)),selectedId:y(`ref:1:1`,()=>h(1)),refreshCount:y(`ref:1:2`,()=>h(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return v(()=>{let l=e(),h=a(`rue:component:anchor`);return i(l,h),d(_(S,{children:v(()=>{let l=e(),h=n(`h1`);i(l,h),t(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,r(`v-memo / r-memo`));let S=n(`div`);i(l,S),s(S,`role`,`tablist`),t(S,`tabs tabs-box`);let D=n(`button`);i(S,D),s(D,`role`,`tab`),u(()=>{t(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),p(D,`click`,()=>{C.value=`preview`}),i(D,r(`效果`));let O=n(`button`);i(S,O),s(O,`role`,`tab`),u(()=>{t(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),p(O,`click`,()=>{C.value=`code`}),i(O,r(`代码`));let k=n(`div`);i(l,k),t(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);i(k,A),u(()=>{let r=C.value===`code`?v(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});g(()=>d(e,s,c))}),r}):``;g(()=>d(r,k,A))}),i(k,r(` `));let j=a(`rue:slot:anchor`);return i(k,j),u(()=>{let l=C.value===`preview`?v(()=>{let l=e(),h=n(`div`);i(l,h),t(h,`card bg-base-100 shadow`);let _=n(`div`);i(h,_),t(_,`card-body grid gap-6`);let x=n(`section`);i(_,x),t(x,`space-y-3`);let S=n(`div`);i(x,S),t(S,`flex flex-wrap items-center justify-between gap-3`);let C=n(`h2`);i(S,C),t(C,`text-xl font-semibold`),i(C,r(`v-memo / r-memo`));let D=n(`div`);i(S,D),t(D,`join`);let O=a(`rue:list:start`),k=a(`rue:list:end`);i(D,O),i(D,k);let A=new Map;u(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(r,o,c,l,f)=>{d(v(()=>{let o=e(),c=n(`button`);i(o,c),u(()=>{s(c,`key`,String(r.id))}),u(()=>{t(c,String(`btn btn-sm join-item ${w.value===r.id?`btn-active`:``}`))}),p(c,`click`,()=>{w.value=r.id});let l=a(`rue:slot:anchor`);return i(c,l),u(()=>{let e=r.name;g(()=>d(e,c,l))}),o}),o,c)}})});let j=n(`button`);i(D,j),t(j,`btn btn-sm join-item`),p(j,`click`,()=>{T.value+=1}),i(j,r(`刷新`));let M=n(`div`);i(x,M),t(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=a(`rue:list:start`),P=a(`rue:list:end`);i(M,N),i(M,P);let F=new Map;u(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(l,u,p,h,_)=>{m(y(`useMemo:3706:4293`,()=>f(()=>v(()=>{let u=e(),f=n(`div`);i(u,f),s(f,`key`,String(l.id)),t(f,String(`alert ${l.id===w.value?`alert-success`:`alert-ghost`}`));let p=n(`span`);i(f,p),t(p,`font-semibold`);let m=a(`rue:slot:anchor`);i(p,m);{let e=l.name;g(()=>d(e,p,m))}let h=n(`span`);i(f,h),i(h,r(`分数：`));let _=a(`rue:slot:anchor`);i(h,_);{let e=l.score;g(()=>d(e,h,_))}let v=n(`span`);i(f,v),i(v,r(`选中：`));let y=o(v);i(v,y),c(y,l.id===w.value?`是`:`否`);let b=n(`span`);i(f,b),i(b,r(`刷新：`));let x=o(b);return i(b,x),c(x,T.value),u}),[l.id===w.value])),u,p,h)}})}),i(M,r(` `));let I=a(`rue:slot:anchor`);return i(M,I),u(()=>{let a=y(`useMemo:4334:4544`,()=>f(()=>v(()=>{let a=e(),s=n(`p`);i(a,s),t(s,`badge badge-outline badge-lg`),i(s,r(`selected id: `));let l=o(s);i(s,l),c(l,w.value);let u=n(`span`);i(s,u),i(u,r(`refresh: `));let d=o(u);return i(u,d),c(d,T.value),a}),[w.value]));g(()=>d(a,M,I))}),l}):``;g(()=>d(l,k,j))}),l})}),l,h),l})};export{C as default};