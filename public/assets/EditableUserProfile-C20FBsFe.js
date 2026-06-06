import{$ as e,B as t,Dt as n,G as r,H as i,Tt as a,U as o,W as s,Z as c,it as l,l as u,mt as d,s as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./createHomeSplitExamplePage-BftZ6-s2.js";var v=()=>g(`reactive:1:0`,()=>d({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:d}=g(`useSetup:0:0`,()=>p(()=>{let[e]=g(`useState:1:1`,()=>a(v));return{user:e}}));return u(a=>{let p=s(`div`,a);e(p,`card bg-base-100 shadow`);let g=s(`div`,p);t(p,g),e(g,`card-body`);let _=s(`h2`,g);t(g,_),e(_,`text-2xl font-semibold mb-4`),t(_,r(`用户资料编辑`));let v=i(`rue:slot:anchor`);return t(g,v),n(()=>{let a=d.isEditing?u(()=>{let i=o(),a=s(`div`,i);t(i,a),e(a,`space-y-3`);let u=s(`p`,a);t(a,u),e(u,`flex items-center gap-2`);let f=s(`span`,u);t(u,f),t(f,r(`姓名:`));let p=s(`input`,u);t(u,p),e(p,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),n(()=>{l(p,d.name)}),h(p,`input`,e=>{d.name=e.target.value});let m=s(`p`,a);t(a,m),e(m,`flex items-center gap-2`);let g=s(`span`,m);t(m,g),t(g,r(`年龄:`));let _=s(`input`,m);t(m,_),e(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),c(_,`type`,`number`),n(()=>{l(_,d.age)}),h(_,`input`,e=>{d.age=parseInt(e.target.value,10)||0});let v=s(`p`,a);t(a,v),e(v,`flex items-center gap-2`);let y=s(`span`,v);t(v,y),t(y,r(`邮箱:`));let b=s(`input`,v);t(v,b),e(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),n(()=>{l(b,d.email)}),h(b,`input`,e=>{d.email=e.target.value});let x=s(`button`,a);return t(a,x),e(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),h(x,`click`,()=>{d.isEditing=!1}),t(x,r(`保存`)),i}):u(()=>{let a=o(),c=s(`div`,a);t(a,c),e(c,`space-y-2`);let l=s(`p`,c);t(c,l),t(l,r(`姓名: `));let u=i(`rue:slot:anchor`);t(l,u),n(()=>{let e=d.name;m(()=>f(e,l,u))});let p=s(`p`,c);t(c,p),t(p,r(`年龄: `));let g=i(`rue:slot:anchor`);t(p,g),n(()=>{let e=d.age;m(()=>f(e,p,g))});let _=s(`p`,c);t(c,_),t(_,r(`邮箱: `));let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=d.email;m(()=>f(e,_,v))});let y=s(`button`,c);return t(c,y),e(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),h(y,`click`,()=>{d.isEditing=!0}),t(y,r(`编辑`)),a});m(()=>f(a,g,v))}),p})}});export{y as default};