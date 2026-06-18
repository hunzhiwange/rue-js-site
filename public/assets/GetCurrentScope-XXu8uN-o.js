import{$ as e,Ht as t,J as n,Lt as r,Q as i,St as a,X as o,Xt as s,Z as c,_t as l,at as u,et as d,gt as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as S}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var w=e=>p(()=>{let t=l();e.scopeRef.value=t;let n=document.createElement(`section`),r=document.createElement(`h2`),i=document.createElement(`p`),o=document.createElement(`p`);return n.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,r.className=`text-xl font-semibold`,i.className=`text-sm text-base-content/70`,o.className=`font-mono text-sm`,r.textContent=`Vapor scope probe`,n.append(r,i,o),a(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>s(()=>{let n=l()===t,r=t?.active===!0?`active`:`stopped`;i.textContent=n?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,o.textContent=`count = ${e.count.value}`})),n}),T=()=>{let{activeTab:a,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`ref:1:1`,()=>r(`preview`)),t=b(`ref:1:2`,()=>r(0)),n=b(`ref:1:3`,()=>r(!0)),i=b(`ref:1:4`,()=>r(void 0)),a=b(`ref:1:5`,()=>r(0)),o=b(`ref:1:6`,()=>r([`等待操作：点击按钮观察当前 effect scope`])),s=e=>{a.value+=1,o.value=[`${a.value}. ${e}`,...o.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:n,scopeRef:i,sequence:a,logs:o,report:s,checkOutsideScope:()=>{s(l()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let e=i.value;if(!e?.active){s(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{s(l()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{n.value=!n.value,s(n.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>f(()=>i.value?i.value.active?`active`:`stopped`:`未捕获`))}}));return p(r=>{let l=c(),f=o(`rue:component:anchor`);return n(l,f),_(y(C,{children:p(()=>{let r=c(),l=i(`h1`,r);n(r,l),v(l,`text-5xl font-semibold mb-4 md:mb-4`),n(l,e(`getCurrentScope 作用域探针`));let f=i(`div`,r);n(r,f),u(f,`role`,`tablist`),v(f,`tabs tabs-box`);let g=i(`button`,f);n(f,g),u(g,`role`,`tab`),s(()=>{v(g,`tab ${a.value===`preview`?`tab-active`:``}`)}),h(g,`click`,()=>{a.value=`preview`}),n(g,e(`效果`));let b=i(`button`,f);n(f,b),u(b,`role`,`tab`),s(()=>{v(b,`tab ${a.value===`code`?`tab-active`:``}`)}),h(b,`click`,()=>{a.value=`code`}),n(b,e(`代码`));let C=i(`div`,r);n(r,C),v(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);n(C,O),s(()=>{let e=a.value===`code`?p(()=>{let e=c(),r=i(`div`,e);n(e,r),v(r,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,r);n(r,a),v(a,`card-body p-0`);let l=o(`rue:component:anchor`);return n(a,l),s(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});t(()=>_(e,a,l))}),e}):``;t(()=>_(e,C,O))}),n(C,e(` `));let F=o(`rue:slot:anchor`);return n(C,F),s(()=>{let r=a.value===`preview`?p(()=>{let r=c(),a=i(`div`,r);n(r,a),v(a,`card bg-base-100 shadow`);let l=i(`div`,a);n(a,l),v(l,`card-body gap-5`);let f=i(`div`,l);n(l,f),v(f,`flex flex-wrap items-center gap-3`);let g=i(`button`,f);n(f,g),v(g,`btn btn-primary`),h(g,`click`,()=>T.value++),n(g,e(`更新 count`));let b=i(`button`,f);n(f,b),v(b,`btn`),h(b,`click`,M),n(b,e(`scope.run()`));let S=i(`button`,f);n(f,S),v(S,`btn`),h(S,`click`,j),n(S,e(`事件中读取`));let C=i(`button`,f);n(f,C),v(C,`btn btn-outline`),h(C,`click`,N);let O=d(C);n(C,O),s(()=>{m(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=i(`span`,f);n(f,F),v(F,`badge badge-soft`),n(F,e(`scope: `));let I=o(`rue:slot:anchor`);n(F,I),s(()=>{let e=P.get();t(()=>_(e,F,I))});let L=o(`rue:slot:anchor`);n(l,L),s(()=>{let r=E.value?p(()=>{let e=c(),r=o(`rue:component:anchor`);return n(e,r),s(()=>{let n=y(w,{count:T,scopeRef:D,report:A});t(()=>_(n,e,r))}),e}):p(()=>{let t=c(),r=i(`section`,t);return n(t,r),v(r,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),n(r,e(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),t});t(()=>_(r,l,L))});let R=i(`div`,l);n(l,R),v(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=i(`h2`,R);n(R,z),v(z,`text-lg font-semibold mb-3`),n(z,e(`运行记录`));let B=i(`ul`,R);n(R,B),v(B,`space-y-2 text-sm`);let V=o(`rue:list:start`),H=o(`rue:list:end`);n(B,V),n(B,H);let U=new Map;return s(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,t,r,a,o)=>{_(p(()=>{let t=c(),r=i(`li`,t);n(t,r),v(r,`font-mono`),s(()=>{u(r,`key`,String(e))});let a=d(r);return n(r,a),s(()=>{m(a,e)}),t}),t,r)}})}),r}):``;t(()=>_(r,C,F))}),r})}),l,f),l})};export{T as default};