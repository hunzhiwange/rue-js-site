import{$ as e,Q as t,Vt as n,Y as r,Yt as i,Z as a,ct as o,et as s,ft as c,l,mt as u,ot as d,s as f,tt as p}from"./vapor-runtime-DHPuOjqh.js";import{n as m}from"./vapor-helpers-vapor-CJFAWine.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>l(v=>{let T=t(),A=e(`style`,T);r(T,A),i(()=>{u(A,te)});let j=e(`div`,T);r(T,j),o(j,`bi-scope bi-page`);let M=e(`section`,j);r(j,M),o(M,`bi-hero bi-card`);let N=e(`div`,M);r(M,N);let P=e(`p`,N);r(N,P),o(P,`bi-kicker`),r(P,s(`BI Platform Architecture / Realtime Monitor`));let se=e(`h1`,N);r(N,se),r(se,s(`多源异构数据接入架构，实时驱动业务决策`));let F=e(`p`,N);r(N,F),o(F,`bi-hero-desc`),r(F,s(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=e(`div`,N);r(N,I),o(I,`bi-tags`);let L=e(`span`,I);r(I,L),o(L,`bi-tag`);let ce=e(`span`,L);r(L,ce),o(ce,`dot`),r(L,s(`6 数据源在线`));let R=e(`span`,I);r(I,R),o(R,`bi-tag`),r(R,s(`CDC 实时同步`));let z=e(`span`,I);r(I,z),o(z,`bi-tag`),r(z,s(`ETL 批处理`));let le=e(`span`,I);r(I,le),o(le,`bi-tag`),r(le,s(`四层仓储存档`));let ue=e(`span`,I);r(I,ue),o(ue,`bi-tag`),r(ue,s(`GraphQL + REST 双协议`));let B=e(`div`,M);r(M,B),o(B,`bi-metrics-grid`);let de=a(`rue:list:start`),fe=a(`rue:list:end`);r(B,de),r(B,fe);let pe=new Map;i(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(s,c,m,h,g)=>{f(l(()=>{let c=t(),l=e(`div`,c);r(c,l),i(()=>{d(l,`key`,String(s.label))}),o(l,`bi-metric-card`);let m=e(`div`,l);r(l,m),o(m,`bi-metric-label`);let h=a(`rue:slot:anchor`);r(m,h),i(()=>{let e=s.label;n(()=>f(e,m,h))});let g=e(`div`,l);r(l,g),o(g,`bi-metric-value`);let _=p(g);r(g,_),i(()=>{u(_,s.value)});let v=e(`span`,l);r(l,v),i(()=>{o(v,String(`bi-metric-delta ${s.delta.startsWith(`+`)&&s.label===`异常告警`?`down`:`up`}`))});let y=a(`rue:slot:anchor`);return r(v,y),i(()=>{let e=s.delta;n(()=>f(e,v,y))}),c}),c,m)}})});let V=e(`section`,j);r(j,V),o(V,`bi-card`);let me=e(`div`,V);r(V,me),c(me,{padding:`28px 28px 0`});let H=e(`div`,me);r(me,H),o(H,`bi-section-title`);let he=e(`div`,H);r(H,he);let ge=e(`p`,he);r(he,ge),o(ge,`bi-eyebrow`),r(ge,s(`Data Sources`));let _e=e(`h2`,he);r(he,_e),r(_e,s(`数据源连接池`));let ve=e(`p`,H);r(H,ve),r(ve,s(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=e(`div`,V);r(V,ye),o(ye,`bi-sources-grid`);let be=a(`rue:list:start`),xe=a(`rue:list:end`);r(ye,be),r(ye,xe);let Se=new Map;i(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{f(l(()=>{let g=t(),_=e(`div`,g);r(g,_),i(()=>{d(_,`key`,String(h.id))}),o(_,`bi-src`);let v=e(`div`,_);r(_,v),o(v,`bi-src-head`);let y=e(`div`,v);r(v,y),i(()=>{o(y,String(`bi-src-icon ${ie[h.id]}`))});let b=a(`rue:slot:anchor`);r(y,b),i(()=>{let e=h.icon;n(()=>f(e,y,b))});let x=e(`div`,v);r(v,x),c(x,{flex:1});let S=e(`div`,x);r(x,S),c(S,{display:`flex`,alignItems:`center`,gap:8});let C=e(`span`,S);r(S,C),o(C,`bi-src-name`);let w=a(`rue:slot:anchor`);r(C,w),i(()=>{let e=h.name;n(()=>f(e,C,w))});let T=e(`span`,S);r(S,T),i(()=>{o(T,String(`bi-status-dot ${h.status}`))});let E=e(`span`,x);r(x,E),i(()=>{o(E,String(`bi-src-type ${ae[h.id]}`))});let D=a(`rue:slot:anchor`);r(E,D),i(()=>{let e=h.type;n(()=>f(e,E,D))});let O=e(`div`,_);r(_,O),o(O,`bi-src-stats`);let k=e(`div`,O);r(O,k);let ee=e(`div`,k);r(k,ee),o(ee,`bi-src-stat-label`),r(ee,s(`QPS`));let te=e(`div`,k);r(k,te),o(te,`bi-src-stat-value`);let oe=a(`rue:slot:anchor`);r(te,oe),i(()=>{let e=ne(h.qps);n(()=>f(e,te,oe))});let A=e(`div`,O);r(O,A);let j=e(`div`,A);r(A,j),o(j,`bi-src-stat-label`),r(j,s(`延迟`));let M=e(`div`,A);r(A,M),o(M,`bi-src-stat-value`);let N=a(`rue:slot:anchor`);r(M,N),i(()=>{let e=re(h.latency);n(()=>f(e,M,N))});let P=e(`div`,O);r(O,P);let se=e(`div`,P);r(P,se),o(se,`bi-src-stat-label`),r(se,s(`可用率`));let F=e(`div`,P);r(P,F),o(F,`bi-src-stat-value`);let I=a(`rue:slot:anchor`);r(F,I),i(()=>{let e=h.uptime;n(()=>f(e,F,I))});let L=e(`div`,_);r(_,L),o(L,`bi-src-conn-bar`);let ce=e(`div`,L);r(L,ce),i(()=>{o(ce,String(`bi-src-conn-fill ${ie[h.id]}`))}),i(()=>{c(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=e(`div`,_);r(_,R),c(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=e(`span`,R);r(R,z),o(z,`bi-src-stat-unit`);let le=a(`rue:slot:anchor`);r(z,le),i(()=>{let e=h.connections;n(()=>f(e,z,le))}),r(z,s(` / `));let ue=a(`rue:slot:anchor`);r(z,ue),i(()=>{let e=h.maxConn;n(()=>f(e,z,ue))}),r(z,s(` 连接`));let B=e(`div`,_);r(_,B),o(B,`bi-src-dbs`);let de=a(`rue:list:start`),fe=a(`rue:list:end`);r(B,de),r(B,fe);let pe=new Map;return i(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(n,a,s,c,m)=>{f(l(()=>{let a=t(),s=e(`span`,a);r(a,s),i(()=>{d(s,`key`,String(n))}),o(s,`bi-src-db`);let c=p(s);return r(s,c),i(()=>{u(c,n)}),a}),a,s)}})}),g}),g,_)}})});let U=e(`section`,j);r(j,U),o(U,`bi-card`);let Ce=e(`div`,U);r(U,Ce),c(Ce,{padding:`28px 28px 0`});let W=e(`div`,Ce);r(Ce,W),o(W,`bi-section-title`);let we=e(`div`,W);r(W,we);let Te=e(`p`,we);r(we,Te),o(Te,`bi-eyebrow`),r(Te,s(`Data Pipeline`));let Ee=e(`h2`,we);r(we,Ee),r(Ee,s(`数据处理管线`));let De=e(`p`,W);r(W,De),r(De,s(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=e(`div`,U);r(U,Oe),o(Oe,`bi-pipeline`);let ke=a(`rue:list:start`),Ae=a(`rue:list:end`);r(Oe,ke),r(Oe,Ae);let je=new Map;i(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(s,c,h,_,v)=>{f(l(()=>{let c=t(),h=e(`div`,c);r(c,h),i(()=>{d(h,`key`,String(s.id))}),o(h,`bi-pipe-stage`);let _=e(`div`,h);r(h,_),o(_,`bi-pipe-icon`);let y=a(`rue:slot:anchor`);r(_,y),i(()=>{let e=s.icon;n(()=>f(e,_,y))});let b=e(`div`,h);r(h,b),o(b,`bi-pipe-name`);let x=a(`rue:slot:anchor`);r(b,x),i(()=>{let e=s.name;n(()=>f(e,b,x))});let S=e(`div`,h);r(h,S),o(S,`bi-pipe-desc`);let C=a(`rue:slot:anchor`);r(S,C),i(()=>{let e=s.desc;n(()=>f(e,S,C))});let w=e(`div`,h);r(h,w),o(w,`bi-pipe-items`);let T=a(`rue:list:start`),E=a(`rue:list:end`);r(w,T),r(w,E);let D=new Map;i(()=>{D=m({items:s.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(n,a,s,c,m)=>{f(l(()=>{let a=t(),s=e(`span`,a);r(a,s),i(()=>{d(s,`key`,String(n))}),o(s,`bi-pipe-item`);let c=p(s);return r(s,c),i(()=>{u(c,n)}),a}),a,s)}})});let O=a(`rue:slot:anchor`);return r(h,O),i(()=>{let i=v<g.length-1?l(()=>{let n=t(),i=e(`div`,n);return r(n,i),o(i,`bi-pipe-arrow`),n}):``;n(()=>f(i,h,O))}),c}),c,h)}})});let G=e(`section`,j);r(j,G),o(G,`bi-chart-section`);let K=e(`article`,G);r(G,K),o(K,`bi-card bi-chart-card`);let Me=e(`div`,K);r(K,Me),o(Me,`bi-section-title`);let Ne=e(`div`,Me);r(Me,Ne);let Pe=e(`p`,Ne);r(Ne,Pe),o(Pe,`bi-eyebrow`),r(Pe,s(`Latency Monitor`));let Fe=e(`h2`,Ne);r(Ne,Fe),r(Fe,s(`24H 延迟趋势`));let Ie=e(`div`,K);r(K,Ie),o(Ie,`bi-chart-shell`);let q=e(`svg`,Ie);r(Ie,q),i(()=>{d(q,`viewBox`,String(`0 0 ${S} ${C}`))}),o(q,`bi-chart-svg`),d(q,`role`,`img`),d(q,`aria-label`,`24小时延迟趋势图`);let Le=e(`defs`,q);r(q,Le);let J=e(`linearGradient`,Le);r(Le,J),d(J,`id`,`biLatMysql`),d(J,`x1`,`0`),d(J,`x2`,`0`),d(J,`y1`,`0`),d(J,`y2`,`1`);let Re=e(`stop`,J);r(J,Re),d(Re,`offset`,`0%`),d(Re,`stopColor`,`var(--b-mysql)`),d(Re,`stopOpacity`,`0.25`);let ze=e(`stop`,J);r(J,ze),d(ze,`offset`,`100%`),d(ze,`stopColor`,`var(--b-mysql)`),d(ze,`stopOpacity`,`0`);let Y=e(`linearGradient`,Le);r(Le,Y),d(Y,`id`,`biLatApi`),d(Y,`x1`,`0`),d(Y,`x2`,`0`),d(Y,`y1`,`0`),d(Y,`y2`,`1`);let Be=e(`stop`,Y);r(Y,Be),d(Be,`offset`,`0%`),d(Be,`stopColor`,`var(--b-api)`),d(Be,`stopOpacity`,`0.2`);let Ve=e(`stop`,Y);r(Y,Ve),d(Ve,`offset`,`100%`),d(Ve,`stopColor`,`var(--b-api)`),d(Ve,`stopOpacity`,`0`);let He=a(`rue:list:start`),Ue=a(`rue:list:end`);r(q,He),r(q,Ue);let We=new Map;i(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(n,a,c,m,h)=>{f(l(()=>{let a=t(),c=w.t+E-n*E,l=e(`g`,a);r(a,l),i(()=>{d(l,`key`,String(n))});let f=e(`line`,l);r(l,f),i(()=>{d(f,`x1`,String(w.l))}),i(()=>{d(f,`y1`,String(c))}),i(()=>{d(f,`x2`,String(S-w.r))}),i(()=>{d(f,`y2`,String(c))}),o(f,`bi-grid-line`);let m=e(`text`,l);r(l,m),i(()=>{d(m,`x`,String(w.l+4))}),i(()=>{d(m,`y`,String(c-6))}),o(m,`bi-grid-label`);let h=p(m);return r(m,h),i(()=>{u(h,(D*n).toFixed(0))}),r(m,s(`ms`)),a}),a,c)}})});let Ge=e(`path`,q);r(q,Ge),i(()=>{d(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),d(Ge,`fill`,`url(#biLatMysql)`);let Ke=e(`path`,q);r(q,Ke),i(()=>{d(Ke,`d`,String(k(`apiY`)))}),o(Ke,`bi-line-path`),d(Ke,`stroke`,`var(--b-api)`);let qe=e(`path`,q);r(q,qe),i(()=>{d(qe,`d`,String(k(`mysqlY`)))}),o(qe,`bi-line-path`),d(qe,`stroke`,`var(--b-mysql)`);let Je=e(`path`,q);r(q,Je),i(()=>{d(Je,`d`,String(k(`pgY`)))}),o(Je,`bi-line-path`),d(Je,`stroke`,`var(--b-pg)`);let Ye=e(`path`,q);r(q,Ye),i(()=>{d(Ye,`d`,String(k(`redisY`)))}),o(Ye,`bi-line-path`),d(Ye,`stroke`,`var(--b-redis)`);let Xe=a(`rue:list:start`),Ze=a(`rue:list:end`);r(q,Xe),r(q,Ze);let Qe=new Map;i(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(n,a,s,c,m)=>{f(l(()=>{let a=t(),s=e(`g`,a);r(a,s),i(()=>{d(s,`key`,String(n.label))});let c=e(`text`,s);r(s,c),i(()=>{d(c,`x`,String(n.x))}),i(()=>{d(c,`y`,String(C-8))}),d(c,`textAnchor`,`middle`),o(c,`bi-axis-label`);let l=p(c);r(c,l),i(()=>{u(l,n.label)});let f=e(`circle`,s);r(s,f),i(()=>{d(f,`cx`,String(n.x))}),i(()=>{d(f,`cy`,String(n.mysqlY))}),d(f,`r`,`3.5`),d(f,`fill`,`var(--b-mysql)`),d(f,`opacity`,`0.85`);let m=e(`circle`,s);r(s,m),i(()=>{d(m,`cx`,String(n.x))}),i(()=>{d(m,`cy`,String(n.pgY))}),d(m,`r`,`3.5`),d(m,`fill`,`var(--b-pg)`),d(m,`opacity`,`0.85`);let h=e(`circle`,s);r(s,h),i(()=>{d(h,`cx`,String(n.x))}),i(()=>{d(h,`cy`,String(n.redisY))}),d(h,`r`,`3.5`),d(h,`fill`,`var(--b-redis)`),d(h,`opacity`,`0.85`);let g=e(`circle`,s);return r(s,g),i(()=>{d(g,`cx`,String(n.x))}),i(()=>{d(g,`cy`,String(n.apiY))}),d(g,`r`,`3.5`),d(g,`fill`,`var(--b-api)`),d(g,`opacity`,`0.85`),a}),a,s)}})});let X=e(`g`,q);r(q,X),i(()=>{d(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=e(`circle`,X);r(X,$e),d($e,`cx`,`0`),d($e,`cy`,`0`),d($e,`r`,`4`),d($e,`fill`,`var(--b-mysql)`);let et=e(`text`,X);r(X,et),d(et,`x`,`10`),d(et,`y`,`4`),o(et,`bi-axis-label`),r(et,s(`MySQL`));let tt=e(`circle`,X);r(X,tt),d(tt,`cx`,`50`),d(tt,`cy`,`0`),d(tt,`r`,`4`),d(tt,`fill`,`var(--b-pg)`);let nt=e(`text`,X);r(X,nt),d(nt,`x`,`60`),d(nt,`y`,`4`),o(nt,`bi-axis-label`),r(nt,s(`PG`));let rt=e(`circle`,X);r(X,rt),d(rt,`cx`,`0`),d(rt,`cy`,`16`),d(rt,`r`,`4`),d(rt,`fill`,`var(--b-redis)`);let it=e(`text`,X);r(X,it),d(it,`x`,`10`),d(it,`y`,`20`),o(it,`bi-axis-label`),r(it,s(`Redis`));let at=e(`circle`,X);r(X,at),d(at,`cx`,`50`),d(at,`cy`,`16`),d(at,`r`,`4`),d(at,`fill`,`var(--b-api)`);let ot=e(`text`,X);r(X,ot),d(ot,`x`,`60`),d(ot,`y`,`20`),o(ot,`bi-axis-label`),r(ot,s(`API`));let Z=e(`article`,G);r(G,Z),o(Z,`bi-card bi-tp-card`);let st=e(`div`,Z);r(Z,st),o(st,`bi-section-title`);let ct=e(`div`,st);r(st,ct);let lt=e(`p`,ct);r(ct,lt),o(lt,`bi-eyebrow`),r(lt,s(`Weekly Throughput`));let ut=e(`h2`,ct);r(ct,ut),r(ut,s(`周吞吐量`));let dt=e(`div`,Z);r(Z,dt),o(dt,`bi-tp-bars`);let ft=a(`rue:list:start`),pt=a(`rue:list:end`);r(dt,ft),r(dt,pt);let mt=new Map;i(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{f(l(()=>{let l=t(),h=e(`div`,l);r(l,h),i(()=>{d(h,`key`,String(m.time))}),o(h,`bi-tp-group`);let g=e(`div`,h);r(h,g),o(g,`bi-tp-val`);let _=p(g);r(g,_),i(()=>{u(_,m.value.toFixed(1))}),r(g,s(`T`));let v=e(`div`,h);r(h,v),o(v,`bi-tp-bar-shell`);let y=e(`div`,v);r(v,y),o(y,`bi-tp-fill`),i(()=>{c(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=e(`div`,h);r(h,b),o(b,`bi-tp-label`);let x=a(`rue:slot:anchor`);return r(b,x),i(()=>{let e=m.time;n(()=>f(e,b,x))}),l}),h,g)}})});let Q=e(`section`,j);r(j,Q),o(Q,`bi-bottom-grid`);let $=e(`article`,Q);r(Q,$),o($,`bi-card bi-queries-card`);let ht=e(`div`,$);r($,ht),o(ht,`bi-section-title`);let gt=e(`div`,ht);r(ht,gt);let _t=e(`p`,gt);r(gt,_t),o(_t,`bi-eyebrow`),r(_t,s(`Top Queries`));let vt=e(`h2`,gt);r(gt,vt),r(vt,s(`高频查询排行`));let yt=e(`div`,$);r($,yt);let bt=a(`rue:list:start`),xt=a(`rue:list:end`);r(yt,bt),r(yt,xt);let St=new Map;i(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(c,u,p,m,h)=>{f(l(()=>{let l=t(),u=e(`div`,l);r(l,u),i(()=>{d(u,`key`,String(c.rank))}),o(u,`bi-query-row`);let p=e(`span`,u);r(u,p),i(()=>{o(p,String(`bi-query-rank ${c.rank<=3?`top3`:``}`))});let m=a(`rue:slot:anchor`);r(p,m),i(()=>{let e=c.rank;n(()=>f(e,p,m))});let h=e(`span`,u);r(u,h),o(h,`bi-query-sql`);let g=a(`rue:slot:anchor`);r(h,g),i(()=>{let e=c.sql;n(()=>f(e,h,g))});let _=e(`span`,u);r(u,_),i(()=>{o(_,String(`bi-query-src ${ie[c.source.toLowerCase().replace(` `,`-`)]||ie[c.source===`ClickHouse`?`ch`:c.source===`Redis`?`redis`:c.source===`MySQL`?`mysql`:c.source===`PostgreSQL`?`pg`:c.source===`GraphQL`?`gql`:`api`]}`))});let v=a(`rue:slot:anchor`);r(_,v),i(()=>{let e=c.source;n(()=>f(e,_,v))});let y=e(`span`,u);r(u,y),o(y,`bi-query-freq`);let b=a(`rue:slot:anchor`);r(y,b),i(()=>{let e=c.freq;n(()=>f(e,y,b))});let x=e(`span`,u);r(u,x),i(()=>{o(x,String(`bi-query-ms ${oe(c.avgMs)}`))});let S=a(`rue:slot:anchor`);return r(x,S),i(()=>{let e=c.avgMs;n(()=>f(e,x,S))}),r(x,s(`ms`)),l}),u,p)}})});let Ct=e(`article`,Q);r(Q,Ct),o(Ct,`bi-card bi-alert-card`);let wt=e(`div`,Ct);r(Ct,wt),o(wt,`bi-section-title`);let Tt=e(`div`,wt);r(wt,Tt);let Et=e(`p`,Tt);r(Tt,Et),o(Et,`bi-eyebrow`),r(Et,s(`Alert Center`));let Dt=e(`h2`,Tt);r(Tt,Dt),r(Dt,s(`告警事件`));let Ot=e(`div`,Ct);r(Ct,Ot);let kt=a(`rue:list:start`),At=a(`rue:list:end`);r(Ot,kt),r(Ot,At);let jt=new Map;return i(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(s,c,m,h,g)=>{f(l(()=>{let c=t(),l=e(`div`,c);r(c,l),i(()=>{d(l,`key`,String(g))}),o(l,`bi-alert-row`);let m=e(`span`,l);r(l,m),o(m,`bi-alert-time`);let h=a(`rue:slot:anchor`);r(m,h),i(()=>{let e=s.time;n(()=>f(e,m,h))});let _=e(`span`,l);r(l,_),i(()=>{o(_,String(`bi-alert-level ${s.level}`))});let v=a(`rue:slot:anchor`);r(_,v),i(()=>{let e=s.level;n(()=>f(e,_,v))});let y=e(`span`,l);r(l,y),o(y,`bi-alert-msg`);let b=a(`rue:slot:anchor`);r(y,b),i(()=>{let e=s.message;n(()=>f(e,y,b))});let x=e(`span`,l);r(l,x),i(()=>{o(x,String(`bi-alert-resolved ${s.resolved?`yes`:`no`}`))});let S=p(x);return r(x,S),i(()=>{u(S,s.resolved?`已恢复`:`处理中`)}),c}),c,m)}})}),T});export{A as default};