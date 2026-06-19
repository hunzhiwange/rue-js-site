import{$ as e,$t as t,B as n,Bt as r,Gt as i,X as a,Xt as o,Z as s,ct as c,et as l,ft as u,gt as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var w=e=>(y(`useSetup:0:0`,()=>o(()=>{if(e.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),f(e=>{let t=_(`div`,e);v(t,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let n=_(`div`,t);s(t,n),v(n,`flex flex-wrap items-center gap-2`);let r=_(`span`,n);s(n,r),v(r,`badge badge-success badge-outline`),s(r,p(`子组件`));let i=_(`span`,n);s(n,i),v(i,`font-mono text-sm`),s(i,p(`BrokenPanel`));let a=_(`h2`,t);s(t,a),v(a,`mt-3 text-lg font-semibold text-success`),s(a,p(`当前正常渲染`));let o=_(`p`,t);s(t,o),v(o,`mt-2 text-sm opacity-80`),s(o,p(`当父组件传入`));let c=_(`span`,o);return s(o,c),v(c,`font-mono`),s(c,p(`crash=true`)),s(o,p(`时，这里会故意 throw。`)),t})),T=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],E=()=>{let{activeTab:E,shouldCrash:ee,isTriggering:te,errorMessage:D,capturedCount:ne,statusText:O,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>o(()=>{let e=y(`ref:1:0`,()=>r(`preview`)),t=y(`ref:1:1`,()=>r(!1)),i=y(`ref:1:2`,()=>r(!1)),a=y(`ref:1:3`,()=>r(``)),o=y(`ref:1:4`,()=>r(0)),s=y(`ref:1:5`,()=>r(`等待触发：BrokenPanel 现在正常渲染。`)),c=y(`ref:1:6`,()=>r(null));return n(e=>{let n=e instanceof Error?e.message:String(e),r=o.value+1;return t.value=!1,i.value=!1,a.value=n,o.value=r,s.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,c.value={id:r,message:n,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:t,isTriggering:i,errorMessage:a,capturedCount:o,statusText:s,latestCapture:c,triggerChildError:()=>{i.value||(i.value=!0,a.value=``,s.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,t.value=!0)},resetDemo:()=>{t.value=!1,i.value=!1,a.value=``,o.value=0,s.value=`等待触发：BrokenPanel 现在正常渲染。`,c.value=null}}}));return f(n=>{let r=l(),o=e(`rue:component:anchor`);return s(r,o),m(g(C,{children:f(()=>{let n=l(),r=_(`h1`,n);s(n,r),v(r,`text-5xl font-semibold mb-4 md:mb-4`),s(r,p(`onErrorCaptured 错误捕获`));let o=_(`div`,n);s(n,o),c(o,`role`,`tablist`),v(o,`tabs tabs-box`);let y=_(`button`,o);s(o,y),c(y,`role`,`tab`),t(()=>{v(y,`tab ${E.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{E.value=`preview`}),s(y,p(`效果`));let C=_(`button`,o);s(o,C),c(C,`role`,`tab`),t(()=>{v(C,`tab ${E.value===`code`?`tab-active`:``}`)}),a(C,`click`,()=>{E.value=`code`}),s(C,p(`代码`));let M=_(`div`,n);s(n,M),v(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=e(`rue:slot:anchor`);s(M,N),t(()=>{let n=E.value===`code`?f(()=>{let n=l(),r=_(`div`,n);s(n,r),v(r,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,r);s(r,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});i(()=>m(e,a,o))}),n}):``;i(()=>m(n,M,N))}),s(M,p(` `));let P=e(`rue:slot:anchor`);return s(M,P),t(()=>{let n=E.value===`preview`?f(()=>{let n=l(),r=_(`div`,n);s(n,r),v(r,`card bg-base-100 shadow`);let o=_(`div`,r);s(r,o),v(o,`card-body gap-5`);let y=_(`div`,o);s(o,y),v(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let S=_(`div`,y);s(y,S),v(S,`flex flex-wrap items-center justify-between gap-3`);let C=_(`div`,S);s(S,C);let E=_(`p`,C);s(C,E),v(E,`text-sm font-semibold`),s(E,p(`这个示例会故意制造一次子组件错误`));let M=_(`p`,C);s(C,M),v(M,`mt-1 text-sm opacity-70`),s(M,p(`错误来源是`));let N=_(`span`,M);s(M,N),v(N,`font-mono`),s(N,p(`BrokenPanel`)),s(M,p(`，捕获者是当前父组件。`));let P=_(`span`,S);s(S,P),v(P,`badge badge-outline`),s(P,p(`已捕获 `));let F=h(P);s(P,F),t(()=>{d(F,ne.value)}),s(P,p(` 次`));let I=_(`div`,o);s(o,I),v(I,`grid gap-3 md:grid-cols-3`);let L=e(`rue:list:start`),R=e(`rue:list:end`);s(I,L),s(I,R);let z=new Map;t(()=>{z=b({items:T||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(n,r,a,o,u)=>{m(f(()=>{let r=l(),a=_(`div`,r);s(r,a),v(a,`rounded-lg border border-base-300 p-4`),t(()=>{c(a,`key`,String(n.title))});let o=_(`h2`,a);s(a,o),v(o,`text-sm font-semibold`);let u=e(`rue:slot:anchor`);s(o,u),t(()=>{let e=n.title;i(()=>m(e,o,u))});let d=_(`p`,a);s(a,d),v(d,`mt-2 text-sm leading-6 opacity-70`);let f=e(`rue:slot:anchor`);return s(d,f),t(()=>{let e=n.body;i(()=>m(e,d,f))}),r}),r,a)}})});let B=_(`div`,o);s(o,B),v(B,`flex flex-wrap items-center gap-3`);let V=_(`button`,B);s(B,V),v(V,`btn btn-primary`),t(()=>{u(V,te.value)}),a(V,`click`,A),s(V,p(`故意触发一次错误`));let H=_(`button`,B);s(B,H),v(H,`btn btn-ghost`),a(H,`click`,j),s(H,p(`清空记录`));let U=_(`div`,o);s(o,U),v(U,`rounded-lg border border-base-300 p-4`);let W=_(`div`,U);s(U,W),v(W,`flex flex-wrap items-center gap-2`);let G=_(`span`,W);s(W,G),v(G,`badge badge-info badge-outline`),s(G,p(`当前状态`));let K=_(`span`,W);s(W,K),v(K,`text-sm`);let q=h(K);s(K,q),t(()=>{d(q,O.value)});let J=e(`rue:slot:anchor`);s(U,J),t(()=>{let e=D.value?f(()=>{let e=l(),n=_(`div`,e);s(e,n),v(n,`alert alert-warning mt-4`);let r=_(`span`,n);s(n,r),s(r,p(`父组件已捕获`));let i=_(`span`,r);s(r,i),v(i,`font-mono`),s(i,p(`BrokenPanel`)),s(r,p(`的错误： `));let a=h(r);return s(r,a),t(()=>{d(a,D.value)}),e}):``;i(()=>m(e,U,J))});let Y=e(`rue:slot:anchor`);s(o,Y),t(()=>{let t=ee.value?f(()=>{let t=l(),n=e(`rue:component:anchor`);return s(t,n),m(g(w,{crash:!0}),t,n),t}):f(()=>{let t=l(),n=e(`rue:component:anchor`);return s(t,n),m(g(w,{crash:!1}),t,n),t});i(()=>m(t,o,Y))});let X=_(`div`,o);s(o,X),v(X,`rounded-lg border border-base-300 p-4`);let Z=_(`h2`,X);s(X,Z),v(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),s(Z,p(`最近一次捕获`));let Q=_(`div`,X);s(X,Q),v(Q,`mt-3 space-y-2`);let $=e(`rue:slot:anchor`);return s(Q,$),t(()=>{let e=k.value?(()=>{let e=k.value;return x(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[x(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),x(`span`,{children:[`来源：`,e.source]})]}),x(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),x(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():f(()=>{let e=l(),t=_(`p`,e);return s(e,t),v(t,`text-sm opacity-60`),s(t,p(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),e});i(()=>m(e,Q,$))}),n}):``;i(()=>m(n,M,P))}),n})}),r,o),r})};export{E as default};