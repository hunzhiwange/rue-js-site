import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>p(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>i(!0)),t=_(`ref:1:1`,()=>i([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},a=()=>{t.value=t.value.slice(0,-1)},o=()=>{t.value=[...t.value].reverse()},s=_(`ref:1:2`,()=>i(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:a,reverseList:o,activeTab:s}}));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(b,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`条件与循环（移植自 Vue）`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let b=e(`button`,_);o(_,b),f(b,`role`,`tab`),a(()=>{c(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),n(b,`click`,()=>{D.value=`preview`}),o(b,l(`效果`));let O=e(`button`,_);o(_,O),f(O,`role`,`tab`),a(()=>{c(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),n(O,`click`,()=>{D.value=`code`}),o(O,l(`代码`));let k=e(`div`,i);o(i,k),c(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=s(`rue:slot:anchor`);o(k,A),a(()=>{let n=D.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,k,A))}),o(k,l(` `));let j=s(`rue:slot:anchor`);return o(k,j),a(()=>{let i=D.value===`preview`?u(()=>{let i=r(),p=e(`div`,i);o(i,p),c(p,`card bg-base-100 shadow`);let h=e(`div`,p);o(p,h),c(h,`card-body grid gap-4`);let _=e(`div`,h);o(h,_),c(_,`flex flex-wrap gap-2`);let y=e(`button`,_);o(_,y),c(y,`btn btn-primary`),n(y,`click`,C),o(y,l(`Toggle List`));let b=e(`button`,_);o(_,b),c(b,`btn btn-primary`),n(b,`click`,w),o(b,l(`Push Number`));let D=e(`button`,_);o(_,D),c(D,`btn btn-primary`),n(D,`click`,T),o(D,l(`Pop Number`));let O=e(`button`,_);o(_,O),c(O,`btn btn-primary`),n(O,`click`,E),o(O,l(`Reverse List`));let k=s(`rue:slot:anchor`);return o(h,k),a(()=>{let n=x.value&&S.value.length?u(()=>{let t=r(),n=e(`ul`,t);o(t,n),c(n,`list-disc pl-6 space-y-1`);let i=s(`rue:list:start`),l=s(`rue:list:end`);o(n,i),o(n,l);let p=new Map;return a(()=>{p=v({items:S.value||[],getKey:(e,t)=>e,elements:p,parent:n,before:l,singleRoot:!0,trackIndex:!1,start:i,renderItem:(t,n,i,s,c)=>{m(u(()=>{let n=r(),i=e(`li`,n);o(n,i),a(()=>{f(i,`key`,String(t))});let s=g(i);return o(i,s),a(()=>{d(s,t)}),n}),n,i)}})}),t}):S.value.length?u(()=>{let t=r(),n=e(`p`,t);return o(t,n),c(n,`text-gray-700`),o(n,l(`List is not empty, but hidden.`)),t}):u(()=>{let t=r(),n=e(`p`,t);return o(t,n),c(n,`text-gray-700`),o(n,l(`List is empty.`)),t});t(()=>m(n,h,k))}),i}):``;t(()=>m(i,k,j))}),i})}),p,_),p})};export{x as default};