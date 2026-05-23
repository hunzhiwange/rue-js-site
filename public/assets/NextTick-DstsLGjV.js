import{$ as e,Et as t,G as n,H as r,J as i,K as a,Tt as o,V as s,W as c,_t as l,d as u,i as d,kt as f,l as p,mt as m,ot as h,q as g,st as _,t as v,tt as y,u as b,xt as x}from"./vapor-runtime-BAZOdMd8.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as T}from"./Code-DY4Ua5uc.js";import{t as E}from"./SidebarPlaygroundExample-B8LFNSBu.js";var D=[`1. 追加一条新的订单通知`,`2. 同步读取列表 scrollHeight 并尝试滚动`,`3. await nextTick() 后再读取高度并滚到底部`],O=()=>[{id:1,text:`09:20 新订单 #A1024 已创建`},{id:2,text:`09:21 支付回调已确认`},{id:3,text:`09:22 仓库开始拣货`},{id:4,text:`09:23 配送单已推送`}],k=()=>{let{messages:h,syncHeight:v,flushedHeight:b,logLines:T,listRef:E,appendMessage:k,reset:A}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(O())),t=S(`ref:1:1`,()=>l(`尚未追加`)),n=S(`ref:1:2`,()=>l(`尚未追加`)),r=S(`ref:1:3`,()=>l([...D])),i=S(`useRef:1:4`,()=>o());return{messages:e,syncHeight:t,flushedHeight:n,logLines:r,listRef:i,appendMessage:async()=>{let a=e.value.length+1,o=String(19+a).padStart(2,`0`);e.value=[...e.value,{id:a,text:`09:${o} 订单 #A10${20+a} 已完成支付`}];let s=i.current?.scrollHeight??0;t.value=`${s}px（旧高度）`,n.value=`等待 flush...`,r.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`等待 nextTick() 后重新计算高度...`],i.current&&(i.current.scrollTop=s),await m();let c=i.current?.scrollHeight??0;i.current&&(i.current.scrollTop=c),n.value=`${c}px（已包含新消息）`,r.value=[`消息数已变为 ${e.value.length}`,`同步读取 scrollHeight：${s}px`,`nextTick() 后 scrollHeight：${c}px，并已滚动到底部`]},reset:()=>{e.value=O(),t.value=`尚未追加`,n.value=`尚未追加`,r.value=[...D],i.current&&(i.current.scrollTop=0)}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。`));let S=a(`div`,l);r(l,S),y(S,`rounded-box border border-base-300 bg-base-100`);let D=a(`div`,S);r(S,D),y(D,`flex items-center justify-between border-b border-base-300 px-4 py-3`);let O=a(`div`,D);r(D,O),y(O,`text-sm font-medium text-base-content/70`),r(O,g(`订单通知流`));let j=a(`div`,D);r(D,j),y(j,`badge badge-outline`);let M=c(`rue:slot:anchor`);r(j,M),f(()=>{let e=h.value.length;x(()=>p(e,j,M))}),r(j,g(` 条消息`));let N=a(`div`,S);r(S,N);let P=w(N,()=>E);d(()=>{P()}),y(N,`max-h-56 space-y-3 overflow-y-auto px-4 py-4`);let F=c(`rue:list:start`),I=c(`rue:list:end`);r(N,F),r(N,I);let L=new Map;f(()=>{L=C({items:h.value||[],getKey:(e,t)=>e.id,elements:L,parent:N,before:I,singleRoot:!0,trackIndex:!1,start:F,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`div`,i);r(i,o),f(()=>{e(o,`key`,String(t.id))}),y(o,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let s=c(`rue:slot:anchor`);return r(o,s),f(()=>{let e=t.text;x(()=>p(e,o,s))}),i}),i,o)}})});let R=a(`div`,l);r(l,R),y(R,`flex flex-wrap gap-3`);let z=a(`button`,R);r(R,z),y(z,`btn btn-primary`),s(z,`click`,()=>void k()),r(z,g(`追加通知并滚动到底部`));let B=a(`button`,R);r(R,B),y(B,`btn btn-ghost`),s(B,`click`,A),r(B,g(`重置`));let V=a(`div`,l);r(l,V),y(V,`grid gap-4 md:grid-cols-2`);let H=a(`div`,V);r(V,H),y(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=a(`div`,H);r(H,U),y(U,`text-sm text-base-content/60`),r(U,g(`同步读取到的 scrollHeight`));let W=a(`div`,H);r(H,W),y(W,`mt-2 font-mono text-2xl`);let G=i(W);r(W,G),f(()=>{_(G,v.value)});let K=a(`div`,V);r(V,K),y(K,`rounded-box border border-base-300 bg-base-100 p-4`);let q=a(`div`,K);r(K,q),y(q,`text-sm text-base-content/60`),r(q,g(`await nextTick() 后的高度`));let J=a(`div`,K);r(K,J),y(J,`mt-2 font-mono text-2xl text-success`);let Y=i(J);r(J,Y),f(()=>{_(Y,b.value)});let X=a(`div`,l);r(l,X),y(X,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let Z=a(`div`,X);r(X,Z),y(Z,`text-sm font-medium text-base-content/70`),r(Z,g(`本轮步骤`));let Q=a(`ul`,X);r(X,Q),y(Q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ee=c(`rue:list:start`),te=c(`rue:list:end`);r(Q,ee),r(Q,te);let ne=new Map;return f(()=>{ne=C({items:T.value||[],getKey:(e,t)=>`chat-scroll-log-${t}`,elements:ne,parent:Q,before:te,singleRoot:!0,start:ee,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`chat-scroll-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},A=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
          聊天窗口、订单轨迹、告警流常见的需求是“新增一条后自动滚到底部”。如果同步读取 scrollHeight，拿到的还是旧值，因此要等 nextTick() 之后再滚动。
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

export default ChatScrollDemo`,j=[`1. 点击按钮后先执行 count.value += 1`,`2. 紧接着读取当前 span.textContent`,`3. await nextTick() 后再读取一次 DOM`],M=()=>{let{count:h,beforeDomText:v,afterDomText:b,logLines:x,counterRef:T,inspectUpdate:E,reset:D}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(0)),t=S(`ref:1:1`,()=>l(`尚未读取`)),n=S(`ref:1:2`,()=>l(`尚未读取`)),r=S(`ref:1:3`,()=>l([...j])),i=S(`useRef:1:4`,()=>o());return{count:e,beforeDomText:t,afterDomText:n,logLines:r,counterRef:i,inspectUpdate:async()=>{e.value+=1;let a=i.current?.textContent??`(missing)`;t.value=a,n.value=`等待 flush...`,r.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${a}`,`等待 nextTick() 完成...`],await m();let o=i.current?.textContent??`(missing)`;n.value=o,r.value=[`状态值已经改为 ${e.value}`,`同步读取 DOM：${a}`,`nextTick() 后读取 DOM：${o}`]},reset:()=>{e.value=0,t.value=`尚未读取`,n.value=`尚未读取`,r.value=[...j]}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。`));let S=a(`div`,l);r(l,S),y(S,`rounded-box border border-base-300 bg-base-200/40 p-5`);let O=a(`div`,S);r(S,O),y(O,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(O,g(`当前 DOM 文本`));let k=a(`div`,S);r(S,k),y(k,`mt-3 text-4xl font-semibold text-primary`);let A=a(`span`,k);r(k,A);let j=w(A,()=>T);d(()=>{j()});let M=i(A);r(A,M),f(()=>{_(M,h.value)});let N=a(`div`,l);r(l,N),y(N,`flex flex-wrap gap-3`);let P=a(`button`,N);r(N,P),y(P,`btn btn-primary`),s(P,`click`,()=>void E()),r(P,g(`自增并读取 DOM`));let F=a(`button`,N);r(N,F),y(F,`btn btn-ghost`),s(F,`click`,D),r(F,g(`重置`));let I=a(`div`,l);r(l,I),y(I,`grid gap-4 md:grid-cols-2`);let L=a(`div`,I);r(I,L),y(L,`rounded-box border border-base-300 bg-base-100 p-4`);let R=a(`div`,L);r(L,R),y(R,`text-sm text-base-content/60`),r(R,g(`同步读取到的 DOM 文本`));let z=a(`div`,L);r(L,z),y(z,`mt-2 font-mono text-2xl`);let B=i(z);r(z,B),f(()=>{_(B,v.value)});let V=a(`div`,I);r(I,V),y(V,`rounded-box border border-base-300 bg-base-100 p-4`);let H=a(`div`,V);r(V,H),y(H,`text-sm text-base-content/60`),r(H,g(`await nextTick() 后读取`));let U=a(`div`,V);r(V,U),y(U,`mt-2 font-mono text-2xl text-success`);let W=i(U);r(U,W),f(()=>{_(W,b.value)});let G=a(`div`,l);r(l,G),y(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let K=a(`div`,G);r(G,K),y(K,`text-sm font-medium text-base-content/70`),r(K,g(`本轮步骤`));let q=a(`ul`,G);r(G,q),y(q,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let J=c(`rue:list:start`),Y=c(`rue:list:end`);r(q,J),r(q,Y);let X=new Map;return f(()=>{X=C({items:x.value||[],getKey:(e,t)=>`dom-read-log-${t}`,elements:X,parent:q,before:Y,singleRoot:!0,start:J,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`dom-read-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},N=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
          这是最基础的版本：先改响应式状态，再分别在同步阶段和 nextTick() 之后读取 DOM 文本，能直接看到同一轮刷新前后的差异。
        </p>

        <div className="rounded-box border border-base-300 bg-base-200/40 p-5">
          <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">当前 DOM 文本</div>
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

export default DomReadDemo`,P=[`1. 打开高级筛选面板`,`2. 同步阶段输入框还没有挂载完成`,`3. await nextTick() 后聚焦关键字输入框`],F=()=>{let{panelOpen:v,keyword:b,syncState:T,postTickState:E,logLines:D,inputRef:O,openPanel:k,closePanel:A}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(!1)),t=S(`ref:1:1`,()=>l(``)),n=S(`ref:1:2`,()=>l(`尚未打开`)),r=S(`ref:1:3`,()=>l(`尚未聚焦`)),i=S(`ref:1:4`,()=>l([...P])),a=S(`useRef:1:5`,()=>o());return{panelOpen:e,keyword:t,syncState:n,postTickState:r,logLines:i,inputRef:a,openPanel:async()=>{e.value=!0,n.value=a.current?`同步阶段输入框已存在`:`同步阶段输入框尚未挂载`,r.value=`等待 flush...`,i.value=[`筛选面板状态已切到打开`,n.value,`等待 nextTick() 后执行 focus()`],await m(),a.current?.focus(),r.value=globalThis.document?.activeElement===a.current?`nextTick() 后已聚焦关键字输入框`:`输入框已挂载，但未成功聚焦`,i.value=[`筛选面板状态已切到打开`,n.value,r.value]},closePanel:()=>{e.value=!1,t.value=``,n.value=`尚未打开`,r.value=`尚未聚焦`,i.value=[...P]}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。`));let S=a(`div`,l);r(l,S),y(S,`flex flex-wrap gap-3`);let j=a(`button`,S);r(S,j),y(j,`btn btn-primary`),s(j,`click`,()=>void k()),r(j,g(`打开高级筛选`));let M=a(`button`,S);r(S,M),y(M,`btn btn-ghost`),s(M,`click`,A),r(M,g(`关闭并重置`));let N=c(`rue:slot:anchor`);r(l,N),f(()=>{let t=v.value?u(()=>{let t=n(),i=a(`div`,t);r(t,i),y(i,`rounded-box border border-base-300 bg-base-100 p-5`);let o=a(`div`,i);r(i,o),y(o,`grid gap-4 md:grid-cols-2`);let c=a(`label`,o);r(o,c),y(c,`block`);let l=a(`div`,c);r(c,l),y(l,`text-sm text-base-content/60`),r(l,g(`关键词`));let u=a(`input`,c);r(c,u);let p=w(u,()=>O);d(()=>{p()}),y(u,`input input-bordered mt-2 w-full`),f(()=>{h(u,b.value)}),e(u,`placeholder`,`订单号 / 用户名 / 手机号`),s(u,`input`,e=>{b.value=e.target.value});let m=a(`label`,o);r(o,m),y(m,`block`);let _=a(`div`,m);r(m,_),y(_,`text-sm text-base-content/60`),r(_,g(`订单状态`));let v=a(`select`,m);r(m,v),y(v,`select select-bordered mt-2 w-full`);let x=a(`option`,v);r(v,x),r(x,g(`全部`));let S=a(`option`,v);r(v,S),r(S,g(`待支付`));let C=a(`option`,v);r(v,C),r(C,g(`待发货`));let T=a(`option`,v);return r(v,T),r(T,g(`已完成`)),t}):``;x(()=>p(t,l,N))});let P=a(`div`,l);r(l,P),y(P,`grid gap-4 md:grid-cols-2`);let F=a(`div`,P);r(P,F),y(F,`rounded-box border border-base-300 bg-base-100 p-4`);let I=a(`div`,F);r(F,I),y(I,`text-sm text-base-content/60`),r(I,g(`同步阶段状态`));let L=a(`div`,F);r(F,L),y(L,`mt-2 font-mono text-xl`);let R=i(L);r(L,R),f(()=>{_(R,T.value)});let z=a(`div`,P);r(P,z),y(z,`rounded-box border border-base-300 bg-base-100 p-4`);let B=a(`div`,z);r(z,B),y(B,`text-sm text-base-content/60`),r(B,g(`await nextTick() 后状态`));let V=a(`div`,z);r(z,V),y(V,`mt-2 font-mono text-xl text-success`);let H=i(V);r(V,H),f(()=>{_(H,E.value)});let U=a(`div`,l);r(l,U),y(U,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let W=a(`div`,U);r(U,W),y(W,`text-sm font-medium text-base-content/70`),r(W,g(`本轮步骤`));let G=a(`ul`,U);r(U,G),y(G,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let K=c(`rue:list:start`),q=c(`rue:list:end`);r(G,K),r(G,q);let J=new Map;return f(()=>{J=C({items:D.value||[],getKey:(e,t)=>`filter-focus-log-${t}`,elements:J,parent:G,before:q,singleRoot:!0,start:K,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`filter-focus-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},I=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
    logLines.value = [
      '筛选面板状态已切到打开',
      syncState.value,
      '等待 nextTick() 后执行 focus()',
    ]

    await nextTick()

    inputRef.current?.focus()
    const focused = globalThis.document?.activeElement === inputRef.current
    postTickState.value = focused ? 'nextTick() 后已聚焦关键字输入框' : '输入框已挂载，但未成功聚焦'
    logLines.value = [
      '筛选面板状态已切到打开',
      syncState.value,
      postTickState.value,
    ]
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
          搜索弹层、抽屉、筛选面板在打开后往往需要马上聚焦第一个输入框。问题在于输入框是在本轮更新里新挂载的，所以必须等 nextTick() 之后再调用 focus()。
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

export default FilterFocusDemo`,L=[`1. 点击提交后先更新错误状态`,`2. 同步阶段还拿不到新的首个错误字段`,`3. await nextTick() 后再 focus 首个错误输入框`],R={receiver:`联系人`,phone:`手机号`,email:`邮箱`},z=()=>({receiver:``,phone:``,email:``}),B=()=>{let{receiver:v,phone:b,email:T,errors:E,syncField:D,postTickField:O,logLines:k,formRef:A,validate:j,submit:M,fillValidData:N,reset:P}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(``)),t=S(`ref:1:1`,()=>l(``)),n=S(`ref:1:2`,()=>l(``)),r=S(`ref:1:3`,()=>l(z())),i=S(`ref:1:4`,()=>l(`尚未提交`)),a=S(`ref:1:5`,()=>l(`尚未聚焦`)),s=S(`ref:1:6`,()=>l([...L])),c=S(`useRef:1:7`,()=>o()),u=()=>({receiver:e.value.trim()?``:`请输入联系人姓名`,phone:/^1\d{10}$/.test(t.value)?``:`请输入 11 位手机号`,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?``:`请输入有效邮箱`});return{receiver:e,phone:t,email:n,errors:r,syncField:i,postTickField:a,logLines:s,formRef:c,validate:u,submit:async()=>{let e=u(),t=Object.values(e).filter(Boolean).length;r.value=e;let n=c.current?.querySelector(`[data-invalid="true"]`);i.value=n?.name?`${R[n.name]}（同步阶段）`:`同步阶段还没有错误字段`,a.value=`等待 flush...`,s.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${i.value}`,`等待 nextTick() 后自动聚焦首个错误输入框...`],await m();let o=c.current?.querySelector(`[data-invalid="true"]`);o?.focus(),a.value=o?.name?`${R[o.name]} 已自动聚焦`:`校验通过，无需聚焦`,s.value=[`本次提交发现 ${t} 个字段错误`,`同步读取首个错误字段：${i.value}`,a.value]},fillValidData:()=>{e.value=`李四`,t.value=`13800001111`,n.value=`li.si@example.com`,r.value=z(),i.value=`已填入合法示例`,a.value=`再次点击提交可观察通过路径`,s.value=[`已填入一组合法数据`,`当前没有错误字段需要聚焦`,`再次点击提交会直接走校验通过路径`]},reset:()=>{e.value=``,t.value=``,n.value=``,r.value=z(),i.value=`尚未提交`,a.value=`尚未聚焦`,s.value=[...L]}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。`));let S=a(`div`,l);r(l,S);let j=w(S,()=>A);d(()=>{j()}),y(S,`grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3`);let F=a(`label`,S);r(S,F),y(F,`block`);let I=a(`div`,F);r(F,I),y(I,`text-sm text-base-content/60`),r(I,g(`联系人`));let L=a(`input`,F);r(F,L),e(L,`name`,`receiver`),f(()=>{e(L,`data-invalid`,String(E.value.receiver?`true`:`false`))}),f(()=>{y(L,String(`input input-bordered mt-2 w-full ${E.value.receiver?`input-error`:``}`.trim()))}),f(()=>{h(L,v.value)}),e(L,`placeholder`,`请输入联系人`),s(L,`input`,e=>{v.value=e.target.value});let R=c(`rue:slot:anchor`);r(F,R),f(()=>{let e=E.value.receiver?u(()=>{let e=n(),t=a(`div`,e);r(e,t),y(t,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(t,i),f(()=>{let e=E.value.receiver;x(()=>p(e,t,i))}),e}):``;x(()=>p(e,F,R))});let z=a(`label`,S);r(S,z),y(z,`block`);let B=a(`div`,z);r(z,B),y(B,`text-sm text-base-content/60`),r(B,g(`手机号`));let V=a(`input`,z);r(z,V),e(V,`name`,`phone`),f(()=>{e(V,`data-invalid`,String(E.value.phone?`true`:`false`))}),f(()=>{y(V,String(`input input-bordered mt-2 w-full ${E.value.phone?`input-error`:``}`.trim()))}),f(()=>{h(V,b.value)}),e(V,`placeholder`,`请输入 11 位手机号`),s(V,`input`,e=>{b.value=e.target.value});let H=c(`rue:slot:anchor`);r(z,H),f(()=>{let e=E.value.phone?u(()=>{let e=n(),t=a(`div`,e);r(e,t),y(t,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(t,i),f(()=>{let e=E.value.phone;x(()=>p(e,t,i))}),e}):``;x(()=>p(e,z,H))});let U=a(`label`,S);r(S,U),y(U,`block`);let W=a(`div`,U);r(U,W),y(W,`text-sm text-base-content/60`),r(W,g(`邮箱`));let G=a(`input`,U);r(U,G),e(G,`name`,`email`),f(()=>{e(G,`data-invalid`,String(E.value.email?`true`:`false`))}),f(()=>{y(G,String(`input input-bordered mt-2 w-full ${E.value.email?`input-error`:``}`.trim()))}),f(()=>{h(G,T.value)}),e(G,`placeholder`,`请输入邮箱`),s(G,`input`,e=>{T.value=e.target.value});let K=c(`rue:slot:anchor`);r(U,K),f(()=>{let e=E.value.email?u(()=>{let e=n(),t=a(`div`,e);r(e,t),y(t,`mt-2 text-sm text-error`);let i=c(`rue:slot:anchor`);return r(t,i),f(()=>{let e=E.value.email;x(()=>p(e,t,i))}),e}):``;x(()=>p(e,U,K))});let q=a(`div`,l);r(l,q),y(q,`flex flex-wrap gap-3`);let J=a(`button`,q);r(q,J),y(J,`btn btn-primary`),s(J,`click`,()=>void M()),r(J,g(`提交并定位错误字段`));let Y=a(`button`,q);r(q,Y),y(Y,`btn btn-outline`),s(Y,`click`,N),r(Y,g(`填入合法示例`));let X=a(`button`,q);r(q,X),y(X,`btn btn-ghost`),s(X,`click`,P),r(X,g(`重置`));let Z=a(`div`,l);r(l,Z),y(Z,`grid gap-4 md:grid-cols-2`);let Q=a(`div`,Z);r(Z,Q),y(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=a(`div`,Q);r(Q,ee),y(ee,`text-sm text-base-content/60`),r(ee,g(`同步阶段识别到的字段`));let te=a(`div`,Q);r(Q,te),y(te,`mt-2 font-mono text-xl`);let ne=i(te);r(te,ne),f(()=>{_(ne,D.value)});let $=a(`div`,Z);r(Z,$),y($,`rounded-box border border-base-300 bg-base-100 p-4`);let re=a(`div`,$);r($,re),y(re,`text-sm text-base-content/60`),r(re,g(`await nextTick() 后结果`));let ie=a(`div`,$);r($,ie),y(ie,`mt-2 font-mono text-xl text-success`);let ae=i(ie);r(ie,ae),f(()=>{_(ae,O.value)});let oe=a(`div`,l);r(l,oe),y(oe,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let se=a(`div`,oe);r(oe,se),y(se,`text-sm font-medium text-base-content/70`),r(se,g(`本轮步骤`));let ce=a(`ul`,oe);r(oe,ce),y(ce,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let le=c(`rue:list:start`),ue=c(`rue:list:end`);r(ce,le),r(ce,ue);let de=new Map;return f(()=>{de=C({items:k.value||[],getKey:(e,t)=>`focus-error-log-${t}`,elements:de,parent:ce,before:ue,singleRoot:!0,start:le,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`focus-error-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},V=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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

    const syncInvalid = formRef.current?.querySelector('[data-invalid="true"]') as HTMLInputElement | null
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

    const firstInvalid = formRef.current?.querySelector('[data-invalid="true"]') as HTMLInputElement | null
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
          表单提交通常要在渲染出错误提示后，把焦点移动到第一个错误字段，方便用户立刻修正。错误样式和提示文案同样属于本轮更新，所以要等 nextTick() 之后再 focus。
        </p>

        <div ref={formRef} className="grid gap-4 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-3">
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
            {errors.value.phone && <div className="mt-2 text-sm text-error">{errors.value.phone}</div>}
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
            {errors.value.email && <div className="mt-2 text-sm text-error">{errors.value.email}</div>}
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

export default FocusErrorFieldDemo`,H=[`1. 打开批量发送弹窗`,`2. 同步阶段列表容器还没真正挂载完成`,`3. await nextTick() 后再测量列表高度决定布局策略`],U=[{id:1,name:`李婷`,team:`华东销售`,region:`上海`},{id:2,name:`周扬`,team:`华东销售`,region:`杭州`},{id:3,name:`张一鸣`,team:`华南渠道`,region:`深圳`},{id:4,name:`赵琪`,team:`华南渠道`,region:`广州`},{id:5,name:`孙旭`,team:`风控运营`,region:`北京`},{id:6,name:`陈尧`,team:`风控运营`,region:`天津`},{id:7,name:`王蔓`,team:`售后支持`,region:`苏州`},{id:8,name:`杨柳`,team:`售后支持`,region:`南京`},{id:9,name:`蒋可`,team:`仓储计划`,region:`武汉`},{id:10,name:`高晴`,team:`仓储计划`,region:`成都`}],W=()=>{let{modalOpen:h,syncHeight:v,postTickHeight:b,layoutDecision:T,logLines:E,listRef:D,openModal:O,closeModal:k}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(!1)),t=S(`ref:1:1`,()=>l(`尚未打开`)),n=S(`ref:1:2`,()=>l(`尚未测量`)),r=S(`ref:1:3`,()=>l(`等待测量`)),i=S(`ref:1:4`,()=>l([...H])),a=S(`useRef:1:5`,()=>o());return{modalOpen:e,syncHeight:t,postTickHeight:n,layoutDecision:r,logLines:i,listRef:a,openModal:async()=>{e.value=!0;let o=a.current?.scrollHeight??0;t.value=`${o}px`,n.value=`等待 flush...`,r.value=`等待布局完成...`,i.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${o}px`,`等待 nextTick() 后决定是否启用内部滚动...`],await m();let s=a.current?.scrollHeight??0;n.value=`${s}px`,r.value=s>280?`列表超过阈值，建议固定 320px 高度并启用内部滚动`:`列表高度可控，可以直接完整展示`,i.value=[`弹窗准备渲染 ${U.length} 个接收人`,`同步读取列表高度：${o}px`,`nextTick() 后列表高度：${s}px，${r.value}`]},closeModal:()=>{e.value=!1,t.value=`尚未打开`,n.value=`尚未测量`,r.value=`等待测量`,i.value=[...H]}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。`));let S=a(`div`,l);r(l,S),y(S,`flex flex-wrap gap-3`);let A=a(`button`,S);r(S,A),y(A,`btn btn-primary`),s(A,`click`,()=>void O()),r(A,g(`打开批量发送弹窗`));let j=a(`button`,S);r(S,j),y(j,`btn btn-ghost`),s(j,`click`,k),r(j,g(`关闭并重置`));let M=c(`rue:slot:anchor`);r(l,M),f(()=>{let t=h.value?u(()=>{let t=n(),i=a(`div`,t);r(t,i),y(i,`rounded-box border border-base-300 bg-base-100 p-5 shadow-xl`);let o=a(`div`,i);r(i,o),y(o,`flex items-start justify-between gap-4`);let s=a(`div`,o);r(o,s);let l=a(`div`,s);r(s,l),y(l,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(l,g(`批量发送预览`));let m=a(`div`,s);r(s,m),y(m,`mt-2 text-2xl font-semibold`),r(m,g(`确认接收人列表`));let h=a(`div`,o);r(o,h),y(h,`badge badge-outline`);let _=c(`rue:slot:anchor`);r(h,_),f(()=>{let e=U.length;x(()=>p(e,h,_))}),r(h,g(` 人`));let v=a(`div`,i);r(i,v);let b=w(v,()=>D);d(()=>{b()}),y(v,`mt-4 max-h-72 space-y-3 overflow-y-auto pr-2`);let S=c(`rue:list:start`),T=c(`rue:list:end`);r(v,S),r(v,T);let E=new Map;return f(()=>{E=C({items:U||[],getKey:(e,t)=>e.id,elements:E,parent:v,before:T,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`div`,i);r(i,o),f(()=>{e(o,`key`,String(t.id))}),y(o,`rounded-box bg-base-200/70 p-3 text-sm leading-6`);let s=a(`div`,o);r(o,s),y(s,`font-medium`);let l=c(`rue:slot:anchor`);r(s,l),f(()=>{let e=t.name;x(()=>p(e,s,l))});let u=a(`div`,o);r(o,u),y(u,`text-base-content/60`);let d=c(`rue:slot:anchor`);r(u,d),f(()=>{let e=t.team;x(()=>p(e,u,d))}),r(u,g(` · `));let m=c(`rue:slot:anchor`);return r(u,m),f(()=>{let e=t.region;x(()=>p(e,u,m))}),i}),i,o)}})}),t}):``;x(()=>p(t,l,M))});let N=a(`div`,l);r(l,N),y(N,`grid gap-4 md:grid-cols-3`);let P=a(`div`,N);r(N,P),y(P,`rounded-box border border-base-300 bg-base-100 p-4`);let F=a(`div`,P);r(P,F),y(F,`text-sm text-base-content/60`),r(F,g(`同步读取到的高度`));let I=a(`div`,P);r(P,I),y(I,`mt-2 font-mono text-xl`);let L=i(I);r(I,L),f(()=>{_(L,v.value)});let R=a(`div`,N);r(N,R),y(R,`rounded-box border border-base-300 bg-base-100 p-4`);let z=a(`div`,R);r(R,z),y(z,`text-sm text-base-content/60`),r(z,g(`await nextTick() 后高度`));let B=a(`div`,R);r(R,B),y(B,`mt-2 font-mono text-xl text-success`);let V=i(B);r(B,V),f(()=>{_(V,b.value)});let H=a(`div`,N);r(N,H),y(H,`rounded-box border border-base-300 bg-base-100 p-4`);let W=a(`div`,H);r(H,W),y(W,`text-sm text-base-content/60`),r(W,g(`布局决策`));let G=a(`div`,H);r(H,G),y(G,`mt-2 text-sm leading-6 text-base-content/80`);let K=i(G);r(G,K),f(()=>{_(K,T.value)});let q=a(`div`,l);r(l,q),y(q,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let J=a(`div`,q);r(q,J),y(J,`text-sm font-medium text-base-content/70`),r(J,g(`本轮步骤`));let Y=a(`ul`,q);r(q,Y),y(Y,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let X=c(`rue:list:start`),Z=c(`rue:list:end`);r(Y,X),r(Y,Z);let Q=new Map;return f(()=>{Q=C({items:E.value||[],getKey:(e,t)=>`modal-measure-log-${t}`,elements:Q,parent:Y,before:Z,singleRoot:!0,start:X,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`modal-measure-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},G=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
      nextHeight > 280 ? '列表超过阈值，建议固定 320px 高度并启用内部滚动' : '列表高度可控，可以直接完整展示'
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
          营销、消息中心、批量通知类弹窗经常要在打开后测量接收人列表的高度，决定是直接展开还是切换成固定高度滚动容器。弹窗内容本身是新挂载的，必须等 nextTick() 后再测量。
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
                <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">批量发送预览</div>
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
            <div className="mt-2 text-sm leading-6 text-base-content/80">{layoutDecision.value}</div>
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

export default ModalMeasureListDemo`,K=[`1. 切换订单详情区的展开状态`,`2. 同步阶段读取到的还是旧高度`,`3. await nextTick() 后再拿到新高度`],q=()=>{let{expanded:h,syncHeight:v,postTickHeight:b,logLines:T,panelRef:E,toggleExpanded:D,reset:O}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(!1)),t=S(`ref:1:1`,()=>l(`尚未测量`)),n=S(`ref:1:2`,()=>l(`尚未测量`)),r=S(`ref:1:3`,()=>l([...K])),i=S(`useRef:1:4`,()=>o());return{expanded:e,syncHeight:t,postTickHeight:n,logLines:r,panelRef:i,toggleExpanded:async()=>{e.value=!e.value;let a=e.value?`展开`:`收起`,o=i.current?.offsetHeight??0;t.value=`${o}px`,n.value=`等待 flush...`,r.value=[`详情区准备${a}`,`同步读取 offsetHeight：${o}px`,`等待 nextTick() 后重新测量...`],await m();let s=i.current?.offsetHeight??0;n.value=`${s}px`,r.value=[`详情区准备${a}`,`同步读取 offsetHeight：${o}px`,`nextTick() 后 offsetHeight：${s}px`]},reset:()=>{e.value=!1,t.value=`尚未测量`,n.value=`尚未测量`,r.value=[...K]}}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。`));let S=a(`div`,l);r(l,S);let k=w(S,()=>E);d(()=>{k()}),y(S,`rounded-box border border-base-300 bg-base-100 p-5`);let A=a(`div`,S);r(S,A),y(A,`flex items-center justify-between`);let j=a(`div`,A);r(A,j);let M=a(`div`,j);r(j,M),y(M,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(M,g(`订单详情卡片`));let N=a(`div`,j);r(j,N),y(N,`mt-2 text-2xl font-semibold`),r(N,g(`订单 #A1024`));let P=a(`div`,A);r(A,P),f(()=>{y(P,String(`badge ${h.value?`badge-primary`:`badge-outline`}`))});let F=i(P);r(P,F),f(()=>{_(F,h.value?`已展开`:`已收起`)});let I=a(`div`,S);r(S,I),y(I,`mt-5 grid gap-3 md:grid-cols-2`);let L=a(`div`,I);r(I,L),y(L,`rounded-box bg-base-200/60 p-3 text-sm`),r(L,g(`支付状态：已支付`));let R=a(`div`,I);r(I,R),y(R,`rounded-box bg-base-200/60 p-3 text-sm`),r(R,g(`配送方式：同城急送`));let z=a(`div`,I);r(I,z),y(z,`rounded-box bg-base-200/60 p-3 text-sm`),r(z,g(`仓库：上海 3 号仓`));let B=a(`div`,I);r(I,B),y(B,`rounded-box bg-base-200/60 p-3 text-sm`),r(B,g(`下单时间：09:20`));let V=c(`rue:slot:anchor`);r(I,V),f(()=>{let e=h.value?u(()=>{let e=n();r(e,g(` `));let t=a(`div`,e);r(e,t),y(t,`rounded-box bg-base-200/60 p-3 text-sm`),r(t,g(`发票状态：电子发票已开具`)),r(e,g(` `));let i=a(`div`,e);r(e,i),y(i,`rounded-box bg-base-200/60 p-3 text-sm`),r(i,g(`风控结果：人工审核已通过`)),r(e,g(` `));let o=a(`div`,e);r(e,o),y(o,`rounded-box bg-base-200/60 p-3 text-sm`),r(o,g(`配送备注：优先联系收货人本人`)),r(e,g(` `));let s=a(`div`,e);return r(e,s),y(s,`rounded-box bg-base-200/60 p-3 text-sm`),r(s,g(`售后状态：暂无售后单`)),r(e,g(` `)),e}):``;x(()=>p(e,I,V))});let H=a(`div`,l);r(l,H),y(H,`flex flex-wrap gap-3`);let U=a(`button`,H);r(H,U),y(U,`btn btn-primary`),s(U,`click`,()=>void D());let W=i(U);r(U,W),f(()=>{_(W,h.value?`收起详情区并测量`:`展开详情区并测量`)});let G=a(`button`,H);r(H,G),y(G,`btn btn-ghost`),s(G,`click`,O),r(G,g(`重置`));let K=a(`div`,l);r(l,K),y(K,`grid gap-4 md:grid-cols-2`);let q=a(`div`,K);r(K,q),y(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=a(`div`,q);r(q,J),y(J,`text-sm text-base-content/60`),r(J,g(`同步读取到的高度`));let Y=a(`div`,q);r(q,Y),y(Y,`mt-2 font-mono text-2xl`);let X=i(Y);r(Y,X),f(()=>{_(X,v.value)});let Z=a(`div`,K);r(K,Z),y(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=a(`div`,Z);r(Z,Q),y(Q,`text-sm text-base-content/60`),r(Q,g(`await nextTick() 后高度`));let ee=a(`div`,Z);r(Z,ee),y(ee,`mt-2 font-mono text-2xl text-success`);let te=i(ee);r(ee,te),f(()=>{_(te,b.value)});let ne=a(`div`,l);r(l,ne),y(ne,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let $=a(`div`,ne);r(ne,$),y($,`text-sm font-medium text-base-content/70`),r($,g(`本轮步骤`));let re=a(`ul`,ne);r(ne,re),y(re,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ie=c(`rue:list:start`),ae=c(`rue:list:end`);r(re,ie),r(re,ae);let oe=new Map;return f(()=>{oe=C({items:T.value||[],getKey:(e,t)=>`panel-measure-log-${t}`,elements:oe,parent:re,before:ae,singleRoot:!0,start:ie,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`panel-measure-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},J=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
          手风琴、订单详情抽屉、商品详情区经常要在展开后测量高度，去驱动滚动、动画或埋点。同步测量拿到的还是旧高度，要等 nextTick() 后再测一次。
        </p>

        <div ref={panelRef} className="rounded-box border border-base-300 bg-base-100 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">订单详情卡片</div>
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
                <div className="rounded-box bg-base-200/60 p-3 text-sm">发票状态：电子发票已开具</div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">风控结果：人工审核已通过</div>
                <div className="rounded-box bg-base-200/60 p-3 text-sm">配送备注：优先联系收货人本人</div>
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

export default PanelMeasureDemo`,Y=[`1. 切换筛选条件，表格准备重新渲染`,`2. 同步阶段读取到的还是旧首条结果`,`3. await nextTick() 后滚到新的首条命中记录`],X={all:`全部订单`,risk:`待风控`,refund:`退款中`,shipping:`待发货`,done:`已完成`},Z=[{id:1,orderNo:`A-1024`,customer:`上海徐汇门店`,status:`shipping`,amount:`¥1,280`,note:`等待波次出库`},{id:2,orderNo:`A-1025`,customer:`苏州工业园`,status:`done`,amount:`¥980`,note:`已签收`},{id:3,orderNo:`A-1026`,customer:`深圳南山客户`,status:`risk`,amount:`¥2,430`,note:`等待人工复核`},{id:4,orderNo:`A-1027`,customer:`北京朝阳客户`,status:`refund`,amount:`¥560`,note:`退款审核中`},{id:5,orderNo:`A-1028`,customer:`杭州西湖门店`,status:`shipping`,amount:`¥1,120`,note:`拣货完成`},{id:6,orderNo:`A-1029`,customer:`武汉光谷仓`,status:`risk`,amount:`¥3,100`,note:`需补充发票信息`},{id:7,orderNo:`A-1030`,customer:`成都高新区客户`,status:`refund`,amount:`¥760`,note:`等待退款到账`},{id:8,orderNo:`A-1031`,customer:`广州天河客户`,status:`done`,amount:`¥640`,note:`回访完成`},{id:9,orderNo:`A-1032`,customer:`天津滨海门店`,status:`shipping`,amount:`¥1,860`,note:`待分配骑手`},{id:10,orderNo:`A-1033`,customer:`厦门湖里客户`,status:`risk`,amount:`¥1,420`,note:`身份核验异常`}],Q=e=>e===`all`?Z:Z.filter(t=>t.status===e),ee=()=>{let{activeStatus:h,syncTarget:v,postTickTarget:b,logLines:T,viewportRef:E,applyFilter:D,reset:O,visibleOrders:k}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>l(`all`)),t=S(`ref:1:1`,()=>l(`尚未筛选`)),n=S(`ref:1:2`,()=>l(`尚未定位`)),r=S(`ref:1:3`,()=>l([...Y])),i=S(`useRef:1:4`,()=>o());return{activeStatus:e,syncTarget:t,postTickTarget:n,logLines:r,viewportRef:i,applyFilter:async a=>{e.value=a,t.value=(i.current?.querySelector(`[data-first-visible="true"]`))?.getAttribute(`data-order-no`)??`同步阶段尚未定位到新首条`,n.value=`等待 flush...`,r.value=[`筛选条件切换为：${X[a]}`,`同步读取首条结果：${t.value}`,`等待 nextTick() 后滚到新的首条命中记录...`],await m();let o=i.current?.querySelector(`[data-first-visible="true"]`);o?.scrollIntoView({block:`nearest`}),n.value=o?.getAttribute(`data-order-no`)??`当前筛选没有结果`,r.value=[`筛选条件切换为：${X[a]}`,`同步读取首条结果：${t.value}`,`nextTick() 后首条结果：${n.value}，并已滚动到可视区域`]},reset:()=>{e.value=`all`,t.value=`尚未筛选`,n.value=`尚未定位`,r.value=[...Y],i.current&&(i.current.scrollTop=0)},visibleOrders:Q(e.value)}}));return u(t=>{let o=a(`div`,t);y(o,`card bg-base-100 shadow`);let l=a(`div`,o);r(o,l),y(l,`card-body gap-5`);let m=a(`p`,l);r(l,m),y(m,`text-base-content/70 leading-7`),r(m,g(`客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。`));let S=a(`div`,l);r(l,S),y(S,`flex flex-wrap gap-2`);let A=c(`rue:list:start`),j=c(`rue:list:end`);r(S,A),r(S,j);let M=new Map;f(()=>{M=C({items:[`all`,`risk`,`refund`,`shipping`,`done`],getKey:(e,t)=>e,elements:M,parent:S,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(t,i,o,l,d)=>{p(u(()=>{let i=n(),o=a(`button`,i);r(i,o),f(()=>{e(o,`key`,String(t))}),f(()=>{y(o,String(`btn btn-sm ${h.value===t?`btn-primary`:`btn-ghost`}`))}),s(o,`click`,()=>void D(t));let l=c(`rue:slot:anchor`);return r(o,l),f(()=>{let e=X[t];x(()=>p(e,o,l))}),i}),i,o)}})});let N=a(`button`,S);r(S,N),y(N,`btn btn-sm btn-outline`),s(N,`click`,O),r(N,g(`重置`));let P=a(`div`,l);r(l,P);let F=w(P,()=>E);d(()=>{F()}),y(P,`max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100`);let I=a(`table`,P);r(P,I),y(I,`table table-pin-rows table-sm`);let L=a(`thead`,I);r(I,L);let R=a(`tr`,L);r(L,R);let z=a(`th`,R);r(R,z),r(z,g(`订单号`));let B=a(`th`,R);r(R,B),r(B,g(`客户`));let V=a(`th`,R);r(R,V),r(V,g(`状态`));let H=a(`th`,R);r(R,H),r(H,g(`金额`));let U=a(`th`,R);r(R,U),r(U,g(`备注`));let W=a(`tbody`,I);r(I,W);let G=c(`rue:slot:anchor`);r(W,G),f(()=>{let t=k.length>0?u(()=>{let t=n(),i=c(`rue:list:start`),o=c(`rue:list:end`);r(t,i),r(t,o);let s=new Map;return f(()=>{s=C({items:k||[],getKey:(e,t)=>e.id,elements:s,parent:i.parentNode,before:o,singleRoot:!0,start:i,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`tr`,i);r(i,o),f(()=>{e(o,`key`,String(t.id))}),f(()=>{e(o,`data-first-visible`,String(l===0?`true`:`false`))}),f(()=>{e(o,`data-order-no`,String(t.orderNo))});let s=a(`td`,o);r(o,s),y(s,`font-medium`);let u=c(`rue:slot:anchor`);r(s,u),f(()=>{let e=t.orderNo;x(()=>p(e,s,u))});let d=a(`td`,o);r(o,d);let m=c(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.customer;x(()=>p(e,d,m))});let h=a(`td`,o);r(o,h);let g=a(`span`,h);r(h,g),y(g,`badge badge-outline`);let _=c(`rue:slot:anchor`);r(g,_),f(()=>{let e=X[t.status];x(()=>p(e,g,_))});let v=a(`td`,o);r(o,v);let b=c(`rue:slot:anchor`);r(v,b),f(()=>{let e=t.amount;x(()=>p(e,v,b))});let S=a(`td`,o);r(o,S),y(S,`text-base-content/60`);let C=c(`rue:slot:anchor`);return r(S,C),f(()=>{let e=t.note;x(()=>p(e,S,C))}),i}),i,o)}})}),t}):u(()=>{let t=n(),i=a(`tr`,t);r(t,i);let o=a(`td`,i);return r(i,o),e(o,`colSpan`,`5`),y(o,`py-8 text-center text-base-content/60`),r(o,g(`当前筛选没有结果`)),t});x(()=>p(t,W,G))});let K=a(`div`,l);r(l,K),y(K,`grid gap-4 md:grid-cols-2`);let q=a(`div`,K);r(K,q),y(q,`rounded-box border border-base-300 bg-base-100 p-4`);let J=a(`div`,q);r(q,J),y(J,`text-sm text-base-content/60`),r(J,g(`同步读取到的首条结果`));let Y=a(`div`,q);r(q,Y),y(Y,`mt-2 font-mono text-2xl`);let Z=i(Y);r(Y,Z),f(()=>{_(Z,v.value)});let Q=a(`div`,K);r(K,Q),y(Q,`rounded-box border border-base-300 bg-base-100 p-4`);let ee=a(`div`,Q);r(Q,ee),y(ee,`text-sm text-base-content/60`),r(ee,g(`await nextTick() 后定位到`));let te=a(`div`,Q);r(Q,te),y(te,`mt-2 font-mono text-2xl text-success`);let ne=i(te);r(te,ne),f(()=>{_(ne,b.value)});let $=a(`div`,l);r(l,$),y($,`rounded-box border border-dashed border-base-300 bg-base-100 p-4`);let re=a(`div`,$);r($,re),y(re,`text-sm font-medium text-base-content/70`),r(re,g(`本轮步骤`));let ie=a(`ul`,$);r($,ie),y(ie,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let ae=c(`rue:list:start`),oe=c(`rue:list:end`);r(ie,ae),r(ie,oe);let se=new Map;return f(()=>{se=C({items:T.value||[],getKey:(e,t)=>`table-filter-log-${t}`,elements:se,parent:ie,before:oe,singleRoot:!0,start:ae,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`li`,o);r(o,s),f(()=>{e(s,`key`,String(`table-filter-log-${l}`))});let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})}),o})},te=`import { type FC, nextTick, ref, useRef } from '@rue-js/rue'

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
  { id: 1, orderNo: 'A-1024', customer: '上海徐汇门店', status: 'shipping', amount: '¥1,280', note: '等待波次出库' },
  { id: 2, orderNo: 'A-1025', customer: '苏州工业园', status: 'done', amount: '¥980', note: '已签收' },
  { id: 3, orderNo: 'A-1026', customer: '深圳南山客户', status: 'risk', amount: '¥2,430', note: '等待人工复核' },
  { id: 4, orderNo: 'A-1027', customer: '北京朝阳客户', status: 'refund', amount: '¥560', note: '退款审核中' },
  { id: 5, orderNo: 'A-1028', customer: '杭州西湖门店', status: 'shipping', amount: '¥1,120', note: '拣货完成' },
  { id: 6, orderNo: 'A-1029', customer: '武汉光谷仓', status: 'risk', amount: '¥3,100', note: '需补充发票信息' },
  { id: 7, orderNo: 'A-1030', customer: '成都高新区客户', status: 'refund', amount: '¥760', note: '等待退款到账' },
  { id: 8, orderNo: 'A-1031', customer: '广州天河客户', status: 'done', amount: '¥640', note: '回访完成' },
  { id: 9, orderNo: 'A-1032', customer: '天津滨海门店', status: 'shipping', amount: '¥1,860', note: '待分配骑手' },
  { id: 10, orderNo: 'A-1033', customer: '厦门湖里客户', status: 'risk', amount: '¥1,420', note: '身份核验异常' },
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

    const syncRow = viewportRef.current?.querySelector('[data-first-visible="true"]') as HTMLElement | null
    syncTarget.value = syncRow?.getAttribute('data-order-no') ?? '同步阶段尚未定位到新首条'
    postTickTarget.value = '等待 flush...'
    logLines.value = [
      \`筛选条件切换为：\${statusLabels[status]}\`,
      \`同步读取首条结果：\${syncTarget.value}\`,
      '等待 nextTick() 后滚到新的首条命中记录...',
    ]

    await nextTick()

    const nextRow = viewportRef.current?.querySelector('[data-first-visible="true"]') as HTMLElement | null
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
          客服工单、风控台账、售后列表经常会在筛选后自动滚到首条命中结果。问题在于筛选结果也是本轮更新的一部分，必须等 nextTick() 后再定位首条新结果。
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

        <div ref={viewportRef} className="max-h-72 overflow-y-auto rounded-box border border-base-300 bg-base-100">
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

export default TableFilterScrollDemo`,ne=[{title:`读取最新 DOM 文本`,summary:`基础场景：状态更新后同步读 DOM 会拿到旧值，await nextTick() 后才是最新文本。`,businessCases:[`基础认知`,`调试刷新顺序`,`DOM 同步读取`],source:N,Demo:M}],$=[{title:`消息流自动滚动`,summary:`新增聊天、订单轨迹或系统通知后，等待列表完成渲染，再滚动到最底部。`,businessCases:[`客服聊天`,`订单时间线`,`系统日志`],source:A,Demo:k},{title:`打开面板后自动聚焦`,summary:`搜索弹层、筛选抽屉、编辑表单打开后，要在 DOM 挂载完成后再 focus 输入框。`,businessCases:[`高级筛选`,`搜索抽屉`,`新增表单`],source:I,Demo:F},{title:`展开后测量高度`,summary:`手风琴、详情抽屉展开后，需要在布局刷新完成后测量高度以驱动滚动和动画。`,businessCases:[`订单详情`,`商品详情`,`折叠面板`],source:J,Demo:q},{title:`表格筛选后滚到首条结果`,summary:`切换订单筛选条件后，等待表格结果刷新，再自动滚到新的首条命中记录。`,businessCases:[`风控台账`,`售后列表`,`工单筛选`],source:te,Demo:ee},{title:`提交后聚焦错误字段`,summary:`表单提交后，等错误样式和提示渲染完成，再自动 focus 第一个错误输入框。`,businessCases:[`开户表单`,`地址编辑`,`审批提单`],source:V,Demo:B},{title:`弹窗打开后测量列表高度`,summary:`批量发送或通知弹窗打开后，等列表挂载完成，再测量高度决定布局策略。`,businessCases:[`消息中心`,`批量通知`,`营销弹窗`],source:G,Demo:W}],re=o=>{let{Demo:s}=S(`useSetup:0:0`,()=>t(()=>({Demo:o.scenario.Demo})));return u(t=>{let l=a(`section`,t);y(l,`rounded-box border border-base-300 bg-base-100 p-5`);let d=a(`div`,l);r(l,d),y(d,`text-sm uppercase tracking-[0.24em] text-base-content/50`);let m=c(`rue:slot:anchor`);r(d,m),f(()=>{let e=o.eyebrow;x(()=>p(e,d,m))});let h=a(`div`,l);r(l,h),y(h,`mt-2 text-2xl font-semibold`);let g=c(`rue:slot:anchor`);r(h,g),f(()=>{let e=o.scenario.title;x(()=>p(e,h,g))});let b=a(`p`,l);r(l,b),y(b,`mt-2 text-base-content/70 leading-7`);let S=c(`rue:slot:anchor`);r(b,S),f(()=>{let e=o.scenario.summary;x(()=>p(e,b,S))});let w=a(`div`,l);r(l,w),y(w,`mt-4 flex flex-wrap gap-2`);let E=c(`rue:list:start`),D=c(`rue:list:end`);r(w,E),r(w,D);let O=new Map;f(()=>{O=C({items:o.scenario.businessCases||[],getKey:(e,t)=>e,elements:O,parent:w,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,o,s,c,l)=>{p(u(()=>{let o=n(),s=a(`span`,o);r(o,s),f(()=>{e(s,`key`,String(t))}),y(s,`badge badge-outline`);let c=i(s);return r(s,c),f(()=>{_(c,t)}),o}),o,s)}})});let k=a(`div`,l);r(l,k),y(k,`mt-4`);let A=c(`rue:slot:anchor`);return r(k,A),f(()=>{let e=o.activeTab.value===`preview`?u(()=>{let e=n(),t=c(`rue:component:anchor`);return r(e,t),p(v(s,{}),e,t),e}):u(()=>{let e=n(),t=a(`div`,e);r(e,t),y(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),y(i,`card-body p-0`);let s=c(`rue:component:anchor`);return r(i,s),f(()=>{let e=v(T,{className:`h-full`,lang:`tsx`,code:o.scenario.source});x(()=>p(e,i,s))}),e});x(()=>p(e,k,A))}),l})},ie=()=>{let{activeTab:i}=S(`useSetup:0:0:dup1`,()=>t(()=>({activeTab:S(`ref:1:0`,()=>l(`preview`))})));return u(t=>{let o=n(),l=c(`rue:component:anchor`);return r(o,l),p(v(E,{children:u(()=>{let t=n(),o=a(`h1`,t);r(t,o),y(o,`text-5xl font-semibold mb-4 md:mb-4`),r(o,g(`nextTick 真实业务场景`));let l=a(`p`,t);r(t,l),y(l,`max-w-4xl text-base-content/70 leading-7`),r(l,g(`现在这个页面只负责组织展示：原来的基础 demo 还在，同时把业务 demo 全拆成了独立组件，并补了表格筛选、提交校验、弹窗测量这类更偏数据流的 nextTick 场景。`));let u=a(`div`,t);r(t,u),e(u,`role`,`tablist`),y(u,`tabs tabs-box mt-6`);let d=a(`button`,u);r(u,d),e(d,`role`,`tab`),f(()=>{y(d,String(`tab ${i.value===`preview`?`tab-active`:``}`))}),s(d,`click`,()=>{i.value=`preview`}),r(d,g(`效果`));let p=a(`button`,u);r(u,p),e(p,`role`,`tab`),f(()=>{y(p,String(`tab ${i.value===`code`?`tab-active`:``}`))}),s(p,`click`,()=>{i.value=`code`}),r(p,g(`代码`));let m=a(`div`,t);r(t,m),y(m,`mt-4 grid gap-6`);let h=c(`rue:list:start`),_=c(`rue:list:end`);r(m,h),r(m,_);let x=new Map;f(()=>{x=C({items:ne||[],getKey:(e,t)=>e.title,elements:x,parent:m,before:_,start:h,renderItem:(e,t,n,r,a)=>{b(v(re,{key:e.title,scenario:e,eyebrow:`保留原始 demo`,activeTab:i}),t,n,r)}})});let S=a(`section`,m);r(m,S),y(S,`rounded-box border border-base-300 bg-base-100 p-5`);let w=a(`div`,S);r(S,w),y(w,`text-sm uppercase tracking-[0.24em] text-base-content/50`),r(w,g(`新增业务 demo`));let T=a(`div`,S);r(S,T),y(T,`mt-2 text-2xl font-semibold`),r(T,g(`真实业务里 nextTick 怎么用`));let E=a(`p`,S);r(S,E),y(E,`mt-2 text-base-content/70 leading-7`),r(E,g(`这里除了原来的 3 个业务场景，还新增了“表格筛选后滚到首条结果”“提交后聚焦错误字段”“弹窗打开后测量列表高度”3 个更偏数据流和表单流的真实例子。`));let D=c(`rue:list:start`),O=c(`rue:list:end`);r(m,D),r(m,O);let k=new Map;return f(()=>{k=C({items:$||[],getKey:(e,t)=>e.title,elements:k,parent:m,before:O,start:D,renderItem:(e,t,n,r,a)=>{b(v(re,{key:e.title,scenario:e,eyebrow:`业务场景 ${a+1}`,activeTab:i}),t,n,r)}})}),t})}),o,l),o})};export{ie as default};