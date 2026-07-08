import{It as e,Lt as t,Nt as n,Ot as r,Q as i,Vt as a,Xt as o,Z as s,at as c,bt as l,dt as u,it as d,l as f,nt as p,o as m,on as h,pt as g,rt as _,t as v,tn as y,tt as b,wt as x}from"./vapor-runtime-x7F5M-49.js";import{a as S,n as C}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as w}from"./Code-BoXKy3gJ.js";import{r as T}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>h(()=>{let i=S(`ref:1:0`,()=>o(`preview`)),a=S(`ref:1:1`,()=>o(1)),s=e({label:`shallow`}),c=S(`reactive:1:2`,()=>n({name:`Rue`})),l=t(c,`name`),u=S(`computed:1:3`,()=>x(()=>a.value*2)),d={value:`looks like a ref`};return{activeTab:i,count:a,shallow:s,state:c,nameRef:l,doubled:u,plain:d,rows:S(`computed:1:4`,()=>x(()=>[{name:`ref(count)`,kind:`可写 ref`,result:r(a),value:a.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:r(s),value:s.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:r(u),value:u.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:r(l),value:l.value},{name:`{ value: ... }`,kind:`普通对象`,result:r(d),value:d.value},{name:`reactive({ name })`,kind:`响应式对象`,result:r(c),value:c.name}]))}}));return f(e=>{let t=p(),n=b(`rue:component:anchor`);return i(t,n),m(v(T,{children:f(()=>{let e=p(),t=_(`h1`,e);i(e,t),g(t,`text-5xl font-semibold mb-4 md:mb-4`),i(t,d(`isRef 判定示例`));let n=_(`div`,e);i(e,n),u(n,`role`,`tablist`),g(n,`tabs tabs-box`);let r=_(`button`,n);i(n,r),u(r,`role`,`tab`),a(()=>{g(r,`tab ${D.value===`preview`?`tab-active`:``}`)}),s(r,`click`,()=>{D.value=`preview`}),i(r,d(`效果`));let o=_(`button`,n);i(n,o),u(o,`role`,`tab`),a(()=>{g(o,`tab ${D.value===`code`?`tab-active`:``}`)}),s(o,`click`,()=>{D.value=`code`}),i(o,d(`代码`));let h=_(`div`,e);i(e,h),g(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=b(`rue:slot:anchor`);i(h,x),a(()=>{let e=D.value===`code`?f(()=>{let e=p(),t=_(`div`,e);i(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let n=_(`div`,t);i(t,n),g(n,`card-body p-0`);let r=b(`rue:component:anchor`);return i(n,r),a(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:E});y(()=>m(e,n,r))}),e}):``;y(()=>m(e,h,x))}),i(h,d(` `));let S=b(`rue:slot:anchor`);return i(h,S),a(()=>{let e=D.value===`preview`?f(()=>{let e=p(),t=_(`div`,e);i(e,t),g(t,`card bg-base-100 shadow`);let n=_(`div`,t);i(t,n),g(n,`card-body gap-5`);let r=_(`div`,n);i(n,r),g(r,`flex flex-wrap gap-3`);let o=_(`button`,r);i(r,o),g(o,`btn btn-primary`),s(o,`click`,()=>{O.value+=1}),i(o,d(`count + 1`));let u=_(`button`,r);i(r,u),g(u,`btn`),s(u,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),i(u,d(`切换 name`));let h=_(`button`,r);i(r,h),g(h,`btn`),s(h,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),i(h,d(`替换 shallowRef.value`));let v=_(`div`,n);i(n,v),g(v,`overflow-x-auto`);let x=_(`table`,v);i(v,x),g(x,`table`);let S=_(`thead`,x);i(x,S);let w=_(`tr`,S);i(S,w);let T=_(`th`,w);i(w,T),i(T,d(`表达式`));let E=_(`th`,w);i(w,E),i(E,d(`类型`));let D=_(`th`,w);i(w,D),i(D,d(`isRef`));let j=_(`th`,w);i(w,j),i(j,d(`当前值`));let M=_(`tbody`,x);i(x,M);let N=b(`rue:list:start`),F=b(`rue:list:end`);i(M,N),i(M,F);let I=new Map;return a(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,t,n,r,o)=>{m(f(()=>{let t=p(),n=_(`tr`,t);i(t,n);let r=_(`td`,n);i(n,r);let o=_(`code`,r);i(r,o);let s=b(`rue:slot:anchor`);i(o,s),a(()=>{let t=e.name;y(()=>m(t,o,s))});let u=_(`td`,n);i(n,u);let d=b(`rue:slot:anchor`);i(u,d),a(()=>{let t=e.kind;y(()=>m(t,u,d))});let f=_(`td`,n);i(n,f);let h=_(`span`,f);i(f,h),a(()=>{g(h,`badge ${e.result?`badge-success`:`badge-ghost`}`)});let v=c(h);i(h,v),a(()=>{l(v,String(e.result))});let x=_(`td`,n);i(n,x);let S=c(x);return i(x,S),a(()=>{l(S,String(e.value))}),t}),t,n)}})}),e}):``;y(()=>m(e,h,S))}),e})}),t,n),t})};export{D as default};