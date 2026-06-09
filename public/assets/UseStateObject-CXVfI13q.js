import{$ as e,Ht as t,J as n,Jt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,pt as u,qt as d,s as f}from"./vapor-runtime-aZAg0Qkw.js";import{a as p}from"./vapor-helpers-vapor-gtGwiIv0.js";import{r as m}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as h}from"./createHomeSplitExamplePage-CJbW_xoB.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>d(()=>{let[e,t]=p(`useState:1:0`,()=>r({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return l(r=>{let l=e(`div`,r);s(l,`card bg-base-100 shadow`);let d=e(`div`,l);a(l,d),s(d,`card-body`);let p=e(`h2`,d);a(d,p),s(p,`text-2xl font-semibold text-amber-600 mb-3`),a(p,c(`useState 对象示例`));let m=e(`div`,d);a(d,m),s(m,`flex gap-2 items-center mb-2`);let g=e(`input`,m);a(m,g),s(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),i(()=>{u(g,h.name)}),n(g,`input`,v);let b=e(`input`,m);a(m,b),s(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),i(()=>{u(b,h.name)}),n(b,`input`,y);let x=e(`button`,m);a(m,x),s(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),n(x,`click`,_),a(x,c(`年龄+1`));let S=e(`p`,d);a(d,S),s(S,`text-gray-700`),a(S,c(`姓名：`));let C=o(`rue:slot:anchor`);a(S,C),i(()=>{let e=h.name;t(()=>f(e,S,C))});let w=e(`p`,d);a(d,w),s(w,`text-gray-700`),a(w,c(`年龄：`));let T=o(`rue:slot:anchor`);return a(w,T),i(()=>{let e=h.age;t(()=>f(e,w,T))}),l})}});export{g as default};