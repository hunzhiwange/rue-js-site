import{$ as e,At as t,Et as n,Q as r,Qt as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,kt as d,l as f,lt as p,nt as m,o as h,st as g,t as _,tt as v,vt as y,xt as b,zt as x}from"./vapor-runtime-CXIalONM.js";import{a as S,n as C}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as w}from"./Code-BIscIyEp.js";import{r as T}from"./SidebarPlaygroundExample-CEz1fABX.js";var E=`import {
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

export default IsRefDemo`,D=()=>{let{activeTab:D,count:O,shallow:k,state:A,nameRef:j,doubled:M,plain:N,rows:P}=S(`useSetup:0:0`,()=>c(()=>{let e=S(`ref:1:0`,()=>x(`preview`)),r=S(`ref:1:1`,()=>x(1)),i=d({label:`shallow`}),a=S(`reactive:1:2`,()=>n({name:`Rue`})),o=t(a,`name`),s=S(`computed:1:3`,()=>y(()=>r.value*2)),c={value:`looks like a ref`};return{activeTab:e,count:r,shallow:i,state:a,nameRef:o,doubled:s,plain:c,rows:S(`computed:1:4`,()=>y(()=>[{name:`ref(count)`,kind:`可写 ref`,result:b(r),value:r.value},{name:`shallowRef({ label })`,kind:`浅层 ref`,result:b(i),value:i.value.label},{name:`computed(() => count * 2)`,kind:`计算 ref`,result:b(s),value:s.get()},{name:`toRef(state, 'name')`,kind:`对象属性 ref`,result:b(o),value:o.value},{name:`{ value: ... }`,kind:`普通对象`,result:b(c),value:c.value},{name:`reactive({ name })`,kind:`响应式对象`,result:b(a),value:a.name}]))}}));return f(t=>{let n=e(),c=r(`rue:component:anchor`);return o(n,c),h(_(T,{children:f(()=>{let t=e(),n=l(`h1`,t);o(t,n),p(n,`text-5xl font-semibold mb-4 md:mb-4`),o(n,v(`isRef 判定示例`));let c=l(`div`,t);o(t,c),g(c,`role`,`tablist`),p(c,`tabs tabs-box`);let d=l(`button`,c);o(c,d),g(d,`role`,`tab`),i(()=>{p(d,`tab ${D.value===`preview`?`tab-active`:``}`)}),s(d,`click`,()=>{D.value=`preview`}),o(d,v(`效果`));let y=l(`button`,c);o(c,y),g(y,`role`,`tab`),i(()=>{p(y,`tab ${D.value===`code`?`tab-active`:``}`)}),s(y,`click`,()=>{D.value=`code`}),o(y,v(`代码`));let b=l(`div`,t);o(t,b),p(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=r(`rue:slot:anchor`);o(b,x),i(()=>{let t=D.value===`code`?f(()=>{let t=e(),n=l(`div`,t);o(t,n),p(n,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,n);o(n,s),p(s,`card-body p-0`);let c=r(`rue:component:anchor`);return o(s,c),i(()=>{let e=_(w,{className:`h-full`,lang:`tsx`,code:E});a(()=>h(e,s,c))}),t}):``;a(()=>h(t,b,x))}),o(b,v(` `));let S=r(`rue:slot:anchor`);return o(b,S),i(()=>{let t=D.value===`preview`?f(()=>{let t=e(),n=l(`div`,t);o(t,n),p(n,`card bg-base-100 shadow`);let c=l(`div`,n);o(n,c),p(c,`card-body gap-5`);let d=l(`div`,c);o(c,d),p(d,`flex flex-wrap gap-3`);let g=l(`button`,d);o(d,g),p(g,`btn btn-primary`),s(g,`click`,()=>{O.value+=1}),o(g,v(`count + 1`));let _=l(`button`,d);o(d,_),p(_,`btn`),s(_,`click`,()=>{A.name=A.name===`Rue`?`Vapor`:`Rue`}),o(_,v(`切换 name`));let y=l(`button`,d);o(d,y),p(y,`btn`),s(y,`click`,()=>{k.value={label:k.value.label===`shallow`?`changed`:`shallow`}}),o(y,v(`替换 shallowRef.value`));let b=l(`div`,c);o(c,b),p(b,`overflow-x-auto`);let x=l(`table`,b);o(b,x),p(x,`table`);let S=l(`thead`,x);o(x,S);let w=l(`tr`,S);o(S,w);let T=l(`th`,w);o(w,T),o(T,v(`表达式`));let E=l(`th`,w);o(w,E),o(E,v(`类型`));let D=l(`th`,w);o(w,D),o(D,v(`isRef`));let j=l(`th`,w);o(w,j),o(j,v(`当前值`));let M=l(`tbody`,x);o(x,M);let N=r(`rue:list:start`),F=r(`rue:list:end`);o(M,N),o(M,F);let I=new Map;return i(()=>{I=C({items:P.get()||[],getKey:(e,t)=>t,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,n,s,c,d)=>{h(f(()=>{let n=e(),s=l(`tr`,n);o(n,s);let c=l(`td`,s);o(s,c);let d=l(`code`,c);o(c,d);let f=r(`rue:slot:anchor`);o(d,f),i(()=>{let e=t.name;a(()=>h(e,d,f))});let g=l(`td`,s);o(s,g);let _=r(`rue:slot:anchor`);o(g,_),i(()=>{let e=t.kind;a(()=>h(e,g,_))});let v=l(`td`,s);o(s,v);let y=l(`span`,v);o(v,y),i(()=>{p(y,`badge ${t.result?`badge-success`:`badge-ghost`}`)});let b=m(y);o(y,b),i(()=>{u(b,String(t.result))});let x=l(`td`,s);o(s,x);let S=m(x);return o(x,S),i(()=>{u(S,String(t.value))}),n}),n,s)}})}),t}):``;a(()=>h(t,b,S))}),t})}),n,c),n})};export{D as default};