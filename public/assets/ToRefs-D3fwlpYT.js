import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,et as c,ht as l,jt as u,l as d,lt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=()=>{let{state:S,count:C,label:w,activeTab:T,increment:E,rename:D}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`reactive:1:0`,()=>t({count:1,label:`Rue`})),{count:n,label:r}=u(e);return{state:e,count:n,label:r,activeTab:y(`ref:1:1`,()=>v(`preview`)),increment:()=>{n.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return d(t=>{let s=e(),u=n(`rue:component:anchor`);return a(s,u),m(g(x,{children:d(()=>{let t=e(),s=c(`h1`,t);a(t,s),f(s,`text-5xl font-semibold mb-4 md:mb-4`),a(s,_(`toRefs 响应式解构`));let u=c(`div`,t);a(t,u),h(u,`role`,`tablist`),f(u,`tabs tabs-box`);let v=c(`button`,u);a(u,v),h(v,`role`,`tab`),r(()=>{f(v,`tab ${T.value===`preview`?`tab-active`:``}`)}),o(v,`click`,()=>{T.value=`preview`}),a(v,_(`效果`));let y=c(`button`,u);a(u,y),h(y,`role`,`tab`),r(()=>{f(y,`tab ${T.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{T.value=`code`}),a(y,_(`代码`));let x=c(`div`,t);a(t,x),f(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=n(`rue:slot:anchor`);a(x,O),r(()=>{let t=T.value===`code`?d(()=>{let t=e(),o=c(`div`,t);a(t,o),f(o,`card bg-base-100 shadow overflow-auto`);let s=c(`div`,o);a(o,s),f(s,`card-body p-0`);let l=n(`rue:component:anchor`);return a(s,l),r(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`});i(()=>m(e,s,l))}),t}):``;i(()=>m(t,x,O))}),a(x,_(` `));let k=n(`rue:slot:anchor`);return a(x,k),r(()=>{let t=T.value===`preview`?d(()=>{let t=e(),n=c(`div`,t);a(t,n),f(n,`card bg-base-100 shadow`);let i=c(`div`,n);a(n,i),f(i,`card-body gap-4`);let s=c(`div`,i);a(i,s);let u=c(`div`,s);a(s,u),f(u,`text-sm opacity-70`),a(u,_(`从 reactive 对象解构出的 refs`));let d=c(`h2`,s);a(s,d),f(d,`text-3xl font-semibold`);let m=p(d);a(d,m),r(()=>{l(m,w.value)}),a(d,_(`: `));let g=p(d);a(d,g),r(()=>{l(g,C.value)});let v=c(`div`,i);a(i,v),f(v,`flex flex-wrap gap-2`);let y=c(`button`,v);a(v,y),f(y,`btn btn-primary`),o(y,`click`,E),a(y,_(`count + 1`));let b=c(`button`,v);a(v,b),f(b,`btn`),o(b,`click`,D),a(b,_(`切换 label`));let x=c(`div`,i);a(i,x),f(x,`mockup-code text-sm`);let T=c(`pre`,x);a(x,T),h(T,`data-prefix`,`state`);let O=c(`code`,T);a(T,O);let k=p(O);a(O,k),r(()=>{l(k,`{ count: ${S.count}, label: '${S.label}' }`)});let A=c(`pre`,x);a(x,A),h(A,`data-prefix`,`refs`);let j=c(`code`,A);a(A,j);let M=p(j);return a(j,M),r(()=>{l(M,`count.value = ${C.value}, label.value = '${w.value}'`)}),t}):``;i(()=>m(t,x,k))}),t})}),s,u),s})};export{S as default};