import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,bt as d,c as f,ct as p,j as m,u as h,vt as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./createHomeSplitExamplePage-CLNmVfsf.js";var b=()=>_(`reactive:1:0`,()=>p({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

const createMapListState = () =>
  reactive({
    items: ['苹果', '香蕉', '橘子'] as string[],
    draft: '',
  })

const MapListRenderingDemo: FC = () => {
  const [state] = useState(createMapListState)

  const addItem = () => {
    const text = state.draft.trim()
    if (!text) {
      return
    }

    state.items = [...state.items, text]
    state.draft = ''
  }

  const removeAt = (index: number) => {
    state.items = state.items.filter((_, currentIndex) => currentIndex !== index)
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">map 列表渲染</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="输入新的水果"
            value={state.draft}
            onInput={(event: any) => {
              state.draft = (event.target as HTMLInputElement).value
            }}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') addItem()
            }}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"
          />
          <button
            className="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700"
            onClick={addItem}
          >
            添加
          </button>
        </div>
        <ul className="mt-3 space-y-2">
          {state.items.map((item, index) => (
            <li key={index} className="flex items-center gap-3 mb-2">
              <span className="text-gray-800">{item}</span>
              <button
                className="rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700"
                onClick={() => removeAt(index)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MapListRenderingDemo`,Demo:()=>{let{state:p,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>u(()=>{let[e]=_(`useState:1:1`,()=>g(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return h(()=>{let u=n(`div`);t(u,`card bg-base-100 shadow`);let g=n(`div`);i(u,g),t(g,`card-body`);let _=n(`h2`);i(g,_),t(_,`text-2xl font-semibold text-blue-600 mb-3`),i(_,r(`map 列表渲染`));let b=n(`div`);i(g,b),t(b,`flex items-center gap-2`);let S=n(`input`);i(b,S),s(S,`type`,`text`),s(S,`placeholder`,`输入新的水果`),d(()=>{c(S,p.draft)}),m(S,`input`,e=>{p.draft=e.target.value}),m(S,`keypress`,e=>{e.key===`Enter`&&y()}),t(S,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let C=n(`button`);i(b,C),t(C,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),m(C,`click`,y),i(C,r(`添加`));let w=n(`ul`);i(g,w),t(w,`mt-3 space-y-2`);let T=a(`rue:list:start`),E=a(`rue:list:end`);i(w,T),i(w,E);let D=new Map;return d(()=>{D=v({items:p.items||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(a,c,u,p,g)=>{f(h(()=>{let c=e(),u=n(`li`);i(c,u),d(()=>{s(u,`key`,String(g))}),t(u,`flex items-center gap-3 mb-2`);let f=n(`span`);i(u,f),t(f,`text-gray-800`);let p=o(f);i(f,p),d(()=>{l(p,a)});let h=n(`button`);return i(u,h),t(h,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),m(h,`click`,()=>x(g)),i(h,r(`删除`)),c}),c,u)}})}),u})}});export{x as default};