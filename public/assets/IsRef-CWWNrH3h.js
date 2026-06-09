import{$ as e,Ht as t,J as n,Ot as r,Q as i,Rt as a,Tt as o,Xt as s,Y as c,Z as l,_t as u,bt as d,ct as f,et as p,kt as m,l as h,mt as g,ot as _,qt as v,s as y,t as b,tt as x}from"./vapor-runtime-aZAg0Qkw.js";import{a as S,n as C}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as w}from"./Code-5DOEyGxf.js";import{r as T}from"./SidebarPlaygroundExample-cASgDpH3.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>v(()=>{let e=S(`ref:1:0`,()=>a(`preview`)),t=S(`ref:1:1`,()=>a(1)),n=r({label:`shallow`}),i=S(`reactive:1:2`,()=>o({name:`Rue`})),s=m(i,`name`),c=S(`computed:1:3`,()=>u(()=>t.value*2)),l={value:`looks like a ref`};return{activeTab:e,count:t,shallow:n,state:i,nameRef:s,doubled:c,plain:l,rows:[{name:`ref(count)`,kind:`可写 ref`,result:d(t),value:t.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:d(n),value:n.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:d(c),value:c.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:d(s),value:s.value},{name:`{ value: ... }`,kind:`普通对象`,result:d(l),value:l.value},{name:`reactive({ name })`,kind:`响应式对象`,result:d(i),value:i.name}]}}));return h(r=>{let a=i(),o=l(`rue:component:anchor`);return c(a,o),y(b(T,{children:h(()=>{let r=i(),a=e(`h1`,r);c(r,a),f(a,`text-5xl font-semibold mb-4 md:mb-4`),c(a,p(`isRef 判定示例`));let o=e(`div`,r);c(r,o),_(o,`role`,`tablist`),f(o,`tabs tabs-box`);let u=e(`button`,o);c(o,u),_(u,`role`,`tab`),s(()=>{f(u,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),n(u,`click`,()=>{D.value=`preview`}),c(u,p(`效果`));let d=e(`button`,o);c(o,d),_(d,`role`,`tab`),s(()=>{f(d,String(`tab ${D.value===`code`?`tab-active`:``}`))}),n(d,`click`,()=>{D.value=`code`}),c(d,p(`代码`));let m=e(`div`,r);c(r,m),f(m,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let v=l(`rue:slot:anchor`);c(m,v),s(()=>{let n=D.value===`code`?h(()=>{let n=i(),r=e(`div`,n);c(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);c(r,a),f(a,`card-body p-0`);let o=l(`rue:component:anchor`);return c(a,o),s(()=>{let e=b(w,{className:`h-full`,lang:`tsx`,code:E});t(()=>y(e,a,o))}),n}):``;t(()=>y(n,m,v))}),c(m,p(` `));let S=l(`rue:slot:anchor`);return c(m,S),s(()=>{let r=D.value===`preview`?h(()=>{let r=i(),a=e(`div`,r);c(r,a),f(a,`card bg-base-100 shadow`);let o=e(`div`,a);c(a,o),f(o,`card-body gap-5`);let u=e(`div`,o);c(o,u),f(u,`flex flex-wrap gap-3`);let d=e(`button`,u);c(u,d),f(d,`btn btn-primary`),n(d,`click`,()=>{O.value+=1}),c(d,p(`count + 1`));let m=e(`button`,u);c(u,m),f(m,`btn`),n(m,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),c(m,p(`切换 name`));let _=e(`button`,u);c(u,_),f(_,`btn`),n(_,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),c(_,p(`替换 shallowRef.value`));let v=e(`div`,o);c(o,v),f(v,`overflow-x-auto`);let b=e(`table`,v);c(v,b),f(b,`table`);let S=e(`thead`,b);c(b,S);let w=e(`tr`,S);c(S,w);let T=e(`th`,w);c(w,T),c(T,p(`表达式`));let E=e(`th`,w);c(w,E),c(E,p(`类型`));let D=e(`th`,w);c(w,D),c(D,p(`isRef`));let j=e(`th`,w);c(w,j),c(j,p(`当前值`));let M=e(`tbody`,b);c(b,M);let N=l(`rue:list:start`),F=l(`rue:list:end`);c(M,N),c(M,F);let I=new Map;return s(()=>{I=C({items:P||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(n,r,a,o,u)=>{y(h(()=>{let r=i(),a=e(`tr`,r);c(r,a);let o=e(`td`,a);c(a,o);let u=e(`code`,o);c(o,u);let d=l(`rue:slot:anchor`);c(u,d),s(()=>{let e=n.name;t(()=>y(e,u,d))});let p=e(`td`,a);c(a,p);let m=l(`rue:slot:anchor`);c(p,m),s(()=>{let e=n.kind;t(()=>y(e,p,m))});let h=e(`td`,a);c(a,h);let _=e(`span`,h);c(h,_),s(()=>{f(_,String(`badge ${n.result?`badge-success`:`badge-ghost`}`))});let v=x(_);c(_,v),s(()=>{g(v,String(n.result))});let b=e(`td`,a);c(a,b);let S=x(b);return c(b,S),s(()=>{g(S,String(n.value))}),r}),r,a)}})}),r}):``;t(()=>y(r,m,S))}),r})}),a,o),a})};export{D as default};