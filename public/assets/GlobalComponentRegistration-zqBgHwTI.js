import{Bt as e,Gt as t,H as n,Ht as r,Kt as i,Qt as a,U as o,V as s,Vt as c,Wt as l,Xt as u,Y as d,Yt as f,Zt as p,_t as m,en as h,et as g,f as _,gn as v,gt as y,h as b,in as x,mn as S,p as C,qt as w,sn as T,u as E,vt as D,yn as O,zt as k}from"./rue-runtime-Cv6BZekS.js";import{t as A}from"./createHomeSplitExamplePage-DqLcVC_n.js";var j=t([`todos`],[!1]),M=t([`draft`],[!1]),N=t([`todos`,`length`],[!1,!1]),P=O(`<li class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"><label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3"><input type="checkbox" class="checkbox checkbox-primary checkbox-sm"><span><!--rue:text-hole:0--></span></label><button class="btn btn-ghost btn-xs">删除</button></li>`),F=O(`<div class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">compiler-proven registry</p><h2 class="mt-2 text-2xl font-semibold">TodoItem 来自有限组件注册表</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-base-content/70"><code>&lt;Component is="TodoItem" /&gt;</code> 的 registry 在调用点显式声明，编译器能静态 验证并生成有限工厂分支。</p></div><div class="stats stats-horizontal bg-base-200"><div class="stat px-4 py-2"><div class="stat-title text-xs">完成</div><div class="stat-value text-lg"><!--rue:text-hole:0-->/<!--rue:text-hole:1--></div></div></div></div><div class="mt-5 flex flex-col gap-3 sm:flex-row"><input class="input input-bordered flex-1" placeholder="新增一条任务"><button class="btn btn-primary">添加</button></div><ul class="mt-4 grid gap-3"><!--rue:text-hole:2--></ul></div>`),I=O(`<div class="grid gap-4"><div class="alert border border-info/30 bg-info/10 text-sm"><span>TodoItem 已通过调用点的有限 registry 编译为静态工厂分支。</span></div><!--rue:opaque-hole:0--><div class="mockup-code bg-neutral text-neutral-content"><pre data-prefix="1"><code><!--rue:text-hole:1--></code></pre><pre data-prefix="2"><code><!--rue:text-hole:2--></code></pre><pre data-prefix="3"><code><!--rue:text-hole:3--></code></pre><pre data-prefix="4"><code><!--rue:text-hole:4--></code></pre></div></div>`),L=(t,n,r)=>{let i=D(y(t,`onRemove`)),a=D(y(t,`onToggle`)),s=D(y(t,`todo`));return o(l(t=>{let n=S(),r=P().content.cloneNode(!0),o=r.firstChild,c=o.childNodes[0].childNodes[0],l=o.childNodes[0].childNodes[1],u=o.childNodes[1],d=o.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode;n.appendChild(r),c.setAttribute(`type`,`checkbox`),c.setAttribute(`class`,`checkbox checkbox-primary checkbox-sm`);let p;x(()=>{let e=!!s.get().done;Object.is(p,e)||(p=e,c.checked=e)}),T(E(t,c,`change`,()=>()=>a.get()(s.get().id)));let m;x(()=>{let e=`truncate ${s.get().done?`text-base-content/45 line-through`:``}`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,l.setAttribute(`class`,t))}),u.setAttribute(`class`,`btn btn-ghost btn-xs`),T(E(t,u,`click`,()=>()=>i.get()(s.get().id))),e({parent:f,before:d},()=>k(s.get().text),()=>({}));let h=v(``),g=v(``);return n.insertBefore(h,n.firstChild),n.appendChild(g),[n.firstChild,n.lastChild]}),e=>h(()=>{i.set(e.onRemove),a.set(e.onToggle),s.set(e.todo)}),()=>m(t))},R=(t,n,o)=>{let[m]=g(`RegisteredTodoHost:hook:0`,{draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`为 Component 声明有限 registry`,done:!0},{id:3,text:`用静态可证明的 TodoItem 工厂渲染`,done:!1}]}),h=()=>{let e=`${m.get().draft}`.trim();e&&(u(f(p(m))(`todos`),`push`)({id:Date.now(),text:e,done:!1}),f(p(m))(`draft`).value=``)},y=e=>{let t=m.get().todos.findIndex(t=>t.id===e);t!==-1&&(f(f(p(m))(`todos`))(t).value={...i(m,j)[t],done:!i(m,j)[t].done})},S=e=>{let t=m.get().todos.findIndex(t=>t.id===e);t!==-1&&u(f(p(m))(`todos`),`splice`)(t,1)},E=m.get().todos.filter(e=>e.done).length;return d(()=>l(t=>{let n=F().content.cloneNode(!0).firstChild,o=n.childNodes[1].childNodes[0],l=n.childNodes[1].childNodes[1],u=n.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],d=u.parentNode,g=n.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[2],O=g.parentNode,A=n.childNodes[2].childNodes[0],j=A.parentNode;o.setAttribute(`class`,`input input-bordered flex-1`);let P;x(()=>{let e=i(m,M),t=e==null?``:String(e);Object.is(P,t)||(P=t,o.value=t)}),o.setAttribute(`placeholder`,`新增一条任务`);let I=e=>{let t=e=>{f(p(m))(`draft`).value=e.currentTarget.value};typeof t==`function`&&t(e)};o.addEventListener(`input`,I),T(()=>o.removeEventListener(`input`,I));let R=e=>{let t=e=>{e.key===`Enter`&&h()};typeof t==`function`&&t(e)};o.addEventListener(`keydown`,R),T(()=>o.removeEventListener(`keydown`,R)),l.setAttribute(`class`,`btn btn-primary`);let z=e=>{let t=h;typeof t==`function`&&t(e)};l.addEventListener(`click`,z),T(()=>l.removeEventListener(`click`,z)),e({parent:d,before:u},()=>k(E),()=>({}));let B=v(``);O.insertBefore(B,g),O.removeChild(g),a(B,()=>i(m,N));let V=[];return w(()=>{let e=m.get().todos||[];V=b(j,A,V,e,(e,t)=>e.id,(e,t)=>{let n=D(e);return C((e,t,i)=>{let a=()=>r(()=>{switch(`TodoItem`){case`TodoItem`:return{__rue_compiled_branch_key:`TodoItem`,create:()=>s(L,()=>({todo:n.get(),onToggle:y,onRemove:S}))};default:throw Error(`Unknown compiled component key`)}});return e==null?a():c(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),T(()=>_(V)),[n,n]}))},z=(t,n,r)=>l(t=>{let n=I().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode,o=n.childNodes[2].childNodes[0].childNodes[0].childNodes[0],l=o.parentNode,u=n.childNodes[2].childNodes[1].childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[2].childNodes[2].childNodes[0].childNodes[0],p=f.parentNode,m=n.childNodes[2].childNodes[3].childNodes[0].childNodes[0],h=m.parentNode,g=(e,t,n)=>{let r=()=>s(R,()=>({}));return e==null?r():c(e,n,r)},_=r.nextSibling;i.removeChild(r),e({parent:i,before:_},()=>g,()=>({}));let y=v(``);l.insertBefore(y,o),l.removeChild(o),a(y,()=>`<Component`);let b=v(``);d.insertBefore(b,u),d.removeChild(u),a(b,()=>`  is="TodoItem"`);let x=v(``);p.insertBefore(x,f),p.removeChild(f),a(x,()=>`  registry={{ TodoItem }}`);let S=v(``);return h.insertBefore(S,m),h.removeChild(m),a(S,()=>`/>`),[n,n]}),B=`import { Component, type FC, useState } from '@rue-js/rue'

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
  const [state] = useState({
    draft: '确认 Component 能解析字符串名',
    todos: [
      { id: 1, text: '定义 TodoItem 函数组件', done: true },
      { id: 2, text: '为 Component 声明有限 registry', done: true },
      { id: 3, text: '用静态可证明的 TodoItem 工厂渲染', done: false },
    ] as Todo[],
  })

  const addTodo = () => {
    const text = \`\${state.draft}\`.trim()
    if (!text) return

    state.todos.push({
      id: Date.now(),
      text,
      done: false,
    })
    state.draft = ''
  }

  const toggleTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], done: !state.todos[index].done }
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
            compiler-proven registry
          </p>
          <h2 className="mt-2 text-2xl font-semibold">TodoItem 来自有限组件注册表</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">
            <code>{'<Component is="TodoItem" />'}</code> 的 registry 在调用点显式声明，编译器能静态
            验证并生成有限工厂分支。
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
            is={'TodoItem'}
            registry={{ TodoItem }}
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
  return (
    <div className="grid gap-4">
      <div className="alert border border-info/30 bg-info/10 text-sm">
        <span>TodoItem 已通过调用点的有限 registry 编译为静态工厂分支。</span>
      </div>
      <RegisteredTodoHost />
      <div className="mockup-code bg-neutral text-neutral-content">
        <pre data-prefix="1">
          <code>{\`<Component\`}</code>
        </pre>
        <pre data-prefix="2">
          <code>{\`  is="TodoItem"\`}</code>
        </pre>
        <pre data-prefix="3">
          <code>{\`  registry={{ TodoItem }}\`}</code>
        </pre>
        <pre data-prefix="4">
          <code>{\`/>\`}</code>
        </pre>
      </div>
    </div>
  )
}

export default GlobalComponentRegistrationDemo
`,V=(e,t,r)=>s(A,()=>({options:{title:`useApp().component 运行时注册`,source:B},children:(e,t,r)=>{let i=()=>l(e=>{let t=S();n(t,z,()=>({}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));export{V as default};