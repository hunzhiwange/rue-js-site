import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Nt as a,Q as o,Rt as s,Tt as c,Vt as l,Y as u,Yt as d,Z as f,ct as p,d as m,et as h,gt as g,l as _,mt as v,ot as y,t as b,tt as x,wt as S,zt as C}from"./vapor-runtime-BR_2rwNk.js";import{a as w,n as T}from"./vapor-helpers-vapor-DkadWylb.js";import{t as E}from"./Code-B_4lzH85.js";import{t as D}from"./SidebarPlaygroundExample-CtM-WHq_.js";var O=()=>{let{activeTab:O,state:k,readonlyState:A,shallowState:j,shallowReadonlyState:M,count:N,countSignal:P,doubled:F,plain:I,rows:L}=w(`useSetup:0:0`,()=>r(()=>{let e=w(`ref:1:0`,()=>i(`preview`)),n=w(`reactive:1:1`,()=>t({count:1,nested:{ready:!0}})),r=w(`readonly:1:2`,()=>S({count:1})),a=w(`shallowReactive:1:3`,()=>s({nested:{ready:!0}})),o=w(`shallowReadonly:1:4`,()=>c({nested:{ready:!0}})),l=w(`ref:1:5`,()=>i(1)),u=w(`signal:1:6`,()=>C(1)),d=w(`computed:1:7`,()=>g(()=>l.value*2)),f={count:1};return{activeTab:e,state:n,readonlyState:r,shallowState:a,shallowReadonlyState:o,count:l,countSignal:u,doubled:d,plain:f,rows:[{label:`reactive({ count: 1 })`,value:n,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:r,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:a,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:o,kind:`浅层只读代理`},{label:`ref(1)`,value:l,kind:`ref 句柄`},{label:`signal(1)`,value:u,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:d,kind:`computed 句柄`},{label:`{ count: 1 }`,value:f,kind:`普通对象`}]}}));return m(t=>{let r=o(),i=f(`rue:component:anchor`);return u(r,i),_(b(D,{children:m(()=>{let t=o(),r=e(`h1`,t);u(t,r),p(r,`text-5xl font-semibold mb-4 md:mb-4`),u(r,h(`isProxy 响应式代理判断`));let i=e(`div`,t);u(t,i),y(i,`role`,`tablist`),p(i,`tabs tabs-box`);let s=e(`button`,i);u(i,s),y(s,`role`,`tab`),d(()=>{p(s,String(`tab ${O.value===`preview`?`tab-active`:``}`))}),n(s,`click`,()=>{O.value=`preview`}),u(s,h(`效果`));let c=e(`button`,i);u(i,c),y(c,`role`,`tab`),d(()=>{p(c,String(`tab ${O.value===`code`?`tab-active`:``}`))}),n(c,`click`,()=>{O.value=`code`}),u(c,h(`代码`));let g=e(`div`,t);u(t,g),p(g,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=f(`rue:slot:anchor`);u(g,S),d(()=>{let t=O.value===`code`?m(()=>{let t=o(),n=e(`div`,t);u(t,n),p(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);u(n,r),p(r,`card-body p-0`);let i=f(`rue:component:anchor`);return u(r,i),d(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`});l(()=>_(e,r,i))}),t}):``;l(()=>_(t,g,S))}),u(g,h(` `));let C=f(`rue:slot:anchor`);return u(g,C),d(()=>{let t=O.value===`preview`?m(()=>{let t=o(),r=e(`div`,t);u(t,r),p(r,`card bg-base-100 shadow`);let i=e(`div`,r);u(r,i),p(i,`card-body gap-4`);let s=e(`div`,i);u(i,s),p(s,`flex flex-wrap items-center gap-3`);let c=e(`button`,s);u(s,c),p(c,`btn btn-primary`),n(c,`click`,()=>{k.count+=1,N.value+=1}),u(c,h(`count + 1`));let g=e(`div`,s);u(s,g),p(g,`stats shadow-sm border border-base-200`);let y=e(`div`,g);u(g,y),p(y,`stat py-3`);let b=e(`div`,y);u(y,b),p(b,`stat-title`),u(b,h(`reactive count`));let S=e(`div`,y);u(y,S),p(S,`stat-value text-2xl`);let C=f(`rue:slot:anchor`);u(S,C),d(()=>{let e=k.count;l(()=>_(e,S,C))});let w=e(`div`,g);u(g,w),p(w,`stat py-3`);let E=e(`div`,w);u(w,E),p(E,`stat-title`),u(E,h(`computed doubled`));let D=e(`div`,w);u(w,D),p(D,`stat-value text-2xl`);let O=x(D);u(D,O),d(()=>{v(O,F.get())});let A=e(`div`,i);u(i,A),p(A,`overflow-x-auto`);let j=e(`table`,A);u(A,j),p(j,`table`);let M=e(`thead`,j);u(j,M);let P=e(`tr`,M);u(M,P);let I=e(`th`,P);u(P,I),u(I,h(`值`));let R=e(`th`,P);u(P,R),u(R,h(`类型`));let z=e(`th`,P);u(P,z),u(z,h(`isProxy`));let B=e(`tbody`,j);u(j,B);let V=f(`rue:list:start`),H=f(`rue:list:end`);u(B,V),u(B,H);let U=new Map;return d(()=>{U=T({items:L||[],getKey:(e,t)=>t,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,n,r,i,s)=>{_(m(()=>{let n=o(),r=a(t.value),i=e(`tr`,n);u(n,i);let s=e(`td`,i);u(i,s);let c=e(`code`,s);u(s,c);let m=f(`rue:slot:anchor`);u(c,m),d(()=>{let e=t.label;l(()=>_(e,c,m))});let h=e(`td`,i);u(i,h);let g=f(`rue:slot:anchor`);u(h,g),d(()=>{let e=t.kind;l(()=>_(e,h,g))});let y=e(`td`,i);u(i,y);let b=e(`span`,y);u(y,b),d(()=>{p(b,String(`badge ${r?`badge-success`:`badge-ghost`}`))});let S=x(b);return u(b,S),d(()=>{v(S,String(r))}),n}),n,r)}})}),t}):``;l(()=>_(t,g,C))}),t})}),r,i),r})};export{O as default};