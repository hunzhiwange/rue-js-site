import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,jt as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v,n as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-BoXKy3gJ.js";import{r as x}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var S=()=>new Date().toLocaleTimeString(),C=r=>{let{ticks:o,startedAt:u,timer:h}=v(`useSetup:0:0`,()=>f(()=>{let e=v(`ref:1:0`,()=>n(0)),t=S(),i=setInterval(()=>{e.value+=1},1e3);return c(()=>{i!==void 0&&clearInterval(i),r.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${t}`)}),{ticks:e,startedAt:t,timer:i}}));return l(n=>{let r=m(`div`,n);p(r,`rounded-box border border-base-300 bg-base-100 p-5`);let c=m(`div`,r);e(r,c),p(c,`flex items-center justify-between gap-4`);let l=m(`div`,c);e(c,l);let f=m(`p`,l);e(l,f),p(f,`text-sm text-base-content/60`),e(f,s(`当前作用域`));let h=m(`h2`,l);e(l,h),p(h,`text-2xl font-semibold`),e(h,s(`Scoped timer`));let v=m(`div`,c);e(c,v),p(v,`badge badge-primary badge-lg`),e(v,s(`active`));let y=m(`div`,r);e(r,y),p(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=m(`div`,y);e(y,b),p(b,`rounded-box bg-base-200 p-4`);let x=m(`p`,b);e(b,x),p(x,`text-sm text-base-content/60`),e(x,s(`Tick`));let S=m(`p`,b);e(b,S),p(S,`text-3xl font-semibold`);let C=i(S);e(S,C),t(()=>{a(C,o.value)});let w=m(`div`,y);e(y,w),p(w,`rounded-box bg-base-200 p-4`);let T=m(`p`,w);e(w,T),p(T,`text-sm text-base-content/60`),e(T,s(`Started`));let E=m(`p`,w);e(w,E),p(E,`text-2xl font-semibold`);let D=_(`rue:slot:anchor`);return e(E,D),t(()=>{let e=u;g(()=>d(e,E,D))}),r})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:c,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>f(()=>{let e=v(`ref:1:1`,()=>n(`preview`)),t=v(`ref:1:2`,()=>n(!0)),r=v(`ref:1:3`,()=>n([]));return{activeTab:e,visible:t,logs:r,addLog:e=>{r.value=[`${S()} ${e}`,...r.value].slice(0,5)}}}));return l(n=>{let f=u(),v=_(`rue:component:anchor`);return e(f,v),d(h(x,{children:l(()=>{let n=u(),f=m(`h1`,n);e(n,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),e(f,s(`onScopeDispose 作用域清理`));let v=m(`div`,n);e(n,v),o(v,`role`,`tablist`),p(v,`tabs tabs-box`);let x=m(`button`,v);e(v,x),o(x,`role`,`tab`),t(()=>{p(x,`tab ${c.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{c.value=`preview`}),e(x,s(`效果`));let S=m(`button`,v);e(v,S),o(S,`role`,`tab`),t(()=>{p(S,`tab ${c.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{c.value=`code`}),e(S,s(`代码`));let O=m(`div`,n);e(n,O),p(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=_(`rue:slot:anchor`);e(O,k),t(()=>{let n=c.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:w});g(()=>d(e,i,a))}),n}):``;g(()=>d(n,O,k))}),e(O,s(` `));let A=_(`rue:slot:anchor`);return e(O,A),t(()=>{let n=c.value===`preview`?l(()=>{let n=u(),c=m(`div`,n);e(n,c),p(c,`card bg-base-100 shadow`);let f=m(`div`,c);e(c,f),p(f,`card-body gap-5`);let v=m(`div`,f);e(f,v),p(v,`flex flex-wrap items-center justify-between gap-3`);let b=m(`div`,v);e(v,b);let x=m(`p`,b);e(b,x),p(x,`text-sm text-base-content/60`),e(x,s(`切换子组件，观察作用域释放`));let S=m(`h2`,b);e(b,S),p(S,`text-2xl font-semibold`),e(S,s(`Composable cleanup demo`));let w=m(`button`,v);e(v,w),t(()=>{p(w,`btn ${T.value?`btn-outline`:`btn-primary`}`)}),r(w,`click`,()=>{T.value=!T.value});let O=i(w);e(w,O),t(()=>{a(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=_(`rue:slot:anchor`);e(f,k),t(()=>{let t=T.value?l(()=>{let t=u(),n=_(`rue:component:anchor`);return e(t,n),d(h(C,{onDispose:D}),t,n),t}):l(()=>{let t=u(),n=m(`div`,t);return e(t,n),p(n,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),e(n,s(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),t});g(()=>d(t,f,k))});let A=m(`div`,f);e(f,A),p(A,`rounded-box bg-base-200 p-4`);let j=m(`h3`,A);e(A,j),p(j,`font-semibold`),e(j,s(`清理日志`));let M=m(`div`,A);e(A,M),p(M,`mt-3 space-y-2`);let N=_(`rue:slot:anchor`);return e(M,N),t(()=>{let n=E.value.length===0?l(()=>{let t=u(),n=m(`p`,t);return e(t,n),p(n,`text-sm text-base-content/60`),e(n,s(`还没有清理记录。`)),t}):l(()=>{let n=u(),r=_(`rue:list:start`),s=_(`rue:list:end`);e(n,r),e(n,s);let c=new Map;return t(()=>{c=y({items:E.value||[],getKey:(e,t)=>e,elements:c,parent:r.parentNode,before:s,singleRoot:!0,trackIndex:!1,start:r,renderItem:(n,r,s,c,f)=>{d(l(()=>{let r=u(),s=m(`p`,r);e(r,s),p(s,`rounded-box bg-base-100 px-3 py-2 text-sm`),t(()=>{o(s,`key`,String(n))});let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),n});g(()=>d(n,M,N))}),n}):``;g(()=>d(n,O,A))}),n})}),f,v),f})};export{T as default};