import{Cn as e,Tt as t,dt as n,jt as r,mt as i,ot as a,pt as o,st as s,tn as c,vn as l,wn as u}from"./context-8lXZvIn-.js";import{l as d,o as f}from"./vapor-runtime-ygJWVcNn.js";import{a as p}from"./vapor-helpers-vapor-CMwHgsXf.js";import{r as m}from"./persistentSidebarPlayground-B3vwD8_y.js";import{t as h}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>e(()=>{let[e,t]=p(`useState:1:0`,()=>u({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return d(e=>{let u=o(`div`,e);t(u,`card bg-base-100 shadow`);let d=o(`div`,u);s(u,d),t(d,`card-body`);let p=o(`h2`,d);s(d,p),t(p,`text-2xl font-semibold text-amber-600 mb-3`),s(p,i(`useState 对象示例`));let m=o(`div`,d);s(d,m),t(m,`flex gap-2 items-center mb-2`);let g=o(`input`,m);s(m,g),t(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),c(()=>{r(g,h.name)}),a(g,`input`,v);let b=o(`input`,m);s(m,b),t(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),c(()=>{r(b,h.name)}),a(b,`input`,y);let x=o(`button`,m);s(m,x),t(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),a(x,`click`,_),s(x,i(`年龄+1`));let S=o(`p`,d);s(d,S),t(S,`text-gray-700`),s(S,i(`姓名：`));let C=n(`rue:slot:anchor`);s(S,C),c(()=>{let e=h.name;l(()=>f(e,S,C))});let w=o(`p`,d);s(d,w),t(w,`text-gray-700`),s(w,i(`年龄：`));let T=n(`rue:slot:anchor`);return s(w,T),c(()=>{let e=h.age;l(()=>f(e,w,T))}),u})}});export{g as default};