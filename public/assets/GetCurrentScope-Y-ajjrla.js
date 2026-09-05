import{B as e,Bt as t,C as n,Dn as r,Et as i,H as a,K as o,L as s,Lt as c,Mt as l,Nn as u,S as d,V as f,W as p,X as m,Y as h,_n as g,_t as _,at as v,bn as y,fn as b,gn as x,hn as S,ht as C,it as w,kn as T,nt as E,pn as D,pt as O,q as k,rt as A,tt as j,wn as M,x as N,z as P}from"./rue-runtime-CwEGJ854.js";import{t as F}from"./Code-B3jCYMAr.js";import{r as I}from"./SidebarPlaygroundExample-EGR0CyDT.js";var L=g(`<section class="rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3"><h2 class="text-xl font-semibold">Compiled scope probe</h2><p class="text-sm text-base-content/70"><!--rue:text-hole:0--></p><p class="font-mono text-sm">count = <!--rue:text-hole:1--></p></section>`),R=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">getCurrentScope 作用域探针</h1>`),z=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),B=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),V=e=>{let t=p(e.count),n=p(e.report),r=p(e.scopeRef),a=u();return r.get().value=a,c(()=>{n.get()(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),k(i(Object.assign(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],o=r.parentNode,s=n.childNodes[2].childNodes[1],c=s.parentNode;f(o,r,()=>a?.active===!0?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=x(`probe scope 处于 active 状态`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=x(`probe scope 已停止`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let l=x(``);return c.insertBefore(l,s),c.removeChild(s),y(l,()=>t.get().value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>P(()=>{t.set(e.count),n.set(e.report),r.set(e.scopeRef)}),()=>e)},H=()=>{let g=t(`preview`),L=t(0),H=t(!0),U=t(void 0),W=t(0),G=t([`等待操作：点击按钮观察当前 effect scope`]),K=e=>{W.value+=1,G.value=[`${W.value}. ${e}`,...G.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)},q=()=>{K(u()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},J=()=>{let e=U.value;if(!e?.active){K(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{K(u()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},Y=()=>{H.value=!H.value,K(H.value?`probe 已重新挂载`:`probe 已卸载`)},X=U.value?U.value.active?`active`:`stopped`:`未捕获`;return l(()=>k((()=>{let t=C(()=>{let t=E(),r=B().content.cloneNode(!0),l=r.firstChild,u=l.childNodes[0],_=u.parentNode,k=l.childNodes[1],P=k.parentNode;return t.appendChild(r),f(_,u,()=>{let e=g.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=S(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=S(`div`,t);return b(t,n),n.className=`card-body p-0`,o(n,F,()=>({className:`h-full`,lang:`tsx`,code:`import {
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
};`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),M(()=>{let t=g.value===`preview`?C(()=>{let t=E(),r=A(`div`,t);m(t,r),s(r,`card bg-base-100 shadow`);let o=A(`div`,r);m(r,o),s(o,`card-body gap-5`);let l=A(`div`,o);m(o,l),s(l,`flex flex-wrap items-center gap-3`);let u=A(`button`,l);m(l,u),s(u,`btn btn-primary`);let f=e=>{let t=()=>L.value++;typeof t==`function`&&t(e)};u.addEventListener(`click`,f),c(()=>u.removeEventListener(`click`,f)),m(u,w(`更新 count`));let g=A(`button`,l);m(l,g),s(g,`btn`);let _=e=>{let t=J;typeof t==`function`&&t(e)};g.addEventListener(`click`,_),c(()=>g.removeEventListener(`click`,_)),m(g,w(`scope.run()`));let C=A(`button`,l);m(l,C),s(C,`btn`);let k=e=>{let t=q;typeof t==`function`&&t(e)};C.addEventListener(`click`,k),c(()=>C.removeEventListener(`click`,k)),m(C,w(`事件中读取`));let P=A(`button`,l);m(l,P),s(P,`btn btn-outline`);let F=e=>{let t=Y;typeof t==`function`&&t(e)};P.addEventListener(`click`,F),c(()=>P.removeEventListener(`click`,F));let I=v(P);m(P,I),M(()=>{O(I,H.value?`卸载 probe`:`重新挂载 probe`)});let R=A(`span`,l);m(l,R),s(R,`badge badge-soft`),m(R,w(`scope: `));let z=j(`rue:slot:anchor`);m(R,z),M(()=>{let e=X;T(()=>h(e,R,z))}),e(()=>H.value?{__rue_compiled_branch_key:!0,create:()=>a(V,()=>({count:L,scopeRef:U,report:K}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=S(`section`,e);return t.className=`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`,b(t,x(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(o);let B=A(`div`,o);m(o,B),s(B,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let W=A(`h2`,B);m(B,W),s(W,`text-lg font-semibold mb-3`),m(W,w(`运行记录`));let Z=A(`ul`,B);m(B,Z),s(Z,`space-y-2 text-sm`);let Q=D(`rue:list:end`);b(Z,Q);let $=[];return M(()=>{let e=G.value||[];$=n(Z,Q,$,e,(e,t)=>e,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>N(e,r,()=>i(Object.assign(e=>{let t=S(`li`,e);t.className=`font-mono`;let r=x(``);return b(t,r),y(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),t},!0):``;T(()=>h(t,P,k))}),t});return _(I,()=>({children:[i(e=>R().content.cloneNode(!0).firstChild),i(Object.assign(e=>{let t=z().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=t.childNodes[1];n.setAttribute(`role`,`tab`);let a;M(()=>{let e=`tab ${g.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,n.className=t)});let o=e=>{let t=()=>{g.value=`preview`};typeof t==`function`&&t(e)};n.addEventListener(`click`,o),r(()=>n.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;M(()=>{let e=`tab ${g.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{g.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),r(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),t]}))})(),e=>P(()=>{})))};export{H as default};