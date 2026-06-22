import{J as e,Nt as t,Q as n,Vt as r,Xt as i,Z as a,an as o,at as s,bt as c,dt as l,ft as u,i as d,it as f,l as p,n as m,o as h,on as g,pt as _,r as v,rt as y,s as b,t as x,tn as S,tt as C,wt as w,yt as T}from"./vapor-runtime-x7F5M-49.js";import{a as E,n as D,t as O}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as k}from"./useApp-l3GbGuGa.js";import{t as A}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var j=e=>p(t=>{let i=y(`li`,t);_(i,`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`);let o=y(`label`,i);n(i,o),_(o,`flex min-w-0 flex-1 cursor-pointer items-center gap-3`);let s=y(`input`,o);n(o,s),l(s,`type`,`checkbox`),_(s,`checkbox checkbox-primary checkbox-sm`),r(()=>{u(s,!!e.todo.done)}),a(s,`change`,()=>e.onToggle(e.todo.id));let c=y(`span`,o);n(o,c),r(()=>{_(c,`truncate ${e.todo.done?`text-base-content/45 line-through`:``}`)});let d=C(`rue:slot:anchor`);n(c,d),r(()=>{let t=e.todo.text;S(()=>h(t,c,d))});let p=y(`button`,i);return n(i,p),_(p,`btn btn-ghost btn-xs`),a(p,`click`,()=>e.onRemove(e.todo.id)),n(p,f(`删除`)),i}),M=()=>{let{state:i,addTodo:o,toggleTodo:u,removeTodo:d,completed:m}=E(`useSetup:0:0`,()=>g(()=>{let e=E(`reactive:1:0`,()=>t({draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`通过 useApp().component 注册 TodoItem`,done:!0},{id:3,text:`用 <Component is="TodoItem" /> 渲染`,done:!1}]}));return{state:e,addTodo:()=>{let t=e.draft.trim();t&&(e.todos.push({id:Date.now(),text:t,done:!1}),e.draft=``)},toggleTodo:t=>{let n=e.todos.find(e=>e.id===t);n&&(n.done=!n.done)},removeTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)},completed:E(`computed:1:1`,()=>w(()=>e.todos.filter(e=>e.done).length))}}));return p(t=>{let p=y(`div`,t);_(p,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let g=y(`div`,p);n(p,g),_(g,`flex flex-wrap items-start justify-between gap-3`);let v=y(`div`,g);n(g,v);let w=y(`p`,v);n(v,w),_(w,`text-xs font-semibold uppercase tracking-[0.22em] text-primary`),n(w,f(`registered runtime app`));let E=y(`h2`,v);n(v,E),_(E,`mt-2 text-2xl font-semibold`),n(E,f(`TodoItem 来自字符串注册名`));let O=y(`p`,v);n(v,O),_(O,`mt-2 max-w-2xl text-sm leading-6 text-base-content/70`),n(O,f(`列表项没有直接写成`));let k=y(`code`,O);n(O,k);let A=s(k);n(k,A),c(A,`<TodoItem />`),n(O,f(`，而是通过`));let j=s(O);n(O,j),c(j,` `);let M=y(`code`,O);n(O,M);let N=s(M);n(M,N),c(N,`<Component is="TodoItem" />`),n(O,f(`从当前应用的注册表解析。`));let P=y(`div`,g);n(g,P),_(P,`stats stats-horizontal bg-base-200`);let F=y(`div`,P);n(P,F),_(F,`stat px-4 py-2`);let I=y(`div`,F);n(F,I),_(I,`stat-title text-xs`),n(I,f(`完成`));let L=y(`div`,F);n(F,L),_(L,`stat-value text-lg`);let R=C(`rue:slot:anchor`);n(L,R),r(()=>{let e=m.get();S(()=>h(e,L,R))}),n(L,f(`/`));let z=C(`rue:slot:anchor`);n(L,z),r(()=>{let e=i.todos.length;S(()=>h(e,L,z))});let B=y(`div`,p);n(p,B),_(B,`mt-5 flex flex-col gap-3 sm:flex-row`);let V=y(`input`,B);n(B,V),_(V,`input input-bordered flex-1`),r(()=>{T(V,i.draft)}),l(V,`placeholder`,`新增一条任务`),a(V,`input`,e=>{i.draft=e.currentTarget.value}),a(V,`keydown`,e=>{e.key===`Enter`&&o()});let H=y(`button`,B);n(B,H),_(H,`btn btn-primary`),a(H,`click`,o),n(H,f(`添加`));let U=y(`ul`,p);n(p,U),_(U,`mt-4 grid gap-3`);let W=C(`rue:list:start`),G=C(`rue:list:end`);n(U,W),n(U,G);let K=new Map;return r(()=>{K=D({items:i.todos||[],getKey:(e,t)=>e.id,elements:K,parent:U,before:G,start:W,renderItem:(t,n,r,i,a)=>{b(x(e,{is:`TodoItem`,key:t.id,todo:t,onToggle:u,onRemove:d}),n,r,i)}})}),p})},N=A({title:`useApp().component 运行时注册`,source:`import {
  Component,
  type FC,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useApp,
  useRef,
} from '@rue-js/rue'

type Todo = {
  id: number
  text: string
  done: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = props => (
  <li className="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3">
    <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="checkbox checkbox-primary checkbox-sm"
        checked={props.todo.done}
        onChange={() => props.onToggle(props.todo.id)}
      />
      <span className={\`truncate \${props.todo.done ? 'text-base-content/45 line-through' : ''}\`}>
        {props.todo.text}
      </span>
    </label>
    <button className="btn btn-ghost btn-xs" onClick={() => props.onRemove(props.todo.id)}>
      删除
    </button>
  </li>
)

const RegisteredTodoHost: FC = () => {
  const state = reactive({
    draft: '确认 Component 能解析字符串名',
    todos: [
      { id: 1, text: '定义 TodoItem 函数组件', done: true },
      { id: 2, text: '通过 useApp().component 注册 TodoItem', done: true },
      { id: 3, text: '用 <Component is="TodoItem" /> 渲染', done: false },
    ] as Todo[],
  })

  const addTodo = () => {
    const text = state.draft.trim()
    if (!text) return

    state.todos.push({
      id: Date.now(),
      text,
      done: false,
    })
    state.draft = ''
  }

  const toggleTodo = (id: number) => {
    const todo = state.todos.find(item => item.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }

  const removeTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  const completed = state.todos.filter(todo => todo.done).length

  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            registered runtime app
          </p>
          <h2 className="mt-2 text-2xl font-semibold">TodoItem 来自字符串注册名</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">
            列表项没有直接写成 <code>{'<TodoItem />'}</code>，而是通过{' '}
            <code>{'<Component is="TodoItem" />'}</code> 从当前应用的注册表解析。
          </p>
        </div>
        <div className="stats stats-horizontal bg-base-200">
          <div className="stat px-4 py-2">
            <div className="stat-title text-xs">完成</div>
            <div className="stat-value text-lg">
              {completed}/{state.todos.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          className="input input-bordered flex-1"
          value={state.draft}
          placeholder="新增一条任务"
          onInput={(event: any) => {
            state.draft = event.currentTarget.value
          }}
          onKeyDown={(event: any) => {
            if (event.key === 'Enter') addTodo()
          }}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          添加
        </button>
      </div>

      <ul className="mt-4 grid gap-3">
        {state.todos.map(todo => (
          <Component
            is="TodoItem"
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  )
}

const GlobalComponentRegistrationDemo: FC = () => {
  const mountTarget = useRef<HTMLDivElement>()
  const status = ref('等待外层 demo 挂载内部应用')
  let innerApp: ReturnType<typeof useApp> | null = null
  let disposed = false

  onMounted(() => {
    queueMicrotask(() => {
      if (disposed) return

      const target = mountTarget.current
      if (!target) return

      innerApp = useApp(RegisteredTodoHost).component('TodoItem', TodoItem as FC<any>)
      innerApp.mount(target)
      status.value = '已注册 TodoItem，并通过 Component 的字符串 is 完成渲染'
    })
  })

  onUnmounted(() => {
    disposed = true
    innerApp?.unmount()
    innerApp = null
  })

  return (
    <div className="grid gap-4">
      <div className="alert border border-info/30 bg-info/10 text-sm">
        <span>{status.value}</span>
      </div>
      <div ref={mountTarget} />
      <div className="mockup-code bg-neutral text-neutral-content">
        <pre data-prefix="1">
          <code>{\`const app = useApp(RegisteredTodoHost)\`}</code>
        </pre>
        <pre data-prefix="2">
          <code>{\`.component('TodoItem', TodoItem)\`}</code>
        </pre>
        <pre data-prefix="3">
          <code>{\`.mount(container)\`}</code>
        </pre>
      </div>
    </div>
  )
}

export default GlobalComponentRegistrationDemo
`,Demo:()=>{let e=E(`useSetup:0:0:dup1`,()=>g(()=>{let e=E(`useRef:1:2`,()=>o()),t=E(`ref:1:3`,()=>i(`等待外层 demo 挂载内部应用`)),n=null,r=!1;return v(()=>{queueMicrotask(()=>{if(r)return;let i=e.current;i&&(n=k(M).component(`TodoItem`,j),n.mount(i),t.value=`已注册 TodoItem，并通过 Component 的字符串 is 完成渲染`)})}),d(()=>{r=!0,n?.unmount(),n=null}),{mountTarget:e,status:t,innerApp:n,disposed:r}})),{mountTarget:t,status:a}=e,{innerApp:u,disposed:f}=e;return p(e=>{let i=y(`div`,e);_(i,`grid gap-4`);let o=y(`div`,i);n(i,o),_(o,`alert border border-info/30 bg-info/10 text-sm`);let u=y(`span`,o);n(o,u);let d=s(u);n(u,d),r(()=>{c(d,a.value)});let f=y(`div`,i);n(i,f);let p=O(f,()=>t);m(()=>{p()});let h=y(`div`,i);n(i,h),_(h,`mockup-code bg-neutral text-neutral-content`);let g=y(`pre`,h);n(h,g),l(g,`data-prefix`,`1`);let v=y(`code`,g);n(g,v);let b=s(v);n(v,b),r(()=>{c(b,`const app = useApp(RegisteredTodoHost)`)});let x=y(`pre`,h);n(h,x),l(x,`data-prefix`,`2`);let S=y(`code`,x);n(x,S);let C=s(S);n(S,C),r(()=>{c(C,`.component('TodoItem', TodoItem)`)});let w=y(`pre`,h);n(h,w),l(w,`data-prefix`,`3`);let T=y(`code`,w);n(w,T);let E=s(T);return n(T,E),r(()=>{c(E,`.mount(container)`)}),i})}});export{N as default};