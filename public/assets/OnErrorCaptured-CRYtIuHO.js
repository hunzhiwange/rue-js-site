import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,dt as s,et as c,ht as l,l as u,lt as d,nt as f,o as p,st as m,t as h,tt as g,z as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as S}from"./Code-BIscIyEp.js";import{r as C}from"./SidebarPlaygroundExample-CEz1fABX.js";var w=e=>(y(`useSetup:0:0`,()=>o(()=>{if(e.crash)throw Error(`BrokenPanel 在渲染时故意抛出的错误`);return{}})),u(e=>{let t=c(`div`,e);d(t,`rounded-lg border border-success/30 bg-success/10 p-4 min-h-28`);let n=c(`div`,t);i(t,n),d(n,`flex flex-wrap items-center gap-2`);let r=c(`span`,n);i(n,r),d(r,`badge badge-success badge-outline`),i(r,g(`子组件`));let a=c(`span`,n);i(n,a),d(a,`font-mono text-sm`),i(a,g(`BrokenPanel`));let o=c(`h2`,t);i(t,o),d(o,`mt-3 text-lg font-semibold text-success`),i(o,g(`当前正常渲染`));let s=c(`p`,t);i(t,s),d(s,`mt-2 text-sm opacity-80`),i(s,g(`当父组件传入`));let l=c(`span`,s);return i(s,l),d(l,`font-mono`),i(l,g(`crash=true`)),i(s,g(`时，这里会故意 throw。`)),t})),T=[{title:`1. 触发`,body:`按钮只做一件事：把 shouldCrash 设为 true。`},{title:`2. 抛错`,body:`BrokenPanel 看到 crash=true 后主动 throw。`},{title:`3. 捕获`,body:`父组件 onErrorCaptured 先关闭 crash，再记录错误。`}],E=()=>{let{activeTab:E,shouldCrash:D,isTriggering:ee,errorMessage:O,capturedCount:te,statusText:ne,latestCapture:k,triggerChildError:A,resetDemo:j}=y(`useSetup:0:0:dup1`,()=>o(()=>{let e=y(`ref:1:0`,()=>v(`preview`)),t=y(`ref:1:1`,()=>v(!1)),n=y(`ref:1:2`,()=>v(!1)),r=y(`ref:1:3`,()=>v(``)),i=y(`ref:1:4`,()=>v(0)),a=y(`ref:1:5`,()=>v(`等待触发：BrokenPanel 现在正常渲染。`)),o=y(`ref:1:6`,()=>v(null));return _(e=>{let s=e instanceof Error?e.message:String(e),c=i.value+1;return t.value=!1,n.value=!1,r.value=s,i.value=c,a.value=`已捕获：父组件返回 false，错误不会继续向上冒泡。`,o.value={id:c,message:s,source:`BrokenPanel`,result:`return false，停止冒泡`},!1}),{activeTab:e,shouldCrash:t,isTriggering:n,errorMessage:r,capturedCount:i,statusText:a,latestCapture:o,triggerChildError:()=>{n.value||(n.value=!0,r.value=``,a.value=`准备触发：下一次渲染会让 BrokenPanel 抛错。`,t.value=!0)},resetDemo:()=>{t.value=!1,n.value=!1,r.value=``,i.value=0,a.value=`等待触发：BrokenPanel 现在正常渲染。`,o.value=null}}}));return u(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),p(h(C,{children:u(()=>{let o=e(),_=c(`h1`,o);i(o,_),d(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,g(`onErrorCaptured 错误捕获`));let v=c(`div`,o);i(o,v),m(v,`role`,`tablist`),d(v,`tabs tabs-box`);let y=c(`button`,v);i(v,y),m(y,`role`,`tab`),n(()=>{d(y,`tab ${E.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{E.value=`preview`}),i(y,g(`效果`));let C=c(`button`,v);i(v,C),m(C,`role`,`tab`),n(()=>{d(C,`tab ${E.value===`code`?`tab-active`:``}`)}),a(C,`click`,()=>{E.value=`code`}),i(C,g(`代码`));let M=c(`div`,o);i(o,M),d(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=t(`rue:slot:anchor`);i(M,N),n(()=>{let a=E.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`card bg-base-100 shadow overflow-auto`);let s=c(`div`,o);i(o,s),d(s,`card-body p-0`);let l=t(`rue:component:anchor`);return i(s,l),n(()=>{let e=h(S,{className:`h-full`,lang:`tsx`,code:`import { type FC, onErrorCaptured, ref } from '@rue-js/rue';

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

export default ErrorBoundaryDemo;`});r(()=>p(e,s,l))}),a}):``;r(()=>p(a,M,N))}),i(M,g(` `));let P=t(`rue:slot:anchor`);return i(M,P),n(()=>{let o=E.value===`preview`?u(()=>{let o=e(),_=c(`div`,o);i(o,_),d(_,`card bg-base-100 shadow`);let v=c(`div`,_);i(_,v),d(v,`card-body gap-5`);let y=c(`div`,v);i(v,y),d(y,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let S=c(`div`,y);i(y,S),d(S,`flex flex-wrap items-center justify-between gap-3`);let C=c(`div`,S);i(S,C);let E=c(`p`,C);i(C,E),d(E,`text-sm font-semibold`),i(E,g(`这个示例会故意制造一次子组件错误`));let M=c(`p`,C);i(C,M),d(M,`mt-1 text-sm opacity-70`),i(M,g(`错误来源是`));let N=c(`span`,M);i(M,N),d(N,`font-mono`),i(N,g(`BrokenPanel`)),i(M,g(`，捕获者是当前父组件。`));let P=c(`span`,S);i(S,P),d(P,`badge badge-outline`),i(P,g(`已捕获 `));let F=f(P);i(P,F),n(()=>{l(F,te.value)}),i(P,g(` 次`));let I=c(`div`,v);i(v,I),d(I,`grid gap-3 md:grid-cols-3`);let L=t(`rue:list:start`),R=t(`rue:list:end`);i(I,L),i(I,R);let z=new Map;n(()=>{z=b({items:T||[],getKey:(e,t)=>e.title,elements:z,parent:I,before:R,singleRoot:!0,trackIndex:!1,start:L,renderItem:(a,o,s,l,f)=>{p(u(()=>{let o=e(),s=c(`div`,o);i(o,s),d(s,`rounded-lg border border-base-300 p-4`),n(()=>{m(s,`key`,String(a.title))});let l=c(`h2`,s);i(s,l),d(l,`text-sm font-semibold`);let u=t(`rue:slot:anchor`);i(l,u),n(()=>{let e=a.title;r(()=>p(e,l,u))});let f=c(`p`,s);i(s,f),d(f,`mt-2 text-sm leading-6 opacity-70`);let h=t(`rue:slot:anchor`);return i(f,h),n(()=>{let e=a.body;r(()=>p(e,f,h))}),o}),o,s)}})});let B=c(`div`,v);i(v,B),d(B,`flex flex-wrap items-center gap-3`);let V=c(`button`,B);i(B,V),d(V,`btn btn-primary`),n(()=>{s(V,ee.value)}),a(V,`click`,A),i(V,g(`故意触发一次错误`));let H=c(`button`,B);i(B,H),d(H,`btn btn-ghost`),a(H,`click`,j),i(H,g(`清空记录`));let U=c(`div`,v);i(v,U),d(U,`rounded-lg border border-base-300 p-4`);let W=c(`div`,U);i(U,W),d(W,`flex flex-wrap items-center gap-2`);let G=c(`span`,W);i(W,G),d(G,`badge badge-info badge-outline`),i(G,g(`当前状态`));let K=c(`span`,W);i(W,K),d(K,`text-sm`);let q=f(K);i(K,q),n(()=>{l(q,ne.value)});let J=t(`rue:slot:anchor`);i(U,J),n(()=>{let t=O.value?u(()=>{let t=e(),r=c(`div`,t);i(t,r),d(r,`alert alert-warning mt-4`);let a=c(`span`,r);i(r,a),i(a,g(`父组件已捕获`));let o=c(`span`,a);i(a,o),d(o,`font-mono`),i(o,g(`BrokenPanel`)),i(a,g(`的错误： `));let s=f(a);return i(a,s),n(()=>{l(s,O.value)}),t}):``;r(()=>p(t,U,J))});let Y=t(`rue:slot:anchor`);i(v,Y),n(()=>{let n=D.value?u(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),p(h(w,{crash:!0}),n,r),n}):u(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),p(h(w,{crash:!1}),n,r),n});r(()=>p(n,v,Y))});let X=c(`div`,v);i(v,X),d(X,`rounded-lg border border-base-300 p-4`);let Z=c(`h2`,X);i(X,Z),d(Z,`text-sm font-semibold uppercase tracking-wide opacity-70`),i(Z,g(`最近一次捕获`));let Q=c(`div`,X);i(X,Q),d(Q,`mt-3 space-y-2`);let $=t(`rue:slot:anchor`);return i(Q,$),n(()=>{let t=k.value?(()=>{let e=k.value;return x(`div`,{className:`rounded-md bg-base-200 px-3 py-3 text-sm`,children:[x(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(`span`,{className:`badge badge-warning badge-outline`,children:[`第 `,e.id,` 次`]}),x(`span`,{children:[`来源：`,e.source]})]}),x(`p`,{className:`mt-2`,children:[`错误：`,e.message]}),x(`p`,{className:`mt-1 opacity-70`,children:[`处理：`,e.result]})]})})():u(()=>{let t=e(),n=c(`p`,t);return i(t,n),d(n,`text-sm opacity-60`),i(n,g(`还没有捕获到错误。点击按钮后，这里会显示最近一次捕获。`)),t});r(()=>p(t,Q,$))}),o}):``;r(()=>p(o,M,P))}),o})}),_,v),_})};export{E as default};