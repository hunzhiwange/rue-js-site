import{At as e,Dn as t,E as n,Q as r,Qt as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,et as d,gn as f,kn as p,mn as m,nt as h,pn as g,qt as _,rt as v,st as y,tn as b,tt as x,ut as S,vn as C,w,wn as T,x as E,xn as D,xt as O}from"./rue-runtime-HIMg8Lz8.js";import{t as k}from"./Code-DpH7u0gk.js";import{r as A}from"./SidebarPlaygroundExample-BCPRe0hA.js";var j=C(`<div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between gap-4"><div><p class="text-sm text-base-content/60">当前作用域</p><h2 class="text-2xl font-semibold">Scoped timer</h2></div><div class="badge badge-primary badge-lg">active</div></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Tick</p><p class="text-3xl font-semibold"><!--rue:text-hole:0--></p></div><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Started</p><p class="text-2xl font-semibold"><!--rue:text-hole:1--></p></div></div></div>`),M=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onScopeDispose 作用域清理</h1>`),N=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),F=()=>new Date().toLocaleTimeString(),I=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},L=t=>{let n=c(t.onDispose),r=b(0),a=F(),o=setInterval(()=>{r.value+=1},1e3);return i(()=>{o!==void 0&&clearInterval(o),!I()&&n.get()(`清理 timer：运行 ${r.value} 次，开始于 ${a}`)}),_(()=>u(e(()=>{let e=s(),t=j().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],o=i.parentNode,c=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],l=c.parentNode;return e.appendChild(t),T(()=>{let e=r.value;p(()=>S(e,o,i))}),T(()=>{let e=a;p(()=>S(e,l,c))}),e},!0),e=>d(()=>{n.set(e.onDispose)}),()=>t))},R=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,z=()=>{let e=b(`preview`),c=b(!0),p=b([]),S=0,j=e=>{p.value=[{id:S++,message:`${F()} ${e}`},...p.value].slice(0,5)};return _(()=>u(v(A,()=>({children:[(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,o,c)=>n(t,c,()=>a(Object.assign(t=>{let n=s(),a=N().content.cloneNode(!0),o=a.firstChild,c=o.childNodes[0],l=o.childNodes[1];n.appendChild(a),O(c,`role`,`tab`),T(()=>{r(c,`tab ${e.value===`preview`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};c.addEventListener(`click`,u),i(()=>c.removeEventListener(`click`,u)),O(l,`role`,`tab`),T(()=>{r(l,`tab ${e.value===`code`?`tab-active`:``}`)});let d=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return l.addEventListener(`click`,d),i(()=>l.removeEventListener(`click`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(r,i,u)=>n(r,u,()=>a(Object.assign(n=>{let r=s(),i=P().content.cloneNode(!0),u=i.firstChild,d=u.childNodes[0],_=d.parentNode,b=u.childNodes[1],S=b.parentNode;return r.appendChild(i),h(_,d,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=f(`div`,t);return g(t,n),n.className=`card-body p-0`,y(n,k,()=>({className:`h-full`,lang:`tsx`,code:R})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>a(Object.assign(e=>{let n=o(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),h(S,b,()=>{let n=e.value===`preview`;return n?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let n=f(`div`,e);n.className=`card bg-base-100 shadow`;let r=f(`div`,n);g(n,r),r.className=`card-body gap-5`;let i=f(`div`,r);g(r,i),i.className=`flex flex-wrap items-center justify-between gap-3`;let u=f(`div`,i);g(i,u);let d=f(`p`,u);g(u,d),d.className=`text-sm text-base-content/60`,g(d,o(`切换子组件，观察作用域释放`));let h=f(`h2`,u);g(u,h),h.className=`text-2xl font-semibold`,g(h,o(`Composable cleanup demo`));let _=f(`button`,i);g(i,_);let y;T(()=>{let e=`btn ${c.value?`btn-outline`:`btn-primary`}`,t=e==null?``:String(e);Object.is(y,t)||(y=t,_.className=t)});let b=e=>{let t=()=>{c.value=!c.value};typeof t==`function`&&t(e)};_.addEventListener(`click`,b),t(()=>_.removeEventListener(`click`,b));let S=o(``);g(_,S),D(S,()=>c.value?`卸载子作用域`:`重新挂载子作用域`),x(()=>c.value?{__rue_compiled_branch_key:!0,create:()=>v(L,()=>({onDispose:j}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=f(`div`,e);return t.className=`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`,g(t,o(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(r);let O=f(`div`,r);g(r,O),O.className=`rounded-box bg-base-200 p-4`;let k=f(`h3`,O);g(O,k),k.className=`font-semibold`,g(k,o(`清理日志`));let A=f(`div`,O);return g(O,A),A.className=`mt-3 space-y-2`,x(()=>p.value.length===0?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=f(`p`,e);return t.className=`text-sm text-base-content/60`,g(t,o(`还没有清理记录。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let n=s(),r=C(`<p class="rounded-box bg-base-100 px-3 py-2 text-sm" data-cleanup-log="true"><!--rue:text-hole:0--></p>`),i=m(`rue:list:end`);g(n,i);let a=[];return T(()=>{let e=p.value||[];a=w(i.parentNode,i,a,e,(e,t)=>e.id,(e,t,n)=>{let i=e,a;return E(e=>{let t=r().content.cloneNode(!0).firstChild,n=t.childNodes[0],s=n.parentNode,c=o(``);s.insertBefore(c,n),s.removeChild(n);let l;{let e=i.message==null||typeof i.message==`boolean`?``:String(i.message);Object.is(l,e)||(c.textContent=e,l=e)}return a=()=>{{let e=i.message==null||typeof i.message==`boolean`?``:String(i.message);Object.is(l,e)||(c.textContent=e,l=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,r)=>{e=n,t=r,i=n,a()},n)})}),t(()=>l(a)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(A),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof n==`number`||typeof n==`bigint`?{__rue_compiled_branch_key:n,create:()=>a(Object.assign(e=>{let t=o(typeof n==`string`||typeof n==`number`||typeof n==`bigint`?n:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>d(()=>{})))};export{z as default};