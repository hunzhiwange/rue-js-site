import{Nt as e,Q as t,Rt as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-BoXKy3gJ.js";import{r as x}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>p(()=>{let t=y(`reactive:1:0`,()=>e({count:1,label:`Rue`})),{count:r,label:a}=n(t);return{state:t,count:r,label:a,activeTab:y(`ref:1:1`,()=>i(`preview`)),increment:()=>{r.value++},rename:()=>{a.value=a.value===`Rue`?`Vapor`:`Rue`}}}));return u(e=>{let n=d(),i=v(`rue:component:anchor`);return t(n,i),f(g(x,{children:u(()=>{let e=d(),n=h(`h1`,e);t(e,n),m(n,`text-5xl font-semibold mb-4 md:mb-4`),t(n,l(`toRefs 响应式解构`));let i=h(`div`,e);t(e,i),c(i,`role`,`tablist`),m(i,`tabs tabs-box`);let p=h(`button`,i);t(i,p),c(p,`role`,`tab`),r(()=>{m(p,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(p,`click`,()=>{T.value=`preview`}),t(p,l(`效果`));let y=h(`button`,i);t(i,y),c(y,`role`,`tab`),r(()=>{m(y,`tab ${T.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{T.value=`code`}),t(y,l(`代码`));let x=h(`div`,e);t(e,x),m(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=v(`rue:slot:anchor`);t(x,O),r(()=>{let e=T.value===`code`?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,n);t(n,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return t(i,a),r(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

const ToRefs: FC = () => {
  const state = reactive({
    count: 1,
    label: 'Rue',
  });
  const { count, label } = toRefs(state);

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <h2>{label.value}: {count.value}</h2>
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => count.value++}>
            count + 1
          </button>
          <button
            className="btn"
            onClick={() => {
              label.value = label.value === 'Rue' ? 'Vapor' : 'Rue';
            }}
          >
            切换 label
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToRefs;`});_(()=>f(e,i,a))}),e}):``;_(()=>f(e,x,O))}),t(x,l(` `));let k=v(`rue:slot:anchor`);return t(x,k),r(()=>{let e=T.value===`preview`?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`card bg-base-100 shadow`);let i=h(`div`,n);t(n,i),m(i,`card-body gap-4`);let u=h(`div`,i);t(i,u);let f=h(`div`,u);t(u,f),m(f,`text-sm opacity-70`),t(f,l(`从 reactive 对象解构出的 refs`));let p=h(`h2`,u);t(u,p),m(p,`text-3xl font-semibold`);let g=o(p);t(p,g),r(()=>{s(g,w.value)}),t(p,l(`: `));let _=o(p);t(p,_),r(()=>{s(_,C.value)});let v=h(`div`,i);t(i,v),m(v,`flex flex-wrap gap-2`);let y=h(`button`,v);t(v,y),m(y,`btn btn-primary`),a(y,`click`,E),t(y,l(`count + 1`));let b=h(`button`,v);t(v,b),m(b,`btn`),a(b,`click`,D),t(b,l(`切换 label`));let x=h(`div`,i);t(i,x),m(x,`mockup-code text-sm`);let T=h(`pre`,x);t(x,T),c(T,`data-prefix`,`state`);let O=h(`code`,T);t(T,O);let k=o(O);t(O,k),r(()=>{s(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=h(`pre`,x);t(x,A),c(A,`data-prefix`,`refs`);let j=h(`code`,A);t(A,j);let M=o(j);return t(j,M),r(()=>{s(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),e}):``;_(()=>f(e,x,k))}),e})}),n,i),n})};export{S as default};