import{$ as e,Mt as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,et as c,ht as l,kt as u,l as d,lt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>s(()=>{let e=u({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),n=y(`ref:1:0`,()=>v(`等待一次内部修改`));return{profile:e,note:n,activeTab:y(`ref:1:1`,()=>v(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),n.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{t(e),n.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},n.value=`整体替换 profile.value 会自动触发更新`}}}));return d(t=>{let s=e(),u=n(`rue:component:anchor`);return a(s,u),m(g(S,{children:d(()=>{let t=e(),s=c(`h1`,t);a(t,s),f(s,`text-5xl font-semibold mb-4 md:mb-4`),a(s,_(`triggerRef 手动触发浅层 ref`));let u=c(`div`,t);a(t,u),h(u,`role`,`tablist`),f(u,`tabs tabs-box`);let v=c(`button`,u);a(u,v),h(v,`role`,`tab`),r(()=>{f(v,`tab ${E.value===`preview`?`tab-active`:``}`)}),o(v,`click`,()=>{E.value=`preview`}),a(v,_(`效果`));let y=c(`button`,u);a(u,y),h(y,`role`,`tab`),r(()=>{f(y,`tab ${E.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{E.value=`code`}),a(y,_(`代码`));let S=c(`div`,t);a(t,S),f(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=n(`rue:slot:anchor`);a(S,A),r(()=>{let t=E.value===`code`?d(()=>{let t=e(),o=c(`div`,t);a(t,o),f(o,`card bg-base-100 shadow overflow-auto`);let s=c(`div`,o);a(o,s),f(s,`card-body p-0`);let l=n(`rue:component:anchor`);return a(s,l),r(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});i(()=>m(e,s,l))}),t}):``;i(()=>m(t,S,A))}),a(S,_(` `));let j=n(`rue:slot:anchor`);return a(S,j),r(()=>{let t=E.value===`preview`?d(()=>{let t=e(),s=c(`div`,t);a(t,s),f(s,`card bg-base-100 shadow`);let u=c(`div`,s);a(s,u),f(u,`card-body gap-5`);let g=c(`div`,u);a(u,g),f(g,`flex flex-col gap-2`);let v=c(`div`,g);a(g,v),f(v,`text-sm text-base-content/60`),a(v,_(`shallowRef profile`));let y=c(`div`,g);a(g,y),f(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=c(`div`,y);a(y,x),f(x,`stat`);let S=c(`div`,x);a(x,S),f(S,`stat-title`),a(S,_(`name`));let C=c(`div`,x);a(x,C),f(C,`stat-value text-2xl`);let E=n(`rue:slot:anchor`);a(C,E),r(()=>{let e=w.value.name;i(()=>m(e,C,E))});let A=c(`div`,y);a(y,A),f(A,`stat`);let j=c(`div`,A);a(A,j),f(j,`stat-title`),a(j,_(`mood`));let M=c(`div`,A);a(A,M),f(M,`stat-value text-2xl`);let N=n(`rue:slot:anchor`);a(M,N),r(()=>{let e=w.value.mood;i(()=>m(e,M,N))});let P=c(`div`,y);a(y,P),f(P,`stat`);let F=c(`div`,P);a(P,F),f(F,`stat-title`),a(F,_(`revisions`));let I=c(`div`,P);a(P,I),f(I,`stat-value text-2xl`);let L=n(`rue:slot:anchor`);a(I,L),r(()=>{let e=w.value.revisions;i(()=>m(e,I,L))});let R=c(`div`,u);a(u,R),f(R,`alert`);let z=c(`span`,R);a(R,z);let B=p(z);a(z,B),r(()=>{l(B,T.value)});let V=c(`div`,u);a(u,V),f(V,`flex flex-wrap gap-3`);let H=c(`button`,V);a(V,H),f(H,`btn btn-outline`),o(H,`click`,D),a(H,_(`深层修改`));let U=c(`button`,V);a(V,U),f(U,`btn btn-primary`),o(U,`click`,O),a(U,_(`triggerRef`));let W=c(`button`,V);a(V,W),f(W,`btn`),o(W,`click`,k),a(W,_(`整体替换`));let G=c(`div`,u);a(u,G),f(G,`rounded-box bg-base-200 p-4`);let K=c(`div`,G);a(G,K),f(K,`text-sm font-medium mb-2`),a(K,_(`log`));let q=c(`div`,G);a(G,q),f(q,`flex flex-wrap gap-2`);let J=n(`rue:list:start`),Y=n(`rue:list:end`);a(q,J),a(q,Y);let X=new Map;return r(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(t,n,i,o,s)=>{m(d(()=>{let n=e(),i=c(`span`,n);a(n,i),f(i,`badge badge-neutral`),r(()=>{h(i,`key`,String(t))});let o=p(i);return a(i,o),r(()=>{l(o,t)}),n}),n,i)}})}),t}):``;i(()=>m(t,S,j))}),t})}),s,u),s})};export{w as default};