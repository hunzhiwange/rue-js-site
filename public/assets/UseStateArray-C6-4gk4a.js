import{$ as e,J as t,Kt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,tt as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,n as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./createHomeSplitExamplePage-BB_cTfze.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>n(()=>{let[e,t]=g(`useState:1:0`,()=>p([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return u(n=>{let p=e(`div`,n);c(p,`card bg-base-100 shadow`);let g=e(`div`,p);a(p,g),c(g,`card-body`);let y=e(`h2`,g);a(g,y),c(y,`text-2xl font-semibold mb-3`),a(y,l(`useState 数组示例`));let S=e(`div`,g);a(g,S),c(S,`flex gap-2 mb-2`);let C=e(`button`,S);a(S,C),c(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),t(C,`click`,b),a(C,l(`添加`));let w=e(`button`,S);a(S,w),o(()=>{c(w,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),t(w,`click`,()=>{v.length>0&&x()}),a(w,l(`删除最后一个`));let T=e(`ul`,g);a(g,T);let E=s(`rue:list:start`),D=s(`rue:list:end`);a(T,E),a(T,D);let O=new Map;o(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,n,i,s,c)=>{m(u(()=>{let n=r(),i=e(`li`,n);a(n,i),o(()=>{f(i,`key`,String(c))});let s=h(i);return a(i,s),o(()=>{d(s,t)}),n}),n,i)}})});let k=e(`p`,g);a(g,k),a(k,l(`长度：`));let A=s(`rue:slot:anchor`);return a(k,A),o(()=>{let e=v.length;i(()=>m(e,k,A))}),p})}});export{y as default};