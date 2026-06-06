import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,lt as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>p(()=>{let e=g(`ref:1:0`,()=>c(`code`)),t=g(`ref:1:1`,()=>c([...b]));return{activeTab:e,fruits:t,count:g(`ref:1:2`,()=>c(3)),_fruitCards:g(`computed:1:3`,()=>u(()=>t.value.map((e,t)=>({...e,rank:t+1}))))}}));return l(c=>{let u=a(),p=i(`rue:component:anchor`);return t(u,p),d(f(y,{children:l(()=>{let c=a(),u=o(`h1`,c);t(c,u),e(u,`text-5xl font-semibold mb-4 md:mb-4`),t(u,r(`v-for / r-for`));let p=o(`div`,c);t(c,p),s(p,`role`,`tablist`),e(p,`tabs tabs-box`);let g=o(`button`,p);t(p,g),s(g,`role`,`tab`),n(()=>{e(g,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),h(g,`click`,()=>{S.value=`preview`}),t(g,r(`效果`));let y=o(`button`,p);t(p,y),s(y,`role`,`tab`),n(()=>{e(y,String(`tab ${S.value===`code`?`tab-active`:``}`))}),h(y,`click`,()=>{S.value=`code`}),t(y,r(`代码`));let E=o(`div`,c);t(c,E),e(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let r=S.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=f(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});m(()=>d(e,c,l))}),r}):``;m(()=>d(r,E,D))}),t(E,r(` `));let O=i(`rue:slot:anchor`);return t(E,O),n(()=>{let c=S.value===`preview`?l(()=>{let c=a(),u=o(`div`,c);t(c,u),e(u,`card bg-base-100 shadow`);let f=o(`div`,u);t(u,f),e(f,`card-body grid gap-6`);let p=o(`section`,f);t(f,p),e(p,`space-y-3`);let g=o(`div`,p);t(p,g),e(g,`flex flex-wrap items-center justify-between gap-3`);let v=o(`h2`,g);t(g,v),e(v,`text-xl font-semibold`),t(v,r(`v-for：数组遍历`));let y=o(`div`,g);t(g,y),e(y,`join`);let S=o(`button`,y);t(y,S),e(S,`btn btn-sm join-item`),h(S,`click`,()=>{C.value=[...C.value].reverse()}),t(S,r(`倒序`));let E=o(`button`,y);t(y,E),e(E,`btn btn-sm join-item`),h(E,`click`,()=>{C.value=[...b]}),t(E,r(`重置`));let D=o(`ul`,p);t(p,D),e(D,`list bg-base-200 rounded-box`);let O=i(`rue:list:start`),k=i(`rue:list:end`);t(D,O),t(D,k);let A=new Map;n(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(c,u,f,p,h)=>{d(l(()=>{let l=a(),u=o(`li`,l);t(l,u),n(()=>{s(u,`key`,String(`${c[0].id}-${c[0].rank}`))}),e(u,`list-row`);let f=o(`div`,u);t(u,f);let p=o(`div`,f);t(f,p),e(p,`font-medium`);let h=i(`rue:slot:anchor`);t(p,h),n(()=>{let e=c[0].rank;m(()=>d(e,p,h))}),t(p,r(`. `));let g=i(`rue:slot:anchor`);t(p,g),n(()=>{let e=c[0].name;m(()=>d(e,p,g))});let _=o(`div`,f);t(f,_),e(_,`text-sm opacity-70`),t(_,r(`颜色：`));let v=i(`rue:slot:anchor`);return t(_,v),n(()=>{let e=c[0].color;m(()=>d(e,_,v))}),l}),u,f)}})});let j=o(`section`,f);t(f,j),e(j,`space-y-3`);let M=o(`h2`,j);t(j,M),e(M,`text-xl font-semibold`),t(M,r(`r-for：对象遍历`));let N=o(`div`,j);t(j,N),e(N,`flex flex-wrap gap-2`);let P=i(`rue:list:start`),F=i(`rue:list:end`);t(N,P),t(N,F);let I=new Map;n(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(c,u,f,p,h)=>{d(l(()=>{let l=a(),u=o(`span`,l);t(l,u),n(()=>{s(u,`key`,String(c[1]))}),e(u,`badge badge-outline badge-lg`);let f=i(`rue:slot:anchor`);t(u,f),n(()=>{let e=c[1];m(()=>d(e,u,f))}),t(u,r(`: `));let p=i(`rue:slot:anchor`);return t(u,p),n(()=>{let e=c[0];m(()=>d(e,u,p))}),l}),u,f)}})});let L=o(`section`,f);t(f,L),e(L,`space-y-3`);let R=o(`div`,L);t(L,R),e(R,`flex flex-wrap items-center justify-between gap-3`);let z=o(`h2`,R);t(R,z),e(z,`text-xl font-semibold`),t(z,r(`v-for：数字迭代`));let B=o(`div`,R);t(R,B),e(B,`join`);let V=o(`button`,B);t(B,V),e(V,`btn btn-sm join-item`),h(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),t(V,r(`-1`));let H=o(`button`,B);t(B,H),e(H,`btn btn-sm join-item`),h(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),t(H,r(`+1`));let U=o(`div`,L);t(L,U),e(U,`flex flex-wrap gap-2`);let W=i(`rue:list:start`),G=i(`rue:list:end`);t(U,W),t(U,G);let K=new Map;return n(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(c,u,f,p,h)=>{d(l(()=>{let l=a(),u=o(`span`,l);t(l,u),n(()=>{s(u,`key`,String(c[0]))}),e(u,`badge badge-primary badge-lg`),t(u,r(`Step `));let f=i(`rue:slot:anchor`);return t(u,f),n(()=>{let e=c[0];m(()=>d(e,u,f))}),l}),u,f)}})}),c}):``;m(()=>d(c,E,O))}),c})}),u,p),u})};export{S as default};