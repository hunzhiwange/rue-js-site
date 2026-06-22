import{Nt as e,Q as t,Vt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,sn as f,tn as p,tt as m,yt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var v=()=>g(`reactive:1:0`,()=>e({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:e}=g(`useSetup:0:0`,()=>l(()=>{let[e]=g(`useState:1:1`,()=>f(v));return{user:e}}));return o(l=>{let f=d(`div`,l);u(f,`card bg-base-100 shadow`);let g=d(`div`,f);t(f,g),u(g,`card-body`);let _=d(`h2`,g);t(g,_),u(_,`text-2xl font-semibold mb-4`),t(_,a(`用户资料编辑`));let v=m(`rue:slot:anchor`);return t(g,v),n(()=>{let l=e.isEditing?o(()=>{let o=s(),c=d(`div`,o);t(o,c),u(c,`space-y-3`);let l=d(`p`,c);t(c,l),u(l,`flex items-center gap-2`);let f=d(`span`,l);t(l,f),t(f,a(`姓名:`));let p=d(`input`,l);t(l,p),u(p,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),n(()=>{h(p,e.name)}),r(p,`input`,t=>{e.name=t.target.value});let m=d(`p`,c);t(c,m),u(m,`flex items-center gap-2`);let g=d(`span`,m);t(m,g),t(g,a(`年龄:`));let _=d(`input`,m);t(m,_),u(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),i(_,`type`,`number`),n(()=>{h(_,e.age)}),r(_,`input`,t=>{e.age=parseInt(t.target.value,10)||0});let v=d(`p`,c);t(c,v),u(v,`flex items-center gap-2`);let y=d(`span`,v);t(v,y),t(y,a(`邮箱:`));let b=d(`input`,v);t(v,b),u(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),n(()=>{h(b,e.email)}),r(b,`input`,t=>{e.email=t.target.value});let x=d(`button`,c);return t(c,x),u(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),r(x,`click`,()=>{e.isEditing=!1}),t(x,a(`保存`)),o}):o(()=>{let i=s(),o=d(`div`,i);t(i,o),u(o,`space-y-2`);let l=d(`p`,o);t(o,l),t(l,a(`姓名: `));let f=m(`rue:slot:anchor`);t(l,f),n(()=>{let t=e.name;p(()=>c(t,l,f))});let h=d(`p`,o);t(o,h),t(h,a(`年龄: `));let g=m(`rue:slot:anchor`);t(h,g),n(()=>{let t=e.age;p(()=>c(t,h,g))});let _=d(`p`,o);t(o,_),t(_,a(`邮箱: `));let v=m(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.email;p(()=>c(t,_,v))});let y=d(`button`,o);return t(o,y),u(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(y,`click`,()=>{e.isEditing=!0}),t(y,a(`编辑`)),i});p(()=>c(l,g,v))}),f})}});export{y as default};