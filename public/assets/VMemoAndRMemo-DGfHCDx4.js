import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,u as g,wt as _,xt as v}from"./vapor-runtime-EUvELKQT.js";import{a as y,n as b}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as x}from"./Code-BdVklNCb.js";import{t as S}from"./SidebarPlaygroundExample-1AA0CIwm.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>t(()=>({activeTab:y(`ref:1:0`,()=>c(`code`)),selectedId:y(`ref:1:1`,()=>c(1)),refreshCount:y(`ref:1:2`,()=>c(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return l(t=>{let c=n(),D=s(`rue:component:anchor`);return r(c,D),d(m(S,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`v-memo / r-memo`));let S=a(`div`,t);r(t,S),e(S,`role`,`tablist`),h(S,`tabs tabs-box`);let D=a(`button`,S);r(S,D),e(D,`role`,`tab`),u(()=>{h(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),o(D,`click`,()=>{C.value=`preview`}),r(D,f(`效果`));let O=a(`button`,S);r(S,O),e(O,`role`,`tab`),u(()=>{h(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),o(O,`click`,()=>{C.value=`code`}),r(O,f(`代码`));let k=a(`div`,t);r(t,k),h(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);r(k,A),u(()=>{let e=C.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});v(()=>d(e,i,o))}),e}):``;v(()=>d(e,k,A))}),r(k,f(` `));let j=s(`rue:slot:anchor`);return r(k,j),u(()=>{let t=C.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`card bg-base-100 shadow`);let m=a(`div`,c);r(c,m),h(m,`card-body grid gap-6`);let x=a(`section`,m);r(m,x),h(x,`space-y-3`);let S=a(`div`,x);r(x,S),h(S,`flex flex-wrap items-center justify-between gap-3`);let C=a(`h2`,S);r(S,C),h(C,`text-xl font-semibold`),r(C,f(`v-memo / r-memo`));let D=a(`div`,S);r(S,D),h(D,`join`);let O=s(`rue:list:start`),k=s(`rue:list:end`);r(D,O),r(D,k);let A=new Map;u(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,i,c,f,p)=>{d(l(()=>{let i=n(),c=a(`button`,i);r(i,c),u(()=>{e(c,`key`,String(t.id))}),u(()=>{h(c,String(`btn btn-sm join-item ${w.value===t.id?`btn-active`:``}`))}),o(c,`click`,()=>{w.value=t.id});let l=s(`rue:slot:anchor`);return r(c,l),u(()=>{let e=t.name;v(()=>d(e,c,l))}),i}),i,c)}})});let j=a(`button`,D);r(D,j),h(j,`btn btn-sm join-item`),o(j,`click`,()=>{T.value+=1}),r(j,f(`刷新`));let M=a(`div`,x);r(x,M),h(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=s(`rue:list:start`),P=s(`rue:list:end`);r(M,N),r(M,P);let F=new Map;u(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(t,o,c,u,m)=>{g(y(`useMemo:3706:4293`,()=>_(()=>l(()=>{let o=n(),c=a(`div`,o);r(o,c),e(c,`key`,String(t.id)),h(c,String(`alert ${t.id===w.value?`alert-success`:`alert-ghost`}`));let l=a(`span`,c);r(c,l),h(l,`font-semibold`);let u=s(`rue:slot:anchor`);r(l,u);{let e=t.name;v(()=>d(e,l,u))}let m=a(`span`,c);r(c,m),r(m,f(`分数：`));let g=s(`rue:slot:anchor`);r(m,g);{let e=t.score;v(()=>d(e,m,g))}let _=a(`span`,c);r(c,_),r(_,f(`选中：`));let y=i(_);r(_,y),p(y,t.id===w.value?`是`:`否`);let b=a(`span`,c);r(c,b),r(b,f(`刷新：`));let x=i(b);return r(b,x),p(x,T.value),o}),[t.id===w.value])),o,c,u)}})}),r(M,f(` `));let I=s(`rue:slot:anchor`);return r(M,I),u(()=>{let e=y(`useMemo:4334:4544`,()=>_(()=>l(()=>{let e=n(),t=a(`p`,e);r(e,t),h(t,`badge badge-outline badge-lg`),r(t,f(`selected id: `));let o=i(t);r(t,o),p(o,w.value);let s=a(`span`,t);r(t,s),r(s,f(`refresh: `));let c=i(s);return r(s,c),p(c,T.value),e}),[w.value]));v(()=>d(e,M,I))}),t}):``;v(()=>d(t,k,j))}),t})}),c,D),c})};export{C as default};