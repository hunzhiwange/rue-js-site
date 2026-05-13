import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,X as s,_t as c,bt as l,c as u,ct as d,j as f,pt as p,u as m,vt as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./createHomeSplitExamplePage-CLNmVfsf.js";var v=()=>g(`reactive:1:0`,()=>d({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default EditableUserProfileDemo`,Demo:()=>{let{user:d}=g(`useSetup:0:0`,()=>c(()=>{let[e]=g(`useState:1:1`,()=>h(v));return{user:e}}));return m(()=>{let c=n(`div`);t(c,`card bg-base-100 shadow`);let h=n(`div`);i(c,h),t(h,`card-body`);let g=n(`h2`);i(h,g),t(g,`text-2xl font-semibold mb-4`),i(g,r(`用户资料编辑`));let _=a(`rue:slot:anchor`);return i(h,_),l(()=>{let c=d.isEditing?m(()=>{let a=e(),c=n(`div`);i(a,c),t(c,`space-y-3`);let u=n(`p`);i(c,u),t(u,`flex items-center gap-2`);let p=n(`span`);i(u,p),i(p,r(`姓名:`));let m=n(`input`);i(u,m),t(m,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),l(()=>{s(m,d.name)}),f(m,`input`,e=>{d.name=e.target.value});let h=n(`p`);i(c,h),t(h,`flex items-center gap-2`);let g=n(`span`);i(h,g),i(g,r(`年龄:`));let _=n(`input`);i(h,_),t(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),o(_,`type`,`number`),l(()=>{s(_,d.age)}),f(_,`input`,e=>{d.age=parseInt(e.target.value,10)||0});let v=n(`p`);i(c,v),t(v,`flex items-center gap-2`);let y=n(`span`);i(v,y),i(y,r(`邮箱:`));let b=n(`input`);i(v,b),t(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),l(()=>{s(b,d.email)}),f(b,`input`,e=>{d.email=e.target.value});let x=n(`button`);return i(c,x),t(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),f(x,`click`,()=>{d.isEditing=!1}),i(x,r(`保存`)),a}):m(()=>{let o=e(),s=n(`div`);i(o,s),t(s,`space-y-2`);let c=n(`p`);i(s,c),i(c,r(`姓名: `));let m=a(`rue:slot:anchor`);i(c,m),l(()=>{let e=d.name;p(()=>u(e,c,m))});let h=n(`p`);i(s,h),i(h,r(`年龄: `));let g=a(`rue:slot:anchor`);i(h,g),l(()=>{let e=d.age;p(()=>u(e,h,g))});let _=n(`p`);i(s,_),i(_,r(`邮箱: `));let v=a(`rue:slot:anchor`);i(_,v),l(()=>{let e=d.email;p(()=>u(e,_,v))});let y=n(`button`);return i(s,y),t(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),f(y,`click`,()=>{d.isEditing=!0}),i(y,r(`编辑`)),o});p(()=>u(c,h,_))}),c})}});export{y as default};