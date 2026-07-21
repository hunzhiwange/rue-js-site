import{Cn as e,Ct as t,Kt as n,Mt as r,Qt as i,Tt as a,Zt as o,dt as s,ft as c,ht as l,jt as u,mt as d,ot as f,pn as p,pt as m,st as h,tn as g,vn as _}from"./context-8lXZvIn-.js";import{l as v,o as y,t as b}from"./vapor-runtime-ygJWVcNn.js";import{a as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as S}from"./Code-DhoWkRkB.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>e(()=>{let e=x(`reactive:1:0`,()=>n({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),t=o(e,`name`),r=o(e,`visits`),a=o(e,`note`,`等待补充`),s=o(()=>r.value*2),{role:c,status:l}=i(e);return{profile:e,name:t,visits:r,note:a,doubledVisits:s,role:c,status:l,activeTab:x(`ref:1:1`,()=>p(`preview`))}}));return v(e=>{let n=c(),i=s(`rue:component:anchor`);return h(n,i),y(b(C,{children:v(()=>{let e=c(),n=m(`h1`,e);h(e,n),a(n,`text-5xl font-semibold mb-4 md:mb-4`),h(n,d(`toRef 响应式句柄`));let i=m(`div`,e);h(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let o=m(`button`,i);h(i,o),t(o,`role`,`tab`),g(()=>{a(o,`tab ${j.value===`preview`?`tab-active`:``}`)}),f(o,`click`,()=>{j.value=`preview`}),h(o,d(`效果`));let p=m(`button`,i);h(i,p),t(p,`role`,`tab`),g(()=>{a(p,`tab ${j.value===`code`?`tab-active`:``}`)}),f(p,`click`,()=>{j.value=`code`}),h(p,d(`代码`));let x=m(`div`,e);h(e,x),a(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=s(`rue:slot:anchor`);h(x,C),g(()=>{let e=j.value===`code`?v(()=>{let e=c(),t=m(`div`,e);h(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=m(`div`,t);h(t,n),a(n,`card-body p-0`);let r=s(`rue:component:anchor`);return h(n,r),g(()=>{let e=b(S,{className:`h-full`,lang:`tsx`,code:w});_(()=>y(e,n,r))}),e}):``;_(()=>y(e,x,C))}),h(x,d(` `));let T=s(`rue:slot:anchor`);return h(x,T),g(()=>{let e=j.value===`preview`?v(()=>{let e=c(),t=m(`div`,e);h(e,t),a(t,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let n=m(`div`,t);h(t,n),a(n,`card bg-base-100 shadow`);let i=m(`div`,n);h(n,i),a(i,`card-body gap-4`);let o=m(`label`,i);h(i,o),a(o,`form-control w-full`);let s=m(`span`,o);h(o,s),a(s,`label-text mb-1`),h(s,d(`name`));let p=m(`input`,o);h(o,p),a(p,`input input-bordered w-full`),g(()=>{u(p,E.value)}),f(p,`input`,e=>{E.value=e.target.value});let _=m(`label`,i);h(i,_),a(_,`form-control w-full`);let v=m(`span`,_);h(_,v),a(v,`label-text mb-1`),h(v,d(`role`));let y=m(`input`,_);h(_,y),a(y,`input input-bordered w-full`),g(()=>{u(y,k.value)}),f(y,`input`,e=>{k.value=e.target.value});let b=m(`label`,i);h(i,b),a(b,`form-control w-full`);let x=m(`span`,b);h(b,x),a(x,`label-text mb-1`),h(x,d(`note`));let S=m(`input`,b);h(b,S),a(S,`input input-bordered w-full`),g(()=>{u(S,O.value)}),f(S,`input`,e=>{O.value=e.target.value});let C=m(`div`,i);h(i,C),a(C,`flex flex-wrap gap-2`);let w=m(`button`,C);h(C,w),a(w,`btn btn-primary`),f(w,`click`,()=>{D.value+=1}),h(w,d(`visits: `));let T=l(w);h(w,T),g(()=>{r(T,D.value)});let j=m(`button`,C);h(C,j),a(j,`btn`),f(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=l(j);h(j,M),g(()=>{r(M,A.value)});let N=m(`div`,t);h(t,N),a(N,`card bg-base-100 shadow`);let P=m(`div`,N);h(N,P),a(P,`card-body gap-3`);let F=m(`div`,P);h(P,F);let I=m(`div`,F);h(F,I),a(I,`text-sm opacity-60`),h(I,d(`profile`));let L=m(`div`,F);h(F,L),a(L,`text-xl font-semibold`);let R=l(L);h(L,R),g(()=>{r(R,E.value)});let z=m(`div`,F);h(F,z);let B=l(z);h(z,B),g(()=>{r(B,k.value)});let V=m(`div`,P);h(P,V),a(V,`stats stats-vertical shadow-none bg-base-200`);let H=m(`div`,V);h(V,H),a(H,`stat`);let U=m(`div`,H);h(H,U),a(U,`stat-title`),h(U,d(`visits`));let W=m(`div`,H);h(H,W),a(W,`stat-value text-2xl`);let G=l(W);h(W,G),g(()=>{r(G,D.value)});let K=m(`div`,V);h(V,K),a(K,`stat`);let q=m(`div`,K);h(K,q),a(q,`stat-title`),h(q,d(`getter ref`));let J=m(`div`,K);h(K,J),a(J,`stat-value text-2xl`);let Y=l(J);h(J,Y),g(()=>{r(Y,ee.value)});let X=m(`div`,P);h(P,X),a(X,`badge badge-outline`);let Z=l(X);h(X,Z),g(()=>{r(Z,A.value)});let Q=m(`p`,P);h(P,Q),a(Q,`text-sm opacity-80`);let $=l(Q);return h(Q,$),g(()=>{r($,O.value)}),e}):``;_(()=>y(e,x,T))}),e})}),n,i),n})};export{T as default};