import{B as e,Bt as t,C as n,Dn as r,Et as i,H as a,K as o,Kt as s,S as c,Sn as l,Ut as u,V as d,W as f,Wt as p,Y as m,_n as h,bn as g,fn as _,ft as v,gn as y,hn as b,ht as x,kn as S,mn as ee,nt as C,q as w,qt as T,wn as E,x as D,z as O}from"./rue-runtime-CwEGJ854.js";import{n as k,r as A,t as j}from"./rue-i18n-CUgFIwCr.js";import{t as M}from"./createHomeSplitExamplePage-DuLZTUZH.js";var N=h(`<label class="form-control gap-2"><span class="label-text font-medium">用户名</span><input data-testid="i18n-user-name-input" class="input input-bordered" placeholder="Alice"></label>`),te=h('<div class="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div><h2 class="mt-2 text-2xl font-semibold">语言切换与懒加载</h2><p class="mt-2 text-sm leading-6 text-base-content/70">这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。</p></div><!--rue:opaque-hole:0--><div class="grid gap-2"><span class="label-text font-medium">切换语言</span><div class="grid gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6"><div class="font-medium">运行状态</div><div class="mt-2 text-base-content/70"><!--rue:text-hole:2--></div><div class="mt-3 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3 text-sm text-base-content/60"><span class="badge badge-outline">当前 locale：<!--rue:text-hole:4--></span><span class="badge badge-outline">fallback：en</span></div><div><div class="text-3xl font-semibold"><!--rue:text-hole:5--></div><div class="mt-2 text-base-content/70"><!--rue:text-hole:6--></div><!--rue:text-hole:7--></div><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:8--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">日期格式</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:10--></div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:11--></div></div></div><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4"><div><div class="text-sm font-medium"><!--rue:text-hole:12--></div><div class="mt-1 text-sm text-base-content/65">左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。</div></div><button class="btn btn-primary"><!--rue:text-hole:13--></button></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h3 class="text-xl font-semibold">源文本即 key</h3><p class="text-sm leading-6 text-base-content/70">这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。</p><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th>源文本</th><th>当前输出</th></tr></thead><tbody><!--rue:text-hole:14--></tbody></table></div></div></div></div></div>'),ne=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],P=e=>new Promise(t=>setTimeout(t,e)),F=()=>k({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await P(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),I=e=>{let t=f(e.name);return w(i(Object.assign(e=>{let n=N().content.cloneNode(!0).firstChild,i=n.childNodes[1];i.setAttribute(`data-testid`,`i18n-user-name-input`),i.className=`input input-bordered`;let a;E(()=>{let e=t.get().value,n=e==null?``:String(e);Object.is(a,n)||(a=n,v(i,n))});let o=e=>{let n=e=>{t.get().value=e.target.value};typeof n==`function`&&n(e)};return i.addEventListener(`input`,o),r(()=>i.removeEventListener(`input`,o)),i.setAttribute(`placeholder`,`Alice`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{t.set(e.name)}),()=>e)},L=t=>{let a=f(t.name),{_:s,d:u,n:p,locale:h,availableLocales:v,isLocaleLoading:T,loadLocaleMessages:k}=A(),j=l(()=>h.value);j.get();let M=j,N=l(()=>v.value.includes(`ja-JP`));N.get();let P=N,F=async e=>{e===`ja-JP`&&!P.get()&&await k(`ja-JP`),h.value=e},L=l(()=>[{source:`你好，{name}！`,rendered:s(`你好，{name}！`,{name:a.get().value},M.get())},{source:`欢迎回来`,rendered:s(`欢迎回来`,void 0,M.get())},{source:`你有 {count} 条新的提醒。`,rendered:s(`你有 {count} 条新的提醒。`,{count:3},M.get())},{source:`立即结账`,rendered:s(`立即结账`,void 0,M.get())}]);L.get();let R=l(()=>T(`ja-JP`)?`ja-JP 语言包加载中...`:P.get()?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`);return R.get(),w(x(()=>{let t=C(),l=te().content.cloneNode(!0),h=l.firstChild,x=h.childNodes[0].childNodes[0].childNodes[1],w=x.parentNode,O=h.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],k=O.parentNode,A=h.childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],M=A.parentNode,N=h.childNodes[0].childNodes[0].childNodes[3].childNodes[2].childNodes[0],P=N.parentNode,z=h.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1],re=z.parentNode,B=h.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],ie=B.parentNode,V=h.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],ae=V.parentNode,H=h.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2],oe=H.parentNode,U=h.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],se=U.parentNode,W=h.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],ce=W.parentNode,G=h.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[0],le=G.parentNode,K=h.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[1].childNodes[0],ue=K.parentNode,q=h.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0],de=q.parentNode,J=h.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],fe=J.parentNode,Y=h.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],pe=Y.parentNode;t.appendChild(l);let X=ee(w);o(X,I,()=>({name:a.get()})),w.insertBefore(X,x);let Z=[];E(()=>{Z=n(k,O,Z,ne||[],(e,t)=>e.id,(t,n)=>{let a=f(t),o=f(n);return c((t,n,o)=>D(t,o,()=>i(Object.assign(t=>{let n=b(`button`,t),o;E(()=>{let e=`btn justify-between ${j.get()===a.get().id?`btn-primary`:`btn-outline`}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,n.className=t)});let s;E(()=>{let e=!!(a.get().id===`ja-JP`&&T(`ja-JP`));Object.is(s,e)||(s=e,n.disabled=e)});let c=e=>{let t=()=>{F(a.get().id)};typeof t==`function`&&t(e)};n.addEventListener(`click`,c),r(()=>n.removeEventListener(`click`,c));let l=b(`span`,n);_(n,l);let u=y(``);_(l,u),g(u,()=>a.get().label);let d=b(`span`,n);return _(n,d),d.className=`text-xs opacity-70`,e(()=>a.get().id===`ja-JP`&&T(`ja-JP`)?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=y(`加载中...`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=y(typeof a.get().hint==`string`||typeof a.get().hint==`number`||typeof a.get().hint==`bigint`?a.get().hint:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(d),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,a.set(e),o.set(r)})})}),E(()=>{let e=R.get();S(()=>m(e,M,A))});let Q=[];E(()=>{let e=v.value||[];Q=n(P,N,Q,e,(e,t)=>e,(e,t)=>{let n=f(e),r=f(t);return c((e,t,r)=>D(e,r,()=>i(Object.assign(e=>{let t=b(`span`,e);t.className=`badge badge-outline`;let r=y(``);return _(t,r),g(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),E(()=>{let e=j.get();S(()=>m(e,re,z))}),E(()=>{let e=s(`你好，{name}！`,{name:a.get().value},j.get());S(()=>m(e,ie,B))}),E(()=>{let e=s(`欢迎回来`,void 0,j.get());S(()=>m(e,ae,V))}),d(oe,H,()=>{let e=j.get()===`ja-JP`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=b(`div`,e);return t.className=`mt-2 text-xs text-base-content/50`,_(t,y(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=y(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=C();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),E(()=>{let e=s(`你有 {count} 条新的提醒。`,{count:3},j.get());S(()=>m(e,se,U))}),E(()=>{let e=u(`2026-05-23T09:00:00.000Z`,`long`,j.get());S(()=>m(e,ce,W))}),E(()=>{let e=s(`订单总计`,void 0,j.get());S(()=>m(e,le,G))}),E(()=>{let e=p(1299,`currency`,j.get());S(()=>m(e,ue,K))}),E(()=>{let e=s(`源文本就是 key。`,void 0,j.get());S(()=>m(e,de,q))}),E(()=>{let e=s(`立即结账`,void 0,j.get());S(()=>m(e,fe,J))});let $=[];return E(()=>{let e=L.get()||[];$=n(pe,Y,$,e,(e,t)=>e.source,(e,t)=>{let n=f(e),r=f(t);return c((e,t,r)=>D(e,r,()=>i(Object.assign(e=>{let t=b(`tr`,e),r=b(`td`,t);_(t,r),r.className=`font-mono text-xs md:text-sm`;let i=y(``);_(r,i),g(i,()=>n.get().source);let a=b(`td`,t);_(t,a);let o=y(``);return _(a,o),g(o,()=>n.get().rendered),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),t},!0),e=>O(()=>{a.set(e.name)}),()=>t)},R=s(()=>{let{i18nRef:e,name:n}=T(`useSetup:0:0`,()=>p(()=>{let e=u(),n=t(`Alice`);return e.current||=F(),{i18nRef:e,name:n}}));return a(j,()=>({i18n:e.current,children:(e,t,r)=>D(e,r,()=>i(Object.assign(e=>{let t=C();return o(t,L,()=>({name:n})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}),z=M({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
      rendered: _('你好，{name}！', { name: props.name.value }, currentLocale),
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
                {_('你好，{name}！', { name: props.name.value }, currentLocale)}
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
  const name = ref('Alice')

  if (!i18nRef.current) {
    i18nRef.current = createDemoI18n()
  }

  return (
    <I18nProvider i18n={i18nRef.current}>
      <DemoSurface name={name} />
    </I18nProvider>
  )
}

export default I18nLocaleSwitcherDemo
`,Demo:R,codeCardClassName:`h-[420px] md:h-[1080px]`});export{z as default};