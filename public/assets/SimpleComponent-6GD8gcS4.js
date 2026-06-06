import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h,n as g}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as _}from"./Code-CliOXHNE.js";import{t as v}from"./SidebarPlaygroundExample-DXnPmR3z.js";var y=e=>c(t=>{let n=i(`span`,t),a=o(`rue:slot:anchor`);return r(n,a),l(()=>{let t=e.todo.text;m(()=>u(t,n,a))}),n}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>t(()=>({groceryList:h(`ref:1:0`,()=>s([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>s(`preview`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(v,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`简单组件（移植自 Vue）`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let v=i(`button`,h);r(h,v),e(v,`role`,`tab`),l(()=>{p(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),a(v,`click`,()=>{x.value=`preview`}),r(v,d(`效果`));let S=i(`button`,h);r(h,S),e(S,`role`,`tab`),l(()=>{p(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),a(S,`click`,()=>{x.value=`code`}),r(S,d(`代码`));let C=i(`div`,t);r(t,C),p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=o(`rue:slot:anchor`);r(C,w),l(()=>{let e=x.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,C,w))}),r(C,d(` `));let T=o(`rue:slot:anchor`);return r(C,T),l(()=>{let t=x.value===`preview`?c(()=>{let t=n(),a=i(`div`,t);r(t,a),p(a,`card bg-base-100 shadow`);let s=i(`div`,a);r(a,s),p(s,`card-body grid gap-2`);let d=i(`ol`,s);r(s,d),p(d,`list-decimal pl-6 space-y-2`);let h=o(`rue:list:start`),_=o(`rue:list:end`);r(d,h),r(d,_);let v=new Map;return l(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:d,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(t,a,s,d,h)=>{u(c(()=>{let a=n(),s=i(`li`,a);r(a,s),l(()=>{e(s,`key`,String(t.id))}),p(s,`px-3 py-2 rounded-md bg-base-200`);let c=o(`rue:component:anchor`);return r(s,c),l(()=>{let e=f(y,{todo:t});m(()=>u(e,s,c))}),a}),a,s)}})}),t}):``;m(()=>u(t,C,T))}),t})}),s,h),s})};export{b as default};