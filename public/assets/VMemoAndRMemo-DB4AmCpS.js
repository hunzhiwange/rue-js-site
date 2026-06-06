import{$ as e,B as t,Dt as n,G as r,H as i,K as a,St as o,U as s,W as c,Z as l,at as u,c as d,ht as f,l as p,s as m,t as h,wt as g,yt as _,z as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as x}from"./Code-BCLFq1E3.js";import{t as S}from"./SidebarPlaygroundExample-CdMvdgT7.js";var C=()=>{let{activeTab:C,selectedId:w,refreshCount:T,rows:E}=y(`useSetup:0:0`,()=>g(()=>({activeTab:y(`ref:1:0`,()=>f(`code`)),selectedId:y(`ref:1:1`,()=>f(1)),refreshCount:y(`ref:1:2`,()=>f(0)),rows:[{id:1,name:`Alpha`,score:92},{id:2,name:`Beta`,score:86},{id:3,name:`Gamma`,score:78}]})));return p(f=>{let g=s(),D=i(`rue:component:anchor`);return t(g,D),m(h(S,{children:p(()=>{let f=s(),g=c(`h1`,f);t(f,g),e(g,`text-5xl font-semibold mb-4 md:mb-4`),t(g,r(`v-memo / r-memo`));let S=c(`div`,f);t(f,S),l(S,`role`,`tablist`),e(S,`tabs tabs-box`);let D=c(`button`,S);t(S,D),l(D,`role`,`tab`),n(()=>{e(D,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),v(D,`click`,()=>{C.value=`preview`}),t(D,r(`效果`));let O=c(`button`,S);t(S,O),l(O,`role`,`tab`),n(()=>{e(O,String(`tab ${C.value===`code`?`tab-active`:``}`))}),v(O,`click`,()=>{C.value=`code`}),t(O,r(`代码`));let k=c(`div`,f);t(f,k),e(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=i(`rue:slot:anchor`);t(k,A),n(()=>{let r=C.value===`code`?p(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VMemoAndRMemo;`});_(()=>m(e,o,l))}),r}):``;_(()=>m(r,k,A))}),t(k,r(` `));let j=i(`rue:slot:anchor`);return t(k,j),n(()=>{let f=C.value===`preview`?p(()=>{let f=s(),h=c(`div`,f);t(f,h),e(h,`card bg-base-100 shadow`);let g=c(`div`,h);t(h,g),e(g,`card-body grid gap-6`);let x=c(`section`,g);t(g,x),e(x,`space-y-3`);let S=c(`div`,x);t(x,S),e(S,`flex flex-wrap items-center justify-between gap-3`);let C=c(`h2`,S);t(S,C),e(C,`text-xl font-semibold`),t(C,r(`v-memo / r-memo`));let D=c(`div`,S);t(S,D),e(D,`join`);let O=i(`rue:list:start`),k=i(`rue:list:end`);t(D,O),t(D,k);let A=new Map;n(()=>{A=b({items:E||[],getKey:(e,t)=>e.id,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(r,a,o,u,d)=>{m(p(()=>{let a=s(),o=c(`button`,a);t(a,o),n(()=>{l(o,`key`,String(r.id))}),n(()=>{e(o,String(`btn btn-sm join-item ${w.value===r.id?`btn-active`:``}`))}),v(o,`click`,()=>{w.value=r.id});let u=i(`rue:slot:anchor`);return t(o,u),n(()=>{let e=r.name;_(()=>m(e,o,u))}),a}),a,o)}})});let j=c(`button`,D);t(D,j),e(j,`btn btn-sm join-item`),v(j,`click`,()=>{T.value+=1}),t(j,r(`刷新`));let M=c(`div`,x);t(x,M),e(M,`rounded-box border border-base-300 p-4 grid gap-3`);let N=i(`rue:list:start`),P=i(`rue:list:end`);t(M,N),t(M,P);let F=new Map;n(()=>{F=b({items:E||[],getKey:(e,t)=>e.id,elements:F,parent:M,before:P,start:N,renderItem:(n,f,h,g,v)=>{d(y(`useMemo:3706:4293`,()=>o(()=>p(()=>{let o=s(),d=c(`div`,o);t(o,d),l(d,`key`,String(n.id)),e(d,String(`alert ${n.id===w.value?`alert-success`:`alert-ghost`}`));let f=c(`span`,d);t(d,f),e(f,`font-semibold`);let p=i(`rue:slot:anchor`);t(f,p);{let e=n.name;_(()=>m(e,f,p))}let h=c(`span`,d);t(d,h),t(h,r(`分数：`));let g=i(`rue:slot:anchor`);t(h,g);{let e=n.score;_(()=>m(e,h,g))}let v=c(`span`,d);t(d,v),t(v,r(`选中：`));let y=a(v);t(v,y),u(y,n.id===w.value?`是`:`否`);let b=c(`span`,d);t(d,b),t(b,r(`刷新：`));let x=a(b);return t(b,x),u(x,T.value),o}),[n.id===w.value])),f,h,g)}})}),t(M,r(` `));let I=i(`rue:slot:anchor`);return t(M,I),n(()=>{let n=y(`useMemo:4334:4544`,()=>o(()=>p(()=>{let n=s(),i=c(`p`,n);t(n,i),e(i,`badge badge-outline badge-lg`),t(i,r(`selected id: `));let o=a(i);t(i,o),u(o,w.value);let l=c(`span`,i);t(i,l),t(l,r(`refresh: `));let d=a(l);return t(l,d),u(d,T.value),n}),[w.value]));_(()=>m(n,M,I))}),f}):``;_(()=>m(f,k,j))}),f})}),g,D),g})};export{C as default};