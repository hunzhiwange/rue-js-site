import{$ as e,G as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,j as p,l as m,mt as h,ot as g,pt as _,qt as v,t as y,tt as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x,n as S}from"./vapor-helpers-vapor-DkadWylb.js";import{r as C}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as w}from"./KeepAlive-WcY_63e7.js";import{t as T}from"./Code-B_4lzH85.js";import{t as E}from"./SidebarPlaygroundExample-CtM-WHq_.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:t=>{let{text:i,setText:a}=x(`useSetup:0:0`,()=>r(()=>{let[e,n]=x(`useState:1:0`,()=>v(`切到计数器后再回来，这段文字还在。`));return p(()=>{t.writeLog(`EditorPanel deactivated: "${e.value.slice(0,12)}"`)}),{text:e,setText:n}}));return d(t=>{let r=e(`section`,t);u(r,`rounded-box border border-info/25 bg-info/10 p-5`);let o=e(`div`,r);s(r,o),u(o,`text-xs font-semibold uppercase opacity-60`),s(o,f(`EditorPanel`));let l=e(`label`,r);s(r,l),u(l,`form-control mt-4`);let d=e(`span`,l);s(l,d),u(d,`label-text`),s(d,f(`草稿内容`));let p=e(`textarea`,l);return s(l,p),u(p,`textarea textarea-bordered mt-2 min-h-28`),c(()=>{_(p,i.value)}),n(p,`input`,e=>{a(e.target.value)}),r})},CounterPanel:t=>{let{count:i,setCount:a}=x(`useSetup:0:0:dup1`,()=>r(()=>{let[e,n]=x(`useState:1:1`,()=>v(0));return p(()=>{t.writeLog(`CounterPanel deactivated: count = ${e.value}`)}),{count:e,setCount:n}}));return d(t=>{let r=e(`section`,t);u(r,`rounded-box border border-success/25 bg-success/10 p-5`);let o=e(`div`,r);s(r,o),u(o,`text-xs font-semibold uppercase opacity-60`),s(o,f(`CounterPanel`));let l=e(`div`,r);s(r,l),u(l,`mt-4 text-5xl font-semibold`);let d=b(l);s(l,d),c(()=>{h(d,i.value)});let p=e(`button`,r);return s(r,p),u(p,`btn btn-success btn-sm mt-5`),n(p,`click`,()=>{a(e=>{e.value+=1})}),s(p,f(`增加`)),r})}},k=`import {
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
};`,A=e=>d(()=>{let n=document.createDocumentFragment(),r=document.createComment(`on-deactivated-anchor`);return n.appendChild(r),x(`watchEffect:1:2`,()=>c(()=>{m(C(w,{children:C(t,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),n,r)})),n}),j=()=>{let{activeTab:t,activePanel:p,logs:_,writeLog:v}=x(`useSetup:0:0:dup2`,()=>r(()=>{let e=x(`ref:1:3`,()=>i(`preview`)),t=x(`ref:1:4`,()=>i(`EditorPanel`)),n=x(`ref:1:5`,()=>i([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return d(r=>{let i=a(),x=l(`rue:component:anchor`);return s(i,x),m(y(E,{children:d(()=>{let r=a(),i=e(`h1`,r);s(r,i),u(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,f(`onDeactivated()`));let x=e(`div`,r);s(r,x),g(x,`role`,`tablist`),u(x,`tabs tabs-box`);let C=e(`button`,x);s(x,C),g(C,`role`,`tab`),c(()=>{u(C,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(C,`click`,()=>{t.value=`preview`}),s(C,f(`效果`));let w=e(`button`,x);s(x,w),g(w,`role`,`tab`),c(()=>{u(w,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(w,`click`,()=>{t.value=`code`}),s(w,f(`代码`));let E=e(`div`,r);s(r,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=l(`rue:slot:anchor`);s(E,j),c(()=>{let n=t.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:k});o(()=>m(e,r,i))}),t}):``;o(()=>m(n,E,j))}),s(E,f(` `));let M=l(`rue:slot:anchor`);return s(E,M),c(()=>{let r=t.value===`preview`?d(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-6`);let x=e(`div`,i);s(i,x),u(x,`join`);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(x,C),s(x,w);let T=new Map;c(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,f,h)=>{m(d(()=>{let r=a(),i=e(`button`,r);s(r,i),c(()=>{u(i,String(`btn join-item ${p.value===t?`btn-primary`:``}`))}),n(i,`click`,()=>{p.value=t}),c(()=>{g(i,`key`,String(t))});let d=l(`rue:slot:anchor`);return s(i,d),c(()=>{let e=D[t];o(()=>m(e,i,d))}),r}),r,i)}})});let E=l(`rue:component:anchor`);s(i,E),c(()=>{let e=y(A,{activePanel:p,writeLog:v});o(()=>m(e,i,E))});let k=e(`section`,i);s(i,k),u(k,`rounded-box bg-base-200 p-4`);let j=e(`h2`,k);s(k,j),u(j,`text-lg font-semibold`),s(j,f(`Deactivated 日志`));let M=e(`ul`,k);s(k,M),u(M,`mt-3 space-y-2 text-sm`);let N=l(`rue:slot:anchor`);s(M,N),c(()=>{let t=_.value.length===0?d(()=>{let t=a(),n=e(`li`,t);return s(t,n),u(n,`opacity-60`),s(n,f(`切换面板后会出现日志。`)),t}):``;o(()=>m(t,M,N))}),s(M,f(` `));let P=l(`rue:list:start`),F=l(`rue:list:end`);s(M,P),s(M,F);let I=new Map;return c(()=>{I=S({items:_.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,r,i,o)=>{m(d(()=>{let n=a(),r=e(`li`,n);s(n,r),u(r,`rounded-box bg-base-100 px-3 py-2`),c(()=>{g(r,`key`,String(t))});let i=b(r);return s(r,i),c(()=>{h(i,t)}),n}),n,r)}})}),t}):``;o(()=>m(r,E,M))}),r})}),i,x),i})};export{j as default};