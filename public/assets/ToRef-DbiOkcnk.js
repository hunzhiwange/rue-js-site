import{$ as e,At as t,Et as n,Q as r,Qt as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,jt as d,l as f,lt as p,mt as m,nt as h,o as g,st as _,t as v,tt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as S}from"./Code-BIscIyEp.js";import{r as C}from"./SidebarPlaygroundExample-CEz1fABX.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>c(()=>{let e=x(`reactive:1:0`,()=>n({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),r=t(e,`name`),i=t(e,`visits`),a=t(e,`note`,`等待补充`),o=t(()=>i.value*2),{role:s,status:c}=d(e);return{profile:e,name:r,visits:i,note:a,doubledVisits:o,role:s,status:c,activeTab:x(`ref:1:1`,()=>b(`preview`))}}));return f(t=>{let n=e(),c=r(`rue:component:anchor`);return o(n,c),g(v(C,{children:f(()=>{let t=e(),n=l(`h1`,t);o(t,n),p(n,`text-5xl font-semibold mb-4 md:mb-4`),o(n,y(`toRef 响应式句柄`));let c=l(`div`,t);o(t,c),_(c,`role`,`tablist`),p(c,`tabs tabs-box`);let d=l(`button`,c);o(c,d),_(d,`role`,`tab`),i(()=>{p(d,`tab ${j.value===`preview`?`tab-active`:``}`)}),s(d,`click`,()=>{j.value=`preview`}),o(d,y(`效果`));let b=l(`button`,c);o(c,b),_(b,`role`,`tab`),i(()=>{p(b,`tab ${j.value===`code`?`tab-active`:``}`)}),s(b,`click`,()=>{j.value=`code`}),o(b,y(`代码`));let x=l(`div`,t);o(t,x),p(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=r(`rue:slot:anchor`);o(x,C),i(()=>{let t=j.value===`code`?f(()=>{let t=e(),n=l(`div`,t);o(t,n),p(n,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,n);o(n,s),p(s,`card-body p-0`);let c=r(`rue:component:anchor`);return o(s,c),i(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:w});a(()=>g(e,s,c))}),t}):``;a(()=>g(t,x,C))}),o(x,y(` `));let T=r(`rue:slot:anchor`);return o(x,T),i(()=>{let t=j.value===`preview`?f(()=>{let t=e(),n=l(`div`,t);o(t,n),p(n,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let r=l(`div`,n);o(n,r),p(r,`card bg-base-100 shadow`);let a=l(`div`,r);o(r,a),p(a,`card-body gap-4`);let c=l(`label`,a);o(a,c),p(c,`form-control w-full`);let d=l(`span`,c);o(c,d),p(d,`label-text mb-1`),o(d,y(`name`));let f=l(`input`,c);o(c,f),p(f,`input input-bordered w-full`),i(()=>{m(f,E.value)}),s(f,`input`,e=>{E.value=e.target.value});let g=l(`label`,a);o(a,g),p(g,`form-control w-full`);let _=l(`span`,g);o(g,_),p(_,`label-text mb-1`),o(_,y(`role`));let v=l(`input`,g);o(g,v),p(v,`input input-bordered w-full`),i(()=>{m(v,k.value)}),s(v,`input`,e=>{k.value=e.target.value});let b=l(`label`,a);o(a,b),p(b,`form-control w-full`);let x=l(`span`,b);o(b,x),p(x,`label-text mb-1`),o(x,y(`note`));let S=l(`input`,b);o(b,S),p(S,`input input-bordered w-full`),i(()=>{m(S,O.value)}),s(S,`input`,e=>{O.value=e.target.value});let C=l(`div`,a);o(a,C),p(C,`flex flex-wrap gap-2`);let w=l(`button`,C);o(C,w),p(w,`btn btn-primary`),s(w,`click`,()=>{D.value+=1}),o(w,y(`visits: `));let T=h(w);o(w,T),i(()=>{u(T,D.value)});let j=l(`button`,C);o(C,j),p(j,`btn`),s(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=h(j);o(j,M),i(()=>{u(M,A.value)});let N=l(`div`,n);o(n,N),p(N,`card bg-base-100 shadow`);let P=l(`div`,N);o(N,P),p(P,`card-body gap-3`);let F=l(`div`,P);o(P,F);let I=l(`div`,F);o(F,I),p(I,`text-sm opacity-60`),o(I,y(`profile`));let L=l(`div`,F);o(F,L),p(L,`text-xl font-semibold`);let R=h(L);o(L,R),i(()=>{u(R,E.value)});let z=l(`div`,F);o(F,z);let B=h(z);o(z,B),i(()=>{u(B,k.value)});let V=l(`div`,P);o(P,V),p(V,`stats stats-vertical shadow-none bg-base-200`);let H=l(`div`,V);o(V,H),p(H,`stat`);let U=l(`div`,H);o(H,U),p(U,`stat-title`),o(U,y(`visits`));let W=l(`div`,H);o(H,W),p(W,`stat-value text-2xl`);let G=h(W);o(W,G),i(()=>{u(G,D.value)});let K=l(`div`,V);o(V,K),p(K,`stat`);let q=l(`div`,K);o(K,q),p(q,`stat-title`),o(q,y(`getter ref`));let J=l(`div`,K);o(K,J),p(J,`stat-value text-2xl`);let Y=h(J);o(J,Y),i(()=>{u(Y,ee.value)});let X=l(`div`,P);o(P,X),p(X,`badge badge-outline`);let Z=h(X);o(X,Z),i(()=>{u(Z,A.value)});let Q=l(`p`,P);o(P,Q),p(Q,`text-sm opacity-80`);let $=h(Q);return o(Q,$),i(()=>{u($,O.value)}),t}):``;a(()=>g(t,x,T))}),t})}),n,c),n})};export{T as default};