import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,V as s,Wt as c,_n as l,bn as u,cn as d,fn as f,gn as p,hn as m,nn as h,nt as g,ot as _,qt as v,wn as y,x as b}from"./rue-runtime-CwEGJ854.js";import{t as x}from"./Code-B3jCYMAr.js";import{r as S}from"./SidebarPlaygroundExample-EGR0CyDT.js";var C=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">toRefs 响应式解构</h1>`),w=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=l(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=()=>{let{state:l,count:E,label:D,activeTab:O,increment:k,rename:A}=v(`useSetup:0:0`,()=>c(()=>{let t=h({count:1,label:`Rue`}),{count:n,label:r}=d(t);return{state:t,count:n,label:r,activeTab:e(`preview`),increment:()=>{n.value++},rename:()=>{r.value=r.value===`Rue`?`Vapor`:`Rue`}}}));return r(S,()=>({children:[(e,t,r)=>b(e,r,()=>n(Object.assign(e=>{let t=g();return t.appendChild(C().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>b(e,r,()=>n(Object.assign(e=>{let t=g(),n=w().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),_(i,`role`,`tab`),y(()=>{a(i,`tab ${O.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{O.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),_(s,`role`,`tab`),y(()=>{a(s,`tab ${O.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{O.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>b(e,a,()=>n(Object.assign(e=>{let r=g(),a=T().content.cloneNode(!0),o=a.firstChild,c=o.childNodes[0],d=c.parentNode,h=o.childNodes[1],_=h.parentNode;return r.appendChild(a),s(d,c,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return f(t,n),n.className=`card-body p-0`,i(n,x,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, reactive, toRefs } from '@rue-js/rue';

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

export default ToRefs;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),s(_,h,()=>{let e=O.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=m(`div`,e);n.className=`card bg-base-100 shadow`;let r=m(`div`,n);f(n,r),r.className=`card-body gap-4`;let i=m(`div`,r);f(r,i);let a=m(`div`,i);f(i,a),a.className=`text-sm opacity-70`,f(a,p(`从 reactive 对象解构出的 refs`));let o=m(`h2`,i);f(i,o),o.className=`text-3xl font-semibold`;let s=p(``);f(o,s),u(s,()=>D.value),f(o,p(`: `));let c=p(``);f(o,c),u(c,()=>E.value);let d=m(`div`,r);f(r,d),d.className=`flex flex-wrap gap-2`;let h=m(`button`,d);f(d,h),h.className=`btn btn-primary`;let g=e=>{let t=k;typeof t==`function`&&t(e)};h.addEventListener(`click`,g),t(()=>h.removeEventListener(`click`,g)),f(h,p(`count + 1`));let _=m(`button`,d);f(d,_),_.className=`btn`;let v=e=>{let t=A;typeof t==`function`&&t(e)};_.addEventListener(`click`,v),t(()=>_.removeEventListener(`click`,v)),f(_,p(`切换 label`));let y=m(`div`,r);f(r,y),y.className=`mockup-code text-sm`;let b=m(`pre`,y);f(y,b),b.setAttribute(`data-prefix`,`state`);let x=m(`code`,b);f(b,x);let S=p(``);f(x,S),u(S,()=>`{ count: ${l.count}, label: '${l.label}' }`);let C=m(`pre`,y);f(y,C),C.setAttribute(`data-prefix`,`refs`);let w=m(`code`,C);f(C,w);let T=p(``);return f(w,T),u(T,()=>`count.value = ${E.value}, label.value = '${D.value}'`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]}))};export{E as default};