import{$ as e,Et as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,kt as p,l as m,mt as h,ot as g,t as _,tt as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{t as x}from"./Code-B_4lzH85.js";import{t as S}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>r(()=>{let e=t({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),n=y(`ref:1:0`,()=>i(`等待一次内部修改`));return{profile:e,note:n,activeTab:y(`ref:1:1`,()=>i(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),n.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{p(e),n.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},n.value=`整体替换 profile.value 会自动触发更新`}}}));return d(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),m(_(S,{children:d(()=>{let t=a(),r=e(`h1`,t);s(t,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,f(`triggerRef 手动触发浅层 ref`));let i=e(`div`,t);s(t,i),g(i,`role`,`tablist`),u(i,`tabs tabs-box`);let p=e(`button`,i);s(i,p),g(p,`role`,`tab`),c(()=>{u(p,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),n(p,`click`,()=>{E.value=`preview`}),s(p,f(`效果`));let y=e(`button`,i);s(i,y),g(y,`role`,`tab`),c(()=>{u(y,String(`tab ${E.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{E.value=`code`}),s(y,f(`代码`));let S=e(`div`,t);s(t,S),u(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=l(`rue:slot:anchor`);s(S,A),c(()=>{let t=E.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});o(()=>m(e,r,i))}),t}):``;o(()=>m(t,S,A))}),s(S,f(` `));let j=l(`rue:slot:anchor`);return s(S,j),c(()=>{let t=E.value===`preview`?d(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-5`);let p=e(`div`,i);s(i,p),u(p,`flex flex-col gap-2`);let _=e(`div`,p);s(p,_),u(_,`text-sm text-base-content/60`),s(_,f(`shallowRef profile`));let y=e(`div`,p);s(p,y),u(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=e(`div`,y);s(y,x),u(x,`stat`);let S=e(`div`,x);s(x,S),u(S,`stat-title`),s(S,f(`name`));let C=e(`div`,x);s(x,C),u(C,`stat-value text-2xl`);let E=l(`rue:slot:anchor`);s(C,E),c(()=>{let e=w.value.name;o(()=>m(e,C,E))});let A=e(`div`,y);s(y,A),u(A,`stat`);let j=e(`div`,A);s(A,j),u(j,`stat-title`),s(j,f(`mood`));let M=e(`div`,A);s(A,M),u(M,`stat-value text-2xl`);let N=l(`rue:slot:anchor`);s(M,N),c(()=>{let e=w.value.mood;o(()=>m(e,M,N))});let P=e(`div`,y);s(y,P),u(P,`stat`);let F=e(`div`,P);s(P,F),u(F,`stat-title`),s(F,f(`revisions`));let I=e(`div`,P);s(P,I),u(I,`stat-value text-2xl`);let L=l(`rue:slot:anchor`);s(I,L),c(()=>{let e=w.value.revisions;o(()=>m(e,I,L))});let R=e(`div`,i);s(i,R),u(R,`alert`);let z=e(`span`,R);s(R,z);let B=v(z);s(z,B),c(()=>{h(B,T.value)});let V=e(`div`,i);s(i,V),u(V,`flex flex-wrap gap-3`);let H=e(`button`,V);s(V,H),u(H,`btn btn-outline`),n(H,`click`,D),s(H,f(`深层修改`));let U=e(`button`,V);s(V,U),u(U,`btn btn-primary`),n(U,`click`,O),s(U,f(`triggerRef`));let W=e(`button`,V);s(V,W),u(W,`btn`),n(W,`click`,k),s(W,f(`整体替换`));let G=e(`div`,i);s(i,G),u(G,`rounded-box bg-base-200 p-4`);let K=e(`div`,G);s(G,K),u(K,`text-sm font-medium mb-2`),s(K,f(`log`));let q=e(`div`,G);s(G,q),u(q,`flex flex-wrap gap-2`);let J=l(`rue:list:start`),Y=l(`rue:list:end`);s(q,J),s(q,Y);let X=new Map;return c(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(t,n,r,i,o)=>{m(d(()=>{let n=a(),r=e(`span`,n);s(n,r),u(r,`badge badge-neutral`),c(()=>{g(r,`key`,String(t))});let i=v(r);return s(r,i),c(()=>{h(i,t)}),n}),n,r)}})}),t}):``;o(()=>m(t,S,j))}),t})}),r,i),r})};export{w as default};