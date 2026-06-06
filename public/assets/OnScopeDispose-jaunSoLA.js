import{$ as e,It as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,s as h,t as g,tt as _}from"./vapor-runtime-DHPuOjqh.js";import{a as v,n as y}from"./vapor-helpers-vapor-CJFAWine.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./SidebarPlaygroundExample-KML-rOvA.js";var S=()=>new Date().toLocaleTimeString(),C=n=>{let{ticks:a,startedAt:o,timer:l}=v(`useSetup:0:0`,()=>r(()=>{let e=v(`ref:1:0`,()=>i(0)),r=S(),a=setInterval(()=>{e.value+=1},1e3);return t(()=>{clearInterval(a),n.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${r}`)}),{ticks:e,startedAt:r,timer:a}}));return f(t=>{let n=e(`div`,t);u(n,`rounded-box border border-base-300 bg-base-100 p-5`);let r=e(`div`,n);s(n,r),u(r,`flex items-center justify-between gap-4`);let i=e(`div`,r);s(r,i);let l=e(`p`,i);s(i,l),u(l,`text-sm text-base-content/60`),s(l,d(`当前作用域`));let f=e(`h2`,i);s(i,f),u(f,`text-2xl font-semibold`),s(f,d(`Scoped timer`));let m=e(`div`,r);s(r,m),u(m,`badge badge-primary badge-lg`),s(m,d(`active`));let h=e(`div`,n);s(n,h),u(h,`mt-5 grid gap-3 sm:grid-cols-2`);let g=e(`div`,h);s(h,g),u(g,`rounded-box bg-base-200 p-4`);let v=e(`p`,g);s(g,v),u(v,`text-sm text-base-content/60`),s(v,d(`Tick`));let y=e(`p`,g);s(g,y),u(y,`text-3xl font-semibold`);let b=_(y);s(y,b),c(()=>{p(b,a.value)});let x=e(`div`,h);s(h,x),u(x,`rounded-box bg-base-200 p-4`);let S=e(`p`,x);s(x,S),u(S,`text-sm text-base-content/60`),s(S,d(`Started`));let C=e(`p`,x);s(x,C),u(C,`text-2xl font-semibold`);let w=_(C);return s(C,w),c(()=>{p(w,o)}),n})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:t,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>r(()=>{let e=v(`ref:1:1`,()=>i(`preview`)),t=v(`ref:1:2`,()=>i(!0)),n=v(`ref:1:3`,()=>i([]));return{activeTab:e,visible:t,logs:n,addLog:e=>{n.value=[`${S()} ${e}`,...n.value].slice(0,5)}}}));return f(r=>{let i=a(),v=l(`rue:component:anchor`);return s(i,v),h(g(x,{children:f(()=>{let r=a(),i=e(`h1`,r);s(r,i),u(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,d(`onScopeDispose 作用域清理`));let v=e(`div`,r);s(r,v),m(v,`role`,`tablist`),u(v,`tabs tabs-box`);let x=e(`button`,v);s(v,x),m(x,`role`,`tab`),c(()=>{u(x,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(x,`click`,()=>{t.value=`preview`}),s(x,d(`效果`));let S=e(`button`,v);s(v,S),m(S,`role`,`tab`),c(()=>{u(S,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{t.value=`code`}),s(S,d(`代码`));let O=e(`div`,r);s(r,O),u(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=l(`rue:slot:anchor`);s(O,k),c(()=>{let n=t.value===`code`?f(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:w});o(()=>h(e,r,i))}),t}):``;o(()=>h(n,O,k))}),s(O,d(` `));let A=l(`rue:slot:anchor`);return s(O,A),c(()=>{let r=t.value===`preview`?f(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-5`);let v=e(`div`,i);s(i,v),u(v,`flex flex-wrap items-center justify-between gap-3`);let b=e(`div`,v);s(v,b);let x=e(`p`,b);s(b,x),u(x,`text-sm text-base-content/60`),s(x,d(`切换子组件，观察作用域释放`));let S=e(`h2`,b);s(b,S),u(S,`text-2xl font-semibold`),s(S,d(`Composable cleanup demo`));let w=e(`button`,v);s(v,w),c(()=>{u(w,String(`btn ${T.value?`btn-outline`:`btn-primary`}`))}),n(w,`click`,()=>{T.value=!T.value});let O=_(w);s(w,O),c(()=>{p(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=l(`rue:slot:anchor`);s(i,k),c(()=>{let t=T.value?f(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),h(g(C,{onDispose:D}),e,t),e}):f(()=>{let t=a(),n=e(`div`,t);return s(t,n),u(n,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),s(n,d(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),t});o(()=>h(t,i,k))});let A=e(`div`,i);s(i,A),u(A,`rounded-box bg-base-200 p-4`);let j=e(`h3`,A);s(A,j),u(j,`font-semibold`),s(j,d(`清理日志`));let M=e(`div`,A);s(A,M),u(M,`mt-3 space-y-2`);let N=l(`rue:slot:anchor`);return s(M,N),c(()=>{let t=E.value.length===0?f(()=>{let t=a(),n=e(`p`,t);return s(t,n),u(n,`text-sm text-base-content/60`),s(n,d(`还没有清理记录。`)),t}):f(()=>{let t=a(),n=l(`rue:list:start`),r=l(`rue:list:end`);s(t,n),s(t,r);let i=new Map;return c(()=>{i=y({items:E.value||[],getKey:(e,t)=>e,elements:i,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`p`,n);s(n,r),u(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),c(()=>{m(r,`key`,String(t))});let i=_(r);return s(r,i),c(()=>{p(i,t)}),n}),n,r)}})}),t});o(()=>h(t,M,N))}),t}):``;o(()=>h(r,O,A))}),r})}),i,v),i})};export{T as default};