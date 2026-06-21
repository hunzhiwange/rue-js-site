import{$t as e,Gt as t,Jt as n,Mt as r,Nt as i,Q as a,St as o,Xt as s,Yt as c,Z as l,dt as u,et as d,in as f,it as p,jt as m,l as h,lt as g,nt as _,o as v,rt as y,t as b,tt as x,vt as S,zt as C}from"./vapor-runtime-DsQWl-IB.js";import{a as w,n as T}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as E}from"./Code-4SUSUwRg.js";import{r as D}from"./SidebarPlaygroundExample-BEWYUWOl.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>f(()=>{let e=w(`ref:1:0`,()=>n(`preview`)),t=w(`reactive:1:1`,()=>m({count:1,nested:{ready:!0}})),a=w(`readonly:1:2`,()=>r({count:1})),l=w(`shallowReactive:1:3`,()=>c({nested:{ready:!0}})),u=w(`shallowReadonly:1:4`,()=>i({nested:{ready:!0}})),d=w(`ref:1:5`,()=>n(1)),f=w(`signal:1:6`,()=>s(1)),p=w(`computed:1:7`,()=>o(()=>d.value*2)),h={count:1};return{activeTab:e,state:t,readonlyState:a,shallowState:l,shallowReadonlyState:u,count:d,countSignal:f,doubled:p,plain:h,rows:w(`computed:1:8`,()=>o(()=>[{label:`reactive({ count: 1 })`,value:t,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:a,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:l,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:u,kind:`浅层只读代理`},{label:`ref(1)`,value:d,kind:`ref 句柄`},{label:`signal(1)`,value:f,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:p,kind:`computed 句柄`},{label:`{ count: 1 }`,value:h,kind:`普通对象`}]))}}));return h(n=>{let r=x(),i=d(`rue:component:anchor`);return a(r,i),v(b(D,{children:h(()=>{let n=x(),r=_(`h1`,n);a(n,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),a(r,y(`isProxy 响应式代理判断`));let i=_(`div`,n);a(n,i),g(i,`role`,`tablist`),u(i,`tabs tabs-box`);let o=_(`button`,i);a(i,o),g(o,`role`,`tab`),C(()=>{u(o,`tab ${O.value===`preview`?`tab-active`:``}`)}),l(o,`click`,()=>{O.value=`preview`}),a(o,y(`效果`));let s=_(`button`,i);a(i,s),g(s,`role`,`tab`),C(()=>{u(s,`tab ${O.value===`code`?`tab-active`:``}`)}),l(s,`click`,()=>{O.value=`code`}),a(s,y(`代码`));let c=_(`div`,n);a(n,c),u(c,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let f=d(`rue:slot:anchor`);a(c,f),C(()=>{let t=O.value===`code`?h(()=>{let t=x(),n=_(`div`,t);a(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=_(`div`,n);a(n,r),u(r,`card-body p-0`);let i=d(`rue:component:anchor`);return a(r,i),C(()=>{let t=b(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});e(()=>v(t,r,i))}),t}):``;e(()=>v(t,c,f))}),a(c,y(` `));let m=d(`rue:slot:anchor`);return a(c,m),C(()=>{let n=O.value===`preview`?h(()=>{let n=x(),r=_(`div`,n);a(n,r),u(r,`card bg-base-100 shadow`);let i=_(`div`,r);a(r,i),u(i,`card-body gap-4`);let o=_(`div`,i);a(i,o),u(o,`flex flex-wrap items-center gap-3`);let s=_(`button`,o);a(o,s),u(s,`btn btn-primary`),l(s,`click`,()=>{k.count+=1,N.value+=1}),a(s,y(`count + 1`));let c=_(`div`,o);a(o,c),u(c,`stats shadow-sm border border-base-200`);let f=_(`div`,c);a(c,f),u(f,`stat py-3`);let m=_(`div`,f);a(f,m),u(m,`stat-title`),a(m,y(`reactive count`));let g=_(`div`,f);a(f,g),u(g,`stat-value text-2xl`);let b=d(`rue:slot:anchor`);a(g,b),C(()=>{let t=k.count;e(()=>v(t,g,b))});let w=_(`div`,c);a(c,w),u(w,`stat py-3`);let E=_(`div`,w);a(w,E),u(E,`stat-title`),a(E,y(`computed doubled`));let D=_(`div`,w);a(w,D),u(D,`stat-value text-2xl`);let O=d(`rue:slot:anchor`);a(D,O),C(()=>{let t=F.get();e(()=>v(t,D,O))});let A=_(`div`,i);a(i,A),u(A,`overflow-x-auto`);let j=_(`table`,A);a(A,j),u(j,`table`);let M=_(`thead`,j);a(j,M);let P=_(`tr`,M);a(M,P);let I=_(`th`,P);a(P,I),a(I,y(`值`));let R=_(`th`,P);a(P,R),a(R,y(`类型`));let z=_(`th`,P);a(P,z),a(z,y(`isProxy`));let B=_(`tbody`,j);a(j,B);let V=d(`rue:list:start`),H=d(`rue:list:end`);a(B,V),a(B,H);let U=new Map;return C(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(n,r,i,o,s)=>{v(h(()=>{let r=x(),i=t(n.value),o=_(`tr`,r);a(r,o);let s=_(`td`,o);a(o,s);let c=_(`code`,s);a(s,c);let l=d(`rue:slot:anchor`);a(c,l),C(()=>{let t=n.label;e(()=>v(t,c,l))});let f=_(`td`,o);a(o,f);let m=d(`rue:slot:anchor`);a(f,m),C(()=>{let t=n.kind;e(()=>v(t,f,m))});let h=_(`td`,o);a(o,h);let g=_(`span`,h);a(h,g),C(()=>{u(g,`badge ${i?`badge-success`:`badge-ghost`}`)});let y=p(g);return a(g,y),C(()=>{S(y,String(i))}),r}),r,i)}})}),n}):``;e(()=>v(n,c,m))}),n})}),r,i),r})};export{O as default};