import{Dn as e,Et as t,L as n,Lt as r,Mt as i,X as a,Y as o,_n as s,fn as c,ft as l,gn as u,hn as d,ht as f,it as p,jt as m,kn as h,nn as g,nt as _,q as v,qt as y,rt as b,tt as x,wn as S,z as C}from"./rue-runtime-CwEGJ854.js";import{t as w}from"./createHomeSplitExamplePage-DuLZTUZH.js";var T=s(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-4">用户资料编辑</h2><!--rue:text-hole:0--></div></div>`),E=()=>y(`reactive:1:0`,()=>g({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),D=w({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

interface User {
  name: string
  age: number
  email: string
  isEditing: boolean
}

const createUser = () =>
  reactive<User>({
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
`,Demo:()=>{let[s]=m(`EditableUserProfileDemo:hook:0`,E);return i(()=>v(f(()=>{let i=_(),m=T().content.cloneNode(!0),g=m.firstChild.childNodes[0].childNodes[1],v=g.parentNode;return i.appendChild(m),S(()=>{let i=s.isEditing?t(Object.assign(t=>{let n=d(`div`,t);n.className=`space-y-3`;let r=d(`p`,n);c(n,r),r.className=`flex items-center gap-2`;let i=d(`span`,r);c(r,i),c(i,u(`姓名:`));let a=d(`input`,r);c(r,a),a.className=`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`;let o;S(()=>{let e=s.name,t=e==null?``:String(e);Object.is(o,t)||(o=t,l(a,t))});let f=e=>{let t=e=>{s.name=e.target.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,f),e(()=>a.removeEventListener(`input`,f));let p=d(`p`,n);c(n,p),p.className=`flex items-center gap-2`;let m=d(`span`,p);c(p,m),c(m,u(`年龄:`));let h=d(`input`,p);c(p,h),h.className=`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`,h.setAttribute(`type`,`number`);let g;S(()=>{let e=s.age,t=e==null?``:String(e);Object.is(g,t)||(g=t,l(h,t))});let _=e=>{let t=e=>{s.age=parseInt(e.target.value,10)||0};typeof t==`function`&&t(e)};h.addEventListener(`input`,_),e(()=>h.removeEventListener(`input`,_));let v=d(`p`,n);c(n,v),v.className=`flex items-center gap-2`;let y=d(`span`,v);c(v,y),c(y,u(`邮箱:`));let b=d(`input`,v);c(v,b),b.className=`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`;let x;S(()=>{let e=s.email,t=e==null?``:String(e);Object.is(x,t)||(x=t,l(b,t))});let C=e=>{let t=e=>{s.email=e.target.value};typeof t==`function`&&t(e)};b.addEventListener(`input`,C),e(()=>b.removeEventListener(`input`,C));let w=d(`button`,n);c(n,w),w.className=`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`;let T=e=>{let t=()=>{s.isEditing=!1};typeof t==`function`&&t(e)};return w.addEventListener(`click`,T),e(()=>w.removeEventListener(`click`,T)),c(w,u(`保存`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):f(()=>{let e=_(),t=b(`div`,e);a(e,t),n(t,`space-y-2`);let i=b(`p`,t);a(t,i),a(i,p(`姓名: `));let c=x(`rue:slot:anchor`);a(i,c),S(()=>{let e=s.name;h(()=>o(e,i,c))});let l=b(`p`,t);a(t,l),a(l,p(`年龄: `));let u=x(`rue:slot:anchor`);a(l,u),S(()=>{let e=s.age;h(()=>o(e,l,u))});let d=b(`p`,t);a(t,d),a(d,p(`邮箱: `));let f=x(`rue:slot:anchor`);a(d,f),S(()=>{let e=s.email;h(()=>o(e,d,f))});let m=b(`button`,t);a(t,m),n(m,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let g=e=>{let t=()=>{s.isEditing=!0};typeof t==`function`&&t(e)};return m.addEventListener(`click`,g),r(()=>m.removeEventListener(`click`,g)),a(m,p(`编辑`)),e},!0);h(()=>o(i,v,g))}),i},!0),e=>C(()=>{})))}});export{D as default};