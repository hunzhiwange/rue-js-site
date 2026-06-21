import{$t as e,Ft as t,It as n,Jt as r,Q as i,Z as a,_t as o,dt as s,et as c,in as l,it as u,jt as d,l as f,lt as p,nt as m,o as h,rt as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as C}from"./SidebarPlaygroundExample-BEWYUWOl.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>l(()=>{let e=x(`reactive:1:0`,()=>d({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),i=t(e,`name`),a=t(e,`visits`),o=t(e,`note`,`等待补充`),s=t(()=>a.value*2),{role:c,status:l}=n(e);return{profile:e,name:i,visits:a,note:o,doubledVisits:s,role:c,status:l,activeTab:x(`ref:1:1`,()=>r(`preview`))}}));return f(t=>{let n=v(),r=c(`rue:component:anchor`);return i(n,r),h(_(C,{children:f(()=>{let t=v(),n=m(`h1`,t);i(t,n),s(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,g(`toRef 响应式句柄`));let r=m(`div`,t);i(t,r),p(r,`role`,`tablist`),s(r,`tabs tabs-box`);let l=m(`button`,r);i(r,l),p(l,`role`,`tab`),b(()=>{s(l,`tab ${j.value===`preview`?`tab-active`:``}`)}),a(l,`click`,()=>{j.value=`preview`}),i(l,g(`效果`));let d=m(`button`,r);i(r,d),p(d,`role`,`tab`),b(()=>{s(d,`tab ${j.value===`code`?`tab-active`:``}`)}),a(d,`click`,()=>{j.value=`code`}),i(d,g(`代码`));let x=m(`div`,t);i(t,x),s(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=c(`rue:slot:anchor`);i(x,C),b(()=>{let t=j.value===`code`?f(()=>{let t=v(),n=m(`div`,t);i(t,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=m(`div`,n);i(n,r),s(r,`card-body p-0`);let a=c(`rue:component:anchor`);return i(r,a),b(()=>{let t=_(S,{className:`h-full`,lang:`tsx`,code:w});e(()=>h(t,r,a))}),t}):``;e(()=>h(t,x,C))}),i(x,g(` `));let T=c(`rue:slot:anchor`);return i(x,T),b(()=>{let t=j.value===`preview`?f(()=>{let e=v(),t=m(`div`,e);i(e,t),s(t,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let n=m(`div`,t);i(t,n),s(n,`card bg-base-100 shadow`);let r=m(`div`,n);i(n,r),s(r,`card-body gap-4`);let c=m(`label`,r);i(r,c),s(c,`form-control w-full`);let l=m(`span`,c);i(c,l),s(l,`label-text mb-1`),i(l,g(`name`));let d=m(`input`,c);i(c,d),s(d,`input input-bordered w-full`),b(()=>{o(d,E.value)}),a(d,`input`,e=>{E.value=e.target.value});let f=m(`label`,r);i(r,f),s(f,`form-control w-full`);let p=m(`span`,f);i(f,p),s(p,`label-text mb-1`),i(p,g(`role`));let h=m(`input`,f);i(f,h),s(h,`input input-bordered w-full`),b(()=>{o(h,k.value)}),a(h,`input`,e=>{k.value=e.target.value});let _=m(`label`,r);i(r,_),s(_,`form-control w-full`);let x=m(`span`,_);i(_,x),s(x,`label-text mb-1`),i(x,g(`note`));let S=m(`input`,_);i(_,S),s(S,`input input-bordered w-full`),b(()=>{o(S,O.value)}),a(S,`input`,e=>{O.value=e.target.value});let C=m(`div`,r);i(r,C),s(C,`flex flex-wrap gap-2`);let w=m(`button`,C);i(C,w),s(w,`btn btn-primary`),a(w,`click`,()=>{D.value+=1}),i(w,g(`visits: `));let T=u(w);i(w,T),b(()=>{y(T,D.value)});let j=m(`button`,C);i(C,j),s(j,`btn`),a(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=u(j);i(j,M),b(()=>{y(M,A.value)});let N=m(`div`,t);i(t,N),s(N,`card bg-base-100 shadow`);let P=m(`div`,N);i(N,P),s(P,`card-body gap-3`);let F=m(`div`,P);i(P,F);let I=m(`div`,F);i(F,I),s(I,`text-sm opacity-60`),i(I,g(`profile`));let L=m(`div`,F);i(F,L),s(L,`text-xl font-semibold`);let R=u(L);i(L,R),b(()=>{y(R,E.value)});let z=m(`div`,F);i(F,z);let B=u(z);i(z,B),b(()=>{y(B,k.value)});let V=m(`div`,P);i(P,V),s(V,`stats stats-vertical shadow-none bg-base-200`);let H=m(`div`,V);i(V,H),s(H,`stat`);let U=m(`div`,H);i(H,U),s(U,`stat-title`),i(U,g(`visits`));let W=m(`div`,H);i(H,W),s(W,`stat-value text-2xl`);let G=u(W);i(W,G),b(()=>{y(G,D.value)});let K=m(`div`,V);i(V,K),s(K,`stat`);let q=m(`div`,K);i(K,q),s(q,`stat-title`),i(q,g(`getter ref`));let J=m(`div`,K);i(K,J),s(J,`stat-value text-2xl`);let Y=u(J);i(J,Y),b(()=>{y(Y,ee.value)});let X=m(`div`,P);i(P,X),s(X,`badge badge-outline`);let Z=u(X);i(X,Z),b(()=>{y(Z,A.value)});let Q=m(`p`,P);i(P,Q),s(Q,`text-sm opacity-80`);let $=u(Q);return i(Q,$),b(()=>{y($,O.value)}),e}):``;e(()=>h(t,x,T))}),t})}),n,r),n})};export{T as default};