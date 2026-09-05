import{An as e,B as t,Bt as n,C as r,Dn as i,Et as a,H as o,K as s,L as c,Lt as l,Mn as u,Nn as d,On as f,S as p,Sn as m,V as h,W as g,Wt as _,_n as v,bn as y,fn as b,gn as x,hn as S,nt as C,ot as w,pn as ee,qt as T,wn as E,x as D}from"./rue-runtime-CwEGJ854.js";import{t as O}from"./Code-DUvGro8N.js";import{r as k}from"./SidebarPlaygroundExample-EGR0CyDT.js";var A=v(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">effectScope 批量停止</h1>`),j=v(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=v(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),N=()=>new Date().toLocaleTimeString(),P=`import {
  type EffectScope,
  type FC,
  computed,
  effectScope,
  getCurrentScope,
  onScopeDispose,
  ref,
  signal,
  watchEffect,
} from '@rue-js/rue';

const EffectScopeCopyableDemo: FC = () => {
  const count = signal(1);
  const heartbeat = ref(0);
  const scopedText = ref('scope 尚未启动');
  const scopeState = ref<'idle' | 'active' | 'stopped'>('idle');
  let scope: EffectScope | undefined;

  const startScope = () => {
    if (scope?.active) {
      scope.stop();
    }

    const nextScope = effectScope();
    scope = nextScope;
    heartbeat.value = 0;
    scopeState.value = 'active';
    scopedText.value = 'scope.run() 正在建立依赖';

    nextScope.run(() => {
      const doubled = computed(() => count.get() * 2);

      watchEffect(() => {
        scopedText.value =
          getCurrentScope() === nextScope
            ? 'count=' + count.get() + ' doubled=' + doubled.get() + ' scope=same'
            : 'watchEffect 没有读到创建时的 scope';
      });

      const timer = setInterval(() => {
        heartbeat.value += 1;
      }, 1000);

      onScopeDispose(() => {
        clearInterval(timer);
        scopeState.value = 'stopped';
      });
    });
  };

  const stopScope = () => {
    if (scope?.active) {
      scope.stop();
    }
  };

  onScopeDispose(() => {
    scope?.stop();
  });

  return (
    <section className="space-y-4 rounded-box border border-base-300 bg-base-100 p-5">
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={startScope}>
          {scopeState.value === 'active' ? '重启 scope' : '启动 scope'}
        </button>
        <button className="btn" onClick={() => count.set(count.get() + 1)}>
          count + 1
        </button>
        <button className="btn btn-outline" onClick={stopScope}>
          停止 scope
        </button>
        <span className="badge badge-soft">scope: {scopeState.value}</span>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-box bg-base-200 p-4">
          <p className="text-sm text-base-content/60">源 signal</p>
          <p className="text-3xl font-semibold">{count.get()}</p>
        </div>
        <div className="rounded-box bg-base-200 p-4 md:col-span-2">
          <p className="text-sm text-base-content/60">scoped watchEffect 输出</p>
          <p className="font-mono text-sm">{scopedText.value}</p>
        </div>
        <div className="rounded-box bg-base-200 p-4">
          <p className="text-sm text-base-content/60">cleanup timer</p>
          <p className="text-3xl font-semibold">{heartbeat.value}</p>
        </div>
      </div>
    </section>
  );
};

export default EffectScopeCopyableDemo;`,F=()=>{let v=T(`useSetup:0:0`,()=>_(()=>{let t=n(`preview`),r=f(1),i=n(0),a=n(`scope 尚未启动`),o=n(`idle`),s=n([{id:0,text:`点击“启动 scope”，创建一组可批量停止的响应式副作用`}]),c=d(),p,h=1,g,_=e=>{s.value=[{id:h++,text:`${N()} ${e}`},...s.value.filter(e=>!e.text.includes(`点击“启动 scope”`))].slice(0,7)},v=()=>p?.active?(p.stop(),g?.(),!0):!1,y=(e=`scope.stop(): scoped effects 已停止`)=>{if(!v()){_(`当前没有 active scope`);return}_(e)},b=()=>{v();let t=c?.active?c.run(()=>u()):u(!0);if(!t){_(`创建 scope 失败`);return}p=t,i.value=0,o.value=`active`,a.value=`scope.run() 正在建立依赖`,_(`effectScope().run(): 开始捕获 computed 与 watchEffect`),t.run(()=>{let n=T(`computed:1:6`,()=>m(()=>r.get()*2));T(`watchEffect:1:7`,()=>e(()=>{let e=d();a.value=e===t?`count=${r.get()} doubled=${n.get()} scope=same`:`watchEffect 没有读到创建时的 scope`}));let s=setInterval(()=>{i.value+=1},1e3);g=()=>{clearInterval(s),g=void 0,o.value=`stopped`,_(`onScopeDispose: interval 已清理`)}})},x=()=>{r.set(r.get()+1)};l(()=>{v()});let S=m(()=>o.value===`active`?`active`:o.value===`stopped`?`stopped`:`idle`);return S.get(),{activeTab:t,count:r,heartbeat:i,scopedText:a,scopeState:o,logs:s,ownerScope:c,pushLog:_,stopActiveScope:v,stopScope:y,startScope:b,incrementCount:x,stateLabel:S,__rue_phase2_stateLabel:S,scope:p,nextLogId:h,clearScopeTimer:g}})),{activeTab:F,count:te,heartbeat:ne,scopedText:I,scopeState:L,logs:R,ownerScope:z,pushLog:B,stopActiveScope:V,stopScope:re,startScope:ie,incrementCount:ae,stateLabel:oe,__rue_phase2_stateLabel:H}=v,{scope:U,nextLogId:W,clearScopeTimer:G}=v;return o(k,()=>({children:[(e,t,n)=>D(e,n,()=>a(Object.assign(e=>{let t=C();return t.appendChild(A().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>D(e,n,()=>a(Object.assign(e=>{let t=C(),n=j().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),w(i,`role`,`tab`),E(()=>{c(i,`tab ${F.value===`preview`?`tab-active`:``}`)});let o=e=>{let t=()=>{F.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,o),l(()=>i.removeEventListener(`click`,o)),w(a,`role`,`tab`),E(()=>{c(a,`tab ${F.value===`code`?`tab-active`:``}`)});let s=e=>{let t=()=>{F.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,s),l(()=>a.removeEventListener(`click`,s)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,o)=>D(e,o,()=>a(Object.assign(e=>{let n=C(),o=M().content.cloneNode(!0),c=o.firstChild,l=c.childNodes[0],u=l.parentNode,d=c.childNodes[1],f=d.parentNode;return n.appendChild(o),h(u,l,()=>{let e=F.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=S(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=S(`div`,t);return b(t,n),n.className=`card-body p-0`,s(n,O,()=>({className:`h-full`,lang:`tsx`,code:P})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=C();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),h(f,d,()=>{let e=F.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let n=S(`div`,e);n.className=`card bg-base-100 shadow`;let o=S(`div`,n);b(n,o),o.className=`card-body gap-5`;let s=S(`div`,o);b(o,s),s.className=`flex flex-wrap items-center justify-between gap-3`;let c=S(`div`,s);b(s,c);let l=S(`p`,c);b(c,l),l.className=`text-sm text-base-content/60`,b(l,x(`停止 scope 后，源数据仍会变化，但 scoped watchEffect 不再运行`));let u=S(`h2`,c);b(c,u),u.className=`text-2xl font-semibold`,b(u,x(`Manual scope session`));let d=S(`span`,s);b(s,d),d.className=`badge badge-soft`,b(d,x(`scope: `));let f=x(``);b(d,f),y(f,()=>oe.get());let m=S(`div`,o);b(o,m),m.className=`flex flex-wrap gap-3`;let h=S(`button`,m);b(m,h),h.className=`btn btn-primary`;let _=e=>{let t=ie;typeof t==`function`&&t(e)};h.addEventListener(`click`,_),i(()=>h.removeEventListener(`click`,_));let v=x(``);b(h,v),y(v,()=>L.value===`active`?`重启 scope`:`启动 scope`);let C=S(`button`,m);b(m,C),C.className=`btn`;let w=e=>{let t=ae;typeof t==`function`&&t(e)};C.addEventListener(`click`,w),i(()=>C.removeEventListener(`click`,w)),b(C,x(`count + 1`));let T=S(`button`,m);b(m,T),T.className=`btn btn-outline`;let O=e=>{let t=()=>re();typeof t==`function`&&t(e)};T.addEventListener(`click`,O),i(()=>T.removeEventListener(`click`,O)),b(T,x(`停止 scope`));let k=S(`div`,o);b(o,k),k.className=`grid gap-3 md:grid-cols-3`;let A=S(`div`,k);b(k,A),A.className=`rounded-box border border-base-300 bg-base-200 p-4`;let j=S(`p`,A);b(A,j),j.className=`text-sm text-base-content/60`,b(j,x(`源 signal`));let M=S(`p`,A);b(A,M),M.className=`mt-1 text-3xl font-semibold`;let N=x(``);b(M,N),y(N,()=>te.get());let P=S(`div`,k);b(k,P),P.className=`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`;let F=S(`p`,P);b(P,F),F.className=`text-sm text-base-content/60`,b(F,x(`scoped watchEffect 输出`));let B=S(`p`,P);b(P,B),B.className=`mt-1 font-mono text-sm`;let V=x(``);b(B,V),y(V,()=>I.value);let H=S(`div`,k);b(k,H),H.className=`rounded-box border border-base-300 bg-base-200 p-4`;let U=S(`p`,H);b(H,U),U.className=`text-sm text-base-content/60`,b(U,x(`cleanup timer`));let W=S(`p`,H);b(H,W),W.className=`mt-1 text-3xl font-semibold`;let G=x(``);b(W,G),y(G,()=>ne.value);let K=S(`div`,k);b(k,K),K.className=`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`;let q=S(`p`,K);b(K,q),q.className=`text-sm text-base-content/60`,b(q,x(`当前组件 scope`));let J=S(`p`,K);b(K,J),J.className=`mt-1 font-mono text-sm`,t(()=>z?.active?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=x(`page owner scope active`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=x(`no owner scope captured`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(J);let Y=S(`div`,o);b(o,Y),Y.className=`rounded-box bg-base-200 p-4`;let X=S(`h3`,Y);b(Y,X),X.className=`font-semibold`,b(X,x(`运行记录`));let Z=S(`div`,Y);b(Y,Z),Z.className=`mt-3 space-y-2`;let Q=ee(`rue:list:end`);b(Z,Q);let $=[];return E(()=>{let e=R.value||[];$=r(Z,Q,$,e,(e,t)=>e.id,(e,t)=>{let n=g(e),r=g(t);return p((e,t,r)=>D(e,r,()=>a(Object.assign(e=>{let t=S(`p`,e);t.className=`rounded-box bg-base-100 px-3 py-2 text-sm`;let r=x(``);return b(t,r),y(r,()=>n.get().text),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=C();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]}))};export{F as default};