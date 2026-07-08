import{Bt as e,Mt as t,Q as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{r as S}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>p(()=>{let n=y(`ref:1:0`,()=>i(1)),r=y(`ref:1:1`,()=>i(`preview`)),a=y(`ref:1:2`,()=>i(`等待请求`)),o=y(`ref:1:3`,()=>i(0)),s=y(`ref:1:4`,()=>i(0)),c=y(`ref:1:5`,()=>i([]));return y(`watch:1:6`,()=>e(()=>n.value,e=>{a.value=`正在加载用户 #${e}`,c.value=[`start #${e}`,...c.value].slice(0,8);let n=window.setTimeout(()=>{s.value+=1,a.value=`用户 #${e} 加载完成`,c.value=[`done #${e}`,...c.value].slice(0,8)},900);t(()=>{window.clearTimeout(n),o.value+=1,c.value=[`cleanup #${e}`,...c.value].slice(0,8)})},{immediate:!0})),{userId:n,activeTab:r,status:a,cleaned:o,completed:s,logs:c}}));return u(e=>{let t=d(),i=v(`rue:component:anchor`);return n(t,i),f(g(S,{children:u(()=>{let e=d(),t=h(`h1`,e);n(e,t),m(t,`text-5xl font-semibold mb-4 md:mb-4`),n(t,l(`onWatcherCleanup 请求清理`));let i=h(`div`,e);n(e,i),c(i,`role`,`tablist`),m(i,`tabs tabs-box`);let p=h(`button`,i);n(i,p),c(p,`role`,`tab`),r(()=>{m(p,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(p,`click`,()=>{T.value=`preview`}),n(p,l(`效果`));let y=h(`button`,i);n(i,y),c(y,`role`,`tab`),r(()=>{m(y,`tab ${T.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{T.value=`code`}),n(y,l(`代码`));let S=h(`div`,e);n(e,S),m(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=v(`rue:slot:anchor`);n(S,A),r(()=>{let e=T.value===`code`?u(()=>{let e=d(),t=h(`div`,e);n(e,t),m(t,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,t);n(t,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return n(i,a),r(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});_(()=>f(e,i,a))}),e}):``;_(()=>f(e,S,A))}),n(S,l(` `));let j=v(`rue:slot:anchor`);return n(S,j),r(()=>{let e=T.value===`preview`?u(()=>{let e=d(),t=h(`div`,e);n(e,t),m(t,`card bg-base-100 shadow`);let i=h(`div`,t);n(t,i),m(i,`card-body gap-4`);let p=h(`div`,i);n(i,p),m(p,`flex flex-wrap items-center justify-between gap-3`);let g=h(`div`,p);n(p,g);let _=h(`p`,g);n(g,_),m(_,`text-sm opacity-70`),n(_,l(`当前用户`));let y=h(`h2`,g);n(g,y),m(y,`text-2xl font-semibold`),n(y,l(`#`));let x=o(y);n(y,x),r(()=>{s(x,w.value)});let S=h(`button`,p);n(p,S),m(S,`btn btn-primary`),a(S,`click`,()=>{w.value+=1}),n(S,l(`快速切换用户`));let C=h(`div`,i);n(i,C),m(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=h(`div`,C);n(C,T),m(T,`stat`);let A=h(`div`,T);n(T,A),m(A,`stat-title`),n(A,l(`状态`));let j=h(`div`,T);n(T,j),m(j,`stat-value text-xl`);let M=o(j);n(j,M),r(()=>{s(M,E.value)});let N=h(`div`,C);n(C,N),m(N,`stat`);let P=h(`div`,N);n(N,P),m(P,`stat-title`),n(P,l(`已清理`));let F=h(`div`,N);n(N,F),m(F,`stat-value text-xl`);let I=o(F);n(F,I),r(()=>{s(I,D.value)});let L=h(`div`,C);n(C,L),m(L,`stat`);let R=h(`div`,L);n(L,R),m(R,`stat-title`),n(R,l(`已完成`));let z=h(`div`,L);n(L,z),m(z,`stat-value text-xl`);let B=o(z);n(z,B),r(()=>{s(B,O.value)});let V=h(`ul`,i);n(i,V),m(V,`menu bg-base-200 rounded-box`);let H=v(`rue:list:start`),U=v(`rue:list:end`);n(V,H),n(V,U);let W=new Map;return r(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(e,t,i,a,l)=>{f(u(()=>{let t=d(),i=h(`li`,t);n(t,i),r(()=>{c(i,`key`,String(`${e}-${l}`))});let a=h(`span`,i);n(i,a);let u=o(a);return n(a,u),r(()=>{s(u,e)}),t}),t,i)}})}),e}):``;_(()=>f(e,S,j))}),e})}),t,i),t})};export{w as default};