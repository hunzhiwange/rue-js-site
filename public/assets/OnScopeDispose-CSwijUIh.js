import{$ as e,$t as t,Bt as n,Gt as r,Tt as i,X as a,Xt as o,Z as s,ct as c,et as l,gt as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,n as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=()=>new Date().toLocaleTimeString(),C=a=>{let{ticks:c,startedAt:l,timer:h}=v(`useSetup:0:0`,()=>o(()=>{let e=v(`ref:1:0`,()=>n(0)),t=S(),r=setInterval(()=>{e.value+=1},1e3);return i(()=>{clearInterval(r),a.onDispose(`清理 timer：运行 ${e.value} 次，开始于 ${t}`)}),{ticks:e,startedAt:t,timer:r}}));return d(n=>{let i=g(`div`,n);_(i,`rounded-box border border-base-300 bg-base-100 p-5`);let a=g(`div`,i);s(i,a),_(a,`flex items-center justify-between gap-4`);let o=g(`div`,a);s(a,o);let d=g(`p`,o);s(o,d),_(d,`text-sm text-base-content/60`),s(d,f(`当前作用域`));let h=g(`h2`,o);s(o,h),_(h,`text-2xl font-semibold`),s(h,f(`Scoped timer`));let v=g(`div`,a);s(a,v),_(v,`badge badge-primary badge-lg`),s(v,f(`active`));let y=g(`div`,i);s(i,y),_(y,`mt-5 grid gap-3 sm:grid-cols-2`);let b=g(`div`,y);s(y,b),_(b,`rounded-box bg-base-200 p-4`);let x=g(`p`,b);s(b,x),_(x,`text-sm text-base-content/60`),s(x,f(`Tick`));let S=g(`p`,b);s(b,S),_(S,`text-3xl font-semibold`);let C=m(S);s(S,C),t(()=>{u(C,c.value)});let w=g(`div`,y);s(y,w),_(w,`rounded-box bg-base-200 p-4`);let T=g(`p`,w);s(w,T),_(T,`text-sm text-base-content/60`),s(T,f(`Started`));let E=g(`p`,w);s(w,E),_(E,`text-2xl font-semibold`);let D=e(`rue:slot:anchor`);return s(E,D),t(()=>{let e=l;r(()=>p(e,E,D))}),i})},w=`import { type FC, onScopeDispose, ref } from '@rue-js/rue';

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

export default OnScopeDisposeDemo;`,T=()=>{let{activeTab:i,visible:T,logs:E,addLog:D}=v(`useSetup:0:0:dup1`,()=>o(()=>{let e=v(`ref:1:1`,()=>n(`preview`)),t=v(`ref:1:2`,()=>n(!0)),r=v(`ref:1:3`,()=>n([]));return{activeTab:e,visible:t,logs:r,addLog:e=>{r.value=[`${S()} ${e}`,...r.value].slice(0,5)}}}));return d(n=>{let o=l(),v=e(`rue:component:anchor`);return s(o,v),p(h(x,{children:d(()=>{let n=l(),o=g(`h1`,n);s(n,o),_(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,f(`onScopeDispose 作用域清理`));let v=g(`div`,n);s(n,v),c(v,`role`,`tablist`),_(v,`tabs tabs-box`);let x=g(`button`,v);s(v,x),c(x,`role`,`tab`),t(()=>{_(x,`tab ${i.value===`preview`?`tab-active`:``}`)}),a(x,`click`,()=>{i.value=`preview`}),s(x,f(`效果`));let S=g(`button`,v);s(v,S),c(S,`role`,`tab`),t(()=>{_(S,`tab ${i.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{i.value=`code`}),s(S,f(`代码`));let O=g(`div`,n);s(n,O),_(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=e(`rue:slot:anchor`);s(O,k),t(()=>{let n=i.value===`code`?d(()=>{let n=l(),i=g(`div`,n);s(n,i),_(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);s(i,a),_(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:w});r(()=>p(e,a,o))}),n}):``;r(()=>p(n,O,k))}),s(O,f(` `));let A=e(`rue:slot:anchor`);return s(O,A),t(()=>{let n=i.value===`preview`?d(()=>{let n=l(),i=g(`div`,n);s(n,i),_(i,`card bg-base-100 shadow`);let o=g(`div`,i);s(i,o),_(o,`card-body gap-5`);let v=g(`div`,o);s(o,v),_(v,`flex flex-wrap items-center justify-between gap-3`);let b=g(`div`,v);s(v,b);let x=g(`p`,b);s(b,x),_(x,`text-sm text-base-content/60`),s(x,f(`切换子组件，观察作用域释放`));let S=g(`h2`,b);s(b,S),_(S,`text-2xl font-semibold`),s(S,f(`Composable cleanup demo`));let w=g(`button`,v);s(v,w),t(()=>{_(w,`btn ${T.value?`btn-outline`:`btn-primary`}`)}),a(w,`click`,()=>{T.value=!T.value});let O=m(w);s(w,O),t(()=>{u(O,T.value?`卸载子作用域`:`重新挂载子作用域`)});let k=e(`rue:slot:anchor`);s(o,k),t(()=>{let t=T.value?d(()=>{let t=l(),n=e(`rue:component:anchor`);return s(t,n),p(h(C,{onDispose:D}),t,n),t}):d(()=>{let e=l(),t=g(`div`,e);return s(e,t),_(t,`rounded-box border border-dashed border-base-300 bg-base-200 p-6 text-base-content/70`),s(t,f(`子组件已卸载，timer 已由 onScopeDispose 清理。`)),e});r(()=>p(t,o,k))});let A=g(`div`,o);s(o,A),_(A,`rounded-box bg-base-200 p-4`);let j=g(`h3`,A);s(A,j),_(j,`font-semibold`),s(j,f(`清理日志`));let M=g(`div`,A);s(A,M),_(M,`mt-3 space-y-2`);let N=e(`rue:slot:anchor`);return s(M,N),t(()=>{let n=E.value.length===0?d(()=>{let e=l(),t=g(`p`,e);return s(e,t),_(t,`text-sm text-base-content/60`),s(t,f(`还没有清理记录。`)),e}):d(()=>{let n=l(),r=e(`rue:list:start`),i=e(`rue:list:end`);s(n,r),s(n,i);let a=new Map;return t(()=>{a=y({items:E.value||[],getKey:(e,t)=>e,elements:a,parent:r.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`p`,n);s(n,r),_(r,`rounded-box bg-base-100 px-3 py-2 text-sm`),t(()=>{c(r,`key`,String(e))});let i=m(r);return s(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),n});r(()=>p(n,M,N))}),n}):``;r(()=>p(n,O,A))}),n})}),o,v),o})};export{T as default};