import{$ as e,Ct as t,J as n,Kt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,pt as p,qt as m,s as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./createHomeSplitExamplePage-BB_cTfze.js";var v=()=>g(`reactive:1:0`,()=>t({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:t}=g(`useSetup:0:0`,()=>r(()=>{let[e]=g(`useState:1:1`,()=>m(v));return{user:e}}));return d(r=>{let m=e(`div`,r);l(m,`card bg-base-100 shadow`);let g=e(`div`,m);o(m,g),l(g,`card-body`);let _=e(`h2`,g);o(g,_),l(_,`text-2xl font-semibold mb-4`),o(_,u(`用户资料编辑`));let v=c(`rue:slot:anchor`);return o(g,v),s(()=>{let r=t.isEditing?d(()=>{let r=i(),a=e(`div`,r);o(r,a),l(a,`space-y-3`);let c=e(`p`,a);o(a,c),l(c,`flex items-center gap-2`);let d=e(`span`,c);o(c,d),o(d,u(`姓名:`));let m=e(`input`,c);o(c,m),l(m,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(()=>{p(m,t.name)}),n(m,`input`,e=>{t.name=e.target.value});let h=e(`p`,a);o(a,h),l(h,`flex items-center gap-2`);let g=e(`span`,h);o(h,g),o(g,u(`年龄:`));let _=e(`input`,h);o(h,_),l(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),f(_,`type`,`number`),s(()=>{p(_,t.age)}),n(_,`input`,e=>{t.age=parseInt(e.target.value,10)||0});let v=e(`p`,a);o(a,v),l(v,`flex items-center gap-2`);let y=e(`span`,v);o(v,y),o(y,u(`邮箱:`));let b=e(`input`,v);o(v,b),l(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(()=>{p(b,t.email)}),n(b,`input`,e=>{t.email=e.target.value});let x=e(`button`,a);return o(a,x),l(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),n(x,`click`,()=>{t.isEditing=!1}),o(x,u(`保存`)),r}):d(()=>{let r=i(),d=e(`div`,r);o(r,d),l(d,`space-y-2`);let f=e(`p`,d);o(d,f),o(f,u(`姓名: `));let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=t.name;a(()=>h(e,f,p))});let m=e(`p`,d);o(d,m),o(m,u(`年龄: `));let g=c(`rue:slot:anchor`);o(m,g),s(()=>{let e=t.age;a(()=>h(e,m,g))});let _=e(`p`,d);o(d,_),o(_,u(`邮箱: `));let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.email;a(()=>h(e,_,v))});let y=e(`button`,d);return o(d,y),l(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(y,`click`,()=>{t.isEditing=!0}),o(y,u(`编辑`)),r});a(()=>h(r,g,v))}),m})}});export{y as default};