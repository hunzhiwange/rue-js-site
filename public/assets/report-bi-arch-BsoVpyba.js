import{At as e,C as t,Dn as n,E as r,Et as i,Ot as a,Q as o,Vt as s,_n as c,_t as l,at as u,b as d,bt as f,ct as p,dt as m,et as h,gn as g,gt as _,kn as v,mn as y,pn as b,tt as ee,ut as x,vn as S,vt as C,w,wn as T,xn as E,xt as D,yt as O}from"./rue-runtime-HIMg8Lz8.js";var te=S(`<div class="bi-scope bi-page"><section class="bi-hero bi-card"><div><p class="bi-kicker">BI Platform Architecture / Realtime Monitor</p><h1>多源异构数据接入架构，实时驱动业务决策</h1><p class="bi-hero-desc">统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。</p><div class="bi-tags"><span class="bi-tag"><span class="dot"></span>6 数据源在线</span><span class="bi-tag">CDC 实时同步</span><span class="bi-tag">ETL 批处理</span><span class="bi-tag">四层仓储存档</span><span class="bi-tag">GraphQL + REST 双协议</span></div></div><div class="bi-metrics-grid"><!--rue:text-hole:0--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Sources</p><h2>数据源连接池</h2></div><p>实时监控六大异构数据源的连接状态、QPS、延迟与健康度。</p></div></div><div class="bi-sources-grid"><!--rue:text-hole:1--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Pipeline</p><h2>数据处理管线</h2></div><p>五阶段数据生命周期：从采集到可视化的全链路自动化。</p></div></div><div class="bi-pipeline"><!--rue:text-hole:2--></div></section><section class="bi-chart-section"><article class="bi-card bi-chart-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Latency Monitor</p><h2>24H 延迟趋势</h2></div></div><div class="bi-chart-shell"><!--rue:opaque-hole:3--></div></article><article class="bi-card bi-tp-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Weekly Throughput</p><h2>周吞吐量</h2></div></div><div class="bi-tp-bars"><!--rue:text-hole:4--></div></article></section><section class="bi-bottom-grid"><article class="bi-card bi-queries-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Top Queries</p><h2>高频查询排行</h2></div></div><div><!--rue:text-hole:5--></div></article><article class="bi-card bi-alert-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Alert Center</p><h2>告警事件</h2></div></div><div><!--rue:text-hole:6--></div></article></section></div>`),k=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],A=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],ne=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],j=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],re=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],M=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],ie=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],N=700,ae=220,P={t:20,r:16,b:36,l:16},F=N-P.l-P.r,I=ae-P.t-P.b,L=80,R=j.map(e=>{let t=P.l+F/Math.max(j.length-1,1)*j.indexOf(e);return{...e,x:t,mysqlY:P.t+I-e.mysql/L*I,pgY:P.t+I-e.pg/L*I,redisY:P.t+I-e.redis/L*I,apiY:P.t+I-e.api/L*I}}),z=e=>R.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),oe=Math.max(...re.map(e=>e.value)),se=`
.bi-scope.bi-page {
  --b-bg: var(--color-base-100);
  --b-bg2: var(--color-base-200);
  --b-bg3: var(--color-base-300);
  --b-c: var(--color-base-content);
  --b-p: var(--color-primary);
  --b-pc: var(--color-primary-content);
  --b-s: var(--color-secondary);
  --b-sc: var(--color-secondary-content);
  --b-a: var(--color-accent);
  --b-ac: var(--color-accent-content);
  --b-ok: oklch(0.72 0.19 155);
  --b-warn: oklch(0.75 0.18 75);
  --b-err: oklch(0.65 0.22 25);
  --b-mysql: oklch(0.65 0.2 250);
  --b-pg: oklch(0.6 0.18 165);
  --b-ch: oklch(0.72 0.2 300);
  --b-redis: oklch(0.65 0.24 15);
  --b-api: oklch(0.68 0.16 85);
  --b-gql: oklch(0.7 0.2 280);
  --b-glass: color-mix(in oklch, var(--b-bg2) 55%, transparent);
  --b-glass2: color-mix(in oklch, var(--b-bg3) 35%, transparent);

  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 24px;
  font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
}

@media (min-width: 768px) { .bi-scope.bi-page { padding: 0 36px; } }
@media (min-width: 1280px) { .bi-scope.bi-page { padding: 0 48px; } }

.bi-scope .bi-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--b-glass2);
  background:
    radial-gradient(ellipse 70% 50% at 100% -10%, color-mix(in oklch, var(--b-p) 12%, transparent), transparent),
    radial-gradient(ellipse 50% 60% at 0% 110%, color-mix(in oklch, var(--b-s) 8%, transparent), transparent),
    var(--b-glass);
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--b-bg3) 25%, transparent),
    0 16px 48px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent);
  backdrop-filter: blur(4px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bi-scope .bi-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--b-p) 25%, transparent),
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--b-a) 18%, transparent)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.bi-scope .bi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px color-mix(in oklch, var(--b-p) 10%, transparent), 0 24px 64px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent); }
.bi-scope .bi-card:hover::before { opacity: 1; }

.bi-scope .bi-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(340px, 0.85fr);
  gap: 32px;
  padding: 40px;
}

.bi-scope .bi-kicker {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-hero h1 {
  margin: 0;
  font-size: clamp(30px, 4.5vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  color: var(--b-c);
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, var(--b-c) 40%, var(--b-p));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bi-scope .bi-hero-desc {
  margin: 18px 0 0;
  max-width: 60ch;
  line-height: 1.8;
  color: color-mix(in oklch, var(--b-c) 65%, transparent);
}

.bi-scope .bi-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.bi-scope .bi-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  background: color-mix(in oklch, var(--b-p) 10%, transparent);
  color: var(--b-p);
  transition: all 0.3s ease;
}

.bi-scope .bi-tag:hover {
  background: color-mix(in oklch, var(--b-p) 20%, transparent);
  transform: translateY(-1px);
}

.bi-scope .bi-tag .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--b-ok);
  box-shadow: 0 0 8px color-mix(in oklch, var(--b-ok) 50%, transparent);
  animation: biPulse 2s ease-in-out infinite;
}

.bi-scope .bi-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.bi-scope .bi-metric-card {
  padding: 20px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-metric-card:hover {
  background: color-mix(in oklch, var(--b-bg3) 55%, var(--b-bg2));
  transform: translateY(-2px);
}

.bi-scope .bi-metric-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-metric-value {
  margin-top: 8px;
  font-size: clamp(24px, 2.5vw, 34px);
  font-weight: 800;
  color: var(--b-c);
  line-height: 1;
}

.bi-scope .bi-metric-delta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
}

.bi-scope .bi-metric-delta.up {
  color: var(--b-ok);
  background: color-mix(in oklch, var(--b-ok) 12%, transparent);
}

.bi-scope .bi-metric-delta.down {
  color: var(--b-err);
  background: color-mix(in oklch, var(--b-err) 12%, transparent);
}

.bi-scope .bi-section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.bi-scope .bi-section-title h2 {
  margin: 0;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-section-title p {
  margin: 0;
  font-size: 14px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  max-width: 36ch;
}

.bi-scope .bi-eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-sources-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 28px;
}

.bi-scope .bi-src {
  padding: 22px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg2) 35%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 30%, transparent);
  transition: all 0.35s ease;
  cursor: default;
}

.bi-scope .bi-src:hover {
  background: color-mix(in oklch, var(--b-bg2) 55%, var(--b-bg));
  border-color: color-mix(in oklch, var(--b-bg3) 55%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px color-mix(in oklch, var(--b-bg3) 25%, transparent);
}

.bi-scope .bi-src-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bi-scope .bi-src-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.bi-scope .bi-src-icon.mysql { background: linear-gradient(135deg, var(--b-mysql), oklch(0.5 0.15 250)); }
.bi-scope .bi-src-icon.pg { background: linear-gradient(135deg, var(--b-pg), oklch(0.45 0.12 165)); }
.bi-scope .bi-src-icon.ch { background: linear-gradient(135deg, var(--b-ch), oklch(0.55 0.15 300)); }
.bi-scope .bi-src-icon.redis { background: linear-gradient(135deg, var(--b-redis), oklch(0.5 0.18 15)); }
.bi-scope .bi-src-icon.api { background: linear-gradient(135deg, var(--b-api), oklch(0.5 0.12 85)); }
.bi-scope .bi-src-icon.gql { background: linear-gradient(135deg, var(--b-gql), oklch(0.55 0.15 280)); }

.bi-scope .bi-src-name {
  font-size: 17px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 999px;
  text-transform: uppercase;
}

.bi-scope .bi-src-type.sql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 12%, transparent); }
.bi-scope .bi-src-type.olap { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 12%, transparent); }
.bi-scope .bi-src-type.cache { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 12%, transparent); }
.bi-scope .bi-src-type.http { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 12%, transparent); }

.bi-scope .bi-src-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-src-stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-src-stat-value {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-stat-unit {
  font-size: 11px;
  font-weight: 600;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-src-conn-bar {
  width: 100%;
  height: 4px;
  border-radius: 999px;
  margin-top: 6px;
  background: color-mix(in oklch, var(--b-c) 8%, transparent);
  overflow: hidden;
}

.bi-scope .bi-src-conn-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.bi-scope .bi-src-conn-fill.mysql { background: var(--b-mysql); }
.bi-scope .bi-src-conn-fill.pg { background: var(--b-pg); }
.bi-scope .bi-src-conn-fill.ch { background: var(--b-ch); }
.bi-scope .bi-src-conn-fill.redis { background: var(--b-redis); }
.bi-scope .bi-src-conn-fill.api { background: var(--b-api); }
.bi-scope .bi-src-conn-fill.gql { background: var(--b-gql); }

.bi-scope .bi-src-dbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.bi-scope .bi-src-db {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 50%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.bi-scope .bi-status-dot.active { background: var(--b-ok); box-shadow: 0 0 10px color-mix(in oklch, var(--b-ok) 50%, transparent); }
.bi-scope .bi-status-dot.warning { background: var(--b-warn); box-shadow: 0 0 10px color-mix(in oklch, var(--b-warn) 50%, transparent); animation: biPulse 1.5s ease-in-out infinite; }

.bi-scope .bi-pipeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  padding: 28px;
  position: relative;
}

.bi-scope .bi-pipe-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 20px 12px;
  position: relative;
  z-index: 1;
}

.bi-scope .bi-pipe-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: linear-gradient(135deg, color-mix(in oklch, var(--b-p) 20%, var(--b-bg2)), color-mix(in oklch, var(--b-a) 15%, var(--b-bg3)));
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  box-shadow: 0 4px 16px color-mix(in oklch, var(--b-p) 12%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-pipe-stage:hover .bi-pipe-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 24px color-mix(in oklch, var(--b-p) 20%, transparent);
}

.bi-scope .bi-pipe-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-pipe-desc {
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  line-height: 1.6;
}

.bi-scope .bi-pipe-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.bi-scope .bi-pipe-item {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-pipe-arrow {
  position: absolute;
  top: 48px;
  right: -14px;
  width: 28px;
  height: 2px;
  z-index: 0;
}

.bi-scope .bi-pipe-arrow::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--b-p), var(--b-a));
  opacity: 0.4;
}

.bi-scope .bi-pipe-arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  border: 5px solid transparent;
  border-left: 7px solid var(--b-a);
  opacity: 0.4;
}

.bi-scope .bi-chart-section {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.85fr);
  gap: 20px;
}

.bi-scope .bi-chart-card {
  padding: 28px;
}

.bi-scope .bi-chart-shell {
  overflow: hidden;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  box-shadow: inset 0 2px 10px color-mix(in oklch, var(--b-bg3) 20%, transparent);
}

.bi-scope .bi-chart-svg {
  display: block;
  width: 100%;
  height: auto;
}

.bi-scope .bi-grid-line {
  stroke: color-mix(in oklch, var(--b-c) 8%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.bi-scope .bi-grid-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 40%, transparent);
}

.bi-scope .bi-axis-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-line-path {
  fill: none;
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bi-scope .bi-tp-card { padding: 28px; }

.bi-scope .bi-tp-bars {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  min-height: 180px;
  padding: 16px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 35%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
}

.bi-scope .bi-tp-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.bi-scope .bi-tp-bar-shell {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: flex-end;
}

.bi-scope .bi-tp-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 14px 14px 4px 4px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--b-p) 80%, var(--b-a)), color-mix(in oklch, var(--b-p) 20%, transparent));
  box-shadow: 0 6px 20px color-mix(in oklch, var(--b-p) 18%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-tp-fill:hover {
  filter: brightness(1.15);
  box-shadow: 0 8px 28px color-mix(in oklch, var(--b-p) 28%, transparent);
}

.bi-scope .bi-tp-val {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-tp-label {
  font-size: 11px;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-queries-card { padding: 28px; }

.bi-scope .bi-query-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1.2fr) auto auto auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-query-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-query-row + .bi-query-row {
  margin-top: 10px;
}

.bi-scope .bi-query-rank {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--b-c);
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
}

.bi-scope .bi-query-rank.top3 {
  background: linear-gradient(135deg, var(--b-p), var(--b-a));
  color: white;
}

.bi-scope .bi-query-sql {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-query-src {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-query-src.mysql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 10%, transparent); }
.bi-scope .bi-query-src.pg { color: var(--b-pg); background: color-mix(in oklch, var(--b-pg) 10%, transparent); }
.bi-scope .bi-query-src.ch { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 10%, transparent); }
.bi-scope .bi-query-src.redis { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 10%, transparent); }
.bi-scope .bi-query-src.api { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 10%, transparent); }
.bi-scope .bi-query-src.gql { color: var(--b-gql); background: color-mix(in oklch, var(--b-gql) 10%, transparent); }

.bi-scope .bi-query-freq {
  font-size: 12px;
  font-weight: 700;
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-query-ms {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.bi-scope .bi-query-ms.fast { color: var(--b-ok); }
.bi-scope .bi-query-ms.med { color: var(--b-warn); }
.bi-scope .bi-query-ms.slow { color: var(--b-err); }

.bi-scope .bi-alert-card { padding: 28px; }

.bi-scope .bi-alert-row {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-alert-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-alert-row + .bi-alert-row {
  margin-top: 10px;
}

.bi-scope .bi-alert-time {
  font-size: 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-alert-level {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-level.error { color: var(--b-err); background: color-mix(in oklch, var(--b-err) 12%, transparent); }
.bi-scope .bi-alert-level.warn { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 12%, transparent); }
.bi-scope .bi-alert-level.info { color: var(--b-p); background: color-mix(in oklch, var(--b-p) 12%, transparent); }

.bi-scope .bi-alert-msg {
  font-size: 13px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-alert-resolved {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-resolved.yes { color: var(--b-ok); background: color-mix(in oklch, var(--b-ok) 10%, transparent); }
.bi-scope .bi-alert-resolved.no { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 10%, transparent); }

.bi-scope .bi-bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
}

@keyframes biPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes biFloatIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.bi-scope .bi-card {
  animation: biFloatIn 0.6s ease both;
}

.bi-scope .bi-metric-card:nth-child(1) { animation: biFloatIn 0.5s ease both; animation-delay: 0ms; }
.bi-scope .bi-metric-card:nth-child(2) { animation: biFloatIn 0.5s ease both; animation-delay: 60ms; }
.bi-scope .bi-metric-card:nth-child(3) { animation: biFloatIn 0.5s ease both; animation-delay: 120ms; }
.bi-scope .bi-metric-card:nth-child(4) { animation: biFloatIn 0.5s ease both; animation-delay: 180ms; }
.bi-scope .bi-metric-card:nth-child(5) { animation: biFloatIn 0.5s ease both; animation-delay: 240ms; }
.bi-scope .bi-metric-card:nth-child(6) { animation: biFloatIn 0.5s ease both; animation-delay: 300ms; }

@media (max-width: 1100px) {
  .bi-scope .bi-hero { grid-template-columns: 1fr; }
  .bi-scope .bi-sources-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .bi-scope .bi-chart-section,
  .bi-scope .bi-bottom-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-metrics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .bi-scope.bi-page { padding: 0 12px; gap: 16px; }
  .bi-scope .bi-sources-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-metrics-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-hero { padding: 24px; }
  .bi-scope .bi-query-row { grid-template-columns: 28px minmax(0, 1fr) auto; }
  .bi-scope .bi-query-src, .bi-scope .bi-query-freq, .bi-scope .bi-query-ms { display: none; }
  .bi-scope .bi-alert-row { grid-template-columns: auto minmax(0, 1fr) auto; }
  .bi-scope .bi-alert-time { display: none; }
}
`,ce=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),le=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ue={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},de={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},B=e=>e<5?`fast`:e<30?`med`:`slow`,V=()=>p(e(()=>{let p=l();m(p,O(` `));let h=C(`style`,p);m(p,h),T(()=>{a(h,se)}),m(p,O(` `));let S=te().content.cloneNode(!0),j=S.firstChild,F=j.childNodes[1].childNodes[0],V=j.childNodes[2].childNodes[0],fe=j.childNodes[0].childNodes[1].childNodes[0],pe=fe.parentNode,H=j.childNodes[1].childNodes[1].childNodes[0],me=H.parentNode,U=j.childNodes[2].childNodes[1].childNodes[0],he=U.parentNode,ge=j.childNodes[3].childNodes[0].childNodes[1].childNodes[0],_e=ge.parentNode,ve=j.childNodes[3].childNodes[1].childNodes[1].childNodes[0],ye=ve.parentNode,be=j.childNodes[4].childNodes[0].childNodes[1].childNodes[0],xe=be.parentNode,Se=j.childNodes[4].childNodes[1].childNodes[1].childNodes[0],Ce=Se.parentNode;p.appendChild(S),i(F,{padding:`28px 28px 0`}),i(V,{padding:`28px 28px 0`});let we=[];T(()=>{we=w(pe,fe,we,ne||[],(e,t)=>e.label,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`div`,e);t.className=`bi-metric-card`;let n=g(`div`,t);b(t,n),n.className=`bi-metric-label`;let r=c(``);b(n,r),E(r,()=>i.get().label);let a=g(`div`,t);b(t,a),a.className=`bi-metric-value`;let o=c(``);b(a,o),E(o,()=>i.get().value);let s=g(`span`,t);b(t,s);let l;T(()=>{let e=`bi-metric-delta ${i.get().delta.startsWith(`+`)&&i.get().label===`异常告警`?`down`:`up`}`,t=e==null?``:String(e);Object.is(l,t)||(l=t,s.className=t)});let u=c(``);return b(s,u),E(u,()=>i.get().delta),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(we));let Te=[];T(()=>{Te=w(me,H,Te,k||[],(e,t)=>e.id,(e,i)=>{let a=u(e);return t((e,i,o)=>r(e,o,()=>s(Object.assign(e=>{let i=g(`div`,e);i.className=`bi-src`;let o=g(`div`,i);b(i,o),o.className=`bi-src-head`;let l=g(`div`,o);b(o,l);let f;T(()=>{let e=`bi-src-icon ${ue[a.get().id]}`,t=e==null?``:String(e);Object.is(f,t)||(f=t,l.className=t)});let p=c(``);b(l,p),E(p,()=>a.get().icon);let m=g(`div`,o);b(o,m),Object.assign(m.style,{flex:1});let h=g(`div`,m);b(m,h),Object.assign(h.style,{display:`flex`,alignItems:`center`,gap:8});let _=g(`span`,h);b(h,_),_.className=`bi-src-name`;let ee=c(``);b(_,ee),E(ee,()=>a.get().name);let S=g(`span`,h);b(h,S);let C;T(()=>{let e=`bi-status-dot ${a.get().status}`,t=e==null?``:String(e);Object.is(C,t)||(C=t,S.className=t)});let D=g(`span`,m);b(m,D);let O;T(()=>{let e=`bi-src-type ${de[a.get().id]}`,t=e==null?``:String(e);Object.is(O,t)||(O=t,D.className=t)});let te=c(``);b(D,te),E(te,()=>a.get().type);let k=g(`div`,i);b(i,k),k.className=`bi-src-stats`;let A=g(`div`,k);b(k,A);let ne=g(`div`,A);b(A,ne),ne.className=`bi-src-stat-label`,b(ne,c(`QPS`));let j=g(`div`,A);b(A,j),j.className=`bi-src-stat-value`;let re=y(`rue:compiled-slot`);b(j,re),T(()=>{let e=ce(a.get().qps);v(()=>x(e,j,re))});let M=g(`div`,k);b(k,M);let ie=g(`div`,M);b(M,ie),ie.className=`bi-src-stat-label`,b(ie,c(`延迟`));let N=g(`div`,M);b(M,N),N.className=`bi-src-stat-value`;let ae=y(`rue:compiled-slot`);b(N,ae),T(()=>{let e=le(a.get().latency);v(()=>x(e,N,ae))});let P=g(`div`,k);b(k,P);let F=g(`div`,P);b(P,F),F.className=`bi-src-stat-label`,b(F,c(`可用率`));let I=g(`div`,P);b(P,I),I.className=`bi-src-stat-value`;let L=c(``);b(I,L),E(L,()=>a.get().uptime);let R=g(`div`,i);b(i,R),R.className=`bi-src-conn-bar`;let z=g(`div`,R);b(R,z);let oe;T(()=>{let e=`bi-src-conn-fill ${ue[a.get().id]}`,t=e==null?``:String(e);Object.is(oe,t)||(oe=t,z.className=t)});let se;T(()=>{let e=`${a.get().connections/a.get().maxConn*100}%`,t=e==null?``:String(e);Object.is(se,t)||(se=t,z.style.width=t)});let B=g(`div`,i);b(i,B),Object.assign(B.style,{marginTop:6,display:`flex`,justifyContent:`space-between`});let V=g(`span`,B);b(B,V),V.className=`bi-src-stat-unit`;let fe=c(``);b(V,fe),E(fe,()=>a.get().connections),b(V,c(` / `));let pe=c(``);b(V,pe),E(pe,()=>a.get().maxConn),b(V,c(` 连接`));let H=g(`div`,i);b(i,H),H.className=`bi-src-dbs`;let me=y(`rue:list:end`);b(H,me);let U=[];return T(()=>{let e=a.get().databases||[];U=w(H,me,U,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`span`,e);t.className=`bi-src-db`;let n=c(``);return b(t,n),E(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(U)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,i=n,a.set(t)})})}),n(()=>d(Te));let Ee=[];T(()=>{Ee=w(he,U,Ee,A||[],(e,t)=>e.id,(e,i)=>{let a=u(e),o=u(i);return t((e,i,f)=>r(e,f,()=>s(Object.assign(e=>{let i=g(`div`,e);i.className=`bi-pipe-stage`;let f=g(`div`,i);b(i,f),f.className=`bi-pipe-icon`;let p=c(``);b(f,p),E(p,()=>a.get().icon);let m=g(`div`,i);b(i,m),m.className=`bi-pipe-name`;let h=c(``);b(m,h),E(h,()=>a.get().name);let _=g(`div`,i);b(i,_),_.className=`bi-pipe-desc`;let v=c(``);b(_,v),E(v,()=>a.get().desc);let x=g(`div`,i);b(i,x),x.className=`bi-pipe-items`;let S=y(`rue:list:end`);b(x,S);let C=[];return T(()=>{let e=a.get().items||[];C=w(x,S,C,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`span`,e);t.className=`bi-pipe-item`;let n=c(``);return b(t,n),E(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(C)),ee(()=>{let e=o.get()<A.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=g(`div`,e);return t.className=`bi-pipe-arrow`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(i),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,i=n,a.set(t),o.set(n)})})}),n(()=>d(Ee));let W=C(`svg`,_e);m(_e,W),_e.insertBefore(W,ge),T(()=>{D(W,`viewBox`,String(`0 0 ${N} ${ae}`))}),o(W,`bi-chart-svg`),D(W,`role`,`img`),D(W,`aria-label`,`24小时延迟趋势图`);let G=C(`defs`,W);m(W,G);let K=C(`linearGradient`,G);m(G,K),D(K,`id`,`biLatMysql`),D(K,`x1`,`0`),D(K,`x2`,`0`),D(K,`y1`,`0`),D(K,`y2`,`1`);let De=C(`stop`,K);m(K,De),D(De,`offset`,`0%`),D(De,`stopColor`,`var(--b-mysql)`),D(De,`stopOpacity`,`0.25`);let Oe=C(`stop`,K);m(K,Oe),D(Oe,`offset`,`100%`),D(Oe,`stopColor`,`var(--b-mysql)`),D(Oe,`stopOpacity`,`0`);let q=C(`linearGradient`,G);m(G,q),D(q,`id`,`biLatApi`),D(q,`x1`,`0`),D(q,`x2`,`0`),D(q,`y1`,`0`),D(q,`y2`,`1`);let ke=C(`stop`,q);m(q,ke),D(ke,`offset`,`0%`),D(ke,`stopColor`,`var(--b-api)`),D(ke,`stopOpacity`,`0.2`);let Ae=C(`stop`,q);m(q,Ae),D(Ae,`offset`,`100%`),D(Ae,`stopColor`,`var(--b-api)`),D(Ae,`stopOpacity`,`0`);let je=_(`rue:slot:anchor`);m(W,je),T(()=>{let t=[0,.25,.5,.75,1].map(t=>{let n=P.t+I-t*I;return e(e=>{let r=C(`g`,e),i=C(`line`,r);m(r,i),T(()=>{D(i,`x1`,String(P.l))}),T(()=>{D(i,`y1`,String(n))}),T(()=>{D(i,`x2`,String(N-P.r))}),T(()=>{D(i,`y2`,String(n))}),o(i,`bi-grid-line`);let s=C(`text`,r);m(r,s),T(()=>{D(s,`x`,String(P.l+4))}),T(()=>{D(s,`y`,String(n-6))}),o(s,`bi-grid-label`);let c=f(s);return m(s,c),T(()=>{a(c,(L*t).toFixed(0))}),m(s,O(`ms`)),r})});v(()=>x(t,W,je))});let Me=C(`path`,W);m(W,Me),T(()=>{D(Me,`d`,String(`${z(`mysqlY`)} L ${R[R.length-1].x} ${P.t+I} L ${R[0].x} ${P.t+I} Z`))}),D(Me,`fill`,`url(#biLatMysql)`);let Ne=C(`path`,W);m(W,Ne),T(()=>{D(Ne,`d`,String(z(`apiY`)))}),o(Ne,`bi-line-path`),D(Ne,`stroke`,`var(--b-api)`);let Pe=C(`path`,W);m(W,Pe),T(()=>{D(Pe,`d`,String(z(`mysqlY`)))}),o(Pe,`bi-line-path`),D(Pe,`stroke`,`var(--b-mysql)`);let Fe=C(`path`,W);m(W,Fe),T(()=>{D(Fe,`d`,String(z(`pgY`)))}),o(Fe,`bi-line-path`),D(Fe,`stroke`,`var(--b-pg)`);let Ie=C(`path`,W);m(W,Ie),T(()=>{D(Ie,`d`,String(z(`redisY`)))}),o(Ie,`bi-line-path`),D(Ie,`stroke`,`var(--b-redis)`);let Le=_(`rue:slot:anchor`);m(W,Le),T(()=>{let t=R.map(t=>e(()=>{let e=l(),n=C(`g`,e);m(e,n);let r=C(`text`,n);m(n,r),T(()=>{D(r,`x`,String(t.x))}),T(()=>{D(r,`y`,`212`)}),D(r,`textAnchor`,`middle`),o(r,`bi-axis-label`);let i=f(r);m(r,i),T(()=>{a(i,t.label)});let s=C(`circle`,n);m(n,s),T(()=>{D(s,`cx`,String(t.x))}),T(()=>{D(s,`cy`,String(t.mysqlY))}),D(s,`r`,`3.5`),D(s,`fill`,`var(--b-mysql)`),D(s,`opacity`,`0.85`);let c=C(`circle`,n);m(n,c),T(()=>{D(c,`cx`,String(t.x))}),T(()=>{D(c,`cy`,String(t.pgY))}),D(c,`r`,`3.5`),D(c,`fill`,`var(--b-pg)`),D(c,`opacity`,`0.85`);let u=C(`circle`,n);m(n,u),T(()=>{D(u,`cx`,String(t.x))}),T(()=>{D(u,`cy`,String(t.redisY))}),D(u,`r`,`3.5`),D(u,`fill`,`var(--b-redis)`),D(u,`opacity`,`0.85`);let d=C(`circle`,n);return m(n,d),T(()=>{D(d,`cx`,String(t.x))}),T(()=>{D(d,`cy`,String(t.apiY))}),D(d,`r`,`3.5`),D(d,`fill`,`var(--b-api)`),D(d,`opacity`,`0.85`),e},!0));v(()=>x(t,W,Le))});let J=C(`g`,W);m(W,J),T(()=>{D(J,`transform`,String(`translate(${N-P.r-100}, ${P.t+4})`))});let Y=C(`circle`,J);m(J,Y),D(Y,`cx`,`0`),D(Y,`cy`,`0`),D(Y,`r`,`4`),D(Y,`fill`,`var(--b-mysql)`);let X=C(`text`,J);m(J,X),D(X,`x`,`10`),D(X,`y`,`4`),o(X,`bi-axis-label`),m(X,O(`MySQL`));let Z=C(`circle`,J);m(J,Z),D(Z,`cx`,`50`),D(Z,`cy`,`0`),D(Z,`r`,`4`),D(Z,`fill`,`var(--b-pg)`);let Q=C(`text`,J);m(J,Q),D(Q,`x`,`60`),D(Q,`y`,`4`),o(Q,`bi-axis-label`),m(Q,O(`PG`));let Re=C(`circle`,J);m(J,Re),D(Re,`cx`,`0`),D(Re,`cy`,`16`),D(Re,`r`,`4`),D(Re,`fill`,`var(--b-redis)`);let ze=C(`text`,J);m(J,ze),D(ze,`x`,`10`),D(ze,`y`,`20`),o(ze,`bi-axis-label`),m(ze,O(`Redis`));let Be=C(`circle`,J);m(J,Be),D(Be,`cx`,`50`),D(Be,`cy`,`16`),D(Be,`r`,`4`),D(Be,`fill`,`var(--b-api)`);let $=C(`text`,J);m(J,$),D($,`x`,`60`),D($,`y`,`20`),o($,`bi-axis-label`),m($,O(`API`));let Ve=[];T(()=>{Ve=w(ye,ve,Ve,re||[],(e,t)=>e.time,(e,n)=>{let a=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`div`,e);t.className=`bi-tp-group`;let n=g(`div`,t);b(t,n),n.className=`bi-tp-val`;let r=y(`rue:compiled-slot`);b(n,r),T(()=>{let e=a.get().value.toFixed(1);v(()=>x(e,n,r))}),b(n,c(`T`));let o=g(`div`,t);b(t,o),o.className=`bi-tp-bar-shell`;let s=g(`div`,o);b(o,s),s.className=`bi-tp-fill`;let l;T(()=>{let e={height:`${Math.max(8,a.get().value/oe*100)}%`};Object.is(l,e)||(l=e,i(s,e))});let u=g(`div`,t);b(t,u),u.className=`bi-tp-label`;let d=c(``);return b(u,d),E(d,()=>a.get().time),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>d(Ve));let He=[];T(()=>{He=w(xe,be,He,M||[],(e,t)=>e.rank,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`div`,e);t.className=`bi-query-row`;let n=g(`span`,t);b(t,n);let r;T(()=>{let e=`bi-query-rank ${i.get().rank<=3?`top3`:``}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let a=c(``);b(n,a),E(a,()=>i.get().rank);let o=g(`span`,t);b(t,o),o.className=`bi-query-sql`;let s=c(``);b(o,s),E(s,()=>i.get().sql);let l=g(`span`,t);b(t,l);let u;T(()=>{let e=`bi-query-src ${ue[i.get().source.toLowerCase().replace(` `,`-`)]||ue[i.get().source===`ClickHouse`?`ch`:i.get().source===`Redis`?`redis`:i.get().source===`MySQL`?`mysql`:i.get().source===`PostgreSQL`?`pg`:i.get().source===`GraphQL`?`gql`:`api`]}`,t=e==null?``:String(e);Object.is(u,t)||(u=t,l.className=t)});let d=c(``);b(l,d),E(d,()=>i.get().source);let f=g(`span`,t);b(t,f),f.className=`bi-query-freq`;let p=c(``);b(f,p),E(p,()=>i.get().freq);let m=g(`span`,t);b(t,m);let h;T(()=>{let e=`bi-query-ms ${B(i.get().avgMs)}`,t=e==null?``:String(e);Object.is(h,t)||(h=t,m.className=t)});let _=c(``);return b(m,_),E(_,()=>i.get().avgMs),b(m,c(`ms`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(He));let Ue=[];return T(()=>{Ue=w(Ce,Se,Ue,ie||[],(e,t)=>t,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=g(`div`,e);t.className=`bi-alert-row`;let n=g(`span`,t);b(t,n),n.className=`bi-alert-time`;let r=c(``);b(n,r),E(r,()=>i.get().time);let a=g(`span`,t);b(t,a);let o;T(()=>{let e=`bi-alert-level ${i.get().level}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=c(``);b(a,s),E(s,()=>i.get().level);let l=g(`span`,t);b(t,l),l.className=`bi-alert-msg`;let u=c(``);b(l,u),E(u,()=>i.get().message);let d=g(`span`,t);b(t,d);let f;T(()=>{let e=`bi-alert-resolved ${i.get().resolved?`yes`:`no`}`,t=e==null?``:String(e);Object.is(f,t)||(f=t,d.className=t)});let p=c(``);return b(d,p),E(p,()=>i.get().resolved?`已恢复`:`处理中`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(Ue)),m(p,O(` `)),p},!0),e=>h(()=>{}));export{V as default};