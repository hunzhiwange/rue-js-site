import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>e(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>l(!0)),t=_(`ref:1:1`,()=>l([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>l(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(b,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`条件与循环（移植自 Vue）`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let b=u(`button`,_);d(_,b),t(b,`role`,`tab`),f(()=>{r(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),c(b,`click`,()=>{D.value=`preview`}),d(b,s(`效果`));let O=u(`button`,_);d(_,O),t(O,`role`,`tab`),f(()=>{r(O,`tab ${D.value===`code`?`tab-active`:``}`)}),c(O,`click`,()=>{D.value=`code`}),d(O,s(`代码`));let k=u(`div`,e);d(e,k),r(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=i(`rue:slot:anchor`);d(k,A),f(()=>{let e=D.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,k,A))}),d(k,s(` `));let j=i(`rue:slot:anchor`);return d(k,j),f(()=>{let e=D.value===`preview`?m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`card bg-base-100 shadow`);let g=u(`div`,l);d(l,g),r(g,`card-body grid gap-4`);let _=u(`div`,g);d(g,_),r(_,`flex flex-wrap gap-2`);let y=u(`button`,_);d(_,y),r(y,`btn btn-primary`),c(y,`click`,C),d(y,s(`Toggle List`));let b=u(`button`,_);d(_,b),r(b,`btn btn-primary`),c(b,`click`,w),d(b,s(`Push Number`));let D=u(`button`,_);d(_,D),r(D,`btn btn-primary`),c(D,`click`,T),d(D,s(`Pop Number`));let O=u(`button`,_);d(_,O),r(O,`btn btn-primary`),c(O,`click`,E),d(O,s(`Reverse List`));let k=i(`rue:slot:anchor`);return d(g,k),f(()=>{let e=x.value&&S.value.length?m(()=>{let e=a(),s=u(`ul`,e);d(e,s),r(s,`list-disc pl-6 space-y-1`);let c=i(`rue:list:start`),l=i(`rue:list:end`);d(s,c),d(s,l);let p=new Map;return f(()=>{p=v({items:S.value||[],getKey:(e,t)=>e,elements:p,parent:s,before:l,singleRoot:!0,trackIndex:!1,start:c,renderItem:(e,r,i,s,c)=>{h(m(()=>{let r=a(),i=u(`li`,r);d(r,i),f(()=>{t(i,`key`,String(e))});let s=o(i);return d(i,s),f(()=>{n(s,e)}),r}),r,i)}})}),e}):S.value.length?m(()=>{let e=a(),t=u(`p`,e);return d(e,t),r(t,`text-gray-700`),d(t,s(`List is not empty, but hidden.`)),e}):m(()=>{let e=a(),t=u(`p`,e);return d(e,t),r(t,`text-gray-700`),d(t,s(`List is empty.`)),e});p(()=>h(e,g,k))}),e}):``;p(()=>h(e,k,j))}),e})}),l,_),l})};export{x as default};