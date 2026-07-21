import{Cn as e,Ct as t,Kt as n,Mt as r,Qt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>e(()=>{let e=y(`reactive:1:0`,()=>n({count:1,label:`Rue`})),{count:t,label:r}=i(e);return{state:e,count:t,label:r,activeTab:y(`ref:1:1`,()=>d(`preview`)),increment:()=>{t.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return g(e=>{let n=s(),i=o(`rue:component:anchor`);return p(n,i),_(v(x,{children:g(()=>{let e=s(),n=f(`h1`,e);p(e,n),a(n,`text-5xl font-semibold mb-4 md:mb-4`),p(n,l(`toRefs 响应式解构`));let i=f(`div`,e);p(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let d=f(`button`,i);p(i,d),t(d,`role`,`tab`),m(()=>{a(d,`tab ${T.value===`preview`?`tab-active`:``}`)}),u(d,`click`,()=>{T.value=`preview`}),p(d,l(`效果`));let y=f(`button`,i);p(i,y),t(y,`role`,`tab`),m(()=>{a(y,`tab ${T.value===`code`?`tab-active`:``}`)}),u(y,`click`,()=>{T.value=`code`}),p(y,l(`代码`));let x=f(`div`,e);p(e,x),a(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);p(x,O),m(()=>{let e=T.value===`code`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return p(n,r),m(()=>{let e=v(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});h(()=>_(e,n,r))}),e}):``;h(()=>_(e,x,O))}),p(x,l(` `));let k=o(`rue:slot:anchor`);return p(x,k),m(()=>{let e=T.value===`preview`?g(()=>{let e=s(),n=f(`div`,e);p(e,n),a(n,`card bg-base-100 shadow`);let i=f(`div`,n);p(n,i),a(i,`card-body gap-4`);let o=f(`div`,i);p(i,o);let d=f(`div`,o);p(o,d),a(d,`text-sm opacity-70`),p(d,l(`从 reactive 对象解构出的 refs`));let h=f(`h2`,o);p(o,h),a(h,`text-3xl font-semibold`);let g=c(h);p(h,g),m(()=>{r(g,w.value)}),p(h,l(`: `));let _=c(h);p(h,_),m(()=>{r(_,C.value)});let v=f(`div`,i);p(i,v),a(v,`flex flex-wrap gap-2`);let y=f(`button`,v);p(v,y),a(y,`btn btn-primary`),u(y,`click`,E),p(y,l(`count + 1`));let b=f(`button`,v);p(v,b),a(b,`btn`),u(b,`click`,D),p(b,l(`切换 label`));let x=f(`div`,i);p(i,x),a(x,`mockup-code text-sm`);let T=f(`pre`,x);p(x,T),t(T,`data-prefix`,`state`);let O=f(`code`,T);p(T,O);let k=c(O);p(O,k),m(()=>{r(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=f(`pre`,x);p(x,A),t(A,`data-prefix`,`refs`);let j=f(`code`,A);p(A,j);let M=c(j);return p(j,M),m(()=>{r(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),e}):``;h(()=>_(e,x,k))}),e})}),n,i),n})};export{S as default};