import{F as e,Gt as t,H as n,I as r,Kt as i,Qt as a,V as o,Vt as s,Wt as c,Y as l,et as u,f as d,fn as f,gn as p,h as m,hn as h,in as g,mn as _,p as v,qt as y,sn as b,u as x,vt as S,yn as C}from"./rue-runtime-Cv6BZekS.js";import{t as w}from"./createHomeSplitExamplePage-DqLcVC_n.js";var T=t([`length`],[!1]),E=C(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">useState 数组示例</h2><div class="flex gap-2 mb-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">添加</button><button>删除最后一个</button></div><ul><!--rue:text-hole:0--></ul><p>长度：<!--rue:text-hole:1--></p></div></div>`),D=(t,n,o)=>{let[_,C]=u(`UseStateArrayDemo:hook:0`,[`苹果`,`香蕉`]),w=()=>{C(e=>[...e,`项目${e.length+1}`])},D=()=>{C(e=>e.slice(0,-1))};return l(()=>c(t=>{let n=E().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[1].childNodes[0],c=n.childNodes[0].childNodes[1].childNodes[1],l=n.childNodes[0].childNodes[2].childNodes[0],u=l.parentNode,C=n.childNodes[0].childNodes[3].childNodes[1],O=C.parentNode;o.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`);let k=e=>{let t=w;typeof t==`function`&&t(e)};o.addEventListener(`click`,k),b(()=>o.removeEventListener(`click`,k));let A;g(()=>{let e=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${i(_,T)===0?`opacity-60 cursor-not-allowed`:``}`,t=e===!1||e==null?``:String(e);Object.is(A,t)||(A=t,c.setAttribute(`class`,t))}),b(x(t,c,`click`,()=>()=>{i(_,T)>0&&D()}));let j=[];y(()=>{let t=_.get()||[];j=m(u,l,j,t,(e,t)=>t,(t,n)=>{let i=S(t);return v((t,n,a)=>{let o=()=>e(e=>{let t=h(`li`,e),n=p(``);return f(t,n),r(n,()=>i.get()),[t,t]});return t==null?o():s(t,a,o)},(e,r)=>{t=e,n=r,i.set(e)},void 0)},!1,!1)}),b(()=>d(j));let M=p(``);return O.insertBefore(M,C),O.removeChild(C),a(M,()=>i(_,T)),[n,n]}))},O=`import { type FC, useState } from '@rue-js/rue'

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
`,k=(e,t,r)=>o(w,()=>({options:{title:`useState 数组`,source:O},children:(e,t,r)=>{let i=()=>c(e=>{let t=_();n(t,D,()=>({}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}}));export{k as default};