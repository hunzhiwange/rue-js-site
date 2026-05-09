import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,rt as u,t as d,u as f,ut as p}from"./vapor-runtime-CKndxKFn.js";import{a as m,n as h}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as g}from"./Code-B1JFTu6m.js";import{t as _}from"./SidebarPlaygroundExample-DlK8mtjC.js";var v=e=>f(()=>{let n=t(`span`),r=i(`rue:slot:anchor`);return c(n,r),l(()=>{let t=e.todo.text;s(t,n,r)}),n}),y=()=>{let{groceryList:y,activeTab:b}=m(`useSetup:0:0`,()=>p(()=>({groceryList:m(`ref:1:0`,()=>u([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:m(`ref:1:1`,()=>u(`preview`))})));return f(()=>{let u=a(),p=i(`rue:component:anchor`);return c(u,p),s(d(_,{children:f(()=>{let u=a(),p=t(`h1`);c(u,p),o(p,`text-5xl font-semibold mb-4 md:mb-4`),c(p,r(`简单组件（移植自 Vue）`));let m=t(`div`);c(u,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let _=t(`button`);c(m,_),n(_,`role`,`tab`),l(()=>{o(_,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(_,`click`,()=>{b.value=`preview`}),c(_,r(`效果`));let x=t(`button`);c(m,x),n(x,`role`,`tab`),l(()=>{o(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{b.value=`code`}),c(x,r(`代码`));let S=t(`div`);c(u,S),o(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=i(`rue:slot:anchor`);c(S,C),l(()=>{s(b.value===`code`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`}),r,u)}),e}):``,S,C)}),c(S,r(` `));let w=i(`rue:slot:anchor`);return c(S,w),l(()=>{s(b.value===`preview`?f(()=>{let e=a(),r=t(`div`);c(e,r),o(r,`card bg-base-100 shadow`);let u=t(`div`);c(r,u),o(u,`card-body grid gap-2`);let p=t(`ol`);c(u,p),o(p,`list-decimal pl-6 space-y-2`);let m=i(`rue:list:start`),g=i(`rue:list:end`);c(p,m),c(p,g);let _=new Map;return l(()=>{_=h({items:y.value||[],getKey:(e,t)=>e.id,elements:_,parent:p,before:g,singleRoot:!0,start:m,renderItem:(e,r,u,p,m)=>{s(f(()=>{let r=a(),u=t(`li`);c(r,u),l(()=>{n(u,`key`,String(e.id))}),o(u,`px-3 py-2 rounded-md bg-base-200`);let f=i(`rue:component:anchor`);return c(u,f),l(()=>{s(d(v,{todo:e}),u,f)}),r}),r,u)}})}),e}):``,S,w)}),u})}),u,p),u})};export{y as default};