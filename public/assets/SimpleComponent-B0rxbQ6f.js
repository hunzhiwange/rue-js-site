import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h,n as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{t as v}from"./SidebarPlaygroundExample-CdMvdgT7.js";var y=e=>l(r=>{let a=o(`span`,r),s=i(`rue:slot:anchor`);return t(a,s),n(()=>{let t=e.todo.text;p(()=>u(t,a,s))}),a}),b=()=>{let{groceryList:b,activeTab:x}=h(`useSetup:0:0`,()=>f(()=>({groceryList:h(`ref:1:0`,()=>c([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}])),activeTab:h(`ref:1:1`,()=>c(`preview`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(v,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`简单组件（移植自 Vue）`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let v=o(`button`,h);t(h,v),s(v,`role`,`tab`),n(()=>{e(v,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),m(v,`click`,()=>{x.value=`preview`}),t(v,r(`效果`));let S=o(`button`,h);t(h,S),s(S,`role`,`tab`),n(()=>{e(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),m(S,`click`,()=>{x.value=`code`}),t(S,r(`代码`));let C=o(`div`,c);t(c,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let r=x.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,C,w))}),t(C,r(` `));let T=i(`rue:slot:anchor`);return t(C,T),n(()=>{let r=x.value===`preview`?l(()=>{let r=a(),c=o(`div`,r);t(r,c),e(c,`card bg-base-100 shadow`);let f=o(`div`,c);t(c,f),e(f,`card-body grid gap-2`);let m=o(`ol`,f);t(f,m),e(m,`list-decimal pl-6 space-y-2`);let h=i(`rue:list:start`),_=i(`rue:list:end`);t(m,h),t(m,_);let v=new Map;return n(()=>{v=g({items:b.value||[],getKey:(e,t)=>e.id,elements:v,parent:m,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(r,c,f,m,h)=>{u(l(()=>{let c=a(),l=o(`li`,c);t(c,l),n(()=>{s(l,`key`,String(r.id))}),e(l,`px-3 py-2 rounded-md bg-base-200`);let f=i(`rue:component:anchor`);return t(l,f),n(()=>{let e=d(y,{todo:r});p(()=>u(e,l,f))}),c}),c,f)}})}),r}):``;p(()=>u(r,C,T))}),c})}),f,h),f})};export{b as default};