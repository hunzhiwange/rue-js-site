import{At as e,C as t,Dn as n,E as r,Mt as i,Nn as a,Ot as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,at as f,b as p,bt as m,ct as h,dt as g,et as _,gn as v,gt as ee,kn as y,mn as b,nt as x,pn as S,qt as C,rt as w,st as T,tn as E,tt as te,ut as D,vn as O,vt as k,w as A,wn as j,xn as M,yt as N}from"./rue-runtime-HIMg8Lz8.js";import{t as P}from"./Code-DpH7u0gk.js";import{r as F}from"./SidebarPlaygroundExample-BCPRe0hA.js";var I=O(`<section class="rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3"><h2 class="text-xl font-semibold">Compiled scope probe</h2><p class="text-sm text-base-content/70"><!--rue:text-hole:0--></p><p class="font-mono text-sm">count = <!--rue:text-hole:1--></p></section>`),L=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">getCurrentScope 作用域探针</h1>`),R=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),z=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),B=e=>{let t=f(e.count),n=f(e.report),r=f(e.scopeRef),i=a();return r.get().value=i,c(()=>{n.get()(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),h(l(Object.assign(e=>{let n=I().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],a=r.parentNode,o=n.childNodes[2].childNodes[1],s=o.parentNode;x(a,r,()=>i?.active===!0?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=u(`probe scope 处于 active 状态`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=u(`probe scope 已停止`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let c=u(``);return s.insertBefore(c,o),s.removeChild(o),M(c,()=>t.get().value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{t.set(e.count),n.set(e.report),r.set(e.scopeRef)}),()=>e)},V=()=>{let O=E(`preview`),I=E(0),V=E(!0),H=E(void 0),U=E(0),W=E([`等待操作：点击按钮观察当前 effect scope`]),G=e=>{U.value+=1,W.value=[`${U.value}. ${e}`,...W.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)},K=()=>{G(a()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},q=()=>{let e=H.value;if(!e?.active){G(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{G(a()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},J=()=>{V.value=!V.value,G(V.value?`probe 已重新挂载`:`probe 已卸载`)},Y=H.value?H.value.active?`active`:`stopped`:`未捕获`;return C(()=>h((()=>{let a=e(()=>{let i=d(),a=z().content.cloneNode(!0),h=a.firstChild,_=h.childNodes[0],C=_.parentNode,E=h.childNodes[1],F=E.parentNode;return i.appendChild(a),x(C,_,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=v(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=v(`div`,t);return S(t,n),n.className=`card-body p-0`,T(n,P,()=>({className:`h-full`,lang:`tsx`,code:`import {
  type EffectScope,
  type FC,
  getCurrentScope,
  onScopeDispose,
  ref,
  vapor,
  watchEffect,
} from '@rue-js/rue';

const ScopeProbe: FC<{
  count: { value: number };
  scopeRef: { value: EffectScope | undefined };
  report: (message: string) => void;
}> = props => {
  return vapor(() => {
    const scope = getCurrentScope();
    props.scopeRef.value = scope;

    const root = document.createElement('section');
    const status = document.createElement('p');
    const countText = document.createElement('p');
    root.append(status, countText);

    onScopeDispose(() => {
      props.report('scope disposed');
    });

    watchEffect(() => {
      status.textContent =
        getCurrentScope() === scope ? 'same active scope' : 'missing scope';
      countText.textContent = \`count = \${props.count.value}\`;
    });

    return root;
  });
};

const GetCurrentScopeDemo: FC = () => {
  const count = ref(0);
  const scopeRef = ref<EffectScope | undefined>(undefined);

  return (
    <div>
      <button onClick={() => count.value++}>更新 count</button>
      <button
        onClick={() => {
          scopeRef.value?.run(() => {
            console.log(getCurrentScope() === scopeRef.value);
          });
        }}
      >
        scope.run()
      </button>
      <ScopeProbe count={count} scopeRef={scopeRef} report={console.log} />
    </div>
  );
};`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),j(()=>{let i=O.value===`preview`?e(()=>{let e=d(),i=k(`div`,e);g(e,i),s(i,`card bg-base-100 shadow`);let a=k(`div`,i);g(i,a),s(a,`card-body gap-5`);let h=k(`div`,a);g(a,h),s(h,`flex flex-wrap items-center gap-3`);let _=k(`button`,h);g(h,_),s(_,`btn btn-primary`);let x=e=>{let t=()=>I.value++;typeof t==`function`&&t(e)};_.addEventListener(`click`,x),c(()=>_.removeEventListener(`click`,x)),g(_,N(`更新 count`));let C=k(`button`,h);g(h,C),s(C,`btn`);let T=e=>{let t=q;typeof t==`function`&&t(e)};C.addEventListener(`click`,T),c(()=>C.removeEventListener(`click`,T)),g(C,N(`scope.run()`));let E=k(`button`,h);g(h,E),s(E,`btn`);let O=e=>{let t=K;typeof t==`function`&&t(e)};E.addEventListener(`click`,O),c(()=>E.removeEventListener(`click`,O)),g(E,N(`事件中读取`));let P=k(`button`,h);g(h,P),s(P,`btn btn-outline`);let F=e=>{let t=J;typeof t==`function`&&t(e)};P.addEventListener(`click`,F),c(()=>P.removeEventListener(`click`,F));let L=m(P);g(P,L),j(()=>{o(L,V.value?`卸载 probe`:`重新挂载 probe`)});let R=k(`span`,h);g(h,R),s(R,`badge badge-soft`),g(R,N(`scope: `));let z=ee(`rue:slot:anchor`);g(R,z),j(()=>{let e=Y;y(()=>D(e,R,z))}),te(()=>V.value?{__rue_compiled_branch_key:!0,create:()=>w(B,()=>({count:I,scopeRef:H,report:G}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=v(`section`,e);return t.className=`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`,S(t,u(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(a);let U=k(`div`,a);g(a,U),s(U,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let X=k(`h2`,U);g(U,X),s(X,`text-lg font-semibold mb-3`),g(X,N(`运行记录`));let Z=k(`ul`,U);g(U,Z),s(Z,`space-y-2 text-sm`);let Q=b(`rue:list:end`);S(Z,Q);let $=[];return j(()=>{let e=W.value||[];$=A(Z,Q,$,e,(e,t)=>e,(e,n)=>{let i=f(e);return t((e,t,n)=>r(e,n,()=>l(Object.assign(e=>{let t=v(`li`,e);t.className=`font-mono`;let n=u(``);return S(t,n),M(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>p($)),e},!0):``;y(()=>D(i,F,E))}),i});return i(F,()=>({children:[l(e=>L().content.cloneNode(!0).firstChild),l(Object.assign(e=>{let t=R().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;j(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{O.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;j(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{O.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),a]}))})(),e=>_(()=>{})))};export{V as default};