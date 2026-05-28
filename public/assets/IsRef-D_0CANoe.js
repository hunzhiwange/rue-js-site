import{$ as e,Ct as t,Dt as n,Et as r,J as i,Kt as a,Lt as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,d as p,et as m,gt as h,l as g,mt as _,ot as v,t as y,tt as b,yt as x}from"./vapor-runtime-BR_2rwNk.js";import{a as S,n as C}from"./vapor-helpers-vapor-DkadWylb.js";import{t as w}from"./Code-B_4lzH85.js";import{t as T}from"./SidebarPlaygroundExample-CtM-WHq_.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>a(()=>{let e=S(`ref:1:0`,()=>o(`preview`)),i=S(`ref:1:1`,()=>o(1)),a=r({label:`shallow`}),s=S(`reactive:1:2`,()=>t({name:`Rue`})),c=n(s,`name`),l=S(`computed:1:3`,()=>h(()=>i.value*2)),u={value:`looks like a ref`};return{activeTab:e,count:i,shallow:a,state:s,nameRef:c,doubled:l,plain:u,rows:[{name:`ref(count)`,kind:`可写 ref`,result:x(i),value:i.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:x(a),value:a.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:x(l),value:l.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:x(c),value:c.value},{name:`{ value: ... }`,kind:`普通对象`,result:x(u),value:u.value},{name:`reactive({ name })`,kind:`响应式对象`,result:x(s),value:s.name}]}}));return p(t=>{let n=s(),r=d(`rue:component:anchor`);return l(n,r),g(y(T,{children:p(()=>{let t=s(),n=e(`h1`,t);l(t,n),f(n,`text-5xl font-semibold mb-4 md:mb-4`),l(n,m(`isRef 判定示例`));let r=e(`div`,t);l(t,r),v(r,`role`,`tablist`),f(r,`tabs tabs-box`);let a=e(`button`,r);l(r,a),v(a,`role`,`tab`),u(()=>{f(a,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),i(a,`click`,()=>{D.value=`preview`}),l(a,m(`效果`));let o=e(`button`,r);l(r,o),v(o,`role`,`tab`),u(()=>{f(o,String(`tab ${D.value===`code`?`tab-active`:``}`))}),i(o,`click`,()=>{D.value=`code`}),l(o,m(`代码`));let h=e(`div`,t);l(t,h),f(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=d(`rue:slot:anchor`);l(h,x),u(()=>{let t=D.value===`code`?p(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);l(n,r),f(r,`card-body p-0`);let i=d(`rue:component:anchor`);return l(r,i),u(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:E});c(()=>g(e,r,i))}),t}):``;c(()=>g(t,h,x))}),l(h,m(` `));let S=d(`rue:slot:anchor`);return l(h,S),u(()=>{let t=D.value===`preview`?p(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow`);let r=e(`div`,n);l(n,r),f(r,`card-body gap-5`);let a=e(`div`,r);l(r,a),f(a,`flex flex-wrap gap-3`);let o=e(`button`,a);l(a,o),f(o,`btn btn-primary`),i(o,`click`,()=>{O.value+=1}),l(o,m(`count + 1`));let h=e(`button`,a);l(a,h),f(h,`btn`),i(h,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),l(h,m(`切换 name`));let v=e(`button`,a);l(a,v),f(v,`btn`),i(v,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),l(v,m(`替换 shallowRef.value`));let y=e(`div`,r);l(r,y),f(y,`overflow-x-auto`);let x=e(`table`,y);l(y,x),f(x,`table`);let S=e(`thead`,x);l(x,S);let w=e(`tr`,S);l(S,w);let T=e(`th`,w);l(w,T),l(T,m(`表达式`));let E=e(`th`,w);l(w,E),l(E,m(`类型`));let D=e(`th`,w);l(w,D),l(D,m(`isRef`));let j=e(`th`,w);l(w,j),l(j,m(`当前值`));let M=e(`tbody`,x);l(x,M);let N=d(`rue:list:start`),F=d(`rue:list:end`);l(M,N),l(M,F);let I=new Map;return u(()=>{I=C({items:P||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,n,r,i,a)=>{g(p(()=>{let n=s(),r=e(`tr`,n);l(n,r);let i=e(`td`,r);l(r,i);let a=e(`code`,i);l(i,a);let o=d(`rue:slot:anchor`);l(a,o),u(()=>{let e=t.name;c(()=>g(e,a,o))});let p=e(`td`,r);l(r,p);let m=d(`rue:slot:anchor`);l(p,m),u(()=>{let e=t.kind;c(()=>g(e,p,m))});let h=e(`td`,r);l(r,h);let v=e(`span`,h);l(h,v),u(()=>{f(v,String(`badge ${t.result?`badge-success`:`badge-ghost`}`))});let y=b(v);l(v,y),u(()=>{_(y,String(t.result))});let x=e(`td`,r);l(r,x);let S=b(x);return l(x,S),u(()=>{_(S,String(t.value))}),n}),n,r)}})}),t}):``;c(()=>g(t,h,S))}),t})}),n,r),n})};export{D as default};