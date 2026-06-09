import{$ as e,Ht as t,J as n,Q as r,R as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v,n as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=t=>(v(`useSetup:0:0`,()=>m(()=>{if(t.crash)throw Error(`子组件在渲染时抛出了错误`);return{}})),d(t=>{let n=e(`div`,t);l(n,`rounded-lg border border-success/30 bg-success/10 p-4`);let r=e(`h2`,n);s(n,r),l(r,`text-lg font-semibold text-success`),s(r,u(`子组件正常渲染`));let i=e(`p`,n);return s(n,i),l(i,`mt-2 text-sm opacity-80`),s(i,u(`点击触发按钮后，错误会被父组件捕获并阻止继续冒泡。`)),n})),C=()=>{let{activeTab:C,shouldCrash:w,errorMessage:T,capturedCount:E,logs:D}=v(`useSetup:0:0:dup1`,()=>m(()=>{let e=v(`ref:1:0`,()=>a(`preview`)),t=v(`ref:1:1`,()=>a(!1)),n=v(`ref:1:2`,()=>a(``)),r=v(`ref:1:3`,()=>a(0)),o=v(`ref:1:4`,()=>a([]));return i(e=>(r.value+=1,t.value=!1,n.value=e instanceof Error?e.message:String(e),o.value=[`第 ${r.value} 次捕获：${n.value}`,...o.value].slice(0,4),!1)),{activeTab:e,shouldCrash:t,errorMessage:n,capturedCount:r,logs:o}}));return d(i=>{let a=r(),m=c(`rue:component:anchor`);return s(a,m),h(g(x,{children:d(()=>{let i=r(),a=e(`h1`,i);s(i,a),l(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,u(`onErrorCaptured 错误捕获`));let m=e(`div`,i);s(i,m),p(m,`role`,`tablist`),l(m,`tabs tabs-box`);let v=e(`button`,m);s(m,v),p(v,`role`,`tab`),o(()=>{l(v,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{C.value=`preview`}),s(v,u(`效果`));let x=e(`button`,m);s(m,x),p(x,`role`,`tab`),o(()=>{l(x,String(`tab ${C.value===`code`?`tab-active`:``}`))}),n(x,`click`,()=>{C.value=`code`}),s(x,u(`代码`));let O=e(`div`,i);s(i,O),l(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=c(`rue:slot:anchor`);s(O,k),o(()=>{let n=C.value===`code`?d(()=>{let n=r(),i=e(`div`,n);s(n,i),l(i,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,i);s(i,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

const BrokenPanel: FC<{ crash: boolean }> = props => {
  if (props.crash) {
    throw new Error('子组件在渲染时抛出了错误');
  }

  return <div>子组件正常渲染</div>;
};

const ErrorBoundaryDemo: FC = () => {
  const shouldCrash = ref(false);
  const errorMessage = ref('');

  onErrorCaptured(error => {
    shouldCrash.value = false;
    errorMessage.value = error instanceof Error ? error.message : String(error);
    return false;
  });

  return (
    <section>
      <button onClick={() => {
        errorMessage.value = '';
        shouldCrash.value = true;
      }}>
        触发子组件错误
      </button>
      {errorMessage.value && <p>已捕获：{errorMessage.value}</p>}
      <BrokenPanel crash={shouldCrash.value} />
    </section>
  );
};

export default ErrorBoundaryDemo;`});t(()=>h(e,a,u))}),n}):``;t(()=>h(n,O,k))}),s(O,u(` `));let A=c(`rue:slot:anchor`);return s(O,A),o(()=>{let i=C.value===`preview`?d(()=>{let i=r(),a=e(`div`,i);s(i,a),l(a,`card bg-base-100 shadow`);let m=e(`div`,a);s(a,m),l(m,`card-body gap-5`);let v=e(`div`,m);s(m,v),l(v,`flex flex-wrap items-center gap-3`);let b=e(`button`,v);s(v,b),l(b,`btn btn-primary`),n(b,`click`,()=>{T.value=``,w.value=!0}),s(b,u(`触发子组件错误`));let x=e(`button`,v);s(v,x),l(x,`btn btn-ghost`),n(x,`click`,()=>{w.value=!1,T.value=``,D.value=[]}),s(x,u(`重置`));let C=e(`span`,v);s(v,C),l(C,`badge badge-outline`),s(C,u(`已捕获 `));let O=_(C);s(C,O),o(()=>{f(O,E.value)}),s(C,u(` 次`));let k=c(`rue:slot:anchor`);s(m,k),o(()=>{let n=T.value?d(()=>{let t=r(),n=e(`div`,t);s(t,n),l(n,`alert alert-warning`);let i=e(`span`,n);s(n,i),s(i,u(`父组件已捕获：`));let a=_(i);return s(i,a),o(()=>{f(a,T.value)}),t}):``;t(()=>h(n,m,k))});let A=c(`rue:component:anchor`);s(m,A),o(()=>{let e=g(S,{crash:w.value});t(()=>h(e,m,A))});let j=e(`div`,m);s(m,j),l(j,`rounded-lg border border-base-300 p-4`);let M=e(`h2`,j);s(j,M),l(M,`text-sm font-semibold uppercase tracking-wide opacity-70`),s(M,u(`捕获日志`));let N=e(`div`,j);s(j,N),l(N,`mt-3 space-y-2`);let P=c(`rue:slot:anchor`);return s(N,P),o(()=>{let n=D.value.length===0?d(()=>{let t=r(),n=e(`p`,t);return s(t,n),l(n,`text-sm opacity-60`),s(n,u(`还没有捕获到错误。`)),t}):d(()=>{let t=r(),n=c(`rue:list:start`),i=c(`rue:list:end`);s(t,n),s(t,i);let a=new Map;return o(()=>{a=y({items:D.value||[],getKey:(e,t)=>e,elements:a,parent:n.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,i,a,c)=>{h(d(()=>{let n=r(),i=e(`div`,n);s(n,i),l(i,`rounded-md bg-base-200 px-3 py-2 text-sm`),o(()=>{p(i,`key`,String(t))});let a=_(i);return s(i,a),o(()=>{f(a,t)}),n}),n,i)}})}),t});t(()=>h(n,N,P))}),i}):``;t(()=>h(i,O,A))}),i})}),a,m),a})};export{C as default};