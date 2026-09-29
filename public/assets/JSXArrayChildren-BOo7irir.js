import{Bt as e,F as t,Gt as n,Jt as r,Kt as i,P as a,Qt as o,V as s,Vt as c,Wt as l,Xt as u,Yt as d,Zt as f,f as p,fn as m,g as h,gn as g,hn as _,m as v,mn as y,pn as b,qt as x,sn as S,st as C,u as w,yn as T}from"./rue-runtime-BWbIfNT8.js";import{t as E}from"./createHomeSplitExamplePage-DUBaJvM7.js";var D=n([`showDetails`],[!1]),O=n([`items`,`length`],[!1,!1]),k=n([`count`],[!1]),A=n([`items`],[!1]),j=T(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">JSX 数组子节点</h2><p>固定形状的数组和嵌套数组可以直接放在 JSX 子节点位置。</p><div class="flex gap-2"><button class="btn btn-primary">计数 +1</button><button class="btn">切换详情</button><button class="btn">添加列表项</button></div><div class="rounded-lg border p-3"><!--rue:text-hole:0--></div><ul class="list-disc pl-6"><!--rue:text-hole:1--></ul></div></div>`),M=(t,n,a)=>{let{_$state:E}=r(`useSetup:0:0`,()=>{let[e]=C(`plan:83:hook:0`,()=>({count:0,showDetails:!0,items:[{id:1,text:`第一项`},{id:2,text:`第二项`}]}));return{_$state:e}});return l(t=>{let n=j().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2].childNodes[0],a=n.childNodes[0].childNodes[2].childNodes[1],C=n.childNodes[0].childNodes[2].childNodes[2],M=n.childNodes[0].childNodes[3].childNodes[0],N=M.parentNode,P=n.childNodes[0].childNodes[4].childNodes[0],F=P.parentNode;return r.setAttribute(`class`,`btn btn-primary`),S(w(t,r,`click`,()=>()=>{d(f(E))(`count`).value+=1})),a.setAttribute(`class`,`btn`),S(w(t,a,`click`,()=>()=>{d(f(E))(`showDetails`).value=!i(E,D)})),C.setAttribute(`class`,`btn`),S(w(t,C,`click`,()=>()=>{u(d(f(E))(`items`),`push`)({id:Date.now(),text:`新增第 ${i(E,O)+1} 项`})})),e({parent:N,before:M},()=>(t,n,r)=>c(t,r,()=>l(t=>{let n=y(),r=b(`rue:slot:anchor`);m(n,r),e({parent:n,before:r},()=>(e,t,n)=>c(e,n,()=>l(e=>{let t=_(`p`,e);m(t,g(`当前计数：`));let n=g(``);return m(t,n),o(n,()=>i(E,k)),[t,t]})),()=>({}));let a=b(`rue:slot:anchor`);m(n,a),e({parent:n,before:a},()=>i(E,D)?(e,t,n)=>c(e,n,()=>s(e=>{let t=_(`p`,e);return m(t,g(`详情显示中`)),[t,t]})):(e,t,n)=>{let r=()=>s(e=>{let t=g(``);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let u=b(`rue:slot:anchor`);m(n,u),e({parent:n,before:u},()=>i(E,D)?(e,t,n)=>c(e,n,()=>s(e=>{let t=_(`p`,e);return m(t,g(`条件数组项`)),[t,t]})):(e,t,n)=>{let r=()=>s(e=>{let t=g(``);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let d=b(`rue:slot:anchor`);m(n,d),e({parent:n,before:d},()=>(e,t,n)=>{let r=()=>s(e=>{let t=g(0);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let f=g(``),p=g(``);return n.insertBefore(f,n.firstChild),n.appendChild(p),[n.firstChild,n.lastChild]})),()=>({})),e({parent:F,before:P},()=>(t,n,r)=>c(t,r,()=>l(t=>{let n=y(),r=T(`<li>rue:row-text</li>`),a=b(`rue:list:end`);m(n,a);let o=[];x(()=>{let e=i(E,A)||[];o=h(a.parentNode,a,o,e,(e,t)=>e.id,(e,t,n)=>{let i=e,a;return v(e=>{let t=r().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.parentNode;let o=i.text==null||typeof i.text==`boolean`?``:String(i.text);return n.textContent=o,a=()=>{{let e=i.text==null||typeof i.text==`boolean`?``:String(i.text);Object.is(o,e)||(n.textContent=e,o=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,n)},!1,!0)}),S(()=>p(o));let l=b(`rue:slot:anchor`);m(n,l),e({parent:n,before:l},()=>(e,t,n)=>c(e,n,()=>s(e=>{let t=_(`li`,e);return m(t,g(`列表结尾`)),[t,t]})),()=>({}));let u=g(``),d=g(``);return n.insertBefore(u,n.firstChild),n.appendChild(d),[n.firstChild,n.lastChild]})),()=>({})),[n,n]})},N=`import { type FC, useState } from '@rue-js/rue'

const JSXArrayChildrenDemo: FC = () => {
  const [state] = useState(() => ({
    count: 0,
    showDetails: true,
    items: [
      { id: 1, text: '第一项' },
      { id: 2, text: '第二项' },
    ],
  }))

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <h2 className="text-2xl font-semibold">JSX 数组子节点</h2>
        <p>固定形状的数组和嵌套数组可以直接放在 JSX 子节点位置。</p>

        <div className="flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              state.count += 1
            }}
          >
            计数 +1
          </button>
          <button
            className="btn"
            onClick={() => {
              state.showDetails = !state.showDetails
            }}
          >
            切换详情
          </button>
          <button
            className="btn"
            onClick={() => {
              state.items.push({ id: Date.now(), text: \`新增第 \${state.items.length + 1} 项\` })
            }}
          >
            添加列表项
          </button>
        </div>

        <div className="rounded-lg border p-3">
          {[
            <p key="count">当前计数：{state.count}</p>,
            [
              state.showDetails && <p key="detail">详情显示中</p>,
              state.showDetails ? <p key="branch">条件数组项</p> : null,
            ],
            0,
          ]}
        </div>

        <ul className="list-disc pl-6">
          {[
            state.items.map(item => <li key={item.id}>{item.text}</li>),
            <li key="footer">列表结尾</li>,
          ]}
        </ul>
      </div>
    </div>
  )
}

export default JSXArrayChildrenDemo
`,P=(e,n,r)=>a(E,()=>({options:{title:`JSX 数组子节点`,source:N},children:(e,n,r)=>{let i=()=>l(e=>{let n=y();t(n,M,()=>({}));let r=g(``),i=g(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():c(e,r,i)}}));export{P as default};