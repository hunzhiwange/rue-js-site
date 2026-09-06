import{C as e,Dn as t,E as n,G as r,P as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,at as u,b as d,gn as f,in as p,mn as m,nn as h,nt as g,pn as _,rt as v,sn as y,st as b,tn as x,un as S,vn as C,w,wn as T,xn as E,xt as D,z as O}from"./rue-runtime-HIMg8Lz8.js";import{t as k}from"./Code-DpH7u0gk.js";import{r as A}from"./SidebarPlaygroundExample-BCPRe0hA.js";var j=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isRef 判定示例</h1>`),M=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=`import {
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

export default IsRefDemo`,F=()=>{let{activeTab:C,count:F,shallow:I,state:L,nameRef:R,doubled:z,plain:B,rows:V}=y(`useSetup:0:0`,()=>p(()=>{let e=x(`preview`),t=x(1),n=h({label:`shallow`}),a=O({name:`Rue`}),o=r(a,`name`),s=i(()=>t.value*2),c={value:`looks like a ref`};return{activeTab:e,count:t,shallow:n,state:a,nameRef:o,doubled:s,plain:c,rows:i(()=>[{name:`ref(count)`,kind:`可写 ref`,result:S(t),value:t.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:S(n),value:n.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:S(s),value:s.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:S(o),value:o.value},{name:`{ value: ... }`,kind:`普通对象`,result:S(c),value:c.value},{name:`reactive({ name })`,kind:`响应式对象`,result:S(a),value:a.name}])}}));return v(A,()=>({children:[(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return t.appendChild(j().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l(),n=M().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),D(i,`role`,`tab`),T(()=>{a(i,`tab ${C.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{C.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),D(s,`role`,`tab`),T(()=>{a(s,`tab ${C.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{C.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,u),o(()=>s.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i,a)=>n(r,a,()=>s(Object.assign(r=>{let i=l(),a=N().content.cloneNode(!0),o=a.firstChild,p=o.childNodes[0],h=p.parentNode,v=o.childNodes[1],y=v.parentNode;return i.appendChild(a),g(h,p,()=>{let e=C.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=f(`div`,t);return _(t,n),n.className=`card-body p-0`,b(n,k,()=>({className:`h-full`,lang:`tsx`,code:P})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),g(y,v,()=>{let r=C.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(r=>{let i=f(`div`,r);i.className=`card bg-base-100 shadow`;let a=f(`div`,i);_(i,a),a.className=`card-body gap-5`;let o=f(`div`,a);_(a,o),o.className=`flex flex-wrap gap-3`;let l=f(`button`,o);_(o,l),l.className=`btn btn-primary`;let p=e=>{let t=()=>{F.value+=1};typeof t==`function`&&t(e)};l.addEventListener(`click`,p),t(()=>l.removeEventListener(`click`,p)),_(l,c(`count + 1`));let h=f(`button`,o);_(o,h),h.className=`btn`;let g=e=>{let t=()=>{L.name=L.name===`Rue`?`Vapor`:`Rue`};typeof t==`function`&&t(e)};h.addEventListener(`click`,g),t(()=>h.removeEventListener(`click`,g)),_(h,c(`切换 name`));let v=f(`button`,o);_(o,v),v.className=`btn`;let y=e=>{let t=()=>{I.value={label:I.value.label===`shallow`?`changed`:`shallow`}};typeof t==`function`&&t(e)};v.addEventListener(`click`,y),t(()=>v.removeEventListener(`click`,y)),_(v,c(`替换 shallowRef.value`));let b=f(`div`,a);_(a,b),b.className=`overflow-x-auto`;let x=f(`table`,b);_(b,x),x.className=`table`;let S=f(`thead`,x);_(x,S);let C=f(`tr`,S);_(S,C);let D=f(`th`,C);_(C,D),_(D,c(`表达式`));let O=f(`th`,C);_(C,O),_(O,c(`类型`));let k=f(`th`,C);_(C,k),_(k,c(`isRef`));let A=f(`th`,C);_(C,A),_(A,c(`当前值`));let j=f(`tbody`,x);_(x,j);let M=m(`rue:list:end`);_(j,M);let N=[];return T(()=>{let t=V.get()||[];N=w(j,M,N,t,(e,t)=>t,(t,r)=>{let i=u(t);return e((e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=f(`tr`,e),n=f(`td`,t);_(t,n);let r=f(`code`,n);_(n,r);let a=c(``);_(r,a),E(a,()=>i.get().name);let o=f(`td`,t);_(t,o);let s=c(``);_(o,s),E(s,()=>i.get().kind);let l=f(`td`,t);_(t,l);let u=f(`span`,l);_(l,u);let d;T(()=>{let e=`badge ${i.get().result?`badge-success`:`badge-ghost`}`,t=e==null?``:String(e);Object.is(d,t)||(d=t,u.className=t)});let p=c(``);_(u,p),E(p,()=>String(i.get().result));let m=f(`td`,t);_(t,m);let h=c(``);return _(m,h),E(h,()=>String(i.get().value)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>d(N)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>s(Object.assign(e=>{let t=c(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]}))};export{F as default};