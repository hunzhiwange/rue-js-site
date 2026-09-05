import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,S as c,V as l,Vt as u,W as d,Wt as f,_n as p,bn as m,fn as h,gn as g,hn as _,nt as v,ot as y,pn as b,qt as x,un as S,wn as C,x as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./Code-DUvGro8N.js";import{r as E}from"./SidebarPlaygroundExample-EGR0CyDT.js";var D=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">triggerRef 手动触发浅层 ref</h1>`),O=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=p(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

const TriggerRefDemo: FC = () => {
  const profile = shallowRef({
    name: 'Rue',
    mood: 'calm',
    revisions: 0,
  });
  const note = ref('等待一次内部修改');

  const mutateSilently = () => {
    profile.value.revisions += 1;
    profile.value.mood = profile.value.mood === 'calm' ? 'focused' : 'calm';
    note.value = '对象内部已经变了，但浅层 ref 还没有触发视图更新';
  };

  const publishMutation = () => {
    triggerRef(profile);
    note.value = 'triggerRef(profile) 手动发布了这次内部变更';
  };

  const replaceProfile = () => {
    profile.value = {
      name: 'Rue',
      mood: 'refreshed',
      revisions: profile.value.revisions + 1,
    };
    note.value = '整体替换 profile.value 会自动触发更新';
  };

  return (
    <section className="space-y-4">
      <h2>{profile.value.name}</h2>
      <p>mood: {profile.value.mood}</p>
      <p>revisions: {profile.value.revisions}</p>
      <p>{note.value}</p>
      <button onClick={mutateSilently}>深层修改</button>
      <button onClick={publishMutation}>triggerRef</button>
      <button onClick={replaceProfile}>整体替换</button>
    </section>
  );
};

export default TriggerRefDemo;`,j=()=>{let{profile:p,note:j,activeTab:M,mutateSilently:N,publishMutation:P,replaceProfile:F}=x(`useSetup:0:0`,()=>f(()=>{let t=u({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),n=e(`等待一次内部修改`);return{profile:t,note:n,activeTab:e(`preview`),mutateSilently:()=>{t.value.revisions+=1,t.value.mood=t.value.mood===`calm`?`focused`:`calm`,t.value.log=[`draft #${t.value.revisions}`,...t.value.log].slice(0,4),n.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{S(t),n.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{t.value={name:`Rue`,mood:`refreshed`,revisions:t.value.revisions+1,log:[`replace #${t.value.revisions+1}`,...t.value.log].slice(0,4)},n.value=`整体替换 profile.value 会自动触发更新`}}}));return i(E,()=>({children:[(e,t,n)=>w(e,n,()=>r(Object.assign(e=>{let t=v();return t.appendChild(D().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>w(e,n,()=>r(Object.assign(e=>{let t=v(),n=O().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),y(i,`role`,`tab`),C(()=>{o(i,`tab ${M.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{M.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),s(()=>i.removeEventListener(`click`,c)),y(a,`role`,`tab`),C(()=>{o(a,`tab ${M.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{M.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,i,o)=>w(e,o,()=>r(Object.assign(e=>{let i=v(),o=k().content.cloneNode(!0),s=o.firstChild,u=s.childNodes[0],f=u.parentNode,y=s.childNodes[1],x=y.parentNode;return i.appendChild(o),l(f,u,()=>{let e=M.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=_(`div`,t);return h(t,n),n.className=`card-body p-0`,a(n,T,()=>({className:`h-full`,lang:`tsx`,code:A})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(x,y,()=>{let e=M.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let i=_(`div`,e);i.className=`card bg-base-100 shadow`;let a=_(`div`,i);h(i,a),a.className=`card-body gap-5`;let o=_(`div`,a);h(a,o),o.className=`flex flex-col gap-2`;let s=_(`div`,o);h(o,s),s.className=`text-sm text-base-content/60`,h(s,g(`shallowRef profile`));let l=_(`div`,o);h(o,l),l.className=`stats stats-vertical md:stats-horizontal bg-base-200`;let u=_(`div`,l);h(l,u),u.className=`stat`;let f=_(`div`,u);h(u,f),f.className=`stat-title`,h(f,g(`name`));let v=_(`div`,u);h(u,v),v.className=`stat-value text-2xl`;let y=g(``);h(v,y),m(y,()=>p.value.name);let x=_(`div`,l);h(l,x),x.className=`stat`;let S=_(`div`,x);h(x,S),S.className=`stat-title`,h(S,g(`mood`));let T=_(`div`,x);h(x,T),T.className=`stat-value text-2xl`;let E=g(``);h(T,E),m(E,()=>p.value.mood);let D=_(`div`,l);h(l,D),D.className=`stat`;let O=_(`div`,D);h(D,O),O.className=`stat-title`,h(O,g(`revisions`));let k=_(`div`,D);h(D,k),k.className=`stat-value text-2xl`;let A=g(``);h(k,A),m(A,()=>p.value.revisions);let M=_(`div`,a);h(a,M),M.className=`alert`;let I=_(`span`,M);h(M,I);let L=g(``);h(I,L),m(L,()=>j.value);let R=_(`div`,a);h(a,R),R.className=`flex flex-wrap gap-3`;let z=_(`button`,R);h(R,z),z.className=`btn btn-outline`;let B=e=>{let t=N;typeof t==`function`&&t(e)};z.addEventListener(`click`,B),n(()=>z.removeEventListener(`click`,B)),h(z,g(`深层修改`));let V=_(`button`,R);h(R,V),V.className=`btn btn-primary`;let H=e=>{let t=P;typeof t==`function`&&t(e)};V.addEventListener(`click`,H),n(()=>V.removeEventListener(`click`,H)),h(V,g(`triggerRef`));let U=_(`button`,R);h(R,U),U.className=`btn`;let W=e=>{let t=F;typeof t==`function`&&t(e)};U.addEventListener(`click`,W),n(()=>U.removeEventListener(`click`,W)),h(U,g(`整体替换`));let G=_(`div`,a);h(a,G),G.className=`rounded-box bg-base-200 p-4`;let K=_(`div`,G);h(G,K),K.className=`text-sm font-medium mb-2`,h(K,g(`log`));let q=_(`div`,G);h(G,q),q.className=`flex flex-wrap gap-2`;let J=b(`rue:list:end`);h(q,J);let Y=[];return C(()=>{let e=p.value.log||[];Y=t(q,J,Y,e,(e,t)=>e,(e,t)=>{let n=d(e),i=d(t);return c((e,t,i)=>w(e,i,()=>r(Object.assign(e=>{let t=_(`span`,e);t.className=`badge badge-neutral`;let r=g(``);return h(t,r),m(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]}))};export{j as default};