import{$t as e,Jt as t,Mt as n,Nt as r,Q as i,St as a,Tt as o,Z as s,dt as c,et as l,in as u,it as d,jt as f,l as p,lt as m,nt as h,o as g,rt as _,t as v,tt as y,vt as b,zt as x}from"./vapor-runtime-DsQWl-IB.js";import{a as S,n as C}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as w}from"./Code-4SUSUwRg.js";import{r as T}from"./SidebarPlaygroundExample-BEWYUWOl.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>u(()=>{let e=S(`ref:1:0`,()=>t(`preview`)),i=S(`reactive:1:1`,()=>f({count:0})),s=S(`readonly:1:2`,()=>n({label:`locked`,nested:{count:10}})),c=S(`shallowReadonly:1:3`,()=>r({label:`root locked`,nested:{count:20}})),l=S(`ref:1:4`,()=>t(2)),u=S(`computed:1:5`,()=>a(()=>l.value*2)),d=S(`computed:1:6`,()=>a({get:()=>l.value,set:e=>{l.value=e}})),p=S(`ref:1:7`,()=>t(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:e,mutable:i,locked:s,shallow:c,base:l,doubled:u,writable:d,lastAction:p,tryWriteReadonly:()=>{try{s.label=`changed`,p.value=`readonly 写入未生效。`}catch(e){p.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{i.count+=1,p.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{c.nested.count+=1,p.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{d.set(d.get()+1),p.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>a(()=>[[`reactive(mutable)`,o(i),`count: ${i.count}`],[`readonly(locked)`,o(s),s.label],[`readonly(locked.nested)`,o(s.nested),`count: ${s.nested.count}`],[`shallowReadonly(shallow)`,o(c),c.label],[`shallowReadonly(shallow.nested)`,o(c.nested),`count: ${c.nested.count}`],[`computed(() => base * 2)`,o(u),`value: ${u.get()}`],[`computed({ get, set })`,o(d),`value: ${d.get()}`]]))}}));return p(t=>{let n=y(),r=l(`rue:component:anchor`);return i(n,r),g(v(T,{children:p(()=>{let t=y(),n=h(`h1`,t);i(t,n),c(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,_(`isReadonly 判断边界`));let r=h(`div`,t);i(t,r),m(r,`role`,`tablist`),c(r,`tabs tabs-box`);let a=h(`button`,r);i(r,a),m(a,`role`,`tab`),x(()=>{c(a,`tab ${O.value===`preview`?`tab-active`:``}`)}),s(a,`click`,()=>{O.value=`preview`}),i(a,_(`效果`));let o=h(`button`,r);i(r,o),m(o,`role`,`tab`),x(()=>{c(o,`tab ${O.value===`code`?`tab-active`:``}`)}),s(o,`click`,()=>{O.value=`code`}),i(o,_(`代码`));let u=h(`div`,t);i(t,u),c(u,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let f=l(`rue:slot:anchor`);i(u,f),x(()=>{let t=O.value===`code`?p(()=>{let t=y(),n=h(`div`,t);i(t,n),c(n,`card bg-base-100 shadow overflow-auto`);let r=h(`div`,n);i(n,r),c(r,`card-body p-0`);let a=l(`rue:component:anchor`);return i(r,a),x(()=>{let t=v(w,{className:`h-full`,lang:`tsx`,code:E});e(()=>g(t,r,a))}),t}):``;e(()=>g(t,u,f))}),i(u,_(` `));let S=l(`rue:slot:anchor`);return i(u,S),x(()=>{let t=O.value===`preview`?p(()=>{let t=y(),n=h(`div`,t);i(t,n),c(n,`card bg-base-100 shadow`);let r=h(`div`,n);i(n,r),c(r,`card-body gap-5`);let a=h(`div`,r);i(r,a),c(a,`overflow-x-auto`);let o=h(`table`,a);i(a,o),c(o,`table`);let u=h(`thead`,o);i(o,u);let f=h(`tr`,u);i(u,f);let m=h(`th`,f);i(f,m),i(m,_(`值`));let v=h(`th`,f);i(f,v),i(v,_(`isReadonly`));let S=h(`th`,f);i(f,S),i(S,_(`当前状态`));let w=h(`tbody`,o);i(o,w);let T=l(`rue:list:start`),E=l(`rue:list:end`);i(w,T),i(w,E);let O=new Map;x(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,n,r,a,o)=>{g(p(()=>{let n=y(),r=h(`tr`,n);i(n,r);let a=h(`td`,r);i(r,a);let o=l(`rue:slot:anchor`);i(a,o),x(()=>{let n=t[0];e(()=>g(n,a,o))});let s=h(`td`,r);i(r,s);let u=h(`span`,s);i(s,u),x(()=>{c(u,`badge ${t[1]?`badge-primary`:``}`)});let d=l(`rue:slot:anchor`);i(u,d),x(()=>{let n=D(t[1]);e(()=>g(n,u,d))});let f=h(`td`,r);i(r,f);let p=l(`rue:slot:anchor`);return i(f,p),x(()=>{let n=t[2];e(()=>g(n,f,p))}),n}),n,r)}})});let k=h(`div`,r);i(r,k),c(k,`flex flex-wrap gap-2`);let A=h(`button`,k);i(k,A),c(A,`btn btn-sm`),s(A,`click`,L),i(A,_(`reactive +1`));let j=h(`button`,k);i(k,j),c(j,`btn btn-sm`),s(j,`click`,I),i(j,_(`尝试写 readonly`));let M=h(`button`,k);i(k,M),c(M,`btn btn-sm`),s(M,`click`,R),i(M,_(`shallow nested +1`));let N=h(`button`,k);i(k,N),c(N,`btn btn-sm`),s(N,`click`,z),i(N,_(`writable computed +1`));let P=h(`div`,r);i(r,P),c(P,`alert`);let V=h(`span`,P);i(P,V);let H=d(V);return i(V,H),x(()=>{b(H,F.value)}),t}):``;e(()=>g(t,u,S))}),t})}),n,r),n})};export{O as default};