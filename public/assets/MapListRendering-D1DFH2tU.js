import{$ as e,$t as t,Dt as n,X as r,Xt as i,Z as a,Zt as o,ct as s,et as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./createHomeSplitExamplePage-Q644r2Bq.js";var b=()=>_(`reactive:1:0`,()=>n({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>i(()=>{let[e]=_(`useState:1:1`,()=>o(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return d(i=>{let o=h(`div`,i);g(o,`card bg-base-100 shadow`);let _=h(`div`,o);a(o,_),g(_,`card-body`);let b=h(`h2`,_);a(_,b),g(b,`text-2xl font-semibold text-blue-600 mb-3`),a(b,f(`map 列表渲染`));let S=h(`div`,_);a(_,S),g(S,`flex items-center gap-2`);let C=h(`input`,S);a(S,C),s(C,`type`,`text`),s(C,`placeholder`,`输入新的水果`),t(()=>{u(C,n.draft)}),r(C,`input`,e=>{n.draft=e.target.value}),r(C,`keypress`,e=>{e.key===`Enter`&&y()}),g(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=h(`button`,S);a(S,w),g(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),r(w,`click`,y),a(w,f(`添加`));let T=h(`ul`,_);a(_,T),g(T,`mt-3 space-y-2`);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;return t(()=>{O=v({items:n.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,n,i,o,u)=>{p(d(()=>{let n=c(),i=h(`li`,n);a(n,i),t(()=>{s(i,`key`,String(u))}),g(i,`flex items-center gap-3 mb-2`);let o=h(`span`,i);a(i,o),g(o,`text-gray-800`);let d=m(o);a(o,d),t(()=>{l(d,e)});let p=h(`button`,i);return a(i,p),g(p,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),r(p,`click`,()=>x(u)),a(p,f(`删除`)),n}),n,i)}})}),o})}});export{x as default};