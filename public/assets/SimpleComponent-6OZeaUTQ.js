import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h,n as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./Code-Ds9lKLk6.js";import{t as v}from"./SidebarPlaygroundExample-KML-rOvA.js";var y=t=>d(n=>{let r=e(`span`,n),i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.todo.text;a(()=>p(e,r,i))}),r}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>n(()=>({groceryList:h(`ref:1:0`,()=>r([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>r(`preview`))})));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),p(m(v,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`简单组件（移植自 Vue）`));let h=e(`div`,n);o(n,h),f(h,`role`,`tablist`),l(h,`tabs tabs-box`);let v=e(`button`,h);o(h,v),f(v,`role`,`tab`),s(()=>{l(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{x.value=`preview`}),o(v,u(`效果`));let S=e(`button`,h);o(h,S),f(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,u(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,C,w))}),o(C,u(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let u=e(`ol`,r);o(r,u),l(u,`list-decimal pl-6 space-y-2`);let h=c(`rue:list:start`),_=c(`rue:list:end`);o(u,h),o(u,_);let v=new Map;return s(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:u,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(t,n,r,u,h)=>{p(d(()=>{let n=i(),r=e(`li`,n);o(n,r),s(()=>{f(r,`key`,String(t.id))}),l(r,`px-3 py-2 rounded-md bg-base-200`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(y,{todo:t});a(()=>p(e,r,u))}),n}),n,r)}})}),t}):``;a(()=>p(t,C,T))}),n})}),r,h),r})};export{b as default};