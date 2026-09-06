import{At as e,B as t,Dn as n,H as r,I as i,Mt as a,On as o,Ot as s,P as c,Q as l,Qt as u,U as d,Vt as f,_n as p,_t as m,bt as h,ct as g,dt as _,et as v,gn as y,gt as b,kn as x,nt as S,pn as C,qt as w,st as T,tn as E,ut as D,vn as O,vt as k,wn as A,yt as j,z as M}from"./rue-runtime-HIMg8Lz8.js";import{t as N}from"./Code-DpH7u0gk.js";import{r as P}from"./SidebarPlaygroundExample-BCPRe0hA.js";var F=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isProxy 响应式代理判断</h1>`),I=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=()=>{let O=E(`preview`),R=M({count:1,nested:{ready:!0}}),z=t({count:1}),B=r({nested:{ready:!0}}),V=d({nested:{ready:!0}}),H=E(1),U=o(1),W=c(()=>H.value*2),G=[{label:`reactive({ count: 1 })`,value:R,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:z,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:B,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:V,kind:`浅层只读代理`},{label:`ref(1)`,value:H,kind:`ref 句柄`},{label:`signal(1)`,value:U,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:W,kind:`computed 句柄`},{label:`{ count: 1 }`,value:{count:1},kind:`普通对象`}];return w(()=>g((()=>{let t=e(()=>{let t=m(),n=L().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0],o=a.parentNode,c=r.childNodes[1],d=c.parentNode;return t.appendChild(n),S(o,a,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=y(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=y(`div`,t);return C(t,n),n.className=`card-body p-0`,T(n,N,()=>({className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>f(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),A(()=>{let t=O.value===`preview`?e(()=>{let t=m(),n=k(`div`,t);_(t,n),l(n,`card bg-base-100 shadow`);let r=k(`div`,n);_(n,r),l(r,`card-body gap-4`);let a=k(`div`,r);_(r,a),l(a,`flex flex-wrap items-center gap-3`);let o=k(`button`,a);_(a,o),l(o,`btn btn-primary`);let c=e=>{let t=()=>{R.count+=1,H.value+=1};typeof t==`function`&&t(e)};o.addEventListener(`click`,c),u(()=>o.removeEventListener(`click`,c)),_(o,j(`count + 1`));let d=k(`div`,a);_(a,d),l(d,`stats shadow-sm border border-base-200`);let f=k(`div`,d);_(d,f),l(f,`stat py-3`);let p=k(`div`,f);_(f,p),l(p,`stat-title`),_(p,j(`reactive count`));let g=k(`div`,f);_(f,g),l(g,`stat-value text-2xl`);let v=b(`rue:slot:anchor`);_(g,v),A(()=>{let e=R.count;x(()=>D(e,g,v))});let y=k(`div`,d);_(d,y),l(y,`stat py-3`);let S=k(`div`,y);_(y,S),l(S,`stat-title`),_(S,j(`computed doubled`));let C=k(`div`,y);_(y,C),l(C,`stat-value text-2xl`);let w=b(`rue:slot:anchor`);_(C,w),A(()=>{let e=W.get();x(()=>D(e,C,w))});let T=k(`div`,r);_(r,T),l(T,`overflow-x-auto`);let E=k(`table`,T);_(T,E),l(E,`table`);let O=k(`thead`,E);_(E,O);let M=k(`tr`,O);_(O,M);let N=k(`th`,M);_(M,N),_(N,j(`值`));let P=k(`th`,M);_(M,P),_(P,j(`类型`));let F=k(`th`,M);_(M,F),_(F,j(`isProxy`));let I=k(`tbody`,E);_(E,I);let L=b(`rue:slot:anchor`);return _(I,L),A(()=>{let t=G.map(t=>{let n=i(t.value);return e(e=>{let r=k(`tr`,e),i=k(`td`,r);_(r,i);let a=k(`code`,i);_(i,a);let o=b(`rue:slot:anchor`);_(a,o),A(()=>{let e=t.label;x(()=>D(e,a,o))});let c=k(`td`,r);_(r,c);let u=b(`rue:slot:anchor`);_(c,u),A(()=>{let e=t.kind;x(()=>D(e,c,u))});let d=k(`td`,r);_(r,d);let f=k(`span`,d);_(d,f),A(()=>{l(f,`badge ${n?`badge-success`:`badge-ghost`}`)});let p=h(f);return _(f,p),A(()=>{s(p,String(n))}),r})});x(()=>D(t,I,L))}),t},!0):``;x(()=>D(t,d,c))}),t});return a(P,()=>({children:[f(e=>F().content.cloneNode(!0).firstChild),f(Object.assign(e=>{let t=I().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;A(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{O.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;A(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{O.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),t]}))})(),e=>v(()=>{})))};export{R as default};