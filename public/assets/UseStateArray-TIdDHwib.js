import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./createHomeSplitExamplePage-C98rg19g.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>p(()=>{let[e,t]=g(`useState:1:0`,()=>r([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return u(r=>{let p=i(`div`,r);h(p,`card bg-base-100 shadow`);let g=i(`div`,p);n(p,g),h(g,`card-body`);let y=i(`h2`,g);n(g,y),h(y,`text-2xl font-semibold mb-3`),n(y,e(`useState 数组示例`));let S=i(`div`,g);n(g,S),h(S,`flex gap-2 mb-2`);let C=i(`button`,S);n(S,C),h(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),f(C,`click`,b),n(C,e(`添加`));let w=i(`button`,S);n(S,w),o(()=>{h(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),f(w,`click`,()=>{v.length>0&&x()}),n(w,e(`删除最后一个`));let T=i(`ul`,g);n(g,T);let E=a(`rue:list:start`),D=a(`rue:list:end`);n(T,E),n(T,D);let O=new Map;o(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,t,r,a,f)=>{m(u(()=>{let t=s(),r=i(`li`,t);n(t,r),o(()=>{c(r,`key`,String(f))});let a=l(r);return n(r,a),o(()=>{d(a,e)}),t}),t,r)}})});let k=i(`p`,g);n(g,k),n(k,e(`长度：`));let A=a(`rue:slot:anchor`);return n(k,A),o(()=>{let e=v.length;t(()=>m(e,k,A))}),p})}});export{y as default};