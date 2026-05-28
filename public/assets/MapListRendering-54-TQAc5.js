import{$ as e,Ct as t,J as n,Kt as r,Q as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,pt as m,qt as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var b=()=>_(`reactive:1:0`,()=>t({items:[`苹果`,`香蕉`,`橘子`],draft:``})),x=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t,addItem:y,removeAt:x}=_(`useSetup:0:0`,()=>r(()=>{let[e]=_(`useState:1:1`,()=>h(b));return{state:e,addItem:()=>{let t=e.draft.trim();t&&(e.items=[...e.items,t],e.draft=``)},removeAt:t=>{e.items=e.items.filter((e,n)=>n!==t)}}}));return l(r=>{let h=e(`div`,r);c(h,`card bg-base-100 shadow`);let _=e(`div`,h);a(h,_),c(_,`card-body`);let b=e(`h2`,_);a(_,b),c(b,`text-2xl font-semibold text-blue-600 mb-3`),a(b,u(`map 列表渲染`));let S=e(`div`,_);a(_,S),c(S,`flex items-center gap-2`);let C=e(`input`,S);a(S,C),p(C,`type`,`text`),p(C,`placeholder`,`输入新的水果`),o(()=>{m(C,t.draft)}),n(C,`input`,e=>{t.draft=e.target.value}),n(C,`keypress`,e=>{e.key===`Enter`&&y()}),c(C,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`);let w=e(`button`,S);a(S,w),c(w,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),n(w,`click`,y),a(w,u(`添加`));let T=e(`ul`,_);a(_,T),c(T,`mt-3 space-y-2`);let E=s(`rue:list:start`),D=s(`rue:list:end`);a(T,E),a(T,D);let O=new Map;return o(()=>{O=v({items:t.items||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,r,s,m,h)=>{d(l(()=>{let r=i(),s=e(`li`,r);a(r,s),o(()=>{p(s,`key`,String(h))}),c(s,`flex items-center gap-3 mb-2`);let l=e(`span`,s);a(s,l),c(l,`text-gray-800`);let d=g(l);a(l,d),o(()=>{f(d,t)});let m=e(`button`,s);return a(s,m),c(m,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),n(m,`click`,()=>x(h)),a(m,u(`删除`)),r}),r,s)}})}),h})}});export{x as default};