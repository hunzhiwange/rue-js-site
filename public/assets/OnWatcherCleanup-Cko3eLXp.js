import{Cn as e,Ct as t,Gt as n,Mt as r,Tt as i,dt as a,en as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,w=()=>{let{userId:w,activeTab:T,status:E,cleaned:D,completed:O,logs:k}=y(`useSetup:0:0`,()=>e(()=>{let e=y(`ref:1:0`,()=>d(1)),t=y(`ref:1:1`,()=>d(`preview`)),r=y(`ref:1:2`,()=>d(`等待请求`)),i=y(`ref:1:3`,()=>d(0)),a=y(`ref:1:4`,()=>d(0)),s=y(`ref:1:5`,()=>d([]));return y(`watch:1:6`,()=>o(()=>e.value,e=>{r.value=`正在加载用户 #${e}`,s.value=[`start #${e}`,...s.value].slice(0,8);let t=window.setTimeout(()=>{a.value+=1,r.value=`用户 #${e} 加载完成`,s.value=[`done #${e}`,...s.value].slice(0,8)},900);n(()=>{window.clearTimeout(t),i.value+=1,s.value=[`cleanup #${e}`,...s.value].slice(0,8)})},{immediate:!0})),{userId:e,activeTab:t,status:r,cleaned:i,completed:a,logs:s}}));return g(e=>{let n=s(),o=a(`rue:component:anchor`);return p(n,o),_(v(S,{children:g(()=>{let e=s(),n=f(`h1`,e);p(e,n),i(n,`text-5xl font-semibold mb-4 md:mb-4`),p(n,l(`onWatcherCleanup 请求清理`));let o=f(`div`,e);p(e,o),t(o,`role`,`tablist`),i(o,`tabs tabs-box`);let d=f(`button`,o);p(o,d),t(d,`role`,`tab`),m(()=>{i(d,`tab ${T.value===`preview`?`tab-active`:``}`)}),u(d,`click`,()=>{T.value=`preview`}),p(d,l(`效果`));let y=f(`button`,o);p(o,y),t(y,`role`,`tab`),m(()=>{i(y,`tab ${T.value===`code`?`tab-active`:``}`)}),u(y,`click`,()=>{T.value=`code`}),p(y,l(`代码`));let S=f(`div`,e);p(e,S),i(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);p(S,A),m(()=>{let e=T.value===`code`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),i(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),i(n,`card-body p-0`);let r=a(`rue:component:anchor`);return p(n,r),m(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});h(()=>_(e,n,r))}),e}):``;h(()=>_(e,S,A))}),p(S,l(` `));let j=a(`rue:slot:anchor`);return p(S,j),m(()=>{let e=T.value===`preview`?g(()=>{let e=s(),n=f(`div`,e);p(e,n),i(n,`card bg-base-100 shadow`);let o=f(`div`,n);p(n,o),i(o,`card-body gap-4`);let d=f(`div`,o);p(o,d),i(d,`flex flex-wrap items-center justify-between gap-3`);let h=f(`div`,d);p(d,h);let v=f(`p`,h);p(h,v),i(v,`text-sm opacity-70`),p(v,l(`当前用户`));let y=f(`h2`,h);p(h,y),i(y,`text-2xl font-semibold`),p(y,l(`#`));let x=c(y);p(y,x),m(()=>{r(x,w.value)});let S=f(`button`,d);p(d,S),i(S,`btn btn-primary`),u(S,`click`,()=>{w.value+=1}),p(S,l(`快速切换用户`));let C=f(`div`,o);p(o,C),i(C,`stats stats-vertical md:stats-horizontal bg-base-200`);let T=f(`div`,C);p(C,T),i(T,`stat`);let A=f(`div`,T);p(T,A),i(A,`stat-title`),p(A,l(`状态`));let j=f(`div`,T);p(T,j),i(j,`stat-value text-xl`);let M=c(j);p(j,M),m(()=>{r(M,E.value)});let N=f(`div`,C);p(C,N),i(N,`stat`);let P=f(`div`,N);p(N,P),i(P,`stat-title`),p(P,l(`已清理`));let F=f(`div`,N);p(N,F),i(F,`stat-value text-xl`);let I=c(F);p(F,I),m(()=>{r(I,D.value)});let L=f(`div`,C);p(C,L),i(L,`stat`);let R=f(`div`,L);p(L,R),i(R,`stat-title`),p(R,l(`已完成`));let z=f(`div`,L);p(L,z),i(z,`stat-value text-xl`);let B=c(z);p(z,B),m(()=>{r(B,O.value)});let V=f(`ul`,o);p(o,V),i(V,`menu bg-base-200 rounded-box`);let H=a(`rue:list:start`),U=a(`rue:list:end`);p(V,H),p(V,U);let W=new Map;return m(()=>{W=b({items:k.value||[],getKey:(e,t)=>`${e}-${t}`,elements:W,parent:V,before:U,singleRoot:!0,start:H,renderItem:(e,n,i,a,o)=>{_(g(()=>{let n=s(),i=f(`li`,n);p(n,i),m(()=>{t(i,`key`,String(`${e}-${o}`))});let a=f(`span`,i);p(i,a);let l=c(a);return p(a,l),m(()=>{r(l,e)}),n}),n,i)}})}),e}):``;h(()=>_(e,S,j))}),e})}),n,o),n})};export{w as default};