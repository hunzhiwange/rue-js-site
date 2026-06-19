import{$ as e,$t as t,Bt as n,Gt as r,Tt as i,X as a,Xt as o,Z as s,bt as c,ct as l,et as u,gt as d,l as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v,yt as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var w=e=>f(()=>{let n=c();e.scopeRef.value=n;let r=document.createElement(`section`),a=document.createElement(`h2`),o=document.createElement(`p`),s=document.createElement(`p`);return r.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,a.className=`text-xl font-semibold`,o.className=`text-sm text-base-content/70`,s.className=`font-mono text-sm`,a.textContent=`Vapor scope probe`,r.append(a,o,s),i(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>t(()=>{let t=c()===n,r=n?.active===!0?`active`:`stopped`;o.textContent=t?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,s.textContent=`count = ${e.count.value}`})),r}),T=()=>{let{activeTab:i,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>o(()=>{let e=b(`ref:1:1`,()=>n(`preview`)),t=b(`ref:1:2`,()=>n(0)),r=b(`ref:1:3`,()=>n(!0)),i=b(`ref:1:4`,()=>n(void 0)),a=b(`ref:1:5`,()=>n(0)),o=b(`ref:1:6`,()=>n([`等待操作：点击按钮观察当前 effect scope`])),s=e=>{a.value+=1,o.value=[`${a.value}. ${e}`,...o.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:r,scopeRef:i,sequence:a,logs:o,report:s,checkOutsideScope:()=>{s(c()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let e=i.value;if(!e?.active){s(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{s(c()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{r.value=!r.value,s(r.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>y(()=>i.value?i.value.active?`active`:`stopped`:`未捕获`))}}));return f(n=>{let o=u(),c=e(`rue:component:anchor`);return s(o,c),m(g(C,{children:f(()=>{let n=u(),o=_(`h1`,n);s(n,o),v(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,p(`getCurrentScope 作用域探针`));let c=_(`div`,n);s(n,c),l(c,`role`,`tablist`),v(c,`tabs tabs-box`);let y=_(`button`,c);s(c,y),l(y,`role`,`tab`),t(()=>{v(y,`tab ${i.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{i.value=`preview`}),s(y,p(`效果`));let b=_(`button`,c);s(c,b),l(b,`role`,`tab`),t(()=>{v(b,`tab ${i.value===`code`?`tab-active`:``}`)}),a(b,`click`,()=>{i.value=`code`}),s(b,p(`代码`));let C=_(`div`,n);s(n,C),v(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);s(C,O),t(()=>{let n=i.value===`code`?f(()=>{let n=u(),i=_(`div`,n);s(n,i),v(i,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,i);s(i,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:`import {
  type EffectScope,
  type FC,
  getCurrentScope,
  onScopeDispose,
  ref,
  vapor,
  watchEffect,
} from '@rue-js/rue';

const ScopeProbe: FC<{
  count: { value: number };
  scopeRef: { value: EffectScope | undefined };
  report: (message: string) => void;
}> = props => {
  return vapor(() => {
    const scope = getCurrentScope();
    props.scopeRef.value = scope;

    const root = document.createElement('section');
    const status = document.createElement('p');
    const countText = document.createElement('p');
    root.append(status, countText);

    onScopeDispose(() => {
      props.report('scope disposed');
    });

    watchEffect(() => {
      status.textContent =
        getCurrentScope() === scope ? 'same active scope' : 'missing scope';
      countText.textContent = \`count = \${props.count.value}\`;
    });

    return root;
  });
};

const GetCurrentScopeDemo: FC = () => {
  const count = ref(0);
  const scopeRef = ref<EffectScope | undefined>(undefined);

  return (
    <div>
      <button onClick={() => count.value++}>更新 count</button>
      <button
        onClick={() => {
          scopeRef.value?.run(() => {
            console.log(getCurrentScope() === scopeRef.value);
          });
        }}
      >
        scope.run()
      </button>
      <ScopeProbe count={count} scopeRef={scopeRef} report={console.log} />
    </div>
  );
};`});r(()=>m(e,a,o))}),n}):``;r(()=>m(n,C,O))}),s(C,p(` `));let F=e(`rue:slot:anchor`);return s(C,F),t(()=>{let n=i.value===`preview`?f(()=>{let n=u(),i=_(`div`,n);s(n,i),v(i,`card bg-base-100 shadow`);let o=_(`div`,i);s(i,o),v(o,`card-body gap-5`);let c=_(`div`,o);s(o,c),v(c,`flex flex-wrap items-center gap-3`);let y=_(`button`,c);s(c,y),v(y,`btn btn-primary`),a(y,`click`,()=>T.value++),s(y,p(`更新 count`));let b=_(`button`,c);s(c,b),v(b,`btn`),a(b,`click`,M),s(b,p(`scope.run()`));let S=_(`button`,c);s(c,S),v(S,`btn`),a(S,`click`,j),s(S,p(`事件中读取`));let C=_(`button`,c);s(c,C),v(C,`btn btn-outline`),a(C,`click`,N);let O=h(C);s(C,O),t(()=>{d(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=_(`span`,c);s(c,F),v(F,`badge badge-soft`),s(F,p(`scope: `));let I=e(`rue:slot:anchor`);s(F,I),t(()=>{let e=P.get();r(()=>m(e,F,I))});let L=e(`rue:slot:anchor`);s(o,L),t(()=>{let n=E.value?f(()=>{let n=u(),i=e(`rue:component:anchor`);return s(n,i),t(()=>{let e=g(w,{count:T,scopeRef:D,report:A});r(()=>m(e,n,i))}),n}):f(()=>{let e=u(),t=_(`section`,e);return s(e,t),v(t,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),s(t,p(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),e});r(()=>m(n,o,L))});let R=_(`div`,o);s(o,R),v(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=_(`h2`,R);s(R,z),v(z,`text-lg font-semibold mb-3`),s(z,p(`运行记录`));let B=_(`ul`,R);s(R,B),v(B,`space-y-2 text-sm`);let V=e(`rue:list:start`),H=e(`rue:list:end`);s(B,V),s(B,H);let U=new Map;return t(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,n,r,i,a)=>{m(f(()=>{let n=u(),r=_(`li`,n);s(n,r),v(r,`font-mono`),t(()=>{l(r,`key`,String(e))});let i=h(r);return s(r,i),t(()=>{d(i,e)}),n}),n,r)}})}),n}):``;r(()=>m(n,C,F))}),n})}),o,c),o})};export{T as default};