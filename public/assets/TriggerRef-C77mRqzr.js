import{$ as e,Ht as t,J as n,Ot as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,jt as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./Code-5DOEyGxf.js";import{r as S}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>h(()=>{let e=r({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),t=y(`ref:1:0`,()=>a(`等待一次内部修改`));return{profile:e,note:t,activeTab:y(`ref:1:1`,()=>a(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),t.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{d(e),t.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},t.value=`整体替换 profile.value 会自动触发更新`}}}));return f(r=>{let a=i(),d=c(`rue:component:anchor`);return s(a,d),g(_(S,{children:f(()=>{let r=i(),a=e(`h1`,r);s(r,a),l(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,u(`triggerRef 手动触发浅层 ref`));let d=e(`div`,r);s(r,d),m(d,`role`,`tablist`),l(d,`tabs tabs-box`);let h=e(`button`,d);s(d,h),m(h,`role`,`tab`),o(()=>{l(h,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),n(h,`click`,()=>{E.value=`preview`}),s(h,u(`效果`));let y=e(`button`,d);s(d,y),m(y,`role`,`tab`),o(()=>{l(y,String(`tab ${E.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{E.value=`code`}),s(y,u(`代码`));let S=e(`div`,r);s(r,S),l(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=c(`rue:slot:anchor`);s(S,A),o(()=>{let n=E.value===`code`?f(()=>{let n=i(),r=e(`div`,n);s(n,r),l(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});t(()=>g(e,a,u))}),n}):``;t(()=>g(n,S,A))}),s(S,u(` `));let j=c(`rue:slot:anchor`);return s(S,j),o(()=>{let r=E.value===`preview`?f(()=>{let r=i(),a=e(`div`,r);s(r,a),l(a,`card bg-base-100 shadow`);let d=e(`div`,a);s(a,d),l(d,`card-body gap-5`);let h=e(`div`,d);s(d,h),l(h,`flex flex-col gap-2`);let _=e(`div`,h);s(h,_),l(_,`text-sm text-base-content/60`),s(_,u(`shallowRef profile`));let y=e(`div`,h);s(h,y),l(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=e(`div`,y);s(y,x),l(x,`stat`);let S=e(`div`,x);s(x,S),l(S,`stat-title`),s(S,u(`name`));let C=e(`div`,x);s(x,C),l(C,`stat-value text-2xl`);let E=c(`rue:slot:anchor`);s(C,E),o(()=>{let e=w.value.name;t(()=>g(e,C,E))});let A=e(`div`,y);s(y,A),l(A,`stat`);let j=e(`div`,A);s(A,j),l(j,`stat-title`),s(j,u(`mood`));let M=e(`div`,A);s(A,M),l(M,`stat-value text-2xl`);let N=c(`rue:slot:anchor`);s(M,N),o(()=>{let e=w.value.mood;t(()=>g(e,M,N))});let P=e(`div`,y);s(y,P),l(P,`stat`);let F=e(`div`,P);s(P,F),l(F,`stat-title`),s(F,u(`revisions`));let I=e(`div`,P);s(P,I),l(I,`stat-value text-2xl`);let L=c(`rue:slot:anchor`);s(I,L),o(()=>{let e=w.value.revisions;t(()=>g(e,I,L))});let R=e(`div`,d);s(d,R),l(R,`alert`);let z=e(`span`,R);s(R,z);let B=v(z);s(z,B),o(()=>{p(B,T.value)});let V=e(`div`,d);s(d,V),l(V,`flex flex-wrap gap-3`);let H=e(`button`,V);s(V,H),l(H,`btn btn-outline`),n(H,`click`,D),s(H,u(`深层修改`));let U=e(`button`,V);s(V,U),l(U,`btn btn-primary`),n(U,`click`,O),s(U,u(`triggerRef`));let W=e(`button`,V);s(V,W),l(W,`btn`),n(W,`click`,k),s(W,u(`整体替换`));let G=e(`div`,d);s(d,G),l(G,`rounded-box bg-base-200 p-4`);let K=e(`div`,G);s(G,K),l(K,`text-sm font-medium mb-2`),s(K,u(`log`));let q=e(`div`,G);s(G,q),l(q,`flex flex-wrap gap-2`);let J=c(`rue:list:start`),Y=c(`rue:list:end`);s(q,J),s(q,Y);let X=new Map;return o(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(t,n,r,a,c)=>{g(f(()=>{let n=i(),r=e(`span`,n);s(n,r),l(r,`badge badge-neutral`),o(()=>{m(r,`key`,String(t))});let a=v(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),r}):``;t(()=>g(r,S,j))}),r})}),a,d),a})};export{w as default};