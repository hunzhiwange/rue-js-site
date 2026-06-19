import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h,n as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./Code-BIscIyEp.js";import{r as v}from"./SidebarPlaygroundExample-CEz1fABX.js";var y=e=>c(a=>{let o=s(`span`,a),c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let t=e.todo.text;r(()=>u(t,o,c))}),o}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>o(()=>({groceryList:h(`ref:1:0`,()=>m([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>m(`preview`))})));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(v,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`简单组件（移植自 Vue）`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let v=s(`button`,h);i(h,v),d(v,`role`,`tab`),n(()=>{l(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(v,`click`,()=>{x.value=`preview`}),i(v,p(`效果`));let S=s(`button`,h);i(h,S),d(S,`role`,`tab`),n(()=>{l(S,`tab ${x.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{x.value=`code`}),i(S,p(`代码`));let C=s(`div`,o);i(o,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let a=x.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,C,w))}),i(C,p(` `));let T=t(`rue:slot:anchor`);return i(C,T),n(()=>{let a=x.value===`preview`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow`);let p=s(`div`,o);i(o,p),l(p,`card-body grid gap-2`);let m=s(`ol`,p);i(p,m),l(m,`list-decimal pl-6 space-y-2`);let h=t(`rue:list:start`),_=t(`rue:list:end`);i(m,h),i(m,_);let v=new Map;return n(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:m,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(a,o,p,m,h)=>{u(c(()=>{let o=e(),c=s(`li`,o);i(o,c),n(()=>{d(c,`key`,String(a.id))}),l(c,`px-3 py-2 rounded-md bg-base-200`);let p=t(`rue:component:anchor`);return i(c,p),n(()=>{let e=f(y,{todo:a});r(()=>u(e,c,p))}),o}),o,p)}})}),a}):``;r(()=>u(a,C,T))}),o})}),m,h),m})};export{b as default};