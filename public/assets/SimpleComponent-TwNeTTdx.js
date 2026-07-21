import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h,n as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./Code-DhoWkRkB.js";import{r as v}from"./SidebarPlaygroundExample-B78jsvoF.js";var y=e=>f(t=>{let n=c(`span`,t),i=r(`rue:slot:anchor`);return l(n,i),u(()=>{let t=e.todo.text;d(()=>p(t,n,i))}),n}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>e(()=>({groceryList:h(`ref:1:0`,()=>s([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>s(`preview`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(v,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,a(`简单组件（移植自 Vue）`));let h=c(`div`,e);l(e,h),t(h,`role`,`tablist`),n(h,`tabs tabs-box`);let v=c(`button`,h);l(h,v),t(v,`role`,`tab`),u(()=>{n(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),o(v,`click`,()=>{x.value=`preview`}),l(v,a(`效果`));let S=c(`button`,h);l(h,S),t(S,`role`,`tab`),u(()=>{n(S,`tab ${x.value===`code`?`tab-active`:``}`)}),o(S,`click`,()=>{x.value=`code`}),l(S,a(`代码`));let C=c(`div`,e);l(e,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=r(`rue:slot:anchor`);l(C,w),u(()=>{let e=x.value===`code`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let a=c(`div`,t);l(t,a),n(a,`card-body p-0`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

type Item = { id: number; text: string };

const TodoItem: FC<{ todo: Item }> = (props) => (
  <span>{props.todo.text}</span>
);

const SimpleComponent: FC = () => {
  const groceryList = ref<Item[]>([
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' },
  ]);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-2">
        <ol className="list-decimal pl-6 space-y-2">
          {groceryList.value.map(item => (
            <li key={item.id} className="px-3 py-2 rounded-md bg-base-200">
              <TodoItem todo={item} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SimpleComponent;`});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,C,w))}),l(C,a(` `));let T=r(`rue:slot:anchor`);return l(C,T),u(()=>{let e=x.value===`preview`?f(()=>{let e=i(),a=c(`div`,e);l(e,a),n(a,`card bg-base-100 shadow`);let o=c(`div`,a);l(a,o),n(o,`card-body grid gap-2`);let s=c(`ol`,o);l(o,s),n(s,`list-decimal pl-6 space-y-2`);let h=r(`rue:list:start`),_=r(`rue:list:end`);l(s,h),l(s,_);let v=new Map;return u(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:s,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(e,a,o,s,h)=>{p(f(()=>{let a=i(),o=c(`li`,a);l(a,o),u(()=>{t(o,`key`,String(e.id))}),n(o,`px-3 py-2 rounded-md bg-base-200`);let s=r(`rue:component:anchor`);return l(o,s),u(()=>{let t=m(y,{todo:e});d(()=>p(t,o,s))}),a}),a,o)}})}),e}):``;d(()=>p(e,C,T))}),e})}),s,h),s})};export{b as default};