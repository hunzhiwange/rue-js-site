import{$ as e,$t as t,Gt as n,X as r,Xt as i,Z as a,Zt as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./createHomeSplitExamplePage-Q644r2Bq.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>i(()=>{let[e,t]=g(`useState:1:0`,()=>o([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return u(i=>{let o=m(`div`,i);h(o,`card bg-base-100 shadow`);let g=m(`div`,o);a(o,g),h(g,`card-body`);let y=m(`h2`,g);a(g,y),h(y,`text-2xl font-semibold mb-3`),a(y,d(`useState 数组示例`));let S=m(`div`,g);a(g,S),h(S,`flex gap-2 mb-2`);let C=m(`button`,S);a(S,C),h(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),r(C,`click`,b),a(C,d(`添加`));let w=m(`button`,S);a(S,w),t(()=>{h(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),r(w,`click`,()=>{v.length>0&&x()}),a(w,d(`删除最后一个`));let T=m(`ul`,g);a(g,T);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;t(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,n,r,i,o)=>{f(u(()=>{let n=c(),r=m(`li`,n);a(n,r),t(()=>{s(r,`key`,String(o))});let i=p(r);return a(r,i),t(()=>{l(i,e)}),n}),n,r)}})});let k=m(`p`,g);a(g,k),a(k,d(`长度：`));let A=e(`rue:slot:anchor`);return a(k,A),t(()=>{let e=v.length;n(()=>f(e,k,A))}),o})}});export{y as default};