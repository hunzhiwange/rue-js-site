import{Dt as e,Et as t,H as n,K as r,V as i,W as a,d as o,kt as s,l as c,ot as l,q as u,tt as d,xt as f}from"./vapor-runtime-BAZOdMd8.js";import{a as p}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as m}from"./general-CfCyZjVL.js";import{t as h}from"./createHomeSplitExamplePage-BUuBaUet.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>t(()=>{let[t,n]=p(`useState:1:0`,()=>e({name:`小明`,age:18}));return{profile:t,setProfile:n,increaseAge:()=>{n(e=>m(e,{age:e.age+1}))},changeName:e=>{n(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{n(t=>m(t,{name:e.target.value}))}}}));return o(e=>{let t=r(`div`,e);d(t,`card bg-base-100 shadow`);let o=r(`div`,t);n(t,o),d(o,`card-body`);let p=r(`h2`,o);n(o,p),d(p,`text-2xl font-semibold text-amber-600 mb-3`),n(p,u(`useState 对象示例`));let m=r(`div`,o);n(o,m),d(m,`flex gap-2 items-center mb-2`);let g=r(`input`,m);n(m,g),d(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{l(g,h.name)}),i(g,`input`,v);let b=r(`input`,m);n(m,b),d(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),s(()=>{l(b,h.name)}),i(b,`input`,y);let x=r(`button`,m);n(m,x),d(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),i(x,`click`,_),n(x,u(`年龄+1`));let S=r(`p`,o);n(o,S),d(S,`text-gray-700`),n(S,u(`姓名：`));let C=a(`rue:slot:anchor`);n(S,C),s(()=>{let e=h.name;f(()=>c(e,S,C))});let w=r(`p`,o);n(o,w),d(w,`text-gray-700`),n(w,u(`年龄：`));let T=a(`rue:slot:anchor`);return n(w,T),s(()=>{let e=h.age;f(()=>c(e,w,T))}),t})}});export{g as default};