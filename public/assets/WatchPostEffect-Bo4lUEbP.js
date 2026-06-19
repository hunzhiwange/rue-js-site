import{$ as e,Jt as t,Nt as n,Q as r,Qt as i,St as a,Wt as o,X as s,Y as c,Yt as l,et as u,ht as d,l as f,lt as p,n as m,nt as h,o as g,st as _,t as v,tt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as S}from"./Code-BIscIyEp.js";import{r as ne}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

const timingNotes = [
  '修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。',
  '在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。',
  'watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。',
  'await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。',
] as const;

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
      <div className="rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6">
        <div className="font-medium text-info">DOM 读取时机说明</div>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {timingNotes.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
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

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let o=x(`useSetup:0:0`,()=>l(()=>{let e=x(`ref:1:0`,()=>b(0)),r=x(`ref:1:1`,()=>b(`尚未读取`)),i=x(`ref:1:2`,()=>b(`等待首次 flush`)),a=x(`ref:1:3`,()=>b(`尚未读取`)),o=x(`ref:1:4`,()=>b(`点击按钮后观察三种读取时机。`)),s=x(`ref:1:5`,()=>b([])),c=x(`useRef:1:6`,()=>t()),l=0,u=[];return n(()=>{let t=e.value,n=c.current?.textContent??`(missing)`;l+=1,i.value=n,u.unshift(`post #${l}: state=${t}, DOM=${n}`),s.value=u.slice(0,5)}),{count:e,syncDomText:r,postDomText:i,tickDomText:a,actionNote:o,logLines:s,countRef:c,history:u,postRun:l}})),{count:v,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=o,{postRun:oe}=o,se=async e=>{for(let t=0;t<e;t+=1)v.value+=1;S.value=T.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${v.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await a(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{v.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await a(),C.value=T.current?.textContent??`(missing)`};return f(t=>{let n=u(`div`,t);p(n,`card bg-base-100 shadow`);let a=u(`div`,n);s(n,a),p(a,`card-body gap-5`);let o=u(`p`,a);s(a,o),p(o,`text-base-content/70 leading-7`),s(o,y("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let l=u(`div`,a);s(a,l),p(l,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let b=u(`div`,l);s(l,b),p(b,`font-medium text-info`),s(b,y(`DOM 读取时机说明`));let x=u(`ul`,l);s(l,x),p(x,`mt-2 list-disc space-y-1 pl-5`);let ae=r(`rue:list:start`),oe=r(`rue:list:end`);s(x,ae),s(x,oe);let le=new Map;i(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(t,n,r,a,o)=>{g(f(()=>{let n=e(),r=u(`li`,n);s(n,r),i(()=>{_(r,`key`,String(t))});let a=h(r);return s(r,a),i(()=>{d(a,t)}),n}),n,r)}})});let E=u(`div`,a);s(a,E),p(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=u(`div`,E);s(E,D),p(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(D,y(`响应式状态`));let O=u(`div`,E);s(E,O),p(O,`mt-3 flex flex-wrap items-end gap-4`);let k=u(`div`,O);s(O,k);let A=u(`div`,k);s(k,A),p(A,`text-sm text-base-content/60`),s(A,y(`count.value`));let j=u(`div`,k);s(k,j),p(j,`text-5xl font-semibold text-primary`);let ue=h(j);s(j,ue),i(()=>{d(ue,v.value)});let M=u(`div`,O);s(O,M),p(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=u(`div`,M);s(M,N),p(N,`text-sm text-base-content/60`),s(N,y(`真实 DOM 文本`));let P=u(`div`,M);s(M,P),p(P,`mt-1 font-mono text-3xl`);let F=u(`span`,P);s(P,F);let de=te(F,()=>T);m(()=>{de()});let fe=h(F);s(F,fe),i(()=>{d(fe,v.value)});let I=u(`div`,a);s(a,I),p(I,`flex flex-wrap gap-3`);let L=u(`button`,I);s(I,L),p(L,`btn btn-primary`),c(L,`click`,()=>void se(1)),s(L,y(`+1 并读取 DOM`));let R=u(`button`,I);s(I,R),p(R,`btn btn-secondary`),c(R,`click`,()=>void se(3)),s(R,y(`连续 +3`));let z=u(`button`,I);s(I,z),p(z,`btn btn-ghost`),c(z,`click`,()=>void ce()),s(z,y(`重置`));let B=u(`div`,a);s(a,B),p(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=h(B);s(B,pe),i(()=>{d(pe,w.value)});let V=u(`div`,a);s(a,V),p(V,`grid gap-4 md:grid-cols-3`);let H=u(`div`,V);s(V,H),p(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=u(`div`,H);s(H,U),p(U,`text-sm text-base-content/60`),s(U,y(`同步读取 DOM`));let W=u(`div`,H);s(H,W),p(W,`mt-2 font-mono text-2xl`);let me=h(W);s(W,me),i(()=>{d(me,S.value)});let G=u(`div`,V);s(V,G),p(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=u(`div`,G);s(G,K),p(K,`text-sm text-base-content/60`),s(K,y(`watchPostEffect 读取`));let q=u(`div`,G);s(G,q),p(q,`mt-2 font-mono text-2xl text-success`);let he=h(q);s(q,he),i(()=>{d(he,ne.value)});let J=u(`div`,V);s(V,J),p(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=u(`div`,J);s(J,Y),p(Y,`text-sm text-base-content/60`),s(Y,y(`await nextTick() 后`));let X=u(`div`,J);s(J,X),p(X,`mt-2 font-mono text-2xl text-info`);let ge=h(X);s(X,ge),i(()=>{d(ge,C.value)});let Z=u(`div`,a);s(a,Z),p(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=u(`div`,Z);s(Z,Q),p(Q,`text-sm font-medium text-base-content/70`),s(Q,y(`最近的 post effect 记录`));let $=u(`ul`,Z);s(Z,$),p($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=r(`rue:list:start`),ve=r(`rue:list:end`);s($,_e),s($,ve);let ye=new Map;return i(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(t,n,r,a,o)=>{g(f(()=>{let n=e(),r=u(`li`,n);s(n,r),i(()=>{_(r,`key`,String(t))});let a=h(r);return s(r,a),i(()=>{d(a,t)}),n}),n,r)}})}),n})},ie=()=>{let{activeTab:t}=x(`useSetup:0:0:dup1`,()=>l(()=>({activeTab:x(`ref:1:7`,()=>b(`preview`))})));return f(n=>{let a=e(),l=r(`rue:component:anchor`);return s(a,l),g(v(ne,{children:f(()=>{let n=e(),a=u(`h1`,n);s(n,a),p(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,y(`watchPostEffect DOM 读取时机`));let l=u(`div`,n);s(n,l),_(l,`role`,`tablist`),p(l,`tabs tabs-box`);let d=u(`button`,l);s(l,d),_(d,`role`,`tab`),i(()=>{p(d,`tab ${t.value===`preview`?`tab-active`:``}`)}),c(d,`click`,()=>{t.value=`preview`}),s(d,y(`效果`));let m=u(`button`,l);s(l,m),_(m,`role`,`tab`),i(()=>{p(m,`tab ${t.value===`code`?`tab-active`:``}`)}),c(m,`click`,()=>{t.value=`code`}),s(m,y(`代码`));let h=u(`div`,n);s(n,h),p(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=r(`rue:slot:anchor`);s(h,b),i(()=>{let n=t.value===`code`?f(()=>{let t=e(),n=u(`div`,t);s(t,n),p(n,`card bg-base-100 shadow overflow-auto`);let a=u(`div`,n);s(n,a),p(a,`card-body p-0`);let c=r(`rue:component:anchor`);return s(a,c),i(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:C});o(()=>g(e,a,c))}),t}):``;o(()=>g(n,h,b))}),s(h,y(` `));let x=r(`rue:slot:anchor`);return s(h,x),i(()=>{let n=t.value===`preview`?f(()=>{let t=e(),n=r(`rue:component:anchor`);return s(t,n),g(v(w,{}),t,n),t}):``;o(()=>g(n,h,x))}),n})}),a,l),a})};export{ie as default};