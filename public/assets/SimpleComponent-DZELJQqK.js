import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h,n as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./Code-5DOEyGxf.js";import{r as v}from"./SidebarPlaygroundExample-cASgDpH3.js";var y=n=>u(r=>{let i=e(`span`,r),c=s(`rue:slot:anchor`);return o(i,c),a(()=>{let e=n.todo.text;t(()=>p(e,i,c))}),i}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>f(()=>({groceryList:h(`ref:1:0`,()=>i([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>i(`preview`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(v,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`text-5xl font-semibold mb-4 md:mb-4`),o(f,l(`简单组件（移植自 Vue）`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let v=e(`button`,h);o(h,v),d(v,`role`,`tab`),a(()=>{c(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{x.value=`preview`}),o(v,l(`效果`));let S=e(`button`,h);o(h,S),d(S,`role`,`tab`),a(()=>{c(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{x.value=`code`}),o(S,l(`代码`));let C=e(`div`,i);o(i,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let n=x.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,C,w))}),o(C,l(` `));let T=s(`rue:slot:anchor`);return o(C,T),a(()=>{let n=x.value===`preview`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow`);let l=e(`div`,i);o(i,l),c(l,`card-body grid gap-2`);let f=e(`ol`,l);o(l,f),c(f,`list-decimal pl-6 space-y-2`);let h=s(`rue:list:start`),_=s(`rue:list:end`);o(f,h),o(f,_);let v=new Map;return a(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:f,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(n,i,l,f,h)=>{p(u(()=>{let i=r(),l=e(`li`,i);o(i,l),a(()=>{d(l,`key`,String(n.id))}),c(l,`px-3 py-2 rounded-md bg-base-200`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(y,{todo:n});t(()=>p(e,l,u))}),i}),i,l)}})}),n}):``;t(()=>p(n,C,T))}),i})}),f,h),f})};export{b as default};