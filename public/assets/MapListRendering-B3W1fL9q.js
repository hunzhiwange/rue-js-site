import{F as e,Gt as t,Kt as n,P as r,Qt as i,Vt as a,W as o,Wt as s,Yt as c,Zt as l,f as u,fn as d,gn as f,h as p,hn as m,in as h,mn as g,nt as _,p as v,qt as y,sn as b,st as x,u as S,yn as C}from"./rue-runtime-BWbIfNT8.js";import{t as w}from"./createHomeSplitExamplePage-Cjn7V321.js";var T=t([`items`],[!1]),E=t([`draft`],[!1]),D=C(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-blue-600 mb-3">map 列表渲染</h2><div class="flex items-center gap-2"><input type="text" placeholder="输入新的水果" class="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"><button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">添加</button></div><ul class="mt-3 space-y-2"><!--rue:text-hole:0--></ul></div></div>`),O=()=>({items:[`苹果`,`香蕉`,`橘子`],draft:``}),k=(e,t,r)=>{let[g]=x(`MapListRenderingDemo:hook:0`,O),C=()=>{let e=`${g.get().draft}`.trim();e&&(c(l(g))(`items`).value=[...n(g,T),e],c(l(g))(`draft`).value=``)},w=e=>{c(l(g))(`items`).value=g.get().items.filter((t,n)=>n!==e)};return _(()=>s(e=>{let t=D().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[0],_=t.childNodes[0].childNodes[1].childNodes[1],x=t.childNodes[0].childNodes[2].childNodes[0],T=x.parentNode;r.setAttribute(`type`,`text`),r.setAttribute(`placeholder`,`输入新的水果`);let O;h(()=>{let e=n(g,E),t=e==null?``:String(e);Object.is(O,t)||(O=t,r.value=t)});let k=e=>{let t=e=>{c(l(g))(`draft`).value=e.target.value};typeof t==`function`&&t(e)};r.addEventListener(`input`,k),b(()=>r.removeEventListener(`input`,k));let A=e=>{let t=e=>{e.key===`Enter`&&C()};typeof t==`function`&&t(e)};r.addEventListener(`keypress`,A),b(()=>r.removeEventListener(`keypress`,A)),r.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),_.setAttribute(`class`,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`);let j=e=>{let t=C;typeof t==`function`&&t(e)};_.addEventListener(`click`,j),b(()=>_.removeEventListener(`click`,j));let M=[];return y(()=>{let e=g.get().items||[];M=p(T,x,M,e,(e,t)=>t,(e,t)=>{let n=o(e),r=o(t);return v((e,t,o)=>{let c=()=>s(e=>{let t=m(`li`,e);t.setAttribute(`class`,`flex items-center gap-3 mb-2`);let a=m(`span`,t);d(t,a),a.setAttribute(`class`,`text-gray-800`);let o=f(``);d(a,o),i(o,()=>n.get());let s=m(`button`,t);return d(t,s),s.setAttribute(`class`,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),b(S(e,s,`click`,()=>()=>w(r.get()))),d(s,f(`删除`)),[t,t]});return e==null?c():a(e,o,c)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),b(()=>u(M)),[t,t]}))},A=`import { type FC, useState } from '@rue-js/rue'

const createMapListState = () => ({
  items: ['苹果', '香蕉', '橘子'] as string[],
  draft: '',
})

const MapListRenderingDemo: FC = () => {
  const [state] = useState(createMapListState)

  const addItem = () => {
    const text = \`\${state.draft}\`.trim()
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
`,j=(t,n,i)=>r(w,()=>({options:{title:`map 列表渲染`,source:A},children:(t,n,r)=>{let i=()=>s(t=>{let n=g();e(n,k,()=>({}));let r=f(``),i=f(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():a(t,r,i)}}));export{j as default};