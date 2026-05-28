import{$ as e,J as t,Kt as n,Lt as r,Q as i,U as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,l as p,mt as m,ot as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{t as b}from"./Code-B_4lzH85.js";import{t as x}from"./SidebarPlaygroundExample-CtM-WHq_.js";var S=t=>(v(`useSetup:0:0`,()=>n(()=>{if(t.crash)throw Error(`子组件在渲染时抛出了错误`);return{}})),d(t=>{let n=e(`div`,t);u(n,`rounded-lg border border-success/30 bg-success/10 p-4`);let r=e(`h2`,n);s(n,r),u(r,`text-lg font-semibold text-success`),s(r,f(`子组件正常渲染`));let i=e(`p`,n);return s(n,i),u(i,`mt-2 text-sm opacity-80`),s(i,f(`点击触发按钮后，错误会被父组件捕获并阻止继续冒泡。`)),n})),C=()=>{let{activeTab:C,shouldCrash:w,errorMessage:T,capturedCount:E,logs:D}=v(`useSetup:0:0:dup1`,()=>n(()=>{let e=v(`ref:1:0`,()=>r(`preview`)),t=v(`ref:1:1`,()=>r(!1)),n=v(`ref:1:2`,()=>r(``)),i=v(`ref:1:3`,()=>r(0)),o=v(`ref:1:4`,()=>r([]));return a(e=>(i.value+=1,t.value=!1,n.value=e instanceof Error?e.message:String(e),o.value=[`第 ${i.value} 次捕获：${n.value}`,...o.value].slice(0,4),!1)),{activeTab:e,shouldCrash:t,errorMessage:n,capturedCount:i,logs:o}}));return d(n=>{let r=i(),a=l(`rue:component:anchor`);return s(r,a),p(g(x,{children:d(()=>{let n=i(),r=e(`h1`,n);s(n,r),u(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,f(`onErrorCaptured 错误捕获`));let a=e(`div`,n);s(n,a),h(a,`role`,`tablist`),u(a,`tabs tabs-box`);let v=e(`button`,a);s(a,v),h(v,`role`,`tab`),c(()=>{u(v,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{C.value=`preview`}),s(v,f(`效果`));let x=e(`button`,a);s(a,x),h(x,`role`,`tab`),c(()=>{u(x,String(`tab ${C.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{C.value=`code`}),s(x,f(`代码`));let O=e(`div`,n);s(n,O),u(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=l(`rue:slot:anchor`);s(O,k),c(()=>{let t=C.value===`code`?d(()=>{let t=i(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let a=l(`rue:component:anchor`);return s(r,a),c(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});o(()=>p(e,r,a))}),t}):``;o(()=>p(t,O,k))}),s(O,f(` `));let A=l(`rue:slot:anchor`);return s(O,A),c(()=>{let n=C.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`card bg-base-100 shadow`);let a=e(`div`,r);s(r,a),u(a,`card-body gap-5`);let v=e(`div`,a);s(a,v),u(v,`flex flex-wrap items-center gap-3`);let b=e(`button`,v);s(v,b),u(b,`btn btn-primary`),t(b,`click`,()=>{T.value=``,w.value=!0}),s(b,f(`触发子组件错误`));let x=e(`button`,v);s(v,x),u(x,`btn btn-ghost`),t(x,`click`,()=>{w.value=!1,T.value=``,D.value=[]}),s(x,f(`重置`));let C=e(`span`,v);s(v,C),u(C,`badge badge-outline`),s(C,f(`已捕获 `));let O=_(C);s(C,O),c(()=>{m(O,E.value)}),s(C,f(` 次`));let k=l(`rue:slot:anchor`);s(a,k),c(()=>{let t=T.value?d(()=>{let t=i(),n=e(`div`,t);s(t,n),u(n,`alert alert-warning`);let r=e(`span`,n);s(n,r),s(r,f(`父组件已捕获：`));let a=_(r);return s(r,a),c(()=>{m(a,T.value)}),t}):``;o(()=>p(t,a,k))});let A=l(`rue:component:anchor`);s(a,A),c(()=>{let e=g(S,{crash:w.value});o(()=>p(e,a,A))});let j=e(`div`,a);s(a,j),u(j,`rounded-lg border border-base-300 p-4`);let M=e(`h2`,j);s(j,M),u(M,`text-sm font-semibold uppercase tracking-wide opacity-70`),s(M,f(`捕获日志`));let N=e(`div`,j);s(j,N),u(N,`mt-3 space-y-2`);let P=l(`rue:slot:anchor`);return s(N,P),c(()=>{let t=D.value.length===0?d(()=>{let t=i(),n=e(`p`,t);return s(t,n),u(n,`text-sm opacity-60`),s(n,f(`还没有捕获到错误。`)),t}):d(()=>{let t=i(),n=l(`rue:list:start`),r=l(`rue:list:end`);s(t,n),s(t,r);let a=new Map;return c(()=>{a=y({items:D.value||[],getKey:(e,t)=>e,elements:a,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,a,o)=>{p(d(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`rounded-md bg-base-200 px-3 py-2 text-sm`),c(()=>{h(r,`key`,String(t))});let a=_(r);return s(r,a),c(()=>{m(a,t)}),n}),n,r)}})}),t});o(()=>p(t,N,P))}),n}):``;o(()=>p(n,O,A))}),n})}),r,a),r})};export{C as default};