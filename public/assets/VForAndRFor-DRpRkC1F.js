import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m,wt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>l(()=>{let e=g(`ref:1:0`,()=>n(`code`)),t=g(`ref:1:1`,()=>n([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>n(3)),_fruitCards:g(`computed:1:3`,()=>h(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(y,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`v-for / r-for`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let g=d(`button`,h);e(h,g),i(g,`role`,`tab`),t(()=>{u(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(g,`click`,()=>{S.value=`preview`}),e(g,a(`效果`));let y=d(`button`,h);e(h,y),i(y,`role`,`tab`),t(()=>{u(y,`tab ${S.value===`code`?`tab-active`:``}`)}),r(y,`click`,()=>{S.value=`code`}),e(y,a(`代码`));let E=d(`div`,n);e(n,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=m(`rue:slot:anchor`);e(E,D),t(()=>{let n=S.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,E,D))}),e(E,a(` `));let O=m(`rue:slot:anchor`);return e(E,O),t(()=>{let n=S.value===`preview`?o(()=>{let n=s(),l=d(`div`,n);e(n,l),u(l,`card bg-base-100 shadow`);let f=d(`div`,l);e(l,f),u(f,`card-body grid gap-6`);let h=d(`section`,f);e(f,h),u(h,`space-y-3`);let g=d(`div`,h);e(h,g),u(g,`flex flex-wrap items-center justify-between gap-3`);let v=d(`h2`,g);e(g,v),u(v,`text-xl font-semibold`),e(v,a(`v-for：数组遍历`));let y=d(`div`,g);e(g,y),u(y,`join`);let S=d(`button`,y);e(y,S),u(S,`btn btn-sm join-item`),r(S,`click`,()=>{C.value=[...C.value].reverse()}),e(S,a(`倒序`));let E=d(`button`,y);e(y,E),u(E,`btn btn-sm join-item`),r(E,`click`,()=>{C.value=[...b]}),e(E,a(`重置`));let D=d(`ul`,h);e(h,D),u(D,`list bg-base-200 rounded-box`);let O=m(`rue:list:start`),k=m(`rue:list:end`);e(D,O),e(D,k);let A=new Map;t(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(n,r,l,f,h)=>{c(o(()=>{let r=s(),o=d(`li`,r);e(r,o),t(()=>{i(o,`key`,String(`${n[0].id}-${n[0].rank}`))}),u(o,`list-row`);let l=d(`div`,o);e(o,l);let f=d(`div`,l);e(l,f),u(f,`font-medium`);let h=m(`rue:slot:anchor`);e(f,h),t(()=>{let e=n[0].rank;p(()=>c(e,f,h))}),e(f,a(`. `));let g=m(`rue:slot:anchor`);e(f,g),t(()=>{let e=n[0].name;p(()=>c(e,f,g))});let _=d(`div`,l);e(l,_),u(_,`text-sm opacity-70`),e(_,a(`颜色：`));let v=m(`rue:slot:anchor`);return e(_,v),t(()=>{let e=n[0].color;p(()=>c(e,_,v))}),r}),r,l)}})});let j=d(`section`,f);e(f,j),u(j,`space-y-3`);let M=d(`h2`,j);e(j,M),u(M,`text-xl font-semibold`),e(M,a(`r-for：对象遍历`));let N=d(`div`,j);e(j,N),u(N,`flex flex-wrap gap-2`);let P=m(`rue:list:start`),F=m(`rue:list:end`);e(N,P),e(N,F);let I=new Map;t(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,r,l,f,h)=>{c(o(()=>{let r=s(),o=d(`span`,r);e(r,o),t(()=>{i(o,`key`,String(n[1]))}),u(o,`badge badge-outline badge-lg`);let l=m(`rue:slot:anchor`);e(o,l),t(()=>{let e=n[1];p(()=>c(e,o,l))}),e(o,a(`: `));let f=m(`rue:slot:anchor`);return e(o,f),t(()=>{let e=n[0];p(()=>c(e,o,f))}),r}),r,l)}})});let L=d(`section`,f);e(f,L),u(L,`space-y-3`);let R=d(`div`,L);e(L,R),u(R,`flex flex-wrap items-center justify-between gap-3`);let z=d(`h2`,R);e(R,z),u(z,`text-xl font-semibold`),e(z,a(`v-for：数字迭代`));let B=d(`div`,R);e(R,B),u(B,`join`);let V=d(`button`,B);e(B,V),u(V,`btn btn-sm join-item`),r(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),e(V,a(`-1`));let H=d(`button`,B);e(B,H),u(H,`btn btn-sm join-item`),r(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),e(H,a(`+1`));let U=d(`div`,L);e(L,U),u(U,`flex flex-wrap gap-2`);let W=m(`rue:list:start`),G=m(`rue:list:end`);e(U,W),e(U,G);let K=new Map;return t(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(n,r,l,f,h)=>{c(o(()=>{let r=s(),o=d(`span`,r);e(r,o),t(()=>{i(o,`key`,String(n[0]))}),u(o,`badge badge-primary badge-lg`),e(o,a(`Step `));let l=m(`rue:slot:anchor`);return e(o,l),t(()=>{let e=n[0];p(()=>c(e,o,l))}),r}),r,l)}})}),n}):``;p(()=>c(n,E,O))}),n})}),l,h),l})};export{S as default};