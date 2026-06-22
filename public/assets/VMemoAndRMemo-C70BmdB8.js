import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,in as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,s as h,t as g,tn as _,tt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-C5NjdoiC.js";import{r as S}from"./SidebarPlaygroundExample-DpItFif-.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>f(()=>({activeTab:y(`ref:1:0`,()=>n(`code`)),selectedId:y(`ref:1:1`,()=>n(1)),refreshCount:y(`ref:1:2`,()=>n(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return l(n=>{let f=u(),D=v(`rue:component:anchor`);return e(f,D),d(g(S,{children:l(()=>{let n=u(),f=m(`h1`,n);e(n,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),e(f,c(`v-memo / r-memo`));let S=m(`div`,n);e(n,S),o(S,`role`,`tablist`),p(S,`tabs tabs-box`);let D=m(`button`,S);e(S,D),o(D,`role`,`tab`),t(()=>{p(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(D,`click`,()=>{C.value=`preview`}),e(D,c(`效果`));let O=m(`button`,S);e(S,O),o(O,`role`,`tab`),t(()=>{p(O,`tab ${C.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{C.value=`code`}),e(O,c(`代码`));let k=m(`div`,n);e(n,k),p(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=v(`rue:slot:anchor`);e(k,A),t(()=>{let n=C.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=v(`rue:component:anchor`);return e(i,a),t(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});_(()=>d(e,i,a))}),n}):``;_(()=>d(n,k,A))}),e(k,c(` `));let j=v(`rue:slot:anchor`);return e(k,j),t(()=>{let n=C.value===`preview`?l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`card bg-base-100 shadow`);let g=m(`div`,f);e(f,g),p(g,`card-body grid gap-6`);let x=m(`section`,g);e(g,x),p(x,`space-y-3`);let S=m(`div`,x);e(x,S),p(S,`flex flex-wrap items-center justify-between gap-3`);let C=m(`h2`,S);e(S,C),p(C,`text-xl font-semibold`),e(C,c(`v-memo / r-memo`));let D=m(`div`,S);e(S,D),p(D,`join`);let O=v(`rue:list:start`),k=v(`rue:list:end`);e(D,O),e(D,k);let A=new Map;t(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,i,a,s,c)=>{d(l(()=>{let i=u(),a=m(`button`,i);e(i,a),t(()=>{o(a,`key`,String(n.id))}),t(()=>{p(a,`btn btn-sm join-item ${w.value===n.id?`btn-active`:``}`)}),r(a,`click`,()=>{w.value=n.id});let s=v(`rue:slot:anchor`);return e(a,s),t(()=>{let e=n.name;_(()=>d(e,a,s))}),i}),i,a)}})});let j=m(`button`,D);e(D,j),p(j,`btn btn-sm join-item`),r(j,`click`,()=>{T.value+=1}),e(j,c(`刷新`));let M=m(`div`,x);e(x,M),p(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=v(`rue:list:start`),P=v(`rue:list:end`);e(M,N),e(M,P);let F=new Map;t(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(t,n,r,f,g)=>{h(y(`useMemo:3706:4293`,()=>s(()=>l(()=>{let n=u(),r=m(`div`,n);e(n,r),o(r,`key`,String(t.id)),p(r,`alert ${t.id===w.value?`alert-success`:`alert-ghost`}`);let s=m(`span`,r);e(r,s),p(s,`font-semibold`);let l=v(`rue:slot:anchor`);e(s,l);{let e=t.name;_(()=>d(e,s,l))}let f=m(`span`,r);e(r,f),e(f,c(`分数：`));let h=v(`rue:slot:anchor`);e(f,h);{let e=t.score;_(()=>d(e,f,h))}let g=m(`span`,r);e(r,g),e(g,c(`选中：`));let y=i(g);e(g,y),a(y,t.id===w.value?`是`:`否`);let b=m(`span`,r);e(r,b),e(b,c(`刷新：`));let x=i(b);return e(b,x),a(x,T.value),n}),[t.id===w.value])),n,r,f)}})}),e(M,c(` `));let I=v(`rue:slot:anchor`);return e(M,I),t(()=>{let t=y(`useMemo:4334:4544`,()=>s(()=>l(()=>{let t=u(),n=m(`p`,t);e(t,n),p(n,`badge badge-outline badge-lg`),e(n,c(`selected id: `));let r=i(n);e(n,r),a(r,w.value);let o=m(`span`,n);e(n,o),e(o,c(`refresh: `));let s=i(o);return e(o,s),a(s,T.value),t}),[w.value]));_(()=>d(t,M,I))}),n}):``;_(()=>d(n,k,j))}),n})}),f,D),f})};export{C as default};