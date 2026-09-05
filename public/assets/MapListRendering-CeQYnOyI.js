import{C as e,Dn as t,Et as n,Mt as r,S as i,W as a,_n as o,bn as s,fn as c,ft as l,gn as u,hn as d,jt as f,nn as p,q as m,qt as h,wn as g,x as _,z as v}from"./rue-runtime-CwEGJ854.js";import{t as y}from"./createHomeSplitExamplePage-DuLZTUZH.js";var b=o(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-blue-600 mb-3">map 列表渲染</h2><div class="flex items-center gap-2"><input type="text" placeholder="输入新的水果" class="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"><button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">添加</button></div><ul class="mt-3 space-y-2"><!--rue:text-hole:0--></ul></div></div>`),x=()=>h(`reactive:1:0`,()=>p({items:[`苹果`,`香蕉`,`橘子`],draft:``})),S=y({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[o]=f(`MapListRenderingDemo:hook:0`,x),p=()=>{let e=o.draft.trim();e&&(o.items=[...o.items,e],o.draft=``)},h=e=>{o.items=o.items.filter((t,n)=>n!==e)};return r(()=>m(n(Object.assign(r=>{let f=b().content.cloneNode(!0).firstChild,m=f.childNodes[0].childNodes[1].childNodes[0],v=f.childNodes[0].childNodes[1].childNodes[1],y=f.childNodes[0].childNodes[2].childNodes[0],x=y.parentNode;m.setAttribute(`type`,`text`),m.setAttribute(`placeholder`,`输入新的水果`);let S;g(()=>{let e=o.draft,t=e==null?``:String(e);Object.is(S,t)||(S=t,l(m,t))});let C=e=>{let t=e=>{o.draft=e.target.value};typeof t==`function`&&t(e)};m.addEventListener(`input`,C),t(()=>m.removeEventListener(`input`,C));let w=e=>{let t=e=>{e.key===`Enter`&&p()};typeof t==`function`&&t(e)};m.addEventListener(`keypress`,w),t(()=>m.removeEventListener(`keypress`,w)),m.className=`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`,v.className=`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`;let T=e=>{let t=p;typeof t==`function`&&t(e)};v.addEventListener(`click`,T),t(()=>v.removeEventListener(`click`,T));let E=[];return g(()=>{let r=o.items||[];E=e(x,y,E,r,(e,t)=>t,(e,r)=>{let o=a(e),l=a(r);return i((e,r,i)=>_(e,i,()=>n(Object.assign(e=>{let n=d(`li`,e);n.className=`flex items-center gap-3 mb-2`;let r=d(`span`,n);c(n,r),r.className=`text-gray-800`;let i=u(``);c(r,i),s(i,()=>o.get());let a=d(`button`,n);c(n,a),a.className=`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`;let f=e=>{let t=()=>h(l.get());typeof t==`function`&&t(e)};return a.addEventListener(`click`,f),t(()=>a.removeEventListener(`click`,f)),c(a,u(`删除`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,o.set(t),l.set(n)})})}),{__rue_compiled_host:f,__rue_compiled_roots:[f]}},{__rue_compiled_explicit_roots:!0})),e=>v(()=>{})))}});export{S as default};