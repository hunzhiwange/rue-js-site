import{$ as e,Dt as t,Et as n,G as r,H as i,K as a,V as o,W as s,d as c,gt as l,kt as u,l as d,ot as f,q as p,tt as m,xt as h}from"./vapor-runtime-ACs_OvwU.js";import{a as g}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as _}from"./createHomeSplitExamplePage-DOBN78Vl.js";var v=()=>g(`reactive:1:0`,()=>l({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=_({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{user:l}=g(`useSetup:0:0`,()=>n(()=>{let[e]=g(`useState:1:1`,()=>t(v));return{user:e}}));return c(t=>{let n=a(`div`,t);m(n,`card bg-base-100 shadow`);let g=a(`div`,n);i(n,g),m(g,`card-body`);let _=a(`h2`,g);i(g,_),m(_,`text-2xl font-semibold mb-4`),i(_,p(`用户资料编辑`));let v=s(`rue:slot:anchor`);return i(g,v),u(()=>{let t=l.isEditing?c(()=>{let t=r(),n=a(`div`,t);i(t,n),m(n,`space-y-3`);let s=a(`p`,n);i(n,s),m(s,`flex items-center gap-2`);let c=a(`span`,s);i(s,c),i(c,p(`姓名:`));let d=a(`input`,s);i(s,d),m(d,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),u(()=>{f(d,l.name)}),o(d,`input`,e=>{l.name=e.target.value});let h=a(`p`,n);i(n,h),m(h,`flex items-center gap-2`);let g=a(`span`,h);i(h,g),i(g,p(`年龄:`));let _=a(`input`,h);i(h,_),m(_,`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),e(_,`type`,`number`),u(()=>{f(_,l.age)}),o(_,`input`,e=>{l.age=parseInt(e.target.value,10)||0});let v=a(`p`,n);i(n,v),m(v,`flex items-center gap-2`);let y=a(`span`,v);i(v,y),i(y,p(`邮箱:`));let b=a(`input`,v);i(v,b),m(b,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`),u(()=>{f(b,l.email)}),o(b,`input`,e=>{l.email=e.target.value});let x=a(`button`,n);return i(n,x),m(x,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),o(x,`click`,()=>{l.isEditing=!1}),i(x,p(`保存`)),t}):c(()=>{let e=r(),t=a(`div`,e);i(e,t),m(t,`space-y-2`);let n=a(`p`,t);i(t,n),i(n,p(`姓名: `));let c=s(`rue:slot:anchor`);i(n,c),u(()=>{let e=l.name;h(()=>d(e,n,c))});let f=a(`p`,t);i(t,f),i(f,p(`年龄: `));let g=s(`rue:slot:anchor`);i(f,g),u(()=>{let e=l.age;h(()=>d(e,f,g))});let _=a(`p`,t);i(t,_),i(_,p(`邮箱: `));let v=s(`rue:slot:anchor`);i(_,v),u(()=>{let e=l.email;h(()=>d(e,_,v))});let y=a(`button`,t);return i(t,y),m(y,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),o(y,`click`,()=>{l.isEditing=!0}),i(y,p(`编辑`)),e});h(()=>d(t,g,v))}),n})}});export{y as default};