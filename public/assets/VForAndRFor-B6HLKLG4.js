import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>o(()=>{let e=g(`ref:1:0`,()=>h(`code`)),t=g(`ref:1:1`,()=>h([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>h(3)),_fruitCards:g(`computed:1:3`,()=>m(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(y,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`v-for / r-for`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let g=s(`button`,h);i(h,g),d(g,`role`,`tab`),n(()=>{l(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),a(g,`click`,()=>{S.value=`preview`}),i(g,p(`效果`));let y=s(`button`,h);i(h,y),d(y,`role`,`tab`),n(()=>{l(y,`tab ${S.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{S.value=`code`}),i(y,p(`代码`));let E=s(`div`,o);i(o,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=t(`rue:slot:anchor`);i(E,D),n(()=>{let a=S.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,E,D))}),i(E,p(` `));let O=t(`rue:slot:anchor`);return i(E,O),n(()=>{let o=S.value===`preview`?c(()=>{let o=e(),f=s(`div`,o);i(o,f),l(f,`card bg-base-100 shadow`);let m=s(`div`,f);i(f,m),l(m,`card-body grid gap-6`);let h=s(`section`,m);i(m,h),l(h,`space-y-3`);let g=s(`div`,h);i(h,g),l(g,`flex flex-wrap items-center justify-between gap-3`);let v=s(`h2`,g);i(g,v),l(v,`text-xl font-semibold`),i(v,p(`v-for：数组遍历`));let y=s(`div`,g);i(g,y),l(y,`join`);let S=s(`button`,y);i(y,S),l(S,`btn btn-sm join-item`),a(S,`click`,()=>{C.value=[...C.value].reverse()}),i(S,p(`倒序`));let E=s(`button`,y);i(y,E),l(E,`btn btn-sm join-item`),a(E,`click`,()=>{C.value=[...b]}),i(E,p(`重置`));let D=s(`ul`,h);i(h,D),l(D,`list bg-base-200 rounded-box`);let O=t(`rue:list:start`),k=t(`rue:list:end`);i(D,O),i(D,k);let A=new Map;n(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(a,o,f,m,h)=>{u(c(()=>{let o=e(),c=s(`li`,o);i(o,c),n(()=>{d(c,`key`,String(`${a[0].id}-${a[0].rank}`))}),l(c,`list-row`);let f=s(`div`,c);i(c,f);let m=s(`div`,f);i(f,m),l(m,`font-medium`);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a[0].rank;r(()=>u(e,m,h))}),i(m,p(`. `));let g=t(`rue:slot:anchor`);i(m,g),n(()=>{let e=a[0].name;r(()=>u(e,m,g))});let _=s(`div`,f);i(f,_),l(_,`text-sm opacity-70`),i(_,p(`颜色：`));let v=t(`rue:slot:anchor`);return i(_,v),n(()=>{let e=a[0].color;r(()=>u(e,_,v))}),o}),o,f)}})});let j=s(`section`,m);i(m,j),l(j,`space-y-3`);let M=s(`h2`,j);i(j,M),l(M,`text-xl font-semibold`),i(M,p(`r-for：对象遍历`));let N=s(`div`,j);i(j,N),l(N,`flex flex-wrap gap-2`);let P=t(`rue:list:start`),F=t(`rue:list:end`);i(N,P),i(N,F);let I=new Map;n(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(a,o,f,m,h)=>{u(c(()=>{let o=e(),c=s(`span`,o);i(o,c),n(()=>{d(c,`key`,String(a[1]))}),l(c,`badge badge-outline badge-lg`);let f=t(`rue:slot:anchor`);i(c,f),n(()=>{let e=a[1];r(()=>u(e,c,f))}),i(c,p(`: `));let m=t(`rue:slot:anchor`);return i(c,m),n(()=>{let e=a[0];r(()=>u(e,c,m))}),o}),o,f)}})});let L=s(`section`,m);i(m,L),l(L,`space-y-3`);let R=s(`div`,L);i(L,R),l(R,`flex flex-wrap items-center justify-between gap-3`);let z=s(`h2`,R);i(R,z),l(z,`text-xl font-semibold`),i(z,p(`v-for：数字迭代`));let B=s(`div`,R);i(R,B),l(B,`join`);let V=s(`button`,B);i(B,V),l(V,`btn btn-sm join-item`),a(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),i(V,p(`-1`));let H=s(`button`,B);i(B,H),l(H,`btn btn-sm join-item`),a(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),i(H,p(`+1`));let U=s(`div`,L);i(L,U),l(U,`flex flex-wrap gap-2`);let W=t(`rue:list:start`),G=t(`rue:list:end`);i(U,W),i(U,G);let K=new Map;return n(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(a,o,f,m,h)=>{u(c(()=>{let o=e(),c=s(`span`,o);i(o,c),n(()=>{d(c,`key`,String(a[0]))}),l(c,`badge badge-primary badge-lg`),i(c,p(`Step `));let f=t(`rue:slot:anchor`);return i(c,f),n(()=>{let e=a[0];r(()=>u(e,c,f))}),o}),o,f)}})}),o}):``;r(()=>u(o,E,O))}),o})}),m,h),m})};export{S as default};