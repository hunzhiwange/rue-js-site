import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as v}from"./Code-C8wy38VS.js";import{t as y}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w}=g(`useSetup:0:0`,()=>h(()=>({activeTab:g(`ref:1:0`,()=>f(`code`)),fruits:g(`ref:1:1`,()=>f([...b])),count:g(`ref:1:2`,()=>f(3))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(y,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`v-for / r-for`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let y=t(`button`);u(g,y),n(y,`role`,`tab`),d(()=>{s(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),e(y,`click`,()=>{S.value=`preview`}),u(y,r(`效果`));let T=t(`button`);u(g,T),n(T,`role`,`tab`),d(()=>{s(T,String(`tab ${S.value===`code`?`tab-active`:``}`))}),e(T,`click`,()=>{S.value=`code`}),u(T,r(`代码`));let E=t(`div`);u(f,E),s(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);u(E,D),d(()=>{l(S.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`}),r,i)}),e}):``,E,D)}),u(E,r(` `));let O=a(`rue:slot:anchor`);return u(E,O),d(()=>{l(S.value===`preview`?m(()=>{let f=o(),p=t(`div`);u(f,p),s(p,`card bg-base-100 shadow`);let h=t(`div`);u(p,h),s(h,`card-body grid gap-6`);let g=t(`section`);u(h,g),s(g,`space-y-3`);let v=t(`div`);u(g,v),s(v,`flex flex-wrap items-center justify-between gap-3`);let y=t(`h2`);u(v,y),s(y,`text-xl font-semibold`),u(y,r(`v-for：数组遍历`));let S=t(`div`);u(v,S),s(S,`join`);let T=t(`button`);u(S,T),s(T,`btn btn-sm join-item`),e(T,`click`,()=>{C.value=[...C.value].reverse()}),u(T,r(`倒序`));let E=t(`button`);u(S,E),s(E,`btn btn-sm join-item`),e(E,`click`,()=>{C.value=[...b]}),u(E,r(`重置`));let D=t(`ul`);u(g,D),s(D,`list bg-base-200 rounded-box`);let O=a(`rue:list:start`),k=a(`rue:list:end`);u(D,O),u(D,k);let A=new Map;d(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(C.value)||[],getKey:(e,t)=>e[0].id,elements:A,parent:D,before:k,singleRoot:!0,start:O,renderItem:(e,f,p,h,g)=>{l(m(()=>{let f=o(),p=t(`li`);u(f,p),d(()=>{n(p,`key`,String(e[0].id))}),s(p,`list-row`);let m=t(`div`);u(p,m);let h=t(`div`);u(m,h),s(h,`font-medium`);let g=i(h);u(h,g),d(()=>{c(g,e[1]+1)}),u(h,r(`. `));let _=a(`rue:slot:anchor`);u(h,_),d(()=>{let t=e[0].name;l(t,h,_)});let v=t(`div`);u(m,v),s(v,`text-sm opacity-70`),u(v,r(`颜色：`));let y=a(`rue:slot:anchor`);return u(v,y),d(()=>{let t=e[0].color;l(t,v,y)}),f}),f,p)}})});let j=t(`section`);u(h,j),s(j,`space-y-3`);let M=t(`h2`);u(j,M),s(M,`text-xl font-semibold`),u(M,r(`r-for：对象遍历`));let N=t(`div`);u(j,N),s(N,`flex flex-wrap gap-2`);let P=a(`rue:list:start`),F=a(`rue:list:end`);u(N,P),u(N,F);let I=new Map;d(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,start:P,renderItem:(e,i,c,f,p)=>{l(m(()=>{let i=o(),c=t(`span`);u(i,c),d(()=>{n(c,`key`,String(e[1]))}),s(c,`badge badge-outline badge-lg`);let f=a(`rue:slot:anchor`);u(c,f),d(()=>{let t=e[1];l(t,c,f)}),u(c,r(`: `));let p=a(`rue:slot:anchor`);return u(c,p),d(()=>{let t=e[0];l(t,c,p)}),i}),i,c)}})});let L=t(`section`);u(h,L),s(L,`space-y-3`);let R=t(`div`);u(L,R),s(R,`flex flex-wrap items-center justify-between gap-3`);let z=t(`h2`);u(R,z),s(z,`text-xl font-semibold`),u(z,r(`v-for：数字迭代`));let B=t(`div`);u(R,B),s(B,`join`);let V=t(`button`);u(B,V),s(V,`btn btn-sm join-item`),e(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),u(V,r(`-1`));let H=t(`button`);u(B,H),s(H,`btn btn-sm join-item`),e(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),u(H,r(`+1`));let U=t(`div`);u(L,U),s(U,`flex flex-wrap gap-2`);let W=a(`rue:list:start`),G=a(`rue:list:end`);u(U,W),u(U,G);let K=new Map;return d(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,start:W,renderItem:(e,i,c,f,p)=>{l(m(()=>{let i=o(),c=t(`span`);u(i,c),d(()=>{n(c,`key`,String(e[0]))}),s(c,`badge badge-primary badge-lg`),u(c,r(`Step `));let f=a(`rue:slot:anchor`);return u(c,f),d(()=>{let t=e[0];l(t,c,f)}),i}),i,c)}})}),f}):``,E,O)}),f})}),f,h),f})};export{S as default};