import{B as e,Bt as t,C as n,Dn as r,Et as i,H as a,K as o,L as s,Lt as c,Mt as l,S as u,V as d,W as f,Y as p,_n as m,bn as h,fn as g,gn as _,hn as v,ht as y,kn as b,nt as x,ot as S,pn as C,q as w,wn as T,x as E,z as D}from"./rue-runtime-CwEGJ854.js";import{t as O}from"./Code-B3jCYMAr.js";import{r as k}from"./SidebarPlaygroundExample-EGR0CyDT.js";var A=m(`<div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between gap-4"><div><p class="text-sm text-base-content/60">当前作用域</p><h2 class="text-2xl font-semibold">Scoped timer</h2></div><div class="badge badge-primary badge-lg">active</div></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Tick</p><p class="text-3xl font-semibold"><!--rue:text-hole:0--></p></div><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Started</p><p class="text-2xl font-semibold"><!--rue:text-hole:1--></p></div></div></div>`),j=m(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onScopeDispose 作用域清理</h1>`),M=m(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=m(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=()=>new Date().toLocaleTimeString(),F=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},I=e=>{let n=f(e.onDispose),r=t(0),i=P(),a=setInterval(()=>{r.value+=1},1e3);return c(()=>{a!==void 0&&clearInterval(a),!F()&&n.get()(`清理 timer：运行 ${r.value} 次，开始于 ${i}`)}),l(()=>w(y(()=>{let e=x(),t=A().content.cloneNode(!0),n=t.firstChild,a=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],c=s.parentNode;return e.appendChild(t),T(()=>{let e=r.value;b(()=>p(e,o,a))}),T(()=>{let e=i;b(()=>p(e,c,s))}),e},!0),e=>D(()=>{n.set(e.onDispose)}),()=>e))},L=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

type ScopedTimerProps = {
  onDispose: (message: string) => void;
};

type CleanupLog = {
  id: number;
  message: string;
};

const ScopedTimer: FC<ScopedTimerProps> = props => {
  const ticks = ref(0);
  const startedAt = new Date().toLocaleTimeString();

  const timer = import.meta.env.SSR
    ? undefined
    : setInterval(() => {
        ticks.value += 1;
      }, 1000);

  onScopeDispose(() => {
    if (timer !== undefined) clearInterval(timer);
    props.onDispose(\`清理 timer：运行 \${ticks.value} 次，开始于 \${startedAt}\`);
  });

  return <div>Tick: {ticks.value}</div>;
};

/** 控制 ScopedTimer 挂载状态并展示 dispose 日志的示例主体。 */
const OnScopeDisposeDemo: FC = () => {
  const visible = ref(true);
  const logs = ref<CleanupLog[]>([]);
  let nextLogId = 0;

  const addLog = (message: string) => {
    logs.value = [{ id: nextLogId++, message }, ...logs.value].slice(0, 5);
  };

  return (
    <section>
      <button onClick={() => (visible.value = !visible.value)}>
        {visible.value ? '卸载子作用域' : '重新挂载子作用域'}
      </button>
      {visible.value && <ScopedTimer onDispose={addLog} />}
      {logs.value.map(log => <p key={log.id}>{log.message}</p>)}
    </section>
  );
};

export default OnScopeDisposeDemo;`,R=()=>{let p=t(`preview`),m=t(!0),y=t([]),b=0,A=e=>{y.value=[{id:b++,message:`${P()} ${e}`},...y.value].slice(0,5)};return l(()=>w(a(k,()=>({children:[(e,t,n)=>E(e,n,()=>i(Object.assign(e=>{let t=x();return t.appendChild(j().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>E(e,n,()=>i(Object.assign(e=>{let t=x(),n=M().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),S(i,`role`,`tab`),T(()=>{s(i,`tab ${p.value===`preview`?`tab-active`:``}`)});let o=e=>{let t=()=>{p.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,o),c(()=>i.removeEventListener(`click`,o)),S(a,`role`,`tab`),T(()=>{s(a,`tab ${p.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{p.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,s,c)=>E(t,c,()=>i(Object.assign(t=>{let s=x(),c=N().content.cloneNode(!0),l=c.firstChild,b=l.childNodes[0],S=b.parentNode,w=l.childNodes[1],D=w.parentNode;return s.appendChild(c),d(S,b,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=v(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=v(`div`,t);return g(t,n),n.className=`card-body p-0`,o(n,O,()=>({className:`h-full`,lang:`tsx`,code:L})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(D,w,()=>{let t=p.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let o=v(`div`,t);o.className=`card bg-base-100 shadow`;let s=v(`div`,o);g(o,s),s.className=`card-body gap-5`;let c=v(`div`,s);g(s,c),c.className=`flex flex-wrap items-center justify-between gap-3`;let l=v(`div`,c);g(c,l);let d=v(`p`,l);g(l,d),d.className=`text-sm text-base-content/60`,g(d,_(`切换子组件，观察作用域释放`));let p=v(`h2`,l);g(l,p),p.className=`text-2xl font-semibold`,g(p,_(`Composable cleanup demo`));let b=v(`button`,c);g(c,b);let S;T(()=>{let e=`btn ${m.value?`btn-outline`:`btn-primary`}`,t=e==null?``:String(e);Object.is(S,t)||(S=t,b.className=t)});let w=e=>{let t=()=>{m.value=!m.value};typeof t==`function`&&t(e)};b.addEventListener(`click`,w),r(()=>b.removeEventListener(`click`,w));let D=_(``);g(b,D),h(D,()=>m.value?`卸载子作用域`:`重新挂载子作用域`),e(()=>m.value?{__rue_compiled_branch_key:!0,create:()=>a(I,()=>({onDispose:A}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=v(`div`,e);return t.className=`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`,g(t,_(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(s);let O=v(`div`,s);g(s,O),O.className=`rounded-box bg-base-200 p-4`;let k=v(`h3`,O);g(O,k),k.className=`font-semibold`,g(k,_(`清理日志`));let j=v(`div`,O);return g(O,j),j.className=`mt-3 space-y-2`,e(()=>y.value.length===0?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=v(`p`,e);return t.className=`text-sm text-base-content/60`,g(t,_(`还没有清理记录。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=x(),r=C(`rue:list:end`);g(t,r);let a=[];return T(()=>{let e=y.value||[];a=n(r.parentNode,r,a,e,(e,t)=>e.id,(e,t)=>{let n=f(e),r=f(t);return u((e,t,r)=>E(e,r,()=>i(Object.assign(e=>{let t=v(`p`,e);t.className=`rounded-box bg-base-100 px-3 py-2 text-sm`,t.setAttribute(`data-cleanup-log`,`true`);let r=_(``);return g(t,r),h(r,()=>n.get().message),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(j),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=_(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})))]})),e=>D(()=>{})))};export{R as default};