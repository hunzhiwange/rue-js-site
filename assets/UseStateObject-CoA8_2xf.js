import{F as e,K as t,L as n,M as r,N as i,R as a,Z as o,_t as s,d as c,ht as l,l as u,mt as d,ut as f}from"./vapor-runtime-Dfq7aA8z.js";import{a as p}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as m}from"./general-BmFRDxl1.js";import{t as h}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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

export default UseStateObjectDemo`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>d(()=>{let[e,t]=p(`useState:1:0`,()=>l({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(c=>{let l=n(`div`,c);t(l,`card bg-base-100 shadow`);let d=n(`div`,l);i(l,d),t(d,`card-body`);let p=n(`h2`,d);i(d,p),t(p,`text-2xl font-semibold text-amber-600 mb-3`),i(p,a(`useState 对象示例`));let m=n(`div`,d);i(d,m),t(m,`flex gap-2 items-center mb-2`);let g=n(`input`,m);i(m,g),t(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{o(g,h.name)}),r(g,`input`,v);let b=n(`input`,m);i(m,b),t(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{o(b,h.name)}),r(b,`input`,y);let x=n(`button`,m);i(m,x),t(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),r(x,`click`,_),i(x,a(`年龄+1`));let S=n(`p`,d);i(d,S),t(S,`text-gray-700`),i(S,a(`姓名：`));let C=e(`rue:slot:anchor`);i(S,C),s(()=>{let e=h.name;f(()=>u(e,S,C))});let w=n(`p`,d);i(d,w),t(w,`text-gray-700`),i(w,a(`年龄：`));let T=e(`rue:slot:anchor`);return i(w,T),s(()=>{let e=h.age;f(()=>u(e,w,T))}),l})}});export{g as default};