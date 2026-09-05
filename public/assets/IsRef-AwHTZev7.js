import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,S as c,Sn as l,V as u,Vt as d,W as f,Wt as p,_n as m,bn as h,en as g,fn as _,gn as v,hn as y,nn as b,nt as x,ot as S,pn as C,qt as w,sn as T,wn as E,x as D}from"./rue-runtime-CwEGJ854.js";import{t as O}from"./Code-DUvGro8N.js";import{r as k}from"./SidebarPlaygroundExample-EGR0CyDT.js";var A=m(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isRef 判定示例</h1>`),j=m(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=m(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),N=`import {
  computed,
  isRef,
  reactive,
  ref,
  shallowRef,
  toRef,
  type FC,
} from '@rue-js/rue'

const IsRefDemo: FC = () => {
  const count = ref(1)
  const shallow = shallowRef({ label: 'shallow' })
  const state = reactive({ name: 'Rue' })
  const nameRef = toRef(state, 'name')
  const doubled = computed(() => count.value * 2)
  const plain = { value: 'looks like a ref' }

  return (
    <div>
      <button onClick={() => count.value++}>count + 1</button>
      <button onClick={() => (state.name = state.name === 'Rue' ? 'Vapor' : 'Rue')}>
        toggle name
      </button>

      <ul>
        <li>ref: {String(isRef(count))}, count = {count.value}</li>
        <li>shallowRef: {String(isRef(shallow))}, label = {shallow.value.label}</li>
        <li>computed: {String(isRef(doubled))}, doubled = {doubled.get()}</li>
        <li>toRef: {String(isRef(nameRef))}, name = {nameRef.value}</li>
        <li>plain object: {String(isRef(plain))}</li>
      </ul>
    </div>
  )
}

export default IsRefDemo`,P=()=>{let{activeTab:m,count:P,shallow:F,state:I,nameRef:L,doubled:R,plain:z,rows:B}=w(`useSetup:0:0`,()=>p(()=>{let t=e(`preview`),n=e(1),r=d({label:`shallow`}),i=b({name:`Rue`}),a=T(i,`name`),o=l(()=>n.value*2),s={value:`looks like a ref`};return{activeTab:t,count:n,shallow:r,state:i,nameRef:a,doubled:o,plain:s,rows:l(()=>[{name:`ref(count)`,kind:`可写 ref`,result:g(n),value:n.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:g(r),value:r.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:g(o),value:o.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:g(a),value:a.value},{name:`{ value: ... }`,kind:`普通对象`,result:g(s),value:s.value},{name:`reactive({ name })`,kind:`响应式对象`,result:g(i),value:i.name}])}}));return i(k,()=>({children:[(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=x();return t.appendChild(A().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=x(),n=j().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),S(i,`role`,`tab`),E(()=>{o(i,`tab ${m.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{m.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),s(()=>i.removeEventListener(`click`,c)),S(a,`role`,`tab`),E(()=>{o(a,`tab ${m.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{m.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,i,o)=>D(e,o,()=>r(Object.assign(e=>{let i=x(),o=M().content.cloneNode(!0),s=o.firstChild,l=s.childNodes[0],d=l.parentNode,p=s.childNodes[1],g=p.parentNode;return i.appendChild(o),u(d,l,()=>{let e=m.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=y(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=y(`div`,t);return _(t,n),n.className=`card-body p-0`,a(n,O,()=>({className:`h-full`,lang:`tsx`,code:N})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(g,p,()=>{let e=m.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let i=y(`div`,e);i.className=`card bg-base-100 shadow`;let a=y(`div`,i);_(i,a),a.className=`card-body gap-5`;let o=y(`div`,a);_(a,o),o.className=`flex flex-wrap gap-3`;let s=y(`button`,o);_(o,s),s.className=`btn btn-primary`;let l=e=>{let t=()=>{P.value+=1};typeof t==`function`&&t(e)};s.addEventListener(`click`,l),n(()=>s.removeEventListener(`click`,l)),_(s,v(`count + 1`));let u=y(`button`,o);_(o,u),u.className=`btn`;let d=e=>{let t=()=>{I.name=I.name===`Rue`?`Vapor`:`Rue`};typeof t==`function`&&t(e)};u.addEventListener(`click`,d),n(()=>u.removeEventListener(`click`,d)),_(u,v(`切换 name`));let p=y(`button`,o);_(o,p),p.className=`btn`;let m=e=>{let t=()=>{F.value={label:F.value.label===`shallow`?`changed`:`shallow`}};typeof t==`function`&&t(e)};p.addEventListener(`click`,m),n(()=>p.removeEventListener(`click`,m)),_(p,v(`替换 shallowRef.value`));let g=y(`div`,a);_(a,g),g.className=`overflow-x-auto`;let b=y(`table`,g);_(g,b),b.className=`table`;let x=y(`thead`,b);_(b,x);let S=y(`tr`,x);_(x,S);let w=y(`th`,S);_(S,w),_(w,v(`表达式`));let T=y(`th`,S);_(S,T),_(T,v(`类型`));let O=y(`th`,S);_(S,O),_(O,v(`isRef`));let k=y(`th`,S);_(S,k),_(k,v(`当前值`));let A=y(`tbody`,b);_(b,A);let j=C(`rue:list:end`);_(A,j);let M=[];return E(()=>{let e=B.get()||[];M=t(A,j,M,e,(e,t)=>t,(e,t)=>{let n=f(e),i=f(t);return c((e,t,i)=>D(e,i,()=>r(Object.assign(e=>{let t=y(`tr`,e),r=y(`td`,t);_(t,r);let i=y(`code`,r);_(r,i);let a=v(``);_(i,a),h(a,()=>n.get().name);let o=y(`td`,t);_(t,o);let s=v(``);_(o,s),h(s,()=>n.get().kind);let c=y(`td`,t);_(t,c);let l=y(`span`,c);_(c,l);let u;E(()=>{let e=`badge ${n.get().result?`badge-success`:`badge-ghost`}`,t=e==null?``:String(e);Object.is(u,t)||(u=t,l.className=t)});let d=v(``);_(l,d),h(d,()=>String(n.get().result));let f=y(`td`,t);_(t,f);let p=v(``);return _(f,p),h(p,()=>String(n.get().value)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]}))};export{P as default};