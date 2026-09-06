import{C as e,Dn as t,E as n,Kt as r,Vt as i,_n as a,at as o,b as s,ct as c,et as l,gn as u,pn as d,qt as f,vn as p,w as m,wn as h,xn as g}from"./rue-runtime-HIMg8Lz8.js";import{t as _}from"./createHomeSplitExamplePage-DNdswIPW.js";var v=p(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">useState 数组示例</h2><div class="flex gap-2 mb-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">添加</button><button>删除最后一个</button></div><ul><!--rue:text-hole:0--></ul><p>长度：<!--rue:text-hole:1--></p></div></div>`),y=_({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

const UseStateArrayDemo: FC = () => {
  const [list, setList] = useState<string[]>(['苹果', '香蕉'])

  const addItem = () => {
    setList(previous => [...previous, \`项目\${previous.length + 1}\`])
  }

  const removeLast = () => {
    setList(previous => previous.slice(0, -1))
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">useState 数组示例</h2>
        <div className="flex gap-2 mb-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white"
            onClick={addItem}
          >
            添加
          </button>
          <button
            className={\`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white \${list.length === 0 ? 'opacity-60 cursor-not-allowed' : ''}\`}
            onClick={() => {
              if (list.length > 0) {
                removeLast()
              }
            }}
          >
            删除最后一个
          </button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>长度：{list.length}</p>
      </div>
    </div>
  )
}

export default UseStateArrayDemo
`,Demo:()=>{let[p,_]=r(`UseStateArrayDemo:hook:0`,[`苹果`,`香蕉`]),y=()=>{_(e=>[...e,`项目${e.length+1}`])},b=()=>{_(e=>e.slice(0,-1))};return f(()=>c(i(Object.assign(r=>{let c=v().content.cloneNode(!0).firstChild,l=c.childNodes[0].childNodes[1].childNodes[0],f=c.childNodes[0].childNodes[1].childNodes[1],_=c.childNodes[0].childNodes[2].childNodes[0],x=_.parentNode,S=c.childNodes[0].childNodes[3].childNodes[1],C=S.parentNode;l.className=`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`;let w=e=>{let t=y;typeof t==`function`&&t(e)};l.addEventListener(`click`,w),t(()=>l.removeEventListener(`click`,w));let T;h(()=>{let e=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${p.get().length===0?`opacity-60 cursor-not-allowed`:``}`,t=e==null?``:String(e);Object.is(T,t)||(T=t,f.className=t)});let E=e=>{let t=()=>{p.get().length>0&&b()};typeof t==`function`&&t(e)};f.addEventListener(`click`,E),t(()=>f.removeEventListener(`click`,E));let D=[];h(()=>{let t=p.get()||[];D=m(x,_,D,t,(e,t)=>t,(t,r)=>{let s=o(t);return e((e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=u(`li`,e),n=a(``);return d(t,n),g(n,()=>s.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,s.set(e)})})}),t(()=>s(D));let O=a(``);return C.insertBefore(O,S),C.removeChild(S),g(O,()=>p.get().length),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>l(()=>{})))}});export{y as default};