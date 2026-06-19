import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h,n as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./Code-D5UqTwV6.js";import{r as v}from"./SidebarPlaygroundExample-D2vGHFCu.js";var y=n=>l(i=>{let a=p(`span`,i),s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.todo.text;r(()=>d(e,a,s))}),a}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>a(()=>({groceryList:h(`ref:1:0`,()=>n([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>n(`preview`))})));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(v,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`简单组件（移植自 Vue）`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let v=p(`button`,h);o(h,v),s(v,`role`,`tab`),t(()=>{m(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{x.value=`preview`}),o(v,u(`效果`));let S=p(`button`,h);o(h,S),s(S,`role`,`tab`),t(()=>{m(S,`tab ${x.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{x.value=`code`}),o(S,u(`代码`));let C=p(`div`,n);o(n,C),m(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let n=x.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,C,w))}),o(C,u(` `));let T=e(`rue:slot:anchor`);return o(C,T),t(()=>{let n=x.value===`preview`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow`);let a=p(`div`,i);o(i,a),m(a,`card-body grid gap-2`);let u=p(`ol`,a);o(a,u),m(u,`list-decimal pl-6 space-y-2`);let h=e(`rue:list:start`),_=e(`rue:list:end`);o(u,h),o(u,_);let v=new Map;return t(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:u,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(n,i,a,u,h)=>{d(l(()=>{let i=c(),a=p(`li`,i);o(i,a),t(()=>{s(a,`key`,String(n.id))}),m(a,`px-3 py-2 rounded-md bg-base-200`);let l=e(`rue:component:anchor`);return o(a,l),t(()=>{let e=f(y,{todo:n});r(()=>d(e,a,l))}),i}),i,a)}})}),n}):``;r(()=>d(n,C,T))}),n})}),a,h),a})};export{b as default};