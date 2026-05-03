/**
 * Durian Insight Pro - 瀹屽叏浣撲笟鍔￠€昏緫涓庢覆鏌撳紩鎿?
 */

const MOCK_DATA = {
    filters: {
        categories: ["鲜食榴莲", "冷冻果肉", "榴莲制品"],
        origins: ["全部产地", "马来西亚", "泰国", "越南", "海南"],
        brands: ["全部品牌", "猫山王", "金枕", "黑刺", "苏丹王", "托曼尼"],
    },
    kpis: [
        { title: "在售品牌", icon: "package", value: "128", unit: "", trend: "up", trendVal: "8.5%" },
        { title: "平均售价", icon: "trending-down", value: "89.6", unit: "元/500g", trend: "down", trendVal: "2.7%" },
        { title: "用户好评率", icon: "smile", value: "92.4%", unit: "", trend: "up", trendVal: "1.6%" },
        { title: "搜索热度", icon: "eye", value: "168,732", unit: "指数", trend: "up", trendVal: "12.3%" },
    ],
    competitors: [
        { name: "金枕", origin: "泰国", tag: "热销", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian_fruit.JPG?width=600", price: "69.3", rating: "90.1%", sales: "85.7" },
        { name: "猫山王", origin: "马来西亚", tag: "高端", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20Musang%20King.jpg?width=600", price: "128.6", rating: "94.6%", sales: "92.4" },
        { name: "黑刺", origin: "马来西亚", tag: "小众", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%202.jpg?width=600", price: "113.2", rating: "91.3%", sales: "68.9" },
        { name: "苏丹王", origin: "马来西亚", tag: "经典", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Durian%204.jpg?width=600", price: "96.4", rating: "91.0%", sales: "74.1" },
    ],
    table: [
        { name: "金枕", point: "香甜软糯，性价比高", priceR: "49 - 89", sales: 85, rating: "90.1%", stars: "★★★★★", channels: "电商、社区团购、线下商超" },
        { name: "猫山王", point: "浓郁奶香，口感细腻", priceR: "99 - 169", sales: 92, rating: "94.6%", stars: "★★★★★", channels: "电商、线下商超、高端水果店" },
        { name: "黑刺", point: "苦甜平衡，回味悠长", priceR: "79 - 139", sales: 68, rating: "91.3%", stars: "★★★★☆", channels: "电商、生鲜门店" },
        { name: "苏丹王", point: "经典品种，香味浓郁", priceR: "69 - 129", sales: 74, rating: "91.0%", stars: "★★★★☆", channels: "电商、线下商超、社区团购" },
    ],
    tags: [
        { text: "甜度", val: "28.6%", color: "#D4AF37" },
        { text: "果肉厚", val: "18.7%", color: "#2B3A2F" },
        { text: "核小", val: "16.3%", color: "#5C625E" },
        { text: "新鲜度", val: "12.4%", color: "#8C938E" },
    ],
    channels: [
        { name: "电商平台", val: "52.6%", trend: "up", trendVal: "6.2%", icon: "archive" },
        { name: "社区团购", val: "18.3%", trend: "up", trendVal: "1.8%", icon: "users" },
        { name: "线下商超", val: "16.7%", trend: "down", trendVal: "0.9%", icon: "briefcase" },
        { name: "生鲜门店", val: "12.4%", trend: "down", trendVal: "1.1%", icon: "truck" },
    ],
    regions: [
        { name: "广东", val: 100 },
        { name: "上海", val: 88 },
        { name: "北京", val: 76 },
        { name: "浙江", val: 72 },
        { name: "江苏", val: 65 },
    ],
    pricing: {
        anomalies: [
            { brand: "猫山王", platform: "某鲜生", price: "189.0", diff: "+47%", status: "溢价预警" },
            { brand: "金枕", platform: "某多多", price: "39.9", diff: "-42%", status: "破价预警" },
            { brand: "黑刺", platform: "某东", price: "125.0", diff: "+10%", status: "正常波动" },
        ],
    },
    insights: {
        sentiment: [
            { value: 72, name: "正向评价" },
            { value: 18, name: "中性评价" },
            { value: 10, name: "负向吐槽" },
        ],
        keywords: [
            { text: "出肉率高", size: 24, color: "#2B3A2F" },
            { text: "太贵了", size: 16, color: "#EF4444" },
            { text: "核很大", size: 18, color: "#8C938E" },
            { text: "奶香浓郁", size: 28, color: "#D4AF37" },
            { text: "死包", size: 14, color: "#EF4444" },
            { text: "包装精美", size: 14, color: "#5C625E" },
            { text: "冰淇淋口感", size: 20, color: "#2B3A2F" },
            { text: "复购", size: 22, color: "#D4AF37" },
        ],
    },
    reports: [
        { title: "2024 Q1 中国高端榴莲生鲜市场洞察白皮书", type: "季度报告", icon: "book-open", date: "2024-04-15", size: "4.2 MB", tags: ["市场规模", "消费降级"] },
        { title: "五一黄金周：泰国金枕 vs 马来西亚猫山王销量复盘", type: "专项洞察", icon: "book-open", date: "2024-05-10", size: "1.8 MB", tags: ["节假日", "销量对比"] },
        { title: "O2O 即时零售渠道榴莲履约效率与客诉分析报告", type: "渠道分析", icon: "book-open", date: "2024-03-22", size: "2.5 MB", tags: ["O2O", "履约", "售后"] },
    ],
};

const State = {
    currentRoute: "home",
    charts: [],
    filters: {
        category: "鲜食榴莲",
        origin: "全部产地",
        brand: "全部品牌",
    },
    syncText: "榴莲业务数据清洗与同步完成于今日 08:30 AM。",
    activeSidebarCard: null,
};

function getCurrentViewData() {
    const f = State.filters;
    const view = structuredClone(MOCK_DATA);

    if (f.category === "冷冻果肉") {
        const allow = new Set(["金枕", "苏丹王"]);
        view.competitors = view.competitors.filter((c) => allow.has(c.name));
        view.table = view.table.filter((r) => allow.has(r.name));
        view.kpis[1].value = "96.2";
        view.kpis[2].value = "90.8%";
    } else if (f.category === "榴莲制品") {
        const allow = new Set(["猫山王", "黑刺"]);
        view.competitors = view.competitors.filter((c) => allow.has(c.name));
        view.table = view.table.filter((r) => allow.has(r.name));
        view.kpis[1].value = "76.4";
        view.kpis[2].value = "93.6%";
    }

    if (f.brand !== "全部品牌") {
        view.competitors = view.competitors.filter((c) => c.name === f.brand);
        view.table = view.table.filter((r) => r.name === f.brand);
    }

    if (f.origin !== "全部产地") {
        view.competitors = view.competitors.filter((c) => c.origin === f.origin);
        const brandSet = new Set(view.competitors.map((c) => c.name));
        view.table = view.table.filter((r) => brandSet.has(r.name));
    }

    return view;
}

const Renderers = {
    sidebar: () => {
        const d = MOCK_DATA.filters;
        return `
            <div class="filter-group"><label class="filter-label"><i data-feather="sliders" class="icon-sm"></i> 鏍稿績绛涢€夊櫒</label></div>
            <div class="filter-group">
                <label class="filter-label">鍝佺被</label>
                <select id="filterCategory" class="filter-select">${d.categories.map(c => `<option ${State.filters.category === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
            </div>
            <div class="filter-group">
                <label class="filter-label">浜у湴</label>
                <select id="filterOrigin" class="filter-select">${d.origins.map(c => `<option ${State.filters.origin === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
            </div>
            <div class="filter-group">
                <label class="filter-label">鍝佺墝</label>
                <select id="filterBrand" class="filter-select">${d.brands.map(c => `<option ${State.filters.brand === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
            </div>
            <div class="filter-group"><button id="applyFiltersBtn" class="btn-primary">搴旂敤绛涢€</button></div>
            
            <div class="report-card">
                <h4>Data Sync</h4>
                <p id="syncStatusText">${State.syncText}</p>
                <button id="manualSyncBtn" class="btn-text" style="color:var(--c-durian-green)"><i data-feather="refresh-ccw" class="icon-sm"></i> 鎵嬪姩瑙﹀彂</button>
            </div>
            
            <div class="filter-group" style="margin-top: 24px;">
                <button class="sidebar-link-btn ${State.activeSidebarCard === 'products' ? 'is-active' : ''}" data-sidebar-card="products">
                    <i data-feather="folder-minus" class="icon-sm"></i> 鎴戠殑姒磋幉浜у搧
                </button>
            </div>
            <div class="filter-group">
                <button class="sidebar-link-btn ${State.activeSidebarCard === 'reports' ? 'is-active' : ''}" data-sidebar-card="reports">
                    <i data-feather="file-minus" class="icon-sm"></i> 绔炲搧鍒嗘瀽鎶ュ憡
                </button>
            </div>
            <div id="sidebarDetailPanel" class="sidebar-detail-panel ${State.activeSidebarCard ? 'is-open' : ''}">
                ${Renderers.sidebarDetail()}
            </div>
        `;
    },
    sidebarDetail: () => {
        if (State.activeSidebarCard === 'products') {
            return `
                <h5>鎴戠殑姒磋幉浜у搧姹</h5>
                <ul>
                    <li>鐚北鐜嬶紙A绾ф灉鑲夛級- 鍐峰喕搴撳瓨 1,280 浠</li>
                    <li>閲戞灂锛堝喎鍐绘灉鑲夛級- 鍐烽摼鍦ㄩ€?320 绠</li>
                    <li>榛戝埡锛堣瘯閿€锛? 鏈懆澶嶈喘鐜?31.6%</li>
                </ul>
            `;
        }
        if (State.activeSidebarCard === 'reports') {
            return `
                <h5>鏈€杩戝垎鏋愭姤鍛</h5>
                <ul>
                    <li>浜斾竴閿€閲忓鐩橈紙宸茬敓鎴愶級</li>
                    <li>O2O 灞ョ害鍒嗘瀽锛堟洿鏂颁簬浠婃棩锛</li>
                    <li>楂樼浠峰甫瀹㈢兢娲炲療锛堝緟鍙戝竷锛</li>
                </ul>
            `;
        }
        return `<div class="sidebar-detail-empty">鐐瑰嚮涓婃柟妯″潡鏌ョ湅璇︽儏</div>`;
    },

    home: () => {
        const d = getCurrentViewData();
        return `
            <div class="filter-result-tip fade-in">
                褰撳墠绛涢€夛細${State.filters.category} / ${State.filters.origin} / ${State.filters.brand}
            </div>
            <div class="hero-banner fade-in">
                <div class="hero-text">
                    <h1>鍏ㄩ摼璺垎鏋<strong>鏈夋満</strong>楂樼姒磋幉鐢熸€佺幆澧</h1>
                    <p>鑱氱劍椤剁骇鍝佺鐨勪环鏍兼尝鍔ㄣ€佸彛鎰熷績鏅哄垎甯冧笌渚涘簲閾惧饱绾﹁〃鐜般€傚熀浜庡叏缃?120+ 娓犻亾鐨勭湡瀹炲奖鍍忔暟鎹竻娲椾笌鐩戞祴銆</p>
                    <button class="btn-primary" style="width: auto; padding: 10px 24px;"><i data-feather="target" class="icon-sm"></i> 鍙戠幇甯傚満鏈轰細</button>
                </div>
                <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Durian%20Musang%20King.jpg?width=900" class="hero-img" alt="Durian Organic Insight" onerror="this.src='https://commons.wikimedia.org/wiki/Special:FilePath/Durian_fruit.JPG?width=900'">
            </div>
            <div class="grid-4 fade-in">
                ${d.kpis.map(kpi => `
                    <div class="card kpi-card">
                        <div class="kpi-top"><div class="kpi-icon"><i data-feather="${kpi.icon}"></i></div></div>
                        <div class="kpi-value-wrapper">
                            <div class="card-title">${kpi.title}</div>
                            <div class="kpi-value">${kpi.value} <span style="font-size:14px; color:var(--c-text-tertiary); font-weight:normal;">${kpi.unit}</span></div>
                            <div class="kpi-trend trend-${kpi.trend}">${kpi.trend === 'up' ? '↑' : '↓'} ${kpi.trendVal}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="card fade-in" style="margin-bottom: var(--s-3);">
                <div class="card-header"><div class="card-title"><i data-feather="grid" class="icon-sm"></i> 绔炲搧娣卞害鐭╅樀姒傝</div></div>
                <div class="grid-4" style="margin-bottom: 0;">
                    ${d.competitors.length ? d.competitors.map(c => `
                        <div class="product-card">
                            <div class="pc-header"><span class="pc-name">${c.name}</span><span class="pc-tag">${c.tag}</span></div>
                            <div style="font-size: 11px; color: var(--c-text-tertiary); text-align: left; margin-bottom: 8px;">${c.origin}</div>
                            <img src="${c.img}" class="pc-img">
                            <div class="pc-stats">
                                <div class="pc-stat-item"><span class="pc-stat-label">鍧囦环(鍏?</span><span class="pc-stat-val">${c.price}</span></div>
                                <div class="pc-stat-item"><span class="pc-stat-label">閿€閲忔寚鏁</span><span class="pc-stat-val">${c.sales}</span></div>
                            </div>
                        </div>
                    `).join('') : `<div class="empty-placeholder">褰撳墠绛涢€夋潯浠朵笅鏃犵珵鍝佹暟鎹?/div>`}
                </div>
            </div>
            <div class="grid-2 fade-in">
                <div class="card"><div class="card-header"><div class="card-title"><i data-feather="trending-up" class="icon-sm"></i> 鍝佺被浠锋牸璧板娍澶х洏</div></div><div id="homeChart1" style="height: 280px;"></div></div>
                <div class="card"><div class="card-header"><div class="card-title"><i data-feather="smile" class="icon-sm"></i> 鏍稿績鍝佺鑳藉姏蹇冩櫤</div></div><div id="homeChart2" style="height: 280px;"></div></div>
            </div>
            <div class="card fade-in" style="margin-bottom: var(--s-3);">
                <div class="card-header"><div class="card-title"><i data-feather="shield" class="icon-sm"></i> 椤剁骇绔炲搧鍙傛暟鍫″瀿瀵规瘮</div></div>
                <div style="overflow-x: auto;">
                    <table>
                        <thead><tr><th>鍝佺墝</th><th>涓绘墦鍗栫偣</th><th>鍖洪棿(鍏?500g)</th><th>閿€閲</th><th>濂借瘎鐜</th><th>娓犻亾瑕嗙洊</th></tr></thead>
                        <tbody>
                            ${d.table.length ? d.table.map(r => `
                                <tr>
                                    <td><div class="brand-cell"><i data-feather="shield" class="icon-sm"></i> <strong>${r.name}</strong></div></td>
                                    <td style="color:var(--c-text-secondary); font-size:12px;">${r.point}</td><td>${r.priceR}</td>
                                    <td>${r.sales} <div class="progress-bar"><div class="progress-fill" style="width: ${r.sales}%"></div></div></td>
                                    <td>${r.rating} <span class="stars">${r.stars}</span></td><td style="color: var(--c-text-secondary); font-size: 12px;">${r.channels}</td>
                                </tr>
                            `).join('') : `<tr><td colspan="6" style="text-align:center;color:var(--c-text-tertiary);">褰撳墠绛涢€夋潯浠朵笅鏃犲搧鐗屽姣旀暟鎹</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="grid-3 fade-in">
                <div class="card"><div class="card-header"><div class="card-title">娑堣垂鑰呭叧娉ㄧ偣 NLP鎻愬彇</div></div>
                    <div class="insight-tags">${d.tags.map(t => `<div class="tag-item" style="color: ${t.color}"><strong>${t.text}</strong> ${t.val}</div>`).join('')}</div>
                </div>
                <div class="card"><div class="card-header"><div class="card-title">娓犻亾鍗犳瘮鍒嗗竷</div></div>
                    <div class="channel-grid">${d.channels.map(c => `<div class="channel-card"><div class="channel-title"><i data-feather="${c.icon}" class="icon-sm"></i> ${c.name}</div><div class="channel-val">${c.val}</div></div>`).join('')}</div>
                </div>
                <div class="card"><div class="card-header"><div class="card-title">鍖哄煙闇€姹傜儹搴?鎺掕姒?/div></div>
                    <div class="rank-list">${d.regions.slice(0,4).map((r, i) => `<div class="rank-item"><div class="rank-left"><span class="rank-num">${i+1}</span> <span>${r.name}</span></div><span class="rank-val">${r.val}</span></div>`).join('')}</div>
                </div>
            </div>
        `;
    },

    market: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">澶х洏瀹忚鍒嗘瀽</h2>
            <p style="color: var(--c-text-secondary); font-size: 13px;">瀹忚甯傚満瑙勬ā鍙婁骇鍦拌繘鍙ｅ垎甯冭秼鍔块娴嬨€</p>
        </div>
        <div class="grid-2 page-grid page-grid-market fade-in">
            <div class="card"><div class="card-header"><div class="card-title">鍘嗗勾涓浗甯傚満姒磋幉杩涘彛瑙勬ā (涓囧惃)</div></div><div id="marketAreaChart" style="height: 320px;"></div></div>
            <div class="card"><div class="card-header"><div class="card-title">鏍稿績杩涘彛浜у湴浠介缁撴瀯婕斿彉</div></div><div id="marketBarChart" style="height: 320px;"></div></div>
        </div>
    `,

    compare: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">竞品深度对比矩阵</h2>
        </div>
        <div class="grid-2 page-grid page-grid-compare fade-in">
            <div class="card chart-card">
                <div class="card-header"><div class="card-title"><i data-feather="crosshair" class="icon-sm"></i> 价格-销量散点生态位</div></div>
                <div id="scatterChart" style="height: 320px;"></div>
            </div>
            <div class="card">
                <div class="card-header"><div class="card-title"><i data-feather="list" class="icon-sm"></i> 核心参数对标</div></div>
                <div class="table-scroll">
                    <table style="margin-top: 12px;">
                        <thead><tr><th>评测维度</th><th>猫山王 (Baseline)</th><th>金枕 (Competitor)</th></tr></thead>
                        <tbody>
                            <tr><td style="color: var(--c-text-tertiary)">出肉率</td><td><strong>32% - 35%</strong></td><td>35% - 40%</td></tr>
                            <tr><td style="color: var(--c-text-tertiary)">果核大小</td><td><strong>极小 (焦核)</strong></td><td>中等 - 偏大</td></tr>
                            <tr><td style="color: var(--c-text-tertiary)">口感特征</td><td><strong>苦甜交织, 层次丰富</strong></td><td>纯甜, 质地偏干</td></tr>
                            <tr><td style="color: var(--c-text-tertiary)">冷链要求</td><td><strong>极高 (液氮速冻)</strong></td><td>中等 (鲜果直发)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    pricing: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">缁堢浠锋牸瀹炴椂鐩戞祴</h2>
        </div>
        <div class="grid-2 page-grid page-grid-pricing fade-in">
            <div class="card"><div class="card-header"><div class="card-title"><i data-feather="bar-chart-2" class="icon-sm"></i> 鍚勫钩鍙板潎浠峰垎甯?(鍏?500g)</div></div><div id="pricingBarChart" style="height: 280px;"></div></div>
            <div class="card"><div class="card-header"><div class="card-title" style="color: #EF4444;"><i data-feather="alert-triangle" class="icon-sm"></i> 浠锋牸寮傚父棰勮</div></div>
                <div class="rank-list" style="margin-top: 12px;">
                    ${MOCK_DATA.pricing.anomalies.map(a => `
                        <div class="rank-item" style="padding: 12px 0; border-bottom: 1px solid var(--c-border);">
                            <div>
                                <div style="font-weight: 600; font-size: 13px;">${a.brand} <span style="font-weight:normal; color:var(--c-text-tertiary); font-size: 11px;">@${a.platform}</span></div>
                                <div style="font-size: 12px; color: ${a.diff.includes('-') ? '#EF4444' : '#10B981'};">${a.status} (${a.diff})</div>
                            </div>
                            <div style="font-weight: 600; color: var(--c-durian-green);">楼${a.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    insights: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">娑堣垂鑰呰涔変笌鎯呮劅娲炲療</h2>
        </div>
        <div class="grid-2 fade-in">
            <div class="card"><div class="card-header"><div class="card-title"><i data-feather="pie-chart" class="icon-sm"></i> 鍏ㄧ綉鍙ｇ鎯呮劅鍒嗗竷</div></div><div id="pieChart" style="height: 260px;"></div></div>
            <div class="card"><div class="card-header"><div class="card-title"><i data-feather="message-circle" class="icon-sm"></i> 楂橀璇勪环璇嶄簯 (NLP鎻愬彇)</div></div>
                <div class="word-cloud-wrapper">
                    ${MOCK_DATA.insights.keywords.map(k => `<span style="font-size: ${k.size}px; color: ${k.color}; font-weight: ${k.size > 20 ? '600' : '400'}; line-height: 1;">${k.text}</span>`).join('')}
                </div>
            </div>
        </div>
    `,

    channels: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">娴侀€氭笭閬撲环鍊奸摼鎷嗚В</h2>
        </div>
        <div class="grid-2 page-grid page-grid-channels fade-in">
            <div class="card"><div class="card-header"><div class="card-title">娓犻亾鍒╂鼎婕忔枟浼扮畻</div></div><div id="channelFunnelChart" style="height: 320px;"></div></div>
            <div class="card"><div class="card-header"><div class="card-title">鍚勭骇鍒嗛攢鑺傜偣鎴愭湰鏋勬垚姒傝</div></div>
                <div class="table-scroll">
                <table style="margin-top: 12px;">
                    <thead><tr><th>娴侀€氳妭鐐</th><th>骞冲潎鍔犱环鐜</th><th>鏍稿績鎹熻€椾富鍥</th><th>鍐烽摼瑕佹眰</th></tr></thead>
                    <tbody>
                        <tr><td><strong style="color:var(--c-durian-green)">浜у湴闆嗘暎</strong></td><td>15% - 20%</td><td style="color:var(--c-text-secondary)">鑷劧姘村垎娴佸け</td><td>甯歌棰勫喎</td></tr>
                        <tr><td><strong style="color:var(--c-durian-green)">璺ㄥ浗鐗╂祦/娴峰叧</strong></td><td>25% - 30%</td><td style="color:var(--c-text-secondary)">閫氬叧寤惰銆侀泦瑁呯娓╂帶澶辨晥</td><td>鍏ㄧ▼ -18掳C</td></tr>
                        <tr><td><strong style="color:var(--c-durian-green)">鍥藉唴涓€绾ф壒鍙?/strong></td><td>10% - 15%</td><td style="color:var(--c-text-secondary)">浜屾鍒嗘嫞鍘嬩激</td><td>鍐峰簱瀛樺偍</td></tr>
                        <tr><td><strong style="color:var(--c-durian-green)">缁堢闆跺敭 (O2O/鍟嗚秴)</strong></td><td>35% - 50%</td><td style="color:var(--c-text-secondary)">姝诲寘瀹㈣瘔閫€娆俱€佽揣鏋惰繃鏈</td><td>鎭掓俯灞曠ず鏌</td></tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    `,

    reports: () => `
        <div class="page-header fade-in" style="margin-bottom: 24px;">
            <h2 style="color: var(--c-durian-green); font-weight: 600;">琛屼笟娲炲療鎶ュ憡涓績</h2>
        </div>
        <div class="fade-in">
            ${MOCK_DATA.reports.map(r => `
                <div class="card fade-in" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div style="width: 48px; height: 48px; background: var(--c-bg); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--c-durian-gold);">
                            <i data-feather="${r.icon}"></i>
                        </div>
                        <div>
                            <div style="font-weight: 600; font-size: 15px; color: var(--c-durian-green); margin-bottom: 4px;">${r.title}</div>
                            <div style="display: flex; gap: 12px; font-size: 11px; color: var(--c-text-tertiary); align-items: center;">
                                <span><i data-feather="calendar" style="width:12px; height:12px;"></i> ${r.date}</span>
                                <span><i data-feather="hard-drive" style="width:12px; height:12px;"></i> ${r.size}</span>
                                <div style="display:flex; gap:6px;">${r.tags.map(t => `<span style="background: var(--c-bg); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--c-border); color:var(--c-durian-green)">${t}</span>`).join('')}</div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-primary" style="width: auto; padding: 8px 16px; background: transparent; border: 1px solid var(--c-durian-green); color: var(--c-durian-green); font-size:12px;">涓嬭浇娲炲療鐧界毊涔</button>
                </div>
            `).join('')}
        </div>
    `
};

const ChartManager = {
    initCharts() {
        State.charts.forEach((c) => c.dispose());
        State.charts = [];
        const colors = ["#D4AF37", "#2B3A2F", "#8C938E", "#5C625E"];

        if (State.currentRoute === "home") this.renderHomeCharts(colors);
        else if (State.currentRoute === "market") this.renderMarketCharts(colors);
        else if (State.currentRoute === "compare") this.renderCompareCharts(colors);
        else if (State.currentRoute === "pricing") this.renderPricingCharts(colors);
        else if (State.currentRoute === "insights") this.renderInsightsCharts(colors);
        else if (State.currentRoute === "channels") this.renderChannelsCharts(colors);
    },

    renderHomeCharts(colors) {
        const dom1 = document.getElementById("homeChart1");
        const dom2 = document.getElementById("homeChart2");

        if (dom1) {
            const chart1 = echarts.init(dom1);
            chart1.setOption({
                color: colors,
                tooltip: { trigger: "axis", backgroundColor: "#fff", borderColor: "#E8ECE9", textStyle: { color: "#2B3A2F" } },
                grid: { left: "8%", right: "5%", bottom: "15%", top: "10%" },
                xAxis: { type: "category", data: ["May", "Jun", "Jul", "Aug"], axisLine: { lineStyle: { color: "#E8ECE9" } } },
                yAxis: { type: "value", min: 0, splitLine: { lineStyle: { color: "#FDFCF9", type: "dashed" } } },
                series: [{ name: "品类均价", type: "line", smooth: true, data: [120, 132, 101, 134], areaStyle: { opacity: 0.1 } }],
            });
            State.charts.push(chart1);
        }

        if (dom2) {
            const chart2 = echarts.init(dom2);
            chart2.setOption({
                color: colors,
                tooltip: {},
                radar: {
                    indicator: [
                        { name: "价格", max: 100 },
                        { name: "口感", max: 100 },
                        { name: "复购率", max: 100 },
                        { name: "包装", max: 100 },
                    ],
                    radius: "60%",
                    axisName: { color: "#5C625E", fontSize: 11 },
                },
                series: [{ type: "radar", data: [{ value: [80, 95, 70, 90], name: "猫山王" }] }],
            });
            State.charts.push(chart2);
        }
    },

    renderMarketCharts() {
        const dom1 = document.getElementById("marketAreaChart");
        const dom2 = document.getElementById("marketBarChart");

        if (dom1) {
            const chart1 = echarts.init(dom1);
            chart1.setOption({
                color: ["#D4AF37"],
                tooltip: { trigger: "axis" },
                grid: { left: "8%", right: "5%", bottom: "10%", top: "10%" },
                xAxis: { type: "category", boundaryGap: false, data: ["2019", "2020", "2021", "2022", "2023", "2024E"] },
                yAxis: { type: "value", splitLine: { lineStyle: { color: "#E8ECE9", type: "dashed" } } },
                series: [{ data: [60, 82, 105, 120, 142, 165], type: "line", smooth: true, areaStyle: { opacity: 0.2 } }],
            });
            State.charts.push(chart1);
        }

        if (dom2) {
            const chart2 = echarts.init(dom2);
            chart2.setOption({
                color: ["#2B3A2F", "#D4AF37", "#8C938E"],
                tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
                legend: { data: ["泰国", "越南", "马来西亚"], bottom: 0 },
                grid: { left: "8%", right: "5%", bottom: "15%", top: "10%" },
                xAxis: { type: "category", data: ["2022", "2023", "2024E"] },
                yAxis: { type: "value", max: 100, axisLabel: { formatter: "{value}%" }, splitLine: { show: false } },
                series: [
                    { name: "泰国", type: "bar", stack: "total", data: [85, 75, 68] },
                    { name: "越南", type: "bar", stack: "total", data: [5, 15, 22] },
                    { name: "马来西亚", type: "bar", stack: "total", data: [10, 10, 10] },
                ],
            });
            State.charts.push(chart2);
        }
    },

    renderCompareCharts() {
        const dom = document.getElementById("scatterChart");
        if (!dom) return;

        const chart = echarts.init(dom);
        chart.setOption({
            color: ["#D4AF37", "#2B3A2F", "#8C938E", "#5C625E"],
            tooltip: { formatter: (p) => `${p.seriesName}<br/>均价: ¥${p.value[0]}<br/>销量指数: ${p.value[1]}` },
            legend: { data: ["猫山王", "金枕", "黑刺", "苏丹王"], bottom: 0, icon: "circle" },
            grid: { left: "10%", right: "5%", bottom: "15%", top: "10%" },
            xAxis: { name: "均价", type: "value", splitLine: { show: false } },
            yAxis: { name: "销量指数", type: "value", splitLine: { lineStyle: { color: "#E8ECE9", type: "dashed" } } },
            series: [
                { name: "猫山王", type: "scatter", symbolSize: 20, data: [[128, 92]] },
                { name: "金枕", type: "scatter", symbolSize: 30, data: [[69, 85]] },
                { name: "黑刺", type: "scatter", symbolSize: 15, data: [[113, 68]] },
                { name: "苏丹王", type: "scatter", symbolSize: 22, data: [[96, 74]] },
            ],
        });
        State.charts.push(chart);
    },

    renderPricingCharts() {
        const dom = document.getElementById("pricingBarChart");
        if (!dom) return;

        const chart = echarts.init(dom);
        chart.setOption({
            color: ["#2B3A2F"],
            tooltip: { trigger: "axis" },
            grid: { left: "10%", right: "5%", bottom: "10%", top: "10%" },
            xAxis: { type: "category", data: ["电商平台", "生鲜O2O", "线下商超", "社区团购"] },
            yAxis: { type: "value", min: 0, splitLine: { lineStyle: { color: "#E8ECE9", type: "dashed" } } },
            series: [{ name: "均价", type: "bar", barWidth: "30%", itemStyle: { borderRadius: [4, 4, 0, 0] }, data: [95, 110, 125, 85] }],
        });
        State.charts.push(chart);
    },

    renderInsightsCharts() {
        const dom = document.getElementById("pieChart");
        if (!dom) return;

        const chart = echarts.init(dom);
        chart.setOption({
            color: ["#D4AF37", "#8C938E", "#2B3A2F"],
            tooltip: { trigger: "item" },
            legend: { bottom: "0%", left: "center", icon: "circle" },
            series: [{
                name: "情感分布",
                type: "pie",
                radius: ["45%", "70%"],
                itemStyle: { borderRadius: 6, borderColor: "#fff", borderWidth: 2 },
                label: { show: false },
                data: MOCK_DATA.insights.sentiment,
            }],
        });
        State.charts.push(chart);
    },

    renderChannelsCharts() {
        const dom = document.getElementById("channelFunnelChart");
        if (!dom) return;

        const chart = echarts.init(dom);
        chart.setOption({
            color: ["#2B3A2F", "#5C625E", "#8C938E", "#D4AF37"],
            tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c}%" },
            series: [{
                name: "成本漏斗",
                type: "funnel",
                left: "10%",
                top: 20,
                bottom: 20,
                width: "80%",
                min: 0,
                max: 100,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 2,
                label: { show: true, position: "inside" },
                itemStyle: { borderColor: "#fff", borderWidth: 1 },
                data: [
                    { value: 100, name: "终端零售价" },
                    { value: 65, name: "扣除零售商毛利" },
                    { value: 40, name: "扣除物流仓储" },
                    { value: 25, name: "原产地出库价" },
                ],
            }],
        });
        State.charts.push(chart);
    },

    resize() {
        State.charts.forEach((c) => c.resize());
    },
};
const App = {
    init() {
        this.bindMobileShell();
        this.renderSidebar();
        this.handleRoute();
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('resize', () => {
            ChartManager.resize();
            if (window.innerWidth > 1024) this.closeMobilePanels();
        });
    },
    bindMobileShell() {
        const navToggle = document.getElementById('mobileNavToggle');
        const sidebarToggle = document.getElementById('mobileSidebarToggle');
        const overlay = document.getElementById('mobileOverlay');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                const isOpen = document.body.classList.contains('mobile-nav-open');
                document.body.classList.toggle('mobile-nav-open', !isOpen);
                document.body.classList.remove('mobile-sidebar-open');
            });
        }

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                const isOpen = document.body.classList.contains('mobile-sidebar-open');
                document.body.classList.toggle('mobile-sidebar-open', !isOpen);
                document.body.classList.remove('mobile-nav-open');
            });
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeMobilePanels());
        }

        document.querySelectorAll('.main-nav .nav-item').forEach((item) => {
            item.addEventListener('click', () => this.closeMobilePanels());
        });
    },
    closeMobilePanels() {
        document.body.classList.remove('mobile-nav-open');
        document.body.classList.remove('mobile-sidebar-open');
    },
    renderSidebar() {
        const sidebar = document.getElementById('sidebar-root');
        if (!sidebar) return;
        sidebar.innerHTML = Renderers.sidebar();
        feather.replace();
        this.bindSidebarEvents();
    },
    bindSidebarEvents() {
        const category = document.getElementById('filterCategory');
        const origin = document.getElementById('filterOrigin');
        const brand = document.getElementById('filterBrand');
        const applyBtn = document.getElementById('applyFiltersBtn');
        const syncBtn = document.getElementById('manualSyncBtn');
        const sidebar = document.getElementById('sidebar-root');

        if (category) category.addEventListener('change', (e) => {
            State.filters.category = e.target.value;
            this.applyFilters();
        });
        if (origin) origin.addEventListener('change', (e) => {
            State.filters.origin = e.target.value;
            this.applyFilters();
        });
        if (brand) brand.addEventListener('change', (e) => {
            State.filters.brand = e.target.value;
            this.applyFilters();
        });

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                this.applyFilters();
            });
        }

        if (syncBtn) {
            syncBtn.addEventListener('click', () => {
                syncBtn.disabled = true;
                syncBtn.innerHTML = '<i data-feather="loader" class="icon-sm"></i> 鍚屾涓?..';
                feather.replace();
                setTimeout(() => {
                    const now = new Date();
                    const hh = String(now.getHours()).padStart(2, '0');
                    const mm = String(now.getMinutes()).padStart(2, '0');
                    State.syncText = `榴莲业务数据清洗与同步完成于今日 ${hh}:${mm}。`;
                    syncBtn.disabled = false;
                    this.renderSidebar();
                }, 900);
            });
        }

        if (sidebar) {
            sidebar.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-sidebar-card]');
                if (!btn) return;
                const card = btn.dataset.sidebarCard;
                State.activeSidebarCard = State.activeSidebarCard === card ? null : card;
                this.renderSidebar();
            });
        }
    },
    applyFilters() {
        // 筛选器统一作用在首页，非首页时先跳转回首页再展示筛选结果
        if (State.currentRoute !== 'home') {
            window.location.hash = '#/home';
            return;
        }
        this.handleRoute();
    },
    handleRoute() {
        const hash = window.location.hash.slice(2) || 'home';
        State.currentRoute = hash;

        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.route === hash);
        });

        const root = document.getElementById('app-root');
        if (Renderers[hash] && hash !== 'sidebar') {
            root.innerHTML = Renderers[hash]();
        } else {
            root.innerHTML = Renderers.home(); 
        }

        feather.replace();
        this.closeMobilePanels();
        setTimeout(() => {
            ChartManager.initCharts();
            setTimeout(() => ChartManager.resize(), 260);
        }, 40);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());



