import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,Ot as a,X as o,Xt as s,Z as c,ct as l,et as u,gt as d,kt as f,l as p,nt as m,o as h,rt as g,t as _,tt as v,ut as y,xt as b,yt as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S,n as C}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as w}from"./Code-D5UqTwV6.js";import{r as T}from"./SidebarPlaygroundExample-D2vGHFCu.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>s(()=>{let e=S(`ref:1:0`,()=>n(`preview`)),t=S(`reactive:1:1`,()=>r({count:0})),i=S(`readonly:1:2`,()=>a({label:`locked`,nested:{count:10}})),o=S(`shallowReadonly:1:3`,()=>f({label:`root locked`,nested:{count:20}})),s=S(`ref:1:4`,()=>n(2)),c=S(`computed:1:5`,()=>x(()=>s.value*2)),l=S(`computed:1:6`,()=>x({get:()=>s.value,set:e=>{s.value=e}})),u=S(`ref:1:7`,()=>n(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:t,locked:i,shallow:o,base:s,doubled:c,writable:l,lastAction:u,tryWriteReadonly:()=>{try{i.label=`changed`,u.value=`readonly 写入未生效。`}catch(e){u.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{t.count+=1,u.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{o.nested.count+=1,u.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{l.set(l.get()+1),u.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>x(()=>[[`reactive(mutable)`,b(t),`count: ${t.count}`],[`readonly(locked)`,b(i),i.label],[`readonly(locked.nested)`,b(i.nested),`count: ${i.nested.count}`],[`shallowReadonly(shallow)`,b(o),o.label],[`shallowReadonly(shallow.nested)`,b(o.nested),`count: ${o.nested.count}`],[`computed(() => base * 2)`,b(c),`value: ${c.get()}`],[`computed({ get, set })`,b(l),`value: ${l.get()}`]]))}}));return p(n=>{let r=u(),a=e(`rue:component:anchor`);return c(r,a),h(_(T,{children:p(()=>{let n=u(),r=v(`h1`,n);c(n,r),y(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,m(`isReadonly 判断边界`));let a=v(`div`,n);c(n,a),l(a,`role`,`tablist`),y(a,`tabs tabs-box`);let s=v(`button`,a);c(a,s),l(s,`role`,`tab`),t(()=>{y(s,`tab ${O.value===`preview`?`tab-active`:``}`)}),o(s,`click`,()=>{O.value=`preview`}),c(s,m(`效果`));let f=v(`button`,a);c(a,f),l(f,`role`,`tab`),t(()=>{y(f,`tab ${O.value===`code`?`tab-active`:``}`)}),o(f,`click`,()=>{O.value=`code`}),c(f,m(`代码`));let b=v(`div`,n);c(n,b),y(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);c(b,x),t(()=>{let n=O.value===`code`?p(()=>{let n=u(),r=v(`div`,n);c(n,r),y(r,`card bg-base-100 shadow overflow-auto`);let a=v(`div`,r);c(r,a),y(a,`card-body p-0`);let o=e(`rue:component:anchor`);return c(a,o),t(()=>{let e=_(w,{className:`h-full`,lang:`tsx`,code:E});i(()=>h(e,a,o))}),n}):``;i(()=>h(n,b,x))}),c(b,m(` `));let S=e(`rue:slot:anchor`);return c(b,S),t(()=>{let n=O.value===`preview`?p(()=>{let n=u(),r=v(`div`,n);c(n,r),y(r,`card bg-base-100 shadow`);let a=v(`div`,r);c(r,a),y(a,`card-body gap-5`);let s=v(`div`,a);c(a,s),y(s,`overflow-x-auto`);let l=v(`table`,s);c(s,l),y(l,`table`);let f=v(`thead`,l);c(l,f);let _=v(`tr`,f);c(f,_);let b=v(`th`,_);c(_,b),c(b,m(`值`));let x=v(`th`,_);c(_,x),c(x,m(`isReadonly`));let S=v(`th`,_);c(_,S),c(S,m(`当前状态`));let w=v(`tbody`,l);c(l,w);let T=e(`rue:list:start`),E=e(`rue:list:end`);c(w,T),c(w,E);let O=new Map;t(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(n,r,a,o,s)=>{h(p(()=>{let r=u(),a=v(`tr`,r);c(r,a);let o=v(`td`,a);c(a,o);let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=n[0];i(()=>h(e,o,s))});let l=v(`td`,a);c(a,l);let d=v(`span`,l);c(l,d),t(()=>{y(d,`badge ${n[1]?`badge-primary`:``}`)});let f=e(`rue:slot:anchor`);c(d,f),t(()=>{let e=D(n[1]);i(()=>h(e,d,f))});let p=v(`td`,a);c(a,p);let m=e(`rue:slot:anchor`);return c(p,m),t(()=>{let e=n[2];i(()=>h(e,p,m))}),r}),r,a)}})});let k=v(`div`,a);c(a,k),y(k,`flex flex-wrap gap-2`);let A=v(`button`,k);c(k,A),y(A,`btn btn-sm`),o(A,`click`,L),c(A,m(`reactive +1`));let j=v(`button`,k);c(k,j),y(j,`btn btn-sm`),o(j,`click`,I),c(j,m(`尝试写 readonly`));let M=v(`button`,k);c(k,M),y(M,`btn btn-sm`),o(M,`click`,R),c(M,m(`shallow nested +1`));let N=v(`button`,k);c(k,N),y(N,`btn btn-sm`),o(N,`click`,z),c(N,m(`writable computed +1`));let P=v(`div`,a);c(a,P),y(P,`alert`);let V=v(`span`,P);c(P,V);let H=g(V);return c(V,H),t(()=>{d(H,F.value)}),n}):``;i(()=>h(n,b,S))}),n})}),r,a),r})};export{O as default};