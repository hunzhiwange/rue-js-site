import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,Wt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h,zt as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as S}from"./Code-DhoWkRkB.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var w=e=>_(()=>{let t=g();e.scopeRef.value=t;let n=document.createElement(`section`),r=document.createElement(`h2`),i=document.createElement(`p`),o=document.createElement(`p`);return n.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,r.className=`text-xl font-semibold`,i.className=`text-sm text-base-content/70`,o.className=`font-mono text-sm`,r.textContent=`Vapor scope probe`,n.append(r,i,o),a(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>m(()=>{let n=g()===t,r=t?.active===!0?`active`:`stopped`;i.textContent=n?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,o.textContent=`count = ${e.count.value}`})),n}),T=()=>{let{activeTab:a,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>e(()=>{let e=b(`ref:1:1`,()=>d(`preview`)),t=b(`ref:1:2`,()=>d(0)),r=b(`ref:1:3`,()=>d(!0)),i=b(`ref:1:4`,()=>d(void 0)),a=b(`ref:1:5`,()=>d(0)),o=b(`ref:1:6`,()=>d([`等待操作：点击按钮观察当前 effect scope`])),s=e=>{a.value+=1,o.value=[`${a.value}. ${e}`,...o.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:r,scopeRef:i,sequence:a,logs:o,report:s,checkOutsideScope:()=>{s(g()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let e=i.value;if(!e?.active){s(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{s(g()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{r.value=!r.value,s(r.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>n(()=>i.value?i.value.active?`active`:`stopped`:`未捕获`))}}));return _(e=>{let n=s(),d=o(`rue:component:anchor`);return p(n,d),v(y(C,{children:_(()=>{let e=s(),n=f(`h1`,e);p(e,n),i(n,`text-5xl font-semibold mb-4 md:mb-4`),p(n,l(`getCurrentScope 作用域探针`));let d=f(`div`,e);p(e,d),t(d,`role`,`tablist`),i(d,`tabs tabs-box`);let g=f(`button`,d);p(d,g),t(g,`role`,`tab`),m(()=>{i(g,`tab ${a.value===`preview`?`tab-active`:``}`)}),u(g,`click`,()=>{a.value=`preview`}),p(g,l(`效果`));let b=f(`button`,d);p(d,b),t(b,`role`,`tab`),m(()=>{i(b,`tab ${a.value===`code`?`tab-active`:``}`)}),u(b,`click`,()=>{a.value=`code`}),p(b,l(`代码`));let C=f(`div`,e);p(e,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);p(C,O),m(()=>{let e=a.value===`code`?_(()=>{let e=s(),t=f(`div`,e);p(e,t),i(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),i(n,`card-body p-0`);let r=o(`rue:component:anchor`);return p(n,r),m(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});h(()=>v(e,n,r))}),e}):``;h(()=>v(e,C,O))}),p(C,l(` `));let F=o(`rue:slot:anchor`);return p(C,F),m(()=>{let e=a.value===`preview`?_(()=>{let e=s(),n=f(`div`,e);p(e,n),i(n,`card bg-base-100 shadow`);let a=f(`div`,n);p(n,a),i(a,`card-body gap-5`);let d=f(`div`,a);p(a,d),i(d,`flex flex-wrap items-center gap-3`);let g=f(`button`,d);p(d,g),i(g,`btn btn-primary`),u(g,`click`,()=>T.value++),p(g,l(`更新 count`));let b=f(`button`,d);p(d,b),i(b,`btn`),u(b,`click`,M),p(b,l(`scope.run()`));let S=f(`button`,d);p(d,S),i(S,`btn`),u(S,`click`,j),p(S,l(`事件中读取`));let C=f(`button`,d);p(d,C),i(C,`btn btn-outline`),u(C,`click`,N);let O=c(C);p(C,O),m(()=>{r(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=f(`span`,d);p(d,F),i(F,`badge badge-soft`),p(F,l(`scope: `));let I=o(`rue:slot:anchor`);p(F,I),m(()=>{let e=P.get();h(()=>v(e,F,I))});let L=o(`rue:slot:anchor`);p(a,L),m(()=>{let e=E.value?_(()=>{let e=s(),t=o(`rue:component:anchor`);return p(e,t),m(()=>{let n=y(w,{count:T,scopeRef:D,report:A});h(()=>v(n,e,t))}),e}):_(()=>{let e=s(),t=f(`section`,e);return p(e,t),i(t,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),p(t,l(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),e});h(()=>v(e,a,L))});let R=f(`div`,a);p(a,R),i(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=f(`h2`,R);p(R,z),i(z,`text-lg font-semibold mb-3`),p(z,l(`运行记录`));let B=f(`ul`,R);p(R,B),i(B,`space-y-2 text-sm`);let V=o(`rue:list:start`),H=o(`rue:list:end`);p(B,V),p(B,H);let U=new Map;return m(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,n,a,o,l)=>{v(_(()=>{let n=s(),a=f(`li`,n);p(n,a),i(a,`font-mono`),m(()=>{t(a,`key`,String(e))});let o=c(a);return p(a,o),m(()=>{r(o,e)}),n}),n,a)}})}),e}):``;h(()=>v(e,C,F))}),e})}),n,d),n})};export{T as default};