import{$ as e,At as t,Ht as n,J as r,Q as i,Rt as a,Tt as o,Xt as s,Y as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>h(()=>{let e=y(`reactive:1:0`,()=>o({count:1,label:`Rue`})),{count:n,label:r}=t(e);return{state:e,count:n,label:r,activeTab:y(`ref:1:1`,()=>a(`preview`)),increment:()=>{n.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return f(t=>{let a=i(),o=l(`rue:component:anchor`);return c(a,o),g(_(x,{children:f(()=>{let t=i(),a=e(`h1`,t);c(t,a),u(a,`text-5xl font-semibold mb-4 md:mb-4`),c(a,d(`toRefs 响应式解构`));let o=e(`div`,t);c(t,o),m(o,`role`,`tablist`),u(o,`tabs tabs-box`);let h=e(`button`,o);c(o,h),m(h,`role`,`tab`),s(()=>{u(h,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),r(h,`click`,()=>{T.value=`preview`}),c(h,d(`效果`));let y=e(`button`,o);c(o,y),m(y,`role`,`tab`),s(()=>{u(y,String(`tab ${T.value===`code`?`tab-active`:``}`))}),r(y,`click`,()=>{T.value=`code`}),c(y,d(`代码`));let x=e(`div`,t);c(t,x),u(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=l(`rue:slot:anchor`);c(x,O),s(()=>{let t=T.value===`code`?f(()=>{let t=i(),r=e(`div`,t);c(t,r),u(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);c(r,a),u(a,`card-body p-0`);let o=l(`rue:component:anchor`);return c(a,o),s(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});n(()=>g(e,a,o))}),t}):``;n(()=>g(t,x,O))}),c(x,d(` `));let k=l(`rue:slot:anchor`);return c(x,k),s(()=>{let t=T.value===`preview`?f(()=>{let t=i(),n=e(`div`,t);c(t,n),u(n,`card bg-base-100 shadow`);let a=e(`div`,n);c(n,a),u(a,`card-body gap-4`);let o=e(`div`,a);c(a,o);let l=e(`div`,o);c(o,l),u(l,`text-sm opacity-70`),c(l,d(`从 reactive 对象解构出的 refs`));let f=e(`h2`,o);c(o,f),u(f,`text-3xl font-semibold`);let h=v(f);c(f,h),s(()=>{p(h,w.value)}),c(f,d(`: `));let g=v(f);c(f,g),s(()=>{p(g,C.value)});let _=e(`div`,a);c(a,_),u(_,`flex flex-wrap gap-2`);let y=e(`button`,_);c(_,y),u(y,`btn btn-primary`),r(y,`click`,E),c(y,d(`count + 1`));let b=e(`button`,_);c(_,b),u(b,`btn`),r(b,`click`,D),c(b,d(`切换 label`));let x=e(`div`,a);c(a,x),u(x,`mockup-code text-sm`);let T=e(`pre`,x);c(x,T),m(T,`data-prefix`,`state`);let O=e(`code`,T);c(T,O);let k=v(O);c(O,k),s(()=>{p(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=e(`pre`,x);c(x,A),m(A,`data-prefix`,`refs`);let j=e(`code`,A);c(A,j);let M=v(j);return c(j,M),s(()=>{p(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),t}):``;n(()=>g(t,x,k))}),t})}),a,o),a})};export{S as default};