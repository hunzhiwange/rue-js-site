import{$ as e,Ct as t,J as n,Kt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,pt as m,qt as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var v=()=>g(`reactive:1:0`,()=>t({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:t}=g(`useSetup:0:0`,()=>r(()=>{let[e]=g(`useState:1:1`,()=>h(v));return{user:e}}));return u(r=>{let h=e(`div`,r);l(h,`card bg-base-100 shadow`);let g=e(`div`,h);o(h,g),l(g,`card-body`);let _=e(`h2`,g);o(g,_),l(_,`text-2xl font-semibold mb-4`),o(_,d(`用户资料编辑`));let v=c(`rue:slot:anchor`);return o(g,v),s(()=>{let r=t.isEditing?u(()=>{let r=i(),a=e(`div`,r);o(r,a),l(a,`space-y-3`);let c=e(`p`,a);o(a,c),l(c,`flex items-center gap-2`);let u=e(`span`,c);o(c,u),o(u,d(`姓名:`));let f=e(`input`,c);o(c,f),l(f,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(()=>{m(f,t.name)}),n(f,`input`,e=>{t.name=e.target.value});let h=e(`p`,a);o(a,h),l(h,`flex items-center gap-2`);let g=e(`span`,h);o(h,g),o(g,d(`年龄:`));let _=e(`input`,h);o(h,_),l(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),p(_,`type`,`number`),s(()=>{m(_,t.age)}),n(_,`input`,e=>{t.age=parseInt(e.target.value,10)||0});let v=e(`p`,a);o(a,v),l(v,`flex items-center gap-2`);let y=e(`span`,v);o(v,y),o(y,d(`邮箱:`));let b=e(`input`,v);o(v,b),l(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),s(()=>{m(b,t.email)}),n(b,`input`,e=>{t.email=e.target.value});let x=e(`button`,a);return o(a,x),l(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),n(x,`click`,()=>{t.isEditing=!1}),o(x,d(`保存`)),r}):u(()=>{let r=i(),u=e(`div`,r);o(r,u),l(u,`space-y-2`);let p=e(`p`,u);o(u,p),o(p,d(`姓名: `));let m=c(`rue:slot:anchor`);o(p,m),s(()=>{let e=t.name;a(()=>f(e,p,m))});let h=e(`p`,u);o(u,h),o(h,d(`年龄: `));let g=c(`rue:slot:anchor`);o(h,g),s(()=>{let e=t.age;a(()=>f(e,h,g))});let _=e(`p`,u);o(u,_),o(_,d(`邮箱: `));let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.email;a(()=>f(e,_,v))});let y=e(`button`,u);return o(u,y),l(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(y,`click`,()=>{t.isEditing=!0}),o(y,d(`编辑`)),r});a(()=>f(r,g,v))}),h})}});export{y as default};