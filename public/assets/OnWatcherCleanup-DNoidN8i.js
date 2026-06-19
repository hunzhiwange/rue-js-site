import{$ as e,Q as t,Qt as n,Tt as r,Wt as i,X as a,Y as o,Yt as s,Zt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`ref:1:0`,()=>v(1)),t=y(`ref:1:1`,()=>v(`preview`)),n=y(`ref:1:2`,()=>v(`等待请求`)),i=y(`ref:1:3`,()=>v(0)),a=y(`ref:1:4`,()=>v(0)),o=y(`ref:1:5`,()=>v([]));return y(`watch:1:6`,()=>c(()=>e.value,e=>{n.value=`正在加载用户 #${e}`,o.value=[`start #${e}`,...o.value].slice(0,8);let t=window.setTimeout(()=>{a.value+=1,n.value=`用户 #${e} 加载完成`,o.value=[`done #${e}`,...o.value].slice(0,8)},900);r(()=>{window.clearTimeout(t),i.value+=1,o.value=[`cleanup #${e}`,...o.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:t,status:n,cleaned:i,completed:a,logs:o}}));return d(r=>{let s=e(),c=t(`rue:component:anchor`);return a(s,c),m(g(S,{children:d(()=>{let r=e(),s=l(`h1`,r);a(r,s),f(s,`text-5xl font-semibold mb-4 md:mb-4`),a(s,_(`onWatcherCleanup 请求清理`));let c=l(`div`,r);a(r,c),h(c,`role`,`tablist`),f(c,`tabs tabs-box`);let v=l(`button`,c);a(c,v),h(v,`role`,`tab`),n(()=>{f(v,`tab ${T.value===`preview`?`tab-active`:``}`)}),o(v,`click`,()=>{T.value=`preview`}),a(v,_(`效果`));let y=l(`button`,c);a(c,y),h(y,`role`,`tab`),n(()=>{f(y,`tab ${T.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{T.value=`code`}),a(y,_(`代码`));let S=l(`div`,r);a(r,S),f(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=t(`rue:slot:anchor`);a(S,A),n(()=>{let r=T.value===`code`?d(()=>{let r=e(),o=l(`div`,r);a(r,o),f(o,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,o);a(o,s),f(s,`card-body p-0`);let c=t(`rue:component:anchor`);return a(s,c),n(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});i(()=>m(e,s,c))}),r}):``;i(()=>m(r,S,A))}),a(S,_(` `));let j=t(`rue:slot:anchor`);return a(S,j),n(()=>{let r=T.value===`preview`?d(()=>{let r=e(),i=l(`div`,r);a(r,i),f(i,`card bg-base-100 shadow`);let s=l(`div`,i);a(i,s),f(s,`card-body gap-4`);let c=l(`div`,s);a(s,c),f(c,`flex flex-wrap items-center justify-between gap-3`);let g=l(`div`,c);a(c,g);let v=l(`p`,g);a(g,v),f(v,`text-sm opacity-70`),a(v,_(`当前用户`));let y=l(`h2`,g);a(g,y),f(y,`text-2xl font-semibold`),a(y,_(`#`));let x=p(y);a(y,x),n(()=>{u(x,w.value)});let S=l(`button`,c);a(c,S),f(S,`btn btn-primary`),o(S,`click`,()=>{w.value+=1}),a(S,_(`快速切换用户`));let C=l(`div`,s);a(s,C),f(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=l(`div`,C);a(C,T),f(T,`stat`);let A=l(`div`,T);a(T,A),f(A,`stat-title`),a(A,_(`状态`));let j=l(`div`,T);a(T,j),f(j,`stat-value text-xl`);let M=p(j);a(j,M),n(()=>{u(M,E.value)});let N=l(`div`,C);a(C,N),f(N,`stat`);let P=l(`div`,N);a(N,P),f(P,`stat-title`),a(P,_(`已清理`));let F=l(`div`,N);a(N,F),f(F,`stat-value text-xl`);let I=p(F);a(F,I),n(()=>{u(I,D.value)});let L=l(`div`,C);a(C,L),f(L,`stat`);let R=l(`div`,L);a(L,R),f(R,`stat-title`),a(R,_(`已完成`));let z=l(`div`,L);a(L,z),f(z,`stat-value text-xl`);let B=p(z);a(z,B),n(()=>{u(B,O.value)});let V=l(`ul`,s);a(s,V),f(V,`menu bg-base-200 rounded-box`);let H=t(`rue:list:start`),U=t(`rue:list:end`);a(V,H),a(V,U);let W=new Map;return n(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(t,r,i,o,s)=>{m(d(()=>{let r=e(),i=l(`li`,r);a(r,i),n(()=>{h(i,`key`,String(`${t}-${s}`))});let o=l(`span`,i);a(i,o);let c=p(o);return a(o,c),n(()=>{u(c,t)}),r}),r,i)}})}),r}):``;i(()=>m(r,S,j))}),r})}),s,c),s})};export{w as default};