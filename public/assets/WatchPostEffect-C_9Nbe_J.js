import{$ as e,At as t,Gt as n,J as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,bt as d,ct as f,et as p,l as m,mt as h,ot as g,r as _,s as v,t as y,tt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-CJFAWine.js";import{t as S}from"./Code-Ds9lKLk6.js";import{t as ne}from"./SidebarPlaygroundExample-KML-rOvA.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

const WatchPostEffectDemo: FC = () => {
  const count = ref(0);
  const syncDomText = ref('尚未读取');
  const postDomText = ref('等待首次 flush');
  const tickDomText = ref('尚未读取');
  const countRef = useRef<HTMLSpanElement>();

  watchPostEffect(() => {
    count.value;
    postDomText.value = countRef.current?.textContent ?? '(missing)';
  });

  const add = async () => {
    count.value += 1;
    syncDomText.value = countRef.current?.textContent ?? '(missing)';
    tickDomText.value = '等待 nextTick...';
    await nextTick();
    tickDomText.value = countRef.current?.textContent ?? '(missing)';
  };

  return (
    <div className="grid gap-4">
      <div>状态值：{count.value}</div>
      <div>
        DOM 文本：<span ref={countRef}>{count.value}</span>
      </div>
      <button onClick={() => void add()}>增加并读取 DOM</button>
      <div>同步读取：{syncDomText.value}</div>
      <div>watchPostEffect：{postDomText.value}</div>
      <div>nextTick 后：{tickDomText.value}</div>
    </div>
  );
};

export default WatchPostEffectDemo;`,w=()=>{let s=x(`useSetup:0:0`,()=>i(()=>{let e=x(`ref:1:0`,()=>a(0)),r=x(`ref:1:1`,()=>a(`尚未读取`)),i=x(`ref:1:2`,()=>a(`等待首次 flush`)),o=x(`ref:1:3`,()=>a(`尚未读取`)),s=x(`ref:1:4`,()=>a(`点击按钮后观察三种读取时机。`)),c=x(`ref:1:5`,()=>a([])),l=x(`useRef:1:6`,()=>n()),u=0,d=[];return t(()=>{let t=e.value,n=l.current?.textContent??`(missing)`;u+=1,i.value=n,d.unshift(`post #${u}: state=${t}, DOM=${n}`),c.value=d.slice(0,5)}),{count:e,syncDomText:r,postDomText:i,tickDomText:o,actionNote:s,logLines:c,countRef:l,history:d,postRun:u}})),{count:y,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:T,countRef:E,history:D}=s,{postRun:O}=s,re=async e=>{for(let t=0;t<e;t+=1)y.value+=1;S.value=E.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${y.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await d(),C.value=E.current?.textContent??`(missing)`},ie=async()=>{y.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await d(),C.value=E.current?.textContent??`(missing)`};return m(t=>{let n=e(`div`,t);f(n,`card bg-base-100 shadow`);let i=e(`div`,n);c(n,i),f(i,`card-body gap-5`);let a=e(`p`,i);c(i,a),f(a,`text-base-content/70 leading-7`),c(a,p("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let s=e(`div`,i);c(i,s),f(s,`rounded-box border border-base-300 bg-base-200/40 p-5`);let d=e(`div`,s);c(s,d),f(d,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(d,p(`响应式状态`));let x=e(`div`,s);c(s,x),f(x,`mt-3 flex flex-wrap items-end gap-4`);let D=e(`div`,x);c(x,D);let O=e(`div`,D);c(D,O),f(O,`text-sm text-base-content/60`),c(O,p(`count.value`));let k=e(`div`,D);c(D,k),f(k,`text-5xl font-semibold text-primary`);let ae=b(k);c(k,ae),l(()=>{h(ae,y.value)});let A=e(`div`,x);c(x,A),f(A,`min-w-48 rounded-box bg-base-100 p-4`);let j=e(`div`,A);c(A,j),f(j,`text-sm text-base-content/60`),c(j,p(`真实 DOM 文本`));let M=e(`div`,A);c(A,M),f(M,`mt-1 font-mono text-3xl`);let N=e(`span`,M);c(M,N);let oe=te(N,()=>E);_(()=>{oe()});let P=b(N);c(N,P),l(()=>{h(P,y.value)});let F=e(`div`,i);c(i,F),f(F,`flex flex-wrap gap-3`);let I=e(`button`,F);c(F,I),f(I,`btn btn-primary`),r(I,`click`,()=>void re(1)),c(I,p(`+1 并读取 DOM`));let L=e(`button`,F);c(F,L),f(L,`btn btn-secondary`),r(L,`click`,()=>void re(3)),c(L,p(`连续 +3`));let R=e(`button`,F);c(F,R),f(R,`btn btn-ghost`),r(R,`click`,()=>void ie()),c(R,p(`重置`));let z=e(`div`,i);c(i,z),f(z,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let se=b(z);c(z,se),l(()=>{h(se,w.value)});let B=e(`div`,i);c(i,B),f(B,`grid gap-4 md:grid-cols-3`);let V=e(`div`,B);c(B,V),f(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=e(`div`,V);c(V,H),f(H,`text-sm text-base-content/60`),c(H,p(`同步读取 DOM`));let U=e(`div`,V);c(V,U),f(U,`mt-2 font-mono text-2xl`);let ce=b(U);c(U,ce),l(()=>{h(ce,S.value)});let W=e(`div`,B);c(B,W),f(W,`rounded-box border border-base-300 bg-base-100 p-4`);let G=e(`div`,W);c(W,G),f(G,`text-sm text-base-content/60`),c(G,p(`watchPostEffect 读取`));let K=e(`div`,W);c(W,K),f(K,`mt-2 font-mono text-2xl text-success`);let le=b(K);c(K,le),l(()=>{h(le,ne.value)});let q=e(`div`,B);c(B,q),f(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);c(q,J),f(J,`text-sm text-base-content/60`),c(J,p(`await nextTick() 后`));let Y=e(`div`,q);c(q,Y),f(Y,`mt-2 font-mono text-2xl text-info`);let X=b(Y);c(Y,X),l(()=>{h(X,C.value)});let Z=e(`div`,i);c(i,Z),f(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=e(`div`,Z);c(Z,Q),f(Q,`text-sm font-medium text-base-content/70`),c(Q,p(`最近的 post effect 记录`));let $=e(`ul`,Z);c(Z,$),f($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ue=u(`rue:list:start`),de=u(`rue:list:end`);c($,ue),c($,de);let fe=new Map;return l(()=>{fe=ee({items:T.value||[],getKey:(e,t)=>e,elements:fe,parent:$,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,n,r,i,a)=>{v(m(()=>{let n=o(),r=e(`li`,n);c(n,r),l(()=>{g(r,`key`,String(t))});let i=b(r);return c(r,i),l(()=>{h(i,t)}),n}),n,r)}})}),n})},T=()=>{let{activeTab:t}=x(`useSetup:0:0:dup1`,()=>i(()=>({activeTab:x(`ref:1:7`,()=>a(`preview`))})));return m(n=>{let i=o(),a=u(`rue:component:anchor`);return c(i,a),v(y(ne,{children:m(()=>{let n=o(),i=e(`h1`,n);c(n,i),f(i,`text-5xl font-semibold mb-4 md:mb-4`),c(i,p(`watchPostEffect DOM 读取时机`));let a=e(`div`,n);c(n,a),g(a,`role`,`tablist`),f(a,`tabs tabs-box`);let d=e(`button`,a);c(a,d),g(d,`role`,`tab`),l(()=>{f(d,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(d,`click`,()=>{t.value=`preview`}),c(d,p(`效果`));let h=e(`button`,a);c(a,h),g(h,`role`,`tab`),l(()=>{f(h,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(h,`click`,()=>{t.value=`code`}),c(h,p(`代码`));let _=e(`div`,n);c(n,_),f(_,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=u(`rue:slot:anchor`);c(_,b),l(()=>{let n=t.value===`code`?m(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),f(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:C});s(()=>v(e,r,i))}),t}):``;s(()=>v(n,_,b))}),c(_,p(` `));let x=u(`rue:slot:anchor`);return c(_,x),l(()=>{let e=t.value===`preview`?m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),v(y(w,{}),e,t),e}):``;s(()=>v(e,_,x))}),n})}),i,a),i})};export{T as default};