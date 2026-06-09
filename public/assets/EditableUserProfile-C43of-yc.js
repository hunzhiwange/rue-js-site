import{$ as e,Ht as t,J as n,Jt as r,Q as i,Tt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,ot as f,pt as p,qt as m,s as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./createHomeSplitExamplePage-CJbW_xoB.js";var v=()=>g(`reactive:1:0`,()=>a({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:a}=g(`useSetup:0:0`,()=>m(()=>{let[e]=g(`useState:1:1`,()=>r(v));return{user:e}}));return d(r=>{let m=e(`div`,r);l(m,`card bg-base-100 shadow`);let g=e(`div`,m);s(m,g),l(g,`card-body`);let _=e(`h2`,g);s(g,_),l(_,`text-2xl font-semibold mb-4`),s(_,u(`用户资料编辑`));let v=c(`rue:slot:anchor`);return s(g,v),o(()=>{let r=a.isEditing?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`space-y-3`);let c=e(`p`,r);s(r,c),l(c,`flex items-center gap-2`);let d=e(`span`,c);s(c,d),s(d,u(`姓名:`));let m=e(`input`,c);s(c,m),l(m,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),o(()=>{p(m,a.name)}),n(m,`input`,e=>{a.name=e.target.value});let h=e(`p`,r);s(r,h),l(h,`flex items-center gap-2`);let g=e(`span`,h);s(h,g),s(g,u(`年龄:`));let _=e(`input`,h);s(h,_),l(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),f(_,`type`,`number`),o(()=>{p(_,a.age)}),n(_,`input`,e=>{a.age=parseInt(e.target.value,10)||0});let v=e(`p`,r);s(r,v),l(v,`flex items-center gap-2`);let y=e(`span`,v);s(v,y),s(y,u(`邮箱:`));let b=e(`input`,v);s(v,b),l(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),o(()=>{p(b,a.email)}),n(b,`input`,e=>{a.email=e.target.value});let x=e(`button`,r);return s(r,x),l(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),n(x,`click`,()=>{a.isEditing=!1}),s(x,u(`保存`)),t}):d(()=>{let r=i(),d=e(`div`,r);s(r,d),l(d,`space-y-2`);let f=e(`p`,d);s(d,f),s(f,u(`姓名: `));let p=c(`rue:slot:anchor`);s(f,p),o(()=>{let e=a.name;t(()=>h(e,f,p))});let m=e(`p`,d);s(d,m),s(m,u(`年龄: `));let g=c(`rue:slot:anchor`);s(m,g),o(()=>{let e=a.age;t(()=>h(e,m,g))});let _=e(`p`,d);s(d,_),s(_,u(`邮箱: `));let v=c(`rue:slot:anchor`);s(_,v),o(()=>{let e=a.email;t(()=>h(e,_,v))});let y=e(`button`,d);return s(d,y),l(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(y,`click`,()=>{a.isEditing=!0}),s(y,u(`编辑`)),r});t(()=>h(r,g,v))}),m})}});export{y as default};