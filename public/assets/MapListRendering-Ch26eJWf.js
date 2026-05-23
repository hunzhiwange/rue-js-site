import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,d as l,gt as u,kt as d,l as f,ot as p,q as m,st as h,tt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as y}from"./createHomeSplitExamplePage-BuifU8mn.js";var b=()=>_(`reactive:1:0`,()=>u({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:u,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>n(()=>{let[e]=_(`useState:1:1`,()=>t(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return l(t=>{let n=o(`div`,t);g(n,`card bg-base-100 shadow`);let _=o(`div`,n);i(n,_),g(_,`card-body`);let b=o(`h2`,_);i(_,b),g(b,`text-2xl font-semibold text-blue-600 mb-3`),i(b,m(`map 列表渲染`));let S=o(`div`,_);i(_,S),g(S,`flex items-center gap-2`);let C=o(`input`,S);i(S,C),e(C,`type`,`text`),e(C,`placeholder`,`输入新的水果`),d(()=>{p(C,u.draft)}),s(C,`input`,e=>{u.draft=e.target.value}),s(C,`keypress`,e=>{e.key===`Enter`&&y()}),g(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=o(`button`,S);i(S,w),g(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),s(w,`click`,y),i(w,m(`添加`));let T=o(`ul`,_);i(_,T),g(T,`mt-3 space-y-2`);let E=c(`rue:list:start`),D=c(`rue:list:end`);i(T,E),i(T,D);let O=new Map;return d(()=>{O=v({items:u.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,n,c,u,p)=>{f(l(()=>{let n=r(),c=o(`li`,n);i(n,c),d(()=>{e(c,`key`,String(p))}),g(c,`flex items-center gap-3 mb-2`);let l=o(`span`,c);i(c,l),g(l,`text-gray-800`);let u=a(l);i(l,u),d(()=>{h(u,t)});let f=o(`button`,c);return i(c,f),g(f,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),s(f,`click`,()=>x(p)),i(f,m(`删除`)),n}),n,c)}})}),n})}});export{x as default};