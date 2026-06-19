import{$ as e,$t as t,Gt as n,X as r,Xt as i,Z as a,Zt as o,ht as s,l as c,nt as l,o as u,tt as d,ut as f}from"./vapor-runtime-CKrmRMZX.js";import{a as p}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{r as m}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as h}from"./createHomeSplitExamplePage-Q644r2Bq.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>i(()=>{let[e,t]=p(`useState:1:0`,()=>o({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(i=>{let o=d(`div`,i);f(o,`card bg-base-100 shadow`);let c=d(`div`,o);a(o,c),f(c,`card-body`);let p=d(`h2`,c);a(c,p),f(p,`text-2xl font-semibold text-amber-600 mb-3`),a(p,l(`useState 对象示例`));let m=d(`div`,c);a(c,m),f(m,`flex gap-2 items-center mb-2`);let g=d(`input`,m);a(m,g),f(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{s(g,h.name)}),r(g,`input`,v);let b=d(`input`,m);a(m,b),f(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{s(b,h.name)}),r(b,`input`,y);let x=d(`button`,m);a(m,x),f(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),r(x,`click`,_),a(x,l(`年龄+1`));let S=d(`p`,c);a(c,S),f(S,`text-gray-700`),a(S,l(`姓名：`));let C=e(`rue:slot:anchor`);a(S,C),t(()=>{let e=h.name;n(()=>u(e,S,C))});let w=d(`p`,c);a(c,w),f(w,`text-gray-700`),a(w,l(`年龄：`));let T=e(`rue:slot:anchor`);return a(w,T),t(()=>{let e=h.age;n(()=>u(e,w,T))}),o})}});export{g as default};