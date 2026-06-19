import{$ as e,Et as t,Q as n,Qt as r,X as i,Xt as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,tt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./createHomeSplitExamplePage-Br1mQ323.js";var b=()=>_(`reactive:1:0`,()=>t({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>s(()=>{let[e]=_(`useState:1:1`,()=>a(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return u(a=>{let s=c(`div`,a);d(s,`card bg-base-100 shadow`);let _=c(`div`,s);i(s,_),d(_,`card-body`);let b=c(`h2`,_);i(_,b),d(b,`text-2xl font-semibold text-blue-600 mb-3`),i(b,g(`map 列表渲染`));let S=c(`div`,_);i(_,S),d(S,`flex items-center gap-2`);let C=c(`input`,S);i(S,C),h(C,`type`,`text`),h(C,`placeholder`,`输入新的水果`),r(()=>{f(C,t.draft)}),o(C,`input`,e=>{t.draft=e.target.value}),o(C,`keypress`,e=>{e.key===`Enter`&&y()}),d(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=c(`button`,S);i(S,w),d(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),o(w,`click`,y),i(w,g(`添加`));let T=c(`ul`,_);i(_,T),d(T,`mt-3 space-y-2`);let E=n(`rue:list:start`),D=n(`rue:list:end`);i(T,E),i(T,D);let O=new Map;return r(()=>{O=v({items:t.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,n,a,s,f)=>{m(u(()=>{let n=e(),a=c(`li`,n);i(n,a),r(()=>{h(a,`key`,String(f))}),d(a,`flex items-center gap-3 mb-2`);let s=c(`span`,a);i(a,s),d(s,`text-gray-800`);let u=p(s);i(s,u),r(()=>{l(u,t)});let m=c(`button`,a);return i(a,m),d(m,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),o(m,`click`,()=>x(f)),i(m,g(`删除`)),n}),n,a)}})}),s})}});export{x as default};