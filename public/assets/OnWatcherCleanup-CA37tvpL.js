import{$ as e,J as t,Jt as n,Kt as r,Lt as i,Q as a,St as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,l as p,mt as m,ot as h,s as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as b}from"./vapor-helpers-vapor-CJFAWine.js";import{t as x}from"./Code-Ds9lKLk6.js";import{t as S}from"./SidebarPlaygroundExample-KML-rOvA.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

const OnWatcherCleanupDemo: FC = () => {
  const userId = ref(1);
  const status = ref('等待请求');
  const logs = ref<string[]>([]);

  watch(
    () => userId.value,
    id => {
      status.value = \`正在加载用户 #\${id}\`;
      logs.value = [\`start #\${id}\`, ...logs.value];

      const timer = window.setTimeout(() => {
        status.value = \`用户 #\${id} 加载完成\`;
        logs.value = [\`done #\${id}\`, ...logs.value];
      }, 900);

      onWatcherCleanup(() => {
        window.clearTimeout(timer);
        logs.value = [\`cleanup #\${id}\`, ...logs.value];
      });
    },
    { immediate: true },
  );

  return (
    <section>
      <p>{status.value}</p>
      <button onClick={() => (userId.value += 1)}>切换用户</button>
      <ul>{logs.value.map(item => <li>{item}</li>)}</ul>
    </section>
  );
};

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>r(()=>{let e=y(`ref:1:0`,()=>i(1)),t=y(`ref:1:1`,()=>i(`preview`)),r=y(`ref:1:2`,()=>i(`等待请求`)),a=y(`ref:1:3`,()=>i(0)),s=y(`ref:1:4`,()=>i(0)),c=y(`ref:1:5`,()=>i([]));return y(`watch:1:6`,()=>n(()=>e.value,e=>{r.value=`正在加载用户 #${e}`,c.value=[`start #${e}`,...c.value].slice(0,8);let t=window.setTimeout(()=>{s.value+=1,r.value=`用户 #${e} 加载完成`,c.value=[`done #${e}`,...c.value].slice(0,8)},900);o(()=>{window.clearTimeout(t),a.value+=1,c.value=[`cleanup #${e}`,...c.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:t,status:r,cleaned:a,completed:s,logs:c}}));return p(n=>{let r=a(),i=u(`rue:component:anchor`);return c(r,i),g(_(S,{children:p(()=>{let n=a(),r=e(`h1`,n);c(n,r),d(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,f(`onWatcherCleanup 请求清理`));let i=e(`div`,n);c(n,i),h(i,`role`,`tablist`),d(i,`tabs tabs-box`);let o=e(`button`,i);c(i,o),h(o,`role`,`tab`),l(()=>{d(o,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),t(o,`click`,()=>{T.value=`preview`}),c(o,f(`效果`));let y=e(`button`,i);c(i,y),h(y,`role`,`tab`),l(()=>{d(y,String(`tab ${T.value===`code`?`tab-active`:``}`))}),t(y,`click`,()=>{T.value=`code`}),c(y,f(`代码`));let S=e(`div`,n);c(n,S),d(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=u(`rue:slot:anchor`);c(S,A),l(()=>{let t=T.value===`code`?p(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});s(()=>g(e,r,i))}),t}):``;s(()=>g(t,S,A))}),c(S,f(` `));let j=u(`rue:slot:anchor`);return c(S,j),l(()=>{let n=T.value===`preview`?p(()=>{let n=a(),r=e(`div`,n);c(n,r),d(r,`card bg-base-100 shadow`);let i=e(`div`,r);c(r,i),d(i,`card-body gap-4`);let o=e(`div`,i);c(i,o),d(o,`flex flex-wrap items-center justify-between gap-3`);let s=e(`div`,o);c(o,s);let _=e(`p`,s);c(s,_),d(_,`text-sm opacity-70`),c(_,f(`当前用户`));let y=e(`h2`,s);c(s,y),d(y,`text-2xl font-semibold`),c(y,f(`#`));let x=v(y);c(y,x),l(()=>{m(x,w.value)});let S=e(`button`,o);c(o,S),d(S,`btn btn-primary`),t(S,`click`,()=>{w.value+=1}),c(S,f(`快速切换用户`));let C=e(`div`,i);c(i,C),d(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=e(`div`,C);c(C,T),d(T,`stat`);let A=e(`div`,T);c(T,A),d(A,`stat-title`),c(A,f(`状态`));let j=e(`div`,T);c(T,j),d(j,`stat-value text-xl`);let M=v(j);c(j,M),l(()=>{m(M,E.value)});let N=e(`div`,C);c(C,N),d(N,`stat`);let P=e(`div`,N);c(N,P),d(P,`stat-title`),c(P,f(`已清理`));let F=e(`div`,N);c(N,F),d(F,`stat-value text-xl`);let I=v(F);c(F,I),l(()=>{m(I,D.value)});let L=e(`div`,C);c(C,L),d(L,`stat`);let R=e(`div`,L);c(L,R),d(R,`stat-title`),c(R,f(`已完成`));let z=e(`div`,L);c(L,z),d(z,`stat-value text-xl`);let B=v(z);c(z,B),l(()=>{m(B,O.value)});let V=e(`ul`,i);c(i,V),d(V,`menu bg-base-200 rounded-box`);let H=u(`rue:list:start`),U=u(`rue:list:end`);c(V,H),c(V,U);let W=new Map;return l(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(t,n,r,i,o)=>{g(p(()=>{let n=a(),r=e(`li`,n);c(n,r),l(()=>{h(r,`key`,String(`${t}-${o}`))});let i=e(`span`,r);c(r,i);let s=v(i);return c(i,s),l(()=>{m(s,t)}),n}),n,r)}})}),n}):``;s(()=>g(n,S,j))}),n})}),r,i),r})};export{w as default};