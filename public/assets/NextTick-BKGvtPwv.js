import{B as e,Bt as t,Dt as n,F as r,Ht as i,I as a,O as o,P as s,Qt as c,Ut as l,V as u,Vt as d,W as f,Wt as p,X as m,Y as h,Z as g,ct as _,dn as v,en as y,et as b,f as x,fn as S,g as C,gn as w,h as T,hn as E,in as D,m as O,mn as k,mt as A,nt as j,p as M,pn as N,qt as P,sn as F,u as I,yn as L,z as R,zt as z}from"./rue-runtime-BWbIfNT8.js";import{t as B}from"./Code-C5ZhIIr9.js";import{r as V}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var H=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。</p><div class="rounded-box border border-base-300 bg-base-100"><div class="flex items-center justify-between border-b border-base-300 px-4 py-3"><div class="text-sm font-medium text-base-content/70">订单通知流</div><div class="badge badge-outline"><!--rue:text-hole:0--> 条消息</div></div><div class="max-h-56 space-y-3 overflow-y-auto px-4 py-4"><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">追加通知并滚动到底部</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 scrollHeight</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后的高度</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),U=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],W=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],G=(e,n,r)=>{let i=A(W()),a=A(`尚未追加`),s=A(`尚未追加`),c=A([...U]),l=b(`ChatScrollDemo:hook:0`),u=async()=>{let e=i.value.length+1,t=String(19+e).padStart(2,`0`);i.value=[...i.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=l.current?.scrollHeight??0;a.value=`${n}px（旧高度）`,s.value=`等待 flush...`,c.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],l.current&&(l.current.scrollTop=n),await o();let r=l.current?.scrollHeight??0;l.current&&(l.current.scrollTop=r),s.value=`${r}px（已包含新消息）`,c.value=[`消息数已变为 ${i.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},g=()=>{i.value=W(),a.value=`尚未追加`,s.value=`尚未追加`,c.value=[...U],l.current&&(l.current.scrollTop=0)};return j(()=>p(e=>{let n=H().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[1],o=n.childNodes[0].childNodes[2].childNodes[0],p=n.childNodes[0].childNodes[2].childNodes[1],_=n.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],v=_.parentNode,y=n.childNodes[0].childNodes[1].childNodes[1].childNodes[0],b=y.parentNode,D=n.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],k=D.parentNode,A=n.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],j=A.parentNode,R=n.childNodes[0].childNodes[4].childNodes[1].childNodes[0],B=R.parentNode,V=N(`rue:text-hole:2`);k.replaceChild(V,D);let U=N(`rue:text-hole:3`);j.replaceChild(U,A);let W=l;typeof W==`function`?W(r):W&&typeof W==`object`&&`current`in W&&(W.current=r),F(()=>{typeof W==`function`?W(null):W&&typeof W==`object`&&`current`in W&&(W.current=null)}),r.setAttribute(`class`,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`),o.setAttribute(`class`,`btn btn-primary`),F(I(e,o,`click`,()=>()=>void u())),p.setAttribute(`class`,`btn btn-ghost`);let G=e=>{let t=g;typeof t==`function`&&t(e)};p.addEventListener(`click`,G),F(()=>p.removeEventListener(`click`,G)),t({parent:v,before:_},()=>z(i.value.length),()=>({}));let K=L(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><!--rue:text-hole:0--></div>`),q=[];P(()=>{let e=i.value||[];q=C(b,y,q,e,(e,t)=>e.id,(e,t,n)=>{let r=e,i;return O(e=>{let t=K().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=w(``);a.insertBefore(o,n),a.removeChild(n);let s=r.text==null||typeof r.text==`boolean`?``:String(r.text);return o.textContent=s,i=()=>{{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(o.textContent=e,s=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),F(()=>x(q)),t({parent:k,before:V},()=>z(a.value),()=>({})),t({parent:j,before:U},()=>z(s.value),()=>({}));let J=[];return P(()=>{let e=c.value||[];J=T(B,R,J,e,(e,t)=>`chat-scroll-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(J)),[n,n]}))},K=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,q=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。</p><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">当前 DOM 文本</div><div class="mt-3 text-4xl font-semibold text-primary"><span>rue:direct-text</span></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">自增并读取 DOM</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的 DOM 文本</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后读取</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),J=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],Y=(e,t,n)=>{let r=A(0),i=A(`尚未读取`),a=A(`尚未读取`),s=A([...J]),l=b(`DomReadDemo:hook:0`),u=async()=>{r.value+=1;let e=l.current?.textContent??`(missing)`;i.value=e,a.value=`等待 flush...`,s.value=[`状态值已经改为 ${r.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await o();let t=l.current?.textContent??`(missing)`;a.value=t,s.value=[`状态值已经改为 ${r.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},g=()=>{r.value=0,i.value=`尚未读取`,a.value=`尚未读取`,s.value=[...J]};return j(()=>p(e=>{let t=q().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[2].childNodes[0],p=t.childNodes[0].childNodes[2].childNodes[1],_=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],v=_.parentNode,y=N(`rue:text-hole:0`);v.replaceChild(y,_);let b=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],C=b.parentNode,D=N(`rue:text-hole:1`);C.replaceChild(D,b);let O=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],k=O.parentNode,A=N(`rue:text-hole:2`);k.replaceChild(A,O);let j=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],L=j.parentNode,R=l;typeof R==`function`?R(n):R&&typeof R==`object`&&`current`in R&&(R.current=n),F(()=>{typeof R==`function`?R(null):R&&typeof R==`object`&&`current`in R&&(R.current=null)}),o.setAttribute(`class`,`btn btn-primary`),F(I(e,o,`click`,()=>()=>void u())),p.setAttribute(`class`,`btn btn-ghost`);let z=e=>{let t=g;typeof t==`function`&&t(e)};p.addEventListener(`click`,z),F(()=>p.removeEventListener(`click`,z));let B=w(``);v.insertBefore(B,y),v.removeChild(y),c(B,()=>r.value);let V=w(``);C.insertBefore(V,D),C.removeChild(D),c(V,()=>i.value);let H=w(``);k.insertBefore(H,A),k.removeChild(A),c(H,()=>a.value);let U=[];return P(()=>{let e=s.value||[];U=T(L,j,U,e,(e,t)=>`dom-read-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(U)),[t,t]}))},X=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Z=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开高级筛选</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段状态</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后状态</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></ul></div></div></div>`),ee=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],Q=(e,t,n)=>{let r=A(!1),i=A(``),a=A(`尚未打开`),s=A(`尚未聚焦`),g=A([...ee]),_=b(`FilterFocusDemo:hook:0`),v=async()=>{r.value=!0,a.value=_.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,s.value=`等待 flush...`,g.value=[`筛选面板状态已切到打开`,a.value,`等待 nextTick() 后执行 focus()`],await o(),_.current?.focus();let e=globalThis.document?.activeElement===_.current;s.value=e?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,g.value=[`筛选面板状态已切到打开`,a.value,s.value]},y=()=>{r.value=!1,i.value=``,a.value=`尚未打开`,s.value=`尚未聚焦`,g.value=[...ee]};return j(()=>p(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],o=t.childNodes[0].childNodes[1].childNodes[1],b=t.childNodes[0].childNodes[2],C=b.parentNode,O=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],A=O.parentNode,j=N(`rue:text-hole:1`);A.replaceChild(j,O);let L=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],R=L.parentNode,z=N(`rue:text-hole:2`);R.replaceChild(z,L);let B=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],V=B.parentNode;n.setAttribute(`class`,`btn btn-primary`),F(I(e,n,`click`,()=>()=>void v())),o.setAttribute(`class`,`btn btn-ghost`);let H=e=>{let t=y;typeof t==`function`&&t(e)};o.addEventListener(`click`,H),F(()=>o.removeEventListener(`click`,H)),l(C,b,()=>{let e=r.value;return e?{__rue_compiled_branch_key:!0,create:()=>p(e=>{let t=E(`div`,e);t.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5`);let n=E(`div`,t);S(t,n),n.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let r=E(`label`,n);S(n,r),r.setAttribute(`class`,`block`);let a=E(`div`,r);S(r,a),a.setAttribute(`class`,`text-sm text-base-content/60`),S(a,w(`关键词`));let o=E(`input`,r);S(r,o);let s=_;typeof s==`function`?s(o):s&&typeof s==`object`&&`current`in s&&(s.current=o),F(()=>{typeof s==`function`?s(null):s&&typeof s==`object`&&`current`in s&&(s.current=null)}),o.setAttribute(`class`,`input input-bordered mt-2 w-full`);let c;D(()=>{let e=i.value,t=e==null?``:String(e);Object.is(c,t)||(c=t,o.value=t)}),o.setAttribute(`placeholder`,`订单号 / 用户名 / 手机号`);let l=e=>{let t=e=>{i.value=e.target.value};typeof t==`function`&&t(e)};o.addEventListener(`input`,l),F(()=>o.removeEventListener(`input`,l));let u=E(`label`,n);S(n,u),u.setAttribute(`class`,`block`);let d=E(`div`,u);S(u,d),d.setAttribute(`class`,`text-sm text-base-content/60`),S(d,w(`订单状态`));let f=E(`select`,u);S(u,f),f.setAttribute(`class`,`select select-bordered mt-2 w-full`);let p=E(`option`,f);S(f,p),S(p,w(`全部`));let m=E(`option`,f);S(f,m),S(m,w(`待支付`));let h=E(`option`,f);S(f,h),S(h,w(`待发货`));let g=E(`option`,f);return S(f,g),S(g,w(`已完成`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(t=>{let n=w(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=k();return[t.firstChild,t.lastChild]})}});let U=w(``);A.insertBefore(U,j),A.removeChild(j),c(U,()=>a.value);let W=w(``);R.insertBefore(W,z),R.removeChild(z),c(W,()=>s.value);let G=[];return P(()=>{let e=g.value||[];G=T(V,B,G,e,(e,t)=>`filter-focus-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(G)),[t,t]}))},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ne=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。</p><div class="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3"><label class="block"><div class="text-sm text-base-content/60">联系人</div><input name="receiver" placeholder="请输入联系人"><!--rue:text-hole:0--></label><label class="block"><div class="text-sm text-base-content/60">手机号</div><input name="phone" placeholder="请输入 11 位手机号"><!--rue:text-hole:1--></label><label class="block"><div class="text-sm text-base-content/60">邮箱</div><input name="email" placeholder="请输入邮箱"><!--rue:text-hole:2--></label></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">提交并定位错误字段</button><button class="btn btn-outline">填入合法示例</button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步阶段识别到的字段</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后结果</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),$=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],re={receiver:`联系人`,phone:`手机号`,email:`邮箱`},ie=()=>({receiver:``,phone:``,email:``}),ae=(e,r,i)=>{let a=A(``),s=A(``),c=A(``),l=A(ie()),g=A(`尚未提交`),_=A(`尚未聚焦`),v=A([...$]),y=b(`FocusErrorFieldDemo:hook:0`),C=()=>({receiver:a.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(s.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.value)?``:`请输入有效邮箱`}),O=async()=>{let e=C(),t=Object.values(e).filter(Boolean).length;l.value=e;let n=y.current?.querySelector(`[data-invalid="true"]`);g.value=n?.name?`${re[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,_.value=`等待 flush...`,v.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${g.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await o();let r=y.current?.querySelector(`[data-invalid="true"]`);r?.focus(),_.value=r?.name?`${re[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,v.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${g.value}`,_.value]},L=()=>{a.value=`李四`,s.value=`13800001111`,c.value=`li.si@example.com`,l.value=ie(),g.value=`已填入合法示例`,_.value=`再次点击提交可观察通过路径`,v.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},R=()=>{a.value=``,s.value=``,c.value=``,l.value=ie(),g.value=`尚未提交`,_.value=`尚未聚焦`,v.value=[...$]};return j(()=>p(e=>{let r=ne().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],o=r.childNodes[0].childNodes[1].childNodes[0].childNodes[1],b=r.childNodes[0].childNodes[1].childNodes[1].childNodes[1],C=r.childNodes[0].childNodes[1].childNodes[2].childNodes[1],A=r.childNodes[0].childNodes[2].childNodes[0],j=r.childNodes[0].childNodes[2].childNodes[1],B=r.childNodes[0].childNodes[2].childNodes[2],V=r.childNodes[0].childNodes[1].childNodes[0].childNodes[2],H=V.parentNode,U=r.childNodes[0].childNodes[1].childNodes[1].childNodes[2],W=U.parentNode,G=r.childNodes[0].childNodes[1].childNodes[2].childNodes[2],K=G.parentNode,q=r.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],J=q.parentNode,Y=r.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],X=Y.parentNode,Z=r.childNodes[0].childNodes[4].childNodes[1].childNodes[0],ee=Z.parentNode,Q=N(`rue:text-hole:3`);J.replaceChild(Q,q);let te=N(`rue:text-hole:4`);X.replaceChild(te,Y);let $=y;typeof $==`function`?$(i):$&&typeof $==`object`&&`current`in $&&($.current=i),F(()=>{typeof $==`function`?$(null):$&&typeof $==`object`&&`current`in $&&($.current=null)}),i.setAttribute(`class`,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`),o.setAttribute(`name`,`receiver`);let re;D(()=>{let e=l.value.receiver?`true`:`false`;Object.is(re,e)||(re=e,e==null?o.removeAttribute(`data-invalid`):o.setAttribute(`data-invalid`,String(e)))});let ie;D(()=>{let e=`input input-bordered mt-2 w-full ${l.value.receiver?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(ie,t)||(ie=t,o.setAttribute(`class`,t))});let ae;D(()=>{let e=a.value,t=e==null?``:String(e);Object.is(ae,t)||(ae=t,o.value=t)}),o.setAttribute(`placeholder`,`请输入联系人`);let oe=e=>{let t=e=>{a.value=e.target.value};typeof t==`function`&&t(e)};o.addEventListener(`input`,oe),F(()=>o.removeEventListener(`input`,oe)),b.setAttribute(`name`,`phone`);let se;D(()=>{let e=l.value.phone?`true`:`false`;Object.is(se,e)||(se=e,e==null?b.removeAttribute(`data-invalid`):b.setAttribute(`data-invalid`,String(e)))});let ce;D(()=>{let e=`input input-bordered mt-2 w-full ${l.value.phone?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(ce,t)||(ce=t,b.setAttribute(`class`,t))});let le;D(()=>{let e=s.value,t=e==null?``:String(e);Object.is(le,t)||(le=t,b.value=t)}),b.setAttribute(`placeholder`,`请输入 11 位手机号`);let ue=e=>{let t=e=>{s.value=e.target.value};typeof t==`function`&&t(e)};b.addEventListener(`input`,ue),F(()=>b.removeEventListener(`input`,ue)),C.setAttribute(`name`,`email`);let de;D(()=>{let e=l.value.email?`true`:`false`;Object.is(de,e)||(de=e,e==null?C.removeAttribute(`data-invalid`):C.setAttribute(`data-invalid`,String(e)))});let fe;D(()=>{let e=`input input-bordered mt-2 w-full ${l.value.email?`input-error`:``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(fe,t)||(fe=t,C.setAttribute(`class`,t))});let pe;D(()=>{let e=c.value,t=e==null?``:String(e);Object.is(pe,t)||(pe=t,C.value=t)}),C.setAttribute(`placeholder`,`请输入邮箱`);let me=e=>{let t=e=>{c.value=e.target.value};typeof t==`function`&&t(e)};C.addEventListener(`input`,me),F(()=>C.removeEventListener(`input`,me)),A.setAttribute(`class`,`btn btn-primary`),F(I(e,A,`click`,()=>()=>void O())),j.setAttribute(`class`,`btn btn-outline`);let he=e=>{let t=L;typeof t==`function`&&t(e)};j.addEventListener(`click`,he),F(()=>j.removeEventListener(`click`,he)),B.setAttribute(`class`,`btn btn-ghost`);let ge=e=>{let t=R;typeof t==`function`&&t(e)};B.addEventListener(`click`,ge),F(()=>B.removeEventListener(`click`,ge)),t({parent:H,before:V},()=>l.value.receiver?(e,r,i)=>d(e,i,()=>p(()=>{let e=k(),r=E(`div`,e);S(e,r),n(r,`mt-2 text-sm text-error`);let i=N(`rue:slot:anchor`);S(r,i),t({parent:r,before:i},()=>z(l.value.receiver),()=>({}));let a=w(``),o=w(``);return e.insertBefore(a,e.firstChild),e.appendChild(o),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>u(e=>{let t=w(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),t({parent:W,before:U},()=>l.value.phone?(e,r,i)=>d(e,i,()=>p(()=>{let e=k(),r=E(`div`,e);S(e,r),n(r,`mt-2 text-sm text-error`);let i=N(`rue:slot:anchor`);S(r,i),t({parent:r,before:i},()=>z(l.value.phone),()=>({}));let a=w(``),o=w(``);return e.insertBefore(a,e.firstChild),e.appendChild(o),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>u(e=>{let t=w(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),t({parent:K,before:G},()=>l.value.email?(e,r,i)=>d(e,i,()=>p(()=>{let e=k(),r=E(`div`,e);S(e,r),n(r,`mt-2 text-sm text-error`);let i=N(`rue:slot:anchor`);S(r,i),t({parent:r,before:i},()=>z(l.value.email),()=>({}));let a=w(``),o=w(``);return e.insertBefore(a,e.firstChild),e.appendChild(o),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>u(e=>{let t=w(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),t({parent:J,before:Q},()=>z(g.value),()=>({})),t({parent:X,before:te},()=>z(_.value),()=>({}));let _e=[];return P(()=>{let e=v.value||[];_e=T(ee,Z,_e,e,(e,t)=>`focus-error-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(_e)),[r,r]}))},oe=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,se=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。</p><div class="flex flex-wrap gap-3"><button class="btn btn-primary">打开批量发送弹窗</button><button class="btn btn-ghost">关闭并重置</button></div><!--rue:text-hole:0--><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-xl text-success">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">布局决策</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),ce=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],le=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],ue=(e,r,i)=>{let a=A(!1),s=A(`尚未打开`),c=A(`尚未测量`),l=A(`等待测量`),_=A([...ce]),v=b(`ModalMeasureListDemo:hook:0`),y=async()=>{a.value=!0;let e=v.current?.scrollHeight??0;s.value=`${e}px`,c.value=`等待 flush...`,l.value=`等待布局完成...`,_.value=[`弹窗准备渲染 ${le.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await o();let t=v.current?.scrollHeight??0;c.value=`${t}px`,l.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,_.value=[`弹窗准备渲染 ${le.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${l.value}`]},D=()=>{a.value=!1,s.value=`尚未打开`,c.value=`尚未测量`,l.value=`等待测量`,_.value=[...ce]};return j(()=>p(e=>{let r=se().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],o=r.childNodes[0].childNodes[1].childNodes[1],b=r.childNodes[0].childNodes[2],A=b.parentNode,j=r.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],R=j.parentNode,B=r.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],V=B.parentNode,H=r.childNodes[0].childNodes[3].childNodes[2].childNodes[1].childNodes[0],U=H.parentNode,W=r.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode,K=N(`rue:text-hole:1`);R.replaceChild(K,j);let q=N(`rue:text-hole:2`);V.replaceChild(q,B),i.setAttribute(`class`,`btn btn-primary`),F(I(e,i,`click`,()=>()=>void y())),o.setAttribute(`class`,`btn btn-ghost`);let J=e=>{let t=D;typeof t==`function`&&t(e)};o.addEventListener(`click`,J),F(()=>o.removeEventListener(`click`,J)),t({parent:A,before:b},()=>a.value?(e,r,i)=>d(e,i,()=>p(e=>{let r=k(),i=E(`div`,r);S(r,i),n(i,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let a=E(`div`,i);S(i,a),n(a,`flex items-start justify-between gap-4`);let o=E(`div`,a);S(a,o);let s=E(`div`,o);S(o,s),n(s,`text-sm uppercase tracking-[0.24em] text-base-content/50`),S(s,w(`批量发送预览`));let c=E(`div`,o);S(o,c),n(c,`mt-2 text-2xl font-semibold`),S(c,w(`确认接收人列表`));let l=E(`div`,a);S(a,l),n(l,`badge badge-outline`);let u=N(`rue:slot:anchor`);S(l,u),t({parent:l,before:u},()=>z(le.length),()=>({})),S(l,w(` 人`));let d=E(`div`,i);S(i,d),g(d,()=>v),n(d,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let f=L(`<div class="rounded-box bg-base-200/70 p-3 text-sm leading-6"><div class="font-medium">rue:row-text</div><div class="text-base-content/60"><!--rue:text-hole:1--> · <!--rue:text-hole:2--></div></div>`),p=N(`rue:list:end`);S(d,p);let m=[];P(()=>{m=C(d,p,m,le||[],(e,t)=>e.id,(e,t,n)=>{let r=e,i;return O(e=>{let t=f().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.parentNode;let a=t.childNodes[1].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[2],c=s.parentNode,l=r.name==null||typeof r.name==`boolean`?``:String(r.name);n.textContent=l;let u=w(``);o.insertBefore(u,a),o.removeChild(a);let d=r.team==null||typeof r.team==`boolean`?``:String(r.team);u.textContent=d;let p=w(``);c.insertBefore(p,s),c.removeChild(s);let m=r.region==null||typeof r.region==`boolean`?``:String(r.region);return p.textContent=m,i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(n.textContent=e,l=e)}{let e=r.team==null||typeof r.team==`boolean`?``:String(r.team);Object.is(d,e)||(u.textContent=e,d=e)}{let e=r.region==null||typeof r.region==`boolean`?``:String(r.region);Object.is(m,e)||(p.textContent=e,m=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),F(()=>x(m));let h=w(``),_=w(``);return r.insertBefore(h,r.firstChild),r.appendChild(_),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>u(e=>{let t=w(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({})),t({parent:R,before:K},()=>z(s.value),()=>({})),t({parent:V,before:q},()=>z(c.value),()=>({})),t({parent:U,before:H},()=>z(l.value),()=>({}));let Y=[];return P(()=>{let e=_.value||[];Y=T(G,W,Y,e,(e,t)=>`modal-measure-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(Y)),[r,r]}))},de=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,fe=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。</p><div class="rounded-box border border-base-300 bg-base-100 p-5"><div class="flex items-center justify-between"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">订单详情卡片</div><div class="mt-2 text-2xl font-semibold">订单 #A1024</div></div><div><!--rue:text-hole:0--></div></div><div class="mt-5 grid gap-3 md:grid-cols-2"><div class="rounded-box bg-base-200/60 p-3 text-sm">支付状态：已支付</div><div class="rounded-box bg-base-200/60 p-3 text-sm">配送方式：同城急送</div><div class="rounded-box bg-base-200/60 p-3 text-sm">仓库：上海 3 号仓</div><div class="rounded-box bg-base-200/60 p-3 text-sm">下单时间：09:20</div><!--rue:text-hole:1--></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary"><!--rue:text-hole:2--></button><button class="btn btn-ghost">重置</button></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的高度</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后高度</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:5--></ul></div></div></div>`),pe=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],me=(e,t,n)=>{let r=A(!1),i=A(`尚未测量`),a=A(`尚未测量`),s=A([...pe]),g=b(`PanelMeasureDemo:hook:0`),_=async()=>{r.value=!r.value;let e=r.value?`展开`:`收起`,t=g.current?.offsetHeight??0;i.value=`${t}px`,a.value=`等待 flush...`,s.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await o();let n=g.current?.offsetHeight??0;a.value=`${n}px`,s.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},v=()=>{r.value=!1,i.value=`尚未测量`,a.value=`尚未测量`,s.value=[...pe]};return j(()=>p(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],o=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1],p=t.childNodes[0].childNodes[2].childNodes[0],y=t.childNodes[0].childNodes[2].childNodes[1],b=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],C=b.parentNode,O=t.childNodes[0].childNodes[1].childNodes[1].childNodes[4],A=O.parentNode,j=t.childNodes[0].childNodes[2].childNodes[0].childNodes[0],L=j.parentNode,R=t.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],z=R.parentNode,B=N(`rue:text-hole:3`);z.replaceChild(B,R);let V=t.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],H=V.parentNode,U=N(`rue:text-hole:4`);H.replaceChild(U,V);let W=t.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode,K=g;typeof K==`function`?K(n):K&&typeof K==`object`&&`current`in K&&(K.current=n),F(()=>{typeof K==`function`?K(null):K&&typeof K==`object`&&`current`in K&&(K.current=null)}),n.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5`);let q;D(()=>{let e=`badge ${r.value?`badge-primary`:`badge-outline`}`,t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,o.setAttribute(`class`,t))}),p.setAttribute(`class`,`btn btn-primary`),F(I(e,p,`click`,()=>()=>void _())),y.setAttribute(`class`,`btn btn-ghost`);let J=e=>{let t=v;typeof t==`function`&&t(e)};y.addEventListener(`click`,J),F(()=>y.removeEventListener(`click`,J));let Y=w(``);C.insertBefore(Y,b),C.removeChild(b),c(Y,()=>r.value?`已展开`:`已收起`),l(A,O,()=>{let e=r.value;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=k(),n=E(`div`,t);S(t,n),n.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),S(n,w(`发票状态：电子发票已开具`));let r=E(`div`,t);S(t,r),r.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),S(r,w(`风控结果：人工审核已通过`));let i=E(`div`,t);S(t,i),i.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),S(i,w(`配送备注：优先联系收货人本人`));let a=E(`div`,t);S(t,a),a.setAttribute(`class`,`rounded-box bg-base-200/60 p-3 text-sm`),S(a,w(`售后状态：暂无售后单`));let o=w(``),s=w(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(t=>{let n=w(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=k();return[t.firstChild,t.lastChild]})}});let X=w(``);L.insertBefore(X,j),L.removeChild(j),c(X,()=>r.value?`收起详情区并测量`:`展开详情区并测量`);let Z=w(``);z.insertBefore(Z,B),z.removeChild(B),c(Z,()=>i.value);let ee=w(``);H.insertBefore(ee,U),H.removeChild(U),c(ee,()=>a.value);let Q=[];return P(()=>{let e=s.value||[];Q=T(G,W,Q,e,(e,t)=>`panel-measure-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(Q)),[t,t]}))},he=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ge=L(`<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。</p><div class="flex flex-wrap gap-2"><!--rue:text-hole:0--><button class="btn btn-sm btn-outline">重置</button></div><div class="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100"><table class="table table-pin-rows table-sm"><thead><tr><th>订单号</th><th>客户</th><th>状态</th><th>金额</th><th>备注</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div><div class="grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">同步读取到的首条结果</div><div class="mt-2 font-mono text-2xl">rue:direct-text</div></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm text-base-content/60">await nextTick() 后定位到</div><div class="mt-2 font-mono text-2xl text-success">rue:direct-text</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">本轮步骤</div><ul class="mt-3 space-y-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:4--></ul></div></div></div>`),_e=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],ve={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},ye=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],be=e=>e===`all`?ye:ye.filter(t=>t.status===e),xe=(e,n,r)=>{let i=A(`all`),a=A(`尚未筛选`),s=A(`尚未定位`),g=A([..._e]),y=b(`TableFilterScrollDemo:hook:0`),C=async e=>{i.value=e;let t=y.current?.querySelector(`[data-first-visible="true"]`);a.value=t?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,s.value=`等待 flush...`,g.value=[`筛选条件切换为：${ve[e]}`,`同步读取首条结果：${a.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await o();let n=y.current?.querySelector(`[data-first-visible="true"]`);n?.scrollIntoView({block:`nearest`}),s.value=n?.getAttribute(`data-order-no`)??`当前筛选没有结果`,g.value=[`筛选条件切换为：${ve[e]}`,`同步读取首条结果：${a.value}`,`nextTick() 后首条结果：${s.value}，并已滚动到可视区域`]},O=()=>{i.value=`all`,a.value=`尚未筛选`,s.value=`尚未定位`,g.value=[..._e],y.current&&(y.current.scrollTop=0)},L=_(()=>be(i.value));return v(()=>L.get()),j(()=>p(e=>{let n=ge().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[1],o=n.childNodes[0].childNodes[2],_=n.childNodes[0].childNodes[1].childNodes[0],v=_.parentNode,b=n.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],A=b.parentNode,j=n.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],R=j.parentNode,B=N(`rue:text-hole:2`);R.replaceChild(B,j);let V=n.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],H=V.parentNode,U=N(`rue:text-hole:3`);H.replaceChild(U,V);let W=n.childNodes[0].childNodes[4].childNodes[1].childNodes[0],G=W.parentNode;r.setAttribute(`class`,`btn btn-sm btn-outline`);let K=e=>{let t=O;typeof t==`function`&&t(e)};r.addEventListener(`click`,K),F(()=>r.removeEventListener(`click`,K));let q=y;typeof q==`function`?q(o):q&&typeof q==`object`&&`current`in q&&(q.current=o),F(()=>{typeof q==`function`?q(null):q&&typeof q==`object`&&`current`in q&&(q.current=null)}),o.setAttribute(`class`,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let J=[];P(()=>{J=T(v,_,J,[`all`,`risk`,`refund`,`shipping`,`done`],(e,t)=>e,(e,n)=>{let r=f(e);return M((e,n,a)=>{let o=()=>p(e=>{let n=E(`button`,e),a;D(()=>{let e=`btn btn-sm ${i.value===r.get()?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,n.setAttribute(`class`,t))}),F(I(e,n,`click`,()=>()=>void C(r.get())));let o=N(`rue:compiled-slot`);return S(n,o),t({parent:n,before:o},()=>z(ve[r.get()]),()=>({})),[n,n]});return e==null?o():d(e,a,o)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),F(()=>x(J)),l(A,b,()=>L.get().length>0?{__rue_compiled_branch_key:!0,create:()=>p(e=>{let n=k(),r=N(`rue:list:end`);S(n,r);let i=[];P(()=>{let e=L.get()||[];i=T(r.parentNode,r,i,e,(e,t)=>e.id,(e,n)=>{let r=f(e),i=f(n);return M((e,n,a)=>{let o=()=>p(e=>{let n=E(`tr`,e),a;D(()=>{let e=i.get()===0?`true`:`false`;Object.is(a,e)||(a=e,e==null?n.removeAttribute(`data-first-visible`):n.setAttribute(`data-first-visible`,String(e)))});let o;D(()=>{let e=r.get().orderNo;Object.is(o,e)||(o=e,e==null?n.removeAttribute(`data-order-no`):n.setAttribute(`data-order-no`,String(e)))});let s=E(`td`,n);S(n,s),s.setAttribute(`class`,`font-medium`);let c=N(`rue:compiled-slot`);S(s,c),t({parent:s,before:c},()=>z(r.get().orderNo),()=>({}));let l=E(`td`,n);S(n,l);let u=N(`rue:compiled-slot`);S(l,u),t({parent:l,before:u},()=>z(r.get().customer),()=>({}));let d=E(`td`,n);S(n,d);let f=E(`span`,d);S(d,f),f.setAttribute(`class`,`badge badge-outline`);let p=N(`rue:compiled-slot`);S(f,p),t({parent:f,before:p},()=>z(ve[r.get().status]),()=>({}));let m=E(`td`,n);S(n,m);let h=N(`rue:compiled-slot`);S(m,h),t({parent:m,before:h},()=>z(r.get().amount),()=>({}));let g=E(`td`,n);S(n,g),g.setAttribute(`class`,`text-base-content/60`);let _=N(`rue:compiled-slot`);return S(g,_),t({parent:g,before:_},()=>z(r.get().note),()=>({})),[n,n]});return e==null?o():d(e,a,o)},(t,a)=>{e=t,n=a,r.set(t),i.set(a)},void 0)},!0,!1)}),F(()=>x(i));let a=w(``),o=w(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=E(`tr`,e),n=E(`td`,t);return S(t,n),n.setAttribute(`colSpan`,`5`),n.setAttribute(`class`,`py-8 text-center text-base-content/60`),S(n,w(`当前筛选没有结果`)),[t,t]})});let Y=w(``);R.insertBefore(Y,B),R.removeChild(B),c(Y,()=>a.value);let X=w(``);H.insertBefore(X,U),H.removeChild(U),c(X,()=>s.value);let Z=[];return P(()=>{let e=g.value||[];Z=T(G,W,Z,e,(e,t)=>`table-filter-log-${t}`,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`li`,e),r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(Z)),[n,n]}))},Se=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Ce=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:X,Demo:Y}],we=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:K,Demo:G},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:te,Demo:Q},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:he,Demo:me},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:Se,Demo:xe},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:oe,Demo:ae},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:de,Demo:ue}],Te=L(`<section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold">rue:direct-text</div><p class="mt-2 text-base-content/70 leading-7">rue:direct-text</p><div class="mt-4 flex flex-wrap gap-2"><!--rue:text-hole:3--></div><div class="mt-4"><!--rue:text-hole:4--></div></section>`),Ee=L(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">nextTick 真实业务场景</h1>`),De=L(`<p class="max-w-4xl text-base-content/70 leading-7">现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。</p>`),Oe=L(`<div role="tablist" class="tabs tabs-box mt-6"><button role="tab">效果</button><button role="tab">代码</button></div>`),ke=L(`<div class="mt-4 grid gap-6"><!--rue:text-hole:0--><section class="rounded-box border border-base-300 bg-base-100 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">新增业务 demo</div><div class="mt-2 text-2xl font-semibold">真实业务里 nextTick 怎么用</div><p class="mt-2 text-base-content/70 leading-7">这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。</p></section><!--rue:text-hole:1--></div>`),Ae=(t,n,r)=>{let o=f(R(t,`title`));return a(i(()=>o.get()===`读取最新 DOM 文本`?{__rue_compiled_branch_key:0,create:()=>s(Y,()=>({}))}:{__rue_compiled_branch_key:1,create:()=>o.get()===`消息流自动滚动`?s(G,()=>({})):o.get()===`打开面板后自动聚焦`?s(Q,()=>({})):o.get()===`展开后测量高度`?s(me,()=>({})):o.get()===`表格筛选后滚到首条结果`?s(xe,()=>({})):o.get()===`提交后聚焦错误字段`?s(ae,()=>({})):s(ue,()=>({}))}),e=>y(()=>{o.set(e.title)}),()=>e(t))},je=(n,i,o)=>{let c=f(R(n,`activeTab`)),u=f(R(n,`eyebrow`)),g=f(R(n,`scenario`));return a(p(e=>{let n=k(),i=Te().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[0].childNodes[0],_=o.parentNode,v=a.childNodes[1].childNodes[0],y=v.parentNode,b=a.childNodes[2].childNodes[0],C=b.parentNode,D=a.childNodes[3].childNodes[0],O=D.parentNode,A=a.childNodes[4].childNodes[0],j=A.parentNode,I=N(`rue:text-hole:1`);y.replaceChild(I,v);let L=N(`rue:text-hole:2`);C.replaceChild(L,b),n.appendChild(i),t({parent:_,before:o},()=>z(u.get()),()=>({})),t({parent:y,before:I},()=>z(g.get().title),()=>({})),t({parent:C,before:L},()=>z(g.get().summary),()=>({}));let R=[];P(()=>{let e=g.get().businessCases||[];R=T(O,D,R,e,(e,t)=>e,(e,t)=>{let n=f(e);return M((e,t,r)=>{let i=()=>h(e=>{let t=E(`span`,e);t.setAttribute(`class`,`badge badge-outline`);let r=w(``);return S(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(R)),l(j,A,()=>c.get().value===`preview`?{__rue_compiled_branch_key:!0,create:()=>s(Ae,()=>({title:g.get().title}))}:{__rue_compiled_branch_key:!1,create:()=>p(e=>{let t=E(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=E(`div`,t);return S(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,B,()=>({className:`h-full`,lang:`tsx`,code:g.get().source})),[t,t]})});let V=w(``),H=w(``);return n.insertBefore(V,n.firstChild),n.appendChild(H),[n.firstChild,n.lastChild]}),e=>y(()=>{c.set(e.activeTab),u.set(e.eyebrow),g.set(e.scenario)}),()=>e(n))},Me=(e,t,n)=>{let r=A(`preview`);return j(()=>s(V,()=>({children:(e,t,n)=>{let i=()=>p(e=>{let t=k();t.appendChild(Ee().content.cloneNode(!0)),t.appendChild(De().content.cloneNode(!0));let n=Oe().content.cloneNode(!0),i=n.firstChild,a=i.childNodes[0],o=i.childNodes[1];t.appendChild(n),a.setAttribute(`role`,`tab`);let c;D(()=>{let e=`tab ${r.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))}),F(I(e,a,`click`,()=>()=>{r.value=`preview`})),o.setAttribute(`role`,`tab`);let l;D(()=>{let e=`tab ${r.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,o.setAttribute(`class`,t))}),F(I(e,o,`click`,()=>()=>{r.value=`code`}));let u=ke().content.cloneNode(!0),p=u.firstChild,m=p.childNodes[0],h=m.parentNode,g=p.childNodes[2],_=g.parentNode;t.appendChild(u);let v=[];P(()=>{v=T(h,m,v,Ce||[],(e,t)=>e.title,(e,t)=>{let n=f(e);return M((e,t,i)=>{let a=()=>s(je,()=>({scenario:n.get(),eyebrow:`保留原始 demo`,activeTab:r}));return e==null?a():d(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>x(v));let y=[];P(()=>{y=T(_,g,y,we||[],(e,t)=>e.title,(e,t)=>{let n=f(e),i=f(t);return M((e,t,a)=>{let o=()=>s(je,()=>({scenario:n.get(),eyebrow:`业务场景 ${i.get()+1}`,activeTab:r}));return e==null?o():d(e,a,o)},(r,a)=>{e=r,t=a,n.set(r),i.set(a)},void 0)},!0,!1)}),F(()=>x(y));let b=w(``),S=w(``);return t.insertBefore(b,t.firstChild),t.appendChild(S),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})))};export{Me as default};