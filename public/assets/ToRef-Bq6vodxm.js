import{Lt as e,Nt as t,Q as n,Rt as r,Vt as i,Xt as a,Z as o,at as s,bt as c,dt as l,it as u,l as d,nt as f,o as p,on as m,pt as h,rt as g,t as _,tn as v,tt as y,yt as b}from"./vapor-runtime-x7F5M-49.js";import{a as x}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as S}from"./Code-C5NjdoiC.js";import{r as C}from"./SidebarPlaygroundExample-DpItFif-.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>m(()=>{let n=x(`reactive:1:0`,()=>t({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),i=e(n,`name`),o=e(n,`visits`),s=e(n,`note`,`等待补充`),c=e(()=>o.value*2),{role:l,status:u}=r(n);return{profile:n,name:i,visits:o,note:s,doubledVisits:c,role:l,status:u,activeTab:x(`ref:1:1`,()=>a(`preview`))}}));return d(e=>{let t=f(),r=y(`rue:component:anchor`);return n(t,r),p(_(C,{children:d(()=>{let e=f(),t=g(`h1`,e);n(e,t),h(t,`text-5xl font-semibold mb-4 md:mb-4`),n(t,u(`toRef 响应式句柄`));let r=g(`div`,e);n(e,r),l(r,`role`,`tablist`),h(r,`tabs tabs-box`);let a=g(`button`,r);n(r,a),l(a,`role`,`tab`),i(()=>{h(a,`tab ${j.value===`preview`?`tab-active`:``}`)}),o(a,`click`,()=>{j.value=`preview`}),n(a,u(`效果`));let m=g(`button`,r);n(r,m),l(m,`role`,`tab`),i(()=>{h(m,`tab ${j.value===`code`?`tab-active`:``}`)}),o(m,`click`,()=>{j.value=`code`}),n(m,u(`代码`));let x=g(`div`,e);n(e,x),h(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=y(`rue:slot:anchor`);n(x,C),i(()=>{let e=j.value===`code`?d(()=>{let e=f(),t=g(`div`,e);n(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let r=g(`div`,t);n(t,r),h(r,`card-body p-0`);let a=y(`rue:component:anchor`);return n(r,a),i(()=>{let e=_(S,{className:`h-full`,lang:`tsx`,code:w});v(()=>p(e,r,a))}),e}):``;v(()=>p(e,x,C))}),n(x,u(` `));let T=y(`rue:slot:anchor`);return n(x,T),i(()=>{let e=j.value===`preview`?d(()=>{let e=f(),t=g(`div`,e);n(e,t),h(t,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let r=g(`div`,t);n(t,r),h(r,`card bg-base-100 shadow`);let a=g(`div`,r);n(r,a),h(a,`card-body gap-4`);let l=g(`label`,a);n(a,l),h(l,`form-control w-full`);let d=g(`span`,l);n(l,d),h(d,`label-text mb-1`),n(d,u(`name`));let p=g(`input`,l);n(l,p),h(p,`input input-bordered w-full`),i(()=>{b(p,E.value)}),o(p,`input`,e=>{E.value=e.target.value});let m=g(`label`,a);n(a,m),h(m,`form-control w-full`);let _=g(`span`,m);n(m,_),h(_,`label-text mb-1`),n(_,u(`role`));let v=g(`input`,m);n(m,v),h(v,`input input-bordered w-full`),i(()=>{b(v,k.value)}),o(v,`input`,e=>{k.value=e.target.value});let y=g(`label`,a);n(a,y),h(y,`form-control w-full`);let x=g(`span`,y);n(y,x),h(x,`label-text mb-1`),n(x,u(`note`));let S=g(`input`,y);n(y,S),h(S,`input input-bordered w-full`),i(()=>{b(S,O.value)}),o(S,`input`,e=>{O.value=e.target.value});let C=g(`div`,a);n(a,C),h(C,`flex flex-wrap gap-2`);let w=g(`button`,C);n(C,w),h(w,`btn btn-primary`),o(w,`click`,()=>{D.value+=1}),n(w,u(`visits: `));let T=s(w);n(w,T),i(()=>{c(T,D.value)});let j=g(`button`,C);n(C,j),h(j,`btn`),o(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=s(j);n(j,M),i(()=>{c(M,A.value)});let N=g(`div`,t);n(t,N),h(N,`card bg-base-100 shadow`);let P=g(`div`,N);n(N,P),h(P,`card-body gap-3`);let F=g(`div`,P);n(P,F);let I=g(`div`,F);n(F,I),h(I,`text-sm opacity-60`),n(I,u(`profile`));let L=g(`div`,F);n(F,L),h(L,`text-xl font-semibold`);let R=s(L);n(L,R),i(()=>{c(R,E.value)});let z=g(`div`,F);n(F,z);let B=s(z);n(z,B),i(()=>{c(B,k.value)});let V=g(`div`,P);n(P,V),h(V,`stats stats-vertical shadow-none bg-base-200`);let H=g(`div`,V);n(V,H),h(H,`stat`);let U=g(`div`,H);n(H,U),h(U,`stat-title`),n(U,u(`visits`));let W=g(`div`,H);n(H,W),h(W,`stat-value text-2xl`);let G=s(W);n(W,G),i(()=>{c(G,D.value)});let K=g(`div`,V);n(V,K),h(K,`stat`);let q=g(`div`,K);n(K,q),h(q,`stat-title`),n(q,u(`getter ref`));let J=g(`div`,K);n(K,J),h(J,`stat-value text-2xl`);let Y=s(J);n(J,Y),i(()=>{c(Y,ee.value)});let X=g(`div`,P);n(P,X),h(X,`badge badge-outline`);let Z=s(X);n(X,Z),i(()=>{c(Z,A.value)});let Q=g(`p`,P);n(P,Q),h(Q,`text-sm opacity-80`);let $=s(Q);return n(Q,$),i(()=>{c($,O.value)}),e}):``;v(()=>p(e,x,T))}),e})}),t,r),t})};export{T as default};