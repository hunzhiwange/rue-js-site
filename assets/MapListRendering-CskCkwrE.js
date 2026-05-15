import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,at as d,d as f,ht as p,l as m,mt as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _,n as v}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as y}from"./createHomeSplitExamplePage-B5aM8M8p.js";var b=()=>_(`reactive:1:0`,()=>d({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default MapListRenderingDemo`,Demo:()=>{let{state:d,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>h(()=>{let[e]=_(`useState:1:1`,()=>p(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return f(p=>{let h=r(`div`,p);n(h,`card bg-base-100 shadow`);let _=r(`div`,h);a(h,_),n(_,`card-body`);let b=r(`h2`,_);a(_,b),n(b,`text-2xl font-semibold text-blue-600 mb-3`),a(b,s(`map 列表渲染`));let S=r(`div`,_);a(_,S),n(S,`flex items-center gap-2`);let C=r(`input`,S);a(S,C),c(C,`type`,`text`),c(C,`placeholder`,`输入新的水果`),u(()=>{l(C,d.draft)}),i(C,`input`,e=>{d.draft=e.target.value}),i(C,`keypress`,e=>{e.key===`Enter`&&y()}),n(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=r(`button`,S);a(S,w),n(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),i(w,`click`,y),a(w,s(`添加`));let T=r(`ul`,_);a(_,T),n(T,`mt-3 space-y-2`);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;return u(()=>{O=v({items:d.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,l,d,p,h)=>{m(f(()=>{let l=t(),d=r(`li`,l);a(l,d),u(()=>{c(d,`key`,String(h))}),n(d,`flex items-center gap-3 mb-2`);let f=r(`span`,d);a(d,f),n(f,`text-gray-800`);let p=g(f);a(f,p),u(()=>{o(p,e)});let m=r(`button`,d);return a(d,m),n(m,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),i(m,`click`,()=>x(h)),a(m,s(`删除`)),l}),l,d)}})}),h})}});export{x as default};