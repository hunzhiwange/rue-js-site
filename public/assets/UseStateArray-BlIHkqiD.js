import{Q as e,Vt as t,Z as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,sn as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var y=v({title:`useState 数组`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{list:v,setList:y,addItem:b,removeLast:x}=g(`useSetup:0:0`,()=>u(()=>{let[e,t]=g(`useState:1:0`,()=>p([`苹果`,`香蕉`]));return{list:e,setList:t,addItem:()=>{t(e=>[...e,`项目${e.length+1}`])},removeLast:()=>{t(e=>e.slice(0,-1))}}}));return s(u=>{let p=f(`div`,u);d(p,`card bg-base-100 shadow`);let g=f(`div`,p);e(p,g),d(g,`card-body`);let y=f(`h2`,g);e(g,y),d(y,`text-2xl font-semibold mb-3`),e(y,o(`useState 数组示例`));let S=f(`div`,g);e(g,S),d(S,`flex gap-2 mb-2`);let C=f(`button`,S);e(S,C),d(C,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`),n(C,`click`,b),e(C,o(`添加`));let w=f(`button`,S);e(S,w),t(()=>{d(w,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${v.length===0?`opacity-60 cursor-not-allowed`:``}`)}),n(w,`click`,()=>{v.length>0&&x()}),e(w,o(`删除最后一个`));let T=f(`ul`,g);e(g,T);let E=h(`rue:list:start`),D=h(`rue:list:end`);e(T,E),e(T,D);let O=new Map;t(()=>{O=_({items:v||[],getKey:(e,t)=>t,elements:O,parent:T,before:D,singleRoot:!0,start:E,renderItem:(n,o,u,d,p)=>{l(s(()=>{let o=c(),s=f(`li`,o);e(o,s),t(()=>{a(s,`key`,String(p))});let l=r(s);return e(s,l),t(()=>{i(l,n)}),o}),o,u)}})});let k=f(`p`,g);e(g,k),e(k,o(`长度：`));let A=h(`rue:slot:anchor`);return e(k,A),t(()=>{let e=v.length;m(()=>l(e,k,A))}),p})}});export{y as default};