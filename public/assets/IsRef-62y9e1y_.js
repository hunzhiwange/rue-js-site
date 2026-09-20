import{Bt as e,H as t,Qt as n,Ut as r,V as i,Vt as a,Wt as o,Y as s,ct as c,f as l,fn as u,gn as d,h as f,hn as p,in as m,mn as h,nt as g,p as _,pn as v,qt as y,sn as b,st as x,tt as S,u as C,un as w,vt as T,yn as E,yt as D,zt as O}from"./rue-runtime-Cv6BZekS.js";import{t as k}from"./Code-BzFVdc3U.js";import{r as A}from"./SidebarPlaygroundExample-rFyhXfC_.js";var j=E(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">isRef 判定示例</h1>`),M=E(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=E(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=`import {
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

export default IsRefDemo`,F=(E,F,I)=>{let L=x(`preview`),R=x(1),z=c({label:`shallow`}),B=w({name:`Rue`}),V=S(()=>B.get().name),H=S(()=>R.value*2),U={value:`looks like a ref`},W=S(()=>[{name:`ref(count)`,kind:`可写 ref`,result:g(R),value:R.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:g(z),value:z.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:g(H),value:H.get()},{name:`computed(() => state.getPath('name'))`,kind:`路径派生值`,result:g(V),value:V.get()},{name:`{ value: ... }`,kind:`普通对象`,result:g(U),value:U.value},{name:`signal({ name })`,kind:`Signal 句柄`,result:g(B),value:B.get().name}]);return s(()=>i(A,()=>({children:(i,s,c)=>{let g=()=>o(i=>{let s=h();s.appendChild(j().content.cloneNode(!0));let c=M().content.cloneNode(!0),g=c.firstChild,x=g.childNodes[0],S=g.childNodes[1];s.appendChild(c),x.setAttribute(`role`,`tab`);let w;m(()=>{let e=`tab ${L.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(w,t)||(w=t,x.setAttribute(`class`,t))}),b(C(i,x,`click`,()=>()=>{L.value=`preview`})),S.setAttribute(`role`,`tab`);let E;m(()=>{let e=`tab ${L.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,S.setAttribute(`class`,t))}),b(C(i,S,`click`,()=>()=>{L.value=`code`}));let A=N().content.cloneNode(!0),F=A.firstChild,I=F.childNodes[0],V=I.parentNode,H=F.childNodes[1],U=H.parentNode;s.appendChild(A),r(V,I,()=>{let e=L.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=p(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,k,()=>({className:`h-full`,lang:`tsx`,code:P})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>D(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>D(e=>{let t=h();return[t.firstChild,t.lastChild]})}}),r(U,H,()=>{let t=L.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>o(t=>{let r=p(`div`,t);r.setAttribute(`class`,`card bg-base-100 shadow`);let i=p(`div`,r);u(r,i),i.setAttribute(`class`,`card-body gap-5`);let s=p(`div`,i);u(i,s),s.setAttribute(`class`,`flex flex-wrap gap-3`);let c=p(`button`,s);u(s,c),c.setAttribute(`class`,`btn btn-primary`),b(C(t,c,`click`,()=>()=>{R.value+=1})),u(c,d(`count + 1`));let h=p(`button`,s);u(s,h),h.setAttribute(`class`,`btn`),b(C(t,h,`click`,()=>()=>{B.update(e=>({...e,name:e.name===`Rue`?`Signal`:`Rue`}))})),u(h,d(`切换 name`));let g=p(`button`,s);u(s,g),g.setAttribute(`class`,`btn`),b(C(t,g,`click`,()=>()=>{z.value={label:z.value.label===`shallow`?`changed`:`shallow`}})),u(g,d(`替换 shallowRef.value`));let x=p(`div`,i);u(i,x),x.setAttribute(`class`,`overflow-x-auto`);let S=p(`table`,x);u(x,S),S.setAttribute(`class`,`table`);let w=p(`thead`,S);u(S,w);let E=p(`tr`,w);u(w,E);let D=p(`th`,E);u(E,D),u(D,d(`表达式`));let k=p(`th`,E);u(E,k),u(k,d(`类型`));let A=p(`th`,E);u(E,A),u(A,d(`isRef`));let j=p(`th`,E);u(E,j),u(j,d(`当前值`));let M=p(`tbody`,S);u(S,M);let N=v(`rue:list:end`);u(M,N);let P=[];return y(()=>{let t=W.get()||[];P=f(M,N,P,t,(e,t)=>t,(t,r)=>{let i=T(t);return _((t,r,s)=>{let c=()=>o(t=>{let r=p(`tr`,t),a=p(`td`,r);u(r,a);let o=p(`code`,a);u(a,o);let s=v(`rue:compiled-slot`);u(o,s),e({parent:o,before:s},()=>O(i.get().name),()=>({}));let c=p(`td`,r);u(r,c);let l=v(`rue:compiled-slot`);u(c,l),e({parent:c,before:l},()=>O(i.get().kind),()=>({}));let f=p(`td`,r);u(r,f);let h=p(`span`,f);u(f,h);let g;m(()=>{let e=`badge ${i.get().result?`badge-success`:`badge-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(g,t)||(g=t,h.setAttribute(`class`,t))});let _=d(``);u(h,_),n(_,()=>String(i.get().result));let y=p(`td`,r);u(r,y);let b=d(``);return u(y,b),n(b,()=>String(i.get().value)),[r,r]});return t==null?c():a(t,s,c)},(e,n)=>{t=e,r=n,i.set(e)},void 0)},!1,!1)}),b(()=>l(P)),[r,r]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>D(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>D(e=>{let t=h();return[t.firstChild,t.lastChild]})}});let G=d(``),K=d(``);return s.insertBefore(G,s.firstChild),s.appendChild(K),[s.firstChild,s.lastChild]});return i==null?g():a(i,c,g)}})))};export{F as default};