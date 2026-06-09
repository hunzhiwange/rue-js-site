import{$ as e,Gt as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,c as l,ct as u,et as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./Code-5DOEyGxf.js";import{r as S}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>h(()=>({activeTab:y(`ref:1:0`,()=>a(`code`)),selectedId:y(`ref:1:1`,()=>a(1)),refreshCount:y(`ref:1:2`,()=>a(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return f(a=>{let h=i(),D=c(`rue:component:anchor`);return s(h,D),g(_(S,{children:f(()=>{let a=i(),h=e(`h1`,a);s(a,h),u(h,`text-5xl font-semibold mb-4 md:mb-4`),s(h,d(`v-memo / r-memo`));let S=e(`div`,a);s(a,S),m(S,`role`,`tablist`),u(S,`tabs tabs-box`);let D=e(`button`,S);s(S,D),m(D,`role`,`tab`),o(()=>{u(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),r(D,`click`,()=>{C.value=`preview`}),s(D,d(`效果`));let O=e(`button`,S);s(S,O),m(O,`role`,`tab`),o(()=>{u(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),r(O,`click`,()=>{C.value=`code`}),s(O,d(`代码`));let k=e(`div`,a);s(a,k),u(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=c(`rue:slot:anchor`);s(k,A),o(()=>{let t=C.value===`code`?f(()=>{let t=i(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);s(r,a),u(a,`card-body p-0`);let l=c(`rue:component:anchor`);return s(a,l),o(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});n(()=>g(e,a,l))}),t}):``;n(()=>g(t,k,A))}),s(k,d(` `));let j=c(`rue:slot:anchor`);return s(k,j),o(()=>{let a=C.value===`preview`?f(()=>{let a=i(),h=e(`div`,a);s(a,h),u(h,`card bg-base-100 shadow`);let _=e(`div`,h);s(h,_),u(_,`card-body grid gap-6`);let x=e(`section`,_);s(_,x),u(x,`space-y-3`);let S=e(`div`,x);s(x,S),u(S,`flex flex-wrap items-center justify-between gap-3`);let C=e(`h2`,S);s(S,C),u(C,`text-xl font-semibold`),s(C,d(`v-memo / r-memo`));let D=e(`div`,S);s(S,D),u(D,`join`);let O=c(`rue:list:start`),k=c(`rue:list:end`);s(D,O),s(D,k);let A=new Map;o(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,a,l,d,p)=>{g(f(()=>{let a=i(),l=e(`button`,a);s(a,l),o(()=>{m(l,`key`,String(t.id))}),o(()=>{u(l,String(`btn btn-sm join-item ${w.value===t.id?`btn-active`:``}`))}),r(l,`click`,()=>{w.value=t.id});let d=c(`rue:slot:anchor`);return s(l,d),o(()=>{let e=t.name;n(()=>g(e,l,d))}),a}),a,l)}})});let j=e(`button`,D);s(D,j),u(j,`btn btn-sm join-item`),r(j,`click`,()=>{T.value+=1}),s(j,d(`刷新`));let M=e(`div`,x);s(x,M),u(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=c(`rue:list:start`),P=c(`rue:list:end`);s(M,N),s(M,P);let F=new Map;o(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(r,a,o,h,_)=>{l(y(`useMemo:3706:4293`,()=>t(()=>f(()=>{let t=i(),a=e(`div`,t);s(t,a),m(a,`key`,String(r.id)),u(a,String(`alert ${r.id===w.value?`alert-success`:`alert-ghost`}`));let o=e(`span`,a);s(a,o),u(o,`font-semibold`);let l=c(`rue:slot:anchor`);s(o,l);{let e=r.name;n(()=>g(e,o,l))}let f=e(`span`,a);s(a,f),s(f,d(`分数：`));let h=c(`rue:slot:anchor`);s(f,h);{let e=r.score;n(()=>g(e,f,h))}let _=e(`span`,a);s(a,_),s(_,d(`选中：`));let y=v(_);s(_,y),p(y,r.id===w.value?`是`:`否`);let b=e(`span`,a);s(a,b),s(b,d(`刷新：`));let x=v(b);return s(b,x),p(x,T.value),t}),[r.id===w.value])),a,o,h)}})}),s(M,d(` `));let I=c(`rue:slot:anchor`);return s(M,I),o(()=>{let r=y(`useMemo:4334:4544`,()=>t(()=>f(()=>{let t=i(),n=e(`p`,t);s(t,n),u(n,`badge badge-outline badge-lg`),s(n,d(`selected id: `));let r=v(n);s(n,r),p(r,w.value);let a=e(`span`,n);s(n,a),s(a,d(`refresh: `));let o=v(a);return s(a,o),p(o,T.value),t}),[w.value]));n(()=>g(r,M,I))}),a}):``;n(()=>g(a,k,j))}),a})}),h,D),h})};export{C as default};