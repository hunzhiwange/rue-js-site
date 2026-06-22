import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h,n as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./Code-C5NjdoiC.js";import{r as v}from"./SidebarPlaygroundExample-DpItFif-.js";var y=n=>o(r=>{let i=d(`span`,r),a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.todo.text;p(()=>c(e,i,a))}),i}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>l(()=>({groceryList:h(`ref:1:0`,()=>n([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>n(`preview`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(v,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`简单组件（移植自 Vue）`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let v=d(`button`,h);e(h,v),i(v,`role`,`tab`),t(()=>{u(v,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{x.value=`preview`}),e(v,a(`效果`));let S=d(`button`,h);e(h,S),i(S,`role`,`tab`),t(()=>{u(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),e(S,a(`代码`));let C=d(`div`,n);e(n,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=m(`rue:slot:anchor`);e(C,w),t(()=>{let n=x.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,C,w))}),e(C,a(` `));let T=m(`rue:slot:anchor`);return e(C,T),t(()=>{let n=x.value===`preview`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow`);let a=d(`div`,r);e(r,a),u(a,`card-body grid gap-2`);let l=d(`ol`,a);e(a,l),u(l,`list-decimal pl-6 space-y-2`);let h=m(`rue:list:start`),_=m(`rue:list:end`);e(l,h),e(l,_);let v=new Map;return t(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:l,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(n,r,a,l,h)=>{c(o(()=>{let r=s(),a=d(`li`,r);e(r,a),t(()=>{i(a,`key`,String(n.id))}),u(a,`px-3 py-2 rounded-md bg-base-200`);let o=m(`rue:component:anchor`);return e(a,o),t(()=>{let e=f(y,{todo:n});p(()=>c(e,a,o))}),r}),r,a)}})}),n}):``;p(()=>c(n,C,T))}),n})}),l,h),l})};export{b as default};