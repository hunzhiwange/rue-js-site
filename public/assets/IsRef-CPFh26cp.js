import{$ as e,$t as t,At as n,Bt as r,Dt as i,Gt as a,St as o,X as s,Xt as c,Z as l,ct as u,et as d,gt as f,jt as p,l as m,nt as h,o as g,rt as _,t as v,tt as y,ut as b,yt as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S,n as C}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as w}from"./Code-D5UqTwV6.js";import{r as T}from"./SidebarPlaygroundExample-D2vGHFCu.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>c(()=>{let e=S(`ref:1:0`,()=>r(`preview`)),t=S(`ref:1:1`,()=>r(1)),a=n({label:`shallow`}),s=S(`reactive:1:2`,()=>i({name:`Rue`})),c=p(s,`name`),l=S(`computed:1:3`,()=>x(()=>t.value*2)),u={value:`looks like a ref`};return{activeTab:e,count:t,shallow:a,state:s,nameRef:c,doubled:l,plain:u,rows:S(`computed:1:4`,()=>x(()=>[{name:`ref(count)`,kind:`可写 ref`,result:o(t),value:t.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:o(a),value:a.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:o(l),value:l.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:o(c),value:c.value},{name:`{ value: ... }`,kind:`普通对象`,result:o(u),value:u.value},{name:`reactive({ name })`,kind:`响应式对象`,result:o(s),value:s.name}]))}}));return m(n=>{let r=d(),i=e(`rue:component:anchor`);return l(r,i),g(v(T,{children:m(()=>{let n=d(),r=y(`h1`,n);l(n,r),b(r,`text-5xl font-semibold mb-4 md:mb-4`),l(r,h(`isRef 判定示例`));let i=y(`div`,n);l(n,i),u(i,`role`,`tablist`),b(i,`tabs tabs-box`);let o=y(`button`,i);l(i,o),u(o,`role`,`tab`),t(()=>{b(o,`tab ${D.value===`preview`?`tab-active`:``}`)}),s(o,`click`,()=>{D.value=`preview`}),l(o,h(`效果`));let c=y(`button`,i);l(i,c),u(c,`role`,`tab`),t(()=>{b(c,`tab ${D.value===`code`?`tab-active`:``}`)}),s(c,`click`,()=>{D.value=`code`}),l(c,h(`代码`));let p=y(`div`,n);l(n,p),b(p,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);l(p,x),t(()=>{let n=D.value===`code`?m(()=>{let n=d(),r=y(`div`,n);l(n,r),b(r,`card bg-base-100 shadow overflow-auto`);let i=y(`div`,r);l(r,i),b(i,`card-body p-0`);let o=e(`rue:component:anchor`);return l(i,o),t(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:E});a(()=>g(e,i,o))}),n}):``;a(()=>g(n,p,x))}),l(p,h(` `));let S=e(`rue:slot:anchor`);return l(p,S),t(()=>{let n=D.value===`preview`?m(()=>{let n=d(),r=y(`div`,n);l(n,r),b(r,`card bg-base-100 shadow`);let i=y(`div`,r);l(r,i),b(i,`card-body gap-5`);let o=y(`div`,i);l(i,o),b(o,`flex flex-wrap gap-3`);let c=y(`button`,o);l(o,c),b(c,`btn btn-primary`),s(c,`click`,()=>{O.value+=1}),l(c,h(`count + 1`));let u=y(`button`,o);l(o,u),b(u,`btn`),s(u,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),l(u,h(`切换 name`));let p=y(`button`,o);l(o,p),b(p,`btn`),s(p,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),l(p,h(`替换 shallowRef.value`));let v=y(`div`,i);l(i,v),b(v,`overflow-x-auto`);let x=y(`table`,v);l(v,x),b(x,`table`);let S=y(`thead`,x);l(x,S);let w=y(`tr`,S);l(S,w);let T=y(`th`,w);l(w,T),l(T,h(`表达式`));let E=y(`th`,w);l(w,E),l(E,h(`类型`));let D=y(`th`,w);l(w,D),l(D,h(`isRef`));let j=y(`th`,w);l(w,j),l(j,h(`当前值`));let M=y(`tbody`,x);l(x,M);let N=e(`rue:list:start`),F=e(`rue:list:end`);l(M,N),l(M,F);let I=new Map;return t(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(n,r,i,o,s)=>{g(m(()=>{let r=d(),i=y(`tr`,r);l(r,i);let o=y(`td`,i);l(i,o);let s=y(`code`,o);l(o,s);let c=e(`rue:slot:anchor`);l(s,c),t(()=>{let e=n.name;a(()=>g(e,s,c))});let u=y(`td`,i);l(i,u);let p=e(`rue:slot:anchor`);l(u,p),t(()=>{let e=n.kind;a(()=>g(e,u,p))});let m=y(`td`,i);l(i,m);let h=y(`span`,m);l(m,h),t(()=>{b(h,`badge ${n.result?`badge-success`:`badge-ghost`}`)});let v=_(h);l(h,v),t(()=>{f(v,String(n.result))});let x=y(`td`,i);l(i,x);let S=_(x);return l(x,S),t(()=>{f(S,String(n.value))}),r}),r,i)}})}),n}):``;a(()=>g(n,p,S))}),n})}),r,i),r})};export{D as default};