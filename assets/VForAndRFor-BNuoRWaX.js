import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as y}from"./Code-CLTo4rRM.js";import{t as b}from"./SidebarPlaygroundExample-DOFGFBd1.js";var x=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],S={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},C=()=>{let{activeTab:C,fruits:w,count:T}=_(`useSetup:0:0`,()=>f(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),fruits:_(`ref:1:1`,()=>p([...x])),count:_(`ref:1:2`,()=>p(3))})));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(b,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`v-for / r-for`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let b=r(`button`,_);a(_,b),c(b,`role`,`tab`),l(()=>{n(b,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{C.value=`preview`}),a(b,s(`效果`));let E=r(`button`,_);a(_,E),c(E,`role`,`tab`),l(()=>{n(E,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(E,`click`,()=>{C.value=`code`}),a(E,s(`代码`));let D=r(`div`,f);a(f,D),n(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);a(D,O),l(()=>{let i=C.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const meta = {
  framework: 'Rue',
  renderer: 'Vapor',
  syntax: 'TSX directives',
};

const VForAndRFor: FC = () => {
  const fruits = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ]);
  const count = ref(3);

  return (
    <div className="grid gap-4">
      <ul className="list bg-base-100 rounded-box">
        <li v-for="(item, index) in fruits.value" className="list-row">
          {index + 1}. {item.name}
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        <span r-for="(value, key) in meta" className="badge badge-outline">
          {key}: {value}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <span v-for="step in count.value" className="badge badge-primary">
          Step {step}
        </span>
      </div>
    </div>
  );
};

export default VForAndRFor;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,D,O))}),a(D,s(` `));let k=e(`rue:slot:anchor`);return a(D,k),l(()=>{let f=C.value===`preview`?u(()=>{let f=t(),p=r(`div`,f);a(f,p),n(p,`card bg-base-100 shadow`);let m=r(`div`,p);a(p,m),n(m,`card-body grid gap-6`);let _=r(`section`,m);a(m,_),n(_,`space-y-3`);let y=r(`div`,_);a(_,y),n(y,`flex flex-wrap items-center justify-between gap-3`);let b=r(`h2`,y);a(y,b),n(b,`text-xl font-semibold`),a(b,s(`v-for：数组遍历`));let C=r(`div`,y);a(y,C),n(C,`join`);let E=r(`button`,C);a(C,E),n(E,`btn btn-sm join-item`),i(E,`click`,()=>{w.value=[...w.value].reverse()}),a(E,s(`倒序`));let D=r(`button`,C);a(C,D),n(D,`btn btn-sm join-item`),i(D,`click`,()=>{w.value=[...x]}),a(D,s(`重置`));let O=r(`ul`,_);a(_,O),n(O,`list bg-base-200 rounded-box`);let k=e(`rue:list:start`),A=e(`rue:list:end`);a(O,k),a(O,A);let j=new Map;l(()=>{j=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0].id,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(i,f,p,m,_)=>{d(u(()=>{let u=t(),f=r(`li`,u);a(u,f),l(()=>{c(f,`key`,String(i[0].id))}),n(f,`list-row`);let p=r(`div`,f);a(f,p);let m=r(`div`,p);a(p,m),n(m,`font-medium`);let _=g(m);a(m,_),l(()=>{o(_,i[1]+1)}),a(m,s(`. `));let v=e(`rue:slot:anchor`);a(m,v),l(()=>{let e=i[0].name;h(()=>d(e,m,v))});let y=r(`div`,p);a(p,y),n(y,`text-sm opacity-70`),a(y,s(`颜色：`));let b=e(`rue:slot:anchor`);return a(y,b),l(()=>{let e=i[0].color;h(()=>d(e,y,b))}),u}),f,p)}})});let M=r(`section`,m);a(m,M),n(M,`space-y-3`);let N=r(`h2`,M);a(M,N),n(N,`text-xl font-semibold`),a(N,s(`r-for：对象遍历`));let P=r(`div`,M);a(M,P),n(P,`flex flex-wrap gap-2`);let F=e(`rue:list:start`),I=e(`rue:list:end`);a(P,F),a(P,I);let L=new Map;l(()=>{L=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(S)||[],getKey:(e,t)=>e[1],elements:L,parent:P,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(i,o,f,p,m)=>{d(u(()=>{let o=t(),u=r(`span`,o);a(o,u),l(()=>{c(u,`key`,String(i[1]))}),n(u,`badge badge-outline badge-lg`);let f=e(`rue:slot:anchor`);a(u,f),l(()=>{let e=i[1];h(()=>d(e,u,f))}),a(u,s(`: `));let p=e(`rue:slot:anchor`);return a(u,p),l(()=>{let e=i[0];h(()=>d(e,u,p))}),o}),o,f)}})});let R=r(`section`,m);a(m,R),n(R,`space-y-3`);let z=r(`div`,R);a(R,z),n(z,`flex flex-wrap items-center justify-between gap-3`);let B=r(`h2`,z);a(z,B),n(B,`text-xl font-semibold`),a(B,s(`v-for：数字迭代`));let V=r(`div`,z);a(z,V),n(V,`join`);let H=r(`button`,V);a(V,H),n(H,`btn btn-sm join-item`),i(H,`click`,()=>{T.value=Math.max(1,T.value-1)}),a(H,s(`-1`));let U=r(`button`,V);a(V,U),n(U,`btn btn-sm join-item`),i(U,`click`,()=>{T.value=Math.min(6,T.value+1)}),a(U,s(`+1`));let W=r(`div`,R);a(R,W),n(W,`flex flex-wrap gap-2`);let G=e(`rue:list:start`),K=e(`rue:list:end`);a(W,G),a(W,K);let q=new Map;return l(()=>{q=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.value)||[],getKey:(e,t)=>e[0],elements:q,parent:W,before:K,singleRoot:!0,trackIndex:!1,start:G,renderItem:(i,o,f,p,m)=>{d(u(()=>{let o=t(),u=r(`span`,o);a(o,u),l(()=>{c(u,`key`,String(i[0]))}),n(u,`badge badge-primary badge-lg`),a(u,s(`Step `));let f=e(`rue:slot:anchor`);return a(u,f),l(()=>{let e=i[0];h(()=>d(e,u,f))}),o}),o,f)}})}),f}):``;h(()=>d(f,D,k))}),f})}),p,_),p})};export{C as default};