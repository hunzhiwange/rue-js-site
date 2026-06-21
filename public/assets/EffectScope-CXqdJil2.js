import{$t as e,Ct as t,Jt as n,Q as r,St as i,Xt as a,Z as o,dt as s,et as c,in as l,it as u,kt as d,l as f,lt as p,nt as m,o as h,rt as g,t as _,tt as v,vt as y,wt as b,zt as x}from"./vapor-runtime-DsQWl-IB.js";import{a as S,n as C}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as w}from"./Code-4SUSUwRg.js";import{r as T}from"./SidebarPlaygroundExample-BEWYUWOl.js";var E=()=>new Date().toLocaleTimeString(),D=`import {
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

export default EffectScopeCopyableDemo;`,O=()=>{let O=S(`useSetup:0:0`,()=>l(()=>{let e=S(`ref:1:0`,()=>n(`preview`)),r=S(`signal:1:1`,()=>a(1)),o=S(`ref:1:2`,()=>n(0)),s=S(`ref:1:3`,()=>n(`scope 尚未启动`)),c=S(`ref:1:4`,()=>n(`idle`)),l=S(`ref:1:5`,()=>n([`点击“启动 scope”，创建一组可批量停止的响应式副作用`])),u=b(),f,p=e=>{l.value=[`${E()} ${e}`,...l.value.filter(e=>!e.includes(`点击“启动 scope”`))].slice(0,7)};return d(()=>{f?.active&&f.stop()}),{activeTab:e,count:r,heartbeat:o,scopedText:s,scopeState:c,logs:l,ownerScope:u,pushLog:p,stopScope:(e=`scope.stop(): scoped effects 已停止`)=>{if(!f?.active){p(`当前没有 active scope`);return}f.stop(),p(e)},startScope:()=>{f?.active&&f.stop();let e=u?.active?u.run(()=>t()):t(!0);if(!e){p(`创建 scope 失败`);return}f=e,o.value=0,c.value=`active`,s.value=`scope.run() 正在建立依赖`,p(`effectScope().run(): 开始捕获 computed 与 watchEffect`),e.run(()=>{let t=S(`computed:1:6`,()=>i(()=>r.get()*2));S(`watchEffect:1:7`,()=>x(()=>{s.value=b()===e?`count=${r.get()} doubled=${t.get()} scope=same`:`watchEffect 没有读到创建时的 scope`}));let n=setInterval(()=>{o.value+=1},1e3);d(()=>{clearInterval(n),c.value=`stopped`,p(`onScopeDispose: interval 已清理`)})})},incrementCount:()=>{r.set(r.get()+1)},stateLabel:S(`computed:1:8`,()=>i(()=>c.value===`active`?`active`:c.value===`stopped`?`stopped`:`idle`)),scope:f}})),{activeTab:k,count:ee,heartbeat:te,scopedText:ne,scopeState:re,logs:ie,ownerScope:ae,pushLog:A,stopScope:j,startScope:M,incrementCount:oe,stateLabel:se}=O,{scope:N}=O;return f(t=>{let n=v(),i=c(`rue:component:anchor`);return r(n,i),h(_(T,{children:f(()=>{let t=v(),n=m(`h1`,t);r(t,n),s(n,`text-5xl font-semibold mb-4 md:mb-4`),r(n,g(`effectScope 批量停止`));let i=m(`div`,t);r(t,i),p(i,`role`,`tablist`),s(i,`tabs tabs-box`);let a=m(`button`,i);r(i,a),p(a,`role`,`tab`),x(()=>{s(a,`tab ${k.value===`preview`?`tab-active`:``}`)}),o(a,`click`,()=>{k.value=`preview`}),r(a,g(`效果`));let l=m(`button`,i);r(i,l),p(l,`role`,`tab`),x(()=>{s(l,`tab ${k.value===`code`?`tab-active`:``}`)}),o(l,`click`,()=>{k.value=`code`}),r(l,g(`代码`));let d=m(`div`,t);r(t,d),s(d,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=c(`rue:slot:anchor`);r(d,b),x(()=>{let t=k.value===`code`?f(()=>{let t=v(),n=m(`div`,t);r(t,n),s(n,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,n);r(n,i),s(i,`card-body p-0`);let a=c(`rue:component:anchor`);return r(i,a),x(()=>{let t=_(w,{className:`h-full`,lang:`tsx`,code:D});e(()=>h(t,i,a))}),t}):``;e(()=>h(t,d,b))}),r(d,g(` `));let S=c(`rue:slot:anchor`);return r(d,S),x(()=>{let t=k.value===`preview`?f(()=>{let t=v(),n=m(`div`,t);r(t,n),s(n,`card bg-base-100 shadow`);let i=m(`div`,n);r(n,i),s(i,`card-body gap-5`);let a=m(`div`,i);r(i,a),s(a,`flex flex-wrap items-center justify-between gap-3`);let l=m(`div`,a);r(a,l);let d=m(`p`,l);r(l,d),s(d,`text-sm text-base-content/60`),r(d,g(`停止 scope 后，源数据仍会变化，但 scoped watchEffect 不再运行`));let _=m(`h2`,l);r(l,_),s(_,`text-2xl font-semibold`),r(_,g(`Manual scope session`));let b=m(`span`,a);r(a,b),s(b,`badge badge-soft`),r(b,g(`scope: `));let S=c(`rue:slot:anchor`);r(b,S),x(()=>{let t=se.get();e(()=>h(t,b,S))});let w=m(`div`,i);r(i,w),s(w,`flex flex-wrap gap-3`);let T=m(`button`,w);r(w,T),s(T,`btn btn-primary`),o(T,`click`,M);let E=u(T);r(T,E),x(()=>{y(E,re.value===`active`?`重启 scope`:`启动 scope`)});let D=m(`button`,w);r(w,D),s(D,`btn`),o(D,`click`,oe),r(D,g(`count + 1`));let O=m(`button`,w);r(w,O),s(O,`btn btn-outline`),o(O,`click`,()=>j()),r(O,g(`停止 scope`));let k=m(`div`,i);r(i,k),s(k,`grid gap-3 md:grid-cols-3`);let A=m(`div`,k);r(k,A),s(A,`rounded-box border border-base-300 bg-base-200 p-4`);let N=m(`p`,A);r(A,N),s(N,`text-sm text-base-content/60`),r(N,g(`源 signal`));let P=m(`p`,A);r(A,P),s(P,`mt-1 text-3xl font-semibold`);let F=c(`rue:slot:anchor`);r(P,F),x(()=>{let t=ee.get();e(()=>h(t,P,F))});let I=m(`div`,k);r(k,I),s(I,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let L=m(`p`,I);r(I,L),s(L,`text-sm text-base-content/60`),r(L,g(`scoped watchEffect 输出`));let R=m(`p`,I);r(I,R),s(R,`mt-1 font-mono text-sm`);let z=u(R);r(R,z),x(()=>{y(z,ne.value)});let B=m(`div`,k);r(k,B),s(B,`rounded-box border border-base-300 bg-base-200 p-4`);let V=m(`p`,B);r(B,V),s(V,`text-sm text-base-content/60`),r(V,g(`cleanup timer`));let H=m(`p`,B);r(B,H),s(H,`mt-1 text-3xl font-semibold`);let U=u(H);r(H,U),x(()=>{y(U,te.value)});let W=m(`div`,k);r(k,W),s(W,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let G=m(`p`,W);r(W,G),s(G,`text-sm text-base-content/60`),r(G,g(`当前组件 scope`));let K=m(`p`,W);r(W,K),s(K,`mt-1 font-mono text-sm`);let q=u(K);r(K,q),x(()=>{y(q,ae?.active?`page owner scope active`:`no owner scope captured`)});let J=m(`div`,i);r(i,J),s(J,`rounded-box bg-base-200 p-4`);let Y=m(`h3`,J);r(J,Y),s(Y,`font-semibold`),r(Y,g(`运行记录`));let X=m(`div`,J);r(J,X),s(X,`mt-3 space-y-2`);let Z=c(`rue:list:start`),Q=c(`rue:list:end`);r(X,Z),r(X,Q);let $=new Map;return x(()=>{$=C({items:ie.value||[],getKey:(e,t)=>e,elements:$,parent:X,before:Q,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(e,t,n,i,a)=>{h(f(()=>{let t=v(),n=m(`p`,t);r(t,n),s(n,`rounded-box bg-base-100 px-3 py-2 text-sm`),x(()=>{p(n,`key`,String(e))});let i=u(n);return r(n,i),x(()=>{y(i,e)}),t}),t,n)}})}),t}):``;e(()=>h(t,d,S))}),t})}),n,i),n})};export{O as default};