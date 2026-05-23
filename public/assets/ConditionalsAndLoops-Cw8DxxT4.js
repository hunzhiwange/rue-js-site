import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as y}from"./Code-BdVklNCb.js";import{t as b}from"./SidebarPlaygroundExample-1AA0CIwm.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>t(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>c(!0)),t=_(`ref:1:1`,()=>c([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>c(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(b,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`条件与循环（移植自 Vue）`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let b=a(`button`,_);r(_,b),e(b,`role`,`tab`),u(()=>{h(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),o(b,`click`,()=>{D.value=`preview`}),r(b,f(`效果`));let O=a(`button`,_);r(_,O),e(O,`role`,`tab`),u(()=>{h(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),o(O,`click`,()=>{D.value=`code`}),r(O,f(`代码`));let k=a(`div`,t);r(t,k),h(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);r(k,A),u(()=>{let e=D.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,k,A))}),r(k,f(` `));let j=s(`rue:slot:anchor`);return r(k,j),u(()=>{let t=D.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`card bg-base-100 shadow`);let m=a(`div`,c);r(c,m),h(m,`card-body grid gap-4`);let _=a(`div`,m);r(m,_),h(_,`flex flex-wrap gap-2`);let y=a(`button`,_);r(_,y),h(y,`btn btn-primary`),o(y,`click`,C),r(y,f(`Toggle List`));let b=a(`button`,_);r(_,b),h(b,`btn btn-primary`),o(b,`click`,w),r(b,f(`Push Number`));let D=a(`button`,_);r(_,D),h(D,`btn btn-primary`),o(D,`click`,T),r(D,f(`Pop Number`));let O=a(`button`,_);r(_,O),h(O,`btn btn-primary`),o(O,`click`,E),r(O,f(`Reverse List`));let k=s(`rue:slot:anchor`);return r(m,k),u(()=>{let t=x.value&&S.value.length?l(()=>{let t=n(),o=a(`ul`,t);r(t,o),h(o,`list-disc pl-6 space-y-1`);let c=s(`rue:list:start`),f=s(`rue:list:end`);r(o,c),r(o,f);let m=new Map;return u(()=>{m=v({items:S.value||[],getKey:(e,t)=>e,elements:m,parent:o,before:f,singleRoot:!0,trackIndex:!1,start:c,renderItem:(t,o,s,c,f)=>{d(l(()=>{let o=n(),s=a(`li`,o);r(o,s),u(()=>{e(s,`key`,String(t))});let c=i(s);return r(s,c),u(()=>{p(c,t)}),o}),o,s)}})}),t}):S.value.length?l(()=>{let e=n(),t=a(`p`,e);return r(e,t),h(t,`text-gray-700`),r(t,f(`List is not empty, but hidden.`)),e}):l(()=>{let e=n(),t=a(`p`,e);return r(e,t),h(t,`text-gray-700`),r(t,f(`List is empty.`)),e});g(()=>d(t,m,k))}),t}):``;g(()=>d(t,k,j))}),t})}),c,_),c})};export{x as default};