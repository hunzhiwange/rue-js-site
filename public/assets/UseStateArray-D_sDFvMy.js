import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,d as l,kt as u,l as d,q as f,st as p,tt as m,xt as h}from"./vapor-runtime-EUvELKQT.js";import{a as g,n as _}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as v}from"./createHomeSplitExamplePage-BuifU8mn.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>n(()=>{let[e,n]=g(`useState:1:0`,()=>t([`苹果`,`香蕉`]));return{list:e,setList:n,addItem:()=>{n(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{n(e=>e.slice(0,-1))}}}));return l(t=>{let n=o(`div`,t);m(n,`card bg-base-100 shadow`);let g=o(`div`,n);i(n,g),m(g,`card-body`);let y=o(`h2`,g);i(g,y),m(y,`text-2xl font-semibold mb-3`),i(y,f(`useState 数组示例`));let S=o(`div`,g);i(g,S),m(S,`flex gap-2 mb-2`);let C=o(`button`,S);i(S,C),m(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),s(C,`click`,b),i(C,f(`添加`));let w=o(`button`,S);i(S,w),u(()=>{m(w,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),s(w,`click`,()=>{v.length>0&&x()}),i(w,f(`删除最后一个`));let T=o(`ul`,g);i(g,T);let E=c(`rue:list:start`),D=c(`rue:list:end`);i(T,E),i(T,D);let O=new Map;u(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,n,s,c,f)=>{d(l(()=>{let n=r(),s=o(`li`,n);i(n,s),u(()=>{e(s,`key`,String(f))});let c=a(s);return i(s,c),u(()=>{p(c,t)}),n}),n,s)}})});let k=o(`p`,g);i(g,k),i(k,f(`长度：`));let A=c(`rue:slot:anchor`);return i(k,A),u(()=>{let e=v.length;h(()=>d(e,k,A))}),n})}});export{y as default};