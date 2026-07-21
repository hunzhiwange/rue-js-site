import{Cn as e,Ct as t,Dt as n,Lt as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,rn as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as ee}from"./Code-DhoWkRkB.js";import{r as te}from"./SidebarPlaygroundExample-B78jsvoF.js";var ne=`import { type FC, ref, watchEffect, watchSyncEffect } from '@rue-js/rue';

const useCases = [
  '同步业务防线：连续写入后，同一调用栈里能立刻读到最新 canCommit。',
  '即时派生状态：把轻量状态机、按钮禁用态、校验状态保持为当前值。',
  '谨慎范围：适合简单布尔值或小型派生值，不适合大数组的高频同步变更。',
] as const;

const WatchSyncEffectDemo: FC = () => {
  const capacity = ref(12);
  const confirmed = ref(8);
  const incoming = ref(0);
  const canCommit = ref(true);
  const guardText = ref('等待变更');
  const syncLog = ref<string[]>([]);
  const flushSyncLog = ref<string[]>([]);
  const batchedLog = ref<string[]>([]);
  const actionResult = ref('尝试导入候选或提交名额。');
  const syncRecords: string[] = [];
  const flushSyncRecords: string[] = [];
  const batchedRecords: string[] = [];
  let syncRun = 0;
  let flushSyncRun = 0;
  let batchedRun = 0;

  watchSyncEffect(() => {
    const total = confirmed.value + incoming.value;
    const free = capacity.value - total;
    syncRun += 1;
    canCommit.value = free >= 0;
    guardText.value = free >= 0 ? \`还可确认 \${free} 个名额\` : \`超出 \${Math.abs(free)} 个名额\`;
    syncRecords.unshift(\`sync #\${syncRun}: pending=\${incoming.value}, total=\${total}, ok=\${free >= 0}\`);
    syncLog.value = syncRecords.slice(0, 6);
  });

  watchEffect(() => {
    const total = confirmed.value + incoming.value;
    flushSyncRun += 1;
    flushSyncRecords.unshift(\`flush sync #\${flushSyncRun}: pending=\${incoming.value}, total=\${total}\`);
    flushSyncLog.value = flushSyncRecords.slice(0, 6);
  }, { flush: 'sync' });

  watchEffect(() => {
    const total = confirmed.value + incoming.value;
    batchedRun += 1;
    batchedRecords.unshift(\`batch #\${batchedRun}: total=\${total}\`);
    batchedLog.value = batchedRecords.slice(0, 6);
  });

  const importCandidates = (amount: number) => {
    for (let i = 0; i < amount; i += 1) {
      incoming.value += 1;
    }
    actionResult.value = canCommit.value
      ? \`已导入 \${amount} 个候选，本轮仍可提交。\`
      : \`已导入 \${amount} 个候选，同步防线立即阻止提交。\`;
  };

  const commit = () => {
    if (!canCommit.value) {
      actionResult.value = '提交被同步拦截，请先释放名额或减少候选。';
      return;
    }
    confirmed.value += incoming.value;
    incoming.value = 0;
    actionResult.value = '提交成功，候选已转为已确认名额。';
  };

  return (
    <div>
      <ul>
        {useCases.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>{guardText.value}</div>
      <button onClick={() => importCandidates(3)}>导入 3 个候选</button>
      <button disabled={!canCommit.value} onClick={commit}>提交</button>
      <div>{actionResult.value}</div>
    </div>
  );
};

export default WatchSyncEffectDemo;`,re=[{title:`同步业务防线`,text:`连续写入后，同一调用栈里能立刻读到最新 canCommit，提交动作不会拿到过期判断。`},{title:`即时派生状态`,text:`适合维护轻量状态机、按钮禁用态、校验结果这类需要马上可读的派生值。`},{title:`谨慎使用范围`,text:`同步 watcher 不会合并多次触发，适合简单布尔值或小型派生值，避免监听大数组高频写入。`}],ie=()=>{let y=b(`useSetup:0:0`,()=>e(()=>{let e=b(`ref:1:0`,()=>d(12)),t=b(`ref:1:1`,()=>d(8)),n=b(`ref:1:2`,()=>d(0)),i=b(`ref:1:3`,()=>d(!0)),a=b(`ref:1:4`,()=>d(`等待首次同步检查`)),o=b(`ref:1:5`,()=>d(`success`)),s=b(`ref:1:6`,()=>d(`导入候选后，同步防线会立刻判断是否仍可提交。`)),c=b(`ref:1:7`,()=>d([])),l=b(`ref:1:8`,()=>d([])),u=b(`ref:1:9`,()=>d([])),f=[],m=[],g=[],_=0,v=0,y=0;return p(()=>{let r=t.value+n.value,s=e.value-r;_+=1,i.value=s>=0,o.value=s<0?`error`:s<=2?`warning`:`success`,a.value=s>=0?`还可确认 ${s} 个名额`:`超出 ${Math.abs(s)} 个名额`,f.unshift(`sync #${_}: pending=${n.value}, total=${r}, ok=${s>=0}`),c.value=f.slice(0,6)}),b(`watchEffect:1:10`,()=>h(()=>{let e=t.value+n.value;v+=1,m.unshift(`flush sync #${v}: pending=${n.value}, total=${e}`),l.value=m.slice(0,6)},{flush:`sync`})),b(`watchEffect:1:11`,()=>h(()=>{let e=t.value+n.value;y+=1,g.unshift(`batch #${y}: total=${e}`),u.value=g.slice(0,6)})),{capacity:e,confirmed:t,incoming:n,canCommit:i,guardText:a,guardTone:o,actionResult:s,syncLog:c,flushSyncLog:l,batchedLog:u,syncRecords:f,flushSyncRecords:m,batchedRecords:g,importCandidates:e=>{for(let t=0;t<e;t+=1)n.value+=1;s.value=i.value?`已导入 ${e} 个候选，本轮仍可提交。`:`已导入 ${e} 个候选，同步防线立即阻止提交。`},releaseSeat:()=>{if(t.value<=0){s.value=`当前没有已确认名额可释放。`;return}--t.value,s.value=`已释放 1 个已确认名额。`},trimIncoming:()=>{if(n.value<=0){s.value=`当前没有候选需要移除。`;return}--n.value,s.value=`已移除 1 个候选。`},commit:()=>{if(!i.value){s.value=`提交被同步拦截，请先释放名额或减少候选。`;return}if(n.value===0){s.value=`没有待确认候选。`;return}t.value+=n.value,n.value=0,s.value=`提交成功，候选已转为已确认名额。`},reset:()=>{e.value=12,t.value=8,n.value=0,s.value=`已重置为默认名额池。`},toneClass:b(`computed:1:12`,()=>r(()=>o.value===`error`?`border-error/40 bg-error/10 text-error`:o.value===`warning`?`border-warning/40 bg-warning/10 text-warning`:`border-success/40 bg-success/10 text-success`)),syncRun:_,flushSyncRun:v,batchedRun:y}})),{capacity:ee,confirmed:te,incoming:ne,canCommit:ie,guardText:ae,guardTone:S,actionResult:oe,syncLog:se,flushSyncLog:ce,batchedLog:le,syncRecords:ue,flushSyncRecords:de,batchedRecords:fe,importCandidates:pe,releaseSeat:me,trimIncoming:he,commit:ge,reset:_e,toneClass:ve}=y,{syncRun:C,flushSyncRun:w,batchedRun:ye}=y;return _(e=>{let r=f(`div`,e);a(r,`card bg-base-100 shadow`);let d=f(`div`,r);m(r,d),a(d,`card-body gap-5`);let p=f(`p`,d);m(d,p),a(p,`text-base-content/70 leading-7`),m(p,l("`watchSyncEffect()` 是 `watchEffect(..., "));let y=c(p);m(p,y),i(y,`{`),m(p,l(` flush: 'sync' `));let b=c(p);m(p,b),i(b,`}`),m(p,l(")` 的便捷别名。下面模拟活动名额池：一次导入多个候选时，同步 watcher 会在每一次写入后立即更新提交开关，而默认 `watchEffect()` 会按响应式队列批处理。"));let S=f(`div`,d);m(d,S),a(S,`grid gap-3 lg:grid-cols-3`);let ue=o(`rue:list:start`),de=o(`rue:list:end`);m(S,ue),m(S,de);let fe=new Map;h(()=>{fe=x({items:re||[],getKey:(e,t)=>e.title,elements:fe,parent:S,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(e,n,r,i,c)=>{v(_(()=>{let n=s(),r=f(`div`,n);m(n,r),h(()=>{t(r,`key`,String(e.title))}),a(r,`rounded-box border border-base-300 bg-base-200/40 p-4`);let i=f(`div`,r);m(r,i),a(i,`text-sm font-semibold text-base-content/80`);let c=o(`rue:slot:anchor`);m(i,c),h(()=>{let t=e.title;g(()=>v(t,i,c))});let l=f(`div`,r);m(r,l),a(l,`mt-2 text-sm leading-6 text-base-content/65`);let u=o(`rue:slot:anchor`);return m(l,u),h(()=>{let t=e.text;g(()=>v(t,l,u))}),n}),n,r)}})});let C=f(`div`,d);m(d,C),a(C,`grid gap-4 md:grid-cols-[1fr_1.2fr]`);let w=f(`div`,C);m(C,w),a(w,`rounded-box border border-base-300 bg-base-200/40 p-5`);let ye=f(`div`,w);m(w,ye),a(ye,`text-sm uppercase tracking-[0.24em] text-base-content/50`),m(ye,l(`capacity`));let T=f(`div`,w);m(w,T),a(T,`mt-4 grid grid-cols-3 gap-3 text-center`);let E=f(`div`,T);m(T,E),a(E,`rounded-box bg-base-100 p-4`);let be=f(`div`,E);m(E,be),a(be,`text-sm text-base-content/60`),m(be,l(`总名额`));let D=f(`div`,E);m(E,D),a(D,`mt-1 text-3xl font-semibold text-primary`);let xe=c(D);m(D,xe),h(()=>{i(xe,ee.value)});let O=f(`div`,T);m(T,O),a(O,`rounded-box bg-base-100 p-4`);let k=f(`div`,O);m(O,k),a(k,`text-sm text-base-content/60`),m(k,l(`已确认`));let A=f(`div`,O);m(O,A),a(A,`mt-1 text-3xl font-semibold`);let Se=c(A);m(A,Se),h(()=>{i(Se,te.value)});let j=f(`div`,T);m(T,j),a(j,`rounded-box bg-base-100 p-4`);let M=f(`div`,j);m(j,M),a(M,`text-sm text-base-content/60`),m(M,l(`候选`));let N=f(`div`,j);m(j,N),a(N,`mt-1 text-3xl font-semibold text-secondary`);let Ce=c(N);m(N,Ce),h(()=>{i(Ce,ne.value)});let P=f(`div`,C);m(C,P),h(()=>{a(P,`rounded-box border p-5 ${ve.get()}`)});let F=f(`div`,P);m(P,F),a(F,`text-sm uppercase tracking-[0.24em] opacity-70`),m(F,l(`sync guard`));let I=f(`div`,P);m(P,I),a(I,`mt-3 text-3xl font-semibold`);let we=c(I);m(I,we),h(()=>{i(we,ae.value)});let L=f(`div`,P);m(P,L),a(L,`mt-3 text-sm opacity-80`),m(L,l(`提交按钮当前状态：`));let Te=c(L);m(L,Te),h(()=>{i(Te,ie.value?`允许提交`:`同步拦截`)});let R=f(`div`,d);m(d,R),a(R,`flex flex-wrap gap-3`);let z=f(`button`,R);m(R,z),a(z,`btn btn-primary`),u(z,`click`,()=>pe(1)),m(z,l(`导入 1 个候选`));let B=f(`button`,R);m(R,B),a(B,`btn btn-secondary`),u(B,`click`,()=>pe(3)),m(B,l(`连续导入 3 个`));let V=f(`button`,R);m(R,V),a(V,`btn btn-outline`),u(V,`click`,me),m(V,l(`释放 1 个名额`));let H=f(`button`,R);m(R,H),a(H,`btn btn-outline`),u(H,`click`,he),m(H,l(`移除 1 个候选`));let U=f(`button`,R);m(R,U),a(U,`btn btn-success`),h(()=>{n(U,!ie.value)}),u(U,`click`,ge),m(U,l(`提交候选`));let W=f(`button`,R);m(R,W),a(W,`btn btn-ghost`),u(W,`click`,_e),m(W,l(`重置`));let G=f(`div`,d);m(d,G),a(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let Ee=c(G);m(G,Ee),h(()=>{i(Ee,oe.value)});let K=f(`div`,d);m(d,K),a(K,`grid gap-4 xl:grid-cols-3`);let q=f(`div`,K);m(K,q),a(q,`rounded-box border border-base-300 bg-base-100 p-4`);let De=f(`div`,q);m(q,De),a(De,`text-sm font-medium text-base-content/70`),m(De,l(`watchSyncEffect 记录`));let J=f(`ul`,q);m(q,J),a(J,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Oe=o(`rue:list:start`),ke=o(`rue:list:end`);m(J,Oe),m(J,ke);let Ae=new Map;h(()=>{Ae=x({items:se.value||[],getKey:(e,t)=>e,elements:Ae,parent:J,before:ke,singleRoot:!0,trackIndex:!1,start:Oe,renderItem:(e,n,r,a,o)=>{v(_(()=>{let n=s(),r=f(`li`,n);m(n,r),h(()=>{t(r,`key`,String(e))});let a=c(r);return m(r,a),h(()=>{i(a,e)}),n}),n,r)}})});let Y=f(`div`,K);m(K,Y),a(Y,`rounded-box border border-base-300 bg-base-100 p-4`);let je=f(`div`,Y);m(Y,je),a(je,`text-sm font-medium text-base-content/70`),m(je,l(`watchEffect flush: 'sync'`));let X=f(`ul`,Y);m(Y,X),a(X,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Me=o(`rue:list:start`),Ne=o(`rue:list:end`);m(X,Me),m(X,Ne);let Pe=new Map;h(()=>{Pe=x({items:ce.value||[],getKey:(e,t)=>e,elements:Pe,parent:X,before:Ne,singleRoot:!0,trackIndex:!1,start:Me,renderItem:(e,n,r,a,o)=>{v(_(()=>{let n=s(),r=f(`li`,n);m(n,r),h(()=>{t(r,`key`,String(e))});let a=c(r);return m(r,a),h(()=>{i(a,e)}),n}),n,r)}})});let Z=f(`div`,K);m(K,Z),a(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=f(`div`,Z);m(Z,Q),a(Q,`text-sm font-medium text-base-content/70`),m(Q,l(`默认 watchEffect 批处理记录`));let $=f(`ul`,Z);m(Z,$),a($,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Fe=o(`rue:list:start`),Ie=o(`rue:list:end`);m($,Fe),m($,Ie);let Le=new Map;return h(()=>{Le=x({items:le.value||[],getKey:(e,t)=>e,elements:Le,parent:$,before:Ie,singleRoot:!0,trackIndex:!1,start:Fe,renderItem:(e,n,r,a,o)=>{v(_(()=>{let n=s(),r=f(`li`,n);m(n,r),h(()=>{t(r,`key`,String(e))});let a=c(r);return m(r,a),h(()=>{i(a,e)}),n}),n,r)}})}),r})},ae=()=>{let{activeTab:n}=b(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:b(`ref:1:13`,()=>d(`preview`))})));return _(e=>{let r=s(),i=o(`rue:component:anchor`);return m(r,i),v(y(te,{children:_(()=>{let e=s(),r=f(`h1`,e);m(e,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),m(r,l(`watchSyncEffect 同步业务防线`));let i=f(`div`,e);m(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let c=f(`button`,i);m(i,c),t(c,`role`,`tab`),h(()=>{a(c,`tab ${n.value===`preview`?`tab-active`:``}`)}),u(c,`click`,()=>{n.value=`preview`}),m(c,l(`效果`));let d=f(`button`,i);m(i,d),t(d,`role`,`tab`),h(()=>{a(d,`tab ${n.value===`code`?`tab-active`:``}`)}),u(d,`click`,()=>{n.value=`code`}),m(d,l(`代码`));let p=f(`div`,e);m(e,p),a(p,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=o(`rue:slot:anchor`);m(p,b),h(()=>{let e=n.value===`code`?_(()=>{let e=s(),t=f(`div`,e);m(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);m(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return m(n,r),h(()=>{let e=y(ee,{className:`h-full`,lang:`tsx`,code:ne});g(()=>v(e,n,r))}),e}):``;g(()=>v(e,p,b))}),m(p,l(` `));let x=o(`rue:slot:anchor`);return m(p,x),h(()=>{let e=n.value===`preview`?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(ie,{}),e,t),e}):``;g(()=>v(e,p,x))}),e})}),r,i),r})};export{ae as default};