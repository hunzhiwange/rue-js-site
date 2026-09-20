import{Bt as e,H as t,Ht as n,N as r,Qt as i,U as a,Ut as o,V as s,Vt as c,Wt as l,Y as u,_t as d,en as f,f as p,fn as m,g as h,gn as g,gt as _,hn as v,in as y,j as b,m as x,mn as S,pn as C,qt as w,sn as T,st as E,u as D,vt as O,yn as k,yt as A,zt as j}from"./rue-runtime-Cv6BZekS.js";import{t as M}from"./Code-BzFVdc3U.js";import{r as N}from"./SidebarPlaygroundExample-rFyhXfC_.js";var P=k(`<div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between gap-4"><div><p class="text-sm text-base-content/60">当前作用域</p><h2 class="text-2xl font-semibold">Scoped timer</h2></div><div class="badge badge-primary badge-lg">active</div></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Tick</p><p class="text-3xl font-semibold">rue:direct-text</p></div><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Started</p><p class="text-2xl font-semibold"><!--rue:text-hole:1--></p></div></div></div>`),F=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onScopeDispose 作用域清理</h1>`),I=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=()=>new Date().toLocaleTimeString(),z=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},B=(t,n,r)=>{let i=O(_(t,`onDispose`)),o=E(0),s=R(),c=setInterval(()=>{o.value+=1},1e3);return T(()=>{c!==void 0&&clearInterval(c),!z()&&i.get()(`清理 timer：运行 ${o.value} 次，开始于 ${s}`)}),u(()=>a(l(()=>{let t=S(),n=P().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,c=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],l=c.parentNode,u=C(`rue:text-hole:0`);a.replaceChild(u,i),t.appendChild(n),e({parent:a,before:u},()=>j(o.value),()=>({})),e({parent:l,before:c},()=>j(s),()=>({}));let d=g(``),f=g(``);return t.insertBefore(d,t.firstChild),t.appendChild(f),[t.firstChild,t.lastChild]}),e=>f(()=>{i.set(e.onDispose)}),()=>d(t)))},V=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,H=(e,a,d)=>{let f=E(`preview`),_=E(!0),O=E([]),j=0,P=e=>{O.value=[{id:j++,message:`${R()} ${e}`},...O.value].slice(0,5)};return u(()=>s(N,()=>({children:(e,a,u)=>{let d=()=>l(e=>{let a=S();a.appendChild(F().content.cloneNode(!0));let c=I().content.cloneNode(!0),u=c.firstChild,d=u.childNodes[0],E=u.childNodes[1];a.appendChild(c),d.setAttribute(`role`,`tab`);let j;y(()=>{let e=`tab ${f.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,d.setAttribute(`class`,t))}),T(D(e,d,`click`,()=>()=>{f.value=`preview`})),E.setAttribute(`role`,`tab`);let N;y(()=>{let e=`tab ${f.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,E.setAttribute(`class`,t))}),T(D(e,E,`click`,()=>()=>{f.value=`code`}));let R=L().content.cloneNode(!0),z=R.firstChild,H=z.childNodes[0],U=H.parentNode,W=z.childNodes[1],G=W.parentNode;a.appendChild(R),o(U,H,()=>{let e=f.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let n=v(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=v(`div`,n);return m(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,M,()=>({className:`h-full`,lang:`tsx`,code:V})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>A(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=S();return[t.firstChild,t.lastChild]})}}),o(G,W,()=>{let e=f.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let a=v(`div`,t);m(t,a),a.setAttribute(`class`,`card-body gap-5`);let o=v(`div`,a);m(a,o),o.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let c=v(`div`,o);m(o,c);let u=v(`p`,c);m(c,u),u.setAttribute(`class`,`text-sm text-base-content/60`),m(u,g(`切换子组件，观察作用域释放`));let d=v(`h2`,c);m(c,d),d.setAttribute(`class`,`text-2xl font-semibold`),m(d,g(`Composable cleanup demo`));let f=v(`button`,o);m(o,f);let b;y(()=>{let e=`btn ${_.value?`btn-outline`:`btn-primary`}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,f.setAttribute(`class`,t))}),r(D(e,f,`click`,()=>()=>{_.value=!_.value}));let E=g(``);m(f,E),i(E,()=>_.value?`卸载子作用域`:`重新挂载子作用域`),n(()=>_.value?{__rue_compiled_branch_key:!0,create:()=>s(B,()=>({onDispose:P}))}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=v(`div`,e);return t.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),m(t,g(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),[t,t]})}).__rue_compiled_mount(a);let j=v(`div`,a);m(a,j),j.setAttribute(`class`,`rounded-box bg-base-200 p-4`);let M=v(`h3`,j);m(j,M),M.setAttribute(`class`,`font-semibold`),m(M,g(`清理日志`));let N=v(`div`,j);return m(j,N),N.setAttribute(`class`,`mt-3 space-y-2`),n(()=>O.value.length===0?{__rue_compiled_branch_key:!0,create:()=>A(e=>{let t=v(`p`,e);return t.setAttribute(`class`,`text-sm text-base-content/60`),m(t,g(`还没有清理记录。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=S(),n=k(`<p class="rounded-box bg-base-100 px-3 py-2 text-sm" data-cleanup-log="true"><!--rue:text-hole:0--></p>`),r=C(`rue:list:end`);m(t,r);let i=[];w(()=>{let e=O.value||[];i=h(r.parentNode,r,i,e,(e,t)=>e.id,(e,t,r)=>{let i=e,a;return x(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0],o=r.parentNode,s=g(``);o.insertBefore(s,r),o.removeChild(r);let c=i.message==null||typeof i.message==`boolean`?``:String(i.message);return s.textContent=c,a=()=>{{let e=i.message==null||typeof i.message==`boolean`?``:String(i.message);Object.is(c,e)||(s.textContent=e,c=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,r)},!1,!0)}),T(()=>p(i));let a=g(``),o=g(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}).__rue_compiled_mount(N),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>A(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=S();return[t.firstChild,t.lastChild]})}});let K=g(``),q=g(``);return a.insertBefore(K,a.firstChild),a.appendChild(q),[a.firstChild,a.lastChild]});return e==null?d():c(e,u,d)}})))};export{H as default};