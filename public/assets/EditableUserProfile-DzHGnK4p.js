import{Gt as e,H as t,Kt as n,Qt as r,Ut as i,V as a,Vt as o,Wt as s,Y as c,Yt as l,Zt as u,et as d,fn as f,gn as p,hn as m,in as h,mn as g,sn as _,u as v,yn as y}from"./rue-runtime-Cv6BZekS.js";import{t as b}from"./createHomeSplitExamplePage-DqLcVC_n.js";var x=e([`isEditing`],[!1]),S=e([`name`],[!1]),C=e([`age`],[!1]),w=e([`email`],[!1]),T=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-4">用户资料编辑</h2><!--rue:text-hole:0--></div></div>`),E=()=>({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1}),D=(e,t,a)=>{let[o]=d(`EditableUserProfileDemo:hook:0`,E);return c(()=>s(e=>{let t=T().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[1],c=a.parentNode;return i(c,a,()=>n(o,x)?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=m(`div`,e);t.setAttribute(`class`,`space-y-3`);let r=m(`p`,t);f(t,r),r.setAttribute(`class`,`flex items-center gap-2`);let i=m(`span`,r);f(r,i),f(i,p(`姓名:`));let a=m(`input`,r);f(r,a),a.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`);let s;h(()=>{let e=n(o,S),t=e==null?``:String(e);Object.is(s,t)||(s=t,a.value=t)});let c=e=>{let t=e=>{l(u(o))(`name`).value=e.target.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,c),_(()=>a.removeEventListener(`input`,c));let d=m(`p`,t);f(t,d),d.setAttribute(`class`,`flex items-center gap-2`);let g=m(`span`,d);f(d,g),f(g,p(`年龄:`));let y=m(`input`,d);f(d,y),y.setAttribute(`class`,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),y.setAttribute(`type`,`number`);let b;h(()=>{let e=n(o,C),t=e==null?``:String(e);Object.is(b,t)||(b=t,y.value=t)});let x=e=>{let t=e=>{l(u(o))(`age`).value=parseInt(e.target.value,10)||0};typeof t==`function`&&t(e)};y.addEventListener(`input`,x),_(()=>y.removeEventListener(`input`,x));let T=m(`p`,t);f(t,T),T.setAttribute(`class`,`flex items-center gap-2`);let E=m(`span`,T);f(T,E),f(E,p(`邮箱:`));let D=m(`input`,T);f(T,D),D.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`);let O;h(()=>{let e=n(o,w),t=e==null?``:String(e);Object.is(O,t)||(O=t,D.value=t)});let k=e=>{let t=e=>{l(u(o))(`email`).value=e.target.value};typeof t==`function`&&t(e)};D.addEventListener(`input`,k),_(()=>D.removeEventListener(`input`,k));let A=m(`button`,t);return f(t,A),A.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),_(v(e,A,`click`,()=>()=>{l(u(o))(`isEditing`).value=!1})),f(A,p(`保存`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=m(`div`,e);t.setAttribute(`class`,`space-y-2`);let i=m(`p`,t);f(t,i),f(i,p(`姓名: `));let a=p(``);f(i,a),r(a,()=>n(o,S));let s=m(`p`,t);f(t,s),f(s,p(`年龄: `));let c=p(``);f(s,c),r(c,()=>n(o,C));let d=m(`p`,t);f(t,d),f(d,p(`邮箱: `));let h=p(``);f(d,h),r(h,()=>n(o,w));let g=m(`button`,t);return f(t,g),g.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),_(v(e,g,`click`,()=>()=>{l(u(o))(`isEditing`).value=!0})),f(g,p(`编辑`)),[t,t]})}),[t,t]}))},O=`import { type FC, useState } from '@rue-js/rue'

interface User {
  name: string
  age: number
  email: string
  isEditing: boolean
}

const createUser = (): User => ({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
  isEditing: false,
})

const EditableUserProfileDemo: FC = () => {
  const [user] = useState(createUser)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-4">用户资料编辑</h2>
        {user.isEditing ? (
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span>姓名:</span>
              <input
                className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1"
                value={user.name}
                onInput={(event: any) => {
                  user.name = (event.target as HTMLInputElement).value
                }}
              />
            </p>
            <p className="flex items-center gap-2">
              <span>年龄:</span>
              <input
                className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1"
                type="number"
                value={user.age}
                onInput={(event: any) => {
                  user.age = parseInt((event.target as HTMLInputElement).value, 10) || 0
                }}
              />
            </p>
            <p className="flex items-center gap-2">
              <span>邮箱:</span>
              <input
                className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1"
                value={user.email}
                onInput={(event: any) => {
                  user.email = (event.target as HTMLInputElement).value
                }}
              />
            </p>
            <button
              className="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200"
              onClick={() => {
                user.isEditing = false
              }}
            >
              保存
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p>姓名: {user.name}</p>
            <p>年龄: {user.age}</p>
            <p>邮箱: {user.email}</p>
            <button
              className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
              onClick={() => {
                user.isEditing = true
              }}
            >
              编辑
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditableUserProfileDemo
`,k=(e,n,r)=>a(b,()=>({options:{title:`用户资料编辑`,source:O},children:(e,n,r)=>{let i=()=>s(e=>{let n=g();t(n,D,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():o(e,r,i)}}));export{k as default};