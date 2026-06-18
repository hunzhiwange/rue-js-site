import{$ as e,Et as t,Ht as n,J as r,Lt as i,Q as a,Tt as o,X as s,Xt as c,Z as l,at as u,et as d,gt as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,vt as b,wt as x}from"./vapor-runtime-iQZthBPQ.js";import{a as S,n as C}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as w}from"./Code-CZqShVUj.js";import{r as T}from"./SidebarPlaygroundExample-5H7RL-T7.js";var E=`import {
  computed,
  isReadonly,
  reactive,
  readonly,
  ref,
  shallowReadonly,
  type FC,
} from '@rue-js/rue';

const IsReadonlyDemo: FC = () => {
  const mutable = reactive({ count: 0 });
  const locked = readonly({ label: 'locked', nested: { count: 10 } });
  const shallow = shallowReadonly({ label: 'root locked', nested: { count: 20 } });
  const base = ref(2);
  const doubled = computed(() => base.value * 2);
  const writable = computed({
    get: () => base.value,
    set: value => {
      base.value = value;
    },
  });

  return (
    <div>
      <p>reactive: {String(isReadonly(mutable))}</p>
      <p>readonly: {String(isReadonly(locked))}</p>
      <p>readonly nested: {String(isReadonly(locked.nested))}</p>
      <p>shallowReadonly root: {String(isReadonly(shallow))}</p>
      <p>shallowReadonly nested: {String(isReadonly(shallow.nested))}</p>
      <p>computed readonly: {String(isReadonly(doubled))}</p>
      <p>writable computed: {String(isReadonly(writable))}</p>
    </div>
  );
};

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>g(()=>{let e=S(`ref:1:0`,()=>i(`preview`)),n=S(`reactive:1:1`,()=>x({count:0})),r=S(`readonly:1:2`,()=>o({label:`locked`,nested:{count:10}})),a=S(`shallowReadonly:1:3`,()=>t({label:`root locked`,nested:{count:20}})),s=S(`ref:1:4`,()=>i(2)),c=S(`computed:1:5`,()=>f(()=>s.value*2)),l=S(`computed:1:6`,()=>f({get:()=>s.value,set:e=>{s.value=e}})),u=S(`ref:1:7`,()=>i(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:n,locked:r,shallow:a,base:s,doubled:c,writable:l,lastAction:u,tryWriteReadonly:()=>{try{r.label=`changed`,u.value=`readonly 写入未生效。`}catch(e){u.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{n.count+=1,u.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{a.nested.count+=1,u.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{l.set(l.get()+1),u.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>f(()=>[[`reactive(mutable)`,b(n),`count: ${n.count}`],[`readonly(locked)`,b(r),r.label],[`readonly(locked.nested)`,b(r.nested),`count: ${r.nested.count}`],[`shallowReadonly(shallow)`,b(a),a.label],[`shallowReadonly(shallow.nested)`,b(a.nested),`count: ${a.nested.count}`],[`computed(() => base * 2)`,b(c),`value: ${c.get()}`],[`computed({ get, set })`,b(l),`value: ${l.get()}`]]))}}));return p(t=>{let i=l(),o=s(`rue:component:anchor`);return r(i,o),_(y(T,{children:p(()=>{let t=l(),i=a(`h1`,t);r(t,i),v(i,`text-5xl font-semibold mb-4 md:mb-4`),r(i,e(`isReadonly 判断边界`));let o=a(`div`,t);r(t,o),u(o,`role`,`tablist`),v(o,`tabs tabs-box`);let f=a(`button`,o);r(o,f),u(f,`role`,`tab`),c(()=>{v(f,`tab ${O.value===`preview`?`tab-active`:``}`)}),h(f,`click`,()=>{O.value=`preview`}),r(f,e(`效果`));let g=a(`button`,o);r(o,g),u(g,`role`,`tab`),c(()=>{v(g,`tab ${O.value===`code`?`tab-active`:``}`)}),h(g,`click`,()=>{O.value=`code`}),r(g,e(`代码`));let b=a(`div`,t);r(t,b),v(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=s(`rue:slot:anchor`);r(b,x),c(()=>{let e=O.value===`code`?p(()=>{let e=l(),t=a(`div`,e);r(e,t),v(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),v(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),c(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:E});n(()=>_(e,i,o))}),e}):``;n(()=>_(e,b,x))}),r(b,e(` `));let S=s(`rue:slot:anchor`);return r(b,S),c(()=>{let t=O.value===`preview`?p(()=>{let t=l(),i=a(`div`,t);r(t,i),v(i,`card bg-base-100 shadow`);let o=a(`div`,i);r(i,o),v(o,`card-body gap-5`);let u=a(`div`,o);r(o,u),v(u,`overflow-x-auto`);let f=a(`table`,u);r(u,f),v(f,`table`);let g=a(`thead`,f);r(f,g);let y=a(`tr`,g);r(g,y);let b=a(`th`,y);r(y,b),r(b,e(`值`));let x=a(`th`,y);r(y,x),r(x,e(`isReadonly`));let S=a(`th`,y);r(y,S),r(S,e(`当前状态`));let w=a(`tbody`,f);r(f,w);let T=s(`rue:list:start`),E=s(`rue:list:end`);r(w,T),r(w,E);let O=new Map;c(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,t,i,o,u)=>{_(p(()=>{let t=l(),i=a(`tr`,t);r(t,i);let o=a(`td`,i);r(i,o);let u=s(`rue:slot:anchor`);r(o,u),c(()=>{let t=e[0];n(()=>_(t,o,u))});let d=a(`td`,i);r(i,d);let f=a(`span`,d);r(d,f),c(()=>{v(f,`badge ${e[1]?`badge-primary`:``}`)});let p=s(`rue:slot:anchor`);r(f,p),c(()=>{let t=D(e[1]);n(()=>_(t,f,p))});let m=a(`td`,i);r(i,m);let h=s(`rue:slot:anchor`);return r(m,h),c(()=>{let t=e[2];n(()=>_(t,m,h))}),t}),t,i)}})});let k=a(`div`,o);r(o,k),v(k,`flex flex-wrap gap-2`);let A=a(`button`,k);r(k,A),v(A,`btn btn-sm`),h(A,`click`,L),r(A,e(`reactive +1`));let j=a(`button`,k);r(k,j),v(j,`btn btn-sm`),h(j,`click`,I),r(j,e(`尝试写 readonly`));let M=a(`button`,k);r(k,M),v(M,`btn btn-sm`),h(M,`click`,R),r(M,e(`shallow nested +1`));let N=a(`button`,k);r(k,N),v(N,`btn btn-sm`),h(N,`click`,z),r(N,e(`writable computed +1`));let P=a(`div`,o);r(o,P),v(P,`alert`);let V=a(`span`,P);r(P,V);let H=d(V);return r(V,H),c(()=>{m(H,F.value)}),t}):``;n(()=>_(t,b,S))}),t})}),i,o),i})};export{O as default};