import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h,n as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./Code-B_4lzH85.js";import{t as v}from"./SidebarPlaygroundExample-CtM-WHq_.js";var y=t=>u(n=>{let r=e(`span`,n),i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.todo.text;a(()=>f(e,r,i))}),r}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>n(()=>({groceryList:h(`ref:1:0`,()=>r([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>r(`preview`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(v,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`简单组件（移植自 Vue）`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let v=e(`button`,h);o(h,v),p(v,`role`,`tab`),s(()=>{l(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{x.value=`preview`}),o(v,d(`效果`));let S=e(`button`,h);o(h,S),p(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,C,w))}),o(C,d(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-2`);let d=e(`ol`,r);o(r,d),l(d,`list-decimal pl-6 space-y-2`);let h=c(`rue:list:start`),_=c(`rue:list:end`);o(d,h),o(d,_);let v=new Map;return s(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:d,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(t,n,r,d,h)=>{f(u(()=>{let n=i(),r=e(`li`,n);o(n,r),s(()=>{p(r,`key`,String(t.id))}),l(r,`px-3 py-2 rounded-md bg-base-200`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(y,{todo:t});a(()=>f(e,r,u))}),n}),n,r)}})}),t}):``;a(()=>f(t,C,T))}),n})}),r,h),r})};export{b as default};