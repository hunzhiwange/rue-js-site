import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-Bp8DIxJg.js";import{a as h,n as g}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as _}from"./Code-D55WiaDx.js";import{t as v}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var y=t=>l(n=>{let i=r(`span`,n),o=e(`rue:slot:anchor`);return a(i,o),c(()=>{let e=t.todo.text;m(()=>u(e,i,o))}),i}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>d(()=>({groceryList:h(`ref:1:0`,()=>f([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>f(`preview`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(v,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`简单组件（移植自 Vue）`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let v=r(`button`,h);a(h,v),s(v,`role`,`tab`),c(()=>{n(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{x.value=`preview`}),a(v,o(`效果`));let S=r(`button`,h);a(h,S),s(S,`role`,`tab`),c(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,o(`代码`));let C=r(`div`,d);a(d,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),c(()=>{let i=x.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),c(()=>{let i=x.value===`preview`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let d=r(`div`,o);a(o,d),n(d,`card-body grid gap-2`);let f=r(`ol`,d);a(d,f),n(f,`list-decimal pl-6 space-y-2`);let h=e(`rue:list:start`),_=e(`rue:list:end`);a(f,h),a(f,_);let v=new Map;return c(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:f,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(i,o,d,f,h)=>{u(l(()=>{let o=t(),l=r(`li`,o);a(o,l),c(()=>{s(l,`key`,String(i.id))}),n(l,`px-3 py-2 rounded-md bg-base-200`);let d=e(`rue:component:anchor`);return a(l,d),c(()=>{let e=p(y,{todo:i});m(()=>u(e,l,d))}),o}),o,d)}})}),i}):``;m(()=>u(i,C,T))}),d})}),f,h),f})};export{b as default};