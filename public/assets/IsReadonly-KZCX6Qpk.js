import{Dt as e,Ft as t,Nt as n,Pt as r,Q as i,Vt as a,Xt as o,Z as s,at as c,bt as l,dt as u,it as d,l as f,nt as p,o as m,on as h,pt as g,rt as _,t as v,tn as y,tt as b,wt as x}from"./vapor-runtime-x7F5M-49.js";import{a as S,n as C}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as w}from"./Code-C5NjdoiC.js";import{r as T}from"./SidebarPlaygroundExample-DpItFif-.js";var E=`import {
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

export default IsReadonlyDemo;`,D=e=>e?`true`:`false`,O=()=>{let{activeTab:O,mutable:k,locked:A,shallow:j,base:M,doubled:N,writable:P,lastAction:F,tryWriteReadonly:I,bumpMutable:L,bumpShallowNested:R,bumpWritableComputed:z,rows:B}=S(`useSetup:0:0`,()=>h(()=>{let i=S(`ref:1:0`,()=>o(`preview`)),a=S(`reactive:1:1`,()=>n({count:0})),s=S(`readonly:1:2`,()=>r({label:`locked`,nested:{count:10}})),c=S(`shallowReadonly:1:3`,()=>t({label:`root locked`,nested:{count:20}})),l=S(`ref:1:4`,()=>o(2)),u=S(`computed:1:5`,()=>x(()=>l.value*2)),d=S(`computed:1:6`,()=>x({get:()=>l.value,set:e=>{l.value=e}})),f=S(`ref:1:7`,()=>o(`点击按钮观察 readonly 与 shallowReadonly 的边界。`));return{activeTab:i,mutable:a,locked:s,shallow:c,base:l,doubled:u,writable:d,lastAction:f,tryWriteReadonly:()=>{try{s.label=`changed`,f.value=`readonly 写入未生效。`}catch(e){f.value=`readonly 拒绝写入：${e.name}`}},bumpMutable:()=>{a.count+=1,f.value=`reactive 可以正常写入。`},bumpShallowNested:()=>{c.nested.count+=1,f.value=`shallowReadonly 只保护根级属性，nested 仍可写。`},bumpWritableComputed:()=>{d.set(d.get()+1),f.value=`带 setter 的 computed 是可写的。`},rows:S(`computed:1:8`,()=>x(()=>[[`reactive(mutable)`,e(a),`count: ${a.count}`],[`readonly(locked)`,e(s),s.label],[`readonly(locked.nested)`,e(s.nested),`count: ${s.nested.count}`],[`shallowReadonly(shallow)`,e(c),c.label],[`shallowReadonly(shallow.nested)`,e(c.nested),`count: ${c.nested.count}`],[`computed(() => base * 2)`,e(u),`value: ${u.get()}`],[`computed({ get, set })`,e(d),`value: ${d.get()}`]]))}}));return f(e=>{let t=p(),n=b(`rue:component:anchor`);return i(t,n),m(v(T,{children:f(()=>{let e=p(),t=_(`h1`,e);i(e,t),g(t,`text-5xl font-semibold mb-4 md:mb-4`),i(t,d(`isReadonly 判断边界`));let n=_(`div`,e);i(e,n),u(n,`role`,`tablist`),g(n,`tabs tabs-box`);let r=_(`button`,n);i(n,r),u(r,`role`,`tab`),a(()=>{g(r,`tab ${O.value===`preview`?`tab-active`:``}`)}),s(r,`click`,()=>{O.value=`preview`}),i(r,d(`效果`));let o=_(`button`,n);i(n,o),u(o,`role`,`tab`),a(()=>{g(o,`tab ${O.value===`code`?`tab-active`:``}`)}),s(o,`click`,()=>{O.value=`code`}),i(o,d(`代码`));let h=_(`div`,e);i(e,h),g(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=b(`rue:slot:anchor`);i(h,x),a(()=>{let e=O.value===`code`?f(()=>{let e=p(),t=_(`div`,e);i(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let n=_(`div`,t);i(t,n),g(n,`card-body p-0`);let r=b(`rue:component:anchor`);return i(n,r),a(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:E});y(()=>m(e,n,r))}),e}):``;y(()=>m(e,h,x))}),i(h,d(` `));let S=b(`rue:slot:anchor`);return i(h,S),a(()=>{let e=O.value===`preview`?f(()=>{let e=p(),t=_(`div`,e);i(e,t),g(t,`card bg-base-100 shadow`);let n=_(`div`,t);i(t,n),g(n,`card-body gap-5`);let r=_(`div`,n);i(n,r),g(r,`overflow-x-auto`);let o=_(`table`,r);i(r,o),g(o,`table`);let u=_(`thead`,o);i(o,u);let h=_(`tr`,u);i(u,h);let v=_(`th`,h);i(h,v),i(v,d(`值`));let x=_(`th`,h);i(h,x),i(x,d(`isReadonly`));let S=_(`th`,h);i(h,S),i(S,d(`当前状态`));let w=_(`tbody`,o);i(o,w);let T=b(`rue:list:start`),E=b(`rue:list:end`);i(w,T),i(w,E);let O=new Map;a(()=>{O=C({items:B.get()||[],getKey:(e,t)=>t,elements:O,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,t,n,r,o)=>{m(f(()=>{let t=p(),n=_(`tr`,t);i(t,n);let r=_(`td`,n);i(n,r);let o=b(`rue:slot:anchor`);i(r,o),a(()=>{let t=e[0];y(()=>m(t,r,o))});let s=_(`td`,n);i(n,s);let c=_(`span`,s);i(s,c),a(()=>{g(c,`badge ${e[1]?`badge-primary`:``}`)});let l=b(`rue:slot:anchor`);i(c,l),a(()=>{let t=D(e[1]);y(()=>m(t,c,l))});let u=_(`td`,n);i(n,u);let d=b(`rue:slot:anchor`);return i(u,d),a(()=>{let t=e[2];y(()=>m(t,u,d))}),t}),t,n)}})});let k=_(`div`,n);i(n,k),g(k,`flex flex-wrap gap-2`);let A=_(`button`,k);i(k,A),g(A,`btn btn-sm`),s(A,`click`,L),i(A,d(`reactive +1`));let j=_(`button`,k);i(k,j),g(j,`btn btn-sm`),s(j,`click`,I),i(j,d(`尝试写 readonly`));let M=_(`button`,k);i(k,M),g(M,`btn btn-sm`),s(M,`click`,R),i(M,d(`shallow nested +1`));let N=_(`button`,k);i(k,N),g(N,`btn btn-sm`),s(N,`click`,z),i(N,d(`writable computed +1`));let P=_(`div`,n);i(n,P),g(P,`alert`);let V=_(`span`,P);i(P,V);let H=c(V);return i(V,H),a(()=>{l(H,F.value)}),e}):``;y(()=>m(e,h,S))}),e})}),t,n),t})};export{O as default};