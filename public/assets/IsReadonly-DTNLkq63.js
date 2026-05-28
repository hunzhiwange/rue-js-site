import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Q as a,Tt as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,d as f,et as p,gt as m,l as h,mt as g,ot as _,t as v,tt as y,vt as b,wt as x}from"./vapor-runtime-BR_2rwNk.js";import{a as S,n as C}from"./vapor-helpers-vapor-DkadWylb.js";import{t as w}from"./Code-B_4lzH85.js";import{t as T}from"./SidebarPlaygroundExample-CtM-WHq_.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(`preview`)),n=S(`reactive:1:1`,()=>t({count:0})),r=S(`readonly:1:2`,()=>x({label:`locked`,nested:{count:10}})),a=S(`shallowReadonly:1:3`,()=>o({label:`root locked`,nested:{count:20}})),s=S(`ref:1:4`,()=>i(2)),c=S(`computed:1:5`,()=>m(()=>s.value*2)),l=S(`computed:1:6`,()=>m({get:()=>s.value,set:e=>{s.value=e}})),u=S(`ref:1:7`,()=>i(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:n,locked:r,shallow:a,base:s,doubled:c,writable:l,lastAction:u,tryWriteReadonly:()=>{try{r.label=`changed`,u.value=`readonly 写入未生效。`}catch(e){u.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{n.count+=1,u.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{a.nested.count+=1,u.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{l.set(l.get()+1),u.value=`带 setter 的 computed 是可写的。`},rows:[[`reactive(mutable)`,b(n),`count: ${n.count}`],[`readonly(locked)`,b(r),r.label],[`readonly(locked.nested)`,b(r.nested),`count: ${r.nested.count}`],[`shallowReadonly(shallow)`,b(a),a.label],[`shallowReadonly(shallow.nested)`,b(a.nested),`count: ${a.nested.count}`],[`computed(() => base * 2)`,b(c),`value: ${c.get()}`],[`computed({ get, set })`,b(l),`value: ${l.get()}`]]}}));return f(t=>{let r=a(),i=u(`rue:component:anchor`);return c(r,i),h(v(T,{children:f(()=>{let t=a(),r=e(`h1`,t);c(t,r),d(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,p(`isReadonly 判断边界`));let i=e(`div`,t);c(t,i),_(i,`role`,`tablist`),d(i,`tabs tabs-box`);let o=e(`button`,i);c(i,o),_(o,`role`,`tab`),l(()=>{d(o,String(`tab ${O.value===`preview`?`tab-active`:``}`))}),n(o,`click`,()=>{O.value=`preview`}),c(o,p(`效果`));let m=e(`button`,i);c(i,m),_(m,`role`,`tab`),l(()=>{d(m,String(`tab ${O.value===`code`?`tab-active`:``}`))}),n(m,`click`,()=>{O.value=`code`}),c(m,p(`代码`));let b=e(`div`,t);c(t,b),d(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=u(`rue:slot:anchor`);c(b,x),l(()=>{let t=O.value===`code`?f(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:E});s(()=>h(e,r,i))}),t}):``;s(()=>h(t,b,x))}),c(b,p(` `));let S=u(`rue:slot:anchor`);return c(b,S),l(()=>{let t=O.value===`preview`?f(()=>{let t=a(),r=e(`div`,t);c(t,r),d(r,`card bg-base-100 shadow`);let i=e(`div`,r);c(r,i),d(i,`card-body gap-5`);let o=e(`div`,i);c(i,o),d(o,`overflow-x-auto`);let m=e(`table`,o);c(o,m),d(m,`table`);let _=e(`thead`,m);c(m,_);let v=e(`tr`,_);c(_,v);let b=e(`th`,v);c(v,b),c(b,p(`值`));let x=e(`th`,v);c(v,x),c(x,p(`isReadonly`));let S=e(`th`,v);c(v,S),c(S,p(`当前状态`));let w=e(`tbody`,m);c(m,w);let T=u(`rue:list:start`),E=u(`rue:list:end`);c(w,T),c(w,E);let O=new Map;l(()=>{O=C({items:B||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`tr`,n);c(n,r);let i=e(`td`,r);c(r,i);let o=u(`rue:slot:anchor`);c(i,o),l(()=>{let e=t[0];s(()=>h(e,i,o))});let f=e(`td`,r);c(r,f);let p=e(`span`,f);c(f,p),l(()=>{d(p,String(`badge ${t[1]?`badge-primary`:``}`))});let m=u(`rue:slot:anchor`);c(p,m),l(()=>{let e=D(t[1]);s(()=>h(e,p,m))});let g=e(`td`,r);c(r,g);let _=u(`rue:slot:anchor`);return c(g,_),l(()=>{let e=t[2];s(()=>h(e,g,_))}),n}),n,r)}})});let k=e(`div`,i);c(i,k),d(k,`flex flex-wrap gap-2`);let A=e(`button`,k);c(k,A),d(A,`btn btn-sm`),n(A,`click`,L),c(A,p(`reactive +1`));let j=e(`button`,k);c(k,j),d(j,`btn btn-sm`),n(j,`click`,I),c(j,p(`尝试写 readonly`));let M=e(`button`,k);c(k,M),d(M,`btn btn-sm`),n(M,`click`,R),c(M,p(`shallow nested +1`));let N=e(`button`,k);c(k,N),d(N,`btn btn-sm`),n(N,`click`,z),c(N,p(`writable computed +1`));let P=e(`div`,i);c(i,P),d(P,`alert`);let V=e(`span`,P);c(P,V);let H=y(V);return c(V,H),l(()=>{g(H,F.value)}),t}):``;s(()=>h(t,b,S))}),t})}),r,i),r})};export{O as default};