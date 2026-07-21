import{Cn as e,Ct as t,Lt as n,Tt as r,dt as i,ft as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>e(()=>{let e=g(`ref:1:0`,()=>c(`code`)),t=g(`ref:1:1`,()=>c([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>c(3)),_fruitCards:g(`computed:1:3`,()=>n(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return p(e=>{let n=a(),c=i(`rue:component:anchor`);return u(n,c),m(h(y,{children:p(()=>{let e=a(),n=l(`h1`,e);u(e,n),r(n,`text-5xl font-semibold mb-4 md:mb-4`),u(n,o(`v-for / r-for`));let c=l(`div`,e);u(e,c),t(c,`role`,`tablist`),r(c,`tabs tabs-box`);let g=l(`button`,c);u(c,g),t(g,`role`,`tab`),d(()=>{r(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),s(g,`click`,()=>{S.value=`preview`}),u(g,o(`效果`));let y=l(`button`,c);u(c,y),t(y,`role`,`tab`),d(()=>{r(y,`tab ${S.value===`code`?`tab-active`:``}`)}),s(y,`click`,()=>{S.value=`code`}),u(y,o(`代码`));let E=l(`div`,e);u(e,E),r(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);u(E,D),d(()=>{let e=S.value===`code`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=l(`div`,t);u(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return u(n,o),d(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});f(()=>m(e,n,o))}),e}):``;f(()=>m(e,E,D))}),u(E,o(` `));let O=i(`rue:slot:anchor`);return u(E,O),d(()=>{let e=S.value===`preview`?p(()=>{let e=a(),n=l(`div`,e);u(e,n),r(n,`card bg-base-100 shadow`);let c=l(`div`,n);u(n,c),r(c,`card-body grid gap-6`);let h=l(`section`,c);u(c,h),r(h,`space-y-3`);let g=l(`div`,h);u(h,g),r(g,`flex flex-wrap items-center justify-between gap-3`);let v=l(`h2`,g);u(g,v),r(v,`text-xl font-semibold`),u(v,o(`v-for：数组遍历`));let y=l(`div`,g);u(g,y),r(y,`join`);let S=l(`button`,y);u(y,S),r(S,`btn btn-sm join-item`),s(S,`click`,()=>{C.value=[...C.value].reverse()}),u(S,o(`倒序`));let E=l(`button`,y);u(y,E),r(E,`btn btn-sm join-item`),s(E,`click`,()=>{C.value=[...b]}),u(E,o(`重置`));let D=l(`ul`,h);u(h,D),r(D,`list bg-base-200 rounded-box`);let O=i(`rue:list:start`),k=i(`rue:list:end`);u(D,O),u(D,k);let A=new Map;d(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(e,n,s,c,h)=>{m(p(()=>{let n=a(),s=l(`li`,n);u(n,s),d(()=>{t(s,`key`,String(`${e[0].id}-${e[0].rank}`))}),r(s,`list-row`);let c=l(`div`,s);u(s,c);let p=l(`div`,c);u(c,p),r(p,`font-medium`);let h=i(`rue:slot:anchor`);u(p,h),d(()=>{let t=e[0].rank;f(()=>m(t,p,h))}),u(p,o(`. `));let g=i(`rue:slot:anchor`);u(p,g),d(()=>{let t=e[0].name;f(()=>m(t,p,g))});let _=l(`div`,c);u(c,_),r(_,`text-sm opacity-70`),u(_,o(`颜色：`));let v=i(`rue:slot:anchor`);return u(_,v),d(()=>{let t=e[0].color;f(()=>m(t,_,v))}),n}),n,s)}})});let j=l(`section`,c);u(c,j),r(j,`space-y-3`);let M=l(`h2`,j);u(j,M),r(M,`text-xl font-semibold`),u(M,o(`r-for：对象遍历`));let N=l(`div`,j);u(j,N),r(N,`flex flex-wrap gap-2`);let P=i(`rue:list:start`),F=i(`rue:list:end`);u(N,P),u(N,F);let I=new Map;d(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,n,s,c,h)=>{m(p(()=>{let n=a(),s=l(`span`,n);u(n,s),d(()=>{t(s,`key`,String(e[1]))}),r(s,`badge badge-outline badge-lg`);let c=i(`rue:slot:anchor`);u(s,c),d(()=>{let t=e[1];f(()=>m(t,s,c))}),u(s,o(`: `));let p=i(`rue:slot:anchor`);return u(s,p),d(()=>{let t=e[0];f(()=>m(t,s,p))}),n}),n,s)}})});let L=l(`section`,c);u(c,L),r(L,`space-y-3`);let R=l(`div`,L);u(L,R),r(R,`flex flex-wrap items-center justify-between gap-3`);let z=l(`h2`,R);u(R,z),r(z,`text-xl font-semibold`),u(z,o(`v-for：数字迭代`));let B=l(`div`,R);u(R,B),r(B,`join`);let V=l(`button`,B);u(B,V),r(V,`btn btn-sm join-item`),s(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),u(V,o(`-1`));let H=l(`button`,B);u(B,H),r(H,`btn btn-sm join-item`),s(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),u(H,o(`+1`));let U=l(`div`,L);u(L,U),r(U,`flex flex-wrap gap-2`);let W=i(`rue:list:start`),G=i(`rue:list:end`);u(U,W),u(U,G);let K=new Map;return d(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(e,n,s,c,h)=>{m(p(()=>{let n=a(),s=l(`span`,n);u(n,s),d(()=>{t(s,`key`,String(e[0]))}),r(s,`badge badge-primary badge-lg`),u(s,o(`Step `));let c=i(`rue:slot:anchor`);return u(s,c),d(()=>{let t=e[0];f(()=>m(t,s,c))}),n}),n,s)}})}),e}):``;f(()=>m(e,E,O))}),e})}),n,c),n})};export{S as default};