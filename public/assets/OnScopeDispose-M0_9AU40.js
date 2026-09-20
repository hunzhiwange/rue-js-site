import{B as e,Bt as t,F as n,G as r,Ht as i,I as a,P as o,Qt as s,Ut as c,V as l,Vt as u,W as d,Wt as f,en as p,f as m,fn as h,g,gn as _,hn as v,in as y,m as b,mn as x,mt as S,nt as C,pn as w,q as T,qt as E,sn as D,u as O,yn as k,z as A,zt as j}from"./rue-runtime-BWbIfNT8.js";import{t as M}from"./Code-C5ZhIIr9.js";import{r as N}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var P=k(`<div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between gap-4"><div><p class="text-sm text-base-content/60">当前作用域</p><h2 class="text-2xl font-semibold">Scoped timer</h2></div><div class="badge badge-primary badge-lg">active</div></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Tick</p><p class="text-3xl font-semibold">rue:direct-text</p></div><div class="rounded-box bg-base-200 p-4"><p class="text-sm text-base-content/60">Started</p><p class="text-2xl font-semibold"><!--rue:text-hole:1--></p></div></div></div>`),F=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onScopeDispose 作用域清理</h1>`),I=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=()=>new Date().toLocaleTimeString(),z=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},B=(n,r,i)=>{let o=d(A(n,`onDispose`)),s=S(0),c=R(),l=setInterval(()=>{s.value+=1},1e3);return D(()=>{l!==void 0&&clearInterval(l),!z()&&o.get()(`清理 timer：运行 ${s.value} 次，开始于 ${c}`)}),C(()=>a(f(()=>{let e=x(),n=P().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],l=o.parentNode,u=w(`rue:text-hole:0`);a.replaceChild(u,i),e.appendChild(n),t({parent:a,before:u},()=>j(s.value),()=>({})),t({parent:l,before:o},()=>j(c),()=>({}));let d=_(``),f=_(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]}),e=>p(()=>{o.set(e.onDispose)}),()=>e(n)))},V=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,H=(e,t,a)=>{let d=S(`preview`),p=S(!0),A=S([]),j=0,P=e=>{A.value=[{id:j++,message:`${R()} ${e}`},...A.value].slice(0,5)};return C(()=>o(N,()=>({children:(e,t,a)=>{let S=()=>f(e=>{let t=x();t.appendChild(F().content.cloneNode(!0));let a=I().content.cloneNode(!0),u=a.firstChild,S=u.childNodes[0],C=u.childNodes[1];t.appendChild(a),S.setAttribute(`role`,`tab`);let j;y(()=>{let e=`tab ${d.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,S.setAttribute(`class`,t))}),D(O(e,S,`click`,()=>()=>{d.value=`preview`})),C.setAttribute(`role`,`tab`);let N;y(()=>{let e=`tab ${d.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,C.setAttribute(`class`,t))}),D(O(e,C,`click`,()=>()=>{d.value=`code`}));let R=L().content.cloneNode(!0),z=R.firstChild,H=z.childNodes[0],U=H.parentNode,W=z.childNodes[1],G=W.parentNode;t.appendChild(R),c(U,H,()=>{let e=d.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=v(`div`,t);return h(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,M,()=>({className:`h-full`,lang:`tsx`,code:V})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=x();return[t.firstChild,t.lastChild]})}}),c(G,W,()=>{let e=d.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>r(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=v(`div`,t);h(t,n),n.setAttribute(`class`,`card-body gap-5`);let r=v(`div`,n);h(n,r),r.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let a=v(`div`,r);h(r,a);let c=v(`p`,a);h(a,c),c.setAttribute(`class`,`text-sm text-base-content/60`),h(c,_(`切换子组件，观察作用域释放`));let u=v(`h2`,a);h(a,u),u.setAttribute(`class`,`text-2xl font-semibold`),h(u,_(`Composable cleanup demo`));let d=v(`button`,r);h(r,d);let S;y(()=>{let e=`btn ${p.value?`btn-outline`:`btn-primary`}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,d.setAttribute(`class`,t))}),T(O(e,d,`click`,()=>()=>{p.value=!p.value}));let C=_(``);h(d,C),s(C,()=>p.value?`卸载子作用域`:`重新挂载子作用域`),i(()=>p.value?{__rue_compiled_branch_key:!0,create:()=>o(B,()=>({onDispose:P}))}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v(`div`,e);return t.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),h(t,_(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),[t,t]})}).__rue_compiled_mount(n);let j=v(`div`,n);h(n,j),j.setAttribute(`class`,`rounded-box bg-base-200 p-4`);let M=v(`h3`,j);h(j,M),M.setAttribute(`class`,`font-semibold`),h(M,_(`清理日志`));let N=v(`div`,j);return h(j,N),N.setAttribute(`class`,`mt-3 space-y-2`),i(()=>A.value.length===0?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v(`p`,e);return t.setAttribute(`class`,`text-sm text-base-content/60`),h(t,_(`还没有清理记录。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>f(e=>{let t=x(),n=k(`<p class="rounded-box bg-base-100 px-3 py-2 text-sm" data-cleanup-log="true"><!--rue:text-hole:0--></p>`),r=w(`rue:list:end`);h(t,r);let i=[];E(()=>{let e=A.value||[];i=g(r.parentNode,r,i,e,(e,t)=>e.id,(e,t,r)=>{let i=e,a;return b(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0],o=r.parentNode,s=_(``);o.insertBefore(s,r),o.removeChild(r);let c=i.message==null||typeof i.message==`boolean`?``:String(i.message);return s.textContent=c,a=()=>{{let e=i.message==null||typeof i.message==`boolean`?``:String(i.message);Object.is(c,e)||(s.textContent=e,c=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,r)},!1,!0)}),D(()=>m(i));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}).__rue_compiled_mount(N),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=x();return[t.firstChild,t.lastChild]})}});let K=_(``),q=_(``);return t.insertBefore(K,t.firstChild),t.appendChild(q),[t.firstChild,t.lastChild]});return e==null?S():u(e,a,S)}})))};export{H as default};