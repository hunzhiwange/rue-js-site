import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=({as:e=`h6`,className:t,children:n,content:r,...i})=>x(e,{...i,className:w(`footer-title`,t),children:r??n}),D=({as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s=!0,...c})=>{let l=e??(i?`a`:`button`),u=a===`_blank`&&!o?`noreferrer`:o;return l===`a`?x(`a`,{...c,href:i,target:a,rel:u,className:w(`link`,s&&`link-hover`,t),children:r??n}):l===`button`?x(`button`,{...c,type:c.type??`button`,className:w(`link`,s&&`link-hover`,t),children:r??n}):x(l,{...c,className:w(`link`,s&&`link-hover`,t),children:r??n})},ee=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,te=(e,t)=>{if(!T(e))return null;if(ee(e)){let{key:n,label:r,content:i,children:a,...o}=e;return x(D,{...o,children:i??a??r},n??`item-${t}`)}return x(D,{children:e},`item-${t}`)},O=({as:e=`aside`,className:t,children:n,content:r,...i})=>x(e,{...i,className:t,children:r??n}),k=({as:e=`nav`,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:s,contentClassName:c,...l})=>{let u=e,d=(o??[]).map((e,t)=>te(e,t)).filter(Boolean),f=T(a)||T(n)?a??n:s?x(`div`,{className:w(`grid grid-flow-col auto-cols-max gap-4`,c),children:d}):d;return b(u,{...l,className:t,children:[T(r)?x(E,{className:i,children:r}):null,f]})},A=Object.assign(({as:e=`footer`,direction:t,center:n,className:r,children:i,brand:a,sections:o,wrap:s,bordered:c,...u})=>{let d=e,f=T(i),p=T(a)||(o?.length??0)>0;return x(d,{...u,className:w(`footer`,t&&`footer-${t}`,n&&`footer-center`,s&&`gap-y-6`,c&&`border-t border-base-300`,r),children:f||!p?i:b(l,{children:[T(a)?x(O,{children:a}):null,(o??[]).map((e,t)=>{let{key:n,...r}=e;return x(k,{...r},n??`section-${t}`)})]})})},{Brand:O,Section:k,Title:E,Link:D}),j=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?a.preview():f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),ne=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),M=r=>f(i=>{let a=s(`svg`,i);n(()=>{c(a,`width`,String(r.size===void 0?40:r.size))}),n(()=>{c(a,`height`,String(r.size===void 0?40:r.size))}),c(a,`viewBox`,`0 0 24 24`),n(()=>{e(a,String(r.className??`fill-current`))});let o=s(`path`,a);return t(a,o),c(o,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),a}),N=[{key:`x`,Icon:()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`width`,`24`),c(r,`height`,`24`),c(r,`viewBox`,`0 0 24 24`),e(r,`fill-current`);let i=s(`path`,r);return t(r,i),c(i,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),r})},{key:`video`,Icon:()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`width`,`24`),c(r,`height`,`24`),c(r,`viewBox`,`0 0 24 24`),e(r,`fill-current`);let i=s(`path`,r);return t(r,i),c(i,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),r})},{key:`community`,Icon:()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`width`,`24`),c(r,`height`,`24`),c(r,`viewBox`,`0 0 24 24`),e(r,`fill-current`);let i=s(`path`,r);return t(r,i),c(i,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),r})}],P=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],F=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],I=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],L=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],R=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],z=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],B=[{key:`services`,title:`Services`,items:P},{key:`company`,title:`Company`,items:F},{key:`legal`,title:`Legal`,items:I}],re=[...B,{key:`social`,title:`Social`,items:L},{key:`explore`,title:`Explore`,items:R},{key:`apps`,title:`Apps`,items:z}],ie=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],V=()=>{let{tabRecommended:l,tabCompound:v,tabBasic:y,tabLogo:C,tabForm:w,tabSocial:T,tabLinks:E,tabLinks2:D,tabCenteredBrand:ee,tabCentered:te,tabTwo:O}=_(`useSetup:0:0`,()=>h(()=>({tabRecommended:_(`ref:1:0`,()=>d(`preview`)),tabCompound:_(`ref:1:1`,()=>d(`preview`)),tabBasic:_(`ref:1:2`,()=>d(`preview`)),tabLogo:_(`ref:1:3`,()=>d(`preview`)),tabForm:_(`ref:1:4`,()=>d(`preview`)),tabSocial:_(`ref:1:5`,()=>d(`preview`)),tabLinks:_(`ref:1:6`,()=>d(`preview`)),tabLinks2:_(`ref:1:7`,()=>d(`preview`)),tabCenteredBrand:_(`ref:1:8`,()=>d(`preview`)),tabCentered:_(`ref:1:9`,()=>d(`preview`)),tabTwo:_(`ref:1:10`,()=>d(`preview`))})));return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Footer 页脚`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let S=s(`code`,_);t(_,S),t(S,r(`nav`)),t(_,r(`、`));let k=s(`code`,_);t(_,k),t(k,r(`aside`)),t(_,r(`和 自定义 class，也可以改用`));let P=s(`code`,_);t(_,P),t(P,r(`brand`)),t(_,r(`、`));let F=s(`code`,_);t(_,F),t(F,r(`sections`));let I=a(_);t(_,I),u(I,` `),t(_,r(`与`));let L=s(`code`,_);t(_,L),t(L,r(`Footer.Section`)),t(_,r(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let R=s(`h2`,f);t(f,R),t(R,r(`何时使用`));let z=s(`ul`,f);t(f,z);let V=s(`li`,z);t(z,V),t(V,r(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let oe=s(`li`,z);t(z,oe),t(oe,r(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let se=i(`rue:component:anchor`);t(f,se),n(()=>{let e=m(j,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:l,preview:()=>x(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});g(()=>p(e,f,se))});let ce=i(`rue:component:anchor`);t(f,ce),n(()=>{let e=m(j,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:v,preview:()=>b(A,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[b(A.Brand,{children:[x(M,{}),b(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,x(`br`,{}),`Ship consistent experiences.`]})]}),b(A.Section,{title:`Product`,children:[x(A.Link,{children:`Overview`}),x(A.Link,{children:`Pricing`}),x(A.Link,{children:`Changelog`})]}),x(A.Section,{title:`Community`,content:x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});g(()=>p(e,f,ce))});let le=i(`rue:component:anchor`);t(f,le),n(()=>{let e=m(j,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:y,preview:()=>x(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});g(()=>p(e,f,le))});let ue=i(`rue:component:anchor`);t(f,ue),n(()=>{let e=m(j,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:C,preview:()=>x(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:b(`div`,{children:[x(M,{}),b(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:B}),code:`<Footer
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
/>`});g(()=>p(e,f,ue))});let de=i(`rue:component:anchor`);t(f,de),n(()=>{let e=m(j,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:w,preview:()=>x(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...B,{key:`newsletter`,title:`Newsletter`,as:`form`,content:b(`fieldset`,{className:`w-80`,children:[x(`label`,{children:`Enter your email address`}),b(`div`,{className:`join`,children:[x(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),x(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});g(()=>p(e,f,de))});let fe=i(`rue:component:anchor`);t(f,fe),n(()=>{let e=m(j,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:T,preview:()=>x(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:b(`div`,{children:[x(M,{}),b(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})}]}),code:`<Footer
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
/>`});g(()=>p(e,f,fe))});let pe=i(`rue:component:anchor`);t(f,pe),n(()=>{let e=m(j,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>b(A,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[b(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Services`}),x(`button`,{className:`link link-hover`,children:`Branding`}),x(`button`,{className:`link link-hover`,children:`Design`}),x(`button`,{className:`link link-hover`,children:`Marketing`}),x(`button`,{className:`link link-hover`,children:`Advertisement`})]}),b(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Company`}),x(`button`,{className:`link link-hover`,children:`About us`}),x(`button`,{className:`link link-hover`,children:`Contact`}),x(`button`,{className:`link link-hover`,children:`Jobs`}),x(`button`,{className:`link link-hover`,children:`Press kit`})]}),b(`nav`,{children:[x(`h6`,{className:`footer-title`,children:`Social`}),x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});g(()=>p(e,f,pe))});let me=i(`rue:component:anchor`);t(f,me),n(()=>{let e=m(j,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>x(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:re}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});g(()=>p(e,f,me))});let he=i(`rue:component:anchor`);t(f,he),n(()=>{let e=m(j,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:ee,preview:()=>b(A,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[b(`aside`,{children:[x(M,{size:50,className:`inline-block fill-current`}),b(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]}),b(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),x(`nav`,{children:x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`a`,{"aria-label":e,children:x(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});g(()=>p(e,f,he))});let ge=i(`rue:component:anchor`);t(f,ge),n(()=>{let e=m(j,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:te,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[b(`nav`,{className:`grid grid-flow-col gap-4`,children:[x(`button`,{className:`link link-hover`,children:`About us`}),x(`button`,{className:`link link-hover`,children:`Contact`}),x(`button`,{className:`link link-hover`,children:`Jobs`}),x(`button`,{className:`link link-hover`,children:`Press kit`})]}),x(`nav`,{children:x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`button`,{type:`button`,"aria-label":e,children:x(t,{})},e))})}),x(`aside`,{children:b(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});g(()=>p(e,f,ge))});let _e=i(`rue:component:anchor`);t(f,_e),n(()=>{let e=m(j,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:O,preview:()=>b(`div`,{className:`w-full`,children:[x(A,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:B}),b(A,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[b(`aside`,{className:`grid-flow-col items-center`,children:[x(M,{size:24}),b(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,x(`br`,{}),`Providing reliable tech since 1992`]})]}),x(`nav`,{className:`md:place-self-center md:justify-self-end`,children:x(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>x(`a`,{"aria-label":e,children:x(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});g(()=>p(e,f,_e))});let H=s(`h2`,f);t(f,H),c(H,`id`,`footer-api`),t(H,r(`API`));let ve=s(`p`,f);t(f,ve),t(ve,r(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let ye=s(`h3`,f);t(f,ye),t(ye,r(`Footer`));let be=i(`rue:component:anchor`);t(f,be),n(()=>{let e=m(ne,{rows:ie});g(()=>p(e,f,be))});let U=s(`h3`,f);t(f,U),e(U,`mt-8`),t(U,r(`Footer.Section`));let xe=i(`rue:component:anchor`);t(f,xe),n(()=>{let e=m(ne,{rows:ae});g(()=>p(e,f,xe))});let W=s(`div`,f);t(f,W),e(W,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let G=s(`h3`,W);t(W,G),e(G,`mt-0 mb-3 text-base font-semibold`),t(G,r(`复合子组件`));let K=s(`div`,W);t(W,K),e(K,`grid gap-2 text-sm md:grid-cols-2`);let q=s(`div`,K);t(K,q);let Se=s(`code`,q);t(q,Se),t(Se,r(`Footer.Brand`)),t(q,r(`：品牌或版权信息容器，默认渲染`));let Ce=s(`code`,q);t(q,Ce),t(Ce,r(`aside`));let J=s(`div`,K);t(K,J);let we=s(`code`,J);t(J,we),t(we,r(`Footer.Title`)),t(J,r(`：带`));let Te=s(`code`,J);t(J,Te),t(Te,r(`footer-title`)),t(J,r(`类名的标题节点`));let Y=s(`div`,K);t(K,Y);let Ee=s(`code`,Y);t(Y,Ee),t(Ee,r(`Footer.Link`)),t(Y,r(`：默认输出带`));let De=s(`code`,Y);t(Y,De),t(De,r(`link link-hover`)),t(Y,r(`的文本链接`));let X=s(`div`,K);t(K,X);let Oe=s(`code`,X);t(X,Oe),t(Oe,r(`Footer.Section`)),t(X,r(`：单列容器，支持`));let ke=s(`code`,X);t(X,ke),t(ke,r(`title`)),t(X,r(`、`));let Ae=s(`code`,X);t(X,Ae),t(Ae,r(`items`)),t(X,r(`、`));let je=s(`code`,X);t(X,je),t(je,r(`content`));let Me=s(`h2`,f);t(f,Me),t(Me,r(`FAQ`));let Ne=s(`h3`,f);t(f,Ne),t(Ne,r(`什么时候用 sections，什么时候继续写 children？`));let Z=s(`p`,f);t(f,Z),t(Z,r(`列结构比较规则时，优先用`));let Pe=s(`code`,Z);t(Z,Pe),t(Pe,r(`sections`)),t(Z,r(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=s(`code`,Z);t(Z,Fe),t(Fe,r(`nav`)),t(Z,r(`/`));let Ie=s(`code`,Z);t(Z,Ie),t(Ie,r(`aside`)),t(Z,r(`模板，也可以继续直接写`));let Le=s(`code`,Z);t(Z,Le),t(Le,r(`children`)),t(Z,r(`。`));let Re=s(`h3`,f);t(f,Re),t(Re,r(`社交图标和订阅表单怎么放进去？`));let Q=s(`p`,f);t(f,Q),t(Q,r(`这类内容更适合放到`));let ze=s(`code`,Q);t(Q,ze),t(ze,r(`Footer.Section`)),t(Q,r(`的`));let Be=s(`code`,Q);t(Q,Be),t(Be,r(`content`));let Ve=a(Q);t(Q,Ve),u(Ve,` `),t(Q,r(`里；如果只是普通文本链接，再用`));let He=s(`code`,Q);t(Q,He),t(He,r(`items`)),t(Q,r(`会更省代码。`));let Ue=s(`h3`,f);t(f,Ue),t(Ue,r(`direction 和 center 还需要保留吗？`));let $=s(`p`,f);t(f,$),t($,r(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=s(`code`,$);t($,We),t(We,r(`sm:footer-horizontal`)),t($,r(`、`));let Ge=s(`code`,$);return t($,Ge),t(Ge,r(`footer-center`)),t($,r(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),d})}),h,_),h})};export{V as default};