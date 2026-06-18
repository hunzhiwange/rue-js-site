import{$ as e,At as t,Dt as n,Ht as r,J as i,Lt as a,Q as o,X as s,Xt as c,Z as l,at as u,et as d,l as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>h(()=>{let e=n({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),r=y(`ref:1:0`,()=>a(`等待一次内部修改`));return{profile:e,note:r,activeTab:y(`ref:1:1`,()=>a(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),r.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{t(e),r.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},r.value=`整体替换 profile.value 会自动触发更新`}}}));return f(t=>{let n=l(),a=s(`rue:component:anchor`);return i(n,a),g(v(S,{children:f(()=>{let t=l(),n=o(`h1`,t);i(t,n),_(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,e(`triggerRef 手动触发浅层 ref`));let a=o(`div`,t);i(t,a),u(a,`role`,`tablist`),_(a,`tabs tabs-box`);let h=o(`button`,a);i(a,h),u(h,`role`,`tab`),c(()=>{_(h,`tab ${E.value===`preview`?`tab-active`:``}`)}),m(h,`click`,()=>{E.value=`preview`}),i(h,e(`效果`));let y=o(`button`,a);i(a,y),u(y,`role`,`tab`),c(()=>{_(y,`tab ${E.value===`code`?`tab-active`:``}`)}),m(y,`click`,()=>{E.value=`code`}),i(y,e(`代码`));let S=o(`div`,t);i(t,S),_(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);i(S,A),c(()=>{let e=E.value===`code`?f(()=>{let e=l(),t=o(`div`,e);i(e,t),_(t,`card bg-base-100 shadow overflow-auto`);let n=o(`div`,t);i(t,n),_(n,`card-body p-0`);let a=s(`rue:component:anchor`);return i(n,a),c(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});r(()=>g(e,n,a))}),e}):``;r(()=>g(e,S,A))}),i(S,e(` `));let j=s(`rue:slot:anchor`);return i(S,j),c(()=>{let t=E.value===`preview`?f(()=>{let t=l(),n=o(`div`,t);i(t,n),_(n,`card bg-base-100 shadow`);let a=o(`div`,n);i(n,a),_(a,`card-body gap-5`);let h=o(`div`,a);i(a,h),_(h,`flex flex-col gap-2`);let v=o(`div`,h);i(h,v),_(v,`text-sm text-base-content/60`),i(v,e(`shallowRef profile`));let y=o(`div`,h);i(h,y),_(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=o(`div`,y);i(y,x),_(x,`stat`);let S=o(`div`,x);i(x,S),_(S,`stat-title`),i(S,e(`name`));let C=o(`div`,x);i(x,C),_(C,`stat-value text-2xl`);let E=s(`rue:slot:anchor`);i(C,E),c(()=>{let e=w.value.name;r(()=>g(e,C,E))});let A=o(`div`,y);i(y,A),_(A,`stat`);let j=o(`div`,A);i(A,j),_(j,`stat-title`),i(j,e(`mood`));let M=o(`div`,A);i(A,M),_(M,`stat-value text-2xl`);let N=s(`rue:slot:anchor`);i(M,N),c(()=>{let e=w.value.mood;r(()=>g(e,M,N))});let P=o(`div`,y);i(y,P),_(P,`stat`);let F=o(`div`,P);i(P,F),_(F,`stat-title`),i(F,e(`revisions`));let I=o(`div`,P);i(P,I),_(I,`stat-value text-2xl`);let L=s(`rue:slot:anchor`);i(I,L),c(()=>{let e=w.value.revisions;r(()=>g(e,I,L))});let R=o(`div`,a);i(a,R),_(R,`alert`);let z=o(`span`,R);i(R,z);let B=d(z);i(z,B),c(()=>{p(B,T.value)});let V=o(`div`,a);i(a,V),_(V,`flex flex-wrap gap-3`);let H=o(`button`,V);i(V,H),_(H,`btn btn-outline`),m(H,`click`,D),i(H,e(`深层修改`));let U=o(`button`,V);i(V,U),_(U,`btn btn-primary`),m(U,`click`,O),i(U,e(`triggerRef`));let W=o(`button`,V);i(V,W),_(W,`btn`),m(W,`click`,k),i(W,e(`整体替换`));let G=o(`div`,a);i(a,G),_(G,`rounded-box bg-base-200 p-4`);let K=o(`div`,G);i(G,K),_(K,`text-sm font-medium mb-2`),i(K,e(`log`));let q=o(`div`,G);i(G,q),_(q,`flex flex-wrap gap-2`);let J=s(`rue:list:start`),Y=s(`rue:list:end`);i(q,J),i(q,Y);let X=new Map;return c(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,t,n,r,a)=>{g(f(()=>{let t=l(),n=o(`span`,t);i(t,n),_(n,`badge badge-neutral`),c(()=>{u(n,`key`,String(e))});let r=d(n);return i(n,r),c(()=>{p(r,e)}),t}),t,n)}})}),t}):``;r(()=>g(t,S,j))}),t})}),n,a),n})};export{w as default};