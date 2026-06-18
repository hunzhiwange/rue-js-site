import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>p(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>r(!0)),t=_(`ref:1:1`,()=>r([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let i=()=>{t.value=[...t.value,t.value.length+1]},a=()=>{t.value=t.value.slice(0,-1)},o=()=>{t.value=[...t.value].reverse()},s=_(`ref:1:2`,()=>r(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:i,popNumber:a,reverseList:o,activeTab:s}}));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(b,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`条件与循环（移植自 Vue）`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let b=i(`button`,_);n(_,b),c(b,`role`,`tab`),o(()=>{h(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),f(b,`click`,()=>{D.value=`preview`}),n(b,e(`效果`));let O=i(`button`,_);n(_,O),c(O,`role`,`tab`),o(()=>{h(O,`tab ${D.value===`code`?`tab-active`:``}`)}),f(O,`click`,()=>{D.value=`code`}),n(O,e(`代码`));let k=i(`div`,r);n(r,k),h(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);n(k,A),o(()=>{let e=D.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const ConditionalsAndLoops: FC = () => {
  const show = ref(true);
  const list = ref<number[]>([1, 2, 3]);

  const toggleShow = () => {
    show.value = !show.value;
  };
  const pushNumber = () => {
    list.value = [...list.value, list.value.length + 1];
  };
  const popNumber = () => {
    list.value = list.value.slice(0, -1);
  };
  const reverseList = () => {
    list.value = [...list.value].reverse();
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={toggleShow}>
            Toggle List
          </button>
          <button className="btn btn-primary" onClick={pushNumber}>
            Push Number
          </button>
          <button className="btn btn-primary" onClick={popNumber}>
            Pop Number
          </button>
          <button className="btn btn-primary" onClick={reverseList}>
            Reverse List
          </button>
        </div>

        {show.value && list.value.length ? (
          <ul className="list-disc pl-6 space-y-1">
            {list.value.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : list.value.length ? (
          <p className="text-gray-700">List is not empty, but hidden.</p>
        ) : (
          <p className="text-gray-700">List is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ConditionalsAndLoops;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,k,A))}),n(k,e(` `));let j=a(`rue:slot:anchor`);return n(k,j),o(()=>{let r=D.value===`preview`?u(()=>{let r=s(),p=i(`div`,r);n(r,p),h(p,`card bg-base-100 shadow`);let g=i(`div`,p);n(p,g),h(g,`card-body grid gap-4`);let _=i(`div`,g);n(g,_),h(_,`flex flex-wrap gap-2`);let y=i(`button`,_);n(_,y),h(y,`btn btn-primary`),f(y,`click`,C),n(y,e(`Toggle List`));let b=i(`button`,_);n(_,b),h(b,`btn btn-primary`),f(b,`click`,w),n(b,e(`Push Number`));let D=i(`button`,_);n(_,D),h(D,`btn btn-primary`),f(D,`click`,T),n(D,e(`Pop Number`));let O=i(`button`,_);n(_,O),h(O,`btn btn-primary`),f(O,`click`,E),n(O,e(`Reverse List`));let k=a(`rue:slot:anchor`);return n(g,k),o(()=>{let r=x.value&&S.value.length?u(()=>{let e=s(),t=i(`ul`,e);n(e,t),h(t,`list-disc pl-6 space-y-1`);let r=a(`rue:list:start`),f=a(`rue:list:end`);n(t,r),n(t,f);let p=new Map;return o(()=>{p=v({items:S.value||[],getKey:(e,t)=>e,elements:p,parent:t,before:f,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,t,r,a,f)=>{m(u(()=>{let t=s(),r=i(`li`,t);n(t,r),o(()=>{c(r,`key`,String(e))});let a=l(r);return n(r,a),o(()=>{d(a,e)}),t}),t,r)}})}),e}):S.value.length?u(()=>{let t=s(),r=i(`p`,t);return n(t,r),h(r,`text-gray-700`),n(r,e(`List is not empty, but hidden.`)),t}):u(()=>{let t=s(),r=i(`p`,t);return n(t,r),h(r,`text-gray-700`),n(r,e(`List is empty.`)),t});t(()=>m(r,g,k))}),r}):``;t(()=>m(r,k,j))}),r})}),p,_),p})};export{x as default};