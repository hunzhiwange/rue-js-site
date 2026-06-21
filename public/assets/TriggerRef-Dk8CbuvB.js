import{$t as e,Jt as t,Lt as n,Pt as r,Q as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { type FC, ref, shallowRef, triggerRef } from '@rue-js/rue';

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

export default TriggerRefDemo;`,w=()=>{let{profile:w,note:T,activeTab:E,mutateSilently:D,publishMutation:O,replaceProfile:k}=y(`useSetup:0:0`,()=>c(()=>{let e=r({name:`Rue`,mood:`calm`,revisions:0,log:[`ready`]}),i=y(`ref:1:0`,()=>t(`等待一次内部修改`));return{profile:e,note:i,activeTab:y(`ref:1:1`,()=>t(`preview`)),mutateSilently:()=>{e.value.revisions+=1,e.value.mood=e.value.mood===`calm`?`focused`:`calm`,e.value.log=[`draft #${e.value.revisions}`,...e.value.log].slice(0,4),i.value=`对象内部已经变了，但浅层 ref 还没有触发视图更新`},publishMutation:()=>{n(e),i.value=`triggerRef(profile) 手动发布了这次内部变更`},replaceProfile:()=>{e.value={name:`Rue`,mood:`refreshed`,revisions:e.value.revisions+1,log:[`replace #${e.value.revisions+1}`,...e.value.log].slice(0,4)},i.value=`整体替换 profile.value 会自动触发更新`}}}));return u(t=>{let n=g(),r=s(`rue:component:anchor`);return i(n,r),p(h(S,{children:u(()=>{let t=g(),n=f(`h1`,t);i(t,n),o(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,m(`triggerRef 手动触发浅层 ref`));let r=f(`div`,t);i(t,r),d(r,`role`,`tablist`),o(r,`tabs tabs-box`);let c=f(`button`,r);i(r,c),d(c,`role`,`tab`),v(()=>{o(c,`tab ${E.value===`preview`?`tab-active`:``}`)}),a(c,`click`,()=>{E.value=`preview`}),i(c,m(`效果`));let y=f(`button`,r);i(r,y),d(y,`role`,`tab`),v(()=>{o(y,`tab ${E.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{E.value=`code`}),i(y,m(`代码`));let S=f(`div`,t);i(t,S),o(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);i(S,A),v(()=>{let t=E.value===`code`?u(()=>{let t=g(),n=f(`div`,t);i(t,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=f(`div`,n);i(n,r),o(r,`card-body p-0`);let a=s(`rue:component:anchor`);return i(r,a),v(()=>{let t=h(x,{className:`h-full`,lang:`tsx`,code:C});e(()=>p(t,r,a))}),t}):``;e(()=>p(t,S,A))}),i(S,m(` `));let j=s(`rue:slot:anchor`);return i(S,j),v(()=>{let t=E.value===`preview`?u(()=>{let t=g(),n=f(`div`,t);i(t,n),o(n,`card bg-base-100 shadow`);let r=f(`div`,n);i(n,r),o(r,`card-body gap-5`);let c=f(`div`,r);i(r,c),o(c,`flex flex-col gap-2`);let h=f(`div`,c);i(c,h),o(h,`text-sm text-base-content/60`),i(h,m(`shallowRef profile`));let y=f(`div`,c);i(c,y),o(y,`stats stats-vertical md:stats-horizontal bg-base-200`);let x=f(`div`,y);i(y,x),o(x,`stat`);let S=f(`div`,x);i(x,S),o(S,`stat-title`),i(S,m(`name`));let C=f(`div`,x);i(x,C),o(C,`stat-value text-2xl`);let E=s(`rue:slot:anchor`);i(C,E),v(()=>{let t=w.value.name;e(()=>p(t,C,E))});let A=f(`div`,y);i(y,A),o(A,`stat`);let j=f(`div`,A);i(A,j),o(j,`stat-title`),i(j,m(`mood`));let M=f(`div`,A);i(A,M),o(M,`stat-value text-2xl`);let N=s(`rue:slot:anchor`);i(M,N),v(()=>{let t=w.value.mood;e(()=>p(t,M,N))});let P=f(`div`,y);i(y,P),o(P,`stat`);let F=f(`div`,P);i(P,F),o(F,`stat-title`),i(F,m(`revisions`));let I=f(`div`,P);i(P,I),o(I,`stat-value text-2xl`);let L=s(`rue:slot:anchor`);i(I,L),v(()=>{let t=w.value.revisions;e(()=>p(t,I,L))});let R=f(`div`,r);i(r,R),o(R,`alert`);let z=f(`span`,R);i(R,z);let B=l(z);i(z,B),v(()=>{_(B,T.value)});let V=f(`div`,r);i(r,V),o(V,`flex flex-wrap gap-3`);let H=f(`button`,V);i(V,H),o(H,`btn btn-outline`),a(H,`click`,D),i(H,m(`深层修改`));let U=f(`button`,V);i(V,U),o(U,`btn btn-primary`),a(U,`click`,O),i(U,m(`triggerRef`));let W=f(`button`,V);i(V,W),o(W,`btn`),a(W,`click`,k),i(W,m(`整体替换`));let G=f(`div`,r);i(r,G),o(G,`rounded-box bg-base-200 p-4`);let K=f(`div`,G);i(G,K),o(K,`text-sm font-medium mb-2`),i(K,m(`log`));let q=f(`div`,G);i(G,q),o(q,`flex flex-wrap gap-2`);let J=s(`rue:list:start`),Y=s(`rue:list:end`);i(q,J),i(q,Y);let X=new Map;return v(()=>{X=b({items:w.value.log||[],getKey:(e,t)=>e,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,t,n,r,a)=>{p(u(()=>{let t=g(),n=f(`span`,t);i(t,n),o(n,`badge badge-neutral`),v(()=>{d(n,`key`,String(e))});let r=l(n);return i(n,r),v(()=>{_(r,e)}),t}),t,n)}})}),t}):``;e(()=>p(t,S,j))}),t})}),n,r),n})};export{w as default};