import{$ as e,Ht as t,J as n,L as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,l as d,lt as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as S}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var w=t=>(y(`useSetup:0:0`,()=>h(()=>{if(t.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),d(t=>{let r=a(`div`,t);_(r,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let i=a(`div`,r);n(r,i),_(i,`flex flex-wrap items-center gap-2`);let o=a(`span`,i);n(i,o),_(o,`badge badge-success badge-outline`),n(o,e(`子组件`));let s=a(`span`,i);n(i,s),_(s,`font-mono text-sm`),n(s,e(`BrokenPanel`));let c=a(`h2`,r);n(r,c),_(c,`mt-3 text-lg font-semibold text-success`),n(c,e(`当前正常渲染`));let l=a(`p`,r);n(r,l),_(l,`mt-2 text-sm opacity-80`),n(l,e(`当父组件传入`));let u=a(`span`,l);return n(l,u),_(u,`font-mono`),n(u,e(`crash=true`)),n(l,e(`时，这里会故意 throw。`)),r})),T=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],E=()=>{let{activeTab:E,shouldCrash:D,isTriggering:ee,errorMessage:O,capturedCount:te,statusText:ne,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>h(()=>{let e=y(`ref:1:0`,()=>i(`preview`)),t=y(`ref:1:1`,()=>i(!1)),n=y(`ref:1:2`,()=>i(!1)),a=y(`ref:1:3`,()=>i(``)),o=y(`ref:1:4`,()=>i(0)),s=y(`ref:1:5`,()=>i(`等待触发：BrokenPanel 现在正常渲染。`)),c=y(`ref:1:6`,()=>i(null));return r(e=>{let r=e instanceof Error?e.message:String(e),i=o.value+1;return t.value=!1,n.value=!1,a.value=r,o.value=i,s.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,c.value={id:i,message:r,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:t,isTriggering:n,errorMessage:a,capturedCount:o,statusText:s,latestCapture:c,triggerChildError:()=>{n.value||(n.value=!0,a.value=``,s.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,t.value=!0)},resetDemo:()=>{t.value=!1,n.value=!1,a.value=``,o.value=0,s.value=`等待触发：BrokenPanel 现在正常渲染。`,c.value=null}}}));return d(r=>{let i=c(),h=o(`rue:component:anchor`);return n(i,h),g(v(C,{children:d(()=>{let r=c(),i=a(`h1`,r);n(r,i),_(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,e(`onErrorCaptured 错误捕获`));let h=a(`div`,r);n(r,h),l(h,`role`,`tablist`),_(h,`tabs tabs-box`);let y=a(`button`,h);n(h,y),l(y,`role`,`tab`),s(()=>{_(y,`tab ${E.value===`preview`?`tab-active`:``}`)}),m(y,`click`,()=>{E.value=`preview`}),n(y,e(`效果`));let C=a(`button`,h);n(h,C),l(C,`role`,`tab`),s(()=>{_(C,`tab ${E.value===`code`?`tab-active`:``}`)}),m(C,`click`,()=>{E.value=`code`}),n(C,e(`代码`));let M=a(`div`,r);n(r,M),_(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=o(`rue:slot:anchor`);n(M,N),s(()=>{let e=E.value===`code`?d(()=>{let e=c(),r=a(`div`,e);n(e,r),_(r,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,r);n(r,i),_(i,`card-body p-0`);let l=o(`rue:component:anchor`);return n(i,l),s(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});t(()=>g(e,i,l))}),e}):``;t(()=>g(e,M,N))}),n(M,e(` `));let P=o(`rue:slot:anchor`);return n(M,P),s(()=>{let r=E.value===`preview`?d(()=>{let r=c(),i=a(`div`,r);n(r,i),_(i,`card bg-base-100 shadow`);let h=a(`div`,i);n(i,h),_(h,`card-body gap-5`);let y=a(`div`,h);n(h,y),_(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let S=a(`div`,y);n(y,S),_(S,`flex flex-wrap items-center justify-between gap-3`);let C=a(`div`,S);n(S,C);let E=a(`p`,C);n(C,E),_(E,`text-sm font-semibold`),n(E,e(`这个示例会故意制造一次子组件错误`));let M=a(`p`,C);n(C,M),_(M,`mt-1 text-sm opacity-70`),n(M,e(`错误来源是`));let N=a(`span`,M);n(M,N),_(N,`font-mono`),n(N,e(`BrokenPanel`)),n(M,e(`，捕获者是当前父组件。`));let P=a(`span`,S);n(S,P),_(P,`badge badge-outline`),n(P,e(`已捕获 `));let F=u(P);n(P,F),s(()=>{p(F,te.value)}),n(P,e(` 次`));let I=a(`div`,h);n(h,I),_(I,`grid gap-3 md:grid-cols-3`);let L=o(`rue:list:start`),R=o(`rue:list:end`);n(I,L),n(I,R);let z=new Map;s(()=>{z=b({items:T||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(e,r,i,u,f)=>{g(d(()=>{let r=c(),i=a(`div`,r);n(r,i),_(i,`rounded-lg border border-base-300 p-4`),s(()=>{l(i,`key`,String(e.title))});let u=a(`h2`,i);n(i,u),_(u,`text-sm font-semibold`);let d=o(`rue:slot:anchor`);n(u,d),s(()=>{let n=e.title;t(()=>g(n,u,d))});let f=a(`p`,i);n(i,f),_(f,`mt-2 text-sm leading-6 opacity-70`);let p=o(`rue:slot:anchor`);return n(f,p),s(()=>{let n=e.body;t(()=>g(n,f,p))}),r}),r,i)}})});let B=a(`div`,h);n(h,B),_(B,`flex flex-wrap items-center gap-3`);let V=a(`button`,B);n(B,V),_(V,`btn btn-primary`),s(()=>{f(V,ee.value)}),m(V,`click`,A),n(V,e(`故意触发一次错误`));let H=a(`button`,B);n(B,H),_(H,`btn btn-ghost`),m(H,`click`,j),n(H,e(`清空记录`));let U=a(`div`,h);n(h,U),_(U,`rounded-lg border border-base-300 p-4`);let W=a(`div`,U);n(U,W),_(W,`flex flex-wrap items-center gap-2`);let G=a(`span`,W);n(W,G),_(G,`badge badge-info badge-outline`),n(G,e(`当前状态`));let K=a(`span`,W);n(W,K),_(K,`text-sm`);let q=u(K);n(K,q),s(()=>{p(q,ne.value)});let J=o(`rue:slot:anchor`);n(U,J),s(()=>{let r=O.value?d(()=>{let t=c(),r=a(`div`,t);n(t,r),_(r,`alert alert-warning mt-4`);let i=a(`span`,r);n(r,i),n(i,e(`父组件已捕获`));let o=a(`span`,i);n(i,o),_(o,`font-mono`),n(o,e(`BrokenPanel`)),n(i,e(`的错误： `));let l=u(i);return n(i,l),s(()=>{p(l,O.value)}),t}):``;t(()=>g(r,U,J))});let Y=o(`rue:slot:anchor`);n(h,Y),s(()=>{let e=D.value?d(()=>{let e=c(),t=o(`rue:component:anchor`);return n(e,t),g(v(w,{crash:!0}),e,t),e}):d(()=>{let e=c(),t=o(`rue:component:anchor`);return n(e,t),g(v(w,{crash:!1}),e,t),e});t(()=>g(e,h,Y))});let X=a(`div`,h);n(h,X),_(X,`rounded-lg border border-base-300 p-4`);let Z=a(`h2`,X);n(X,Z),_(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),n(Z,e(`最近一次捕获`));let Q=a(`div`,X);n(X,Q),_(Q,`mt-3 space-y-2`);let $=o(`rue:slot:anchor`);return n(Q,$),s(()=>{let r=k.value?(()=>{let e=k.value;return x(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[x(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),x(`span`,{children:[`来源：`,e.source]})]}),x(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),x(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():d(()=>{let t=c(),r=a(`p`,t);return n(t,r),_(r,`text-sm opacity-60`),n(r,e(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),t});t(()=>g(r,Q,$))}),r}):``;t(()=>g(r,M,P))}),r})}),i,h),i})};export{E as default};