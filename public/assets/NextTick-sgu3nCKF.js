import{At as e,C as t,Dn as n,Dt as r,E as i,Mt as a,Pn as o,Q as s,Qt as c,Vt as l,Wt as u,_n as d,_t as f,at as p,b as m,ct as h,dt as g,et as _,ft as v,gn as y,gt as b,kn as x,mn as S,nt as C,pn as w,qt as T,rt as E,st as D,tn as O,ut as k,vn as A,vt as j,w as M,wn as N,x as P,xn as F,xt as I,yt as L}from"./rue-runtime-HIMg8Lz8.js";import{t as R}from"./Code-DpH7u0gk.js";import{r as z}from"./SidebarPlaygroundExample-BCPRe0hA.js";var B=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。</p><div class="rounded-box border border-base-300 bg-base-100"><div class="flex items-center justify-between border-b border-base-300 px-4 py-3"><div class="text-sm font-medium text-base-content/70">订单通知流</div><div class="badge badge-outline"><!--rue:text-hole:0--> 条消息</div></div><div class="max-h-56 space-y-3 overflow-y-auto px-4 py-4"><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">追加通知并滚动到底部</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 scrollHeight</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后的高度</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),V=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],H=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],U=()=>{let e=O(H()),r=O(`尚未追加`),a=O(`尚未追加`),s=O([...V]),c=u(`ChatScrollDemo:hook:0`),f=async()=>{let t=e.value.length+1,n=String(19+t).padStart(2,`0`);e.value=[...e.value,{id:t,text:`09:${n} 订单 #A10${20+t} 已完成支付`}];let i=c.current?.scrollHeight??0;r.value=`${i}px（旧高度）`,a.value=`等待 flush...`,s.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${i}px`,`等待 nextTick() 后重新计算高度...`],c.current&&(c.current.scrollTop=i),await o();let l=c.current?.scrollHeight??0;c.current&&(c.current.scrollTop=l),a.value=`${l}px（已包含新消息）`,s.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${i}px`,`nextTick() 后 scrollHeight：${l}px，并已滚动到底部`]},g=()=>{e.value=H(),r.value=`尚未追加`,a.value=`尚未追加`,s.value=[...V],c.current&&(c.current.scrollTop=0)};return T(()=>h(l(Object.assign(o=>{let u=B().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1].childNodes[1],_=u.childNodes[0].childNodes[2].childNodes[0],v=u.childNodes[0].childNodes[2].childNodes[1],b=u.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],x=b.parentNode,S=u.childNodes[0].childNodes[1].childNodes[1].childNodes[0],C=S.parentNode,T=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],E=T.parentNode,D=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],O=D.parentNode,k=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],j=k.parentNode,I=c;typeof I==`function`?I(h):I&&typeof I==`object`&&`current`in I&&(I.current=h),n(()=>{typeof I==`function`?I(null):I&&typeof I==`object`&&`current`in I&&(I.current=null)}),h.className=`max-h-56 space-y-3 overflow-y-auto px-4 py-4`,_.className=`btn btn-primary`;let L=e=>{let t=()=>void f();typeof t==`function`&&t(e)};_.addEventListener(`click`,L),n(()=>_.removeEventListener(`click`,L)),v.className=`btn btn-ghost`;let R=e=>{let t=g;typeof t==`function`&&t(e)};v.addEventListener(`click`,R),n(()=>v.removeEventListener(`click`,R));let z=d(``);x.insertBefore(z,b),x.removeChild(b),F(z,()=>e.value.length);let V=A(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><!--rue:text-hole:0--></div>`),H=[];N(()=>{let t=e.value||[];H=M(C,S,H,t,(e,t)=>e.id,(e,t,n)=>{let r=e,i;return P(e=>{let t=V().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=d(``);a.insertBefore(o,n),a.removeChild(n);let s;{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}return i=()=>{{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>m(H));let U=d(``);E.insertBefore(U,T),E.removeChild(T),F(U,()=>r.value);let W=d(``);O.insertBefore(W,D),O.removeChild(D),F(W,()=>a.value);let G=[];return N(()=>{let e=s.value||[];G=M(j,k,G,e,(e,t)=>`chat-scroll-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(G)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},W=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type ChatMessage = {
  id: number
  text: string
}

const defaultLogs = [
  '1. 追加一条新的订单通知',
  '2. 同步读取列表 scrollHeight 并尝试滚动',
  '3. await nextTick() 后再读取高度并滚到底部',
]

const createChatMessages = (): ChatMessage[] => [
  { id: 1, text: '09:20 新订单 #A1024 已创建' },
  { id: 2, text: '09:21 支付回调已确认' },
  { id: 3, text: '09:22 仓库开始拣货' },
  { id: 4, text: '09:23 配送单已推送' },
]

const ChatScrollDemo: FC = () => {
  const messages = ref<ChatMessage[]>(createChatMessages())
  const syncHeight = ref('尚未追加')
  const flushedHeight = ref('尚未追加')
  const logLines = ref<string[]>([...defaultLogs])
  const listRef = useRef<HTMLDivElement>()

  const appendMessage = async () => {
    const nextId = messages.value.length + 1
    const minute = String(19 + nextId).padStart(2, '0')

    messages.value = [
      ...messages.value,
      {
        id: nextId,
        text: \`09:\${minute} 订单 #A10\${20 + nextId} 已完成支付\`,
      },
    ]

    const currentHeight = listRef.current?.scrollHeight ?? 0
    syncHeight.value = \`\${currentHeight}px（旧高度）\`
    flushedHeight.value = '等待 flush...'
    logLines.value = [
      \`消息数已变为 \${messages.value.length}\`,
      \`同步读取 scrollHeight：\${currentHeight}px\`,
      '等待 nextTick() 后重新计算高度...',
    ]

    if (listRef.current) {
      listRef.current.scrollTop = currentHeight
    }

    await nextTick()

    const nextHeight = listRef.current?.scrollHeight ?? 0
    if (listRef.current) {
      listRef.current.scrollTop = nextHeight
    }
    flushedHeight.value = \`\${nextHeight}px（已包含新消息）\`
    logLines.value = [
      \`消息数已变为 \${messages.value.length}\`,
      \`同步读取 scrollHeight：\${currentHeight}px\`,
      \`nextTick() 后 scrollHeight：\${nextHeight}px，并已滚动到底部\`,
    ]
  }

  const reset = () => {
    messages.value = createChatMessages()
    syncHeight.value = '尚未追加'
    flushedHeight.value = '尚未追加'
    logLines.value = [...defaultLogs]
    if (listRef.current) {
      listRef.current.scrollTop = 0
    }
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取
          scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。
        </p>

        <div className="rounded-box border border-base-300 bg-base-100">
          <div className="flex items-center justify-between border-b border-base-300 px-4 py-3">
            <div className="text-sm font-medium text-base-content/70">订单通知流</div>
            <div className="badge badge-outline">{messages.value.length} 条消息</div>
          </div>
          <div ref={listRef} className="max-h-56 space-y-3 overflow-y-auto px-4 py-4">
            {messages.value.map(message => (
              <div key={message.id} className="rounded-box bg-base-200/70 p-3 text-sm leading-6">
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void appendMessage()}>
            追加通知并滚动到底部
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的 scrollHeight</div>
            <div className="mt-2 font-mono text-2xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后的高度</div>
            <div className="mt-2 font-mono text-2xl text-success">{flushedHeight.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`chat-scroll-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatScrollDemo
`,G=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。</p><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">当前 DOM 文本</div><div class="mt-3 text-4xl font-semibold text-primary"><span><!--rue:text-hole:0--></span></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">自增并读取 DOM</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 DOM 文本</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后读取</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:2--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),K=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],q=()=>{let e=O(0),r=O(`尚未读取`),a=O(`尚未读取`),s=O([...K]),c=u(`DomReadDemo:hook:0`),f=async()=>{e.value+=1;let t=c.current?.textContent??`(missing)`;r.value=t,a.value=`等待 flush...`,s.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${t}`,`等待 nextTick() 完成...`],await o();let n=c.current?.textContent??`(missing)`;a.value=n,s.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${t}`,`nextTick() 后读取 DOM：${n}`]},g=()=>{e.value=0,r.value=`尚未读取`,a.value=`尚未读取`,s.value=[...K]};return T(()=>h(l(Object.assign(o=>{let u=G().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1].childNodes[1].childNodes[0],_=u.childNodes[0].childNodes[2].childNodes[0],v=u.childNodes[0].childNodes[2].childNodes[1],b=u.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],x=b.parentNode,S=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],C=S.parentNode,T=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],E=T.parentNode,D=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],O=D.parentNode,k=c;typeof k==`function`?k(h):k&&typeof k==`object`&&`current`in k&&(k.current=h),n(()=>{typeof k==`function`?k(null):k&&typeof k==`object`&&`current`in k&&(k.current=null)}),_.className=`btn btn-primary`;let A=e=>{let t=()=>void f();typeof t==`function`&&t(e)};_.addEventListener(`click`,A),n(()=>_.removeEventListener(`click`,A)),v.className=`btn btn-ghost`;let j=e=>{let t=g;typeof t==`function`&&t(e)};v.addEventListener(`click`,j),n(()=>v.removeEventListener(`click`,j));let P=d(``);x.insertBefore(P,b),x.removeChild(b),F(P,()=>e.value);let I=d(``);C.insertBefore(I,S),C.removeChild(S),F(I,()=>r.value);let L=d(``);E.insertBefore(L,T),E.removeChild(T),F(L,()=>a.value);let R=[];return N(()=>{let e=s.value||[];R=M(O,D,R,e,(e,t)=>`dom-read-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(R)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},ee=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 点击按钮后先执行 count.value += 1',
  '2. 紧接着读取当前 span.textContent',
  '3. await nextTick() 后再读取一次 DOM',
]

const DomReadDemo: FC = () => {
  const count = ref(0)
  const beforeDomText = ref('尚未读取')
  const afterDomText = ref('尚未读取')
  const logLines = ref<string[]>([...defaultLogs])
  const counterRef = useRef<HTMLSpanElement>()

  const inspectUpdate = async () => {
    count.value += 1

    const syncText = counterRef.current?.textContent ?? '(missing)'
    beforeDomText.value = syncText
    afterDomText.value = '等待 flush...'
    logLines.value = [
      \`状态值已经改为 \${count.value}\`,
      \`同步读取 DOM：\${syncText}\`,
      '等待 nextTick() 完成...',
    ]

    await nextTick()

    const flushedText = counterRef.current?.textContent ?? '(missing)'
    afterDomText.value = flushedText
    logLines.value = [
      \`状态值已经改为 \${count.value}\`,
      \`同步读取 DOM：\${syncText}\`,
      \`nextTick() 后读取 DOM：\${flushedText}\`,
    ]
  }

  const reset = () => {
    count.value = 0
    beforeDomText.value = '尚未读取'
    afterDomText.value = '尚未读取'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM
          文本，能直接看到同一轮刷新前后的差异。
        </p>

        <div className="rounded-box border border-base-300 bg-base-200/40 p-5">
          <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
            当前 DOM 文本
          </div>
          <div className="mt-3 text-4xl font-semibold text-primary">
            <span ref={counterRef}>{count.value}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void inspectUpdate()}>
            自增并读取 DOM
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的 DOM 文本</div>
            <div className="mt-2 font-mono text-2xl">{beforeDomText.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后读取</div>
            <div className="mt-2 font-mono text-2xl text-success">{afterDomText.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`dom-read-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DomReadDemo
`,J=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开高级筛选</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段状态</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后状态</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:2--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),Y=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],X=()=>{let e=O(!1),a=O(``),s=O(`尚未打开`),c=O(`尚未聚焦`),g=O([...Y]),v=u(`FilterFocusDemo:hook:0`),b=async()=>{e.value=!0,s.value=v.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,c.value=`等待 flush...`,g.value=[`筛选面板状态已切到打开`,s.value,`等待 nextTick() 后执行 focus()`],await o(),v.current?.focus();let t=globalThis.document?.activeElement===v.current;c.value=t?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,g.value=[`筛选面板状态已切到打开`,s.value,c.value]},x=()=>{e.value=!1,a.value=``,s.value=`尚未打开`,c.value=`尚未聚焦`,g.value=[...Y]};return T(()=>h(l(Object.assign(o=>{let u=J().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1].childNodes[0],_=u.childNodes[0].childNodes[1].childNodes[1],S=u.childNodes[0].childNodes[2],T=S.parentNode,E=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],D=E.parentNode,O=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],k=O.parentNode,A=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],j=A.parentNode;h.className=`btn btn-primary`;let P=e=>{let t=()=>void b();typeof t==`function`&&t(e)};h.addEventListener(`click`,P),n(()=>h.removeEventListener(`click`,P)),_.className=`btn btn-ghost`;let I=e=>{let t=x;typeof t==`function`&&t(e)};_.addEventListener(`click`,I),n(()=>_.removeEventListener(`click`,I)),C(T,S,()=>{let t=e.value;return t?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`div`,e);t.className=`rounded-box border border-base-300 bg-base-100 p-5`;let i=y(`div`,t);w(t,i),i.className=`grid gap-4 md:grid-cols-2`;let o=y(`label`,i);w(i,o),o.className=`block`;let s=y(`div`,o);w(o,s),s.className=`text-sm text-base-content/60`,w(s,d(`关键词`));let c=y(`input`,o);w(o,c);let l=v;typeof l==`function`?l(c):l&&typeof l==`object`&&`current`in l&&(l.current=c),n(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)}),c.className=`input input-bordered mt-2 w-full`;let u;N(()=>{let e=a.value,t=e==null?``:String(e);Object.is(u,t)||(u=t,r(c,t))}),c.setAttribute(`placeholder`,`订单号 / 用户名 / 手机号`);let f=e=>{let t=e=>{a.value=e.target.value};typeof t==`function`&&t(e)};c.addEventListener(`input`,f),n(()=>c.removeEventListener(`input`,f));let p=y(`label`,i);w(i,p),p.className=`block`;let m=y(`div`,p);w(p,m),m.className=`text-sm text-base-content/60`,w(m,d(`订单状态`));let h=y(`select`,p);w(p,h),h.className=`select select-bordered mt-2 w-full`;let g=y(`option`,h);w(h,g),w(g,d(`全部`));let _=y(`option`,h);w(h,_),w(_,d(`待支付`));let b=y(`option`,h);w(h,b),w(b,d(`待发货`));let x=y(`option`,h);return w(h,x),w(x,d(`已完成`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>l(Object.assign(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let L=d(``);D.insertBefore(L,E),D.removeChild(E),F(L,()=>s.value);let R=d(``);k.insertBefore(R,O),k.removeChild(O),F(R,()=>c.value);let z=[];return N(()=>{let e=g.value||[];z=M(j,A,z,e,(e,t)=>`filter-focus-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(z)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 打开高级筛选面板',
  '2. 同步阶段输入框还没有挂载完成',
  '3. await nextTick() 后聚焦关键字输入框',
]

const FilterFocusDemo: FC = () => {
  const panelOpen = ref(false)
  const keyword = ref('')
  const syncState = ref('尚未打开')
  const postTickState = ref('尚未聚焦')
  const logLines = ref<string[]>([...defaultLogs])
  const inputRef = useRef<HTMLInputElement>()

  const openPanel = async () => {
    panelOpen.value = true
    syncState.value = inputRef.current ? '同步阶段输入框已存在' : '同步阶段输入框尚未挂载'
    postTickState.value = '等待 flush...'
    logLines.value = ['筛选面板状态已切到打开', syncState.value, '等待 nextTick() 后执行 focus()']

    await nextTick()

    inputRef.current?.focus()
    const focused = globalThis.document?.activeElement === inputRef.current
    postTickState.value = focused ? 'nextTick() 后已聚焦关键字输入框' : '输入框已挂载，但未成功聚焦'
    logLines.value = ['筛选面板状态已切到打开', syncState.value, postTickState.value]
  }

  const closePanel = () => {
    panelOpen.value = false
    keyword.value = ''
    syncState.value = '尚未打开'
    postTickState.value = '尚未聚焦'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等
          nextTick() 之后再调用 focus()。
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void openPanel()}>
            打开高级筛选
          </button>
          <button className="btn btn-ghost" onClick={closePanel}>
            关闭并重置
          </button>
        </div>

        {panelOpen.value && (
          <div className="rounded-box border border-base-300 bg-base-100 p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <div className="text-sm text-base-content/60">关键词</div>
                <input
                  ref={inputRef}
                  className="input input-bordered mt-2 w-full"
                  value={keyword.value}
                  placeholder="订单号 / 用户名 / 手机号"
                  onInput={(event: any) => {
                    keyword.value = (event.target as HTMLInputElement).value
                  }}
                />
              </label>

              <label className="block">
                <div className="text-sm text-base-content/60">订单状态</div>
                <select className="select select-bordered mt-2 w-full">
                  <option>全部</option>
                  <option>待支付</option>
                  <option>待发货</option>
                  <option>已完成</option>
                </select>
              </label>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步阶段状态</div>
            <div className="mt-2 font-mono text-xl">{syncState.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后状态</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickState.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`filter-focus-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterFocusDemo
`,ne=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。</p><div class="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"><label class="block"><div class="text-sm text-base-content/60">联系人</div><input name="receiver" placeholder="请输入联系人"><!--rue:text-hole:0--></label><label class="block"><div class="text-sm text-base-content/60">手机号</div><input name="phone" placeholder="请输入 11 位手机号"><!--rue:text-hole:1--></label><label class="block"><div class="text-sm text-base-content/60">邮箱</div><input name="email" placeholder="请输入邮箱"><!--rue:text-hole:2--></label></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">提交并定位错误字段</button><button class="btn btn-outline">填入合法示例</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段识别到的字段</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后结果</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:4--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),re=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],ie={receiver:`联系人`,phone:`手机号`,email:`邮箱`},Z=()=>({receiver:``,phone:``,email:``}),ae=()=>{let e=O(``),a=O(``),s=O(``),c=O(Z()),g=O(`尚未提交`),v=O(`尚未聚焦`),b=O([...re]),x=u(`FocusErrorFieldDemo:hook:0`),S=()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(a.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value)?``:`请输入有效邮箱`}),E=async()=>{let e=S(),t=Object.values(e).filter(Boolean).length;c.value=e;let n=x.current?.querySelector(`[data-invalid="true"]`);g.value=n?.name?`${ie[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,v.value=`等待 flush...`,b.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${g.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await o();let r=x.current?.querySelector(`[data-invalid="true"]`);r?.focus(),v.value=r?.name?`${ie[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,b.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${g.value}`,v.value]},D=()=>{e.value=`李四`,a.value=`13800001111`,s.value=`li.si@example.com`,c.value=Z(),g.value=`已填入合法示例`,v.value=`再次点击提交可观察通过路径`,b.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},k=()=>{e.value=``,a.value=``,s.value=``,c.value=Z(),g.value=`尚未提交`,v.value=`尚未聚焦`,b.value=[...re]};return T(()=>h(l(Object.assign(o=>{let u=ne().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1],_=u.childNodes[0].childNodes[1].childNodes[0].childNodes[1],S=u.childNodes[0].childNodes[1].childNodes[1].childNodes[1],T=u.childNodes[0].childNodes[1].childNodes[2].childNodes[1],O=u.childNodes[0].childNodes[2].childNodes[0],A=u.childNodes[0].childNodes[2].childNodes[1],j=u.childNodes[0].childNodes[2].childNodes[2],P=u.childNodes[0].childNodes[1].childNodes[0].childNodes[2],I=P.parentNode,L=u.childNodes[0].childNodes[1].childNodes[1].childNodes[2],R=L.parentNode,z=u.childNodes[0].childNodes[1].childNodes[2].childNodes[2],B=z.parentNode,V=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],H=V.parentNode,U=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],W=U.parentNode,G=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],K=G.parentNode,q=x;typeof q==`function`?q(h):q&&typeof q==`object`&&`current`in q&&(q.current=h),n(()=>{typeof q==`function`?q(null):q&&typeof q==`object`&&`current`in q&&(q.current=null)}),h.className=`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`,_.setAttribute(`name`,`receiver`);let ee;N(()=>{let e=c.value.receiver?`true`:`false`;Object.is(ee,e)||(ee=e,e==null||e===!1?_.removeAttribute(`data-invalid`):_.setAttribute(`data-invalid`,String(e)))});let J;N(()=>{let e=`input input-bordered mt-2 w-full ${c.value.receiver?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(J,t)||(J=t,_.className=t)});let Y;N(()=>{let t=e.value,n=t==null?``:String(t);Object.is(Y,n)||(Y=n,r(_,n))}),_.setAttribute(`placeholder`,`请输入联系人`);let X=t=>{let n=t=>{e.value=t.target.value};typeof n==`function`&&n(t)};_.addEventListener(`input`,X),n(()=>_.removeEventListener(`input`,X)),S.setAttribute(`name`,`phone`);let te;N(()=>{let e=c.value.phone?`true`:`false`;Object.is(te,e)||(te=e,e==null||e===!1?S.removeAttribute(`data-invalid`):S.setAttribute(`data-invalid`,String(e)))});let re;N(()=>{let e=`input input-bordered mt-2 w-full ${c.value.phone?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(re,t)||(re=t,S.className=t)});let ie;N(()=>{let e=a.value,t=e==null?``:String(e);Object.is(ie,t)||(ie=t,r(S,t))}),S.setAttribute(`placeholder`,`请输入 11 位手机号`);let Z=e=>{let t=e=>{a.value=e.target.value};typeof t==`function`&&t(e)};S.addEventListener(`input`,Z),n(()=>S.removeEventListener(`input`,Z)),T.setAttribute(`name`,`email`);let ae;N(()=>{let e=c.value.email?`true`:`false`;Object.is(ae,e)||(ae=e,e==null||e===!1?T.removeAttribute(`data-invalid`):T.setAttribute(`data-invalid`,String(e)))});let oe;N(()=>{let e=`input input-bordered mt-2 w-full ${c.value.email?`input-error`:``}`.trim(),t=e==null?``:String(e);Object.is(oe,t)||(oe=t,T.className=t)});let se;N(()=>{let e=s.value,t=e==null?``:String(e);Object.is(se,t)||(se=t,r(T,t))}),T.setAttribute(`placeholder`,`请输入邮箱`);let Q=e=>{let t=e=>{s.value=e.target.value};typeof t==`function`&&t(e)};T.addEventListener(`input`,Q),n(()=>T.removeEventListener(`input`,Q)),O.className=`btn btn-primary`;let $=e=>{let t=()=>void E();typeof t==`function`&&t(e)};O.addEventListener(`click`,$),n(()=>O.removeEventListener(`click`,$)),A.className=`btn btn-outline`;let ce=e=>{let t=D;typeof t==`function`&&t(e)};A.addEventListener(`click`,ce),n(()=>A.removeEventListener(`click`,ce)),j.className=`btn btn-ghost`;let le=e=>{let t=k;typeof t==`function`&&t(e)};j.addEventListener(`click`,le),n(()=>j.removeEventListener(`click`,le)),C(I,P,()=>{let e=c.value.receiver;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`div`,e);t.className=`mt-2 text-sm text-error`;let n=d(``);return w(t,n),F(n,()=>c.value.receiver),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),C(R,L,()=>{let e=c.value.phone;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`div`,e);t.className=`mt-2 text-sm text-error`;let n=d(``);return w(t,n),F(n,()=>c.value.phone),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),C(B,z,()=>{let e=c.value.email;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`div`,e);t.className=`mt-2 text-sm text-error`;let n=d(``);return w(t,n),F(n,()=>c.value.email),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let ue=d(``);H.insertBefore(ue,V),H.removeChild(V),F(ue,()=>g.value);let de=d(``);W.insertBefore(de,U),W.removeChild(U),F(de,()=>v.value);let fe=[];return N(()=>{let e=b.value||[];fe=M(K,G,fe,e,(e,t)=>`focus-error-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(fe)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},oe=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type FieldErrors = {
  receiver: string
  phone: string
  email: string
}

const defaultLogs = [
  '1. 点击提交后先更新错误状态',
  '2. 同步阶段还拿不到新的首个错误字段',
  '3. await nextTick() 后再 focus 首个错误输入框',
]

const fieldLabels: Record<keyof FieldErrors, string> = {
  receiver: '联系人',
  phone: '手机号',
  email: '邮箱',
}

const createEmptyErrors = (): FieldErrors => ({
  receiver: '',
  phone: '',
  email: '',
})

const FocusErrorFieldDemo: FC = () => {
  const receiver = ref('')
  const phone = ref('')
  const email = ref('')
  const errors = ref<FieldErrors>(createEmptyErrors())
  const syncField = ref('尚未提交')
  const postTickField = ref('尚未聚焦')
  const logLines = ref<string[]>([...defaultLogs])
  const formRef = useRef<HTMLDivElement>()

  const validate = (): FieldErrors => ({
    receiver: receiver.value.trim() ? '' : '请输入联系人姓名',
    phone: /^1\\d{10}$/.test(phone.value) ? '' : '请输入 11 位手机号',
    email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value) ? '' : '请输入有效邮箱',
  })

  const submit = async () => {
    const nextErrors = validate()
    const errorCount = Object.values(nextErrors).filter(Boolean).length
    errors.value = nextErrors

    const syncInvalid = formRef.current?.querySelector(
      '[data-invalid="true"]',
    ) as HTMLInputElement | null
    syncField.value = syncInvalid?.name
      ? \`\${fieldLabels[syncInvalid.name as keyof FieldErrors]}（同步阶段）\`
      : '同步阶段还没有错误字段'
    postTickField.value = '等待 flush...'
    logLines.value = [
      \`本次提交发现 \${errorCount} 个字段错误\`,
      \`同步读取首个错误字段：\${syncField.value}\`,
      '等待 nextTick() 后自动聚焦首个错误输入框...',
    ]

    await nextTick()

    const firstInvalid = formRef.current?.querySelector(
      '[data-invalid="true"]',
    ) as HTMLInputElement | null
    firstInvalid?.focus()
    postTickField.value = firstInvalid?.name
      ? \`\${fieldLabels[firstInvalid.name as keyof FieldErrors]} 已自动聚焦\`
      : '校验通过，无需聚焦'
    logLines.value = [
      \`本次提交发现 \${errorCount} 个字段错误\`,
      \`同步读取首个错误字段：\${syncField.value}\`,
      postTickField.value,
    ]
  }

  const fillValidData = () => {
    receiver.value = '李四'
    phone.value = '13800001111'
    email.value = 'li.si@example.com'
    errors.value = createEmptyErrors()
    syncField.value = '已填入合法示例'
    postTickField.value = '再次点击提交可观察通过路径'
    logLines.value = [
      '已填入一组合法数据',
      '当前没有错误字段需要聚焦',
      '再次点击提交会直接走校验通过路径',
    ]
  }

  const reset = () => {
    receiver.value = ''
    phone.value = ''
    email.value = ''
    errors.value = createEmptyErrors()
    syncField.value = '尚未提交'
    postTickField.value = '尚未聚焦'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等
          nextTick() 之后再 focus。
        </p>

        <div
          ref={formRef}
          className="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"
        >
          <label className="block">
            <div className="text-sm text-base-content/60">联系人</div>
            <input
              name="receiver"
              data-invalid={errors.value.receiver ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.receiver ? 'input-error' : ''}\`.trim()}
              value={receiver.value}
              placeholder="请输入联系人"
              onInput={(event: any) => {
                receiver.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.receiver && (
              <div className="mt-2 text-sm text-error">{errors.value.receiver}</div>
            )}
          </label>

          <label className="block">
            <div className="text-sm text-base-content/60">手机号</div>
            <input
              name="phone"
              data-invalid={errors.value.phone ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.phone ? 'input-error' : ''}\`.trim()}
              value={phone.value}
              placeholder="请输入 11 位手机号"
              onInput={(event: any) => {
                phone.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.phone && (
              <div className="mt-2 text-sm text-error">{errors.value.phone}</div>
            )}
          </label>

          <label className="block">
            <div className="text-sm text-base-content/60">邮箱</div>
            <input
              name="email"
              data-invalid={errors.value.email ? 'true' : 'false'}
              className={\`input input-bordered mt-2 w-full \${errors.value.email ? 'input-error' : ''}\`.trim()}
              value={email.value}
              placeholder="请输入邮箱"
              onInput={(event: any) => {
                email.value = (event.target as HTMLInputElement).value
              }}
            />
            {errors.value.email && (
              <div className="mt-2 text-sm text-error">{errors.value.email}</div>
            )}
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void submit()}>
            提交并定位错误字段
          </button>
          <button className="btn btn-outline" onClick={fillValidData}>
            填入合法示例
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步阶段识别到的字段</div>
            <div className="mt-2 font-mono text-xl">{syncField.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后结果</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickField.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`focus-error-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FocusErrorFieldDemo
`,se=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开批量发送弹窗</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-xl"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-xl text-success"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">布局决策</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),Q=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],$=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],ce=()=>{let r=O(!1),a=O(`尚未打开`),C=O(`尚未测量`),E=O(`等待测量`),D=O([...Q]),I=u(`ModalMeasureListDemo:hook:0`),R=async()=>{r.value=!0;let e=I.current?.scrollHeight??0;a.value=`${e}px`,C.value=`等待 flush...`,E.value=`等待布局完成...`,D.value=[`弹窗准备渲染 ${$.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await o();let t=I.current?.scrollHeight??0;C.value=`${t}px`,E.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,D.value=[`弹窗准备渲染 ${$.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${E.value}`]},z=()=>{r.value=!1,a.value=`尚未打开`,C.value=`尚未测量`,E.value=`等待测量`,D.value=[...Q]};return T(()=>h(e(()=>{let o=f(),u=se().content.cloneNode(!0),h=u.firstChild,_=h.childNodes[0].childNodes[1].childNodes[0],T=h.childNodes[0].childNodes[1].childNodes[1],O=h.childNodes[0].childNodes[2],B=O.parentNode,V=h.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],H=V.parentNode,U=h.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],W=U.parentNode,G=h.childNodes[0].childNodes[3].childNodes[2].childNodes[1].childNodes[0],K=G.parentNode,q=h.childNodes[0].childNodes[4].childNodes[1].childNodes[0],ee=q.parentNode;o.appendChild(u),s(_,`btn btn-primary`);let J=e=>{let t=()=>void R();typeof t==`function`&&t(e)};_.addEventListener(`click`,J),c(()=>_.removeEventListener(`click`,J)),s(T,`btn btn-ghost`);let Y=e=>{let t=z;typeof t==`function`&&t(e)};T.addEventListener(`click`,Y),c(()=>T.removeEventListener(`click`,Y)),N(()=>{let t=r.value?e(()=>{let e=f(),t=j(`div`,e);g(e,t),s(t,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let r=j(`div`,t);g(t,r),s(r,`flex items-start justify-between gap-4`);let i=j(`div`,r);g(r,i);let a=j(`div`,i);g(i,a),s(a,`text-sm uppercase tracking-[0.24em] text-base-content/50`),g(a,L(`批量发送预览`));let o=j(`div`,i);g(i,o),s(o,`mt-2 text-2xl font-semibold`),g(o,L(`确认接收人列表`));let c=j(`div`,r);g(r,c),s(c,`badge badge-outline`);let l=b(`rue:slot:anchor`);g(c,l),N(()=>{let e=$.length;x(()=>k(e,c,l))}),g(c,L(` 人`));let u=j(`div`,t);g(t,u),v(u,()=>I),s(u,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let p=A(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><div class="font-medium">rue:row-text</div><div class="text-base-content/60"><!--rue:text-hole:1--> · <!--rue:text-hole:2--></div></div>`),h=S(`rue:list:end`);w(u,h);let _=[];return N(()=>{_=M(u,h,_,$||[],(e,t)=>e.id,(e,t,n)=>{let r=e,i;return P(e=>{let t=p().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.data=``,n.parentNode;let a=t.childNodes[1].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[2],c=s.parentNode,l;{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(n.textContent=e,l=e)}let u=d(``);o.insertBefore(u,a),o.removeChild(a);let f;{let e=r.team==null||typeof r.team==`boolean`?``:String(r.team);Object.is(f,e)||(u.textContent=e,f=e)}let m=d(``);c.insertBefore(m,s),c.removeChild(s);let h;{let e=r.region==null||typeof r.region==`boolean`?``:String(r.region);Object.is(h,e)||(m.textContent=e,h=e)}return i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(n.textContent=e,l=e)}{let e=r.team==null||typeof r.team==`boolean`?``:String(r.team);Object.is(f,e)||(u.textContent=e,f=e)}{let e=r.region==null||typeof r.region==`boolean`?``:String(r.region);Object.is(h,e)||(m.textContent=e,h=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>m(_)),e},!0):``;x(()=>k(t,B,O))}),N(()=>{let e=a.value;x(()=>k(e,H,V))}),N(()=>{let e=C.value;x(()=>k(e,W,U))}),N(()=>{let e=E.value;x(()=>k(e,K,G))});let X=[];return N(()=>{let e=D.value||[];X=M(ee,q,X,e,(e,t)=>`modal-measure-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(X)),o},!0),e=>_(()=>{})))},le=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type Recipient = {
  id: number
  name: string
  team: string
  region: string
}

const defaultLogs = [
  '1. 打开批量发送弹窗',
  '2. 同步阶段列表容器还没真正挂载完成',
  '3. await nextTick() 后再测量列表高度决定布局策略',
]

const recipients: Recipient[] = [
  { id: 1, name: '李婷', team: '华东销售', region: '上海' },
  { id: 2, name: '周扬', team: '华东销售', region: '杭州' },
  { id: 3, name: '张一鸣', team: '华南渠道', region: '深圳' },
  { id: 4, name: '赵琪', team: '华南渠道', region: '广州' },
  { id: 5, name: '孙旭', team: '风控运营', region: '北京' },
  { id: 6, name: '陈尧', team: '风控运营', region: '天津' },
  { id: 7, name: '王蔓', team: '售后支持', region: '苏州' },
  { id: 8, name: '杨柳', team: '售后支持', region: '南京' },
  { id: 9, name: '蒋可', team: '仓储计划', region: '武汉' },
  { id: 10, name: '高晴', team: '仓储计划', region: '成都' },
]

const ModalMeasureListDemo: FC = () => {
  const modalOpen = ref(false)
  const syncHeight = ref('尚未打开')
  const postTickHeight = ref('尚未测量')
  const layoutDecision = ref('等待测量')
  const logLines = ref<string[]>([...defaultLogs])
  const listRef = useRef<HTMLDivElement>()

  const openModal = async () => {
    modalOpen.value = true

    const currentHeight = listRef.current?.scrollHeight ?? 0
    syncHeight.value = \`\${currentHeight}px\`
    postTickHeight.value = '等待 flush...'
    layoutDecision.value = '等待布局完成...'
    logLines.value = [
      \`弹窗准备渲染 \${recipients.length} 个接收人\`,
      \`同步读取列表高度：\${currentHeight}px\`,
      '等待 nextTick() 后决定是否启用内部滚动...',
    ]

    await nextTick()

    const nextHeight = listRef.current?.scrollHeight ?? 0
    postTickHeight.value = \`\${nextHeight}px\`
    layoutDecision.value =
      nextHeight > 280
        ? '列表超过阈值，建议固定 320px 高度并启用内部滚动'
        : '列表高度可控，可以直接完整展示'
    logLines.value = [
      \`弹窗准备渲染 \${recipients.length} 个接收人\`,
      \`同步读取列表高度：\${currentHeight}px\`,
      \`nextTick() 后列表高度：\${nextHeight}px，\${layoutDecision.value}\`,
    ]
  }

  const closeModal = () => {
    modalOpen.value = false
    syncHeight.value = '尚未打开'
    postTickHeight.value = '尚未测量'
    layoutDecision.value = '等待测量'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等
          nextTick() 后再测量。
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void openModal()}>
            打开批量发送弹窗
          </button>
          <button className="btn btn-ghost" onClick={closeModal}>
            关闭并重置
          </button>
        </div>

        {modalOpen.value && (
          <div className="rounded-box border border-base-300 bg-base-100 p-5 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
                  批量发送预览
                </div>
                <div className="mt-2 text-2xl font-semibold">确认接收人列表</div>
              </div>
              <div className="badge badge-outline">{recipients.length} 人</div>
            </div>

            <div ref={listRef} className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-2">
              {recipients.map(person => (
                <div key={person.id} className="rounded-box bg-base-200/70 p-3 text-sm leading-6">
                  <div className="font-medium">{person.name}</div>
                  <div className="text-base-content/60">
                    {person.team} · {person.region}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的高度</div>
            <div className="mt-2 font-mono text-xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后高度</div>
            <div className="mt-2 font-mono text-xl text-success">{postTickHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">布局决策</div>
            <div className="mt-2 text-sm leading-6 text-base-content/80">
              {layoutDecision.value}
            </div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`modal-measure-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ModalMeasureListDemo
`,ue=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。</p><div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">订单详情卡片</div><div class="mt-2 text-2xl font-semibold">订单 #A1024</div></div><div><!--rue:text-hole:0--></div></div><div class="mt-5 grid gap-3 md:grid-cols-2"><div class="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div><div class="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div><div class="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div><div class="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary"><!--rue:text-hole:2--></button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:4--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),de=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],fe=()=>{let e=O(!1),r=O(`尚未测量`),a=O(`尚未测量`),s=O([...de]),c=u(`PanelMeasureDemo:hook:0`),g=async()=>{e.value=!e.value;let t=e.value?`展开`:`收起`,n=c.current?.offsetHeight??0;r.value=`${n}px`,a.value=`等待 flush...`,s.value=[`详情区准备${t}`,`同步读取 offsetHeight：${n}px`,`等待 nextTick() 后重新测量...`],await o();let i=c.current?.offsetHeight??0;a.value=`${i}px`,s.value=[`详情区准备${t}`,`同步读取 offsetHeight：${n}px`,`nextTick() 后 offsetHeight：${i}px`]},v=()=>{e.value=!1,r.value=`尚未测量`,a.value=`尚未测量`,s.value=[...de]};return T(()=>h(l(Object.assign(o=>{let u=ue().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1],_=u.childNodes[0].childNodes[1].childNodes[0].childNodes[1],b=u.childNodes[0].childNodes[2].childNodes[0],x=u.childNodes[0].childNodes[2].childNodes[1],S=u.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],T=S.parentNode,E=u.childNodes[0].childNodes[1].childNodes[1].childNodes[4],D=E.parentNode,O=u.childNodes[0].childNodes[2].childNodes[0].childNodes[0],k=O.parentNode,A=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],j=A.parentNode,P=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],I=P.parentNode,L=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],R=L.parentNode,z=c;typeof z==`function`?z(h):z&&typeof z==`object`&&`current`in z&&(z.current=h),n(()=>{typeof z==`function`?z(null):z&&typeof z==`object`&&`current`in z&&(z.current=null)}),h.className=`rounded-box border border-base-300 bg-base-100 p-5`;let B;N(()=>{let t=`badge ${e.value?`badge-primary`:`badge-outline`}`,n=t==null?``:String(t);Object.is(B,n)||(B=n,_.className=n)}),b.className=`btn btn-primary`;let V=e=>{let t=()=>void g();typeof t==`function`&&t(e)};b.addEventListener(`click`,V),n(()=>b.removeEventListener(`click`,V)),x.className=`btn btn-ghost`;let H=e=>{let t=v;typeof t==`function`&&t(e)};x.addEventListener(`click`,H),n(()=>x.removeEventListener(`click`,H));let U=d(``);T.insertBefore(U,S),T.removeChild(S),F(U,()=>e.value?`已展开`:`已收起`),C(D,E,()=>{let t=e.value;return t?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=f(),n=y(`div`,t);w(t,n),n.className=`rounded-box bg-base-200/60 p-3 text-sm`,w(n,d(`发票状态：电子发票已开具`));let r=y(`div`,t);w(t,r),r.className=`rounded-box bg-base-200/60 p-3 text-sm`,w(r,d(`风控结果：人工审核已通过`));let i=y(`div`,t);w(t,i),i.className=`rounded-box bg-base-200/60 p-3 text-sm`,w(i,d(`配送备注：优先联系收货人本人`));let a=y(`div`,t);return w(t,a),a.className=`rounded-box bg-base-200/60 p-3 text-sm`,w(a,d(`售后状态：暂无售后单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>l(Object.assign(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let W=d(``);k.insertBefore(W,O),k.removeChild(O),F(W,()=>e.value?`收起详情区并测量`:`展开详情区并测量`);let G=d(``);j.insertBefore(G,A),j.removeChild(A),F(G,()=>r.value);let K=d(``);I.insertBefore(K,P),I.removeChild(P),F(K,()=>a.value);let q=[];return N(()=>{let e=s.value||[];q=M(R,L,q,e,(e,t)=>`panel-measure-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(q)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},pe=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

const defaultLogs = [
  '1. 切换订单详情区的展开状态',
  '2. 同步阶段读取到的还是旧高度',
  '3. await nextTick() 后再拿到新高度',
]

const PanelMeasureDemo: FC = () => {
  const expanded = ref(false)
  const syncHeight = ref('尚未测量')
  const postTickHeight = ref('尚未测量')
  const logLines = ref<string[]>([...defaultLogs])
  const panelRef = useRef<HTMLDivElement>()

  const toggleExpanded = async () => {
    expanded.value = !expanded.value
    const targetState = expanded.value ? '展开' : '收起'
    const currentHeight = panelRef.current?.offsetHeight ?? 0

    syncHeight.value = \`\${currentHeight}px\`
    postTickHeight.value = '等待 flush...'
    logLines.value = [
      \`详情区准备\${targetState}\`,
      \`同步读取 offsetHeight：\${currentHeight}px\`,
      '等待 nextTick() 后重新测量...',
    ]

    await nextTick()

    const nextHeight = panelRef.current?.offsetHeight ?? 0
    postTickHeight.value = \`\${nextHeight}px\`
    logLines.value = [
      \`详情区准备\${targetState}\`,
      \`同步读取 offsetHeight：\${currentHeight}px\`,
      \`nextTick() 后 offsetHeight：\${nextHeight}px\`,
    ]
  }

  const reset = () => {
    expanded.value = false
    syncHeight.value = '尚未测量'
    postTickHeight.value = '尚未测量'
    logLines.value = [...defaultLogs]
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等
          nextTick() 后再测一次。
        </p>

        <div ref={panelRef} className="rounded-box border border-base-300 bg-base-100 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">
                订单详情卡片
              </div>
              <div className="mt-2 text-2xl font-semibold">订单 #A1024</div>
            </div>
            <div className={\`badge \${expanded.value ? 'badge-primary' : 'badge-outline'}\`}>
              {expanded.value ? '已展开' : '已收起'}
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div>
            <div className="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div>
            {expanded.value && (
              <>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  发票状态：电子发票已开具
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  风控结果：人工审核已通过
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">
                  配送备注：优先联系收货人本人
                </div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">售后状态：暂无售后单</div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => void toggleExpanded()}>
            {expanded.value ? '收起详情区并测量' : '展开详情区并测量'}
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            重置
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的高度</div>
            <div className="mt-2 font-mono text-2xl">{syncHeight.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后高度</div>
            <div className="mt-2 font-mono text-2xl text-success">{postTickHeight.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`panel-measure-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PanelMeasureDemo
`,me=A(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。</p><div class="flex flex-wrap gap-2"><!--rue:text-hole:0--><button class="btn btn-sm btn-outline">重置</button></div><div class="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"><table class="table table-pin-rows table-sm"><thead><tr><th>订单号</th><th>客户</th><th>状态</th><th>金额</th><th>备注</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的首条结果</div><div class="mt-2 font-mono text-2xl"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后定位到</div><div class="mt-2 font-mono text-2xl text-success"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),he=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],ge={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},_e=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],ve=e=>e===`all`?_e:_e.filter(t=>t.status===e),ye=()=>{let e=O(`all`),r=O(`尚未筛选`),a=O(`尚未定位`),s=O([...he]),c=u(`TableFilterScrollDemo:hook:0`),g=async t=>{e.value=t;let n=c.current?.querySelector(`[data-first-visible="true"]`);r.value=n?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,a.value=`等待 flush...`,s.value=[`筛选条件切换为：${ge[t]}`,`同步读取首条结果：${r.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await o();let i=c.current?.querySelector(`[data-first-visible="true"]`);i?.scrollIntoView({block:`nearest`}),a.value=i?.getAttribute(`data-order-no`)??`当前筛选没有结果`,s.value=[`筛选条件切换为：${ge[t]}`,`同步读取首条结果：${r.value}`,`nextTick() 后首条结果：${a.value}，并已滚动到可视区域`]},v=()=>{e.value=`all`,r.value=`尚未筛选`,a.value=`尚未定位`,s.value=[...he],c.current&&(c.current.scrollTop=0)},b=ve(e.value);return T(()=>h(l(Object.assign(o=>{let u=me().content.cloneNode(!0).firstChild,h=u.childNodes[0].childNodes[1].childNodes[1],_=u.childNodes[0].childNodes[2],T=u.childNodes[0].childNodes[1].childNodes[0],E=T.parentNode,D=u.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],O=D.parentNode,A=u.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],j=A.parentNode,P=u.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],I=P.parentNode,L=u.childNodes[0].childNodes[4].childNodes[1].childNodes[0],R=L.parentNode;h.className=`btn btn-sm btn-outline`;let z=e=>{let t=v;typeof t==`function`&&t(e)};h.addEventListener(`click`,z),n(()=>h.removeEventListener(`click`,z));let B=c;typeof B==`function`?B(_):B&&typeof B==`object`&&`current`in B&&(B.current=_),n(()=>{typeof B==`function`?B(null):B&&typeof B==`object`&&`current`in B&&(B.current=null)}),_.className=`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`;let V=[];N(()=>{V=M(E,T,V,[`all`,`risk`,`refund`,`shipping`,`done`],(e,t)=>e,(r,a)=>{let o=p(r);return t((t,r,a)=>i(t,a,()=>l(Object.assign(t=>{let r=y(`button`,t),i;N(()=>{let t=`btn btn-sm ${e.value===o.get()?`btn-primary`:`btn-ghost`}`,n=t==null?``:String(t);Object.is(i,n)||(i=n,r.className=n)});let a=e=>{let t=()=>void g(o.get());typeof t==`function`&&t(e)};r.addEventListener(`click`,a),n(()=>r.removeEventListener(`click`,a));let s=S(`rue:compiled-slot`);return w(r,s),N(()=>{let e=ge[o.get()];x(()=>k(e,r,s))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{r=e,a=t,o.set(e)})})}),n(()=>m(V)),C(O,D,()=>b.length>0?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let r=f(),a=S(`rue:list:end`);w(r,a);let o=[];return N(()=>{let e=b||[];o=M(a.parentNode,a,o,e,(e,t)=>e.id,(e,n)=>{let r=p(e),a=p(n);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`tr`,e),n;N(()=>{let e=a.get()===0?`true`:`false`;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`data-first-visible`):t.setAttribute(`data-first-visible`,String(e)))});let i;N(()=>{let e=r.get().orderNo;Object.is(i,e)||(i=e,e==null||e===!1?t.removeAttribute(`data-order-no`):t.setAttribute(`data-order-no`,String(e)))});let o=y(`td`,t);w(t,o),o.className=`font-medium`;let s=d(``);w(o,s),F(s,()=>r.get().orderNo);let c=y(`td`,t);w(t,c);let l=d(``);w(c,l),F(l,()=>r.get().customer);let u=y(`td`,t);w(t,u);let f=y(`span`,u);w(u,f),f.className=`badge badge-outline`;let p=S(`rue:compiled-slot`);w(f,p),N(()=>{let e=ge[r.get().status];x(()=>k(e,f,p))});let m=y(`td`,t);w(t,m);let h=d(``);w(m,h),F(h,()=>r.get().amount);let g=y(`td`,t);w(t,g),g.className=`text-base-content/60`;let _=d(``);return w(g,_),F(_,()=>r.get().note),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t),a.set(i)})})}),n(()=>m(o)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=y(`tr`,e),n=y(`td`,t);return w(t,n),n.setAttribute(`colSpan`,`5`),n.className=`py-8 text-center text-base-content/60`,w(n,d(`当前筛选没有结果`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let H=d(``);j.insertBefore(H,A),j.removeChild(A),F(H,()=>r.value);let U=d(``);I.insertBefore(U,P),I.removeChild(P),F(U,()=>a.value);let W=[];return N(()=>{let e=s.value||[];W=M(R,L,W,e,(e,t)=>`table-filter-log-${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e),n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(W)),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{})))},be=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

type OrderStatus = 'all' | 'risk' | 'refund' | 'shipping' | 'done'

type OrderRecord = {
  id: number
  orderNo: string
  customer: string
  status: Exclude<OrderStatus, 'all'>
  amount: string
  note: string
}

const defaultLogs = [
  '1. 切换筛选条件，表格准备重新渲染',
  '2. 同步阶段读取到的还是旧首条结果',
  '3. await nextTick() 后滚到新的首条命中记录',
]

const statusLabels: Record<OrderStatus, string> = {
  all: '全部订单',
  risk: '待风控',
  refund: '退款中',
  shipping: '待发货',
  done: '已完成',
}

const orders: OrderRecord[] = [
  {
    id: 1,
    orderNo: 'A-1024',
    customer: '上海徐汇门店',
    status: 'shipping',
    amount: '¥1,280',
    note: '等待波次出库',
  },
  {
    id: 2,
    orderNo: 'A-1025',
    customer: '苏州工业园',
    status: 'done',
    amount: '¥980',
    note: '已签收',
  },
  {
    id: 3,
    orderNo: 'A-1026',
    customer: '深圳南山客户',
    status: 'risk',
    amount: '¥2,430',
    note: '等待人工复核',
  },
  {
    id: 4,
    orderNo: 'A-1027',
    customer: '北京朝阳客户',
    status: 'refund',
    amount: '¥560',
    note: '退款审核中',
  },
  {
    id: 5,
    orderNo: 'A-1028',
    customer: '杭州西湖门店',
    status: 'shipping',
    amount: '¥1,120',
    note: '拣货完成',
  },
  {
    id: 6,
    orderNo: 'A-1029',
    customer: '武汉光谷仓',
    status: 'risk',
    amount: '¥3,100',
    note: '需补充发票信息',
  },
  {
    id: 7,
    orderNo: 'A-1030',
    customer: '成都高新区客户',
    status: 'refund',
    amount: '¥760',
    note: '等待退款到账',
  },
  {
    id: 8,
    orderNo: 'A-1031',
    customer: '广州天河客户',
    status: 'done',
    amount: '¥640',
    note: '回访完成',
  },
  {
    id: 9,
    orderNo: 'A-1032',
    customer: '天津滨海门店',
    status: 'shipping',
    amount: '¥1,860',
    note: '待分配骑手',
  },
  {
    id: 10,
    orderNo: 'A-1033',
    customer: '厦门湖里客户',
    status: 'risk',
    amount: '¥1,420',
    note: '身份核验异常',
  },
]

const getVisibleOrders = (status: OrderStatus) =>
  status === 'all' ? orders : orders.filter(order => order.status === status)

const TableFilterScrollDemo: FC = () => {
  const activeStatus = ref<OrderStatus>('all')
  const syncTarget = ref('尚未筛选')
  const postTickTarget = ref('尚未定位')
  const logLines = ref<string[]>([...defaultLogs])
  const viewportRef = useRef<HTMLDivElement>()

  const applyFilter = async (status: OrderStatus) => {
    activeStatus.value = status

    const syncRow = viewportRef.current?.querySelector(
      '[data-first-visible="true"]',
    ) as HTMLElement | null
    syncTarget.value = syncRow?.getAttribute('data-order-no') ?? '同步阶段尚未定位到新首条'
    postTickTarget.value = '等待 flush...'
    logLines.value = [
      \`筛选条件切换为：\${statusLabels[status]}\`,
      \`同步读取首条结果：\${syncTarget.value}\`,
      '等待 nextTick() 后滚到新的首条命中记录...',
    ]

    await nextTick()

    const nextRow = viewportRef.current?.querySelector(
      '[data-first-visible="true"]',
    ) as HTMLElement | null
    nextRow?.scrollIntoView({ block: 'nearest' })
    postTickTarget.value = nextRow?.getAttribute('data-order-no') ?? '当前筛选没有结果'
    logLines.value = [
      \`筛选条件切换为：\${statusLabels[status]}\`,
      \`同步读取首条结果：\${syncTarget.value}\`,
      \`nextTick() 后首条结果：\${postTickTarget.value}，并已滚动到可视区域\`,
    ]
  }

  const reset = () => {
    activeStatus.value = 'all'
    syncTarget.value = '尚未筛选'
    postTickTarget.value = '尚未定位'
    logLines.value = [...defaultLogs]
    if (viewportRef.current) {
      viewportRef.current.scrollTop = 0
    }
  }

  const visibleOrders = getVisibleOrders(activeStatus.value)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-5">
        <p className="text-base-content/70 leading-7">
          客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等
          nextTick() 后再定位首条新结果。
        </p>

        <div className="flex flex-wrap gap-2">
          {(['all', 'risk', 'refund', 'shipping', 'done'] as OrderStatus[]).map(status => (
            <button
              key={status}
              className={\`btn btn-sm \${activeStatus.value === status ? 'btn-primary' : 'btn-ghost'}\`}
              onClick={() => void applyFilter(status)}
            >
              {statusLabels[status]}
            </button>
          ))}
          <button className="btn btn-sm btn-outline" onClick={reset}>
            重置
          </button>
        </div>

        <div
          ref={viewportRef}
          className="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"
        >
          <table className="table table-pin-rows table-sm">
            <thead>
              <tr>
                <th>订单号</th>
                <th>客户</th>
                <th>状态</th>
                <th>金额</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {visibleOrders.length > 0 ? (
                visibleOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    data-first-visible={index === 0 ? 'true' : 'false'}
                    data-order-no={order.orderNo}
                  >
                    <td className="font-medium">{order.orderNo}</td>
                    <td>{order.customer}</td>
                    <td>
                      <span className="badge badge-outline">{statusLabels[order.status]}</span>
                    </td>
                    <td>{order.amount}</td>
                    <td className="text-base-content/60">{order.note}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-base-content/60">
                    当前筛选没有结果
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">同步读取到的首条结果</div>
            <div className="mt-2 font-mono text-2xl">{syncTarget.value}</div>
          </div>
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="text-sm text-base-content/60">await nextTick() 后定位到</div>
            <div className="mt-2 font-mono text-2xl text-success">{postTickTarget.value}</div>
          </div>
        </div>

        <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-4">
          <div className="text-sm font-medium text-base-content/70">本轮步骤</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-base-content/80">
            {logLines.value.map((line, index) => (
              <li key={\`table-filter-log-\${index}\`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TableFilterScrollDemo
`,xe=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:ee,Demo:q}],Se=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:W,Demo:U},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:te,Demo:X},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:pe,Demo:fe},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:be,Demo:ye},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:oe,Demo:ae},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:le,Demo:ce}],Ce=A(`<section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div><p class="mt-2 text-base-content/70 leading-7"><!--rue:text-hole:2--></p><div class="mt-4 flex flex-wrap gap-2"><!--rue:text-hole:3--></div><div class="mt-4"><!--rue:text-hole:4--></div></section>`),we=A(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">nextTick 真实业务场景</h1>`),Te=A(`<p class="max-w-4xl text-base-content/70 leading-7">现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。</p>`),Ee=A(`<div role="tablist" class="tabs tabs-box mt-6"><button role="tab">效果</button><button role="tab">代码</button></div>`),De=A(`<div class="mt-4 grid gap-6"><!--rue:text-hole:0--><section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">新增业务 demo</div><div class="mt-2 text-2xl font-semibold">真实业务里 nextTick 怎么用</div><p class="mt-2 text-base-content/70 leading-7">这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。</p></section><!--rue:text-hole:1--></div>`),Oe=r=>{let o=p(r.activeTab),s=p(r.eyebrow),c=p(r.scenario),u=c.get().Demo;return h(e(()=>{let e=f(),r=Ce().content.cloneNode(!0),h=r.firstChild,g=h.childNodes[0].childNodes[0],_=g.parentNode,v=h.childNodes[1].childNodes[0],b=v.parentNode,S=h.childNodes[2].childNodes[0],C=S.parentNode,T=h.childNodes[3].childNodes[0],E=T.parentNode,O=h.childNodes[4].childNodes[0],A=O.parentNode;e.appendChild(r),N(()=>{let e=s.get();x(()=>k(e,_,g))}),N(()=>{let e=c.get().title;x(()=>k(e,b,v))}),N(()=>{let e=c.get().summary;x(()=>k(e,C,S))});let j=[];return N(()=>{let e=c.get().businessCases||[];j=M(E,T,j,e,(e,t)=>e,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`span`,e);t.className=`badge badge-outline`;let n=d(``);return w(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(j)),N(()=>{let e=o.get().value===`preview`?a(u,()=>({})):l(Object.assign(e=>{let t=y(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=y(`div`,t);return w(t,n),n.className=`card-body p-0`,D(n,R,()=>({className:`h-full`,lang:`tsx`,code:c.get().source})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));x(()=>k(e,A,O))}),e},!0),e=>_(()=>{o.set(e.activeTab),s.set(e.eyebrow),c.set(e.scenario)}),()=>r)},ke=()=>{let e=O(`preview`);return T(()=>h(E(z,()=>({children:[(e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=f();return t.appendChild(we().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=f();return t.appendChild(Te().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>i(t,r,()=>l(Object.assign(t=>{let n=f(),r=Ee().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=i.childNodes[1];n.appendChild(r),I(a,`role`,`tab`),N(()=>{s(a,`tab ${e.value===`preview`?`tab-active`:``}`)});let l=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),I(o,`role`,`tab`),N(()=>{s(o,`tab ${e.value===`code`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return o.addEventListener(`click`,u),c(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(r,a,o)=>i(r,o,()=>l(Object.assign(r=>{let a=f(),o=De().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[2],d=u.parentNode;a.appendChild(o);let h=[];N(()=>{h=M(l,c,h,xe||[],(e,t)=>e.title,(n,r)=>{let a=p(n);return t((t,n,r)=>i(t,r,()=>E(Oe,()=>({scenario:a.get(),eyebrow:`保留原始 demo`,activeTab:e}))),(e,t)=>{n=e,r=t,a.set(e)})})}),n(()=>m(h));let g=[];return N(()=>{g=M(d,u,g,Se||[],(e,t)=>e.title,(n,r)=>{let a=p(n),o=p(r);return t((t,n,r)=>i(t,r,()=>E(Oe,()=>({scenario:a.get(),eyebrow:`业务场景 ${o.get()+1}`,activeTab:e}))),(e,t)=>{n=e,r=t,a.set(e),o.set(t)})})}),n(()=>m(g)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))]})),e=>_(()=>{})))};export{ke as default};