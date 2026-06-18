import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,ft as s,l as c,q as l,qt as u,s as d,st as f}from"./vapor-runtime-iQZthBPQ.js";import{a as p}from"./vapor-helpers-vapor-BjKHCvOa.js";import{r as m}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as h}from"./createHomeSplitExamplePage-C98rg19g.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>u(()=>{let[e,t]=p(`useState:1:0`,()=>r({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(r=>{let c=i(`div`,r);f(c,`card bg-base-100 shadow`);let u=i(`div`,c);n(c,u),f(u,`card-body`);let p=i(`h2`,u);n(u,p),f(p,`text-2xl font-semibold text-amber-600 mb-3`),n(p,e(`useState 对象示例`));let m=i(`div`,u);n(u,m),f(m,`flex gap-2 items-center mb-2`);let g=i(`input`,m);n(m,g),f(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),o(()=>{s(g,h.name)}),l(g,`input`,v);let b=i(`input`,m);n(m,b),f(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),o(()=>{s(b,h.name)}),l(b,`input`,y);let x=i(`button`,m);n(m,x),f(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),l(x,`click`,_),n(x,e(`年龄+1`));let S=i(`p`,u);n(u,S),f(S,`text-gray-700`),n(S,e(`姓名：`));let C=a(`rue:slot:anchor`);n(S,C),o(()=>{let e=h.name;t(()=>d(e,S,C))});let w=i(`p`,u);n(u,w),f(w,`text-gray-700`),n(w,e(`年龄：`));let T=a(`rue:slot:anchor`);return n(w,T),o(()=>{let e=h.age;t(()=>d(e,w,T))}),c})}});export{g as default};