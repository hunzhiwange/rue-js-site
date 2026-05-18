import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h,n as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./Code-DQxnq0in.js";import{t as v}from"./SidebarPlaygroundExample-BwOo72z2.js";var y=t=>c(n=>{let i=r(`span`,n),o=e(`rue:slot:anchor`);return a(i,o),m(()=>{let e=t.todo.text;l(()=>d(e,i,o))}),i}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>u(()=>({groceryList:h(`ref:1:0`,()=>f([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>f(`preview`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(v,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`简单组件（移植自 Vue）`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let v=r(`button`,h);a(h,v),s(v,`role`,`tab`),m(()=>{n(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{x.value=`preview`}),a(v,o(`效果`));let S=r(`button`,h);a(h,S),s(S,`role`,`tab`),m(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,o(`代码`));let C=r(`div`,u);a(u,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),m(()=>{let i=x.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),m(()=>{let i=x.value===`preview`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let u=r(`div`,o);a(o,u),n(u,`card-body grid gap-2`);let f=r(`ol`,u);a(u,f),n(f,`list-decimal pl-6 space-y-2`);let h=e(`rue:list:start`),_=e(`rue:list:end`);a(f,h),a(f,_);let v=new Map;return m(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:f,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(i,o,u,f,h)=>{d(c(()=>{let o=t(),c=r(`li`,o);a(o,c),m(()=>{s(c,`key`,String(i.id))}),n(c,`px-3 py-2 rounded-md bg-base-200`);let u=e(`rue:component:anchor`);return a(c,u),m(()=>{let e=p(y,{todo:i});l(()=>d(e,c,u))}),o}),o,u)}})}),i}):``;l(()=>d(i,C,T))}),u})}),f,h),f})};export{b as default};