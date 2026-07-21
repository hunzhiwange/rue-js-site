import{$t as e,Cn as t,Ct as n,Mt as r,Tt as i,Xt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>t(()=>{let t=a({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),n=y(`ref:1:0`,()=>d(`等待一次内部修改`));return{profile:t,note:n,activeTab:y(`ref:1:1`,()=>d(`preview`)),mutateSilently:()=>{t.value.revisions+=1,t.value.mood=t.value.mood===`calm`?`focused`:`calm`,t.value.log=[`draft #${t.value.revisions}`,...t.value.log].slice(0,4),n.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{e(t),n.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{t.value={name:`Rue`,mood:`refreshed`,revisions:t.value.revisions+1,log:[`replace #${t.value.revisions+1}`,...t.value.log].slice(0,4)},n.value=`整体替换 profile.value 会自动触发更新`}}}));return g(e=>{let t=s(),a=o(`rue:component:anchor`);return p(t,a),_(v(S,{children:g(()=>{let e=s(),t=f(`h1`,e);p(e,t),i(t,`text-5xl font-semibold mb-4 md:mb-4`),p(t,l(`triggerRef 手动触发浅层 ref`));let a=f(`div`,e);p(e,a),n(a,`role`,`tablist`),i(a,`tabs tabs-box`);let d=f(`button`,a);p(a,d),n(d,`role`,`tab`),m(()=>{i(d,`tab ${E.value===`preview`?`tab-active`:``}`)}),u(d,`click`,()=>{E.value=`preview`}),p(d,l(`效果`));let y=f(`button`,a);p(a,y),n(y,`role`,`tab`),m(()=>{i(y,`tab ${E.value===`code`?`tab-active`:``}`)}),u(y,`click`,()=>{E.value=`code`}),p(y,l(`代码`));let S=f(`div`,e);p(e,S),i(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=o(`rue:slot:anchor`);p(S,A),m(()=>{let e=E.value===`code`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),i(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),i(n,`card-body p-0`);let r=o(`rue:component:anchor`);return p(n,r),m(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});h(()=>_(e,n,r))}),e}):``;h(()=>_(e,S,A))}),p(S,l(` `));let j=o(`rue:slot:anchor`);return p(S,j),m(()=>{let e=E.value===`preview`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),i(t,`card bg-base-100 shadow`);let a=f(`div`,t);p(t,a),i(a,`card-body gap-5`);let d=f(`div`,a);p(a,d),i(d,`flex flex-col gap-2`);let v=f(`div`,d);p(d,v),i(v,`text-sm text-base-content/60`),p(v,l(`shallowRef profile`));let y=f(`div`,d);p(d,y),i(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=f(`div`,y);p(y,x),i(x,`stat`);let S=f(`div`,x);p(x,S),i(S,`stat-title`),p(S,l(`name`));let C=f(`div`,x);p(x,C),i(C,`stat-value text-2xl`);let E=o(`rue:slot:anchor`);p(C,E),m(()=>{let e=w.value.name;h(()=>_(e,C,E))});let A=f(`div`,y);p(y,A),i(A,`stat`);let j=f(`div`,A);p(A,j),i(j,`stat-title`),p(j,l(`mood`));let M=f(`div`,A);p(A,M),i(M,`stat-value text-2xl`);let N=o(`rue:slot:anchor`);p(M,N),m(()=>{let e=w.value.mood;h(()=>_(e,M,N))});let P=f(`div`,y);p(y,P),i(P,`stat`);let F=f(`div`,P);p(P,F),i(F,`stat-title`),p(F,l(`revisions`));let I=f(`div`,P);p(P,I),i(I,`stat-value text-2xl`);let L=o(`rue:slot:anchor`);p(I,L),m(()=>{let e=w.value.revisions;h(()=>_(e,I,L))});let R=f(`div`,a);p(a,R),i(R,`alert`);let z=f(`span`,R);p(R,z);let B=c(z);p(z,B),m(()=>{r(B,T.value)});let V=f(`div`,a);p(a,V),i(V,`flex flex-wrap gap-3`);let H=f(`button`,V);p(V,H),i(H,`btn btn-outline`),u(H,`click`,D),p(H,l(`深层修改`));let U=f(`button`,V);p(V,U),i(U,`btn btn-primary`),u(U,`click`,O),p(U,l(`triggerRef`));let W=f(`button`,V);p(V,W),i(W,`btn`),u(W,`click`,k),p(W,l(`整体替换`));let G=f(`div`,a);p(a,G),i(G,`rounded-box bg-base-200 p-4`);let K=f(`div`,G);p(G,K),i(K,`text-sm font-medium mb-2`),p(K,l(`log`));let q=f(`div`,G);p(G,q),i(q,`flex flex-wrap gap-2`);let J=o(`rue:list:start`),Y=o(`rue:list:end`);p(q,J),p(q,Y);let X=new Map;return m(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,t,a,o,l)=>{_(g(()=>{let t=s(),a=f(`span`,t);p(t,a),i(a,`badge badge-neutral`),m(()=>{n(a,`key`,String(e))});let o=c(a);return p(a,o),m(()=>{r(o,e)}),t}),t,a)}})}),e}):``;h(()=>_(e,S,j))}),e})}),t,a),t})};export{w as default};