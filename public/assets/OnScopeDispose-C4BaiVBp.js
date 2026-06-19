import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,wt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,n as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=()=>new Date().toLocaleTimeString(),C=e=>{let{ticks:a,startedAt:p,timer:m}=v(`useSetup:0:0`,()=>o(()=>{let t=v(`ref:1:0`,()=>_(0)),n=S(),r=setInterval(()=>{t.value+=1},1e3);return g(()=>{clearInterval(r),e.onDispose(`清理 timer：运行 ${t.value} 次，开始于 ${n}`)}),{ticks:t,startedAt:n,timer:r}}));return l(e=>{let o=s(`div`,e);u(o,`rounded-box border border-base-300 bg-base-100 p-5`);let l=s(`div`,o);i(o,l),u(l,`flex items-center justify-between gap-4`);let m=s(`div`,l);i(l,m);let g=s(`p`,m);i(m,g),u(g,`text-sm text-base-content/60`),i(g,h(`当前作用域`));let _=s(`h2`,m);i(m,_),u(_,`text-2xl font-semibold`),i(_,h(`Scoped timer`));let v=s(`div`,l);i(l,v),u(v,`badge badge-primary badge-lg`),i(v,h(`active`));let y=s(`div`,o);i(o,y),u(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=s(`div`,y);i(y,b),u(b,`rounded-box bg-base-200 p-4`);let x=s(`p`,b);i(b,x),u(x,`text-sm text-base-content/60`),i(x,h(`Tick`));let S=s(`p`,b);i(b,S),u(S,`text-3xl font-semibold`);let C=d(S);i(S,C),n(()=>{c(C,a.value)});let w=s(`div`,y);i(y,w),u(w,`rounded-box bg-base-200 p-4`);let T=s(`p`,w);i(w,T),u(T,`text-sm text-base-content/60`),i(T,h(`Started`));let E=s(`p`,w);i(w,E),u(E,`text-2xl font-semibold`);let D=t(`rue:slot:anchor`);return i(E,D),n(()=>{let e=p;r(()=>f(e,E,D))}),o})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:g,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>o(()=>{let e=v(`ref:1:1`,()=>_(`preview`)),t=v(`ref:1:2`,()=>_(!0)),n=v(`ref:1:3`,()=>_([]));return{activeTab:e,visible:t,logs:n,addLog:e=>{n.value=[`${S()} ${e}`,...n.value].slice(0,5)}}}));return l(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),f(m(x,{children:l(()=>{let o=e(),_=s(`h1`,o);i(o,_),u(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,h(`onScopeDispose 作用域清理`));let v=s(`div`,o);i(o,v),p(v,`role`,`tablist`),u(v,`tabs tabs-box`);let x=s(`button`,v);i(v,x),p(x,`role`,`tab`),n(()=>{u(x,`tab ${g.value===`preview`?`tab-active`:``}`)}),a(x,`click`,()=>{g.value=`preview`}),i(x,h(`效果`));let S=s(`button`,v);i(v,S),p(S,`role`,`tab`),n(()=>{u(S,`tab ${g.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{g.value=`code`}),i(S,h(`代码`));let O=s(`div`,o);i(o,O),u(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=t(`rue:slot:anchor`);i(O,k),n(()=>{let a=g.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:w});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,O,k))}),i(O,h(` `));let A=t(`rue:slot:anchor`);return i(O,A),n(()=>{let o=g.value===`preview`?l(()=>{let o=e(),g=s(`div`,o);i(o,g),u(g,`card bg-base-100 shadow`);let _=s(`div`,g);i(g,_),u(_,`card-body gap-5`);let v=s(`div`,_);i(_,v),u(v,`flex flex-wrap items-center justify-between gap-3`);let b=s(`div`,v);i(v,b);let x=s(`p`,b);i(b,x),u(x,`text-sm text-base-content/60`),i(x,h(`切换子组件，观察作用域释放`));let S=s(`h2`,b);i(b,S),u(S,`text-2xl font-semibold`),i(S,h(`Composable cleanup demo`));let w=s(`button`,v);i(v,w),n(()=>{u(w,`btn ${T.value?`btn-outline`:`btn-primary`}`)}),a(w,`click`,()=>{T.value=!T.value});let O=d(w);i(w,O),n(()=>{c(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=t(`rue:slot:anchor`);i(_,k),n(()=>{let n=T.value?l(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),f(m(C,{onDispose:D}),n,r),n}):l(()=>{let t=e(),n=s(`div`,t);return i(t,n),u(n,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),i(n,h(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),t});r(()=>f(n,_,k))});let A=s(`div`,_);i(_,A),u(A,`rounded-box bg-base-200 p-4`);let j=s(`h3`,A);i(A,j),u(j,`font-semibold`),i(j,h(`清理日志`));let M=s(`div`,A);i(A,M),u(M,`mt-3 space-y-2`);let N=t(`rue:slot:anchor`);return i(M,N),n(()=>{let a=E.value.length===0?l(()=>{let t=e(),n=s(`p`,t);return i(t,n),u(n,`text-sm text-base-content/60`),i(n,h(`还没有清理记录。`)),t}):l(()=>{let r=e(),a=t(`rue:list:start`),o=t(`rue:list:end`);i(r,a),i(r,o);let m=new Map;return n(()=>{m=y({items:E.value||[],getKey:(e,t)=>e,elements:m,parent:a.parentNode,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(t,r,a,o,m)=>{f(l(()=>{let r=e(),a=s(`p`,r);i(r,a),u(a,`rounded-box bg-base-100 px-3 py-2 text-sm`),n(()=>{p(a,`key`,String(t))});let o=d(a);return i(a,o),n(()=>{c(o,t)}),r}),r,a)}})}),r});r(()=>f(a,M,N))}),o}):``;r(()=>f(o,O,A))}),o})}),_,v),_})};export{T as default};