import{At as e,C as t,Dn as n,Dt as r,E as i,P as a,Q as o,Qt as s,Vt as c,_n as l,an as u,at as d,b as f,bn as p,gn as m,kn as h,pn as g,sn as _,ut as v,vn as y,w as b,wn as x,xn as S,xt as C,z as w}from"./rue-runtime-HIMg8Lz8.js";import{t as T}from"./createHomeSplitExamplePage-DNdswIPW.js";var E=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">基础待办事项</h2><div class="flex items-center gap-2 mb-3"><input type="text" placeholder="输入待办事项" class="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"><button class="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200">添加</button></div><div><!--rue:text-hole:0--></div><p><!--rue:text-hole:1--></p></div></div>`),D=()=>_(`reactive:1:0`,()=>w({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),O=T({title:`基础待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const createTodoState = () =>
  reactive({
    todos: [
      { id: 1, text: '学习响应式框架', completed: false },
      { id: 2, text: '编写示例代码', completed: true },
      { id: 3, text: '测试功能', completed: false },
    ] as Todo[],
    newTodo: '',
  })

const BasicTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const [todoViews] = useState(() =>
    computed(() => {
      const items: Todo[] = []

      for (let index = 0; index < state.todos.length; index += 1) {
        const todo = state.todos[index]
        if (todo !== undefined && todo !== null) {
          items.push(todo)
        }
      }

      return items
    }),
  )
  const [completedCount] = useState(() =>
    computed(() => todoViews.get().filter(todo => todo.completed).length),
  )

  const addTodo = () => {
    if (!state.newTodo.trim()) {
      return
    }

    state.todos.push({
      id: Date.now(),
      text: state.newTodo,
      completed: false,
    })
    state.newTodo = ''
  }

  const toggleTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos[index].completed = !state.todos[index].completed
    }
  }

  const deleteTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">基础待办事项</h2>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="输入待办事项"
            value={state.newTodo}
            onInput={(event: any) => {
              state.newTodo = (event.target as HTMLInputElement).value
            }}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') addTodo()
            }}
            className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          />
          <button
            className="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200"
            onClick={addTodo}
          >
            添加
          </button>
        </div>
        <div>
          {todoViews.get().map(todo => (
            <div
              key={todo.id}
              className={\`flex items-center justify-between rounded-lg border p-3 mb-2 \${todo.completed ? 'bg-gray-50' : 'bg-white'}\`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={\`cursor-pointer \${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}\`}
              >
                {todo.text}
              </span>
              <button
                className="rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </div>
          ))}
        </div>
        <p>{\`总计: \${state.todos.length} | 已完成: \${completedCount.get()}\`}</p>
      </div>
    </div>
  )
}

export default BasicTodoListDemo
`,Demo:()=>{let{state:y,todoViews:w,completedCount:T,addTodo:O,toggleTodo:k,deleteTodo:A}=p(`useSetup:0:0`,()=>{let[e]=u(D),[t]=u(()=>_(`computed:1:2`,()=>a(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t}))),[n]=u(()=>_(`computed:1:4`,()=>a(()=>t.get().filter(e=>e.completed).length)));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}});return e(e=>{let a=E().content.cloneNode(!0).firstChild,u=a.childNodes[0].childNodes[1].childNodes[0],p=a.childNodes[0].childNodes[1].childNodes[1],_=a.childNodes[0].childNodes[2].childNodes[0],D=_.parentNode,j=a.childNodes[0].childNodes[3].childNodes[0],M=j.parentNode;C(u,`type`,`text`),C(u,`placeholder`,`输入待办事项`),x(()=>{r(u,y.newTodo)});let N=e=>{let t=e=>{y.newTodo=e.target.value};typeof t==`function`&&t(e)};u.addEventListener(`input`,N),s(()=>u.removeEventListener(`input`,N));let P=e=>{let t=e=>{e.key===`Enter`&&O()};typeof t==`function`&&t(e)};u.addEventListener(`keypress`,P),s(()=>u.removeEventListener(`keypress`,P)),o(u,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(p,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`);let F=e=>{let t=O;typeof t==`function`&&t(e)};p.addEventListener(`click`,F),s(()=>p.removeEventListener(`click`,F));let I=[];return x(()=>{let e=w.get()||[];I=b(D,_,I,e,(e,t)=>e.id,(e,r)=>{let a=d(e);return t((e,t,r)=>i(e,r,()=>c(Object.assign(e=>{let t=m(`div`,e),r;x(()=>{let e=`flex items-center justify-between rounded-lg border p-3 mb-2 ${a.get().completed?`bg-gray-50`:`bg-white`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=m(`span`,t);g(t,i);let o=e=>{let t=()=>k(a.get().id);typeof t==`function`&&t(e)};i.addEventListener(`click`,o),n(()=>i.removeEventListener(`click`,o));let s;x(()=>{let e=`cursor-pointer ${a.get().completed?`line-through text-gray-500`:`text-gray-800`}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=l(``);g(i,c),S(c,()=>a.get().text);let u=m(`button`,t);g(t,u),u.className=`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`;let d=e=>{let t=()=>A(a.get().id);typeof t==`function`&&t(e)};return u.addEventListener(`click`,d),n(()=>u.removeEventListener(`click`,d)),g(u,l(`删除`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>f(I)),x(()=>{let e=`总计: ${y.todos.length} | 已完成: ${T.get()}`;h(()=>v(e,M,j))}),a})}});export{O as default};