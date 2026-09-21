import{Bt as e,F as t,P as n,Qt as r,Ut as i,V as a,Vt as o,W as s,Wt as c,ct as l,f as u,fn as d,gn as f,h as p,hn as m,ht as h,in as g,lt as _,mn as v,mt as y,nt as b,p as x,pn as S,qt as C,sn as w,u as T,un as E,yn as D,zt as O}from"./rue-runtime-BWbIfNT8.js";import{t as k}from"./Code-C5ZhIIr9.js";import{r as A}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var j=D(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isRef 判定示例</h1>`),M=D(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=D(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=`import {
  computed,
  isRef,
  signal,
  ref,
  shallowRef,
  type FC,
} from '@rue-js/rue'

const IsRefDemo: FC = () => {
  const count = ref(1)
  const shallow = shallowRef({ label: 'shallow' })
  const state = signal({ name: 'Rue' })
  const nameRef = computed(() => state.get().name)
  const doubled = computed(() => count.value * 2)
  const plain = { value: 'looks like a ref' }

  return (
    <div>
      <button onClick={() => count.value++}>count + 1</button>
      <button onClick={() => state.update(value => ({ ...value, name: value.name === 'Rue' ? 'Signal' : 'Rue' }))}>
        toggle name
      </button>

      <ul>
        <li>ref: {String(isRef(count))}, count = {count.value}</li>
        <li>shallowRef: {String(isRef(shallow))}, label = {shallow.value.label}</li>
        <li>computed: {String(isRef(doubled))}, doubled = {doubled.get()}</li>
        <li>路径 computed: {String(isRef(nameRef))}, name = {nameRef.get()}</li>
        <li>plain object: {String(isRef(plain))}</li>
      </ul>
    </div>
  )
}

export default IsRefDemo`,F=(D,F,I)=>{let L=y(`preview`),R=y(1),z=h({label:`shallow`}),B=E({name:`Rue`}),V=l(()=>B.get().name),H=l(()=>R.value*2),U={value:`looks like a ref`},W=l(()=>[{name:`ref(count)`,kind:`可写 ref`,result:_(R),value:R.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:_(z),value:z.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:_(H),value:H.get()},{name:`computed(() => state.getPath('name'))`,kind:`路径派生值`,result:_(V),value:V.get()},{name:`{ value: ... }`,kind:`普通对象`,result:_(U),value:U.value},{name:`signal({ name })`,kind:`Signal 句柄`,result:_(B),value:B.get().name}]);return b(()=>n(A,()=>({children:(n,l,h)=>{let _=()=>c(n=>{let l=v();l.appendChild(j().content.cloneNode(!0));let h=M().content.cloneNode(!0),_=h.firstChild,y=_.childNodes[0],b=_.childNodes[1];l.appendChild(h),y.setAttribute(`role`,`tab`);let E;g(()=>{let e=`tab ${L.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,y.setAttribute(`class`,t))}),w(T(n,y,`click`,()=>()=>{L.value=`preview`})),b.setAttribute(`role`,`tab`);let D;g(()=>{let e=`tab ${L.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,b.setAttribute(`class`,t))}),w(T(n,b,`click`,()=>()=>{L.value=`code`}));let A=N().content.cloneNode(!0),F=A.firstChild,I=F.childNodes[0],V=I.parentNode,H=F.childNodes[1],U=H.parentNode;l.appendChild(A),i(V,I,()=>{let e=L.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let n=m(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=m(`div`,n);return d(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,k,()=>({className:`h-full`,lang:`tsx`,code:P})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=v();return[t.firstChild,t.lastChild]})}}),i(U,H,()=>{let t=L.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>c(t=>{let n=m(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow`);let i=m(`div`,n);d(n,i),i.setAttribute(`class`,`card-body gap-5`);let a=m(`div`,i);d(i,a),a.setAttribute(`class`,`flex flex-wrap gap-3`);let l=m(`button`,a);d(a,l),l.setAttribute(`class`,`btn btn-primary`),w(T(t,l,`click`,()=>()=>{R.value+=1})),d(l,f(`count + 1`));let h=m(`button`,a);d(a,h),h.setAttribute(`class`,`btn`),w(T(t,h,`click`,()=>()=>{B.update(e=>({...e,name:e.name===`Rue`?`Signal`:`Rue`}))})),d(h,f(`切换 name`));let _=m(`button`,a);d(a,_),_.setAttribute(`class`,`btn`),w(T(t,_,`click`,()=>()=>{z.value={label:z.value.label===`shallow`?`changed`:`shallow`}})),d(_,f(`替换 shallowRef.value`));let v=m(`div`,i);d(i,v),v.setAttribute(`class`,`overflow-x-auto`);let y=m(`table`,v);d(v,y),y.setAttribute(`class`,`table`);let b=m(`thead`,y);d(y,b);let E=m(`tr`,b);d(b,E);let D=m(`th`,E);d(E,D),d(D,f(`表达式`));let k=m(`th`,E);d(E,k),d(k,f(`类型`));let A=m(`th`,E);d(E,A),d(A,f(`isRef`));let j=m(`th`,E);d(E,j),d(j,f(`当前值`));let M=m(`tbody`,y);d(y,M);let N=S(`rue:list:end`);d(M,N);let P=[];return C(()=>{let t=W.get()||[];P=p(M,N,P,t,(e,t)=>t,(t,n)=>{let i=s(t);return x((t,n,a)=>{let s=()=>c(t=>{let n=m(`tr`,t),a=m(`td`,n);d(n,a);let o=m(`code`,a);d(a,o);let s=S(`rue:compiled-slot`);d(o,s),e({parent:o,before:s},()=>O(i.get().name),()=>({}));let c=m(`td`,n);d(n,c);let l=S(`rue:compiled-slot`);d(c,l),e({parent:c,before:l},()=>O(i.get().kind),()=>({}));let u=m(`td`,n);d(n,u);let p=m(`span`,u);d(u,p);let h;g(()=>{let e=`badge ${i.get().result?`badge-success`:`badge-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,p.setAttribute(`class`,t))});let _=S(`rue:compiled-slot`);d(p,_),e({parent:p,before:_},()=>O(i.get().result),()=>({}));let v=m(`td`,n);d(n,v);let y=f(``);return d(v,y),r(y,()=>String(i.get().value)),[n,n]});return t==null?s():o(t,a,s)},(e,r)=>{t=e,n=r,i.set(e)},void 0)},!1,!1)}),w(()=>u(P)),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>a(e=>{let n=f(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=v();return[t.firstChild,t.lastChild]})}});let G=f(``),K=f(``);return l.insertBefore(G,l.firstChild),l.appendChild(K),[l.firstChild,l.lastChild]});return n==null?_():o(n,h,_)}})))};export{F as default};