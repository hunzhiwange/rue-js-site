import{C as e,Et as t,L as n,Lt as r,Mt as i,S as a,W as o,Y as s,_n as c,bn as l,fn as u,gn as d,hn as f,ht as p,jt as m,kn as h,nt as g,q as _,wn as v,x as y,z as b}from"./rue-runtime-CwEGJ854.js";import{t as x}from"./createHomeSplitExamplePage-DuLZTUZH.js";var S=c(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">useState 数组示例</h2><div class="flex gap-2 mb-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">添加</button><button>删除最后一个</button></div><ul><!--rue:text-hole:0--></ul><p>长度：<!--rue:text-hole:1--></p></div></div>`),C=x({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[c,x]=m(`UseStateArrayDemo:hook:0`,[`苹果`,`香蕉`]),C=()=>{x(e=>[...e,`项目${e.length+1}`])},w=()=>{x(e=>e.slice(0,-1))};return i(()=>_(p(()=>{let i=g(),p=S().content.cloneNode(!0),m=p.firstChild,_=m.childNodes[0].childNodes[1].childNodes[0],b=m.childNodes[0].childNodes[1].childNodes[1],x=m.childNodes[0].childNodes[2].childNodes[0],T=x.parentNode,E=m.childNodes[0].childNodes[3].childNodes[1],D=E.parentNode;i.appendChild(p),n(_,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`);let O=e=>{let t=C;typeof t==`function`&&t(e)};_.addEventListener(`click`,O),r(()=>_.removeEventListener(`click`,O)),v(()=>{n(b,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${c.length===0?`opacity-60 cursor-not-allowed`:``}`)});let k=e=>{let t=()=>{c.length>0&&w()};typeof t==`function`&&t(e)};b.addEventListener(`click`,k),r(()=>b.removeEventListener(`click`,k));let A=[];return v(()=>{A=e(T,x,A,c||[],(e,t)=>t,(e,n)=>{let r=o(e),i=o(n);return a((e,n,i)=>y(e,i,()=>t(Object.assign(e=>{let t=f(`li`,e),n=d(``);return u(t,n),l(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,a)=>{e=t,n=a,r.set(t),i.set(a)})})}),v(()=>{let e=c.length;h(()=>s(e,D,E))}),i},!0),e=>b(()=>{})))}});export{C as default};