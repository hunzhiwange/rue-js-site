import{$ as e,Ht as t,J as n,Jt as r,Q as i,Tt as a,Xt as o,Y as s,Z as c,_t as l,ct as u,et as d,l as f,mt as p,ot as m,pt as h,qt as g,s as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./createHomeSplitExamplePage-CJbW_xoB.js";var S=()=>y(`reactive:1:0`,()=>a({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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

const LocalTodoListDemo: FC = () => {
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
        <h2 className="text-2xl font-semibold mb-3">本地待办事项</h2>
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

export default LocalTodoListDemo
`,Demo:()=>{let{state:a,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>g(()=>{let[e]=y(`useState:1:1`,()=>r(S)),[t]=y(`useState:1:3`,()=>r(()=>y(`computed:1:2`,()=>l(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>r(()=>y(`computed:1:4`,()=>l(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return f(r=>{let l=e(`div`,r);u(l,`card bg-base-100 shadow`);let g=e(`div`,l);s(l,g),u(g,`card-body`);let y=e(`h2`,g);s(g,y),u(y,`text-2xl font-semibold mb-3`),s(y,d(`本地待办事项`));let S=e(`div`,g);s(g,S),u(S,`flex items-center gap-2 mb-3`);let D=e(`input`,S);s(S,D),m(D,`type`,`text`),m(D,`placeholder`,`输入待办事项`),o(()=>{h(D,a.newTodo)}),n(D,`input`,e=>{a.newTodo=e.target.value}),n(D,`keypress`,e=>{e.key===`Enter`&&w()}),u(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=e(`button`,S);s(S,O),u(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),n(O,`click`,w),s(O,d(`添加`));let k=e(`div`,g);s(g,k);let A=c(`rue:list:start`),j=c(`rue:list:end`);s(k,A),s(k,j);let M=new Map;o(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(r,a,l,p,h)=>{_(f(()=>{let a=i(),l=e(`div`,a);s(a,l),o(()=>{m(l,`key`,String(r.id))}),o(()=>{u(l,String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${r.completed?`bg-gray-50`:`bg-white`}`))});let f=e(`span`,l);s(l,f),n(f,`click`,()=>T(r.id)),o(()=>{u(f,String(`cursor-pointer ${r.completed?`line-through text-gray-500`:`text-gray-800`}`))});let p=c(`rue:slot:anchor`);s(f,p),o(()=>{let e=r.text;t(()=>_(e,f,p))});let h=e(`button`,l);return s(l,h),u(h,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),n(h,`click`,()=>E(r.id)),s(h,d(`删除`)),a}),a,l)}})});let N=e(`p`,g);s(g,N);let P=v(N);return s(N,P),o(()=>{p(P,`总计: ${a.todos.length} | 已完成: ${C.get()}`)}),l})}});export{C as default};