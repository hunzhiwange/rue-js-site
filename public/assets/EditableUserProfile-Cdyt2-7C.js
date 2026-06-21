import{$t as e,Q as t,Z as n,_t as r,an as i,dt as a,et as o,in as s,jt as c,l,lt as u,nt as d,o as f,rt as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var v=()=>g(`reactive:1:0`,()=>c({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:c}=g(`useSetup:0:0`,()=>s(()=>{let[e]=g(`useState:1:1`,()=>i(v));return{user:e}}));return l(i=>{let s=d(`div`,i);a(s,`card bg-base-100 shadow`);let g=d(`div`,s);t(s,g),a(g,`card-body`);let _=d(`h2`,g);t(g,_),a(_,`text-2xl font-semibold mb-4`),t(_,p(`用户资料编辑`));let v=o(`rue:slot:anchor`);return t(g,v),h(()=>{let i=c.isEditing?l(()=>{let e=m(),i=d(`div`,e);t(e,i),a(i,`space-y-3`);let o=d(`p`,i);t(i,o),a(o,`flex items-center gap-2`);let s=d(`span`,o);t(o,s),t(s,p(`姓名:`));let l=d(`input`,o);t(o,l),a(l,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),h(()=>{r(l,c.name)}),n(l,`input`,e=>{c.name=e.target.value});let f=d(`p`,i);t(i,f),a(f,`flex items-center gap-2`);let g=d(`span`,f);t(f,g),t(g,p(`年龄:`));let _=d(`input`,f);t(f,_),a(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),u(_,`type`,`number`),h(()=>{r(_,c.age)}),n(_,`input`,e=>{c.age=parseInt(e.target.value,10)||0});let v=d(`p`,i);t(i,v),a(v,`flex items-center gap-2`);let y=d(`span`,v);t(v,y),t(y,p(`邮箱:`));let b=d(`input`,v);t(v,b),a(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),h(()=>{r(b,c.email)}),n(b,`input`,e=>{c.email=e.target.value});let x=d(`button`,i);return t(i,x),a(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),n(x,`click`,()=>{c.isEditing=!1}),t(x,p(`保存`)),e}):l(()=>{let r=m(),i=d(`div`,r);t(r,i),a(i,`space-y-2`);let s=d(`p`,i);t(i,s),t(s,p(`姓名: `));let l=o(`rue:slot:anchor`);t(s,l),h(()=>{let t=c.name;e(()=>f(t,s,l))});let u=d(`p`,i);t(i,u),t(u,p(`年龄: `));let g=o(`rue:slot:anchor`);t(u,g),h(()=>{let t=c.age;e(()=>f(t,u,g))});let _=d(`p`,i);t(i,_),t(_,p(`邮箱: `));let v=o(`rue:slot:anchor`);t(_,v),h(()=>{let t=c.email;e(()=>f(t,_,v))});let y=d(`button`,i);return t(i,y),a(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(y,`click`,()=>{c.isEditing=!0}),t(y,p(`编辑`)),r});e(()=>f(i,g,v))}),s})}});export{y as default};