import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-C5NjdoiC.js";import{r as b}from"./SidebarPlaygroundExample-DpItFif-.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>d(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>n(!0)),t=_(`ref:1:1`,()=>n([1,2,3]));console.log(`hello2`);let r=()=>{e.value=!e.value};console.log(`i am here1`);let i=()=>{t.value=[...t.value,t.value.length+1]},a=()=>{t.value=t.value.slice(0,-1)},o=()=>{t.value=[...t.value].reverse()},s=_(`ref:1:2`,()=>n(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:r,pushNumber:i,popNumber:a,reverseList:o,activeTab:s}}));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(b,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`条件与循环（移植自 Vue）`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let b=p(`button`,_);e(_,b),o(b,`role`,`tab`),t(()=>{f(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),r(b,`click`,()=>{D.value=`preview`}),e(b,s(`效果`));let O=p(`button`,_);e(_,O),o(O,`role`,`tab`),t(()=>{f(O,`tab ${D.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{D.value=`code`}),e(O,s(`代码`));let k=p(`div`,n);e(n,k),f(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=g(`rue:slot:anchor`);e(k,A),t(()=>{let n=D.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,k,A))}),e(k,s(` `));let j=g(`rue:slot:anchor`);return e(k,j),t(()=>{let n=D.value===`preview`?c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`card bg-base-100 shadow`);let m=p(`div`,d);e(d,m),f(m,`card-body grid gap-4`);let _=p(`div`,m);e(m,_),f(_,`flex flex-wrap gap-2`);let y=p(`button`,_);e(_,y),f(y,`btn btn-primary`),r(y,`click`,C),e(y,s(`Toggle List`));let b=p(`button`,_);e(_,b),f(b,`btn btn-primary`),r(b,`click`,w),e(b,s(`Push Number`));let D=p(`button`,_);e(_,D),f(D,`btn btn-primary`),r(D,`click`,T),e(D,s(`Pop Number`));let O=p(`button`,_);e(_,O),f(O,`btn btn-primary`),r(O,`click`,E),e(O,s(`Reverse List`));let k=g(`rue:slot:anchor`);return e(m,k),t(()=>{let n=x.value&&S.value.length?c(()=>{let n=l(),r=p(`ul`,n);e(n,r),f(r,`list-disc pl-6 space-y-1`);let s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=v({items:S.value||[],getKey:(e,t)=>e,elements:m,parent:r,before:d,singleRoot:!0,trackIndex:!1,start:s,renderItem:(n,r,s,d,f)=>{u(c(()=>{let r=l(),s=p(`li`,r);e(r,s),t(()=>{o(s,`key`,String(n))});let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),n}):S.value.length?c(()=>{let t=l(),n=p(`p`,t);return e(t,n),f(n,`text-gray-700`),e(n,s(`List is not empty, but hidden.`)),t}):c(()=>{let t=l(),n=p(`p`,t);return e(t,n),f(n,`text-gray-700`),e(n,s(`List is empty.`)),t});h(()=>u(n,m,k))}),n}):``;h(()=>u(n,k,j))}),n})}),d,_),d})};export{x as default};