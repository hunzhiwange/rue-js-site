import{$ as e,Ht as t,J as n,Kt as r,Mt as i,Q as a,Rt as o,Xt as s,Y as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,qt as h,r as g,s as _,t as v,tt as y,xt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as S}from"./Code-5DOEyGxf.js";import{r as ne}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,w=()=>{let t=x(`useSetup:0:0`,()=>h(()=>{let e=x(`ref:1:0`,()=>o(0)),t=x(`ref:1:1`,()=>o(`尚未读取`)),n=x(`ref:1:2`,()=>o(`等待首次 flush`)),a=x(`ref:1:3`,()=>o(`尚未读取`)),s=x(`ref:1:4`,()=>o(`点击按钮后观察三种读取时机。`)),c=x(`ref:1:5`,()=>o([])),l=x(`useRef:1:6`,()=>r()),u=0,d=[];return i(()=>{let t=e.value,r=l.current?.textContent??`(missing)`;u+=1,n.value=r,d.unshift(`post #${u}: state=${t}, DOM=${r}`),c.value=d.slice(0,5)}),{count:e,syncDomText:t,postDomText:n,tickDomText:a,actionNote:s,logLines:c,countRef:l,history:d,postRun:u}})),{count:v,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:T,countRef:E,history:D}=t,{postRun:O}=t,re=async e=>{for(let t=0;t<e;t+=1)v.value+=1;S.value=E.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${v.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await b(),C.value=E.current?.textContent??`(missing)`},ie=async()=>{v.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await b(),C.value=E.current?.textContent??`(missing)`};return f(t=>{let r=e(`div`,t);u(r,`card bg-base-100 shadow`);let i=e(`div`,r);c(r,i),u(i,`card-body gap-5`);let o=e(`p`,i);c(i,o),u(o,`text-base-content/70 leading-7`),c(o,d("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let h=e(`div`,i);c(i,h),u(h,`rounded-box border border-base-300 bg-base-200/40 p-5`);let b=e(`div`,h);c(h,b),u(b,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(b,d(`响应式状态`));let x=e(`div`,h);c(h,x),u(x,`mt-3 flex flex-wrap items-end gap-4`);let D=e(`div`,x);c(x,D);let O=e(`div`,D);c(D,O),u(O,`text-sm text-base-content/60`),c(O,d(`count.value`));let k=e(`div`,D);c(D,k),u(k,`text-5xl font-semibold text-primary`);let ae=y(k);c(k,ae),s(()=>{p(ae,v.value)});let A=e(`div`,x);c(x,A),u(A,`min-w-48 rounded-box bg-base-100 p-4`);let j=e(`div`,A);c(A,j),u(j,`text-sm text-base-content/60`),c(j,d(`真实 DOM 文本`));let M=e(`div`,A);c(A,M),u(M,`mt-1 font-mono text-3xl`);let N=e(`span`,M);c(M,N);let oe=te(N,()=>E);g(()=>{oe()});let P=y(N);c(N,P),s(()=>{p(P,v.value)});let F=e(`div`,i);c(i,F),u(F,`flex flex-wrap gap-3`);let I=e(`button`,F);c(F,I),u(I,`btn btn-primary`),n(I,`click`,()=>void re(1)),c(I,d(`+1 并读取 DOM`));let L=e(`button`,F);c(F,L),u(L,`btn btn-secondary`),n(L,`click`,()=>void re(3)),c(L,d(`连续 +3`));let R=e(`button`,F);c(F,R),u(R,`btn btn-ghost`),n(R,`click`,()=>void ie()),c(R,d(`重置`));let z=e(`div`,i);c(i,z),u(z,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let se=y(z);c(z,se),s(()=>{p(se,w.value)});let B=e(`div`,i);c(i,B),u(B,`grid gap-4 md:grid-cols-3`);let V=e(`div`,B);c(B,V),u(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=e(`div`,V);c(V,H),u(H,`text-sm text-base-content/60`),c(H,d(`同步读取 DOM`));let U=e(`div`,V);c(V,U),u(U,`mt-2 font-mono text-2xl`);let ce=y(U);c(U,ce),s(()=>{p(ce,S.value)});let W=e(`div`,B);c(B,W),u(W,`rounded-box border border-base-300 bg-base-100 p-4`);let G=e(`div`,W);c(W,G),u(G,`text-sm text-base-content/60`),c(G,d(`watchPostEffect 读取`));let K=e(`div`,W);c(W,K),u(K,`mt-2 font-mono text-2xl text-success`);let le=y(K);c(K,le),s(()=>{p(le,ne.value)});let q=e(`div`,B);c(B,q),u(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);c(q,J),u(J,`text-sm text-base-content/60`),c(J,d(`await nextTick() 后`));let Y=e(`div`,q);c(q,Y),u(Y,`mt-2 font-mono text-2xl text-info`);let X=y(Y);c(Y,X),s(()=>{p(X,C.value)});let Z=e(`div`,i);c(i,Z),u(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=e(`div`,Z);c(Z,Q),u(Q,`text-sm font-medium text-base-content/70`),c(Q,d(`最近的 post effect 记录`));let $=e(`ul`,Z);c(Z,$),u($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ue=l(`rue:list:start`),de=l(`rue:list:end`);c($,ue),c($,de);let fe=new Map;return s(()=>{fe=ee({items:T.value||[],getKey:(e,t)=>e,elements:fe,parent:$,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,n,r,i,o)=>{_(f(()=>{let n=a(),r=e(`li`,n);c(n,r),s(()=>{m(r,`key`,String(t))});let i=y(r);return c(r,i),s(()=>{p(i,t)}),n}),n,r)}})}),r})},T=()=>{let{activeTab:r}=x(`useSetup:0:0:dup1`,()=>h(()=>({activeTab:x(`ref:1:7`,()=>o(`preview`))})));return f(i=>{let o=a(),p=l(`rue:component:anchor`);return c(o,p),_(v(ne,{children:f(()=>{let i=a(),o=e(`h1`,i);c(i,o),u(o,`text-5xl font-semibold mb-4 md:mb-4`),c(o,d(`watchPostEffect DOM 读取时机`));let p=e(`div`,i);c(i,p),m(p,`role`,`tablist`),u(p,`tabs tabs-box`);let h=e(`button`,p);c(p,h),m(h,`role`,`tab`),s(()=>{u(h,String(`tab ${r.value===`preview`?`tab-active`:``}`))}),n(h,`click`,()=>{r.value=`preview`}),c(h,d(`效果`));let g=e(`button`,p);c(p,g),m(g,`role`,`tab`),s(()=>{u(g,String(`tab ${r.value===`code`?`tab-active`:``}`))}),n(g,`click`,()=>{r.value=`code`}),c(g,d(`代码`));let y=e(`div`,i);c(i,y),u(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=l(`rue:slot:anchor`);c(y,b),s(()=>{let n=r.value===`code`?f(()=>{let n=a(),r=e(`div`,n);c(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=e(`div`,r);c(r,i),u(i,`card-body p-0`);let o=l(`rue:component:anchor`);return c(i,o),s(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:C});t(()=>_(e,i,o))}),n}):``;t(()=>_(n,y,b))}),c(y,d(` `));let x=l(`rue:slot:anchor`);return c(y,x),s(()=>{let e=r.value===`preview`?f(()=>{let e=a(),t=l(`rue:component:anchor`);return c(e,t),_(v(w,{}),e,t),e}):``;t(()=>_(e,y,x))}),i})}),o,p),o})};export{T as default};