import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,Z as c,_t as l,at as u,d,ht as f,l as p,mt as m,ut as h}from"./vapor-runtime-Bp8DIxJg.js";import{a as g}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as _}from"./createHomeSplitExamplePage-B5aM8M8p.js";var v=()=>g(`reactive:1:0`,()=>u({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default EditableUserProfileDemo`,Demo:()=>{let{user:u}=g(`useSetup:0:0`,()=>m(()=>{let[e]=g(`useState:1:1`,()=>f(v));return{user:e}}));return d(f=>{let m=r(`div`,f);n(m,`card bg-base-100 shadow`);let g=r(`div`,m);a(m,g),n(g,`card-body`);let _=r(`h2`,g);a(g,_),n(_,`text-2xl font-semibold mb-4`),a(_,o(`用户资料编辑`));let v=e(`rue:slot:anchor`);return a(g,v),l(()=>{let f=u.isEditing?d(()=>{let e=t(),d=r(`div`,e);a(e,d),n(d,`space-y-3`);let f=r(`p`,d);a(d,f),n(f,`flex items-center gap-2`);let p=r(`span`,f);a(f,p),a(p,o(`姓名:`));let m=r(`input`,f);a(f,m),n(m,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),l(()=>{c(m,u.name)}),i(m,`input`,e=>{u.name=e.target.value});let h=r(`p`,d);a(d,h),n(h,`flex items-center gap-2`);let g=r(`span`,h);a(h,g),a(g,o(`年龄:`));let _=r(`input`,h);a(h,_),n(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(_,`type`,`number`),l(()=>{c(_,u.age)}),i(_,`input`,e=>{u.age=parseInt(e.target.value,10)||0});let v=r(`p`,d);a(d,v),n(v,`flex items-center gap-2`);let y=r(`span`,v);a(v,y),a(y,o(`邮箱:`));let b=r(`input`,v);a(v,b),n(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),l(()=>{c(b,u.email)}),i(b,`input`,e=>{u.email=e.target.value});let x=r(`button`,d);return a(d,x),n(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),i(x,`click`,()=>{u.isEditing=!1}),a(x,o(`保存`)),e}):d(()=>{let s=t(),c=r(`div`,s);a(s,c),n(c,`space-y-2`);let d=r(`p`,c);a(c,d),a(d,o(`姓名: `));let f=e(`rue:slot:anchor`);a(d,f),l(()=>{let e=u.name;h(()=>p(e,d,f))});let m=r(`p`,c);a(c,m),a(m,o(`年龄: `));let g=e(`rue:slot:anchor`);a(m,g),l(()=>{let e=u.age;h(()=>p(e,m,g))});let _=r(`p`,c);a(c,_),a(_,o(`邮箱: `));let v=e(`rue:slot:anchor`);a(_,v),l(()=>{let e=u.email;h(()=>p(e,_,v))});let y=r(`button`,c);return a(c,y),n(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),i(y,`click`,()=>{u.isEditing=!0}),a(y,o(`编辑`)),s});h(()=>p(f,g,v))}),m})}});export{y as default};