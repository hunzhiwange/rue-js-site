import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,pt as p,u as m,vt as h}from"./vapor-runtime-D3a-68js.js";import{a as g,n as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./createHomeSplitExamplePage-CLNmVfsf.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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

export default UseStateArrayDemo`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>l(()=>{let[e,t]=g(`useState:1:0`,()=>h([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return m(()=>{let l=n(`div`);t(l,`card bg-base-100 shadow`);let h=n(`div`);i(l,h),t(h,`card-body`);let g=n(`h2`);i(h,g),t(g,`text-2xl font-semibold mb-3`),i(g,r(`useState 数组示例`));let y=n(`div`);i(h,y),t(y,`flex gap-2 mb-2`);let S=n(`button`);i(y,S),t(S,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),f(S,`click`,b),i(S,r(`添加`));let C=n(`button`);i(y,C),u(()=>{t(C,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),f(C,`click`,()=>{v.length>0&&x()}),i(C,r(`删除最后一个`));let w=n(`ul`);i(h,w);let T=a(`rue:list:start`),E=a(`rue:list:end`);i(w,T),i(w,E);let D=new Map;u(()=>{D=_({items:v||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(t,r,a,l,f)=>{d(m(()=>{let r=e(),a=n(`li`);i(r,a),u(()=>{s(a,`key`,String(f))});let l=o(a);return i(a,l),u(()=>{c(l,t)}),r}),r,a)}})});let O=n(`p`);i(h,O),i(O,r(`长度：`));let k=a(`rue:slot:anchor`);return i(O,k),u(()=>{let e=v.length;p(()=>d(e,O,k))}),l})}});export{y as default};