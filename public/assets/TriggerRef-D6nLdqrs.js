import{Bt as e,Dt as t,F as n,M as r,Ut as i,V as a,Vt as o,W as s,Wt as c,X as ee,Y as te,_n as l,_t as u,f as ne,fn as d,gn as f,h as re,hn as p,ht as m,in as h,mn as g,mt as _,nt as v,p as y,pn as b,qt as x,sn as S,u as C,vn as ie,yn as w,zt as T}from"./rue-runtime-BWbIfNT8.js";import{t as E}from"./Code-C5ZhIIr9.js";import{r as D}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var O=w(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">triggerRef 手动触发浅层 ref</h1>`),k=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=w(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,M=(w,M,N)=>{let P=m({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),F=_(`等待一次内部修改`),I=_(`preview`),L=()=>{P.value.revisions+=1,P.value.mood=P.value.mood===`calm`?`focused`:`calm`,P.value.log=[`draft #${P.value.revisions}`,...P.value.log].slice(0,4),F.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},R=()=>{u(P),F.value=`triggerRef(profile) 手动发布了这次内部变更`},z=()=>{P.value={name:`Rue`,mood:`refreshed`,revisions:P.value.revisions+1,log:[`replace #${P.value.revisions+1}`,...P.value.log].slice(0,4)},F.value=`整体替换 profile.value 会自动触发更新`};return v(()=>(()=>{let u=c(r=>{let u=g(),m=A().content.cloneNode(!0),_=m.firstChild,v=_.childNodes[0],C=v.parentNode,w=_.childNodes[1],D=w.parentNode;u.appendChild(m),i(C,v,()=>{let e=I.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=p(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,t);return d(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,E,()=>({className:`h-full`,lang:`tsx`,code:j})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),e({parent:D,before:w},()=>I.value===`preview`?(n,r,i)=>o(n,i,()=>c(n=>{let r=g(),i=p(`div`,r);d(r,i),t(i,`card bg-base-100 shadow`);let a=p(`div`,i);d(i,a),t(a,`card-body gap-5`);let c=p(`div`,a);d(a,c),t(c,`flex flex-col gap-2`);let u=p(`div`,c);d(c,u),t(u,`text-sm text-base-content/60`),d(u,f(`shallowRef profile`));let m=p(`div`,c);d(c,m),t(m,`stats stats-vertical md:stats-horizontal bg-base-200`);let _=p(`div`,m);d(m,_),t(_,`stat`);let v=p(`div`,_);d(_,v),t(v,`stat-title`),d(v,f(`name`));let C=p(`div`,_);d(_,C),t(C,`stat-value text-2xl`);let w=b(`rue:slot:anchor`);d(C,w),e({parent:C,before:w},()=>T(P.value.name),()=>({}));let E=p(`div`,m);d(m,E),t(E,`stat`);let D=p(`div`,E);d(E,D),t(D,`stat-title`),d(D,f(`mood`));let O=p(`div`,E);d(E,O),t(O,`stat-value text-2xl`);let k=b(`rue:slot:anchor`);d(O,k),e({parent:O,before:k},()=>T(P.value.mood),()=>({}));let A=p(`div`,m);d(m,A),t(A,`stat`);let j=p(`div`,A);d(A,j),t(j,`stat-title`),d(j,f(`revisions`));let M=p(`div`,A);d(A,M),t(M,`stat-value text-2xl`);let N=b(`rue:slot:anchor`);d(M,N),e({parent:M,before:N},()=>T(P.value.revisions),()=>({}));let I=p(`div`,a);d(a,I),t(I,`alert`);let B=p(`span`,I);d(I,B);let V=l(B);d(B,V),h(()=>{ie(V,F.value)});let H=p(`div`,a);d(a,H),t(H,`flex flex-wrap gap-3`);let U=p(`button`,H);d(H,U),t(U,`btn btn-outline`);let W=e=>{let t=L;typeof t==`function`&&t(e)};U.addEventListener(`click`,W),S(()=>U.removeEventListener(`click`,W)),d(U,f(`深层修改`));let G=p(`button`,H);d(H,G),t(G,`btn btn-primary`);let K=e=>{let t=R;typeof t==`function`&&t(e)};G.addEventListener(`click`,K),S(()=>G.removeEventListener(`click`,K)),d(G,f(`triggerRef`));let q=p(`button`,H);d(H,q),t(q,`btn`);let J=e=>{let t=z;typeof t==`function`&&t(e)};q.addEventListener(`click`,J),S(()=>q.removeEventListener(`click`,J)),d(q,f(`整体替换`));let Y=p(`div`,a);d(a,Y),t(Y,`rounded-box bg-base-200 p-4`);let X=p(`div`,Y);d(Y,X),t(X,`text-sm font-medium mb-2`),d(X,f(`log`));let Z=p(`div`,Y);d(Y,Z),t(Z,`flex flex-wrap gap-2`);let Q=b(`rue:list:end`);d(Z,Q);let $=[];x(()=>{let e=P.value.log||[];$=re(Z,Q,$,e,(e,t)=>e,(e,t)=>{let n=s(e);return y((e,t,r)=>{let i=()=>te(e=>{let t=p(`span`,e);t.setAttribute(`class`,`badge badge-neutral`);let r=f(``);return d(t,r),ee(r,()=>n.get()),[t,t]});return e==null?i():o(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),S(()=>ne($));let ae=f(``),oe=f(``);return r.insertBefore(ae,r.firstChild),r.appendChild(oe),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>a(e=>{let t=f(``);return[t,t]});return e==null?r():o(e,n,r)},()=>({}));let O=f(``),k=f(``);return u.insertBefore(O,u.firstChild),u.appendChild(k),[u.firstChild,u.lastChild]});return r(D,()=>({children:[a(e=>{let t=O().content.cloneNode(!0).firstChild;return[t,t]}),c(e=>{let t=k().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;h(()=>{let e=`tab ${I.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),S(C(e,n,`click`,()=>()=>{I.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return h(()=>{let e=`tab ${I.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),S(C(e,r,`click`,()=>()=>{I.value=`code`})),[t,t]}),u]}))})())};export{M as default};