import{$ as e,Bt as t,Dt as n,Et as r,Ft as i,Ht as a,J as o,Q as s,Rt as c,Tt as l,Xt as u,Y as d,Z as f,_t as p,ct as m,et as h,l as g,mt as _,ot as v,qt as y,s as b,t as x,tt as S,zt as C}from"./vapor-runtime-aZAg0Qkw.js";import{a as w,n as T}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as E}from"./Code-5DOEyGxf.js";import{r as D}from"./SidebarPlaygroundExample-cASgDpH3.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>y(()=>{let e=w(`ref:1:0`,()=>c(`preview`)),i=w(`reactive:1:1`,()=>l({count:1,nested:{ready:!0}})),a=w(`readonly:1:2`,()=>r({count:1})),o=w(`shallowReactive:1:3`,()=>C({nested:{ready:!0}})),s=w(`shallowReadonly:1:4`,()=>n({nested:{ready:!0}})),u=w(`ref:1:5`,()=>c(1)),d=w(`signal:1:6`,()=>t(1)),f=w(`computed:1:7`,()=>p(()=>u.value*2)),m={count:1};return{activeTab:e,state:i,readonlyState:a,shallowState:o,shallowReadonlyState:s,count:u,countSignal:d,doubled:f,plain:m,rows:[{label:`reactive({ count: 1 })`,value:i,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:a,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:o,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:s,kind:`浅层只读代理`},{label:`ref(1)`,value:u,kind:`ref 句柄`},{label:`signal(1)`,value:d,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:f,kind:`computed 句柄`},{label:`{ count: 1 }`,value:m,kind:`普通对象`}]}}));return g(t=>{let n=s(),r=f(`rue:component:anchor`);return d(n,r),b(x(D,{children:g(()=>{let t=s(),n=e(`h1`,t);d(t,n),m(n,`text-5xl font-semibold mb-4 md:mb-4`),d(n,h(`isProxy 响应式代理判断`));let r=e(`div`,t);d(t,r),v(r,`role`,`tablist`),m(r,`tabs tabs-box`);let c=e(`button`,r);d(r,c),v(c,`role`,`tab`),u(()=>{m(c,String(`tab ${O.value===`preview`?`tab-active`:``}`))}),o(c,`click`,()=>{O.value=`preview`}),d(c,h(`效果`));let l=e(`button`,r);d(r,l),v(l,`role`,`tab`),u(()=>{m(l,String(`tab ${O.value===`code`?`tab-active`:``}`))}),o(l,`click`,()=>{O.value=`code`}),d(l,h(`代码`));let p=e(`div`,t);d(t,p),m(p,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let y=f(`rue:slot:anchor`);d(p,y),u(()=>{let t=O.value===`code`?g(()=>{let t=s(),n=e(`div`,t);d(t,n),m(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);d(n,r),m(r,`card-body p-0`);let i=f(`rue:component:anchor`);return d(r,i),u(()=>{let e=x(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});a(()=>b(e,r,i))}),t}):``;a(()=>b(t,p,y))}),d(p,h(` `));let C=f(`rue:slot:anchor`);return d(p,C),u(()=>{let t=O.value===`preview`?g(()=>{let t=s(),n=e(`div`,t);d(t,n),m(n,`card bg-base-100 shadow`);let r=e(`div`,n);d(n,r),m(r,`card-body gap-4`);let c=e(`div`,r);d(r,c),m(c,`flex flex-wrap items-center gap-3`);let l=e(`button`,c);d(c,l),m(l,`btn btn-primary`),o(l,`click`,()=>{k.count+=1,N.value+=1}),d(l,h(`count + 1`));let p=e(`div`,c);d(c,p),m(p,`stats shadow-sm border border-base-200`);let v=e(`div`,p);d(p,v),m(v,`stat py-3`);let y=e(`div`,v);d(v,y),m(y,`stat-title`),d(y,h(`reactive count`));let x=e(`div`,v);d(v,x),m(x,`stat-value text-2xl`);let C=f(`rue:slot:anchor`);d(x,C),u(()=>{let e=k.count;a(()=>b(e,x,C))});let w=e(`div`,p);d(p,w),m(w,`stat py-3`);let E=e(`div`,w);d(w,E),m(E,`stat-title`),d(E,h(`computed doubled`));let D=e(`div`,w);d(w,D),m(D,`stat-value text-2xl`);let O=S(D);d(D,O),u(()=>{_(O,F.get())});let A=e(`div`,r);d(r,A),m(A,`overflow-x-auto`);let j=e(`table`,A);d(A,j),m(j,`table`);let M=e(`thead`,j);d(j,M);let P=e(`tr`,M);d(M,P);let I=e(`th`,P);d(P,I),d(I,h(`值`));let R=e(`th`,P);d(P,R),d(R,h(`类型`));let z=e(`th`,P);d(P,z),d(z,h(`isProxy`));let B=e(`tbody`,j);d(j,B);let V=f(`rue:list:start`),H=f(`rue:list:end`);d(B,V),d(B,H);let U=new Map;return u(()=>{U=T({items:L||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,n,r,o,c)=>{b(g(()=>{let n=s(),r=i(t.value),o=e(`tr`,n);d(n,o);let c=e(`td`,o);d(o,c);let l=e(`code`,c);d(c,l);let p=f(`rue:slot:anchor`);d(l,p),u(()=>{let e=t.label;a(()=>b(e,l,p))});let h=e(`td`,o);d(o,h);let g=f(`rue:slot:anchor`);d(h,g),u(()=>{let e=t.kind;a(()=>b(e,h,g))});let v=e(`td`,o);d(o,v);let y=e(`span`,v);d(v,y),u(()=>{m(y,String(`badge ${r?`badge-success`:`badge-ghost`}`))});let x=S(y);return d(y,x),u(()=>{_(x,String(r))}),n}),n,r)}})}),t}):``;a(()=>b(t,p,C))}),t})}),n,r),n})};export{O as default};