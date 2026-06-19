import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,et as l,l as u,lt as d,mt as f,o as p,st as m,tt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./createHomeSplitExamplePage-Br1mQ323.js";var v=()=>g(`reactive:1:0`,()=>t({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:t}=g(`useSetup:0:0`,()=>c(()=>{let[e]=g(`useState:1:1`,()=>o(v));return{user:e}}));return u(o=>{let c=l(`div`,o);d(c,`card bg-base-100 shadow`);let g=l(`div`,c);a(c,g),d(g,`card-body`);let _=l(`h2`,g);a(g,_),d(_,`text-2xl font-semibold mb-4`),a(_,h(`用户资料编辑`));let v=n(`rue:slot:anchor`);return a(g,v),r(()=>{let o=t.isEditing?u(()=>{let n=e(),i=l(`div`,n);a(n,i),d(i,`space-y-3`);let o=l(`p`,i);a(i,o),d(o,`flex items-center gap-2`);let c=l(`span`,o);a(o,c),a(c,h(`姓名:`));let u=l(`input`,o);a(o,u),d(u,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),r(()=>{f(u,t.name)}),s(u,`input`,e=>{t.name=e.target.value});let p=l(`p`,i);a(i,p),d(p,`flex items-center gap-2`);let g=l(`span`,p);a(p,g),a(g,h(`年龄:`));let _=l(`input`,p);a(p,_),d(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),m(_,`type`,`number`),r(()=>{f(_,t.age)}),s(_,`input`,e=>{t.age=parseInt(e.target.value,10)||0});let v=l(`p`,i);a(i,v),d(v,`flex items-center gap-2`);let y=l(`span`,v);a(v,y),a(y,h(`邮箱:`));let b=l(`input`,v);a(v,b),d(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),r(()=>{f(b,t.email)}),s(b,`input`,e=>{t.email=e.target.value});let x=l(`button`,i);return a(i,x),d(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),s(x,`click`,()=>{t.isEditing=!1}),a(x,h(`保存`)),n}):u(()=>{let o=e(),c=l(`div`,o);a(o,c),d(c,`space-y-2`);let u=l(`p`,c);a(c,u),a(u,h(`姓名: `));let f=n(`rue:slot:anchor`);a(u,f),r(()=>{let e=t.name;i(()=>p(e,u,f))});let m=l(`p`,c);a(c,m),a(m,h(`年龄: `));let g=n(`rue:slot:anchor`);a(m,g),r(()=>{let e=t.age;i(()=>p(e,m,g))});let _=l(`p`,c);a(c,_),a(_,h(`邮箱: `));let v=n(`rue:slot:anchor`);a(_,v),r(()=>{let e=t.email;i(()=>p(e,_,v))});let y=l(`button`,c);return a(c,y),d(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),s(y,`click`,()=>{t.isEditing=!0}),a(y,h(`编辑`)),o});i(()=>p(o,g,v))}),c})}});export{y as default};