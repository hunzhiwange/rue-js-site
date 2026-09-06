import{At as e,C as t,Dn as n,E as r,J as i,Mt as a,Ot as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,at as ee,b as te,bt as ne,dt as f,gn as p,gt as m,in as h,kn as g,mn as re,nn as _,nt as v,pn as y,sn as b,st as x,tn as S,ut as C,vn as w,vt as T,w as E,wn as D,xn as ie,yt as O}from"./rue-runtime-HIMg8Lz8.js";import{t as k}from"./Code-DpH7u0gk.js";import{r as A}from"./SidebarPlaygroundExample-BCPRe0hA.js";var j=w(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">triggerRef 手动触发浅层 ref</h1>`),M=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=w(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,F=()=>{let{profile:w,note:F,activeTab:I,mutateSilently:ae,publishMutation:oe,replaceProfile:se}=b(`useSetup:0:0`,()=>h(()=>{let e=_({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),t=S(`等待一次内部修改`);return{profile:e,note:t,activeTab:S(`preview`),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),t.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{i(e),t.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},t.value=`整体替换 profile.value 会自动触发更新`}}}));return(()=>{let i=e(()=>{let i=d(),a=N().content.cloneNode(!0),h=a.firstChild,_=h.childNodes[0],b=_.parentNode,S=h.childNodes[1],A=S.parentNode;return i.appendChild(a),v(b,_,()=>{let e=I.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=p(`div`,t);return y(t,n),n.className=`card-body p-0`,x(n,k,()=>({className:`h-full`,lang:`tsx`,code:P})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),D(()=>{let i=I.value===`preview`?e(()=>{let e=d(),i=T(`div`,e);f(e,i),s(i,`card bg-base-100 shadow`);let a=T(`div`,i);f(i,a),s(a,`card-body gap-5`);let h=T(`div`,a);f(a,h),s(h,`flex flex-col gap-2`);let _=T(`div`,h);f(h,_),s(_,`text-sm text-base-content/60`),f(_,O(`shallowRef profile`));let v=T(`div`,h);f(h,v),s(v,`stats stats-vertical md:stats-horizontal bg-base-200`);let b=T(`div`,v);f(v,b),s(b,`stat`);let x=T(`div`,b);f(b,x),s(x,`stat-title`),f(x,O(`name`));let S=T(`div`,b);f(b,S),s(S,`stat-value text-2xl`);let k=m(`rue:slot:anchor`);f(S,k),D(()=>{let e=w.value.name;g(()=>C(e,S,k))});let A=T(`div`,v);f(v,A),s(A,`stat`);let j=T(`div`,A);f(A,j),s(j,`stat-title`),f(j,O(`mood`));let M=T(`div`,A);f(A,M),s(M,`stat-value text-2xl`);let N=m(`rue:slot:anchor`);f(M,N),D(()=>{let e=w.value.mood;g(()=>C(e,M,N))});let P=T(`div`,v);f(v,P),s(P,`stat`);let I=T(`div`,P);f(P,I),s(I,`stat-title`),f(I,O(`revisions`));let L=T(`div`,P);f(P,L),s(L,`stat-value text-2xl`);let R=m(`rue:slot:anchor`);f(L,R),D(()=>{let e=w.value.revisions;g(()=>C(e,L,R))});let z=T(`div`,a);f(a,z),s(z,`alert`);let B=T(`span`,z);f(z,B);let V=ne(B);f(B,V),D(()=>{o(V,F.value)});let H=T(`div`,a);f(a,H),s(H,`flex flex-wrap gap-3`);let U=T(`button`,H);f(H,U),s(U,`btn btn-outline`);let W=e=>{let t=ae;typeof t==`function`&&t(e)};U.addEventListener(`click`,W),c(()=>U.removeEventListener(`click`,W)),f(U,O(`深层修改`));let G=T(`button`,H);f(H,G),s(G,`btn btn-primary`);let K=e=>{let t=oe;typeof t==`function`&&t(e)};G.addEventListener(`click`,K),c(()=>G.removeEventListener(`click`,K)),f(G,O(`triggerRef`));let q=T(`button`,H);f(H,q),s(q,`btn`);let J=e=>{let t=se;typeof t==`function`&&t(e)};q.addEventListener(`click`,J),c(()=>q.removeEventListener(`click`,J)),f(q,O(`整体替换`));let Y=T(`div`,a);f(a,Y),s(Y,`rounded-box bg-base-200 p-4`);let X=T(`div`,Y);f(Y,X),s(X,`text-sm font-medium mb-2`),f(X,O(`log`));let Z=T(`div`,Y);f(Y,Z),s(Z,`flex flex-wrap gap-2`);let Q=re(`rue:list:end`);y(Z,Q);let $=[];return D(()=>{let e=w.value.log||[];$=E(Z,Q,$,e,(e,t)=>e,(e,n)=>{let i=ee(e);return t((e,t,n)=>r(e,n,()=>l(Object.assign(e=>{let t=p(`span`,e);t.className=`badge badge-neutral`;let n=u(``);return y(t,n),ie(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>te($)),e},!0):``;g(()=>C(i,A,S))}),i});return a(A,()=>({children:[l(e=>j().content.cloneNode(!0).firstChild),l(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;D(()=>{let e=`tab ${I.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{I.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;D(()=>{let e=`tab ${I.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{I.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i]}))})()};export{F as default};