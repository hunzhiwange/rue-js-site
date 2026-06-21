import{$t as e,At as t,Jt as n,Q as r,Rt as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>c(()=>{let e=y(`ref:1:0`,()=>n(1)),r=y(`ref:1:1`,()=>n(`preview`)),a=y(`ref:1:2`,()=>n(`等待请求`)),o=y(`ref:1:3`,()=>n(0)),s=y(`ref:1:4`,()=>n(0)),c=y(`ref:1:5`,()=>n([]));return y(`watch:1:6`,()=>i(()=>e.value,e=>{a.value=`正在加载用户 #${e}`,c.value=[`start #${e}`,...c.value].slice(0,8);let n=window.setTimeout(()=>{s.value+=1,a.value=`用户 #${e} 加载完成`,c.value=[`done #${e}`,...c.value].slice(0,8)},900);t(()=>{window.clearTimeout(n),o.value+=1,c.value=[`cleanup #${e}`,...c.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:r,status:a,cleaned:o,completed:s,logs:c}}));return u(t=>{let n=g(),i=s(`rue:component:anchor`);return r(n,i),p(h(S,{children:u(()=>{let t=g(),n=f(`h1`,t);r(t,n),o(n,`text-5xl font-semibold mb-4 md:mb-4`),r(n,m(`onWatcherCleanup 请求清理`));let i=f(`div`,t);r(t,i),d(i,`role`,`tablist`),o(i,`tabs tabs-box`);let c=f(`button`,i);r(i,c),d(c,`role`,`tab`),v(()=>{o(c,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(c,`click`,()=>{T.value=`preview`}),r(c,m(`效果`));let y=f(`button`,i);r(i,y),d(y,`role`,`tab`),v(()=>{o(y,`tab ${T.value===`code`?`tab-active`:``}`)}),a(y,`click`,()=>{T.value=`code`}),r(y,m(`代码`));let S=f(`div`,t);r(t,S),o(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);r(S,A),v(()=>{let t=T.value===`code`?u(()=>{let t=g(),n=f(`div`,t);r(t,n),o(n,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,n);r(n,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return r(i,a),v(()=>{let t=h(x,{className:`h-full`,lang:`tsx`,code:C});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,S,A))}),r(S,m(` `));let j=s(`rue:slot:anchor`);return r(S,j),v(()=>{let t=T.value===`preview`?u(()=>{let e=g(),t=f(`div`,e);r(e,t),o(t,`card bg-base-100 shadow`);let n=f(`div`,t);r(t,n),o(n,`card-body gap-4`);let i=f(`div`,n);r(n,i),o(i,`flex flex-wrap items-center justify-between gap-3`);let c=f(`div`,i);r(i,c);let h=f(`p`,c);r(c,h),o(h,`text-sm opacity-70`),r(h,m(`当前用户`));let y=f(`h2`,c);r(c,y),o(y,`text-2xl font-semibold`),r(y,m(`#`));let x=l(y);r(y,x),v(()=>{_(x,w.value)});let S=f(`button`,i);r(i,S),o(S,`btn btn-primary`),a(S,`click`,()=>{w.value+=1}),r(S,m(`快速切换用户`));let C=f(`div`,n);r(n,C),o(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=f(`div`,C);r(C,T),o(T,`stat`);let A=f(`div`,T);r(T,A),o(A,`stat-title`),r(A,m(`状态`));let j=f(`div`,T);r(T,j),o(j,`stat-value text-xl`);let M=l(j);r(j,M),v(()=>{_(M,E.value)});let N=f(`div`,C);r(C,N),o(N,`stat`);let P=f(`div`,N);r(N,P),o(P,`stat-title`),r(P,m(`已清理`));let F=f(`div`,N);r(N,F),o(F,`stat-value text-xl`);let I=l(F);r(F,I),v(()=>{_(I,D.value)});let L=f(`div`,C);r(C,L),o(L,`stat`);let R=f(`div`,L);r(L,R),o(R,`stat-title`),r(R,m(`已完成`));let z=f(`div`,L);r(L,z),o(z,`stat-value text-xl`);let B=l(z);r(z,B),v(()=>{_(B,O.value)});let V=f(`ul`,n);r(n,V),o(V,`menu bg-base-200 rounded-box`);let H=s(`rue:list:start`),U=s(`rue:list:end`);r(V,H),r(V,U);let W=new Map;return v(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(e,t,n,i,a)=>{p(u(()=>{let t=g(),n=f(`li`,t);r(t,n),v(()=>{d(n,`key`,String(`${e}-${a}`))});let i=f(`span`,n);r(n,i);let o=l(i);return r(i,o),v(()=>{_(o,e)}),t}),t,n)}})}),e}):``;e(()=>p(t,S,j))}),t})}),n,i),n})};export{w as default};