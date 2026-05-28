import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Wt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,l as p,mt as m,ot as h,t as g,tt as _,u as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{t as x}from"./Code-B_4lzH85.js";import{t as S}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>n(()=>({activeTab:y(`ref:1:0`,()=>r(`code`)),selectedId:y(`ref:1:1`,()=>r(1)),refreshCount:y(`ref:1:2`,()=>r(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return d(n=>{let r=i(),D=l(`rue:component:anchor`);return s(r,D),p(g(S,{children:d(()=>{let n=i(),r=e(`h1`,n);s(n,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,f(`v-memo / r-memo`));let S=e(`div`,n);s(n,S),h(S,`role`,`tablist`),u(S,`tabs tabs-box`);let D=e(`button`,S);s(S,D),h(D,`role`,`tab`),c(()=>{u(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),t(D,`click`,()=>{C.value=`preview`}),s(D,f(`效果`));let O=e(`button`,S);s(S,O),h(O,`role`,`tab`),c(()=>{u(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),t(O,`click`,()=>{C.value=`code`}),s(O,f(`代码`));let k=e(`div`,n);s(n,k),u(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=l(`rue:slot:anchor`);s(k,A),c(()=>{let t=C.value===`code`?d(()=>{let t=i(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let o=l(`rue:component:anchor`);return s(r,o),c(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});a(()=>p(e,r,o))}),t}):``;a(()=>p(t,k,A))}),s(k,f(` `));let j=l(`rue:slot:anchor`);return s(k,j),c(()=>{let n=C.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`card bg-base-100 shadow`);let g=e(`div`,r);s(r,g),u(g,`card-body grid gap-6`);let x=e(`section`,g);s(g,x),u(x,`space-y-3`);let S=e(`div`,x);s(x,S),u(S,`flex flex-wrap items-center justify-between gap-3`);let C=e(`h2`,S);s(S,C),u(C,`text-xl font-semibold`),s(C,f(`v-memo / r-memo`));let D=e(`div`,S);s(S,D),u(D,`join`);let O=l(`rue:list:start`),k=l(`rue:list:end`);s(D,O),s(D,k);let A=new Map;c(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,r,o,f,m)=>{p(d(()=>{let r=i(),o=e(`button`,r);s(r,o),c(()=>{h(o,`key`,String(n.id))}),c(()=>{u(o,String(`btn btn-sm join-item ${w.value===n.id?`btn-active`:``}`))}),t(o,`click`,()=>{w.value=n.id});let d=l(`rue:slot:anchor`);return s(o,d),c(()=>{let e=n.name;a(()=>p(e,o,d))}),r}),r,o)}})});let j=e(`button`,D);s(D,j),u(j,`btn btn-sm join-item`),t(j,`click`,()=>{T.value+=1}),s(j,f(`刷新`));let M=e(`div`,x);s(x,M),u(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=l(`rue:list:start`),P=l(`rue:list:end`);s(M,N),s(M,P);let F=new Map;c(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(t,n,r,c,g)=>{v(y(`useMemo:3706:4293`,()=>o(()=>d(()=>{let n=i(),r=e(`div`,n);s(n,r),h(r,`key`,String(t.id)),u(r,String(`alert ${t.id===w.value?`alert-success`:`alert-ghost`}`));let o=e(`span`,r);s(r,o),u(o,`font-semibold`);let c=l(`rue:slot:anchor`);s(o,c);{let e=t.name;a(()=>p(e,o,c))}let d=e(`span`,r);s(r,d),s(d,f(`分数：`));let g=l(`rue:slot:anchor`);s(d,g);{let e=t.score;a(()=>p(e,d,g))}let v=e(`span`,r);s(r,v),s(v,f(`选中：`));let y=_(v);s(v,y),m(y,t.id===w.value?`是`:`否`);let b=e(`span`,r);s(r,b),s(b,f(`刷新：`));let x=_(b);return s(b,x),m(x,T.value),n}),[t.id===w.value])),n,r,c)}})}),s(M,f(` `));let I=l(`rue:slot:anchor`);return s(M,I),c(()=>{let t=y(`useMemo:4334:4544`,()=>o(()=>d(()=>{let t=i(),n=e(`p`,t);s(t,n),u(n,`badge badge-outline badge-lg`),s(n,f(`selected id: `));let r=_(n);s(n,r),m(r,w.value);let a=e(`span`,n);s(n,a),s(a,f(`refresh: `));let o=_(a);return s(a,o),m(o,T.value),t}),[w.value]));a(()=>p(t,M,I))}),n}):``;a(()=>p(n,k,j))}),n})}),r,D),r})};export{C as default};