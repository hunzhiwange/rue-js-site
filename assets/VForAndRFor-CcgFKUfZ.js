import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],S={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},C=()=>{let{activeTab:C,fruits:w,count:T}=_(`useSetup:0:0`,()=>l(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),fruits:_(`ref:1:1`,()=>p([...x])),count:_(`ref:1:2`,()=>p(3))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(b,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`v-for / r-for`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let b=n(`button`);i(_,b),s(b,`role`,`tab`),u(()=>{t(b,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),f(b,`click`,()=>{C.value=`preview`}),i(b,r(`效果`));let E=n(`button`);i(_,E),s(E,`role`,`tab`),u(()=>{t(E,String(`tab ${C.value===`code`?`tab-active`:``}`))}),f(E,`click`,()=>{C.value=`code`}),i(E,r(`代码`));let D=n(`div`);i(l,D),t(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=a(`rue:slot:anchor`);i(D,O),u(()=>{let r=C.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,D,O))}),i(D,r(` `));let k=a(`rue:slot:anchor`);return i(D,k),u(()=>{let l=C.value===`preview`?g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`card bg-base-100 shadow`);let h=n(`div`);i(p,h),t(h,`card-body grid gap-6`);let _=n(`section`);i(h,_),t(_,`space-y-3`);let y=n(`div`);i(_,y),t(y,`flex flex-wrap items-center justify-between gap-3`);let b=n(`h2`);i(y,b),t(b,`text-xl font-semibold`),i(b,r(`v-for：数组遍历`));let C=n(`div`);i(y,C),t(C,`join`);let E=n(`button`);i(C,E),t(E,`btn btn-sm join-item`),f(E,`click`,()=>{w.value=[...w.value].reverse()}),i(E,r(`倒序`));let D=n(`button`);i(C,D),t(D,`btn btn-sm join-item`),f(D,`click`,()=>{w.value=[...x]}),i(D,r(`重置`));let O=n(`ul`);i(_,O),t(O,`list bg-base-200 rounded-box`);let k=a(`rue:list:start`),A=a(`rue:list:end`);i(O,k),i(O,A);let j=new Map;u(()=>{j=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0].id,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(l,f,p,h,_)=>{d(g(()=>{let f=e(),p=n(`li`);i(f,p),u(()=>{s(p,`key`,String(l[0].id))}),t(p,`list-row`);let h=n(`div`);i(p,h);let g=n(`div`);i(h,g),t(g,`font-medium`);let _=o(g);i(g,_),u(()=>{c(_,l[1]+1)}),i(g,r(`. `));let v=a(`rue:slot:anchor`);i(g,v),u(()=>{let e=l[0].name;m(()=>d(e,g,v))});let y=n(`div`);i(h,y),t(y,`text-sm opacity-70`),i(y,r(`颜色：`));let b=a(`rue:slot:anchor`);return i(y,b),u(()=>{let e=l[0].color;m(()=>d(e,y,b))}),f}),f,p)}})});let M=n(`section`);i(h,M),t(M,`space-y-3`);let N=n(`h2`);i(M,N),t(N,`text-xl font-semibold`),i(N,r(`r-for：对象遍历`));let P=n(`div`);i(M,P),t(P,`flex flex-wrap gap-2`);let F=a(`rue:list:start`),I=a(`rue:list:end`);i(P,F),i(P,I);let L=new Map;u(()=>{L=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(S)||[],getKey:(e,t)=>e[1],elements:L,parent:P,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(o,c,l,f,p)=>{d(g(()=>{let c=e(),l=n(`span`);i(c,l),u(()=>{s(l,`key`,String(o[1]))}),t(l,`badge badge-outline badge-lg`);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=o[1];m(()=>d(e,l,f))}),i(l,r(`: `));let p=a(`rue:slot:anchor`);return i(l,p),u(()=>{let e=o[0];m(()=>d(e,l,p))}),c}),c,l)}})});let R=n(`section`);i(h,R),t(R,`space-y-3`);let z=n(`div`);i(R,z),t(z,`flex flex-wrap items-center justify-between gap-3`);let B=n(`h2`);i(z,B),t(B,`text-xl font-semibold`),i(B,r(`v-for：数字迭代`));let V=n(`div`);i(z,V),t(V,`join`);let H=n(`button`);i(V,H),t(H,`btn btn-sm join-item`),f(H,`click`,()=>{T.value=Math.max(1,T.value-1)}),i(H,r(`-1`));let U=n(`button`);i(V,U),t(U,`btn btn-sm join-item`),f(U,`click`,()=>{T.value=Math.min(6,T.value+1)}),i(U,r(`+1`));let W=n(`div`);i(R,W),t(W,`flex flex-wrap gap-2`);let G=a(`rue:list:start`),K=a(`rue:list:end`);i(W,G),i(W,K);let q=new Map;return u(()=>{q=v({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.value)||[],getKey:(e,t)=>e[0],elements:q,parent:W,before:K,singleRoot:!0,trackIndex:!1,start:G,renderItem:(o,c,l,f,p)=>{d(g(()=>{let c=e(),l=n(`span`);i(c,l),u(()=>{s(l,`key`,String(o[0]))}),t(l,`badge badge-primary badge-lg`),i(l,r(`Step `));let f=a(`rue:slot:anchor`);return i(l,f),u(()=>{let e=o[0];m(()=>d(e,l,f))}),c}),c,l)}})}),l}):``;m(()=>d(l,D,k))}),l})}),l,p),l})};export{C as default};