import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,it as f,l as p,lt as m,s as h,t as g,tt as ee,wt as _,yt as v,z as te}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as ne}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as re,r as b,t as x}from"./src-CdSB0jP2.js";import{t as ie}from"./createHomeSplitExamplePage-BftZ6-s2.js";var ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],oe=e=>new Promise(t=>setTimeout(t,e)),S=()=>re({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await oe(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),se=n=>p(a=>{let o=c(`label`,a);e(o,`form-control gap-2`);let s=c(`span`,o);t(o,s),e(s,`label-text font-medium`),t(s,i(`用户名`));let u=c(`input`,o);return t(o,u),l(u,`data-testid`,`i18n-user-name-input`),e(u,`input input-bordered`),r(()=>{f(u,n.name.value)}),te(u,`input`,e=>{n.name.value=e.target.value}),l(u,`placeholder`,`Alice`),o}),C=n=>{let{_:d,d:f,n:re,locale:x,availableLocales:ie,isLocaleLoading:oe,loadLocaleMessages:S,currentLocale:C,currentName:ce,japaneseLoaded:le,switchLocale:ue,previewRows:de,localeStatus:fe}=y(`useSetup:0:0`,()=>_(()=>{let{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s}=b(),c=i.value,l=y(`computed:1:0`,()=>m(()=>n.name.value)),u=l,d=a.value.includes(`ja-JP`);return{_:e,d:t,n:r,locale:i,availableLocales:a,isLocaleLoading:o,loadLocaleMessages:s,currentLocale:c,currentName:l,japaneseLoaded:d,switchLocale:async e=>{e===`ja-JP`&&!d&&await s(`ja-JP`),i.value=e},previewRows:y(`computed:1:1`,()=>m(()=>[{source:`你好，{name}！`,rendered:e(`你好，{name}！`,{name:u.get()},c)},{source:`欢迎回来`,rendered:e(`欢迎回来`,void 0,c)},{source:`你有 {count} 条新的提醒。`,rendered:e(`你有 {count} 条新的提醒。`,{count:3},c)},{source:`立即结账`,rendered:e(`立即结账`,void 0,c)}])),localeStatus:o(`ja-JP`)?`ja-JP 语言包加载中...`:d?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`}}));return p(m=>{let _=c(`div`,m);e(_,`grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]`);let y=c(`div`,_);t(_,y),e(y,`card bg-base-100 shadow`);let b=c(`div`,y);t(y,b),e(b,`card-body gap-4`);let x=c(`div`,b);t(b,x);let S=c(`div`,x);t(x,S),e(S,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(S,i(`控制台`));let le=c(`h2`,x);t(x,le),e(le,`mt-2 text-2xl font-semibold`),t(le,i(`语言切换与懒加载`));let pe=c(`p`,x);t(x,pe),e(pe,`mt-2 text-sm leading-6 text-base-content/70`),t(pe,i("这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。"));let me=a(`rue:component:anchor`);t(b,me),r(()=>{let e=g(se,{name:n.name});v(()=>h(e,b,me))});let w=c(`div`,b);t(b,w),e(w,`grid gap-2`);let he=c(`span`,w);t(w,he),e(he,`label-text font-medium`),t(he,i(`切换语言`));let T=c(`div`,w);t(w,T),e(T,`grid gap-2`);let ge=a(`rue:list:start`),_e=a(`rue:list:end`);t(T,ge),t(T,_e);let ve=new Map;r(()=>{ve=ne({items:ae||[],getKey:(e,t)=>e.id,elements:ve,parent:T,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(n,i,o,u,d)=>{h(p(()=>{let i=s(),o=C===n.id,u=n.id===`ja-JP`&&oe(`ja-JP`),d=c(`button`,i);t(i,d),r(()=>{l(d,`key`,String(n.id))}),r(()=>{e(d,String(`btn justify-between ${o?`btn-primary`:`btn-outline`}`))}),r(()=>{ee(d,u)}),te(d,`click`,()=>{ue(n.id)});let f=c(`span`,d);t(d,f);let p=a(`rue:slot:anchor`);t(f,p),r(()=>{let e=n.label;v(()=>h(e,f,p))});let m=c(`span`,d);t(d,m),e(m,`text-xs opacity-70`);let g=a(`rue:slot:anchor`);return t(m,g),r(()=>{let e=u?`加载中...`:n.hint;v(()=>h(e,m,g))}),i}),i,o)}})});let E=c(`div`,b);t(b,E),e(E,`rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6`);let ye=c(`div`,E);t(E,ye),e(ye,`font-medium`),t(ye,i(`运行状态`));let D=c(`div`,E);t(E,D),e(D,`mt-2 text-base-content/70`);let be=o(D);t(D,be),r(()=>{u(be,fe)});let O=c(`div`,E);t(E,O),e(O,`mt-3 flex flex-wrap gap-2`);let xe=a(`rue:list:start`),Se=a(`rue:list:end`);t(O,xe),t(O,Se);let Ce=new Map;r(()=>{Ce=ne({items:ie.value||[],getKey:(e,t)=>e,elements:Ce,parent:O,before:Se,singleRoot:!0,trackIndex:!1,start:xe,renderItem:(n,i,a,d,f)=>{h(p(()=>{let i=s(),a=c(`span`,i);t(i,a),r(()=>{l(a,`key`,String(n))}),e(a,`badge badge-outline`);let d=o(a);return t(a,d),r(()=>{u(d,n)}),i}),i,a)}})});let k=c(`div`,_);t(_,k),e(k,`grid gap-6`);let A=c(`div`,k);t(k,A),e(A,`card bg-base-100 shadow`);let j=c(`div`,A);t(A,j),e(j,`card-body gap-4`);let M=c(`div`,j);t(j,M),e(M,`flex flex-wrap items-center gap-3 text-sm text-base-content/60`);let N=c(`span`,M);t(M,N),e(N,`badge badge-outline`),t(N,i(`当前 locale：`));let we=o(N);t(N,we),r(()=>{u(we,C)});let Te=c(`span`,M);t(M,Te),e(Te,`badge badge-outline`),t(Te,i(`fallback：en`));let P=c(`div`,j);t(j,P);let F=c(`div`,P);t(P,F),e(F,`text-3xl font-semibold`);let Ee=a(`rue:slot:anchor`);t(F,Ee),r(()=>{let e=d(`你好，{name}！`,{name:ce.get()},C);v(()=>h(e,F,Ee))});let I=c(`div`,P);t(P,I),e(I,`mt-2 text-base-content/70`);let De=a(`rue:slot:anchor`);t(I,De),r(()=>{let e=d(`欢迎回来`,void 0,C);v(()=>h(e,I,De))});let Oe=a(`rue:slot:anchor`);t(P,Oe),r(()=>{let n=C===`ja-JP`?p(()=>{let n=s(),r=c(`div`,n);return t(n,r),e(r,`mt-2 text-xs text-base-content/50`),t(r,i(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),n}):``;v(()=>h(n,P,Oe))});let L=c(`div`,j);t(j,L),e(L,`grid gap-4 md:grid-cols-3`);let R=c(`div`,L);t(L,R),e(R,`rounded-box border border-base-300 bg-base-200/50 p-4`);let ke=c(`div`,R);t(R,ke),e(ke,`text-xs uppercase tracking-[0.24em] text-base-content/45`),t(ke,i(`提醒`));let z=c(`div`,R);t(R,z),e(z,`mt-2 text-lg font-medium`);let Ae=a(`rue:slot:anchor`);t(z,Ae),r(()=>{let e=d(`你有 {count} 条新的提醒。`,{count:3},C);v(()=>h(e,z,Ae))});let B=c(`div`,L);t(L,B),e(B,`rounded-box border border-base-300 bg-base-200/50 p-4`);let je=c(`div`,B);t(B,je),e(je,`text-xs uppercase tracking-[0.24em] text-base-content/45`),t(je,i(`日期格式`));let V=c(`div`,B);t(B,V),e(V,`mt-2 text-lg font-medium`);let Me=a(`rue:slot:anchor`);t(V,Me),r(()=>{let e=f(`2026-05-23T09:00:00.000Z`,`long`,C);v(()=>h(e,V,Me))});let H=c(`div`,L);t(L,H),e(H,`rounded-box border border-base-300 bg-base-200/50 p-4`);let U=c(`div`,H);t(H,U),e(U,`text-xs uppercase tracking-[0.24em] text-base-content/45`);let Ne=a(`rue:slot:anchor`);t(U,Ne),r(()=>{let e=d(`订单总计`,void 0,C);v(()=>h(e,U,Ne))});let W=c(`div`,H);t(H,W),e(W,`mt-2 text-lg font-medium`);let Pe=a(`rue:slot:anchor`);t(W,Pe),r(()=>{let e=re(1299,`currency`,C);v(()=>h(e,W,Pe))});let G=c(`div`,j);t(j,G),e(G,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4`);let K=c(`div`,G);t(G,K);let q=c(`div`,K);t(K,q),e(q,`text-sm font-medium`);let Fe=a(`rue:slot:anchor`);t(q,Fe),r(()=>{let e=d(`源文本就是 key。`,void 0,C);v(()=>h(e,q,Fe))});let Ie=c(`div`,K);t(K,Ie),e(Ie,`mt-1 text-sm text-base-content/65`),t(Ie,i(`左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。`));let J=c(`button`,G);t(G,J),e(J,`btn btn-primary`);let Le=a(`rue:slot:anchor`);t(J,Le),r(()=>{let e=d(`立即结账`,void 0,C);v(()=>h(e,J,Le))});let Re=c(`div`,k);t(k,Re),e(Re,`card bg-base-100 shadow`);let Y=c(`div`,Re);t(Re,Y),e(Y,`card-body gap-3`);let ze=c(`h3`,Y);t(Y,ze),e(ze,`text-xl font-semibold`),t(ze,i(`源文本即 key`));let Be=c(`p`,Y);t(Y,Be),e(Be,`text-sm leading-6 text-base-content/70`),t(Be,i(`这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。`));let X=c(`div`,Y);t(Y,X),e(X,`overflow-x-auto`);let Z=c(`table`,X);t(X,Z),e(Z,`table table-zebra`);let Ve=c(`thead`,Z);t(Z,Ve);let Q=c(`tr`,Ve);t(Ve,Q);let He=c(`th`,Q);t(Q,He),t(He,i(`源文本`));let Ue=c(`th`,Q);t(Q,Ue),t(Ue,i(`当前输出`));let $=c(`tbody`,Z);t(Z,$);let We=a(`rue:list:start`),Ge=a(`rue:list:end`);t($,We),t($,Ge);let Ke=new Map;return r(()=>{Ke=ne({items:de.get()||[],getKey:(e,t)=>e.source,elements:Ke,parent:$,before:Ge,singleRoot:!0,trackIndex:!1,start:We,renderItem:(n,i,o,u,d)=>{h(p(()=>{let i=s(),o=c(`tr`,i);t(i,o),r(()=>{l(o,`key`,String(n.source))});let u=c(`td`,o);t(o,u),e(u,`font-mono text-xs md:text-sm`);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let e=n.source;v(()=>h(e,u,d))});let f=c(`td`,o);t(o,f);let p=a(`rue:slot:anchor`);return t(f,p),r(()=>{let e=n.rendered;v(()=>h(e,f,p))}),i}),i,o)}})}),_})},ce=ie({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,Demo:()=>{let{i18nRef:e,nameRef:i,name:o}=y(`useSetup:0:0:dup1`,()=>_(()=>{let e=y(`useRef:1:2`,()=>n()),t=y(`useRef:1:3`,()=>n());return e.current||=S(),t.current||=y(`ref:1:4`,()=>d(`Alice`)),{i18nRef:e,nameRef:t,name:t.current}}));return p(n=>{let i=s(),c=a(`rue:component:anchor`);t(i,c);let l=g(C,{name:o});return r(()=>{let t=g(x,{i18n:e.current,children:l});v(()=>h(t,i,c))}),i})},codeCardClassName:`h-[420px] md:h-[1080px]`});export{ce as default};