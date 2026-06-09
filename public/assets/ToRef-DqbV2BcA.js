import{$ as e,At as t,Ht as n,J as r,Q as i,Rt as a,Tt as o,Xt as s,Y as c,Z as l,ct as u,et as d,kt as f,l as p,mt as m,ot as h,pt as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as S}from"./Code-5DOEyGxf.js";import{r as C}from"./SidebarPlaygroundExample-cASgDpH3.js";var w=`import { type FC, reactive, toRef, toRefs } from '@rue-js/rue'

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

export default ToRefDemo`,T=()=>{let{profile:T,name:E,visits:D,note:O,doubledVisits:ee,role:k,status:A,activeTab:j}=x(`useSetup:0:0`,()=>_(()=>{let e=x(`reactive:1:0`,()=>o({name:`Rue`,role:`轻量前端框架`,visits:1,status:`draft`})),n=f(e,`name`),r=f(e,`visits`),i=f(e,`note`,`等待补充`),s=f(()=>r.value*2),{role:c,status:l}=t(e);return{profile:e,name:n,visits:r,note:i,doubledVisits:s,role:c,status:l,activeTab:x(`ref:1:1`,()=>a(`preview`))}}));return p(t=>{let a=i(),o=l(`rue:component:anchor`);return c(a,o),v(y(C,{children:p(()=>{let t=i(),a=e(`h1`,t);c(t,a),u(a,`text-5xl font-semibold mb-4 md:mb-4`),c(a,d(`toRef 响应式句柄`));let o=e(`div`,t);c(t,o),h(o,`role`,`tablist`),u(o,`tabs tabs-box`);let f=e(`button`,o);c(o,f),h(f,`role`,`tab`),s(()=>{u(f,String(`tab ${j.value===`preview`?`tab-active`:``}`))}),r(f,`click`,()=>{j.value=`preview`}),c(f,d(`效果`));let _=e(`button`,o);c(o,_),h(_,`role`,`tab`),s(()=>{u(_,String(`tab ${j.value===`code`?`tab-active`:``}`))}),r(_,`click`,()=>{j.value=`code`}),c(_,d(`代码`));let x=e(`div`,t);c(t,x),u(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=l(`rue:slot:anchor`);c(x,C),s(()=>{let t=j.value===`code`?p(()=>{let t=i(),r=e(`div`,t);c(t,r),u(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);c(r,a),u(a,`card-body p-0`);let o=l(`rue:component:anchor`);return c(a,o),s(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:w});n(()=>v(e,a,o))}),t}):``;n(()=>v(t,x,C))}),c(x,d(` `));let T=l(`rue:slot:anchor`);return c(x,T),s(()=>{let t=j.value===`preview`?p(()=>{let t=i(),n=e(`div`,t);c(t,n),u(n,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`);let a=e(`div`,n);c(n,a),u(a,`card bg-base-100 shadow`);let o=e(`div`,a);c(a,o),u(o,`card-body gap-4`);let l=e(`label`,o);c(o,l),u(l,`form-control w-full`);let f=e(`span`,l);c(l,f),u(f,`label-text mb-1`),c(f,d(`name`));let p=e(`input`,l);c(l,p),u(p,`input input-bordered w-full`),s(()=>{g(p,E.value)}),r(p,`input`,e=>{E.value=e.target.value});let h=e(`label`,o);c(o,h),u(h,`form-control w-full`);let _=e(`span`,h);c(h,_),u(_,`label-text mb-1`),c(_,d(`role`));let v=e(`input`,h);c(h,v),u(v,`input input-bordered w-full`),s(()=>{g(v,k.value)}),r(v,`input`,e=>{k.value=e.target.value});let y=e(`label`,o);c(o,y),u(y,`form-control w-full`);let x=e(`span`,y);c(y,x),u(x,`label-text mb-1`),c(x,d(`note`));let S=e(`input`,y);c(y,S),u(S,`input input-bordered w-full`),s(()=>{g(S,O.value)}),r(S,`input`,e=>{O.value=e.target.value});let C=e(`div`,o);c(o,C),u(C,`flex flex-wrap gap-2`);let w=e(`button`,C);c(C,w),u(w,`btn btn-primary`),r(w,`click`,()=>{D.value+=1}),c(w,d(`visits: `));let T=b(w);c(w,T),s(()=>{m(T,D.value)});let j=e(`button`,C);c(C,j),u(j,`btn`),r(j,`click`,()=>{A.value=A.value===`draft`?`ready`:`draft`});let M=b(j);c(j,M),s(()=>{m(M,A.value)});let N=e(`div`,n);c(n,N),u(N,`card bg-base-100 shadow`);let P=e(`div`,N);c(N,P),u(P,`card-body gap-3`);let F=e(`div`,P);c(P,F);let I=e(`div`,F);c(F,I),u(I,`text-sm opacity-60`),c(I,d(`profile`));let L=e(`div`,F);c(F,L),u(L,`text-xl font-semibold`);let R=b(L);c(L,R),s(()=>{m(R,E.value)});let z=e(`div`,F);c(F,z);let B=b(z);c(z,B),s(()=>{m(B,k.value)});let V=e(`div`,P);c(P,V),u(V,`stats stats-vertical shadow-none bg-base-200`);let H=e(`div`,V);c(V,H),u(H,`stat`);let U=e(`div`,H);c(H,U),u(U,`stat-title`),c(U,d(`visits`));let W=e(`div`,H);c(H,W),u(W,`stat-value text-2xl`);let G=b(W);c(W,G),s(()=>{m(G,D.value)});let K=e(`div`,V);c(V,K),u(K,`stat`);let q=e(`div`,K);c(K,q),u(q,`stat-title`),c(q,d(`getter ref`));let J=e(`div`,K);c(K,J),u(J,`stat-value text-2xl`);let Y=b(J);c(J,Y),s(()=>{m(Y,ee.value)});let X=e(`div`,P);c(P,X),u(X,`badge badge-outline`);let Z=b(X);c(X,Z),s(()=>{m(Z,A.value)});let Q=e(`p`,P);c(P,Q),u(Q,`text-sm opacity-80`);let $=b(Q);return c(Q,$),s(()=>{m($,O.value)}),t}):``;n(()=>v(t,x,T))}),t})}),a,o),a})};export{T as default};