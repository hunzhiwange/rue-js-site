import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,rt as f,st as p,t as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,fruitCards:T}=g(`useSetup:0:0`,()=>u(()=>{let e=g(`ref:1:0`,()=>p(`code`)),t=g(`ref:1:1`,()=>p([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>p(3)),fruitCards:g(`computed:1:3`,()=>f(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return c(u=>{let f=t(),p=e(`rue:component:anchor`);return a(f,p),d(m(y,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`v-for / r-for`));let p=r(`div`,u);a(u,p),s(p,`role`,`tablist`),n(p,`tabs tabs-box`);let g=r(`button`,p);a(p,g),s(g,`role`,`tab`),h(()=>{n(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),i(g,`click`,()=>{S.value=`preview`}),a(g,o(`效果`));let y=r(`button`,p);a(p,y),s(y,`role`,`tab`),h(()=>{n(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),i(y,`click`,()=>{S.value=`code`}),a(y,o(`代码`));let E=r(`div`,u);a(u,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),h(()=>{let i=S.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,E,D))}),a(E,o(` `));let O=e(`rue:slot:anchor`);return a(E,O),h(()=>{let u=S.value===`preview`?c(()=>{let u=t(),f=r(`div`,u);a(u,f),n(f,`card bg-base-100 shadow`);let p=r(`div`,f);a(f,p),n(p,`card-body grid gap-6`);let m=r(`section`,p);a(p,m),n(m,`space-y-3`);let g=r(`div`,m);a(m,g),n(g,`flex flex-wrap items-center justify-between gap-3`);let v=r(`h2`,g);a(g,v),n(v,`text-xl font-semibold`),a(v,o(`v-for：数组遍历`));let y=r(`div`,g);a(g,y),n(y,`join`);let S=r(`button`,y);a(y,S),n(S,`btn btn-sm join-item`),i(S,`click`,()=>{C.value=[...C.value].reverse()}),a(S,o(`倒序`));let E=r(`button`,y);a(y,E),n(E,`btn btn-sm join-item`),i(E,`click`,()=>{C.value=[...b]}),a(E,o(`重置`));let D=r(`ul`,m);a(m,D),n(D,`list bg-base-200 rounded-box`);let O=e(`rue:list:start`),k=e(`rue:list:end`);a(D,O),a(D,k);let A=new Map;h(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(i,u,f,p,m)=>{d(c(()=>{let c=t(),u=r(`li`,c);a(c,u),h(()=>{s(u,`key`,String(`${i[0].id}-${i[0].rank}`))}),n(u,`list-row`);let f=r(`div`,u);a(u,f);let p=r(`div`,f);a(f,p),n(p,`font-medium`);let m=e(`rue:slot:anchor`);a(p,m),h(()=>{let e=i[0].rank;l(()=>d(e,p,m))}),a(p,o(`. `));let g=e(`rue:slot:anchor`);a(p,g),h(()=>{let e=i[0].name;l(()=>d(e,p,g))});let _=r(`div`,f);a(f,_),n(_,`text-sm opacity-70`),a(_,o(`颜色：`));let v=e(`rue:slot:anchor`);return a(_,v),h(()=>{let e=i[0].color;l(()=>d(e,_,v))}),c}),u,f)}})});let j=r(`section`,p);a(p,j),n(j,`space-y-3`);let M=r(`h2`,j);a(j,M),n(M,`text-xl font-semibold`),a(M,o(`r-for：对象遍历`));let N=r(`div`,j);a(j,N),n(N,`flex flex-wrap gap-2`);let P=e(`rue:list:start`),F=e(`rue:list:end`);a(N,P),a(N,F);let I=new Map;h(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(i,u,f,p,m)=>{d(c(()=>{let c=t(),u=r(`span`,c);a(c,u),h(()=>{s(u,`key`,String(i[1]))}),n(u,`badge badge-outline badge-lg`);let f=e(`rue:slot:anchor`);a(u,f),h(()=>{let e=i[1];l(()=>d(e,u,f))}),a(u,o(`: `));let p=e(`rue:slot:anchor`);return a(u,p),h(()=>{let e=i[0];l(()=>d(e,u,p))}),c}),u,f)}})});let L=r(`section`,p);a(p,L),n(L,`space-y-3`);let R=r(`div`,L);a(L,R),n(R,`flex flex-wrap items-center justify-between gap-3`);let z=r(`h2`,R);a(R,z),n(z,`text-xl font-semibold`),a(z,o(`v-for：数字迭代`));let B=r(`div`,R);a(R,B),n(B,`join`);let V=r(`button`,B);a(B,V),n(V,`btn btn-sm join-item`),i(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),a(V,o(`-1`));let H=r(`button`,B);a(B,H),n(H,`btn btn-sm join-item`),i(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),a(H,o(`+1`));let U=r(`div`,L);a(L,U),n(U,`flex flex-wrap gap-2`);let W=e(`rue:list:start`),G=e(`rue:list:end`);a(U,W),a(U,G);let K=new Map;return h(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(i,u,f,p,m)=>{d(c(()=>{let c=t(),u=r(`span`,c);a(c,u),h(()=>{s(u,`key`,String(i[0]))}),n(u,`badge badge-primary badge-lg`),a(u,o(`Step `));let f=e(`rue:slot:anchor`);return a(u,f),h(()=>{let e=i[0];l(()=>d(e,u,f))}),c}),u,f)}})}),u}):``;l(()=>d(u,E,O))}),u})}),f,p),f})};export{S as default};