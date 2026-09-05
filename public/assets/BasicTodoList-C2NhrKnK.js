import{C as e,Dn as t,Et as n,Gt as r,L as i,Lt as a,S as o,Sn as s,W as c,Y as l,_n as u,bn as d,fn as f,ft as p,gn as m,hn as h,ht as g,kn as _,nn as v,ot as y,qt as b,wn as x,x as S,yn as C}from"./rue-runtime-CwEGJ854.js";import{t as w}from"./createHomeSplitExamplePage-DuLZTUZH.js";var T=u(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">基础待办事项</h2><div class="flex items-center gap-2 mb-3"><input type="text" placeholder="输入待办事项" class="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"><button class="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200">添加</button></div><div><!--rue:text-hole:0--></div><p><!--rue:text-hole:1--></p></div></div>`),E=()=>b(`reactive:1:0`,()=>v({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),D=w({title:`基础待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:u,todoViews:v,completedCount:w,addTodo:D,toggleTodo:O,deleteTodo:k}=C(`useSetup:0:0`,()=>{let[e]=r(E),[t]=r(()=>b(`computed:1:2`,()=>s(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t}))),[n]=r(()=>b(`computed:1:4`,()=>s(()=>t.get().filter(e=>e.completed).length)));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}});return g(r=>{let s=T().content.cloneNode(!0).firstChild,g=s.childNodes[0].childNodes[1].childNodes[0],b=s.childNodes[0].childNodes[1].childNodes[1],C=s.childNodes[0].childNodes[2].childNodes[0],E=C.parentNode,A=s.childNodes[0].childNodes[3].childNodes[0],j=A.parentNode;y(g,`type`,`text`),y(g,`placeholder`,`输入待办事项`),x(()=>{p(g,u.newTodo)});let M=e=>{let t=e=>{u.newTodo=e.target.value};typeof t==`function`&&t(e)};g.addEventListener(`input`,M),a(()=>g.removeEventListener(`input`,M));let N=e=>{let t=e=>{e.key===`Enter`&&D()};typeof t==`function`&&t(e)};g.addEventListener(`keypress`,N),a(()=>g.removeEventListener(`keypress`,N)),i(g,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),i(b,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`);let P=e=>{let t=D;typeof t==`function`&&t(e)};b.addEventListener(`click`,P),a(()=>b.removeEventListener(`click`,P));let F=[];return x(()=>{let r=v.get()||[];F=e(E,C,F,r,(e,t)=>e.id,(e,r)=>{let i=c(e),a=c(r);return o((e,r,a)=>S(e,a,()=>n(Object.assign(e=>{let n=h(`div`,e),r;x(()=>{let e=`flex items-center justify-between rounded-lg border p-3 mb-2 ${i.get().completed?`bg-gray-50`:`bg-white`}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let a=h(`span`,n);f(n,a);let o=e=>{let t=()=>O(i.get().id);typeof t==`function`&&t(e)};a.addEventListener(`click`,o),t(()=>a.removeEventListener(`click`,o));let s;x(()=>{let e=`cursor-pointer ${i.get().completed?`line-through text-gray-500`:`text-gray-800`}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,a.className=t)});let c=m(``);f(a,c),d(c,()=>i.get().text);let l=h(`button`,n);f(n,l),l.className=`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`;let u=e=>{let t=()=>k(i.get().id);typeof t==`function`&&t(e)};return l.addEventListener(`click`,u),t(()=>l.removeEventListener(`click`,u)),f(l,m(`删除`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,i.set(t),a.set(n)})})}),x(()=>{let e=`总计: ${u.todos.length} | 已完成: ${w.get()}`;_(()=>l(e,j,A))}),s})}});export{D as default};