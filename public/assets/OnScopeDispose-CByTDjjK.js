import{$ as e,Ht as t,J as n,Lt as r,Q as i,St as a,X as o,Xt as s,Z as c,at as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v,n as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=()=>new Date().toLocaleTimeString(),C=c=>{let{ticks:l,startedAt:p,timer:_}=v(`useSetup:0:0`,()=>m(()=>{let e=v(`ref:1:0`,()=>r(0)),t=S(),n=setInterval(()=>{e.value+=1},1e3);return a(()=>{clearInterval(n),c.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${t}`)}),{ticks:e,startedAt:t,timer:n}}));return d(r=>{let a=i(`div`,r);g(a,`rounded-box border border-base-300 bg-base-100 p-5`);let c=i(`div`,a);n(a,c),g(c,`flex items-center justify-between gap-4`);let d=i(`div`,c);n(c,d);let m=i(`p`,d);n(d,m),g(m,`text-sm text-base-content/60`),n(m,e(`当前作用域`));let _=i(`h2`,d);n(d,_),g(_,`text-2xl font-semibold`),n(_,e(`Scoped timer`));let v=i(`div`,c);n(c,v),g(v,`badge badge-primary badge-lg`),n(v,e(`active`));let y=i(`div`,a);n(a,y),g(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=i(`div`,y);n(y,b),g(b,`rounded-box bg-base-200 p-4`);let x=i(`p`,b);n(b,x),g(x,`text-sm text-base-content/60`),n(x,e(`Tick`));let S=i(`p`,b);n(b,S),g(S,`text-3xl font-semibold`);let C=u(S);n(S,C),s(()=>{f(C,l.value)});let w=i(`div`,y);n(y,w),g(w,`rounded-box bg-base-200 p-4`);let T=i(`p`,w);n(w,T),g(T,`text-sm text-base-content/60`),n(T,e(`Started`));let E=i(`p`,w);n(w,E),g(E,`text-2xl font-semibold`);let D=o(`rue:slot:anchor`);return n(E,D),s(()=>{let e=p;t(()=>h(e,E,D))}),a})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:a,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>m(()=>{let e=v(`ref:1:1`,()=>r(`preview`)),t=v(`ref:1:2`,()=>r(!0)),n=v(`ref:1:3`,()=>r([]));return{activeTab:e,visible:t,logs:n,addLog:e=>{n.value=[`${S()} ${e}`,...n.value].slice(0,5)}}}));return d(r=>{let m=c(),v=o(`rue:component:anchor`);return n(m,v),h(_(x,{children:d(()=>{let r=c(),m=i(`h1`,r);n(r,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,e(`onScopeDispose 作用域清理`));let v=i(`div`,r);n(r,v),l(v,`role`,`tablist`),g(v,`tabs tabs-box`);let x=i(`button`,v);n(v,x),l(x,`role`,`tab`),s(()=>{g(x,`tab ${a.value===`preview`?`tab-active`:``}`)}),p(x,`click`,()=>{a.value=`preview`}),n(x,e(`效果`));let S=i(`button`,v);n(v,S),l(S,`role`,`tab`),s(()=>{g(S,`tab ${a.value===`code`?`tab-active`:``}`)}),p(S,`click`,()=>{a.value=`code`}),n(S,e(`代码`));let O=i(`div`,r);n(r,O),g(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=o(`rue:slot:anchor`);n(O,k),s(()=>{let e=a.value===`code`?d(()=>{let e=c(),r=i(`div`,e);n(e,r),g(r,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,r);n(r,a),g(a,`card-body p-0`);let l=o(`rue:component:anchor`);return n(a,l),s(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:w});t(()=>h(e,a,l))}),e}):``;t(()=>h(e,O,k))}),n(O,e(` `));let A=o(`rue:slot:anchor`);return n(O,A),s(()=>{let r=a.value===`preview`?d(()=>{let r=c(),a=i(`div`,r);n(r,a),g(a,`card bg-base-100 shadow`);let m=i(`div`,a);n(a,m),g(m,`card-body gap-5`);let v=i(`div`,m);n(m,v),g(v,`flex flex-wrap items-center justify-between gap-3`);let b=i(`div`,v);n(v,b);let x=i(`p`,b);n(b,x),g(x,`text-sm text-base-content/60`),n(x,e(`切换子组件，观察作用域释放`));let S=i(`h2`,b);n(b,S),g(S,`text-2xl font-semibold`),n(S,e(`Composable cleanup demo`));let w=i(`button`,v);n(v,w),s(()=>{g(w,`btn ${T.value?`btn-outline`:`btn-primary`}`)}),p(w,`click`,()=>{T.value=!T.value});let O=u(w);n(w,O),s(()=>{f(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=o(`rue:slot:anchor`);n(m,k),s(()=>{let r=T.value?d(()=>{let e=c(),t=o(`rue:component:anchor`);return n(e,t),h(_(C,{onDispose:D}),e,t),e}):d(()=>{let t=c(),r=i(`div`,t);return n(t,r),g(r,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),n(r,e(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),t});t(()=>h(r,m,k))});let A=i(`div`,m);n(m,A),g(A,`rounded-box bg-base-200 p-4`);let j=i(`h3`,A);n(A,j),g(j,`font-semibold`),n(j,e(`清理日志`));let M=i(`div`,A);n(A,M),g(M,`mt-3 space-y-2`);let N=o(`rue:slot:anchor`);return n(M,N),s(()=>{let r=E.value.length===0?d(()=>{let t=c(),r=i(`p`,t);return n(t,r),g(r,`text-sm text-base-content/60`),n(r,e(`还没有清理记录。`)),t}):d(()=>{let e=c(),t=o(`rue:list:start`),r=o(`rue:list:end`);n(e,t),n(e,r);let a=new Map;return s(()=>{a=y({items:E.value||[],getKey:(e,t)=>e,elements:a,parent:t.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,r,a,o)=>{h(d(()=>{let t=c(),r=i(`p`,t);n(t,r),g(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),s(()=>{l(r,`key`,String(e))});let a=u(r);return n(r,a),s(()=>{f(a,e)}),t}),t,r)}})}),e});t(()=>h(r,M,N))}),r}):``;t(()=>h(r,O,A))}),r})}),m,v),m})};export{T as default};