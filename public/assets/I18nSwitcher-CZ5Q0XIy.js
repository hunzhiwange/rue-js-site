import{At as e,C as t,Dn as n,Dt as r,E as i,P as a,Vt as o,Wt as s,_n as c,_t as l,at as u,b as d,ct as f,et as p,gn as m,hn as ee,in as h,kn as g,nt as te,on as _,pn as v,qt as y,rn as b,rt as x,sn as S,st as C,tn as w,tt as ne,ut as T,vn as E,w as D,wn as O,x as re,xn as k}from"./rue-runtime-HIMg8Lz8.js";import{n as A,r as j,t as M}from"./rue-i18n-It7pr_Mn.js";import{t as N}from"./createHomeSplitExamplePage-DNdswIPW.js";var P=E(`<label class="form-control gap-2"><span class="label-text font-medium">用户名</span><input data-testid="i18n-user-name-input" class="input input-bordered" placeholder="Alice"></label>`),ie=E('<div class="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div><h2 class="mt-2 text-2xl font-semibold">语言切换与懒加载</h2><p class="mt-2 text-sm leading-6 text-base-content/70">这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。</p></div><!--rue:opaque-hole:0--><div class="grid gap-2"><span class="label-text font-medium">切换语言</span><div class="grid gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6"><div class="font-medium">运行状态</div><div class="mt-2 text-base-content/70"><!--rue:text-hole:2--></div><div class="mt-3 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3 text-sm text-base-content/60"><span class="badge badge-outline">当前 locale：<!--rue:text-hole:4--></span><span class="badge badge-outline">fallback：en</span></div><div><div class="text-3xl font-semibold"><!--rue:text-hole:5--></div><div class="mt-2 text-base-content/70"><!--rue:text-hole:6--></div><!--rue:text-hole:7--></div><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:8--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">日期格式</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:10--></div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:11--></div></div></div><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4"><div><div class="text-sm font-medium"><!--rue:text-hole:12--></div><div class="mt-1 text-sm text-base-content/65">左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。</div></div><button class="btn btn-primary"><!--rue:text-hole:13--></button></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h3 class="text-xl font-semibold">源文本即 key</h3><p class="text-sm leading-6 text-base-content/70">这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。</p><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th>源文本</th><th>当前输出</th></tr></thead><tbody><!--rue:text-hole:14--></tbody></table></div></div></div></div></div>'),ae=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],F=e=>new Promise(t=>setTimeout(t,e)),I=()=>A({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await F(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),oe=e=>{let t=u(e.name),i=s(`UserNameInput:hook:0`,!1),a=e=>{let t=()=>e.querySelector(`[data-testid="i18n-user-name-input"]`)?.focus();queueMicrotask(t),setTimeout(t,0)};return y(()=>f(o(Object.assign(e=>{let o=P().content.cloneNode(!0).firstChild,s=o.childNodes[1];s.setAttribute(`data-testid`,`i18n-user-name-input`),s.className=`input input-bordered`;let c;O(()=>{let e=t.get().value,n=e==null?``:String(e);Object.is(c,n)||(c=n,r(s,n))});let l=e=>{let n=e=>{if(i.current)return;let n=e.target,r=n.ownerDocument;t.get().value=n.value,a(r)};typeof n==`function`&&n(e)};s.addEventListener(`input`,l),n(()=>s.removeEventListener(`input`,l));let u=e=>{let t=()=>{i.current=!0};typeof t==`function`&&t(e)};s.addEventListener(`compositionstart`,u),n(()=>s.removeEventListener(`compositionstart`,u));let d=e=>{let n=e=>{let n=e.target,r=n.ownerDocument;i.current=!1,t.get().value=n.value,a(r)};typeof n==`function`&&n(e)};return s.addEventListener(`compositionend`,d),n(()=>s.removeEventListener(`compositionend`,d)),s.setAttribute(`placeholder`,`Alice`),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{t.set(e.name)}),()=>e))},L=r=>{let s=u(r.name),{_:h,d:_,n:y,locale:b,availableLocales:x,isLocaleLoading:S,loadLocaleMessages:w}=j(),A=a(()=>b.value);A.get();let M=A,N=a(()=>x.value.includes(`ja-JP`));N.get();let P=N,F=async e=>{e===`ja-JP`&&!P.get()&&await w(`ja-JP`),b.value=e},I=a(()=>[{source:`你好，{name}！`,rendered:h(`你好，{name}！`,{name:s.get().value},M.get())},{source:`欢迎回来`,rendered:h(`欢迎回来`,void 0,M.get())},{source:`你有 {count} 条新的提醒。`,rendered:h(`你有 {count} 条新的提醒。`,{count:3},M.get())},{source:`立即结账`,rendered:h(`立即结账`,void 0,M.get())}]);I.get();let L=a(()=>S(`ja-JP`)?`ja-JP 语言包加载中...`:P.get()?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`);return L.get(),f(e(()=>{let e=l(),r=ie().content.cloneNode(!0),a=r.firstChild,f=a.childNodes[0].childNodes[0].childNodes[1],p=f.parentNode,b=a.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],w=b.parentNode,j=a.childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],M=j.parentNode,N=a.childNodes[0].childNodes[0].childNodes[3].childNodes[2].childNodes[0],P=N.parentNode,R=a.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1],z=R.parentNode,B=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],se=B.parentNode,V=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],ce=V.parentNode,H=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2],le=H.parentNode,U=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],ue=U.parentNode,W=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],de=W.parentNode,G=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[0],fe=G.parentNode,K=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[1].childNodes[0],pe=K.parentNode,q=a.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0],me=q.parentNode,J=a.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],he=J.parentNode,Y=a.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],ge=Y.parentNode;e.appendChild(r);let X=ee(p);C(X,oe,()=>({name:s.get()})),p.insertBefore(X,f);let Z=[];O(()=>{Z=D(w,b,Z,ae||[],(e,t)=>e.id,(e,r)=>{let a=u(e);return t((e,t,r)=>i(e,r,()=>o(Object.assign(e=>{let t=m(`button`,e),r;O(()=>{let e=`btn justify-between ${A.get()===a.get().id?`btn-primary`:`btn-outline`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i;O(()=>{let e=!!(a.get().id===`ja-JP`&&S(`ja-JP`));Object.is(i,e)||(i=e,t.disabled=e)});let s=e=>{let t=()=>{F(a.get().id)};typeof t==`function`&&t(e)};t.addEventListener(`click`,s),n(()=>t.removeEventListener(`click`,s));let l=m(`span`,t);v(t,l);let u=c(``);v(l,u),k(u,()=>a.get().label);let d=m(`span`,t);return v(t,d),d.className=`text-xs opacity-70`,ne(()=>a.get().id===`ja-JP`&&S(`ja-JP`)?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=c(`加载中...`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c(typeof a.get().hint==`string`||typeof a.get().hint==`number`||typeof a.get().hint==`bigint`?a.get().hint:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(d),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>d(Z)),O(()=>{let e=L.get();g(()=>T(e,M,j))});let Q=[];O(()=>{let e=x.value||[];Q=D(P,N,Q,e,(e,t)=>e,(e,n)=>{let r=u(e);return t((e,t,n)=>i(e,n,()=>o(Object.assign(e=>{let t=m(`span`,e);t.className=`badge badge-outline`;let n=c(``);return v(t,n),k(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>d(Q)),O(()=>{let e=A.get();g(()=>T(e,z,R))}),O(()=>{let e=h(`你好，{name}！`,{name:s.get().value},A.get());g(()=>T(e,se,B))}),O(()=>{let e=h(`欢迎回来`,void 0,A.get());g(()=>T(e,ce,V))}),te(le,H,()=>{let e=A.get()===`ja-JP`;return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=m(`div`,e);return t.className=`mt-2 text-xs text-base-content/50`,v(t,c(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),O(()=>{let e=h(`你有 {count} 条新的提醒。`,{count:3},A.get());g(()=>T(e,ue,U))}),O(()=>{let e=_(`2026-05-23T09:00:00.000Z`,`long`,A.get());g(()=>T(e,de,W))}),O(()=>{let e=h(`订单总计`,void 0,A.get());g(()=>T(e,fe,G))}),O(()=>{let e=y(1299,`currency`,A.get());g(()=>T(e,pe,K))}),O(()=>{let e=h(`源文本就是 key。`,void 0,A.get());g(()=>T(e,me,q))}),O(()=>{let e=h(`立即结账`,void 0,A.get());g(()=>T(e,he,J))});let _e=E(`<tr><td class="font-mono text-xs md:text-sm">rue:row-text</td><td>rue:row-text</td></tr>`),$=[];return O(()=>{let e=I.get()||[];$=D(ge,Y,$,e,(e,t)=>e.source,(e,t,n)=>{let r=e,i;return re(e=>{let t=_e().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.data=``,n.parentNode;let a=t.childNodes[1].childNodes[0];a.data=``,a.parentNode;let o;{let e=r.source==null||typeof r.source==`boolean`?``:String(r.source);Object.is(o,e)||(n.textContent=e,o=e)}let s;{let e=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);Object.is(s,e)||(a.textContent=e,s=e)}return i=()=>{{let e=r.source==null||typeof r.source==`boolean`?``:String(r.source);Object.is(o,e)||(n.textContent=e,o=e)}{let e=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);Object.is(s,e)||(a.textContent=e,s=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>d($)),e},!0),e=>p(()=>{s.set(e.name)}),()=>r)},R=_(()=>{let{i18nRef:e,name:t}=S(`useSetup:0:0`,()=>h(()=>{let e=b(),t=w(`Alice`);return e.current||=I(),{i18nRef:e,name:t}}));return x(M,()=>({i18n:e.current,children:(e,n,r)=>i(e,r,()=>o(Object.assign(e=>{let n=l();return C(n,L,()=>({name:t})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))});_(L);var z=N({title:`语言切换（_ 模型）`,source:`import { type FC, ref, useRef } from '@rue-js/rue'
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
  const composingRef = useRef(false)
  const restoreInputFocus = (ownerDocument: Document) => {
    const restore = () =>
      ownerDocument.querySelector<HTMLInputElement>('[data-testid="i18n-user-name-input"]')?.focus()
    queueMicrotask(restore)
    setTimeout(restore, 0)
  }

  return (
    <label className="form-control gap-2">
      <span className="label-text font-medium">用户名</span>
      <input
        data-testid="i18n-user-name-input"
        className="input input-bordered"
        value={props.name.value}
        onInput={(event: Event) => {
          if (composingRef.current) return
          const input = event.target as HTMLInputElement
          const ownerDocument = input.ownerDocument
          props.name.value = input.value
          restoreInputFocus(ownerDocument)
        }}
        onCompositionStart={() => {
          composingRef.current = true
        }}
        onCompositionEnd={(event: Event) => {
          const input = event.target as HTMLInputElement
          const ownerDocument = input.ownerDocument
          composingRef.current = false
          props.name.value = input.value
          restoreInputFocus(ownerDocument)
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