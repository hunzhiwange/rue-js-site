import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>o(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>t(!0)),n=_(`ref:1:1`,()=>t([1,2,3]));console.log(`hello2`);let r=()=>{e.value=!e.value};console.log(`i am here1`);let i=()=>{n.value=[...n.value,n.value.length+1]},a=()=>{n.value=n.value.slice(0,-1)},o=()=>{n.value=[...n.value].reverse()},s=_(`ref:1:2`,()=>t(`preview`));return console.log(`i am here2`),{show:e,list:n,toggleShow:r,pushNumber:i,popNumber:a,reverseList:o,activeTab:s}}));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(b,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`条件与循环（移植自 Vue）`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let b=u(`button`,_);n(_,b),l(b,`role`,`tab`),g(()=>{i(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),r(b,`click`,()=>{D.value=`preview`}),n(b,f(`效果`));let O=u(`button`,_);n(_,O),l(O,`role`,`tab`),g(()=>{i(O,`tab ${D.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{D.value=`code`}),n(O,f(`代码`));let k=u(`div`,t);n(t,k),i(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);n(k,A),g(()=>{let t=D.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,k,A))}),n(k,f(` `));let j=a(`rue:slot:anchor`);return n(k,j),g(()=>{let t=D.value===`preview`?c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`card bg-base-100 shadow`);let p=u(`div`,o);n(o,p),i(p,`card-body grid gap-4`);let _=u(`div`,p);n(p,_),i(_,`flex flex-wrap gap-2`);let y=u(`button`,_);n(_,y),i(y,`btn btn-primary`),r(y,`click`,C),n(y,f(`Toggle List`));let b=u(`button`,_);n(_,b),i(b,`btn btn-primary`),r(b,`click`,w),n(b,f(`Push Number`));let D=u(`button`,_);n(_,D),i(D,`btn btn-primary`),r(D,`click`,T),n(D,f(`Pop Number`));let O=u(`button`,_);n(_,O),i(O,`btn btn-primary`),r(O,`click`,E),n(O,f(`Reverse List`));let k=a(`rue:slot:anchor`);return n(p,k),g(()=>{let t=x.value&&S.value.length?c(()=>{let e=m(),t=u(`ul`,e);n(e,t),i(t,`list-disc pl-6 space-y-1`);let r=a(`rue:list:start`),o=a(`rue:list:end`);n(t,r),n(t,o);let f=new Map;return g(()=>{f=v({items:S.value||[],getKey:(e,t)=>e,elements:f,parent:t,before:o,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,t,r,i,a)=>{d(c(()=>{let t=m(),r=u(`li`,t);n(t,r),g(()=>{l(r,`key`,String(e))});let i=s(r);return n(r,i),g(()=>{h(i,e)}),t}),t,r)}})}),e}):S.value.length?c(()=>{let e=m(),t=u(`p`,e);return n(e,t),i(t,`text-gray-700`),n(t,f(`List is not empty, but hidden.`)),e}):c(()=>{let e=m(),t=u(`p`,e);return n(e,t),i(t,`text-gray-700`),n(t,f(`List is empty.`)),e});e(()=>d(t,p,k))}),t}):``;e(()=>d(t,k,j))}),t})}),o,_),o})};export{x as default};