import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>m(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>u(!0)),t=_(`ref:1:1`,()=>u([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>u(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(b,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`条件与循环（移植自 Vue）`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let b=s(`button`,_);t(_,b),c(b,`role`,`tab`),n(()=>{e(b,String(`tab ${D.value===`preview`?`tab-active`:``}`))}),g(b,`click`,()=>{D.value=`preview`}),t(b,r(`效果`));let O=s(`button`,_);t(_,O),c(O,`role`,`tab`),n(()=>{e(O,String(`tab ${D.value===`code`?`tab-active`:``}`))}),g(O,`click`,()=>{D.value=`code`}),t(O,r(`代码`));let k=s(`div`,u);t(u,k),e(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=i(`rue:slot:anchor`);t(k,A),n(()=>{let r=D.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,k,A))}),t(k,r(` `));let j=i(`rue:slot:anchor`);return t(k,j),n(()=>{let u=D.value===`preview`?d(()=>{let u=o(),p=s(`div`,u);t(u,p),e(p,`card bg-base-100 shadow`);let m=s(`div`,p);t(p,m),e(m,`card-body grid gap-4`);let _=s(`div`,m);t(m,_),e(_,`flex flex-wrap gap-2`);let y=s(`button`,_);t(_,y),e(y,`btn btn-primary`),g(y,`click`,C),t(y,r(`Toggle List`));let b=s(`button`,_);t(_,b),e(b,`btn btn-primary`),g(b,`click`,w),t(b,r(`Push Number`));let D=s(`button`,_);t(_,D),e(D,`btn btn-primary`),g(D,`click`,T),t(D,r(`Pop Number`));let O=s(`button`,_);t(_,O),e(O,`btn btn-primary`),g(O,`click`,E),t(O,r(`Reverse List`));let k=i(`rue:slot:anchor`);return t(m,k),n(()=>{let u=x.value&&S.value.length?d(()=>{let r=o(),u=s(`ul`,r);t(r,u),e(u,`list-disc pl-6 space-y-1`);let p=i(`rue:list:start`),m=i(`rue:list:end`);t(u,p),t(u,m);let h=new Map;return n(()=>{h=v({items:S.value||[],getKey:(e,t)=>e,elements:h,parent:u,before:m,singleRoot:!0,trackIndex:!1,start:p,renderItem:(e,r,i,u,p)=>{f(d(()=>{let r=o(),i=s(`li`,r);t(r,i),n(()=>{c(i,`key`,String(e))});let u=a(i);return t(i,u),n(()=>{l(u,e)}),r}),r,i)}})}),r}):S.value.length?d(()=>{let n=o(),i=s(`p`,n);return t(n,i),e(i,`text-gray-700`),t(i,r(`List is not empty, but hidden.`)),n}):d(()=>{let n=o(),i=s(`p`,n);return t(n,i),e(i,`text-gray-700`),t(i,r(`List is empty.`)),n});h(()=>f(u,m,k))}),u}):``;h(()=>f(u,k,j))}),u})}),m,_),m})};export{x as default};