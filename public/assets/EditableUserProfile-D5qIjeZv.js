import{Dn as e,Dt as t,Kt as n,Vt as r,_n as i,ct as a,et as o,gn as s,nt as c,pn as l,qt as u,sn as d,vn as f,wn as p,xn as m,z as h}from"./rue-runtime-HIMg8Lz8.js";import{t as g}from"./createHomeSplitExamplePage-DNdswIPW.js";var _=f(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-4">用户资料编辑</h2><!--rue:text-hole:0--></div></div>`),v=()=>d(`reactive:1:0`,()=>h({name:`张三`,age:25,email:`zhangsan@example.com`,isEditing:!1})),y=g({title:`用户资料编辑`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[d]=n(`EditableUserProfileDemo:hook:0`,v);return u(()=>a(r(Object.assign(n=>{let a=_().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1],u=o.parentNode;return c(u,o,()=>d.get().isEditing?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(n=>{let r=s(`div`,n);r.className=`space-y-3`;let a=s(`p`,r);l(r,a),a.className=`flex items-center gap-2`;let o=s(`span`,a);l(a,o),l(o,i(`姓名:`));let c=s(`input`,a);l(a,c),c.className=`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`;let u;p(()=>{let e=d.get().name,n=e==null?``:String(e);Object.is(u,n)||(u=n,t(c,n))});let f=e=>{let t=e=>{d.get().name=e.target.value};typeof t==`function`&&t(e)};c.addEventListener(`input`,f),e(()=>c.removeEventListener(`input`,f));let m=s(`p`,r);l(r,m),m.className=`flex items-center gap-2`;let h=s(`span`,m);l(m,h),l(h,i(`年龄:`));let g=s(`input`,m);l(m,g),g.className=`w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`,g.setAttribute(`type`,`number`);let _;p(()=>{let e=d.get().age,n=e==null?``:String(e);Object.is(_,n)||(_=n,t(g,n))});let v=e=>{let t=e=>{d.get().age=parseInt(e.target.value,10)||0};typeof t==`function`&&t(e)};g.addEventListener(`input`,v),e(()=>g.removeEventListener(`input`,v));let y=s(`p`,r);l(r,y),y.className=`flex items-center gap-2`;let b=s(`span`,y);l(y,b),l(b,i(`邮箱:`));let x=s(`input`,y);l(y,x),x.className=`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-1`;let S;p(()=>{let e=d.get().email,n=e==null?``:String(e);Object.is(S,n)||(S=n,t(x,n))});let C=e=>{let t=e=>{d.get().email=e.target.value};typeof t==`function`&&t(e)};x.addEventListener(`input`,C),e(()=>x.removeEventListener(`input`,C));let w=s(`button`,r);l(r,w),w.className=`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`;let T=e=>{let t=()=>{d.get().isEditing=!1};typeof t==`function`&&t(e)};return w.addEventListener(`click`,T),e(()=>w.removeEventListener(`click`,T)),l(w,i(`保存`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(t=>{let n=s(`div`,t);n.className=`space-y-2`;let r=s(`p`,n);l(n,r),l(r,i(`姓名: `));let a=i(``);l(r,a),m(a,()=>d.get().name);let o=s(`p`,n);l(n,o),l(o,i(`年龄: `));let c=i(``);l(o,c),m(c,()=>d.get().age);let u=s(`p`,n);l(n,u),l(u,i(`邮箱: `));let f=i(``);l(u,f),m(f,()=>d.get().email);let p=s(`button`,n);l(n,p),p.className=`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let h=e=>{let t=()=>{d.get().isEditing=!0};typeof t==`function`&&t(e)};return p.addEventListener(`click`,h),e(()=>p.removeEventListener(`click`,h)),l(p,i(`编辑`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{})))}});export{y as default};