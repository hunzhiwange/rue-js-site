import{Cn as e,Ct as t,Lt as n,Mt as r,Nt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,s as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./tabs-B1XdBEJF.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:!Array.isArray(e)||e.some(e=>D(e)),O=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,rest:c,Component:l}=y(`useSetup:0:0`,()=>e(()=>{let{as:e,className:n,children:r,content:i,...a}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:t.as===void 0?`h6`:t.as}}));return h(e=>{let n=s(),r=o(`rue:component:anchor`);return f(n,r),p(()=>{let e=v(l,{...c,className:E(`footer-title`,t.className),children:t.content??t.children});m(()=>g(e,n,r))}),n})},k=r=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:_,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>e(()=>{let{as:e,className:t,children:i,content:a,href:o,target:s,rel:c,hover:l,...u}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,Component:y(`computed:1:0`,()=>n(()=>r.as??(r.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>n(()=>r.target===`_blank`&&!r.rel?`noreferrer`:r.rel))}}));return T.get()===`a`?h(e=>{let n=d(`a`,e);p(()=>{i(n,w)}),p(()=>{t(n,`href`,String(r.href))}),p(()=>{t(n,`target`,String(r.target))}),p(()=>{t(n,`rel`,String(D.get()))}),p(()=>{a(n,E(`link`,(r.hover===void 0||r.hover)&&`link-hover`,r.className))});let s=o(`rue:slot:anchor`);return f(n,s),p(()=>{let e=r.content??r.children;m(()=>g(e,n,s))}),n}):T.get()===`button`?h(e=>{let n=d(`button`,e);p(()=>{i(n,w)}),p(()=>{t(n,`type`,String(w.type??`button`))}),p(()=>{a(n,E(`link`,(r.hover===void 0||r.hover)&&`link-hover`,r.className))});let s=o(`rue:slot:anchor`);return f(n,s),p(()=>{let e=r.content??r.children;m(()=>g(e,n,s))}),n}):h(e=>{let t=s(),n=o(`rue:component:anchor`);return f(t,n),p(()=>{let e=v(T,{...w,className:E(`link`,(r.hover===void 0||r.hover)&&`link-hover`,r.className),children:r.content??r.children});m(()=>g(e,t,n))}),t})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(e,t)=>{if(!D(e))return null;if(A(e)){let{key:n,label:r,content:i,children:a,...c}=e;return h(e=>{let l=s(),u=o(`rue:component:anchor`);return f(l,u),p(()=>{let e=v(k,{key:n??`item-${t}`,...c,children:i??a??r});m(()=>g(e,l,u))}),l})}return h(n=>{let r=s(),i=o(`rue:component:anchor`);return f(r,i),p(()=>{let n=v(k,{key:`item-${t}`,children:e});m(()=>g(n,r,i))}),r})},M=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,rest:c,Component:l}=y(`useSetup:0:0:dup2`,()=>e(()=>{let{as:e,className:n,children:r,content:i,...a}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:t.as===void 0?`aside`:t.as}}));return h(e=>{let n=s(),r=o(`rue:component:anchor`);return f(n,r),p(()=>{let e=v(l,{...c,className:t.className,children:t.content??t.children});m(()=>g(e,n,r))}),n})},N=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:u,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>e(()=>{let{as:e,className:r,children:i,title:a,titleClassName:o,content:s,items:c,inline:l,contentClassName:u,...d}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:t.as===void 0?`nav`:t.as,hasCustomContent:y(`computed:1:2`,()=>n(()=>D(t.content)||D(t.children)))}}));return h(e=>{let n=s(),r=o(`rue:component:anchor`);f(n,r);let i=h(()=>{let e=s(),n=o(`rue:slot:anchor`);f(e,n),p(()=>{let r=D(t.title)?h(()=>{let e=s(),n=o(`rue:component:anchor`);return f(e,n),p(()=>{let r=v(O,{className:t.titleClassName,children:t.title});m(()=>g(r,e,n))}),e}):``;m(()=>g(r,e,n))}),f(e,l(` `));let r=o(`rue:slot:anchor`);return f(e,r),p(()=>{let n=M.get()?t.content??t.children:t.inline?h(()=>{let e=s(),n=d(`div`,e);f(e,n),p(()=>{a(n,E(`grid grid-flow-col auto-cols-max gap-4`,t.contentClassName))});let r=o(`rue:list:start`),i=o(`rue:list:end`);f(n,r),f(n,i);let c=new Map;return p(()=>{c=b({items:(t.items??[])||[],getKey:(e,t)=>t,elements:c,parent:n,before:i,start:r,renderItem:(e,t,n,r,i)=>{_(j(e,i),t,n,r)}})}),e}):(t.items??[]).map((e,t)=>j(e,t));m(()=>g(n,e,r))}),e});return p(()=>{let e=v(A,{...k,className:t.className,children:i});m(()=>g(e,n,r))}),n})},P=Object.assign(t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:c,__rue_rest_omit_4:u,__rue_rest_omit_5:d,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>e(()=>{let{as:e,direction:r,center:i,className:a,children:o,brand:s,sections:c,wrap:l,bordered:u,...d}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:t.as===void 0?`footer`:t.as,hasChildren:y(`computed:1:3`,()=>n(()=>D(t.children))),hasStructuredContent:y(`computed:1:4`,()=>n(()=>D(t.brand)||(t.sections?.length??0)>0))}}));return h(e=>{let n=s(),r=o(`rue:component:anchor`);f(n,r);let i=h(()=>{let e=s(),n=o(`rue:slot:anchor`);return f(e,n),p(()=>{let r=O.get()||!k.get()?t.children:h(()=>{let e=s();f(e,l(` `));let n=o(`rue:slot:anchor`);f(e,n),p(()=>{let r=D(t.brand)?h(()=>{let e=s(),n=o(`rue:component:anchor`);return f(e,n),g(v(M,{children:t.brand}),e,n),e}):``;m(()=>g(r,e,n))}),f(e,l(` `));let r=o(`rue:list:start`),i=o(`rue:list:end`);f(e,r),f(e,i);let a=new Map;return p(()=>{a=b({items:(t.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:a,parent:r.parentNode,before:i,start:r,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;_(v(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),f(e,l(` `)),e});m(()=>g(r,e,n))}),e});return p(()=>{let e=v(T,{...w,className:E(`footer`,t.direction&&`footer-${t.direction}`,t.center&&`footer-center`,t.wrap&&`gap-y-6`,t.bordered&&`border-t border-base-300`,t.className),children:i});m(()=>g(e,n,r))}),n})},{Brand:M,Section:N,Title:O,Link:k}),F=e=>h(t=>{let n=d(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=d(`div`,n);f(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=d(`div`,r);f(r,i);let c=d(`h2`,i);f(i,c),a(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),f(c,l(`# `));let u=o(`rue:slot:anchor`);f(c,u),p(()=>{let t=e.title;m(()=>g(t,c,u))});let _=o(`rue:slot:anchor`);f(i,_),p(()=>{let t=e.summary?h(()=>{let t=s(),n=d(`p`,t);f(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return f(n,r),p(()=>{let t=e.summary;m(()=>g(t,n,r))}),t}):``;m(()=>g(t,i,_))});let y=o(`rue:component:anchor`);f(n,y),p(()=>{let t=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});m(()=>g(t,n,y))});let b=o(`rue:slot:anchor`);return f(n,b),p(()=>{let t=e.tab.value===`preview`?e.preview():h(()=>{let t=s(),n=o(`rue:component:anchor`);return f(t,n),p(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});m(()=>g(r,t,n))}),t});m(()=>g(t,n,b))}),n}),ee=e=>h(n=>{let r=d(`div`,n);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=d(`table`,r);f(r,i),a(i,`table table-zebra`);let c=d(`thead`,i);f(i,c);let u=d(`tr`,c);f(c,u);let _=d(`th`,u);f(u,_),f(_,l(`属性`));let v=d(`th`,u);f(u,v),f(v,l(`说明`));let y=d(`th`,u);f(u,y),f(y,l(`类型`));let x=d(`th`,u);f(u,x),f(x,l(`默认值`));let S=d(`tbody`,i);f(i,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);f(S,C),f(S,w);let T=new Map;return p(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,a)=>{g(h(()=>{let n=s(),r=d(`tr`,n);f(n,r),p(()=>{t(r,`key`,String(e.prop))});let i=d(`td`,r);f(r,i);let a=d(`code`,i);f(i,a);let c=o(`rue:slot:anchor`);f(a,c),p(()=>{let t=e.prop;m(()=>g(t,a,c))});let l=d(`td`,r);f(r,l);let u=o(`rue:slot:anchor`);f(l,u),p(()=>{let t=e.description;m(()=>g(t,l,u))});let h=d(`td`,r);f(r,h);let _=d(`code`,h);f(h,_);let v=o(`rue:slot:anchor`);f(_,v),p(()=>{let t=e.type;m(()=>g(t,_,v))});let y=d(`td`,r);f(r,y);let b=d(`code`,y);f(y,b);let x=o(`rue:slot:anchor`);return f(b,x),p(()=>{let t=e.defaultValue;m(()=>g(t,b,x))}),n}),n,r)}})}),r}),I=e=>h(n=>{let r=d(`svg`,n);p(()=>{t(r,`width`,String(e.size===void 0?40:e.size))}),p(()=>{t(r,`height`,String(e.size===void 0?40:e.size))}),t(r,`viewBox`,`0 0 24 24`),p(()=>{a(r,e.className??`fill-current`)});let i=d(`path`,r);return f(r,i),t(i,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),L=[{key:`x`,Icon:()=>h(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),a(n,`fill-current`);let r=d(`path`,n);return f(n,r),t(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),n})},{key:`video`,Icon:()=>h(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),a(n,`fill-current`);let r=d(`path`,n);return f(n,r),t(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),n})},{key:`community`,Icon:()=>h(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),a(n,`fill-current`);let r=d(`path`,n);return f(n,r),t(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),n})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后使用基础自定义结构，保持对基础写法的支持`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:n,tabCompound:i,tabBasic:_,tabLogo:b,tabForm:x,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>e(()=>({tabRecommended:y(`ref:1:0`,()=>u(`preview`)),tabCompound:y(`ref:1:1`,()=>u(`preview`)),tabBasic:y(`ref:1:2`,()=>u(`preview`)),tabLogo:y(`ref:1:3`,()=>u(`preview`)),tabForm:y(`ref:1:4`,()=>u(`preview`)),tabSocial:y(`ref:1:5`,()=>u(`preview`)),tabLinks:y(`ref:1:6`,()=>u(`preview`)),tabLinks2:y(`ref:1:7`,()=>u(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>u(`preview`)),tabCentered:y(`ref:1:9`,()=>u(`preview`)),tabTwo:y(`ref:1:10`,()=>u(`preview`))})));return h(e=>{let u=s(),y=o(`rue:component:anchor`);return f(u,y),g(v(T,{children:h(()=>{let e=s(),u=d(`div`,e);f(e,u),a(u,`max-w-none prose prose-sm md:prose-base`);let h=d(`h1`,u);f(u,h),f(h,l(`Footer 页脚`));let y=d(`p`,u);f(u,y),a(y,`text-sm mt-3 mb-3`),f(y,l(`Footer 现在同时支持两种组织方式：可以继续像直接写`));let T=d(`code`,y);f(y,T),f(T,l(`nav`)),f(y,l(`、`));let j=d(`code`,y);f(y,j),f(j,l(`aside`)),f(y,l(`和 自定义 class，也可以改用`));let M=d(`code`,y);f(y,M),f(M,l(`brand`)),f(y,l(`、`));let N=d(`code`,y);f(y,N),f(N,l(`sections`)),f(y,l(`与`));let R=c(y);f(y,R),r(R,` `);let z=d(`code`,y);f(y,z),f(z,l(`Footer.Section`)),f(y,l(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=d(`h2`,u);f(u,B),f(B,l(`何时使用`));let V=d(`ul`,u);f(u,V);let H=d(`li`,V);f(V,H),f(H,l(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=d(`li`,V);f(V,U),f(U,l(`希望使用 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=o(`rue:component:anchor`);f(u,ie),p(()=>{let e=v(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然提供当前视觉类名和响应式方向。`,tab:n,preview:()=>C(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
  {
    key: 'services',
    title: 'Services',
    items: [
      { label: 'Branding' },
      { label: 'Design' },
      { label: 'Marketing' },
      { label: 'Advertisement' },
    ],
  },
  {
    key: 'company',
    title: 'Company',
    items: [
      { label: 'About us' },
      { label: 'Contact' },
      { label: 'Jobs' },
      { label: 'Press kit' },
    ],
  },
  {
    key: 'legal',
    title: 'Legal',
    items: [{ label: 'Terms of use' }, { label: 'Privacy policy' }, { label: 'Cookie policy' }],
  },
]

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});m(()=>g(e,u,ie))});let ae=o(`rue:component:anchor`);f(u,ae),p(()=>{let e=v(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:i,preview:()=>S(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[S(P.Brand,{children:[C(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,C(`br`,{}),`Ship consistent experiences.`]})]}),S(P.Section,{title:`Product`,children:[C(P.Link,{children:`Overview`}),C(P.Link,{children:`Pricing`}),C(P.Link,{children:`Changelog`})]}),C(P.Section,{title:`Community`,content:C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`button`,{type:`button`,"aria-label":e,children:C(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
  <Footer.Brand>
    <BrandGlyph />
    <p className="text-sm mt-3 mb-3">
      Rue Design System
      <br />
      Ship consistent experiences.
    </p>
  </Footer.Brand>

  <Footer.Section title="Product">
    <Footer.Link>Overview</Footer.Link>
    <Footer.Link>Pricing</Footer.Link>
    <Footer.Link>Changelog</Footer.Link>
  </Footer.Section>

  <Footer.Section
    title="Community"
    content={
      <div className="grid grid-flow-col gap-4">
        <button type="button"><XIcon /></button>
        <button type="button"><VideoIcon /></button>
        <button type="button"><CommunityIcon /></button>
      </div>
    }
  />
</Footer>`});m(()=>g(e,u,ae))});let oe=o(`rue:component:anchor`);f(u,oe),p(()=>{let e=v(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`基础示例 展示，这里改用 sections 表达同一个场景。`,tab:_,preview:()=>C(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});m(()=>g(e,u,oe))});let se=o(`rue:component:anchor`);f(u,se),p(()=>{let e=v(F,{title:`Footer with a logo section`,summary:`展示品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>C(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:S(`div`,{children:[C(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,C(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </div>
  }
  sections={sections}
/>`});m(()=>g(e,u,se))});let ce=o(`rue:component:anchor`);f(u,ce),p(()=>{let e=v(F,{title:`Footer with a form`,summary:`展示订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:x,preview:()=>C(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:S(`fieldset`,{className:`w-80`,children:[C(`label`,{children:`Enter your email address`}),S(`div`,{className:`join`,children:[C(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),C(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  sections={[
    ...sections,
    {
      key: 'newsletter',
      title: 'Newsletter',
      as: 'form',
      content: (
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
            <button type="button" className="join-item btn btn-primary">Subscribe</button>
          </div>
        </fieldset>
      ),
    },
  ]}
/>`});m(()=>g(e,u,ce))});let le=o(`rue:component:anchor`);f(u,le),p(()=>{let e=v(F,{title:`Footer with logo and social icons`,summary:`展示品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>C(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:S(`div`,{children:[C(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,C(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`button`,{type:`button`,"aria-label":e,children:C(t,{})},e))})}]}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
    </div>
  }
  sections={[
    {
      key: 'social',
      title: 'Social',
      content: (
        <div className="grid grid-flow-col gap-4">
          <button type="button"><XIcon /></button>
          <button type="button"><VideoIcon /></button>
          <button type="button"><CommunityIcon /></button>
        </div>
      ),
    },
  ]}
/>`});m(()=>g(e,u,le))});let ue=o(`rue:component:anchor`);f(u,ue),p(()=>{let e=v(F,{title:`Footer with links and social icons`,summary:`展示混合场景；这里可以用 children 自由拼装，展示组合分支。`,tab:E,preview:()=>S(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[S(`nav`,{children:[C(`h6`,{className:`footer-title`,children:`Services`}),C(`button`,{className:`link link-hover`,children:`Branding`}),C(`button`,{className:`link link-hover`,children:`Design`}),C(`button`,{className:`link link-hover`,children:`Marketing`}),C(`button`,{className:`link link-hover`,children:`Advertisement`})]}),S(`nav`,{children:[C(`h6`,{className:`footer-title`,children:`Company`}),C(`button`,{className:`link link-hover`,children:`About us`}),C(`button`,{className:`link link-hover`,children:`Contact`}),C(`button`,{className:`link link-hover`,children:`Jobs`}),C(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:[C(`h6`,{className:`footer-title`,children:`Social`}),C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`button`,{type:`button`,"aria-label":e,children:C(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
</Footer>`});m(()=>g(e,u,ue))});let de=o(`rue:component:anchor`);f(u,de),p(()=>{let e=v(F,{title:`Links and social icons (two rows)`,summary:`展示两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>C(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});m(()=>g(e,u,de))});let fe=o(`rue:component:anchor`);f(u,fe),p(()=>{let e=v(F,{title:`Centered footer with logo and social icons`,summary:`展示居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>S(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[S(`aside`,{children:[C(I,{size:50,className:`inline-block fill-current`}),S(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,C(`br`,{}),`Providing reliable tech since 1992`]}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),C(`nav`,{children:C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`a`,{"aria-label":e,children:C(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
  <aside>
    <BrandGlyph size={50} className="inline-block fill-current" />
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><XIcon /></a>
      <a><VideoIcon /></a>
      <a><CommunityIcon /></a>
    </div>
  </nav>
</Footer>`});m(()=>g(e,u,fe))});let pe=o(`rue:component:anchor`);f(u,pe),p(()=>{let e=v(F,{title:`Centered footer with social icons`,summary:`展示居中导航与版权场景；展示基础的 children 写法。`,tab:k,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[S(`nav`,{className:`grid grid-flow-col gap-4`,children:[C(`button`,{className:`link link-hover`,children:`About us`}),C(`button`,{className:`link link-hover`,children:`Contact`}),C(`button`,{className:`link link-hover`,children:`Jobs`}),C(`button`,{className:`link link-hover`,children:`Press kit`})]}),C(`nav`,{children:C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`button`,{type:`button`,"aria-label":e,children:C(t,{})},e))})}),C(`aside`,{children:S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
  <nav className="grid grid-flow-col gap-4">
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
  <aside>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</Footer>`});m(()=>g(e,u,pe))});let me=o(`rue:component:anchor`);f(u,me),p(()=>{let e=v(F,{title:`Two footer`,summary:`双层 footer 场景展示；下半部分可配合 bordered 或直接使用原类名。`,tab:A,preview:()=>S(`div`,{className:`w-full`,children:[C(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),S(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[S(`aside`,{className:`grid-flow-col items-center`,children:[C(I,{size:24}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,C(`br`,{}),`Providing reliable tech since 1992`]})]}),C(`nav`,{className:`md:place-self-center md:justify-self-end`,children:C(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>C(`a`,{"aria-label":e,children:C(t,{})},e))})})]})]}),code:`<div className="w-full">
  <Footer className="bg-base-200 text-base-content p-10 sm:footer-horizontal" sections={sections} />

  <Footer className="bg-base-200 text-base-content px-10 py-4 border-t border-base-300">
    <aside className="grid-flow-col items-center">
      <BrandGlyph size={24} />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </aside>
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a><XIcon /></a>
        <a><VideoIcon /></a>
        <a><CommunityIcon /></a>
      </div>
    </nav>
  </Footer>
</div>`});m(()=>g(e,u,me))});let he=d(`h2`,u);f(u,he),t(he,`id`,`footer-api`),f(he,l(`API`));let ge=d(`p`,u);f(u,ge),f(ge,l(`当前页展示的是语义化的 Footer API，基础的 children 写法仍然可用。`));let _e=d(`h3`,u);f(u,_e),f(_e,l(`Footer`));let ve=o(`rue:component:anchor`);f(u,ve),p(()=>{let e=v(ee,{rows:ne});m(()=>g(e,u,ve))});let ye=d(`h3`,u);f(u,ye),a(ye,`mt-8`),f(ye,l(`Footer.Section`));let be=o(`rue:component:anchor`);f(u,be),p(()=>{let e=v(ee,{rows:re});m(()=>g(e,u,be))});let G=d(`div`,u);f(u,G),a(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=d(`h3`,G);f(G,xe),a(xe,`mt-0 mb-3 text-base font-semibold`),f(xe,l(`复合子组件`));let K=d(`div`,G);f(G,K),a(K,`grid gap-2 text-sm md:grid-cols-2`);let q=d(`div`,K);f(K,q);let Se=d(`code`,q);f(q,Se),f(Se,l(`Footer.Brand`)),f(q,l(`：品牌或版权信息容器，默认渲染`));let Ce=d(`code`,q);f(q,Ce),f(Ce,l(`aside`));let J=d(`div`,K);f(K,J);let we=d(`code`,J);f(J,we),f(we,l(`Footer.Title`)),f(J,l(`：带`));let Te=d(`code`,J);f(J,Te),f(Te,l(`footer-title`)),f(J,l(`类名的标题节点`));let Y=d(`div`,K);f(K,Y);let Ee=d(`code`,Y);f(Y,Ee),f(Ee,l(`Footer.Link`)),f(Y,l(`：默认输出带`));let De=d(`code`,Y);f(Y,De),f(De,l(`link link-hover`)),f(Y,l(`的文本链接`));let X=d(`div`,K);f(K,X);let Oe=d(`code`,X);f(X,Oe),f(Oe,l(`Footer.Section`)),f(X,l(`：单列容器，支持`));let ke=d(`code`,X);f(X,ke),f(ke,l(`title`)),f(X,l(`、`));let Ae=d(`code`,X);f(X,Ae),f(Ae,l(`items`)),f(X,l(`、`));let je=d(`code`,X);f(X,je),f(je,l(`content`));let Me=d(`h2`,u);f(u,Me),f(Me,l(`FAQ`));let Ne=d(`h3`,u);f(u,Ne),f(Ne,l(`什么时候用 sections，什么时候可以写 children？`));let Z=d(`p`,u);f(u,Z),f(Z,l(`列结构比较规则时，优先用`));let Pe=d(`code`,Z);f(Z,Pe),f(Pe,l(`sections`)),f(Z,l(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=d(`code`,Z);f(Z,Fe),f(Fe,l(`nav`)),f(Z,l(`/`));let Ie=d(`code`,Z);f(Z,Ie),f(Ie,l(`aside`)),f(Z,l(`模板，也可以继续直接写`));let Le=d(`code`,Z);f(Z,Le),f(Le,l(`children`)),f(Z,l(`。`));let Re=d(`h3`,u);f(u,Re),f(Re,l(`社交图标和订阅表单怎么放进去？`));let Q=d(`p`,u);f(u,Q),f(Q,l(`这类内容更适合放到`));let ze=d(`code`,Q);f(Q,ze),f(ze,l(`Footer.Section`)),f(Q,l(`的`));let Be=d(`code`,Q);f(Q,Be),f(Be,l(`content`));let Ve=c(Q);f(Q,Ve),r(Ve,` `),f(Q,l(`里；如果只是普通文本链接，再用`));let He=d(`code`,Q);f(Q,He),f(He,l(`items`)),f(Q,l(`会更省代码。`));let Ue=d(`h3`,u);f(u,Ue),f(Ue,l(`direction 和 center 还需要保持吗？`));let $=d(`p`,u);f(u,$),f($,l(`需要。它们仍然是最轻量的布局开关，适合和当前的`));let We=d(`code`,$);f($,We),f(We,l(`sm:footer-horizontal`)),f($,l(`、`));let Ge=d(`code`,$);return f($,Ge),f(Ge,l(`footer-center`)),f($,l(`类名习惯一起工作，不会破坏项目页面的视觉结果。`)),e})}),u,y),u})};export{ie as default};