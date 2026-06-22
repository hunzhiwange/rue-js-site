import{Q as e,Vt as t,Z as n,it as r,l as i,o as a,on as o,pt as s,rt as c,sn as l,tn as u,tt as d,yt as f}from"./vapor-runtime-x7F5M-49.js";import{a as p}from"./vapor-helpers-vapor-D1LP4JjK.js";import{i as m}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as h}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>o(()=>{let[e,t]=p(`useState:1:0`,()=>l({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return i(i=>{let o=c(`div`,i);s(o,`card bg-base-100 shadow`);let l=c(`div`,o);e(o,l),s(l,`card-body`);let p=c(`h2`,l);e(l,p),s(p,`text-2xl font-semibold text-amber-600 mb-3`),e(p,r(`useState 对象示例`));let m=c(`div`,l);e(l,m),s(m,`flex gap-2 items-center mb-2`);let g=c(`input`,m);e(m,g),s(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{f(g,h.name)}),n(g,`input`,v);let b=c(`input`,m);e(m,b),s(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{f(b,h.name)}),n(b,`input`,y);let x=c(`button`,m);e(m,x),s(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),n(x,`click`,_),e(x,r(`年龄+1`));let S=c(`p`,l);e(l,S),s(S,`text-gray-700`),e(S,r(`姓名：`));let C=d(`rue:slot:anchor`);e(S,C),t(()=>{let e=h.name;u(()=>a(e,S,C))});let w=c(`p`,l);e(l,w),s(w,`text-gray-700`),e(w,r(`年龄：`));let T=d(`rue:slot:anchor`);return e(w,T),t(()=>{let e=h.age;u(()=>a(e,w,T))}),o})}});export{g as default};