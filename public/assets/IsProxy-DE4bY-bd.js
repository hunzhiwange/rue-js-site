import{$ as e,Bt as t,Dt as n,Et as r,It as i,Ot as a,Q as o,Qt as s,Vt as c,Wt as l,X as u,Y as d,Yt as f,et as p,ht as m,l as h,lt as g,nt as _,o as v,st as y,t as b,tt as x,vt as S,zt as C}from"./vapor-runtime-CXIalONM.js";import{a as w,n as T}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as E}from"./Code-BIscIyEp.js";import{r as D}from"./SidebarPlaygroundExample-CEz1fABX.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>f(()=>{let e=w(`ref:1:0`,()=>C(`preview`)),i=w(`reactive:1:1`,()=>r({count:1,nested:{ready:!0}})),o=w(`readonly:1:2`,()=>n({count:1})),s=w(`shallowReactive:1:3`,()=>t({nested:{ready:!0}})),l=w(`shallowReadonly:1:4`,()=>a({nested:{ready:!0}})),u=w(`ref:1:5`,()=>C(1)),d=w(`signal:1:6`,()=>c(1)),f=w(`computed:1:7`,()=>S(()=>u.value*2)),p={count:1};return{activeTab:e,state:i,readonlyState:o,shallowState:s,shallowReadonlyState:l,count:u,countSignal:d,doubled:f,plain:p,rows:w(`computed:1:8`,()=>S(()=>[{label:`reactive({ count: 1 })`,value:i,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:o,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:s,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:l,kind:`浅层只读代理`},{label:`ref(1)`,value:u,kind:`ref 句柄`},{label:`signal(1)`,value:d,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:f,kind:`computed 句柄`},{label:`{ count: 1 }`,value:p,kind:`普通对象`}]))}}));return h(t=>{let n=e(),r=o(`rue:component:anchor`);return u(n,r),v(b(D,{children:h(()=>{let t=e(),n=p(`h1`,t);u(t,n),g(n,`text-5xl font-semibold mb-4 md:mb-4`),u(n,x(`isProxy 响应式代理判断`));let r=p(`div`,t);u(t,r),y(r,`role`,`tablist`),g(r,`tabs tabs-box`);let a=p(`button`,r);u(r,a),y(a,`role`,`tab`),s(()=>{g(a,`tab ${O.value===`preview`?`tab-active`:``}`)}),d(a,`click`,()=>{O.value=`preview`}),u(a,x(`效果`));let c=p(`button`,r);u(r,c),y(c,`role`,`tab`),s(()=>{g(c,`tab ${O.value===`code`?`tab-active`:``}`)}),d(c,`click`,()=>{O.value=`code`}),u(c,x(`代码`));let f=p(`div`,t);u(t,f),g(f,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=o(`rue:slot:anchor`);u(f,S),s(()=>{let t=O.value===`code`?h(()=>{let t=e(),n=p(`div`,t);u(t,n),g(n,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,n);u(n,r),g(r,`card-body p-0`);let i=o(`rue:component:anchor`);return u(r,i),s(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});l(()=>v(e,r,i))}),t}):``;l(()=>v(t,f,S))}),u(f,x(` `));let C=o(`rue:slot:anchor`);return u(f,C),s(()=>{let t=O.value===`preview`?h(()=>{let t=e(),n=p(`div`,t);u(t,n),g(n,`card bg-base-100 shadow`);let r=p(`div`,n);u(n,r),g(r,`card-body gap-4`);let a=p(`div`,r);u(r,a),g(a,`flex flex-wrap items-center gap-3`);let c=p(`button`,a);u(a,c),g(c,`btn btn-primary`),d(c,`click`,()=>{k.count+=1,N.value+=1}),u(c,x(`count + 1`));let f=p(`div`,a);u(a,f),g(f,`stats shadow-sm border border-base-200`);let y=p(`div`,f);u(f,y),g(y,`stat py-3`);let b=p(`div`,y);u(y,b),g(b,`stat-title`),u(b,x(`reactive count`));let S=p(`div`,y);u(y,S),g(S,`stat-value text-2xl`);let C=o(`rue:slot:anchor`);u(S,C),s(()=>{let e=k.count;l(()=>v(e,S,C))});let w=p(`div`,f);u(f,w),g(w,`stat py-3`);let E=p(`div`,w);u(w,E),g(E,`stat-title`),u(E,x(`computed doubled`));let D=p(`div`,w);u(w,D),g(D,`stat-value text-2xl`);let O=o(`rue:slot:anchor`);u(D,O),s(()=>{let e=F.get();l(()=>v(e,D,O))});let A=p(`div`,r);u(r,A),g(A,`overflow-x-auto`);let j=p(`table`,A);u(A,j),g(j,`table`);let M=p(`thead`,j);u(j,M);let P=p(`tr`,M);u(M,P);let I=p(`th`,P);u(P,I),u(I,x(`值`));let R=p(`th`,P);u(P,R),u(R,x(`类型`));let z=p(`th`,P);u(P,z),u(z,x(`isProxy`));let B=p(`tbody`,j);u(j,B);let V=o(`rue:list:start`),H=o(`rue:list:end`);u(B,V),u(B,H);let U=new Map;return s(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,n,r,a,c)=>{v(h(()=>{let n=e(),r=i(t.value),a=p(`tr`,n);u(n,a);let c=p(`td`,a);u(a,c);let d=p(`code`,c);u(c,d);let f=o(`rue:slot:anchor`);u(d,f),s(()=>{let e=t.label;l(()=>v(e,d,f))});let h=p(`td`,a);u(a,h);let y=o(`rue:slot:anchor`);u(h,y),s(()=>{let e=t.kind;l(()=>v(e,h,y))});let b=p(`td`,a);u(a,b);let x=p(`span`,b);u(b,x),s(()=>{g(x,`badge ${r?`badge-success`:`badge-ghost`}`)});let S=_(x);return u(x,S),s(()=>{m(S,String(r))}),n}),n,r)}})}),t}):``;l(()=>v(t,f,C))}),t})}),n,r),n})};export{O as default};