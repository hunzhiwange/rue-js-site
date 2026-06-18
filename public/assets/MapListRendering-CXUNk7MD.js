import{$ as e,J as t,Jt as n,Q as r,X as i,Xt as a,Z as o,at as s,et as c,ft as l,l as u,pt as d,q as f,qt as p,s as m,st as h,wt as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./createHomeSplitExamplePage-C98rg19g.js";var b=()=>_(`reactive:1:0`,()=>g({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>p(()=>{let[e]=_(`useState:1:1`,()=>n(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return u(n=>{let p=r(`div`,n);h(p,`card bg-base-100 shadow`);let _=r(`div`,p);t(p,_),h(_,`card-body`);let b=r(`h2`,_);t(_,b),h(b,`text-2xl font-semibold text-blue-600 mb-3`),t(b,e(`map 列表渲染`));let S=r(`div`,_);t(_,S),h(S,`flex items-center gap-2`);let C=r(`input`,S);t(S,C),s(C,`type`,`text`),s(C,`placeholder`,`输入新的水果`),a(()=>{l(C,g.draft)}),f(C,`input`,e=>{g.draft=e.target.value}),f(C,`keypress`,e=>{e.key===`Enter`&&y()}),h(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=r(`button`,S);t(S,w),h(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),f(w,`click`,y),t(w,e(`添加`));let T=r(`ul`,_);t(_,T),h(T,`mt-3 space-y-2`);let E=i(`rue:list:start`),D=i(`rue:list:end`);t(T,E),t(T,D);let O=new Map;return a(()=>{O=v({items:g.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(n,i,l,p,g)=>{m(u(()=>{let i=o(),l=r(`li`,i);t(i,l),a(()=>{s(l,`key`,String(g))}),h(l,`flex items-center gap-3 mb-2`);let u=r(`span`,l);t(l,u),h(u,`text-gray-800`);let p=c(u);t(u,p),a(()=>{d(p,n)});let m=r(`button`,l);return t(l,m),h(m,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),f(m,`click`,()=>x(g)),t(m,e(`删除`)),i}),i,l)}})}),p})}});export{x as default};