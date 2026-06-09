import{$ as e,Ct as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v,n as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=()=>new Date().toLocaleTimeString(),C=n=>{let{ticks:r,startedAt:i,timer:c}=v(`useSetup:0:0`,()=>m(()=>{let e=v(`ref:1:0`,()=>a(0)),r=S(),i=setInterval(()=>{e.value+=1},1e3);return t(()=>{clearInterval(i),n.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${r}`)}),{ticks:e,startedAt:r,timer:i}}));return d(t=>{let n=e(`div`,t);l(n,`rounded-box border border-base-300 bg-base-100 p-5`);let a=e(`div`,n);s(n,a),l(a,`flex items-center justify-between gap-4`);let c=e(`div`,a);s(a,c);let d=e(`p`,c);s(c,d),l(d,`text-sm text-base-content/60`),s(d,u(`当前作用域`));let p=e(`h2`,c);s(c,p),l(p,`text-2xl font-semibold`),s(p,u(`Scoped timer`));let m=e(`div`,a);s(a,m),l(m,`badge badge-primary badge-lg`),s(m,u(`active`));let h=e(`div`,n);s(n,h),l(h,`mt-5 grid gap-3 sm:grid-cols-2`);let g=e(`div`,h);s(h,g),l(g,`rounded-box bg-base-200 p-4`);let v=e(`p`,g);s(g,v),l(v,`text-sm text-base-content/60`),s(v,u(`Tick`));let y=e(`p`,g);s(g,y),l(y,`text-3xl font-semibold`);let b=_(y);s(y,b),o(()=>{f(b,r.value)});let x=e(`div`,h);s(h,x),l(x,`rounded-box bg-base-200 p-4`);let S=e(`p`,x);s(x,S),l(S,`text-sm text-base-content/60`),s(S,u(`Started`));let C=e(`p`,x);s(x,C),l(C,`text-2xl font-semibold`);let w=_(C);return s(C,w),o(()=>{f(w,i)}),n})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:t,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>m(()=>{let e=v(`ref:1:1`,()=>a(`preview`)),t=v(`ref:1:2`,()=>a(!0)),n=v(`ref:1:3`,()=>a([]));return{activeTab:e,visible:t,logs:n,addLog:e=>{n.value=[`${S()} ${e}`,...n.value].slice(0,5)}}}));return d(a=>{let m=i(),v=c(`rue:component:anchor`);return s(m,v),h(g(x,{children:d(()=>{let a=i(),m=e(`h1`,a);s(a,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),s(m,u(`onScopeDispose 作用域清理`));let v=e(`div`,a);s(a,v),p(v,`role`,`tablist`),l(v,`tabs tabs-box`);let x=e(`button`,v);s(v,x),p(x,`role`,`tab`),o(()=>{l(x,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(x,`click`,()=>{t.value=`preview`}),s(x,u(`效果`));let S=e(`button`,v);s(v,S),p(S,`role`,`tab`),o(()=>{l(S,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(S,`click`,()=>{t.value=`code`}),s(S,u(`代码`));let O=e(`div`,a);s(a,O),l(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=c(`rue:slot:anchor`);s(O,k),o(()=>{let r=t.value===`code`?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:w});n(()=>h(e,a,u))}),t}):``;n(()=>h(r,O,k))}),s(O,u(` `));let A=c(`rue:slot:anchor`);return s(O,A),o(()=>{let a=t.value===`preview`?d(()=>{let t=i(),a=e(`div`,t);s(t,a),l(a,`card bg-base-100 shadow`);let m=e(`div`,a);s(a,m),l(m,`card-body gap-5`);let v=e(`div`,m);s(m,v),l(v,`flex flex-wrap items-center justify-between gap-3`);let b=e(`div`,v);s(v,b);let x=e(`p`,b);s(b,x),l(x,`text-sm text-base-content/60`),s(x,u(`切换子组件，观察作用域释放`));let S=e(`h2`,b);s(b,S),l(S,`text-2xl font-semibold`),s(S,u(`Composable cleanup demo`));let w=e(`button`,v);s(v,w),o(()=>{l(w,String(`btn ${T.value?`btn-outline`:`btn-primary`}`))}),r(w,`click`,()=>{T.value=!T.value});let O=_(w);s(w,O),o(()=>{f(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=c(`rue:slot:anchor`);s(m,k),o(()=>{let t=T.value?d(()=>{let e=i(),t=c(`rue:component:anchor`);return s(e,t),h(g(C,{onDispose:D}),e,t),e}):d(()=>{let t=i(),n=e(`div`,t);return s(t,n),l(n,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),s(n,u(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),t});n(()=>h(t,m,k))});let A=e(`div`,m);s(m,A),l(A,`rounded-box bg-base-200 p-4`);let j=e(`h3`,A);s(A,j),l(j,`font-semibold`),s(j,u(`清理日志`));let M=e(`div`,A);s(A,M),l(M,`mt-3 space-y-2`);let N=c(`rue:slot:anchor`);return s(M,N),o(()=>{let t=E.value.length===0?d(()=>{let t=i(),n=e(`p`,t);return s(t,n),l(n,`text-sm text-base-content/60`),s(n,u(`还没有清理记录。`)),t}):d(()=>{let t=i(),n=c(`rue:list:start`),r=c(`rue:list:end`);s(t,n),s(t,r);let a=new Map;return o(()=>{a=y({items:E.value||[],getKey:(e,t)=>e,elements:a,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,a,c)=>{h(d(()=>{let n=i(),r=e(`p`,n);s(n,r),l(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),o(()=>{p(r,`key`,String(t))});let a=_(r);return s(r,a),o(()=>{f(a,t)}),n}),n,r)}})}),t});n(()=>h(t,M,N))}),t}):``;n(()=>h(a,O,A))}),a})}),m,v),m})};export{T as default};