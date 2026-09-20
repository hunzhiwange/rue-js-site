import{F as e,Gt as t,Kt as n,P as r,Qt as i,Ut as a,Vt as o,Wt as s,Yt as c,Zt as l,fn as u,gn as d,hn as f,in as p,mn as m,nt as h,sn as g,st as _,u as v,yn as y}from"./rue-runtime-BWbIfNT8.js";import{t as b}from"./createHomeSplitExamplePage-Cjn7V321.js";var x=t([`isEditing`],[!1]),S=t([`name`],[!1]),C=t([`age`],[!1]),w=t([`email`],[!1]),T=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-4">用户资料编辑</h2><!--rue:text-hole:0--></div></div>`),E=()=>({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1}),D=(e,t,r)=>{let[o]=_(`EditableUserProfileDemo:hook:0`,E);return h(()=>s(e=>{let t=T().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1],m=r.parentNode;return a(m,r,()=>n(o,x)?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=f(`div`,e);t.setAttribute(`class`,`space-y-3`);let r=f(`p`,t);u(t,r),r.setAttribute(`class`,`flex items-center gap-2`);let i=f(`span`,r);u(r,i),u(i,d(`姓名:`));let a=f(`input`,r);u(r,a),a.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`);let s;p(()=>{let e=n(o,S),t=e==null?``:String(e);Object.is(s,t)||(s=t,a.value=t)});let m=e=>{let t=e=>{c(l(o))(`name`).value=e.target.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,m),g(()=>a.removeEventListener(`input`,m));let h=f(`p`,t);u(t,h),h.setAttribute(`class`,`flex items-center gap-2`);let _=f(`span`,h);u(h,_),u(_,d(`年龄:`));let y=f(`input`,h);u(h,y),y.setAttribute(`class`,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),y.setAttribute(`type`,`number`);let b;p(()=>{let e=n(o,C),t=e==null?``:String(e);Object.is(b,t)||(b=t,y.value=t)});let x=e=>{let t=e=>{c(l(o))(`age`).value=parseInt(e.target.value,10)||0};typeof t==`function`&&t(e)};y.addEventListener(`input`,x),g(()=>y.removeEventListener(`input`,x));let T=f(`p`,t);u(t,T),T.setAttribute(`class`,`flex items-center gap-2`);let E=f(`span`,T);u(T,E),u(E,d(`邮箱:`));let D=f(`input`,T);u(T,D),D.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`);let O;p(()=>{let e=n(o,w),t=e==null?``:String(e);Object.is(O,t)||(O=t,D.value=t)});let k=e=>{let t=e=>{c(l(o))(`email`).value=e.target.value};typeof t==`function`&&t(e)};D.addEventListener(`input`,k),g(()=>D.removeEventListener(`input`,k));let A=f(`button`,t);return u(t,A),A.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),g(v(e,A,`click`,()=>()=>{c(l(o))(`isEditing`).value=!1})),u(A,d(`保存`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=f(`div`,e);t.setAttribute(`class`,`space-y-2`);let r=f(`p`,t);u(t,r),u(r,d(`姓名: `));let a=d(``);u(r,a),i(a,()=>n(o,S));let s=f(`p`,t);u(t,s),u(s,d(`年龄: `));let p=d(``);u(s,p),i(p,()=>n(o,C));let m=f(`p`,t);u(t,m),u(m,d(`邮箱: `));let h=d(``);u(m,h),i(h,()=>n(o,w));let _=f(`button`,t);return u(t,_),_.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),g(v(e,_,`click`,()=>()=>{c(l(o))(`isEditing`).value=!0})),u(_,d(`编辑`)),[t,t]})}),[t,t]}))},O=`import { type FC, useState } from '@rue-js/rue'

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
`,k=(t,n,i)=>r(b,()=>({options:{title:`用户资料编辑`,source:O},children:(t,n,r)=>{let i=()=>s(t=>{let n=m();e(n,D,()=>({}));let r=d(``),i=d(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():o(t,r,i)}}));export{k as default};