import{At as e,Dn as t,K as n,Mt as r,Ot as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,bt as u,dt as d,gn as f,in as p,kn as m,nt as h,pn as g,sn as _,st as v,tn as y,ut as b,vn as x,vt as S,wn as C,xt as w,yt as T,z as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./Code-DpH7u0gk.js";import{r as O}from"./SidebarPlaygroundExample-BCPRe0hA.js";var k=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">toRefs 响应式解构</h1>`),A=x(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=x(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=()=>{let{state:x,count:M,label:N,activeTab:P,increment:F,rename:I}=_(`useSetup:0:0`,()=>p(()=>{let e=E({count:1,label:`Rue`}),{count:t,label:r}=n(e);return{state:e,count:t,label:r,activeTab:y(`preview`),increment:()=>{t.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return(()=>{let n=e(()=>{let t=l(),n=j().content.cloneNode(!0),r=n.firstChild,p=r.childNodes[0],_=p.parentNode,y=r.childNodes[1],E=y.parentNode;return t.appendChild(n),h(_,p,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=f(`div`,t);return g(t,n),n.className=`card-body p-0`,v(n,D,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),C(()=>{let t=P.value===`preview`?e(()=>{let e=l(),t=S(`div`,e);d(e,t),a(t,`card bg-base-100 shadow`);let n=S(`div`,t);d(t,n),a(n,`card-body gap-4`);let r=S(`div`,n);d(n,r);let s=S(`div`,r);d(r,s),a(s,`text-sm opacity-70`),d(s,T(`从 reactive 对象解构出的 refs`));let c=S(`h2`,r);d(r,c),a(c,`text-3xl font-semibold`);let f=u(c);d(c,f),C(()=>{i(f,N.value)}),d(c,T(`: `));let p=u(c);d(c,p),C(()=>{i(p,M.value)});let m=S(`div`,n);d(n,m),a(m,`flex flex-wrap gap-2`);let h=S(`button`,m);d(m,h),a(h,`btn btn-primary`);let g=e=>{let t=F;typeof t==`function`&&t(e)};h.addEventListener(`click`,g),o(()=>h.removeEventListener(`click`,g)),d(h,T(`count + 1`));let _=S(`button`,m);d(m,_),a(_,`btn`);let v=e=>{let t=I;typeof t==`function`&&t(e)};_.addEventListener(`click`,v),o(()=>_.removeEventListener(`click`,v)),d(_,T(`切换 label`));let y=S(`div`,n);d(n,y),a(y,`mockup-code text-sm`);let b=S(`pre`,y);d(y,b),w(b,`data-prefix`,`state`);let E=S(`code`,b);d(b,E);let D=u(E);d(E,D),C(()=>{i(D,`{ count: ${x.count}, label: '${x.label}' }`)});let O=S(`pre`,y);d(y,O),w(O,`data-prefix`,`refs`);let k=S(`code`,O);d(O,k);let A=u(k);return d(k,A),C(()=>{i(A,`count.value = ${M.value}, label.value = '${N.value}'`)}),e},!0):``;m(()=>b(t,E,y))}),t});return r(O,()=>({children:[s(e=>k().content.cloneNode(!0).firstChild),s(Object.assign(e=>{let n=A().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;C(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{P.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;C(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{P.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),n]}))})()};export{M as default};