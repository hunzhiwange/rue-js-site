import{$ as e,Q as t,Qt as n,Wt as r,X as i,et as a,ht as o,l as s,lt as c,nt as l,o as u,pt as d,st as f,tt as p}from"./vapor-runtime-CXIalONM.js";import{n as m}from"./vapor-helpers-vapor-CoXKrGmY.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
.report-data1-scope.report-page {
  --rp: var(--color-primary);
  --rp-c: var(--color-primary-content);
  --rs: var(--color-secondary);
  --rs-c: var(--color-secondary-content);
  --ra: var(--color-accent);
  --ra-c: var(--color-accent-content);
  --r-base: var(--color-base-100);
  --r-base2: var(--color-base-200);
  --r-base3: var(--color-base-300);
  --r-content: var(--color-base-content);
  --r-neutral: var(--color-neutral);
  --r-neutral-c: var(--color-neutral-content);

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .report-data1-scope.report-page {
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .report-data1-scope.report-page {
    padding: 0 48px;
  }
}

.report-data1-scope .report-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  background:
    radial-gradient(ellipse 60% 50% at 95% -10%, color-mix(in oklch, var(--rp) 14%, transparent), transparent),
    radial-gradient(ellipse 40% 60% at 5% 110%, color-mix(in oklch, var(--rs) 10%, transparent), transparent),
    color-mix(in oklch, var(--r-base2) 55%, var(--r-base));
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--r-base3) 30%, transparent),
    0 20px 60px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  backdrop-filter: blur(2px);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.report-data1-scope .report-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--rp) 30%, transparent) 0%,
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--ra) 20%, transparent) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.report-data1-scope .report-card:hover::before {
  opacity: 1;
}

.report-data1-scope .report-card:hover {
  box-shadow:
    0 4px 32px color-mix(in oklch, var(--rp) 12%, transparent),
    0 24px 80px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  transform: translateY(-2px);
}

.report-data1-scope .report-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 24px;
  padding: 36px;
}

.report-data1-scope .report-kicker,
.report-data1-scope .report-panel-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-hero-copy h1,
.report-data1-scope .report-panel-header h2,
.report-data1-scope .report-kpi-card h2,
.report-data1-scope .report-insight-item h3 {
  margin: 0;
}

.report-data1-scope .report-hero-copy h1 {
  max-width: 18ch;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.05;
  color: var(--r-content);
  letter-spacing: -0.02em;
}

.report-data1-scope .report-hero-text,
.report-data1-scope .report-board-copy,
.report-data1-scope .report-panel-summary,
.report-data1-scope .report-channel-item p,
.report-data1-scope .report-insight-item p,
.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span,
.report-data1-scope .report-kpi-card span {
  color: color-mix(in oklch, var(--r-content) 68%, transparent);
  line-height: 1.75;
}

.report-data1-scope .report-hero-text {
  max-width: 68ch;
  margin: 18px 0 0;
}

.report-data1-scope .report-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.report-data1-scope .report-tag {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--rp) 28%, transparent);
  background: color-mix(in oklch, var(--rp) 12%, transparent);
  color: var(--rp);
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.report-data1-scope .report-tag:hover {
  background: color-mix(in oklch, var(--rp) 22%, transparent);
  border-color: color-mix(in oklch, var(--rp) 45%, transparent);
  transform: translateY(-1px);
}

.report-data1-scope .report-hero-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(ellipse 80% 50% at 20% 5%, color-mix(in oklch, var(--rp) 18%, transparent), transparent),
    color-mix(in oklch, var(--r-base3) 60%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  box-shadow: 0 8px 32px color-mix(in oklch, var(--r-base3) 40%, transparent);
}

.report-data1-scope .report-board-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.report-data1-scope .report-board-label,
.report-data1-scope .report-board-date {
  font-size: 13px;
  font-weight: 700;
}

.report-data1-scope .report-board-label {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
}

.report-data1-scope .report-board-date {
  color: var(--rp);
}

.report-data1-scope .report-board-value {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800;
  line-height: 1;
  color: var(--r-content);
  background: linear-gradient(135deg, var(--r-content) 30%, var(--rp));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.report-data1-scope .report-board-copy {
  margin: 0;
}

.report-data1-scope .report-sparkline {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-bar {
  width: 100%;
  min-height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 85%, var(--ra)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 25px color-mix(in oklch, var(--rp) 22%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-spark-bar:hover {
  box-shadow: 0 10px 32px color-mix(in oklch, var(--rp) 38%, transparent);
  transform: scaleX(1.1);
}

.report-data1-scope .report-spark-bar.is-peak {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rs) 90%, var(--rp)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 28px color-mix(in oklch, var(--rs) 32%, transparent);
}

.report-data1-scope .report-spark-label,
.report-data1-scope .report-axis-label,
.report-data1-scope .report-grid-label {
  font-size: 11px;
  fill: color-mix(in oklch, var(--r-content) 50%, transparent);
  color: color-mix(in oklch, var(--r-content) 50%, transparent);
}

.report-data1-scope .report-kpi-grid,
.report-data1-scope .report-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.report-data1-scope .report-panel-grid-primary {
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
}

.report-data1-scope .report-kpi-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.report-data1-scope .report-kpi-card {
  padding: 22px 22px 20px;
}

.report-data1-scope .report-kpi-card p {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-kpi-card h2 {
  margin-top: 16px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  color: var(--r-content);
}

.report-data1-scope .report-kpi-card span {
  display: block;
  margin-top: 12px;
}

.report-data1-scope .report-chart-card,
.report-data1-scope .report-channel-card,
.report-data1-scope .report-insight-card,
.report-data1-scope .report-timeline-card {
  padding: 24px;
}

.report-data1-scope .report-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.report-data1-scope .report-panel-header h2 {
  font-size: 28px;
  color: var(--r-content);
}

.report-data1-scope .report-panel-summary {
  max-width: 28ch;
  font-size: 14px;
}

.report-data1-scope .report-chart-shell {
  overflow: hidden;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 50%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 50%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 30%, transparent);
}

.report-data1-scope .report-svg-chart {
  display: block;
  width: 100%;
  height: auto;
}

.report-data1-scope .report-grid-line {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.report-data1-scope .report-line-path {
  fill: none;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.report-data1-scope .report-point-outer {
  fill: var(--r-base2);
  stroke: color-mix(in oklch, var(--rp) 80%, var(--r-content));
  stroke-width: 2;
  transition: r 0.3s ease;
}

.report-data1-scope .report-point-inner {
  fill: var(--rp);
}

.report-data1-scope .report-channel-body {
  position: relative;
  display: grid;
  place-items: center;
  padding: 10px 0 20px;
}

.report-data1-scope .report-donut {
  width: min(100%, 220px);
  height: auto;
}

.report-data1-scope .report-donut-track,
.report-data1-scope .report-donut-admin,
.report-data1-scope .report-donut-self {
  fill: none;
  stroke-width: 16;
  transform: rotate(-90deg);
  transform-origin: 80px 80px;
  stroke-linecap: round;
}

.report-data1-scope .report-donut-track {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-donut-admin {
  stroke: var(--rp);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--rp) 40%, transparent));
}

.report-data1-scope .report-donut-self {
  stroke: var(--ra);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--ra) 40%, transparent));
}

.report-data1-scope .report-channel-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
}

.report-data1-scope .report-channel-center strong {
  font-size: 32px;
  color: var(--r-content);
}

.report-data1-scope .report-channel-center span {
  font-size: 13px;
  color: color-mix(in oklch, var(--r-content) 60%, transparent);
}

.report-data1-scope .report-channel-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-channel-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-channel-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-color: color-mix(in oklch, var(--r-base3) 50%, transparent);
  transform: translateX(4px);
}

.report-data1-scope .report-channel-item strong,
.report-data1-scope .report-timeline-main strong,
.report-data1-scope .report-timeline-metrics strong {
  display: block;
  color: var(--r-content);
}

.report-data1-scope .report-channel-item p {
  margin: 4px 0 0;
  font-size: 13px;
}

.report-data1-scope .report-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.report-data1-scope .report-dot-admin {
  background: var(--rp);
  box-shadow: 0 0 18px color-mix(in oklch, var(--rp) 42%, transparent);
}

.report-data1-scope .report-dot-self {
  background: var(--ra);
  box-shadow: 0 0 18px color-mix(in oklch, var(--ra) 42%, transparent);
}

.report-data1-scope .report-bars {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 14px;
  align-items: end;
  min-height: 280px;
  padding: 18px;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 40%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 45%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 25%, transparent);
}

.report-data1-scope .report-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 244px;
}

.report-data1-scope .report-bar-shell {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 0 4px;
}

.report-data1-scope .report-bar-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 18px 18px 6px 6px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--ra) 80%, var(--rs)), color-mix(in oklch, var(--ra) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--ra) 18%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-bar-fill:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--ra) 30%, transparent);
  filter: brightness(1.1);
}

.report-data1-scope .report-bar-fill.is-accent {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 80%, var(--ra)), color-mix(in oklch, var(--rp) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--rp) 18%, transparent);
}

.report-data1-scope .report-bar-fill.is-accent:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--rp) 30%, transparent);
}

.report-data1-scope .report-bar-group strong {
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-bar-group span {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
  font-size: 12px;
}

.report-data1-scope .report-insight-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-insight-item {
  padding: 18px 18px 16px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  border-left: 3px solid color-mix(in oklch, var(--rp) 50%, var(--rs));
  transition: all 0.3s ease;
}

.report-data1-scope .report-insight-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-left-color: var(--rp);
  transform: translateX(4px);
}

.report-data1-scope .report-insight-item h3 {
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-insight-item p {
  margin: 0;
}

.report-data1-scope .report-timeline-list {
  display: grid;
  gap: 12px;
}

.report-data1-scope .report-timeline-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.3fr) minmax(0, 1fr) minmax(220px, 0.55fr);
  gap: 18px;
  align-items: center;
  padding: 16px 18px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 25%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 25%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover {
  background: color-mix(in oklch, var(--r-base2) 45%, var(--r-base));
  transform: translateX(4px);
}

.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
}

.report-data1-scope .report-timeline-track {
  position: relative;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-timeline-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--rs), var(--ra));
  box-shadow: 0 0 12px color-mix(in oklch, var(--rp) 20%, transparent);
  transition: filter 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover .report-timeline-fill {
  filter: brightness(1.15);
}

.report-data1-scope .report-stop-area-top {
  stop-color: var(--rp);
  stop-opacity: 0.45;
}

.report-data1-scope .report-stop-area-bottom {
  stop-color: var(--rp);
  stop-opacity: 0;
}

.report-data1-scope .report-stop-line-start {
  stop-color: var(--rs);
}

.report-data1-scope .report-stop-line-end {
  stop-color: var(--ra);
}

@keyframes reportData1FloatIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.report-data1-scope .report-card,
.report-data1-scope .report-kpi-card {
  animation: reportData1FloatIn 0.6s ease both;
}

.report-data1-scope .report-kpi-card:nth-child(1) { animation-delay: 0ms; }
.report-data1-scope .report-kpi-card:nth-child(2) { animation-delay: 80ms; }
.report-data1-scope .report-kpi-card:nth-child(3) { animation-delay: 160ms; }
.report-data1-scope .report-kpi-card:nth-child(4) { animation-delay: 240ms; }

.report-data1-scope .report-timeline-row:nth-child(odd) {
  border-left: 3px solid color-mix(in oklch, var(--rp) 30%, var(--rs));
}

.report-data1-scope .report-timeline-row:nth-child(even) {
  border-left: 3px solid color-mix(in oklch, var(--ra) 30%, var(--rp));
}

@media (max-width: 1100px) {
  .report-data1-scope .report-kpi-grid,
  .report-data1-scope .report-panel-grid,
  .report-data1-scope .report-panel-grid-primary,
  .report-data1-scope .report-hero {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-panel-header {
    flex-direction: column;
  }

  .report-data1-scope .report-panel-summary {
    max-width: none;
  }

  .report-data1-scope .report-timeline-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .report-data1-scope .report-kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    gap: 8px;
  }
}

@media (max-width: 640px) {
  .report-data1-scope.report-page {
    padding: 0 12px;
    gap: 16px;
  }

  .report-data1-scope .report-hero,
  .report-data1-scope .report-chart-card,
  .report-data1-scope .report-channel-card,
  .report-data1-scope .report-insight-card,
  .report-data1-scope .report-timeline-card {
    padding: 20px;
  }

  .report-data1-scope .report-kpi-grid {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .report-data1-scope .report-channel-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .report-data1-scope .report-channel-item > span:last-child {
    grid-column: 2;
  }
}
`,N=()=>s(g=>{let D=e(),re=a(`style`,D);i(D,re),n(()=>{o(re,Se)});let k=a(`div`,D);i(D,k),c(k,`report-data1-scope report-page`);let A=a(`section`,k);i(k,A),c(A,`report-hero report-card`);let N=a(`div`,A);i(A,N),c(N,`report-hero-copy`);let Ce=a(`p`,N);i(N,Ce),c(Ce,`report-kicker`),i(Ce,p(`Data Pulse / March 2026`));let we=a(`h1`,N);i(N,we),i(we,p(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=a(`p`,N);i(N,P),c(P,`report-hero-text`),i(P,p(`统计区间为 `));let Te=t(`rue:slot:anchor`);i(P,Te),n(()=>{let e=ve;r(()=>u(e,P,Te))}),i(P,p(`。窗口总成交额达到 `));let Ee=t(`rue:slot:anchor`);i(P,Ee),n(()=>{let e=j(y);r(()=>u(e,P,Ee))}),i(P,p(`，共形成`));let De=l(P);i(P,De),o(De,` `),i(P,p(` `));let Oe=l(P);i(P,Oe),n(()=>{o(Oe,_.format(v))}),i(P,p(` 笔订单， 其中`));let ke=l(P);i(P,ke),o(ke,` `),i(P,p(` `));let Ae=t(`rue:slot:anchor`);i(P,Ae),n(()=>{let e=_e(w.sumDate);r(()=>u(e,P,Ae))}),i(P,p(` 单日贡献 `));let je=t(`rue:slot:anchor`);i(P,je),n(()=>{let e=he(T);r(()=>u(e,P,je))}),i(P,p(` ，而退货金额维持在 `));let Me=t(`rue:slot:anchor`);i(P,Me),n(()=>{let e=j(b);r(()=>u(e,P,Me))}),i(P,p(`。`));let F=a(`div`,N);i(N,F),c(F,`report-hero-tags`);let Ne=a(`span`,F);i(F,Ne),c(Ne,`report-tag`);let Pe=t(`rue:slot:anchor`);i(Ne,Pe),n(()=>{let e=S;r(()=>u(e,Ne,Pe))}),i(Ne,p(` 天静默期`));let Fe=a(`span`,F);i(F,Fe),c(Fe,`report-tag`);let Ie=t(`rue:slot:anchor`);i(Fe,Ie),n(()=>{let e=x;r(()=>u(e,Fe,Ie))}),i(Fe,p(` 天有效成交`));let Le=a(`span`,F);i(F,Le),c(Le,`report-tag`),i(Le,p(`客户记录 `));let Re=l(Le);i(Le,Re),n(()=>{o(Re,_.format(te))});let I=a(`div`,A);i(A,I),c(I,`report-hero-board`);let L=a(`div`,I);i(I,L),c(L,`report-board-header`);let ze=a(`span`,L);i(L,ze),c(ze,`report-board-label`),i(ze,p(`峰值日`));let Be=a(`span`,L);i(L,Be),c(Be,`report-board-date`);let Ve=t(`rue:slot:anchor`);i(Be,Ve),n(()=>{let e=_e(w.sumDate);r(()=>u(e,Be,Ve))});let He=a(`div`,I);i(I,He),c(He,`report-board-value`);let Ue=t(`rue:slot:anchor`);i(He,Ue),n(()=>{let e=M(w.allAmount);r(()=>u(e,He,Ue))});let R=a(`p`,I);i(I,R),c(R,`report-board-copy`),i(R,p(`单日完成 `));let We=l(R);i(R,We),n(()=>{o(We,_.format(w.ordersCount))}),i(R,p(` 笔订单，客户均额`));let Ge=l(R);i(R,Ge),o(Ge,` `),i(R,p(` `));let Ke=t(`rue:slot:anchor`);i(R,Ke),n(()=>{let e=M(w.avgClientPrice);r(()=>u(e,R,Ke))}),i(R,p(`。`));let qe=a(`div`,I);i(I,qe),c(qe,`report-sparkline`);let Je=t(`rue:list:start`),Ye=t(`rue:list:end`);i(qe,Je),i(qe,Ye);let Xe=new Map;n(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(o,l,p,m,h)=>{u(s(()=>{let s=e(),l=a(`div`,s);i(s,l),n(()=>{f(l,`key`,String(o.sumDate))}),c(l,`report-spark-item`);let p=a(`span`,l);i(l,p),n(()=>{c(p,`report-spark-bar ${o.sumDate===w.sumDate?`is-peak`:``}`)}),n(()=>{d(p,{height:`${Math.max(10,o.amountRatio*100)}%`})});let m=a(`span`,l);i(l,m),c(m,`report-spark-label`);let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let e=o.label;r(()=>u(e,m,h))}),s}),l,p)}})});let Ze=a(`section`,k);i(k,Ze),c(Ze,`report-kpi-grid`);let Qe=t(`rue:list:start`),$e=t(`rue:list:end`);i(Ze,Qe),i(Ze,$e);let et=new Map;n(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(d,p,m,h,g)=>{u(s(()=>{let s=e(),p=a(`article`,s);i(s,p),n(()=>{f(p,`key`,String(d.label))}),c(p,`report-kpi-card report-card`);let m=a(`p`,p);i(p,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=d.label;r(()=>u(e,m,h))});let g=a(`h2`,p);i(p,g);let _=l(g);i(g,_),n(()=>{o(_,d.value)});let v=a(`span`,p);i(p,v);let y=t(`rue:slot:anchor`);return i(v,y),n(()=>{let e=d.detail;r(()=>u(e,v,y))}),s}),p,m)}})});let z=a(`section`,k);i(k,z),c(z,`report-panel-grid report-panel-grid-primary`);let B=a(`article`,z);i(z,B),c(B,`report-card report-chart-card report-chart-wide`);let V=a(`div`,B);i(B,V),c(V,`report-panel-header`);let tt=a(`div`,V);i(V,tt);let nt=a(`p`,tt);i(tt,nt),c(nt,`report-panel-eyebrow`),i(nt,p(`GMV Trend`));let rt=a(`h2`,tt);i(tt,rt),i(rt,p(`成交金额波动`));let it=a(`div`,V);i(V,it),c(it,`report-panel-summary`),i(it,p(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=a(`div`,B);i(B,at),c(at,`report-chart-shell`);let H=a(`svg`,at);i(at,H),n(()=>{f(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),c(H,`report-svg-chart`),f(H,`role`,`img`),f(H,`aria-label`,`每日成交金额趋势图`);let ot=a(`defs`,H);i(H,ot);let U=a(`linearGradient`,ot);i(ot,U),f(U,`id`,`reportAreaGradient`),f(U,`x1`,`0`),f(U,`x2`,`0`),f(U,`y1`,`0`),f(U,`y2`,`1`);let st=a(`stop`,U);i(U,st),f(st,`offset`,`0%`),c(st,`report-stop-area-top`);let ct=a(`stop`,U);i(U,ct),f(ct,`offset`,`100%`),c(ct,`report-stop-area-bottom`);let W=a(`linearGradient`,ot);i(ot,W),f(W,`id`,`reportLineGradient`),f(W,`x1`,`0`),f(W,`x2`,`1`),f(W,`y1`,`0`),f(W,`y2`,`0`);let lt=a(`stop`,W);i(W,lt),f(lt,`offset`,`0%`),c(lt,`report-stop-line-start`);let ut=a(`stop`,W);i(W,ut),f(ut,`offset`,`100%`),c(ut,`report-stop-line-end`);let dt=t(`rue:list:start`),ft=t(`rue:list:end`);i(H,dt),i(H,ft);let pt=new Map;n(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(t,r,d,p,m)=>{u(s(()=>{let r=e(),s=a(`g`,r);i(r,s),n(()=>{f(s,`key`,String(t.step))});let u=a(`line`,s);i(s,u),n(()=>{f(u,`x1`,String(O.left))}),n(()=>{f(u,`y1`,String(t.y))}),n(()=>{f(u,`x2`,String(ie-O.right))}),n(()=>{f(u,`y2`,String(t.y))}),c(u,`report-grid-line`);let d=a(`text`,s);i(s,d),n(()=>{f(d,`x`,String(O.left+6))}),n(()=>{f(d,`y`,String(t.y-8))}),c(d,`report-grid-label`);let p=l(d);return i(d,p),n(()=>{o(p,M(oe*t.step))}),r}),r,d)}})});let mt=a(`path`,H);i(H,mt),n(()=>{f(mt,`d`,String(ue))}),f(mt,`fill`,`url(#reportAreaGradient)`);let ht=a(`path`,H);i(H,ht),n(()=>{f(ht,`d`,String(le))}),c(ht,`report-line-path`),f(ht,`stroke`,`url(#reportLineGradient)`);let gt=t(`rue:list:start`),_t=t(`rue:list:end`);i(H,gt),i(H,_t);let vt=new Map;n(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(t,r,d,p,m)=>{u(s(()=>{let r=e(),s=a(`g`,r);i(r,s),n(()=>{f(s,`key`,String(t.row.sumDate))});let u=a(`circle`,s);i(s,u),n(()=>{f(u,`cx`,String(t.x))}),n(()=>{f(u,`cy`,String(t.y))}),n(()=>{f(u,`r`,String(t.row.sumDate===w.sumDate?7:4.5))}),c(u,`report-point-outer`);let d=a(`circle`,s);i(s,d),n(()=>{f(d,`cx`,String(t.x))}),n(()=>{f(d,`cy`,String(t.y))}),f(d,`r`,`3.2`),c(d,`report-point-inner`);let p=a(`text`,s);i(s,p),n(()=>{f(p,`x`,String(t.x))}),n(()=>{f(p,`y`,String(ae-12))}),f(p,`text-anchor`,`middle`),c(p,`report-axis-label`);let m=l(p);return i(p,m),n(()=>{o(m,ge(t.row.sumDate))}),r}),r,d)}})});let G=a(`article`,z);i(z,G),c(G,`report-card report-channel-card`);let yt=a(`div`,G);i(G,yt),c(yt,`report-panel-header`);let bt=a(`div`,yt);i(yt,bt);let xt=a(`p`,bt);i(bt,xt),c(xt,`report-panel-eyebrow`),i(xt,p(`Channel Mix`));let St=a(`h2`,bt);i(bt,St),i(St,p(`下单渠道分布`));let K=a(`div`,G);i(G,K),c(K,`report-channel-body`);let q=a(`svg`,K);i(K,q),f(q,`viewBox`,`0 0 160 160`),c(q,`report-donut`),f(q,`role`,`img`),f(q,`aria-label`,`下单渠道占比图`);let Ct=a(`circle`,q);i(q,Ct),f(Ct,`cx`,`80`),f(Ct,`cy`,`80`),n(()=>{f(Ct,`r`,String(fe))}),c(Ct,`report-donut-track`);let J=a(`circle`,q);i(q,J),f(J,`cx`,`80`),f(J,`cy`,`80`),n(()=>{f(J,`r`,String(fe))}),c(J,`report-donut-admin`),n(()=>{f(J,`stroke-dasharray`,String(`${pe}`))}),f(J,`stroke-dashoffset`,`0`);let Y=a(`circle`,q);i(q,Y),f(Y,`cx`,`80`),f(Y,`cy`,`80`),n(()=>{f(Y,`r`,String(fe))}),c(Y,`report-donut-self`),n(()=>{f(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),n(()=>{f(Y,`stroke-dashoffset`,String(-me))});let X=a(`div`,K);i(K,X),c(X,`report-channel-center`);let wt=a(`strong`,X);i(X,wt);let Tt=t(`rue:slot:anchor`);i(wt,Tt),n(()=>{let e=he(E);r(()=>u(e,wt,Tt))});let Et=a(`span`,X);i(X,Et),i(Et,p(`后台代客`));let Dt=a(`div`,G);i(G,Dt),c(Dt,`report-channel-list`);let Z=a(`div`,Dt);i(Dt,Z),c(Z,`report-channel-item`);let Ot=a(`span`,Z);i(Z,Ot),c(Ot,`report-dot report-dot-admin`);let kt=a(`div`,Z);i(Z,kt);let At=a(`strong`,kt);i(kt,At),i(At,p(`后台代客下单`));let jt=a(`p`,kt);i(kt,jt);let Mt=t(`rue:slot:anchor`);i(jt,Mt),n(()=>{let e=j(ee);r(()=>u(e,jt,Mt))});let Nt=a(`span`,Z);i(Z,Nt);let Pt=t(`rue:slot:anchor`);i(Nt,Pt),n(()=>{let e=he(E);r(()=>u(e,Nt,Pt))});let Q=a(`div`,Dt);i(Dt,Q),c(Q,`report-channel-item`);let Ft=a(`span`,Q);i(Q,Ft),c(Ft,`report-dot report-dot-self`);let It=a(`div`,Q);i(Q,It);let Lt=a(`strong`,It);i(It,Lt),i(Lt,p(`客户自主下单`));let Rt=a(`p`,It);i(It,Rt);let zt=t(`rue:slot:anchor`);i(Rt,zt),n(()=>{let e=j(C);r(()=>u(e,Rt,zt))});let Bt=a(`span`,Q);i(Q,Bt);let Vt=t(`rue:slot:anchor`);i(Bt,Vt),n(()=>{let e=he(ne);r(()=>u(e,Bt,Vt))});let Ht=a(`section`,k);i(k,Ht),c(Ht,`report-panel-grid`);let Ut=a(`article`,Ht);i(Ht,Ut),c(Ut,`report-card report-chart-card`);let Wt=a(`div`,Ut);i(Ut,Wt),c(Wt,`report-panel-header`);let Gt=a(`div`,Wt);i(Wt,Gt);let Kt=a(`p`,Gt);i(Gt,Kt),c(Kt,`report-panel-eyebrow`),i(Kt,p(`Order Volume`));let qt=a(`h2`,Gt);i(Gt,qt),i(qt,p(`每日订单笔数`));let Jt=a(`div`,Wt);i(Wt,Jt),c(Jt,`report-panel-summary`),i(Jt,p(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=a(`div`,Ut);i(Ut,Yt),c(Yt,`report-bars`);let Xt=t(`rue:list:start`),Zt=t(`rue:list:end`);i(Yt,Xt),i(Yt,Zt);let Qt=new Map;n(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(p,m,h,g,v)=>{u(s(()=>{let s=e(),m=a(`div`,s);i(s,m),n(()=>{f(m,`key`,String(p.sumDate))}),c(m,`report-bar-group`);let h=a(`div`,m);i(m,h),c(h,`report-bar-shell`);let g=a(`div`,h);i(h,g),n(()=>{c(g,`report-bar-fill ${p.sumDate===w.sumDate?`is-accent`:``}`)}),n(()=>{d(g,{height:`${Math.max(8,p.ordersCount/se*100)}%`})});let v=a(`strong`,m);i(m,v);let y=l(v);i(v,y),n(()=>{o(y,_.format(p.ordersCount))});let b=a(`span`,m);i(m,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=ge(p.sumDate);r(()=>u(e,b,x))}),s}),m,h)}})});let $t=a(`article`,Ht);i(Ht,$t),c($t,`report-card report-insight-card`);let en=a(`div`,$t);i($t,en),c(en,`report-panel-header`);let tn=a(`div`,en);i(en,tn);let nn=a(`p`,tn);i(tn,nn),c(nn,`report-panel-eyebrow`),i(nn,p(`Signals`));let rn=a(`h2`,tn);i(tn,rn),i(rn,p(`关键观察`));let an=a(`div`,$t);i($t,an),c(an,`report-insight-list`);let on=t(`rue:list:start`),sn=t(`rue:list:end`);i(an,on),i(an,sn);let cn=new Map;n(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(o,l,d,p,m)=>{u(s(()=>{let s=e(),l=a(`article`,s);i(s,l),n(()=>{f(l,`key`,String(o.title))}),c(l,`report-insight-item`);let d=a(`h3`,l);i(l,d);let p=t(`rue:slot:anchor`);i(d,p),n(()=>{let e=o.title;r(()=>u(e,d,p))});let m=a(`p`,l);i(l,m);let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let e=o.text;r(()=>u(e,m,h))}),s}),l,d)}})});let ln=a(`section`,k);i(k,ln),c(ln,`report-card report-timeline-card`);let $=a(`div`,ln);i(ln,$),c($,`report-panel-header`);let un=a(`div`,$);i($,un);let dn=a(`p`,un);i(un,dn),c(dn,`report-panel-eyebrow`),i(dn,p(`Daily Playback`));let fn=a(`h2`,un);i(un,fn),i(fn,p(`逐日回放`));let pn=a(`div`,$);i($,pn),c(pn,`report-panel-summary`),i(pn,p(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=a(`div`,ln);i(ln,mn),c(mn,`report-timeline-list`);let hn=t(`rue:list:start`),gn=t(`rue:list:end`);i(mn,hn),i(mn,gn);let _n=new Map;return n(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{u(s(()=>{let s=e(),h=a(`div`,s);i(s,h),n(()=>{f(h,`key`,String(m.sumDate))}),c(h,`report-timeline-row`);let g=a(`div`,h);i(h,g),c(g,`report-timeline-main`);let v=a(`strong`,g);i(g,v);let y=t(`rue:slot:anchor`);i(v,y),n(()=>{let e=m.label;r(()=>u(e,v,y))});let b=a(`span`,g);i(g,b);let x=t(`rue:slot:anchor`);i(b,x),n(()=>{let e=m.notes;r(()=>u(e,b,x))});let S=a(`div`,h);i(h,S),c(S,`report-timeline-track`);let ee=a(`span`,S);i(S,ee),c(ee,`report-timeline-fill`),n(()=>{d(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=a(`div`,h);i(h,C),c(C,`report-timeline-metrics`);let te=a(`strong`,C);i(C,te);let w=t(`rue:slot:anchor`);i(te,w),n(()=>{let e=M(m.allAmount);r(()=>u(e,te,w))});let T=a(`span`,C);i(C,T);let E=l(T);i(T,E),n(()=>{o(E,_.format(m.ordersCount))}),i(T,p(` 笔 / 客户均额`));let ne=l(T);i(T,ne),o(ne,` `),i(T,p(` `));let D=t(`rue:slot:anchor`);return i(T,D),n(()=>{let e=M(m.avgClientPrice);r(()=>u(e,T,D))}),s}),h,g)}})}),D});export{N as default};