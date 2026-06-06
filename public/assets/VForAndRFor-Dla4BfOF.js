import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,gt as d,l as f,ot as p,s as m,t as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,n as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>n(()=>{let e=g(`ref:1:0`,()=>r(`code`)),t=g(`ref:1:1`,()=>r([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>r(3)),_fruitCards:g(`computed:1:3`,()=>d(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return f(n=>{let r=i(),d=c(`rue:component:anchor`);return o(r,d),m(h(y,{children:f(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`v-for / r-for`));let d=e(`div`,n);o(n,d),p(d,`role`,`tablist`),l(d,`tabs tabs-box`);let g=e(`button`,d);o(d,g),p(g,`role`,`tab`),s(()=>{l(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(g,`click`,()=>{S.value=`preview`}),o(g,u(`效果`));let y=e(`button`,d);o(d,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(y,`click`,()=>{S.value=`code`}),o(y,u(`代码`));let E=e(`div`,n);o(n,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=c(`rue:slot:anchor`);o(E,D),s(()=>{let t=S.value===`code`?f(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,E,D))}),o(E,u(` `));let O=c(`rue:slot:anchor`);return o(E,O),s(()=>{let n=S.value===`preview`?f(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let d=e(`div`,r);o(r,d),l(d,`card-body grid gap-6`);let h=e(`section`,d);o(d,h),l(h,`space-y-3`);let g=e(`div`,h);o(h,g),l(g,`flex flex-wrap items-center justify-between gap-3`);let v=e(`h2`,g);o(g,v),l(v,`text-xl font-semibold`),o(v,u(`v-for：数组遍历`));let y=e(`div`,g);o(g,y),l(y,`join`);let S=e(`button`,y);o(y,S),l(S,`btn btn-sm join-item`),t(S,`click`,()=>{C.value=[...C.value].reverse()}),o(S,u(`倒序`));let E=e(`button`,y);o(y,E),l(E,`btn btn-sm join-item`),t(E,`click`,()=>{C.value=[...b]}),o(E,u(`重置`));let D=e(`ul`,h);o(h,D),l(D,`list bg-base-200 rounded-box`);let O=c(`rue:list:start`),k=c(`rue:list:end`);o(D,O),o(D,k);let A=new Map;s(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,n,r,d,h)=>{m(f(()=>{let n=i(),r=e(`li`,n);o(n,r),s(()=>{p(r,`key`,String(`${t[0].id}-${t[0].rank}`))}),l(r,`list-row`);let d=e(`div`,r);o(r,d);let f=e(`div`,d);o(d,f),l(f,`font-medium`);let h=c(`rue:slot:anchor`);o(f,h),s(()=>{let e=t[0].rank;a(()=>m(e,f,h))}),o(f,u(`. `));let g=c(`rue:slot:anchor`);o(f,g),s(()=>{let e=t[0].name;a(()=>m(e,f,g))});let _=e(`div`,d);o(d,_),l(_,`text-sm opacity-70`),o(_,u(`颜色：`));let v=c(`rue:slot:anchor`);return o(_,v),s(()=>{let e=t[0].color;a(()=>m(e,_,v))}),n}),n,r)}})});let j=e(`section`,d);o(d,j),l(j,`space-y-3`);let M=e(`h2`,j);o(j,M),l(M,`text-xl font-semibold`),o(M,u(`r-for：对象遍历`));let N=e(`div`,j);o(j,N),l(N,`flex flex-wrap gap-2`);let P=c(`rue:list:start`),F=c(`rue:list:end`);o(N,P),o(N,F);let I=new Map;s(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,r,d,h)=>{m(f(()=>{let n=i(),r=e(`span`,n);o(n,r),s(()=>{p(r,`key`,String(t[1]))}),l(r,`badge badge-outline badge-lg`);let d=c(`rue:slot:anchor`);o(r,d),s(()=>{let e=t[1];a(()=>m(e,r,d))}),o(r,u(`: `));let f=c(`rue:slot:anchor`);return o(r,f),s(()=>{let e=t[0];a(()=>m(e,r,f))}),n}),n,r)}})});let L=e(`section`,d);o(d,L),l(L,`space-y-3`);let R=e(`div`,L);o(L,R),l(R,`flex flex-wrap items-center justify-between gap-3`);let z=e(`h2`,R);o(R,z),l(z,`text-xl font-semibold`),o(z,u(`v-for：数字迭代`));let B=e(`div`,R);o(R,B),l(B,`join`);let V=e(`button`,B);o(B,V),l(V,`btn btn-sm join-item`),t(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),o(V,u(`-1`));let H=e(`button`,B);o(B,H),l(H,`btn btn-sm join-item`),t(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),o(H,u(`+1`));let U=e(`div`,L);o(L,U),l(U,`flex flex-wrap gap-2`);let W=c(`rue:list:start`),G=c(`rue:list:end`);o(U,W),o(U,G);let K=new Map;return s(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(t,n,r,d,h)=>{m(f(()=>{let n=i(),r=e(`span`,n);o(n,r),s(()=>{p(r,`key`,String(t[0]))}),l(r,`badge badge-primary badge-lg`),o(r,u(`Step `));let d=c(`rue:slot:anchor`);return o(r,d),s(()=>{let e=t[0];a(()=>m(e,r,d))}),n}),n,r)}})}),n}):``;a(()=>m(n,E,O))}),n})}),r,d),r})};export{S as default};