import{$t as e,It as t,Jt as n,Q as r,Z as i,dt as a,et as o,in as s,it as c,jt as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`reactive:1:0`,()=>l({count:1,label:`Rue`})),{count:r,label:i}=t(e);return{state:e,count:r,label:i,activeTab:y(`ref:1:1`,()=>n(`preview`)),increment:()=>{r.value++},rename:()=>{i.value=i.value===`Rue`?`Vapor`:`Rue`}}}));return u(t=>{let n=g(),s=o(`rue:component:anchor`);return r(n,s),p(h(x,{children:u(()=>{let t=g(),n=f(`h1`,t);r(t,n),a(n,`text-5xl font-semibold mb-4 md:mb-4`),r(n,m(`toRefs 响应式解构`));let s=f(`div`,t);r(t,s),d(s,`role`,`tablist`),a(s,`tabs tabs-box`);let l=f(`button`,s);r(s,l),d(l,`role`,`tab`),v(()=>{a(l,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(l,`click`,()=>{T.value=`preview`}),r(l,m(`效果`));let y=f(`button`,s);r(s,y),d(y,`role`,`tab`),v(()=>{a(y,`tab ${T.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{T.value=`code`}),r(y,m(`代码`));let x=f(`div`,t);r(t,x),a(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);r(x,O),v(()=>{let t=T.value===`code`?u(()=>{let t=g(),n=f(`div`,t);r(t,n),a(n,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,n);r(n,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return r(i,s),v(()=>{let t=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});e(()=>p(t,i,s))}),t}):``;e(()=>p(t,x,O))}),r(x,m(` `));let k=o(`rue:slot:anchor`);return r(x,k),v(()=>{let t=T.value===`preview`?u(()=>{let e=g(),t=f(`div`,e);r(e,t),a(t,`card bg-base-100 shadow`);let n=f(`div`,t);r(t,n),a(n,`card-body gap-4`);let o=f(`div`,n);r(n,o);let s=f(`div`,o);r(o,s),a(s,`text-sm opacity-70`),r(s,m(`从 reactive 对象解构出的 refs`));let l=f(`h2`,o);r(o,l),a(l,`text-3xl font-semibold`);let u=c(l);r(l,u),v(()=>{_(u,w.value)}),r(l,m(`: `));let p=c(l);r(l,p),v(()=>{_(p,C.value)});let h=f(`div`,n);r(n,h),a(h,`flex flex-wrap gap-2`);let y=f(`button`,h);r(h,y),a(y,`btn btn-primary`),i(y,`click`,E),r(y,m(`count + 1`));let b=f(`button`,h);r(h,b),a(b,`btn`),i(b,`click`,D),r(b,m(`切换 label`));let x=f(`div`,n);r(n,x),a(x,`mockup-code text-sm`);let T=f(`pre`,x);r(x,T),d(T,`data-prefix`,`state`);let O=f(`code`,T);r(T,O);let k=c(O);r(O,k),v(()=>{_(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=f(`pre`,x);r(x,A),d(A,`data-prefix`,`refs`);let j=f(`code`,A);r(A,j);let M=c(j);return r(j,M),v(()=>{_(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),e}):``;e(()=>p(t,x,k))}),t})}),n,s),n})};export{S as default};