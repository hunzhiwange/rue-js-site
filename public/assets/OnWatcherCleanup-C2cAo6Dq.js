import{$ as e,Ct as t,Ht as n,J as r,Lt as i,Q as a,X as o,Xt as s,Yt as c,Z as l,at as u,et as d,l as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>h(()=>{let e=y(`ref:1:0`,()=>i(1)),n=y(`ref:1:1`,()=>i(`preview`)),r=y(`ref:1:2`,()=>i(`等待请求`)),a=y(`ref:1:3`,()=>i(0)),o=y(`ref:1:4`,()=>i(0)),s=y(`ref:1:5`,()=>i([]));return y(`watch:1:6`,()=>c(()=>e.value,e=>{r.value=`正在加载用户 #${e}`,s.value=[`start #${e}`,...s.value].slice(0,8);let n=window.setTimeout(()=>{o.value+=1,r.value=`用户 #${e} 加载完成`,s.value=[`done #${e}`,...s.value].slice(0,8)},900);t(()=>{window.clearTimeout(n),a.value+=1,s.value=[`cleanup #${e}`,...s.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:n,status:r,cleaned:a,completed:o,logs:s}}));return f(t=>{let i=l(),c=o(`rue:component:anchor`);return r(i,c),g(v(S,{children:f(()=>{let t=l(),i=a(`h1`,t);r(t,i),_(i,`text-5xl font-semibold mb-4 md:mb-4`),r(i,e(`onWatcherCleanup 请求清理`));let c=a(`div`,t);r(t,c),u(c,`role`,`tablist`),_(c,`tabs tabs-box`);let h=a(`button`,c);r(c,h),u(h,`role`,`tab`),s(()=>{_(h,`tab ${T.value===`preview`?`tab-active`:``}`)}),m(h,`click`,()=>{T.value=`preview`}),r(h,e(`效果`));let y=a(`button`,c);r(c,y),u(y,`role`,`tab`),s(()=>{_(y,`tab ${T.value===`code`?`tab-active`:``}`)}),m(y,`click`,()=>{T.value=`code`}),r(y,e(`代码`));let S=a(`div`,t);r(t,S),_(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=o(`rue:slot:anchor`);r(S,A),s(()=>{let e=T.value===`code`?f(()=>{let e=l(),t=a(`div`,e);r(e,t),_(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),_(i,`card-body p-0`);let c=o(`rue:component:anchor`);return r(i,c),s(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});n(()=>g(e,i,c))}),e}):``;n(()=>g(e,S,A))}),r(S,e(` `));let j=o(`rue:slot:anchor`);return r(S,j),s(()=>{let t=T.value===`preview`?f(()=>{let t=l(),n=a(`div`,t);r(t,n),_(n,`card bg-base-100 shadow`);let i=a(`div`,n);r(n,i),_(i,`card-body gap-4`);let c=a(`div`,i);r(i,c),_(c,`flex flex-wrap items-center justify-between gap-3`);let h=a(`div`,c);r(c,h);let v=a(`p`,h);r(h,v),_(v,`text-sm opacity-70`),r(v,e(`当前用户`));let y=a(`h2`,h);r(h,y),_(y,`text-2xl font-semibold`),r(y,e(`#`));let x=d(y);r(y,x),s(()=>{p(x,w.value)});let S=a(`button`,c);r(c,S),_(S,`btn btn-primary`),m(S,`click`,()=>{w.value+=1}),r(S,e(`快速切换用户`));let C=a(`div`,i);r(i,C),_(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=a(`div`,C);r(C,T),_(T,`stat`);let A=a(`div`,T);r(T,A),_(A,`stat-title`),r(A,e(`状态`));let j=a(`div`,T);r(T,j),_(j,`stat-value text-xl`);let M=d(j);r(j,M),s(()=>{p(M,E.value)});let N=a(`div`,C);r(C,N),_(N,`stat`);let P=a(`div`,N);r(N,P),_(P,`stat-title`),r(P,e(`已清理`));let F=a(`div`,N);r(N,F),_(F,`stat-value text-xl`);let I=d(F);r(F,I),s(()=>{p(I,D.value)});let L=a(`div`,C);r(C,L),_(L,`stat`);let R=a(`div`,L);r(L,R),_(R,`stat-title`),r(R,e(`已完成`));let z=a(`div`,L);r(L,z),_(z,`stat-value text-xl`);let B=d(z);r(z,B),s(()=>{p(B,O.value)});let V=a(`ul`,i);r(i,V),_(V,`menu bg-base-200 rounded-box`);let H=o(`rue:list:start`),U=o(`rue:list:end`);r(V,H),r(V,U);let W=new Map;return s(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(e,t,n,i,o)=>{g(f(()=>{let t=l(),n=a(`li`,t);r(t,n),s(()=>{u(n,`key`,String(`${e}-${o}`))});let i=a(`span`,n);r(n,i);let c=d(i);return r(i,c),s(()=>{p(c,e)}),t}),t,n)}})}),t}):``;n(()=>g(t,S,j))}),t})}),i,c),i})};export{w as default};