import{At as e,Dn as t,Dt as n,G as r,K as i,Mt as a,Ot as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,bt as f,dt as p,gn as m,in as h,kn as g,nt as _,pn as v,sn as y,st as b,tn as x,ut as S,vn as C,vt as w,wn as T,yt as E,z as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./Code-DpH7u0gk.js";import{r as k}from"./SidebarPlaygroundExample-BCPRe0hA.js";var A=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">toRef 响应式句柄</h1>`),j=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),N=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,P=()=>{let{profile:C,name:P,visits:F,note:I,doubledVisits:ee,role:L,status:R,activeTab:z}=y(`useSetup:0:0`,()=>h(()=>{let e=D({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`}),t=r(e,`name`),n=r(e,`visits`),a=r(e,`note`,`等待补充`),o=r(()=>n.value*2),{role:s,status:c}=i(e);return{profile:e,name:t,visits:n,note:a,doubledVisits:o,role:s,status:c,activeTab:x(`preview`)}}));return(()=>{let r=e(()=>{let t=d(),r=M().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],h=a.parentNode,y=i.childNodes[1],x=y.parentNode;return t.appendChild(r),_(h,a,()=>{let e=z.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return v(t,n),n.className=`card-body p-0`,b(n,O,()=>({className:`h-full`,lang:`tsx`,code:N})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),T(()=>{let t=z.value===`preview`?e(()=>{let e=d(),t=w(`div`,e);p(e,t),s(t,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let r=w(`div`,t);p(t,r),s(r,`card bg-base-100 shadow`);let i=w(`div`,r);p(r,i),s(i,`card-body gap-4`);let a=w(`label`,i);p(i,a),s(a,`form-control w-full`);let l=w(`span`,a);p(a,l),s(l,`label-text mb-1`),p(l,E(`name`));let u=w(`input`,a);p(a,u),s(u,`input input-bordered w-full`),T(()=>{n(u,P.value)});let m=e=>{let t=e=>{P.value=e.target.value};typeof t==`function`&&t(e)};u.addEventListener(`input`,m),c(()=>u.removeEventListener(`input`,m));let h=w(`label`,i);p(i,h),s(h,`form-control w-full`);let g=w(`span`,h);p(h,g),s(g,`label-text mb-1`),p(g,E(`role`));let _=w(`input`,h);p(h,_),s(_,`input input-bordered w-full`),T(()=>{n(_,L.value)});let v=e=>{let t=e=>{L.value=e.target.value};typeof t==`function`&&t(e)};_.addEventListener(`input`,v),c(()=>_.removeEventListener(`input`,v));let y=w(`label`,i);p(i,y),s(y,`form-control w-full`);let b=w(`span`,y);p(y,b),s(b,`label-text mb-1`),p(b,E(`note`));let x=w(`input`,y);p(y,x),s(x,`input input-bordered w-full`),T(()=>{n(x,I.value)});let S=e=>{let t=e=>{I.value=e.target.value};typeof t==`function`&&t(e)};x.addEventListener(`input`,S),c(()=>x.removeEventListener(`input`,S));let C=w(`div`,i);p(i,C),s(C,`flex flex-wrap gap-2`);let D=w(`button`,C);p(C,D),s(D,`btn btn-primary`);let O=e=>{let t=()=>{F.value+=1};typeof t==`function`&&t(e)};D.addEventListener(`click`,O),c(()=>D.removeEventListener(`click`,O)),p(D,E(`visits: `));let k=f(D);p(D,k),T(()=>{o(k,F.value)});let A=w(`button`,C);p(C,A),s(A,`btn`);let j=e=>{let t=()=>{R.value=R.value===`draft`?`ready`:`draft`};typeof t==`function`&&t(e)};A.addEventListener(`click`,j),c(()=>A.removeEventListener(`click`,j));let M=f(A);p(A,M),T(()=>{o(M,R.value)});let N=w(`div`,t);p(t,N),s(N,`card bg-base-100 shadow`);let z=w(`div`,N);p(N,z),s(z,`card-body gap-3`);let B=w(`div`,z);p(z,B);let V=w(`div`,B);p(B,V),s(V,`text-sm opacity-60`),p(V,E(`profile`));let H=w(`div`,B);p(B,H),s(H,`text-xl font-semibold`);let U=f(H);p(H,U),T(()=>{o(U,P.value)});let W=w(`div`,B);p(B,W);let te=f(W);p(W,te),T(()=>{o(te,L.value)});let G=w(`div`,z);p(z,G),s(G,`stats stats-vertical shadow-none bg-base-200`);let K=w(`div`,G);p(G,K),s(K,`stat`);let q=w(`div`,K);p(K,q),s(q,`stat-title`),p(q,E(`visits`));let J=w(`div`,K);p(K,J),s(J,`stat-value text-2xl`);let ne=f(J);p(J,ne),T(()=>{o(ne,F.value)});let Y=w(`div`,G);p(G,Y),s(Y,`stat`);let X=w(`div`,Y);p(Y,X),s(X,`stat-title`),p(X,E(`getter ref`));let Z=w(`div`,Y);p(Y,Z),s(Z,`stat-value text-2xl`);let re=f(Z);p(Z,re),T(()=>{o(re,ee.value)});let Q=w(`div`,z);p(z,Q),s(Q,`badge badge-outline`);let ie=f(Q);p(Q,ie),T(()=>{o(ie,R.value)});let $=w(`p`,z);p(z,$),s($,`text-sm opacity-80`);let ae=f($);return p($,ae),T(()=>{o(ae,I.value)}),e},!0):``;g(()=>S(t,x,y))}),t});return a(k,()=>({children:[l(e=>A().content.cloneNode(!0).firstChild),l(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;T(()=>{let e=`tab ${z.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{z.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${z.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{z.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),r]}))})()};export{P as default};