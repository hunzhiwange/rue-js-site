import{$ as e,Ct as t,Dt as n,J as r,Kt as i,Lt as a,Ot as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,d as p,et as m,l as h,mt as g,ot as _,pt as v,t as y,tt as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x}from"./vapor-helpers-vapor-DkadWylb.js";import{t as S}from"./Code-B_4lzH85.js";import{t as C}from"./SidebarPlaygroundExample-CtM-WHq_.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>i(()=>{let e=x(`reactive:1:0`,()=>t({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),r=n(e,`name`),i=n(e,`visits`),s=n(e,`note`,`等待补充`),c=n(()=>i.value*2),{role:l,status:u}=o(e);return{profile:e,name:r,visits:i,note:s,doubledVisits:c,role:l,status:u,activeTab:x(`ref:1:1`,()=>a(`preview`))}}));return p(t=>{let n=s(),i=d(`rue:component:anchor`);return l(n,i),h(y(C,{children:p(()=>{let t=s(),n=e(`h1`,t);l(t,n),f(n,`text-5xl font-semibold mb-4 md:mb-4`),l(n,m(`toRef 响应式句柄`));let i=e(`div`,t);l(t,i),_(i,`role`,`tablist`),f(i,`tabs tabs-box`);let a=e(`button`,i);l(i,a),_(a,`role`,`tab`),u(()=>{f(a,String(`tab ${j.value===`preview`?`tab-active`:``}`))}),r(a,`click`,()=>{j.value=`preview`}),l(a,m(`效果`));let o=e(`button`,i);l(i,o),_(o,`role`,`tab`),u(()=>{f(o,String(`tab ${j.value===`code`?`tab-active`:``}`))}),r(o,`click`,()=>{j.value=`code`}),l(o,m(`代码`));let x=e(`div`,t);l(t,x),f(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=d(`rue:slot:anchor`);l(x,C),u(()=>{let t=j.value===`code`?p(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);l(n,r),f(r,`card-body p-0`);let i=d(`rue:component:anchor`);return l(r,i),u(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:w});c(()=>h(e,r,i))}),t}):``;c(()=>h(t,x,C))}),l(x,m(` `));let T=d(`rue:slot:anchor`);return l(x,T),u(()=>{let t=j.value===`preview`?p(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let i=e(`div`,n);l(n,i),f(i,`card bg-base-100 shadow`);let a=e(`div`,i);l(i,a),f(a,`card-body gap-4`);let o=e(`label`,a);l(a,o),f(o,`form-control w-full`);let c=e(`span`,o);l(o,c),f(c,`label-text mb-1`),l(c,m(`name`));let d=e(`input`,o);l(o,d),f(d,`input input-bordered w-full`),u(()=>{v(d,E.value)}),r(d,`input`,e=>{E.value=e.target.value});let p=e(`label`,a);l(a,p),f(p,`form-control w-full`);let h=e(`span`,p);l(p,h),f(h,`label-text mb-1`),l(h,m(`role`));let _=e(`input`,p);l(p,_),f(_,`input input-bordered w-full`),u(()=>{v(_,k.value)}),r(_,`input`,e=>{k.value=e.target.value});let y=e(`label`,a);l(a,y),f(y,`form-control w-full`);let x=e(`span`,y);l(y,x),f(x,`label-text mb-1`),l(x,m(`note`));let S=e(`input`,y);l(y,S),f(S,`input input-bordered w-full`),u(()=>{v(S,O.value)}),r(S,`input`,e=>{O.value=e.target.value});let C=e(`div`,a);l(a,C),f(C,`flex flex-wrap gap-2`);let w=e(`button`,C);l(C,w),f(w,`btn btn-primary`),r(w,`click`,()=>{D.value+=1}),l(w,m(`visits: `));let T=b(w);l(w,T),u(()=>{g(T,D.value)});let j=e(`button`,C);l(C,j),f(j,`btn`),r(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=b(j);l(j,M),u(()=>{g(M,A.value)});let N=e(`div`,n);l(n,N),f(N,`card bg-base-100 shadow`);let P=e(`div`,N);l(N,P),f(P,`card-body gap-3`);let F=e(`div`,P);l(P,F);let I=e(`div`,F);l(F,I),f(I,`text-sm opacity-60`),l(I,m(`profile`));let L=e(`div`,F);l(F,L),f(L,`text-xl font-semibold`);let R=b(L);l(L,R),u(()=>{g(R,E.value)});let z=e(`div`,F);l(F,z);let B=b(z);l(z,B),u(()=>{g(B,k.value)});let V=e(`div`,P);l(P,V),f(V,`stats stats-vertical shadow-none bg-base-200`);let H=e(`div`,V);l(V,H),f(H,`stat`);let U=e(`div`,H);l(H,U),f(U,`stat-title`),l(U,m(`visits`));let W=e(`div`,H);l(H,W),f(W,`stat-value text-2xl`);let G=b(W);l(W,G),u(()=>{g(G,D.value)});let K=e(`div`,V);l(V,K),f(K,`stat`);let q=e(`div`,K);l(K,q),f(q,`stat-title`),l(q,m(`getter ref`));let J=e(`div`,K);l(K,J),f(J,`stat-value text-2xl`);let Y=b(J);l(J,Y),u(()=>{g(Y,ee.value)});let X=e(`div`,P);l(P,X),f(X,`badge badge-outline`);let Z=b(X);l(X,Z),u(()=>{g(Z,A.value)});let Q=e(`p`,P);l(P,Q),f(Q,`text-sm opacity-80`);let $=b(Q);return l(Q,$),u(()=>{g($,O.value)}),t}):``;c(()=>h(t,x,T))}),t})}),n,i),n})};export{T as default};