import{Cn as e,Ct as t,Mt as n,Tt as r,Wt as i,dt as a,ft as o,ht as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v,n as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=()=>new Date().toLocaleTimeString(),C=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},w=t=>{let{ticks:o,startedAt:l,timer:_}=v(`useSetup:0:0`,()=>e(()=>{let e=v(`ref:1:0`,()=>u(0)),n=S(),r=setInterval(()=>{e.value+=1},1e3);return i(()=>{r!==void 0&&clearInterval(r),!C()&&t.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${n}`)}),{ticks:e,startedAt:n,timer:r}}));return h(e=>{let t=d(`div`,e);r(t,`rounded-box border border-base-300 bg-base-100 p-5`);let i=d(`div`,t);f(t,i),r(i,`flex items-center justify-between gap-4`);let u=d(`div`,i);f(i,u);let h=d(`p`,u);f(u,h),r(h,`text-sm text-base-content/60`),f(h,c(`当前作用域`));let _=d(`h2`,u);f(u,_),r(_,`text-2xl font-semibold`),f(_,c(`Scoped timer`));let v=d(`div`,i);f(i,v),r(v,`badge badge-primary badge-lg`),f(v,c(`active`));let y=d(`div`,t);f(t,y),r(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=d(`div`,y);f(y,b),r(b,`rounded-box bg-base-200 p-4`);let x=d(`p`,b);f(b,x),r(x,`text-sm text-base-content/60`),f(x,c(`Tick`));let S=d(`p`,b);f(b,S),r(S,`text-3xl font-semibold`);let C=s(S);f(S,C),p(()=>{n(C,o.value)});let w=d(`div`,y);f(y,w),r(w,`rounded-box bg-base-200 p-4`);let T=d(`p`,w);f(w,T),r(T,`text-sm text-base-content/60`),f(T,c(`Started`));let E=d(`p`,w);f(w,E),r(E,`text-2xl font-semibold`);let D=a(`rue:slot:anchor`);return f(E,D),p(()=>{let e=l;m(()=>g(e,E,D))}),t})},T=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

type ScopedTimerProps = {
  onDispose: (message: string) => void;
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
  const logs = ref<string[]>([]);

  const addLog = (message: string) => {
    logs.value = [message, ...logs.value].slice(0, 5);
  };

  return (
    <section>
      <button onClick={() => (visible.value = !visible.value)}>
        {visible.value ? '卸载子作用域' : '重新挂载子作用域'}
      </button>
      {visible.value && <ScopedTimer onDispose={addLog} />}
      {logs.value.map(log => <p>{log}</p>)}
    </section>
  );
};

export default OnScopeDisposeDemo;`,E=()=>{let{activeTab:i,visible:C,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>e(()=>{let e=v(`ref:1:1`,()=>u(`preview`)),t=v(`ref:1:2`,()=>u(!0)),n=v(`ref:1:3`,()=>u([]));return{activeTab:e,visible:t,logs:n,addLog:e=>{n.value=[`${S()} ${e}`,...n.value].slice(0,5)}}}));return h(e=>{let u=o(),v=a(`rue:component:anchor`);return f(u,v),g(_(x,{children:h(()=>{let e=o(),u=d(`h1`,e);f(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`onScopeDispose 作用域清理`));let v=d(`div`,e);f(e,v),t(v,`role`,`tablist`),r(v,`tabs tabs-box`);let x=d(`button`,v);f(v,x),t(x,`role`,`tab`),p(()=>{r(x,`tab ${i.value===`preview`?`tab-active`:``}`)}),l(x,`click`,()=>{i.value=`preview`}),f(x,c(`效果`));let S=d(`button`,v);f(v,S),t(S,`role`,`tab`),p(()=>{r(S,`tab ${i.value===`code`?`tab-active`:``}`)}),l(S,`click`,()=>{i.value=`code`}),f(S,c(`代码`));let O=d(`div`,e);f(e,O),r(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=a(`rue:slot:anchor`);f(O,k),p(()=>{let e=i.value===`code`?h(()=>{let e=o(),t=d(`div`,e);f(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);f(t,n),r(n,`card-body p-0`);let i=a(`rue:component:anchor`);return f(n,i),p(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:T});m(()=>g(e,n,i))}),e}):``;m(()=>g(e,O,k))}),f(O,c(` `));let A=a(`rue:slot:anchor`);return f(O,A),p(()=>{let e=i.value===`preview`?h(()=>{let e=o(),i=d(`div`,e);f(e,i),r(i,`card bg-base-100 shadow`);let u=d(`div`,i);f(i,u),r(u,`card-body gap-5`);let v=d(`div`,u);f(u,v),r(v,`flex flex-wrap items-center justify-between gap-3`);let b=d(`div`,v);f(v,b);let x=d(`p`,b);f(b,x),r(x,`text-sm text-base-content/60`),f(x,c(`切换子组件，观察作用域释放`));let S=d(`h2`,b);f(b,S),r(S,`text-2xl font-semibold`),f(S,c(`Composable cleanup demo`));let T=d(`button`,v);f(v,T),p(()=>{r(T,`btn ${C.value?`btn-outline`:`btn-primary`}`)}),l(T,`click`,()=>{C.value=!C.value});let O=s(T);f(T,O),p(()=>{n(O,C.value?`卸载子作用域`:`重新挂载子作用域`)});let k=a(`rue:slot:anchor`);f(u,k),p(()=>{let e=C.value?h(()=>{let e=o(),t=a(`rue:component:anchor`);return f(e,t),g(_(w,{onDispose:D}),e,t),e}):h(()=>{let e=o(),t=d(`div`,e);return f(e,t),r(t,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),f(t,c(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),e});m(()=>g(e,u,k))});let A=d(`div`,u);f(u,A),r(A,`rounded-box bg-base-200 p-4`);let j=d(`h3`,A);f(A,j),r(j,`font-semibold`),f(j,c(`清理日志`));let M=d(`div`,A);f(A,M),r(M,`mt-3 space-y-2`);let N=a(`rue:slot:anchor`);return f(M,N),p(()=>{let e=E.value.length===0?h(()=>{let e=o(),t=d(`p`,e);return f(e,t),r(t,`text-sm text-base-content/60`),f(t,c(`还没有清理记录。`)),e}):h(()=>{let e=o(),i=a(`rue:list:start`),c=a(`rue:list:end`);f(e,i),f(e,c);let l=new Map;return p(()=>{l=y({items:E.value||[],getKey:(e,t)=>e,elements:l,parent:i.parentNode,before:c,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,i,a,c,l)=>{g(h(()=>{let i=o(),a=d(`p`,i);f(i,a),r(a,`rounded-box bg-base-100 px-3 py-2 text-sm`),p(()=>{t(a,`key`,String(e))});let c=s(a);return f(a,c),p(()=>{n(c,e)}),i}),i,a)}})}),e});m(()=>g(e,M,N))}),e}):``;m(()=>g(e,O,A))}),e})}),u,v),u})};export{E as default};