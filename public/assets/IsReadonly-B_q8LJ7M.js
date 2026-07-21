import{Bt as e,Cn as t,Ct as n,Jt as r,Kt as i,Lt as a,Mt as o,Tt as s,Yt as c,dt as l,ft as u,ht as d,mt as f,ot as p,pn as m,pt as h,st as g,tn as _,vn as v}from"./context-8lXZvIn-.js";import{l as y,o as b,t as x}from"./vapor-runtime-ygJWVcNn.js";import{a as S,n as C}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as w}from"./Code-DhoWkRkB.js";import{r as T}from"./SidebarPlaygroundExample-B78jsvoF.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>t(()=>{let t=S(`ref:1:0`,()=>m(`preview`)),n=S(`reactive:1:1`,()=>i({count:0})),o=S(`readonly:1:2`,()=>r({label:`locked`,nested:{count:10}})),s=S(`shallowReadonly:1:3`,()=>c({label:`root locked`,nested:{count:20}})),l=S(`ref:1:4`,()=>m(2)),u=S(`computed:1:5`,()=>a(()=>l.value*2)),d=S(`computed:1:6`,()=>a({get:()=>l.value,set:e=>{l.value=e}})),f=S(`ref:1:7`,()=>m(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:t,mutable:n,locked:o,shallow:s,base:l,doubled:u,writable:d,lastAction:f,tryWriteReadonly:()=>{try{o.label=`changed`,f.value=`readonly 写入未生效。`}catch(e){f.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{n.count+=1,f.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{s.nested.count+=1,f.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{d.set(d.get()+1),f.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>a(()=>[[`reactive(mutable)`,e(n),`count: ${n.count}`],[`readonly(locked)`,e(o),o.label],[`readonly(locked.nested)`,e(o.nested),`count: ${o.nested.count}`],[`shallowReadonly(shallow)`,e(s),s.label],[`shallowReadonly(shallow.nested)`,e(s.nested),`count: ${s.nested.count}`],[`computed(() => base * 2)`,e(u),`value: ${u.get()}`],[`computed({ get, set })`,e(d),`value: ${d.get()}`]]))}}));return y(e=>{let t=u(),r=l(`rue:component:anchor`);return g(t,r),b(x(T,{children:y(()=>{let e=u(),t=h(`h1`,e);g(e,t),s(t,`text-5xl font-semibold mb-4 md:mb-4`),g(t,f(`isReadonly 判断边界`));let r=h(`div`,e);g(e,r),n(r,`role`,`tablist`),s(r,`tabs tabs-box`);let i=h(`button`,r);g(r,i),n(i,`role`,`tab`),_(()=>{s(i,`tab ${O.value===`preview`?`tab-active`:``}`)}),p(i,`click`,()=>{O.value=`preview`}),g(i,f(`效果`));let a=h(`button`,r);g(r,a),n(a,`role`,`tab`),_(()=>{s(a,`tab ${O.value===`code`?`tab-active`:``}`)}),p(a,`click`,()=>{O.value=`code`}),g(a,f(`代码`));let c=h(`div`,e);g(e,c),s(c,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let m=l(`rue:slot:anchor`);g(c,m),_(()=>{let e=O.value===`code`?y(()=>{let e=u(),t=h(`div`,e);g(e,t),s(t,`card bg-base-100 shadow overflow-auto`);let n=h(`div`,t);g(t,n),s(n,`card-body p-0`);let r=l(`rue:component:anchor`);return g(n,r),_(()=>{let e=x(w,{className:`h-full`,lang:`tsx`,code:E});v(()=>b(e,n,r))}),e}):``;v(()=>b(e,c,m))}),g(c,f(` `));let S=l(`rue:slot:anchor`);return g(c,S),_(()=>{let e=O.value===`preview`?y(()=>{let e=u(),t=h(`div`,e);g(e,t),s(t,`card bg-base-100 shadow`);let n=h(`div`,t);g(t,n),s(n,`card-body gap-5`);let r=h(`div`,n);g(n,r),s(r,`overflow-x-auto`);let i=h(`table`,r);g(r,i),s(i,`table`);let a=h(`thead`,i);g(i,a);let c=h(`tr`,a);g(a,c);let m=h(`th`,c);g(c,m),g(m,f(`值`));let x=h(`th`,c);g(c,x),g(x,f(`isReadonly`));let S=h(`th`,c);g(c,S),g(S,f(`当前状态`));let w=h(`tbody`,i);g(i,w);let T=l(`rue:list:start`),E=l(`rue:list:end`);g(w,T),g(w,E);let O=new Map;_(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,t,n,r,i)=>{b(y(()=>{let t=u(),n=h(`tr`,t);g(t,n);let r=h(`td`,n);g(n,r);let i=l(`rue:slot:anchor`);g(r,i),_(()=>{let t=e[0];v(()=>b(t,r,i))});let a=h(`td`,n);g(n,a);let o=h(`span`,a);g(a,o),_(()=>{s(o,`badge ${e[1]?`badge-primary`:``}`)});let c=l(`rue:slot:anchor`);g(o,c),_(()=>{let t=D(e[1]);v(()=>b(t,o,c))});let d=h(`td`,n);g(n,d);let f=l(`rue:slot:anchor`);return g(d,f),_(()=>{let t=e[2];v(()=>b(t,d,f))}),t}),t,n)}})});let k=h(`div`,n);g(n,k),s(k,`flex flex-wrap gap-2`);let A=h(`button`,k);g(k,A),s(A,`btn btn-sm`),p(A,`click`,L),g(A,f(`reactive +1`));let j=h(`button`,k);g(k,j),s(j,`btn btn-sm`),p(j,`click`,I),g(j,f(`尝试写 readonly`));let M=h(`button`,k);g(k,M),s(M,`btn btn-sm`),p(M,`click`,R),g(M,f(`shallow nested +1`));let N=h(`button`,k);g(k,N),s(N,`btn btn-sm`),p(N,`click`,z),g(N,f(`writable computed +1`));let P=h(`div`,n);g(n,P),s(P,`alert`);let V=h(`span`,P);g(P,V);let H=d(V);return g(V,H),_(()=>{o(H,F.value)}),e}):``;v(()=>b(e,c,S))}),e})}),t,r),t})};export{O as default};