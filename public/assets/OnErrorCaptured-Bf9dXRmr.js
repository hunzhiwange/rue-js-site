import{Cn as e,Ct as t,Dt as n,K as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S}from"./src-CCTNpCXV.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var w=t=>(y(`useSetup:0:0`,()=>e(()=>{if(t.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),g(e=>{let t=f(`div`,e);a(t,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let n=f(`div`,t);p(t,n),a(n,`flex flex-wrap items-center gap-2`);let r=f(`span`,n);p(n,r),a(r,`badge badge-success badge-outline`),p(r,l(`子组件`));let i=f(`span`,n);p(n,i),a(i,`font-mono text-sm`),p(i,l(`BrokenPanel`));let o=f(`h2`,t);p(t,o),a(o,`mt-3 text-lg font-semibold text-success`),p(o,l(`当前正常渲染`));let s=f(`p`,t);p(t,s),a(s,`mt-2 text-sm opacity-80`),p(s,l(`当父组件传入`));let c=f(`span`,s);return p(s,c),a(c,`font-mono`),p(c,l(`crash=true`)),p(s,l(`时，这里会故意 throw。`)),t})),T=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],E=()=>{let{activeTab:E,shouldCrash:D,isTriggering:ee,errorMessage:O,capturedCount:te,statusText:ne,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>e(()=>{let e=y(`ref:1:0`,()=>d(`preview`)),t=y(`ref:1:1`,()=>d(!1)),n=y(`ref:1:2`,()=>d(!1)),i=y(`ref:1:3`,()=>d(``)),a=y(`ref:1:4`,()=>d(0)),o=y(`ref:1:5`,()=>d(`等待触发：BrokenPanel 现在正常渲染。`)),s=y(`ref:1:6`,()=>d(null));return r(e=>{let r=e instanceof Error?e.message:String(e),c=a.value+1;return t.value=!1,n.value=!1,i.value=r,a.value=c,o.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,s.value={id:c,message:r,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:t,isTriggering:n,errorMessage:i,capturedCount:a,statusText:o,latestCapture:s,triggerChildError:()=>{n.value||(n.value=!0,i.value=``,o.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,t.value=!0)},resetDemo:()=>{t.value=!1,n.value=!1,i.value=``,a.value=0,o.value=`等待触发：BrokenPanel 现在正常渲染。`,s.value=null}}}));return g(e=>{let r=s(),d=o(`rue:component:anchor`);return p(r,d),_(v(C,{children:g(()=>{let e=s(),r=f(`h1`,e);p(e,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),p(r,l(`onErrorCaptured 错误捕获`));let d=f(`div`,e);p(e,d),t(d,`role`,`tablist`),a(d,`tabs tabs-box`);let y=f(`button`,d);p(d,y),t(y,`role`,`tab`),m(()=>{a(y,`tab ${E.value===`preview`?`tab-active`:``}`)}),u(y,`click`,()=>{E.value=`preview`}),p(y,l(`效果`));let C=f(`button`,d);p(d,C),t(C,`role`,`tab`),m(()=>{a(C,`tab ${E.value===`code`?`tab-active`:``}`)}),u(C,`click`,()=>{E.value=`code`}),p(C,l(`代码`));let M=f(`div`,e);p(e,M),a(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=o(`rue:slot:anchor`);p(M,N),m(()=>{let e=E.value===`code`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return p(n,r),m(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});h(()=>_(e,n,r))}),e}):``;h(()=>_(e,M,N))}),p(M,l(` `));let P=o(`rue:slot:anchor`);return p(M,P),m(()=>{let e=E.value===`preview`?g(()=>{let e=s(),r=f(`div`,e);p(e,r),a(r,`card bg-base-100 shadow`);let d=f(`div`,r);p(r,d),a(d,`card-body gap-5`);let y=f(`div`,d);p(d,y),a(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let x=f(`div`,y);p(y,x),a(x,`flex flex-wrap items-center justify-between gap-3`);let C=f(`div`,x);p(x,C);let E=f(`p`,C);p(C,E),a(E,`text-sm font-semibold`),p(E,l(`这个示例会故意制造一次子组件错误`));let M=f(`p`,C);p(C,M),a(M,`mt-1 text-sm opacity-70`),p(M,l(`错误来源是`));let N=f(`span`,M);p(M,N),a(N,`font-mono`),p(N,l(`BrokenPanel`)),p(M,l(`，捕获者是当前父组件。`));let P=f(`span`,x);p(x,P),a(P,`badge badge-outline`),p(P,l(`已捕获 `));let F=c(P);p(P,F),m(()=>{i(F,te.value)}),p(P,l(` 次`));let I=f(`div`,d);p(d,I),a(I,`grid gap-3 md:grid-cols-3`);let L=o(`rue:list:start`),R=o(`rue:list:end`);p(I,L),p(I,R);let z=new Map;m(()=>{z=b({items:T||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(e,n,r,i,c)=>{_(g(()=>{let n=s(),r=f(`div`,n);p(n,r),a(r,`rounded-lg border border-base-300 p-4`),m(()=>{t(r,`key`,String(e.title))});let i=f(`h2`,r);p(r,i),a(i,`text-sm font-semibold`);let c=o(`rue:slot:anchor`);p(i,c),m(()=>{let t=e.title;h(()=>_(t,i,c))});let l=f(`p`,r);p(r,l),a(l,`mt-2 text-sm leading-6 opacity-70`);let u=o(`rue:slot:anchor`);return p(l,u),m(()=>{let t=e.body;h(()=>_(t,l,u))}),n}),n,r)}})});let B=f(`div`,d);p(d,B),a(B,`flex flex-wrap items-center gap-3`);let V=f(`button`,B);p(B,V),a(V,`btn btn-primary`),m(()=>{n(V,ee.value)}),u(V,`click`,A),p(V,l(`故意触发一次错误`));let H=f(`button`,B);p(B,H),a(H,`btn btn-ghost`),u(H,`click`,j),p(H,l(`清空记录`));let U=f(`div`,d);p(d,U),a(U,`rounded-lg border border-base-300 p-4`);let W=f(`div`,U);p(U,W),a(W,`flex flex-wrap items-center gap-2`);let G=f(`span`,W);p(W,G),a(G,`badge badge-info badge-outline`),p(G,l(`当前状态`));let K=f(`span`,W);p(W,K),a(K,`text-sm`);let q=c(K);p(K,q),m(()=>{i(q,ne.value)});let J=o(`rue:slot:anchor`);p(U,J),m(()=>{let e=O.value?g(()=>{let e=s(),t=f(`div`,e);p(e,t),a(t,`alert alert-warning mt-4`);let n=f(`span`,t);p(t,n),p(n,l(`父组件已捕获`));let r=f(`span`,n);p(n,r),a(r,`font-mono`),p(r,l(`BrokenPanel`)),p(n,l(`的错误： `));let o=c(n);return p(n,o),m(()=>{i(o,O.value)}),e}):``;h(()=>_(e,U,J))});let Y=o(`rue:slot:anchor`);p(d,Y),m(()=>{let e=D.value?g(()=>{let e=s(),t=o(`rue:component:anchor`);return p(e,t),_(v(w,{crash:!0}),e,t),e}):g(()=>{let e=s(),t=o(`rue:component:anchor`);return p(e,t),_(v(w,{crash:!1}),e,t),e});h(()=>_(e,d,Y))});let X=f(`div`,d);p(d,X),a(X,`rounded-lg border border-base-300 p-4`);let Z=f(`h2`,X);p(X,Z),a(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),p(Z,l(`最近一次捕获`));let Q=f(`div`,X);p(X,Q),a(Q,`mt-3 space-y-2`);let $=o(`rue:slot:anchor`);return p(Q,$),m(()=>{let e=k.value?(()=>{let e=k.value;return S(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[S(`div`,{className:`flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),S(`span`,{children:[`来源：`,e.source]})]}),S(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),S(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():g(()=>{let e=s(),t=f(`p`,e);return p(e,t),a(t,`text-sm opacity-60`),p(t,l(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),e});h(()=>_(e,Q,$))}),e}):``;h(()=>_(e,M,P))}),e})}),r,d),r})};export{E as default};