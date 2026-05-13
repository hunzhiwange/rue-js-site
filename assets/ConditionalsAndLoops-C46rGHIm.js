import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>l(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>p(!0)),t=_(`ref:1:1`,()=>p([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>p(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(b,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`条件与循环（移植自 Vue）`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let b=n(`button`);i(_,b),s(b,`role`,`tab`),u(()=>{t(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),f(b,`click`,()=>{D.value=`preview`}),i(b,r(`效果`));let O=n(`button`);i(_,O),s(O,`role`,`tab`),u(()=>{t(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),f(O,`click`,()=>{D.value=`code`}),i(O,r(`代码`));let k=n(`div`);i(l,k),t(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=a(`rue:slot:anchor`);i(k,A),u(()=>{let r=D.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,k,A))}),i(k,r(` `));let j=a(`rue:slot:anchor`);return i(k,j),u(()=>{let l=D.value===`preview`?g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`card bg-base-100 shadow`);let h=n(`div`);i(p,h),t(h,`card-body grid gap-4`);let _=n(`div`);i(h,_),t(_,`flex flex-wrap gap-2`);let y=n(`button`);i(_,y),t(y,`btn btn-primary`),f(y,`click`,C),i(y,r(`Toggle List`));let b=n(`button`);i(_,b),t(b,`btn btn-primary`),f(b,`click`,w),i(b,r(`Push Number`));let D=n(`button`);i(_,D),t(D,`btn btn-primary`),f(D,`click`,T),i(D,r(`Pop Number`));let O=n(`button`);i(_,O),t(O,`btn btn-primary`),f(O,`click`,E),i(O,r(`Reverse List`));let k=a(`rue:slot:anchor`);return i(h,k),u(()=>{let l=x.value&&S.value.length?g(()=>{let r=e(),l=n(`ul`);i(r,l),t(l,`list-disc pl-6 space-y-1`);let f=a(`rue:list:start`),p=a(`rue:list:end`);i(l,f),i(l,p);let m=new Map;return u(()=>{m=v({items:S.value||[],getKey:(e,t)=>e,elements:m,parent:l,before:p,singleRoot:!0,trackIndex:!1,start:f,renderItem:(t,r,a,l,f)=>{d(g(()=>{let r=e(),a=n(`li`);i(r,a),u(()=>{s(a,`key`,String(t))});let l=o(a);return i(a,l),u(()=>{c(l,t)}),r}),r,a)}})}),r}):S.value.length?g(()=>{let a=e(),o=n(`p`);return i(a,o),t(o,`text-gray-700`),i(o,r(`List is not empty, but hidden.`)),a}):g(()=>{let a=e(),o=n(`p`);return i(a,o),t(o,`text-gray-700`),i(o,r(`List is empty.`)),a});m(()=>d(l,h,k))}),l}):``;m(()=>d(l,k,j))}),l})}),l,p),l})};export{x as default};