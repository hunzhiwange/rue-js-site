import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,kt as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _,wt as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>m(()=>{let e=y(`reactive:1:0`,()=>v({count:1,label:`Rue`})),{count:t,label:n}=u(e);return{state:e,count:t,label:n,activeTab:y(`ref:1:1`,()=>r(`preview`)),increment:()=>{t.value++},rename:()=>{n.value=n.value===`Rue`?`Vapor`:`Rue`}}}));return d(r=>{let u=s(),m=a(`rue:component:anchor`);return n(u,m),h(_(x,{children:d(()=>{let r=s(),u=i(`h1`,r);n(r,u),g(u,`text-5xl font-semibold mb-4 md:mb-4`),n(u,e(`toRefs 响应式解构`));let m=i(`div`,r);n(r,m),c(m,`role`,`tablist`),g(m,`tabs tabs-box`);let v=i(`button`,m);n(m,v),c(v,`role`,`tab`),o(()=>{g(v,`tab ${T.value===`preview`?`tab-active`:``}`)}),p(v,`click`,()=>{T.value=`preview`}),n(v,e(`效果`));let y=i(`button`,m);n(m,y),c(y,`role`,`tab`),o(()=>{g(y,`tab ${T.value===`code`?`tab-active`:``}`)}),p(y,`click`,()=>{T.value=`code`}),n(y,e(`代码`));let x=i(`div`,r);n(r,x),g(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=a(`rue:slot:anchor`);n(x,O),o(()=>{let e=T.value===`code`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),g(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),g(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});t(()=>h(e,c,l))}),e}):``;t(()=>h(e,x,O))}),n(x,e(` `));let k=a(`rue:slot:anchor`);return n(x,k),o(()=>{let r=T.value===`preview`?d(()=>{let t=s(),r=i(`div`,t);n(t,r),g(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),g(a,`card-body gap-4`);let u=i(`div`,a);n(a,u);let d=i(`div`,u);n(u,d),g(d,`text-sm opacity-70`),n(d,e(`从 reactive 对象解构出的 refs`));let m=i(`h2`,u);n(u,m),g(m,`text-3xl font-semibold`);let h=l(m);n(m,h),o(()=>{f(h,w.value)}),n(m,e(`: `));let _=l(m);n(m,_),o(()=>{f(_,C.value)});let v=i(`div`,a);n(a,v),g(v,`flex flex-wrap gap-2`);let y=i(`button`,v);n(v,y),g(y,`btn btn-primary`),p(y,`click`,E),n(y,e(`count + 1`));let b=i(`button`,v);n(v,b),g(b,`btn`),p(b,`click`,D),n(b,e(`切换 label`));let x=i(`div`,a);n(a,x),g(x,`mockup-code text-sm`);let T=i(`pre`,x);n(x,T),c(T,`data-prefix`,`state`);let O=i(`code`,T);n(T,O);let k=l(O);n(O,k),o(()=>{f(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=i(`pre`,x);n(x,A),c(A,`data-prefix`,`refs`);let j=i(`code`,A);n(A,j);let M=l(j);return n(j,M),o(()=>{f(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),t}):``;t(()=>h(r,x,k))}),r})}),u,m),u})};export{S as default};