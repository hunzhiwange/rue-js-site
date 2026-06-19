import{$ as e,$t as t,Bt as n,Et as r,Gt as i,Qt as a,X as o,Xt as s,Z as c,ct as l,et as u,gt as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`ref:1:0`,()=>n(1)),t=y(`ref:1:1`,()=>n(`preview`)),i=y(`ref:1:2`,()=>n(`等待请求`)),o=y(`ref:1:3`,()=>n(0)),s=y(`ref:1:4`,()=>n(0)),c=y(`ref:1:5`,()=>n([]));return y(`watch:1:6`,()=>a(()=>e.value,e=>{i.value=`正在加载用户 #${e}`,c.value=[`start #${e}`,...c.value].slice(0,8);let t=window.setTimeout(()=>{s.value+=1,i.value=`用户 #${e} 加载完成`,c.value=[`done #${e}`,...c.value].slice(0,8)},900);r(()=>{window.clearTimeout(t),o.value+=1,c.value=[`cleanup #${e}`,...c.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:t,status:i,cleaned:o,completed:s,logs:c}}));return f(n=>{let r=u(),a=e(`rue:component:anchor`);return c(r,a),m(g(S,{children:f(()=>{let n=u(),r=_(`h1`,n);c(n,r),v(r,`text-5xl font-semibold mb-4 md:mb-4`),c(r,p(`onWatcherCleanup 请求清理`));let a=_(`div`,n);c(n,a),l(a,`role`,`tablist`),v(a,`tabs tabs-box`);let s=_(`button`,a);c(a,s),l(s,`role`,`tab`),t(()=>{v(s,`tab ${T.value===`preview`?`tab-active`:``}`)}),o(s,`click`,()=>{T.value=`preview`}),c(s,p(`效果`));let y=_(`button`,a);c(a,y),l(y,`role`,`tab`),t(()=>{v(y,`tab ${T.value===`code`?`tab-active`:``}`)}),o(y,`click`,()=>{T.value=`code`}),c(y,p(`代码`));let S=_(`div`,n);c(n,S),v(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);c(S,A),t(()=>{let n=T.value===`code`?f(()=>{let n=u(),r=_(`div`,n);c(n,r),v(r,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,r);c(r,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return c(a,o),t(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});i(()=>m(e,a,o))}),n}):``;i(()=>m(n,S,A))}),c(S,p(` `));let j=e(`rue:slot:anchor`);return c(S,j),t(()=>{let n=T.value===`preview`?f(()=>{let n=u(),r=_(`div`,n);c(n,r),v(r,`card bg-base-100 shadow`);let i=_(`div`,r);c(r,i),v(i,`card-body gap-4`);let a=_(`div`,i);c(i,a),v(a,`flex flex-wrap items-center justify-between gap-3`);let s=_(`div`,a);c(a,s);let g=_(`p`,s);c(s,g),v(g,`text-sm opacity-70`),c(g,p(`当前用户`));let y=_(`h2`,s);c(s,y),v(y,`text-2xl font-semibold`),c(y,p(`#`));let x=h(y);c(y,x),t(()=>{d(x,w.value)});let S=_(`button`,a);c(a,S),v(S,`btn btn-primary`),o(S,`click`,()=>{w.value+=1}),c(S,p(`快速切换用户`));let C=_(`div`,i);c(i,C),v(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=_(`div`,C);c(C,T),v(T,`stat`);let A=_(`div`,T);c(T,A),v(A,`stat-title`),c(A,p(`状态`));let j=_(`div`,T);c(T,j),v(j,`stat-value text-xl`);let M=h(j);c(j,M),t(()=>{d(M,E.value)});let N=_(`div`,C);c(C,N),v(N,`stat`);let P=_(`div`,N);c(N,P),v(P,`stat-title`),c(P,p(`已清理`));let F=_(`div`,N);c(N,F),v(F,`stat-value text-xl`);let I=h(F);c(F,I),t(()=>{d(I,D.value)});let L=_(`div`,C);c(C,L),v(L,`stat`);let R=_(`div`,L);c(L,R),v(R,`stat-title`),c(R,p(`已完成`));let z=_(`div`,L);c(L,z),v(z,`stat-value text-xl`);let B=h(z);c(z,B),t(()=>{d(B,O.value)});let V=_(`ul`,i);c(i,V),v(V,`menu bg-base-200 rounded-box`);let H=e(`rue:list:start`),U=e(`rue:list:end`);c(V,H),c(V,U);let W=new Map;return t(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(e,n,r,i,a)=>{m(f(()=>{let n=u(),r=_(`li`,n);c(n,r),t(()=>{l(r,`key`,String(`${e}-${a}`))});let i=_(`span`,r);c(r,i);let o=h(i);return c(i,o),t(()=>{d(o,e)}),n}),n,r)}})}),n}):``;i(()=>m(n,S,j))}),n})}),r,a),r})};export{w as default};