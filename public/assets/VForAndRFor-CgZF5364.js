import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,_t as c,ct as l,et as u,l as d,ot as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g,n as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>p(()=>{let e=g(`ref:1:0`,()=>i(`code`)),t=g(`ref:1:1`,()=>i([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>i(3)),_fruitCards:g(`computed:1:3`,()=>c(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return d(i=>{let c=r(),p=s(`rue:component:anchor`);return o(c,p),m(h(y,{children:d(()=>{let i=r(),c=e(`h1`,i);o(i,c),l(c,`text-5xl font-semibold mb-4 md:mb-4`),o(c,u(`v-for / r-for`));let p=e(`div`,i);o(i,p),f(p,`role`,`tablist`),l(p,`tabs tabs-box`);let g=e(`button`,p);o(p,g),f(g,`role`,`tab`),a(()=>{l(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),n(g,`click`,()=>{S.value=`preview`}),o(g,u(`效果`));let y=e(`button`,p);o(p,y),f(y,`role`,`tab`),a(()=>{l(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{S.value=`code`}),o(y,u(`代码`));let E=e(`div`,i);o(i,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=s(`rue:slot:anchor`);o(E,D),a(()=>{let n=S.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),l(i,`card bg-base-100 shadow overflow-auto`);let c=e(`div`,i);o(i,c),l(c,`card-body p-0`);let u=s(`rue:component:anchor`);return o(c,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});t(()=>m(e,c,u))}),n}):``;t(()=>m(n,E,D))}),o(E,u(` `));let O=s(`rue:slot:anchor`);return o(E,O),a(()=>{let i=S.value===`preview`?d(()=>{let i=r(),c=e(`div`,i);o(i,c),l(c,`card bg-base-100 shadow`);let p=e(`div`,c);o(c,p),l(p,`card-body grid gap-6`);let h=e(`section`,p);o(p,h),l(h,`space-y-3`);let g=e(`div`,h);o(h,g),l(g,`flex flex-wrap items-center justify-between gap-3`);let v=e(`h2`,g);o(g,v),l(v,`text-xl font-semibold`),o(v,u(`v-for：数组遍历`));let y=e(`div`,g);o(g,y),l(y,`join`);let S=e(`button`,y);o(y,S),l(S,`btn btn-sm join-item`),n(S,`click`,()=>{C.value=[...C.value].reverse()}),o(S,u(`倒序`));let E=e(`button`,y);o(y,E),l(E,`btn btn-sm join-item`),n(E,`click`,()=>{C.value=[...b]}),o(E,u(`重置`));let D=e(`ul`,h);o(h,D),l(D,`list bg-base-200 rounded-box`);let O=s(`rue:list:start`),k=s(`rue:list:end`);o(D,O),o(D,k);let A=new Map;a(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,i,c,p,h)=>{m(d(()=>{let i=r(),c=e(`li`,i);o(i,c),a(()=>{f(c,`key`,String(`${n[0].id}-${n[0].rank}`))}),l(c,`list-row`);let d=e(`div`,c);o(c,d);let p=e(`div`,d);o(d,p),l(p,`font-medium`);let h=s(`rue:slot:anchor`);o(p,h),a(()=>{let e=n[0].rank;t(()=>m(e,p,h))}),o(p,u(`. `));let g=s(`rue:slot:anchor`);o(p,g),a(()=>{let e=n[0].name;t(()=>m(e,p,g))});let _=e(`div`,d);o(d,_),l(_,`text-sm opacity-70`),o(_,u(`颜色：`));let v=s(`rue:slot:anchor`);return o(_,v),a(()=>{let e=n[0].color;t(()=>m(e,_,v))}),i}),i,c)}})});let j=e(`section`,p);o(p,j),l(j,`space-y-3`);let M=e(`h2`,j);o(j,M),l(M,`text-xl font-semibold`),o(M,u(`r-for：对象遍历`));let N=e(`div`,j);o(j,N),l(N,`flex flex-wrap gap-2`);let P=s(`rue:list:start`),F=s(`rue:list:end`);o(N,P),o(N,F);let I=new Map;a(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,i,c,p,h)=>{m(d(()=>{let i=r(),c=e(`span`,i);o(i,c),a(()=>{f(c,`key`,String(n[1]))}),l(c,`badge badge-outline badge-lg`);let d=s(`rue:slot:anchor`);o(c,d),a(()=>{let e=n[1];t(()=>m(e,c,d))}),o(c,u(`: `));let p=s(`rue:slot:anchor`);return o(c,p),a(()=>{let e=n[0];t(()=>m(e,c,p))}),i}),i,c)}})});let L=e(`section`,p);o(p,L),l(L,`space-y-3`);let R=e(`div`,L);o(L,R),l(R,`flex flex-wrap items-center justify-between gap-3`);let z=e(`h2`,R);o(R,z),l(z,`text-xl font-semibold`),o(z,u(`v-for：数字迭代`));let B=e(`div`,R);o(R,B),l(B,`join`);let V=e(`button`,B);o(B,V),l(V,`btn btn-sm join-item`),n(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),o(V,u(`-1`));let H=e(`button`,B);o(B,H),l(H,`btn btn-sm join-item`),n(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),o(H,u(`+1`));let U=e(`div`,L);o(L,U),l(U,`flex flex-wrap gap-2`);let W=s(`rue:list:start`),G=s(`rue:list:end`);o(U,W),o(U,G);let K=new Map;return a(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(n,i,c,p,h)=>{m(d(()=>{let i=r(),c=e(`span`,i);o(i,c),a(()=>{f(c,`key`,String(n[0]))}),l(c,`badge badge-primary badge-lg`),o(c,u(`Step `));let d=s(`rue:slot:anchor`);return o(c,d),a(()=>{let e=n[0];t(()=>m(e,c,d))}),i}),i,c)}})}),i}):``;t(()=>m(i,E,O))}),i})}),c,p),c})};export{S as default};