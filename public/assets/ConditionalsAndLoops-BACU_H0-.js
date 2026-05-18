import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>d(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>p(!0)),t=_(`ref:1:1`,()=>p([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>p(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(b,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`条件与循环（移植自 Vue）`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let b=r(`button`,_);a(_,b),c(b,`role`,`tab`),h(()=>{n(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{D.value=`preview`}),a(b,s(`效果`));let O=r(`button`,_);a(_,O),c(O,`role`,`tab`),h(()=>{n(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),i(O,`click`,()=>{D.value=`code`}),a(O,s(`代码`));let k=r(`div`,d);a(d,k),n(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=e(`rue:slot:anchor`);a(k,A),h(()=>{let i=D.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,k,A))}),a(k,s(` `));let j=e(`rue:slot:anchor`);return a(k,j),h(()=>{let d=D.value===`preview`?l(()=>{let d=t(),p=r(`div`,d);a(d,p),n(p,`card bg-base-100 shadow`);let m=r(`div`,p);a(p,m),n(m,`card-body grid gap-4`);let _=r(`div`,m);a(m,_),n(_,`flex flex-wrap gap-2`);let y=r(`button`,_);a(_,y),n(y,`btn btn-primary`),i(y,`click`,C),a(y,s(`Toggle List`));let b=r(`button`,_);a(_,b),n(b,`btn btn-primary`),i(b,`click`,w),a(b,s(`Push Number`));let D=r(`button`,_);a(_,D),n(D,`btn btn-primary`),i(D,`click`,T),a(D,s(`Pop Number`));let O=r(`button`,_);a(_,O),n(O,`btn btn-primary`),i(O,`click`,E),a(O,s(`Reverse List`));let k=e(`rue:slot:anchor`);return a(m,k),h(()=>{let i=x.value&&S.value.length?l(()=>{let i=t(),s=r(`ul`,i);a(i,s),n(s,`list-disc pl-6 space-y-1`);let u=e(`rue:list:start`),d=e(`rue:list:end`);a(s,u),a(s,d);let p=new Map;return h(()=>{p=v({items:S.value||[],getKey:(e,t)=>e,elements:p,parent:s,before:d,singleRoot:!0,trackIndex:!1,start:u,renderItem:(e,n,i,s,u)=>{f(l(()=>{let n=t(),i=r(`li`,n);a(n,i),h(()=>{c(i,`key`,String(e))});let s=g(i);return a(i,s),h(()=>{o(s,e)}),n}),n,i)}})}),i}):S.value.length?l(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`text-gray-700`),a(i,s(`List is not empty, but hidden.`)),e}):l(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`text-gray-700`),a(i,s(`List is empty.`)),e});u(()=>f(i,m,k))}),d}):``;u(()=>f(d,k,j))}),d})}),p,_),p})};export{x as default};