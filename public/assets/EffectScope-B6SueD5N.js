import{An as e,Dn as t,E as n,Mn as r,Nn as i,On as a,P as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,b as f,gn as p,in as m,mn as h,nt as g,pn as _,rt as v,sn as y,st as b,tn as x,tt as S,vn as C,w as ee,wn as w,x as T,xn as E,xt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./Code-DpH7u0gk.js";import{r as k}from"./SidebarPlaygroundExample-BCPRe0hA.js";var A=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">effectScope 批量停止</h1>`),j=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),N=()=>new Date().toLocaleTimeString(),P=`import {
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

export default EffectScopeCopyableDemo;`,F=()=>{let F=y(`useSetup:0:0`,()=>m(()=>{let t=x(`preview`),n=a(1),s=x(0),l=x(`scope 尚未启动`),u=x(`idle`),d=x([{id:0,text:`点击“启动 scope”，创建一组可批量停止的响应式副作用`}]),f=i(),p,m=1,h,g=e=>{d.value=[{id:m++,text:`${N()} ${e}`},...d.value.filter(e=>!e.text.includes(`点击“启动 scope”`))].slice(0,7)},_=()=>p?.active?(p.stop(),h?.(),!0):!1,v=(e=`scope.stop(): scoped effects 已停止`)=>{if(!_()){g(`当前没有 active scope`);return}g(e)},b=()=>{_();let t=f?.active?f.run(()=>r()):r(!0);if(!t){g(`创建 scope 失败`);return}p=t,s.value=0,u.value=`active`,l.value=`scope.run() 正在建立依赖`,g(`effectScope().run(): 开始捕获 computed 与 watchEffect`),t.run(()=>{let r=y(`computed:1:6`,()=>o(()=>n.get()*2));y(`watchEffect:1:7`,()=>e(()=>{let e=i();l.value=e===t?`count=${n.get()} doubled=${r.get()} scope=same`:`watchEffect 没有读到创建时的 scope`}));let a=setInterval(()=>{s.value+=1},1e3);h=()=>{clearInterval(a),h=void 0,u.value=`stopped`,g(`onScopeDispose: interval 已清理`)}})},S=()=>{n.set(n.get()+1)};c(()=>{_()});let C=o(()=>u.value===`active`?`active`:u.value===`stopped`?`stopped`:`idle`);return C.get(),{activeTab:t,count:n,heartbeat:s,scopedText:l,scopeState:u,logs:d,ownerScope:f,pushLog:g,stopActiveScope:_,stopScope:v,startScope:b,incrementCount:S,stateLabel:C,__rue_phase2_stateLabel:C,scope:p,nextLogId:m,clearScopeTimer:h}})),{activeTab:I,count:L,heartbeat:R,scopedText:z,scopeState:B,logs:te,ownerScope:ne,pushLog:V,stopActiveScope:H,stopScope:re,startScope:ie,incrementCount:ae,stateLabel:oe,__rue_phase2_stateLabel:U}=F,{scope:W,nextLogId:G,clearScopeTimer:K}=F;return v(k,()=>({children:[(e,t,r)=>n(e,r,()=>l(Object.assign(e=>{let t=d();return t.appendChild(A().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>n(e,r,()=>l(Object.assign(e=>{let t=d(),n=j().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),D(i,`role`,`tab`),w(()=>{s(i,`tab ${I.value===`preview`?`tab-active`:``}`)});let o=e=>{let t=()=>{I.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,o),c(()=>i.removeEventListener(`click`,o)),D(a,`role`,`tab`),w(()=>{s(a,`tab ${I.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{I.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,i)=>n(e,i,()=>l(Object.assign(e=>{let n=d(),r=M().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=a.parentNode,s=i.childNodes[1],c=s.parentNode;return n.appendChild(r),g(o,a,()=>{let e=I.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=p(`div`,t);return _(t,n),n.className=`card-body p-0`,b(n,O,()=>({className:`h-full`,lang:`tsx`,code:P})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),g(c,s,()=>{let e=I.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let n=p(`div`,e);n.className=`card bg-base-100 shadow`;let r=p(`div`,n);_(n,r),r.className=`card-body gap-5`;let i=p(`div`,r);_(r,i),i.className=`flex flex-wrap items-center justify-between gap-3`;let a=p(`div`,i);_(i,a);let o=p(`p`,a);_(a,o),o.className=`text-sm text-base-content/60`,_(o,u(`停止 scope 后，源数据仍会变化，但 scoped watchEffect 不再运行`));let s=p(`h2`,a);_(a,s),s.className=`text-2xl font-semibold`,_(s,u(`Manual scope session`));let c=p(`span`,i);_(i,c),c.className=`badge badge-soft`,_(c,u(`scope: `));let d=u(``);_(c,d),E(d,()=>oe.get());let m=p(`div`,r);_(r,m),m.className=`flex flex-wrap gap-3`;let g=p(`button`,m);_(m,g),g.className=`btn btn-primary`;let v=e=>{let t=ie;typeof t==`function`&&t(e)};g.addEventListener(`click`,v),t(()=>g.removeEventListener(`click`,v));let y=u(``);_(g,y),E(y,()=>B.value===`active`?`重启 scope`:`启动 scope`);let b=p(`button`,m);_(m,b),b.className=`btn`;let x=e=>{let t=ae;typeof t==`function`&&t(e)};b.addEventListener(`click`,x),t(()=>b.removeEventListener(`click`,x)),_(b,u(`count + 1`));let D=p(`button`,m);_(m,D),D.className=`btn btn-outline`;let O=e=>{let t=()=>re();typeof t==`function`&&t(e)};D.addEventListener(`click`,O),t(()=>D.removeEventListener(`click`,O)),_(D,u(`停止 scope`));let k=p(`div`,r);_(r,k),k.className=`grid gap-3 md:grid-cols-3`;let A=p(`div`,k);_(k,A),A.className=`rounded-box border border-base-300 bg-base-200 p-4`;let j=p(`p`,A);_(A,j),j.className=`text-sm text-base-content/60`,_(j,u(`源 signal`));let M=p(`p`,A);_(A,M),M.className=`mt-1 text-3xl font-semibold`;let N=u(``);_(M,N),E(N,()=>L.get());let P=p(`div`,k);_(k,P),P.className=`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`;let F=p(`p`,P);_(P,F),F.className=`text-sm text-base-content/60`,_(F,u(`scoped watchEffect 输出`));let I=p(`p`,P);_(P,I),I.className=`mt-1 font-mono text-sm`;let V=u(``);_(I,V),E(V,()=>z.value);let H=p(`div`,k);_(k,H),H.className=`rounded-box border border-base-300 bg-base-200 p-4`;let U=p(`p`,H);_(H,U),U.className=`text-sm text-base-content/60`,_(U,u(`cleanup timer`));let W=p(`p`,H);_(H,W),W.className=`mt-1 text-3xl font-semibold`;let G=u(``);_(W,G),E(G,()=>R.value);let K=p(`div`,k);_(k,K),K.className=`rounded-box border border-base-300 bg-base-200 p-4 md:col-span-2`;let q=p(`p`,K);_(K,q),q.className=`text-sm text-base-content/60`,_(q,u(`当前组件 scope`));let J=p(`p`,K);_(K,J),J.className=`mt-1 font-mono text-sm`,S(()=>ne?.active?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=u(`page owner scope active`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=u(`no owner scope captured`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(J);let Y=p(`div`,r);_(r,Y),Y.className=`rounded-box bg-base-200 p-4`;let X=p(`h3`,Y);_(Y,X),X.className=`font-semibold`,_(X,u(`运行记录`));let Z=p(`div`,Y);_(Y,Z),Z.className=`mt-3 space-y-2`;let se=C(`<p class="rounded-box bg-base-100 px-3 py-2 text-sm"><!--rue:text-hole:0--></p>`),Q=h(`rue:list:end`);_(Z,Q);let $=[];return w(()=>{let e=te.value||[];$=ee(Z,Q,$,e,(e,t)=>e.id,(e,t,n)=>{let r=e,i;return T(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=u(``);a.insertBefore(o,n),a.removeChild(n);let s;{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}return i=()=>{{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>f($)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]}))};export{F as default};