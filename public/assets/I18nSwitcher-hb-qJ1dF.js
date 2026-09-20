import{Bt as e,Dt as t,F as n,H as r,Ht as i,I as a,Jt as o,Ot as s,U as c,Ut as l,V as u,Vt as d,Wt as f,Y as p,_t as m,dn as h,en as g,f as _,fn as v,g as ee,gn as y,gt as b,h as x,hn as S,in as C,m as te,mn as w,p as T,pn as E,q as D,qt as O,sn as k,st as A,tt as j,u as ne,vt as M,yn as N,yt as P,zt as F}from"./rue-runtime-Cv6BZekS.js";import{n as I,r as L,t as R}from"./rue-i18n-COFXVUgn.js";import{t as z}from"./createHomeSplitExamplePage-DqLcVC_n.js";var B=N(`<label class="form-control gap-2"><span class="label-text font-medium">用户名</span><input data-testid="i18n-user-name-input" class="input input-bordered" placeholder="Alice"></label>`),re=N('<div class="grid gap-6 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">控制台</div><h2 class="mt-2 text-2xl font-semibold">语言切换与懒加载</h2><p class="mt-2 text-sm leading-6 text-base-content/70">这个 demo 直接演示新的 `_()` 模型：没有 `common.hello` 这类路径，源文本本身就是 key。</p></div><!--rue:opaque-hole:0--><div class="grid gap-2"><span class="label-text font-medium">切换语言</span><div class="grid gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/60 p-4 text-sm leading-6"><div class="font-medium">运行状态</div><div class="mt-2 text-base-content/70">rue:direct-text</div><div class="mt-3 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3 text-sm text-base-content/60"><span class="badge badge-outline">当前 locale：<!--rue:text-hole:4--></span><span class="badge badge-outline">fallback：en</span></div><div><div class="text-3xl font-semibold"><!--rue:text-hole:5--></div><div class="mt-2 text-base-content/70"><!--rue:text-hole:6--></div><!--rue:text-hole:7--></div><div class="grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">提醒</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:8--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45">日期格式</div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/50 p-4"><div class="text-xs uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:10--></div><div class="mt-2 text-lg font-medium"><!--rue:text-hole:11--></div></div></div><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-primary/20 bg-primary/5 p-4"><div><div class="text-sm font-medium"><!--rue:text-hole:12--></div><div class="mt-1 text-sm text-base-content/65">左侧四行源文本就是消息 key，不再维护单独的 key 命名空间。</div></div><button class="btn btn-primary"><!--rue:text-hole:13--></button></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h3 class="text-xl font-semibold">源文本即 key</h3><p class="text-sm leading-6 text-base-content/70">这里故意把源文本和当前输出放在一起看，强调新的模型就是“值就是 key”。</p><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th>源文本</th><th>当前输出</th></tr></thead><tbody><!--rue:text-hole:14--></tbody></table></div></div></div></div></div>'),ie=[{id:`zh-CN`,label:`中文`,hint:`内置`},{id:`en`,label:`English`,hint:`内置`},{id:`ja-JP`,label:`日本語`,hint:`首次点击懒加载`}],V=e=>new Promise(t=>setTimeout(t,e)),H=()=>I({locale:`zh-CN`,fallbackLocale:`en`,messages:{"zh-CN":{"你好，{name}！":`你好，{name}！`,欢迎回来:`欢迎回来`,"你有 {count} 条新的提醒。":`你有 {count} 条新的提醒。`,订单总计:`订单总计`,立即结账:`立即结账`,"源文本就是 key。":`源文本就是 key。`},en:{"你好，{name}！":`you hao, {name}!`,欢迎回来:`Welcome back`,"你有 {count} 条新的提醒。":`You have {count} new notifications.`,订单总计:`Order total`,立即结账:`Checkout now`,"源文本就是 key。":`The source text is the key.`}},datetimeFormats:{"zh-CN":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},en:{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}},"ja-JP":{long:{year:`numeric`,month:`long`,day:`numeric`,weekday:`long`}}},numberFormats:{"zh-CN":{currency:{style:`currency`,currency:`CNY`}},en:{currency:{style:`currency`,currency:`USD`}},"ja-JP":{currency:{style:`currency`,currency:`JPY`}}},messageLoader:{"ja-JP":async()=>(await V(420),{default:{"你好，{name}！":`こんにちは、{name}！`,"你有 {count} 条新的提醒。":`{count} 件の新しい通知があります。`,订单总计:`注文合計`,立即结账:`今すぐ支払う`,"源文本就是 key。":`ソース文そのものが key です。`}})}}),ae=(e,t,n)=>{let r=M(b(e,`name`)),i=D(`UserNameInput:hook:0`,!1),a=e=>{let t=()=>e.querySelector(`[data-testid="i18n-user-name-input"]`)?.focus();queueMicrotask(t),setTimeout(t,0)};return p(()=>c(f(e=>{let t=B().content.cloneNode(!0).firstChild,n=t.childNodes[1];n.setAttribute(`data-testid`,`i18n-user-name-input`),n.setAttribute(`class`,`input input-bordered`);let o;C(()=>{let e=r.get().value,t=e==null?``:String(e);Object.is(o,t)||(o=t,n.value=t)});let s=e=>{let t=e=>{if(i.current)return;let t=e.target,n=t.ownerDocument;r.get().value=t.value,a(n)};typeof t==`function`&&t(e)};n.addEventListener(`input`,s),k(()=>n.removeEventListener(`input`,s)),k(ne(e,n,`compositionstart`,()=>()=>{i.current=!0}));let c=e=>{let t=e=>{let t=e.target,n=t.ownerDocument;i.current=!1,r.get().value=t.value,a(n)};typeof t==`function`&&t(e)};return n.addEventListener(`compositionend`,c),k(()=>n.removeEventListener(`compositionend`,c)),n.setAttribute(`placeholder`,`Alice`),[t,t]}),e=>g(()=>{r.set(e.name)}),()=>m(e)))},U=(r,i,o)=>{let p=M(b(r,`name`)),{_:D,d:A,n:ne,locale:I,availableLocales:R,isLocaleLoading:z,loadLocaleMessages:B}=L(),V=j(()=>I.value);h(()=>V.get());let H=V,U=j(()=>R.value.includes(`ja-JP`));h(()=>U.get());let W=U,G=async e=>{e===`ja-JP`&&!W.get()&&await B(`ja-JP`),I.value=e},K=j(()=>[{source:`你好，{name}！`,rendered:D(`你好，{name}！`,{name:p.get().value},H.get())},{source:`欢迎回来`,rendered:D(`欢迎回来`,void 0,H.get())},{source:`你有 {count} 条新的提醒。`,rendered:D(`你有 {count} 条新的提醒。`,{count:3},H.get())},{source:`立即结账`,rendered:D(`立即结账`,void 0,H.get())}]);h(()=>K.get());let q=j(()=>z(`ja-JP`)?`ja-JP 语言包加载中...`:W.get()?`ja-JP 已注册到当前 composer。`:`ja-JP 将在首次点击时按需加载。`);return h(()=>q.get()),c(f(r=>{let i=w(),o=re().content.cloneNode(!0),c=o.firstChild,m=c.childNodes[0].childNodes[0].childNodes[1],h=m.parentNode,g=c.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],b=g.parentNode,j=c.childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],I=j.parentNode,L=c.childNodes[0].childNodes[0].childNodes[3].childNodes[2].childNodes[0],B=L.parentNode,H=c.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1],U=H.parentNode,W=c.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],oe=W.parentNode,J=c.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],se=J.parentNode,Y=c.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2],ce=Y.parentNode,le=c.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],ue=le.parentNode,de=c.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],fe=de.parentNode,pe=c.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[0],me=pe.parentNode,he=c.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[1].childNodes[0],ge=he.parentNode,_e=c.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0],ve=_e.parentNode,ye=c.childNodes[1].childNodes[0].childNodes[0].childNodes[3].childNodes[1].childNodes[0],be=ye.parentNode,xe=c.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],Se=xe.parentNode,X=E(`rue:text-hole:2`);I.replaceChild(X,j),i.appendChild(o);let Ce=(e,t,n)=>{let r=()=>u(ae,()=>({name:p.get()}));return e==null?r():d(e,n,r)},we=m.nextSibling;h.removeChild(m),e({parent:h,before:we},()=>Ce,()=>({}));let Z=[];O(()=>{Z=x(b,g,Z,ie||[],(e,t)=>e.id,(n,r)=>{let i=M(n);return T((n,r,a)=>{let o=()=>f(n=>{let r=w(),a=S(`button`,r);v(r,a),C(()=>{t(a,`btn justify-between ${V.get()===i.get().id?`btn-primary`:`btn-outline`}`)}),C(()=>{s(a,i.get().id===`ja-JP`&&z(`ja-JP`))});let o=e=>{let t=()=>{G(i.get().id)};typeof t==`function`&&t(e)};a.addEventListener(`click`,o),k(()=>a.removeEventListener(`click`,o));let c=S(`span`,a);v(a,c);let l=E(`rue:slot:anchor`);v(c,l),e({parent:c,before:l},()=>F(i.get().label),()=>({}));let u=S(`span`,a);v(a,u),t(u,`text-xs opacity-70`);let f=E(`rue:slot:anchor`);v(u,f),e({parent:u,before:f},()=>i.get().id===`ja-JP`&&z(`ja-JP`)?(e,t,n)=>{let r=()=>P(e=>{let t=y(`加载中...`);return[t,t]});return e==null?r():d(e,n,r)}:F(i.get().hint),()=>({}));let p=y(``),m=y(``);return r.insertBefore(p,r.firstChild),r.appendChild(m),[r.firstChild,r.lastChild]});return n==null?o():d(n,a,o)},(e,t)=>{n=e,r=t,i.set(e)},void 0)},!1,!1)}),k(()=>_(Z)),e({parent:I,before:X},()=>F(q.get()),()=>({}));let Q=[];O(()=>{let e=R.value||[];Q=x(B,L,Q,e,(e,t)=>e,(e,t)=>{let r=M(e);return T((e,t,i)=>{let o=()=>n(e=>{let t=S(`span`,e);t.setAttribute(`class`,`badge badge-outline`);let n=y(``);return v(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():d(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),k(()=>_(Q)),e({parent:U,before:H},()=>F(V.get()),()=>({})),e({parent:oe,before:W},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`你好，{name}！`,{name:p.get().value},V.get()),()=>({})),e({parent:se,before:J},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`欢迎回来`,void 0,V.get()),()=>({})),l(ce,Y,()=>{let e=V.get()===`ja-JP`;return e?{__rue_compiled_branch_key:!0,create:()=>P(e=>{let t=S(`div`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/50`),v(t,y(`日语包故意没有“欢迎回来”，这里会自动回退到英文。`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>P(t=>{let n=y(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>P(e=>{let t=w();return[t.firstChild,t.lastChild]})}}),e({parent:ue,before:le},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`你有 {count} 条新的提醒。`,{count:3},V.get()),()=>({})),e({parent:fe,before:de},()=>((e,t,n)=>(r,i,a)=>F(A(e,t,n))(r,i,a))(`2026-05-23T09:00:00.000Z`,`long`,V.get()),()=>({})),e({parent:me,before:pe},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`订单总计`,void 0,V.get()),()=>({})),e({parent:ge,before:he},()=>((e,t,n)=>(r,i,a)=>F(ne(e,t,n))(r,i,a))(1299,`currency`,V.get()),()=>({})),e({parent:ve,before:_e},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`源文本就是 key。`,void 0,V.get()),()=>({})),e({parent:be,before:ye},()=>((e,t,n)=>(r,i,a)=>F(D(e,t,n))(r,i,a))(`立即结账`,void 0,V.get()),()=>({}));let Te=N(`<tr><td class="font-mono text-xs md:text-sm">rue:row-text</td><td>rue:row-text</td></tr>`),$=[];O(()=>{let e=K.get()||[];$=ee(Se,xe,$,e,(e,t)=>e.source,(e,t,n)=>{let r=e,i;return te(e=>{let t=Te().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.parentNode;let a=t.childNodes[1].childNodes[0];a.parentNode;let o=r.source==null||typeof r.source==`boolean`?``:String(r.source);n.textContent=o;let s=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);return a.textContent=s,i=()=>{{let e=r.source==null||typeof r.source==`boolean`?``:String(r.source);Object.is(o,e)||(n.textContent=e,o=e)}{let e=r.rendered==null||typeof r.rendered==`boolean`?``:String(r.rendered);Object.is(s,e)||(a.textContent=e,s=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),k(()=>_($));let Ee=y(``),De=y(``);return i.insertBefore(Ee,i.firstChild),i.appendChild(De),[i.firstChild,i.lastChild]}),e=>g(()=>{p.set(e.name)}),()=>m(r))},W=(e,t,n)=>p(()=>i(()=>{let{i18nRef:e,name:t}=o(`I18nLocaleSwitcherDemo:setup-region:0`,()=>({i18nRef:D(`I18nLocaleSwitcherDemo:hook:0`),name:A(`Alice`)}));return e.current||=H(),{__rue_compiled_branch_key:0,create:()=>u(R,()=>({i18n:e.current,children:(e,n,i)=>{let a=()=>f(e=>{let n=w();r(n,U,()=>({name:t}));let i=y(``),a=y(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]});return e==null?a():d(e,i,a)}}))}})),G=`import { type FC, ref, useRef } from '@rue-js/rue'
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
`,K=(e,t,n)=>u(z,()=>({options:{title:`语言切换（_ 模型）`,source:G,codeCardClassName:`h-[420px] md:h-[1080px]`},children:(e,t,n)=>{let i=()=>f(e=>{let t=w();r(t,W,()=>({}));let n=y(``),i=y(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));export{K as default};