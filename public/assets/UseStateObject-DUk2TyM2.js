import{Q as e,Qt as t,Wt as n,X as r,Xt as i,Y as a,Yt as o,et as s,l as c,lt as l,mt as u,o as d,tt as f}from"./vapor-runtime-CXIalONM.js";import{a as p}from"./vapor-helpers-vapor-CoXKrGmY.js";import{r as m}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as h}from"./createHomeSplitExamplePage-Br1mQ323.js";var g=h({title:`useState 对象`,source:`import { type FC, useState } from '@rue-js/rue'
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
`,Demo:()=>{let{profile:h,setProfile:g,increaseAge:_,changeName:v,changeNameMirror:y}=p(`useSetup:0:0`,()=>o(()=>{let[e,t]=p(`useState:1:0`,()=>i({name:`小明`,age:18}));return{profile:e,setProfile:t,increaseAge:()=>{t(e=>m(e,{age:e.age+1}))},changeName:e=>{t(t=>m(t,{name:e.target.value}))},changeNameMirror:e=>{t(t=>m(t,{name:e.target.value}))}}}));return c(i=>{let o=s(`div`,i);l(o,`card bg-base-100 shadow`);let c=s(`div`,o);r(o,c),l(c,`card-body`);let p=s(`h2`,c);r(c,p),l(p,`text-2xl font-semibold text-amber-600 mb-3`),r(p,f(`useState 对象示例`));let m=s(`div`,c);r(c,m),l(m,`flex gap-2 items-center mb-2`);let g=s(`input`,m);r(m,g),l(g,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{u(g,h.name)}),a(g,`input`,v);let b=s(`input`,m);r(m,b),l(b,`rounded-md border-gray-300 shadow-sm px-3 py-1`),t(()=>{u(b,h.name)}),a(b,`input`,y);let x=s(`button`,m);r(m,x),l(x,`rounded-lg border border-green-500 bg-green-500 px-3 py-1.5 text-sm font-medium text-white`),a(x,`click`,_),r(x,f(`年龄+1`));let S=s(`p`,c);r(c,S),l(S,`text-gray-700`),r(S,f(`姓名：`));let C=e(`rue:slot:anchor`);r(S,C),t(()=>{let e=h.name;n(()=>d(e,S,C))});let w=s(`p`,c);r(c,w),l(w,`text-gray-700`),r(w,f(`年龄：`));let T=e(`rue:slot:anchor`);return r(w,T),t(()=>{let e=h.age;n(()=>d(e,w,T))}),o})}});export{g as default};