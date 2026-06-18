import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,gt as l,l as u,q as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>f(()=>{let e=g(`ref:1:0`,()=>r(`code`)),t=g(`ref:1:1`,()=>r([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>r(3)),_fruitCards:g(`computed:1:3`,()=>l(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return u(r=>{let l=s(),f=a(`rue:component:anchor`);return n(l,f),p(h(y,{children:u(()=>{let r=s(),l=i(`h1`,r);n(r,l),m(l,`text-5xl font-semibold mb-4 md:mb-4`),n(l,e(`v-for / r-for`));let f=i(`div`,r);n(r,f),c(f,`role`,`tablist`),m(f,`tabs tabs-box`);let g=i(`button`,f);n(f,g),c(g,`role`,`tab`),o(()=>{m(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),d(g,`click`,()=>{S.value=`preview`}),n(g,e(`效果`));let y=i(`button`,f);n(f,y),c(y,`role`,`tab`),o(()=>{m(y,`tab ${S.value===`code`?`tab-active`:``}`)}),d(y,`click`,()=>{S.value=`code`}),n(y,e(`代码`));let E=i(`div`,r);n(r,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),o(()=>{let e=S.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),m(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),m(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});t(()=>p(e,c,l))}),e}):``;t(()=>p(e,E,D))}),n(E,e(` `));let O=a(`rue:slot:anchor`);return n(E,O),o(()=>{let r=S.value===`preview`?u(()=>{let r=s(),l=i(`div`,r);n(r,l),m(l,`card bg-base-100 shadow`);let f=i(`div`,l);n(l,f),m(f,`card-body grid gap-6`);let h=i(`section`,f);n(f,h),m(h,`space-y-3`);let g=i(`div`,h);n(h,g),m(g,`flex flex-wrap items-center justify-between gap-3`);let v=i(`h2`,g);n(g,v),m(v,`text-xl font-semibold`),n(v,e(`v-for：数组遍历`));let y=i(`div`,g);n(g,y),m(y,`join`);let S=i(`button`,y);n(y,S),m(S,`btn btn-sm join-item`),d(S,`click`,()=>{C.value=[...C.value].reverse()}),n(S,e(`倒序`));let E=i(`button`,y);n(y,E),m(E,`btn btn-sm join-item`),d(E,`click`,()=>{C.value=[...b]}),n(E,e(`重置`));let D=i(`ul`,h);n(h,D),m(D,`list bg-base-200 rounded-box`);let O=a(`rue:list:start`),k=a(`rue:list:end`);n(D,O),n(D,k);let A=new Map;o(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(r,l,d,f,h)=>{p(u(()=>{let l=s(),u=i(`li`,l);n(l,u),o(()=>{c(u,`key`,String(`${r[0].id}-${r[0].rank}`))}),m(u,`list-row`);let d=i(`div`,u);n(u,d);let f=i(`div`,d);n(d,f),m(f,`font-medium`);let h=a(`rue:slot:anchor`);n(f,h),o(()=>{let e=r[0].rank;t(()=>p(e,f,h))}),n(f,e(`. `));let g=a(`rue:slot:anchor`);n(f,g),o(()=>{let e=r[0].name;t(()=>p(e,f,g))});let _=i(`div`,d);n(d,_),m(_,`text-sm opacity-70`),n(_,e(`颜色：`));let v=a(`rue:slot:anchor`);return n(_,v),o(()=>{let e=r[0].color;t(()=>p(e,_,v))}),l}),l,d)}})});let j=i(`section`,f);n(f,j),m(j,`space-y-3`);let M=i(`h2`,j);n(j,M),m(M,`text-xl font-semibold`),n(M,e(`r-for：对象遍历`));let N=i(`div`,j);n(j,N),m(N,`flex flex-wrap gap-2`);let P=a(`rue:list:start`),F=a(`rue:list:end`);n(N,P),n(N,F);let I=new Map;o(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(r,l,d,f,h)=>{p(u(()=>{let l=s(),u=i(`span`,l);n(l,u),o(()=>{c(u,`key`,String(r[1]))}),m(u,`badge badge-outline badge-lg`);let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let e=r[1];t(()=>p(e,u,d))}),n(u,e(`: `));let f=a(`rue:slot:anchor`);return n(u,f),o(()=>{let e=r[0];t(()=>p(e,u,f))}),l}),l,d)}})});let L=i(`section`,f);n(f,L),m(L,`space-y-3`);let R=i(`div`,L);n(L,R),m(R,`flex flex-wrap items-center justify-between gap-3`);let z=i(`h2`,R);n(R,z),m(z,`text-xl font-semibold`),n(z,e(`v-for：数字迭代`));let B=i(`div`,R);n(R,B),m(B,`join`);let V=i(`button`,B);n(B,V),m(V,`btn btn-sm join-item`),d(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),n(V,e(`-1`));let H=i(`button`,B);n(B,H),m(H,`btn btn-sm join-item`),d(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),n(H,e(`+1`));let U=i(`div`,L);n(L,U),m(U,`flex flex-wrap gap-2`);let W=a(`rue:list:start`),G=a(`rue:list:end`);n(U,W),n(U,G);let K=new Map;return o(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(r,l,d,f,h)=>{p(u(()=>{let l=s(),u=i(`span`,l);n(l,u),o(()=>{c(u,`key`,String(r[0]))}),m(u,`badge badge-primary badge-lg`),n(u,e(`Step `));let d=a(`rue:slot:anchor`);return n(u,d),o(()=>{let e=r[0];t(()=>p(e,u,d))}),l}),l,d)}})}),r}):``;t(()=>p(r,E,O))}),r})}),l,f),l})};export{S as default};