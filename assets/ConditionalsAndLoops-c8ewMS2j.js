import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as v}from"./Code-C8wy38VS.js";import{t as y}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var b=()=>{let{show:b,list:x,toggleShow:S,pushNumber:C,popNumber:w,reverseList:T,activeTab:E}=g(`useSetup:0:0`,()=>h(()=>{console.log(`hello1`);let e=g(`ref:1:0`,()=>f(!0)),t=g(`ref:1:1`,()=>f([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=g(`ref:1:2`,()=>f(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(y,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`条件与循环（移植自 Vue）`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let y=t(`button`);u(g,y),n(y,`role`,`tab`),d(()=>{s(y,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),e(y,`click`,()=>{E.value=`preview`}),u(y,r(`效果`));let D=t(`button`);u(g,D),n(D,`role`,`tab`),d(()=>{s(D,String(`tab ${E.value===`code`?`tab-active`:``}`))}),e(D,`click`,()=>{E.value=`code`}),u(D,r(`代码`));let O=t(`div`);u(f,O),s(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=a(`rue:slot:anchor`);u(O,k),d(()=>{l(E.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`}),r,i)}),e}):``,O,k)}),u(O,r(` `));let A=a(`rue:slot:anchor`);return u(O,A),d(()=>{l(E.value===`preview`?m(()=>{let f=o(),p=t(`div`);u(f,p),s(p,`card bg-base-100 shadow`);let h=t(`div`);u(p,h),s(h,`card-body grid gap-4`);let g=t(`div`);u(h,g),s(g,`flex flex-wrap gap-2`);let v=t(`button`);u(g,v),s(v,`btn btn-primary`),e(v,`click`,S),u(v,r(`Toggle List`));let y=t(`button`);u(g,y),s(y,`btn btn-primary`),e(y,`click`,C),u(y,r(`Push Number`));let E=t(`button`);u(g,E),s(E,`btn btn-primary`),e(E,`click`,w),u(E,r(`Pop Number`));let D=t(`button`);u(g,D),s(D,`btn btn-primary`),e(D,`click`,T),u(D,r(`Reverse List`));let O=a(`rue:slot:anchor`);return u(h,O),d(()=>{l(b.value&&x.value.length?m(()=>{let e=o(),r=t(`ul`);u(e,r),s(r,`list-disc pl-6 space-y-1`);let f=a(`rue:list:start`),p=a(`rue:list:end`);u(r,f),u(r,p);let h=new Map;return d(()=>{h=_({items:x.value||[],getKey:(e,t)=>e,elements:h,parent:r,before:p,singleRoot:!0,start:f,renderItem:(e,r,a,s,f)=>{l(m(()=>{let r=o(),a=t(`li`);u(r,a),d(()=>{n(a,`key`,String(e))});let s=i(a);return u(a,s),d(()=>{c(s,e)}),r}),r,a)}})}),e}):x.value.length?m(()=>{let e=o(),n=t(`p`);return u(e,n),s(n,`text-gray-700`),u(n,r(`List is not empty, but hidden.`)),e}):m(()=>{let e=o(),n=t(`p`);return u(e,n),s(n,`text-gray-700`),u(n,r(`List is empty.`)),e}),h,O)}),f}):``,O,A)}),f})}),f,h),f})};export{b as default};