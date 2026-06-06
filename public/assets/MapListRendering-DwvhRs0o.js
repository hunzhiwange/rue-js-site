import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,Z as l,at as u,it as d,l as f,mt as p,s as m,wt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./createHomeSplitExamplePage-BftZ6-s2.js";var b=()=>_(`reactive:1:0`,()=>p({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:p,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>h(()=>{let[e]=_(`useState:1:1`,()=>o(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return f(o=>{let h=c(`div`,o);e(h,`card bg-base-100 shadow`);let _=c(`div`,h);t(h,_),e(_,`card-body`);let b=c(`h2`,_);t(_,b),e(b,`text-2xl font-semibold text-blue-600 mb-3`),t(b,r(`map 列表渲染`));let S=c(`div`,_);t(_,S),e(S,`flex items-center gap-2`);let C=c(`input`,S);t(S,C),l(C,`type`,`text`),l(C,`placeholder`,`输入新的水果`),n(()=>{d(C,p.draft)}),g(C,`input`,e=>{p.draft=e.target.value}),g(C,`keypress`,e=>{e.key===`Enter`&&y()}),e(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=c(`button`,S);t(S,w),e(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),g(w,`click`,y),t(w,r(`添加`));let T=c(`ul`,_);t(_,T),e(T,`mt-3 space-y-2`);let E=i(`rue:list:start`),D=i(`rue:list:end`);t(T,E),t(T,D);let O=new Map;return n(()=>{O=v({items:p.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(i,o,d,p,h)=>{m(f(()=>{let o=s(),d=c(`li`,o);t(o,d),n(()=>{l(d,`key`,String(h))}),e(d,`flex items-center gap-3 mb-2`);let f=c(`span`,d);t(d,f),e(f,`text-gray-800`);let p=a(f);t(f,p),n(()=>{u(p,i)});let m=c(`button`,d);return t(d,m),e(m,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),g(m,`click`,()=>x(h)),t(m,r(`删除`)),o}),o,d)}})}),h})}});export{x as default};