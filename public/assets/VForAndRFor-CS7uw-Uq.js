import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],x={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},S=()=>{let{activeTab:S,fruits:C,count:w,_fruitCards:T}=g(`useSetup:0:0`,()=>s(()=>{let e=g(`ref:1:0`,()=>t(`code`)),n=g(`ref:1:1`,()=>t([...b]));return{activeTab:e,fruits:n,count:g(`ref:1:2`,()=>t(3)),_fruitCards:g(`computed:1:3`,()=>r(()=>n.value.map((e,t)=>({...e,rank:t+1}))))}}));return c(t=>{let r=m(),s=o(`rue:component:anchor`);return n(r,s),d(p(y,{children:c(()=>{let t=m(),r=u(`h1`,t);n(t,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),n(r,f(`v-for / r-for`));let s=u(`div`,t);n(t,s),l(s,`role`,`tablist`),a(s,`tabs tabs-box`);let g=u(`button`,s);n(s,g),l(g,`role`,`tab`),h(()=>{a(g,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(g,`click`,()=>{S.value=`preview`}),n(g,f(`效果`));let y=u(`button`,s);n(s,y),l(y,`role`,`tab`),h(()=>{a(y,`tab ${S.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{S.value=`code`}),n(y,f(`代码`));let E=u(`div`,t);n(t,E),a(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=o(`rue:slot:anchor`);n(E,D),h(()=>{let t=S.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto`);let i=u(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),h(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`});e(()=>d(t,i,s))}),t}):``;e(()=>d(t,E,D))}),n(E,f(` `));let O=o(`rue:slot:anchor`);return n(E,O),h(()=>{let t=S.value===`preview`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),a(r,`card bg-base-100 shadow`);let s=u(`div`,r);n(r,s),a(s,`card-body grid gap-6`);let p=u(`section`,s);n(s,p),a(p,`space-y-3`);let g=u(`div`,p);n(p,g),a(g,`flex flex-wrap items-center justify-between gap-3`);let v=u(`h2`,g);n(g,v),a(v,`text-xl font-semibold`),n(v,f(`v-for：数组遍历`));let y=u(`div`,g);n(g,y),a(y,`join`);let S=u(`button`,y);n(y,S),a(S,`btn btn-sm join-item`),i(S,`click`,()=>{C.value=[...C.value].reverse()}),n(S,f(`倒序`));let E=u(`button`,y);n(y,E),a(E,`btn btn-sm join-item`),i(E,`click`,()=>{C.value=[...b]}),n(E,f(`重置`));let D=u(`ul`,p);n(p,D),a(D,`list bg-base-200 rounded-box`);let O=o(`rue:list:start`),k=o(`rue:list:end`);n(D,O),n(D,k);let A=new Map;h(()=>{A=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(T.get())||[],getKey:(e,t)=>`${e[0].id}-${e[0].rank}`,elements:A,parent:D,before:k,singleRoot:!0,trackIndex:!1,start:O,renderItem:(t,r,i,s,p)=>{d(c(()=>{let r=m(),i=u(`li`,r);n(r,i),h(()=>{l(i,`key`,String(`${t[0].id}-${t[0].rank}`))}),a(i,`list-row`);let s=u(`div`,i);n(i,s);let c=u(`div`,s);n(s,c),a(c,`font-medium`);let p=o(`rue:slot:anchor`);n(c,p),h(()=>{let n=t[0].rank;e(()=>d(n,c,p))}),n(c,f(`. `));let g=o(`rue:slot:anchor`);n(c,g),h(()=>{let n=t[0].name;e(()=>d(n,c,g))});let _=u(`div`,s);n(s,_),a(_,`text-sm opacity-70`),n(_,f(`颜色：`));let v=o(`rue:slot:anchor`);return n(_,v),h(()=>{let n=t[0].color;e(()=>d(n,_,v))}),r}),r,i)}})});let j=u(`section`,s);n(s,j),a(j,`space-y-3`);let M=u(`h2`,j);n(j,M),a(M,`text-xl font-semibold`),n(M,f(`r-for：对象遍历`));let N=u(`div`,j);n(j,N),a(N,`flex flex-wrap gap-2`);let P=o(`rue:list:start`),F=o(`rue:list:end`);n(N,P),n(N,F);let I=new Map;h(()=>{I=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(x)||[],getKey:(e,t)=>e[1],elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,r,i,s,p)=>{d(c(()=>{let r=m(),i=u(`span`,r);n(r,i),h(()=>{l(i,`key`,String(t[1]))}),a(i,`badge badge-outline badge-lg`);let s=o(`rue:slot:anchor`);n(i,s),h(()=>{let n=t[1];e(()=>d(n,i,s))}),n(i,f(`: `));let c=o(`rue:slot:anchor`);return n(i,c),h(()=>{let n=t[0];e(()=>d(n,i,c))}),r}),r,i)}})});let L=u(`section`,s);n(s,L),a(L,`space-y-3`);let R=u(`div`,L);n(L,R),a(R,`flex flex-wrap items-center justify-between gap-3`);let z=u(`h2`,R);n(R,z),a(z,`text-xl font-semibold`),n(z,f(`v-for：数字迭代`));let B=u(`div`,R);n(R,B),a(B,`join`);let V=u(`button`,B);n(B,V),a(V,`btn btn-sm join-item`),i(V,`click`,()=>{w.value=Math.max(1,w.value-1)}),n(V,f(`-1`));let H=u(`button`,B);n(B,H),a(H,`btn btn-sm join-item`),i(H,`click`,()=>{w.value=Math.min(6,w.value+1)}),n(H,f(`+1`));let U=u(`div`,L);n(L,U),a(U,`flex flex-wrap gap-2`);let W=o(`rue:list:start`),G=o(`rue:list:end`);n(U,W),n(U,G);let K=new Map;return h(()=>{K=_({items:(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(w.value)||[],getKey:(e,t)=>e[0],elements:K,parent:U,before:G,singleRoot:!0,trackIndex:!1,start:W,renderItem:(t,r,i,s,p)=>{d(c(()=>{let r=m(),i=u(`span`,r);n(r,i),h(()=>{l(i,`key`,String(t[0]))}),a(i,`badge badge-primary badge-lg`),n(i,f(`Step `));let s=o(`rue:slot:anchor`);return n(i,s),h(()=>{let n=t[0];e(()=>d(n,i,s))}),r}),r,i)}})}),t}):``;e(()=>d(t,E,O))}),t})}),r,s),r})};export{S as default};