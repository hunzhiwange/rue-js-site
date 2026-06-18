import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,bt as u,c as d,et as f,ft as p,gt as m,l as h,pt as g,q as _,qt as v,r as y,s as b,st as x,t as S}from"./vapor-runtime-iQZthBPQ.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as T}from"./Code-CZqShVUj.js";import{r as E}from"./SidebarPlaygroundExample-5H7RL-T7.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:d,syncHeight:p,flushedHeight:m,logLines:S,listRef:T}=C(`useSetup:0:0`,()=>v(()=>({messages:C(`ref:1:0`,()=>i(O())),syncHeight:C(`ref:1:1`,()=>i(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>i(`尚未追加`)),logLines:C(`ref:1:3`,()=>i([...D])),listRef:C(`useRef:1:4`,()=>r())}))),E=async()=>{let e=d.value.length+1,t=String(19+e).padStart(2,`0`);d.value=[...d.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=T.current?.scrollHeight??0;p.value=`${n}px（旧高度）`,m.value=`等待 flush...`,S.value=[`消息数已变为 ${d.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=n),await u();let r=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=r),m.value=`${r}px（已包含新消息）`,S.value=[`消息数已变为 ${d.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},k=()=>{d.value=O(),p.value=`尚未追加`,m.value=`尚未追加`,S.value=[...D],T.current&&(T.current.scrollTop=0)};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=a(`div`,u);n(u,C),x(C,`rounded-box border border-base-300 bg-base-100`);let D=a(`div`,C);n(C,D),x(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=a(`div`,D);n(D,O),x(O,`text-sm font-medium text-base-content/70`),n(O,e(`订单通知流`));let A=a(`div`,D);n(D,A),x(A,`badge badge-outline`);let j=o(`rue:slot:anchor`);n(A,j),s(()=>{let e=d.value.length;t(()=>b(e,A,j))}),n(A,e(` 条消息`));let M=a(`div`,C);n(C,M);let N=ee(M,()=>T);y(()=>{N()}),x(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=o(`rue:list:start`),F=o(`rue:list:end`);n(M,P),n(M,F);let I=new Map;s(()=>{I=w({items:d.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,r,i,u,d)=>{b(h(()=>{let r=c(),i=a(`div`,r);n(r,i),s(()=>{l(i,`key`,String(e.id))}),x(i,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let u=o(`rue:slot:anchor`);return n(i,u),s(()=>{let n=e.text;t(()=>b(n,i,u))}),r}),r,i)}})});let L=a(`div`,u);n(u,L),x(L,`flex flex-wrap gap-3`);let R=a(`button`,L);n(L,R),x(R,`btn btn-primary`),_(R,`click`,()=>void E()),n(R,e(`追加通知并滚动到底部`));let z=a(`button`,L);n(L,z),x(z,`btn btn-ghost`),_(z,`click`,k),n(z,e(`重置`));let B=a(`div`,u);n(u,B),x(B,`grid gap-4 md:grid-cols-2`);let V=a(`div`,B);n(B,V),x(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=a(`div`,V);n(V,H),x(H,`text-sm text-base-content/60`),n(H,e(`同步读取到的 scrollHeight`));let U=a(`div`,V);n(V,U),x(U,`mt-2 font-mono text-2xl`);let W=f(U);n(U,W),s(()=>{g(W,p.value)});let G=a(`div`,B);n(B,G),x(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=a(`div`,G);n(G,K),x(K,`text-sm text-base-content/60`),n(K,e(`await nextTick() 后的高度`));let q=a(`div`,G);n(G,q),x(q,`mt-2 font-mono text-2xl text-success`);let J=f(q);n(q,J),s(()=>{g(J,m.value)});let Y=a(`div`,u);n(u,Y),x(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=a(`div`,Y);n(Y,X),x(X,`text-sm font-medium text-base-content/70`),n(X,e(`本轮步骤`));let Z=a(`ul`,Y);n(Y,Z),x(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Q=o(`rue:list:start`),te=o(`rue:list:end`);n(Z,Q),n(Z,te);let ne=new Map;return s(()=>{ne=w({items:S.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Z,before:te,singleRoot:!0,start:Q,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`chat-scroll-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:t,beforeDomText:d,afterDomText:p,logLines:m,counterRef:S}=C(`useSetup:0:0`,()=>v(()=>({count:C(`ref:1:0`,()=>i(0)),beforeDomText:C(`ref:1:1`,()=>i(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>i(`尚未读取`)),logLines:C(`ref:1:3`,()=>i([...j])),counterRef:C(`useRef:1:4`,()=>r())}))),T=async()=>{t.value+=1;let e=S.current?.textContent??`(missing)`;d.value=e,p.value=`等待 flush...`,m.value=[`状态值已经改为 ${t.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await u();let n=S.current?.textContent??`(missing)`;p.value=n,m.value=[`状态值已经改为 ${t.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${n}`]},E=()=>{t.value=0,d.value=`尚未读取`,p.value=`尚未读取`,m.value=[...j]};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=a(`div`,u);n(u,C),x(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=a(`div`,C);n(C,D),x(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(D,e(`当前 DOM 文本`));let O=a(`div`,C);n(C,O),x(O,`mt-3 text-4xl font-semibold text-primary`);let k=a(`span`,O);n(O,k);let A=ee(k,()=>S);y(()=>{A()});let j=f(k);n(k,j),s(()=>{g(j,t.value)});let M=a(`div`,u);n(u,M),x(M,`flex flex-wrap gap-3`);let N=a(`button`,M);n(M,N),x(N,`btn btn-primary`),_(N,`click`,()=>void T()),n(N,e(`自增并读取 DOM`));let P=a(`button`,M);n(M,P),x(P,`btn btn-ghost`),_(P,`click`,E),n(P,e(`重置`));let F=a(`div`,u);n(u,F),x(F,`grid gap-4 md:grid-cols-2`);let I=a(`div`,F);n(F,I),x(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=a(`div`,I);n(I,L),x(L,`text-sm text-base-content/60`),n(L,e(`同步读取到的 DOM 文本`));let R=a(`div`,I);n(I,R),x(R,`mt-2 font-mono text-2xl`);let z=f(R);n(R,z),s(()=>{g(z,d.value)});let B=a(`div`,F);n(F,B),x(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=a(`div`,B);n(B,V),x(V,`text-sm text-base-content/60`),n(V,e(`await nextTick() 后读取`));let H=a(`div`,B);n(B,H),x(H,`mt-2 font-mono text-2xl text-success`);let U=f(H);n(H,U),s(()=>{g(U,p.value)});let W=a(`div`,u);n(u,W),x(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=a(`div`,W);n(W,G),x(G,`text-sm font-medium text-base-content/70`),n(G,e(`本轮步骤`));let K=a(`ul`,W);n(W,K),x(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=o(`rue:list:start`),J=o(`rue:list:end`);n(K,q),n(K,J);let Y=new Map;return s(()=>{Y=w({items:m.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`dom-read-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:d,keyword:m,syncState:S,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>v(()=>({panelOpen:C(`ref:1:0`,()=>i(!1)),keyword:C(`ref:1:1`,()=>i(``)),syncState:C(`ref:1:2`,()=>i(`尚未打开`)),postTickState:C(`ref:1:3`,()=>i(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>i([...P])),inputRef:C(`useRef:1:5`,()=>r())}))),O=async()=>{d.value=!0,S.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,S.value,`等待 nextTick() 后执行 focus()`],await u(),D.current?.focus(),T.value=globalThis.document?.activeElement===D.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,S.value,T.value]},k=()=>{d.value=!1,m.value=``,S.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=a(`div`,u);n(u,C),x(C,`flex flex-wrap gap-3`);let A=a(`button`,C);n(C,A),x(A,`btn btn-primary`),_(A,`click`,()=>void O()),n(A,e(`打开高级筛选`));let j=a(`button`,C);n(C,j),x(j,`btn btn-ghost`),_(j,`click`,k),n(j,e(`关闭并重置`));let M=o(`rue:slot:anchor`);n(u,M),s(()=>{let r=d.value?h(()=>{let t=c(),r=a(`div`,t);n(t,r),x(r,`rounded-box border border-base-300 bg-base-100 p-5`);let i=a(`div`,r);n(r,i),x(i,`grid gap-4 md:grid-cols-2`);let o=a(`label`,i);n(i,o),x(o,`block`);let u=a(`div`,o);n(o,u),x(u,`text-sm text-base-content/60`),n(u,e(`关键词`));let d=a(`input`,o);n(o,d);let f=ee(d,()=>D);y(()=>{f()}),x(d,`input input-bordered mt-2 w-full`),s(()=>{p(d,m.value)}),l(d,`placeholder`,`订单号 / 用户名 / 手机号`),_(d,`input`,e=>{m.value=e.target.value});let h=a(`label`,i);n(i,h),x(h,`block`);let g=a(`div`,h);n(h,g),x(g,`text-sm text-base-content/60`),n(g,e(`订单状态`));let v=a(`select`,h);n(h,v),x(v,`select select-bordered mt-2 w-full`);let b=a(`option`,v);n(v,b),n(b,e(`全部`));let S=a(`option`,v);n(v,S),n(S,e(`待支付`));let C=a(`option`,v);n(v,C),n(C,e(`待发货`));let w=a(`option`,v);return n(v,w),n(w,e(`已完成`)),t}):``;t(()=>b(r,u,M))});let N=a(`div`,u);n(u,N),x(N,`grid gap-4 md:grid-cols-2`);let P=a(`div`,N);n(N,P),x(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=a(`div`,P);n(P,F),x(F,`text-sm text-base-content/60`),n(F,e(`同步阶段状态`));let I=a(`div`,P);n(P,I),x(I,`mt-2 font-mono text-xl`);let L=f(I);n(I,L),s(()=>{g(L,S.value)});let R=a(`div`,N);n(N,R),x(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=a(`div`,R);n(R,z),x(z,`text-sm text-base-content/60`),n(z,e(`await nextTick() 后状态`));let B=a(`div`,R);n(R,B),x(B,`mt-2 font-mono text-xl text-success`);let V=f(B);n(B,V),s(()=>{g(V,T.value)});let H=a(`div`,u);n(u,H),x(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=a(`div`,H);n(H,U),x(U,`text-sm font-medium text-base-content/70`),n(U,e(`本轮步骤`));let W=a(`ul`,H);n(H,W),x(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=o(`rue:list:start`),K=o(`rue:list:end`);n(W,G),n(W,K);let q=new Map;return s(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`filter-focus-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:d,phone:m,email:S,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>v(()=>{let e=C(`ref:1:0`,()=>i(``)),t=C(`ref:1:1`,()=>i(``)),n=C(`ref:1:2`,()=>i(``));return{receiver:e,phone:t,email:n,errors:C(`ref:1:3`,()=>i(z())),syncField:C(`ref:1:4`,()=>i(`尚未提交`)),postTickField:C(`ref:1:5`,()=>i(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>i([...L])),formRef:C(`useRef:1:7`,()=>r()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),t=Object.values(e).filter(Boolean).length;T.value=e;let n=k.current?.querySelector(`[data-invalid="true"]`);E.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await u();let r=k.current?.querySelector(`[data-invalid="true"]`);r?.focus(),D.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{d.value=`李四`,m.value=`13800001111`,S.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{d.value=``,m.value=``,S.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=a(`div`,u);n(u,C);let A=ee(C,()=>k);y(()=>{A()}),x(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=a(`label`,C);n(C,P),x(P,`block`);let F=a(`div`,P);n(P,F),x(F,`text-sm text-base-content/60`),n(F,e(`联系人`));let I=a(`input`,P);n(P,I),l(I,`name`,`receiver`),s(()=>{l(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),s(()=>{x(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),s(()=>{p(I,d.value)}),l(I,`placeholder`,`请输入联系人`),_(I,`input`,e=>{d.value=e.target.value});let L=o(`rue:slot:anchor`);n(P,L),s(()=>{let e=T.value.receiver?h(()=>{let e=c(),r=a(`div`,e);n(e,r),x(r,`mt-2 text-sm text-error`);let i=o(`rue:slot:anchor`);return n(r,i),s(()=>{let e=T.value.receiver;t(()=>b(e,r,i))}),e}):``;t(()=>b(e,P,L))});let R=a(`label`,C);n(C,R),x(R,`block`);let z=a(`div`,R);n(R,z),x(z,`text-sm text-base-content/60`),n(z,e(`手机号`));let B=a(`input`,R);n(R,B),l(B,`name`,`phone`),s(()=>{l(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),s(()=>{x(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),s(()=>{p(B,m.value)}),l(B,`placeholder`,`请输入 11 位手机号`),_(B,`input`,e=>{m.value=e.target.value});let V=o(`rue:slot:anchor`);n(R,V),s(()=>{let e=T.value.phone?h(()=>{let e=c(),r=a(`div`,e);n(e,r),x(r,`mt-2 text-sm text-error`);let i=o(`rue:slot:anchor`);return n(r,i),s(()=>{let e=T.value.phone;t(()=>b(e,r,i))}),e}):``;t(()=>b(e,R,V))});let H=a(`label`,C);n(C,H),x(H,`block`);let U=a(`div`,H);n(H,U),x(U,`text-sm text-base-content/60`),n(U,e(`邮箱`));let W=a(`input`,H);n(H,W),l(W,`name`,`email`),s(()=>{l(W,`data-invalid`,String(T.value.email?`true`:`false`))}),s(()=>{x(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),s(()=>{p(W,S.value)}),l(W,`placeholder`,`请输入邮箱`),_(W,`input`,e=>{S.value=e.target.value});let G=o(`rue:slot:anchor`);n(H,G),s(()=>{let e=T.value.email?h(()=>{let e=c(),r=a(`div`,e);n(e,r),x(r,`mt-2 text-sm text-error`);let i=o(`rue:slot:anchor`);return n(r,i),s(()=>{let e=T.value.email;t(()=>b(e,r,i))}),e}):``;t(()=>b(e,H,G))});let K=a(`div`,u);n(u,K),x(K,`flex flex-wrap gap-3`);let q=a(`button`,K);n(K,q),x(q,`btn btn-primary`),_(q,`click`,()=>void j()),n(q,e(`提交并定位错误字段`));let J=a(`button`,K);n(K,J),x(J,`btn btn-outline`),_(J,`click`,M),n(J,e(`填入合法示例`));let Y=a(`button`,K);n(K,Y),x(Y,`btn btn-ghost`),_(Y,`click`,N),n(Y,e(`重置`));let X=a(`div`,u);n(u,X),x(X,`grid gap-4 md:grid-cols-2`);let Z=a(`div`,X);n(X,Z),x(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=a(`div`,Z);n(Z,Q),x(Q,`text-sm text-base-content/60`),n(Q,e(`同步阶段识别到的字段`));let te=a(`div`,Z);n(Z,te),x(te,`mt-2 font-mono text-xl`);let ne=f(te);n(te,ne),s(()=>{g(ne,E.value)});let $=a(`div`,X);n(X,$),x($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=a(`div`,$);n($,re),x(re,`text-sm text-base-content/60`),n(re,e(`await nextTick() 后结果`));let ie=a(`div`,$);n($,ie),x(ie,`mt-2 font-mono text-xl text-success`);let ae=f(ie);n(ie,ae),s(()=>{g(ae,D.value)});let oe=a(`div`,u);n(u,oe),x(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=a(`div`,oe);n(oe,se),x(se,`text-sm font-medium text-base-content/70`),n(se,e(`本轮步骤`));let ce=a(`ul`,oe);n(oe,ce),x(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=o(`rue:list:start`),ue=o(`rue:list:end`);n(ce,le),n(ce,ue);let de=new Map;return s(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`focus-error-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:d,syncHeight:p,postTickHeight:m,layoutDecision:S,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>v(()=>({modalOpen:C(`ref:1:0`,()=>i(!1)),syncHeight:C(`ref:1:1`,()=>i(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>i(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>i(`等待测量`)),logLines:C(`ref:1:4`,()=>i([...H])),listRef:C(`useRef:1:5`,()=>r())}))),D=async()=>{d.value=!0;let e=E.current?.scrollHeight??0;p.value=`${e}px`,m.value=`等待 flush...`,S.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await u();let t=E.current?.scrollHeight??0;m.value=`${t}px`,S.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${S.value}`]},O=()=>{d.value=!1,p.value=`尚未打开`,m.value=`尚未测量`,S.value=`等待测量`,T.value=[...H]};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=a(`div`,u);n(u,C),x(C,`flex flex-wrap gap-3`);let k=a(`button`,C);n(C,k),x(k,`btn btn-primary`),_(k,`click`,()=>void D()),n(k,e(`打开批量发送弹窗`));let A=a(`button`,C);n(C,A),x(A,`btn btn-ghost`),_(A,`click`,O),n(A,e(`关闭并重置`));let j=o(`rue:slot:anchor`);n(u,j),s(()=>{let r=d.value?h(()=>{let r=c(),i=a(`div`,r);n(r,i),x(i,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let u=a(`div`,i);n(i,u),x(u,`flex items-start justify-between gap-4`);let d=a(`div`,u);n(u,d);let f=a(`div`,d);n(d,f),x(f,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(f,e(`批量发送预览`));let p=a(`div`,d);n(d,p),x(p,`mt-2 text-2xl font-semibold`),n(p,e(`确认接收人列表`));let m=a(`div`,u);n(u,m),x(m,`badge badge-outline`);let g=o(`rue:slot:anchor`);n(m,g),s(()=>{let e=U.length;t(()=>b(e,m,g))}),n(m,e(` 人`));let _=a(`div`,i);n(i,_);let v=ee(_,()=>E);y(()=>{v()}),x(_,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=o(`rue:list:start`),C=o(`rue:list:end`);n(_,S),n(_,C);let T=new Map;return s(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:_,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(r,i,u,d,f)=>{b(h(()=>{let i=c(),u=a(`div`,i);n(i,u),s(()=>{l(u,`key`,String(r.id))}),x(u,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let d=a(`div`,u);n(u,d),x(d,`font-medium`);let f=o(`rue:slot:anchor`);n(d,f),s(()=>{let e=r.name;t(()=>b(e,d,f))});let p=a(`div`,u);n(u,p),x(p,`text-base-content/60`);let m=o(`rue:slot:anchor`);n(p,m),s(()=>{let e=r.team;t(()=>b(e,p,m))}),n(p,e(` · `));let h=o(`rue:slot:anchor`);return n(p,h),s(()=>{let e=r.region;t(()=>b(e,p,h))}),i}),i,u)}})}),r}):``;t(()=>b(r,u,j))});let M=a(`div`,u);n(u,M),x(M,`grid gap-4 md:grid-cols-3`);let N=a(`div`,M);n(M,N),x(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=a(`div`,N);n(N,P),x(P,`text-sm text-base-content/60`),n(P,e(`同步读取到的高度`));let F=a(`div`,N);n(N,F),x(F,`mt-2 font-mono text-xl`);let I=f(F);n(F,I),s(()=>{g(I,p.value)});let L=a(`div`,M);n(M,L),x(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=a(`div`,L);n(L,R),x(R,`text-sm text-base-content/60`),n(R,e(`await nextTick() 后高度`));let z=a(`div`,L);n(L,z),x(z,`mt-2 font-mono text-xl text-success`);let B=f(z);n(z,B),s(()=>{g(B,m.value)});let V=a(`div`,M);n(M,V),x(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=a(`div`,V);n(V,H),x(H,`text-sm text-base-content/60`),n(H,e(`布局决策`));let W=a(`div`,V);n(V,W),x(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=f(W);n(W,G),s(()=>{g(G,S.value)});let K=a(`div`,u);n(u,K),x(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=a(`div`,K);n(K,q),x(q,`text-sm font-medium text-base-content/70`),n(q,e(`本轮步骤`));let J=a(`ul`,K);n(K,J),x(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=o(`rue:list:start`),X=o(`rue:list:end`);n(J,Y),n(J,X);let Z=new Map;return s(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`modal-measure-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:d,syncHeight:p,postTickHeight:m,logLines:S,panelRef:T}=C(`useSetup:0:0`,()=>v(()=>({expanded:C(`ref:1:0`,()=>i(!1)),syncHeight:C(`ref:1:1`,()=>i(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>i(`尚未测量`)),logLines:C(`ref:1:3`,()=>i([...K])),panelRef:C(`useRef:1:4`,()=>r())}))),E=async()=>{d.value=!d.value;let e=d.value?`展开`:`收起`,t=T.current?.offsetHeight??0;p.value=`${t}px`,m.value=`等待 flush...`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await u();let n=T.current?.offsetHeight??0;m.value=`${n}px`,S.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},D=()=>{d.value=!1,p.value=`尚未测量`,m.value=`尚未测量`,S.value=[...K]};return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let v=a(`p`,u);n(u,v),x(v,`text-base-content/70 leading-7`),n(v,e(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=a(`div`,u);n(u,C);let O=ee(C,()=>T);y(()=>{O()}),x(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=a(`div`,C);n(C,k),x(k,`flex items-center justify-between`);let A=a(`div`,k);n(k,A);let j=a(`div`,A);n(A,j),x(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(j,e(`订单详情卡片`));let M=a(`div`,A);n(A,M),x(M,`mt-2 text-2xl font-semibold`),n(M,e(`订单 #A1024`));let N=a(`div`,k);n(k,N),s(()=>{x(N,`badge ${d.value?`badge-primary`:`badge-outline`}`)});let P=f(N);n(N,P),s(()=>{g(P,d.value?`已展开`:`已收起`)});let F=a(`div`,C);n(C,F),x(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=a(`div`,F);n(F,I),x(I,`rounded-box bg-base-200/60 p-3 text-sm`),n(I,e(`支付状态：已支付`));let L=a(`div`,F);n(F,L),x(L,`rounded-box bg-base-200/60 p-3 text-sm`),n(L,e(`配送方式：同城急送`));let R=a(`div`,F);n(F,R),x(R,`rounded-box bg-base-200/60 p-3 text-sm`),n(R,e(`仓库：上海 3 号仓`));let z=a(`div`,F);n(F,z),x(z,`rounded-box bg-base-200/60 p-3 text-sm`),n(z,e(`下单时间：09:20`));let B=o(`rue:slot:anchor`);n(F,B),s(()=>{let r=d.value?h(()=>{let t=c();n(t,e(` `));let r=a(`div`,t);n(t,r),x(r,`rounded-box bg-base-200/60 p-3 text-sm`),n(r,e(`发票状态：电子发票已开具`)),n(t,e(` `));let i=a(`div`,t);n(t,i),x(i,`rounded-box bg-base-200/60 p-3 text-sm`),n(i,e(`风控结果：人工审核已通过`)),n(t,e(` `));let o=a(`div`,t);n(t,o),x(o,`rounded-box bg-base-200/60 p-3 text-sm`),n(o,e(`配送备注：优先联系收货人本人`)),n(t,e(` `));let s=a(`div`,t);return n(t,s),x(s,`rounded-box bg-base-200/60 p-3 text-sm`),n(s,e(`售后状态：暂无售后单`)),n(t,e(` `)),t}):``;t(()=>b(r,F,B))});let V=a(`div`,u);n(u,V),x(V,`flex flex-wrap gap-3`);let H=a(`button`,V);n(V,H),x(H,`btn btn-primary`),_(H,`click`,()=>void E());let U=f(H);n(H,U),s(()=>{g(U,d.value?`收起详情区并测量`:`展开详情区并测量`)});let W=a(`button`,V);n(V,W),x(W,`btn btn-ghost`),_(W,`click`,D),n(W,e(`重置`));let G=a(`div`,u);n(u,G),x(G,`grid gap-4 md:grid-cols-2`);let K=a(`div`,G);n(G,K),x(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=a(`div`,K);n(K,q),x(q,`text-sm text-base-content/60`),n(q,e(`同步读取到的高度`));let J=a(`div`,K);n(K,J),x(J,`mt-2 font-mono text-2xl`);let Y=f(J);n(J,Y),s(()=>{g(Y,p.value)});let X=a(`div`,G);n(G,X),x(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=a(`div`,X);n(X,Z),x(Z,`text-sm text-base-content/60`),n(Z,e(`await nextTick() 后高度`));let Q=a(`div`,X);n(X,Q),x(Q,`mt-2 font-mono text-2xl text-success`);let te=f(Q);n(Q,te),s(()=>{g(te,m.value)});let ne=a(`div`,u);n(u,ne),x(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=a(`div`,ne);n(ne,$),x($,`text-sm font-medium text-base-content/70`),n($,e(`本轮步骤`));let re=a(`ul`,ne);n(ne,re),x(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=o(`rue:list:start`),ae=o(`rue:list:end`);n(re,ie),n(re,ae);let oe=new Map;return s(()=>{oe=w({items:S.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`panel-measure-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),te=()=>{let{activeStatus:d,syncTarget:p,postTickTarget:S,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>v(()=>({activeStatus:C(`ref:1:0`,()=>i(`all`)),syncTarget:C(`ref:1:1`,()=>i(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>i(`尚未定位`)),logLines:C(`ref:1:3`,()=>i([...Y])),viewportRef:C(`useRef:1:4`,()=>r())}))),D=async e=>{d.value=e,p.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,S.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${p.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await u();let t=E.current?.querySelector(`[data-first-visible="true"]`);t?.scrollIntoView({block:`nearest`}),S.value=t?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${p.value}`,`nextTick() 后首条结果：${S.value}，并已滚动到可视区域`]},O=()=>{d.value=`all`,p.value=`尚未筛选`,S.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>m(()=>Q(d.value)));return h(r=>{let i=a(`div`,r);x(i,`card bg-base-100 shadow`);let u=a(`div`,i);n(i,u),x(u,`card-body gap-5`);let m=a(`p`,u);n(u,m),x(m,`text-base-content/70 leading-7`),n(m,e(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let v=a(`div`,u);n(u,v),x(v,`flex flex-wrap gap-2`);let C=o(`rue:list:start`),A=o(`rue:list:end`);n(v,C),n(v,A);let j=new Map;s(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:v,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,i,u,f)=>{b(h(()=>{let r=c(),i=a(`button`,r);n(r,i),s(()=>{l(i,`key`,String(e))}),s(()=>{x(i,`btn btn-sm ${d.value===e?`btn-primary`:`btn-ghost`}`)}),_(i,`click`,()=>void D(e));let u=o(`rue:slot:anchor`);return n(i,u),s(()=>{let n=X[e];t(()=>b(n,i,u))}),r}),r,i)}})});let M=a(`button`,v);n(v,M),x(M,`btn btn-sm btn-outline`),_(M,`click`,O),n(M,e(`重置`));let N=a(`div`,u);n(u,N);let P=ee(N,()=>E);y(()=>{P()}),x(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=a(`table`,N);n(N,F),x(F,`table table-pin-rows table-sm`);let I=a(`thead`,F);n(F,I);let L=a(`tr`,I);n(I,L);let R=a(`th`,L);n(L,R),n(R,e(`订单号`));let z=a(`th`,L);n(L,z),n(z,e(`客户`));let B=a(`th`,L);n(L,B),n(B,e(`状态`));let V=a(`th`,L);n(L,V),n(V,e(`金额`));let H=a(`th`,L);n(L,H),n(H,e(`备注`));let U=a(`tbody`,F);n(F,U);let W=o(`rue:slot:anchor`);n(U,W),s(()=>{let r=k.get().length>0?h(()=>{let e=c(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let u=new Map;return s(()=>{u=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:u,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,r,i,u,d)=>{b(h(()=>{let r=c(),i=a(`tr`,r);n(r,i),s(()=>{l(i,`key`,String(e.id))}),s(()=>{l(i,`data-first-visible`,String(d===0?`true`:`false`))}),s(()=>{l(i,`data-order-no`,String(e.orderNo))});let u=a(`td`,i);n(i,u),x(u,`font-medium`);let f=o(`rue:slot:anchor`);n(u,f),s(()=>{let n=e.orderNo;t(()=>b(n,u,f))});let p=a(`td`,i);n(i,p);let m=o(`rue:slot:anchor`);n(p,m),s(()=>{let n=e.customer;t(()=>b(n,p,m))});let h=a(`td`,i);n(i,h);let g=a(`span`,h);n(h,g),x(g,`badge badge-outline`);let _=o(`rue:slot:anchor`);n(g,_),s(()=>{let n=X[e.status];t(()=>b(n,g,_))});let v=a(`td`,i);n(i,v);let y=o(`rue:slot:anchor`);n(v,y),s(()=>{let n=e.amount;t(()=>b(n,v,y))});let S=a(`td`,i);n(i,S),x(S,`text-base-content/60`);let C=o(`rue:slot:anchor`);return n(S,C),s(()=>{let n=e.note;t(()=>b(n,S,C))}),r}),r,i)}})}),e}):h(()=>{let t=c(),r=a(`tr`,t);n(t,r);let i=a(`td`,r);return n(r,i),l(i,`colSpan`,`5`),x(i,`py-8 text-center text-base-content/60`),n(i,e(`当前筛选没有结果`)),t});t(()=>b(r,U,W))});let G=a(`div`,u);n(u,G),x(G,`grid gap-4 md:grid-cols-2`);let K=a(`div`,G);n(G,K),x(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=a(`div`,K);n(K,q),x(q,`text-sm text-base-content/60`),n(q,e(`同步读取到的首条结果`));let J=a(`div`,K);n(K,J),x(J,`mt-2 font-mono text-2xl`);let Y=f(J);n(J,Y),s(()=>{g(Y,p.value)});let Z=a(`div`,G);n(G,Z),x(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=a(`div`,Z);n(Z,Q),x(Q,`text-sm text-base-content/60`),n(Q,e(`await nextTick() 后定位到`));let te=a(`div`,Z);n(Z,te),x(te,`mt-2 font-mono text-2xl text-success`);let ne=f(te);n(te,ne),s(()=>{g(ne,S.value)});let $=a(`div`,u);n(u,$),x($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=a(`div`,$);n($,re),x(re,`text-sm font-medium text-base-content/70`),n(re,e(`本轮步骤`));let ie=a(`ul`,$);n($,ie),x(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=o(`rue:list:start`),oe=o(`rue:list:end`);n(ie,ae),n(ie,oe);let se=new Map;return s(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(`table-filter-log-${o}`))});let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})}),i})},ne=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:ne,Demo:te},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=e=>{let{Demo:r}=C(`useSetup:0:0`,()=>v(()=>({Demo:e.scenario.Demo})));return h(i=>{let u=a(`section`,i);x(u,`rounded-box border border-base-300 bg-base-100 p-5`);let d=a(`div`,u);n(u,d),x(d,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let p=o(`rue:slot:anchor`);n(d,p),s(()=>{let n=e.eyebrow;t(()=>b(n,d,p))});let m=a(`div`,u);n(u,m),x(m,`mt-2 text-2xl font-semibold`);let _=o(`rue:slot:anchor`);n(m,_),s(()=>{let n=e.scenario.title;t(()=>b(n,m,_))});let v=a(`p`,u);n(u,v),x(v,`mt-2 text-base-content/70 leading-7`);let y=o(`rue:slot:anchor`);n(v,y),s(()=>{let n=e.scenario.summary;t(()=>b(n,v,y))});let C=a(`div`,u);n(u,C),x(C,`mt-4 flex flex-wrap gap-2`);let ee=o(`rue:list:start`),E=o(`rue:list:end`);n(C,ee),n(C,E);let D=new Map;s(()=>{D=w({items:e.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(e,t,r,i,o)=>{b(h(()=>{let t=c(),r=a(`span`,t);n(t,r),s(()=>{l(r,`key`,String(e))}),x(r,`badge badge-outline`);let i=f(r);return n(r,i),s(()=>{g(i,e)}),t}),t,r)}})});let O=a(`div`,u);n(u,O),x(O,`mt-4`);let k=o(`rue:slot:anchor`);return n(O,k),s(()=>{let i=e.activeTab.value===`preview`?h(()=>{let e=c(),t=o(`rue:component:anchor`);return n(e,t),b(S(r,{}),e,t),e}):h(()=>{let r=c(),i=a(`div`,r);n(r,i),x(i,`card bg-base-100 shadow overflow-auto`);let l=a(`div`,i);n(i,l),x(l,`card-body p-0`);let u=o(`rue:component:anchor`);return n(l,u),s(()=>{let n=S(T,{className:`h-full`,lang:`tsx`,code:e.scenario.source});t(()=>b(n,l,u))}),r});t(()=>b(i,O,k))}),u})},ae=()=>{let{activeTab:t}=C(`useSetup:0:0:dup1`,()=>v(()=>({activeTab:C(`ref:1:0`,()=>i(`preview`))})));return h(r=>{let i=c(),u=o(`rue:component:anchor`);return n(i,u),b(S(E,{children:h(()=>{let r=c(),i=a(`h1`,r);n(r,i),x(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,e(`nextTick 真实业务场景`));let u=a(`p`,r);n(r,u),x(u,`max-w-4xl text-base-content/70 leading-7`),n(u,e(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let f=a(`div`,r);n(r,f),l(f,`role`,`tablist`),x(f,`tabs tabs-box mt-6`);let p=a(`button`,f);n(f,p),l(p,`role`,`tab`),s(()=>{x(p,`tab ${t.value===`preview`?`tab-active`:``}`)}),_(p,`click`,()=>{t.value=`preview`}),n(p,e(`效果`));let m=a(`button`,f);n(f,m),l(m,`role`,`tab`),s(()=>{x(m,`tab ${t.value===`code`?`tab-active`:``}`)}),_(m,`click`,()=>{t.value=`code`}),n(m,e(`代码`));let h=a(`div`,r);n(r,h),x(h,`mt-4 grid gap-6`);let g=o(`rue:list:start`),v=o(`rue:list:end`);n(h,g),n(h,v);let y=new Map;s(()=>{y=w({items:$||[],getKey:(e,t)=>e.title,elements:y,parent:h,before:v,start:g,renderItem:(e,n,r,i,a)=>{d(S(ie,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:t}),n,r,i)}})});let b=a(`section`,h);n(h,b),x(b,`rounded-box border border-base-300 bg-base-100 p-5`);let C=a(`div`,b);n(b,C),x(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(C,e(`新增业务 demo`));let ee=a(`div`,b);n(b,ee),x(ee,`mt-2 text-2xl font-semibold`),n(ee,e(`真实业务里 nextTick 怎么用`));let T=a(`p`,b);n(b,T),x(T,`mt-2 text-base-content/70 leading-7`),n(T,e(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=o(`rue:list:start`),D=o(`rue:list:end`);n(h,E),n(h,D);let O=new Map;return s(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:h,before:D,start:E,renderItem:(e,n,r,i,a)=>{d(S(ie,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:t}),n,r,i)}})}),r})}),i,u),i})};export{ae as default};