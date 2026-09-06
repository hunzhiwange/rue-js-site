import{C as e,Dn as t,Dt as n,E as r,Kt as i,Vt as a,_n as o,at as s,b as c,ct as l,et as u,gn as d,pn as f,qt as p,sn as m,vn as h,w as g,wn as _,xn as v,z as y}from"./rue-runtime-HIMg8Lz8.js";import{t as b}from"./createHomeSplitExamplePage-DNdswIPW.js";var x=h(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-blue-600 mb-3">map 列表渲染</h2><div class="flex items-center gap-2"><input type="text" placeholder="输入新的水果" class="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"><button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">添加</button></div><ul class="mt-3 space-y-2"><!--rue:text-hole:0--></ul></div></div>`),S=()=>m(`reactive:1:0`,()=>y({items:[`苹果`,`香蕉`,`橘子`],draft:``})),C=b({title:`map 列表渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[m]=i(`MapListRenderingDemo:hook:0`,S),h=()=>{let e=m.get().draft.trim();e&&(m.get().items=[...m.get().items,e],m.get().draft=``)},y=e=>{m.get().items=m.get().items.filter((t,n)=>n!==e)};return p(()=>l(a(Object.assign(i=>{let l=x().content.cloneNode(!0).firstChild,u=l.childNodes[0].childNodes[1].childNodes[0],p=l.childNodes[0].childNodes[1].childNodes[1],b=l.childNodes[0].childNodes[2].childNodes[0],S=b.parentNode;u.setAttribute(`type`,`text`),u.setAttribute(`placeholder`,`输入新的水果`);let C;_(()=>{let e=m.get().draft,t=e==null?``:String(e);Object.is(C,t)||(C=t,n(u,t))});let w=e=>{let t=e=>{m.get().draft=e.target.value};typeof t==`function`&&t(e)};u.addEventListener(`input`,w),t(()=>u.removeEventListener(`input`,w));let T=e=>{let t=e=>{e.key===`Enter`&&h()};typeof t==`function`&&t(e)};u.addEventListener(`keypress`,T),t(()=>u.removeEventListener(`keypress`,T)),u.className=`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`,p.className=`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`;let E=e=>{let t=h;typeof t==`function`&&t(e)};p.addEventListener(`click`,E),t(()=>p.removeEventListener(`click`,E));let D=[];return _(()=>{let n=m.get().items||[];D=g(S,b,D,n,(e,t)=>t,(n,i)=>{let c=s(n),l=s(i);return e((e,n,i)=>r(e,i,()=>a(Object.assign(e=>{let n=d(`li`,e);n.className=`flex items-center gap-3 mb-2`;let r=d(`span`,n);f(n,r),r.className=`text-gray-800`;let i=o(``);f(r,i),v(i,()=>c.get());let a=d(`button`,n);f(n,a),a.className=`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`;let s=e=>{let t=()=>y(l.get());typeof t==`function`&&t(e)};return a.addEventListener(`click`,s),t(()=>a.removeEventListener(`click`,s)),f(a,o(`删除`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{n=e,i=t,c.set(e),l.set(t)})})}),t(()=>c(D)),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})))}});export{C as default};