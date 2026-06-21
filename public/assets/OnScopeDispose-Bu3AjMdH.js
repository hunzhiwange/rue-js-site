import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,kt as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v,n as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=()=>new Date().toLocaleTimeString(),C=r=>{let{ticks:u,startedAt:m,timer:h}=v(`useSetup:0:0`,()=>o(()=>{let e=v(`ref:1:0`,()=>t(0)),n=S(),i=setInterval(()=>{e.value+=1},1e3);return c(()=>{clearInterval(i),r.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${n}`)}),{ticks:e,startedAt:n,timer:i}}));return l(t=>{let r=d(`div`,t);i(r,`rounded-box border border-base-300 bg-base-100 p-5`);let o=d(`div`,r);n(r,o),i(o,`flex items-center justify-between gap-4`);let c=d(`div`,o);n(o,c);let l=d(`p`,c);n(c,l),i(l,`text-sm text-base-content/60`),n(l,p(`当前作用域`));let h=d(`h2`,c);n(c,h),i(h,`text-2xl font-semibold`),n(h,p(`Scoped timer`));let v=d(`div`,o);n(o,v),i(v,`badge badge-primary badge-lg`),n(v,p(`active`));let y=d(`div`,r);n(r,y),i(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=d(`div`,y);n(y,b),i(b,`rounded-box bg-base-200 p-4`);let x=d(`p`,b);n(b,x),i(x,`text-sm text-base-content/60`),n(x,p(`Tick`));let S=d(`p`,b);n(b,S),i(S,`text-3xl font-semibold`);let C=s(S);n(S,C),_(()=>{g(C,u.value)});let w=d(`div`,y);n(y,w),i(w,`rounded-box bg-base-200 p-4`);let T=d(`p`,w);n(w,T),i(T,`text-sm text-base-content/60`),n(T,p(`Started`));let E=d(`p`,w);n(w,E),i(E,`text-2xl font-semibold`);let D=a(`rue:slot:anchor`);return n(E,D),_(()=>{let t=m;e(()=>f(t,E,D))}),r})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

type ScopedTimerProps = {
  onDispose: (message: string) => void;
};

const ScopedTimer: FC<ScopedTimerProps> = props => {
  const ticks = ref(0);
  const startedAt = new Date().toLocaleTimeString();

  const timer = setInterval(() => {
    ticks.value += 1;
  }, 1000);

  onScopeDispose(() => {
    clearInterval(timer);
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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:c,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>o(()=>{let e=v(`ref:1:1`,()=>t(`preview`)),n=v(`ref:1:2`,()=>t(!0)),r=v(`ref:1:3`,()=>t([]));return{activeTab:e,visible:n,logs:r,addLog:e=>{r.value=[`${S()} ${e}`,...r.value].slice(0,5)}}}));return l(t=>{let o=h(),v=a(`rue:component:anchor`);return n(o,v),f(m(x,{children:l(()=>{let t=h(),o=d(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,p(`onScopeDispose 作用域清理`));let v=d(`div`,t);n(t,v),u(v,`role`,`tablist`),i(v,`tabs tabs-box`);let x=d(`button`,v);n(v,x),u(x,`role`,`tab`),_(()=>{i(x,`tab ${c.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{c.value=`preview`}),n(x,p(`效果`));let S=d(`button`,v);n(v,S),u(S,`role`,`tab`),_(()=>{i(S,`tab ${c.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{c.value=`code`}),n(S,p(`代码`));let O=d(`div`,t);n(t,O),i(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=a(`rue:slot:anchor`);n(O,k),_(()=>{let t=c.value===`code`?l(()=>{let t=h(),r=d(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),_(()=>{let t=m(b,{className:`h-full`,lang:`tsx`,code:w});e(()=>f(t,o,s))}),t}):``;e(()=>f(t,O,k))}),n(O,p(` `));let A=a(`rue:slot:anchor`);return n(O,A),_(()=>{let t=c.value===`preview`?l(()=>{let t=h(),o=d(`div`,t);n(t,o),i(o,`card bg-base-100 shadow`);let c=d(`div`,o);n(o,c),i(c,`card-body gap-5`);let v=d(`div`,c);n(c,v),i(v,`flex flex-wrap items-center justify-between gap-3`);let b=d(`div`,v);n(v,b);let x=d(`p`,b);n(b,x),i(x,`text-sm text-base-content/60`),n(x,p(`切换子组件，观察作用域释放`));let S=d(`h2`,b);n(b,S),i(S,`text-2xl font-semibold`),n(S,p(`Composable cleanup demo`));let w=d(`button`,v);n(v,w),_(()=>{i(w,`btn ${T.value?`btn-outline`:`btn-primary`}`)}),r(w,`click`,()=>{T.value=!T.value});let O=s(w);n(w,O),_(()=>{g(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=a(`rue:slot:anchor`);n(c,k),_(()=>{let t=T.value?l(()=>{let e=h(),t=a(`rue:component:anchor`);return n(e,t),f(m(C,{onDispose:D}),e,t),e}):l(()=>{let e=h(),t=d(`div`,e);return n(e,t),i(t,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),n(t,p(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),e});e(()=>f(t,c,k))});let A=d(`div`,c);n(c,A),i(A,`rounded-box bg-base-200 p-4`);let j=d(`h3`,A);n(A,j),i(j,`font-semibold`),n(j,p(`清理日志`));let M=d(`div`,A);n(A,M),i(M,`mt-3 space-y-2`);let N=a(`rue:slot:anchor`);return n(M,N),_(()=>{let t=E.value.length===0?l(()=>{let e=h(),t=d(`p`,e);return n(e,t),i(t,`text-sm text-base-content/60`),n(t,p(`还没有清理记录。`)),e}):l(()=>{let e=h(),t=a(`rue:list:start`),r=a(`rue:list:end`);n(e,t),n(e,r);let o=new Map;return _(()=>{o=y({items:E.value||[],getKey:(e,t)=>e,elements:o,parent:t.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,r,a,o)=>{f(l(()=>{let t=h(),r=d(`p`,t);n(t,r),i(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),_(()=>{u(r,`key`,String(e))});let a=s(r);return n(r,a),_(()=>{g(a,e)}),t}),t,r)}})}),e});e(()=>f(t,M,N))}),t}):``;e(()=>f(t,O,A))}),t})}),o,v),o})};export{T as default};