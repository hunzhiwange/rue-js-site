import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,s as p,t as m,tn as h,tt as g,wt as _,xt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as x,o as S}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as C}from"./Code-C5NjdoiC.js";import{t as w}from"./tabs-C4UF43sZ.js";import{r as T}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var E=(...e)=>e.filter(Boolean).join(` `),D=e=>e==null?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,rest:d,Component:f}=y(`useSetup:0:0`,()=>u(()=>{let{as:e,className:t,children:r,content:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:n.as===void 0?`h6`:n.as}}));return s(r=>{let i=c(),a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(f,{...d,className:E(`footer-title`,n.className),children:n.content??n.children});h(()=>l(e,i,a))}),i})},k=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:o,__rue_rest_omit_3:p,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:w,Component:T,anchorRel:D}=y(`useSetup:0:0:dup1`,()=>u(()=>{let{as:e,className:t,children:r,content:i,href:a,target:o,rel:s,hover:c,...l}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:y(`computed:1:0`,()=>_(()=>n.as??(n.href?`a`:`button`))),anchorRel:y(`computed:1:1`,()=>_(()=>n.target===`_blank`&&!n.rel?`noreferrer`:n.rel))}}));return T.get()===`a`?s(r=>{let i=f(`a`,r);t(()=>{v(i,w)}),t(()=>{a(i,`href`,String(n.href))}),t(()=>{a(i,`target`,String(n.target))}),t(()=>{a(i,`rel`,String(D.get()))}),t(()=>{d(i,E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className))});let o=g(`rue:slot:anchor`);return e(i,o),t(()=>{let e=n.content??n.children;h(()=>l(e,i,o))}),i}):T.get()===`button`?s(r=>{let i=f(`button`,r);t(()=>{v(i,w)}),t(()=>{a(i,`type`,String(w.type??`button`))}),t(()=>{d(i,E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className))});let o=g(`rue:slot:anchor`);return e(i,o),t(()=>{let e=n.content??n.children;h(()=>l(e,i,o))}),i}):s(r=>{let i=c(),a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(T,{...w,className:E(`link`,(n.hover===void 0?!0:n.hover)&&`link-hover`,n.className),children:n.content??n.children});h(()=>l(e,i,a))}),i})},A=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,j=(n,r)=>{if(!D(n))return null;if(A(n)){let{key:i,label:a,content:o,children:u,...d}=n;return s(n=>{let s=c(),f=g(`rue:component:anchor`);return e(s,f),t(()=>{let e=m(k,{key:i??`item-${r}`,...d,children:o??u??a});h(()=>l(e,s,f))}),s})}return s(i=>{let a=c(),o=g(`rue:component:anchor`);return e(a,o),t(()=>{let e=m(k,{key:`item-${r}`,children:n});h(()=>l(e,a,o))}),a})},M=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,rest:d,Component:f}=y(`useSetup:0:0:dup2`,()=>u(()=>{let{as:e,className:t,children:r,content:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a,Component:n.as===void 0?`aside`:n.as}}));return s(r=>{let i=c(),a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(f,{...d,className:n.className,children:n.content??n.children});h(()=>l(e,i,a))}),i})},N=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:v,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,rest:k,Component:A,hasCustomContent:M}=y(`useSetup:0:0:dup3`,()=>u(()=>{let{as:e,className:t,children:r,title:i,titleClassName:a,content:o,items:s,inline:c,contentClassName:l,...u}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:n.as===void 0?`nav`:n.as,hasCustomContent:y(`computed:1:2`,()=>_(()=>D(n.content)||D(n.children)))}}));return s(r=>{let i=c(),a=g(`rue:component:anchor`);e(i,a);let u=s(()=>{let r=c(),i=g(`rue:slot:anchor`);e(r,i),t(()=>{let a=D(n.title)?s(()=>{let r=c(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(O,{className:n.titleClassName,children:n.title});h(()=>l(e,r,i))}),r}):``;h(()=>l(a,r,i))}),e(r,o(` `));let a=g(`rue:slot:anchor`);return e(r,a),t(()=>{let i=M.get()?n.content??n.children:n.inline?s(()=>{let r=c(),i=f(`div`,r);e(r,i),t(()=>{d(i,E(`grid grid-flow-col auto-cols-max gap-4`,n.contentClassName))});let a=g(`rue:list:start`),o=g(`rue:list:end`);e(i,a),e(i,o);let s=new Map;return t(()=>{s=b({items:(n.items??[])||[],getKey:(e,t)=>t,elements:s,parent:i,before:o,start:a,renderItem:(e,t,n,r,i)=>{p(j(e,i),t,n,r)}})}),r}):(n.items??[]).map((e,t)=>j(e,t));h(()=>l(i,r,a))}),r});return t(()=>{let e=m(A,{...k,className:n.className,children:u});h(()=>l(e,i,a))}),i})},P=Object.assign(n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:v,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:C,rest:w,Component:T,hasChildren:O,hasStructuredContent:k}=y(`useSetup:0:0:dup4`,()=>u(()=>{let{as:e,direction:t,center:r,className:i,children:a,brand:o,sections:s,wrap:c,bordered:l,...u}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:n.as===void 0?`footer`:n.as,hasChildren:y(`computed:1:3`,()=>_(()=>D(n.children))),hasStructuredContent:y(`computed:1:4`,()=>_(()=>D(n.brand)||(n.sections?.length??0)>0))}}));return s(r=>{let i=c(),a=g(`rue:component:anchor`);e(i,a);let u=s(()=>{let r=c(),i=g(`rue:slot:anchor`);return e(r,i),t(()=>{let a=O.get()||!k.get()?n.children:s(()=>{let r=c();e(r,o(` `));let i=g(`rue:slot:anchor`);e(r,i),t(()=>{let t=D(n.brand)?s(()=>{let t=c(),r=g(`rue:component:anchor`);return e(t,r),l(m(M,{children:n.brand}),t,r),t}):``;h(()=>l(t,r,i))}),e(r,o(` `));let a=g(`rue:list:start`),u=g(`rue:list:end`);e(r,a),e(r,u);let d=new Map;return t(()=>{d=b({items:(n.sections??[])||[],getKey:(e,t)=>{let{key:n,...r}=e;return n??`section-${t}`},elements:d,parent:a.parentNode,before:u,start:a,renderItem:(e,t,n,r,i)=>{let{key:a,...o}=e;p(m(N,{key:a??`section-${i}`,...o}),t,n,r)}})}),e(r,o(` `)),r});h(()=>l(a,r,i))}),r});return t(()=>{let e=m(T,{...w,className:E(`footer`,n.direction&&`footer-${n.direction}`,n.center&&`footer-center`,n.wrap&&`gap-y-6`,n.bordered&&`border-t border-base-300`,n.className),children:u});h(()=>l(e,i,a))}),i})},{Brand:M,Section:N,Title:O,Link:k}),F=n=>s(r=>{let i=f(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=f(`div`,i);e(i,a),d(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);e(a,u);let p=f(`h2`,u);e(u,p),d(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(p,o(`# `));let _=g(`rue:slot:anchor`);e(p,_),t(()=>{let e=n.title;h(()=>l(e,p,_))});let v=g(`rue:slot:anchor`);e(u,v),t(()=>{let r=n.summary?s(()=>{let r=c(),i=f(`p`,r);e(r,i),d(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>l(e,i,a))}),r}):``;h(()=>l(r,u,v))});let y=g(`rue:component:anchor`);e(i,y),t(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>l(e,i,y))});let b=g(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():s(()=>{let r=c(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(C,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>l(e,r,i))}),r});h(()=>l(r,i,b))}),i}),ee=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let m=f(`tr`,p);e(p,m);let _=f(`th`,m);e(m,_),e(_,o(`属性`));let v=f(`th`,m);e(m,v),e(v,o(`说明`));let y=f(`th`,m);e(m,y),e(y,o(`类型`));let x=f(`th`,m);e(m,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=g(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;h(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=g(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;h(()=>l(e,d,p))});let m=f(`td`,i);e(i,m);let _=f(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>l(e,b,x))}),r}),r,i)}})}),i}),I=n=>s(r=>{let i=f(`svg`,r);t(()=>{a(i,`width`,String(n.size===void 0?40:n.size))}),t(()=>{a(i,`height`,String(n.size===void 0?40:n.size))}),a(i,`viewBox`,`0 0 24 24`),t(()=>{d(i,n.className??`fill-current`)});let o=f(`path`,i);return e(i,o),a(o,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),i}),L=[{key:`x`,Icon:()=>s(t=>{let n=f(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`width`,`24`),a(n,`height`,`24`),a(n,`viewBox`,`0 0 24 24`),d(n,`fill-current`);let r=f(`path`,n);return e(n,r),a(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),n})},{key:`video`,Icon:()=>s(t=>{let n=f(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`width`,`24`),a(n,`height`,`24`),a(n,`viewBox`,`0 0 24 24`),d(n,`fill-current`);let r=f(`path`,n);return e(n,r),a(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),n})},{key:`community`,Icon:()=>s(t=>{let n=f(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`width`,`24`),a(n,`height`,`24`),a(n,`viewBox`,`0 0 24 24`),d(n,`fill-current`);let r=f(`path`,n);return e(n,r),a(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),n})}],R=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],z=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],B=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],V=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],H=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],U=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],W=[{key:`services`,title:`Services`,items:R},{key:`company`,title:`Company`,items:z},{key:`legal`,title:`Legal`,items:B}],te=[...W,{key:`social`,title:`Social`,items:V},{key:`explore`,title:`Explore`,items:H},{key:`apps`,title:`Apps`,items:U}],ne=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后使用基础自定义结构，保持对基础写法的支持`,type:`any`,defaultValue:`-`}],re=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],ie=()=>{let{tabRecommended:p,tabCompound:_,tabBasic:v,tabLogo:b,tabForm:C,tabSocial:w,tabLinks:E,tabLinks2:D,tabCenteredBrand:O,tabCentered:k,tabTwo:A}=y(`useSetup:0:0`,()=>u(()=>({tabRecommended:y(`ref:1:0`,()=>n(`preview`)),tabCompound:y(`ref:1:1`,()=>n(`preview`)),tabBasic:y(`ref:1:2`,()=>n(`preview`)),tabLogo:y(`ref:1:3`,()=>n(`preview`)),tabForm:y(`ref:1:4`,()=>n(`preview`)),tabSocial:y(`ref:1:5`,()=>n(`preview`)),tabLinks:y(`ref:1:6`,()=>n(`preview`)),tabLinks2:y(`ref:1:7`,()=>n(`preview`)),tabCenteredBrand:y(`ref:1:8`,()=>n(`preview`)),tabCentered:y(`ref:1:9`,()=>n(`preview`)),tabTwo:y(`ref:1:10`,()=>n(`preview`))})));return s(n=>{let u=c(),y=g(`rue:component:anchor`);return e(u,y),l(m(T,{children:s(()=>{let n=c(),s=f(`div`,n);e(n,s),d(s,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,s);e(s,u),e(u,o(`Footer 页脚`));let y=f(`p`,s);e(s,y),d(y,`text-sm mt-3 mb-3`),e(y,o(`Footer 现在同时支持两种组织方式：可以继续像直接写`));let T=f(`code`,y);e(y,T),e(T,o(`nav`)),e(y,o(`、`));let j=f(`code`,y);e(y,j),e(j,o(`aside`)),e(y,o(`和 自定义 class，也可以改用`));let M=f(`code`,y);e(y,M),e(M,o(`brand`)),e(y,o(`、`));let N=f(`code`,y);e(y,N),e(N,o(`sections`)),e(y,o(`与`));let R=r(y);e(y,R),i(R,` `);let z=f(`code`,y);e(y,z),e(z,o(`Footer.Section`)),e(y,o(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let B=f(`h2`,s);e(s,B),e(B,o(`何时使用`));let V=f(`ul`,s);e(s,V);let H=f(`li`,V);e(V,H),e(H,o(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let U=f(`li`,V);e(V,U),e(U,o(`希望使用 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ie=g(`rue:component:anchor`);e(s,ie),t(()=>{let e=m(F,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然提供当前视觉类名和响应式方向。`,tab:p,preview:()=>x(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>l(e,s,ie))});let ae=g(`rue:component:anchor`);e(s,ae),t(()=>{let e=m(F,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:_,preview:()=>S(P,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[S(P.Brand,{children:[x(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,x(`br`,{}),`Ship consistent experiences.`]})]}),S(P.Section,{title:`Product`,children:[x(P.Link,{children:`Overview`}),x(P.Link,{children:`Pricing`}),x(P.Link,{children:`Changelog`})]}),x(P.Section,{title:`Community`,content:x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});h(()=>l(e,s,ae))});let oe=g(`rue:component:anchor`);e(s,oe),t(()=>{let e=m(F,{title:`Footer（默认纵向，sm 起横向）`,summary:`基础示例 展示，这里改用 sections 表达同一个场景。`,tab:v,preview:()=>x(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:W}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>l(e,s,oe))});let se=g(`rue:component:anchor`);e(s,se),t(()=>{let e=m(F,{title:`Footer with a logo section`,summary:`展示品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:b,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:S(`div`,{children:[x(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:W}),code:`<Footer
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
/>`});h(()=>l(e,s,se))});let ce=g(`rue:component:anchor`);e(s,ce),t(()=>{let e=m(F,{title:`Footer with a form`,summary:`展示订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>x(P,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...W,{key:`newsletter`,title:`Newsletter`,as:`form`,content:S(`fieldset`,{className:`w-80`,children:[x(`label`,{children:`Enter your email address`}),S(`div`,{className:`join`,children:[x(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),x(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});h(()=>l(e,s,ce))});let le=g(`rue:component:anchor`);e(s,le),t(()=>{let e=m(F,{title:`Footer with logo and social icons`,summary:`展示品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>x(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:S(`div`,{children:[x(I,{}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})}]}),code:`<Footer
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
/>`});h(()=>l(e,s,le))});let ue=g(`rue:component:anchor`);e(s,ue),t(()=>{let e=m(F,{title:`Footer with links and social icons`,summary:`展示混合场景；这里可以用 children 自由拼装，展示组合分支。`,tab:E,preview:()=>S(P,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[S(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Services`}),x(`button`,{className:`link link-hover`,children:`Branding`}),x(`button`,{className:`link link-hover`,children:`Design`}),x(`button`,{className:`link link-hover`,children:`Marketing`}),x(`button`,{className:`link link-hover`,children:`Advertisement`})]}),S(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Company`}),x(`button`,{className:`link link-hover`,children:`About us`}),x(`button`,{className:`link link-hover`,children:`Contact`}),x(`button`,{className:`link link-hover`,children:`Jobs`}),x(`button`,{className:`link link-hover`,children:`Press kit`})]}),S(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Social`}),x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});h(()=>l(e,s,ue))});let de=g(`rue:component:anchor`);e(s,de),t(()=>{let e=m(F,{title:`Links and social icons (two rows)`,summary:`展示两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>x(P,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:te}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});h(()=>l(e,s,de))});let fe=g(`rue:component:anchor`);e(s,fe),t(()=>{let e=m(F,{title:`Centered footer with logo and social icons`,summary:`展示居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:()=>S(P,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[S(`aside`,{children:[x(I,{size:50,className:`inline-block fill-current`}),S(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),x(`nav`,{children:x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`a`,{"aria-label":e,children:x(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});h(()=>l(e,s,fe))});let pe=g(`rue:component:anchor`);e(s,pe),t(()=>{let e=m(F,{title:`Centered footer with social icons`,summary:`展示居中导航与版权场景；展示基础的 children 写法。`,tab:k,preview:()=>S(P,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[S(`nav`,{className:`grid grid-flow-col gap-4`,children:[x(`button`,{className:`link link-hover`,children:`About us`}),x(`button`,{className:`link link-hover`,children:`Contact`}),x(`button`,{className:`link link-hover`,children:`Jobs`}),x(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})}),x(`aside`,{children:S(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});h(()=>l(e,s,pe))});let me=g(`rue:component:anchor`);e(s,me),t(()=>{let e=m(F,{title:`Two footer`,summary:`双层 footer 场景展示；下半部分可配合 bordered 或直接使用原类名。`,tab:A,preview:()=>S(`div`,{className:`w-full`,children:[x(P,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:W}),S(P,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[S(`aside`,{className:`grid-flow-col items-center`,children:[x(I,{size:24}),S(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),x(`nav`,{className:`md:place-self-center md:justify-self-end`,children:x(`div`,{className:`grid grid-flow-col gap-4`,children:L.map(({key:e,Icon:t})=>x(`a`,{"aria-label":e,children:x(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});h(()=>l(e,s,me))});let he=f(`h2`,s);e(s,he),a(he,`id`,`footer-api`),e(he,o(`API`));let ge=f(`p`,s);e(s,ge),e(ge,o(`当前页展示的是语义化的 Footer API，基础的 children 写法仍然可用。`));let _e=f(`h3`,s);e(s,_e),e(_e,o(`Footer`));let ve=g(`rue:component:anchor`);e(s,ve),t(()=>{let e=m(ee,{rows:ne});h(()=>l(e,s,ve))});let ye=f(`h3`,s);e(s,ye),d(ye,`mt-8`),e(ye,o(`Footer.Section`));let be=g(`rue:component:anchor`);e(s,be),t(()=>{let e=m(ee,{rows:re});h(()=>l(e,s,be))});let G=f(`div`,s);e(s,G),d(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let xe=f(`h3`,G);e(G,xe),d(xe,`mt-0 mb-3 text-base font-semibold`),e(xe,o(`复合子组件`));let K=f(`div`,G);e(G,K),d(K,`grid gap-2 text-sm md:grid-cols-2`);let q=f(`div`,K);e(K,q);let Se=f(`code`,q);e(q,Se),e(Se,o(`Footer.Brand`)),e(q,o(`：品牌或版权信息容器，默认渲染`));let Ce=f(`code`,q);e(q,Ce),e(Ce,o(`aside`));let J=f(`div`,K);e(K,J);let we=f(`code`,J);e(J,we),e(we,o(`Footer.Title`)),e(J,o(`：带`));let Te=f(`code`,J);e(J,Te),e(Te,o(`footer-title`)),e(J,o(`类名的标题节点`));let Y=f(`div`,K);e(K,Y);let Ee=f(`code`,Y);e(Y,Ee),e(Ee,o(`Footer.Link`)),e(Y,o(`：默认输出带`));let De=f(`code`,Y);e(Y,De),e(De,o(`link link-hover`)),e(Y,o(`的文本链接`));let X=f(`div`,K);e(K,X);let Oe=f(`code`,X);e(X,Oe),e(Oe,o(`Footer.Section`)),e(X,o(`：单列容器，支持`));let ke=f(`code`,X);e(X,ke),e(ke,o(`title`)),e(X,o(`、`));let Ae=f(`code`,X);e(X,Ae),e(Ae,o(`items`)),e(X,o(`、`));let je=f(`code`,X);e(X,je),e(je,o(`content`));let Me=f(`h2`,s);e(s,Me),e(Me,o(`FAQ`));let Ne=f(`h3`,s);e(s,Ne),e(Ne,o(`什么时候用 sections，什么时候可以写 children？`));let Z=f(`p`,s);e(s,Z),e(Z,o(`列结构比较规则时，优先用`));let Pe=f(`code`,Z);e(Z,Pe),e(Pe,o(`sections`)),e(Z,o(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=f(`code`,Z);e(Z,Fe),e(Fe,o(`nav`)),e(Z,o(`/`));let Ie=f(`code`,Z);e(Z,Ie),e(Ie,o(`aside`)),e(Z,o(`模板，也可以继续直接写`));let Le=f(`code`,Z);e(Z,Le),e(Le,o(`children`)),e(Z,o(`。`));let Re=f(`h3`,s);e(s,Re),e(Re,o(`社交图标和订阅表单怎么放进去？`));let Q=f(`p`,s);e(s,Q),e(Q,o(`这类内容更适合放到`));let ze=f(`code`,Q);e(Q,ze),e(ze,o(`Footer.Section`)),e(Q,o(`的`));let Be=f(`code`,Q);e(Q,Be),e(Be,o(`content`));let Ve=r(Q);e(Q,Ve),i(Ve,` `),e(Q,o(`里；如果只是普通文本链接，再用`));let He=f(`code`,Q);e(Q,He),e(He,o(`items`)),e(Q,o(`会更省代码。`));let Ue=f(`h3`,s);e(s,Ue),e(Ue,o(`direction 和 center 还需要保持吗？`));let $=f(`p`,s);e(s,$),e($,o(`需要。它们仍然是最轻量的布局开关，适合和当前的`));let We=f(`code`,$);e($,We),e(We,o(`sm:footer-horizontal`)),e($,o(`、`));let Ge=f(`code`,$);return e($,Ge),e(Ge,o(`footer-center`)),e($,o(`类名习惯一起工作，不会破坏项目页面的视觉结果。`)),n})}),u,y),u})};export{ie as default};