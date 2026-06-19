import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,Mt as a,X as o,Xt as s,Z as c,ct as l,et as u,gt as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`reactive:1:0`,()=>r({count:1,label:`Rue`})),{count:t,label:i}=a(e);return{state:e,count:t,label:i,activeTab:y(`ref:1:1`,()=>n(`preview`)),increment:()=>{t.value++},rename:()=>{i.value=i.value===`Rue`?`Vapor`:`Rue`}}}));return f(n=>{let r=u(),a=e(`rue:component:anchor`);return c(r,a),m(g(x,{children:f(()=>{let n=u(),r=_(`h1`,n);c(n,r),v(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,p(`toRefs 响应式解构`));let a=_(`div`,n);c(n,a),l(a,`role`,`tablist`),v(a,`tabs tabs-box`);let s=_(`button`,a);c(a,s),l(s,`role`,`tab`),t(()=>{v(s,`tab ${T.value===`preview`?`tab-active`:``}`)}),o(s,`click`,()=>{T.value=`preview`}),c(s,p(`效果`));let y=_(`button`,a);c(a,y),l(y,`role`,`tab`),t(()=>{v(y,`tab ${T.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{T.value=`code`}),c(y,p(`代码`));let x=_(`div`,n);c(n,x),v(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);c(x,O),t(()=>{let n=T.value===`code`?f(()=>{let n=u(),r=_(`div`,n);c(n,r),v(r,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,r);c(r,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return c(a,o),t(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});i(()=>m(e,a,o))}),n}):``;i(()=>m(n,x,O))}),c(x,p(` `));let k=e(`rue:slot:anchor`);return c(x,k),t(()=>{let e=T.value===`preview`?f(()=>{let e=u(),n=_(`div`,e);c(e,n),v(n,`card bg-base-100 shadow`);let r=_(`div`,n);c(n,r),v(r,`card-body gap-4`);let i=_(`div`,r);c(r,i);let a=_(`div`,i);c(i,a),v(a,`text-sm opacity-70`),c(a,p(`从 reactive 对象解构出的 refs`));let s=_(`h2`,i);c(i,s),v(s,`text-3xl font-semibold`);let f=h(s);c(s,f),t(()=>{d(f,w.value)}),c(s,p(`: `));let m=h(s);c(s,m),t(()=>{d(m,C.value)});let g=_(`div`,r);c(r,g),v(g,`flex flex-wrap gap-2`);let y=_(`button`,g);c(g,y),v(y,`btn btn-primary`),o(y,`click`,E),c(y,p(`count + 1`));let b=_(`button`,g);c(g,b),v(b,`btn`),o(b,`click`,D),c(b,p(`切换 label`));let x=_(`div`,r);c(r,x),v(x,`mockup-code text-sm`);let T=_(`pre`,x);c(x,T),l(T,`data-prefix`,`state`);let O=_(`code`,T);c(T,O);let k=h(O);c(O,k),t(()=>{d(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=_(`pre`,x);c(x,A),l(A,`data-prefix`,`refs`);let j=_(`code`,A);c(A,j);let M=h(j);return c(j,M),t(()=>{d(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),e}):``;i(()=>m(e,x,k))}),n})}),r,a),r})};export{S as default};