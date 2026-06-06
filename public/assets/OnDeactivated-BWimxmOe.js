import{$ as e,E as t,G as n,J as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,l as p,mt as m,ot as h,pt as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x,n as S}from"./vapor-helpers-vapor-CJFAWine.js";import{i as C}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as w}from"./KeepAlive-BGL0kX9E.js";import{t as T}from"./Code-Ds9lKLk6.js";import{t as E}from"./SidebarPlaygroundExample-KML-rOvA.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:n=>{let{text:a,setText:o}=x(`useSetup:0:0`,()=>i(()=>{let[e,r]=x(`useState:1:0`,()=>_(`切到计数器后再回来，这段文字还在。`));return t(()=>{n.writeLog(`EditorPanel deactivated: "${e.value.slice(0,12)}"`)}),{text:e,setText:r}}));return p(t=>{let n=e(`section`,t);d(n,`rounded-box border border-info/25 bg-info/10 p-5`);let i=e(`div`,n);c(n,i),d(i,`text-xs font-semibold uppercase opacity-60`),c(i,f(`EditorPanel`));let s=e(`label`,n);c(n,s),d(s,`form-control mt-4`);let u=e(`span`,s);c(s,u),d(u,`label-text`),c(u,f(`草稿内容`));let p=e(`textarea`,s);return c(s,p),d(p,`textarea textarea-bordered mt-2 min-h-28`),l(()=>{g(p,a.value)}),r(p,`input`,e=>{o(e.target.value)}),n})},CounterPanel:n=>{let{count:a,setCount:o}=x(`useSetup:0:0:dup1`,()=>i(()=>{let[e,r]=x(`useState:1:1`,()=>_(0));return t(()=>{n.writeLog(`CounterPanel deactivated: count = ${e.value}`)}),{count:e,setCount:r}}));return p(t=>{let n=e(`section`,t);d(n,`rounded-box border border-success/25 bg-success/10 p-5`);let i=e(`div`,n);c(n,i),d(i,`text-xs font-semibold uppercase opacity-60`),c(i,f(`CounterPanel`));let s=e(`div`,n);c(n,s),d(s,`mt-4 text-5xl font-semibold`);let u=b(s);c(s,u),l(()=>{m(u,a.value)});let p=e(`button`,n);return c(n,p),d(p,`btn btn-success btn-sm mt-5`),r(p,`click`,()=>{o(e=>{e.value+=1})}),c(p,f(`增加`)),n})}},k=`import {
  Component,
  KeepAlive,
  onDeactivated,
  ref,
  useState,
  type FC,
} from '@rue-js/rue';

const EditorPanel: FC<{ writeLog: (message: string) => void }> = props => {
  const [text, setText] = useState('draft');

  onDeactivated(() => {
    props.writeLog(\`EditorPanel deactivated: "\${text.value}"\`);
  });

  return (
    <textarea
      value={text.value}
      onInput={(event: Event) => {
        setText((event.target as HTMLTextAreaElement).value);
      }}
    />
  );
};

const CounterPanel: FC<{ writeLog: (message: string) => void }> = props => {
  const [count, setCount] = useState(0);

  onDeactivated(() => {
    props.writeLog(\`CounterPanel deactivated: count = \${count.value}\`);
  });

  return (
    <button onClick={() => setCount(value => { value.value += 1 })}>
      count: {count.value}
    </button>
  );
};

const panels = { EditorPanel, CounterPanel };

/** KeepAlive 切换示例主体，负责在两个缓存面板之间切换并记录日志。 */
const Demo: FC = () => {
  const activePanel = ref<keyof typeof panels>('EditorPanel');

  return (
    <KeepAlive>
      <Component
        is={panels[activePanel.value]}
        key={activePanel.value}
        writeLog={message => console.log(message)}
      />
    </KeepAlive>
  );
};`,A=e=>p(()=>{let t=document.createDocumentFragment(),r=document.createComment(`on-deactivated-anchor`);return t.appendChild(r),x(`watchEffect:1:2`,()=>l(()=>{v(C(w,{children:C(n,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),t,r)})),t}),j=()=>{let{activeTab:t,activePanel:n,logs:g,writeLog:_}=x(`useSetup:0:0:dup2`,()=>i(()=>{let e=x(`ref:1:3`,()=>a(`preview`)),t=x(`ref:1:4`,()=>a(`EditorPanel`)),n=x(`ref:1:5`,()=>a([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return p(i=>{let a=o(),x=u(`rue:component:anchor`);return c(a,x),v(y(E,{children:p(()=>{let i=o(),a=e(`h1`,i);c(i,a),d(a,`text-5xl font-semibold mb-4 md:mb-4`),c(a,f(`onDeactivated()`));let x=e(`div`,i);c(i,x),h(x,`role`,`tablist`),d(x,`tabs tabs-box`);let C=e(`button`,x);c(x,C),h(C,`role`,`tab`),l(()=>{d(C,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(C,`click`,()=>{t.value=`preview`}),c(C,f(`效果`));let w=e(`button`,x);c(x,w),h(w,`role`,`tab`),l(()=>{d(w,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(w,`click`,()=>{t.value=`code`}),c(w,f(`代码`));let E=e(`div`,i);c(i,E),d(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=u(`rue:slot:anchor`);c(E,j),l(()=>{let n=t.value===`code`?p(()=>{let t=o(),n=e(`div`,t);c(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:k});s(()=>v(e,r,i))}),t}):``;s(()=>v(n,E,j))}),c(E,f(` `));let M=u(`rue:slot:anchor`);return c(E,M),l(()=>{let i=t.value===`preview`?p(()=>{let t=o(),i=e(`div`,t);c(t,i),d(i,`card bg-base-100 shadow`);let a=e(`div`,i);c(i,a),d(a,`card-body gap-6`);let x=e(`div`,a);c(a,x),d(x,`join`);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(x,C),c(x,w);let T=new Map;l(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,a,f,m)=>{v(p(()=>{let i=o(),a=e(`button`,i);c(i,a),l(()=>{d(a,String(`btn join-item ${n.value===t?`btn-primary`:``}`))}),r(a,`click`,()=>{n.value=t}),l(()=>{h(a,`key`,String(t))});let f=u(`rue:slot:anchor`);return c(a,f),l(()=>{let e=D[t];s(()=>v(e,a,f))}),i}),i,a)}})});let E=u(`rue:component:anchor`);c(a,E),l(()=>{let e=y(A,{activePanel:n,writeLog:_});s(()=>v(e,a,E))});let k=e(`section`,a);c(a,k),d(k,`rounded-box bg-base-200 p-4`);let j=e(`h2`,k);c(k,j),d(j,`text-lg font-semibold`),c(j,f(`Deactivated 日志`));let M=e(`ul`,k);c(k,M),d(M,`mt-3 space-y-2 text-sm`);let N=u(`rue:slot:anchor`);c(M,N),l(()=>{let t=g.value.length===0?p(()=>{let t=o(),n=e(`li`,t);return c(t,n),d(n,`opacity-60`),c(n,f(`切换面板后会出现日志。`)),t}):``;s(()=>v(t,M,N))}),c(M,f(` `));let P=u(`rue:list:start`),F=u(`rue:list:end`);c(M,P),c(M,F);let I=new Map;return l(()=>{I=S({items:g.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,r,i,a)=>{v(p(()=>{let n=o(),r=e(`li`,n);c(n,r),d(r,`rounded-box bg-base-100 px-3 py-2`),l(()=>{h(r,`key`,String(t))});let i=b(r);return c(r,i),l(()=>{m(i,t)}),n}),n,r)}})}),t}):``;s(()=>v(i,E,M))}),i})}),a,x),a})};export{j as default};