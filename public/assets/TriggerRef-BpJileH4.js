import{It as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,zt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{r as S}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>f(()=>{let t=e({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),n=y(`ref:1:0`,()=>r(`等待一次内部修改`));return{profile:t,note:n,activeTab:y(`ref:1:1`,()=>r(`preview`)),mutateSilently:()=>{t.value.revisions+=1,t.value.mood=t.value.mood===`calm`?`focused`:`calm`,t.value.log=[`draft #${t.value.revisions}`,...t.value.log].slice(0,4),n.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{v(t),n.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{t.value={name:`Rue`,mood:`refreshed`,revisions:t.value.revisions+1,log:[`replace #${t.value.revisions+1}`,...t.value.log].slice(0,4)},n.value=`整体替换 profile.value 会自动触发更新`}}}));return l(e=>{let r=u(),f=_(`rue:component:anchor`);return t(r,f),d(h(S,{children:l(()=>{let e=u(),r=m(`h1`,e);t(e,r),p(r,`text-5xl font-semibold mb-4 md:mb-4`),t(r,c(`triggerRef 手动触发浅层 ref`));let f=m(`div`,e);t(e,f),s(f,`role`,`tablist`),p(f,`tabs tabs-box`);let v=m(`button`,f);t(f,v),s(v,`role`,`tab`),n(()=>{p(v,`tab ${E.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{E.value=`preview`}),t(v,c(`效果`));let y=m(`button`,f);t(f,y),s(y,`role`,`tab`),n(()=>{p(y,`tab ${E.value===`code`?`tab-active`:``}`)}),i(y,`click`,()=>{E.value=`code`}),t(y,c(`代码`));let S=m(`div`,e);t(e,S),p(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=_(`rue:slot:anchor`);t(S,A),n(()=>{let e=E.value===`code`?l(()=>{let e=u(),r=m(`div`,e);t(e,r),p(r,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,r);t(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return t(i,a),n(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:C});g(()=>d(e,i,a))}),e}):``;g(()=>d(e,S,A))}),t(S,c(` `));let j=_(`rue:slot:anchor`);return t(S,j),n(()=>{let e=E.value===`preview`?l(()=>{let e=u(),r=m(`div`,e);t(e,r),p(r,`card bg-base-100 shadow`);let f=m(`div`,r);t(r,f),p(f,`card-body gap-5`);let h=m(`div`,f);t(f,h),p(h,`flex flex-col gap-2`);let v=m(`div`,h);t(h,v),p(v,`text-sm text-base-content/60`),t(v,c(`shallowRef profile`));let y=m(`div`,h);t(h,y),p(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=m(`div`,y);t(y,x),p(x,`stat`);let S=m(`div`,x);t(x,S),p(S,`stat-title`),t(S,c(`name`));let C=m(`div`,x);t(x,C),p(C,`stat-value text-2xl`);let E=_(`rue:slot:anchor`);t(C,E),n(()=>{let e=w.value.name;g(()=>d(e,C,E))});let A=m(`div`,y);t(y,A),p(A,`stat`);let j=m(`div`,A);t(A,j),p(j,`stat-title`),t(j,c(`mood`));let M=m(`div`,A);t(A,M),p(M,`stat-value text-2xl`);let N=_(`rue:slot:anchor`);t(M,N),n(()=>{let e=w.value.mood;g(()=>d(e,M,N))});let P=m(`div`,y);t(y,P),p(P,`stat`);let F=m(`div`,P);t(P,F),p(F,`stat-title`),t(F,c(`revisions`));let I=m(`div`,P);t(P,I),p(I,`stat-value text-2xl`);let L=_(`rue:slot:anchor`);t(I,L),n(()=>{let e=w.value.revisions;g(()=>d(e,I,L))});let R=m(`div`,f);t(f,R),p(R,`alert`);let z=m(`span`,R);t(R,z);let B=a(z);t(z,B),n(()=>{o(B,T.value)});let V=m(`div`,f);t(f,V),p(V,`flex flex-wrap gap-3`);let H=m(`button`,V);t(V,H),p(H,`btn btn-outline`),i(H,`click`,D),t(H,c(`深层修改`));let U=m(`button`,V);t(V,U),p(U,`btn btn-primary`),i(U,`click`,O),t(U,c(`triggerRef`));let W=m(`button`,V);t(V,W),p(W,`btn`),i(W,`click`,k),t(W,c(`整体替换`));let G=m(`div`,f);t(f,G),p(G,`rounded-box bg-base-200 p-4`);let K=m(`div`,G);t(G,K),p(K,`text-sm font-medium mb-2`),t(K,c(`log`));let q=m(`div`,G);t(G,q),p(q,`flex flex-wrap gap-2`);let J=_(`rue:list:start`),Y=_(`rue:list:end`);t(q,J),t(q,Y);let X=new Map;return n(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,r,i,c,f)=>{d(l(()=>{let r=u(),i=m(`span`,r);t(r,i),p(i,`badge badge-neutral`),n(()=>{s(i,`key`,String(e))});let c=a(i);return t(i,c),n(()=>{o(c,e)}),r}),r,i)}})}),e}):``;g(()=>d(e,S,j))}),e})}),r,f),r})};export{w as default};