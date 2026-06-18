import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,Z as s,at as c,ft as l,l as u,q as d,qt as f,s as p,st as m,wt as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./createHomeSplitExamplePage-C98rg19g.js";var v=()=>g(`reactive:1:0`,()=>h({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:h}=g(`useSetup:0:0`,()=>f(()=>{let[e]=g(`useState:1:1`,()=>r(v));return{user:e}}));return u(r=>{let f=i(`div`,r);m(f,`card bg-base-100 shadow`);let g=i(`div`,f);n(f,g),m(g,`card-body`);let _=i(`h2`,g);n(g,_),m(_,`text-2xl font-semibold mb-4`),n(_,e(`用户资料编辑`));let v=a(`rue:slot:anchor`);return n(g,v),o(()=>{let r=h.isEditing?u(()=>{let t=s(),r=i(`div`,t);n(t,r),m(r,`space-y-3`);let a=i(`p`,r);n(r,a),m(a,`flex items-center gap-2`);let u=i(`span`,a);n(a,u),n(u,e(`姓名:`));let f=i(`input`,a);n(a,f),m(f,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),o(()=>{l(f,h.name)}),d(f,`input`,e=>{h.name=e.target.value});let p=i(`p`,r);n(r,p),m(p,`flex items-center gap-2`);let g=i(`span`,p);n(p,g),n(g,e(`年龄:`));let _=i(`input`,p);n(p,_),m(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),c(_,`type`,`number`),o(()=>{l(_,h.age)}),d(_,`input`,e=>{h.age=parseInt(e.target.value,10)||0});let v=i(`p`,r);n(r,v),m(v,`flex items-center gap-2`);let y=i(`span`,v);n(v,y),n(y,e(`邮箱:`));let b=i(`input`,v);n(v,b),m(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),o(()=>{l(b,h.email)}),d(b,`input`,e=>{h.email=e.target.value});let x=i(`button`,r);return n(r,x),m(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),d(x,`click`,()=>{h.isEditing=!1}),n(x,e(`保存`)),t}):u(()=>{let r=s(),c=i(`div`,r);n(r,c),m(c,`space-y-2`);let l=i(`p`,c);n(c,l),n(l,e(`姓名: `));let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let e=h.name;t(()=>p(e,l,u))});let f=i(`p`,c);n(c,f),n(f,e(`年龄: `));let g=a(`rue:slot:anchor`);n(f,g),o(()=>{let e=h.age;t(()=>p(e,f,g))});let _=i(`p`,c);n(c,_),n(_,e(`邮箱: `));let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let e=h.email;t(()=>p(e,_,v))});let y=i(`button`,c);return n(c,y),m(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),d(y,`click`,()=>{h.isEditing=!0}),n(y,e(`编辑`)),r});t(()=>p(r,g,v))}),f})}});export{y as default};