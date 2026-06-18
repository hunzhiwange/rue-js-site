import{$ as e,Et as t,Ht as n,J as r,Lt as i,Pt as a,Q as o,Rt as s,Tt as c,X as l,Xt as u,Z as d,at as f,et as p,gt as m,l as h,pt as g,q as _,qt as v,s as y,st as b,t as x,wt as S,zt as C}from"./vapor-runtime-iQZthBPQ.js";import{a as w,n as T}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as E}from"./Code-CZqShVUj.js";import{r as D}from"./SidebarPlaygroundExample-5H7RL-T7.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>v(()=>{let e=w(`ref:1:0`,()=>i(`preview`)),n=w(`reactive:1:1`,()=>S({count:1,nested:{ready:!0}})),r=w(`readonly:1:2`,()=>c({count:1})),a=w(`shallowReactive:1:3`,()=>s({nested:{ready:!0}})),o=w(`shallowReadonly:1:4`,()=>t({nested:{ready:!0}})),l=w(`ref:1:5`,()=>i(1)),u=w(`signal:1:6`,()=>C(1)),d=w(`computed:1:7`,()=>m(()=>l.value*2)),f={count:1};return{activeTab:e,state:n,readonlyState:r,shallowState:a,shallowReadonlyState:o,count:l,countSignal:u,doubled:d,plain:f,rows:w(`computed:1:8`,()=>m(()=>[{label:`reactive({ count: 1 })`,value:n,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:r,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:a,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:o,kind:`浅层只读代理`},{label:`ref(1)`,value:l,kind:`ref 句柄`},{label:`signal(1)`,value:u,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:d,kind:`computed 句柄`},{label:`{ count: 1 }`,value:f,kind:`普通对象`}]))}}));return h(t=>{let i=d(),s=l(`rue:component:anchor`);return r(i,s),y(x(D,{children:h(()=>{let t=d(),i=o(`h1`,t);r(t,i),b(i,`text-5xl font-semibold mb-4 md:mb-4`),r(i,e(`isProxy 响应式代理判断`));let s=o(`div`,t);r(t,s),f(s,`role`,`tablist`),b(s,`tabs tabs-box`);let c=o(`button`,s);r(s,c),f(c,`role`,`tab`),u(()=>{b(c,`tab ${O.value===`preview`?`tab-active`:``}`)}),_(c,`click`,()=>{O.value=`preview`}),r(c,e(`效果`));let m=o(`button`,s);r(s,m),f(m,`role`,`tab`),u(()=>{b(m,`tab ${O.value===`code`?`tab-active`:``}`)}),_(m,`click`,()=>{O.value=`code`}),r(m,e(`代码`));let v=o(`div`,t);r(t,v),b(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=l(`rue:slot:anchor`);r(v,S),u(()=>{let e=O.value===`code`?h(()=>{let e=d(),t=o(`div`,e);r(e,t),b(t,`card bg-base-100 shadow overflow-auto`);let i=o(`div`,t);r(t,i),b(i,`card-body p-0`);let a=l(`rue:component:anchor`);return r(i,a),u(()=>{let e=x(E,{className:`h-full`,lang:`tsx`,code:`import {
  type FC,
  computed,
  isProxy,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  signal,
} from '@rue-js/rue';

const IsProxy: FC = () => {
  const state = reactive({ count: 1 });
  const readonlyState = readonly({ count: 1 });
  const shallowState = shallowReactive({ nested: { ready: true } });
  const shallowReadonlyState = shallowReadonly({ nested: { ready: true } });
  const count = ref(1);
  const countSignal = signal(1);
  const doubled = computed(() => count.value * 2);

  return (
    <ul>
      <li>reactive: {String(isProxy(state))}</li>
      <li>readonly: {String(isProxy(readonlyState))}</li>
      <li>shallowReactive: {String(isProxy(shallowState))}</li>
      <li>shallowReadonly: {String(isProxy(shallowReadonlyState))}</li>
      <li>ref: {String(isProxy(count))}</li>
      <li>signal: {String(isProxy(countSignal))}</li>
      <li>computed: {String(isProxy(doubled))}</li>
      <li>plain object: {String(isProxy({ count: 1 }))}</li>
    </ul>
  );
};

export default IsProxy;`});n(()=>y(e,i,a))}),e}):``;n(()=>y(e,v,S))}),r(v,e(` `));let C=l(`rue:slot:anchor`);return r(v,C),u(()=>{let t=O.value===`preview`?h(()=>{let t=d(),i=o(`div`,t);r(t,i),b(i,`card bg-base-100 shadow`);let s=o(`div`,i);r(i,s),b(s,`card-body gap-4`);let c=o(`div`,s);r(s,c),b(c,`flex flex-wrap items-center gap-3`);let f=o(`button`,c);r(c,f),b(f,`btn btn-primary`),_(f,`click`,()=>{k.count+=1,N.value+=1}),r(f,e(`count + 1`));let m=o(`div`,c);r(c,m),b(m,`stats shadow-sm border border-base-200`);let v=o(`div`,m);r(m,v),b(v,`stat py-3`);let x=o(`div`,v);r(v,x),b(x,`stat-title`),r(x,e(`reactive count`));let S=o(`div`,v);r(v,S),b(S,`stat-value text-2xl`);let C=l(`rue:slot:anchor`);r(S,C),u(()=>{let e=k.count;n(()=>y(e,S,C))});let w=o(`div`,m);r(m,w),b(w,`stat py-3`);let E=o(`div`,w);r(w,E),b(E,`stat-title`),r(E,e(`computed doubled`));let D=o(`div`,w);r(w,D),b(D,`stat-value text-2xl`);let O=l(`rue:slot:anchor`);r(D,O),u(()=>{let e=F.get();n(()=>y(e,D,O))});let A=o(`div`,s);r(s,A),b(A,`overflow-x-auto`);let j=o(`table`,A);r(A,j),b(j,`table`);let M=o(`thead`,j);r(j,M);let P=o(`tr`,M);r(M,P);let I=o(`th`,P);r(P,I),r(I,e(`值`));let R=o(`th`,P);r(P,R),r(R,e(`类型`));let z=o(`th`,P);r(P,z),r(z,e(`isProxy`));let B=o(`tbody`,j);r(j,B);let V=l(`rue:list:start`),H=l(`rue:list:end`);r(B,V),r(B,H);let U=new Map;return u(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,t,i,s,c)=>{y(h(()=>{let t=d(),i=a(e.value),s=o(`tr`,t);r(t,s);let c=o(`td`,s);r(s,c);let f=o(`code`,c);r(c,f);let m=l(`rue:slot:anchor`);r(f,m),u(()=>{let t=e.label;n(()=>y(t,f,m))});let h=o(`td`,s);r(s,h);let _=l(`rue:slot:anchor`);r(h,_),u(()=>{let t=e.kind;n(()=>y(t,h,_))});let v=o(`td`,s);r(s,v);let x=o(`span`,v);r(v,x),u(()=>{b(x,`badge ${i?`badge-success`:`badge-ghost`}`)});let S=p(x);return r(x,S),u(()=>{g(S,String(i))}),t}),t,i)}})}),t}):``;n(()=>y(t,v,C))}),t})}),i,s),i})};export{O as default};