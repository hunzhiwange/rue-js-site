import{Bt as e,Dn as t,Et as n,K as r,L as i,Lt as a,Mt as o,On as s,Sn as c,V as l,X as u,Y as d,Zt as f,_n as p,_t as m,an as h,at as g,fn as _,gn as v,hn as y,ht as b,in as x,it as S,kn as C,nn as w,nt as T,pt as E,q as D,rn as O,rt as k,tt as A,wn as j,z as M}from"./rue-runtime-CwEGJ854.js";import{t as N}from"./Code-B3jCYMAr.js";import{r as P}from"./SidebarPlaygroundExample-EGR0CyDT.js";var F=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isProxy 响应式代理判断</h1>`),I=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=p(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=()=>{let p=e(`preview`),R=w({count:1,nested:{ready:!0}}),z=O({count:1}),B=x({nested:{ready:!0}}),V=h({nested:{ready:!0}}),H=e(1),U=s(1),W=c(()=>H.value*2),G=[{label:`reactive({ count: 1 })`,value:R,kind:`响应式代理`},{label:`readonly({ count: 1 })`,value:z,kind:`只读代理`},{label:`shallowReactive({ nested })`,value:B,kind:`浅层代理`},{label:`shallowReadonly({ nested })`,value:V,kind:`浅层只读代理`},{label:`ref(1)`,value:H,kind:`ref 句柄`},{label:`signal(1)`,value:U,kind:`signal 句柄`},{label:`computed(() => count.value * 2)`,value:W,kind:`computed 句柄`},{label:`{ count: 1 }`,value:{count:1},kind:`普通对象`}];return o(()=>D((()=>{let e=b(()=>{let e=T(),t=L().content.cloneNode(!0),o=t.firstChild,s=o.childNodes[0],c=s.parentNode,m=o.childNodes[1],h=m.parentNode;return e.appendChild(t),l(c,s,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=y(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=y(`div`,t);return _(t,n),n.className=`card-body p-0`,r(n,N,()=>({className:`h-full`,lang:`tsx`,code:`import {
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

export default IsProxy;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),j(()=>{let e=p.value===`preview`?b(()=>{let e=T(),t=k(`div`,e);u(e,t),i(t,`card bg-base-100 shadow`);let n=k(`div`,t);u(t,n),i(n,`card-body gap-4`);let r=k(`div`,n);u(n,r),i(r,`flex flex-wrap items-center gap-3`);let o=k(`button`,r);u(r,o),i(o,`btn btn-primary`);let s=e=>{let t=()=>{R.count+=1,H.value+=1};typeof t==`function`&&t(e)};o.addEventListener(`click`,s),a(()=>o.removeEventListener(`click`,s)),u(o,S(`count + 1`));let c=k(`div`,r);u(r,c),i(c,`stats shadow-sm border border-base-200`);let l=k(`div`,c);u(c,l),i(l,`stat py-3`);let p=k(`div`,l);u(l,p),i(p,`stat-title`),u(p,S(`reactive count`));let m=k(`div`,l);u(l,m),i(m,`stat-value text-2xl`);let h=A(`rue:slot:anchor`);u(m,h),j(()=>{let e=R.count;C(()=>d(e,m,h))});let _=k(`div`,c);u(c,_),i(_,`stat py-3`);let v=k(`div`,_);u(_,v),i(v,`stat-title`),u(v,S(`computed doubled`));let y=k(`div`,_);u(_,y),i(y,`stat-value text-2xl`);let x=A(`rue:slot:anchor`);u(y,x),j(()=>{let e=W.get();C(()=>d(e,y,x))});let w=k(`div`,n);u(n,w),i(w,`overflow-x-auto`);let D=k(`table`,w);u(w,D),i(D,`table`);let O=k(`thead`,D);u(D,O);let M=k(`tr`,O);u(O,M);let N=k(`th`,M);u(M,N),u(N,S(`值`));let P=k(`th`,M);u(M,P),u(P,S(`类型`));let F=k(`th`,M);u(M,F),u(F,S(`isProxy`));let I=k(`tbody`,D);u(D,I);let L=A(`rue:slot:anchor`);return u(I,L),j(()=>{let e=G.map(e=>{let t=f(e.value);return b(n=>{let r=k(`tr`,n),a=k(`td`,r);u(r,a);let o=k(`code`,a);u(a,o);let s=A(`rue:slot:anchor`);u(o,s),j(()=>{let t=e.label;C(()=>d(t,o,s))});let c=k(`td`,r);u(r,c);let l=A(`rue:slot:anchor`);u(c,l),j(()=>{let t=e.kind;C(()=>d(t,c,l))});let f=k(`td`,r);u(r,f);let p=k(`span`,f);u(f,p),j(()=>{i(p,`badge ${t?`badge-success`:`badge-ghost`}`)});let m=g(p);return u(p,m),j(()=>{E(m,String(t))}),r})});C(()=>d(e,I,L))}),e},!0):``;C(()=>d(e,h,m))}),e});return m(P,()=>({children:[n(e=>F().content.cloneNode(!0).firstChild),n(Object.assign(e=>{let n=I().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;j(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{p.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;j(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{p.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e]}))})(),e=>M(()=>{})))};export{R as default};