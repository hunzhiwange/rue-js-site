import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,Z as c,d as l,dt as u,gt as d,ht as f,l as p,ot as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./createHomeSplitExamplePage-2wtBgDCk.js";var v=()=>g(`reactive:1:0`,()=>m({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:m}=g(`useSetup:0:0`,()=>f(()=>{let[e]=g(`useState:1:1`,()=>d(v));return{user:e}}));return l(d=>{let f=r(`div`,d);n(f,`card bg-base-100 shadow`);let g=r(`div`,f);a(f,g),n(g,`card-body`);let _=r(`h2`,g);a(g,_),n(_,`text-2xl font-semibold mb-4`),a(_,o(`用户资料编辑`));let v=e(`rue:slot:anchor`);return a(g,v),h(()=>{let d=m.isEditing?l(()=>{let e=t(),l=r(`div`,e);a(e,l),n(l,`space-y-3`);let u=r(`p`,l);a(l,u),n(u,`flex items-center gap-2`);let d=r(`span`,u);a(u,d),a(d,o(`姓名:`));let f=r(`input`,u);a(u,f),n(f,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),h(()=>{c(f,m.name)}),i(f,`input`,e=>{m.name=e.target.value});let p=r(`p`,l);a(l,p),n(p,`flex items-center gap-2`);let g=r(`span`,p);a(p,g),a(g,o(`年龄:`));let _=r(`input`,p);a(p,_),n(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(_,`type`,`number`),h(()=>{c(_,m.age)}),i(_,`input`,e=>{m.age=parseInt(e.target.value,10)||0});let v=r(`p`,l);a(l,v),n(v,`flex items-center gap-2`);let y=r(`span`,v);a(v,y),a(y,o(`邮箱:`));let b=r(`input`,v);a(v,b),n(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),h(()=>{c(b,m.email)}),i(b,`input`,e=>{m.email=e.target.value});let x=r(`button`,l);return a(l,x),n(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),i(x,`click`,()=>{m.isEditing=!1}),a(x,o(`保存`)),e}):l(()=>{let s=t(),c=r(`div`,s);a(s,c),n(c,`space-y-2`);let l=r(`p`,c);a(c,l),a(l,o(`姓名: `));let d=e(`rue:slot:anchor`);a(l,d),h(()=>{let e=m.name;u(()=>p(e,l,d))});let f=r(`p`,c);a(c,f),a(f,o(`年龄: `));let g=e(`rue:slot:anchor`);a(f,g),h(()=>{let e=m.age;u(()=>p(e,f,g))});let _=r(`p`,c);a(c,_),a(_,o(`邮箱: `));let v=e(`rue:slot:anchor`);a(_,v),h(()=>{let e=m.email;u(()=>p(e,_,v))});let y=r(`button`,c);return a(c,y),n(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),i(y,`click`,()=>{m.isEditing=!0}),a(y,o(`编辑`)),s});u(()=>p(d,g,v))}),f})}});export{y as default};