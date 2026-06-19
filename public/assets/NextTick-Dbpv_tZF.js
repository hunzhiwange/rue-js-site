import{$ as e,Jt as t,Q as n,Qt as r,St as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,mt as p,n as m,nt as h,o as g,s as _,st as v,t as y,tt as b,vt as x,zt as S}from"./vapor-runtime-CXIalONM.js";import{a as C,n as w,t as ee}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as T}from"./Code-BIscIyEp.js";import{r as E}from"./SidebarPlaygroundExample-CEz1fABX.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:p,syncHeight:_,flushedHeight:y,logLines:x,listRef:T}=C(`useSetup:0:0`,()=>c(()=>({messages:C(`ref:1:0`,()=>S(O())),syncHeight:C(`ref:1:1`,()=>S(`尚未追加`)),flushedHeight:C(`ref:1:2`,()=>S(`尚未追加`)),logLines:C(`ref:1:3`,()=>S([...D])),listRef:C(`useRef:1:4`,()=>t())}))),E=async()=>{let e=p.value.length+1,t=String(19+e).padStart(2,`0`);p.value=[...p.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=T.current?.scrollHeight??0;_.value=`${n}px（旧高度）`,y.value=`等待 flush...`,x.value=[`消息数已变为 ${p.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],T.current&&(T.current.scrollTop=n),await i();let r=T.current?.scrollHeight??0;T.current&&(T.current.scrollTop=r),y.value=`${r}px（已包含新消息）`,x.value=[`消息数已变为 ${p.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},k=()=>{p.value=O(),_.value=`尚未追加`,y.value=`尚未追加`,x.value=[...D],T.current&&(T.current.scrollTop=0)};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let C=l(`div`,c);o(c,C),f(C,`rounded-box border border-base-300 bg-base-100`);let D=l(`div`,C);o(C,D),f(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=l(`div`,D);o(D,O),f(O,`text-sm font-medium text-base-content/70`),o(O,b(`订单通知流`));let A=l(`div`,D);o(D,A),f(A,`badge badge-outline`);let j=n(`rue:slot:anchor`);o(A,j),r(()=>{let e=p.value.length;a(()=>g(e,A,j))}),o(A,b(` 条消息`));let M=l(`div`,C);o(C,M);let N=ee(M,()=>T);m(()=>{N()}),f(M,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let P=n(`rue:list:start`),F=n(`rue:list:end`);o(M,P),o(M,F);let I=new Map;r(()=>{I=w({items:p.value||[],getKey:(e,t)=>e.id,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,i,s,c,u)=>{g(d(()=>{let i=e(),s=l(`div`,i);o(i,s),r(()=>{v(s,`key`,String(t.id))}),f(s,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let c=n(`rue:slot:anchor`);return o(s,c),r(()=>{let e=t.text;a(()=>g(e,s,c))}),i}),i,s)}})});let L=l(`div`,c);o(c,L),f(L,`flex flex-wrap gap-3`);let R=l(`button`,L);o(L,R),f(R,`btn btn-primary`),s(R,`click`,()=>void E()),o(R,b(`追加通知并滚动到底部`));let z=l(`button`,L);o(L,z),f(z,`btn btn-ghost`),s(z,`click`,k),o(z,b(`重置`));let B=l(`div`,c);o(c,B),f(B,`grid gap-4 md:grid-cols-2`);let V=l(`div`,B);o(B,V),f(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=l(`div`,V);o(V,H),f(H,`text-sm text-base-content/60`),o(H,b(`同步读取到的 scrollHeight`));let U=l(`div`,V);o(V,U),f(U,`mt-2 font-mono text-2xl`);let W=h(U);o(U,W),r(()=>{u(W,_.value)});let G=l(`div`,B);o(B,G),f(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=l(`div`,G);o(G,K),f(K,`text-sm text-base-content/60`),o(K,b(`await nextTick() 后的高度`));let q=l(`div`,G);o(G,q),f(q,`mt-2 font-mono text-2xl text-success`);let J=h(q);o(q,J),r(()=>{u(J,y.value)});let Y=l(`div`,c);o(c,Y),f(Y,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let X=l(`div`,Y);o(Y,X),f(X,`text-sm font-medium text-base-content/70`),o(X,b(`本轮步骤`));let Z=l(`ul`,Y);o(Y,Z),f(Z,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Q=n(`rue:list:start`),te=n(`rue:list:end`);o(Z,Q),o(Z,te);let ne=new Map;return r(()=>{ne=w({items:x.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Z,before:te,singleRoot:!0,start:Q,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`chat-scroll-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:a,beforeDomText:p,afterDomText:_,logLines:y,counterRef:x}=C(`useSetup:0:0`,()=>c(()=>({count:C(`ref:1:0`,()=>S(0)),beforeDomText:C(`ref:1:1`,()=>S(`尚未读取`)),afterDomText:C(`ref:1:2`,()=>S(`尚未读取`)),logLines:C(`ref:1:3`,()=>S([...j])),counterRef:C(`useRef:1:4`,()=>t())}))),T=async()=>{a.value+=1;let e=x.current?.textContent??`(missing)`;p.value=e,_.value=`等待 flush...`,y.value=[`状态值已经改为 ${a.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await i();let t=x.current?.textContent??`(missing)`;_.value=t,y.value=[`状态值已经改为 ${a.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${t}`]},E=()=>{a.value=0,p.value=`尚未读取`,_.value=`尚未读取`,y.value=[...j]};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let C=l(`div`,c);o(c,C),f(C,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=l(`div`,C);o(C,D),f(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),o(D,b(`当前 DOM 文本`));let O=l(`div`,C);o(C,O),f(O,`mt-3 text-4xl font-semibold text-primary`);let k=l(`span`,O);o(O,k);let A=ee(k,()=>x);m(()=>{A()});let j=h(k);o(k,j),r(()=>{u(j,a.value)});let M=l(`div`,c);o(c,M),f(M,`flex flex-wrap gap-3`);let N=l(`button`,M);o(M,N),f(N,`btn btn-primary`),s(N,`click`,()=>void T()),o(N,b(`自增并读取 DOM`));let P=l(`button`,M);o(M,P),f(P,`btn btn-ghost`),s(P,`click`,E),o(P,b(`重置`));let F=l(`div`,c);o(c,F),f(F,`grid gap-4 md:grid-cols-2`);let I=l(`div`,F);o(F,I),f(I,`rounded-box border border-base-300 bg-base-100 p-4`);let L=l(`div`,I);o(I,L),f(L,`text-sm text-base-content/60`),o(L,b(`同步读取到的 DOM 文本`));let R=l(`div`,I);o(I,R),f(R,`mt-2 font-mono text-2xl`);let z=h(R);o(R,z),r(()=>{u(z,p.value)});let B=l(`div`,F);o(F,B),f(B,`rounded-box border border-base-300 bg-base-100 p-4`);let V=l(`div`,B);o(B,V),f(V,`text-sm text-base-content/60`),o(V,b(`await nextTick() 后读取`));let H=l(`div`,B);o(B,H),f(H,`mt-2 font-mono text-2xl text-success`);let U=h(H);o(H,U),r(()=>{u(U,_.value)});let W=l(`div`,c);o(c,W),f(W,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let G=l(`div`,W);o(W,G),f(G,`text-sm font-medium text-base-content/70`),o(G,b(`本轮步骤`));let K=l(`ul`,W);o(W,K),f(K,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let q=n(`rue:list:start`),J=n(`rue:list:end`);o(K,q),o(K,J);let Y=new Map;return r(()=>{Y=w({items:y.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:Y,parent:K,before:J,singleRoot:!0,start:q,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`dom-read-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:_,keyword:y,syncState:x,postTickState:T,logLines:E,inputRef:D}=C(`useSetup:0:0`,()=>c(()=>({panelOpen:C(`ref:1:0`,()=>S(!1)),keyword:C(`ref:1:1`,()=>S(``)),syncState:C(`ref:1:2`,()=>S(`尚未打开`)),postTickState:C(`ref:1:3`,()=>S(`尚未聚焦`)),logLines:C(`ref:1:4`,()=>S([...P])),inputRef:C(`useRef:1:5`,()=>t())}))),O=async()=>{_.value=!0,x.value=D.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,T.value=`等待 flush...`,E.value=[`筛选面板状态已切到打开`,x.value,`等待 nextTick() 后执行 focus()`],await i(),D.current?.focus(),T.value=globalThis.document?.activeElement===D.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,E.value=[`筛选面板状态已切到打开`,x.value,T.value]},k=()=>{_.value=!1,y.value=``,x.value=`尚未打开`,T.value=`尚未聚焦`,E.value=[...P]};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let C=l(`div`,c);o(c,C),f(C,`flex flex-wrap gap-3`);let A=l(`button`,C);o(C,A),f(A,`btn btn-primary`),s(A,`click`,()=>void O()),o(A,b(`打开高级筛选`));let j=l(`button`,C);o(C,j),f(j,`btn btn-ghost`),s(j,`click`,k),o(j,b(`关闭并重置`));let M=n(`rue:slot:anchor`);o(c,M),r(()=>{let t=_.value?d(()=>{let t=e(),n=l(`div`,t);o(t,n),f(n,`rounded-box border border-base-300 bg-base-100 p-5`);let i=l(`div`,n);o(n,i),f(i,`grid gap-4 md:grid-cols-2`);let a=l(`label`,i);o(i,a),f(a,`block`);let c=l(`div`,a);o(a,c),f(c,`text-sm text-base-content/60`),o(c,b(`关键词`));let u=l(`input`,a);o(a,u);let d=ee(u,()=>D);m(()=>{d()}),f(u,`input input-bordered mt-2 w-full`),r(()=>{p(u,y.value)}),v(u,`placeholder`,`订单号 / 用户名 / 手机号`),s(u,`input`,e=>{y.value=e.target.value});let h=l(`label`,i);o(i,h),f(h,`block`);let g=l(`div`,h);o(h,g),f(g,`text-sm text-base-content/60`),o(g,b(`订单状态`));let _=l(`select`,h);o(h,_),f(_,`select select-bordered mt-2 w-full`);let x=l(`option`,_);o(_,x),o(x,b(`全部`));let S=l(`option`,_);o(_,S),o(S,b(`待支付`));let C=l(`option`,_);o(_,C),o(C,b(`待发货`));let w=l(`option`,_);return o(_,w),o(w,b(`已完成`)),t}):``;a(()=>g(t,c,M))});let N=l(`div`,c);o(c,N),f(N,`grid gap-4 md:grid-cols-2`);let P=l(`div`,N);o(N,P),f(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=l(`div`,P);o(P,F),f(F,`text-sm text-base-content/60`),o(F,b(`同步阶段状态`));let I=l(`div`,P);o(P,I),f(I,`mt-2 font-mono text-xl`);let L=h(I);o(I,L),r(()=>{u(L,x.value)});let R=l(`div`,N);o(N,R),f(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=l(`div`,R);o(R,z),f(z,`text-sm text-base-content/60`),o(z,b(`await nextTick() 后状态`));let B=l(`div`,R);o(R,B),f(B,`mt-2 font-mono text-xl text-success`);let V=h(B);o(B,V),r(()=>{u(V,T.value)});let H=l(`div`,c);o(c,H),f(H,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let U=l(`div`,H);o(H,U),f(U,`text-sm font-medium text-base-content/70`),o(U,b(`本轮步骤`));let W=l(`ul`,H);o(H,W),f(W,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let G=n(`rue:list:start`),K=n(`rue:list:end`);o(W,G),o(W,K);let q=new Map;return r(()=>{q=w({items:E.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:q,parent:W,before:K,singleRoot:!0,start:G,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`filter-focus-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:_,phone:y,email:x,errors:T,syncField:E,postTickField:D,logLines:O,formRef:k,validate:A}=C(`useSetup:0:0`,()=>c(()=>{let e=C(`ref:1:0`,()=>S(``)),n=C(`ref:1:1`,()=>S(``)),r=C(`ref:1:2`,()=>S(``));return{receiver:e,phone:n,email:r,errors:C(`ref:1:3`,()=>S(z())),syncField:C(`ref:1:4`,()=>S(`尚未提交`)),postTickField:C(`ref:1:5`,()=>S(`尚未聚焦`)),logLines:C(`ref:1:6`,()=>S([...L])),formRef:C(`useRef:1:7`,()=>t()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(n.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?``:`请输入有效邮箱`})}})),j=async()=>{let e=A(),t=Object.values(e).filter(Boolean).length;T.value=e;let n=k.current?.querySelector(`[data-invalid="true"]`);E.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,D.value=`等待 flush...`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await i();let r=k.current?.querySelector(`[data-invalid="true"]`);r?.focus(),D.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,O.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${E.value}`,D.value]},M=()=>{_.value=`李四`,y.value=`13800001111`,x.value=`li.si@example.com`,T.value=z(),E.value=`已填入合法示例`,D.value=`再次点击提交可观察通过路径`,O.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},N=()=>{_.value=``,y.value=``,x.value=``,T.value=z(),E.value=`尚未提交`,D.value=`尚未聚焦`,O.value=[...L]};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let C=l(`div`,c);o(c,C);let A=ee(C,()=>k);m(()=>{A()}),f(C,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let P=l(`label`,C);o(C,P),f(P,`block`);let F=l(`div`,P);o(P,F),f(F,`text-sm text-base-content/60`),o(F,b(`联系人`));let I=l(`input`,P);o(P,I),v(I,`name`,`receiver`),r(()=>{v(I,`data-invalid`,String(T.value.receiver?`true`:`false`))}),r(()=>{f(I,`input input-bordered mt-2 w-full ${T.value.receiver?`input-error`:``}`.trim())}),r(()=>{p(I,_.value)}),v(I,`placeholder`,`请输入联系人`),s(I,`input`,e=>{_.value=e.target.value});let L=n(`rue:slot:anchor`);o(P,L),r(()=>{let t=T.value.receiver?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`mt-2 text-sm text-error`);let s=n(`rue:slot:anchor`);return o(i,s),r(()=>{let e=T.value.receiver;a(()=>g(e,i,s))}),t}):``;a(()=>g(t,P,L))});let R=l(`label`,C);o(C,R),f(R,`block`);let z=l(`div`,R);o(R,z),f(z,`text-sm text-base-content/60`),o(z,b(`手机号`));let B=l(`input`,R);o(R,B),v(B,`name`,`phone`),r(()=>{v(B,`data-invalid`,String(T.value.phone?`true`:`false`))}),r(()=>{f(B,`input input-bordered mt-2 w-full ${T.value.phone?`input-error`:``}`.trim())}),r(()=>{p(B,y.value)}),v(B,`placeholder`,`请输入 11 位手机号`),s(B,`input`,e=>{y.value=e.target.value});let V=n(`rue:slot:anchor`);o(R,V),r(()=>{let t=T.value.phone?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`mt-2 text-sm text-error`);let s=n(`rue:slot:anchor`);return o(i,s),r(()=>{let e=T.value.phone;a(()=>g(e,i,s))}),t}):``;a(()=>g(t,R,V))});let H=l(`label`,C);o(C,H),f(H,`block`);let U=l(`div`,H);o(H,U),f(U,`text-sm text-base-content/60`),o(U,b(`邮箱`));let W=l(`input`,H);o(H,W),v(W,`name`,`email`),r(()=>{v(W,`data-invalid`,String(T.value.email?`true`:`false`))}),r(()=>{f(W,`input input-bordered mt-2 w-full ${T.value.email?`input-error`:``}`.trim())}),r(()=>{p(W,x.value)}),v(W,`placeholder`,`请输入邮箱`),s(W,`input`,e=>{x.value=e.target.value});let G=n(`rue:slot:anchor`);o(H,G),r(()=>{let t=T.value.email?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`mt-2 text-sm text-error`);let s=n(`rue:slot:anchor`);return o(i,s),r(()=>{let e=T.value.email;a(()=>g(e,i,s))}),t}):``;a(()=>g(t,H,G))});let K=l(`div`,c);o(c,K),f(K,`flex flex-wrap gap-3`);let q=l(`button`,K);o(K,q),f(q,`btn btn-primary`),s(q,`click`,()=>void j()),o(q,b(`提交并定位错误字段`));let J=l(`button`,K);o(K,J),f(J,`btn btn-outline`),s(J,`click`,M),o(J,b(`填入合法示例`));let Y=l(`button`,K);o(K,Y),f(Y,`btn btn-ghost`),s(Y,`click`,N),o(Y,b(`重置`));let X=l(`div`,c);o(c,X),f(X,`grid gap-4 md:grid-cols-2`);let Z=l(`div`,X);o(X,Z),f(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=l(`div`,Z);o(Z,Q),f(Q,`text-sm text-base-content/60`),o(Q,b(`同步阶段识别到的字段`));let te=l(`div`,Z);o(Z,te),f(te,`mt-2 font-mono text-xl`);let ne=h(te);o(te,ne),r(()=>{u(ne,E.value)});let $=l(`div`,X);o(X,$),f($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=l(`div`,$);o($,re),f(re,`text-sm text-base-content/60`),o(re,b(`await nextTick() 后结果`));let ie=l(`div`,$);o($,ie),f(ie,`mt-2 font-mono text-xl text-success`);let ae=h(ie);o(ie,ae),r(()=>{u(ae,D.value)});let oe=l(`div`,c);o(c,oe),f(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=l(`div`,oe);o(oe,se),f(se,`text-sm font-medium text-base-content/70`),o(se,b(`本轮步骤`));let ce=l(`ul`,oe);o(oe,ce),f(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=n(`rue:list:start`),ue=n(`rue:list:end`);o(ce,le),o(ce,ue);let de=new Map;return r(()=>{de=w({items:O.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`focus-error-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:p,syncHeight:_,postTickHeight:y,layoutDecision:x,logLines:T,listRef:E}=C(`useSetup:0:0`,()=>c(()=>({modalOpen:C(`ref:1:0`,()=>S(!1)),syncHeight:C(`ref:1:1`,()=>S(`尚未打开`)),postTickHeight:C(`ref:1:2`,()=>S(`尚未测量`)),layoutDecision:C(`ref:1:3`,()=>S(`等待测量`)),logLines:C(`ref:1:4`,()=>S([...H])),listRef:C(`useRef:1:5`,()=>t())}))),D=async()=>{p.value=!0;let e=E.current?.scrollHeight??0;_.value=`${e}px`,y.value=`等待 flush...`,x.value=`等待布局完成...`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await i();let t=E.current?.scrollHeight??0;y.value=`${t}px`,x.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,T.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${x.value}`]},O=()=>{p.value=!1,_.value=`尚未打开`,y.value=`尚未测量`,x.value=`等待测量`,T.value=[...H]};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let C=l(`div`,c);o(c,C),f(C,`flex flex-wrap gap-3`);let k=l(`button`,C);o(C,k),f(k,`btn btn-primary`),s(k,`click`,()=>void D()),o(k,b(`打开批量发送弹窗`));let A=l(`button`,C);o(C,A),f(A,`btn btn-ghost`),s(A,`click`,O),o(A,b(`关闭并重置`));let j=n(`rue:slot:anchor`);o(c,j),r(()=>{let t=p.value?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let s=l(`div`,i);o(i,s),f(s,`flex items-start justify-between gap-4`);let c=l(`div`,s);o(s,c);let u=l(`div`,c);o(c,u),f(u,`text-sm uppercase tracking-[0.24em] text-base-content/50`),o(u,b(`批量发送预览`));let p=l(`div`,c);o(c,p),f(p,`mt-2 text-2xl font-semibold`),o(p,b(`确认接收人列表`));let h=l(`div`,s);o(s,h),f(h,`badge badge-outline`);let _=n(`rue:slot:anchor`);o(h,_),r(()=>{let e=U.length;a(()=>g(e,h,_))}),o(h,b(` 人`));let y=l(`div`,i);o(i,y);let x=ee(y,()=>E);m(()=>{x()}),f(y,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=n(`rue:list:start`),C=n(`rue:list:end`);o(y,S),o(y,C);let T=new Map;return r(()=>{T=w({items:U||[],getKey:(e,t)=>e.id,elements:T,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,i,s,c,u)=>{g(d(()=>{let i=e(),s=l(`div`,i);o(i,s),r(()=>{v(s,`key`,String(t.id))}),f(s,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let c=l(`div`,s);o(s,c),f(c,`font-medium`);let u=n(`rue:slot:anchor`);o(c,u),r(()=>{let e=t.name;a(()=>g(e,c,u))});let d=l(`div`,s);o(s,d),f(d,`text-base-content/60`);let p=n(`rue:slot:anchor`);o(d,p),r(()=>{let e=t.team;a(()=>g(e,d,p))}),o(d,b(` · `));let m=n(`rue:slot:anchor`);return o(d,m),r(()=>{let e=t.region;a(()=>g(e,d,m))}),i}),i,s)}})}),t}):``;a(()=>g(t,c,j))});let M=l(`div`,c);o(c,M),f(M,`grid gap-4 md:grid-cols-3`);let N=l(`div`,M);o(M,N),f(N,`rounded-box border border-base-300 bg-base-100 p-4`);let P=l(`div`,N);o(N,P),f(P,`text-sm text-base-content/60`),o(P,b(`同步读取到的高度`));let F=l(`div`,N);o(N,F),f(F,`mt-2 font-mono text-xl`);let I=h(F);o(F,I),r(()=>{u(I,_.value)});let L=l(`div`,M);o(M,L),f(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=l(`div`,L);o(L,R),f(R,`text-sm text-base-content/60`),o(R,b(`await nextTick() 后高度`));let z=l(`div`,L);o(L,z),f(z,`mt-2 font-mono text-xl text-success`);let B=h(z);o(z,B),r(()=>{u(B,y.value)});let V=l(`div`,M);o(M,V),f(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=l(`div`,V);o(V,H),f(H,`text-sm text-base-content/60`),o(H,b(`布局决策`));let W=l(`div`,V);o(V,W),f(W,`mt-2 text-sm leading-6 text-base-content/80`);let G=h(W);o(W,G),r(()=>{u(G,x.value)});let K=l(`div`,c);o(c,K),f(K,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let q=l(`div`,K);o(K,q),f(q,`text-sm font-medium text-base-content/70`),o(q,b(`本轮步骤`));let J=l(`ul`,K);o(K,J),f(J,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let Y=n(`rue:list:start`),X=n(`rue:list:end`);o(J,Y),o(J,X);let Z=new Map;return r(()=>{Z=w({items:T.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`modal-measure-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:p,syncHeight:_,postTickHeight:y,logLines:x,panelRef:T}=C(`useSetup:0:0`,()=>c(()=>({expanded:C(`ref:1:0`,()=>S(!1)),syncHeight:C(`ref:1:1`,()=>S(`尚未测量`)),postTickHeight:C(`ref:1:2`,()=>S(`尚未测量`)),logLines:C(`ref:1:3`,()=>S([...K])),panelRef:C(`useRef:1:4`,()=>t())}))),E=async()=>{p.value=!p.value;let e=p.value?`展开`:`收起`,t=T.current?.offsetHeight??0;_.value=`${t}px`,y.value=`等待 flush...`,x.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await i();let n=T.current?.offsetHeight??0;y.value=`${n}px`,x.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},D=()=>{p.value=!1,_.value=`尚未测量`,y.value=`尚未测量`,x.value=[...K]};return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let S=l(`p`,c);o(c,S),f(S,`text-base-content/70 leading-7`),o(S,b(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let C=l(`div`,c);o(c,C);let O=ee(C,()=>T);m(()=>{O()}),f(C,`rounded-box border border-base-300 bg-base-100 p-5`);let k=l(`div`,C);o(C,k),f(k,`flex items-center justify-between`);let A=l(`div`,k);o(k,A);let j=l(`div`,A);o(A,j),f(j,`text-sm uppercase tracking-[0.24em] text-base-content/50`),o(j,b(`订单详情卡片`));let M=l(`div`,A);o(A,M),f(M,`mt-2 text-2xl font-semibold`),o(M,b(`订单 #A1024`));let N=l(`div`,k);o(k,N),r(()=>{f(N,`badge ${p.value?`badge-primary`:`badge-outline`}`)});let P=h(N);o(N,P),r(()=>{u(P,p.value?`已展开`:`已收起`)});let F=l(`div`,C);o(C,F),f(F,`mt-5 grid gap-3 md:grid-cols-2`);let I=l(`div`,F);o(F,I),f(I,`rounded-box bg-base-200/60 p-3 text-sm`),o(I,b(`支付状态：已支付`));let L=l(`div`,F);o(F,L),f(L,`rounded-box bg-base-200/60 p-3 text-sm`),o(L,b(`配送方式：同城急送`));let R=l(`div`,F);o(F,R),f(R,`rounded-box bg-base-200/60 p-3 text-sm`),o(R,b(`仓库：上海 3 号仓`));let z=l(`div`,F);o(F,z),f(z,`rounded-box bg-base-200/60 p-3 text-sm`),o(z,b(`下单时间：09:20`));let B=n(`rue:slot:anchor`);o(F,B),r(()=>{let t=p.value?d(()=>{let t=e();o(t,b(` `));let n=l(`div`,t);o(t,n),f(n,`rounded-box bg-base-200/60 p-3 text-sm`),o(n,b(`发票状态：电子发票已开具`)),o(t,b(` `));let r=l(`div`,t);o(t,r),f(r,`rounded-box bg-base-200/60 p-3 text-sm`),o(r,b(`风控结果：人工审核已通过`)),o(t,b(` `));let i=l(`div`,t);o(t,i),f(i,`rounded-box bg-base-200/60 p-3 text-sm`),o(i,b(`配送备注：优先联系收货人本人`)),o(t,b(` `));let a=l(`div`,t);return o(t,a),f(a,`rounded-box bg-base-200/60 p-3 text-sm`),o(a,b(`售后状态：暂无售后单`)),o(t,b(` `)),t}):``;a(()=>g(t,F,B))});let V=l(`div`,c);o(c,V),f(V,`flex flex-wrap gap-3`);let H=l(`button`,V);o(V,H),f(H,`btn btn-primary`),s(H,`click`,()=>void E());let U=h(H);o(H,U),r(()=>{u(U,p.value?`收起详情区并测量`:`展开详情区并测量`)});let W=l(`button`,V);o(V,W),f(W,`btn btn-ghost`),s(W,`click`,D),o(W,b(`重置`));let G=l(`div`,c);o(c,G),f(G,`grid gap-4 md:grid-cols-2`);let K=l(`div`,G);o(G,K),f(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=l(`div`,K);o(K,q),f(q,`text-sm text-base-content/60`),o(q,b(`同步读取到的高度`));let J=l(`div`,K);o(K,J),f(J,`mt-2 font-mono text-2xl`);let Y=h(J);o(J,Y),r(()=>{u(Y,_.value)});let X=l(`div`,G);o(G,X),f(X,`rounded-box border border-base-300 bg-base-100 p-4`);let Z=l(`div`,X);o(X,Z),f(Z,`text-sm text-base-content/60`),o(Z,b(`await nextTick() 后高度`));let Q=l(`div`,X);o(X,Q),f(Q,`mt-2 font-mono text-2xl text-success`);let te=h(Q);o(Q,te),r(()=>{u(te,y.value)});let ne=l(`div`,c);o(c,ne),f(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=l(`div`,ne);o(ne,$),f($,`text-sm font-medium text-base-content/70`),o($,b(`本轮步骤`));let re=l(`ul`,ne);o(ne,re),f(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=n(`rue:list:start`),ae=n(`rue:list:end`);o(re,ie),o(re,ae);let oe=new Map;return r(()=>{oe=w({items:x.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`panel-measure-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),te=()=>{let{activeStatus:p,syncTarget:_,postTickTarget:y,logLines:T,viewportRef:E}=C(`useSetup:0:0`,()=>c(()=>({activeStatus:C(`ref:1:0`,()=>S(`all`)),syncTarget:C(`ref:1:1`,()=>S(`尚未筛选`)),postTickTarget:C(`ref:1:2`,()=>S(`尚未定位`)),logLines:C(`ref:1:3`,()=>S([...Y])),viewportRef:C(`useRef:1:4`,()=>t())}))),D=async e=>{p.value=e,_.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,y.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${_.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await i();let t=E.current?.querySelector(`[data-first-visible="true"]`);t?.scrollIntoView({block:`nearest`}),y.value=t?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${_.value}`,`nextTick() 后首条结果：${y.value}，并已滚动到可视区域`]},O=()=>{p.value=`all`,_.value=`尚未筛选`,y.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=C(`computed:1:5`,()=>x(()=>Q(p.value)));return d(t=>{let i=l(`div`,t);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-5`);let x=l(`p`,c);o(c,x),f(x,`text-base-content/70 leading-7`),o(x,b(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=l(`div`,c);o(c,S),f(S,`flex flex-wrap gap-2`);let C=n(`rue:list:start`),A=n(`rue:list:end`);o(S,C),o(S,A);let j=new Map;r(()=>{j=w({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:j,parent:S,before:A,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,c,u,m)=>{g(d(()=>{let i=e(),c=l(`button`,i);o(i,c),r(()=>{v(c,`key`,String(t))}),r(()=>{f(c,`btn btn-sm ${p.value===t?`btn-primary`:`btn-ghost`}`)}),s(c,`click`,()=>void D(t));let u=n(`rue:slot:anchor`);return o(c,u),r(()=>{let e=X[t];a(()=>g(e,c,u))}),i}),i,c)}})});let M=l(`button`,S);o(S,M),f(M,`btn btn-sm btn-outline`),s(M,`click`,O),o(M,b(`重置`));let N=l(`div`,c);o(c,N);let P=ee(N,()=>E);m(()=>{P()}),f(N,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let F=l(`table`,N);o(N,F),f(F,`table table-pin-rows table-sm`);let I=l(`thead`,F);o(F,I);let L=l(`tr`,I);o(I,L);let R=l(`th`,L);o(L,R),o(R,b(`订单号`));let z=l(`th`,L);o(L,z),o(z,b(`客户`));let B=l(`th`,L);o(L,B),o(B,b(`状态`));let V=l(`th`,L);o(L,V),o(V,b(`金额`));let H=l(`th`,L);o(L,H),o(H,b(`备注`));let U=l(`tbody`,F);o(F,U);let W=n(`rue:slot:anchor`);o(U,W),r(()=>{let t=k.get().length>0?d(()=>{let t=e(),i=n(`rue:list:start`),s=n(`rue:list:end`);o(t,i),o(t,s);let c=new Map;return r(()=>{c=w({items:k.get()||[],getKey:(e,t)=>e.id,elements:c,parent:i.parentNode,before:s,singleRoot:!0,start:i,renderItem:(t,i,s,c,u)=>{g(d(()=>{let i=e(),s=l(`tr`,i);o(i,s),r(()=>{v(s,`key`,String(t.id))}),r(()=>{v(s,`data-first-visible`,String(u===0?`true`:`false`))}),r(()=>{v(s,`data-order-no`,String(t.orderNo))});let c=l(`td`,s);o(s,c),f(c,`font-medium`);let d=n(`rue:slot:anchor`);o(c,d),r(()=>{let e=t.orderNo;a(()=>g(e,c,d))});let p=l(`td`,s);o(s,p);let m=n(`rue:slot:anchor`);o(p,m),r(()=>{let e=t.customer;a(()=>g(e,p,m))});let h=l(`td`,s);o(s,h);let _=l(`span`,h);o(h,_),f(_,`badge badge-outline`);let y=n(`rue:slot:anchor`);o(_,y),r(()=>{let e=X[t.status];a(()=>g(e,_,y))});let b=l(`td`,s);o(s,b);let x=n(`rue:slot:anchor`);o(b,x),r(()=>{let e=t.amount;a(()=>g(e,b,x))});let S=l(`td`,s);o(s,S),f(S,`text-base-content/60`);let C=n(`rue:slot:anchor`);return o(S,C),r(()=>{let e=t.note;a(()=>g(e,S,C))}),i}),i,s)}})}),t}):d(()=>{let t=e(),n=l(`tr`,t);o(t,n);let r=l(`td`,n);return o(n,r),v(r,`colSpan`,`5`),f(r,`py-8 text-center text-base-content/60`),o(r,b(`当前筛选没有结果`)),t});a(()=>g(t,U,W))});let G=l(`div`,c);o(c,G),f(G,`grid gap-4 md:grid-cols-2`);let K=l(`div`,G);o(G,K),f(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=l(`div`,K);o(K,q),f(q,`text-sm text-base-content/60`),o(q,b(`同步读取到的首条结果`));let J=l(`div`,K);o(K,J),f(J,`mt-2 font-mono text-2xl`);let Y=h(J);o(J,Y),r(()=>{u(Y,_.value)});let Z=l(`div`,G);o(G,Z),f(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=l(`div`,Z);o(Z,Q),f(Q,`text-sm text-base-content/60`),o(Q,b(`await nextTick() 后定位到`));let te=l(`div`,Z);o(Z,te),f(te,`mt-2 font-mono text-2xl text-success`);let ne=h(te);o(te,ne),r(()=>{u(ne,y.value)});let $=l(`div`,c);o(c,$),f($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=l(`div`,$);o($,re),f(re,`text-sm font-medium text-base-content/70`),o(re,b(`本轮步骤`));let ie=l(`ul`,$);o($,ie),f(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=n(`rue:list:start`),oe=n(`rue:list:end`);o(ie,ae),o(ie,oe);let se=new Map;return r(()=>{se=w({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`li`,n);o(n,i),r(()=>{v(i,`key`,String(`table-filter-log-${s}`))});let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})}),i})},ne=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,$=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],re=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:ne,Demo:te},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],ie=t=>{let{Demo:i}=C(`useSetup:0:0`,()=>c(()=>({Demo:t.scenario.Demo})));return d(s=>{let c=l(`section`,s);f(c,`rounded-box border border-base-300 bg-base-100 p-5`);let p=l(`div`,c);o(c,p),f(p,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let m=n(`rue:slot:anchor`);o(p,m),r(()=>{let e=t.eyebrow;a(()=>g(e,p,m))});let _=l(`div`,c);o(c,_),f(_,`mt-2 text-2xl font-semibold`);let b=n(`rue:slot:anchor`);o(_,b),r(()=>{let e=t.scenario.title;a(()=>g(e,_,b))});let x=l(`p`,c);o(c,x),f(x,`mt-2 text-base-content/70 leading-7`);let S=n(`rue:slot:anchor`);o(x,S),r(()=>{let e=t.scenario.summary;a(()=>g(e,x,S))});let C=l(`div`,c);o(c,C),f(C,`mt-4 flex flex-wrap gap-2`);let ee=n(`rue:list:start`),E=n(`rue:list:end`);o(C,ee),o(C,E);let D=new Map;r(()=>{D=w({items:t.scenario.businessCases||[],getKey:(e,t)=>e,elements:D,parent:C,before:E,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(t,n,i,a,s)=>{g(d(()=>{let n=e(),i=l(`span`,n);o(n,i),r(()=>{v(i,`key`,String(t))}),f(i,`badge badge-outline`);let a=h(i);return o(i,a),r(()=>{u(a,t)}),n}),n,i)}})});let O=l(`div`,c);o(c,O),f(O,`mt-4`);let k=n(`rue:slot:anchor`);return o(O,k),r(()=>{let s=t.activeTab.value===`preview`?d(()=>{let t=e(),r=n(`rue:component:anchor`);return o(t,r),g(y(i,{}),t,r),t}):d(()=>{let i=e(),s=l(`div`,i);o(i,s),f(s,`card bg-base-100 shadow overflow-auto`);let c=l(`div`,s);o(s,c),f(c,`card-body p-0`);let u=n(`rue:component:anchor`);return o(c,u),r(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:t.scenario.source});a(()=>g(e,c,u))}),i});a(()=>g(s,O,k))}),c})},ae=()=>{let{activeTab:t}=C(`useSetup:0:0:dup1`,()=>c(()=>({activeTab:C(`ref:1:0`,()=>S(`preview`))})));return d(i=>{let a=e(),c=n(`rue:component:anchor`);return o(a,c),g(y(E,{children:d(()=>{let i=e(),a=l(`h1`,i);o(i,a),f(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,b(`nextTick 真实业务场景`));let c=l(`p`,i);o(i,c),f(c,`max-w-4xl text-base-content/70 leading-7`),o(c,b(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let u=l(`div`,i);o(i,u),v(u,`role`,`tablist`),f(u,`tabs tabs-box mt-6`);let d=l(`button`,u);o(u,d),v(d,`role`,`tab`),r(()=>{f(d,`tab ${t.value===`preview`?`tab-active`:``}`)}),s(d,`click`,()=>{t.value=`preview`}),o(d,b(`效果`));let p=l(`button`,u);o(u,p),v(p,`role`,`tab`),r(()=>{f(p,`tab ${t.value===`code`?`tab-active`:``}`)}),s(p,`click`,()=>{t.value=`code`}),o(p,b(`代码`));let m=l(`div`,i);o(i,m),f(m,`mt-4 grid gap-6`);let h=n(`rue:list:start`),g=n(`rue:list:end`);o(m,h),o(m,g);let x=new Map;r(()=>{x=w({items:$||[],getKey:(e,t)=>e.title,elements:x,parent:m,before:g,start:h,renderItem:(e,n,r,i,a)=>{_(y(ie,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:t}),n,r,i)}})});let S=l(`section`,m);o(m,S),f(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=l(`div`,S);o(S,C),f(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),o(C,b(`新增业务 demo`));let ee=l(`div`,S);o(S,ee),f(ee,`mt-2 text-2xl font-semibold`),o(ee,b(`真实业务里 nextTick 怎么用`));let T=l(`p`,S);o(S,T),f(T,`mt-2 text-base-content/70 leading-7`),o(T,b(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let E=n(`rue:list:start`),D=n(`rue:list:end`);o(m,E),o(m,D);let O=new Map;return r(()=>{O=w({items:re||[],getKey:(e,t)=>e.title,elements:O,parent:m,before:D,start:E,renderItem:(e,n,r,i,a)=>{_(y(ie,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:t}),n,r,i)}})}),i})}),a,c),a})};export{ae as default};