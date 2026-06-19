import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>a(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>n(!0)),t=_(`ref:1:1`,()=>n([1,2,3]));console.log(`hello2`);let r=()=>{e.value=!e.value};console.log(`i am here1`);let i=()=>{t.value=[...t.value,t.value.length+1]},a=()=>{t.value=t.value.slice(0,-1)},o=()=>{t.value=[...t.value].reverse()},s=_(`ref:1:2`,()=>n(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:r,pushNumber:i,popNumber:a,reverseList:o,activeTab:s}}));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(b,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`条件与循环（移植自 Vue）`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let b=h(`button`,_);o(_,b),s(b,`role`,`tab`),t(()=>{g(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{D.value=`preview`}),o(b,d(`效果`));let O=h(`button`,_);o(_,O),s(O,`role`,`tab`),t(()=>{g(O,`tab ${D.value===`code`?`tab-active`:``}`)}),i(O,`click`,()=>{D.value=`code`}),o(O,d(`代码`));let k=h(`div`,n);o(n,k),g(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);o(k,A),t(()=>{let n=D.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,k,A))}),o(k,d(` `));let j=e(`rue:slot:anchor`);return o(k,j),t(()=>{let n=D.value===`preview`?u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`card bg-base-100 shadow`);let m=h(`div`,a);o(a,m),g(m,`card-body grid gap-4`);let _=h(`div`,m);o(m,_),g(_,`flex flex-wrap gap-2`);let y=h(`button`,_);o(_,y),g(y,`btn btn-primary`),i(y,`click`,C),o(y,d(`Toggle List`));let b=h(`button`,_);o(_,b),g(b,`btn btn-primary`),i(b,`click`,w),o(b,d(`Push Number`));let D=h(`button`,_);o(_,D),g(D,`btn btn-primary`),i(D,`click`,T),o(D,d(`Pop Number`));let O=h(`button`,_);o(_,O),g(O,`btn btn-primary`),i(O,`click`,E),o(O,d(`Reverse List`));let k=e(`rue:slot:anchor`);return o(m,k),t(()=>{let n=x.value&&S.value.length?u(()=>{let n=c(),r=h(`ul`,n);o(n,r),g(r,`list-disc pl-6 space-y-1`);let i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let d=new Map;return t(()=>{d=v({items:S.value||[],getKey:(e,t)=>e,elements:d,parent:r,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,n,r,i,a)=>{f(u(()=>{let n=c(),r=h(`li`,n);o(n,r),t(()=>{s(r,`key`,String(e))});let i=p(r);return o(r,i),t(()=>{l(i,e)}),n}),n,r)}})}),n}):S.value.length?u(()=>{let e=c(),t=h(`p`,e);return o(e,t),g(t,`text-gray-700`),o(t,d(`List is not empty, but hidden.`)),e}):u(()=>{let e=c(),t=h(`p`,e);return o(e,t),g(t,`text-gray-700`),o(t,d(`List is empty.`)),e});r(()=>f(n,m,k))}),n}):``;r(()=>f(n,k,j))}),n})}),a,_),a})};export{x as default};