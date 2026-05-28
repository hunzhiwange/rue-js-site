import{$ as e,Gt as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,bt as u,ct as d,d as f,et as p,i as m,l as h,mt as g,ot as _,pt as v,t as y,tt as b,u as x}from"./vapor-runtime-BR_2rwNk.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-DkadWylb.js";import{t as T}from"./Code-B_4lzH85.js";import{t as E}from"./SidebarPlaygroundExample-CtM-WHq_.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:v,syncHeight:y,flushedHeight:x,logLines:T,listRef:E,appendMessage:k,reset:A}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(O())),n=S(`ref:1:1`,()=>i(`尚未追加`)),r=S(`ref:1:2`,()=>i(`尚未追加`)),a=S(`ref:1:3`,()=>i([...D])),o=S(`useRef:1:4`,()=>t());return{messages:e,syncHeight:n,flushedHeight:r,logLines:a,listRef:o,appendMessage:async()=>{let t=e.value.length+1,i=String(19+t).padStart(2,`0`);e.value=[...e.value,{id:t,text:`09:${i} 订单 #A10${20+t} 已完成支付`}];let s=o.current?.scrollHeight??0;n.value=`${s}px（旧高度）`,r.value=`等待 flush...`,a.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`等待 nextTick() 后重新计算高度...`],o.current&&(o.current.scrollTop=s),await u();let c=o.current?.scrollHeight??0;o.current&&(o.current.scrollTop=c),r.value=`${c}px（已包含新消息）`,a.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`nextTick() 后 scrollHeight：${c}px，并已滚动到底部`]},reset:()=>{e.value=O(),n.value=`尚未追加`,r.value=`尚未追加`,a.value=[...D],o.current&&(o.current.scrollTop=0)}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let S=e(`div`,i);s(i,S),d(S,`rounded-box border border-base-300 bg-base-100`);let D=e(`div`,S);s(S,D),d(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=e(`div`,D);s(D,O),d(O,`text-sm font-medium text-base-content/70`),s(O,p(`订单通知流`));let j=e(`div`,D);s(D,j),d(j,`badge badge-outline`);let M=l(`rue:slot:anchor`);s(j,M),c(()=>{let e=v.value.length;o(()=>h(e,j,M))}),s(j,p(` 条消息`));let N=e(`div`,S);s(S,N);let P=w(N,()=>E);m(()=>{P()}),d(N,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let F=l(`rue:list:start`),I=l(`rue:list:end`);s(N,F),s(N,I);let L=new Map;c(()=>{L=C({items:v.value||[],getKey:(e,t)=>e.id,elements:L,parent:N,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(t,n,r,i,u)=>{h(f(()=>{let n=a(),r=e(`div`,n);s(n,r),c(()=>{_(r,`key`,String(t.id))}),d(r,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t.text;o(()=>h(e,r,i))}),n}),n,r)}})});let R=e(`div`,i);s(i,R),d(R,`flex flex-wrap gap-3`);let z=e(`button`,R);s(R,z),d(z,`btn btn-primary`),n(z,`click`,()=>void k()),s(z,p(`追加通知并滚动到底部`));let B=e(`button`,R);s(R,B),d(B,`btn btn-ghost`),n(B,`click`,A),s(B,p(`重置`));let V=e(`div`,i);s(i,V),d(V,`grid gap-4 md:grid-cols-2`);let H=e(`div`,V);s(V,H),d(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=e(`div`,H);s(H,U),d(U,`text-sm text-base-content/60`),s(U,p(`同步读取到的 scrollHeight`));let W=e(`div`,H);s(H,W),d(W,`mt-2 font-mono text-2xl`);let G=b(W);s(W,G),c(()=>{g(G,y.value)});let K=e(`div`,V);s(V,K),d(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=e(`div`,K);s(K,q),d(q,`text-sm text-base-content/60`),s(q,p(`await nextTick() 后的高度`));let J=e(`div`,K);s(K,J),d(J,`mt-2 font-mono text-2xl text-success`);let Y=b(J);s(J,Y),c(()=>{g(Y,x.value)});let X=e(`div`,i);s(i,X),d(X,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let Z=e(`div`,X);s(X,Z),d(Z,`text-sm font-medium text-base-content/70`),s(Z,p(`本轮步骤`));let Q=e(`ul`,X);s(X,Q),d(Q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ee=l(`rue:list:start`),te=l(`rue:list:end`);s(Q,ee),s(Q,te);let ne=new Map;return c(()=>{ne=C({items:T.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Q,before:te,singleRoot:!0,start:ee,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`chat-scroll-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:o,beforeDomText:v,afterDomText:y,logLines:x,counterRef:T,inspectUpdate:E,reset:D}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(0)),n=S(`ref:1:1`,()=>i(`尚未读取`)),r=S(`ref:1:2`,()=>i(`尚未读取`)),a=S(`ref:1:3`,()=>i([...j])),o=S(`useRef:1:4`,()=>t());return{count:e,beforeDomText:n,afterDomText:r,logLines:a,counterRef:o,inspectUpdate:async()=>{e.value+=1;let t=o.current?.textContent??`(missing)`;n.value=t,r.value=`等待 flush...`,a.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${t}`,`等待 nextTick() 完成...`],await u();let i=o.current?.textContent??`(missing)`;r.value=i,a.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${t}`,`nextTick() 后读取 DOM：${i}`]},reset:()=>{e.value=0,n.value=`尚未读取`,r.value=`尚未读取`,a.value=[...j]}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let S=e(`div`,i);s(i,S),d(S,`rounded-box border border-base-300 bg-base-200/40 p-5`);let O=e(`div`,S);s(S,O),d(O,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(O,p(`当前 DOM 文本`));let k=e(`div`,S);s(S,k),d(k,`mt-3 text-4xl font-semibold text-primary`);let A=e(`span`,k);s(k,A);let j=w(A,()=>T);m(()=>{j()});let M=b(A);s(A,M),c(()=>{g(M,o.value)});let N=e(`div`,i);s(i,N),d(N,`flex flex-wrap gap-3`);let P=e(`button`,N);s(N,P),d(P,`btn btn-primary`),n(P,`click`,()=>void E()),s(P,p(`自增并读取 DOM`));let F=e(`button`,N);s(N,F),d(F,`btn btn-ghost`),n(F,`click`,D),s(F,p(`重置`));let I=e(`div`,i);s(i,I),d(I,`grid gap-4 md:grid-cols-2`);let L=e(`div`,I);s(I,L),d(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=e(`div`,L);s(L,R),d(R,`text-sm text-base-content/60`),s(R,p(`同步读取到的 DOM 文本`));let z=e(`div`,L);s(L,z),d(z,`mt-2 font-mono text-2xl`);let B=b(z);s(z,B),c(()=>{g(B,v.value)});let V=e(`div`,I);s(I,V),d(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=e(`div`,V);s(V,H),d(H,`text-sm text-base-content/60`),s(H,p(`await nextTick() 后读取`));let U=e(`div`,V);s(V,U),d(U,`mt-2 font-mono text-2xl text-success`);let W=b(U);s(U,W),c(()=>{g(W,y.value)});let G=e(`div`,i);s(i,G),d(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let K=e(`div`,G);s(G,K),d(K,`text-sm font-medium text-base-content/70`),s(K,p(`本轮步骤`));let q=e(`ul`,G);s(G,q),d(q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let J=l(`rue:list:start`),Y=l(`rue:list:end`);s(q,J),s(q,Y);let X=new Map;return c(()=>{X=C({items:x.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:X,parent:q,before:Y,singleRoot:!0,start:J,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`dom-read-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:y,keyword:x,syncState:T,postTickState:E,logLines:D,inputRef:O,openPanel:k,closePanel:A}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(!1)),n=S(`ref:1:1`,()=>i(``)),r=S(`ref:1:2`,()=>i(`尚未打开`)),a=S(`ref:1:3`,()=>i(`尚未聚焦`)),o=S(`ref:1:4`,()=>i([...P])),s=S(`useRef:1:5`,()=>t());return{panelOpen:e,keyword:n,syncState:r,postTickState:a,logLines:o,inputRef:s,openPanel:async()=>{e.value=!0,r.value=s.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,a.value=`等待 flush...`,o.value=[`筛选面板状态已切到打开`,r.value,`等待 nextTick() 后执行 focus()`],await u(),s.current?.focus(),a.value=globalThis.document?.activeElement===s.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,o.value=[`筛选面板状态已切到打开`,r.value,a.value]},closePanel:()=>{e.value=!1,n.value=``,r.value=`尚未打开`,a.value=`尚未聚焦`,o.value=[...P]}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let S=e(`div`,i);s(i,S),d(S,`flex flex-wrap gap-3`);let j=e(`button`,S);s(S,j),d(j,`btn btn-primary`),n(j,`click`,()=>void k()),s(j,p(`打开高级筛选`));let M=e(`button`,S);s(S,M),d(M,`btn btn-ghost`),n(M,`click`,A),s(M,p(`关闭并重置`));let N=l(`rue:slot:anchor`);s(i,N),c(()=>{let t=y.value?f(()=>{let t=a(),r=e(`div`,t);s(t,r),d(r,`rounded-box border border-base-300 bg-base-100 p-5`);let i=e(`div`,r);s(r,i),d(i,`grid gap-4 md:grid-cols-2`);let o=e(`label`,i);s(i,o),d(o,`block`);let l=e(`div`,o);s(o,l),d(l,`text-sm text-base-content/60`),s(l,p(`关键词`));let u=e(`input`,o);s(o,u);let f=w(u,()=>O);m(()=>{f()}),d(u,`input input-bordered mt-2 w-full`),c(()=>{v(u,x.value)}),_(u,`placeholder`,`订单号 / 用户名 / 手机号`),n(u,`input`,e=>{x.value=e.target.value});let h=e(`label`,i);s(i,h),d(h,`block`);let g=e(`div`,h);s(h,g),d(g,`text-sm text-base-content/60`),s(g,p(`订单状态`));let y=e(`select`,h);s(h,y),d(y,`select select-bordered mt-2 w-full`);let b=e(`option`,y);s(y,b),s(b,p(`全部`));let S=e(`option`,y);s(y,S),s(S,p(`待支付`));let C=e(`option`,y);s(y,C),s(C,p(`待发货`));let T=e(`option`,y);return s(y,T),s(T,p(`已完成`)),t}):``;o(()=>h(t,i,N))});let P=e(`div`,i);s(i,P),d(P,`grid gap-4 md:grid-cols-2`);let F=e(`div`,P);s(P,F),d(F,`rounded-box border border-base-300 bg-base-100 p-4`);let I=e(`div`,F);s(F,I),d(I,`text-sm text-base-content/60`),s(I,p(`同步阶段状态`));let L=e(`div`,F);s(F,L),d(L,`mt-2 font-mono text-xl`);let R=b(L);s(L,R),c(()=>{g(R,T.value)});let z=e(`div`,P);s(P,z),d(z,`rounded-box border border-base-300 bg-base-100 p-4`);let B=e(`div`,z);s(z,B),d(B,`text-sm text-base-content/60`),s(B,p(`await nextTick() 后状态`));let V=e(`div`,z);s(z,V),d(V,`mt-2 font-mono text-xl text-success`);let H=b(V);s(V,H),c(()=>{g(H,E.value)});let U=e(`div`,i);s(i,U),d(U,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let W=e(`div`,U);s(U,W),d(W,`text-sm font-medium text-base-content/70`),s(W,p(`本轮步骤`));let G=e(`ul`,U);s(U,G),d(G,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let K=l(`rue:list:start`),q=l(`rue:list:end`);s(G,K),s(G,q);let J=new Map;return c(()=>{J=C({items:D.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:J,parent:G,before:q,singleRoot:!0,start:K,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`filter-focus-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:y,phone:x,email:T,errors:E,syncField:D,postTickField:O,logLines:k,formRef:A,validate:j,submit:M,fillValidData:N,reset:P}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(``)),n=S(`ref:1:1`,()=>i(``)),r=S(`ref:1:2`,()=>i(``)),a=S(`ref:1:3`,()=>i(z())),o=S(`ref:1:4`,()=>i(`尚未提交`)),s=S(`ref:1:5`,()=>i(`尚未聚焦`)),c=S(`ref:1:6`,()=>i([...L])),l=S(`useRef:1:7`,()=>t()),d=()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(n.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`});return{receiver:e,phone:n,email:r,errors:a,syncField:o,postTickField:s,logLines:c,formRef:l,validate:d,submit:async()=>{let e=d(),t=Object.values(e).filter(Boolean).length;a.value=e;let n=l.current?.querySelector(`[data-invalid="true"]`);o.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,s.value=`等待 flush...`,c.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${o.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await u();let r=l.current?.querySelector(`[data-invalid="true"]`);r?.focus(),s.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,c.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${o.value}`,s.value]},fillValidData:()=>{e.value=`李四`,n.value=`13800001111`,r.value=`li.si@example.com`,a.value=z(),o.value=`已填入合法示例`,s.value=`再次点击提交可观察通过路径`,c.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},reset:()=>{e.value=``,n.value=``,r.value=``,a.value=z(),o.value=`尚未提交`,s.value=`尚未聚焦`,c.value=[...L]}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let S=e(`div`,i);s(i,S);let j=w(S,()=>A);m(()=>{j()}),d(S,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let F=e(`label`,S);s(S,F),d(F,`block`);let I=e(`div`,F);s(F,I),d(I,`text-sm text-base-content/60`),s(I,p(`联系人`));let L=e(`input`,F);s(F,L),_(L,`name`,`receiver`),c(()=>{_(L,`data-invalid`,String(E.value.receiver?`true`:`false`))}),c(()=>{d(L,String(`input input-bordered mt-2 w-full ${E.value.receiver?`input-error`:``}`.trim()))}),c(()=>{v(L,y.value)}),_(L,`placeholder`,`请输入联系人`),n(L,`input`,e=>{y.value=e.target.value});let R=l(`rue:slot:anchor`);s(F,R),c(()=>{let t=E.value.receiver?f(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`mt-2 text-sm text-error`);let r=l(`rue:slot:anchor`);return s(n,r),c(()=>{let e=E.value.receiver;o(()=>h(e,n,r))}),t}):``;o(()=>h(t,F,R))});let z=e(`label`,S);s(S,z),d(z,`block`);let B=e(`div`,z);s(z,B),d(B,`text-sm text-base-content/60`),s(B,p(`手机号`));let V=e(`input`,z);s(z,V),_(V,`name`,`phone`),c(()=>{_(V,`data-invalid`,String(E.value.phone?`true`:`false`))}),c(()=>{d(V,String(`input input-bordered mt-2 w-full ${E.value.phone?`input-error`:``}`.trim()))}),c(()=>{v(V,x.value)}),_(V,`placeholder`,`请输入 11 位手机号`),n(V,`input`,e=>{x.value=e.target.value});let H=l(`rue:slot:anchor`);s(z,H),c(()=>{let t=E.value.phone?f(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`mt-2 text-sm text-error`);let r=l(`rue:slot:anchor`);return s(n,r),c(()=>{let e=E.value.phone;o(()=>h(e,n,r))}),t}):``;o(()=>h(t,z,H))});let U=e(`label`,S);s(S,U),d(U,`block`);let W=e(`div`,U);s(U,W),d(W,`text-sm text-base-content/60`),s(W,p(`邮箱`));let G=e(`input`,U);s(U,G),_(G,`name`,`email`),c(()=>{_(G,`data-invalid`,String(E.value.email?`true`:`false`))}),c(()=>{d(G,String(`input input-bordered mt-2 w-full ${E.value.email?`input-error`:``}`.trim()))}),c(()=>{v(G,T.value)}),_(G,`placeholder`,`请输入邮箱`),n(G,`input`,e=>{T.value=e.target.value});let K=l(`rue:slot:anchor`);s(U,K),c(()=>{let t=E.value.email?f(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`mt-2 text-sm text-error`);let r=l(`rue:slot:anchor`);return s(n,r),c(()=>{let e=E.value.email;o(()=>h(e,n,r))}),t}):``;o(()=>h(t,U,K))});let q=e(`div`,i);s(i,q),d(q,`flex flex-wrap gap-3`);let J=e(`button`,q);s(q,J),d(J,`btn btn-primary`),n(J,`click`,()=>void M()),s(J,p(`提交并定位错误字段`));let Y=e(`button`,q);s(q,Y),d(Y,`btn btn-outline`),n(Y,`click`,N),s(Y,p(`填入合法示例`));let X=e(`button`,q);s(q,X),d(X,`btn btn-ghost`),n(X,`click`,P),s(X,p(`重置`));let Z=e(`div`,i);s(i,Z),d(Z,`grid gap-4 md:grid-cols-2`);let Q=e(`div`,Z);s(Z,Q),d(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=e(`div`,Q);s(Q,ee),d(ee,`text-sm text-base-content/60`),s(ee,p(`同步阶段识别到的字段`));let te=e(`div`,Q);s(Q,te),d(te,`mt-2 font-mono text-xl`);let ne=b(te);s(te,ne),c(()=>{g(ne,D.value)});let $=e(`div`,Z);s(Z,$),d($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=e(`div`,$);s($,re),d(re,`text-sm text-base-content/60`),s(re,p(`await nextTick() 后结果`));let ie=e(`div`,$);s($,ie),d(ie,`mt-2 font-mono text-xl text-success`);let ae=b(ie);s(ie,ae),c(()=>{g(ae,O.value)});let oe=e(`div`,i);s(i,oe),d(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=e(`div`,oe);s(oe,se),d(se,`text-sm font-medium text-base-content/70`),s(se,p(`本轮步骤`));let ce=e(`ul`,oe);s(oe,ce),d(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=l(`rue:list:start`),ue=l(`rue:list:end`);s(ce,le),s(ce,ue);let de=new Map;return c(()=>{de=C({items:k.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`focus-error-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:v,syncHeight:y,postTickHeight:x,layoutDecision:T,logLines:E,listRef:D,openModal:O,closeModal:k}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(!1)),n=S(`ref:1:1`,()=>i(`尚未打开`)),r=S(`ref:1:2`,()=>i(`尚未测量`)),a=S(`ref:1:3`,()=>i(`等待测量`)),o=S(`ref:1:4`,()=>i([...H])),s=S(`useRef:1:5`,()=>t());return{modalOpen:e,syncHeight:n,postTickHeight:r,layoutDecision:a,logLines:o,listRef:s,openModal:async()=>{e.value=!0;let t=s.current?.scrollHeight??0;n.value=`${t}px`,r.value=`等待 flush...`,a.value=`等待布局完成...`,o.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${t}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await u();let i=s.current?.scrollHeight??0;r.value=`${i}px`,a.value=i>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,o.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${t}px`,`nextTick() 后列表高度：${i}px，${a.value}`]},closeModal:()=>{e.value=!1,n.value=`尚未打开`,r.value=`尚未测量`,a.value=`等待测量`,o.value=[...H]}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let S=e(`div`,i);s(i,S),d(S,`flex flex-wrap gap-3`);let A=e(`button`,S);s(S,A),d(A,`btn btn-primary`),n(A,`click`,()=>void O()),s(A,p(`打开批量发送弹窗`));let j=e(`button`,S);s(S,j),d(j,`btn btn-ghost`),n(j,`click`,k),s(j,p(`关闭并重置`));let M=l(`rue:slot:anchor`);s(i,M),c(()=>{let t=v.value?f(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let r=e(`div`,n);s(n,r),d(r,`flex items-start justify-between gap-4`);let i=e(`div`,r);s(r,i);let u=e(`div`,i);s(i,u),d(u,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(u,p(`批量发送预览`));let g=e(`div`,i);s(i,g),d(g,`mt-2 text-2xl font-semibold`),s(g,p(`确认接收人列表`));let v=e(`div`,r);s(r,v),d(v,`badge badge-outline`);let y=l(`rue:slot:anchor`);s(v,y),c(()=>{let e=U.length;o(()=>h(e,v,y))}),s(v,p(` 人`));let b=e(`div`,n);s(n,b);let x=w(b,()=>D);m(()=>{x()}),d(b,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=l(`rue:list:start`),T=l(`rue:list:end`);s(b,S),s(b,T);let E=new Map;return c(()=>{E=C({items:U||[],getKey:(e,t)=>e.id,elements:E,parent:b,before:T,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,u)=>{h(f(()=>{let n=a(),r=e(`div`,n);s(n,r),c(()=>{_(r,`key`,String(t.id))}),d(r,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let i=e(`div`,r);s(r,i),d(i,`font-medium`);let u=l(`rue:slot:anchor`);s(i,u),c(()=>{let e=t.name;o(()=>h(e,i,u))});let f=e(`div`,r);s(r,f),d(f,`text-base-content/60`);let m=l(`rue:slot:anchor`);s(f,m),c(()=>{let e=t.team;o(()=>h(e,f,m))}),s(f,p(` · `));let g=l(`rue:slot:anchor`);return s(f,g),c(()=>{let e=t.region;o(()=>h(e,f,g))}),n}),n,r)}})}),t}):``;o(()=>h(t,i,M))});let N=e(`div`,i);s(i,N),d(N,`grid gap-4 md:grid-cols-3`);let P=e(`div`,N);s(N,P),d(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=e(`div`,P);s(P,F),d(F,`text-sm text-base-content/60`),s(F,p(`同步读取到的高度`));let I=e(`div`,P);s(P,I),d(I,`mt-2 font-mono text-xl`);let L=b(I);s(I,L),c(()=>{g(L,y.value)});let R=e(`div`,N);s(N,R),d(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=e(`div`,R);s(R,z),d(z,`text-sm text-base-content/60`),s(z,p(`await nextTick() 后高度`));let B=e(`div`,R);s(R,B),d(B,`mt-2 font-mono text-xl text-success`);let V=b(B);s(B,V),c(()=>{g(V,x.value)});let H=e(`div`,N);s(N,H),d(H,`rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`div`,H);s(H,W),d(W,`text-sm text-base-content/60`),s(W,p(`布局决策`));let G=e(`div`,H);s(H,G),d(G,`mt-2 text-sm leading-6 text-base-content/80`);let K=b(G);s(G,K),c(()=>{g(K,T.value)});let q=e(`div`,i);s(i,q),d(q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),d(J,`text-sm font-medium text-base-content/70`),s(J,p(`本轮步骤`));let Y=e(`ul`,q);s(q,Y),d(Y,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let X=l(`rue:list:start`),Z=l(`rue:list:end`);s(Y,X),s(Y,Z);let Q=new Map;return c(()=>{Q=C({items:E.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Q,parent:Y,before:Z,singleRoot:!0,start:X,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`modal-measure-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:v,syncHeight:y,postTickHeight:x,logLines:T,panelRef:E,toggleExpanded:D,reset:O}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(!1)),n=S(`ref:1:1`,()=>i(`尚未测量`)),r=S(`ref:1:2`,()=>i(`尚未测量`)),a=S(`ref:1:3`,()=>i([...K])),o=S(`useRef:1:4`,()=>t());return{expanded:e,syncHeight:n,postTickHeight:r,logLines:a,panelRef:o,toggleExpanded:async()=>{e.value=!e.value;let t=e.value?`展开`:`收起`,i=o.current?.offsetHeight??0;n.value=`${i}px`,r.value=`等待 flush...`,a.value=[`详情区准备${t}`,`同步读取 offsetHeight：${i}px`,`等待 nextTick() 后重新测量...`],await u();let s=o.current?.offsetHeight??0;r.value=`${s}px`,a.value=[`详情区准备${t}`,`同步读取 offsetHeight：${i}px`,`nextTick() 后 offsetHeight：${s}px`]},reset:()=>{e.value=!1,n.value=`尚未测量`,r.value=`尚未测量`,a.value=[...K]}}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let S=e(`div`,i);s(i,S);let k=w(S,()=>E);m(()=>{k()}),d(S,`rounded-box border border-base-300 bg-base-100 p-5`);let A=e(`div`,S);s(S,A),d(A,`flex items-center justify-between`);let j=e(`div`,A);s(A,j);let M=e(`div`,j);s(j,M),d(M,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(M,p(`订单详情卡片`));let N=e(`div`,j);s(j,N),d(N,`mt-2 text-2xl font-semibold`),s(N,p(`订单 #A1024`));let P=e(`div`,A);s(A,P),c(()=>{d(P,String(`badge ${v.value?`badge-primary`:`badge-outline`}`))});let F=b(P);s(P,F),c(()=>{g(F,v.value?`已展开`:`已收起`)});let I=e(`div`,S);s(S,I),d(I,`mt-5 grid gap-3 md:grid-cols-2`);let L=e(`div`,I);s(I,L),d(L,`rounded-box bg-base-200/60 p-3 text-sm`),s(L,p(`支付状态：已支付`));let R=e(`div`,I);s(I,R),d(R,`rounded-box bg-base-200/60 p-3 text-sm`),s(R,p(`配送方式：同城急送`));let z=e(`div`,I);s(I,z),d(z,`rounded-box bg-base-200/60 p-3 text-sm`),s(z,p(`仓库：上海 3 号仓`));let B=e(`div`,I);s(I,B),d(B,`rounded-box bg-base-200/60 p-3 text-sm`),s(B,p(`下单时间：09:20`));let V=l(`rue:slot:anchor`);s(I,V),c(()=>{let t=v.value?f(()=>{let t=a();s(t,p(` `));let n=e(`div`,t);s(t,n),d(n,`rounded-box bg-base-200/60 p-3 text-sm`),s(n,p(`发票状态：电子发票已开具`)),s(t,p(` `));let r=e(`div`,t);s(t,r),d(r,`rounded-box bg-base-200/60 p-3 text-sm`),s(r,p(`风控结果：人工审核已通过`)),s(t,p(` `));let i=e(`div`,t);s(t,i),d(i,`rounded-box bg-base-200/60 p-3 text-sm`),s(i,p(`配送备注：优先联系收货人本人`)),s(t,p(` `));let o=e(`div`,t);return s(t,o),d(o,`rounded-box bg-base-200/60 p-3 text-sm`),s(o,p(`售后状态：暂无售后单`)),s(t,p(` `)),t}):``;o(()=>h(t,I,V))});let H=e(`div`,i);s(i,H),d(H,`flex flex-wrap gap-3`);let U=e(`button`,H);s(H,U),d(U,`btn btn-primary`),n(U,`click`,()=>void D());let W=b(U);s(U,W),c(()=>{g(W,v.value?`收起详情区并测量`:`展开详情区并测量`)});let G=e(`button`,H);s(H,G),d(G,`btn btn-ghost`),n(G,`click`,O),s(G,p(`重置`));let K=e(`div`,i);s(i,K),d(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);s(K,q),d(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),d(J,`text-sm text-base-content/60`),s(J,p(`同步读取到的高度`));let Y=e(`div`,q);s(q,Y),d(Y,`mt-2 font-mono text-2xl`);let X=b(Y);s(Y,X),c(()=>{g(X,y.value)});let Z=e(`div`,K);s(K,Z),d(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=e(`div`,Z);s(Z,Q),d(Q,`text-sm text-base-content/60`),s(Q,p(`await nextTick() 后高度`));let ee=e(`div`,Z);s(Z,ee),d(ee,`mt-2 font-mono text-2xl text-success`);let te=b(ee);s(ee,te),c(()=>{g(te,x.value)});let ne=e(`div`,i);s(i,ne),d(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=e(`div`,ne);s(ne,$),d($,`text-sm font-medium text-base-content/70`),s($,p(`本轮步骤`));let re=e(`ul`,ne);s(ne,re),d(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=l(`rue:list:start`),ae=l(`rue:list:end`);s(re,ie),s(re,ae);let oe=new Map;return c(()=>{oe=C({items:T.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`panel-measure-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),ee=()=>{let{activeStatus:v,syncTarget:y,postTickTarget:x,logLines:T,viewportRef:E,applyFilter:D,reset:O,visibleOrders:k}=S(`useSetup:0:0`,()=>r(()=>{let e=S(`ref:1:0`,()=>i(`all`)),n=S(`ref:1:1`,()=>i(`尚未筛选`)),r=S(`ref:1:2`,()=>i(`尚未定位`)),a=S(`ref:1:3`,()=>i([...Y])),o=S(`useRef:1:4`,()=>t());return{activeStatus:e,syncTarget:n,postTickTarget:r,logLines:a,viewportRef:o,applyFilter:async t=>{e.value=t,n.value=(o.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,r.value=`等待 flush...`,a.value=[`筛选条件切换为：${X[t]}`,`同步读取首条结果：${n.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await u();let i=o.current?.querySelector(`[data-first-visible="true"]`);i?.scrollIntoView({block:`nearest`}),r.value=i?.getAttribute(`data-order-no`)??`当前筛选没有结果`,a.value=[`筛选条件切换为：${X[t]}`,`同步读取首条结果：${n.value}`,`nextTick() 后首条结果：${r.value}，并已滚动到可视区域`]},reset:()=>{e.value=`all`,n.value=`尚未筛选`,r.value=`尚未定位`,a.value=[...Y],o.current&&(o.current.scrollTop=0)},visibleOrders:Q(e.value)}}));return f(t=>{let r=e(`div`,t);d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`p`,i);s(i,u),d(u,`text-base-content/70 leading-7`),s(u,p(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=e(`div`,i);s(i,S),d(S,`flex flex-wrap gap-2`);let A=l(`rue:list:start`),j=l(`rue:list:end`);s(S,A),s(S,j);let M=new Map;c(()=>{M=C({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:M,parent:S,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(t,r,i,u,p)=>{h(f(()=>{let r=a(),i=e(`button`,r);s(r,i),c(()=>{_(i,`key`,String(t))}),c(()=>{d(i,String(`btn btn-sm ${v.value===t?`btn-primary`:`btn-ghost`}`))}),n(i,`click`,()=>void D(t));let u=l(`rue:slot:anchor`);return s(i,u),c(()=>{let e=X[t];o(()=>h(e,i,u))}),r}),r,i)}})});let N=e(`button`,S);s(S,N),d(N,`btn btn-sm btn-outline`),n(N,`click`,O),s(N,p(`重置`));let P=e(`div`,i);s(i,P);let F=w(P,()=>E);m(()=>{F()}),d(P,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let I=e(`table`,P);s(P,I),d(I,`table table-pin-rows table-sm`);let L=e(`thead`,I);s(I,L);let R=e(`tr`,L);s(L,R);let z=e(`th`,R);s(R,z),s(z,p(`订单号`));let B=e(`th`,R);s(R,B),s(B,p(`客户`));let V=e(`th`,R);s(R,V),s(V,p(`状态`));let H=e(`th`,R);s(R,H),s(H,p(`金额`));let U=e(`th`,R);s(R,U),s(U,p(`备注`));let W=e(`tbody`,I);s(I,W);let G=l(`rue:slot:anchor`);s(W,G),c(()=>{let t=k.length>0?f(()=>{let t=a(),n=l(`rue:list:start`),r=l(`rue:list:end`);s(t,n),s(t,r);let i=new Map;return c(()=>{i=C({items:k||[],getKey:(e,t)=>e.id,elements:i,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(t,n,r,i,u)=>{h(f(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{_(r,`key`,String(t.id))}),c(()=>{_(r,`data-first-visible`,String(u===0?`true`:`false`))}),c(()=>{_(r,`data-order-no`,String(t.orderNo))});let i=e(`td`,r);s(r,i),d(i,`font-medium`);let f=l(`rue:slot:anchor`);s(i,f),c(()=>{let e=t.orderNo;o(()=>h(e,i,f))});let p=e(`td`,r);s(r,p);let m=l(`rue:slot:anchor`);s(p,m),c(()=>{let e=t.customer;o(()=>h(e,p,m))});let g=e(`td`,r);s(r,g);let v=e(`span`,g);s(g,v),d(v,`badge badge-outline`);let y=l(`rue:slot:anchor`);s(v,y),c(()=>{let e=X[t.status];o(()=>h(e,v,y))});let b=e(`td`,r);s(r,b);let x=l(`rue:slot:anchor`);s(b,x),c(()=>{let e=t.amount;o(()=>h(e,b,x))});let S=e(`td`,r);s(r,S),d(S,`text-base-content/60`);let C=l(`rue:slot:anchor`);return s(S,C),c(()=>{let e=t.note;o(()=>h(e,S,C))}),n}),n,r)}})}),t}):f(()=>{let t=a(),n=e(`tr`,t);s(t,n);let r=e(`td`,n);return s(n,r),_(r,`colSpan`,`5`),d(r,`py-8 text-center text-base-content/60`),s(r,p(`当前筛选没有结果`)),t});o(()=>h(t,W,G))});let K=e(`div`,i);s(i,K),d(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);s(K,q),d(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),d(J,`text-sm text-base-content/60`),s(J,p(`同步读取到的首条结果`));let Y=e(`div`,q);s(q,Y),d(Y,`mt-2 font-mono text-2xl`);let Z=b(Y);s(Y,Z),c(()=>{g(Z,y.value)});let Q=e(`div`,K);s(K,Q),d(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=e(`div`,Q);s(Q,ee),d(ee,`text-sm text-base-content/60`),s(ee,p(`await nextTick() 后定位到`));let te=e(`div`,Q);s(Q,te),d(te,`mt-2 font-mono text-2xl text-success`);let ne=b(te);s(te,ne),c(()=>{g(ne,x.value)});let $=e(`div`,i);s(i,$),d($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=e(`div`,$);s($,re),d(re,`text-sm font-medium text-base-content/70`),s(re,p(`本轮步骤`));let ie=e(`ul`,$);s($,ie),d(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=l(`rue:list:start`),oe=l(`rue:list:end`);s(ie,ae),s(ie,oe);let se=new Map;return c(()=>{se=C({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{_(r,`key`,String(`table-filter-log-${o}`))});let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})}),r})},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ne=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],$=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:te,Demo:ee},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],re=t=>{let{Demo:n}=S(`useSetup:0:0`,()=>r(()=>({Demo:t.scenario.Demo})));return f(r=>{let i=e(`section`,r);d(i,`rounded-box border border-base-300 bg-base-100 p-5`);let u=e(`div`,i);s(i,u),d(u,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let p=l(`rue:slot:anchor`);s(u,p),c(()=>{let e=t.eyebrow;o(()=>h(e,u,p))});let m=e(`div`,i);s(i,m),d(m,`mt-2 text-2xl font-semibold`);let v=l(`rue:slot:anchor`);s(m,v),c(()=>{let e=t.scenario.title;o(()=>h(e,m,v))});let x=e(`p`,i);s(i,x),d(x,`mt-2 text-base-content/70 leading-7`);let S=l(`rue:slot:anchor`);s(x,S),c(()=>{let e=t.scenario.summary;o(()=>h(e,x,S))});let w=e(`div`,i);s(i,w),d(w,`mt-4 flex flex-wrap gap-2`);let E=l(`rue:list:start`),D=l(`rue:list:end`);s(w,E),s(w,D);let O=new Map;c(()=>{O=C({items:t.scenario.businessCases||[],getKey:(e,t)=>e,elements:O,parent:w,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`span`,n);s(n,r),c(()=>{_(r,`key`,String(t))}),d(r,`badge badge-outline`);let i=b(r);return s(r,i),c(()=>{g(i,t)}),n}),n,r)}})});let k=e(`div`,i);s(i,k),d(k,`mt-4`);let A=l(`rue:slot:anchor`);return s(k,A),c(()=>{let r=t.activeTab.value===`preview`?f(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),h(y(n,{}),e,t),e}):f(()=>{let n=a(),r=e(`div`,n);s(n,r),d(r,`card bg-base-100 shadow overflow-auto`);let i=e(`div`,r);s(r,i),d(i,`card-body p-0`);let u=l(`rue:component:anchor`);return s(i,u),c(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:t.scenario.source});o(()=>h(e,i,u))}),n});o(()=>h(r,k,A))}),i})},ie=()=>{let{activeTab:t}=S(`useSetup:0:0:dup1`,()=>r(()=>({activeTab:S(`ref:1:0`,()=>i(`preview`))})));return f(r=>{let i=a(),o=l(`rue:component:anchor`);return s(i,o),h(y(E,{children:f(()=>{let r=a(),i=e(`h1`,r);s(r,i),d(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,p(`nextTick 真实业务场景`));let o=e(`p`,r);s(r,o),d(o,`max-w-4xl text-base-content/70 leading-7`),s(o,p(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let u=e(`div`,r);s(r,u),_(u,`role`,`tablist`),d(u,`tabs tabs-box mt-6`);let f=e(`button`,u);s(u,f),_(f,`role`,`tab`),c(()=>{d(f,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(f,`click`,()=>{t.value=`preview`}),s(f,p(`效果`));let m=e(`button`,u);s(u,m),_(m,`role`,`tab`),c(()=>{d(m,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(m,`click`,()=>{t.value=`code`}),s(m,p(`代码`));let h=e(`div`,r);s(r,h),d(h,`mt-4 grid gap-6`);let g=l(`rue:list:start`),v=l(`rue:list:end`);s(h,g),s(h,v);let b=new Map;c(()=>{b=C({items:ne||[],getKey:(e,t)=>e.title,elements:b,parent:h,before:v,start:g,renderItem:(e,n,r,i,a)=>{x(y(re,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:t}),n,r,i)}})});let S=e(`section`,h);s(h,S),d(S,`rounded-box border border-base-300 bg-base-100 p-5`);let w=e(`div`,S);s(S,w),d(w,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(w,p(`新增业务 demo`));let T=e(`div`,S);s(S,T),d(T,`mt-2 text-2xl font-semibold`),s(T,p(`真实业务里 nextTick 怎么用`));let E=e(`p`,S);s(S,E),d(E,`mt-2 text-base-content/70 leading-7`),s(E,p(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let D=l(`rue:list:start`),O=l(`rue:list:end`);s(h,D),s(h,O);let k=new Map;return c(()=>{k=C({items:$||[],getKey:(e,t)=>e.title,elements:k,parent:h,before:O,start:D,renderItem:(e,n,r,i,a)=>{x(y(re,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:t}),n,r,i)}})}),r})}),i,o),i})};export{ie as default};