import{G as e,I as t,L as n,M as r,P as i,X as a,_t as o,bt as s,c,j as l,pt as u,u as d,vt as f}from"./vapor-runtime-D3a-68js.js";import{a as p}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as m}from"./general-BmFRDxl1.js";import{t as h}from"./createHomeSplitExamplePage-CLNmVfsf.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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

export default UseStateObjectDemo`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>o(()=>{let[e,t]=p(`useState:1:0`,()=>f({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return d(()=>{let o=t(`div`);e(o,`card bg-base-100 shadow`);let d=t(`div`);r(o,d),e(d,`card-body`);let f=t(`h2`);r(d,f),e(f,`text-2xl font-semibold text-amber-600 mb-3`),r(f,n(`useState 对象示例`));let p=t(`div`);r(d,p),e(p,`flex gap-2 items-center mb-2`);let m=t(`input`);r(p,m),e(m,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{a(m,h.name)}),l(m,`input`,v);let g=t(`input`);r(p,g),e(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{a(g,h.name)}),l(g,`input`,y);let b=t(`button`);r(p,b),e(b,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),l(b,`click`,_),r(b,n(`年龄+1`));let x=t(`p`);r(d,x),e(x,`text-gray-700`),r(x,n(`姓名：`));let S=i(`rue:slot:anchor`);r(x,S),s(()=>{let e=h.name;u(()=>c(e,x,S))});let C=t(`p`);r(d,C),e(C,`text-gray-700`),r(C,n(`年龄：`));let w=i(`rue:slot:anchor`);return r(C,w),s(()=>{let e=h.age;u(()=>c(e,C,w))}),o})}});export{g as default};