import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,l as u,rt as d,s as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{n as m}from"./vapor-helpers-vapor-HR6N5lMH.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>u(v=>{let T=o(),A=s(`style`,T);t(T,A),n(()=>{l(A,te)});let j=s(`div`,T);t(T,j),e(j,`bi-scope bi-page`);let M=s(`section`,j);t(j,M),e(M,`bi-hero bi-card`);let N=s(`div`,M);t(M,N);let P=s(`p`,N);t(N,P),e(P,`bi-kicker`),t(P,r(`BI Platform Architecture / Realtime Monitor`));let se=s(`h1`,N);t(N,se),t(se,r(`多源异构数据接入架构，实时驱动业务决策`));let F=s(`p`,N);t(N,F),e(F,`bi-hero-desc`),t(F,r(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=s(`div`,N);t(N,I),e(I,`bi-tags`);let L=s(`span`,I);t(I,L),e(L,`bi-tag`);let ce=s(`span`,L);t(L,ce),e(ce,`dot`),t(L,r(`6 数据源在线`));let R=s(`span`,I);t(I,R),e(R,`bi-tag`),t(R,r(`CDC 实时同步`));let z=s(`span`,I);t(I,z),e(z,`bi-tag`),t(z,r(`ETL 批处理`));let le=s(`span`,I);t(I,le),e(le,`bi-tag`),t(le,r(`四层仓储存档`));let ue=s(`span`,I);t(I,ue),e(ue,`bi-tag`),t(ue,r(`GraphQL + REST 双协议`));let B=s(`div`,M);t(M,B),e(B,`bi-metrics-grid`);let de=i(`rue:list:start`),fe=i(`rue:list:end`);t(B,de),t(B,fe);let pe=new Map;n(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(r,d,m,h,g)=>{f(u(()=>{let u=o(),d=s(`div`,u);t(u,d),n(()=>{c(d,`key`,String(r.label))}),e(d,`bi-metric-card`);let m=s(`div`,d);t(d,m),e(m,`bi-metric-label`);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=r.label;p(()=>f(e,m,h))});let g=s(`div`,d);t(d,g),e(g,`bi-metric-value`);let _=a(g);t(g,_),n(()=>{l(_,r.value)});let v=s(`span`,d);t(d,v),n(()=>{e(v,String(`bi-metric-delta ${r.delta.startsWith(`+`)&&r.label===`异常告警`?`down`:`up`}`))});let y=i(`rue:slot:anchor`);return t(v,y),n(()=>{let e=r.delta;p(()=>f(e,v,y))}),u}),d,m)}})});let V=s(`section`,j);t(j,V),e(V,`bi-card`);let me=s(`div`,V);t(V,me),d(me,{padding:`28px 28px 0`});let H=s(`div`,me);t(me,H),e(H,`bi-section-title`);let he=s(`div`,H);t(H,he);let ge=s(`p`,he);t(he,ge),e(ge,`bi-eyebrow`),t(ge,r(`Data Sources`));let _e=s(`h2`,he);t(he,_e),t(_e,r(`数据源连接池`));let ve=s(`p`,H);t(H,ve),t(ve,r(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=s(`div`,V);t(V,ye),e(ye,`bi-sources-grid`);let be=i(`rue:list:start`),xe=i(`rue:list:end`);t(ye,be),t(ye,xe);let Se=new Map;n(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{f(u(()=>{let g=o(),_=s(`div`,g);t(g,_),n(()=>{c(_,`key`,String(h.id))}),e(_,`bi-src`);let v=s(`div`,_);t(_,v),e(v,`bi-src-head`);let y=s(`div`,v);t(v,y),n(()=>{e(y,String(`bi-src-icon ${ie[h.id]}`))});let b=i(`rue:slot:anchor`);t(y,b),n(()=>{let e=h.icon;p(()=>f(e,y,b))});let x=s(`div`,v);t(v,x),d(x,{flex:1});let S=s(`div`,x);t(x,S),d(S,{display:`flex`,alignItems:`center`,gap:8});let C=s(`span`,S);t(S,C),e(C,`bi-src-name`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let e=h.name;p(()=>f(e,C,w))});let T=s(`span`,S);t(S,T),n(()=>{e(T,String(`bi-status-dot ${h.status}`))});let E=s(`span`,x);t(x,E),n(()=>{e(E,String(`bi-src-type ${ae[h.id]}`))});let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let e=h.type;p(()=>f(e,E,D))});let O=s(`div`,_);t(_,O),e(O,`bi-src-stats`);let k=s(`div`,O);t(O,k);let ee=s(`div`,k);t(k,ee),e(ee,`bi-src-stat-label`),t(ee,r(`QPS`));let te=s(`div`,k);t(k,te),e(te,`bi-src-stat-value`);let oe=i(`rue:slot:anchor`);t(te,oe),n(()=>{let e=ne(h.qps);p(()=>f(e,te,oe))});let A=s(`div`,O);t(O,A);let j=s(`div`,A);t(A,j),e(j,`bi-src-stat-label`),t(j,r(`延迟`));let M=s(`div`,A);t(A,M),e(M,`bi-src-stat-value`);let N=i(`rue:slot:anchor`);t(M,N),n(()=>{let e=re(h.latency);p(()=>f(e,M,N))});let P=s(`div`,O);t(O,P);let se=s(`div`,P);t(P,se),e(se,`bi-src-stat-label`),t(se,r(`可用率`));let F=s(`div`,P);t(P,F),e(F,`bi-src-stat-value`);let I=i(`rue:slot:anchor`);t(F,I),n(()=>{let e=h.uptime;p(()=>f(e,F,I))});let L=s(`div`,_);t(_,L),e(L,`bi-src-conn-bar`);let ce=s(`div`,L);t(L,ce),n(()=>{e(ce,String(`bi-src-conn-fill ${ie[h.id]}`))}),n(()=>{d(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=s(`div`,_);t(_,R),d(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=s(`span`,R);t(R,z),e(z,`bi-src-stat-unit`);let le=i(`rue:slot:anchor`);t(z,le),n(()=>{let e=h.connections;p(()=>f(e,z,le))}),t(z,r(` / `));let ue=i(`rue:slot:anchor`);t(z,ue),n(()=>{let e=h.maxConn;p(()=>f(e,z,ue))}),t(z,r(` 连接`));let B=s(`div`,_);t(_,B),e(B,`bi-src-dbs`);let de=i(`rue:list:start`),fe=i(`rue:list:end`);t(B,de),t(B,fe);let pe=new Map;return n(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(r,i,d,p,m)=>{f(u(()=>{let i=o(),u=s(`span`,i);t(i,u),n(()=>{c(u,`key`,String(r))}),e(u,`bi-src-db`);let d=a(u);return t(u,d),n(()=>{l(d,r)}),i}),i,d)}})}),g}),g,_)}})});let U=s(`section`,j);t(j,U),e(U,`bi-card`);let Ce=s(`div`,U);t(U,Ce),d(Ce,{padding:`28px 28px 0`});let W=s(`div`,Ce);t(Ce,W),e(W,`bi-section-title`);let we=s(`div`,W);t(W,we);let Te=s(`p`,we);t(we,Te),e(Te,`bi-eyebrow`),t(Te,r(`Data Pipeline`));let Ee=s(`h2`,we);t(we,Ee),t(Ee,r(`数据处理管线`));let De=s(`p`,W);t(W,De),t(De,r(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=s(`div`,U);t(U,Oe),e(Oe,`bi-pipeline`);let ke=i(`rue:list:start`),Ae=i(`rue:list:end`);t(Oe,ke),t(Oe,Ae);let je=new Map;n(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(r,d,h,_,v)=>{f(u(()=>{let d=o(),h=s(`div`,d);t(d,h),n(()=>{c(h,`key`,String(r.id))}),e(h,`bi-pipe-stage`);let _=s(`div`,h);t(h,_),e(_,`bi-pipe-icon`);let y=i(`rue:slot:anchor`);t(_,y),n(()=>{let e=r.icon;p(()=>f(e,_,y))});let b=s(`div`,h);t(h,b),e(b,`bi-pipe-name`);let x=i(`rue:slot:anchor`);t(b,x),n(()=>{let e=r.name;p(()=>f(e,b,x))});let S=s(`div`,h);t(h,S),e(S,`bi-pipe-desc`);let C=i(`rue:slot:anchor`);t(S,C),n(()=>{let e=r.desc;p(()=>f(e,S,C))});let w=s(`div`,h);t(h,w),e(w,`bi-pipe-items`);let T=i(`rue:list:start`),E=i(`rue:list:end`);t(w,T),t(w,E);let D=new Map;n(()=>{D=m({items:r.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(r,i,d,p,m)=>{f(u(()=>{let i=o(),u=s(`span`,i);t(i,u),n(()=>{c(u,`key`,String(r))}),e(u,`bi-pipe-item`);let d=a(u);return t(u,d),n(()=>{l(d,r)}),i}),i,d)}})});let O=i(`rue:slot:anchor`);return t(h,O),n(()=>{let n=v<g.length-1?u(()=>{let n=o(),r=s(`div`,n);return t(n,r),e(r,`bi-pipe-arrow`),n}):``;p(()=>f(n,h,O))}),d}),d,h)}})});let G=s(`section`,j);t(j,G),e(G,`bi-chart-section`);let K=s(`article`,G);t(G,K),e(K,`bi-card bi-chart-card`);let Me=s(`div`,K);t(K,Me),e(Me,`bi-section-title`);let Ne=s(`div`,Me);t(Me,Ne);let Pe=s(`p`,Ne);t(Ne,Pe),e(Pe,`bi-eyebrow`),t(Pe,r(`Latency Monitor`));let Fe=s(`h2`,Ne);t(Ne,Fe),t(Fe,r(`24H 延迟趋势`));let Ie=s(`div`,K);t(K,Ie),e(Ie,`bi-chart-shell`);let q=s(`svg`,Ie);t(Ie,q),n(()=>{c(q,`viewBox`,String(`0 0 ${S} ${C}`))}),e(q,`bi-chart-svg`),c(q,`role`,`img`),c(q,`aria-label`,`24小时延迟趋势图`);let Le=s(`defs`,q);t(q,Le);let J=s(`linearGradient`,Le);t(Le,J),c(J,`id`,`biLatMysql`),c(J,`x1`,`0`),c(J,`x2`,`0`),c(J,`y1`,`0`),c(J,`y2`,`1`);let Re=s(`stop`,J);t(J,Re),c(Re,`offset`,`0%`),c(Re,`stopColor`,`var(--b-mysql)`),c(Re,`stopOpacity`,`0.25`);let ze=s(`stop`,J);t(J,ze),c(ze,`offset`,`100%`),c(ze,`stopColor`,`var(--b-mysql)`),c(ze,`stopOpacity`,`0`);let Y=s(`linearGradient`,Le);t(Le,Y),c(Y,`id`,`biLatApi`),c(Y,`x1`,`0`),c(Y,`x2`,`0`),c(Y,`y1`,`0`),c(Y,`y2`,`1`);let Be=s(`stop`,Y);t(Y,Be),c(Be,`offset`,`0%`),c(Be,`stopColor`,`var(--b-api)`),c(Be,`stopOpacity`,`0.2`);let Ve=s(`stop`,Y);t(Y,Ve),c(Ve,`offset`,`100%`),c(Ve,`stopColor`,`var(--b-api)`),c(Ve,`stopOpacity`,`0`);let He=i(`rue:list:start`),Ue=i(`rue:list:end`);t(q,He),t(q,Ue);let We=new Map;n(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(i,d,p,m,h)=>{f(u(()=>{let u=o(),d=w.t+E-i*E,f=s(`g`,u);t(u,f),n(()=>{c(f,`key`,String(i))});let p=s(`line`,f);t(f,p),n(()=>{c(p,`x1`,String(w.l))}),n(()=>{c(p,`y1`,String(d))}),n(()=>{c(p,`x2`,String(S-w.r))}),n(()=>{c(p,`y2`,String(d))}),e(p,`bi-grid-line`);let m=s(`text`,f);t(f,m),n(()=>{c(m,`x`,String(w.l+4))}),n(()=>{c(m,`y`,String(d-6))}),e(m,`bi-grid-label`);let h=a(m);return t(m,h),n(()=>{l(h,(D*i).toFixed(0))}),t(m,r(`ms`)),u}),d,p)}})});let Ge=s(`path`,q);t(q,Ge),n(()=>{c(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),c(Ge,`fill`,`url(#biLatMysql)`);let Ke=s(`path`,q);t(q,Ke),n(()=>{c(Ke,`d`,String(k(`apiY`)))}),e(Ke,`bi-line-path`),c(Ke,`stroke`,`var(--b-api)`);let qe=s(`path`,q);t(q,qe),n(()=>{c(qe,`d`,String(k(`mysqlY`)))}),e(qe,`bi-line-path`),c(qe,`stroke`,`var(--b-mysql)`);let Je=s(`path`,q);t(q,Je),n(()=>{c(Je,`d`,String(k(`pgY`)))}),e(Je,`bi-line-path`),c(Je,`stroke`,`var(--b-pg)`);let Ye=s(`path`,q);t(q,Ye),n(()=>{c(Ye,`d`,String(k(`redisY`)))}),e(Ye,`bi-line-path`),c(Ye,`stroke`,`var(--b-redis)`);let Xe=i(`rue:list:start`),Ze=i(`rue:list:end`);t(q,Xe),t(q,Ze);let Qe=new Map;n(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(r,i,d,p,m)=>{f(u(()=>{let i=o(),u=s(`g`,i);t(i,u),n(()=>{c(u,`key`,String(r.label))});let d=s(`text`,u);t(u,d),n(()=>{c(d,`x`,String(r.x))}),n(()=>{c(d,`y`,String(C-8))}),c(d,`textAnchor`,`middle`),e(d,`bi-axis-label`);let f=a(d);t(d,f),n(()=>{l(f,r.label)});let p=s(`circle`,u);t(u,p),n(()=>{c(p,`cx`,String(r.x))}),n(()=>{c(p,`cy`,String(r.mysqlY))}),c(p,`r`,`3.5`),c(p,`fill`,`var(--b-mysql)`),c(p,`opacity`,`0.85`);let m=s(`circle`,u);t(u,m),n(()=>{c(m,`cx`,String(r.x))}),n(()=>{c(m,`cy`,String(r.pgY))}),c(m,`r`,`3.5`),c(m,`fill`,`var(--b-pg)`),c(m,`opacity`,`0.85`);let h=s(`circle`,u);t(u,h),n(()=>{c(h,`cx`,String(r.x))}),n(()=>{c(h,`cy`,String(r.redisY))}),c(h,`r`,`3.5`),c(h,`fill`,`var(--b-redis)`),c(h,`opacity`,`0.85`);let g=s(`circle`,u);return t(u,g),n(()=>{c(g,`cx`,String(r.x))}),n(()=>{c(g,`cy`,String(r.apiY))}),c(g,`r`,`3.5`),c(g,`fill`,`var(--b-api)`),c(g,`opacity`,`0.85`),i}),i,d)}})});let X=s(`g`,q);t(q,X),n(()=>{c(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=s(`circle`,X);t(X,$e),c($e,`cx`,`0`),c($e,`cy`,`0`),c($e,`r`,`4`),c($e,`fill`,`var(--b-mysql)`);let et=s(`text`,X);t(X,et),c(et,`x`,`10`),c(et,`y`,`4`),e(et,`bi-axis-label`),t(et,r(`MySQL`));let tt=s(`circle`,X);t(X,tt),c(tt,`cx`,`50`),c(tt,`cy`,`0`),c(tt,`r`,`4`),c(tt,`fill`,`var(--b-pg)`);let nt=s(`text`,X);t(X,nt),c(nt,`x`,`60`),c(nt,`y`,`4`),e(nt,`bi-axis-label`),t(nt,r(`PG`));let rt=s(`circle`,X);t(X,rt),c(rt,`cx`,`0`),c(rt,`cy`,`16`),c(rt,`r`,`4`),c(rt,`fill`,`var(--b-redis)`);let it=s(`text`,X);t(X,it),c(it,`x`,`10`),c(it,`y`,`20`),e(it,`bi-axis-label`),t(it,r(`Redis`));let at=s(`circle`,X);t(X,at),c(at,`cx`,`50`),c(at,`cy`,`16`),c(at,`r`,`4`),c(at,`fill`,`var(--b-api)`);let ot=s(`text`,X);t(X,ot),c(ot,`x`,`60`),c(ot,`y`,`20`),e(ot,`bi-axis-label`),t(ot,r(`API`));let Z=s(`article`,G);t(G,Z),e(Z,`bi-card bi-tp-card`);let st=s(`div`,Z);t(Z,st),e(st,`bi-section-title`);let ct=s(`div`,st);t(st,ct);let lt=s(`p`,ct);t(ct,lt),e(lt,`bi-eyebrow`),t(lt,r(`Weekly Throughput`));let ut=s(`h2`,ct);t(ct,ut),t(ut,r(`周吞吐量`));let dt=s(`div`,Z);t(Z,dt),e(dt,`bi-tp-bars`);let ft=i(`rue:list:start`),pt=i(`rue:list:end`);t(dt,ft),t(dt,pt);let mt=new Map;n(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{f(u(()=>{let u=o(),h=s(`div`,u);t(u,h),n(()=>{c(h,`key`,String(m.time))}),e(h,`bi-tp-group`);let g=s(`div`,h);t(h,g),e(g,`bi-tp-val`);let _=a(g);t(g,_),n(()=>{l(_,m.value.toFixed(1))}),t(g,r(`T`));let v=s(`div`,h);t(h,v),e(v,`bi-tp-bar-shell`);let y=s(`div`,v);t(v,y),e(y,`bi-tp-fill`),n(()=>{d(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=s(`div`,h);t(h,b),e(b,`bi-tp-label`);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let e=m.time;p(()=>f(e,b,x))}),u}),h,g)}})});let Q=s(`section`,j);t(j,Q),e(Q,`bi-bottom-grid`);let $=s(`article`,Q);t(Q,$),e($,`bi-card bi-queries-card`);let ht=s(`div`,$);t($,ht),e(ht,`bi-section-title`);let gt=s(`div`,ht);t(ht,gt);let _t=s(`p`,gt);t(gt,_t),e(_t,`bi-eyebrow`),t(_t,r(`Top Queries`));let vt=s(`h2`,gt);t(gt,vt),t(vt,r(`高频查询排行`));let yt=s(`div`,$);t($,yt);let bt=i(`rue:list:start`),xt=i(`rue:list:end`);t(yt,bt),t(yt,xt);let St=new Map;n(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(a,l,d,m,h)=>{f(u(()=>{let l=o(),u=s(`div`,l);t(l,u),n(()=>{c(u,`key`,String(a.rank))}),e(u,`bi-query-row`);let d=s(`span`,u);t(u,d),n(()=>{e(d,String(`bi-query-rank ${a.rank<=3?`top3`:``}`))});let m=i(`rue:slot:anchor`);t(d,m),n(()=>{let e=a.rank;p(()=>f(e,d,m))});let h=s(`span`,u);t(u,h),e(h,`bi-query-sql`);let g=i(`rue:slot:anchor`);t(h,g),n(()=>{let e=a.sql;p(()=>f(e,h,g))});let _=s(`span`,u);t(u,_),n(()=>{e(_,String(`bi-query-src ${ie[a.source.toLowerCase().replace(` `,`-`)]||ie[a.source===`ClickHouse`?`ch`:a.source===`Redis`?`redis`:a.source===`MySQL`?`mysql`:a.source===`PostgreSQL`?`pg`:a.source===`GraphQL`?`gql`:`api`]}`))});let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=a.source;p(()=>f(e,_,v))});let y=s(`span`,u);t(u,y),e(y,`bi-query-freq`);let b=i(`rue:slot:anchor`);t(y,b),n(()=>{let e=a.freq;p(()=>f(e,y,b))});let x=s(`span`,u);t(u,x),n(()=>{e(x,String(`bi-query-ms ${oe(a.avgMs)}`))});let S=i(`rue:slot:anchor`);return t(x,S),n(()=>{let e=a.avgMs;p(()=>f(e,x,S))}),t(x,r(`ms`)),l}),l,d)}})});let Ct=s(`article`,Q);t(Q,Ct),e(Ct,`bi-card bi-alert-card`);let wt=s(`div`,Ct);t(Ct,wt),e(wt,`bi-section-title`);let Tt=s(`div`,wt);t(wt,Tt);let Et=s(`p`,Tt);t(Tt,Et),e(Et,`bi-eyebrow`),t(Et,r(`Alert Center`));let Dt=s(`h2`,Tt);t(Tt,Dt),t(Dt,r(`告警事件`));let Ot=s(`div`,Ct);t(Ct,Ot);let kt=i(`rue:list:start`),At=i(`rue:list:end`);t(Ot,kt),t(Ot,At);let jt=new Map;return n(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(r,d,m,h,g)=>{f(u(()=>{let u=o(),d=s(`div`,u);t(u,d),n(()=>{c(d,`key`,String(g))}),e(d,`bi-alert-row`);let m=s(`span`,d);t(d,m),e(m,`bi-alert-time`);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=r.time;p(()=>f(e,m,h))});let _=s(`span`,d);t(d,_),n(()=>{e(_,String(`bi-alert-level ${r.level}`))});let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=r.level;p(()=>f(e,_,v))});let y=s(`span`,d);t(d,y),e(y,`bi-alert-msg`);let b=i(`rue:slot:anchor`);t(y,b),n(()=>{let e=r.message;p(()=>f(e,y,b))});let x=s(`span`,d);t(d,x),n(()=>{e(x,String(`bi-alert-resolved ${r.resolved?`yes`:`no`}`))});let S=a(x);return t(x,S),n(()=>{l(S,r.resolved?`已恢复`:`处理中`)}),u}),d,m)}})}),T});export{A as default};