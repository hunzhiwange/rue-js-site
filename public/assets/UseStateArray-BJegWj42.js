import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,Z as l,at as u,l as d,s as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./createHomeSplitExamplePage-BftZ6-s2.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>p(()=>{let[e,t]=g(`useState:1:0`,()=>o([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return d(o=>{let p=c(`div`,o);e(p,`card bg-base-100 shadow`);let g=c(`div`,p);t(p,g),e(g,`card-body`);let y=c(`h2`,g);t(g,y),e(y,`text-2xl font-semibold mb-3`),t(y,r(`useState 数组示例`));let S=c(`div`,g);t(g,S),e(S,`flex gap-2 mb-2`);let C=c(`button`,S);t(S,C),e(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),h(C,`click`,b),t(C,r(`添加`));let w=c(`button`,S);t(S,w),n(()=>{e(w,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),h(w,`click`,()=>{v.length>0&&x()}),t(w,r(`删除最后一个`));let T=c(`ul`,g);t(g,T);let E=i(`rue:list:start`),D=i(`rue:list:end`);t(T,E),t(T,D);let O=new Map;n(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,r,i,o,p)=>{f(d(()=>{let r=s(),i=c(`li`,r);t(r,i),n(()=>{l(i,`key`,String(p))});let o=a(i);return t(i,o),n(()=>{u(o,e)}),r}),r,i)}})});let k=c(`p`,g);t(g,k),t(k,r(`长度：`));let A=i(`rue:slot:anchor`);return t(k,A),n(()=>{let e=v.length;m(()=>f(e,k,A))}),p})}});export{y as default};