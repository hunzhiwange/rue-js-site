import{$ as e,Ht as t,J as n,Kt as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,c as l,ct as u,et as d,l as f,mt as p,ot as m,pt as h,qt as g,r as _,s as v,t as y,tt as b,xt as x}from"./vapor-runtime-aZAg0Qkw.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as T}from"./Code-5DOEyGxf.js";import{r as E}from"./SidebarPlaygroundExample-cASgDpH3.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:l,syncHeight:h,flushedHeight:y,logLines:T,listRef:E}=S(`useSetup:0:0`,()=>g(()=>({messages:S(`ref:1:0`,()=>a(O())),syncHeight:S(`ref:1:1`,()=>a(`尚未追加`)),flushedHeight:S(`ref:1:2`,()=>a(`尚未追加`)),logLines:S(`ref:1:3`,()=>a([...D])),listRef:S(`useRef:1:4`,()=>r())}))),k=async()=>{let e=l.value.length+1,t=String(19+e).padStart(2,`0`);l.value=[...l.value,{id:e,text:`09:${t} 订单 #A10${20+e} 已完成支付`}];let n=E.current?.scrollHeight??0;h.value=`${n}px（旧高度）`,y.value=`等待 flush...`,T.value=[`消息数已变为 ${l.value.length}`,`同步读取 scrollHeight：${n}px`,`等待 nextTick() 后重新计算高度...`],E.current&&(E.current.scrollTop=n),await x();let r=E.current?.scrollHeight??0;E.current&&(E.current.scrollTop=r),y.value=`${r}px（已包含新消息）`,T.value=[`消息数已变为 ${l.value.length}`,`同步读取 scrollHeight：${n}px`,`nextTick() 后 scrollHeight：${r}px，并已滚动到底部`]},A=()=>{l.value=O(),h.value=`尚未追加`,y.value=`尚未追加`,T.value=[...D],E.current&&(E.current.scrollTop=0)};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let S=e(`div`,g);s(g,S),u(S,`rounded-box border border-base-300 bg-base-100`);let D=e(`div`,S);s(S,D),u(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=e(`div`,D);s(D,O),u(O,`text-sm font-medium text-base-content/70`),s(O,d(`订单通知流`));let j=e(`div`,D);s(D,j),u(j,`badge badge-outline`);let M=c(`rue:slot:anchor`);s(j,M),o(()=>{let e=l.value.length;t(()=>v(e,j,M))}),s(j,d(` 条消息`));let N=e(`div`,S);s(S,N);let P=w(N,()=>E);_(()=>{P()}),u(N,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let F=c(`rue:list:start`),I=c(`rue:list:end`);s(N,F),s(N,I);let L=new Map;o(()=>{L=C({items:l.value||[],getKey:(e,t)=>e.id,elements:L,parent:N,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(n,r,a,l,d)=>{v(f(()=>{let r=i(),a=e(`div`,r);s(r,a),o(()=>{m(a,`key`,String(n.id))}),u(a,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let l=c(`rue:slot:anchor`);return s(a,l),o(()=>{let e=n.text;t(()=>v(e,a,l))}),r}),r,a)}})});let R=e(`div`,g);s(g,R),u(R,`flex flex-wrap gap-3`);let z=e(`button`,R);s(R,z),u(z,`btn btn-primary`),n(z,`click`,()=>void k()),s(z,d(`追加通知并滚动到底部`));let B=e(`button`,R);s(R,B),u(B,`btn btn-ghost`),n(B,`click`,A),s(B,d(`重置`));let V=e(`div`,g);s(g,V),u(V,`grid gap-4 md:grid-cols-2`);let H=e(`div`,V);s(V,H),u(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=e(`div`,H);s(H,U),u(U,`text-sm text-base-content/60`),s(U,d(`同步读取到的 scrollHeight`));let W=e(`div`,H);s(H,W),u(W,`mt-2 font-mono text-2xl`);let G=b(W);s(W,G),o(()=>{p(G,h.value)});let K=e(`div`,V);s(V,K),u(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=e(`div`,K);s(K,q),u(q,`text-sm text-base-content/60`),s(q,d(`await nextTick() 后的高度`));let J=e(`div`,K);s(K,J),u(J,`mt-2 font-mono text-2xl text-success`);let Y=b(J);s(J,Y),o(()=>{p(Y,y.value)});let X=e(`div`,g);s(g,X),u(X,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let Z=e(`div`,X);s(X,Z),u(Z,`text-sm font-medium text-base-content/70`),s(Z,d(`本轮步骤`));let Q=e(`ul`,X);s(X,Q),u(Q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ee=c(`rue:list:start`),te=c(`rue:list:end`);s(Q,ee),s(Q,te);let ne=new Map;return o(()=>{ne=C({items:T.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Q,before:te,singleRoot:!0,start:ee,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`chat-scroll-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:t,beforeDomText:l,afterDomText:h,logLines:y,counterRef:T}=S(`useSetup:0:0`,()=>g(()=>({count:S(`ref:1:0`,()=>a(0)),beforeDomText:S(`ref:1:1`,()=>a(`尚未读取`)),afterDomText:S(`ref:1:2`,()=>a(`尚未读取`)),logLines:S(`ref:1:3`,()=>a([...j])),counterRef:S(`useRef:1:4`,()=>r())}))),E=async()=>{t.value+=1;let e=T.current?.textContent??`(missing)`;l.value=e,h.value=`等待 flush...`,y.value=[`状态值已经改为 ${t.value}`,`同步读取 DOM：${e}`,`等待 nextTick() 完成...`],await x();let n=T.current?.textContent??`(missing)`;h.value=n,y.value=[`状态值已经改为 ${t.value}`,`同步读取 DOM：${e}`,`nextTick() 后读取 DOM：${n}`]},D=()=>{t.value=0,l.value=`尚未读取`,h.value=`尚未读取`,y.value=[...j]};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let S=e(`div`,g);s(g,S),u(S,`rounded-box border border-base-300 bg-base-200/40 p-5`);let O=e(`div`,S);s(S,O),u(O,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(O,d(`当前 DOM 文本`));let k=e(`div`,S);s(S,k),u(k,`mt-3 text-4xl font-semibold text-primary`);let A=e(`span`,k);s(k,A);let j=w(A,()=>T);_(()=>{j()});let M=b(A);s(A,M),o(()=>{p(M,t.value)});let N=e(`div`,g);s(g,N),u(N,`flex flex-wrap gap-3`);let P=e(`button`,N);s(N,P),u(P,`btn btn-primary`),n(P,`click`,()=>void E()),s(P,d(`自增并读取 DOM`));let F=e(`button`,N);s(N,F),u(F,`btn btn-ghost`),n(F,`click`,D),s(F,d(`重置`));let I=e(`div`,g);s(g,I),u(I,`grid gap-4 md:grid-cols-2`);let L=e(`div`,I);s(I,L),u(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=e(`div`,L);s(L,R),u(R,`text-sm text-base-content/60`),s(R,d(`同步读取到的 DOM 文本`));let z=e(`div`,L);s(L,z),u(z,`mt-2 font-mono text-2xl`);let B=b(z);s(z,B),o(()=>{p(B,l.value)});let V=e(`div`,I);s(I,V),u(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=e(`div`,V);s(V,H),u(H,`text-sm text-base-content/60`),s(H,d(`await nextTick() 后读取`));let U=e(`div`,V);s(V,U),u(U,`mt-2 font-mono text-2xl text-success`);let W=b(U);s(U,W),o(()=>{p(W,h.value)});let G=e(`div`,g);s(g,G),u(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let K=e(`div`,G);s(G,K),u(K,`text-sm font-medium text-base-content/70`),s(K,d(`本轮步骤`));let q=e(`ul`,G);s(G,q),u(q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let J=c(`rue:list:start`),Y=c(`rue:list:end`);s(q,J),s(q,Y);let X=new Map;return o(()=>{X=C({items:y.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:X,parent:q,before:Y,singleRoot:!0,start:J,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`dom-read-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:l,keyword:y,syncState:T,postTickState:E,logLines:D,inputRef:O}=S(`useSetup:0:0`,()=>g(()=>({panelOpen:S(`ref:1:0`,()=>a(!1)),keyword:S(`ref:1:1`,()=>a(``)),syncState:S(`ref:1:2`,()=>a(`尚未打开`)),postTickState:S(`ref:1:3`,()=>a(`尚未聚焦`)),logLines:S(`ref:1:4`,()=>a([...P])),inputRef:S(`useRef:1:5`,()=>r())}))),k=async()=>{l.value=!0,T.value=O.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,E.value=`等待 flush...`,D.value=[`筛选面板状态已切到打开`,T.value,`等待 nextTick() 后执行 focus()`],await x(),O.current?.focus(),E.value=globalThis.document?.activeElement===O.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,D.value=[`筛选面板状态已切到打开`,T.value,E.value]},A=()=>{l.value=!1,y.value=``,T.value=`尚未打开`,E.value=`尚未聚焦`,D.value=[...P]};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let S=e(`div`,g);s(g,S),u(S,`flex flex-wrap gap-3`);let j=e(`button`,S);s(S,j),u(j,`btn btn-primary`),n(j,`click`,()=>void k()),s(j,d(`打开高级筛选`));let M=e(`button`,S);s(S,M),u(M,`btn btn-ghost`),n(M,`click`,A),s(M,d(`关闭并重置`));let N=c(`rue:slot:anchor`);s(g,N),o(()=>{let r=l.value?f(()=>{let t=i(),r=e(`div`,t);s(t,r),u(r,`rounded-box border border-base-300 bg-base-100 p-5`);let a=e(`div`,r);s(r,a),u(a,`grid gap-4 md:grid-cols-2`);let c=e(`label`,a);s(a,c),u(c,`block`);let l=e(`div`,c);s(c,l),u(l,`text-sm text-base-content/60`),s(l,d(`关键词`));let f=e(`input`,c);s(c,f);let p=w(f,()=>O);_(()=>{p()}),u(f,`input input-bordered mt-2 w-full`),o(()=>{h(f,y.value)}),m(f,`placeholder`,`订单号 / 用户名 / 手机号`),n(f,`input`,e=>{y.value=e.target.value});let g=e(`label`,a);s(a,g),u(g,`block`);let v=e(`div`,g);s(g,v),u(v,`text-sm text-base-content/60`),s(v,d(`订单状态`));let b=e(`select`,g);s(g,b),u(b,`select select-bordered mt-2 w-full`);let x=e(`option`,b);s(b,x),s(x,d(`全部`));let S=e(`option`,b);s(b,S),s(S,d(`待支付`));let C=e(`option`,b);s(b,C),s(C,d(`待发货`));let T=e(`option`,b);return s(b,T),s(T,d(`已完成`)),t}):``;t(()=>v(r,g,N))});let P=e(`div`,g);s(g,P),u(P,`grid gap-4 md:grid-cols-2`);let F=e(`div`,P);s(P,F),u(F,`rounded-box border border-base-300 bg-base-100 p-4`);let I=e(`div`,F);s(F,I),u(I,`text-sm text-base-content/60`),s(I,d(`同步阶段状态`));let L=e(`div`,F);s(F,L),u(L,`mt-2 font-mono text-xl`);let R=b(L);s(L,R),o(()=>{p(R,T.value)});let z=e(`div`,P);s(P,z),u(z,`rounded-box border border-base-300 bg-base-100 p-4`);let B=e(`div`,z);s(z,B),u(B,`text-sm text-base-content/60`),s(B,d(`await nextTick() 后状态`));let V=e(`div`,z);s(z,V),u(V,`mt-2 font-mono text-xl text-success`);let H=b(V);s(V,H),o(()=>{p(H,E.value)});let U=e(`div`,g);s(g,U),u(U,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let W=e(`div`,U);s(U,W),u(W,`text-sm font-medium text-base-content/70`),s(W,d(`本轮步骤`));let G=e(`ul`,U);s(U,G),u(G,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let K=c(`rue:list:start`),q=c(`rue:list:end`);s(G,K),s(G,q);let J=new Map;return o(()=>{J=C({items:D.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:J,parent:G,before:q,singleRoot:!0,start:K,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`filter-focus-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:l,phone:y,email:T,errors:E,syncField:D,postTickField:O,logLines:k,formRef:A,validate:j}=S(`useSetup:0:0`,()=>g(()=>{let e=S(`ref:1:0`,()=>a(``)),t=S(`ref:1:1`,()=>a(``)),n=S(`ref:1:2`,()=>a(``));return{receiver:e,phone:t,email:n,errors:S(`ref:1:3`,()=>a(z())),syncField:S(`ref:1:4`,()=>a(`尚未提交`)),postTickField:S(`ref:1:5`,()=>a(`尚未聚焦`)),logLines:S(`ref:1:6`,()=>a([...L])),formRef:S(`useRef:1:7`,()=>r()),validate:()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?``:`请输入有效邮箱`})}})),M=async()=>{let e=j(),t=Object.values(e).filter(Boolean).length;E.value=e;let n=A.current?.querySelector(`[data-invalid="true"]`);D.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,O.value=`等待 flush...`,k.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${D.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await x();let r=A.current?.querySelector(`[data-invalid="true"]`);r?.focus(),O.value=r?.name?`${R[r.name]} 已自动聚焦`:`校验通过，无需聚焦`,k.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${D.value}`,O.value]},N=()=>{l.value=`李四`,y.value=`13800001111`,T.value=`li.si@example.com`,E.value=z(),D.value=`已填入合法示例`,O.value=`再次点击提交可观察通过路径`,k.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},P=()=>{l.value=``,y.value=``,T.value=``,E.value=z(),D.value=`尚未提交`,O.value=`尚未聚焦`,k.value=[...L]};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let S=e(`div`,g);s(g,S);let j=w(S,()=>A);_(()=>{j()}),u(S,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let F=e(`label`,S);s(S,F),u(F,`block`);let I=e(`div`,F);s(F,I),u(I,`text-sm text-base-content/60`),s(I,d(`联系人`));let L=e(`input`,F);s(F,L),m(L,`name`,`receiver`),o(()=>{m(L,`data-invalid`,String(E.value.receiver?`true`:`false`))}),o(()=>{u(L,String(`input input-bordered mt-2 w-full ${E.value.receiver?`input-error`:``}`.trim()))}),o(()=>{h(L,l.value)}),m(L,`placeholder`,`请输入联系人`),n(L,`input`,e=>{l.value=e.target.value});let R=c(`rue:slot:anchor`);s(F,R),o(()=>{let n=E.value.receiver?f(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`mt-2 text-sm text-error`);let a=c(`rue:slot:anchor`);return s(r,a),o(()=>{let e=E.value.receiver;t(()=>v(e,r,a))}),n}):``;t(()=>v(n,F,R))});let z=e(`label`,S);s(S,z),u(z,`block`);let B=e(`div`,z);s(z,B),u(B,`text-sm text-base-content/60`),s(B,d(`手机号`));let V=e(`input`,z);s(z,V),m(V,`name`,`phone`),o(()=>{m(V,`data-invalid`,String(E.value.phone?`true`:`false`))}),o(()=>{u(V,String(`input input-bordered mt-2 w-full ${E.value.phone?`input-error`:``}`.trim()))}),o(()=>{h(V,y.value)}),m(V,`placeholder`,`请输入 11 位手机号`),n(V,`input`,e=>{y.value=e.target.value});let H=c(`rue:slot:anchor`);s(z,H),o(()=>{let n=E.value.phone?f(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`mt-2 text-sm text-error`);let a=c(`rue:slot:anchor`);return s(r,a),o(()=>{let e=E.value.phone;t(()=>v(e,r,a))}),n}):``;t(()=>v(n,z,H))});let U=e(`label`,S);s(S,U),u(U,`block`);let W=e(`div`,U);s(U,W),u(W,`text-sm text-base-content/60`),s(W,d(`邮箱`));let G=e(`input`,U);s(U,G),m(G,`name`,`email`),o(()=>{m(G,`data-invalid`,String(E.value.email?`true`:`false`))}),o(()=>{u(G,String(`input input-bordered mt-2 w-full ${E.value.email?`input-error`:``}`.trim()))}),o(()=>{h(G,T.value)}),m(G,`placeholder`,`请输入邮箱`),n(G,`input`,e=>{T.value=e.target.value});let K=c(`rue:slot:anchor`);s(U,K),o(()=>{let n=E.value.email?f(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`mt-2 text-sm text-error`);let a=c(`rue:slot:anchor`);return s(r,a),o(()=>{let e=E.value.email;t(()=>v(e,r,a))}),n}):``;t(()=>v(n,U,K))});let q=e(`div`,g);s(g,q),u(q,`flex flex-wrap gap-3`);let J=e(`button`,q);s(q,J),u(J,`btn btn-primary`),n(J,`click`,()=>void M()),s(J,d(`提交并定位错误字段`));let Y=e(`button`,q);s(q,Y),u(Y,`btn btn-outline`),n(Y,`click`,N),s(Y,d(`填入合法示例`));let X=e(`button`,q);s(q,X),u(X,`btn btn-ghost`),n(X,`click`,P),s(X,d(`重置`));let Z=e(`div`,g);s(g,Z),u(Z,`grid gap-4 md:grid-cols-2`);let Q=e(`div`,Z);s(Z,Q),u(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=e(`div`,Q);s(Q,ee),u(ee,`text-sm text-base-content/60`),s(ee,d(`同步阶段识别到的字段`));let te=e(`div`,Q);s(Q,te),u(te,`mt-2 font-mono text-xl`);let ne=b(te);s(te,ne),o(()=>{p(ne,D.value)});let $=e(`div`,Z);s(Z,$),u($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=e(`div`,$);s($,re),u(re,`text-sm text-base-content/60`),s(re,d(`await nextTick() 后结果`));let ie=e(`div`,$);s($,ie),u(ie,`mt-2 font-mono text-xl text-success`);let ae=b(ie);s(ie,ae),o(()=>{p(ae,O.value)});let oe=e(`div`,g);s(g,oe),u(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=e(`div`,oe);s(oe,se),u(se,`text-sm font-medium text-base-content/70`),s(se,d(`本轮步骤`));let ce=e(`ul`,oe);s(oe,ce),u(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=c(`rue:list:start`),ue=c(`rue:list:end`);s(ce,le),s(ce,ue);let de=new Map;return o(()=>{de=C({items:k.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`focus-error-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:l,syncHeight:h,postTickHeight:y,layoutDecision:T,logLines:E,listRef:D}=S(`useSetup:0:0`,()=>g(()=>({modalOpen:S(`ref:1:0`,()=>a(!1)),syncHeight:S(`ref:1:1`,()=>a(`尚未打开`)),postTickHeight:S(`ref:1:2`,()=>a(`尚未测量`)),layoutDecision:S(`ref:1:3`,()=>a(`等待测量`)),logLines:S(`ref:1:4`,()=>a([...H])),listRef:S(`useRef:1:5`,()=>r())}))),O=async()=>{l.value=!0;let e=D.current?.scrollHeight??0;h.value=`${e}px`,y.value=`等待 flush...`,T.value=`等待布局完成...`,E.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await x();let t=D.current?.scrollHeight??0;y.value=`${t}px`,T.value=t>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,E.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${e}px`,`nextTick() 后列表高度：${t}px，${T.value}`]},k=()=>{l.value=!1,h.value=`尚未打开`,y.value=`尚未测量`,T.value=`等待测量`,E.value=[...H]};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let S=e(`div`,g);s(g,S),u(S,`flex flex-wrap gap-3`);let A=e(`button`,S);s(S,A),u(A,`btn btn-primary`),n(A,`click`,()=>void O()),s(A,d(`打开批量发送弹窗`));let j=e(`button`,S);s(S,j),u(j,`btn btn-ghost`),n(j,`click`,k),s(j,d(`关闭并重置`));let M=c(`rue:slot:anchor`);s(g,M),o(()=>{let n=l.value?f(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let a=e(`div`,r);s(r,a),u(a,`flex items-start justify-between gap-4`);let l=e(`div`,a);s(a,l);let p=e(`div`,l);s(l,p),u(p,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(p,d(`批量发送预览`));let h=e(`div`,l);s(l,h),u(h,`mt-2 text-2xl font-semibold`),s(h,d(`确认接收人列表`));let g=e(`div`,a);s(a,g),u(g,`badge badge-outline`);let y=c(`rue:slot:anchor`);s(g,y),o(()=>{let e=U.length;t(()=>v(e,g,y))}),s(g,d(` 人`));let b=e(`div`,r);s(r,b);let x=w(b,()=>D);_(()=>{x()}),u(b,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=c(`rue:list:start`),T=c(`rue:list:end`);s(b,S),s(b,T);let E=new Map;return o(()=>{E=C({items:U||[],getKey:(e,t)=>e.id,elements:E,parent:b,before:T,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,a,l,p)=>{v(f(()=>{let r=i(),a=e(`div`,r);s(r,a),o(()=>{m(a,`key`,String(n.id))}),u(a,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let l=e(`div`,a);s(a,l),u(l,`font-medium`);let f=c(`rue:slot:anchor`);s(l,f),o(()=>{let e=n.name;t(()=>v(e,l,f))});let p=e(`div`,a);s(a,p),u(p,`text-base-content/60`);let h=c(`rue:slot:anchor`);s(p,h),o(()=>{let e=n.team;t(()=>v(e,p,h))}),s(p,d(` · `));let g=c(`rue:slot:anchor`);return s(p,g),o(()=>{let e=n.region;t(()=>v(e,p,g))}),r}),r,a)}})}),n}):``;t(()=>v(n,g,M))});let N=e(`div`,g);s(g,N),u(N,`grid gap-4 md:grid-cols-3`);let P=e(`div`,N);s(N,P),u(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=e(`div`,P);s(P,F),u(F,`text-sm text-base-content/60`),s(F,d(`同步读取到的高度`));let I=e(`div`,P);s(P,I),u(I,`mt-2 font-mono text-xl`);let L=b(I);s(I,L),o(()=>{p(L,h.value)});let R=e(`div`,N);s(N,R),u(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=e(`div`,R);s(R,z),u(z,`text-sm text-base-content/60`),s(z,d(`await nextTick() 后高度`));let B=e(`div`,R);s(R,B),u(B,`mt-2 font-mono text-xl text-success`);let V=b(B);s(B,V),o(()=>{p(V,y.value)});let H=e(`div`,N);s(N,H),u(H,`rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`div`,H);s(H,W),u(W,`text-sm text-base-content/60`),s(W,d(`布局决策`));let G=e(`div`,H);s(H,G),u(G,`mt-2 text-sm leading-6 text-base-content/80`);let K=b(G);s(G,K),o(()=>{p(K,T.value)});let q=e(`div`,g);s(g,q),u(q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),u(J,`text-sm font-medium text-base-content/70`),s(J,d(`本轮步骤`));let Y=e(`ul`,q);s(q,Y),u(Y,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let X=c(`rue:list:start`),Z=c(`rue:list:end`);s(Y,X),s(Y,Z);let Q=new Map;return o(()=>{Q=C({items:E.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Q,parent:Y,before:Z,singleRoot:!0,start:X,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`modal-measure-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:l,syncHeight:h,postTickHeight:y,logLines:T,panelRef:E}=S(`useSetup:0:0`,()=>g(()=>({expanded:S(`ref:1:0`,()=>a(!1)),syncHeight:S(`ref:1:1`,()=>a(`尚未测量`)),postTickHeight:S(`ref:1:2`,()=>a(`尚未测量`)),logLines:S(`ref:1:3`,()=>a([...K])),panelRef:S(`useRef:1:4`,()=>r())}))),D=async()=>{l.value=!l.value;let e=l.value?`展开`:`收起`,t=E.current?.offsetHeight??0;h.value=`${t}px`,y.value=`等待 flush...`,T.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`等待 nextTick() 后重新测量...`],await x();let n=E.current?.offsetHeight??0;y.value=`${n}px`,T.value=[`详情区准备${e}`,`同步读取 offsetHeight：${t}px`,`nextTick() 后 offsetHeight：${n}px`]},O=()=>{l.value=!1,h.value=`尚未测量`,y.value=`尚未测量`,T.value=[...K]};return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let S=e(`div`,g);s(g,S);let k=w(S,()=>E);_(()=>{k()}),u(S,`rounded-box border border-base-300 bg-base-100 p-5`);let A=e(`div`,S);s(S,A),u(A,`flex items-center justify-between`);let j=e(`div`,A);s(A,j);let M=e(`div`,j);s(j,M),u(M,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(M,d(`订单详情卡片`));let N=e(`div`,j);s(j,N),u(N,`mt-2 text-2xl font-semibold`),s(N,d(`订单 #A1024`));let P=e(`div`,A);s(A,P),o(()=>{u(P,String(`badge ${l.value?`badge-primary`:`badge-outline`}`))});let F=b(P);s(P,F),o(()=>{p(F,l.value?`已展开`:`已收起`)});let I=e(`div`,S);s(S,I),u(I,`mt-5 grid gap-3 md:grid-cols-2`);let L=e(`div`,I);s(I,L),u(L,`rounded-box bg-base-200/60 p-3 text-sm`),s(L,d(`支付状态：已支付`));let R=e(`div`,I);s(I,R),u(R,`rounded-box bg-base-200/60 p-3 text-sm`),s(R,d(`配送方式：同城急送`));let z=e(`div`,I);s(I,z),u(z,`rounded-box bg-base-200/60 p-3 text-sm`),s(z,d(`仓库：上海 3 号仓`));let B=e(`div`,I);s(I,B),u(B,`rounded-box bg-base-200/60 p-3 text-sm`),s(B,d(`下单时间：09:20`));let V=c(`rue:slot:anchor`);s(I,V),o(()=>{let n=l.value?f(()=>{let t=i();s(t,d(` `));let n=e(`div`,t);s(t,n),u(n,`rounded-box bg-base-200/60 p-3 text-sm`),s(n,d(`发票状态：电子发票已开具`)),s(t,d(` `));let r=e(`div`,t);s(t,r),u(r,`rounded-box bg-base-200/60 p-3 text-sm`),s(r,d(`风控结果：人工审核已通过`)),s(t,d(` `));let a=e(`div`,t);s(t,a),u(a,`rounded-box bg-base-200/60 p-3 text-sm`),s(a,d(`配送备注：优先联系收货人本人`)),s(t,d(` `));let o=e(`div`,t);return s(t,o),u(o,`rounded-box bg-base-200/60 p-3 text-sm`),s(o,d(`售后状态：暂无售后单`)),s(t,d(` `)),t}):``;t(()=>v(n,I,V))});let H=e(`div`,g);s(g,H),u(H,`flex flex-wrap gap-3`);let U=e(`button`,H);s(H,U),u(U,`btn btn-primary`),n(U,`click`,()=>void D());let W=b(U);s(U,W),o(()=>{p(W,l.value?`收起详情区并测量`:`展开详情区并测量`)});let G=e(`button`,H);s(H,G),u(G,`btn btn-ghost`),n(G,`click`,O),s(G,d(`重置`));let K=e(`div`,g);s(g,K),u(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);s(K,q),u(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),u(J,`text-sm text-base-content/60`),s(J,d(`同步读取到的高度`));let Y=e(`div`,q);s(q,Y),u(Y,`mt-2 font-mono text-2xl`);let X=b(Y);s(Y,X),o(()=>{p(X,h.value)});let Z=e(`div`,K);s(K,Z),u(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=e(`div`,Z);s(Z,Q),u(Q,`text-sm text-base-content/60`),s(Q,d(`await nextTick() 后高度`));let ee=e(`div`,Z);s(Z,ee),u(ee,`mt-2 font-mono text-2xl text-success`);let te=b(ee);s(ee,te),o(()=>{p(te,y.value)});let ne=e(`div`,g);s(g,ne),u(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=e(`div`,ne);s(ne,$),u($,`text-sm font-medium text-base-content/70`),s($,d(`本轮步骤`));let re=e(`ul`,ne);s(ne,re),u(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=c(`rue:list:start`),ae=c(`rue:list:end`);s(re,ie),s(re,ae);let oe=new Map;return o(()=>{oe=C({items:T.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`panel-measure-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),ee=()=>{let{activeStatus:l,syncTarget:h,postTickTarget:y,logLines:T,viewportRef:E}=S(`useSetup:0:0`,()=>g(()=>({activeStatus:S(`ref:1:0`,()=>a(`all`)),syncTarget:S(`ref:1:1`,()=>a(`尚未筛选`)),postTickTarget:S(`ref:1:2`,()=>a(`尚未定位`)),logLines:S(`ref:1:3`,()=>a([...Y])),viewportRef:S(`useRef:1:4`,()=>r())}))),D=async e=>{l.value=e,h.value=(E.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,y.value=`等待 flush...`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${h.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await x();let t=E.current?.querySelector(`[data-first-visible="true"]`);t?.scrollIntoView({block:`nearest`}),y.value=t?.getAttribute(`data-order-no`)??`当前筛选没有结果`,T.value=[`筛选条件切换为：${X[e]}`,`同步读取首条结果：${h.value}`,`nextTick() 后首条结果：${y.value}，并已滚动到可视区域`]},O=()=>{l.value=`all`,h.value=`尚未筛选`,y.value=`尚未定位`,T.value=[...Y],E.current&&(E.current.scrollTop=0)},k=Q(l.value);return f(r=>{let a=e(`div`,r);u(a,`card bg-base-100 shadow`);let g=e(`div`,a);s(a,g),u(g,`card-body gap-5`);let x=e(`p`,g);s(g,x),u(x,`text-base-content/70 leading-7`),s(x,d(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=e(`div`,g);s(g,S),u(S,`flex flex-wrap gap-2`);let A=c(`rue:list:start`),j=c(`rue:list:end`);s(S,A),s(S,j);let M=new Map;o(()=>{M=C({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:M,parent:S,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(r,a,d,p,h)=>{v(f(()=>{let a=i(),d=e(`button`,a);s(a,d),o(()=>{m(d,`key`,String(r))}),o(()=>{u(d,String(`btn btn-sm ${l.value===r?`btn-primary`:`btn-ghost`}`))}),n(d,`click`,()=>void D(r));let f=c(`rue:slot:anchor`);return s(d,f),o(()=>{let e=X[r];t(()=>v(e,d,f))}),a}),a,d)}})});let N=e(`button`,S);s(S,N),u(N,`btn btn-sm btn-outline`),n(N,`click`,O),s(N,d(`重置`));let P=e(`div`,g);s(g,P);let F=w(P,()=>E);_(()=>{F()}),u(P,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let I=e(`table`,P);s(P,I),u(I,`table table-pin-rows table-sm`);let L=e(`thead`,I);s(I,L);let R=e(`tr`,L);s(L,R);let z=e(`th`,R);s(R,z),s(z,d(`订单号`));let B=e(`th`,R);s(R,B),s(B,d(`客户`));let V=e(`th`,R);s(R,V),s(V,d(`状态`));let H=e(`th`,R);s(R,H),s(H,d(`金额`));let U=e(`th`,R);s(R,U),s(U,d(`备注`));let W=e(`tbody`,I);s(I,W);let G=c(`rue:slot:anchor`);s(W,G),o(()=>{let n=k.length>0?f(()=>{let n=i(),r=c(`rue:list:start`),a=c(`rue:list:end`);s(n,r),s(n,a);let l=new Map;return o(()=>{l=C({items:k||[],getKey:(e,t)=>e.id,elements:l,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(n,r,a,l,d)=>{v(f(()=>{let r=i(),a=e(`tr`,r);s(r,a),o(()=>{m(a,`key`,String(n.id))}),o(()=>{m(a,`data-first-visible`,String(d===0?`true`:`false`))}),o(()=>{m(a,`data-order-no`,String(n.orderNo))});let l=e(`td`,a);s(a,l),u(l,`font-medium`);let f=c(`rue:slot:anchor`);s(l,f),o(()=>{let e=n.orderNo;t(()=>v(e,l,f))});let p=e(`td`,a);s(a,p);let h=c(`rue:slot:anchor`);s(p,h),o(()=>{let e=n.customer;t(()=>v(e,p,h))});let g=e(`td`,a);s(a,g);let _=e(`span`,g);s(g,_),u(_,`badge badge-outline`);let y=c(`rue:slot:anchor`);s(_,y),o(()=>{let e=X[n.status];t(()=>v(e,_,y))});let b=e(`td`,a);s(a,b);let x=c(`rue:slot:anchor`);s(b,x),o(()=>{let e=n.amount;t(()=>v(e,b,x))});let S=e(`td`,a);s(a,S),u(S,`text-base-content/60`);let C=c(`rue:slot:anchor`);return s(S,C),o(()=>{let e=n.note;t(()=>v(e,S,C))}),r}),r,a)}})}),n}):f(()=>{let t=i(),n=e(`tr`,t);s(t,n);let r=e(`td`,n);return s(n,r),m(r,`colSpan`,`5`),u(r,`py-8 text-center text-base-content/60`),s(r,d(`当前筛选没有结果`)),t});t(()=>v(n,W,G))});let K=e(`div`,g);s(g,K),u(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);s(K,q),u(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=e(`div`,q);s(q,J),u(J,`text-sm text-base-content/60`),s(J,d(`同步读取到的首条结果`));let Y=e(`div`,q);s(q,Y),u(Y,`mt-2 font-mono text-2xl`);let Z=b(Y);s(Y,Z),o(()=>{p(Z,h.value)});let Q=e(`div`,K);s(K,Q),u(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=e(`div`,Q);s(Q,ee),u(ee,`text-sm text-base-content/60`),s(ee,d(`await nextTick() 后定位到`));let te=e(`div`,Q);s(Q,te),u(te,`mt-2 font-mono text-2xl text-success`);let ne=b(te);s(te,ne),o(()=>{p(ne,y.value)});let $=e(`div`,g);s(g,$),u($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=e(`div`,$);s($,re),u(re,`text-sm font-medium text-base-content/70`),s(re,d(`本轮步骤`));let ie=e(`ul`,$);s($,ie),u(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=c(`rue:list:start`),oe=c(`rue:list:end`);s(ie,ae),s(ie,oe);let se=new Map;return o(()=>{se=C({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`li`,n);s(n,r),o(()=>{m(r,`key`,String(`table-filter-log-${c}`))});let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})}),a})},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
`,ne=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],$=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:te,Demo:ee},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],re=n=>{let{Demo:r}=S(`useSetup:0:0`,()=>g(()=>({Demo:n.scenario.Demo})));return f(a=>{let l=e(`section`,a);u(l,`rounded-box border border-base-300 bg-base-100 p-5`);let d=e(`div`,l);s(l,d),u(d,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let h=c(`rue:slot:anchor`);s(d,h),o(()=>{let e=n.eyebrow;t(()=>v(e,d,h))});let g=e(`div`,l);s(l,g),u(g,`mt-2 text-2xl font-semibold`);let _=c(`rue:slot:anchor`);s(g,_),o(()=>{let e=n.scenario.title;t(()=>v(e,g,_))});let x=e(`p`,l);s(l,x),u(x,`mt-2 text-base-content/70 leading-7`);let S=c(`rue:slot:anchor`);s(x,S),o(()=>{let e=n.scenario.summary;t(()=>v(e,x,S))});let w=e(`div`,l);s(l,w),u(w,`mt-4 flex flex-wrap gap-2`);let E=c(`rue:list:start`),D=c(`rue:list:end`);s(w,E),s(w,D);let O=new Map;o(()=>{O=C({items:n.scenario.businessCases||[],getKey:(e,t)=>e,elements:O,parent:w,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,n,r,a,c)=>{v(f(()=>{let n=i(),r=e(`span`,n);s(n,r),o(()=>{m(r,`key`,String(t))}),u(r,`badge badge-outline`);let a=b(r);return s(r,a),o(()=>{p(a,t)}),n}),n,r)}})});let k=e(`div`,l);s(l,k),u(k,`mt-4`);let A=c(`rue:slot:anchor`);return s(k,A),o(()=>{let a=n.activeTab.value===`preview`?f(()=>{let e=i(),t=c(`rue:component:anchor`);return s(e,t),v(y(r,{}),e,t),e}):f(()=>{let r=i(),a=e(`div`,r);s(r,a),u(a,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,a);s(a,l),u(l,`card-body p-0`);let d=c(`rue:component:anchor`);return s(l,d),o(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:n.scenario.source});t(()=>v(e,l,d))}),r});t(()=>v(a,k,A))}),l})},ie=()=>{let{activeTab:t}=S(`useSetup:0:0:dup1`,()=>g(()=>({activeTab:S(`ref:1:0`,()=>a(`preview`))})));return f(r=>{let a=i(),p=c(`rue:component:anchor`);return s(a,p),v(y(E,{children:f(()=>{let r=i(),a=e(`h1`,r);s(r,a),u(a,`text-5xl font-semibold mb-4 md:mb-4`),s(a,d(`nextTick 真实业务场景`));let f=e(`p`,r);s(r,f),u(f,`max-w-4xl text-base-content/70 leading-7`),s(f,d(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let p=e(`div`,r);s(r,p),m(p,`role`,`tablist`),u(p,`tabs tabs-box mt-6`);let h=e(`button`,p);s(p,h),m(h,`role`,`tab`),o(()=>{u(h,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(h,`click`,()=>{t.value=`preview`}),s(h,d(`效果`));let g=e(`button`,p);s(p,g),m(g,`role`,`tab`),o(()=>{u(g,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(g,`click`,()=>{t.value=`code`}),s(g,d(`代码`));let _=e(`div`,r);s(r,_),u(_,`mt-4 grid gap-6`);let v=c(`rue:list:start`),b=c(`rue:list:end`);s(_,v),s(_,b);let x=new Map;o(()=>{x=C({items:ne||[],getKey:(e,t)=>e.title,elements:x,parent:_,before:b,start:v,renderItem:(e,n,r,i,a)=>{l(y(re,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:t}),n,r,i)}})});let S=e(`section`,_);s(_,S),u(S,`rounded-box border border-base-300 bg-base-100 p-5`);let w=e(`div`,S);s(S,w),u(w,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(w,d(`新增业务 demo`));let T=e(`div`,S);s(S,T),u(T,`mt-2 text-2xl font-semibold`),s(T,d(`真实业务里 nextTick 怎么用`));let E=e(`p`,S);s(S,E),u(E,`mt-2 text-base-content/70 leading-7`),s(E,d(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let D=c(`rue:list:start`),O=c(`rue:list:end`);s(_,D),s(_,O);let k=new Map;return o(()=>{k=C({items:$||[],getKey:(e,t)=>e.title,elements:k,parent:_,before:O,start:D,renderItem:(e,n,r,i,a)=>{l(y(re,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:t}),n,r,i)}})}),r})}),a,p),a})};export{ie as default};