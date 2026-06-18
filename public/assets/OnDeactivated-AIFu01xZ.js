import{$ as e,Ht as t,J as n,Jt as r,Lt as i,Q as a,T as o,W as s,X as c,Xt as l,Z as u,at as d,et as f,ft as p,l as m,pt as h,q as g,qt as _,s as v,st as y,t as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x,n as S}from"./vapor-helpers-vapor-BjKHCvOa.js";import{i as C}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as w}from"./KeepAlive-hd4Kn7KC.js";import{t as T}from"./Code-CZqShVUj.js";import{r as E}from"./SidebarPlaygroundExample-5H7RL-T7.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:t=>{let{text:i,setText:s}=x(`useSetup:0:0`,()=>_(()=>{let[e,n]=x(`useState:1:0`,()=>r(`切到计数器后再回来，这段文字还在。`));return o(()=>{t.writeLog(`EditorPanel deactivated: "${e.value.slice(0,12)}"`)}),{text:e,setText:n}}));return m(t=>{let r=a(`section`,t);y(r,`rounded-box border border-info/25 bg-info/10 p-5`);let o=a(`div`,r);n(r,o),y(o,`text-xs font-semibold uppercase opacity-60`),n(o,e(`EditorPanel`));let c=a(`label`,r);n(r,c),y(c,`form-control mt-4`);let u=a(`span`,c);n(c,u),y(u,`label-text`),n(u,e(`草稿内容`));let d=a(`textarea`,c);return n(c,d),y(d,`textarea textarea-bordered mt-2 min-h-28`),l(()=>{p(d,i.value)}),g(d,`input`,e=>{s(e.target.value)}),r})},CounterPanel:t=>{let{count:i,setCount:s}=x(`useSetup:0:0:dup1`,()=>_(()=>{let[e,n]=x(`useState:1:1`,()=>r(0));return o(()=>{t.writeLog(`CounterPanel deactivated: count = ${e.value}`)}),{count:e,setCount:n}}));return m(t=>{let r=a(`section`,t);y(r,`rounded-box border border-success/25 bg-success/10 p-5`);let o=a(`div`,r);n(r,o),y(o,`text-xs font-semibold uppercase opacity-60`),n(o,e(`CounterPanel`));let c=a(`div`,r);n(r,c),y(c,`mt-4 text-5xl font-semibold`);let u=f(c);n(c,u),l(()=>{h(u,i.value)});let d=a(`button`,r);return n(r,d),y(d,`btn btn-success btn-sm mt-5`),g(d,`click`,()=>{s(e=>{e.value+=1})}),n(d,e(`增加`)),r})}},k=`import {
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
};`,A=e=>m(()=>{let t=document.createDocumentFragment(),n=document.createComment(`on-deactivated-anchor`);return t.appendChild(n),x(`watchEffect:1:2`,()=>l(()=>{v(C(w,{children:C(s,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),t,n)})),t}),j=()=>{let{activeTab:r,activePanel:o,logs:s,writeLog:p}=x(`useSetup:0:0:dup2`,()=>_(()=>{let e=x(`ref:1:3`,()=>i(`preview`)),t=x(`ref:1:4`,()=>i(`EditorPanel`)),n=x(`ref:1:5`,()=>i([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return m(i=>{let _=u(),x=c(`rue:component:anchor`);return n(_,x),v(b(E,{children:m(()=>{let i=u(),_=a(`h1`,i);n(i,_),y(_,`text-5xl font-semibold mb-4 md:mb-4`),n(_,e(`onDeactivated()`));let x=a(`div`,i);n(i,x),d(x,`role`,`tablist`),y(x,`tabs tabs-box`);let C=a(`button`,x);n(x,C),d(C,`role`,`tab`),l(()=>{y(C,`tab ${r.value===`preview`?`tab-active`:``}`)}),g(C,`click`,()=>{r.value=`preview`}),n(C,e(`效果`));let w=a(`button`,x);n(x,w),d(w,`role`,`tab`),l(()=>{y(w,`tab ${r.value===`code`?`tab-active`:``}`)}),g(w,`click`,()=>{r.value=`code`}),n(w,e(`代码`));let E=a(`div`,i);n(i,E),y(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=c(`rue:slot:anchor`);n(E,j),l(()=>{let e=r.value===`code`?m(()=>{let e=u(),r=a(`div`,e);n(e,r),y(r,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,r);n(r,i),y(i,`card-body p-0`);let o=c(`rue:component:anchor`);return n(i,o),l(()=>{let e=b(T,{className:`h-full`,lang:`tsx`,code:k});t(()=>v(e,i,o))}),e}):``;t(()=>v(e,E,j))}),n(E,e(` `));let M=c(`rue:slot:anchor`);return n(E,M),l(()=>{let i=r.value===`preview`?m(()=>{let r=u(),i=a(`div`,r);n(r,i),y(i,`card bg-base-100 shadow`);let _=a(`div`,i);n(i,_),y(_,`card-body gap-6`);let x=a(`div`,_);n(_,x),y(x,`join`);let C=c(`rue:list:start`),w=c(`rue:list:end`);n(x,C),n(x,w);let T=new Map;l(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,i,s,f)=>{v(m(()=>{let r=u(),i=a(`button`,r);n(r,i),l(()=>{y(i,`btn join-item ${o.value===e?`btn-primary`:``}`)}),g(i,`click`,()=>{o.value=e}),l(()=>{d(i,`key`,String(e))});let s=c(`rue:slot:anchor`);return n(i,s),l(()=>{let n=D[e];t(()=>v(n,i,s))}),r}),r,i)}})});let E=c(`rue:component:anchor`);n(_,E),l(()=>{let e=b(A,{activePanel:o,writeLog:p});t(()=>v(e,_,E))});let k=a(`section`,_);n(_,k),y(k,`rounded-box bg-base-200 p-4`);let j=a(`h2`,k);n(k,j),y(j,`text-lg font-semibold`),n(j,e(`Deactivated 日志`));let M=a(`ul`,k);n(k,M),y(M,`mt-3 space-y-2 text-sm`);let N=c(`rue:slot:anchor`);n(M,N),l(()=>{let r=s.value.length===0?m(()=>{let t=u(),r=a(`li`,t);return n(t,r),y(r,`opacity-60`),n(r,e(`切换面板后会出现日志。`)),t}):``;t(()=>v(r,M,N))}),n(M,e(` `));let P=c(`rue:list:start`),F=c(`rue:list:end`);n(M,P),n(M,F);let I=new Map;return l(()=>{I=S({items:s.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,t,r,i,o)=>{v(m(()=>{let t=u(),r=a(`li`,t);n(t,r),y(r,`rounded-box bg-base-100 px-3 py-2`),l(()=>{d(r,`key`,String(e))});let i=f(r);return n(r,i),l(()=>{h(i,e)}),t}),t,r)}})}),r}):``;t(()=>v(i,E,M))}),i})}),_,x),_})};export{j as default};