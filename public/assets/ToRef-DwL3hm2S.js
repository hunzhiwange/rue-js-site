import{$ as e,Ht as t,J as n,Lt as r,Ot as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,ft as d,kt as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,wt as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as S}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>g(()=>{let e=x(`reactive:1:0`,()=>b({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),t=i(e,`name`),n=i(e,`visits`),a=i(e,`note`,`等待补充`),o=i(()=>n.value*2),{role:s,status:c}=f(e);return{profile:e,name:t,visits:n,note:a,doubledVisits:o,role:s,status:c,activeTab:x(`ref:1:1`,()=>r(`preview`))}}));return p(r=>{let i=c(),f=o(`rue:component:anchor`);return n(i,f),_(y(C,{children:p(()=>{let r=c(),i=a(`h1`,r);n(r,i),v(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,e(`toRef 响应式句柄`));let f=a(`div`,r);n(r,f),l(f,`role`,`tablist`),v(f,`tabs tabs-box`);let g=a(`button`,f);n(f,g),l(g,`role`,`tab`),s(()=>{v(g,`tab ${j.value===`preview`?`tab-active`:``}`)}),h(g,`click`,()=>{j.value=`preview`}),n(g,e(`效果`));let b=a(`button`,f);n(f,b),l(b,`role`,`tab`),s(()=>{v(b,`tab ${j.value===`code`?`tab-active`:``}`)}),h(b,`click`,()=>{j.value=`code`}),n(b,e(`代码`));let x=a(`div`,r);n(r,x),v(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=o(`rue:slot:anchor`);n(x,C),s(()=>{let e=j.value===`code`?p(()=>{let e=c(),r=a(`div`,e);n(e,r),v(r,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,r);n(r,i),v(i,`card-body p-0`);let l=o(`rue:component:anchor`);return n(i,l),s(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:w});t(()=>_(e,i,l))}),e}):``;t(()=>_(e,x,C))}),n(x,e(` `));let T=o(`rue:slot:anchor`);return n(x,T),s(()=>{let r=j.value===`preview`?p(()=>{let t=c(),r=a(`div`,t);n(t,r),v(r,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let i=a(`div`,r);n(r,i),v(i,`card bg-base-100 shadow`);let o=a(`div`,i);n(i,o),v(o,`card-body gap-4`);let l=a(`label`,o);n(o,l),v(l,`form-control w-full`);let f=a(`span`,l);n(l,f),v(f,`label-text mb-1`),n(f,e(`name`));let p=a(`input`,l);n(l,p),v(p,`input input-bordered w-full`),s(()=>{d(p,E.value)}),h(p,`input`,e=>{E.value=e.target.value});let g=a(`label`,o);n(o,g),v(g,`form-control w-full`);let _=a(`span`,g);n(g,_),v(_,`label-text mb-1`),n(_,e(`role`));let y=a(`input`,g);n(g,y),v(y,`input input-bordered w-full`),s(()=>{d(y,k.value)}),h(y,`input`,e=>{k.value=e.target.value});let b=a(`label`,o);n(o,b),v(b,`form-control w-full`);let x=a(`span`,b);n(b,x),v(x,`label-text mb-1`),n(x,e(`note`));let S=a(`input`,b);n(b,S),v(S,`input input-bordered w-full`),s(()=>{d(S,O.value)}),h(S,`input`,e=>{O.value=e.target.value});let C=a(`div`,o);n(o,C),v(C,`flex flex-wrap gap-2`);let w=a(`button`,C);n(C,w),v(w,`btn btn-primary`),h(w,`click`,()=>{D.value+=1}),n(w,e(`visits: `));let T=u(w);n(w,T),s(()=>{m(T,D.value)});let j=a(`button`,C);n(C,j),v(j,`btn`),h(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=u(j);n(j,M),s(()=>{m(M,A.value)});let N=a(`div`,r);n(r,N),v(N,`card bg-base-100 shadow`);let P=a(`div`,N);n(N,P),v(P,`card-body gap-3`);let F=a(`div`,P);n(P,F);let I=a(`div`,F);n(F,I),v(I,`text-sm opacity-60`),n(I,e(`profile`));let L=a(`div`,F);n(F,L),v(L,`text-xl font-semibold`);let R=u(L);n(L,R),s(()=>{m(R,E.value)});let z=a(`div`,F);n(F,z);let B=u(z);n(z,B),s(()=>{m(B,k.value)});let V=a(`div`,P);n(P,V),v(V,`stats stats-vertical shadow-none bg-base-200`);let H=a(`div`,V);n(V,H),v(H,`stat`);let U=a(`div`,H);n(H,U),v(U,`stat-title`),n(U,e(`visits`));let W=a(`div`,H);n(H,W),v(W,`stat-value text-2xl`);let G=u(W);n(W,G),s(()=>{m(G,D.value)});let K=a(`div`,V);n(V,K),v(K,`stat`);let q=a(`div`,K);n(K,q),v(q,`stat-title`),n(q,e(`getter ref`));let J=a(`div`,K);n(K,J),v(J,`stat-value text-2xl`);let Y=u(J);n(J,Y),s(()=>{m(Y,ee.value)});let X=a(`div`,P);n(P,X),v(X,`badge badge-outline`);let Z=u(X);n(X,Z),s(()=>{m(Z,A.value)});let Q=a(`p`,P);n(P,Q),v(Q,`text-sm opacity-80`);let $=u(Q);return n(Q,$),s(()=>{m($,O.value)}),t}):``;t(()=>_(r,x,T))}),r})}),i,f),i})};export{T as default};