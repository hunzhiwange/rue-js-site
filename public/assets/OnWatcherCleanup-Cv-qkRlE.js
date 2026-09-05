import{Bt as e,C as t,Dn as n,Et as r,Fn as i,H as a,K as o,L as s,Lt as c,Mt as l,S as u,V as d,W as f,_n as p,bn as m,dn as h,fn as g,gn as _,hn as v,nt as y,ot as b,pn as x,q as S,wn as C,x as w,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./Code-B3jCYMAr.js";import{r as D}from"./SidebarPlaygroundExample-EGR0CyDT.js";var O=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onWatcherCleanup 请求清理</h1>`),k=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=p(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,M=()=>{let p=e(1),M=e(`preview`),N=e(`等待请求`),P=e(0),F=e(0),I=e([]);return h(()=>p.value,e=>{N.value=`正在加载用户 #${e}`,I.value=[`start #${e}`,...I.value].slice(0,8);let t=window.setTimeout(()=>{F.value+=1,N.value=`用户 #${e} 加载完成`,I.value=[`done #${e}`,...I.value].slice(0,8)},900);i(()=>{window.clearTimeout(t),P.value+=1,I.value=[`cleanup #${e}`,...I.value].slice(0,8)})},{immediate:!0}),l(()=>S(a(D,()=>({children:[(e,t,n)=>w(e,n,()=>r(Object.assign(e=>{let t=y();return t.appendChild(O().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>w(e,n,()=>r(Object.assign(e=>{let t=y(),n=k().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),b(i,`role`,`tab`),C(()=>{s(i,`tab ${M.value===`preview`?`tab-active`:``}`)});let o=e=>{let t=()=>{M.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,o),c(()=>i.removeEventListener(`click`,o)),b(a,`role`,`tab`),C(()=>{s(a,`tab ${M.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{M.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,i,a)=>w(e,a,()=>r(Object.assign(e=>{let i=y(),a=A().content.cloneNode(!0),s=a.firstChild,c=s.childNodes[0],l=c.parentNode,h=s.childNodes[1],b=h.parentNode;return i.appendChild(a),d(l,c,()=>{let e=M.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=v(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=v(`div`,t);return g(t,n),n.className=`card-body p-0`,o(n,E,()=>({className:`h-full`,lang:`tsx`,code:j})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(b,h,()=>{let e=M.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let i=v(`div`,e);i.className=`card bg-base-100 shadow`;let a=v(`div`,i);g(i,a),a.className=`card-body gap-4`;let o=v(`div`,a);g(a,o),o.className=`flex flex-wrap items-center justify-between gap-3`;let s=v(`div`,o);g(o,s);let c=v(`p`,s);g(s,c),c.className=`text-sm opacity-70`,g(c,_(`当前用户`));let l=v(`h2`,s);g(s,l),l.className=`text-2xl font-semibold`,g(l,_(`#`));let d=_(``);g(l,d),m(d,()=>p.value);let h=v(`button`,o);g(o,h),h.className=`btn btn-primary`;let y=e=>{let t=()=>{p.value+=1};typeof t==`function`&&t(e)};h.addEventListener(`click`,y),n(()=>h.removeEventListener(`click`,y)),g(h,_(`快速切换用户`));let b=v(`div`,a);g(a,b),b.className=`stats stats-vertical md:stats-horizontal bg-base-200`;let S=v(`div`,b);g(b,S),S.className=`stat`;let T=v(`div`,S);g(S,T),T.className=`stat-title`,g(T,_(`状态`));let E=v(`div`,S);g(S,E),E.className=`stat-value text-xl`;let D=_(``);g(E,D),m(D,()=>N.value);let O=v(`div`,b);g(b,O),O.className=`stat`;let k=v(`div`,O);g(O,k),k.className=`stat-title`,g(k,_(`已清理`));let A=v(`div`,O);g(O,A),A.className=`stat-value text-xl`;let j=_(``);g(A,j),m(j,()=>P.value);let M=v(`div`,b);g(b,M),M.className=`stat`;let L=v(`div`,M);g(M,L),L.className=`stat-title`,g(L,_(`已完成`));let R=v(`div`,M);g(M,R),R.className=`stat-value text-xl`;let z=_(``);g(R,z),m(z,()=>F.value);let B=v(`ul`,a);g(a,B),B.className=`menu bg-base-200 rounded-box`;let V=x(`rue:list:end`);g(B,V);let H=[];return C(()=>{let e=I.value||[];H=t(B,V,H,e,(e,t)=>`${e}-${t}`,(e,t)=>{let n=f(e),i=f(t);return u((e,t,i)=>w(e,i,()=>r(Object.assign(e=>{let t=v(`li`,e),r=v(`span`,t);g(t,r);let i=_(``);return g(r,i),m(i,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>T(()=>{})))};export{M as default};