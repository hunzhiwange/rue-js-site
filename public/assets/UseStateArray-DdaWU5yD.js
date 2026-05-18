import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,gt as d,ht as f,l as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./createHomeSplitExamplePage-2wtBgDCk.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>f(()=>{let[e,t]=g(`useState:1:0`,()=>d([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return l(d=>{let f=r(`div`,d);n(f,`card bg-base-100 shadow`);let g=r(`div`,f);a(f,g),n(g,`card-body`);let y=r(`h2`,g);a(g,y),n(y,`text-2xl font-semibold mb-3`),a(y,s(`useState 数组示例`));let S=r(`div`,g);a(g,S),n(S,`flex gap-2 mb-2`);let C=r(`button`,S);a(S,C),n(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),i(C,`click`,b),a(C,s(`添加`));let w=r(`button`,S);a(S,w),m(()=>{n(w,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),i(w,`click`,()=>{v.length>0&&x()}),a(w,s(`删除最后一个`));let T=r(`ul`,g);a(g,T);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;m(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,n,i,s,u)=>{p(l(()=>{let n=t(),i=r(`li`,n);a(n,i),m(()=>{c(i,`key`,String(u))});let s=h(i);return a(i,s),m(()=>{o(s,e)}),n}),n,i)}})});let k=r(`p`,g);a(g,k),a(k,s(`长度：`));let A=e(`rue:slot:anchor`);return a(k,A),m(()=>{let e=v.length;u(()=>p(e,k,A))}),f})}});export{y as default};