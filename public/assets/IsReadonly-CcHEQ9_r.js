import{$ as e,Dt as t,Et as n,Ot as r,Q as i,Qt as a,Wt as o,X as s,Y as c,Yt as l,bt as u,et as d,ht as f,l as p,lt as m,nt as h,o as g,st as _,t as v,tt as y,vt as b,zt as x}from"./vapor-runtime-CXIalONM.js";import{a as S,n as C}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as w}from"./Code-BIscIyEp.js";import{r as T}from"./SidebarPlaygroundExample-CEz1fABX.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>l(()=>{let e=S(`ref:1:0`,()=>x(`preview`)),i=S(`reactive:1:1`,()=>n({count:0})),a=S(`readonly:1:2`,()=>t({label:`locked`,nested:{count:10}})),o=S(`shallowReadonly:1:3`,()=>r({label:`root locked`,nested:{count:20}})),s=S(`ref:1:4`,()=>x(2)),c=S(`computed:1:5`,()=>b(()=>s.value*2)),l=S(`computed:1:6`,()=>b({get:()=>s.value,set:e=>{s.value=e}})),d=S(`ref:1:7`,()=>x(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:i,locked:a,shallow:o,base:s,doubled:c,writable:l,lastAction:d,tryWriteReadonly:()=>{try{a.label=`changed`,d.value=`readonly 写入未生效。`}catch(e){d.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{i.count+=1,d.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{o.nested.count+=1,d.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{l.set(l.get()+1),d.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>b(()=>[[`reactive(mutable)`,u(i),`count: ${i.count}`],[`readonly(locked)`,u(a),a.label],[`readonly(locked.nested)`,u(a.nested),`count: ${a.nested.count}`],[`shallowReadonly(shallow)`,u(o),o.label],[`shallowReadonly(shallow.nested)`,u(o.nested),`count: ${o.nested.count}`],[`computed(() => base * 2)`,u(c),`value: ${c.get()}`],[`computed({ get, set })`,u(l),`value: ${l.get()}`]]))}}));return p(t=>{let n=e(),r=i(`rue:component:anchor`);return s(n,r),g(v(T,{children:p(()=>{let t=e(),n=d(`h1`,t);s(t,n),m(n,`text-5xl font-semibold mb-4 md:mb-4`),s(n,y(`isReadonly 判断边界`));let r=d(`div`,t);s(t,r),_(r,`role`,`tablist`),m(r,`tabs tabs-box`);let l=d(`button`,r);s(r,l),_(l,`role`,`tab`),a(()=>{m(l,`tab ${O.value===`preview`?`tab-active`:``}`)}),c(l,`click`,()=>{O.value=`preview`}),s(l,y(`效果`));let u=d(`button`,r);s(r,u),_(u,`role`,`tab`),a(()=>{m(u,`tab ${O.value===`code`?`tab-active`:``}`)}),c(u,`click`,()=>{O.value=`code`}),s(u,y(`代码`));let b=d(`div`,t);s(t,b),m(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);s(b,x),a(()=>{let t=O.value===`code`?p(()=>{let t=e(),n=d(`div`,t);s(t,n),m(n,`card bg-base-100 shadow overflow-auto`);let r=d(`div`,n);s(n,r),m(r,`card-body p-0`);let c=i(`rue:component:anchor`);return s(r,c),a(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:E});o(()=>g(e,r,c))}),t}):``;o(()=>g(t,b,x))}),s(b,y(` `));let S=i(`rue:slot:anchor`);return s(b,S),a(()=>{let t=O.value===`preview`?p(()=>{let t=e(),n=d(`div`,t);s(t,n),m(n,`card bg-base-100 shadow`);let r=d(`div`,n);s(n,r),m(r,`card-body gap-5`);let l=d(`div`,r);s(r,l),m(l,`overflow-x-auto`);let u=d(`table`,l);s(l,u),m(u,`table`);let _=d(`thead`,u);s(u,_);let v=d(`tr`,_);s(_,v);let b=d(`th`,v);s(v,b),s(b,y(`值`));let x=d(`th`,v);s(v,x),s(x,y(`isReadonly`));let S=d(`th`,v);s(v,S),s(S,y(`当前状态`));let w=d(`tbody`,u);s(u,w);let T=i(`rue:list:start`),E=i(`rue:list:end`);s(w,T),s(w,E);let O=new Map;a(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,n,r,c,l)=>{g(p(()=>{let n=e(),r=d(`tr`,n);s(n,r);let c=d(`td`,r);s(r,c);let l=i(`rue:slot:anchor`);s(c,l),a(()=>{let e=t[0];o(()=>g(e,c,l))});let u=d(`td`,r);s(r,u);let f=d(`span`,u);s(u,f),a(()=>{m(f,`badge ${t[1]?`badge-primary`:``}`)});let p=i(`rue:slot:anchor`);s(f,p),a(()=>{let e=D(t[1]);o(()=>g(e,f,p))});let h=d(`td`,r);s(r,h);let _=i(`rue:slot:anchor`);return s(h,_),a(()=>{let e=t[2];o(()=>g(e,h,_))}),n}),n,r)}})});let k=d(`div`,r);s(r,k),m(k,`flex flex-wrap gap-2`);let A=d(`button`,k);s(k,A),m(A,`btn btn-sm`),c(A,`click`,L),s(A,y(`reactive +1`));let j=d(`button`,k);s(k,j),m(j,`btn btn-sm`),c(j,`click`,I),s(j,y(`尝试写 readonly`));let M=d(`button`,k);s(k,M),m(M,`btn btn-sm`),c(M,`click`,R),s(M,y(`shallow nested +1`));let N=d(`button`,k);s(k,N),m(N,`btn btn-sm`),c(N,`click`,z),s(N,y(`writable computed +1`));let P=d(`div`,r);s(r,P),m(P,`alert`);let V=d(`span`,P);s(P,V);let H=h(V);return s(V,H),a(()=>{f(H,F.value)}),t}):``;o(()=>g(t,b,S))}),t})}),n,r),n})};export{O as default};