import{$ as e,$t as t,Bt as n,Gt as r,Jt as i,X as a,Xt as o,Z as s,ct as c,et as l,gt as u,l as d,nt as f,o as p,rt as m,s as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>o(()=>({activeTab:y(`ref:1:0`,()=>n(`code`)),selectedId:y(`ref:1:1`,()=>n(1)),refreshCount:y(`ref:1:2`,()=>n(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return d(n=>{let o=l(),D=e(`rue:component:anchor`);return s(o,D),p(g(S,{children:d(()=>{let n=l(),o=_(`h1`,n);s(n,o),v(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,f(`v-memo / r-memo`));let S=_(`div`,n);s(n,S),c(S,`role`,`tablist`),v(S,`tabs tabs-box`);let D=_(`button`,S);s(S,D),c(D,`role`,`tab`),t(()=>{v(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),a(D,`click`,()=>{C.value=`preview`}),s(D,f(`效果`));let O=_(`button`,S);s(S,O),c(O,`role`,`tab`),t(()=>{v(O,`tab ${C.value===`code`?`tab-active`:``}`)}),a(O,`click`,()=>{C.value=`code`}),s(O,f(`代码`));let k=_(`div`,n);s(n,k),v(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);s(k,A),t(()=>{let n=C.value===`code`?d(()=>{let n=l(),i=_(`div`,n);s(n,i),v(i,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,i);s(i,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});r(()=>p(e,a,o))}),n}):``;r(()=>p(n,k,A))}),s(k,f(` `));let j=e(`rue:slot:anchor`);return s(k,j),t(()=>{let n=C.value===`preview`?d(()=>{let n=l(),o=_(`div`,n);s(n,o),v(o,`card bg-base-100 shadow`);let g=_(`div`,o);s(o,g),v(g,`card-body grid gap-6`);let x=_(`section`,g);s(g,x),v(x,`space-y-3`);let S=_(`div`,x);s(x,S),v(S,`flex flex-wrap items-center justify-between gap-3`);let C=_(`h2`,S);s(S,C),v(C,`text-xl font-semibold`),s(C,f(`v-memo / r-memo`));let D=_(`div`,S);s(S,D),v(D,`join`);let O=e(`rue:list:start`),k=e(`rue:list:end`);s(D,O),s(D,k);let A=new Map;t(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,i,o,u,f)=>{p(d(()=>{let i=l(),o=_(`button`,i);s(i,o),t(()=>{c(o,`key`,String(n.id))}),t(()=>{v(o,`btn btn-sm join-item ${w.value===n.id?`btn-active`:``}`)}),a(o,`click`,()=>{w.value=n.id});let u=e(`rue:slot:anchor`);return s(o,u),t(()=>{let e=n.name;r(()=>p(e,o,u))}),i}),i,o)}})});let j=_(`button`,D);s(D,j),v(j,`btn btn-sm join-item`),a(j,`click`,()=>{T.value+=1}),s(j,f(`刷新`));let M=_(`div`,x);s(x,M),v(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=e(`rue:list:start`),P=e(`rue:list:end`);s(M,N),s(M,P);let F=new Map;t(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(t,n,a,o,g)=>{h(y(`useMemo:3706:4293`,()=>i(()=>d(()=>{let n=l(),i=_(`div`,n);s(n,i),c(i,`key`,String(t.id)),v(i,`alert ${t.id===w.value?`alert-success`:`alert-ghost`}`);let a=_(`span`,i);s(i,a),v(a,`font-semibold`);let o=e(`rue:slot:anchor`);s(a,o);{let e=t.name;r(()=>p(e,a,o))}let d=_(`span`,i);s(i,d),s(d,f(`分数：`));let h=e(`rue:slot:anchor`);s(d,h);{let e=t.score;r(()=>p(e,d,h))}let g=_(`span`,i);s(i,g),s(g,f(`选中：`));let y=m(g);s(g,y),u(y,t.id===w.value?`是`:`否`);let b=_(`span`,i);s(i,b),s(b,f(`刷新：`));let x=m(b);return s(b,x),u(x,T.value),n}),[t.id===w.value])),n,a,o)}})}),s(M,f(` `));let I=e(`rue:slot:anchor`);return s(M,I),t(()=>{let e=y(`useMemo:4334:4544`,()=>i(()=>d(()=>{let e=l(),t=_(`p`,e);s(e,t),v(t,`badge badge-outline badge-lg`),s(t,f(`selected id: `));let n=m(t);s(t,n),u(n,w.value);let r=_(`span`,t);s(t,r),s(r,f(`refresh: `));let i=m(r);return s(r,i),u(i,T.value),e}),[w.value]));r(()=>p(e,M,I))}),n}):``;r(()=>p(n,k,j))}),n})}),o,D),o})};export{C as default};