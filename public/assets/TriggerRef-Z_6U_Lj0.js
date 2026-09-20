import{Bt as e,Dt as t,F as n,H as r,I as i,Ut as a,Vt as o,Wt as s,Y as c,_n as ee,ct as l,f as u,fn as d,gn as f,h as p,hn as m,in as h,mn as g,p as te,pn as _,qt as ne,sn as v,st as y,u as b,ut as x,vn as re,vt as ie,yn as S,yt as C,z as w,zt as T}from"./rue-runtime-Cv6BZekS.js";import{t as E}from"./Code-BzFVdc3U.js";import{r as D}from"./SidebarPlaygroundExample-rFyhXfC_.js";var O=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">triggerRef 手动触发浅层 ref</h1>`),k=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=S(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,M=(S,M,N)=>{let P=l({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),F=y(`等待一次内部修改`),I=y(`preview`),L=()=>{P.value.revisions+=1,P.value.mood=P.value.mood===`calm`?`focused`:`calm`,P.value.log=[`draft #${P.value.revisions}`,...P.value.log].slice(0,4),F.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},R=()=>{x(P),F.value=`triggerRef(profile) 手动发布了这次内部变更`},z=()=>{P.value={name:`Rue`,mood:`refreshed`,revisions:P.value.revisions+1,log:[`replace #${P.value.revisions+1}`,...P.value.log].slice(0,4)},F.value=`整体替换 profile.value 会自动触发更新`};return c(()=>(()=>{let c=s(c=>{let l=g(),y=A().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],S=x.parentNode,w=b.childNodes[1],D=w.parentNode;l.appendChild(y),a(S,x,()=>{let e=I.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=m(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=m(`div`,t);return d(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,E,()=>({className:`h-full`,lang:`tsx`,code:j})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>C(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>C(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),e({parent:D,before:w},()=>I.value===`preview`?(r,a,c)=>o(r,c,()=>s(r=>{let a=g(),s=m(`div`,a);d(a,s),t(s,`card bg-base-100 shadow`);let c=m(`div`,s);d(s,c),t(c,`card-body gap-5`);let l=m(`div`,c);d(c,l),t(l,`flex flex-col gap-2`);let y=m(`div`,l);d(l,y),t(y,`text-sm text-base-content/60`),d(y,f(`shallowRef profile`));let b=m(`div`,l);d(l,b),t(b,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=m(`div`,b);d(b,x),t(x,`stat`);let S=m(`div`,x);d(x,S),t(S,`stat-title`),d(S,f(`name`));let C=m(`div`,x);d(x,C),t(C,`stat-value text-2xl`);let w=_(`rue:slot:anchor`);d(C,w),e({parent:C,before:w},()=>T(P.value.name),()=>({}));let E=m(`div`,b);d(b,E),t(E,`stat`);let D=m(`div`,E);d(E,D),t(D,`stat-title`),d(D,f(`mood`));let O=m(`div`,E);d(E,O),t(O,`stat-value text-2xl`);let k=_(`rue:slot:anchor`);d(O,k),e({parent:O,before:k},()=>T(P.value.mood),()=>({}));let A=m(`div`,b);d(b,A),t(A,`stat`);let j=m(`div`,A);d(A,j),t(j,`stat-title`),d(j,f(`revisions`));let M=m(`div`,A);d(A,M),t(M,`stat-value text-2xl`);let N=_(`rue:slot:anchor`);d(M,N),e({parent:M,before:N},()=>T(P.value.revisions),()=>({}));let I=m(`div`,c);d(c,I),t(I,`alert`);let B=m(`span`,I);d(I,B);let V=ee(B);d(B,V),h(()=>{re(V,F.value)});let H=m(`div`,c);d(c,H),t(H,`flex flex-wrap gap-3`);let U=m(`button`,H);d(H,U),t(U,`btn btn-outline`);let W=e=>{let t=L;typeof t==`function`&&t(e)};U.addEventListener(`click`,W),v(()=>U.removeEventListener(`click`,W)),d(U,f(`深层修改`));let G=m(`button`,H);d(H,G),t(G,`btn btn-primary`);let K=e=>{let t=R;typeof t==`function`&&t(e)};G.addEventListener(`click`,K),v(()=>G.removeEventListener(`click`,K)),d(G,f(`triggerRef`));let q=m(`button`,H);d(H,q),t(q,`btn`);let J=e=>{let t=z;typeof t==`function`&&t(e)};q.addEventListener(`click`,J),v(()=>q.removeEventListener(`click`,J)),d(q,f(`整体替换`));let Y=m(`div`,c);d(c,Y),t(Y,`rounded-box bg-base-200 p-4`);let X=m(`div`,Y);d(Y,X),t(X,`text-sm font-medium mb-2`),d(X,f(`log`));let Z=m(`div`,Y);d(Y,Z),t(Z,`flex flex-wrap gap-2`);let Q=_(`rue:list:end`);d(Z,Q);let $=[];ne(()=>{let e=P.value.log||[];$=p(Z,Q,$,e,(e,t)=>e,(e,t)=>{let r=ie(e);return te((e,t,a)=>{let s=()=>n(e=>{let t=m(`span`,e);t.setAttribute(`class`,`badge badge-neutral`);let n=f(``);return d(t,n),i(n,()=>r.get()),[t,t]});return e==null?s():o(e,a,s)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),v(()=>u($));let ae=f(``),oe=f(``);return a.insertBefore(ae,a.firstChild),a.appendChild(oe),[a.firstChild,a.lastChild]})):(e,t,n)=>{let r=()=>C(e=>{let t=f(``);return[t,t]});return e==null?r():o(e,n,r)},()=>({}));let O=f(``),k=f(``);return l.insertBefore(O,l.firstChild),l.appendChild(k),[l.firstChild,l.lastChild]});return w(D,()=>({children:[C(e=>{let t=O().content.cloneNode(!0).firstChild;return[t,t]}),s(e=>{let t=k().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;h(()=>{let e=`tab ${I.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),v(b(e,n,`click`,()=>()=>{I.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return h(()=>{let e=`tab ${I.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),v(b(e,r,`click`,()=>()=>{I.value=`code`})),[t,t]}),c]}))})())};export{M as default};