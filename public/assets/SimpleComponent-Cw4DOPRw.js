import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h,n as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./Code-4SUSUwRg.js";import{r as v}from"./SidebarPlaygroundExample-BEWYUWOl.js";var y=t=>s(r=>{let i=l(`span`,r),o=a(`rue:slot:anchor`);return n(i,o),m(()=>{let n=t.todo.text;e(()=>u(n,i,o))}),i}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>o(()=>({groceryList:h(`ref:1:0`,()=>t([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>t(`preview`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(v,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,d(`简单组件（移植自 Vue）`));let h=l(`div`,t);n(t,h),c(h,`role`,`tablist`),i(h,`tabs tabs-box`);let v=l(`button`,h);n(h,v),c(v,`role`,`tab`),m(()=>{i(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{x.value=`preview`}),n(v,d(`效果`));let S=l(`button`,h);n(h,S),c(S,`role`,`tab`),m(()=>{i(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),n(S,d(`代码`));let C=l(`div`,t);n(t,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),m(()=>{let t=x.value===`code`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let o=l(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,C,w))}),n(C,d(` `));let T=a(`rue:slot:anchor`);return n(C,T),m(()=>{let t=x.value===`preview`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow`);let o=l(`div`,r);n(r,o),i(o,`card-body grid gap-2`);let d=l(`ol`,o);n(o,d),i(d,`list-decimal pl-6 space-y-2`);let h=a(`rue:list:start`),_=a(`rue:list:end`);n(d,h),n(d,_);let v=new Map;return m(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:d,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(t,r,o,d,h)=>{u(s(()=>{let r=p(),o=l(`li`,r);n(r,o),m(()=>{c(o,`key`,String(t.id))}),i(o,`px-3 py-2 rounded-md bg-base-200`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let n=f(y,{todo:t});e(()=>u(n,o,s))}),r}),r,o)}})}),t}):``;e(()=>u(t,C,T))}),t})}),o,h),o})};export{b as default};