import{$ as e,E as t,G as n,Ht as r,J as i,Jt as a,Q as o,Rt as s,Xt as c,Y as l,Z as u,ct as d,et as f,l as p,mt as m,ot as h,pt as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x,n as S}from"./vapor-helpers-vapor-gtGwiIv0.js";import{i as C}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as w}from"./KeepAlive-grJvTCPK.js";import{t as T}from"./Code-5DOEyGxf.js";import{r as E}from"./SidebarPlaygroundExample-cASgDpH3.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:n=>{let{text:r,setText:o}=x(`useSetup:0:0`,()=>_(()=>{let[e,r]=x(`useState:1:0`,()=>a(`切到计数器后再回来，这段文字还在。`));return t(()=>{n.writeLog(`EditorPanel deactivated: "${e.value.slice(0,12)}"`)}),{text:e,setText:r}}));return p(t=>{let n=e(`section`,t);d(n,`rounded-box border border-info/25 bg-info/10 p-5`);let a=e(`div`,n);l(n,a),d(a,`text-xs font-semibold uppercase opacity-60`),l(a,f(`EditorPanel`));let s=e(`label`,n);l(n,s),d(s,`form-control mt-4`);let u=e(`span`,s);l(s,u),d(u,`label-text`),l(u,f(`草稿内容`));let p=e(`textarea`,s);return l(s,p),d(p,`textarea textarea-bordered mt-2 min-h-28`),c(()=>{g(p,r.value)}),i(p,`input`,e=>{o(e.target.value)}),n})},CounterPanel:n=>{let{count:r,setCount:o}=x(`useSetup:0:0:dup1`,()=>_(()=>{let[e,r]=x(`useState:1:1`,()=>a(0));return t(()=>{n.writeLog(`CounterPanel deactivated: count = ${e.value}`)}),{count:e,setCount:r}}));return p(t=>{let n=e(`section`,t);d(n,`rounded-box border border-success/25 bg-success/10 p-5`);let a=e(`div`,n);l(n,a),d(a,`text-xs font-semibold uppercase opacity-60`),l(a,f(`CounterPanel`));let s=e(`div`,n);l(n,s),d(s,`mt-4 text-5xl font-semibold`);let u=b(s);l(s,u),c(()=>{m(u,r.value)});let p=e(`button`,n);return l(n,p),d(p,`btn btn-success btn-sm mt-5`),i(p,`click`,()=>{o(e=>{e.value+=1})}),l(p,f(`增加`)),n})}},k=`import {
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
};`,A=e=>p(()=>{let t=document.createDocumentFragment(),r=document.createComment(`on-deactivated-anchor`);return t.appendChild(r),x(`watchEffect:1:2`,()=>c(()=>{v(C(w,{children:C(n,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),t,r)})),t}),j=()=>{let{activeTab:t,activePanel:n,logs:a,writeLog:g}=x(`useSetup:0:0:dup2`,()=>_(()=>{let e=x(`ref:1:3`,()=>s(`preview`)),t=x(`ref:1:4`,()=>s(`EditorPanel`)),n=x(`ref:1:5`,()=>s([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return p(s=>{let _=o(),x=u(`rue:component:anchor`);return l(_,x),v(y(E,{children:p(()=>{let s=o(),_=e(`h1`,s);l(s,_),d(_,`text-5xl font-semibold mb-4 md:mb-4`),l(_,f(`onDeactivated()`));let x=e(`div`,s);l(s,x),h(x,`role`,`tablist`),d(x,`tabs tabs-box`);let C=e(`button`,x);l(x,C),h(C,`role`,`tab`),c(()=>{d(C,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),i(C,`click`,()=>{t.value=`preview`}),l(C,f(`效果`));let w=e(`button`,x);l(x,w),h(w,`role`,`tab`),c(()=>{d(w,String(`tab ${t.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{t.value=`code`}),l(w,f(`代码`));let E=e(`div`,s);l(s,E),d(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=u(`rue:slot:anchor`);l(E,j),c(()=>{let n=t.value===`code`?p(()=>{let t=o(),n=e(`div`,t);l(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let i=e(`div`,n);l(n,i),d(i,`card-body p-0`);let a=u(`rue:component:anchor`);return l(i,a),c(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:k});r(()=>v(e,i,a))}),t}):``;r(()=>v(n,E,j))}),l(E,f(` `));let M=u(`rue:slot:anchor`);return l(E,M),c(()=>{let s=t.value===`preview`?p(()=>{let t=o(),s=e(`div`,t);l(t,s),d(s,`card bg-base-100 shadow`);let _=e(`div`,s);l(s,_),d(_,`card-body gap-6`);let x=e(`div`,_);l(_,x),d(x,`join`);let C=u(`rue:list:start`),w=u(`rue:list:end`);l(x,C),l(x,w);let T=new Map;c(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,s,f,m)=>{v(p(()=>{let a=o(),s=e(`button`,a);l(a,s),c(()=>{d(s,String(`btn join-item ${n.value===t?`btn-primary`:``}`))}),i(s,`click`,()=>{n.value=t}),c(()=>{h(s,`key`,String(t))});let f=u(`rue:slot:anchor`);return l(s,f),c(()=>{let e=D[t];r(()=>v(e,s,f))}),a}),a,s)}})});let E=u(`rue:component:anchor`);l(_,E),c(()=>{let e=y(A,{activePanel:n,writeLog:g});r(()=>v(e,_,E))});let k=e(`section`,_);l(_,k),d(k,`rounded-box bg-base-200 p-4`);let j=e(`h2`,k);l(k,j),d(j,`text-lg font-semibold`),l(j,f(`Deactivated 日志`));let M=e(`ul`,k);l(k,M),d(M,`mt-3 space-y-2 text-sm`);let N=u(`rue:slot:anchor`);l(M,N),c(()=>{let t=a.value.length===0?p(()=>{let t=o(),n=e(`li`,t);return l(t,n),d(n,`opacity-60`),l(n,f(`切换面板后会出现日志。`)),t}):``;r(()=>v(t,M,N))}),l(M,f(` `));let P=u(`rue:list:start`),F=u(`rue:list:end`);l(M,P),l(M,F);let I=new Map;return c(()=>{I=S({items:a.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,r,i,a)=>{v(p(()=>{let n=o(),r=e(`li`,n);l(n,r),d(r,`rounded-box bg-base-100 px-3 py-2`),c(()=>{h(r,`key`,String(t))});let i=b(r);return l(r,i),c(()=>{m(i,t)}),n}),n,r)}})}),t}):``;r(()=>v(s,E,M))}),s})}),_,x),_})};export{j as default};