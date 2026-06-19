import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,gt as s,ht as c,l,lt as u,nt as d,o as f,s as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./tabs-CZWMQq5i.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=o=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:d,rest:p,Component:m}=y(`useSetup:0:0`,()=>a(()=>{let{as:e,className:t,children:n,content:r,...i}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,rest:i,Component:o.as===void 0?`h6`:o.as}}));return l(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=h(m,{...p,className:E(`footer-title`,o.className),children:o.content??o.children});r(()=>f(e,s,c))}),s})},k=c=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:p,__rue_rest_omit_2:g,__rue_rest_omit_3:v,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>a(()=>{let{as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s,...l}=c;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:s,rest:l,Component:y(`computed:1:0`,()=>_(()=>c.as??(c.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>_(()=>c.target===`_blank`&&!c.rel?`noreferrer`:c.rel))}}));return T.get()===`a`?l(e=>{let a=o(`a`,e);n(()=>{s(a,w)}),n(()=>{m(a,`href`,String(c.href))}),n(()=>{m(a,`target`,String(c.target))}),n(()=>{m(a,`rel`,String(D.get()))}),n(()=>{u(a,E(`link`,(c.hover===void 0?!0:c.hover)&&`link-hover`,c.className))});let l=t(`rue:slot:anchor`);return i(a,l),n(()=>{let e=c.content??c.children;r(()=>f(e,a,l))}),a}):T.get()===`button`?l(e=>{let a=o(`button`,e);n(()=>{s(a,w)}),n(()=>{m(a,`type`,String(w.type??`button`))}),n(()=>{u(a,E(`link`,(c.hover===void 0?!0:c.hover)&&`link-hover`,c.className))});let l=t(`rue:slot:anchor`);return i(a,l),n(()=>{let e=c.content??c.children;r(()=>f(e,a,l))}),a}):l(a=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(T,{...w,className:E(`link`,(c.hover===void 0?!0:c.hover)&&`link-hover`,c.className),children:c.content??c.children});r(()=>f(e,o,s))}),o})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(a,o)=>{if(!D(a))return null;if(A(a)){let{key:s,label:c,content:u,children:d,...p}=a;return l(a=>{let l=e(),m=t(`rue:component:anchor`);return i(l,m),n(()=>{let e=h(k,{key:s??`item-${o}`,...p,children:u??d??c});r(()=>f(e,l,m))}),l})}return l(s=>{let c=e(),l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=h(k,{key:`item-${o}`,children:a});r(()=>f(e,c,l))}),c})},M=o=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:d,rest:p,Component:m}=y(`useSetup:0:0:dup2`,()=>a(()=>{let{as:e,className:t,children:n,content:r,...i}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,rest:i,Component:o.as===void 0?`aside`:o.as}}));return l(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=h(m,{...p,className:o.className,children:o.content??o.children});r(()=>f(e,s,c))}),s})},N=s=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,__rue_rest_omit_2:m,__rue_rest_omit_3:v,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>a(()=>{let{as:e,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:c,contentClassName:l,...u}=s;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:s.as===void 0?`nav`:s.as,hasCustomContent:y(`computed:1:2`,()=>_(()=>D(s.content)||D(s.children)))}}));return l(a=>{let c=e(),d=t(`rue:component:anchor`);i(c,d);let m=l(()=>{let a=e(),c=t(`rue:slot:anchor`);i(a,c),n(()=>{let o=D(s.title)?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(O,{className:s.titleClassName,children:s.title});r(()=>f(e,a,o))}),a}):``;r(()=>f(o,a,c))}),i(a,g(` `));let d=t(`rue:slot:anchor`);return i(a,d),n(()=>{let c=M.get()?s.content??s.children:s.inline?l(()=>{let r=e(),a=o(`div`,r);i(r,a),n(()=>{u(a,E(`grid grid-flow-col auto-cols-max gap-4`,s.contentClassName))});let c=t(`rue:list:start`),l=t(`rue:list:end`);i(a,c),i(a,l);let d=new Map;return n(()=>{d=b({items:(s.items??[])||[],getKey:(e,t)=>t,elements:d,parent:a,before:l,start:c,renderItem:(e,t,n,r,i)=>{p(j(e,i),t,n,r)}})}),r}):(s.items??[]).map((e,t)=>j(e,t));r(()=>f(c,a,d))}),a});return n(()=>{let e=h(A,{...k,className:s.className,children:m});r(()=>f(e,c,d))}),c})},P=Object.assign(o=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:d,__rue_rest_omit_4:m,__rue_rest_omit_5:v,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>a(()=>{let{as:e,direction:t,center:n,className:r,children:i,brand:a,sections:s,wrap:c,bordered:l,...u}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:o.as===void 0?`footer`:o.as,hasChildren:y(`computed:1:3`,()=>_(()=>D(o.children))),hasStructuredContent:y(`computed:1:4`,()=>_(()=>D(o.brand)||(o.sections?.length??0)>0))}}));return l(a=>{let s=e(),c=t(`rue:component:anchor`);i(s,c);let u=l(()=>{let a=e(),s=t(`rue:slot:anchor`);return i(a,s),n(()=>{let c=O.get()||!k.get()?o.children:l(()=>{let a=e();i(a,g(` `));let s=t(`rue:slot:anchor`);i(a,s),n(()=>{let n=D(o.brand)?l(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),f(h(M,{children:o.brand}),n,r),n}):``;r(()=>f(n,a,s))}),i(a,g(` `));let c=t(`rue:list:start`),u=t(`rue:list:end`);i(a,c),i(a,u);let d=new Map;return n(()=>{d=b({items:(o.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:d,parent:c.parentNode,before:u,start:c,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;p(h(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),i(a,g(` `)),a});r(()=>f(c,a,s))}),a});return n(()=>{let e=h(T,{...w,className:E(`footer`,o.direction&&`footer-${o.direction}`,o.center&&`footer-center`,o.wrap&&`gap-y-6`,o.bordered&&`border-t border-base-300`,o.className),children:u});r(()=>f(e,s,c))}),s})},{Brand:M,Section:N,Title:O,Link:k}),F=a=>l(s=>{let c=o(`div`,s);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=o(`div`,c);i(c,d),u(d,`flex flex-wrap items-start justify-between gap-3`);let p=o(`div`,d);i(d,p);let m=o(`h2`,p);i(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>f(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let s=a.summary?l(()=>{let s=e(),c=o(`p`,s);i(s,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>f(e,c,l))}),s}):``;r(()=>f(s,p,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?a.preview():l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,c,b))}),c}),ee=a=>l(s=>{let c=o(`div`,s);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=o(`table`,c);i(c,d),u(d,`table table-zebra`);let p=o(`thead`,d);i(d,p);let h=o(`tr`,p);i(p,h);let _=o(`th`,h);i(h,_),i(_,g(`属性`));let v=o(`th`,h);i(h,v),i(v,g(`说明`));let y=o(`th`,h);i(h,y),i(y,g(`类型`));let x=o(`th`,h);i(h,x),i(x,g(`默认值`));let S=o(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,c,u,d)=>{f(l(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{m(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=o(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),s}),s,c)}})}),c}),I=e=>l(t=>{let r=o(`svg`,t);n(()=>{m(r,`width`,String(e.size===void 0?40:e.size))}),n(()=>{m(r,`height`,String(e.size===void 0?40:e.size))}),m(r,`viewBox`,`0 0 24 24`),n(()=>{u(r,e.className??`fill-current`)});let a=o(`path`,r);return i(r,a),m(a,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),L=[{key:`x`,Icon:()=>l(e=>{let t=o(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`width`,`24`),m(t,`height`,`24`),m(t,`viewBox`,`0 0 24 24`),u(t,`fill-current`);let n=o(`path`,t);return i(t,n),m(n,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),t})},{key:`video`,Icon:()=>l(e=>{let t=o(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`width`,`24`),m(t,`height`,`24`),m(t,`viewBox`,`0 0 24 24`),u(t,`fill-current`);let n=o(`path`,t);return i(t,n),m(n,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),t})},{key:`community`,Icon:()=>l(e=>{let t=o(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`width`,`24`),m(t,`height`,`24`),m(t,`viewBox`,`0 0 24 24`),u(t,`fill-current`);let n=o(`path`,t);return i(t,n),m(n,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),t})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:s,tabCompound:p,tabBasic:_,tabLogo:b,tabForm:C,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>a(()=>({tabRecommended:y(`ref:1:0`,()=>v(`preview`)),tabCompound:y(`ref:1:1`,()=>v(`preview`)),tabBasic:y(`ref:1:2`,()=>v(`preview`)),tabLogo:y(`ref:1:3`,()=>v(`preview`)),tabForm:y(`ref:1:4`,()=>v(`preview`)),tabSocial:y(`ref:1:5`,()=>v(`preview`)),tabLinks:y(`ref:1:6`,()=>v(`preview`)),tabLinks2:y(`ref:1:7`,()=>v(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>v(`preview`)),tabCentered:y(`ref:1:9`,()=>v(`preview`)),tabTwo:y(`ref:1:10`,()=>v(`preview`))})));return l(a=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),f(h(T,{children:l(()=>{let a=e(),l=o(`div`,a);i(a,l),u(l,`max-w-none prose prose-sm md:prose-base`);let v=o(`h1`,l);i(l,v),i(v,g(`Footer 页脚`));let y=o(`p`,l);i(l,y),u(y,`text-sm mt-3 mb-3`),i(y,g(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let T=o(`code`,y);i(y,T),i(T,g(`nav`)),i(y,g(`、`));let j=o(`code`,y);i(y,j),i(j,g(`aside`)),i(y,g(`和 自定义 class，也可以改用`));let M=o(`code`,y);i(y,M),i(M,g(`brand`)),i(y,g(`、`));let N=o(`code`,y);i(y,N),i(N,g(`sections`));let R=d(y);i(y,R),c(R,` `),i(y,g(`与`));let z=o(`code`,y);i(y,z),i(z,g(`Footer.Section`)),i(y,g(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=o(`h2`,l);i(l,B),i(B,g(`何时使用`));let V=o(`ul`,l);i(l,V);let H=o(`li`,V);i(V,H),i(H,g(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=o(`li`,V);i(V,U),i(U,g(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=t(`rue:component:anchor`);i(l,ie),n(()=>{let e=h(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:s,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});r(()=>f(e,l,ie))});let ae=t(`rue:component:anchor`);i(l,ae),n(()=>{let e=h(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:p,preview:()=>x(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[x(P.Brand,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,S(`br`,{}),`Ship consistent experiences.`]})]}),x(P.Section,{title:`Product`,children:[S(P.Link,{children:`Overview`}),S(P.Link,{children:`Pricing`}),S(P.Link,{children:`Changelog`})]}),S(P.Section,{title:`Community`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});r(()=>f(e,l,ae))});let oe=t(`rue:component:anchor`);i(l,oe),n(()=>{let e=h(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:_,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});r(()=>f(e,l,oe))});let se=t(`rue:component:anchor`);i(l,se),n(()=>{let e=h(F,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
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
/>`});r(()=>f(e,l,se))});let ce=t(`rue:component:anchor`);i(l,ce),n(()=>{let e=h(F,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:x(`fieldset`,{className:`w-80`,children:[S(`label`,{children:`Enter your email address`}),x(`div`,{className:`join`,children:[S(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),S(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});r(()=>f(e,l,ce))});let le=t(`rue:component:anchor`);i(l,le),n(()=>{let e=h(F,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:x(`div`,{children:[S(I,{}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}]}),code:`<Footer
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
/>`});r(()=>f(e,l,le))});let ue=t(`rue:component:anchor`);i(l,ue),n(()=>{let e=h(F,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>x(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Services`}),S(`button`,{className:`link link-hover`,children:`Branding`}),S(`button`,{className:`link link-hover`,children:`Design`}),S(`button`,{className:`link link-hover`,children:`Marketing`}),S(`button`,{className:`link link-hover`,children:`Advertisement`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Company`}),S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:[S(`h6`,{className:`footer-title`,children:`Social`}),S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});r(()=>f(e,l,ue))});let de=t(`rue:component:anchor`);i(l,de),n(()=>{let e=h(F,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>S(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});r(()=>f(e,l,de))});let fe=t(`rue:component:anchor`);i(l,fe),n(()=>{let e=h(F,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>x(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[x(`aside`,{children:[S(I,{size:50,className:`inline-block fill-current`}),x(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});r(()=>f(e,l,fe))});let pe=t(`rue:component:anchor`);i(l,pe),n(()=>{let e=h(F,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:k,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[x(`nav`,{className:`grid grid-flow-col gap-4`,children:[S(`button`,{className:`link link-hover`,children:`About us`}),S(`button`,{className:`link link-hover`,children:`Contact`}),S(`button`,{className:`link link-hover`,children:`Jobs`}),S(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`button`,{type:`button`,"aria-label":e,children:S(t,{})},e))})}),S(`aside`,{children:x(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});r(()=>f(e,l,pe))});let me=t(`rue:component:anchor`);i(l,me),n(()=>{let e=h(F,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:A,preview:()=>x(`div`,{className:`w-full`,children:[S(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),x(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[x(`aside`,{className:`grid-flow-col items-center`,children:[S(I,{size:24}),x(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,S(`br`,{}),`Providing reliable tech since 1992`]})]}),S(`nav`,{className:`md:place-self-center md:justify-self-end`,children:S(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>S(`a`,{"aria-label":e,children:S(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});r(()=>f(e,l,me))});let he=o(`h2`,l);i(l,he),m(he,`id`,`footer-api`),i(he,g(`API`));let ge=o(`p`,l);i(l,ge),i(ge,g(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let _e=o(`h3`,l);i(l,_e),i(_e,g(`Footer`));let ve=t(`rue:component:anchor`);i(l,ve),n(()=>{let e=h(ee,{rows:ne});r(()=>f(e,l,ve))});let ye=o(`h3`,l);i(l,ye),u(ye,`mt-8`),i(ye,g(`Footer.Section`));let be=t(`rue:component:anchor`);i(l,be),n(()=>{let e=h(ee,{rows:re});r(()=>f(e,l,be))});let G=o(`div`,l);i(l,G),u(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=o(`h3`,G);i(G,xe),u(xe,`mt-0 mb-3 text-base font-semibold`),i(xe,g(`复合子组件`));let K=o(`div`,G);i(G,K),u(K,`grid gap-2 text-sm md:grid-cols-2`);let q=o(`div`,K);i(K,q);let Se=o(`code`,q);i(q,Se),i(Se,g(`Footer.Brand`)),i(q,g(`：品牌或版权信息容器，默认渲染`));let Ce=o(`code`,q);i(q,Ce),i(Ce,g(`aside`));let J=o(`div`,K);i(K,J);let we=o(`code`,J);i(J,we),i(we,g(`Footer.Title`)),i(J,g(`：带`));let Te=o(`code`,J);i(J,Te),i(Te,g(`footer-title`)),i(J,g(`类名的标题节点`));let Y=o(`div`,K);i(K,Y);let Ee=o(`code`,Y);i(Y,Ee),i(Ee,g(`Footer.Link`)),i(Y,g(`：默认输出带`));let De=o(`code`,Y);i(Y,De),i(De,g(`link link-hover`)),i(Y,g(`的文本链接`));let X=o(`div`,K);i(K,X);let Oe=o(`code`,X);i(X,Oe),i(Oe,g(`Footer.Section`)),i(X,g(`：单列容器，支持`));let ke=o(`code`,X);i(X,ke),i(ke,g(`title`)),i(X,g(`、`));let Ae=o(`code`,X);i(X,Ae),i(Ae,g(`items`)),i(X,g(`、`));let je=o(`code`,X);i(X,je),i(je,g(`content`));let Me=o(`h2`,l);i(l,Me),i(Me,g(`FAQ`));let Ne=o(`h3`,l);i(l,Ne),i(Ne,g(`什么时候用 sections，什么时候继续写 children？`));let Z=o(`p`,l);i(l,Z),i(Z,g(`列结构比较规则时，优先用`));let Pe=o(`code`,Z);i(Z,Pe),i(Pe,g(`sections`)),i(Z,g(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=o(`code`,Z);i(Z,Fe),i(Fe,g(`nav`)),i(Z,g(`/`));let Ie=o(`code`,Z);i(Z,Ie),i(Ie,g(`aside`)),i(Z,g(`模板，也可以继续直接写`));let Le=o(`code`,Z);i(Z,Le),i(Le,g(`children`)),i(Z,g(`。`));let Re=o(`h3`,l);i(l,Re),i(Re,g(`社交图标和订阅表单怎么放进去？`));let Q=o(`p`,l);i(l,Q),i(Q,g(`这类内容更适合放到`));let ze=o(`code`,Q);i(Q,ze),i(ze,g(`Footer.Section`)),i(Q,g(`的`));let Be=o(`code`,Q);i(Q,Be),i(Be,g(`content`));let Ve=d(Q);i(Q,Ve),c(Ve,` `),i(Q,g(`里；如果只是普通文本链接，再用`));let He=o(`code`,Q);i(Q,He),i(He,g(`items`)),i(Q,g(`会更省代码。`));let Ue=o(`h3`,l);i(l,Ue),i(Ue,g(`direction 和 center 还需要保留吗？`));let $=o(`p`,l);i(l,$),i($,g(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=o(`code`,$);i($,We),i(We,g(`sm:footer-horizontal`)),i($,g(`、`));let Ge=o(`code`,$);return i($,Ge),i(Ge,g(`footer-center`)),i($,g(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),a})}),v,y),v})};export{ie as default};