import{$ as e,B as t,Dt as n,G as r,H as i,Tt as a,W as o,it as s,l as c,s as l,wt as u,yt as d,z as f}from"./vapor-runtime-C1rlwc61.js";import{a as p}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as m}from"./persistentSidebarPlayground-C3SK0UVc.js";import{t as h}from"./createHomeSplitExamplePage-BftZ6-s2.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
import { extend } from '@rue-js/shared'

const UseStateObjectDemo: FC = () => {
  const [profile, setProfile] = useState<{ name: string; age: number }>({
    name: '小明',
    age: 18,
  })

  const increaseAge = () => {
    setProfile(previous => extend(previous, { age: previous.age + 1 }))
  }

  const changeName = (event: any) => {
    setProfile(previous => extend(previous, { name: (event.target as HTMLInputElement).value }))
  }

  const changeNameMirror = (event: any) => {
    setProfile(previous => extend(previous, { name: (event.target as HTMLInputElement).value }))
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-amber-600 mb-3">useState 对象示例</h2>
        <div className="flex gap-2 items-center mb-2">
          <input
            className="rounded-md border-gray-300 shadow-sm px-3 py-1"
            value={profile.name}
            onInput={changeName}
          />
          <input
            className="rounded-md border-gray-300 shadow-sm px-3 py-1"
            value={profile.name}
            onInput={changeNameMirror}
          />
          <button
            className="rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white"
            onClick={increaseAge}
          >
            年龄+1
          </button>
        </div>
        <p className="text-gray-700">姓名：{profile.name}</p>
        <p className="text-gray-700">年龄：{profile.age}</p>
      </div>
    </div>
  )
}

export default UseStateObjectDemo
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>u(()=>{let[e,t]=p(`useState:1:0`,()=>a({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(a=>{let c=o(`div`,a);e(c,`card bg-base-100 shadow`);let u=o(`div`,c);t(c,u),e(u,`card-body`);let p=o(`h2`,u);t(u,p),e(p,`text-2xl font-semibold text-amber-600 mb-3`),t(p,r(`useState 对象示例`));let m=o(`div`,u);t(u,m),e(m,`flex gap-2 items-center mb-2`);let g=o(`input`,m);t(m,g),e(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),n(()=>{s(g,h.name)}),f(g,`input`,v);let b=o(`input`,m);t(m,b),e(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),n(()=>{s(b,h.name)}),f(b,`input`,y);let x=o(`button`,m);t(m,x),e(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),f(x,`click`,_),t(x,r(`年龄+1`));let S=o(`p`,u);t(u,S),e(S,`text-gray-700`),t(S,r(`姓名：`));let C=i(`rue:slot:anchor`);t(S,C),n(()=>{let e=h.name;d(()=>l(e,S,C))});let w=o(`p`,u);t(u,w),e(w,`text-gray-700`),t(w,r(`年龄：`));let T=i(`rue:slot:anchor`);return t(w,T),n(()=>{let e=h.age;d(()=>l(e,w,T))}),c})}});export{g as default};