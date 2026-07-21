import{Cn as e,Ct as t,Jt as n,Kt as r,Lt as i,Mt as a,Tt as o,Yt as s,dt as c,ft as l,hn as u,ht as d,mn as f,mt as p,ot as m,pn as h,pt as g,st as _,tn as v,un as y,vn as b}from"./context-8lXZvIn-.js";import{l as x,o as S,t as C}from"./vapor-runtime-ygJWVcNn.js";import{a as w,n as T}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as E}from"./Code-DhoWkRkB.js";import{r as D}from"./SidebarPlaygroundExample-B78jsvoF.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>e(()=>{let e=w(`ref:1:0`,()=>h(`preview`)),t=w(`reactive:1:1`,()=>r({count:1,nested:{ready:!0}})),a=w(`readonly:1:2`,()=>n({count:1})),o=w(`shallowReactive:1:3`,()=>f({nested:{ready:!0}})),c=w(`shallowReadonly:1:4`,()=>s({nested:{ready:!0}})),l=w(`ref:1:5`,()=>h(1)),d=w(`signal:1:6`,()=>u(1)),p=w(`computed:1:7`,()=>i(()=>l.value*2)),m={count:1};return{activeTab:e,state:t,readonlyState:a,shallowState:o,shallowReadonlyState:c,count:l,countSignal:d,doubled:p,plain:m,rows:w(`computed:1:8`,()=>i(()=>[{label:`reactive({ count: 1 })`,value:t,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:a,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:o,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:c,kind:`浅层只读代理`},{label:`ref(1)`,value:l,kind:`ref 句柄`},{label:`signal(1)`,value:d,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:p,kind:`computed 句柄`},{label:`{ count: 1 }`,value:m,kind:`普通对象`}]))}}));return x(e=>{let n=l(),r=c(`rue:component:anchor`);return _(n,r),S(C(D,{children:x(()=>{let e=l(),n=g(`h1`,e);_(e,n),o(n,`text-5xl font-semibold mb-4 md:mb-4`),_(n,p(`isProxy 响应式代理判断`));let r=g(`div`,e);_(e,r),t(r,`role`,`tablist`),o(r,`tabs tabs-box`);let i=g(`button`,r);_(r,i),t(i,`role`,`tab`),v(()=>{o(i,`tab ${O.value===`preview`?`tab-active`:``}`)}),m(i,`click`,()=>{O.value=`preview`}),_(i,p(`效果`));let s=g(`button`,r);_(r,s),t(s,`role`,`tab`),v(()=>{o(s,`tab ${O.value===`code`?`tab-active`:``}`)}),m(s,`click`,()=>{O.value=`code`}),_(s,p(`代码`));let u=g(`div`,e);_(e,u),o(u,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let f=c(`rue:slot:anchor`);_(u,f),v(()=>{let e=O.value===`code`?x(()=>{let e=l(),t=g(`div`,e);_(e,t),o(t,`card bg-base-100 shadow overflow-auto`);let n=g(`div`,t);_(t,n),o(n,`card-body p-0`);let r=c(`rue:component:anchor`);return _(n,r),v(()=>{let e=C(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});b(()=>S(e,n,r))}),e}):``;b(()=>S(e,u,f))}),_(u,p(` `));let h=c(`rue:slot:anchor`);return _(u,h),v(()=>{let e=O.value===`preview`?x(()=>{let e=l(),t=g(`div`,e);_(e,t),o(t,`card bg-base-100 shadow`);let n=g(`div`,t);_(t,n),o(n,`card-body gap-4`);let r=g(`div`,n);_(n,r),o(r,`flex flex-wrap items-center gap-3`);let i=g(`button`,r);_(r,i),o(i,`btn btn-primary`),m(i,`click`,()=>{k.count+=1,N.value+=1}),_(i,p(`count + 1`));let s=g(`div`,r);_(r,s),o(s,`stats shadow-sm border border-base-200`);let u=g(`div`,s);_(s,u),o(u,`stat py-3`);let f=g(`div`,u);_(u,f),o(f,`stat-title`),_(f,p(`reactive count`));let h=g(`div`,u);_(u,h),o(h,`stat-value text-2xl`);let C=c(`rue:slot:anchor`);_(h,C),v(()=>{let e=k.count;b(()=>S(e,h,C))});let w=g(`div`,s);_(s,w),o(w,`stat py-3`);let E=g(`div`,w);_(w,E),o(E,`stat-title`),_(E,p(`computed doubled`));let D=g(`div`,w);_(w,D),o(D,`stat-value text-2xl`);let O=c(`rue:slot:anchor`);_(D,O),v(()=>{let e=F.get();b(()=>S(e,D,O))});let A=g(`div`,n);_(n,A),o(A,`overflow-x-auto`);let j=g(`table`,A);_(A,j),o(j,`table`);let M=g(`thead`,j);_(j,M);let P=g(`tr`,M);_(M,P);let I=g(`th`,P);_(P,I),_(I,p(`值`));let R=g(`th`,P);_(P,R),_(R,p(`类型`));let z=g(`th`,P);_(P,z),_(z,p(`isProxy`));let B=g(`tbody`,j);_(j,B);let V=c(`rue:list:start`),H=c(`rue:list:end`);_(B,V),_(B,H);let U=new Map;return v(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,t,n,r,i)=>{S(x(()=>{let t=l(),n=y(e.value),r=g(`tr`,t);_(t,r);let i=g(`td`,r);_(r,i);let s=g(`code`,i);_(i,s);let u=c(`rue:slot:anchor`);_(s,u),v(()=>{let t=e.label;b(()=>S(t,s,u))});let f=g(`td`,r);_(r,f);let p=c(`rue:slot:anchor`);_(f,p),v(()=>{let t=e.kind;b(()=>S(t,f,p))});let m=g(`td`,r);_(r,m);let h=g(`span`,m);_(m,h),v(()=>{o(h,`badge ${n?`badge-success`:`badge-ghost`}`)});let x=d(h);return _(h,x),v(()=>{a(x,String(n))}),t}),t,n)}})}),e}):``;b(()=>S(e,u,h))}),e})}),n,r),n})};export{O as default};