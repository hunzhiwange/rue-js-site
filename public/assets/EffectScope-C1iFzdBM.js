import{Et as e,Q as t,Qt as n,Tt as r,Vt as i,Xt as a,Z as o,at as s,bt as c,dt as l,it as u,jt as d,l as f,nt as p,o as m,on as h,pt as g,rt as _,t as v,tn as y,tt as b,wt as x}from"./vapor-runtime-x7F5M-49.js";import{a as S,n as ee}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as C}from"./Code-BoXKy3gJ.js";import{r as w}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var T=()=>new Date().toLocaleTimeString(),E=`import {
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

export default EffectScopeCopyableDemo;`,D=()=>{let D=S(`useSetup:0:0`,()=>h(()=>{let t=S(`ref:1:0`,()=>a(`preview`)),o=S(`signal:1:1`,()=>n(1)),s=S(`ref:1:2`,()=>a(0)),c=S(`ref:1:3`,()=>a(`scope 尚未启动`)),l=S(`ref:1:4`,()=>a(`idle`)),u=S(`ref:1:5`,()=>a([`点击“启动 scope”，创建一组可批量停止的响应式副作用`])),f=e(),p,m=e=>{u.value=[`${T()} ${e}`,...u.value.filter(e=>!e.includes(`点击“启动 scope”`))].slice(0,7)};return d(()=>{p?.active&&p.stop()}),{activeTab:t,count:o,heartbeat:s,scopedText:c,scopeState:l,logs:u,ownerScope:f,pushLog:m,stopScope:(e=`scope.stop(): scoped effects 已停止`)=>{if(!p?.active){m(`当前没有 active scope`);return}p.stop(),m(e)},startScope:()=>{p?.active&&p.stop();let t=f?.active?f.run(()=>r()):r(!0);if(!t){m(`创建 scope 失败`);return}p=t,s.value=0,l.value=`active`,c.value=`scope.run() 正在建立依赖`,m(`effectScope().run(): 开始捕获 computed 与 watchEffect`),t.run(()=>{let n=S(`computed:1:6`,()=>x(()=>o.get()*2));S(`watchEffect:1:7`,()=>i(()=>{c.value=e()===t?`count=${o.get()} doubled=${n.get()} scope=same`:`watchEffect 没有读到创建时的 scope`}));let r=setInterval(()=>{s.value+=1},1e3);d(()=>{clearInterval(r),l.value=`stopped`,m(`onScopeDispose: interval 已清理`)})})},incrementCount:()=>{o.set(o.get()+1)},stateLabel:S(`computed:1:8`,()=>x(()=>l.value===`active`?`active`:l.value===`stopped`?`stopped`:`idle`)),scope:p}})),{activeTab:O,count:te,heartbeat:k,scopedText:A,scopeState:j,logs:ne,ownerScope:re,pushLog:M,stopScope:ie,startScope:ae,incrementCount:oe,stateLabel:se}=D,{scope:N}=D;return f(e=>{let n=p(),r=b(`rue:component:anchor`);return t(n,r),m(v(w,{children:f(()=>{let e=p(),n=_(`h1`,e);t(e,n),g(n,`text-5xl font-semibold mb-4 md:mb-4`),t(n,u(`effectScope 批量停止`));let r=_(`div`,e);t(e,r),l(r,`role`,`tablist`),g(r,`tabs tabs-box`);let a=_(`button`,r);t(r,a),l(a,`role`,`tab`),i(()=>{g(a,`tab ${O.value===`preview`?`tab-active`:``}`)}),o(a,`click`,()=>{O.value=`preview`}),t(a,u(`效果`));let d=_(`button`,r);t(r,d),l(d,`role`,`tab`),i(()=>{g(d,`tab ${O.value===`code`?`tab-active`:``}`)}),o(d,`click`,()=>{O.value=`code`}),t(d,u(`代码`));let h=_(`div`,e);t(e,h),g(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=b(`rue:slot:anchor`);t(h,x),i(()=>{let e=O.value===`code`?f(()=>{let e=p(),n=_(`div`,e);t(e,n),g(n,`card bg-base-100 shadow overflow-auto`);let r=_(`div`,n);t(n,r),g(r,`card-body p-0`);let a=b(`rue:component:anchor`);return t(r,a),i(()=>{let e=v(C,{className:`h-full`,lang:`tsx`,code:E});y(()=>m(e,r,a))}),e}):``;y(()=>m(e,h,x))}),t(h,u(` `));let S=b(`rue:slot:anchor`);return t(h,S),i(()=>{let e=O.value===`preview`?f(()=>{let e=p(),n=_(`div`,e);t(e,n),g(n,`card bg-base-100 shadow`);let r=_(`div`,n);t(n,r),g(r,`card-body gap-5`);let a=_(`div`,r);t(r,a),g(a,`flex flex-wrap items-center justify-between gap-3`);let d=_(`div`,a);t(a,d);let h=_(`p`,d);t(d,h),g(h,`text-sm text-base-content/60`),t(h,u(`停止 scope 后，源数据仍会变化，但 scoped watchEffect 不再运行`));let v=_(`h2`,d);t(d,v),g(v,`text-2xl font-semibold`),t(v,u(`Manual scope session`));let x=_(`span`,a);t(a,x),g(x,`badge badge-soft`),t(x,u(`scope: `));let S=b(`rue:slot:anchor`);t(x,S),i(()=>{let e=se.get();y(()=>m(e,x,S))});let C=_(`div`,r);t(r,C),g(C,`flex flex-wrap gap-3`);let w=_(`button`,C);t(C,w),g(w,`btn btn-primary`),o(w,`click`,ae);let T=s(w);t(w,T),i(()=>{c(T,j.value===`active`?`重启 scope`:`启动 scope`)});let E=_(`button`,C);t(C,E),g(E,`btn`),o(E,`click`,oe),t(E,u(`count + 1`));let D=_(`button`,C);t(C,D),g(D,`btn btn-outline`),o(D,`click`,()=>ie()),t(D,u(`停止 scope`));let O=_(`div`,r);t(r,O),g(O,`grid gap-3 md:grid-cols-3`);let M=_(`div`,O);t(O,M),g(M,`rounded-box border border-base-300 bg-base-200 p-4`);let N=_(`p`,M);t(M,N),g(N,`text-sm text-base-content/60`),t(N,u(`源 signal`));let P=_(`p`,M);t(M,P),g(P,`mt-1 text-3xl font-semibold`);let F=b(`rue:slot:anchor`);t(P,F),i(()=>{let e=te.get();y(()=>m(e,P,F))});let I=_(`div`,O);t(O,I),g(I,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let L=_(`p`,I);t(I,L),g(L,`text-sm text-base-content/60`),t(L,u(`scoped watchEffect 输出`));let R=_(`p`,I);t(I,R),g(R,`mt-1 font-mono text-sm`);let z=s(R);t(R,z),i(()=>{c(z,A.value)});let B=_(`div`,O);t(O,B),g(B,`rounded-box border border-base-300 bg-base-200 p-4`);let V=_(`p`,B);t(B,V),g(V,`text-sm text-base-content/60`),t(V,u(`cleanup timer`));let H=_(`p`,B);t(B,H),g(H,`mt-1 text-3xl font-semibold`);let U=s(H);t(H,U),i(()=>{c(U,k.value)});let W=_(`div`,O);t(O,W),g(W,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let G=_(`p`,W);t(W,G),g(G,`text-sm text-base-content/60`),t(G,u(`当前组件 scope`));let K=_(`p`,W);t(W,K),g(K,`mt-1 font-mono text-sm`);let q=s(K);t(K,q),i(()=>{c(q,re?.active?`page owner scope active`:`no owner scope captured`)});let J=_(`div`,r);t(r,J),g(J,`rounded-box bg-base-200 p-4`);let Y=_(`h3`,J);t(J,Y),g(Y,`font-semibold`),t(Y,u(`运行记录`));let X=_(`div`,J);t(J,X),g(X,`mt-3 space-y-2`);let Z=b(`rue:list:start`),Q=b(`rue:list:end`);t(X,Z),t(X,Q);let $=new Map;return i(()=>{$=ee({items:ne.value||[],getKey:(e,t)=>e,elements:$,parent:X,before:Q,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(e,n,r,a,o)=>{m(f(()=>{let n=p(),r=_(`p`,n);t(n,r),g(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),i(()=>{l(r,`key`,String(e))});let a=s(r);return t(r,a),i(()=>{c(a,e)}),n}),n,r)}})}),e}):``;y(()=>m(e,h,S))}),e})}),n,r),n})};export{D as default};