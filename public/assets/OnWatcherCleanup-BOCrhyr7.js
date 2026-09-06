import{C as e,Dn as t,E as n,Fn as r,Q as i,Qt as a,Vt as o,Y as s,_n as c,_t as l,at as u,b as d,ct as f,et as p,gn as m,mn as h,nt as g,pn as _,qt as v,rt as y,st as b,tn as x,vn as S,w as C,wn as w,xn as T,xt as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./Code-DpH7u0gk.js";import{r as O}from"./SidebarPlaygroundExample-BCPRe0hA.js";var k=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onWatcherCleanup 请求清理</h1>`),A=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=S(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=`import { type FC, onWatcherCleanup, ref, watch } from '@rue-js/rue';

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

export default OnWatcherCleanupDemo;`,N=()=>{let S=x(1),N=x(`preview`),P=x(`等待请求`),F=x(0),I=x(0),L=x([]);return s(()=>S.value,e=>{P.value=`正在加载用户 #${e}`,L.value=[`start #${e}`,...L.value].slice(0,8);let t=window.setTimeout(()=>{I.value+=1,P.value=`用户 #${e} 加载完成`,L.value=[`done #${e}`,...L.value].slice(0,8)},900);r(()=>{window.clearTimeout(t),F.value+=1,L.value=[`cleanup #${e}`,...L.value].slice(0,8)})},{immediate:!0}),v(()=>f(y(O,()=>({children:[(e,t,r)=>n(e,r,()=>o(Object.assign(e=>{let t=l();return t.appendChild(k().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>n(e,r,()=>o(Object.assign(e=>{let t=l(),n=A().content.cloneNode(!0),r=n.firstChild,o=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),E(o,`role`,`tab`),w(()=>{i(o,`tab ${N.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{N.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,c),a(()=>o.removeEventListener(`click`,c)),E(s,`role`,`tab`),w(()=>{i(s,`tab ${N.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{N.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,u),a(()=>s.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i,a)=>n(r,a,()=>o(Object.assign(r=>{let i=l(),a=j().content.cloneNode(!0),s=a.firstChild,f=s.childNodes[0],p=f.parentNode,v=s.childNodes[1],y=v.parentNode;return i.appendChild(a),g(p,f,()=>{let e=N.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return _(t,n),n.className=`card-body p-0`,b(n,D,()=>({className:`h-full`,lang:`tsx`,code:M})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),g(y,v,()=>{let r=N.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(r=>{let i=m(`div`,r);i.className=`card bg-base-100 shadow`;let a=m(`div`,i);_(i,a),a.className=`card-body gap-4`;let s=m(`div`,a);_(a,s),s.className=`flex flex-wrap items-center justify-between gap-3`;let l=m(`div`,s);_(s,l);let f=m(`p`,l);_(l,f),f.className=`text-sm opacity-70`,_(f,c(`当前用户`));let p=m(`h2`,l);_(l,p),p.className=`text-2xl font-semibold`,_(p,c(`#`));let g=c(``);_(p,g),T(g,()=>S.value);let v=m(`button`,s);_(s,v),v.className=`btn btn-primary`;let y=e=>{let t=()=>{S.value+=1};typeof t==`function`&&t(e)};v.addEventListener(`click`,y),t(()=>v.removeEventListener(`click`,y)),_(v,c(`快速切换用户`));let b=m(`div`,a);_(a,b),b.className=`stats stats-vertical md:stats-horizontal bg-base-200`;let x=m(`div`,b);_(b,x),x.className=`stat`;let E=m(`div`,x);_(x,E),E.className=`stat-title`,_(E,c(`状态`));let D=m(`div`,x);_(x,D),D.className=`stat-value text-xl`;let O=c(``);_(D,O),T(O,()=>P.value);let k=m(`div`,b);_(b,k),k.className=`stat`;let A=m(`div`,k);_(k,A),A.className=`stat-title`,_(A,c(`已清理`));let j=m(`div`,k);_(k,j),j.className=`stat-value text-xl`;let M=c(``);_(j,M),T(M,()=>F.value);let N=m(`div`,b);_(b,N),N.className=`stat`;let R=m(`div`,N);_(N,R),R.className=`stat-title`,_(R,c(`已完成`));let z=m(`div`,N);_(N,z),z.className=`stat-value text-xl`;let B=c(``);_(z,B),T(B,()=>I.value);let V=m(`ul`,a);_(a,V),V.className=`menu bg-base-200 rounded-box`;let H=h(`rue:list:end`);_(V,H);let U=[];return w(()=>{let t=L.value||[];U=C(V,H,U,t,(e,t)=>`${e}-${t}`,(t,r)=>{let i=u(t);return e((e,t,r)=>n(e,r,()=>o(Object.assign(e=>{let t=m(`li`,e),n=m(`span`,t);_(t,n);let r=c(``);return _(n,r),T(r,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>d(U)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>o(Object.assign(e=>{let t=c(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>p(()=>{})))};export{N as default};