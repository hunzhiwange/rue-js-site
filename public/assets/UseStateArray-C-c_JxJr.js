import{F as e,Gt as t,Kt as n,P as r,Qt as i,Vt as a,W as o,Wt as s,X as c,Y as l,f as u,fn as d,gn as f,h as p,hn as m,in as h,mn as g,nt as _,p as v,qt as y,sn as b,st as x,u as S,yn as C}from"./rue-runtime-BWbIfNT8.js";import{t as w}from"./createHomeSplitExamplePage-Cjn7V321.js";var T=t([`length`],[!1]),E=C(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">useState 数组示例</h2><div class="flex gap-2 mb-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">添加</button><button>删除最后一个</button></div><ul><!--rue:text-hole:0--></ul><p>长度：<!--rue:text-hole:1--></p></div></div>`),D=(e,t,r)=>{let[g,C]=x(`UseStateArrayDemo:hook:0`,[`苹果`,`香蕉`]),w=()=>{C(e=>[...e,`项目${e.length+1}`])},D=()=>{C(e=>e.slice(0,-1))};return _(()=>s(e=>{let t=E().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[0],s=t.childNodes[0].childNodes[1].childNodes[1],_=t.childNodes[0].childNodes[2].childNodes[0],x=_.parentNode,C=t.childNodes[0].childNodes[3].childNodes[1],O=C.parentNode;r.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white`);let k=e=>{let t=w;typeof t==`function`&&t(e)};r.addEventListener(`click`,k),b(()=>r.removeEventListener(`click`,k));let A;h(()=>{let e=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white ${n(g,T)===0?`opacity-60 cursor-not-allowed`:``}`,t=e===!1||e==null?``:String(e);Object.is(A,t)||(A=t,s.setAttribute(`class`,t))}),b(S(e,s,`click`,()=>()=>{n(g,T)>0&&D()}));let j=[];y(()=>{let e=g.get()||[];j=p(x,_,j,e,(e,t)=>t,(e,t)=>{let n=o(e);return v((e,t,r)=>{let i=()=>l(e=>{let t=m(`li`,e),r=f(``);return d(t,r),c(r,()=>n.get()),[t,t]});return e==null?i():a(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),b(()=>u(j));let M=f(``);return O.insertBefore(M,C),O.removeChild(C),i(M,()=>n(g,T)),[t,t]}))},O=`import { type FC, useState } from '@rue-js/rue'

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
`,k=(t,n,i)=>r(w,()=>({options:{title:`useState 数组`,source:O},children:(t,n,r)=>{let i=()=>s(t=>{let n=g();e(n,D,()=>({}));let r=f(``),i=f(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():a(t,r,i)}}));export{k as default};