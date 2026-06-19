import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m,yt as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>a(()=>{let e=g(`ref:1:0`,()=>n(`code`)),t=g(`ref:1:1`,()=>n([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>n(3)),_fruitCards:g(`computed:1:3`,()=>h(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(y,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`v-for / r-for`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let g=p(`button`,h);o(h,g),s(g,`role`,`tab`),t(()=>{m(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(g,`click`,()=>{S.value=`preview`}),o(g,u(`效果`));let y=p(`button`,h);o(h,y),s(y,`role`,`tab`),t(()=>{m(y,`tab ${S.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{S.value=`code`}),o(y,u(`代码`));let E=p(`div`,n);o(n,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);o(E,D),t(()=>{let n=S.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,E,D))}),o(E,u(` `));let O=e(`rue:slot:anchor`);return o(E,O),t(()=>{let n=S.value===`preview`?l(()=>{let n=c(),a=p(`div`,n);o(n,a),m(a,`card bg-base-100 shadow`);let f=p(`div`,a);o(a,f),m(f,`card-body grid gap-6`);let h=p(`section`,f);o(f,h),m(h,`space-y-3`);let g=p(`div`,h);o(h,g),m(g,`flex flex-wrap items-center justify-between gap-3`);let v=p(`h2`,g);o(g,v),m(v,`text-xl font-semibold`),o(v,u(`v-for：数组遍历`));let y=p(`div`,g);o(g,y),m(y,`join`);let S=p(`button`,y);o(y,S),m(S,`btn btn-sm join-item`),i(S,`click`,()=>{C.value=[...C.value].reverse()}),o(S,u(`倒序`));let E=p(`button`,y);o(y,E),m(E,`btn btn-sm join-item`),i(E,`click`,()=>{C.value=[...b]}),o(E,u(`重置`));let D=p(`ul`,h);o(h,D),m(D,`list bg-base-200 rounded-box`);let O=e(`rue:list:start`),k=e(`rue:list:end`);o(D,O),o(D,k);let A=new Map;t(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,i,a,f,h)=>{d(l(()=>{let i=c(),a=p(`li`,i);o(i,a),t(()=>{s(a,`key`,String(`${n[0].id}-${n[0].rank}`))}),m(a,`list-row`);let l=p(`div`,a);o(a,l);let f=p(`div`,l);o(l,f),m(f,`font-medium`);let h=e(`rue:slot:anchor`);o(f,h),t(()=>{let e=n[0].rank;r(()=>d(e,f,h))}),o(f,u(`. `));let g=e(`rue:slot:anchor`);o(f,g),t(()=>{let e=n[0].name;r(()=>d(e,f,g))});let _=p(`div`,l);o(l,_),m(_,`text-sm opacity-70`),o(_,u(`颜色：`));let v=e(`rue:slot:anchor`);return o(_,v),t(()=>{let e=n[0].color;r(()=>d(e,_,v))}),i}),i,a)}})});let j=p(`section`,f);o(f,j),m(j,`space-y-3`);let M=p(`h2`,j);o(j,M),m(M,`text-xl font-semibold`),o(M,u(`r-for：对象遍历`));let N=p(`div`,j);o(j,N),m(N,`flex flex-wrap gap-2`);let P=e(`rue:list:start`),F=e(`rue:list:end`);o(N,P),o(N,F);let I=new Map;t(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,i,a,f,h)=>{d(l(()=>{let i=c(),a=p(`span`,i);o(i,a),t(()=>{s(a,`key`,String(n[1]))}),m(a,`badge badge-outline badge-lg`);let l=e(`rue:slot:anchor`);o(a,l),t(()=>{let e=n[1];r(()=>d(e,a,l))}),o(a,u(`: `));let f=e(`rue:slot:anchor`);return o(a,f),t(()=>{let e=n[0];r(()=>d(e,a,f))}),i}),i,a)}})});let L=p(`section`,f);o(f,L),m(L,`space-y-3`);let R=p(`div`,L);o(L,R),m(R,`flex flex-wrap items-center justify-between gap-3`);let z=p(`h2`,R);o(R,z),m(z,`text-xl font-semibold`),o(z,u(`v-for：数字迭代`));let B=p(`div`,R);o(R,B),m(B,`join`);let V=p(`button`,B);o(B,V),m(V,`btn btn-sm join-item`),i(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),o(V,u(`-1`));let H=p(`button`,B);o(B,H),m(H,`btn btn-sm join-item`),i(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),o(H,u(`+1`));let U=p(`div`,L);o(L,U),m(U,`flex flex-wrap gap-2`);let W=e(`rue:list:start`),G=e(`rue:list:end`);o(U,W),o(U,G);let K=new Map;return t(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(n,i,a,f,h)=>{d(l(()=>{let i=c(),a=p(`span`,i);o(i,a),t(()=>{s(a,`key`,String(n[0]))}),m(a,`badge badge-primary badge-lg`),o(a,u(`Step `));let l=e(`rue:slot:anchor`);return o(a,l),t(()=>{let e=n[0];r(()=>d(e,a,l))}),i}),i,a)}})}),n}):``;r(()=>d(n,E,O))}),n})}),a,h),a})};export{S as default};