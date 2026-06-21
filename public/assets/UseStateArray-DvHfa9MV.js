import{$t as e,Q as t,Z as n,an as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,tt as p,vt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>o(()=>{let[e,t]=g(`useState:1:0`,()=>r([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return c(r=>{let o=u(`div`,r);i(o,`card bg-base-100 shadow`);let g=u(`div`,o);t(o,g),i(g,`card-body`);let y=u(`h2`,g);t(g,y),i(y,`text-2xl font-semibold mb-3`),t(y,f(`useState 数组示例`));let S=u(`div`,g);t(g,S),i(S,`flex gap-2 mb-2`);let C=u(`button`,S);t(S,C),i(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),n(C,`click`,b),t(C,f(`添加`));let w=u(`button`,S);t(S,w),h(()=>{i(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),n(w,`click`,()=>{v.length>0&&x()}),t(w,f(`删除最后一个`));let T=u(`ul`,g);t(g,T);let E=a(`rue:list:start`),D=a(`rue:list:end`);t(T,E),t(T,D);let O=new Map;h(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(e,n,r,i,a)=>{d(c(()=>{let n=p(),r=u(`li`,n);t(n,r),h(()=>{l(r,`key`,String(a))});let i=s(r);return t(r,i),h(()=>{m(i,e)}),n}),n,r)}})});let k=u(`p`,g);t(g,k),t(k,f(`长度：`));let A=a(`rue:slot:anchor`);return t(k,A),h(()=>{let t=v.length;e(()=>d(t,k,A))}),o})}});export{y as default};