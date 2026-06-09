import{$ as e,Ht as t,J as n,Jt as r,Q as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,tt as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g,n as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./createHomeSplitExamplePage-CJbW_xoB.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>p(()=>{let[e,t]=g(`useState:1:0`,()=>r([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return u(r=>{let p=e(`div`,r);c(p,`card bg-base-100 shadow`);let g=e(`div`,p);o(p,g),c(g,`card-body`);let y=e(`h2`,g);o(g,y),c(y,`text-2xl font-semibold mb-3`),o(y,l(`useState 数组示例`));let S=e(`div`,g);o(g,S),c(S,`flex gap-2 mb-2`);let C=e(`button`,S);o(S,C),c(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),n(C,`click`,b),o(C,l(`添加`));let w=e(`button`,S);o(S,w),a(()=>{c(w,String(`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`))}),n(w,`click`,()=>{v.length>0&&x()}),o(w,l(`删除最后一个`));let T=e(`ul`,g);o(g,T);let E=s(`rue:list:start`),D=s(`rue:list:end`);o(T,E),o(T,D);let O=new Map;a(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,n,r,s,c)=>{m(u(()=>{let n=i(),r=e(`li`,n);o(n,r),a(()=>{f(r,`key`,String(c))});let s=h(r);return o(r,s),a(()=>{d(s,t)}),n}),n,r)}})});let k=e(`p`,g);o(g,k),o(k,l(`长度：`));let A=s(`rue:slot:anchor`);return o(k,A),a(()=>{let e=v.length;t(()=>m(e,k,A))}),p})}});export{y as default};