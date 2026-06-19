import{$ as e,$t as t,At as n,Bt as r,Gt as i,Nt as a,X as o,Xt as s,Z as c,ct as l,et as u,gt as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>s(()=>{let e=n({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),t=y(`ref:1:0`,()=>r(`等待一次内部修改`));return{profile:e,note:t,activeTab:y(`ref:1:1`,()=>r(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),t.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{a(e),t.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},t.value=`整体替换 profile.value 会自动触发更新`}}}));return f(n=>{let r=u(),a=e(`rue:component:anchor`);return c(r,a),m(g(S,{children:f(()=>{let n=u(),r=_(`h1`,n);c(n,r),v(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,p(`triggerRef 手动触发浅层 ref`));let a=_(`div`,n);c(n,a),l(a,`role`,`tablist`),v(a,`tabs tabs-box`);let s=_(`button`,a);c(a,s),l(s,`role`,`tab`),t(()=>{v(s,`tab ${E.value===`preview`?`tab-active`:``}`)}),o(s,`click`,()=>{E.value=`preview`}),c(s,p(`效果`));let y=_(`button`,a);c(a,y),l(y,`role`,`tab`),t(()=>{v(y,`tab ${E.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{E.value=`code`}),c(y,p(`代码`));let S=_(`div`,n);c(n,S),v(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);c(S,A),t(()=>{let n=E.value===`code`?f(()=>{let n=u(),r=_(`div`,n);c(n,r),v(r,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,r);c(r,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return c(a,o),t(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});i(()=>m(e,a,o))}),n}):``;i(()=>m(n,S,A))}),c(S,p(` `));let j=e(`rue:slot:anchor`);return c(S,j),t(()=>{let n=E.value===`preview`?f(()=>{let n=u(),r=_(`div`,n);c(n,r),v(r,`card bg-base-100 shadow`);let a=_(`div`,r);c(r,a),v(a,`card-body gap-5`);let s=_(`div`,a);c(a,s),v(s,`flex flex-col gap-2`);let g=_(`div`,s);c(s,g),v(g,`text-sm text-base-content/60`),c(g,p(`shallowRef profile`));let y=_(`div`,s);c(s,y),v(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=_(`div`,y);c(y,x),v(x,`stat`);let S=_(`div`,x);c(x,S),v(S,`stat-title`),c(S,p(`name`));let C=_(`div`,x);c(x,C),v(C,`stat-value text-2xl`);let E=e(`rue:slot:anchor`);c(C,E),t(()=>{let e=w.value.name;i(()=>m(e,C,E))});let A=_(`div`,y);c(y,A),v(A,`stat`);let j=_(`div`,A);c(A,j),v(j,`stat-title`),c(j,p(`mood`));let M=_(`div`,A);c(A,M),v(M,`stat-value text-2xl`);let N=e(`rue:slot:anchor`);c(M,N),t(()=>{let e=w.value.mood;i(()=>m(e,M,N))});let P=_(`div`,y);c(y,P),v(P,`stat`);let F=_(`div`,P);c(P,F),v(F,`stat-title`),c(F,p(`revisions`));let I=_(`div`,P);c(P,I),v(I,`stat-value text-2xl`);let L=e(`rue:slot:anchor`);c(I,L),t(()=>{let e=w.value.revisions;i(()=>m(e,I,L))});let R=_(`div`,a);c(a,R),v(R,`alert`);let z=_(`span`,R);c(R,z);let B=h(z);c(z,B),t(()=>{d(B,T.value)});let V=_(`div`,a);c(a,V),v(V,`flex flex-wrap gap-3`);let H=_(`button`,V);c(V,H),v(H,`btn btn-outline`),o(H,`click`,D),c(H,p(`深层修改`));let U=_(`button`,V);c(V,U),v(U,`btn btn-primary`),o(U,`click`,O),c(U,p(`triggerRef`));let W=_(`button`,V);c(V,W),v(W,`btn`),o(W,`click`,k),c(W,p(`整体替换`));let G=_(`div`,a);c(a,G),v(G,`rounded-box bg-base-200 p-4`);let K=_(`div`,G);c(G,K),v(K,`text-sm font-medium mb-2`),c(K,p(`log`));let q=_(`div`,G);c(G,q),v(q,`flex flex-wrap gap-2`);let J=e(`rue:list:start`),Y=e(`rue:list:end`);c(q,J),c(q,Y);let X=new Map;return t(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,n,r,i,a)=>{m(f(()=>{let n=u(),r=_(`span`,n);c(n,r),v(r,`badge badge-neutral`),t(()=>{l(r,`key`,String(e))});let i=h(r);return c(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),n}):``;i(()=>m(n,S,j))}),n})}),r,a),r})};export{w as default};