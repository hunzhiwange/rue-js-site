import{$ as e,J as t,Kt as n,Vt as r,Y as i,Yt as a,Z as o,ct as s,d as c,et as l,l as u,pt as d,qt as f}from"./vapor-runtime-BR_2rwNk.js";import{a as p}from"./vapor-helpers-vapor-DkadWylb.js";import{t as m}from"./general-DUT_4K4T.js";import{t as h}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>n(()=>{let[e,t]=p(`useState:1:0`,()=>f({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(n=>{let c=e(`div`,n);s(c,`card bg-base-100 shadow`);let f=e(`div`,c);i(c,f),s(f,`card-body`);let p=e(`h2`,f);i(f,p),s(p,`text-2xl font-semibold text-amber-600 mb-3`),i(p,l(`useState 对象示例`));let m=e(`div`,f);i(f,m),s(m,`flex gap-2 items-center mb-2`);let g=e(`input`,m);i(m,g),s(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),a(()=>{d(g,h.name)}),t(g,`input`,v);let b=e(`input`,m);i(m,b),s(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),a(()=>{d(b,h.name)}),t(b,`input`,y);let x=e(`button`,m);i(m,x),s(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),t(x,`click`,_),i(x,l(`年龄+1`));let S=e(`p`,f);i(f,S),s(S,`text-gray-700`),i(S,l(`姓名：`));let C=o(`rue:slot:anchor`);i(S,C),a(()=>{let e=h.name;r(()=>u(e,S,C))});let w=e(`p`,f);i(f,w),s(w,`text-gray-700`),i(w,l(`年龄：`));let T=o(`rue:slot:anchor`);return i(w,T),a(()=>{let e=h.age;r(()=>u(e,w,T))}),c})}});export{g as default};