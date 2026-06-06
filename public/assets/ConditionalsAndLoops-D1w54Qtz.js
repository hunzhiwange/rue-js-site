import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{t as y}from"./Code-Ds9lKLk6.js";import{t as b}from"./SidebarPlaygroundExample-KML-rOvA.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>n(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>r(!0)),t=_(`ref:1:1`,()=>r([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let i=()=>{t.value=[...t.value,t.value.length+1]},a=()=>{t.value=t.value.slice(0,-1)},o=()=>{t.value=[...t.value].reverse()},s=_(`ref:1:2`,()=>r(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:i,popNumber:a,reverseList:o,activeTab:s}}));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(b,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`条件与循环（移植自 Vue）`));let _=e(`div`,n);o(n,_),p(_,`role`,`tablist`),l(_,`tabs tabs-box`);let b=e(`button`,_);o(_,b),p(b,`role`,`tab`),s(()=>{l(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),t(b,`click`,()=>{D.value=`preview`}),o(b,u(`效果`));let O=e(`button`,_);o(_,O),p(O,`role`,`tab`),s(()=>{l(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),t(O,`click`,()=>{D.value=`code`}),o(O,u(`代码`));let k=e(`div`,n);o(n,k),l(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=c(`rue:slot:anchor`);o(k,A),s(()=>{let t=D.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,k,A))}),o(k,u(` `));let j=c(`rue:slot:anchor`);return o(k,j),s(()=>{let n=D.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let h=e(`div`,r);o(r,h),l(h,`card-body grid gap-4`);let _=e(`div`,h);o(h,_),l(_,`flex flex-wrap gap-2`);let y=e(`button`,_);o(_,y),l(y,`btn btn-primary`),t(y,`click`,C),o(y,u(`Toggle List`));let b=e(`button`,_);o(_,b),l(b,`btn btn-primary`),t(b,`click`,w),o(b,u(`Push Number`));let D=e(`button`,_);o(_,D),l(D,`btn btn-primary`),t(D,`click`,T),o(D,u(`Pop Number`));let O=e(`button`,_);o(_,O),l(O,`btn btn-primary`),t(O,`click`,E),o(O,u(`Reverse List`));let k=c(`rue:slot:anchor`);return o(h,k),s(()=>{let t=x.value&&S.value.length?d(()=>{let t=i(),n=e(`ul`,t);o(t,n),l(n,`list-disc pl-6 space-y-1`);let r=c(`rue:list:start`),a=c(`rue:list:end`);o(n,r),o(n,a);let u=new Map;return s(()=>{u=v({items:S.value||[],getKey:(e,t)=>e,elements:u,parent:n,before:a,singleRoot:!0,trackIndex:!1,start:r,renderItem:(t,n,r,a,c)=>{m(d(()=>{let n=i(),r=e(`li`,n);o(n,r),s(()=>{p(r,`key`,String(t))});let a=g(r);return o(r,a),s(()=>{f(a,t)}),n}),n,r)}})}),t}):S.value.length?d(()=>{let t=i(),n=e(`p`,t);return o(t,n),l(n,`text-gray-700`),o(n,u(`List is not empty, but hidden.`)),t}):d(()=>{let t=i(),n=e(`p`,t);return o(t,n),l(n,`text-gray-700`),o(n,u(`List is empty.`)),t});a(()=>m(t,h,k))}),n}):``;a(()=>m(n,k,j))}),n})}),r,_),r})};export{x as default};