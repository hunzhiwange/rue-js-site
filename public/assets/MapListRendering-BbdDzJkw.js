import{Q as e,Z as t,_t as n,an as r,dt as i,et as a,in as o,it as s,jt as c,l,lt as u,nt as d,o as f,rt as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var b=()=>_(`reactive:1:0`,()=>c({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:c,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>o(()=>{let[e]=_(`useState:1:1`,()=>r(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return l(r=>{let o=d(`div`,r);i(o,`card bg-base-100 shadow`);let _=d(`div`,o);e(o,_),i(_,`card-body`);let b=d(`h2`,_);e(_,b),i(b,`text-2xl font-semibold text-blue-600 mb-3`),e(b,p(`map 列表渲染`));let S=d(`div`,_);e(_,S),i(S,`flex items-center gap-2`);let C=d(`input`,S);e(S,C),u(C,`type`,`text`),u(C,`placeholder`,`输入新的水果`),g(()=>{n(C,c.draft)}),t(C,`input`,e=>{c.draft=e.target.value}),t(C,`keypress`,e=>{e.key===`Enter`&&y()}),i(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=d(`button`,S);e(S,w),i(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),t(w,`click`,y),e(w,p(`添加`));let T=d(`ul`,_);e(_,T),i(T,`mt-3 space-y-2`);let E=a(`rue:list:start`),D=a(`rue:list:end`);e(T,E),e(T,D);let O=new Map;return g(()=>{O=v({items:c.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(n,r,a,o,c)=>{f(l(()=>{let r=m(),a=d(`li`,r);e(r,a),g(()=>{u(a,`key`,String(c))}),i(a,`flex items-center gap-3 mb-2`);let o=d(`span`,a);e(a,o),i(o,`text-gray-800`);let l=s(o);e(o,l),g(()=>{h(l,n)});let f=d(`button`,a);return e(a,f),i(f,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),t(f,`click`,()=>x(c)),e(f,p(`删除`)),r}),r,a)}})}),o})}});export{x as default};