import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,dt as l,kt as u,l as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-EUvELKQT.js";import{a as g,n as _}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as v}from"./Code-BdVklNCb.js";import{t as y}from"./SidebarPlaygroundExample-1AA0CIwm.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,fruitCards:T}=g(`useSetup:0:0`,()=>t(()=>{let e=g(`ref:1:0`,()=>s(`code`)),t=g(`ref:1:1`,()=>s([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>s(3)),fruitCards:g(`computed:1:3`,()=>l(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return c(t=>{let s=n(),l=o(`rue:component:anchor`);return r(s,l),d(p(y,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),m(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,f(`v-for / r-for`));let l=i(`div`,t);r(t,l),e(l,`role`,`tablist`),m(l,`tabs tabs-box`);let g=i(`button`,l);r(l,g),e(g,`role`,`tab`),u(()=>{m(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),a(g,`click`,()=>{S.value=`preview`}),r(g,f(`效果`));let y=i(`button`,l);r(l,y),e(y,`role`,`tab`),u(()=>{m(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),a(y,`click`,()=>{S.value=`code`}),r(y,f(`代码`));let E=i(`div`,t);r(t,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=o(`rue:slot:anchor`);r(E,D),u(()=>{let e=S.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),m(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),m(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),u(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});h(()=>d(e,a,s))}),e}):``;h(()=>d(e,E,D))}),r(E,f(` `));let O=o(`rue:slot:anchor`);return r(E,O),u(()=>{let t=S.value===`preview`?c(()=>{let t=n(),s=i(`div`,t);r(t,s),m(s,`card bg-base-100 shadow`);let l=i(`div`,s);r(s,l),m(l,`card-body grid gap-6`);let p=i(`section`,l);r(l,p),m(p,`space-y-3`);let g=i(`div`,p);r(p,g),m(g,`flex flex-wrap items-center justify-between gap-3`);let v=i(`h2`,g);r(g,v),m(v,`text-xl font-semibold`),r(v,f(`v-for：数组遍历`));let y=i(`div`,g);r(g,y),m(y,`join`);let S=i(`button`,y);r(y,S),m(S,`btn btn-sm join-item`),a(S,`click`,()=>{C.value=[...C.value].reverse()}),r(S,f(`倒序`));let E=i(`button`,y);r(y,E),m(E,`btn btn-sm join-item`),a(E,`click`,()=>{C.value=[...b]}),r(E,f(`重置`));let D=i(`ul`,p);r(p,D),m(D,`list bg-base-200 rounded-box`);let O=o(`rue:list:start`),k=o(`rue:list:end`);r(D,O),r(D,k);let A=new Map;u(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,a,s,l,p)=>{d(c(()=>{let a=n(),s=i(`li`,a);r(a,s),u(()=>{e(s,`key`,String(`${t[0].id}-${t[0].rank}`))}),m(s,`list-row`);let c=i(`div`,s);r(s,c);let l=i(`div`,c);r(c,l),m(l,`font-medium`);let p=o(`rue:slot:anchor`);r(l,p),u(()=>{let e=t[0].rank;h(()=>d(e,l,p))}),r(l,f(`. `));let g=o(`rue:slot:anchor`);r(l,g),u(()=>{let e=t[0].name;h(()=>d(e,l,g))});let _=i(`div`,c);r(c,_),m(_,`text-sm opacity-70`),r(_,f(`颜色：`));let v=o(`rue:slot:anchor`);return r(_,v),u(()=>{let e=t[0].color;h(()=>d(e,_,v))}),a}),a,s)}})});let j=i(`section`,l);r(l,j),m(j,`space-y-3`);let M=i(`h2`,j);r(j,M),m(M,`text-xl font-semibold`),r(M,f(`r-for：对象遍历`));let N=i(`div`,j);r(j,N),m(N,`flex flex-wrap gap-2`);let P=o(`rue:list:start`),F=o(`rue:list:end`);r(N,P),r(N,F);let I=new Map;u(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,a,s,l,p)=>{d(c(()=>{let a=n(),s=i(`span`,a);r(a,s),u(()=>{e(s,`key`,String(t[1]))}),m(s,`badge badge-outline badge-lg`);let c=o(`rue:slot:anchor`);r(s,c),u(()=>{let e=t[1];h(()=>d(e,s,c))}),r(s,f(`: `));let l=o(`rue:slot:anchor`);return r(s,l),u(()=>{let e=t[0];h(()=>d(e,s,l))}),a}),a,s)}})});let L=i(`section`,l);r(l,L),m(L,`space-y-3`);let R=i(`div`,L);r(L,R),m(R,`flex flex-wrap items-center justify-between gap-3`);let z=i(`h2`,R);r(R,z),m(z,`text-xl font-semibold`),r(z,f(`v-for：数字迭代`));let B=i(`div`,R);r(R,B),m(B,`join`);let V=i(`button`,B);r(B,V),m(V,`btn btn-sm join-item`),a(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),r(V,f(`-1`));let H=i(`button`,B);r(B,H),m(H,`btn btn-sm join-item`),a(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),r(H,f(`+1`));let U=i(`div`,L);r(L,U),m(U,`flex flex-wrap gap-2`);let W=o(`rue:list:start`),G=o(`rue:list:end`);r(U,W),r(U,G);let K=new Map;return u(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(t,a,s,l,p)=>{d(c(()=>{let a=n(),s=i(`span`,a);r(a,s),u(()=>{e(s,`key`,String(t[0]))}),m(s,`badge badge-primary badge-lg`),r(s,f(`Step `));let c=o(`rue:slot:anchor`);return r(s,c),u(()=>{let e=t[0];h(()=>d(e,s,c))}),a}),a,s)}})}),t}):``;h(()=>d(t,E,O))}),t})}),s,l),s})};export{S as default};