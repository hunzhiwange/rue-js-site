import{$t as e,J as t,Jt as n,Q as r,St as i,Z as a,_t as o,dt as s,et as c,i as l,in as u,it as d,jt as f,l as p,lt as m,n as h,nt as g,o as _,r as v,rn as y,rt as b,s as x,t as S,ut as C,vt as w,zt as T}from"./vapor-runtime-DsQWl-IB.js";import{a as E,n as D,t as O}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as k}from"./useApp-CESRmTJr.js";import{t as A}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var j=t=>p(n=>{let i=g(`li`,n);s(i,`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`);let o=g(`label`,i);r(i,o),s(o,`flex min-w-0 flex-1 cursor-pointer items-center gap-3`);let l=g(`input`,o);r(o,l),m(l,`type`,`checkbox`),s(l,`checkbox checkbox-primary checkbox-sm`),T(()=>{C(l,!!t.todo.done)}),a(l,`change`,()=>t.onToggle(t.todo.id));let u=g(`span`,o);r(o,u),T(()=>{s(u,`truncate ${t.todo.done?`text-base-content/45 line-through`:``}`)});let d=c(`rue:slot:anchor`);r(u,d),T(()=>{let n=t.todo.text;e(()=>_(n,u,d))});let f=g(`button`,i);return r(i,f),s(f,`btn btn-ghost btn-xs`),a(f,`click`,()=>t.onRemove(t.todo.id)),r(f,b(`删除`)),i}),M=()=>{let{state:n,addTodo:l,toggleTodo:h,removeTodo:v,completed:y}=E(`useSetup:0:0`,()=>u(()=>{let e=E(`reactive:1:0`,()=>f({draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`通过 useApp().component 注册 TodoItem`,done:!0},{id:3,text:`用 <Component is="TodoItem" /> 渲染`,done:!1}]}));return{state:e,addTodo:()=>{let t=e.draft.trim();t&&(e.todos.push({id:Date.now(),text:t,done:!1}),e.draft=``)},toggleTodo:t=>{let n=e.todos.find(e=>e.id===t);n&&(n.done=!n.done)},removeTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)},completed:E(`computed:1:1`,()=>i(()=>e.todos.filter(e=>e.done).length))}}));return p(i=>{let u=g(`div`,i);s(u,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let f=g(`div`,u);r(u,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=g(`div`,f);r(f,p);let C=g(`p`,p);r(p,C),s(C,`text-xs font-semibold uppercase tracking-[0.22em] text-primary`),r(C,b(`registered runtime app`));let E=g(`h2`,p);r(p,E),s(E,`mt-2 text-2xl font-semibold`),r(E,b(`TodoItem 来自字符串注册名`));let O=g(`p`,p);r(p,O),s(O,`mt-2 max-w-2xl text-sm leading-6 text-base-content/70`),r(O,b(`列表项没有直接写成`));let k=g(`code`,O);r(O,k);let A=d(k);r(k,A),w(A,`<TodoItem />`),r(O,b(`，而是通过`));let j=d(O);r(O,j),w(j,` `);let M=g(`code`,O);r(O,M);let N=d(M);r(M,N),w(N,`<Component is="TodoItem" />`),r(O,b(`从当前应用的注册表解析。`));let P=g(`div`,f);r(f,P),s(P,`stats stats-horizontal bg-base-200`);let F=g(`div`,P);r(P,F),s(F,`stat px-4 py-2`);let I=g(`div`,F);r(F,I),s(I,`stat-title text-xs`),r(I,b(`完成`));let L=g(`div`,F);r(F,L),s(L,`stat-value text-lg`);let R=c(`rue:slot:anchor`);r(L,R),T(()=>{let t=y.get();e(()=>_(t,L,R))}),r(L,b(`/`));let z=c(`rue:slot:anchor`);r(L,z),T(()=>{let t=n.todos.length;e(()=>_(t,L,z))});let B=g(`div`,u);r(u,B),s(B,`mt-5 flex flex-col gap-3 sm:flex-row`);let V=g(`input`,B);r(B,V),s(V,`input input-bordered flex-1`),T(()=>{o(V,n.draft)}),m(V,`placeholder`,`新增一条任务`),a(V,`input`,e=>{n.draft=e.currentTarget.value}),a(V,`keydown`,e=>{e.key===`Enter`&&l()});let H=g(`button`,B);r(B,H),s(H,`btn btn-primary`),a(H,`click`,l),r(H,b(`添加`));let U=g(`ul`,u);r(u,U),s(U,`mt-4 grid gap-3`);let W=c(`rue:list:start`),G=c(`rue:list:end`);r(U,W),r(U,G);let K=new Map;return T(()=>{K=D({items:n.todos||[],getKey:(e,t)=>e.id,elements:K,parent:U,before:G,start:W,renderItem:(e,n,r,i,a)=>{x(S(t,{is:`TodoItem`,key:e.id,todo:e,onToggle:h,onRemove:v}),n,r,i)}})}),u})},N=A({title:`useApp().component 运行时注册`,source:`import {
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
`,Demo:()=>{let e=E(`useSetup:0:0:dup1`,()=>u(()=>{let e=E(`useRef:1:2`,()=>y()),t=E(`ref:1:3`,()=>n(`等待外层 demo 挂载内部应用`)),r=null,i=!1;return v(()=>{queueMicrotask(()=>{if(i)return;let n=e.current;n&&(r=k(M).component(`TodoItem`,j),r.mount(n),t.value=`已注册 TodoItem，并通过 Component 的字符串 is 完成渲染`)})}),l(()=>{i=!0,r?.unmount(),r=null}),{mountTarget:e,status:t,innerApp:r,disposed:i}})),{mountTarget:t,status:i}=e,{innerApp:a,disposed:o}=e;return p(e=>{let n=g(`div`,e);s(n,`grid gap-4`);let a=g(`div`,n);r(n,a),s(a,`alert border border-info/30 bg-info/10 text-sm`);let o=g(`span`,a);r(a,o);let c=d(o);r(o,c),T(()=>{w(c,i.value)});let l=g(`div`,n);r(n,l);let u=O(l,()=>t);h(()=>{u()});let f=g(`div`,n);r(n,f),s(f,`mockup-code bg-neutral text-neutral-content`);let p=g(`pre`,f);r(f,p),m(p,`data-prefix`,`1`);let _=g(`code`,p);r(p,_);let v=d(_);r(_,v),T(()=>{w(v,`const app = useApp(RegisteredTodoHost)`)});let y=g(`pre`,f);r(f,y),m(y,`data-prefix`,`2`);let b=g(`code`,y);r(y,b);let x=d(b);r(b,x),T(()=>{w(x,`.component('TodoItem', TodoItem)`)});let S=g(`pre`,f);r(f,S),m(S,`data-prefix`,`3`);let C=g(`code`,S);r(S,C);let E=d(C);return r(C,E),T(()=>{w(E,`.mount(container)`)}),n})}});export{N as default};