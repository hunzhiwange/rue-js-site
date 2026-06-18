import{$ as e,Dt as t,Ht as n,J as r,Lt as i,Ot as a,Q as o,X as s,Xt as c,Z as l,at as u,et as d,gt as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,wt as b,yt as x}from"./vapor-runtime-iQZthBPQ.js";import{a as S,n as C}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as w}from"./Code-CZqShVUj.js";import{r as T}from"./SidebarPlaygroundExample-5H7RL-T7.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>g(()=>{let e=S(`ref:1:0`,()=>i(`preview`)),n=S(`ref:1:1`,()=>i(1)),r=t({label:`shallow`}),o=S(`reactive:1:2`,()=>b({name:`Rue`})),s=a(o,`name`),c=S(`computed:1:3`,()=>f(()=>n.value*2)),l={value:`looks like a ref`};return{activeTab:e,count:n,shallow:r,state:o,nameRef:s,doubled:c,plain:l,rows:S(`computed:1:4`,()=>f(()=>[{name:`ref(count)`,kind:`可写 ref`,result:x(n),value:n.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:x(r),value:r.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:x(c),value:c.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:x(s),value:s.value},{name:`{ value: ... }`,kind:`普通对象`,result:x(l),value:l.value},{name:`reactive({ name })`,kind:`响应式对象`,result:x(o),value:o.name}]))}}));return p(t=>{let i=l(),a=s(`rue:component:anchor`);return r(i,a),_(y(T,{children:p(()=>{let t=l(),i=o(`h1`,t);r(t,i),v(i,`text-5xl font-semibold mb-4 md:mb-4`),r(i,e(`isRef 判定示例`));let a=o(`div`,t);r(t,a),u(a,`role`,`tablist`),v(a,`tabs tabs-box`);let f=o(`button`,a);r(a,f),u(f,`role`,`tab`),c(()=>{v(f,`tab ${D.value===`preview`?`tab-active`:``}`)}),h(f,`click`,()=>{D.value=`preview`}),r(f,e(`效果`));let g=o(`button`,a);r(a,g),u(g,`role`,`tab`),c(()=>{v(g,`tab ${D.value===`code`?`tab-active`:``}`)}),h(g,`click`,()=>{D.value=`code`}),r(g,e(`代码`));let b=o(`div`,t);r(t,b),v(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=s(`rue:slot:anchor`);r(b,x),c(()=>{let e=D.value===`code`?p(()=>{let e=l(),t=o(`div`,e);r(e,t),v(t,`card bg-base-100 shadow overflow-auto`);let i=o(`div`,t);r(t,i),v(i,`card-body p-0`);let a=s(`rue:component:anchor`);return r(i,a),c(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:E});n(()=>_(e,i,a))}),e}):``;n(()=>_(e,b,x))}),r(b,e(` `));let S=s(`rue:slot:anchor`);return r(b,S),c(()=>{let t=D.value===`preview`?p(()=>{let t=l(),i=o(`div`,t);r(t,i),v(i,`card bg-base-100 shadow`);let a=o(`div`,i);r(i,a),v(a,`card-body gap-5`);let u=o(`div`,a);r(a,u),v(u,`flex flex-wrap gap-3`);let f=o(`button`,u);r(u,f),v(f,`btn btn-primary`),h(f,`click`,()=>{O.value+=1}),r(f,e(`count + 1`));let g=o(`button`,u);r(u,g),v(g,`btn`),h(g,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),r(g,e(`切换 name`));let y=o(`button`,u);r(u,y),v(y,`btn`),h(y,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),r(y,e(`替换 shallowRef.value`));let b=o(`div`,a);r(a,b),v(b,`overflow-x-auto`);let x=o(`table`,b);r(b,x),v(x,`table`);let S=o(`thead`,x);r(x,S);let w=o(`tr`,S);r(S,w);let T=o(`th`,w);r(w,T),r(T,e(`表达式`));let E=o(`th`,w);r(w,E),r(E,e(`类型`));let D=o(`th`,w);r(w,D),r(D,e(`isRef`));let j=o(`th`,w);r(w,j),r(j,e(`当前值`));let M=o(`tbody`,x);r(x,M);let N=s(`rue:list:start`),F=s(`rue:list:end`);r(M,N),r(M,F);let I=new Map;return c(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,t,i,a,u)=>{_(p(()=>{let t=l(),i=o(`tr`,t);r(t,i);let a=o(`td`,i);r(i,a);let u=o(`code`,a);r(a,u);let f=s(`rue:slot:anchor`);r(u,f),c(()=>{let t=e.name;n(()=>_(t,u,f))});let p=o(`td`,i);r(i,p);let h=s(`rue:slot:anchor`);r(p,h),c(()=>{let t=e.kind;n(()=>_(t,p,h))});let g=o(`td`,i);r(i,g);let y=o(`span`,g);r(g,y),c(()=>{v(y,`badge ${e.result?`badge-success`:`badge-ghost`}`)});let b=d(y);r(y,b),c(()=>{m(b,String(e.result))});let x=o(`td`,i);r(i,x);let S=d(x);return r(x,S),c(()=>{m(S,String(e.value))}),t}),t,i)}})}),t}):``;n(()=>_(t,b,S))}),t})}),i,a),i})};export{D as default};