import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _,wt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./Code-5DOEyGxf.js";import{r as S}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>m(()=>{let e=y(`ref:1:0`,()=>i(1)),t=y(`ref:1:1`,()=>i(`preview`)),n=y(`ref:1:2`,()=>i(`等待请求`)),r=y(`ref:1:3`,()=>i(0)),a=y(`ref:1:4`,()=>i(0)),o=y(`ref:1:5`,()=>i([]));return y(`watch:1:6`,()=>s(()=>e.value,e=>{n.value=`正在加载用户 #${e}`,o.value=[`start #${e}`,...o.value].slice(0,8);let t=window.setTimeout(()=>{a.value+=1,n.value=`用户 #${e} 加载完成`,o.value=[`done #${e}`,...o.value].slice(0,8)},900);v(()=>{window.clearTimeout(t),r.value+=1,o.value=[`cleanup #${e}`,...o.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:t,status:n,cleaned:r,completed:a,logs:o}}));return d(i=>{let s=r(),m=c(`rue:component:anchor`);return o(s,m),h(g(S,{children:d(()=>{let i=r(),s=e(`h1`,i);o(i,s),l(s,`text-5xl font-semibold mb-4 md:mb-4`),o(s,u(`onWatcherCleanup 请求清理`));let m=e(`div`,i);o(i,m),p(m,`role`,`tablist`),l(m,`tabs tabs-box`);let v=e(`button`,m);o(m,v),p(v,`role`,`tab`),a(()=>{l(v,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{T.value=`preview`}),o(v,u(`效果`));let y=e(`button`,m);o(m,y),p(y,`role`,`tab`),a(()=>{l(y,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(y,`click`,()=>{T.value=`code`}),o(y,u(`代码`));let S=e(`div`,i);o(i,S),l(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=c(`rue:slot:anchor`);o(S,A),a(()=>{let n=T.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),l(i,`card bg-base-100 shadow overflow-auto`);let s=e(`div`,i);o(i,s),l(s,`card-body p-0`);let u=c(`rue:component:anchor`);return o(s,u),a(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});t(()=>h(e,s,u))}),n}):``;t(()=>h(n,S,A))}),o(S,u(` `));let j=c(`rue:slot:anchor`);return o(S,j),a(()=>{let i=T.value===`preview`?d(()=>{let t=r(),i=e(`div`,t);o(t,i),l(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),l(s,`card-body gap-4`);let m=e(`div`,s);o(s,m),l(m,`flex flex-wrap items-center justify-between gap-3`);let g=e(`div`,m);o(m,g);let v=e(`p`,g);o(g,v),l(v,`text-sm opacity-70`),o(v,u(`当前用户`));let y=e(`h2`,g);o(g,y),l(y,`text-2xl font-semibold`),o(y,u(`#`));let x=_(y);o(y,x),a(()=>{f(x,w.value)});let S=e(`button`,m);o(m,S),l(S,`btn btn-primary`),n(S,`click`,()=>{w.value+=1}),o(S,u(`快速切换用户`));let C=e(`div`,s);o(s,C),l(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=e(`div`,C);o(C,T),l(T,`stat`);let A=e(`div`,T);o(T,A),l(A,`stat-title`),o(A,u(`状态`));let j=e(`div`,T);o(T,j),l(j,`stat-value text-xl`);let M=_(j);o(j,M),a(()=>{f(M,E.value)});let N=e(`div`,C);o(C,N),l(N,`stat`);let P=e(`div`,N);o(N,P),l(P,`stat-title`),o(P,u(`已清理`));let F=e(`div`,N);o(N,F),l(F,`stat-value text-xl`);let I=_(F);o(F,I),a(()=>{f(I,D.value)});let L=e(`div`,C);o(C,L),l(L,`stat`);let R=e(`div`,L);o(L,R),l(R,`stat-title`),o(R,u(`已完成`));let z=e(`div`,L);o(L,z),l(z,`stat-value text-xl`);let B=_(z);o(z,B),a(()=>{f(B,O.value)});let V=e(`ul`,s);o(s,V),l(V,`menu bg-base-200 rounded-box`);let H=c(`rue:list:start`),U=c(`rue:list:end`);o(V,H),o(V,U);let W=new Map;return a(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(t,n,i,s,c)=>{h(d(()=>{let n=r(),i=e(`li`,n);o(n,i),a(()=>{p(i,`key`,String(`${t}-${c}`))});let s=e(`span`,i);o(i,s);let l=_(s);return o(s,l),a(()=>{f(l,t)}),n}),n,i)}})}),t}):``;t(()=>h(i,S,j))}),i})}),s,m),s})};export{w as default};