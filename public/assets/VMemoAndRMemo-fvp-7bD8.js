import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,qt as p,s as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>o(()=>({activeTab:y(`ref:1:0`,()=>v(`code`)),selectedId:y(`ref:1:1`,()=>v(1)),refreshCount:y(`ref:1:2`,()=>v(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return l(o=>{let v=e(),D=t(`rue:component:anchor`);return i(v,D),f(g(S,{children:l(()=>{let o=e(),v=s(`h1`,o);i(o,v),u(v,`text-5xl font-semibold mb-4 md:mb-4`),i(v,_(`v-memo / r-memo`));let S=s(`div`,o);i(o,S),h(S,`role`,`tablist`),u(S,`tabs tabs-box`);let D=s(`button`,S);i(S,D),h(D,`role`,`tab`),n(()=>{u(D,`tab ${C.value===`preview`?`tab-active`:``}`)}),a(D,`click`,()=>{C.value=`preview`}),i(D,_(`效果`));let O=s(`button`,S);i(S,O),h(O,`role`,`tab`),n(()=>{u(O,`tab ${C.value===`code`?`tab-active`:``}`)}),a(O,`click`,()=>{C.value=`code`}),i(O,_(`代码`));let k=s(`div`,o);i(o,k),u(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=t(`rue:slot:anchor`);i(k,A),n(()=>{let a=C.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,k,A))}),i(k,_(` `));let j=t(`rue:slot:anchor`);return i(k,j),n(()=>{let o=C.value===`preview`?l(()=>{let o=e(),g=s(`div`,o);i(o,g),u(g,`card bg-base-100 shadow`);let v=s(`div`,g);i(g,v),u(v,`card-body grid gap-6`);let x=s(`section`,v);i(v,x),u(x,`space-y-3`);let S=s(`div`,x);i(x,S),u(S,`flex flex-wrap items-center justify-between gap-3`);let C=s(`h2`,S);i(S,C),u(C,`text-xl font-semibold`),i(C,_(`v-memo / r-memo`));let D=s(`div`,S);i(S,D),u(D,`join`);let O=t(`rue:list:start`),k=t(`rue:list:end`);i(D,O),i(D,k);let A=new Map;n(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(o,c,d,p,m)=>{f(l(()=>{let c=e(),l=s(`button`,c);i(c,l),n(()=>{h(l,`key`,String(o.id))}),n(()=>{u(l,`btn btn-sm join-item ${w.value===o.id?`btn-active`:``}`)}),a(l,`click`,()=>{w.value=o.id});let d=t(`rue:slot:anchor`);return i(l,d),n(()=>{let e=o.name;r(()=>f(e,l,d))}),c}),c,d)}})});let j=s(`button`,D);i(D,j),u(j,`btn btn-sm join-item`),a(j,`click`,()=>{T.value+=1}),i(j,_(`刷新`));let M=s(`div`,x);i(x,M),u(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=t(`rue:list:start`),P=t(`rue:list:end`);i(M,N),i(M,P);let F=new Map;n(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(n,a,o,g,v)=>{m(y(`useMemo:3706:4293`,()=>p(()=>l(()=>{let a=e(),o=s(`div`,a);i(a,o),h(o,`key`,String(n.id)),u(o,`alert ${n.id===w.value?`alert-success`:`alert-ghost`}`);let l=s(`span`,o);i(o,l),u(l,`font-semibold`);let p=t(`rue:slot:anchor`);i(l,p);{let e=n.name;r(()=>f(e,l,p))}let m=s(`span`,o);i(o,m),i(m,_(`分数：`));let g=t(`rue:slot:anchor`);i(m,g);{let e=n.score;r(()=>f(e,m,g))}let v=s(`span`,o);i(o,v),i(v,_(`选中：`));let y=d(v);i(v,y),c(y,n.id===w.value?`是`:`否`);let b=s(`span`,o);i(o,b),i(b,_(`刷新：`));let x=d(b);return i(b,x),c(x,T.value),a}),[n.id===w.value])),a,o,g)}})}),i(M,_(` `));let I=t(`rue:slot:anchor`);return i(M,I),n(()=>{let t=y(`useMemo:4334:4544`,()=>p(()=>l(()=>{let t=e(),n=s(`p`,t);i(t,n),u(n,`badge badge-outline badge-lg`),i(n,_(`selected id: `));let r=d(n);i(n,r),c(r,w.value);let a=s(`span`,n);i(n,a),i(a,_(`refresh: `));let o=d(a);return i(a,o),c(o,T.value),t}),[w.value]));r(()=>f(t,M,I))}),o}):``;r(()=>f(o,k,j))}),o})}),v,D),v})};export{C as default};