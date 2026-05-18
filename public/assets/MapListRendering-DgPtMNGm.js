import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,gt as d,ht as f,l as p,ot as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./createHomeSplitExamplePage-2wtBgDCk.js";var b=()=>_(`reactive:1:0`,()=>m({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default MapListRenderingDemo
`,Demo:()=>{let{state:m,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>f(()=>{let[e]=_(`useState:1:1`,()=>d(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return u(d=>{let f=r(`div`,d);n(f,`card bg-base-100 shadow`);let _=r(`div`,f);a(f,_),n(_,`card-body`);let b=r(`h2`,_);a(_,b),n(b,`text-2xl font-semibold text-blue-600 mb-3`),a(b,s(`map 列表渲染`));let S=r(`div`,_);a(_,S),n(S,`flex items-center gap-2`);let C=r(`input`,S);a(S,C),c(C,`type`,`text`),c(C,`placeholder`,`输入新的水果`),h(()=>{l(C,m.draft)}),i(C,`input`,e=>{m.draft=e.target.value}),i(C,`keypress`,e=>{e.key===`Enter`&&y()}),n(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=r(`button`,S);a(S,w),n(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),i(w,`click`,y),a(w,s(`添加`));let T=r(`ul`,_);a(_,T),n(T,`mt-3 space-y-2`);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;return h(()=>{O=v({items:m.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,l,d,f,m)=>{p(u(()=>{let l=t(),u=r(`li`,l);a(l,u),h(()=>{c(u,`key`,String(m))}),n(u,`flex items-center gap-3 mb-2`);let d=r(`span`,u);a(u,d),n(d,`text-gray-800`);let f=g(d);a(d,f),h(()=>{o(f,e)});let p=r(`button`,u);return a(u,p),n(p,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),i(p,`click`,()=>x(m)),a(p,s(`删除`)),l}),l,d)}})}),f})}});export{x as default};