import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h,n as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./Code-2C2psoH3.js";import{t as v}from"./SidebarPlaygroundExample-DKa0aI1C.js";var y=e=>m(()=>{let t=n(`span`),r=a(`rue:slot:anchor`);return i(t,r),c(()=>{let n=e.todo.text;f(()=>l(n,t,r))}),t}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>s(()=>({groceryList:h(`ref:1:0`,()=>d([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>d(`preview`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(v,{children:m(()=>{let s=e(),d=n(`h1`);i(s,d),t(d,`text-5xl font-semibold mb-4 md:mb-4`),i(d,r(`简单组件（移植自 Vue）`));let h=n(`div`);i(s,h),o(h,`role`,`tablist`),t(h,`tabs tabs-box`);let v=n(`button`);i(h,v),o(v,`role`,`tab`),c(()=>{t(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),u(v,`click`,()=>{x.value=`preview`}),i(v,r(`效果`));let S=n(`button`);i(h,S),o(S,`role`,`tab`),c(()=>{t(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),u(S,`click`,()=>{x.value=`code`}),i(S,r(`代码`));let C=n(`div`);i(s,C),t(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);i(C,w),c(()=>{let r=x.value===`code`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,C,w))}),i(C,r(` `));let T=a(`rue:slot:anchor`);return i(C,T),c(()=>{let r=x.value===`preview`?m(()=>{let r=e(),s=n(`div`);i(r,s),t(s,`card bg-base-100 shadow`);let u=n(`div`);i(s,u),t(u,`card-body grid gap-2`);let d=n(`ol`);i(u,d),t(d,`list-decimal pl-6 space-y-2`);let h=a(`rue:list:start`),_=a(`rue:list:end`);i(d,h),i(d,_);let v=new Map;return c(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:d,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(r,s,u,d,h)=>{l(m(()=>{let s=e(),u=n(`li`);i(s,u),c(()=>{o(u,`key`,String(r.id))}),t(u,`px-3 py-2 rounded-md bg-base-200`);let d=a(`rue:component:anchor`);return i(u,d),c(()=>{let e=p(y,{todo:r});f(()=>l(e,u,d))}),s}),s,u)}})}),r}):``;f(()=>l(r,C,T))}),s})}),s,d),s})};export{b as default};