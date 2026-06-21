import{$t as e,Jt as t,Q as n,V as r,Z as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,pt as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as C}from"./SidebarPlaygroundExample-BEWYUWOl.js";var w=e=>(y(`useSetup:0:0`,()=>s(()=>{if(e.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),l(e=>{let t=d(`div`,e);a(t,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let r=d(`div`,t);n(t,r),a(r,`flex flex-wrap items-center gap-2`);let i=d(`span`,r);n(r,i),a(i,`badge badge-success badge-outline`),n(i,m(`子组件`));let o=d(`span`,r);n(r,o),a(o,`font-mono text-sm`),n(o,m(`BrokenPanel`));let s=d(`h2`,t);n(t,s),a(s,`mt-3 text-lg font-semibold text-success`),n(s,m(`当前正常渲染`));let c=d(`p`,t);n(t,c),a(c,`mt-2 text-sm opacity-80`),n(c,m(`当父组件传入`));let l=d(`span`,c);return n(c,l),a(l,`font-mono`),n(l,m(`crash=true`)),n(c,m(`时，这里会故意 throw。`)),t})),ee=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],T=()=>{let{activeTab:T,shouldCrash:te,isTriggering:ne,errorMessage:E,capturedCount:D,statusText:O,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>s(()=>{let e=y(`ref:1:0`,()=>t(`preview`)),n=y(`ref:1:1`,()=>t(!1)),i=y(`ref:1:2`,()=>t(!1)),a=y(`ref:1:3`,()=>t(``)),o=y(`ref:1:4`,()=>t(0)),s=y(`ref:1:5`,()=>t(`等待触发：BrokenPanel 现在正常渲染。`)),c=y(`ref:1:6`,()=>t(null));return r(e=>{let t=e instanceof Error?e.message:String(e),r=o.value+1;return n.value=!1,i.value=!1,a.value=t,o.value=r,s.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,c.value={id:r,message:t,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:n,isTriggering:i,errorMessage:a,capturedCount:o,statusText:s,latestCapture:c,triggerChildError:()=>{i.value||(i.value=!0,a.value=``,s.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,n.value=!0)},resetDemo:()=>{n.value=!1,i.value=!1,a.value=``,o.value=0,s.value=`等待触发：BrokenPanel 现在正常渲染。`,c.value=null}}}));return l(t=>{let r=g(),s=o(`rue:component:anchor`);return n(r,s),f(h(C,{children:l(()=>{let t=g(),r=d(`h1`,t);n(t,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),n(r,m(`onErrorCaptured 错误捕获`));let s=d(`div`,t);n(t,s),u(s,`role`,`tablist`),a(s,`tabs tabs-box`);let y=d(`button`,s);n(s,y),u(y,`role`,`tab`),v(()=>{a(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{T.value=`preview`}),n(y,m(`效果`));let C=d(`button`,s);n(s,C),u(C,`role`,`tab`),v(()=>{a(C,`tab ${T.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{T.value=`code`}),n(C,m(`代码`));let M=d(`div`,t);n(t,M),a(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=o(`rue:slot:anchor`);n(M,N),v(()=>{let t=T.value===`code`?l(()=>{let t=g(),r=d(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),v(()=>{let t=h(S,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});e(()=>f(t,i,s))}),t}):``;e(()=>f(t,M,N))}),n(M,m(` `));let P=o(`rue:slot:anchor`);return n(M,P),v(()=>{let t=T.value===`preview`?l(()=>{let t=g(),r=d(`div`,t);n(t,r),a(r,`card bg-base-100 shadow`);let s=d(`div`,r);n(r,s),a(s,`card-body gap-5`);let y=d(`div`,s);n(s,y),a(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let S=d(`div`,y);n(y,S),a(S,`flex flex-wrap items-center justify-between gap-3`);let C=d(`div`,S);n(S,C);let T=d(`p`,C);n(C,T),a(T,`text-sm font-semibold`),n(T,m(`这个示例会故意制造一次子组件错误`));let M=d(`p`,C);n(C,M),a(M,`mt-1 text-sm opacity-70`),n(M,m(`错误来源是`));let N=d(`span`,M);n(M,N),a(N,`font-mono`),n(N,m(`BrokenPanel`)),n(M,m(`，捕获者是当前父组件。`));let P=d(`span`,S);n(S,P),a(P,`badge badge-outline`),n(P,m(`已捕获 `));let F=c(P);n(P,F),v(()=>{_(F,D.value)}),n(P,m(` 次`));let I=d(`div`,s);n(s,I),a(I,`grid gap-3 md:grid-cols-3`);let L=o(`rue:list:start`),R=o(`rue:list:end`);n(I,L),n(I,R);let z=new Map;v(()=>{z=b({items:ee||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(t,r,i,s,c)=>{f(l(()=>{let r=g(),i=d(`div`,r);n(r,i),a(i,`rounded-lg border border-base-300 p-4`),v(()=>{u(i,`key`,String(t.title))});let s=d(`h2`,i);n(i,s),a(s,`text-sm font-semibold`);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.title;e(()=>f(n,s,c))});let l=d(`p`,i);n(i,l),a(l,`mt-2 text-sm leading-6 opacity-70`);let p=o(`rue:slot:anchor`);return n(l,p),v(()=>{let n=t.body;e(()=>f(n,l,p))}),r}),r,i)}})});let B=d(`div`,s);n(s,B),a(B,`flex flex-wrap items-center gap-3`);let V=d(`button`,B);n(B,V),a(V,`btn btn-primary`),v(()=>{p(V,ne.value)}),i(V,`click`,A),n(V,m(`故意触发一次错误`));let H=d(`button`,B);n(B,H),a(H,`btn btn-ghost`),i(H,`click`,j),n(H,m(`清空记录`));let U=d(`div`,s);n(s,U),a(U,`rounded-lg border border-base-300 p-4`);let W=d(`div`,U);n(U,W),a(W,`flex flex-wrap items-center gap-2`);let G=d(`span`,W);n(W,G),a(G,`badge badge-info badge-outline`),n(G,m(`当前状态`));let K=d(`span`,W);n(W,K),a(K,`text-sm`);let q=c(K);n(K,q),v(()=>{_(q,O.value)});let J=o(`rue:slot:anchor`);n(U,J),v(()=>{let t=E.value?l(()=>{let e=g(),t=d(`div`,e);n(e,t),a(t,`alert alert-warning mt-4`);let r=d(`span`,t);n(t,r),n(r,m(`父组件已捕获`));let i=d(`span`,r);n(r,i),a(i,`font-mono`),n(i,m(`BrokenPanel`)),n(r,m(`的错误： `));let o=c(r);return n(r,o),v(()=>{_(o,E.value)}),e}):``;e(()=>f(t,U,J))});let Y=o(`rue:slot:anchor`);n(s,Y),v(()=>{let t=te.value?l(()=>{let e=g(),t=o(`rue:component:anchor`);return n(e,t),f(h(w,{crash:!0}),e,t),e}):l(()=>{let e=g(),t=o(`rue:component:anchor`);return n(e,t),f(h(w,{crash:!1}),e,t),e});e(()=>f(t,s,Y))});let X=d(`div`,s);n(s,X),a(X,`rounded-lg border border-base-300 p-4`);let Z=d(`h2`,X);n(X,Z),a(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),n(Z,m(`最近一次捕获`));let Q=d(`div`,X);n(X,Q),a(Q,`mt-3 space-y-2`);let $=o(`rue:slot:anchor`);return n(Q,$),v(()=>{let t=k.value?(()=>{let e=k.value;return x(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[x(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),x(`span`,{children:[`来源：`,e.source]})]}),x(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),x(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():l(()=>{let e=g(),t=d(`p`,e);return n(e,t),a(t,`text-sm opacity-60`),n(t,m(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),e});e(()=>f(t,Q,$))}),t}):``;e(()=>f(t,M,P))}),t})}),r,s),r})};export{T as default};