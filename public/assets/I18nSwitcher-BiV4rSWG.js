import{Q as e,Vt as t,Xt as n,Z as r,an as i,at as a,bt as o,dt as s,ht as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v,wt as y,yt as ee}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as te}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as ne,r as x,t as S}from"./src-CHb2ltYS.js";import{t as re}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var ie=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],ae=e=>new Promise(t=>setTimeout(t,e)),C=()=>ne({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await ae(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),oe=n=>u(i=>{let a=h(`label`,i);m(a,`form-control gap-2`);let o=h(`span`,a);e(a,o),m(o,`label-text font-medium`),e(o,l(`用户名`));let c=h(`input`,a);return e(a,c),s(c,`data-testid`,`i18n-user-name-input`),m(c,`input input-bordered`),t(()=>{ee(c,n.name.value)}),r(c,`input`,e=>{n.name.value=e.target.value}),s(c,`placeholder`,`Alice`),a}),w=n=>{let{_:i,d:ee,n:ne,locale:S,availableLocales:re,isLocaleLoading:ae,loadLocaleMessages:C,currentLocale:w,currentName:se,japaneseLoaded:T}=b(`useSetup:0:0`,()=>p(()=>{let{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=x();return{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:b(`computed:1:0`,()=>y(()=>n.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),ce=async e=>{e===`ja-JP`&&!T&&await C(`ja-JP`),S.value=e},le=b(`computed:1:1`,()=>y(()=>[{source:`你好，{name}！`,rendered:i(`你好，{name}！`,{name:__rue_phase2_currentName.get()},w)},{source:`欢迎回来`,rendered:i(`欢迎回来`,void 0,w)},{source:`你有 {count} 条新的提醒。`,rendered:i(`你有 {count} 条新的提醒。`,{count:3},w)},{source:`立即结账`,rendered:i(`立即结账`,void 0,w)}])),ue=ae(`ja-JP`)?`ja-JP 语言包加载中...`:T?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return u(p=>{let y=h(`div`,p);m(y,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let b=h(`div`,y);e(y,b),m(b,`card bg-base-100 shadow`);let x=h(`div`,b);e(b,x),m(x,`card-body gap-4`);let S=h(`div`,x);e(x,S);let C=h(`div`,S);e(S,C),m(C,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(C,l(`控制台`));let T=h(`h2`,S);e(S,T),m(T,`mt-2 text-2xl font-semibold`),e(T,l(`语言切换与懒加载`));let de=h(`p`,S);e(S,de),m(de,`mt-2 text-sm leading-6 text-base-content/70`),e(de,l("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let fe=v(`rue:component:anchor`);e(x,fe),t(()=>{let e=g(oe,{name:n.name});_(()=>f(e,x,fe))});let E=h(`div`,x);e(x,E),m(E,`grid gap-2`);let pe=h(`span`,E);e(E,pe),m(pe,`label-text font-medium`),e(pe,l(`切换语言`));let D=h(`div`,E);e(E,D),m(D,`grid gap-2`);let me=v(`rue:list:start`),he=v(`rue:list:end`);e(D,me),e(D,he);let ge=new Map;t(()=>{ge=te({items:ie||[],getKey:(e,t)=>e.id,elements:ge,parent:D,before:he,singleRoot:!0,trackIndex:!1,start:me,renderItem:(n,i,a,o,l)=>{f(u(()=>{let i=d(),a=w===n.id,o=n.id===`ja-JP`&&ae(`ja-JP`),l=h(`button`,i);e(i,l),t(()=>{s(l,`key`,String(n.id))}),t(()=>{m(l,`btn justify-between ${a?`btn-primary`:`btn-outline`}`)}),t(()=>{c(l,o)}),r(l,`click`,()=>{ce(n.id)});let u=h(`span`,l);e(l,u);let p=v(`rue:slot:anchor`);e(u,p),t(()=>{let e=n.label;_(()=>f(e,u,p))});let g=h(`span`,l);e(l,g),m(g,`text-xs opacity-70`);let y=v(`rue:slot:anchor`);return e(g,y),t(()=>{let e=o?`加载中...`:n.hint;_(()=>f(e,g,y))}),i}),i,a)}})});let O=h(`div`,x);e(x,O),m(O,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let _e=h(`div`,O);e(O,_e),m(_e,`font-medium`),e(_e,l(`运行状态`));let k=h(`div`,O);e(O,k),m(k,`mt-2 text-base-content/70`);let ve=v(`rue:slot:anchor`);e(k,ve),t(()=>{let e=ue;_(()=>f(e,k,ve))});let A=h(`div`,O);e(O,A),m(A,`mt-3 flex flex-wrap gap-2`);let ye=v(`rue:list:start`),be=v(`rue:list:end`);e(A,ye),e(A,be);let xe=new Map;t(()=>{xe=te({items:re.value||[],getKey:(e,t)=>e,elements:xe,parent:A,before:be,singleRoot:!0,trackIndex:!1,start:ye,renderItem:(n,r,i,c,l)=>{f(u(()=>{let r=d(),i=h(`span`,r);e(r,i),t(()=>{s(i,`key`,String(n))}),m(i,`badge badge-outline`);let c=a(i);return e(i,c),t(()=>{o(c,n)}),r}),r,i)}})});let j=h(`div`,y);e(y,j),m(j,`grid gap-6`);let M=h(`div`,j);e(j,M),m(M,`card bg-base-100 shadow`);let N=h(`div`,M);e(M,N),m(N,`card-body gap-4`);let P=h(`div`,N);e(N,P),m(P,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let F=h(`span`,P);e(P,F),m(F,`badge badge-outline`),e(F,l(`当前 locale：`));let Se=v(`rue:slot:anchor`);e(F,Se),t(()=>{let e=w;_(()=>f(e,F,Se))});let Ce=h(`span`,P);e(P,Ce),m(Ce,`badge badge-outline`),e(Ce,l(`fallback：en`));let I=h(`div`,N);e(N,I);let L=h(`div`,I);e(I,L),m(L,`text-3xl font-semibold`);let we=v(`rue:slot:anchor`);e(L,we),t(()=>{let e=i(`你好，{name}！`,{name:se.get()},w);_(()=>f(e,L,we))});let R=h(`div`,I);e(I,R),m(R,`mt-2 text-base-content/70`);let Te=v(`rue:slot:anchor`);e(R,Te),t(()=>{let e=i(`欢迎回来`,void 0,w);_(()=>f(e,R,Te))});let Ee=v(`rue:slot:anchor`);e(I,Ee),t(()=>{let t=w===`ja-JP`?u(()=>{let t=d(),n=h(`div`,t);return e(t,n),m(n,`mt-2 text-xs text-base-content/50`),e(n,l(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),t}):``;_(()=>f(t,I,Ee))});let z=h(`div`,N);e(N,z),m(z,`grid gap-4 md:grid-cols-3`);let B=h(`div`,z);e(z,B),m(B,`rounded-box border border-base-300 bg-base-200/50 p-4`);let De=h(`div`,B);e(B,De),m(De,`text-xs uppercase tracking-[0.24em] text-base-content/45`),e(De,l(`提醒`));let V=h(`div`,B);e(B,V),m(V,`mt-2 text-lg font-medium`);let Oe=v(`rue:slot:anchor`);e(V,Oe),t(()=>{let e=i(`你有 {count} 条新的提醒。`,{count:3},w);_(()=>f(e,V,Oe))});let H=h(`div`,z);e(z,H),m(H,`rounded-box border border-base-300 bg-base-200/50 p-4`);let ke=h(`div`,H);e(H,ke),m(ke,`text-xs uppercase tracking-[0.24em] text-base-content/45`),e(ke,l(`日期格式`));let U=h(`div`,H);e(H,U),m(U,`mt-2 text-lg font-medium`);let Ae=v(`rue:slot:anchor`);e(U,Ae),t(()=>{let e=ee(`2026-05-23T09:00:00.000Z`,`long`,w);_(()=>f(e,U,Ae))});let W=h(`div`,z);e(z,W),m(W,`rounded-box border border-base-300 bg-base-200/50 p-4`);let G=h(`div`,W);e(W,G),m(G,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let je=v(`rue:slot:anchor`);e(G,je),t(()=>{let e=i(`订单总计`,void 0,w);_(()=>f(e,G,je))});let K=h(`div`,W);e(W,K),m(K,`mt-2 text-lg font-medium`);let Me=v(`rue:slot:anchor`);e(K,Me),t(()=>{let e=ne(1299,`currency`,w);_(()=>f(e,K,Me))});let q=h(`div`,N);e(N,q),m(q,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let J=h(`div`,q);e(q,J);let Ne=h(`div`,J);e(J,Ne),m(Ne,`text-sm font-medium`);let Pe=v(`rue:slot:anchor`);e(Ne,Pe),t(()=>{let e=i(`源文本就是 key。`,void 0,w);_(()=>f(e,Ne,Pe))});let Fe=h(`div`,J);e(J,Fe),m(Fe,`mt-1 text-sm text-base-content/65`),e(Fe,l(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=h(`button`,q);e(q,Ie),m(Ie,`btn btn-primary`);let Le=v(`rue:slot:anchor`);e(Ie,Le),t(()=>{let e=i(`立即结账`,void 0,w);_(()=>f(e,Ie,Le))});let Re=h(`div`,j);e(j,Re),m(Re,`card bg-base-100 shadow`);let Y=h(`div`,Re);e(Re,Y),m(Y,`card-body gap-3`);let ze=h(`h3`,Y);e(Y,ze),m(ze,`text-xl font-semibold`),e(ze,l(`源文本即 key`));let Be=h(`p`,Y);e(Y,Be),m(Be,`text-sm leading-6 text-base-content/70`),e(Be,l(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=h(`div`,Y);e(Y,X),m(X,`overflow-x-auto`);let Z=h(`table`,X);e(X,Z),m(Z,`table table-zebra`);let Ve=h(`thead`,Z);e(Z,Ve);let Q=h(`tr`,Ve);e(Ve,Q);let He=h(`th`,Q);e(Q,He),e(He,l(`源文本`));let Ue=h(`th`,Q);e(Q,Ue),e(Ue,l(`当前输出`));let $=h(`tbody`,Z);e(Z,$);let We=v(`rue:list:start`),Ge=v(`rue:list:end`);e($,We),e($,Ge);let Ke=new Map;return t(()=>{Ke=te({items:le.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(n,r,i,a,o)=>{f(u(()=>{let r=d(),i=h(`tr`,r);e(r,i),t(()=>{s(i,`key`,String(n.source))});let a=h(`td`,i);e(i,a),m(a,`font-mono text-xs md:text-sm`);let o=v(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.source;_(()=>f(e,a,o))});let c=h(`td`,i);e(i,c);let l=v(`rue:slot:anchor`);return e(c,l),t(()=>{let e=n.rendered;_(()=>f(e,c,l))}),r}),r,i)}})}),y})},se=re({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
import {
  I18nProvider,
  createI18n,
  useI18n,
  type I18n,
  type Locale,
} from '../../../../packages/i18n/src'

type ValueSignal<T> = { value: T }

const LOCALE_OPTIONS: Array<{ id: Locale; label: string; hint: string }> = [
  { id: 'zh-CN', label: '中文', hint: '内置' },
  { id: 'en', label: 'English', hint: '内置' },
  { id: 'ja-JP', label: '日本語', hint: '首次点击懒加载' },
]

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const createDemoI18n = (): I18n => {
  return createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'en',
    messages: {
      'zh-CN': {
        '你好，{name}！': '你好，{name}！',
        欢迎回来: '欢迎回来',
        '你有 {count} 条新的提醒。': '你有 {count} 条新的提醒。',
        订单总计: '订单总计',
        立即结账: '立即结账',
        '源文本就是 key。': '源文本就是 key。',
      },
      en: {
        '你好，{name}！': 'you hao, {name}!',
        欢迎回来: 'Welcome back',
        '你有 {count} 条新的提醒。': 'You have {count} new notifications.',
        订单总计: 'Order total',
        立即结账: 'Checkout now',
        '源文本就是 key。': 'The source text is the key.',
      },
    },
    datetimeFormats: {
      'zh-CN': {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
      en: {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
      'ja-JP': {
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        },
      },
    },
    numberFormats: {
      'zh-CN': {
        currency: {
          style: 'currency',
          currency: 'CNY',
        },
      },
      en: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
      'ja-JP': {
        currency: {
          style: 'currency',
          currency: 'JPY',
        },
      },
    },
    messageLoader: {
      // 首次点到日语时再加载，直观看到 lazy message loader 的行为。
      'ja-JP': async () => {
        await wait(420)

        return {
          default: {
            '你好，{name}！': 'こんにちは、{name}！',
            '你有 {count} 条新的提醒。': '{count} 件の新しい通知があります。',
            订单总计: '注文合計',
            立即结账: '今すぐ支払う',
            '源文本就是 key。': 'ソース文そのものが key です。',
          },
        }
      },
    },
  })
}

const UserNameInput: FC<{ name: ValueSignal<string> }> = props => {
  return (
    <label className="form-control gap-2">
      <span className="label-text font-medium">用户名</span>
      <input
        data-testid="i18n-user-name-input"
        className="input input-bordered"
        value={props.name.value}
        onInput={(event: Event) => {
          props.name.value = (event.target as HTMLInputElement).value
        }}
        placeholder="Alice"
      />
    </label>
  )
}

const DemoSurface: FC<{ name: ValueSignal<string> }> = props => {
  const { _, d, n, locale, availableLocales, isLocaleLoading, loadLocaleMessages } = useI18n()

  // 显式读取 locale.value，再传给 _()，更贴近 Rue 当前依赖追踪边界。
  const currentLocale = locale.value
  const currentName = props.name.value
  const japaneseLoaded = availableLocales.value.includes('ja-JP')

  const switchLocale = async (nextLocale: Locale) => {
    if (nextLocale === 'ja-JP' && !japaneseLoaded) {
      await loadLocaleMessages('ja-JP')
    }

    locale.value = nextLocale
  }

  const previewRows = [
    {
      source: '你好，{name}！',
      rendered: _('你好，{name}！', { name: currentName }, currentLocale),
    },
    {
      source: '欢迎回来',
      rendered: _('欢迎回来', undefined, currentLocale),
    },
    {
      source: '你有 {count} 条新的提醒。',
      rendered: _('你有 {count} 条新的提醒。', { count: 3 }, currentLocale),
    },
    {
      source: '立即结账',
      rendered: _('立即结账', undefined, currentLocale),
    },
  ]

  const localeStatus = isLocaleLoading('ja-JP')
    ? 'ja-JP 语言包加载中...'
    : japaneseLoaded
      ? 'ja-JP 已注册到当前 composer。'
      : 'ja-JP 将在首次点击时按需加载。'

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div>
            <h2 className="mt-2 text-2xl font-semibold">语言切换与懒加载</h2>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              这个 demo 直接演示新的 \`_()\` 模型：没有 \`common.hello\` 这类路径，源文本本身就是 key。
            </p>
          </div>

          <UserNameInput name={props.name} />

          <div className="grid gap-2">
            <span className="label-text font-medium">切换语言</span>
            <div className="grid gap-2">
              {LOCALE_OPTIONS.map(option => {
                const active = currentLocale === option.id
                const loading = option.id === 'ja-JP' && isLocaleLoading('ja-JP')

                return (
                  <button
                    key={option.id}
                    className={\`btn justify-between \${active ? 'btn-primary' : 'btn-outline'}\`}
                    disabled={loading}
                    onClick={() => {
                      void switchLocale(option.id)
                    }}
                  >
                    <span>{option.label}</span>
                    <span className="text-xs opacity-70">
                      {loading ? '加载中...' : option.hint}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6">
            <div className="font-medium">运行状态</div>
            <div className="mt-2 text-base-content/70">{localeStatus}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {availableLocales.value.map(item => (
                <span key={item} className="badge badge-outline">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/60">
              <span className="badge badge-outline">当前 locale：{currentLocale}</span>
              <span className="badge badge-outline">fallback：en</span>
            </div>

            <div>
              <div className="text-3xl font-semibold">
                {_('你好，{name}！', { name: currentName }, currentLocale)}
              </div>
              <div className="mt-2 text-base-content/70">
                {_('欢迎回来', undefined, currentLocale)}
              </div>
              {currentLocale === 'ja-JP' && (
                <div className="mt-2 text-xs text-base-content/50">
                  日语包故意没有“欢迎回来”，这里会自动回退到英文。
                </div>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div>
                <div className="mt-2 text-lg font-medium">
                  {_('你有 {count} 条新的提醒。', { count: 3 }, currentLocale)}
                </div>
              </div>
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">
                  日期格式
                </div>
                <div className="mt-2 text-lg font-medium">
                  {d('2026-05-23T09:00:00.000Z', 'long', currentLocale)}
                </div>
              </div>
              <div className="rounded-box border border-base-300 bg-base-200/50 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-base-content/45">
                  {_('订单总计', undefined, currentLocale)}
                </div>
                <div className="mt-2 text-lg font-medium">{n(1299, 'currency', currentLocale)}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4">
              <div>
                <div className="text-sm font-medium">
                  {_('源文本就是 key。', undefined, currentLocale)}
                </div>
                <div className="mt-1 text-sm text-base-content/65">
                  左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。
                </div>
              </div>
              <button className="btn btn-primary">{_('立即结账', undefined, currentLocale)}</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body gap-3">
            <h3 className="text-xl font-semibold">源文本即 key</h3>
            <p className="text-sm leading-6 text-base-content/70">
              这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。
            </p>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>源文本</th>
                    <th>当前输出</th>
                  </tr>
                </thead>
                <tbody>
                  {previewRows.map(row => (
                    <tr key={row.source}>
                      <td className="font-mono text-xs md:text-sm">{row.source}</td>
                      <td>{row.rendered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const I18nLocaleSwitcherDemo: FC = () => {
  const i18nRef = useRef<I18n>()
  const nameRef = useRef<ValueSignal<string>>()

  if (!i18nRef.current) {
    i18nRef.current = createDemoI18n()
  }

  if (!nameRef.current) {
    nameRef.current = ref('Alice')
  }

  const name = nameRef.current

  return (
    <I18nProvider i18n={i18nRef.current}>
      <DemoSurface name={name} />
    </I18nProvider>
  )
}

export default I18nLocaleSwitcherDemo
`,Demo:()=>{let{i18nRef:r,nameRef:a,name:o}=b(`useSetup:0:0:dup1`,()=>p(()=>{let e=b(`useRef:1:2`,()=>i()),t=b(`useRef:1:3`,()=>i());return e.current||=C(),t.current||=b(`ref:1:4`,()=>n(`Alice`)),{i18nRef:e,nameRef:t,name:b(`computed:1:5`,()=>y(()=>t.current))}}));return u(n=>{let i=d(),a=v(`rue:component:anchor`);e(i,a);let s=g(w,{name:o.get()});return t(()=>{let e=g(S,{i18n:r.current,children:s});_(()=>f(e,i,a))}),i})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{se as default};