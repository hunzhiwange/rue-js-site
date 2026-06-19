import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=()=>{let{show:x,list:S,toggleShow:C,pushNumber:w,popNumber:T,reverseList:E,activeTab:D}=_(`useSetup:0:0`,()=>o(()=>{console.log(`hello1`);let e=_(`ref:1:0`,()=>g(!0)),t=_(`ref:1:1`,()=>g([1,2,3]));console.log(`hello2`);let n=()=>{e.value=!e.value};console.log(`i am here1`);let r=()=>{t.value=[...t.value,t.value.length+1]},i=()=>{t.value=t.value.slice(0,-1)},a=()=>{t.value=[...t.value].reverse()},o=_(`ref:1:2`,()=>g(`preview`));return console.log(`i am here2`),{show:e,list:t,toggleShow:n,pushNumber:r,popNumber:i,reverseList:a,activeTab:o}}));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(b,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`条件与循环（移植自 Vue）`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let b=s(`button`,_);i(_,b),p(b,`role`,`tab`),n(()=>{u(b,`tab ${D.value===`preview`?`tab-active`:``}`)}),a(b,`click`,()=>{D.value=`preview`}),i(b,h(`效果`));let O=s(`button`,_);i(_,O),p(O,`role`,`tab`),n(()=>{u(O,`tab ${D.value===`code`?`tab-active`:``}`)}),a(O,`click`,()=>{D.value=`code`}),i(O,h(`代码`));let k=s(`div`,o);i(o,k),u(k,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let A=t(`rue:slot:anchor`);i(k,A),n(()=>{let a=D.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,k,A))}),i(k,h(` `));let j=t(`rue:slot:anchor`);return i(k,j),n(()=>{let o=D.value===`preview`?l(()=>{let o=e(),m=s(`div`,o);i(o,m),u(m,`card bg-base-100 shadow`);let g=s(`div`,m);i(m,g),u(g,`card-body grid gap-4`);let _=s(`div`,g);i(g,_),u(_,`flex flex-wrap gap-2`);let y=s(`button`,_);i(_,y),u(y,`btn btn-primary`),a(y,`click`,C),i(y,h(`Toggle List`));let b=s(`button`,_);i(_,b),u(b,`btn btn-primary`),a(b,`click`,w),i(b,h(`Push Number`));let D=s(`button`,_);i(_,D),u(D,`btn btn-primary`),a(D,`click`,T),i(D,h(`Pop Number`));let O=s(`button`,_);i(_,O),u(O,`btn btn-primary`),a(O,`click`,E),i(O,h(`Reverse List`));let k=t(`rue:slot:anchor`);return i(g,k),n(()=>{let a=x.value&&S.value.length?l(()=>{let r=e(),a=s(`ul`,r);i(r,a),u(a,`list-disc pl-6 space-y-1`);let o=t(`rue:list:start`),m=t(`rue:list:end`);i(a,o),i(a,m);let h=new Map;return n(()=>{h=v({items:S.value||[],getKey:(e,t)=>e,elements:h,parent:a,before:m,singleRoot:!0,trackIndex:!1,start:o,renderItem:(t,r,a,o,u)=>{f(l(()=>{let r=e(),a=s(`li`,r);i(r,a),n(()=>{p(a,`key`,String(t))});let o=d(a);return i(a,o),n(()=>{c(o,t)}),r}),r,a)}})}),r}):S.value.length?l(()=>{let t=e(),n=s(`p`,t);return i(t,n),u(n,`text-gray-700`),i(n,h(`List is not empty, but hidden.`)),t}):l(()=>{let t=e(),n=s(`p`,t);return i(t,n),u(n,`text-gray-700`),i(n,h(`List is empty.`)),t});r(()=>f(a,g,k))}),o}):``;r(()=>f(o,k,j))}),o})}),g,_),g})};export{x as default};