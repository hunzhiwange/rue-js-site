import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,Mt as a,X as o,Xt as s,Z as c,ct as l,et as u,gt as d,ht as f,jt as p,l as m,nt as h,o as g,rt as _,t as v,tt as y,ut as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>s(()=>{let e=x(`reactive:1:0`,()=>r({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),t=p(e,`name`),i=p(e,`visits`),o=p(e,`note`,`等待补充`),s=p(()=>i.value*2),{role:c,status:l}=a(e);return{profile:e,name:t,visits:i,note:o,doubledVisits:s,role:c,status:l,activeTab:x(`ref:1:1`,()=>n(`preview`))}}));return m(n=>{let r=u(),a=e(`rue:component:anchor`);return c(r,a),g(v(C,{children:m(()=>{let n=u(),r=y(`h1`,n);c(n,r),b(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,h(`toRef 响应式句柄`));let a=y(`div`,n);c(n,a),l(a,`role`,`tablist`),b(a,`tabs tabs-box`);let s=y(`button`,a);c(a,s),l(s,`role`,`tab`),t(()=>{b(s,`tab ${j.value===`preview`?`tab-active`:``}`)}),o(s,`click`,()=>{j.value=`preview`}),c(s,h(`效果`));let p=y(`button`,a);c(a,p),l(p,`role`,`tab`),t(()=>{b(p,`tab ${j.value===`code`?`tab-active`:``}`)}),o(p,`click`,()=>{j.value=`code`}),c(p,h(`代码`));let x=y(`div`,n);c(n,x),b(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=e(`rue:slot:anchor`);c(x,C),t(()=>{let n=j.value===`code`?m(()=>{let n=u(),r=y(`div`,n);c(n,r),b(r,`card bg-base-100 shadow overflow-auto`);let a=y(`div`,r);c(r,a),b(a,`card-body p-0`);let o=e(`rue:component:anchor`);return c(a,o),t(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:w});i(()=>g(e,a,o))}),n}):``;i(()=>g(n,x,C))}),c(x,h(` `));let T=e(`rue:slot:anchor`);return c(x,T),t(()=>{let e=j.value===`preview`?m(()=>{let e=u(),n=y(`div`,e);c(e,n),b(n,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let r=y(`div`,n);c(n,r),b(r,`card bg-base-100 shadow`);let i=y(`div`,r);c(r,i),b(i,`card-body gap-4`);let a=y(`label`,i);c(i,a),b(a,`form-control w-full`);let s=y(`span`,a);c(a,s),b(s,`label-text mb-1`),c(s,h(`name`));let l=y(`input`,a);c(a,l),b(l,`input input-bordered w-full`),t(()=>{f(l,E.value)}),o(l,`input`,e=>{E.value=e.target.value});let p=y(`label`,i);c(i,p),b(p,`form-control w-full`);let m=y(`span`,p);c(p,m),b(m,`label-text mb-1`),c(m,h(`role`));let g=y(`input`,p);c(p,g),b(g,`input input-bordered w-full`),t(()=>{f(g,k.value)}),o(g,`input`,e=>{k.value=e.target.value});let v=y(`label`,i);c(i,v),b(v,`form-control w-full`);let x=y(`span`,v);c(v,x),b(x,`label-text mb-1`),c(x,h(`note`));let S=y(`input`,v);c(v,S),b(S,`input input-bordered w-full`),t(()=>{f(S,O.value)}),o(S,`input`,e=>{O.value=e.target.value});let C=y(`div`,i);c(i,C),b(C,`flex flex-wrap gap-2`);let w=y(`button`,C);c(C,w),b(w,`btn btn-primary`),o(w,`click`,()=>{D.value+=1}),c(w,h(`visits: `));let T=_(w);c(w,T),t(()=>{d(T,D.value)});let j=y(`button`,C);c(C,j),b(j,`btn`),o(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=_(j);c(j,M),t(()=>{d(M,A.value)});let N=y(`div`,n);c(n,N),b(N,`card bg-base-100 shadow`);let P=y(`div`,N);c(N,P),b(P,`card-body gap-3`);let F=y(`div`,P);c(P,F);let I=y(`div`,F);c(F,I),b(I,`text-sm opacity-60`),c(I,h(`profile`));let L=y(`div`,F);c(F,L),b(L,`text-xl font-semibold`);let R=_(L);c(L,R),t(()=>{d(R,E.value)});let z=y(`div`,F);c(F,z);let B=_(z);c(z,B),t(()=>{d(B,k.value)});let V=y(`div`,P);c(P,V),b(V,`stats stats-vertical shadow-none bg-base-200`);let H=y(`div`,V);c(V,H),b(H,`stat`);let U=y(`div`,H);c(H,U),b(U,`stat-title`),c(U,h(`visits`));let W=y(`div`,H);c(H,W),b(W,`stat-value text-2xl`);let G=_(W);c(W,G),t(()=>{d(G,D.value)});let K=y(`div`,V);c(V,K),b(K,`stat`);let q=y(`div`,K);c(K,q),b(q,`stat-title`),c(q,h(`getter ref`));let J=y(`div`,K);c(K,J),b(J,`stat-value text-2xl`);let Y=_(J);c(J,Y),t(()=>{d(Y,ee.value)});let X=y(`div`,P);c(P,X),b(X,`badge badge-outline`);let Z=_(X);c(X,Z),t(()=>{d(Z,A.value)});let Q=y(`p`,P);c(P,Q),b(Q,`text-sm opacity-80`);let $=_(Q);return c(Q,$),t(()=>{d($,O.value)}),e}):``;i(()=>g(e,x,T))}),n})}),r,a),r})};export{T as default};