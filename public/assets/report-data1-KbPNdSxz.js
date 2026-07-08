import{Q as e,Vt as t,at as n,bt as r,dt as i,it as a,l as o,nt as s,o as c,pt as l,rt as u,tn as d,tt as f,vt as p}from"./vapor-runtime-x7F5M-49.js";import{n as m}from"./vapor-helpers-vapor-D1LP4JjK.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>o(g=>{let D=s(),re=u(`style`,D);e(D,re),t(()=>{r(re,Se)});let k=u(`div`,D);e(D,k),l(k,`report-data1-scope report-page`);let A=u(`section`,k);e(k,A),l(A,`report-hero report-card`);let N=u(`div`,A);e(A,N),l(N,`report-hero-copy`);let Ce=u(`p`,N);e(N,Ce),l(Ce,`report-kicker`),e(Ce,a(`Data Pulse / March 2026`));let we=u(`h1`,N);e(N,we),e(we,a(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=u(`p`,N);e(N,P),l(P,`report-hero-text`),e(P,a(`统计区间为 `));let Te=f(`rue:slot:anchor`);e(P,Te),t(()=>{let e=ve;d(()=>c(e,P,Te))}),e(P,a(`。窗口总成交额达到 `));let Ee=f(`rue:slot:anchor`);e(P,Ee),t(()=>{let e=j(y);d(()=>c(e,P,Ee))}),e(P,a(`，共形成`));let De=n(P);e(P,De),r(De,` `),e(P,a(` `));let Oe=n(P);e(P,Oe),t(()=>{r(Oe,_.format(v))}),e(P,a(` 笔订单， 其中`));let ke=n(P);e(P,ke),r(ke,` `),e(P,a(` `));let Ae=f(`rue:slot:anchor`);e(P,Ae),t(()=>{let e=_e(w.sumDate);d(()=>c(e,P,Ae))}),e(P,a(` 单日贡献 `));let je=f(`rue:slot:anchor`);e(P,je),t(()=>{let e=he(T);d(()=>c(e,P,je))}),e(P,a(` ，而退货金额维持在 `));let Me=f(`rue:slot:anchor`);e(P,Me),t(()=>{let e=j(b);d(()=>c(e,P,Me))}),e(P,a(`。`));let F=u(`div`,N);e(N,F),l(F,`report-hero-tags`);let Ne=u(`span`,F);e(F,Ne),l(Ne,`report-tag`);let Pe=f(`rue:slot:anchor`);e(Ne,Pe),t(()=>{let e=S;d(()=>c(e,Ne,Pe))}),e(Ne,a(` 天静默期`));let Fe=u(`span`,F);e(F,Fe),l(Fe,`report-tag`);let Ie=f(`rue:slot:anchor`);e(Fe,Ie),t(()=>{let e=x;d(()=>c(e,Fe,Ie))}),e(Fe,a(` 天有效成交`));let Le=u(`span`,F);e(F,Le),l(Le,`report-tag`),e(Le,a(`客户记录 `));let Re=n(Le);e(Le,Re),t(()=>{r(Re,_.format(te))});let I=u(`div`,A);e(A,I),l(I,`report-hero-board`);let L=u(`div`,I);e(I,L),l(L,`report-board-header`);let ze=u(`span`,L);e(L,ze),l(ze,`report-board-label`),e(ze,a(`峰值日`));let Be=u(`span`,L);e(L,Be),l(Be,`report-board-date`);let Ve=f(`rue:slot:anchor`);e(Be,Ve),t(()=>{let e=_e(w.sumDate);d(()=>c(e,Be,Ve))});let He=u(`div`,I);e(I,He),l(He,`report-board-value`);let Ue=f(`rue:slot:anchor`);e(He,Ue),t(()=>{let e=M(w.allAmount);d(()=>c(e,He,Ue))});let R=u(`p`,I);e(I,R),l(R,`report-board-copy`),e(R,a(`单日完成 `));let We=n(R);e(R,We),t(()=>{r(We,_.format(w.ordersCount))}),e(R,a(` 笔订单，客户均额`));let Ge=n(R);e(R,Ge),r(Ge,` `),e(R,a(` `));let Ke=f(`rue:slot:anchor`);e(R,Ke),t(()=>{let e=M(w.avgClientPrice);d(()=>c(e,R,Ke))}),e(R,a(`。`));let qe=u(`div`,I);e(I,qe),l(qe,`report-sparkline`);let Je=f(`rue:list:start`),Ye=f(`rue:list:end`);e(qe,Je),e(qe,Ye);let Xe=new Map;t(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(n,r,a,m,h)=>{c(o(()=>{let r=s(),a=u(`div`,r);e(r,a),t(()=>{i(a,`key`,String(n.sumDate))}),l(a,`report-spark-item`);let o=u(`span`,a);e(a,o),t(()=>{l(o,`report-spark-bar ${n.sumDate===w.sumDate?`is-peak`:``}`)}),t(()=>{p(o,{height:`${Math.max(10,n.amountRatio*100)}%`})});let m=u(`span`,a);e(a,m),l(m,`report-spark-label`);let h=f(`rue:slot:anchor`);return e(m,h),t(()=>{let e=n.label;d(()=>c(e,m,h))}),r}),r,a)}})});let Ze=u(`section`,k);e(k,Ze),l(Ze,`report-kpi-grid`);let Qe=f(`rue:list:start`),$e=f(`rue:list:end`);e(Ze,Qe),e(Ze,$e);let et=new Map;t(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(a,p,m,h,g)=>{c(o(()=>{let o=s(),p=u(`article`,o);e(o,p),t(()=>{i(p,`key`,String(a.label))}),l(p,`report-kpi-card report-card`);let m=u(`p`,p);e(p,m);let h=f(`rue:slot:anchor`);e(m,h),t(()=>{let e=a.label;d(()=>c(e,m,h))});let g=u(`h2`,p);e(p,g);let _=n(g);e(g,_),t(()=>{r(_,a.value)});let v=u(`span`,p);e(p,v);let y=f(`rue:slot:anchor`);return e(v,y),t(()=>{let e=a.detail;d(()=>c(e,v,y))}),o}),p,m)}})});let z=u(`section`,k);e(k,z),l(z,`report-panel-grid report-panel-grid-primary`);let B=u(`article`,z);e(z,B),l(B,`report-card report-chart-card report-chart-wide`);let V=u(`div`,B);e(B,V),l(V,`report-panel-header`);let tt=u(`div`,V);e(V,tt);let nt=u(`p`,tt);e(tt,nt),l(nt,`report-panel-eyebrow`),e(nt,a(`GMV Trend`));let rt=u(`h2`,tt);e(tt,rt),e(rt,a(`成交金额波动`));let it=u(`div`,V);e(V,it),l(it,`report-panel-summary`),e(it,a(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=u(`div`,B);e(B,at),l(at,`report-chart-shell`);let H=u(`svg`,at);e(at,H),t(()=>{i(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),l(H,`report-svg-chart`),i(H,`role`,`img`),i(H,`aria-label`,`每日成交金额趋势图`);let ot=u(`defs`,H);e(H,ot);let U=u(`linearGradient`,ot);e(ot,U),i(U,`id`,`reportAreaGradient`),i(U,`x1`,`0`),i(U,`x2`,`0`),i(U,`y1`,`0`),i(U,`y2`,`1`);let st=u(`stop`,U);e(U,st),i(st,`offset`,`0%`),l(st,`report-stop-area-top`);let ct=u(`stop`,U);e(U,ct),i(ct,`offset`,`100%`),l(ct,`report-stop-area-bottom`);let W=u(`linearGradient`,ot);e(ot,W),i(W,`id`,`reportLineGradient`),i(W,`x1`,`0`),i(W,`x2`,`1`),i(W,`y1`,`0`),i(W,`y2`,`0`);let lt=u(`stop`,W);e(W,lt),i(lt,`offset`,`0%`),l(lt,`report-stop-line-start`);let ut=u(`stop`,W);e(W,ut),i(ut,`offset`,`100%`),l(ut,`report-stop-line-end`);let dt=f(`rue:list:start`),ft=f(`rue:list:end`);e(H,dt),e(H,ft);let pt=new Map;t(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(a,d,f,p,m)=>{c(o(()=>{let o=s(),c=u(`g`,o);e(o,c),t(()=>{i(c,`key`,String(a.step))});let d=u(`line`,c);e(c,d),t(()=>{i(d,`x1`,String(O.left))}),t(()=>{i(d,`y1`,String(a.y))}),t(()=>{i(d,`x2`,String(ie-O.right))}),t(()=>{i(d,`y2`,String(a.y))}),l(d,`report-grid-line`);let f=u(`text`,c);e(c,f),t(()=>{i(f,`x`,String(O.left+6))}),t(()=>{i(f,`y`,String(a.y-8))}),l(f,`report-grid-label`);let p=n(f);return e(f,p),t(()=>{r(p,M(oe*a.step))}),o}),d,f)}})});let mt=u(`path`,H);e(H,mt),t(()=>{i(mt,`d`,String(ue))}),i(mt,`fill`,`url(#reportAreaGradient)`);let ht=u(`path`,H);e(H,ht),t(()=>{i(ht,`d`,String(le))}),l(ht,`report-line-path`),i(ht,`stroke`,`url(#reportLineGradient)`);let gt=f(`rue:list:start`),_t=f(`rue:list:end`);e(H,gt),e(H,_t);let vt=new Map;t(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(a,d,f,p,m)=>{c(o(()=>{let o=s(),c=u(`g`,o);e(o,c),t(()=>{i(c,`key`,String(a.row.sumDate))});let d=u(`circle`,c);e(c,d),t(()=>{i(d,`cx`,String(a.x))}),t(()=>{i(d,`cy`,String(a.y))}),t(()=>{i(d,`r`,String(a.row.sumDate===w.sumDate?7:4.5))}),l(d,`report-point-outer`);let f=u(`circle`,c);e(c,f),t(()=>{i(f,`cx`,String(a.x))}),t(()=>{i(f,`cy`,String(a.y))}),i(f,`r`,`3.2`),l(f,`report-point-inner`);let p=u(`text`,c);e(c,p),t(()=>{i(p,`x`,String(a.x))}),t(()=>{i(p,`y`,String(ae-12))}),i(p,`text-anchor`,`middle`),l(p,`report-axis-label`);let m=n(p);return e(p,m),t(()=>{r(m,ge(a.row.sumDate))}),o}),d,f)}})});let G=u(`article`,z);e(z,G),l(G,`report-card report-channel-card`);let yt=u(`div`,G);e(G,yt),l(yt,`report-panel-header`);let bt=u(`div`,yt);e(yt,bt);let xt=u(`p`,bt);e(bt,xt),l(xt,`report-panel-eyebrow`),e(xt,a(`Channel Mix`));let St=u(`h2`,bt);e(bt,St),e(St,a(`下单渠道分布`));let K=u(`div`,G);e(G,K),l(K,`report-channel-body`);let q=u(`svg`,K);e(K,q),i(q,`viewBox`,`0 0 160 160`),l(q,`report-donut`),i(q,`role`,`img`),i(q,`aria-label`,`下单渠道占比图`);let Ct=u(`circle`,q);e(q,Ct),i(Ct,`cx`,`80`),i(Ct,`cy`,`80`),t(()=>{i(Ct,`r`,String(fe))}),l(Ct,`report-donut-track`);let J=u(`circle`,q);e(q,J),i(J,`cx`,`80`),i(J,`cy`,`80`),t(()=>{i(J,`r`,String(fe))}),l(J,`report-donut-admin`),t(()=>{i(J,`stroke-dasharray`,String(`${pe}`))}),i(J,`stroke-dashoffset`,`0`);let Y=u(`circle`,q);e(q,Y),i(Y,`cx`,`80`),i(Y,`cy`,`80`),t(()=>{i(Y,`r`,String(fe))}),l(Y,`report-donut-self`),t(()=>{i(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),t(()=>{i(Y,`stroke-dashoffset`,String(-me))});let X=u(`div`,K);e(K,X),l(X,`report-channel-center`);let wt=u(`strong`,X);e(X,wt);let Tt=f(`rue:slot:anchor`);e(wt,Tt),t(()=>{let e=he(E);d(()=>c(e,wt,Tt))});let Et=u(`span`,X);e(X,Et),e(Et,a(`后台代客`));let Dt=u(`div`,G);e(G,Dt),l(Dt,`report-channel-list`);let Z=u(`div`,Dt);e(Dt,Z),l(Z,`report-channel-item`);let Ot=u(`span`,Z);e(Z,Ot),l(Ot,`report-dot report-dot-admin`);let kt=u(`div`,Z);e(Z,kt);let At=u(`strong`,kt);e(kt,At),e(At,a(`后台代客下单`));let jt=u(`p`,kt);e(kt,jt);let Mt=f(`rue:slot:anchor`);e(jt,Mt),t(()=>{let e=j(ee);d(()=>c(e,jt,Mt))});let Nt=u(`span`,Z);e(Z,Nt);let Pt=f(`rue:slot:anchor`);e(Nt,Pt),t(()=>{let e=he(E);d(()=>c(e,Nt,Pt))});let Q=u(`div`,Dt);e(Dt,Q),l(Q,`report-channel-item`);let Ft=u(`span`,Q);e(Q,Ft),l(Ft,`report-dot report-dot-self`);let It=u(`div`,Q);e(Q,It);let Lt=u(`strong`,It);e(It,Lt),e(Lt,a(`客户自主下单`));let Rt=u(`p`,It);e(It,Rt);let zt=f(`rue:slot:anchor`);e(Rt,zt),t(()=>{let e=j(C);d(()=>c(e,Rt,zt))});let Bt=u(`span`,Q);e(Q,Bt);let Vt=f(`rue:slot:anchor`);e(Bt,Vt),t(()=>{let e=he(ne);d(()=>c(e,Bt,Vt))});let Ht=u(`section`,k);e(k,Ht),l(Ht,`report-panel-grid`);let Ut=u(`article`,Ht);e(Ht,Ut),l(Ut,`report-card report-chart-card`);let Wt=u(`div`,Ut);e(Ut,Wt),l(Wt,`report-panel-header`);let Gt=u(`div`,Wt);e(Wt,Gt);let Kt=u(`p`,Gt);e(Gt,Kt),l(Kt,`report-panel-eyebrow`),e(Kt,a(`Order Volume`));let qt=u(`h2`,Gt);e(Gt,qt),e(qt,a(`每日订单笔数`));let Jt=u(`div`,Wt);e(Wt,Jt),l(Jt,`report-panel-summary`),e(Jt,a(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=u(`div`,Ut);e(Ut,Yt),l(Yt,`report-bars`);let Xt=f(`rue:list:start`),Zt=f(`rue:list:end`);e(Yt,Xt),e(Yt,Zt);let Qt=new Map;t(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(a,m,h,g,v)=>{c(o(()=>{let o=s(),m=u(`div`,o);e(o,m),t(()=>{i(m,`key`,String(a.sumDate))}),l(m,`report-bar-group`);let h=u(`div`,m);e(m,h),l(h,`report-bar-shell`);let g=u(`div`,h);e(h,g),t(()=>{l(g,`report-bar-fill ${a.sumDate===w.sumDate?`is-accent`:``}`)}),t(()=>{p(g,{height:`${Math.max(8,a.ordersCount/se*100)}%`})});let v=u(`strong`,m);e(m,v);let y=n(v);e(v,y),t(()=>{r(y,_.format(a.ordersCount))});let b=u(`span`,m);e(m,b);let x=f(`rue:slot:anchor`);return e(b,x),t(()=>{let e=ge(a.sumDate);d(()=>c(e,b,x))}),o}),m,h)}})});let $t=u(`article`,Ht);e(Ht,$t),l($t,`report-card report-insight-card`);let en=u(`div`,$t);e($t,en),l(en,`report-panel-header`);let tn=u(`div`,en);e(en,tn);let nn=u(`p`,tn);e(tn,nn),l(nn,`report-panel-eyebrow`),e(nn,a(`Signals`));let rn=u(`h2`,tn);e(tn,rn),e(rn,a(`关键观察`));let an=u(`div`,$t);e($t,an),l(an,`report-insight-list`);let on=f(`rue:list:start`),sn=f(`rue:list:end`);e(an,on),e(an,sn);let cn=new Map;t(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(n,r,a,p,m)=>{c(o(()=>{let r=s(),a=u(`article`,r);e(r,a),t(()=>{i(a,`key`,String(n.title))}),l(a,`report-insight-item`);let o=u(`h3`,a);e(a,o);let p=f(`rue:slot:anchor`);e(o,p),t(()=>{let e=n.title;d(()=>c(e,o,p))});let m=u(`p`,a);e(a,m);let h=f(`rue:slot:anchor`);return e(m,h),t(()=>{let e=n.text;d(()=>c(e,m,h))}),r}),r,a)}})});let ln=u(`section`,k);e(k,ln),l(ln,`report-card report-timeline-card`);let $=u(`div`,ln);e(ln,$),l($,`report-panel-header`);let un=u(`div`,$);e($,un);let dn=u(`p`,un);e(un,dn),l(dn,`report-panel-eyebrow`),e(dn,a(`Daily Playback`));let fn=u(`h2`,un);e(un,fn),e(fn,a(`逐日回放`));let pn=u(`div`,$);e($,pn),l(pn,`report-panel-summary`),e(pn,a(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=u(`div`,ln);e(ln,mn),l(mn,`report-timeline-list`);let hn=f(`rue:list:start`),gn=f(`rue:list:end`);e(mn,hn),e(mn,gn);let _n=new Map;return t(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{c(o(()=>{let o=s(),h=u(`div`,o);e(o,h),t(()=>{i(h,`key`,String(m.sumDate))}),l(h,`report-timeline-row`);let g=u(`div`,h);e(h,g),l(g,`report-timeline-main`);let v=u(`strong`,g);e(g,v);let y=f(`rue:slot:anchor`);e(v,y),t(()=>{let e=m.label;d(()=>c(e,v,y))});let b=u(`span`,g);e(g,b);let x=f(`rue:slot:anchor`);e(b,x),t(()=>{let e=m.notes;d(()=>c(e,b,x))});let S=u(`div`,h);e(h,S),l(S,`report-timeline-track`);let ee=u(`span`,S);e(S,ee),l(ee,`report-timeline-fill`),t(()=>{p(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=u(`div`,h);e(h,C),l(C,`report-timeline-metrics`);let te=u(`strong`,C);e(C,te);let w=f(`rue:slot:anchor`);e(te,w),t(()=>{let e=M(m.allAmount);d(()=>c(e,te,w))});let T=u(`span`,C);e(C,T);let E=n(T);e(T,E),t(()=>{r(E,_.format(m.ordersCount))}),e(T,a(` 笔 / 客户均额`));let ne=n(T);e(T,ne),r(ne,` `),e(T,a(` `));let D=f(`rue:slot:anchor`);return e(T,D),t(()=>{let e=M(m.avgClientPrice);d(()=>c(e,T,D))}),o}),h,g)}})}),D});export{N as default};