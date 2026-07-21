import{Cn as e,Ct as t,Kt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,jt as c,mt as l,ot as u,pt as d,st as f,tn as p,wn as m}from"./context-8lXZvIn-.js";import{l as h,o as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var b=()=>_(`reactive:1:0`,()=>n({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>e(()=>{let[e]=_(`useState:1:1`,()=>m(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return h(e=>{let m=d(`div`,e);i(m,`card bg-base-100 shadow`);let _=d(`div`,m);f(m,_),i(_,`card-body`);let b=d(`h2`,_);f(_,b),i(b,`text-2xl font-semibold text-blue-600 mb-3`),f(b,l(`map 列表渲染`));let S=d(`div`,_);f(_,S),i(S,`flex items-center gap-2`);let C=d(`input`,S);f(S,C),t(C,`type`,`text`),t(C,`placeholder`,`输入新的水果`),p(()=>{c(C,n.draft)}),u(C,`input`,e=>{n.draft=e.target.value}),u(C,`keypress`,e=>{e.key===`Enter`&&y()}),i(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=d(`button`,S);f(S,w),i(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),u(w,`click`,y),f(w,l(`添加`));let T=d(`ul`,_);f(_,T),i(T,`mt-3 space-y-2`);let E=a(`rue:list:start`),D=a(`rue:list:end`);f(T,E),f(T,D);let O=new Map;return p(()=>{O=v({items:n.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,n,a,c,m)=>{g(h(()=>{let n=o(),a=d(`li`,n);f(n,a),p(()=>{t(a,`key`,String(m))}),i(a,`flex items-center gap-3 mb-2`);let c=d(`span`,a);f(a,c),i(c,`text-gray-800`);let h=s(c);f(c,h),p(()=>{r(h,e)});let g=d(`button`,a);return f(a,g),i(g,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),u(g,`click`,()=>x(m)),f(g,l(`删除`)),n}),n,a)}})}),m})}});export{x as default};