import{Ft as e,Nt as t,Pt as n,Q as r,Qt as i,Vt as a,Xt as o,Z as s,Zt as c,at as l,bt as u,dt as d,it as f,l as p,nt as m,o as h,on as g,pt as _,qt as v,rt as y,t as b,tn as x,tt as S,wt as C}from"./vapor-runtime-x7F5M-49.js";import{a as w,n as T}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as E}from"./Code-C5NjdoiC.js";import{r as D}from"./SidebarPlaygroundExample-DpItFif-.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>g(()=>{let r=w(`ref:1:0`,()=>o(`preview`)),a=w(`reactive:1:1`,()=>t({count:1,nested:{ready:!0}})),s=w(`readonly:1:2`,()=>n({count:1})),l=w(`shallowReactive:1:3`,()=>c({nested:{ready:!0}})),u=w(`shallowReadonly:1:4`,()=>e({nested:{ready:!0}})),d=w(`ref:1:5`,()=>o(1)),f=w(`signal:1:6`,()=>i(1)),p=w(`computed:1:7`,()=>C(()=>d.value*2)),m={count:1};return{activeTab:r,state:a,readonlyState:s,shallowState:l,shallowReadonlyState:u,count:d,countSignal:f,doubled:p,plain:m,rows:w(`computed:1:8`,()=>C(()=>[{label:`reactive({ count: 1 })`,value:a,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:s,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:l,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:u,kind:`浅层只读代理`},{label:`ref(1)`,value:d,kind:`ref 句柄`},{label:`signal(1)`,value:f,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:p,kind:`computed 句柄`},{label:`{ count: 1 }`,value:m,kind:`普通对象`}]))}}));return p(e=>{let t=m(),n=S(`rue:component:anchor`);return r(t,n),h(b(D,{children:p(()=>{let e=m(),t=y(`h1`,e);r(e,t),_(t,`text-5xl font-semibold mb-4 md:mb-4`),r(t,f(`isProxy 响应式代理判断`));let n=y(`div`,e);r(e,n),d(n,`role`,`tablist`),_(n,`tabs tabs-box`);let i=y(`button`,n);r(n,i),d(i,`role`,`tab`),a(()=>{_(i,`tab ${O.value===`preview`?`tab-active`:``}`)}),s(i,`click`,()=>{O.value=`preview`}),r(i,f(`效果`));let o=y(`button`,n);r(n,o),d(o,`role`,`tab`),a(()=>{_(o,`tab ${O.value===`code`?`tab-active`:``}`)}),s(o,`click`,()=>{O.value=`code`}),r(o,f(`代码`));let c=y(`div`,e);r(e,c),_(c,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let g=S(`rue:slot:anchor`);r(c,g),a(()=>{let e=O.value===`code`?p(()=>{let e=m(),t=y(`div`,e);r(e,t),_(t,`card bg-base-100 shadow overflow-auto`);let n=y(`div`,t);r(t,n),_(n,`card-body p-0`);let i=S(`rue:component:anchor`);return r(n,i),a(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});x(()=>h(e,n,i))}),e}):``;x(()=>h(e,c,g))}),r(c,f(` `));let C=S(`rue:slot:anchor`);return r(c,C),a(()=>{let e=O.value===`preview`?p(()=>{let e=m(),t=y(`div`,e);r(e,t),_(t,`card bg-base-100 shadow`);let n=y(`div`,t);r(t,n),_(n,`card-body gap-4`);let i=y(`div`,n);r(n,i),_(i,`flex flex-wrap items-center gap-3`);let o=y(`button`,i);r(i,o),_(o,`btn btn-primary`),s(o,`click`,()=>{k.count+=1,N.value+=1}),r(o,f(`count + 1`));let c=y(`div`,i);r(i,c),_(c,`stats shadow-sm border border-base-200`);let d=y(`div`,c);r(c,d),_(d,`stat py-3`);let g=y(`div`,d);r(d,g),_(g,`stat-title`),r(g,f(`reactive count`));let b=y(`div`,d);r(d,b),_(b,`stat-value text-2xl`);let C=S(`rue:slot:anchor`);r(b,C),a(()=>{let e=k.count;x(()=>h(e,b,C))});let w=y(`div`,c);r(c,w),_(w,`stat py-3`);let E=y(`div`,w);r(w,E),_(E,`stat-title`),r(E,f(`computed doubled`));let D=y(`div`,w);r(w,D),_(D,`stat-value text-2xl`);let O=S(`rue:slot:anchor`);r(D,O),a(()=>{let e=F.get();x(()=>h(e,D,O))});let A=y(`div`,n);r(n,A),_(A,`overflow-x-auto`);let j=y(`table`,A);r(A,j),_(j,`table`);let M=y(`thead`,j);r(j,M);let P=y(`tr`,M);r(M,P);let I=y(`th`,P);r(P,I),r(I,f(`值`));let R=y(`th`,P);r(P,R),r(R,f(`类型`));let z=y(`th`,P);r(P,z),r(z,f(`isProxy`));let B=y(`tbody`,j);r(j,B);let V=S(`rue:list:start`),H=S(`rue:list:end`);r(B,V),r(B,H);let U=new Map;return a(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,t,n,i,o)=>{h(p(()=>{let t=m(),n=v(e.value),i=y(`tr`,t);r(t,i);let o=y(`td`,i);r(i,o);let s=y(`code`,o);r(o,s);let c=S(`rue:slot:anchor`);r(s,c),a(()=>{let t=e.label;x(()=>h(t,s,c))});let d=y(`td`,i);r(i,d);let f=S(`rue:slot:anchor`);r(d,f),a(()=>{let t=e.kind;x(()=>h(t,d,f))});let p=y(`td`,i);r(i,p);let g=y(`span`,p);r(p,g),a(()=>{_(g,`badge ${n?`badge-success`:`badge-ghost`}`)});let b=l(g);return r(g,b),a(()=>{u(b,String(n))}),t}),t,n)}})}),e}):``;x(()=>h(e,c,C))}),e})}),t,n),t})};export{O as default};