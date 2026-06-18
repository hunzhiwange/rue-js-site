import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h,n as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./Code-CZqShVUj.js";import{r as v}from"./SidebarPlaygroundExample-5H7RL-T7.js";var y=e=>l(r=>{let s=i(`span`,r),c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.todo.text;t(()=>f(n,s,c))}),s}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>d(()=>({groceryList:h(`ref:1:0`,()=>r([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>r(`preview`))})));return l(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(v,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`简单组件（移植自 Vue）`));let h=i(`div`,r);n(r,h),c(h,`role`,`tablist`),p(h,`tabs tabs-box`);let v=i(`button`,h);n(h,v),c(v,`role`,`tab`),o(()=>{p(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),u(v,`click`,()=>{x.value=`preview`}),n(v,e(`效果`));let S=i(`button`,h);n(h,S),c(S,`role`,`tab`),o(()=>{p(S,`tab ${x.value===`code`?`tab-active`:``}`)}),u(S,`click`,()=>{x.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),o(()=>{let e=x.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,C,w))}),n(C,e(` `));let T=a(`rue:slot:anchor`);return n(C,T),o(()=>{let e=x.value===`preview`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow`);let u=i(`div`,r);n(r,u),p(u,`card-body grid gap-2`);let d=i(`ol`,u);n(u,d),p(d,`list-decimal pl-6 space-y-2`);let h=a(`rue:list:start`),_=a(`rue:list:end`);n(d,h),n(d,_);let v=new Map;return o(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:d,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(e,r,u,d,h)=>{f(l(()=>{let r=s(),l=i(`li`,r);n(r,l),o(()=>{c(l,`key`,String(e.id))}),p(l,`px-3 py-2 rounded-md bg-base-200`);let u=a(`rue:component:anchor`);return n(l,u),o(()=>{let n=m(y,{todo:e});t(()=>f(n,l,u))}),r}),r,u)}})}),e}):``;t(()=>f(e,C,T))}),r})}),d,h),d})};export{b as default};