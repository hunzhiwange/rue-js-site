import{B as e,Bt as t,Dt as n,F as r,Ht as i,I as a,Jt as o,Ot as s,P as c,Ut as l,V as u,Vt as d,W as f,Wt as p,X as m,Y as h,ct as g,dn as _,en as v,et as y,f as b,fn as x,g as ee,gn as S,h as te,hn as C,in as w,m as ne,mn as T,mt as E,nt as D,p as O,pn as k,qt as A,sn as j,u as M,yn as N,z as P,zt as F}from"./rue-runtime-BWbIfNT8.js";import{n as I,r as L,t as R}from"./rue-i18n-BsAlYIHB.js";import{t as z}from"./createHomeSplitExamplePage-Cjn7V321.js";var B=N(`<label class="form-control gap-2"><span class="label-text font-medium">用户名</span><input data-testid="i18n-user-name-input" class="input input-bordered" placeholder="Alice"></label>`),re=N('<div class="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div><h2 class="mt-2 text-2xl font-semibold">语言切换与懒加载</h2><p class="mt-2 text-sm leading-6 text-base-content/70">这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。</p></div><!--rue:opaque-hole:0--><div class="grid gap-2"><span class="label-text font-medium">切换语言</span><div class="grid gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6"><div class="font-medium">运行状态</div><div class="mt-2 text-base-content/70">rue:direct-text</div><div class="mt-3 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3 text-sm text-base-content/60"><span class="badge badge-outline">当前 locale：<!--rue:text-hole:4--></span><span class="badge badge-outline">fallback：en</span></div><div><div class="text-3xl font-semibold"><!--rue:text-hole:5--></div><div class="mt-2 text-base-content/70"><!--rue:text-hole:6--></div><!--rue:text-hole:7--></div><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:8--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">日期格式</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:10--></div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:11--></div></div></div><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4"><div><div class="text-sm font-medium"><!--rue:text-hole:12--></div><div class="mt-1 text-sm text-base-content/65">左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。</div></div><button class="btn btn-primary"><!--rue:text-hole:13--></button></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h3 class="text-xl font-semibold">源文本即 key</h3><p class="text-sm leading-6 text-base-content/70">这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。</p><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th>源文本</th><th>当前输出</th></tr></thead><tbody><!--rue:text-hole:14--></tbody></table></div></div></div></div></div>'),ie=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],V=e=>new Promise(t=>setTimeout(t,e)),H=()=>I({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await V(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),ae=(t,n,r)=>{let i=f(P(t,`name`)),o=y(`UserNameInput:hook:0`,!1),s=e=>{let t=()=>e.querySelector(`[data-testid="i18n-user-name-input"]`)?.focus();queueMicrotask(t),setTimeout(t,0)};return D(()=>a(p(e=>{let t=B().content.cloneNode(!0).firstChild,n=t.childNodes[1];n.setAttribute(`data-testid`,`i18n-user-name-input`),n.setAttribute(`class`,`input input-bordered`);let r;w(()=>{let e=i.get().value,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.value=t)});let a=e=>{let t=e=>{if(o.current)return;let t=e.target,n=t.ownerDocument;i.get().value=t.value,s(n)};typeof t==`function`&&t(e)};n.addEventListener(`input`,a),j(()=>n.removeEventListener(`input`,a)),j(M(e,n,`compositionstart`,()=>()=>{o.current=!0}));let c=e=>{let t=e=>{let t=e.target,n=t.ownerDocument;o.current=!1,i.get().value=t.value,s(n)};typeof t==`function`&&t(e)};return n.addEventListener(`compositionend`,c),j(()=>n.removeEventListener(`compositionend`,c)),n.setAttribute(`placeholder`,`Alice`),[t,t]}),e=>v(()=>{i.set(e.name)}),()=>e(t)))},U=(r,i,o)=>{let y=f(P(r,`name`)),{_:E,d:D,n:M,locale:I,availableLocales:R,isLocaleLoading:z,loadLocaleMessages:B}=L(),V=g(()=>I.value);_(()=>V.get());let H=V,U=g(()=>R.value.includes(`ja-JP`));_(()=>U.get());let W=U,G=async e=>{e===`ja-JP`&&!W.get()&&await B(`ja-JP`),I.value=e},K=g(()=>[{source:`你好，{name}！`,rendered:E(`你好，{name}！`,{name:y.get().value},H.get())},{source:`欢迎回来`,rendered:E(`欢迎回来`,void 0,H.get())},{source:`你有 {count} 条新的提醒。`,rendered:E(`你有 {count} 条新的提醒。`,{count:3},H.get())},{source:`立即结账`,rendered:E(`立即结账`,void 0,H.get())}]);_(()=>K.get());let q=g(()=>z(`ja-JP`)?`ja-JP 语言包加载中...`:W.get()?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`);return _(()=>q.get()),a(p(e=>{let r=T(),i=re().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[0].childNodes[0].childNodes[1],g=o.parentNode,_=a.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],v=_.parentNode,P=a.childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],I=P.parentNode,L=a.childNodes[0].childNodes[0].childNodes[3].childNodes[2].childNodes[0],B=L.parentNode,H=a.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1],U=H.parentNode,W=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],oe=W.parentNode,J=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],se=J.parentNode,Y=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2],ce=Y.parentNode,X=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],le=X.parentNode,ue=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],de=ue.parentNode,fe=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[0],pe=fe.parentNode,me=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[1].childNodes[0],he=me.parentNode,ge=a.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0],_e=ge.parentNode,ve=a.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],ye=ve.parentNode,be=a.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],xe=be.parentNode,Se=k(`rue:text-hole:2`);I.replaceChild(Se,P),r.appendChild(i);let Ce=(e,t,n)=>{let r=()=>c(ae,()=>({name:y.get()}));return e==null?r():d(e,n,r)},we=o.nextSibling;g.removeChild(o),t({parent:g,before:we},()=>Ce,()=>({}));let Z=[];A(()=>{Z=te(v,_,Z,ie||[],(e,t)=>e.id,(e,r)=>{let i=f(e);return O((e,r,a)=>{let o=()=>p(e=>{let r=T(),a=C(`button`,r);x(r,a),w(()=>{n(a,`btn justify-between ${V.get()===i.get().id?`btn-primary`:`btn-outline`}`)}),w(()=>{s(a,i.get().id===`ja-JP`&&z(`ja-JP`))});let o=e=>{let t=()=>{G(i.get().id)};typeof t==`function`&&t(e)};a.addEventListener(`click`,o),j(()=>a.removeEventListener(`click`,o));let c=C(`span`,a);x(a,c);let l=k(`rue:slot:anchor`);x(c,l),t({parent:c,before:l},()=>F(i.get().label),()=>({}));let f=C(`span`,a);x(a,f),n(f,`text-xs opacity-70`);let p=k(`rue:slot:anchor`);x(f,p),t({parent:f,before:p},()=>i.get().id===`ja-JP`&&z(`ja-JP`)?(e,t,n)=>{let r=()=>u(e=>{let t=S(`加载中...`);return[t,t]});return e==null?r():d(e,n,r)}:F(i.get().hint),()=>({}));let m=S(``),h=S(``);return r.insertBefore(m,r.firstChild),r.appendChild(h),[r.firstChild,r.lastChild]});return e==null?o():d(e,a,o)},(t,n)=>{e=t,r=n,i.set(t)},void 0)},!1,!1)}),j(()=>b(Z)),t({parent:I,before:Se},()=>F(q.get()),()=>({}));let Q=[];A(()=>{let e=R.value||[];Q=te(B,L,Q,e,(e,t)=>e,(e,t)=>{let n=f(e);return O((e,t,r)=>{let i=()=>h(e=>{let t=C(`span`,e);t.setAttribute(`class`,`badge badge-outline`);let r=S(``);return x(t,r),m(r,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),j(()=>b(Q)),t({parent:U,before:H},()=>F(V.get()),()=>({})),t({parent:oe,before:W},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`你好，{name}！`,{name:y.get().value},V.get()),()=>({})),t({parent:se,before:J},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`欢迎回来`,void 0,V.get()),()=>({})),l(ce,Y,()=>{let e=V.get()===`ja-JP`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=C(`div`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/50`),x(t,S(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(t=>{let n=S(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=T();return[t.firstChild,t.lastChild]})}}),t({parent:le,before:X},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`你有 {count} 条新的提醒。`,{count:3},V.get()),()=>({})),t({parent:de,before:ue},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`2026-05-23T09:00:00.000Z`,`long`,V.get()),()=>({})),t({parent:pe,before:fe},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`订单总计`,void 0,V.get()),()=>({})),t({parent:he,before:me},()=>((e,t,n)=>(r,i,a)=>F(M(e,t,n))(r,i,a))(1299,`currency`,V.get()),()=>({})),t({parent:_e,before:ge},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`源文本就是 key。`,void 0,V.get()),()=>({})),t({parent:ye,before:ve},()=>((e,t,n)=>(r,i,a)=>F(E(e,t,n))(r,i,a))(`立即结账`,void 0,V.get()),()=>({}));let Te=N(`<tr><td class="font-mono text-xs md:text-sm">rue:row-text</td><td>rue:row-text</td></tr>`),$=[];A(()=>{let e=K.get()||[];$=ee(xe,be,$,e,(e,t)=>e.source,(e,t,n)=>{let r=e,i;return ne(e=>{let t=Te().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.parentNode;let a=t.childNodes[1].childNodes[0];a.parentNode;let o=r.source==null||typeof r.source==`boolean`?``:String(r.source);n.textContent=o;let s=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);return a.textContent=s,i=()=>{{let e=r.source==null||typeof r.source==`boolean`?``:String(r.source);Object.is(o,e)||(n.textContent=e,o=e)}{let e=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);Object.is(s,e)||(a.textContent=e,s=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),j(()=>b($));let Ee=S(``),De=S(``);return r.insertBefore(Ee,r.firstChild),r.appendChild(De),[r.firstChild,r.lastChild]}),e=>v(()=>{y.set(e.name)}),()=>e(r))},W=(e,t,n)=>D(()=>i(()=>{let{i18nRef:e,name:t}=o(`I18nLocaleSwitcherDemo:setup-region:0`,()=>({i18nRef:y(`I18nLocaleSwitcherDemo:hook:0`),name:E(`Alice`)}));return e.current||=H(),{__rue_compiled_branch_key:0,create:()=>c(R,()=>({i18n:e.current,children:(e,n,i)=>{let a=()=>p(e=>{let n=T();r(n,U,()=>({name:t}));let i=S(``),a=S(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]});return e==null?a():d(e,i,a)}}))}})),G=`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,K=(e,t,n)=>c(z,()=>({options:{title:`语言切换（_ 模型）`,source:G,codeCardClassName:`h-[420px] md:h-[1080px]`},children:(e,t,n)=>{let i=()=>p(e=>{let t=T();r(t,W,()=>({}));let n=S(``),i=S(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));export{K as default};