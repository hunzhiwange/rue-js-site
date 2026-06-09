import{$ as e,Dt as t,Et as n,Ht as r,J as i,Q as a,Rt as o,Tt as s,Xt as c,Y as l,Z as u,_t as d,ct as f,et as p,l as m,mt as h,ot as g,qt as _,s as v,t as y,tt as b,yt as x}from"./vapor-runtime-aZAg0Qkw.js";import{a as S,n as C}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as w}from"./Code-5DOEyGxf.js";import{r as T}from"./SidebarPlaygroundExample-cASgDpH3.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>_(()=>{let e=S(`ref:1:0`,()=>o(`preview`)),r=S(`reactive:1:1`,()=>s({count:0})),i=S(`readonly:1:2`,()=>n({label:`locked`,nested:{count:10}})),a=S(`shallowReadonly:1:3`,()=>t({label:`root locked`,nested:{count:20}})),c=S(`ref:1:4`,()=>o(2)),l=S(`computed:1:5`,()=>d(()=>c.value*2)),u=S(`computed:1:6`,()=>d({get:()=>c.value,set:e=>{c.value=e}})),f=S(`ref:1:7`,()=>o(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:r,locked:i,shallow:a,base:c,doubled:l,writable:u,lastAction:f,tryWriteReadonly:()=>{try{i.label=`changed`,f.value=`readonly 写入未生效。`}catch(e){f.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{r.count+=1,f.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{a.nested.count+=1,f.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{u.set(u.get()+1),f.value=`带 setter 的 computed 是可写的。`},rows:[[`reactive(mutable)`,x(r),`count: ${r.count}`],[`readonly(locked)`,x(i),i.label],[`readonly(locked.nested)`,x(i.nested),`count: ${i.nested.count}`],[`shallowReadonly(shallow)`,x(a),a.label],[`shallowReadonly(shallow.nested)`,x(a.nested),`count: ${a.nested.count}`],[`computed(() => base * 2)`,x(l),`value: ${l.get()}`],[`computed({ get, set })`,x(u),`value: ${u.get()}`]]}}));return m(t=>{let n=a(),o=u(`rue:component:anchor`);return l(n,o),v(y(T,{children:m(()=>{let t=a(),n=e(`h1`,t);l(t,n),f(n,`text-5xl font-semibold mb-4 md:mb-4`),l(n,p(`isReadonly 判断边界`));let o=e(`div`,t);l(t,o),g(o,`role`,`tablist`),f(o,`tabs tabs-box`);let s=e(`button`,o);l(o,s),g(s,`role`,`tab`),c(()=>{f(s,String(`tab ${O.value===`preview`?`tab-active`:``}`))}),i(s,`click`,()=>{O.value=`preview`}),l(s,p(`效果`));let d=e(`button`,o);l(o,d),g(d,`role`,`tab`),c(()=>{f(d,String(`tab ${O.value===`code`?`tab-active`:``}`))}),i(d,`click`,()=>{O.value=`code`}),l(d,p(`代码`));let _=e(`div`,t);l(t,_),f(_,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=u(`rue:slot:anchor`);l(_,x),c(()=>{let t=O.value===`code`?m(()=>{let t=a(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto`);let i=e(`div`,n);l(n,i),f(i,`card-body p-0`);let o=u(`rue:component:anchor`);return l(i,o),c(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:E});r(()=>v(e,i,o))}),t}):``;r(()=>v(t,_,x))}),l(_,p(` `));let S=u(`rue:slot:anchor`);return l(_,S),c(()=>{let t=O.value===`preview`?m(()=>{let t=a(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow`);let o=e(`div`,n);l(n,o),f(o,`card-body gap-5`);let s=e(`div`,o);l(o,s),f(s,`overflow-x-auto`);let d=e(`table`,s);l(s,d),f(d,`table`);let g=e(`thead`,d);l(d,g);let _=e(`tr`,g);l(g,_);let y=e(`th`,_);l(_,y),l(y,p(`值`));let x=e(`th`,_);l(_,x),l(x,p(`isReadonly`));let S=e(`th`,_);l(_,S),l(S,p(`当前状态`));let w=e(`tbody`,d);l(d,w);let T=u(`rue:list:start`),E=u(`rue:list:end`);l(w,T),l(w,E);let O=new Map;c(()=>{O=C({items:B||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,n,i,o,s)=>{v(m(()=>{let n=a(),i=e(`tr`,n);l(n,i);let o=e(`td`,i);l(i,o);let s=u(`rue:slot:anchor`);l(o,s),c(()=>{let e=t[0];r(()=>v(e,o,s))});let d=e(`td`,i);l(i,d);let p=e(`span`,d);l(d,p),c(()=>{f(p,String(`badge ${t[1]?`badge-primary`:``}`))});let m=u(`rue:slot:anchor`);l(p,m),c(()=>{let e=D(t[1]);r(()=>v(e,p,m))});let h=e(`td`,i);l(i,h);let g=u(`rue:slot:anchor`);return l(h,g),c(()=>{let e=t[2];r(()=>v(e,h,g))}),n}),n,i)}})});let k=e(`div`,o);l(o,k),f(k,`flex flex-wrap gap-2`);let A=e(`button`,k);l(k,A),f(A,`btn btn-sm`),i(A,`click`,L),l(A,p(`reactive +1`));let j=e(`button`,k);l(k,j),f(j,`btn btn-sm`),i(j,`click`,I),l(j,p(`尝试写 readonly`));let M=e(`button`,k);l(k,M),f(M,`btn btn-sm`),i(M,`click`,R),l(M,p(`shallow nested +1`));let N=e(`button`,k);l(k,N),f(N,`btn btn-sm`),i(N,`click`,z),l(N,p(`writable computed +1`));let P=e(`div`,o);l(o,P),f(P,`alert`);let V=e(`span`,P);l(P,V);let H=b(V);return l(V,H),c(()=>{h(H,F.value)}),t}):``;r(()=>v(t,_,S))}),t})}),n,o),n})};export{O as default};