import{C as e,F as t,H as n,I as r,L as i,N as a,P as o,S as s,W as c,Y as l,_ as u,c as d,dt as f,ft as p,j as m,lt as h,pt as g,rt as _,t as v,u as y,ut as b}from"./vapor-runtime-CKndxKFn.js";import{a as x,n as S}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as C,t as w}from"./src-CqIWk1va.js";import{n as ee}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as te}from"./Code-B1JFTu6m.js";import{t as ne}from"./tabs-BbiCzXqJ.js";var re={"top-start":{horizontal:`start`,vertical:`top`},top:{horizontal:`center`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},middle:{horizontal:`center`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},bottom:{horizontal:`center`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`},start:{horizontal:`start`,vertical:`bottom`},center:{horizontal:`center`,vertical:`middle`},end:{horizontal:`end`,vertical:`bottom`}},T=e=>typeof e==`number`?`${e}px`:e,E=(...e)=>e.filter(Boolean).join(` `),D=e=>Array.isArray(e)?e.flatMap(e=>D(e)):e==null?[]:[e],O=e=>D(e).length>0,k=e=>{if(e==null)return null;if(typeof e==`object`){let t={},n=T(e.x),r=T(e.y);return n!=null&&(t.paddingInline=n),r!=null&&(t.paddingBlock=r),Object.keys(t).length?t:null}let t=T(e);return t==null?null:{padding:t}},ie=(e,t)=>e===`horizontal`?t?`flex-row-reverse`:`flex-row`:t?`flex-col-reverse`:``,ae=`pointer-events-auto w-full max-w-sm rounded-[1.25rem] border px-4 py-3 text-left text-sm backdrop-blur transition`,oe={soft:{neutral:`border-base-300 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,info:`border-info/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,success:`border-success/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,warning:`border-warning/30 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,error:`border-error/30 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`,loading:`border-primary/25 bg-base-100/95 text-base-content shadow-lg supports-[backdrop-filter]:bg-base-100/80`},solid:{neutral:`border-neutral bg-neutral text-neutral-content shadow-lg`,info:`border-info bg-info text-info-content shadow-lg`,success:`border-success bg-success text-success-content shadow-lg`,warning:`border-warning bg-warning text-warning-content shadow-lg`,error:`border-error bg-error text-error-content shadow-lg`,loading:`border-primary bg-primary text-primary-content shadow-lg`},outline:{neutral:`border-neutral bg-base-100/90 text-base-content shadow-md`,info:`border-info bg-base-100/90 text-base-content shadow-md`,success:`border-success bg-base-100/90 text-base-content shadow-md`,warning:`border-warning bg-base-100/90 text-base-content shadow-md`,error:`border-error bg-base-100/90 text-base-content shadow-md`,loading:`border-primary bg-base-100/90 text-base-content shadow-md`}},se={soft:{neutral:`bg-base-200 text-base-content/70`,info:`bg-info/15 text-info`,success:`bg-success/15 text-success`,warning:`bg-warning/20 text-warning`,error:`bg-error/15 text-error`,loading:`bg-primary/15 text-primary`},solid:{neutral:`bg-neutral-content/10 text-neutral-content`,info:`bg-info-content/10 text-info-content`,success:`bg-success-content/10 text-success-content`,warning:`bg-warning-content/10 text-warning-content`,error:`bg-error-content/10 text-error-content`,loading:`bg-primary-content/10 text-primary-content`},outline:{neutral:`bg-base-200 text-base-content/70`,info:`bg-info/10 text-info`,success:`bg-success/10 text-success`,warning:`bg-warning/15 text-warning`,error:`bg-error/10 text-error`,loading:`bg-primary/10 text-primary`}},ce={soft:{neutral:`text-base-content/50 hover:bg-base-200 hover:text-base-content`,info:`text-info/75 hover:bg-info/10 hover:text-info`,success:`text-success/75 hover:bg-success/10 hover:text-success`,warning:`text-warning/80 hover:bg-warning/15 hover:text-warning`,error:`text-error/75 hover:bg-error/10 hover:text-error`,loading:`text-primary/75 hover:bg-primary/10 hover:text-primary`},solid:{neutral:`text-neutral-content/75 hover:bg-neutral-content/10 hover:text-neutral-content`,info:`text-info-content/75 hover:bg-info-content/10 hover:text-info-content`,success:`text-success-content/75 hover:bg-success-content/10 hover:text-success-content`,warning:`text-warning-content/75 hover:bg-warning-content/10 hover:text-warning-content`,error:`text-error-content/75 hover:bg-error-content/10 hover:text-error-content`,loading:`text-primary-content/75 hover:bg-primary-content/10 hover:text-primary-content`},outline:{neutral:`text-base-content/50 hover:bg-base-200 hover:text-base-content`,info:`text-info/75 hover:bg-info/10 hover:text-info`,success:`text-success/75 hover:bg-success/10 hover:text-success`,warning:`text-warning/80 hover:bg-warning/15 hover:text-warning`,error:`text-error/75 hover:bg-error/10 hover:text-error`,loading:`text-primary/75 hover:bg-primary/10 hover:text-primary`}},le=3,A=`top`,j=0,M=(e,t)=>typeof t!=`number`||t<=0||e.length<=t?e:e.slice(e.length-t),N=(e,t,n=!1)=>{if(typeof document>`u`)return null;let r=typeof e==`function`?e():e;return r===!1?t??null:typeof r==`string`?document.querySelector(r):r instanceof HTMLElement?r:n?document.body:null},P=({records:e,onDestroy:t,maxCount:n,duration:r=le,closable:i,pauseOnHover:a=!0,showIcon:o=!0,variant:s,type:c=`neutral`,placement:l=A,...u})=>e.length===0?w(`div`,{style:{display:`contents`}}):w(G,{placement:l,...u,children:e.map(e=>{let{key:n,content:l,children:u,type:d=c,variant:f=s,duration:p=r,closable:m=i,pauseOnHover:h=a,showIcon:g=o,onClose:_,onOpenChange:v,...y}=e.config,b=O(u)?u:l;return w(W,{...y,type:d,variant:f,duration:p,closable:m,pauseOnHover:h,showIcon:g,onClose:e=>{_&&_(e)},onOpenChange:(n,r)=>{n||t(e.key),v&&v(n,r)},children:b},e.key)})}),F=(t={})=>{let n=h(),r=h([]),i=h(),a=h(),o=h(t);o.current=t;let c=()=>{let e=N((o.current??{}).getContainer,i.current??null,!0);if(!e)return null;if(a.current==null){let e=document.createElement(`div`);e.style.display=`contents`,e.dataset.rueToastMessageViewport=`true`,a.current=e}return a.current.parentElement!==e&&e.appendChild(a.current),a.current},l=()=>{let t=c();if(!t)return;let n=o.current??{};e(w(P,{records:r.current??[],onDestroy:u,...n}),t)},u=e=>{let t=r.current??[];if(e==null){t.length>0&&(r.current=[],l());return}let n=t.filter(t=>t.key!==e);n.length!==t.length&&(r.current=n,l())},d=e=>{let t=e.key??`rue-toast-message-${j++}`,n={key:t,config:{...e,key:t}},i=r.current??[],a=i.findIndex(e=>e.key===t),s=a===-1?[...i,n]:[...i.slice(0,a),n,...i.slice(a+1)];return s=M(s,(o.current??{}).maxCount),r.current=s,l(),()=>{u(t)}};if(n.current==null){let e=(e,t)=>n=>d({...n,type:e,duration:n.duration??t});n.current={open:d,info:e(`info`),success:e(`success`),warning:e(`warning`),error:e(`error`),loading:e(`loading`,0),destroy:u}}s(()=>{r.current=[],a.current&&=(a.current.remove(),void 0),i.current=void 0});let f=w(`div`,{style:{display:`contents`},ref:e=>{i.current=e??void 0,o.current?.getContainer===!1&&e&&l()}});return[n.current,f]},ue=e=>e===`warning`||e===`error`?`alert`:`status`,de=e=>e===`warning`||e===`error`?`assertive`:`polite`,I=e=>typeof e!=`number`||e<=0?null:e*1e3,fe=new WeakMap,L=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`M12 10v6`}),w(`path`,{d:`M12 7.5h.01`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),R=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`m8.5 12 2.5 2.5 4.5-5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),z=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`path`,{d:`M12 4 3.8 18.2a1 1 0 0 0 .87 1.5h14.66a1 1 0 0 0 .87-1.5z`,strokeLinejoin:`round`}),w(`path`,{d:`M12 9v4`,strokeLinecap:`round`}),w(`path`,{d:`M12 16.5h.01`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),B=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`circle`,{cx:`12`,cy:`12`,r:`9`}),w(`path`,{d:`m9 9 6 6`,strokeLinecap:`round`}),w(`path`,{d:`m15 9-6 6`,strokeLinecap:`round`})]}),V=({className:e})=>C(`svg`,{viewBox:`0 0 24 24`,className:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[w(`path`,{d:`m7 7 10 10`,strokeLinecap:`round`}),w(`path`,{d:`M17 7 7 17`,strokeLinecap:`round`})]}),pe=e=>{let t=`h-5 w-5`;switch(e){case`info`:return w(L,{className:t});case`success`:return w(R,{className:t});case`warning`:return w(z,{className:t});case`error`:return w(B,{className:t});case`loading`:return w(`span`,{className:`loading loading-spinner loading-sm`,"aria-hidden":`true`});default:return null}},me=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:E(`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl`,t),children:n}),he=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:E(`min-w-0 flex-1`,t),children:n}),ge=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:E(`font-semibold leading-5`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:E(`mt-1 text-xs leading-5 opacity-80`,t),children:n}),_e=({as:e=`div`,className:t,children:n,...r})=>w(e,{...r,className:E(`flex shrink-0 items-center gap-2`,t),children:n}),U=({as:e=`button`,className:t,icon:n,label:r=`关闭提示`,children:i,...a})=>{let o=e,s={...a},c=s.onClick;return(e===`button`||e==null)&&s.type==null&&(s.type=`button`),s[`aria-label`]??=r,w(o,{...s,className:E(`inline-flex h-8 w-8 items-center justify-center rounded-xl transition`,t),onClick:e=>{if(typeof c==`function`&&c(e),e.defaultPrevented)return;let t=e.currentTarget?.closest(`[data-rue-toast-item-root="true"]`),n=t?fe.get(t):null;n&&n(`close`,e)},children:O(i)?i:n??w(V,{className:`h-4 w-4`})})},W=({as:e=`div`,open:t,defaultOpen:n=!0,type:r=`neutral`,variant:i=`soft`,icon:a,showIcon:o=!0,title:c,description:l,action:u,closable:d,closeIcon:m,duration:g,pauseOnHover:v=!0,className:y,style:b,contentClassName:x,titleClassName:S,descriptionClassName:ee,iconClassName:te,actionClassName:ne,closeClassName:re,children:T,onClose:D,onOpenChange:k,...ie})=>{let le=e,A=_(n),j=_(!!n),M=typeof t==`boolean`,[N,P]=f(M?!!t:A.value,{kind:`ref`}),F=_(!1),L=h(),R=h(),z=h(I(g)),B={...ie},U=B.onMouseEnter,W=B.onMouseLeave,G=null,K=M?!!t:N.value;`onMouseEnter`in B&&delete B.onMouseEnter,`onMouseLeave`in B&&delete B.onMouseLeave,B.role=B.role??ue(r),B[`aria-live`]=B[`aria-live`]??de(r),B[`data-rue-toast-item`]=B[`data-rue-toast-item`]??`true`,B[`data-rue-toast-type`]=B[`data-rue-toast-type`]??r,B[`data-rue-toast-item-root`]=B[`data-rue-toast-item-root`]??`true`;let q=B[`data-testid`],J=B[`data-rue-toast-item`],Y=B[`data-rue-toast-type`];function X(e){if(G){if(G.style.display=e?``:`none`,e){G.removeAttribute(`aria-hidden`),G.setAttribute(`data-rue-toast-item`,String(J)),G.setAttribute(`data-rue-toast-type`,String(Y)),q!=null&&G.setAttribute(`data-testid`,String(q));return}G.setAttribute(`aria-hidden`,`true`),G.removeAttribute(`data-rue-toast-item`),G.removeAttribute(`data-rue-toast-type`),q!=null&&G.removeAttribute(`data-testid`)}}let Z=(e=!1)=>{if(L.current!=null){if(e&&z.current!=null&&R.current!=null){let e=Date.now()-R.current;z.current=Math.max(0,z.current-e)}window.clearTimeout(L.current),L.current=void 0,R.current=void 0}},ve=()=>{Z(),N.value&&(v&&F.value||z.current==null||z.current<=0||(R.current=Date.now(),L.current=window.setTimeout(()=>{L.current=void 0,R.current=void 0,z.current=0,be(`timeout`)},z.current)))},ye=(e=!0)=>{Z(),e&&(z.current=I(g)),ve()},be=(e,t)=>{if(Z(),z.current=0,!N.value)return;P(!1),X(!1),M||(A.value=!1);let n={source:e,event:t};k&&k(!1,n),D&&D(n)};s(()=>{Z()}),p(()=>t,e=>{typeof e==`boolean`&&P(e)},{immediate:!0}),p(()=>n,e=>{let t=!!e;!M&&t!==j.value&&(j.value=t,A.value=t,P(t))},{immediate:!0}),p(()=>M?!!t:N.value,e=>{if(!e){Z(),X(!1);return}X(!0),ye(!0)},{immediate:!0}),p(()=>g,()=>{if(!N.value){z.current=I(g);return}ye(!0)}),p(()=>v,()=>{N.value&&ye(!1)});let xe=K;if(!xe)return null;let Se=oe[i][r],Ce=se[i][r],we=ce[i][r],Te=o===!1?null:a===void 0?pe(r):a,Q=O(c),Ee=O(l),$=O(T),De=O(u),Oe=O(Te);return w(`div`,{style:{display:`contents`},children:xe?w(le,{...B,className:E(ae,Se,y),style:b,ref:e=>{G=e,e&&fe.set(e,be),X(N.value)},onMouseEnter:e=>{F.value=!0,v&&Z(!0),typeof U==`function`&&U(e)},onMouseLeave:e=>{F.value=!1,v&&ve(),typeof W==`function`&&W(e)},children:C(`div`,{className:`flex items-start gap-3`,children:[Oe?w(me,{className:E(Ce,te),children:Te}):null,C(he,{className:x,children:[Q?w(ge,{className:S,children:c}):null,Ee?w(H,{className:ee,children:l}):null,$?w(`div`,{className:E(Q||Ee?`mt-2`:``),children:T}):null]}),De||d?C(_e,{className:E(`ml-3 items-start self-start`,ne),children:[u,d?w(`button`,{type:`button`,"aria-label":`关闭提示`,className:E(`inline-flex h-8 w-8 items-center justify-center rounded-xl transition`,we,re),onClick:e=>{be(`close`,e)},children:m??w(V,{className:`h-4 w-4`})}):null]}):null]})}):null})},G=({as:e=`div`,placement:t,horizontal:n,vertical:r,stack:i,reverse:a,inset:o,gap:s,zIndex:c,className:l,style:u,children:d,...f})=>{let p=e,m=t?re[t]:void 0,h=n??m?.horizontal,g=r??m?.vertical,_=ie(i,a),v=u?{...u}:{},y=k(o);s!=null&&(v.gap=T(s)),c!=null&&(v.zIndex=c),y&&Object.assign(v,y);let b=`toast`;return h&&(b+=` toast-${h}`),g&&(b+=` toast-${g}`),_&&(b+=` ${_}`),l&&(b+=` ${l}`),w(p,{...f,className:b,style:Object.keys(v).length?v:u,children:D(d)})},K=Object.assign(G,{Item:W,Icon:me,Content:he,Title:ge,Description:H,Action:_e,Close:U,useMessage:F}),q=({title:e,summary:n,tab:s,preview:u,code:f})=>y(()=>{let p=t(`div`);c(p,`component-preview not-prose text-base-content my-6 lg:my-12`);let h=t(`div`);m(p,h),c(h,`flex flex-wrap items-start justify-between gap-3`);let _=t(`div`);m(h,_);let b=t(`h2`);m(_,b),c(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),m(b,r(`# `));let x=i(b);m(b,x),g(()=>{l(x,e)});let S=a(`rue:slot:anchor`);m(_,S),g(()=>{d(n?y(()=>{let e=o(),r=t(`p`);m(e,r),c(r,`m-0 text-sm opacity-70`);let a=i(r);return m(r,a),g(()=>{l(a,n)}),e}):``,_,S)});let C=a(`rue:component:anchor`);m(p,C),g(()=>{d(v(ne,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.value,onChange:e=>s.value=e,className:`mb-3 mt-4`}),p,C)});let w=a(`rue:slot:anchor`);return m(p,w),g(()=>{d(s.value===`preview`?u():y(()=>{let e=o(),t=a(`rue:component:anchor`);return m(e,t),g(()=>{d(v(te,{className:`mt-2`,lang:`tsx`,code:f}),e,t)}),e}),p,w)}),p}),J=e=>Array.isArray(e)?e.flatMap(e=>J(e)):e==null?[]:[e],Y=({rows:e})=>y(()=>{let i=t(`div`);c(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=t(`table`);m(i,s),c(s,`table table-zebra`);let l=t(`thead`);m(s,l);let u=t(`tr`);m(l,u);let f=t(`th`);m(u,f),m(f,r(`属性`));let p=t(`th`);m(u,p),m(p,r(`说明`));let h=t(`th`);m(u,h),m(h,r(`类型`));let _=t(`th`);m(u,_),m(_,r(`默认值`));let v=t(`tbody`);m(s,v);let b=a(`rue:list:start`),x=a(`rue:list:end`);m(v,b),m(v,x);let C=new Map;return g(()=>{C=S({items:e||[],getKey:(e,t)=>e.prop,elements:C,parent:v,before:x,singleRoot:!0,start:b,renderItem:(e,r,i,s,c)=>{d(y(()=>{let r=o(),i=t(`tr`);m(r,i),g(()=>{n(i,`key`,String(e.prop))});let s=t(`td`);m(i,s);let c=t(`code`);m(s,c);let l=a(`rue:slot:anchor`);m(c,l),g(()=>{let t=e.prop;d(t,c,l)});let u=t(`td`);m(i,u);let f=a(`rue:slot:anchor`);m(u,f),g(()=>{let t=e.description;d(t,u,f)});let p=t(`td`);m(i,p);let h=t(`code`);m(p,h);let _=a(`rue:slot:anchor`);m(h,_),g(()=>{let t=e.type;d(t,h,_)});let v=t(`td`);m(i,v);let y=t(`code`);m(v,y);let b=a(`rue:slot:anchor`);return m(y,b),g(()=>{let t=e.defaultValue;d(t,y,b)}),r}),r,i)}})}),i}),X=({minHeight:e=`14rem`,children:t})=>u(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`},u(`div`,{className:`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`,style:{minHeight:e}},...J(t))),Z={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},ve=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ye=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],be=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],xe=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],Se=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],Ce=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],we=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],Te=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Q=()=>{let{tabs:e,controlledOpen:s,controlledToastKey:u,autoToastKey:f,messageApi:p,messageContextHolder:h}=x(`useSetup:0:0`,()=>b(()=>{let e={items:x(`ref:1:0`,()=>_(`preview`)),variants:x(`ref:1:1`,()=>_(`preview`)),controlled:x(`ref:1:2`,()=>_(`preview`)),useMessage:x(`ref:1:3`,()=>_(`preview`)),compound:x(`ref:1:4`,()=>_(`preview`)),basic:x(`ref:1:5`,()=>_(`preview`)),placements:x(`ref:1:6`,()=>_(`preview`)),stacked:x(`ref:1:7`,()=>_(`preview`)),inset:x(`ref:1:8`,()=>_(`preview`)),host:x(`ref:1:9`,()=>_(`preview`))},t=x(`ref:1:10`,()=>_(!0)),n=x(`ref:1:11`,()=>_(0)),r=x(`ref:1:12`,()=>_(0)),[i,a]=K.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,controlledOpen:t,controlledToastKey:n,autoToastKey:r,messageApi:i,messageContextHolder:a}}));return y(()=>{let _=o(),b=a(`rue:component:anchor`);return m(_,b),d(v(ee,{children:y(()=>{let _=o(),y=t(`div`);m(_,y),c(y,`max-w-none prose prose-sm md:prose-base`);let b=t(`h1`);m(y,b),m(b,r(`Toast 轻提示`));let x=t(`p`);m(y,x),c(x,`text-sm mt-3 mb-3`),m(x,r(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let S=t(`code`);m(x,S),m(S,r(`Toast.Item`)),m(x,r(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像 ant-design message 一样通过`));let ee=t(`code`);m(x,ee),m(ee,r(`Toast.useMessage()`)),m(x,r(`拿到`));let te=t(`code`);m(x,te),m(te,r(`messageApi`)),m(x,r(`和`));let ne=t(`code`);m(x,ne),m(ne,r(`contextHolder`)),m(x,r(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let re=i(x);m(x,re),l(re,` `);let T=t(`code`);m(x,T),m(T,r(`getContainer={false}`)),m(x,r(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let E=t(`div`);m(y,E),c(E,`text-sm flex flex-wrap gap-4`);let D=t(`a`);m(E,D),n(D,`href`,`https://daisyui.com/components/toast/`),n(D,`target`,`_blank`),m(D,r(`查看 Toast 静态样式`));let O=t(`h2`);m(y,O),m(O,r(`何时使用`));let k=t(`ul`);m(y,k);let ie=t(`li`);m(k,ie),m(ie,r(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let ae=t(`li`);m(k,ae),m(ae,r(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let oe=t(`li`);m(k,oe),m(oe,r(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let se=t(`li`);m(k,se),m(se,r(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let ce=a(`rue:component:anchor`);m(y,ce),g(()=>{d(v(q,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:e.items,preview:()=>C(X,{minHeight:`19rem`,children:[w(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),w(K,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ye.slice(0,3).map(e=>w(K.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
  <Toast.Item
    type="info"
    title="Draft synced"
    description="The latest edits have been pushed to your shared workspace."
    closable
  />
  <Toast.Item
    type="success"
    title="Publish complete"
    description="The release has been deployed to production without errors."
    closable
  />
</Toast>`}),y,ce)});let le=a(`rue:component:anchor`);m(y,le),g(()=>{d(v(q,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:e.variants,preview:()=>w(`div`,{className:`grid gap-4`,children:be.map(e=>C(X,{minHeight:`11rem`,children:[w(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),w(K,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:w(K.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:w(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`}),y,le)});let A=a(`rue:component:anchor`);m(y,A),g(()=>{d(v(q,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:e.controlled,preview:()=>C(X,{minHeight:`19rem`,children:[C(`div`,{className:`absolute left-4 top-4 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm`,onClick:()=>{u.value+=1,s.value=!0},children:`重新显示受控提示`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{f.value+=1},children:`重新触发自动关闭`})]}),C(K,{className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,children:[w(K.Item,{open:s.value,type:`warning`,title:`Deployment paused`,description:`This one is controlled from the outside so you can coordinate with page state.`,closable:!0,onOpenChange:e=>{s.value=e}},u.value),w(K.Item,{type:`success`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4,closable:!0},f.value)]})]}),code:`const controlledOpen = ref(true)
const controlledToastKey = ref(0)
const autoToastKey = ref(0)

<button
  type="button"
  onClick={() => {
    controlledToastKey.value += 1
    controlledOpen.value = true
  }}
>
  重新显示受控提示
</button>

<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 56 }} gap={12}>
  <Toast.Item
    key={controlledToastKey.value}
    open={controlledOpen.value}
    type="warning"
    title="Deployment paused"
    description="This one is controlled from the outside."
    closable
    onOpenChange={nextOpen => {
      controlledOpen.value = nextOpen
    }}
  />
  <Toast.Item
    key={autoToastKey.value}
    type="success"
    title="Auto saved"
    description="This toast closes itself after 4 seconds."
    duration={4}
    closable
  />
</Toast>`}),y,A)});let j=a(`rue:component:anchor`);m(y,j),g(()=>{d(v(q,{title:`Toast.useMessage`,summary:`参考 ant-design message 的 hook 形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:e.useMessage,preview:()=>C(X,{minHeight:`18rem`,children:[C(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{p.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{p.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),w(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{p.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),w(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{p.destroy()},children:`清空当前消息`})]}),h]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
  placement: 'top-end',
  inset: { x: 16, y: 68 },
  gap: 12,
  maxCount: 3,
  zIndex: 80,
})

<button
  type="button"
  onClick={() => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    })
  }}
>
  Customized display duration
</button>

<button
  type="button"
  onClick={() => {
    messageApi.loading({
      key: 'publish',
      content: 'Publishing changes to preview...',
    })
  }}
>
  Start publish
</button>

<button
  type="button"
  onClick={() => {
    messageApi.open({
      key: 'publish',
      type: 'success',
      content: 'Published to preview. Same key, same slot, new state.',
      duration: 2,
    })
  }}
>
  Update same key
</button>

<button type="button" onClick={() => messageApi.destroy()}>
  Clear all
</button>

{contextHolder}

// keep it inside the current box instead:
// Toast.useMessage({
//   getContainer: false,
//   className: 'absolute',
//   placement: 'bottom-start',
//   inset: { x: 12, y: 12 },
// })`}),y,j)});let M=a(`rue:component:anchor`);m(y,M),g(()=>{d(v(q,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:e.compound,preview:()=>w(X,{minHeight:`15rem`,children:w(K,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:C(K.Item,{variant:`outline`,className:`max-w-md`,children:[w(K.Icon,{className:`bg-secondary/12 text-secondary`,children:w(`span`,{className:`text-lg font-black`,children:`R`})}),C(K.Content,{children:[w(K.Title,{children:`Workspace synced`}),w(K.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),C(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[w(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),w(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),w(K.Action,{className:`ml-3 items-start self-start`,children:w(K.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
  <Toast.Item variant="outline" className="max-w-md">
    <Toast.Icon className="bg-secondary/12 text-secondary">
      <span className="text-lg font-black">R</span>
    </Toast.Icon>
    <Toast.Content>
      <Toast.Title>Workspace synced</Toast.Title>
      <Toast.Description>
        Compound API is useful when you need a custom icon and richer actions.
      </Toast.Description>
    </Toast.Content>
    <Toast.Action className="ml-3 items-start self-start">
      <Toast.Close className="text-base-content/50 hover:bg-base-200 hover:text-base-content" />
    </Toast.Action>
  </Toast.Item>
</Toast>`}),y,M)});let N=t(`h2`);m(y,N),m(N,r(`兼容旧写法`));let P=t(`p`);m(y,P),c(P,`text-sm mt-2 mb-4`),m(P,r(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let F=a(`rue:component:anchor`);m(y,F),g(()=>{d(v(q,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:e.basic,preview:()=>C(X,{children:[w(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),w(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),w(K,{className:`absolute`,inset:16,gap:10,children:w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`}),y,F)});let ue=a(`rue:component:anchor`);m(y,ue),g(()=>{d(v(q,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:e.placements,preview:()=>w(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:ve.map(e=>C(X,{minHeight:`9.5rem`,children:[w(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),w(K,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:w(`div`,{role:`alert`,className:`${Z[e.tone]} shadow-sm`,children:w(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-info">
    <span>top-start</span>
  </div>
</Toast>

<Toast className="absolute" placement="center" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-success">
    <span>center</span>
  </div>
</Toast>

<Toast className="absolute" horizontal="end" vertical="bottom" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-warning">
    <span>bottom-end</span>
  </div>
</Toast>`}),y,ue)});let de=a(`rue:component:anchor`);m(y,de),g(()=>{d(v(q,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:e.stacked,preview:()=>C(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[w(X,{children:C(K,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`New mail arrived.`})}),w(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:w(`span`,{children:`Message sent successfully.`})})]})}),w(X,{children:C(K,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[w(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:w(`span`,{children:`Rollback ready`})}),w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>New mail arrived.</span>
  </div>
  <div role="alert" className="alert alert-success shadow-sm">
    <span>Message sent successfully.</span>
  </div>
</Toast>

<Toast
  className="absolute"
  placement="bottom-start"
  stack="horizontal"
  reverse
  inset={{ x: 16, y: 16 }}
  gap={12}
>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>Rollback ready</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Deploy queued</span>
  </div>
</Toast>`}),y,de)});let I=a(`rue:component:anchor`);m(y,I),g(()=>{d(v(q,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:e.inset,preview:()=>C(X,{minHeight:`15rem`,children:[C(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[w(`div`,{className:`h-10 rounded-box bg-base-200/80`}),C(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[w(`div`,{className:`h-20 rounded-box bg-base-200/70`}),w(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),w(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),C(K,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[w(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:w(`span`,{children:`Layered above the card.`})}),w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
  className="absolute"
  placement="top-end"
  inset={{ x: 20, y: 20 }}
  gap={10}
  zIndex={30}
>
  <div role="alert" className="alert alert-success shadow-lg">
    <span>Layered above the card.</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Inset keeps it off the edge.</span>
  </div>
</Toast>`}),y,I)});let fe=a(`rue:component:anchor`);m(y,fe),g(()=>{d(v(q,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:e.host,preview:()=>w(X,{children:C(K,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[w(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:w(`span`,{children:`Auto save completed.`})}),w(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:w(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
  as="section"
  className="absolute"
  placement="top"
  inset={{ x: 16, y: 16 }}
  role="status"
  aria-live="polite"
  gap={10}
>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Auto save completed.</span>
  </div>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>1 draft still requires review.</span>
  </div>
</Toast>`}),y,fe)});let L=t(`div`);m(y,L),c(L,`my-8 lg:my-12`);let R=t(`h2`);m(L,R),c(R,`mt-2 mb-4 text-lg font-semibold`),m(R,r(`API`));let z=t(`h3`);m(L,z),c(z,`mt-2 mb-3 text-base font-semibold`),m(z,r(`Toast.useMessage(options)`));let B=a(`rue:component:anchor`);m(L,B),g(()=>{d(v(Y,{rows:Ce}),L,B)});let V=t(`p`);m(L,V),c(V,`mt-4 text-sm opacity-70`),m(V,r(`返回值固定为`));let pe=t(`code`);m(V,pe),m(pe,r(`[messageApi, contextHolder]`)),m(V,r(`。为了保持 ant-like 用法，`));let me=t(`code`);m(V,me),m(me,r(`contextHolder`)),m(V,r(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let he=t(`code`);m(V,he),m(he,r(`document.body`)),m(V,r(`，传`));let ge=t(`code`);m(V,ge),m(ge,r(`getContainer={false}`)),m(V,r(`时才会回到 holder 内。`));let H=t(`h3`);m(L,H),c(H,`mt-8 mb-3 text-base font-semibold`),m(H,r(`messageApi`));let _e=a(`rue:component:anchor`);m(L,_e),g(()=>{d(v(Y,{rows:we}),L,_e)});let U=t(`h3`);m(L,U),c(U,`mt-8 mb-3 text-base font-semibold`),m(U,r(`ToastMessageConfig`));let W=a(`rue:component:anchor`);m(L,W),g(()=>{d(v(Y,{rows:Te}),L,W)});let G=t(`h3`);m(L,G),c(G,`mt-2 mb-3 text-base font-semibold`),m(G,r(`Toast 根容器`));let J=a(`rue:component:anchor`);m(L,J),g(()=>{d(v(Y,{rows:xe}),L,J)});let Q=t(`h3`);m(L,Q),c(Q,`mt-8 mb-3 text-base font-semibold`),m(Q,r(`Toast.Item 单条提示`));let Ee=a(`rue:component:anchor`);m(L,Ee),g(()=>{d(v(Y,{rows:Se}),L,Ee)});let $=t(`p`);m(L,$),c($,`mt-4 text-sm opacity-70`),m($,r(`Compound 子组件包括`));let De=t(`code`);m($,De),m(De,r(`Toast.Icon`)),m($,r(`、`));let Oe=t(`code`);m($,Oe),m(Oe,r(`Toast.Content`)),m($,r(`、`));let ke=t(`code`);m($,ke),m(ke,r(`Toast.Title`)),m($,r(`、`));let Ae=t(`code`);m($,Ae),m(Ae,r(`Toast.Description`)),m($,r(`、`));let je=t(`code`);m($,je),m(je,r(`Toast.Action`)),m($,r(`和`));let Me=i($);m($,Me),l(Me,` `);let Ne=t(`code`);return m($,Ne),m(Ne,r(`Toast.Close`)),m($,r(`。`)),_})}),_,b),_})};export{Q as default};