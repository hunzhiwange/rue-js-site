import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,vt as g,wt as _,yt as v,zt as y}from"./vapor-runtime-CXIalONM.js";import{a as b,n as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as S}from"./Code-BIscIyEp.js";import{r as C}from"./SidebarPlaygroundExample-CEz1fABX.js";var w=e=>l(()=>{let t=v();e.scopeRef.value=t;let r=document.createElement(`section`),i=document.createElement(`h2`),a=document.createElement(`p`),o=document.createElement(`p`);return r.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,i.className=`text-xl font-semibold`,a.className=`text-sm text-base-content/70`,o.className=`font-mono text-sm`,i.textContent=`Vapor scope probe`,r.append(i,a,o),_(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>n(()=>{let n=v()===t,r=t?.active===!0?`active`:`stopped`;a.textContent=n?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,o.textContent=`count = ${e.count.value}`})),r}),T=()=>{let{activeTab:_,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>o(()=>{let e=b(`ref:1:1`,()=>y(`preview`)),t=b(`ref:1:2`,()=>y(0)),n=b(`ref:1:3`,()=>y(!0)),r=b(`ref:1:4`,()=>y(void 0)),i=b(`ref:1:5`,()=>y(0)),a=b(`ref:1:6`,()=>y([`等待操作：点击按钮观察当前 effect scope`])),o=e=>{i.value+=1,a.value=[`${i.value}. ${e}`,...a.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:n,scopeRef:r,sequence:i,logs:a,report:o,checkOutsideScope:()=>{o(v()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let e=r.value;if(!e?.active){o(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{o(v()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{n.value=!n.value,o(n.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>g(()=>r.value?r.value.active?`active`:`stopped`:`未捕获`))}}));return l(o=>{let g=e(),v=t(`rue:component:anchor`);return i(g,v),f(m(C,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`getCurrentScope 作用域探针`));let v=s(`div`,o);i(o,v),p(v,`role`,`tablist`),u(v,`tabs tabs-box`);let y=s(`button`,v);i(v,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${_.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{_.value=`preview`}),i(y,h(`效果`));let b=s(`button`,v);i(v,b),p(b,`role`,`tab`),n(()=>{u(b,`tab ${_.value===`code`?`tab-active`:``}`)}),a(b,`click`,()=>{_.value=`code`}),i(b,h(`代码`));let C=s(`div`,o);i(o,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=t(`rue:slot:anchor`);i(C,O),n(()=>{let a=_.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(S,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,C,O))}),i(C,h(` `));let F=t(`rue:slot:anchor`);return i(C,F),n(()=>{let o=_.value===`preview`?l(()=>{let o=e(),g=s(`div`,o);i(o,g),u(g,`card bg-base-100 shadow`);let _=s(`div`,g);i(g,_),u(_,`card-body gap-5`);let v=s(`div`,_);i(_,v),u(v,`flex flex-wrap items-center gap-3`);let y=s(`button`,v);i(v,y),u(y,`btn btn-primary`),a(y,`click`,()=>T.value++),i(y,h(`更新 count`));let b=s(`button`,v);i(v,b),u(b,`btn`),a(b,`click`,M),i(b,h(`scope.run()`));let S=s(`button`,v);i(v,S),u(S,`btn`),a(S,`click`,j),i(S,h(`事件中读取`));let C=s(`button`,v);i(v,C),u(C,`btn btn-outline`),a(C,`click`,N);let O=d(C);i(C,O),n(()=>{c(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=s(`span`,v);i(v,F),u(F,`badge badge-soft`),i(F,h(`scope: `));let I=t(`rue:slot:anchor`);i(F,I),n(()=>{let e=P.get();r(()=>f(e,F,I))});let L=t(`rue:slot:anchor`);i(_,L),n(()=>{let a=E.value?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(w,{count:T,scopeRef:D,report:A});r(()=>f(e,a,o))}),a}):l(()=>{let t=e(),n=s(`section`,t);return i(t,n),u(n,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),i(n,h(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),t});r(()=>f(a,_,L))});let R=s(`div`,_);i(_,R),u(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=s(`h2`,R);i(R,z),u(z,`text-lg font-semibold mb-3`),i(z,h(`运行记录`));let B=s(`ul`,R);i(R,B),u(B,`space-y-2 text-sm`);let V=t(`rue:list:start`),H=t(`rue:list:end`);i(B,V),i(B,H);let U=new Map;return n(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,r,a,o,m)=>{f(l(()=>{let r=e(),a=s(`li`,r);i(r,a),u(a,`font-mono`),n(()=>{p(a,`key`,String(t))});let o=d(a);return i(a,o),n(()=>{c(o,t)}),r}),r,a)}})}),o}):``;r(()=>f(o,C,F))}),o})}),g,v),g})};export{T as default};