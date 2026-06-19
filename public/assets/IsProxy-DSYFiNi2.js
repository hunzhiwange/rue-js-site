import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,Ht as a,Lt as o,Ot as s,Vt as c,X as l,Xt as u,Z as d,ct as f,et as p,gt as m,kt as h,l as g,nt as _,o as v,rt as y,t as b,tt as x,ut as S,yt as C}from"./vapor-runtime-CKrmRMZX.js";import{a as w,n as T}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as E}from"./Code-D5UqTwV6.js";import{r as D}from"./SidebarPlaygroundExample-D2vGHFCu.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>u(()=>{let e=w(`ref:1:0`,()=>n(`preview`)),t=w(`reactive:1:1`,()=>r({count:1,nested:{ready:!0}})),i=w(`readonly:1:2`,()=>s({count:1})),o=w(`shallowReactive:1:3`,()=>c({nested:{ready:!0}})),l=w(`shallowReadonly:1:4`,()=>h({nested:{ready:!0}})),u=w(`ref:1:5`,()=>n(1)),d=w(`signal:1:6`,()=>a(1)),f=w(`computed:1:7`,()=>C(()=>u.value*2)),p={count:1};return{activeTab:e,state:t,readonlyState:i,shallowState:o,shallowReadonlyState:l,count:u,countSignal:d,doubled:f,plain:p,rows:w(`computed:1:8`,()=>C(()=>[{label:`reactive({ count: 1 })`,value:t,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:i,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:o,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:l,kind:`浅层只读代理`},{label:`ref(1)`,value:u,kind:`ref 句柄`},{label:`signal(1)`,value:d,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:f,kind:`computed 句柄`},{label:`{ count: 1 }`,value:p,kind:`普通对象`}]))}}));return g(n=>{let r=p(),a=e(`rue:component:anchor`);return d(r,a),v(b(D,{children:g(()=>{let n=p(),r=x(`h1`,n);d(n,r),S(r,`text-5xl font-semibold mb-4 md:mb-4`),d(r,_(`isProxy 响应式代理判断`));let a=x(`div`,n);d(n,a),f(a,`role`,`tablist`),S(a,`tabs tabs-box`);let s=x(`button`,a);d(a,s),f(s,`role`,`tab`),t(()=>{S(s,`tab ${O.value===`preview`?`tab-active`:``}`)}),l(s,`click`,()=>{O.value=`preview`}),d(s,_(`效果`));let c=x(`button`,a);d(a,c),f(c,`role`,`tab`),t(()=>{S(c,`tab ${O.value===`code`?`tab-active`:``}`)}),l(c,`click`,()=>{O.value=`code`}),d(c,_(`代码`));let u=x(`div`,n);d(n,u),S(u,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let h=e(`rue:slot:anchor`);d(u,h),t(()=>{let n=O.value===`code`?g(()=>{let n=p(),r=x(`div`,n);d(n,r),S(r,`card bg-base-100 shadow overflow-auto`);let a=x(`div`,r);d(r,a),S(a,`card-body p-0`);let o=e(`rue:component:anchor`);return d(a,o),t(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});i(()=>v(e,a,o))}),n}):``;i(()=>v(n,u,h))}),d(u,_(` `));let C=e(`rue:slot:anchor`);return d(u,C),t(()=>{let n=O.value===`preview`?g(()=>{let n=p(),r=x(`div`,n);d(n,r),S(r,`card bg-base-100 shadow`);let a=x(`div`,r);d(r,a),S(a,`card-body gap-4`);let s=x(`div`,a);d(a,s),S(s,`flex flex-wrap items-center gap-3`);let c=x(`button`,s);d(s,c),S(c,`btn btn-primary`),l(c,`click`,()=>{k.count+=1,N.value+=1}),d(c,_(`count + 1`));let u=x(`div`,s);d(s,u),S(u,`stats shadow-sm border border-base-200`);let f=x(`div`,u);d(u,f),S(f,`stat py-3`);let h=x(`div`,f);d(f,h),S(h,`stat-title`),d(h,_(`reactive count`));let b=x(`div`,f);d(f,b),S(b,`stat-value text-2xl`);let C=e(`rue:slot:anchor`);d(b,C),t(()=>{let e=k.count;i(()=>v(e,b,C))});let w=x(`div`,u);d(u,w),S(w,`stat py-3`);let E=x(`div`,w);d(w,E),S(E,`stat-title`),d(E,_(`computed doubled`));let D=x(`div`,w);d(w,D),S(D,`stat-value text-2xl`);let O=e(`rue:slot:anchor`);d(D,O),t(()=>{let e=F.get();i(()=>v(e,D,O))});let A=x(`div`,a);d(a,A),S(A,`overflow-x-auto`);let j=x(`table`,A);d(A,j),S(j,`table`);let M=x(`thead`,j);d(j,M);let P=x(`tr`,M);d(M,P);let I=x(`th`,P);d(P,I),d(I,_(`值`));let R=x(`th`,P);d(P,R),d(R,_(`类型`));let z=x(`th`,P);d(P,z),d(z,_(`isProxy`));let B=x(`tbody`,j);d(j,B);let V=e(`rue:list:start`),H=e(`rue:list:end`);d(B,V),d(B,H);let U=new Map;return t(()=>{U=T({items:L.get()||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(n,r,a,s,c)=>{v(g(()=>{let r=p(),a=o(n.value),s=x(`tr`,r);d(r,s);let c=x(`td`,s);d(s,c);let l=x(`code`,c);d(c,l);let u=e(`rue:slot:anchor`);d(l,u),t(()=>{let e=n.label;i(()=>v(e,l,u))});let f=x(`td`,s);d(s,f);let h=e(`rue:slot:anchor`);d(f,h),t(()=>{let e=n.kind;i(()=>v(e,f,h))});let g=x(`td`,s);d(s,g);let _=x(`span`,g);d(g,_),t(()=>{S(_,`badge ${a?`badge-success`:`badge-ghost`}`)});let b=y(_);return d(_,b),t(()=>{m(b,String(a))}),r}),r,a)}})}),n}):``;i(()=>v(n,u,C))}),n})}),r,a),r})};export{O as default};