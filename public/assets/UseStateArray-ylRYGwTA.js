import{$ as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,nt as f,o as p,st as m,tt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./createHomeSplitExamplePage-Br1mQ323.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>s(()=>{let[e,t]=g(`useState:1:0`,()=>a([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return u(a=>{let s=c(`div`,a);d(s,`card bg-base-100 shadow`);let g=c(`div`,s);i(s,g),d(g,`card-body`);let y=c(`h2`,g);i(g,y),d(y,`text-2xl font-semibold mb-3`),i(y,h(`useState 数组示例`));let S=c(`div`,g);i(g,S),d(S,`flex gap-2 mb-2`);let C=c(`button`,S);i(S,C),d(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),o(C,`click`,b),i(C,h(`添加`));let w=c(`button`,S);i(S,w),n(()=>{d(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),o(w,`click`,()=>{v.length>0&&x()}),i(w,h(`删除最后一个`));let T=c(`ul`,g);i(g,T);let E=t(`rue:list:start`),D=t(`rue:list:end`);i(T,E),i(T,D);let O=new Map;n(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(t,r,a,o,s)=>{p(u(()=>{let r=e(),a=c(`li`,r);i(r,a),n(()=>{m(a,`key`,String(s))});let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})});let k=c(`p`,g);i(g,k),i(k,h(`长度：`));let A=t(`rue:slot:anchor`);return i(k,A),n(()=>{let e=v.length;r(()=>p(e,k,A))}),s})}});export{y as default};