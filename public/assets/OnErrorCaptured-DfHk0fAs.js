import{Q as e,V as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,ht as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{n as S}from"./src-Dlanwp1X.js";import{r as C}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var w=t=>(y(`useSetup:0:0`,()=>p(()=>{if(t.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),u(t=>{let n=h(`div`,t);m(n,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let r=h(`div`,n);e(n,r),m(r,`flex flex-wrap items-center gap-2`);let i=h(`span`,r);e(r,i),m(i,`badge badge-success badge-outline`),e(i,l(`子组件`));let a=h(`span`,r);e(r,a),m(a,`font-mono text-sm`),e(a,l(`BrokenPanel`));let o=h(`h2`,n);e(n,o),m(o,`mt-3 text-lg font-semibold text-success`),e(o,l(`当前正常渲染`));let s=h(`p`,n);e(n,s),m(s,`mt-2 text-sm opacity-80`),e(s,l(`当父组件传入`));let c=h(`span`,s);return e(s,c),m(c,`font-mono`),e(c,l(`crash=true`)),e(s,l(`时，这里会故意 throw。`)),n})),T=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],E=()=>{let{activeTab:E,shouldCrash:D,isTriggering:ee,errorMessage:O,capturedCount:te,statusText:ne,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>p(()=>{let e=y(`ref:1:0`,()=>r(`preview`)),n=y(`ref:1:1`,()=>r(!1)),i=y(`ref:1:2`,()=>r(!1)),a=y(`ref:1:3`,()=>r(``)),o=y(`ref:1:4`,()=>r(0)),s=y(`ref:1:5`,()=>r(`等待触发：BrokenPanel 现在正常渲染。`)),c=y(`ref:1:6`,()=>r(null));return t(e=>{let t=e instanceof Error?e.message:String(e),r=o.value+1;return n.value=!1,i.value=!1,a.value=t,o.value=r,s.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,c.value={id:r,message:t,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:n,isTriggering:i,errorMessage:a,capturedCount:o,statusText:s,latestCapture:c,triggerChildError:()=>{i.value||(i.value=!0,a.value=``,s.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,n.value=!0)},resetDemo:()=>{n.value=!1,i.value=!1,a.value=``,o.value=0,s.value=`等待触发：BrokenPanel 现在正常渲染。`,c.value=null}}}));return u(t=>{let r=d(),p=v(`rue:component:anchor`);return e(r,p),f(g(C,{children:u(()=>{let t=d(),r=h(`h1`,t);e(t,r),m(r,`text-5xl font-semibold mb-4 md:mb-4`),e(r,l(`onErrorCaptured 错误捕获`));let p=h(`div`,t);e(t,p),s(p,`role`,`tablist`),m(p,`tabs tabs-box`);let y=h(`button`,p);e(p,y),s(y,`role`,`tab`),n(()=>{m(y,`tab ${E.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{E.value=`preview`}),e(y,l(`效果`));let C=h(`button`,p);e(p,C),s(C,`role`,`tab`),n(()=>{m(C,`tab ${E.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{E.value=`code`}),e(C,l(`代码`));let M=h(`div`,t);e(t,M),m(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=v(`rue:slot:anchor`);e(M,N),n(()=>{let t=E.value===`code`?u(()=>{let t=d(),r=h(`div`,t);e(t,r),m(r,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,r);e(r,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return e(i,a),n(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

const BrokenPanel: FC<{ crash: boolean }> = props => {
  if (props.crash) {
    throw new Error('BrokenPanel 在渲染时故意抛出的错误');
  }

  return <div>子组件正常渲染</div>;
};

const ErrorBoundaryDemo: FC = () => {
  const shouldCrash = ref(false);
  const errorMessage = ref('');
  const capturedCount = ref(0);

  onErrorCaptured(error => {
    const message = error instanceof Error ? error.message : String(error);

    // 关键点：先关闭会抛错的状态，再记录错误信息。
    // 否则记录日志这类响应式更新可能让 crash=true 的子组件再次渲染。
    shouldCrash.value = false;
    errorMessage.value = message;
    capturedCount.value += 1;

    // 返回 false 表示这个错误已经处理，不再继续向上冒泡。
    return false;
  });

  return (
    <section>
      <button onClick={() => {
        errorMessage.value = '';
        shouldCrash.value = true;
      }}>
        故意触发一次子组件错误
      </button>
      <p>已捕获 {capturedCount.value} 次</p>
      {errorMessage.value && <p>父组件已捕获：{errorMessage.value}</p>}
      {shouldCrash.value ? <BrokenPanel crash={true} /> : <BrokenPanel crash={false} />}
    </section>
  );
};

export default ErrorBoundaryDemo;`});_(()=>f(e,i,a))}),t}):``;_(()=>f(t,M,N))}),e(M,l(` `));let P=v(`rue:slot:anchor`);return e(M,P),n(()=>{let t=E.value===`preview`?u(()=>{let t=d(),r=h(`div`,t);e(t,r),m(r,`card bg-base-100 shadow`);let p=h(`div`,r);e(r,p),m(p,`card-body gap-5`);let y=h(`div`,p);e(p,y),m(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let x=h(`div`,y);e(y,x),m(x,`flex flex-wrap items-center justify-between gap-3`);let C=h(`div`,x);e(x,C);let E=h(`p`,C);e(C,E),m(E,`text-sm font-semibold`),e(E,l(`这个示例会故意制造一次子组件错误`));let M=h(`p`,C);e(C,M),m(M,`mt-1 text-sm opacity-70`),e(M,l(`错误来源是`));let N=h(`span`,M);e(M,N),m(N,`font-mono`),e(N,l(`BrokenPanel`)),e(M,l(`，捕获者是当前父组件。`));let P=h(`span`,x);e(x,P),m(P,`badge badge-outline`),e(P,l(`已捕获 `));let F=a(P);e(P,F),n(()=>{o(F,te.value)}),e(P,l(` 次`));let I=h(`div`,p);e(p,I),m(I,`grid gap-3 md:grid-cols-3`);let L=v(`rue:list:start`),R=v(`rue:list:end`);e(I,L),e(I,R);let z=new Map;n(()=>{z=b({items:T||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(t,r,i,a,o)=>{f(u(()=>{let r=d(),i=h(`div`,r);e(r,i),m(i,`rounded-lg border border-base-300 p-4`),n(()=>{s(i,`key`,String(t.title))});let a=h(`h2`,i);e(i,a),m(a,`text-sm font-semibold`);let o=v(`rue:slot:anchor`);e(a,o),n(()=>{let e=t.title;_(()=>f(e,a,o))});let c=h(`p`,i);e(i,c),m(c,`mt-2 text-sm leading-6 opacity-70`);let l=v(`rue:slot:anchor`);return e(c,l),n(()=>{let e=t.body;_(()=>f(e,c,l))}),r}),r,i)}})});let B=h(`div`,p);e(p,B),m(B,`flex flex-wrap items-center gap-3`);let V=h(`button`,B);e(B,V),m(V,`btn btn-primary`),n(()=>{c(V,ee.value)}),i(V,`click`,A),e(V,l(`故意触发一次错误`));let H=h(`button`,B);e(B,H),m(H,`btn btn-ghost`),i(H,`click`,j),e(H,l(`清空记录`));let U=h(`div`,p);e(p,U),m(U,`rounded-lg border border-base-300 p-4`);let W=h(`div`,U);e(U,W),m(W,`flex flex-wrap items-center gap-2`);let G=h(`span`,W);e(W,G),m(G,`badge badge-info badge-outline`),e(G,l(`当前状态`));let K=h(`span`,W);e(W,K),m(K,`text-sm`);let q=a(K);e(K,q),n(()=>{o(q,ne.value)});let J=v(`rue:slot:anchor`);e(U,J),n(()=>{let t=O.value?u(()=>{let t=d(),r=h(`div`,t);e(t,r),m(r,`alert alert-warning mt-4`);let i=h(`span`,r);e(r,i),e(i,l(`父组件已捕获`));let s=h(`span`,i);e(i,s),m(s,`font-mono`),e(s,l(`BrokenPanel`)),e(i,l(`的错误： `));let c=a(i);return e(i,c),n(()=>{o(c,O.value)}),t}):``;_(()=>f(t,U,J))});let Y=v(`rue:slot:anchor`);e(p,Y),n(()=>{let t=D.value?u(()=>{let t=d(),n=v(`rue:component:anchor`);return e(t,n),f(g(w,{crash:!0}),t,n),t}):u(()=>{let t=d(),n=v(`rue:component:anchor`);return e(t,n),f(g(w,{crash:!1}),t,n),t});_(()=>f(t,p,Y))});let X=h(`div`,p);e(p,X),m(X,`rounded-lg border border-base-300 p-4`);let Z=h(`h2`,X);e(X,Z),m(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),e(Z,l(`最近一次捕获`));let Q=h(`div`,X);e(X,Q),m(Q,`mt-3 space-y-2`);let $=v(`rue:slot:anchor`);return e(Q,$),n(()=>{let t=k.value?(()=>{let e=k.value;return S(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[S(`div`,{className:`flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),S(`span`,{children:[`来源：`,e.source]})]}),S(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),S(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():u(()=>{let t=d(),n=h(`p`,t);return e(t,n),m(n,`text-sm opacity-60`),e(n,l(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),t});_(()=>f(t,Q,$))}),t}):``;_(()=>f(t,M,P))}),t})}),r,p),r})};export{E as default};