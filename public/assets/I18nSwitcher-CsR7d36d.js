import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Yt as o,Z as s,ct as c,et as l,ft as u,gt as d,ht as f,l as p,nt as m,o as h,rt as g,t as _,tt as v,ut as y,yt as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x,n as ee}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{n as te,r as S,t as C}from"./src-D5XdHtcM.js";import{t as ne}from"./createHomeSplitExamplePage-Q644r2Bq.js";var re=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],ie=e=>new Promise(t=>setTimeout(t,e)),w=()=>te({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await ie(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),ae=e=>p(n=>{let r=v(`label`,n);y(r,`form-control gap-2`);let a=v(`span`,r);s(r,a),y(a,`label-text font-medium`),s(a,m(`用户名`));let o=v(`input`,r);return s(r,o),c(o,`data-testid`,`i18n-user-name-input`),y(o,`input input-bordered`),t(()=>{f(o,e.name.value)}),i(o,`input`,t=>{e.name.value=t.target.value}),c(o,`placeholder`,`Alice`),r}),T=n=>{let{_:o,d:f,n:te,locale:C,availableLocales:ne,isLocaleLoading:ie,loadLocaleMessages:w,currentLocale:T,currentName:oe,japaneseLoaded:E}=x(`useSetup:0:0`,()=>a(()=>{let{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=S();return{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:i.value,currentName:x(`computed:1:0`,()=>b(()=>n.name.value)),japaneseLoaded:a.value.includes(`ja-JP`)}})),se=async e=>{e===`ja-JP`&&!E&&await w(`ja-JP`),C.value=e},ce=x(`computed:1:1`,()=>b(()=>[{source:`你好，{name}！`,rendered:o(`你好，{name}！`,{name:__rue_phase2_currentName.get()},T)},{source:`欢迎回来`,rendered:o(`欢迎回来`,void 0,T)},{source:`你有 {count} 条新的提醒。`,rendered:o(`你有 {count} 条新的提醒。`,{count:3},T)},{source:`立即结账`,rendered:o(`立即结账`,void 0,T)}])),le=ie(`ja-JP`)?`ja-JP 语言包加载中...`:E?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`;return p(a=>{let b=v(`div`,a);y(b,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let x=v(`div`,b);s(b,x),y(x,`card bg-base-100 shadow`);let S=v(`div`,x);s(x,S),y(S,`card-body gap-4`);let C=v(`div`,S);s(S,C);let w=v(`div`,C);s(C,w),y(w,`text-sm uppercase tracking-[0.24em] text-base-content/50`),s(w,m(`控制台`));let E=v(`h2`,C);s(C,E),y(E,`mt-2 text-2xl font-semibold`),s(E,m(`语言切换与懒加载`));let ue=v(`p`,C);s(C,ue),y(ue,`mt-2 text-sm leading-6 text-base-content/70`),s(ue,m("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let de=e(`rue:component:anchor`);s(S,de),t(()=>{let e=_(ae,{name:n.name});r(()=>h(e,S,de))});let D=v(`div`,S);s(S,D),y(D,`grid gap-2`);let fe=v(`span`,D);s(D,fe),y(fe,`label-text font-medium`),s(fe,m(`切换语言`));let O=v(`div`,D);s(D,O),y(O,`grid gap-2`);let pe=e(`rue:list:start`),me=e(`rue:list:end`);s(O,pe),s(O,me);let he=new Map;t(()=>{he=ee({items:re||[],getKey:(e,t)=>e.id,elements:he,parent:O,before:me,singleRoot:!0,trackIndex:!1,start:pe,renderItem:(n,a,o,d,f)=>{h(p(()=>{let a=l(),o=T===n.id,d=n.id===`ja-JP`&&ie(`ja-JP`),f=v(`button`,a);s(a,f),t(()=>{c(f,`key`,String(n.id))}),t(()=>{y(f,`btn justify-between ${o?`btn-primary`:`btn-outline`}`)}),t(()=>{u(f,d)}),i(f,`click`,()=>{se(n.id)});let p=v(`span`,f);s(f,p);let m=e(`rue:slot:anchor`);s(p,m),t(()=>{let e=n.label;r(()=>h(e,p,m))});let g=v(`span`,f);s(f,g),y(g,`text-xs opacity-70`);let _=e(`rue:slot:anchor`);return s(g,_),t(()=>{let e=d?`加载中...`:n.hint;r(()=>h(e,g,_))}),a}),a,o)}})});let k=v(`div`,S);s(S,k),y(k,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ge=v(`div`,k);s(k,ge),y(ge,`font-medium`),s(ge,m(`运行状态`));let A=v(`div`,k);s(k,A),y(A,`mt-2 text-base-content/70`);let _e=e(`rue:slot:anchor`);s(A,_e),t(()=>{let e=le;r(()=>h(e,A,_e))});let j=v(`div`,k);s(k,j),y(j,`mt-3 flex flex-wrap gap-2`);let ve=e(`rue:list:start`),ye=e(`rue:list:end`);s(j,ve),s(j,ye);let be=new Map;t(()=>{be=ee({items:ne.value||[],getKey:(e,t)=>e,elements:be,parent:j,before:ye,singleRoot:!0,trackIndex:!1,start:ve,renderItem:(e,n,r,i,a)=>{h(p(()=>{let n=l(),r=v(`span`,n);s(n,r),t(()=>{c(r,`key`,String(e))}),y(r,`badge badge-outline`);let i=g(r);return s(r,i),t(()=>{d(i,e)}),n}),n,r)}})});let M=v(`div`,b);s(b,M),y(M,`grid gap-6`);let N=v(`div`,M);s(M,N),y(N,`card bg-base-100 shadow`);let P=v(`div`,N);s(N,P),y(P,`card-body gap-4`);let F=v(`div`,P);s(P,F),y(F,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let I=v(`span`,F);s(F,I),y(I,`badge badge-outline`),s(I,m(`当前 locale：`));let xe=e(`rue:slot:anchor`);s(I,xe),t(()=>{let e=T;r(()=>h(e,I,xe))});let Se=v(`span`,F);s(F,Se),y(Se,`badge badge-outline`),s(Se,m(`fallback：en`));let L=v(`div`,P);s(P,L);let R=v(`div`,L);s(L,R),y(R,`text-3xl font-semibold`);let Ce=e(`rue:slot:anchor`);s(R,Ce),t(()=>{let e=o(`你好，{name}！`,{name:oe.get()},T);r(()=>h(e,R,Ce))});let z=v(`div`,L);s(L,z),y(z,`mt-2 text-base-content/70`);let we=e(`rue:slot:anchor`);s(z,we),t(()=>{let e=o(`欢迎回来`,void 0,T);r(()=>h(e,z,we))});let Te=e(`rue:slot:anchor`);s(L,Te),t(()=>{let e=T===`ja-JP`?p(()=>{let e=l(),t=v(`div`,e);return s(e,t),y(t,`mt-2 text-xs text-base-content/50`),s(t,m(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),e}):``;r(()=>h(e,L,Te))});let B=v(`div`,P);s(P,B),y(B,`grid gap-4 md:grid-cols-3`);let V=v(`div`,B);s(B,V),y(V,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Ee=v(`div`,V);s(V,Ee),y(Ee,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Ee,m(`提醒`));let H=v(`div`,V);s(V,H),y(H,`mt-2 text-lg font-medium`);let De=e(`rue:slot:anchor`);s(H,De),t(()=>{let e=o(`你有 {count} 条新的提醒。`,{count:3},T);r(()=>h(e,H,De))});let U=v(`div`,B);s(B,U),y(U,`rounded-box border border-base-300 bg-base-200/50 p-4`);let Oe=v(`div`,U);s(U,Oe),y(Oe,`text-xs uppercase tracking-[0.24em] text-base-content/45`),s(Oe,m(`日期格式`));let W=v(`div`,U);s(U,W),y(W,`mt-2 text-lg font-medium`);let ke=e(`rue:slot:anchor`);s(W,ke),t(()=>{let e=f(`2026-05-23T09:00:00.000Z`,`long`,T);r(()=>h(e,W,ke))});let G=v(`div`,B);s(B,G),y(G,`rounded-box border border-base-300 bg-base-200/50 p-4`);let K=v(`div`,G);s(G,K),y(K,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Ae=e(`rue:slot:anchor`);s(K,Ae),t(()=>{let e=o(`订单总计`,void 0,T);r(()=>h(e,K,Ae))});let je=v(`div`,G);s(G,je),y(je,`mt-2 text-lg font-medium`);let Me=e(`rue:slot:anchor`);s(je,Me),t(()=>{let e=te(1299,`currency`,T);r(()=>h(e,je,Me))});let q=v(`div`,P);s(P,q),y(q,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let J=v(`div`,q);s(q,J);let Ne=v(`div`,J);s(J,Ne),y(Ne,`text-sm font-medium`);let Pe=e(`rue:slot:anchor`);s(Ne,Pe),t(()=>{let e=o(`源文本就是 key。`,void 0,T);r(()=>h(e,Ne,Pe))});let Fe=v(`div`,J);s(J,Fe),y(Fe,`mt-1 text-sm text-base-content/65`),s(Fe,m(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let Ie=v(`button`,q);s(q,Ie),y(Ie,`btn btn-primary`);let Le=e(`rue:slot:anchor`);s(Ie,Le),t(()=>{let e=o(`立即结账`,void 0,T);r(()=>h(e,Ie,Le))});let Re=v(`div`,M);s(M,Re),y(Re,`card bg-base-100 shadow`);let Y=v(`div`,Re);s(Re,Y),y(Y,`card-body gap-3`);let ze=v(`h3`,Y);s(Y,ze),y(ze,`text-xl font-semibold`),s(ze,m(`源文本即 key`));let Be=v(`p`,Y);s(Y,Be),y(Be,`text-sm leading-6 text-base-content/70`),s(Be,m(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=v(`div`,Y);s(Y,X),y(X,`overflow-x-auto`);let Z=v(`table`,X);s(X,Z),y(Z,`table table-zebra`);let Ve=v(`thead`,Z);s(Z,Ve);let Q=v(`tr`,Ve);s(Ve,Q);let He=v(`th`,Q);s(Q,He),s(He,m(`源文本`));let Ue=v(`th`,Q);s(Q,Ue),s(Ue,m(`当前输出`));let $=v(`tbody`,Z);s(Z,$);let We=e(`rue:list:start`),Ge=e(`rue:list:end`);s($,We),s($,Ge);let Ke=new Map;return t(()=>{Ke=ee({items:ce.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(n,i,a,o,u)=>{h(p(()=>{let i=l(),a=v(`tr`,i);s(i,a),t(()=>{c(a,`key`,String(n.source))});let o=v(`td`,a);s(a,o),y(o,`font-mono text-xs md:text-sm`);let u=e(`rue:slot:anchor`);s(o,u),t(()=>{let e=n.source;r(()=>h(e,o,u))});let d=v(`td`,a);s(a,d);let f=e(`rue:slot:anchor`);return s(d,f),t(()=>{let e=n.rendered;r(()=>h(e,d,f))}),i}),i,a)}})}),b})},oe=ne({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:i,nameRef:c,name:u}=x(`useSetup:0:0:dup1`,()=>a(()=>{let e=x(`useRef:1:2`,()=>o()),t=x(`useRef:1:3`,()=>o());return e.current||=w(),t.current||=x(`ref:1:4`,()=>n(`Alice`)),{i18nRef:e,nameRef:t,name:x(`computed:1:5`,()=>b(()=>t.current))}}));return p(n=>{let a=l(),o=e(`rue:component:anchor`);s(a,o);let c=_(T,{name:u.get()});return t(()=>{let e=_(C,{i18n:i.current,children:c});r(()=>h(e,a,o))}),a})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{oe as default};