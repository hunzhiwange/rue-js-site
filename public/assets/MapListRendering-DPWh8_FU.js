import{Nt as e,Q as t,Vt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,sn as m,tt as h,yt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var b=()=>_(`reactive:1:0`,()=>e({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>d(()=>{let[e]=_(`useState:1:1`,()=>m(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return c(d=>{let m=p(`div`,d);f(m,`card bg-base-100 shadow`);let _=p(`div`,m);t(m,_),f(_,`card-body`);let b=p(`h2`,_);t(_,b),f(b,`text-2xl font-semibold text-blue-600 mb-3`),t(b,s(`map 列表渲染`));let S=p(`div`,_);t(_,S),f(S,`flex items-center gap-2`);let C=p(`input`,S);t(S,C),o(C,`type`,`text`),o(C,`placeholder`,`输入新的水果`),n(()=>{g(C,e.draft)}),r(C,`input`,t=>{e.draft=t.target.value}),r(C,`keypress`,e=>{e.key===`Enter`&&y()}),f(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=p(`button`,S);t(S,w),f(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),r(w,`click`,y),t(w,s(`添加`));let T=p(`ul`,_);t(_,T),f(T,`mt-3 space-y-2`);let E=h(`rue:list:start`),D=h(`rue:list:end`);t(T,E),t(T,D);let O=new Map;return n(()=>{O=v({items:e.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,d,m,h,g)=>{u(c(()=>{let c=l(),u=p(`li`,c);t(c,u),n(()=>{o(u,`key`,String(g))}),f(u,`flex items-center gap-3 mb-2`);let d=p(`span`,u);t(u,d),f(d,`text-gray-800`);let m=i(d);t(d,m),n(()=>{a(m,e)});let h=p(`button`,u);return t(u,h),f(h,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),r(h,`click`,()=>x(g)),t(h,s(`删除`)),c}),d,m)}})}),m})}});export{x as default};