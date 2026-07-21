import{Cn as e,Ct as t,Kt as n,Tt as r,dt as i,ft as a,jt as o,mt as s,ot as c,pt as l,st as u,tn as d,vn as f,wn as p}from"./context-8lXZvIn-.js";import{l as m,o as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var v=()=>g(`reactive:1:0`,()=>n({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:n}=g(`useSetup:0:0`,()=>e(()=>{let[e]=g(`useState:1:1`,()=>p(v));return{user:e}}));return m(e=>{let p=l(`div`,e);r(p,`card bg-base-100 shadow`);let g=l(`div`,p);u(p,g),r(g,`card-body`);let _=l(`h2`,g);u(g,_),r(_,`text-2xl font-semibold mb-4`),u(_,s(`用户资料编辑`));let v=i(`rue:slot:anchor`);return u(g,v),d(()=>{let e=n.isEditing?m(()=>{let e=a(),i=l(`div`,e);u(e,i),r(i,`space-y-3`);let f=l(`p`,i);u(i,f),r(f,`flex items-center gap-2`);let p=l(`span`,f);u(f,p),u(p,s(`姓名:`));let m=l(`input`,f);u(f,m),r(m,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),d(()=>{o(m,n.name)}),c(m,`input`,e=>{n.name=e.target.value});let h=l(`p`,i);u(i,h),r(h,`flex items-center gap-2`);let g=l(`span`,h);u(h,g),u(g,s(`年龄:`));let _=l(`input`,h);u(h,_),r(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),t(_,`type`,`number`),d(()=>{o(_,n.age)}),c(_,`input`,e=>{n.age=parseInt(e.target.value,10)||0});let v=l(`p`,i);u(i,v),r(v,`flex items-center gap-2`);let y=l(`span`,v);u(v,y),u(y,s(`邮箱:`));let b=l(`input`,v);u(v,b),r(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),d(()=>{o(b,n.email)}),c(b,`input`,e=>{n.email=e.target.value});let x=l(`button`,i);return u(i,x),r(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),c(x,`click`,()=>{n.isEditing=!1}),u(x,s(`保存`)),e}):m(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`space-y-2`);let o=l(`p`,t);u(t,o),u(o,s(`姓名: `));let p=i(`rue:slot:anchor`);u(o,p),d(()=>{let e=n.name;f(()=>h(e,o,p))});let m=l(`p`,t);u(t,m),u(m,s(`年龄: `));let g=i(`rue:slot:anchor`);u(m,g),d(()=>{let e=n.age;f(()=>h(e,m,g))});let _=l(`p`,t);u(t,_),u(_,s(`邮箱: `));let v=i(`rue:slot:anchor`);u(_,v),d(()=>{let e=n.email;f(()=>h(e,_,v))});let y=l(`button`,t);return u(t,y),r(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),c(y,`click`,()=>{n.isEditing=!0}),u(y,s(`编辑`)),e});f(()=>h(e,g,v))}),p})}});export{y as default};