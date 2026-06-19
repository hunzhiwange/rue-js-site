import{$ as e,$t as t,Dt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,et as l,ht as u,l as d,nt as f,o as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./createHomeSplitExamplePage-Q644r2Bq.js";var v=()=>g(`reactive:1:0`,()=>n({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:n}=g(`useSetup:0:0`,()=>a(()=>{let[e]=g(`useState:1:1`,()=>s(v));return{user:e}}));return d(a=>{let s=m(`div`,a);h(s,`card bg-base-100 shadow`);let g=m(`div`,s);o(s,g),h(g,`card-body`);let _=m(`h2`,g);o(g,_),h(_,`text-2xl font-semibold mb-4`),o(_,f(`用户资料编辑`));let v=e(`rue:slot:anchor`);return o(g,v),t(()=>{let a=n.isEditing?d(()=>{let e=l(),r=m(`div`,e);o(e,r),h(r,`space-y-3`);let a=m(`p`,r);o(r,a),h(a,`flex items-center gap-2`);let s=m(`span`,a);o(a,s),o(s,f(`姓名:`));let d=m(`input`,a);o(a,d),h(d,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),t(()=>{u(d,n.name)}),i(d,`input`,e=>{n.name=e.target.value});let p=m(`p`,r);o(r,p),h(p,`flex items-center gap-2`);let g=m(`span`,p);o(p,g),o(g,f(`年龄:`));let _=m(`input`,p);o(p,_),h(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),c(_,`type`,`number`),t(()=>{u(_,n.age)}),i(_,`input`,e=>{n.age=parseInt(e.target.value,10)||0});let v=m(`p`,r);o(r,v),h(v,`flex items-center gap-2`);let y=m(`span`,v);o(v,y),o(y,f(`邮箱:`));let b=m(`input`,v);o(v,b),h(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),t(()=>{u(b,n.email)}),i(b,`input`,e=>{n.email=e.target.value});let x=m(`button`,r);return o(r,x),h(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),i(x,`click`,()=>{n.isEditing=!1}),o(x,f(`保存`)),e}):d(()=>{let a=l(),s=m(`div`,a);o(a,s),h(s,`space-y-2`);let c=m(`p`,s);o(s,c),o(c,f(`姓名: `));let u=e(`rue:slot:anchor`);o(c,u),t(()=>{let e=n.name;r(()=>p(e,c,u))});let d=m(`p`,s);o(s,d),o(d,f(`年龄: `));let g=e(`rue:slot:anchor`);o(d,g),t(()=>{let e=n.age;r(()=>p(e,d,g))});let _=m(`p`,s);o(s,_),o(_,f(`邮箱: `));let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.email;r(()=>p(e,_,v))});let y=m(`button`,s);return o(s,y),h(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),i(y,`click`,()=>{n.isEditing=!0}),o(y,f(`编辑`)),a});r(()=>p(a,g,v))}),s})}});export{y as default};