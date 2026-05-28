import{$ as e,At as t,Gt as n,J as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,bt as d,ct as f,d as p,et as m,i as h,l as g,mt as _,ot as v,t as y,tt as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-DkadWylb.js";import{t as S}from"./Code-B_4lzH85.js";import{t as ne}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,w=()=>{let s=x(`useSetup:0:0`,()=>i(()=>{let e=x(`ref:1:0`,()=>a(0)),r=x(`ref:1:1`,()=>a(`尚未读取`)),i=x(`ref:1:2`,()=>a(`等待首次 flush`)),o=x(`ref:1:3`,()=>a(`尚未读取`)),s=x(`ref:1:4`,()=>a(`点击按钮后观察三种读取时机。`)),c=x(`ref:1:5`,()=>a([])),l=x(`useRef:1:6`,()=>n()),u=0,f=[];return t(()=>{let t=e.value,n=l.current?.textContent??`(missing)`;u+=1,i.value=n,f.unshift(`post #${u}: state=${t}, DOM=${n}`),c.value=f.slice(0,5)}),{count:e,syncDomText:r,postDomText:i,tickDomText:o,actionNote:s,logLines:c,countRef:l,history:f,add:async t=>{for(let n=0;n<t;n+=1)e.value+=1;r.value=l.current?.textContent??`(missing)`,o.value=`等待 nextTick...`,s.value=t===1?`状态已同步变成 ${e.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${t} 次会合并到同一轮 post effect。`,await d(),o.value=l.current?.textContent??`(missing)`},reset:async()=>{e.value=0,r.value=`尚未读取`,o.value=`等待 nextTick...`,s.value=`已重置，等待 DOM flush 完成。`,await d(),o.value=l.current?.textContent??`(missing)`},postRun:u}})),{count:y,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:re,countRef:ie,history:T,add:ae,reset:oe}=s,{postRun:E}=s;return p(t=>{let n=e(`div`,t);f(n,`card bg-base-100 shadow`);let i=e(`div`,n);c(n,i),f(i,`card-body gap-5`);let a=e(`p`,i);c(i,a),f(a,`text-base-content/70 leading-7`),c(a,m("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let s=e(`div`,i);c(i,s),f(s,`rounded-box border border-base-300 bg-base-200/40 p-5`);let d=e(`div`,s);c(s,d),f(d,`text-sm uppercase tracking-[0.24em] text-base-content/50`),c(d,m(`响应式状态`));let x=e(`div`,s);c(s,x),f(x,`mt-3 flex flex-wrap items-end gap-4`);let T=e(`div`,x);c(x,T);let E=e(`div`,T);c(T,E),f(E,`text-sm text-base-content/60`),c(E,m(`count.value`));let D=e(`div`,T);c(T,D),f(D,`text-5xl font-semibold text-primary`);let O=b(D);c(D,O),l(()=>{_(O,y.value)});let k=e(`div`,x);c(x,k),f(k,`min-w-48 rounded-box bg-base-100 p-4`);let A=e(`div`,k);c(k,A),f(A,`text-sm text-base-content/60`),c(A,m(`真实 DOM 文本`));let j=e(`div`,k);c(k,j),f(j,`mt-1 font-mono text-3xl`);let M=e(`span`,j);c(j,M);let se=te(M,()=>ie);h(()=>{se()});let N=b(M);c(M,N),l(()=>{_(N,y.value)});let P=e(`div`,i);c(i,P),f(P,`flex flex-wrap gap-3`);let F=e(`button`,P);c(P,F),f(F,`btn btn-primary`),r(F,`click`,()=>void ae(1)),c(F,m(`+1 并读取 DOM`));let I=e(`button`,P);c(P,I),f(I,`btn btn-secondary`),r(I,`click`,()=>void ae(3)),c(I,m(`连续 +3`));let L=e(`button`,P);c(P,L),f(L,`btn btn-ghost`),r(L,`click`,()=>void oe()),c(L,m(`重置`));let R=e(`div`,i);c(i,R),f(R,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let z=b(R);c(R,z),l(()=>{_(z,w.value)});let B=e(`div`,i);c(i,B),f(B,`grid gap-4 md:grid-cols-3`);let V=e(`div`,B);c(B,V),f(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=e(`div`,V);c(V,H),f(H,`text-sm text-base-content/60`),c(H,m(`同步读取 DOM`));let U=e(`div`,V);c(V,U),f(U,`mt-2 font-mono text-2xl`);let W=b(U);c(U,W),l(()=>{_(W,S.value)});let G=e(`div`,B);c(B,G),f(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=e(`div`,G);c(G,K),f(K,`text-sm text-base-content/60`),c(K,m(`watchPostEffect 读取`));let q=e(`div`,G);c(G,q),f(q,`mt-2 font-mono text-2xl text-success`);let ce=b(q);c(q,ce),l(()=>{_(ce,ne.value)});let J=e(`div`,B);c(B,J),f(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=e(`div`,J);c(J,Y),f(Y,`text-sm text-base-content/60`),c(Y,m(`await nextTick() 后`));let X=e(`div`,J);c(J,X),f(X,`mt-2 font-mono text-2xl text-info`);let le=b(X);c(X,le),l(()=>{_(le,C.value)});let Z=e(`div`,i);c(i,Z),f(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=e(`div`,Z);c(Z,Q),f(Q,`text-sm font-medium text-base-content/70`),c(Q,m(`最近的 post effect 记录`));let $=e(`ul`,Z);c(Z,$),f($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ue=u(`rue:list:start`),de=u(`rue:list:end`);c($,ue),c($,de);let fe=new Map;return l(()=>{fe=ee({items:re.value||[],getKey:(e,t)=>e,elements:fe,parent:$,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,n,r,i,a)=>{g(p(()=>{let n=o(),r=e(`li`,n);c(n,r),l(()=>{v(r,`key`,String(t))});let i=b(r);return c(r,i),l(()=>{_(i,t)}),n}),n,r)}})}),n})},re=()=>{let{activeTab:t}=x(`useSetup:0:0:dup1`,()=>i(()=>({activeTab:x(`ref:1:7`,()=>a(`preview`))})));return p(n=>{let i=o(),a=u(`rue:component:anchor`);return c(i,a),g(y(ne,{children:p(()=>{let n=o(),i=e(`h1`,n);c(n,i),f(i,`text-5xl font-semibold mb-4 md:mb-4`),c(i,m(`watchPostEffect DOM 读取时机`));let a=e(`div`,n);c(n,a),v(a,`role`,`tablist`),f(a,`tabs tabs-box`);let d=e(`button`,a);c(a,d),v(d,`role`,`tab`),l(()=>{f(d,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(d,`click`,()=>{t.value=`preview`}),c(d,m(`效果`));let h=e(`button`,a);c(a,h),v(h,`role`,`tab`),l(()=>{f(h,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(h,`click`,()=>{t.value=`code`}),c(h,m(`代码`));let _=e(`div`,n);c(n,_),f(_,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=u(`rue:slot:anchor`);c(_,b),l(()=>{let n=t.value===`code`?p(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),f(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:C});s(()=>g(e,r,i))}),t}):``;s(()=>g(n,_,b))}),c(_,m(` `));let x=u(`rue:slot:anchor`);return c(_,x),l(()=>{let e=t.value===`preview`?p(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),g(y(w,{}),e,t),e}):``;s(()=>g(e,_,x))}),n})}),i,a),i})};export{re as default};