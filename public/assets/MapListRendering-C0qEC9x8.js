import{Gt as e,H as t,Kt as n,Qt as r,V as i,Vt as a,Wt as o,Y as s,Yt as c,Zt as l,et as u,f as d,fn as f,gn as p,h as m,hn as h,in as g,mn as _,p as v,qt as y,sn as b,u as x,vt as S,yn as C}from"./rue-runtime-Cv6BZekS.js";import{t as w}from"./createHomeSplitExamplePage-DqLcVC_n.js";var T=e([`items`],[!1]),E=e([`draft`],[!1]),D=C(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-blue-600 mb-3">map 列表渲染</h2><div class="flex items-center gap-2"><input type="text" placeholder="输入新的水果" class="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"><button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">添加</button></div><ul class="mt-3 space-y-2"><!--rue:text-hole:0--></ul></div></div>`),O=()=>({items:[`苹果`,`香蕉`,`橘子`],draft:``}),k=(e,t,i)=>{let[_]=u(`MapListRenderingDemo:hook:0`,O),C=()=>{let e=`${_.get().draft}`.trim();e&&(c(l(_))(`items`).value=[...n(_,T),e],c(l(_))(`draft`).value=``)},w=e=>{c(l(_))(`items`).value=_.get().items.filter((t,n)=>n!==e)};return s(()=>o(e=>{let t=D().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[1].childNodes[0],s=t.childNodes[0].childNodes[1].childNodes[1],u=t.childNodes[0].childNodes[2].childNodes[0],T=u.parentNode;i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`输入新的水果`);let O;g(()=>{let e=n(_,E),t=e==null?``:String(e);Object.is(O,t)||(O=t,i.value=t)});let k=e=>{let t=e=>{c(l(_))(`draft`).value=e.target.value};typeof t==`function`&&t(e)};i.addEventListener(`input`,k),b(()=>i.removeEventListener(`input`,k));let A=e=>{let t=e=>{e.key===`Enter`&&C()};typeof t==`function`&&t(e)};i.addEventListener(`keypress`,A),b(()=>i.removeEventListener(`keypress`,A)),i.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),s.setAttribute(`class`,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`);let j=e=>{let t=C;typeof t==`function`&&t(e)};s.addEventListener(`click`,j),b(()=>s.removeEventListener(`click`,j));let M=[];return y(()=>{let e=_.get().items||[];M=m(T,u,M,e,(e,t)=>t,(e,t)=>{let n=S(e),i=S(t);return v((e,t,s)=>{let c=()=>o(e=>{let t=h(`li`,e);t.setAttribute(`class`,`flex items-center gap-3 mb-2`);let a=h(`span`,t);f(t,a),a.setAttribute(`class`,`text-gray-800`);let o=p(``);f(a,o),r(o,()=>n.get());let s=h(`button`,t);return f(t,s),s.setAttribute(`class`,`rounded-md bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-700`),b(x(e,s,`click`,()=>()=>w(i.get()))),f(s,p(`删除`)),[t,t]});return e==null?c():a(e,s,c)},(r,a)=>{e=r,t=a,n.set(r),i.set(a)},void 0)},!0,!1)}),b(()=>d(M)),[t,t]}))},A=`import { type FC, useState } from '@rue-js/rue'

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
`,j=(e,n,r)=>i(w,()=>({options:{title:`map 列表渲染`,source:A},children:(e,n,r)=>{let i=()=>o(e=>{let n=_();t(n,k,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{j as default};