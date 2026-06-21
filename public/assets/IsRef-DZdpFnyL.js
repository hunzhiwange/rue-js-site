import{$t as e,Et as t,Ft as n,Jt as r,Pt as i,Q as a,St as o,Z as s,dt as c,et as l,in as u,it as d,jt as f,l as p,lt as m,nt as h,o as g,rt as _,t as v,tt as y,vt as b,zt as x}from"./vapor-runtime-DsQWl-IB.js";import{a as S,n as C}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as w}from"./Code-4SUSUwRg.js";import{r as T}from"./SidebarPlaygroundExample-BEWYUWOl.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>u(()=>{let e=S(`ref:1:0`,()=>r(`preview`)),a=S(`ref:1:1`,()=>r(1)),s=i({label:`shallow`}),c=S(`reactive:1:2`,()=>f({name:`Rue`})),l=n(c,`name`),u=S(`computed:1:3`,()=>o(()=>a.value*2)),d={value:`looks like a ref`};return{activeTab:e,count:a,shallow:s,state:c,nameRef:l,doubled:u,plain:d,rows:S(`computed:1:4`,()=>o(()=>[{name:`ref(count)`,kind:`可写 ref`,result:t(a),value:a.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:t(s),value:s.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:t(u),value:u.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:t(l),value:l.value},{name:`{ value: ... }`,kind:`普通对象`,result:t(d),value:d.value},{name:`reactive({ name })`,kind:`响应式对象`,result:t(c),value:c.name}]))}}));return p(t=>{let n=y(),r=l(`rue:component:anchor`);return a(n,r),g(v(T,{children:p(()=>{let t=y(),n=h(`h1`,t);a(t,n),c(n,`text-5xl font-semibold mb-4 md:mb-4`),a(n,_(`isRef 判定示例`));let r=h(`div`,t);a(t,r),m(r,`role`,`tablist`),c(r,`tabs tabs-box`);let i=h(`button`,r);a(r,i),m(i,`role`,`tab`),x(()=>{c(i,`tab ${D.value===`preview`?`tab-active`:``}`)}),s(i,`click`,()=>{D.value=`preview`}),a(i,_(`效果`));let o=h(`button`,r);a(r,o),m(o,`role`,`tab`),x(()=>{c(o,`tab ${D.value===`code`?`tab-active`:``}`)}),s(o,`click`,()=>{D.value=`code`}),a(o,_(`代码`));let u=h(`div`,t);a(t,u),c(u,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let f=l(`rue:slot:anchor`);a(u,f),x(()=>{let t=D.value===`code`?p(()=>{let t=y(),n=h(`div`,t);a(t,n),c(n,`card bg-base-100 shadow overflow-auto`);let r=h(`div`,n);a(n,r),c(r,`card-body p-0`);let i=l(`rue:component:anchor`);return a(r,i),x(()=>{let t=v(w,{className:`h-full`,lang:`tsx`,code:E});e(()=>g(t,r,i))}),t}):``;e(()=>g(t,u,f))}),a(u,_(` `));let S=l(`rue:slot:anchor`);return a(u,S),x(()=>{let t=D.value===`preview`?p(()=>{let t=y(),n=h(`div`,t);a(t,n),c(n,`card bg-base-100 shadow`);let r=h(`div`,n);a(n,r),c(r,`card-body gap-5`);let i=h(`div`,r);a(r,i),c(i,`flex flex-wrap gap-3`);let o=h(`button`,i);a(i,o),c(o,`btn btn-primary`),s(o,`click`,()=>{O.value+=1}),a(o,_(`count + 1`));let u=h(`button`,i);a(i,u),c(u,`btn`),s(u,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),a(u,_(`切换 name`));let f=h(`button`,i);a(i,f),c(f,`btn`),s(f,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),a(f,_(`替换 shallowRef.value`));let m=h(`div`,r);a(r,m),c(m,`overflow-x-auto`);let v=h(`table`,m);a(m,v),c(v,`table`);let S=h(`thead`,v);a(v,S);let w=h(`tr`,S);a(S,w);let T=h(`th`,w);a(w,T),a(T,_(`表达式`));let E=h(`th`,w);a(w,E),a(E,_(`类型`));let D=h(`th`,w);a(w,D),a(D,_(`isRef`));let j=h(`th`,w);a(w,j),a(j,_(`当前值`));let M=h(`tbody`,v);a(v,M);let N=l(`rue:list:start`),F=l(`rue:list:end`);a(M,N),a(M,F);let I=new Map;return x(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,n,r,i,o)=>{g(p(()=>{let n=y(),r=h(`tr`,n);a(n,r);let i=h(`td`,r);a(r,i);let o=h(`code`,i);a(i,o);let s=l(`rue:slot:anchor`);a(o,s),x(()=>{let n=t.name;e(()=>g(n,o,s))});let u=h(`td`,r);a(r,u);let f=l(`rue:slot:anchor`);a(u,f),x(()=>{let n=t.kind;e(()=>g(n,u,f))});let p=h(`td`,r);a(r,p);let m=h(`span`,p);a(p,m),x(()=>{c(m,`badge ${t.result?`badge-success`:`badge-ghost`}`)});let _=d(m);a(m,_),x(()=>{b(_,String(t.result))});let v=h(`td`,r);a(r,v);let S=d(v);return a(v,S),x(()=>{b(S,String(t.value))}),n}),n,r)}})}),t}):``;e(()=>g(t,u,S))}),t})}),n,r),n})};export{D as default};