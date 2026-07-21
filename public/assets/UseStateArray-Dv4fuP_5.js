import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pt as l,st as u,tn as d,vn as f,wn as p}from"./context-8lXZvIn-.js";import{l as m,o as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>e(()=>{let[e,t]=g(`useState:1:0`,()=>p([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return m(e=>{let p=l(`div`,e);r(p,`card bg-base-100 shadow`);let g=l(`div`,p);u(p,g),r(g,`card-body`);let y=l(`h2`,g);u(g,y),r(y,`text-2xl font-semibold mb-3`),u(y,s(`useState 数组示例`));let S=l(`div`,g);u(g,S),r(S,`flex gap-2 mb-2`);let C=l(`button`,S);u(S,C),r(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),c(C,`click`,b),u(C,s(`添加`));let w=l(`button`,S);u(S,w),d(()=>{r(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),c(w,`click`,()=>{v.length>0&&x()}),u(w,s(`删除最后一个`));let T=l(`ul`,g);u(g,T);let E=i(`rue:list:start`),D=i(`rue:list:end`);u(T,E),u(T,D);let O=new Map;d(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,r,i,s,c)=>{h(m(()=>{let r=a(),i=l(`li`,r);u(r,i),d(()=>{t(i,`key`,String(c))});let s=o(i);return u(i,s),d(()=>{n(s,e)}),r}),r,i)}})});let k=l(`p`,g);u(g,k),u(k,s(`长度：`));let A=i(`rue:slot:anchor`);return u(k,A),d(()=>{let e=v.length;f(()=>h(e,k,A))}),p})}});export{y as default};