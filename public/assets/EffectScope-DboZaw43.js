import{Cn as e,Ct as t,Lt as n,Mt as r,Rt as i,Tt as a,Wt as o,dt as s,ft as c,hn as l,ht as u,mt as d,ot as f,pn as p,pt as m,st as h,tn as g,vn as _,zt as v}from"./context-8lXZvIn-.js";import{l as y,o as b,t as x}from"./vapor-runtime-ygJWVcNn.js";import{a as S,n as ee}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as C}from"./Code-DhoWkRkB.js";import{r as w}from"./SidebarPlaygroundExample-B78jsvoF.js";var T=()=>new Date().toLocaleTimeString(),E=`import {
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

export default EffectScopeCopyableDemo;`,D=()=>{let D=S(`useSetup:0:0`,()=>e(()=>{let e=S(`ref:1:0`,()=>p(`preview`)),t=S(`signal:1:1`,()=>l(1)),r=S(`ref:1:2`,()=>p(0)),a=S(`ref:1:3`,()=>p(`scope 尚未启动`)),s=S(`ref:1:4`,()=>p(`idle`)),c=S(`ref:1:5`,()=>p([`点击“启动 scope”，创建一组可批量停止的响应式副作用`])),u=v(),d,f=e=>{c.value=[`${T()} ${e}`,...c.value.filter(e=>!e.includes(`点击“启动 scope”`))].slice(0,7)};return o(()=>{d?.active&&d.stop()}),{activeTab:e,count:t,heartbeat:r,scopedText:a,scopeState:s,logs:c,ownerScope:u,pushLog:f,stopScope:(e=`scope.stop(): scoped effects 已停止`)=>{if(!d?.active){f(`当前没有 active scope`);return}d.stop(),f(e)},startScope:()=>{d?.active&&d.stop();let e=u?.active?u.run(()=>i()):i(!0);if(!e){f(`创建 scope 失败`);return}d=e,r.value=0,s.value=`active`,a.value=`scope.run() 正在建立依赖`,f(`effectScope().run(): 开始捕获 computed 与 watchEffect`),e.run(()=>{let i=S(`computed:1:6`,()=>n(()=>t.get()*2));S(`watchEffect:1:7`,()=>g(()=>{let n=v();a.value=n===e?`count=${t.get()} doubled=${i.get()} scope=same`:`watchEffect 没有读到创建时的 scope`}));let c=setInterval(()=>{r.value+=1},1e3);o(()=>{clearInterval(c),s.value=`stopped`,f(`onScopeDispose: interval 已清理`)})})},incrementCount:()=>{t.set(t.get()+1)},stateLabel:S(`computed:1:8`,()=>n(()=>s.value===`active`?`active`:s.value===`stopped`?`stopped`:`idle`)),scope:d}})),{activeTab:O,count:k,heartbeat:A,scopedText:te,scopeState:ne,logs:re,ownerScope:ie,pushLog:j,stopScope:ae,startScope:oe,incrementCount:se,stateLabel:M}=D,{scope:N}=D;return y(e=>{let n=c(),i=s(`rue:component:anchor`);return h(n,i),b(x(w,{children:y(()=>{let e=c(),n=m(`h1`,e);h(e,n),a(n,`text-5xl font-semibold mb-4 md:mb-4`),h(n,d(`effectScope 批量停止`));let i=m(`div`,e);h(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let o=m(`button`,i);h(i,o),t(o,`role`,`tab`),g(()=>{a(o,`tab ${O.value===`preview`?`tab-active`:``}`)}),f(o,`click`,()=>{O.value=`preview`}),h(o,d(`效果`));let l=m(`button`,i);h(i,l),t(l,`role`,`tab`),g(()=>{a(l,`tab ${O.value===`code`?`tab-active`:``}`)}),f(l,`click`,()=>{O.value=`code`}),h(l,d(`代码`));let p=m(`div`,e);h(e,p),a(p,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let v=s(`rue:slot:anchor`);h(p,v),g(()=>{let e=O.value===`code`?y(()=>{let e=c(),t=m(`div`,e);h(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=m(`div`,t);h(t,n),a(n,`card-body p-0`);let r=s(`rue:component:anchor`);return h(n,r),g(()=>{let e=x(C,{className:`h-full`,lang:`tsx`,code:E});_(()=>b(e,n,r))}),e}):``;_(()=>b(e,p,v))}),h(p,d(` `));let S=s(`rue:slot:anchor`);return h(p,S),g(()=>{let e=O.value===`preview`?y(()=>{let e=c(),n=m(`div`,e);h(e,n),a(n,`card bg-base-100 shadow`);let i=m(`div`,n);h(n,i),a(i,`card-body gap-5`);let o=m(`div`,i);h(i,o),a(o,`flex flex-wrap items-center justify-between gap-3`);let l=m(`div`,o);h(o,l);let p=m(`p`,l);h(l,p),a(p,`text-sm text-base-content/60`),h(p,d(`停止 scope 后，源数据仍会变化，但 scoped watchEffect 不再运行`));let v=m(`h2`,l);h(l,v),a(v,`text-2xl font-semibold`),h(v,d(`Manual scope session`));let x=m(`span`,o);h(o,x),a(x,`badge badge-soft`),h(x,d(`scope: `));let S=s(`rue:slot:anchor`);h(x,S),g(()=>{let e=M.get();_(()=>b(e,x,S))});let C=m(`div`,i);h(i,C),a(C,`flex flex-wrap gap-3`);let w=m(`button`,C);h(C,w),a(w,`btn btn-primary`),f(w,`click`,oe);let T=u(w);h(w,T),g(()=>{r(T,ne.value===`active`?`重启 scope`:`启动 scope`)});let E=m(`button`,C);h(C,E),a(E,`btn`),f(E,`click`,se),h(E,d(`count + 1`));let D=m(`button`,C);h(C,D),a(D,`btn btn-outline`),f(D,`click`,()=>ae()),h(D,d(`停止 scope`));let O=m(`div`,i);h(i,O),a(O,`grid gap-3 md:grid-cols-3`);let j=m(`div`,O);h(O,j),a(j,`rounded-box border border-base-300 bg-base-200 p-4`);let N=m(`p`,j);h(j,N),a(N,`text-sm text-base-content/60`),h(N,d(`源 signal`));let P=m(`p`,j);h(j,P),a(P,`mt-1 text-3xl font-semibold`);let F=s(`rue:slot:anchor`);h(P,F),g(()=>{let e=k.get();_(()=>b(e,P,F))});let I=m(`div`,O);h(O,I),a(I,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let L=m(`p`,I);h(I,L),a(L,`text-sm text-base-content/60`),h(L,d(`scoped watchEffect 输出`));let R=m(`p`,I);h(I,R),a(R,`mt-1 font-mono text-sm`);let z=u(R);h(R,z),g(()=>{r(z,te.value)});let B=m(`div`,O);h(O,B),a(B,`rounded-box border border-base-300 bg-base-200 p-4`);let V=m(`p`,B);h(B,V),a(V,`text-sm text-base-content/60`),h(V,d(`cleanup timer`));let H=m(`p`,B);h(B,H),a(H,`mt-1 text-3xl font-semibold`);let U=u(H);h(H,U),g(()=>{r(U,A.value)});let W=m(`div`,O);h(O,W),a(W,`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`);let G=m(`p`,W);h(W,G),a(G,`text-sm text-base-content/60`),h(G,d(`当前组件 scope`));let K=m(`p`,W);h(W,K),a(K,`mt-1 font-mono text-sm`);let q=u(K);h(K,q),g(()=>{r(q,ie?.active?`page owner scope active`:`no owner scope captured`)});let J=m(`div`,i);h(i,J),a(J,`rounded-box bg-base-200 p-4`);let Y=m(`h3`,J);h(J,Y),a(Y,`font-semibold`),h(Y,d(`运行记录`));let X=m(`div`,J);h(J,X),a(X,`mt-3 space-y-2`);let Z=s(`rue:list:start`),Q=s(`rue:list:end`);h(X,Z),h(X,Q);let $=new Map;return g(()=>{$=ee({items:re.value||[],getKey:(e,t)=>e,elements:$,parent:X,before:Q,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(e,n,i,o,s)=>{b(y(()=>{let n=c(),i=m(`p`,n);h(n,i),a(i,`rounded-box bg-base-100 px-3 py-2 text-sm`),g(()=>{t(i,`key`,String(e))});let o=u(i);return h(i,o),g(()=>{r(o,e)}),n}),n,i)}})}),e}):``;_(()=>b(e,p,S))}),e})}),n,i),n})};export{D as default};