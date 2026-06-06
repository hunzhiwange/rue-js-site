import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Ot as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,l as p,mt as m,ot as h,s as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y}from"./vapor-helpers-vapor-CJFAWine.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./SidebarPlaygroundExample-KML-rOvA.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>r(()=>{let e=y(`reactive:1:0`,()=>t({count:1,label:`Rue`})),{count:n,label:r}=a(e);return{state:e,count:n,label:r,activeTab:y(`ref:1:1`,()=>i(`preview`)),increment:()=>{n.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return p(t=>{let r=o(),i=u(`rue:component:anchor`);return c(r,i),g(_(x,{children:p(()=>{let t=o(),r=e(`h1`,t);c(t,r),d(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,f(`toRefs 响应式解构`));let i=e(`div`,t);c(t,i),h(i,`role`,`tablist`),d(i,`tabs tabs-box`);let a=e(`button`,i);c(i,a),h(a,`role`,`tab`),l(()=>{d(a,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(a,`click`,()=>{T.value=`preview`}),c(a,f(`效果`));let y=e(`button`,i);c(i,y),h(y,`role`,`tab`),l(()=>{d(y,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{T.value=`code`}),c(y,f(`代码`));let x=e(`div`,t);c(t,x),d(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=u(`rue:slot:anchor`);c(x,O),l(()=>{let t=T.value===`code`?p(()=>{let t=o(),n=e(`div`,t);c(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});s(()=>g(e,r,i))}),t}):``;s(()=>g(t,x,O))}),c(x,f(` `));let k=u(`rue:slot:anchor`);return c(x,k),l(()=>{let t=T.value===`preview`?p(()=>{let t=o(),r=e(`div`,t);c(t,r),d(r,`card bg-base-100 shadow`);let i=e(`div`,r);c(r,i),d(i,`card-body gap-4`);let a=e(`div`,i);c(i,a);let s=e(`div`,a);c(a,s),d(s,`text-sm opacity-70`),c(s,f(`从 reactive 对象解构出的 refs`));let u=e(`h2`,a);c(a,u),d(u,`text-3xl font-semibold`);let p=v(u);c(u,p),l(()=>{m(p,w.value)}),c(u,f(`: `));let g=v(u);c(u,g),l(()=>{m(g,C.value)});let _=e(`div`,i);c(i,_),d(_,`flex flex-wrap gap-2`);let y=e(`button`,_);c(_,y),d(y,`btn btn-primary`),n(y,`click`,E),c(y,f(`count + 1`));let b=e(`button`,_);c(_,b),d(b,`btn`),n(b,`click`,D),c(b,f(`切换 label`));let x=e(`div`,i);c(i,x),d(x,`mockup-code text-sm`);let T=e(`pre`,x);c(x,T),h(T,`data-prefix`,`state`);let O=e(`code`,T);c(T,O);let k=v(O);c(O,k),l(()=>{m(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=e(`pre`,x);c(x,A),h(A,`data-prefix`,`refs`);let j=e(`code`,A);c(A,j);let M=v(j);return c(j,M),l(()=>{m(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),t}):``;s(()=>g(t,x,k))}),t})}),r,i),r})};export{S as default};