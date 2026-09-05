import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,V as s,Wt as c,_n as l,bn as u,cn as d,fn as f,ft as p,gn as m,hn as h,nn as g,nt as _,ot as v,qt as y,sn as b,wn as x,x as S}from"./rue-runtime-CwEGJ854.js";import{t as C}from"./Code-DUvGro8N.js";import{r as w}from"./SidebarPlaygroundExample-EGR0CyDT.js";var T=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">toRef 响应式句柄</h1>`),E=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),D=l(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),O=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

const ToRefDemo: FC = () => {
  const profile = reactive({
    name: 'Rue',
    role: '轻量前端框架',
    visits: 1,
    status: 'draft',
  })

  const name = toRef(profile, 'name')
  const visits = toRef(profile, 'visits')
  const note = toRef(profile as { note?: string }, 'note', '等待补充')
  const doubledVisits = toRef(() => visits.value * 2)
  const { role, status } = toRefs(profile)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <input
          className="input input-bordered w-full"
          value={name.value}
          onInput={event => {
            name.value = (event.target as HTMLInputElement).value
          }}
        />
        <input
          className="input input-bordered w-full"
          value={role.value}
          onInput={event => {
            role.value = (event.target as HTMLInputElement).value
          }}
        />
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={() => visits.value++}>
            visits: {visits.value}
          </button>
          <button
            className="btn"
            onClick={() => {
              status.value = status.value === 'draft' ? 'ready' : 'draft'
            }}
          >
            {status.value}
          </button>
        </div>
        <p>{name.value} / {role.value}</p>
        <p>double: {doubledVisits.value}</p>
        <p>{note.value}</p>
      </div>
    </div>
  )
}

export default ToRefDemo`,k=()=>{let{profile:l,name:k,visits:A,note:j,doubledVisits:ee,role:M,status:N,activeTab:P}=y(`useSetup:0:0`,()=>c(()=>{let t=g({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`}),n=b(t,`name`),r=b(t,`visits`),i=b(t,`note`,`等待补充`),a=b(()=>r.value*2),{role:o,status:s}=d(t);return{profile:t,name:n,visits:r,note:i,doubledVisits:a,role:o,status:s,activeTab:e(`preview`)}}));return r(w,()=>({children:[(e,t,r)=>S(e,r,()=>n(Object.assign(e=>{let t=_();return t.appendChild(T().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>S(e,r,()=>n(Object.assign(e=>{let t=_(),n=E().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),v(i,`role`,`tab`),x(()=>{a(i,`tab ${P.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{P.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),v(s,`role`,`tab`),x(()=>{a(s,`tab ${P.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{P.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>S(e,a,()=>n(Object.assign(e=>{let r=_(),a=D().content.cloneNode(!0),o=a.firstChild,c=o.childNodes[0],l=c.parentNode,d=o.childNodes[1],g=d.parentNode;return r.appendChild(a),s(l,c,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=h(`div`,t);return f(t,n),n.className=`card-body p-0`,i(n,C,()=>({className:`h-full`,lang:`tsx`,code:O})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=_();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),s(g,d,()=>{let e=P.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=h(`div`,e);n.className=`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`;let r=h(`div`,n);f(n,r),r.className=`card bg-base-100 shadow`;let i=h(`div`,r);f(r,i),i.className=`card-body gap-4`;let a=h(`label`,i);f(i,a),a.className=`form-control w-full`;let o=h(`span`,a);f(a,o),o.className=`label-text mb-1`,f(o,m(`name`));let s=h(`input`,a);f(a,s),s.className=`input input-bordered w-full`;let c;x(()=>{let e=k.value,t=e==null?``:String(e);Object.is(c,t)||(c=t,p(s,t))});let l=e=>{let t=e=>{k.value=e.target.value};typeof t==`function`&&t(e)};s.addEventListener(`input`,l),t(()=>s.removeEventListener(`input`,l));let d=h(`label`,i);f(i,d),d.className=`form-control w-full`;let g=h(`span`,d);f(d,g),g.className=`label-text mb-1`,f(g,m(`role`));let _=h(`input`,d);f(d,_),_.className=`input input-bordered w-full`;let v;x(()=>{let e=M.value,t=e==null?``:String(e);Object.is(v,t)||(v=t,p(_,t))});let y=e=>{let t=e=>{M.value=e.target.value};typeof t==`function`&&t(e)};_.addEventListener(`input`,y),t(()=>_.removeEventListener(`input`,y));let b=h(`label`,i);f(i,b),b.className=`form-control w-full`;let S=h(`span`,b);f(b,S),S.className=`label-text mb-1`,f(S,m(`note`));let C=h(`input`,b);f(b,C),C.className=`input input-bordered w-full`;let w;x(()=>{let e=j.value,t=e==null?``:String(e);Object.is(w,t)||(w=t,p(C,t))});let T=e=>{let t=e=>{j.value=e.target.value};typeof t==`function`&&t(e)};C.addEventListener(`input`,T),t(()=>C.removeEventListener(`input`,T));let E=h(`div`,i);f(i,E),E.className=`flex flex-wrap gap-2`;let D=h(`button`,E);f(E,D),D.className=`btn btn-primary`;let O=e=>{let t=()=>{A.value+=1};typeof t==`function`&&t(e)};D.addEventListener(`click`,O),t(()=>D.removeEventListener(`click`,O)),f(D,m(`visits: `));let P=m(``);f(D,P),u(P,()=>A.value);let F=h(`button`,E);f(E,F),F.className=`btn`;let I=e=>{let t=()=>{N.value=N.value===`draft`?`ready`:`draft`};typeof t==`function`&&t(e)};F.addEventListener(`click`,I),t(()=>F.removeEventListener(`click`,I));let L=m(``);f(F,L),u(L,()=>N.value);let R=h(`div`,n);f(n,R),R.className=`card bg-base-100 shadow`;let z=h(`div`,R);f(R,z),z.className=`card-body gap-3`;let B=h(`div`,z);f(z,B);let V=h(`div`,B);f(B,V),V.className=`text-sm opacity-60`,f(V,m(`profile`));let H=h(`div`,B);f(B,H),H.className=`text-xl font-semibold`;let U=m(``);f(H,U),u(U,()=>k.value);let W=h(`div`,B);f(B,W);let te=m(``);f(W,te),u(te,()=>M.value);let G=h(`div`,z);f(z,G),G.className=`stats stats-vertical shadow-none bg-base-200`;let K=h(`div`,G);f(G,K),K.className=`stat`;let q=h(`div`,K);f(K,q),q.className=`stat-title`,f(q,m(`visits`));let J=h(`div`,K);f(K,J),J.className=`stat-value text-2xl`;let ne=m(``);f(J,ne),u(ne,()=>A.value);let Y=h(`div`,G);f(G,Y),Y.className=`stat`;let X=h(`div`,Y);f(Y,X),X.className=`stat-title`,f(X,m(`getter ref`));let Z=h(`div`,Y);f(Y,Z),Z.className=`stat-value text-2xl`;let re=m(``);f(Z,re),u(re,()=>ee.value);let Q=h(`div`,z);f(z,Q),Q.className=`badge badge-outline`;let ie=m(``);f(Q,ie),u(ie,()=>N.value);let $=h(`p`,z);f(z,$),$.className=`text-sm opacity-80`;let ae=m(``);return f($,ae),u(ae,()=>j.value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=_();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]}))};export{k as default};