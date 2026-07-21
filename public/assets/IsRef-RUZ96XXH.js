import{Cn as e,Ct as t,Kt as n,Lt as r,Mt as i,Tt as a,Vt as o,Xt as s,Zt as c,dt as l,ft as u,ht as d,mt as f,ot as p,pn as m,pt as h,st as g,tn as _,vn as v}from"./context-8lXZvIn-.js";import{l as y,o as b,t as x}from"./vapor-runtime-ygJWVcNn.js";import{a as S,n as C}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as w}from"./Code-DhoWkRkB.js";import{r as T}from"./SidebarPlaygroundExample-B78jsvoF.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>e(()=>{let e=S(`ref:1:0`,()=>m(`preview`)),t=S(`ref:1:1`,()=>m(1)),i=s({label:`shallow`}),a=S(`reactive:1:2`,()=>n({name:`Rue`})),l=c(a,`name`),u=S(`computed:1:3`,()=>r(()=>t.value*2)),d={value:`looks like a ref`};return{activeTab:e,count:t,shallow:i,state:a,nameRef:l,doubled:u,plain:d,rows:S(`computed:1:4`,()=>r(()=>[{name:`ref(count)`,kind:`可写 ref`,result:o(t),value:t.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:o(i),value:i.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:o(u),value:u.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:o(l),value:l.value},{name:`{ value: ... }`,kind:`普通对象`,result:o(d),value:d.value},{name:`reactive({ name })`,kind:`响应式对象`,result:o(a),value:a.name}]))}}));return y(e=>{let n=u(),r=l(`rue:component:anchor`);return g(n,r),b(x(T,{children:y(()=>{let e=u(),n=h(`h1`,e);g(e,n),a(n,`text-5xl font-semibold mb-4 md:mb-4`),g(n,f(`isRef 判定示例`));let r=h(`div`,e);g(e,r),t(r,`role`,`tablist`),a(r,`tabs tabs-box`);let o=h(`button`,r);g(r,o),t(o,`role`,`tab`),_(()=>{a(o,`tab ${D.value===`preview`?`tab-active`:``}`)}),p(o,`click`,()=>{D.value=`preview`}),g(o,f(`效果`));let s=h(`button`,r);g(r,s),t(s,`role`,`tab`),_(()=>{a(s,`tab ${D.value===`code`?`tab-active`:``}`)}),p(s,`click`,()=>{D.value=`code`}),g(s,f(`代码`));let c=h(`div`,e);g(e,c),a(c,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let m=l(`rue:slot:anchor`);g(c,m),_(()=>{let e=D.value===`code`?y(()=>{let e=u(),t=h(`div`,e);g(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=h(`div`,t);g(t,n),a(n,`card-body p-0`);let r=l(`rue:component:anchor`);return g(n,r),_(()=>{let e=x(w,{className:`h-full`,lang:`tsx`,code:E});v(()=>b(e,n,r))}),e}):``;v(()=>b(e,c,m))}),g(c,f(` `));let S=l(`rue:slot:anchor`);return g(c,S),_(()=>{let e=D.value===`preview`?y(()=>{let e=u(),t=h(`div`,e);g(e,t),a(t,`card bg-base-100 shadow`);let n=h(`div`,t);g(t,n),a(n,`card-body gap-5`);let r=h(`div`,n);g(n,r),a(r,`flex flex-wrap gap-3`);let o=h(`button`,r);g(r,o),a(o,`btn btn-primary`),p(o,`click`,()=>{O.value+=1}),g(o,f(`count + 1`));let s=h(`button`,r);g(r,s),a(s,`btn`),p(s,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),g(s,f(`切换 name`));let c=h(`button`,r);g(r,c),a(c,`btn`),p(c,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),g(c,f(`替换 shallowRef.value`));let m=h(`div`,n);g(n,m),a(m,`overflow-x-auto`);let x=h(`table`,m);g(m,x),a(x,`table`);let S=h(`thead`,x);g(x,S);let w=h(`tr`,S);g(S,w);let T=h(`th`,w);g(w,T),g(T,f(`表达式`));let E=h(`th`,w);g(w,E),g(E,f(`类型`));let D=h(`th`,w);g(w,D),g(D,f(`isRef`));let j=h(`th`,w);g(w,j),g(j,f(`当前值`));let M=h(`tbody`,x);g(x,M);let N=l(`rue:list:start`),F=l(`rue:list:end`);g(M,N),g(M,F);let I=new Map;return _(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,t,n,r,o)=>{b(y(()=>{let t=u(),n=h(`tr`,t);g(t,n);let r=h(`td`,n);g(n,r);let o=h(`code`,r);g(r,o);let s=l(`rue:slot:anchor`);g(o,s),_(()=>{let t=e.name;v(()=>b(t,o,s))});let c=h(`td`,n);g(n,c);let f=l(`rue:slot:anchor`);g(c,f),_(()=>{let t=e.kind;v(()=>b(t,c,f))});let p=h(`td`,n);g(n,p);let m=h(`span`,p);g(p,m),_(()=>{a(m,`badge ${e.result?`badge-success`:`badge-ghost`}`)});let y=d(m);g(m,y),_(()=>{i(y,String(e.result))});let x=h(`td`,n);g(n,x);let S=d(x);return g(x,S),_(()=>{i(S,String(e.value))}),t}),t,n)}})}),e}):``;v(()=>b(e,c,S))}),e})}),n,r),n})};export{D as default};