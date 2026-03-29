/* CryptoCorr v4 - 10x10 Matris, 5 Renk Teması, Coin Swap */


// ═══ MULTI-LANGUAGE (i18n) ═══
const I18N = {
    en: {
        nav_wait: "Waiting for Connection",
        nav_alarm: "🔔 Live Alarm",
        nav_risk: "🛡️ Risk Test",
        nav_read: "i",
        nav_how: "How to Read?",
        metric_src: "Source",
        metric_mat: "Matrix",
        metric_per: "Period",
        metric_met: "Method",
        ldr_main: "Loading Market Data",
        ldr_sub: "Fetching top 200 coins from Binance...",
        sel_title: "Coin Selection",
        sel_desc: "Select coins for correlation analysis",
        mat_lbl: "Matrix:",
        per_lbl: "Period:",
        search_ph: "Search coin...",
        no_coin: "No coin selected yet",
        btn_analyze: "Start Analysis",
        btn_clear: "Clear",
        res_title: "Correlation Matrix",
        btn_csv: "📊 CSV",
        btn_png: "🖼️ PNG",
        btn_back: "◀ Back",
        btn_refresh: "↻ Refresh",
        side_corr: "Correlation Values",
        ai_title: "🤖 AI Opportunity Hunter",
        ai_desc: "Instantly catches correlation anomalies and Mean Reversion opportunities. Provides historical proof with <b>Time Machine (Backtest)</b>.",
        ai_locked: "Hunter & Time Machine Locked",
        ai_locked_sub: "Upgrade to Premium to see algorithmic Buy/Sell signals, Backtest results and anomalies.",
        btn_unlock: "Unlock for $29.99/mo",
        swap_main: "Swap Coin",
        swap_desc: "Select a coin, then click the coin in the matrix you want to replace",
        cancel: "Cancel",
        mat_reduce: "Select Coin to Remove",
        btn_apply: "Confirm & Apply",
        mat_inc: "Select Coin to Add",
        btn_analyzec: "Confirm & Analyze",
        btn_understand: "Got it, Happy Trading!",
        risk_title: "🛡️ Portfolio Risk Score",
        risk_desc: "Select coins in your wallet. We'll analyze your complete crash risk and offer Hedge advice.",
        risk_locked: "Risk Analysis Locked",
        risk_locked_sub: "Upgrade to Premium to get dynamic Hedge advice and protect yourself from bankruptcy.",
        btn_unlock_now: "Unlock Now",
        risk_search: "Search coin in your wallet (e.g. SOL)...",
        risk_no_coin: "No coins added to wallet yet.",
        risk_res_title: "AI Analysis Result",
        risk_res_desc: "Add at least 2 coins for analysis.",
        btn_close: "Close",
        prem_title: "Upgrade to Premium",
        prem_desc: "Unlock all professional features of the platform today for <b>$29.99</b>/month.",
        btn_pay: "💳 Pay Securely with Stripe",
        btn_cancel_prem: "Cancel for now",
        alarm_title: "🔔 Live Radar and Alarm System",
        alarm_desc: "No need to stare at the screen. Enter your strategy and get audio/visual notifications in the background when your target is hit.",
        alarm_locked: "Alarms Locked",
        alarm_locked_sub: "Enable HFT Push Alarms to catch opportunities even while you sleep.",
        alarm_sel: "Select Pair...",
        alarm_lt: "Drops below (<)",
        alarm_gt: "Rises above (>)",
        btn_set_alarm: "🔔 Set Alarm & Monitor in Background",
        alarm_watch: "Active Watchlist",
        alarm_scan: "Scanning",
        alarm_empty: "No alarms set yet. Add your first alarm above.",
        shock_banner: "Volume Shock detected — Highlighted with neon yellow on the matrix.",
        stat_loading: "Fetching Data...",
        stat_ready: "Ready",
        stat_analyzing: "Analyzing...",
        stat_live: "Data Live",
        toast_alarm: "Alarm Triggered",
        backtest_badge: "✅ Historical Success (Backtest)",
        backtest_badge_err: "📊 Backtest: Insufficient Signal",
        hedge_badge: "🛡️ Historical Protection (Backtest)",
        bt_engine: "🤖 Time Machine — Mean Reversion Z-Score Algo",
        bt_engine_h: "🤖 Time Machine — Hedge Backtest Engine",
        bt_period: "📅 Last {p}",
        bt_s_tot: "Total Signals",
        bt_s_win: "Winners",
        bt_s_loss: "Losers",
        bt_s_rate: "Win Rate",
        bt_s_ret: "Avg. Return / Trade",
        bt_s_cum: "Cumulative Return",
        bt_s_dd: "Max Drawdown (DD)",
        bt_s_tot_h: "Total Scenarios",
        bt_s_win_h: "Successful Hedges",
        bt_s_loss_h: "Failed Hedges",
        bt_s_rate_h: "Protection Rate",
        bt_s_ret_h: "Avg. Mitigation / Crash",
        bt_s_cum_h: "Total Protection",
        bt_ex_str: "🏆 Max Streak: <b>{v}</b> in a row",
        bt_ex_shp: "📊 Sharpe: <b>{v}</b> ({l})",
        bt_ex_bst: "⚡ Best: <b>+{v}%</b>",
        bt_ex_wrst: "💀 Worst: <b>{v}%</b>",
        opp_pair: "🟢 Pairs Trading Opportunity: {p}",
        opp_hedge: "🔴 Short Selling / Hedge Opportunity: {p}",
        opp_none_lbl: "Anamoly Scan Completed",
        opp_none: "No aggressive correlation breakage or arbitrage opportunity detected in the selected matrix right now. Try a broader period or different coins.",
        shp_exc: "Excellent", shp_good: "Good", shp_med: "Medium", shp_low: "Low",
        info_pearson: "What is Pearson Correlation?",
        info_pearson_desc: "This heatmap measures the similarity of crypto price movements between <b>-1.0</b> and <b>+1.0</b>.",
        info_1: "Strong Positive",
        info_1_desc: "Two coins fall and rise at the same time. If one rallies, the other flies too.",
        info_2: "Strong Negative",
        info_2_desc: "Opposite movement. When one rises, the other falls. Perfect for mutually hedging the market!",
        info_3: "Neutral / Independent",
        info_3_desc: "No logical or proportional connection between them. One's movement does not affect the other.",
        info_4: "Volume Shock (Neon Yellow Glow)",
        info_4_desc: "Coins glowing <b>Neon Yellow</b> on the matrix are those detected with abnormal trading volume increases. Avoid traps by looking at volume, not just price!",
        info_5: "Historical Success (Backtest) Badge",
        info_5_desc: "Green badges in the AI Opportunity Hunter section show the signal's backtested performance over the last 30 days.",
        risk_1: "94% Crash Risk!",
        risk_2: "Assets in your wallet move in identical directions. To balance your portfolio, immediately add risk-free baskets based on <strong style='color:var(--accent)'>Gold (PAXG)</strong> or <strong style='color:var(--accent)'>USDC</strong>.",
        scan_txt: "<b>{l}</b> coins scanned for 30-day history...",
        period_lbl: "30 Days", p7d: "7 Days", p1d: "1 Day", p6h: "6 Hours"
    },
    tr: {
        nav_wait: "Bağlantı Bekleniyor",
        nav_alarm: "🔔 Canlı Alarm",
        nav_risk: "🛡️ Risk Testi",
        nav_read: "i",
        nav_how: "Nasıl Okunur?",
        metric_src: "Kaynak",
        metric_mat: "Matris",
        metric_per: "Periyot",
        metric_met: "Metod",
        ldr_main: "Piyasa Verileri Yükleniyor",
        ldr_sub: "Binance'den en hacimli 200 coin çekiliyor...",
        sel_title: "Coin Seçimi",
        sel_desc: "Korelasyon analizi için coinlerinizi seçin",
        mat_lbl: "Matris:",
        per_lbl: "Periyot:",
        search_ph: "Coin ara...",
        no_coin: "Henüz coin seçilmedi",
        btn_analyze: "Analiz Başlat",
        btn_clear: "Temizle",
        res_title: "Korelasyon Matrisi",
        btn_csv: "📊 CSV",
        btn_png: "🖼️ PNG",
        btn_back: "◀ Geri",
        btn_refresh: "↻ Yenile",
        side_corr: "Korelasyon Değerleri",
        ai_title: "🤖 AI Fırsat Avcısı",
        ai_desc: "Korelasyon anomalilerini ve "${t("shp_med")}lamaya Dönüş" (Mean Reversion) fırsatlarını anında yakalar. <b>Zaman Makinesi (Backtest)</b> ile tarihsel kanıt sunar.",
        ai_locked: "Fırsat Avcısı & Zaman Makinesi Kilitli",
        ai_locked_sub: "Algoritmik Al/Sat sinyallerini, Backtest sonuçlarını ve anomalileri görmek için Premium'a geçin.",
        btn_unlock: "Aylık $29.99 - Kilidi Aç",
        swap_main: "Coin Değiştir",
        swap_desc: "Bir coin seçin, ardından matristeki değiştirmek istediğiniz coine tıklayın",
        cancel: "İptal",
        mat_reduce: "Çıkarılacak Olan Coini Seçin",
        btn_apply: "Onayla ve Uygula",
        mat_inc: "Eklenecek Coini Seçin",
        btn_analyzec: "Onayla ve Analiz Et",
        btn_understand: "Anladım, Bol Kazançlar!",
        risk_title: "🛡️ Portföy Risk Skoru",
        risk_desc: "Cüzdanınızdaki coinleri seçin. Tüm yatırımınızın aynı anda çökme riskini analiz edip koruma (Hedge) tavsiyesi sunalım.",
        risk_locked: "Risk Analizi Kilitli",
        risk_locked_sub: "İflastan korunmak ve dinamik Hedge tavsiyesi almak için Premium'a geçin.",
        btn_unlock_now: "Hemen Kilidi Aç",
        risk_search: "Cüzdanındaki coini ara (Örn: SOL)...",
        risk_no_coin: "Henüz cüzdana coin eklenmedi.",
        risk_res_title: "AI Analiz Sonucu",
        risk_res_desc: "Analiz için en az 2 coin ekleyin.",
        btn_close: "Kapat",
        prem_title: "Premium'a Geçin",
        prem_desc: "Aylık <b>$29.99</b> ile platformun tüm profesyonel yeteneklerinin kilidini bugün açın.",
        btn_pay: "💳 Stripe ile Güvenli Öde",
        btn_cancel_prem: "Şimdilik İptal",
        alarm_title: "🔔 Canlı Radar ve Alarm Sistemi",
        alarm_desc: "Sürekli ekrana bakmanıza gerek yok. Stratejinizi girin, hedef gerçekleştiğinde arka planda sesli ve görsel bildirim alın.",
        alarm_locked: "Alarmlar Kilitli",
        alarm_locked_sub: "Uyurken bile fırsatları yakalamak için HFT Push Alarmlarını açın.",
        alarm_sel: "Çift Seçin...",
        alarm_lt: "Altına düşerse (<)",
        alarm_gt: "Üstüne çıkarsa (>)",
        btn_set_alarm: "🔔 Alarm Kur ve Arka Planda İzle",
        alarm_watch: "Aktif İzleme Listesi (Watchlist)",
        alarm_scan: "Taranıyor",
        alarm_empty: "t('alarm_empty'). Yukarıdan ilk alarmınızı ekleyin.",
        shock_banner: "Hacim Şoku tespit edildi — Matris üzerinde neon sarı ile vurgulanıyor.",
        stat_loading: "Veriler Alınıyor...",
        stat_ready: "Hazır",
        stat_analyzing: "Analiz Ediliyor...",
        stat_live: "Veriler Güncel",
        toast_alarm: "Alarm Tetiklendi",
        backtest_badge: "✅ Tarihsel Başarı (Backtest)",
        backtest_badge_err: "📊 Backtest: Sinyal Yetersiz",
        hedge_badge: "🛡️ Tarihsel Koruma (Backtest)",
        bt_engine: "${t("bt_engine")}",
        bt_engine_h: "${t("bt_engine_h")}",
        bt_period: "📅 Son {p}",
        bt_s_tot: "${t("bt_s_tot")}",
        bt_s_win: "${t("bt_s_win")}",
        bt_s_loss: "${t("bt_s_loss")}",
        bt_s_rate: "${t("bt_s_rate")}",
        bt_s_ret: "${t("bt_s_ret")}",
        bt_s_cum: "${t("bt_s_cum")}",
        bt_s_dd: "${t("bt_s_dd")}",
        bt_s_tot_h: "${t("bt_s_tot_h")}",
        bt_s_win_h: "${t("bt_s_win_h")}",
        bt_s_loss_h: "${t("bt_s_loss_h")}",
        bt_s_rate_h: "${t("bt_s_rate_h")}",
        bt_s_ret_h: "${t("bt_s_ret_h")}",
        bt_s_cum_h: "${t("bt_s_cum_h")}",
        bt_ex_str: "🏆 Max Seri: <b>{v}</b> ardışık",
        bt_ex_shp: "📊 Sharpe: <b>{v}</b> ({l})",
        bt_ex_bst: "⚡ En ${t("shp_good")}: <b>+{v}%</b>",
        bt_ex_wrst: "💀 En Kötü: <b>{v}%</b>",
        opp_pair: "🟢 Çift İşlemi (Pairs Trading) Fırsatı: {p}",
        opp_hedge: "🔴 Açığa Satış / Hedge Fırsatı: {p}",
        opp_none_lbl: "${t("opp_none_lbl")}",
        opp_none: "${t("opp_none")}",
        shp_exc: "${t("shp_exc")}", shp_good: "${t("shp_good")}", shp_med: "${t("shp_med")}", shp_low: "${t("shp_low")}",
        info_pearson: "Pearson Korelasyonu Nedir?",
        info_pearson_desc: "Bu ısı haritası, kripto paraların fiyat hareketlerinin birbirlerine olan benzerliğini <b>-1.0</b> ile <b>+1.0</b> arasında ölçer.",
        info_1: "+1.0 (Güçlü Pozitif)",
        info_1_desc: "İki coin aynı anda düşüp aynı anda yükseliyor demektir. Biri rallideyken diğeri de uçar.",
        info_2: "-1.0 (Güçlü Negatif)",
        info_2_desc: "Zıt yönlü hareket. Biri yükselirken diğeri düşer. Piyasayı karşılıklı hedge etmek için mükemmeldir!",
        info_3: "0.0 (Nötr / Bağımsız)",
        info_3_desc: "Aralarında mantıklı veya orantılı hiçbir bağ yoktur. Birinin hareketi diğerini etkilemez.",
        info_4: "⚡ Hacim Şoku (Neon Sarı Parlama)",
        info_4_desc: "Matris üzerinde <b>Neon Sarı</b> parlayan coinler, son 24 saatte anormal işlem hacmi artışı (Kurumsal Para Girişi, Pump, veya Likidite Değişimi) tespit edilmiş coinlerdir. Bu coinlerin hacmi, gruptaki ortalamanın <b>2 katını</b> aşmıştır. Sadece fiyata değil hacme de bakarak tuzaklardan kaçının!",
        info_5: "🤖 Tarihsel Başarı (Backtest) Rozeti",
        info_5_desc: "AI Fırsat Avcısı bölümünde yeşil rozetler, sinyalin son 30 günlük geriye dönük testindeki performansı gösterir. Kaç kez kazandırdığı, ortalama getiri oranı ve başarı yüzdesi matematiksel olarak hesaplanır.",
        risk_1: "%94 Çöküş Riski!",
        risk_2: "Cüzdanınızdaki varlıklar neredeyse birebir aynı yönde hareket ediyor. Portföyünüzü dengelemek için hemen <strong style='color:var(--accent)'>Gold (PAXG)</strong> veya <strong style='color:var(--accent)'>USDC</strong> bazlı risksiz sepetler ekleyin.",
        scan_txt: "<b>{l}</b> coinin 30 günlük geçmişi taranıyor...",
        period_lbl: "30 Gün", p7d: "7 Gün", p1d: "1 Gün", p6h: "6 Saat"
    }
};

let userLang = localStorage.getItem("cryptoLang") || "en";

function updateUrlLangParam() {
    const params = new URLSearchParams(window.location.search);
    if(params.get('lang') !== userLang) {
        params.set('lang', userLang);
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
}

function t(key, vars = {}) {
    let text = I18N[userLang][key] || key;
    for(let k in vars) text = text.replace("{"+k+"}", vars[k]);
    return text;
}

function updateStaticUI() {
    const byId = (id, k, html=false) => { 
        const e=document.getElementById(id); 
        if(!e) return;
        if(html) e.innerHTML = t(k); else e.textContent = t(k); 
    };
    
    byId('initial-loader-text', 'ldr_main');
    byId('initial-loader-subtext', 'ldr_sub');
    byId('coin-search-input', 'search_ph');
    $('#coin-search-input')?.setAttribute('placeholder', t('search_ph'));
    byId('btn-analyze', 'btn_analyze');
    byId('btn-clear-selection', 'btn_clear');
    byId('btn-back', 'btn_back');
    byId('btn-refresh', 'btn_refresh');
    byId('volume-shock-info', 'shock_banner');
    byId('risk-search-input', 'risk_search');
    $('#risk-search-input')?.setAttribute('placeholder', t('risk_search'));
    byId('risk-result-desc', 'risk_res_desc');
    byId('swap-search-input', 'search_ph');
    $('#swap-search-input')?.setAttribute('placeholder', t('search_ph'));
    byId('increase-search-input', 'search_ph');
    $('#increase-search-input')?.setAttribute('placeholder', t('search_ph'));
    
    // Selectors
    document.querySelectorAll('.metric-label')[0].textContent = t('metric_src');
    document.querySelectorAll('.metric-label')[1].innerHTML = `${t('metric_mat')} <span class="metric-icon edit-icon" style="opacity:0.7;display:none">✎</span>`;
    document.querySelectorAll('.metric-label')[2].innerHTML = `${t('metric_per')} <span class="metric-icon edit-icon" style="opacity:0.7;display:none">✎</span>`;
    document.querySelectorAll('.metric-label')[3].textContent = t('metric_met');
    
    document.querySelector('.selector-title').textContent = t('sel_title');
    document.querySelector('.selector-desc').textContent = t('sel_desc');
    document.querySelectorAll('.toggle-label')[0].textContent = t('mat_lbl');
    document.querySelectorAll('.toggle-label')[1].textContent = t('per_lbl');
    document.querySelector('.chips-empty').textContent = t('no_coin');
    
    document.querySelector('.result-title').textContent = t('res_title');
    document.getElementById('btn-export-csv').innerHTML = `📊 <span style="color:var(--accent)">${t('btn_csv').replace('📊 ','')}</span>`;
    document.getElementById('btn-export-png').innerHTML = `🖼️ <span style="color:var(--accent)">${t('btn_png').replace('🖼️ ','')}</span>`;
    
    document.querySelector('.side-title').textContent = t('side_corr');
    document.querySelector('.swap-title').innerHTML = `<span style="font-size:1.1rem">🤖</span> ${t('ai_title')} <span class="premium-badge">PRO</span>`;
    document.querySelector('.swap-desc').innerHTML = t('ai_desc');
    
    const secSwapTitle = document.querySelectorAll('.swap-section .swap-title');
    if(secSwapTitle.length > 1) secSwapTitle[1].textContent = t('swap_main');
    const secSwapDesc = document.querySelectorAll('.swap-section .swap-desc');
    if(secSwapDesc.length > 1) secSwapDesc[1].textContent = t('swap_desc');
    
    // Opp overlay
    document.querySelector('#opp-lock-overlay h4').textContent = t('ai_locked');
    document.querySelector('#opp-lock-overlay p').textContent = t('ai_locked_sub');
    document.querySelector('#opp-lock-overlay button').textContent = t('btn_unlock');
    
    // Modals
    const mt = document.querySelectorAll('.swap-modal-title');
    mt.forEach(m => {
        if(m.textContent.includes('Hangi coin') || m.textContent.includes('Which coin')) m.textContent = "Hangi coin ile değiştirilsin? / Which coin to swap with?";
        if(m.textContent.includes('Periyot')) m.textContent = t('per_lbl').replace(':','') + " Edit";
        if(m.textContent.includes('Matris Boyutu')) m.textContent = t('mat_size_title') || "New Matrix Size";
        if(m.id === 'reduce-title') m.innerHTML = t('mat_reduce');
        if(m.id === 'increase-title') m.innerHTML = t('mat_inc');
    });
    
    document.querySelectorAll('[data-close]').forEach(b => {
        if(b.textContent.includes('İptal') || b.textContent.includes('Cancel')) b.textContent = t('cancel');
        if(b.textContent.includes('Kapat') || b.textContent.includes('Close')) b.textContent = t('btn_close');
    });
    
    byId('btn-confirm-reduce', 'btn_apply');
    byId('btn-confirm-increase', 'btn_analyzec');
    
    // Info Modal
    const infoT = document.querySelector('#modal-info .swap-modal-title');
    if(infoT) infoT.textContent = t('info_pearson');
    const infoD = document.querySelector('#modal-info .swap-desc');
    if(infoD) infoD.innerHTML = t('info_pearson_desc');
    const infoDivs = document.querySelectorAll('#modal-info .swap-modal-content > div > div');
    if(infoDivs.length >= 5) {
        infoDivs[0].querySelector('span').textContent = t('info_1');
        infoDivs[0].querySelector('p').textContent = t('info_1_desc');
        infoDivs[1].querySelector('span').textContent = t('info_2');
        infoDivs[1].querySelector('p').textContent = t('info_2_desc');
        infoDivs[2].querySelector('span').textContent = t('info_3');
        infoDivs[2].querySelector('p').textContent = t('info_3_desc');
        infoDivs[3].querySelector('span').innerHTML = t('info_4');
        infoDivs[3].querySelector('p').innerHTML = t('info_4_desc');
        infoDivs[4].querySelector('span').textContent = t('info_5');
        infoDivs[4].querySelector('p').textContent = t('info_5_desc');
    }
    const btnUnd = document.querySelector('#modal-info .btn-primary');
    if(btnUnd) btnUnd.textContent = t('btn_understand');
    
    // Risk Modal
    const riskT = document.querySelector('#modal-risk .swap-modal-title');
    if(riskT) riskT.innerHTML = `${t('risk_title')} <span class="premium-badge">PRO</span>`;
    const riskD = document.querySelector('#modal-risk .swap-desc');
    if(riskD) riskD.textContent = t('risk_desc');
    document.querySelector('#modal-risk .premium-blur-overlay h4').textContent = t('risk_locked');
    document.querySelector('#modal-risk .premium-blur-overlay p').textContent = t('risk_locked_sub');
    document.querySelector('#modal-risk .premium-blur-overlay button').textContent = t('btn_unlock_now');
    document.querySelector('#risk-portfolio-chips').innerHTML = `<span class="chips-empty">${t('risk_no_coin')}</span>`;
    byId('risk-result-desc', 'risk_res_desc');
    document.querySelector('#risk-result-box h4').textContent = t('risk_res_title');
    
    // Premium Modal
    const premT = document.querySelector('#modal-premium .swap-modal-title');
    if(premT) premT.textContent = t('prem_title');
    const premD = document.querySelector('#modal-premium .swap-desc');
    if(premD) premD.innerHTML = t('prem_desc');
    byId('btn-mock-pay', 'btn_pay', true);
    const mockP = document.getElementById('btn-mock-pay');
    if(mockP) mockP.innerHTML = `💳 ${t('btn_pay')}`;
    const premC = document.querySelector('#modal-premium .btn-ghost');
    if(premC) premC.textContent = t('btn_cancel_prem');
    
    // Alarm Modal
    const alrmT = document.querySelector('#modal-alarm .swap-modal-title');
    if(alrmT) alrmT.innerHTML = `${t('alarm_title')} <span class="premium-badge">PRO</span>`;
    const alrmD = document.querySelector('#modal-alarm .swap-desc');
    if(alrmD) alrmD.textContent = t('alarm_desc');
    const alrmLoc = document.querySelector('#alarm-lock-overlay h4');
    if(alrmLoc) alrmLoc.textContent = t('alarm_locked');
    const alrmLocP = document.querySelector('#alarm-lock-overlay p');
    if(alrmLocP) alrmLocP.textContent = t('alarm_locked_sub');
    const alrmLocB = document.querySelector('#alarm-lock-overlay button');
    if(alrmLocB) alrmLocB.textContent = t('btn_unlock_now');
    document.getElementById('alarm-pair-select').options[0].textContent = t('alarm_sel');
    document.getElementById('alarm-condition-select').options[0].textContent = t('alarm_lt');
    document.getElementById('alarm-condition-select').options[1].textContent = t('alarm_gt');
    byId('btn-add-alarm', 'btn_set_alarm');
    const wlH4 = document.querySelector('#modal-alarm h4:not(#alarm-lock-overlay h4)');
    if(wlH4) wlH4.textContent = t('alarm_watch');
    document.getElementById('alarm-live-indicator').innerHTML = `<span class="live-dot"></span>${t('alarm_scan')}`;
    document.querySelector('#alarm-watchlist div').textContent = t('alarm_empty');
    
    // Navbar Fix
    byId('btn-alarm', 'nav_alarm', true);
    byId('btn-risk', 'nav_risk', true);
    byId('btn-info', 'nav_how', true);
    const bInfo = document.getElementById('btn-info');
    if (bInfo) bInfo.innerHTML = `<span style="border:1.5px solid currentColor; border-radius:50%; width:16px; height:16px; display:inline-flex; align-items:center; justify-content:center; font-size:10px; font-weight:bold">i</span> ${t('nav_how')}`;
    
    const lnText = document.getElementById('lang-text');
    if(lnText) lnText.textContent = userLang === "en" ? "EN" : "TR";
    
    document.title = "CryptoCorr | Correlation Matrix";
}

function updateLang() {
    userLang = userLang === "en" ? "tr" : "en";
    localStorage.setItem("cryptoLang", userLang);
    updateUrlLangParam();
    updateStaticUI();
    
    // Redraw and re-translate dynamic elements
    if (STATE.selectedCoins.length > 0) {
        updateSelectionUI();
        if(STATE.lastPriceData && !DOM.resultsSection.classList.contains('hidden')) {
            const matrix = buildMatrix(STATE.lastPriceData);
            renderStats(matrix);
            CONFIG.periodMap = {
                '6h':  { interval: '5m',  limit: 72,  label: t('p6h') },
                '1d':  { interval: '15m', limit: 96,  label: t('p1d') },
                '7d':  { interval: '1h',  limit: 168, label: t('p7d') },
                '30d': { interval: '1d',  limit: 30,  label: t('period_lbl') }
            };
            DOM.displayPeriod.textContent = CONFIG.periodMap[STATE.period].label;
            DOM.resultCoinsLabel.textContent = STATE.selectedCoins.join(' • ') + ` — ${t('bt_period',{p:CONFIG.periodMap[STATE.period].label}).replace('📅 ','')}`;
        }
    }
}

// Ensure the helper is available globally
function $(sel) { return document.querySelector(sel); }

document.addEventListener("DOMContentLoaded", () => {
    // If URL has lang, use it
    const params = new URLSearchParams(window.location.search);
    if(params.has('lang') && ['en','tr'].includes(params.get('lang'))) {
        userLang = params.get('lang');
        localStorage.setItem("cryptoLang", userLang);
    }
    
    document.body.addEventListener("click", e => {
        if(e.target.closest("#btn-lang")) {
            updateLang();
        }
    });

    // Update periods
    CONFIG.periodMap = {
        '6h':  { interval: '5m',  limit: 72,  label: t('p6h') },
        '1d':  { interval: '15m', limit: 96,  label: t('p1d') },
        '7d':  { interval: '1h',  limit: 168, label: t('p7d') },
        '30d': { interval: '1d',  limit: 30,  label: t('period_lbl') }
    };
    
    // Run translation once
    setTimeout(updateStaticUI, 100);
});


const CONFIG = {
    baseUrl: 'https://api.binance.com/api/v3',
    topCoinLimit: 200,
    periodMap: {
        '6h':  { interval: '5m',  limit: 72,  label: '6 Saat' },
        '1d':  { interval: '15m', limit: 96,  label: '1 Gün' },
        '7d':  { interval: '1h',  limit: 168, label: '7 Gün' },
        '30d': { interval: '1d',  limit: 30,  label: '30 Gün' }
    },
    // 5 farklı renk teması
    themes: {
        ocean: {
            name: 'Okyanus',
            scale: [[0,'#FF1744'],[0.1,'#E91E63'],[0.2,'#9C27B0'],[0.3,'#5C2D91'],[0.4,'#2D1B4E'],[0.5,'#1E2329'],[0.6,'#1B3A4B'],[0.7,'#1565C0'],[0.8,'#2196F3'],[0.9,'#00BCD4'],[1,'#00E676']],
            gradient: 'linear-gradient(90deg,#FF1744,#9C27B0,#1E2329,#2196F3,#00E676)'
        },
        fire: {
            name: 'Ateş',
            scale: [[0,'#0D47A1'],[0.15,'#1565C0'],[0.3,'#263238'],[0.5,'#1E2329'],[0.65,'#BF360C'],[0.8,'#FF6D00'],[0.9,'#FFAB00'],[1,'#FFD600']],
            gradient: 'linear-gradient(90deg,#0D47A1,#1E2329,#FF6D00,#FFD600)'
        },
        neon: {
            name: 'Neon',
            scale: [[0,'#E040FB'],[0.2,'#7B1FA2'],[0.4,'#1A1A2E'],[0.5,'#1E2329'],[0.6,'#0D3B66'],[0.8,'#00B8D4'],[1,'#00FFFF']],
            gradient: 'linear-gradient(90deg,#E040FB,#1A1A2E,#00B8D4,#00FFFF)'
        },
        classic: {
            name: 'Klasik',
            scale: [[0,'#D32F2F'],[0.2,'#E57373'],[0.4,'#CFD8DC'],[0.5,'#ECEFF1'],[0.6,'#CFD8DC'],[0.8,'#64B5F6'],[1,'#1565C0']],
            gradient: 'linear-gradient(90deg,#D32F2F,#ECEFF1,#1565C0)'
        },
        sunset: {
            name: 'Gün Batımı',
            scale: [[0,'#4A148C'],[0.15,'#6A1B9A'],[0.3,'#311B4E'],[0.5,'#1E2329'],[0.65,'#E65100'],[0.8,'#FF6D00'],[0.9,'#FF9800'],[1,'#FFC107']],
            gradient: 'linear-gradient(90deg,#4A148C,#1E2329,#FF6D00,#FFC107)'
        }
    }
};

const STATE = {
    matrixSize: 5,
    period: '30d',
    theme: 'ocean',
    selectedCoins: [],
    allCoins: [],
    isAnalyzing: false,
    lastPriceData: null,
    pendingSwapCoin: null  // Swap için bekleyen yeni coin
};

const DOM = {
    displayMatrix: document.getElementById('display-matrix'),
    displayPeriod: document.getElementById('display-period'),
    navStatus: document.getElementById('nav-status'),
    navTime: document.getElementById('nav-time'),
    initialLoader: document.getElementById('initial-loader'),
    initialLoaderText: document.getElementById('initial-loader-text'),
    initialLoaderSubtext: document.getElementById('initial-loader-subtext'),
    initialLoaderProgress: document.getElementById('initial-loader-progress'),
    coinSelector: document.getElementById('coin-selector'),
    selectionCounter: document.getElementById('selection-counter'),
    coinSearchInput: document.getElementById('coin-search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    selectedChips: document.getElementById('selected-chips'),
    coinListContainer: document.getElementById('coin-list-container'),
    btnAnalyze: document.getElementById('btn-analyze'),
    btnClearSelection: document.getElementById('btn-clear-selection'),
    analysisLoader: document.getElementById('analysis-loader'),
    loaderText: document.getElementById('loader-text'),
    loaderSubtext: document.getElementById('loader-subtext'),
    loaderProgress: document.getElementById('loader-progress'),
    resultsSection: document.getElementById('results-section'),
    heatmapChart: document.getElementById('heatmap-chart'),
    resultCoinsLabel: document.getElementById('result-coins-label'),
    statsGrid: document.getElementById('stats-grid'),
    scaleGradient: document.getElementById('scale-gradient'),
    btnRefresh: document.getElementById('btn-refresh'),
    btnBack: document.getElementById('btn-back'),
    swapGrid: document.getElementById('swap-grid'),
    swapSearchInput: document.getElementById('swap-search-input'),
    swapModal: document.getElementById('swap-modal'),
    swapModalTitle: document.getElementById('swap-modal-title'),
    swapModalOptions: document.getElementById('swap-modal-options'),
    swapModalClose: document.getElementById('swap-modal-close'),
    // Yeniler
    cardMatrix: document.getElementById('card-matrix'),
    cardPeriod: document.getElementById('card-period'),
    modalPeriod: document.getElementById('modal-period'),
    modalMatrixSize: document.getElementById('modal-matrix-size'),
    modalMatrixReduce: document.getElementById('modal-matrix-reduce'),
    modalMatrixIncrease: document.getElementById('modal-matrix-increase'),
    reduceTitle: document.getElementById('reduce-title'),
    reduceOptions: document.getElementById('reduce-options'),
    btnConfirmReduce: document.getElementById('btn-confirm-reduce'),
    increaseTitle: document.getElementById('increase-title'),
    increaseSearch: document.getElementById('increase-search-input'),
    increaseGrid: document.getElementById('increase-grid'),
    btnConfirmIncrease: document.getElementById('btn-confirm-increase'),
    // Export Butonları
    btnExportCSV: document.getElementById('btn-export-csv'),
    btnExportPNG: document.getElementById('btn-export-png')
};

// Gecici Modal State
const MODAL_STATE = {
    tempTargetSize: 0,
    tempReduceSelection: [],
    tempIncreaseSelection: []
};

// ═══ LOCAL STORAGES & URL STATE ═══
const LS_KEY = 'cryptoCorrState';

function updateURLParameters() {
    if(STATE.selectedCoins.length > 0) {
        const params = new URLSearchParams();
        params.set('coins', STATE.selectedCoins.join(','));
        params.set('period', STATE.period);
        params.set('theme', STATE.theme);
        params.set('matrix', STATE.matrixSize);
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
}

function loadStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    let loaded = false;
    if(params.has('coins')) {
        const cArr = params.get('coins').split(',').map(s=>s.trim().toUpperCase()).filter(s=>s.length>0);
        if(cArr.length > 0) { STATE.selectedCoins = cArr; loaded = true; }
    }
    if(params.has('period')) { STATE.period = params.get('period'); loaded = true; }
    if(params.has('theme')) { STATE.theme = params.get('theme'); loaded = true; }
    if(params.has('matrix')) { STATE.matrixSize = parseInt(params.get('matrix')); loaded = true; }
    
    if(loaded && !params.has('matrix')) STATE.matrixSize = Math.max(5, STATE.selectedCoins.length);
    return loaded;
}

function saveStateToLocal() {
    localStorage.setItem(LS_KEY, JSON.stringify({
        selectedCoins: STATE.selectedCoins,
        matrixSize: STATE.matrixSize,
        period: STATE.period,
        theme: STATE.theme
    }));
    updateURLParameters();
}

function loadStateFromLocal() {
    try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY));
        if(saved && saved.matrixSize) {
            STATE.selectedCoins = saved.selectedCoins || [];
            STATE.matrixSize = saved.matrixSize || 5;
            STATE.period = saved.period || '30d';
            STATE.theme = saved.theme || 'ocean';
        }
    } catch(e) { console.error("Storage err:", e); }
}

// ═══ Yardımcılar ═══
function log(m, t = 'log') { const ts = new Date().toLocaleTimeString('tr-TR'); console[t](`[CryptoCorr ${ts}]`, m); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function updateClock() { DOM.navTime.textContent = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }); }
function fmtVol(v) { return v >= 1e9 ? (v/1e9).toFixed(1)+'B' : v >= 1e6 ? (v/1e6).toFixed(0)+'M' : v.toFixed(0); }

// ═══ Binance API: Top 200 ═══
async function fetchTop200() {
    log(t('ldr_sub'));
    DOM.initialLoaderProgress.style.width = '20%';
    DOM.initialLoaderSubtext.textContent = t('ldr_main');
    const res = await fetch(`${CONFIG.baseUrl}/ticker/24hr`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const tickers = await res.json();
    DOM.initialLoaderProgress.style.width = '60%';
    const exclude = ['USDC','BUSD','TUSD','FDUSD','DAI','USDD','USDP','EUR','GBP','AUD','BRL','TRY','AEUR','UST'];
    const levEnd = ['UP','DOWN','BULL','BEAR'];
    const coins = tickers
        .filter(t => {
            if (!t.symbol.endsWith('USDT')) return false;
            const b = t.symbol.replace('USDT','');
            if (exclude.includes(b) || levEnd.some(p => b.endsWith(p)) || b.length < 2) return false;
            return true;
        })
        .map(t => ({ symbol: t.symbol.replace('USDT',''), quoteVolume: parseFloat(t.quoteVolume) }))
        .sort((a,b) => b.quoteVolume - a.quoteVolume)
        .slice(0, CONFIG.topCoinLimit);
    coins.forEach((c,i) => c.rank = i+1);
    
    // Premium Varlık Enjeksiyonu
    const premiumAssets = [
        { symbol: 'SPX', quoteVolume: 99999999999, isPremium: true, rank: 'PRO', name: 'S&P 500' },
        { symbol: 'DXY', quoteVolume: 99999999998, isPremium: true, rank: 'PRO', name: 'Dolar Endeksi' },
        { symbol: 'GOLD', quoteVolume: 99999999997, isPremium: true, rank: 'PRO', name: 'Ons Altın' }
    ];
    coins.unshift(...premiumAssets); // En üste ekle
    
    DOM.initialLoaderProgress.style.width = '90%';
    log(`${coins.length} coin (Premium dahil) alındı`);
    return coins;
}

// ═══ Coin Seçim UI ═══
function renderCoinList(coins) {
    DOM.coinListContainer.innerHTML = '';
    coins.forEach(coin => {
        const el = document.createElement('div');
        el.className = 'coin-item';
        el.dataset.symbol = coin.symbol;
        if (STATE.selectedCoins.includes(coin.symbol)) el.classList.add('selected');
        
        // Premium Kontrolü
        if (coin.isPremium) {
            el.innerHTML = `<span class="coin-rank" style="color:var(--accent);font-weight:700">${coin.rank}</span><span class="coin-symbol">${coin.symbol} <span style="font-size:0.6rem;opacity:0.6">(${coin.name})</span></span><span class="coin-vol" style="margin-left:auto;color:var(--accent)">🔒 PRO</span>`;
            el.addEventListener('click', () => document.getElementById('modal-premium').classList.remove('hidden'));
        } else {
            if (STATE.selectedCoins.length >= STATE.matrixSize && !STATE.selectedCoins.includes(coin.symbol)) el.classList.add('disabled');
            el.innerHTML = `<span class="coin-rank">#${coin.rank}</span><span class="coin-symbol">${coin.symbol}</span><span class="coin-vol">$${fmtVol(coin.quoteVolume)}</span><span class="coin-check">✓</span>`;
            el.addEventListener('click', () => toggleCoin(coin.symbol));
        }
        DOM.coinListContainer.appendChild(el);
    });
}

function toggleCoin(symbol) {
    const idx = STATE.selectedCoins.indexOf(symbol);
    if (idx > -1) STATE.selectedCoins.splice(idx, 1);
    else { if (STATE.selectedCoins.length >= STATE.matrixSize) return; STATE.selectedCoins.push(symbol); }
    updateSelectionUI();
}

function updateSelectionUI() {
    const c = STATE.selectedCoins.length, m = STATE.matrixSize;
    DOM.selectionCounter.textContent = `${c} / ${m} ` + t('btn_analyze').split(' ')[0];
    DOM.selectionCounter.className = 'counter' + (c === m ? ' complete' : '');
    DOM.displayMatrix.textContent = `${m}×${m}`;
    DOM.btnAnalyze.disabled = c !== m;
    renderChips();
    DOM.coinListContainer.querySelectorAll('.coin-item').forEach(el => {
        const s = el.dataset.symbol, sel = STATE.selectedCoins.includes(s);
        el.classList.toggle('selected', sel);
        el.classList.toggle('disabled', c >= m && !sel);
    });
    saveStateToLocal();
}

function renderChips() {
    DOM.selectedChips.innerHTML = '';
    if (!STATE.selectedCoins.length) { DOM.selectedChips.innerHTML = '<span class="chips-empty">Henüz coin seçilmedi</span>'; return; }
    STATE.selectedCoins.forEach(sym => {
        const coin = STATE.allCoins.find(c => c.symbol === sym);
        const ch = document.createElement('span');
        ch.className = 'chip';
        ch.innerHTML = `<span class="chip-rank">#${coin?coin.rank:'?'}</span>${sym}<span class="chip-x" data-symbol="${sym}">✕</span>`;
        ch.querySelector('.chip-x').addEventListener('click', e => { e.stopPropagation(); toggleCoin(sym); });
        DOM.selectedChips.appendChild(ch);
    });
}

function filterCoinList(q) {
    q = q.trim().toUpperCase();
    renderCoinList(q ? STATE.allCoins.filter(c => c.symbol.includes(q)) : STATE.allCoins);
    DOM.btnClearSearch.classList.toggle('hidden', !q);
}

function setMatrixSize(size) {
    STATE.matrixSize = size;
    document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === size));
    while (STATE.selectedCoins.length > size) STATE.selectedCoins.pop();
    updateSelectionUI();
}

// ═══ Fiyat Verisi ═══
async function fetchCoinPrices(symbol) {
    const p = CONFIG.periodMap[STATE.period];
    const params = new URLSearchParams({ symbol: `${symbol}USDT`, interval: p.interval, limit: p.limit });
    const res = await fetch(`${CONFIG.baseUrl}/klines?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${symbol}`);
    return (await res.json()).map(k => parseFloat(k[4]));
}

async function fetchSelectedData() {
    const data = {}, coins = STATE.selectedCoins;
    for (let i = 0; i < coins.length; i++) {
        DOM.loaderProgress.style.width = `${10 + ((i+1)/coins.length)*45}%`;
        DOM.loaderSubtext.textContent = `${coins[i]}/USDT (${i+1}/${coins.length})`;
        data[coins[i]] = await fetchCoinPrices(coins[i]);
        await sleep(100);
    }
    return data;
}

// ═══ Pearson Korelasyon ═══
function pearson(x, y) {
    const n = Math.min(x.length, y.length);
    let sx=0,sy=0; for(let i=0;i<n;i++){sx+=x[i];sy+=y[i]}
    const mx=sx/n,my=sy/n;
    let num=0,dx2=0,dy2=0;
    for(let i=0;i<n;i++){const dx=x[i]-mx,dy=y[i]-my;num+=dx*dy;dx2+=dx*dx;dy2+=dy*dy}
    const den=Math.sqrt(dx2*dy2);
    return den===0?0:num/den;
}

function buildMatrix(data) {
    const coins = STATE.selectedCoins, n = coins.length, m = [];
    for(let i=0;i<n;i++){m[i]=[];for(let j=0;j<n;j++){m[i][j]=i===j?1:Math.round(pearson(data[coins[i]],data[coins[j]])*10000)/10000}}
    return m;
}

// ═══ Plotly Heatmap ═══
function renderHeatmap(matrix) {
    const coins = STATE.selectedCoins, n = coins.length;
    const theme = CONFIG.themes[STATE.theme];
    const annots = [];
    const isMobile = window.innerWidth < 768;
    
    // Mobil/PC Yükseklik ve Genişlik (Yatay Scroll)
    const chartHeight = isMobile 
        ? (n <= 5 ? 360 : (n <= 8 ? 400 : 440)) 
        : (n <= 5 ? 440 : (n <= 8 ? 520 : 580));
        
    const chartWidth = isMobile && n > 4 ? Math.max(window.innerWidth, n * 55 + 80) : undefined;

    for(let i=0;i<n;i++) for(let j=0;j<n;j++) {
        let fontSize = isMobile 
            ? (n<=4 ? 12 : (n<=6 ? 10 : (n<=8 ? 8 : 7)))
            : (n<=4 ? 16 : (n<=6 ? 14 : (n<=8 ? 12 : 10)));

        annots.push({
            x:coins[j],y:coins[i],text:matrix[i][j].toFixed(2),showarrow:false,
            font:{
                family:'Space Grotesk',
                size: fontSize,
                color:STATE.theme==='classic'?(Math.abs(matrix[i][j])>0.3?'#263238':'#78909C'):(Math.abs(matrix[i][j])>0.5?'#eaecef':'#848e9c'),
                weight:700
            }
        });
    }

    // -- Hacim Şoku (Volume Shock) Tespiti --
    let currentCoinsData = STATE.allCoins.filter(c => coins.includes(c.symbol));
    let volumeShockCoins = [];
    if(currentCoinsData.length > 0) {
        let avgVolume = currentCoinsData.reduce((sum, c) => sum + c.quoteVolume, 0) / currentCoinsData.length;
        // Eğer coin'in hacmi ortalamanın 2 katından fazlaysa şok say
        volumeShockCoins = currentCoinsData.filter(c => c.quoteVolume > avgVolume * 2).map(c => c.symbol);
        
        const banner = document.getElementById('volume-shock-banner');
        if (banner) {
            banner.style.display = volumeShockCoins.length > 0 ? 'flex' : 'none';
        }
    }
    
    // Y ekseni textleri
    let yTickText = coins.map(c => volumeShockCoins.includes(c) ? `<b class="volume-shock-text">${c}</b>` : c);
    let xTickText = coins.map(c => volumeShockCoins.includes(c) ? `<b class="volume-shock-text">${c}</b>` : c);

    Plotly.newPlot(DOM.heatmapChart, [{
        z:matrix,x:coins,y:coins,type:'heatmap',colorscale:theme.scale,
        zmin:-1,zmax:1,showscale:true,hoverongaps:false,
        hovertemplate:'<b>%{y} ↔ %{x}</b><br>r = <b>%{z:.4f}</b><extra></extra>',
        colorbar:{title:{text:'r',font:{family:'Space Grotesk',size:isMobile?10:12,color:'#848e9c'},side:'right'},
            tickfont:{family:'Space Grotesk',size:isMobile?9:10,color:'#848e9c'},
            tickvals:[-1,-.5,0,.5,1],ticktext:['-1.0','-0.5','0.0','+0.5','+1.0'],
            len:.85,thickness:10,outlinewidth:0,bgcolor:'rgba(0,0,0,0)'}
    }], {
        annotations:annots,
        dragmode: false, // Mobilde sayfanın scroll olmasını engellemez! Seçim (box/pan) devre dışı.
        xaxis:{side:'bottom',tickfont:{family:'Space Grotesk',size:n<=6?12:(n<=8?10:8),color:'#eaecef',weight:700},tickangle:isMobile?-45:0,gridcolor:'rgba(43,49,57,0.5)',linecolor:'#2b3139', ticktext:xTickText, tickvals:coins},
        yaxis:{autorange:'reversed',tickfont:{family:'Space Grotesk',size:n<=6?12:(n<=8?10:8),color:'#eaecef',weight:700},gridcolor:'rgba(43,49,57,0.5)',linecolor:'#2b3139', ticktext:yTickText, tickvals:coins},
        paper_bgcolor:'rgba(0,0,0,0)',plot_bgcolor:'rgba(0,0,0,0)',
        margin:{l:isMobile?(n>6?40:50):50, r:isMobile?40:60, t:16, b:isMobile?50:40},
        height: chartHeight,
        width: chartWidth,
        font:{family:'Inter'},
        autosize: !chartWidth
    }, {
        responsive: true, 
        displayModeBar: true, 
        displaylogo: false, 
        scrollZoom: false, // Mobilde sayfanın tamamen kilitlenmesi (scroll trap) iptal! Zoom sadece UI butonlarla yapılacak.
        modeBarButtonsToRemove: ['zoom2d', 'pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'toggleSpikelines']
    });
    DOM.scaleGradient.style.background = theme.gradient;
    DOM.resultCoinsLabel.textContent = coins.join(' • ') + ` — Son ${CONFIG.periodMap[STATE.period].label}`;
}

// ═══ İstatistikler (sağ panel) ═══
function renderStats(matrix) {
    const coins = STATE.selectedCoins, pairs = [];
    for(let i=0;i<coins.length;i++) for(let j=i+1;j<coins.length;j++) pairs.push({pair:`${coins[i]} ↔ ${coins[j]}`,value:matrix[i][j]});
    pairs.sort((a,b) => Math.abs(b.value)-Math.abs(a.value));
    DOM.statsGrid.innerHTML = '';
    // Eğer Hacim Şoku tespit edildiyse stat containerları da parlasın
    let currentCoinsData = STATE.allCoins.filter(c => coins.includes(c.symbol));
    let volumeShockCoins = [];
    if(currentCoinsData.length > 0) {
        let avgVolume = currentCoinsData.reduce((sum, c) => sum + c.quoteVolume, 0) / currentCoinsData.length;
        volumeShockCoins = currentCoinsData.filter(c => c.quoteVolume > avgVolume * 2).map(c => c.symbol);
    }

    pairs.forEach(({pair,value}) => {
        const el=document.createElement('div');
        el.className='stat-card';
        if (volumeShockCoins.some(vc => pair.includes(vc))) {
            el.classList.add('volume-shock-card');
        }
        let cls=value>0.3?'positive':value<-0.3?'negative':'neutral';
        el.innerHTML=`<span class="stat-pair">${pair}</span><span class="stat-value ${cls}">${value>0?'+':''}${value.toFixed(4)}</span>`;
        DOM.statsGrid.appendChild(el);
    });
    renderOpportunities(matrix, coins, pairs);
}

// ═══ Fırsat Avcısı (AI Algo) + Zaman Makinesi (Backtest Engine) ═══

/**
 * BACKTEST ENGINE — Mean Reversion Z-Score Strategy
 * 
 * Gerçek fiyat verilerini kullanarak spread (oran) hesaplar,
 * rolling z-score ile sapmaları yakalar ve simüle edilmiş
 * giriş/çıkış işlemleriyle istatistik üretir.
 */
function runBacktest(pricesA, pricesB, isHedge = false) {
    const n = Math.min(pricesA.length, pricesB.length);
    if (n < 8) return null;

    // Fiyat oranı (spread) hesapla
    const spread = [];
    for (let i = 0; i < n; i++) {
        spread.push(pricesB[i] !== 0 ? pricesA[i] / pricesB[i] : 0);
    }

    // Rolling ortalama ve std hesapla (pencere = ~%30 veri uzunluğu, min 5)
    const window = Math.max(5, Math.floor(n * 0.3));
    const zScores = [];
    for (let i = 0; i < n; i++) {
        if (i < window - 1) { zScores.push(0); continue; }
        let sum = 0, sq = 0;
        for (let j = i - window + 1; j <= i; j++) { sum += spread[j]; sq += spread[j] * spread[j]; }
        const mean = sum / window;
        const variance = sq / window - mean * mean;
        const std = Math.sqrt(Math.max(variance, 1e-12));
        zScores.push((spread[i] - mean) / std);
    }

    // Z-score eşikleri: pairs trading için ±1.2 giriş, ±0.3 çıkış
    const ENTRY_Z = isHedge ? 1.0 : 1.2;
    const EXIT_Z = 0.3;

    // Trade simülasyonu
    const trades = [];
    let inTrade = false, entryIdx = 0, entrySpread = 0, direction = 0;

    for (let i = window; i < n; i++) {
        const z = zScores[i];
        if (!inTrade) {
            if (z > ENTRY_Z) { inTrade = true; entryIdx = i; entrySpread = spread[i]; direction = -1; } // short spread
            else if (z < -ENTRY_Z) { inTrade = true; entryIdx = i; entrySpread = spread[i]; direction = 1; } // long spread
        } else {
            const shouldExit = (direction === -1 && z <= EXIT_Z) || (direction === 1 && z >= -EXIT_Z) || i === n - 1;
            if (shouldExit) {
                const exitSpread = spread[i];
                const returnPct = direction * ((exitSpread - entrySpread) / entrySpread) * 100;
                trades.push({
                    entryIdx, exitIdx: i,
                    duration: i - entryIdx,
                    returnPct,
                    isWin: returnPct > 0
                });
                inTrade = false;
            }
        }
    }

    // İstatistik hesapla
    const totalTrades = trades.length;
    if (totalTrades === 0) return null;

    const wins = trades.filter(t => t.isWin).length;
    const winRate = (wins / totalTrades) * 100;
    const returns = trades.map(t => t.returnPct);
    const meanReturn = returns.reduce((a, b) => a + b, 0) / totalTrades;
    
    // Max drawdown (en kötü ardışık kayıp serisi)
    let maxDD = 0, currentDD = 0;
    for (const t of trades) {
        if (t.returnPct < 0) { currentDD += Math.abs(t.returnPct); maxDD = Math.max(maxDD, currentDD); }
        else currentDD = 0;
    }

    // Max ardışık kazanç
    let maxStreak = 0, streak = 0;
    for (const t of trades) {
        if (t.isWin) { streak++; maxStreak = Math.max(maxStreak, streak); }
        else streak = 0;
    }

    // Sharpe-benzeri oran (basitleştirilmiş)
    const avgR = meanReturn;
    const stdR = Math.sqrt(returns.reduce((s, r) => s + (r - avgR) ** 2, 0) / Math.max(totalTrades - 1, 1));
    const sharpe = stdR > 0 ? (avgR / stdR) : 0;

    // ${t("shp_med")}lama işlem süresi
    const avgDuration = trades.reduce((s, t) => s + t.duration, 0) / totalTrades;

    // En iyi ve en kötü tek işlem
    const bestTrade = Math.max(...returns);
    const worstTrade = Math.min(...returns);

    // Toplam kümülatif getiri
    const cumReturn = returns.reduce((a, b) => a + b, 0);

    return {
        totalTrades, wins, winRate,
        meanReturn, maxDD, maxStreak,
        sharpe, avgDuration, bestTrade, worstTrade, cumReturn
    };
}

function renderOpportunities(matrix, coins, pairs) {
    const oppList = document.getElementById('opp-list');
    oppList.innerHTML = '';
    
    let found = 0;
    const periodLabel = CONFIG.periodMap[STATE.period].label;

    pairs.forEach(({pair, value}) => {
        const coin1 = pair.split(' ↔ ')[0];
        const coin2 = pair.split(' ↔ ')[1];
        const pricesA = STATE.lastPriceData?.[coin1];
        const pricesB = STATE.lastPriceData?.[coin2];

        if (value >= 0.85) {
            found++;
            let backtestHTML = '';
            const bt = (pricesA && pricesB) ? runBacktest(pricesA, pricesB, false) : null;

            if (bt && bt.totalTrades > 0) {
                const winColor = bt.winRate >= 60 ? 'var(--green)' : bt.winRate >= 40 ? 'var(--accent)' : 'var(--red)';
                const returnColor = bt.meanReturn > 0 ? 'var(--green)' : 'var(--red)';
                const sharpeLabel = bt.sharpe >= 1.5 ? '${t("shp_exc")}' : bt.sharpe >= 0.8 ? '${t("shp_good")}' : bt.sharpe >= 0 ? '${t("shp_med")}' : '${t("shp_low")}';
                const sharpeColor = bt.sharpe >= 1.5 ? 'var(--green)' : bt.sharpe >= 0.8 ? 'var(--accent)' : 'var(--text-3)';

                backtestHTML = `
                    <span class="backtest-badge">
                        <span class="backtest-badge-icon">✅</span> ${t("backtest_badge").replace("✅ ", "")}
                    </span>
                    <div class="backtest-detail backtest-dashboard">
                        <div class="bt-header">
                            <span class="bt-engine-label">${t("bt_engine")}</span>
                            <span class="bt-period-label">📅 ${t("bt_period", {p: periodLabel}).replace("📅 ","")}</span>
                        </div>
                        <div class="bt-summary-text">
                            ${t("bt_desc", {p1: coin1, p2: coin2})}
                        </div>
                        <div class="bt-stats-grid">
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_tot")}</span>
                                <span class="bt-stat-value">${bt.totalTrades}</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_win")}</span>
                                <span class="bt-stat-value" style="color:var(--green)">${bt.wins} ✓</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_loss")}</span>
                                <span class="bt-stat-value" style="color:var(--red)">${bt.totalTrades - bt.wins} ✗</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_rate")}</span>
                                <span class="bt-stat-value" style="color:${winColor}">${bt.winRate.toFixed(1)}%</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_ret")}</span>
                                <span class="bt-stat-value" style="color:${returnColor}">${bt.meanReturn > 0 ? '+' : ''}${bt.meanReturn.toFixed(2)}%</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_cum")}</span>
                                <span class="bt-stat-value" style="color:${bt.cumReturn >= 0 ? 'var(--green)' : 'var(--red)'}">${bt.cumReturn > 0 ? '+' : ''}${bt.cumReturn.toFixed(2)}%</span>
                            </div>
                        </div>
                        <div class="bt-progress-section">
                            <div class="bt-progress-row">
                                <span class="bt-prog-label">${t("bt_s_rate")}</span>
                                <div class="bt-progress-track"><div class="bt-progress-fill green-fill" style="width:${Math.min(bt.winRate, 100)}%"></div></div>
                                <span class="bt-prog-val" style="color:${winColor}">${bt.winRate.toFixed(0)}%</span>
                            </div>
                            <div class="bt-progress-row">
                                <span class="bt-prog-label">${t("bt_s_dd")}</span>
                                <div class="bt-progress-track"><div class="bt-progress-fill red-fill" style="width:${Math.min(bt.maxDD, 100)}%"></div></div>
                                <span class="bt-prog-val" style="color:var(--red)">-${bt.maxDD.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div class="bt-extra-row">
                            <span class="bt-extra-item">${t('bt_ex_str', {v: bt.maxStreak})}</span>
                            <span class="bt-extra-item">${t('bt_ex_shp', {v: bt.sharpe.toFixed(2), l: sharpeLabel})}</span>
                            <span class="bt-extra-item">⚡ En ${t("shp_good")}: <b style="color:var(--green)">+${bt.bestTrade.toFixed(2)}%</b></span>
                            <span class="bt-extra-item">${t('bt_ex_wrst', {v: bt.worstTrade.toFixed(2)})}</span>
                        </div>
                    </div>`;
            } else {
                backtestHTML = `
                    <span class="backtest-badge backtest-badge-nodata">
                        <span class="backtest-badge-icon">📊</span> Backtest: Sinyal Yetersiz
                    </span>`;
            }

            oppList.innerHTML += `
            <div class="opp-card buy-signal">
                <div class="opp-title">
                    <span>${t("opp_pair", {p: pair})}</span>
                    ${backtestHTML.includes('backtest-dashboard') ? '' : backtestHTML}
                </div>
                <div class="opp-body">
                    ${t("opp_pair_desc", {p1: coin1, p2: coin2, v: value.toFixed(2)})}
                    ${backtestHTML.includes('backtest-dashboard') ? backtestHTML : ''}
                </div>
            </div>`;

        } else if (value <= -0.70) {
            found++;
            let backtestHTML = '';
            const bt = (pricesA && pricesB) ? runBacktest(pricesA, pricesB, true) : null;

            if (bt && bt.totalTrades > 0) {
                const winColor = bt.winRate >= 60 ? 'var(--green)' : bt.winRate >= 40 ? 'var(--accent)' : 'var(--red)';
                const returnColor = bt.meanReturn > 0 ? 'var(--green)' : 'var(--red)';
                const sharpeLabel = bt.sharpe >= 1.5 ? '${t("shp_exc")}' : bt.sharpe >= 0.8 ? '${t("shp_good")}' : bt.sharpe >= 0 ? '${t("shp_med")}' : '${t("shp_low")}';
                const sharpeColor = bt.sharpe >= 1.5 ? 'var(--green)' : bt.sharpe >= 0.8 ? 'var(--accent)' : 'var(--text-3)';

                backtestHTML = `
                    <span class="backtest-badge red-badge">
                        <span class="backtest-badge-icon">🛡️</span> ${t("hedge_badge").replace("🛡️ ", "")}
                    </span>
                    <div class="backtest-detail red-detail backtest-dashboard">
                        <div class="bt-header">
                            <span class="bt-engine-label">${t("bt_engine_h")}</span>
                            <span class="bt-period-label">📅 ${t("bt_period", {p: periodLabel}).replace("📅 ","")}</span>
                        </div>
                        <div class="bt-summary-text">
                            ${t("bt_desc_h", {p1: coin1, p2: coin2})}
                        </div>
                        <div class="bt-stats-grid">
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_tot_h")}</span>
                                <span class="bt-stat-value">${bt.totalTrades}</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_win_h")}</span>
                                <span class="bt-stat-value" style="color:var(--green)">${bt.wins} ✓</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_loss_h")}</span>
                                <span class="bt-stat-value" style="color:var(--red)">${bt.totalTrades - bt.wins} ✗</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_rate_h")}</span>
                                <span class="bt-stat-value" style="color:${winColor}">${bt.winRate.toFixed(1)}%</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_ret_h")}</span>
                                <span class="bt-stat-value" style="color:${returnColor}">${bt.meanReturn > 0 ? '+' : ''}${bt.meanReturn.toFixed(2)}%</span>
                            </div>
                            <div class="bt-stat-item">
                                <span class="bt-stat-label">${t("bt_s_cum_h")}</span>
                                <span class="bt-stat-value" style="color:${bt.cumReturn >= 0 ? 'var(--green)' : 'var(--red)'}">${bt.cumReturn > 0 ? '+' : ''}${bt.cumReturn.toFixed(2)}%</span>
                            </div>
                        </div>
                        <div class="bt-progress-section">
                            <div class="bt-progress-row">
                                <span class="bt-prog-label">${t("bt_s_rate_h")}</span>
                                <div class="bt-progress-track"><div class="bt-progress-fill green-fill" style="width:${Math.min(bt.winRate, 100)}%"></div></div>
                                <span class="bt-prog-val" style="color:${winColor}">${bt.winRate.toFixed(0)}%</span>
                            </div>
                            <div class="bt-progress-row">
                                <span class="bt-prog-label">${t("bt_s_dd")}</span>
                                <div class="bt-progress-track"><div class="bt-progress-fill red-fill" style="width:${Math.min(bt.maxDD, 100)}%"></div></div>
                                <span class="bt-prog-val" style="color:var(--red)">-${bt.maxDD.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div class="bt-extra-row">
                            <span class="bt-extra-item">${t('bt_ex_str', {v: bt.maxStreak})}</span>
                            <span class="bt-extra-item">${t('bt_ex_shp', {v: bt.sharpe.toFixed(2), l: sharpeLabel})}</span>
                            <span class="bt-extra-item">⚡ En ${t("shp_good")}: <b style="color:var(--green)">+${bt.bestTrade.toFixed(2)}%</b></span>
                            <span class="bt-extra-item">${t('bt_ex_wrst', {v: bt.worstTrade.toFixed(2)})}</span>
                        </div>
                    </div>`;
            } else {
                backtestHTML = `
                    <span class="backtest-badge red-badge backtest-badge-nodata">
                        <span class="backtest-badge-icon">📊</span> Backtest: Sinyal Yetersiz
                    </span>`;
            }

            oppList.innerHTML += `
            <div class="opp-card hedge-signal">
                <div class="opp-title">
                    <span>${t("opp_hedge", {p: pair})}</span>
                    ${backtestHTML.includes('backtest-dashboard') ? '' : backtestHTML}
                </div>
                <div class="opp-body">
                    ${t("opp_hedge_desc", {p1: coin1, p2: coin2, v: value.toFixed(2)})}
                    ${backtestHTML.includes('backtest-dashboard') ? backtestHTML : ''}
                </div>
            </div>`;
        }
    });

    if (found === 0) {
        oppList.innerHTML = `<div style="padding:14px 16px; background:rgba(255,255,255,0.02); border-left:3px solid var(--border-light); border-radius:8px; font-size:0.82rem; color:var(--text-3)">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="font-size:1.1rem">🔍</span><strong style="color:var(--text-2)">${t("opp_none_lbl")}</strong></div>
            ${t("opp_none")}
        </div>`;
    }
}

// ═══ Coin Swap (alt panel) ═══
function renderSwapGrid(filter = '') {
    DOM.swapGrid.innerHTML = '';
    const q = filter.trim().toUpperCase();
    const remaining = STATE.allCoins.filter(c => !STATE.selectedCoins.includes(c.symbol) && (!q || c.symbol.includes(q)));
    remaining.slice(0, 100).forEach(coin => {
        const el = document.createElement('div');
        el.className = 'swap-coin';
        if (coin.isPremium) {
            el.innerHTML = `<span class="sc-rank" style="color:var(--accent)">PRO</span><span class="sc-sym">${coin.symbol}</span><span style="margin-left:auto;font-size:0.8rem">🔒</span>`;
            el.addEventListener('click', () => document.getElementById('modal-premium').classList.remove('hidden'));
        } else {
            el.innerHTML = `<span class="sc-rank">#${coin.rank}</span><span class="sc-sym">${coin.symbol}</span>`;
            el.addEventListener('click', () => openSwapModal(coin.symbol));
        }
        DOM.swapGrid.appendChild(el);
    });
}

function openSwapModal(newCoin) {
    STATE.pendingSwapCoin = newCoin;
    DOM.swapModalTitle.textContent = `${newCoin} ile hangi coini değiştirmek istiyorsunuz?`;
    DOM.swapModalOptions.innerHTML = '';
    STATE.selectedCoins.forEach(sym => {
        const btn = document.createElement('button');
        btn.className = 'swap-option';
        btn.textContent = sym;
        btn.addEventListener('click', () => executeSwap(sym, newCoin));
        DOM.swapModalOptions.appendChild(btn);
    });
    DOM.swapModal.classList.remove('hidden');
}

async function executeSwap(oldCoin, newCoin) {
    DOM.swapModal.classList.add('hidden');
    const idx = STATE.selectedCoins.indexOf(oldCoin);
    if (idx === -1) return;
    STATE.selectedCoins[idx] = newCoin;
    log(`Swap: ${oldCoin} → ${newCoin}`);
    saveStateToLocal();
    // Yeniden analiz
    await runAnalysis();
}

// ═══ Renk teması değiştir ═══
function setTheme(themeName) {
    STATE.theme = themeName;
    document.querySelectorAll('.theme-dot').forEach(d => d.classList.toggle('active', d.dataset.theme === themeName));
    saveStateToLocal();
    // Eğer matris varsa yeniden çiz
    if (STATE.lastPriceData) {
        const matrix = buildMatrix(STATE.lastPriceData);
        renderHeatmap(matrix);
    }
}

// ═══ Ekran Geçişleri ═══
function showSelector() {
    DOM.initialLoader.classList.add('hidden');DOM.analysisLoader.classList.add('hidden');DOM.resultsSection.classList.add('hidden');
    DOM.coinSelector.classList.remove('hidden');
    DOM.navStatus.className='nav-status live';DOM.navStatus.innerHTML='<span class="status-dot"></span>Hazır';
    
    // Matris ve Periyot düzenleme ikonlarını gizle
    DOM.cardMatrix.classList.remove('interactive');
    DOM.cardPeriod.classList.remove('interactive');
    DOM.cardMatrix.querySelector('.edit-icon').style.display = 'none';
    DOM.cardPeriod.querySelector('.edit-icon').style.display = 'none';
}
function showAnalysisLoader() {
    DOM.initialLoader.classList.add('hidden');
    DOM.coinSelector.classList.add('hidden');DOM.resultsSection.classList.add('hidden');
    DOM.analysisLoader.classList.remove('hidden');
    DOM.loaderProgress.style.width='0%';DOM.loaderText.textContent=t('stat_analyzing');
    DOM.navStatus.className='nav-status';DOM.navStatus.innerHTML='<span class="status-dot"></span>Analiz...';
}
function showResults() {
    DOM.initialLoader.classList.add('hidden');
    DOM.analysisLoader.classList.add('hidden');DOM.coinSelector.classList.add('hidden');
    DOM.resultsSection.classList.remove('hidden');
    DOM.displayMatrix.textContent=`${STATE.selectedCoins.length}×${STATE.selectedCoins.length}`;
    DOM.displayPeriod.textContent=CONFIG.periodMap[STATE.period].label;
    DOM.navStatus.className='nav-status live';DOM.navStatus.innerHTML='<span class="status-dot"></span>Veriler Güncel';
    renderSwapGrid();
    
    // Matris ve Periyot düzenleme ikonlarını göster
    DOM.cardMatrix.classList.add('interactive');
    DOM.cardPeriod.classList.add('interactive');
    DOM.cardMatrix.querySelector('.edit-icon').style.display = 'inline';
    DOM.cardPeriod.querySelector('.edit-icon').style.display = 'inline';
    
    // Alarm combobox güncelle
    if(typeof updateAlarmPairSelect === 'function') updateAlarmPairSelect();
}

// ═══ Ana Akış ═══
async function initApp() {
    try {
        const urlLoaded = loadStateFromURL();
        if(!urlLoaded) {
            loadStateFromLocal();
        }

        STATE.allCoins = await fetchTop200();
        
        // Eğer URL'den coin geldiyse, geçerli olmayanları filtrele (ör: USDT dışı saçma coin yazılmışsa)
        if(urlLoaded) {
            STATE.selectedCoins = STATE.selectedCoins.filter(s => STATE.allCoins.some(c => c.symbol === s));
            if(STATE.selectedCoins.length === 0) {
                STATE.matrixSize = 5;
                STATE.period = '30d';
            } else if(STATE.selectedCoins.length !== STATE.matrixSize) {
                STATE.matrixSize = STATE.selectedCoins.length;
            }
        }

        DOM.initialLoaderProgress.style.width='100%';DOM.initialLoaderText.textContent=t('stat_ready');
        await sleep(300);

        // UI elemanlarını localStorage state'ine göre ayarla
        document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === STATE.matrixSize));
        document.querySelectorAll('.period-btn').forEach(b => b.classList.toggle('active', b.dataset.period === STATE.period));
        document.querySelectorAll('.theme-dot').forEach(b => b.classList.toggle('active', b.dataset.theme === STATE.theme));
        DOM.displayPeriod.textContent = CONFIG.periodMap[STATE.period].label;

        renderCoinList(STATE.allCoins); renderChips(); updateSelectionUI(); 
        
        // Eğer her şey tamsa doğrudan grafiği çizdir
        if(STATE.selectedCoins.length === STATE.matrixSize && STATE.selectedCoins.length > 0) {
            runAnalysis();
        } else {
            showSelector();
        }
    } catch(e) {
        log(`Hata: ${e.message}`,'error');
        DOM.initialLoaderText.textContent='Bağlantı Hatası';DOM.initialLoaderSubtext.textContent='5s sonra tekrar...';
        setTimeout(initApp,5000);
    }
}

let apiCooldown = false;

async function runAnalysis() {
    if(STATE.isAnalyzing || apiCooldown) return; 
    STATE.isAnalyzing = true;
    apiCooldown = true;

    // Sistem meşgulken UI etkileşimlerini kilitle
    const interactionBtns = [DOM.btnRefresh, DOM.btnAnalyze];
    document.querySelectorAll('.period-opt, .period-btn').forEach(b => interactionBtns.push(b));
    interactionBtns.forEach(b => { if(b) b.disabled = true; });
    DOM.cardPeriod.style.pointerEvents = 'none';
    DOM.cardMatrix.style.pointerEvents = 'none';

    try {
        showAnalysisLoader(); await sleep(150);
        const data = await fetchSelectedData();
        STATE.lastPriceData = data;
        DOM.loaderProgress.style.width='65%';DOM.loaderText.textContent='Korelasyon Hesaplanıyor';
        await sleep(100);
        const matrix = buildMatrix(data);
        DOM.loaderProgress.style.width='80%';DOM.loaderText.textContent='Grafik Oluşturuluyor';
        await sleep(100);
        
        DOM.loaderProgress.style.width='100%';DOM.loaderText.textContent='Tamamlandı';
        // Plotly Fix: Görünür yap ki ölçüleri tam algılasın
        showResults(); 
        renderHeatmap(matrix); 
        renderStats(matrix);
    } catch(e) {
        log(`Hata: ${e.message}`,'error');
        DOM.loaderText.textContent='Başarısız';DOM.loaderSubtext.textContent=e.message;
        await sleep(2000); showSelector();
    } finally { 
        STATE.isAnalyzing=false; 
        
        // 2 Saniyelik Debounce/Rate-Limit süresi sonrası kilitleri aç
        setTimeout(() => {
            apiCooldown = false;
            interactionBtns.forEach(b => { if(b) b.disabled = false; });
            DOM.cardPeriod.style.pointerEvents = 'auto';
            DOM.cardMatrix.style.pointerEvents = 'auto';
        }, 2000);
    }
}

// ═══ Event Listeners ═══
updateClock(); setInterval(updateClock,30000);

document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.addEventListener('click', () => setMatrixSize(parseInt(b.dataset.size))));
document.querySelectorAll('.period-btn').forEach(b => b.addEventListener('click', () => {
    STATE.period=b.dataset.period;
    document.querySelectorAll('.period-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    DOM.displayPeriod.textContent=CONFIG.periodMap[STATE.period].label;
    saveStateToLocal();
}));
document.querySelectorAll('.theme-dot').forEach(d => d.addEventListener('click', () => setTheme(d.dataset.theme)));

DOM.coinSearchInput.addEventListener('input', e => filterCoinList(e.target.value));
DOM.btnClearSearch.addEventListener('click', () => { DOM.coinSearchInput.value=''; filterCoinList(''); DOM.coinSearchInput.focus(); });
DOM.btnAnalyze.addEventListener('click', () => { if(STATE.selectedCoins.length===STATE.matrixSize) runAnalysis(); });
DOM.btnClearSelection.addEventListener('click', () => { STATE.selectedCoins=[]; updateSelectionUI(); });
DOM.btnRefresh.addEventListener('click', () => runAnalysis());
DOM.btnBack.addEventListener('click', () => showSelector());
DOM.swapSearchInput.addEventListener('input', e => renderSwapGrid(e.target.value));
DOM.swapModalClose.addEventListener('click', () => DOM.swapModal.classList.add('hidden'));
DOM.swapModal.addEventListener('click', e => { if(e.target===DOM.swapModal) DOM.swapModal.classList.add('hidden'); });

document.addEventListener('DOMContentLoaded', () => initApp());

// ═══ METRIC CARD MODALLAR ═══
// Matris modalını aç
DOM.cardMatrix.addEventListener('click', () => {
    if(!DOM.cardMatrix.classList.contains('interactive')) return;
    DOM.modalMatrixSize.classList.remove('hidden');
});
// Periyot modalını aç
DOM.cardPeriod.addEventListener('click', () => {
    if(!DOM.cardPeriod.classList.contains('interactive')) return;
    DOM.modalPeriod.classList.remove('hidden');
});

// Modal kapama genel
document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', e => {
        const modalId = e.currentTarget.dataset.close;
        const modal = document.getElementById(modalId);
        if(modal) modal.classList.add('hidden');
    });
});

// Portföy Risk Modalını Aç / Yönet
let riskPortfolio = [];
document.getElementById('btn-risk')?.addEventListener('click', () => {
    document.getElementById('modal-risk').classList.remove('hidden');
});

const riskSearchInput = document.getElementById('risk-search-input');
if(riskSearchInput) {
    riskSearchInput.addEventListener('input', e => {
        // Mock the search functionality behind the blur: it looks alive but is inaccessible
        let val = e.target.value.toUpperCase();
        if(val.length > 2 && !riskPortfolio.includes(val) && STATE.allCoins.some(c=>c.symbol===val)) {
            riskPortfolio.push(val);
            e.target.value = '';
            document.getElementById('risk-portfolio-chips').innerHTML = riskPortfolio.map(c=>`<span class="chip">${c}</span>`).join('');
            document.getElementById('risk-result-desc').innerHTML = `${t("scan_txt", {l: riskPortfolio.length})}`;
            setTimeout(() => {
                document.getElementById('risk-result-box').style.borderLeftColor = "var(--red)";
                document.getElementById('risk-result-desc').innerHTML = `<span style="color:var(--red);font-weight:700">${t("risk_1")}</span> ${t("risk_2")}`;
            }, 1200);
        }
    });
}

document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', e => {
        const modalId = e.currentTarget.dataset.open;
        const modal = document.getElementById(modalId);
        if(modal) modal.classList.remove('hidden');
    });
});

// Periyot değiştirme
document.querySelectorAll('.period-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        let np = btn.dataset.period;
        DOM.modalPeriod.classList.add('hidden');
        if(np === STATE.period) return;
        
        STATE.period = np;
        document.querySelectorAll('.period-btn').forEach(x=>x.classList.remove('active'));
        const opt = document.querySelector(`.period-btn[data-period="${np}"]`);
        if(opt) opt.classList.add('active');
        DOM.displayPeriod.textContent = CONFIG.periodMap[STATE.period].label;
        saveStateToLocal();

        // Eger sonuctaysak dogrudan calistir
        if(!DOM.resultsSection.classList.contains('hidden')) {
             runAnalysis();
        }
    });
});

// Matris Boyutu Seçme
document.querySelectorAll('.size-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        let ts = parseInt(btn.dataset.size);
        DOM.modalMatrixSize.classList.add('hidden');
        if(ts === STATE.matrixSize) return;

        MODAL_STATE.tempTargetSize = ts;
        if(ts < STATE.matrixSize) {
            // Reduce
            MODAL_STATE.tempReduceSelection = [];
            openReduceModal();
        } else {
            // Increase
            MODAL_STATE.tempIncreaseSelection = [];
            openIncreaseModal();
        }
    });
});

function openReduceModal() {
    let diff = STATE.matrixSize - MODAL_STATE.tempTargetSize;
    DOM.reduceTitle.innerHTML = `Çıkarılacak <strong style="color:var(--accent)">${diff}</strong> Coini Seçin`;
    DOM.reduceOptions.innerHTML = '';
    STATE.selectedCoins.forEach(coin => {
         let el = document.createElement('div');
         el.className = 'reduce-item';
         el.innerHTML = `<span class="reduce-sym">${coin}</span><span class="reduce-x">✕</span>`;
         el.addEventListener('click', () => {
             if(MODAL_STATE.tempReduceSelection.includes(coin)) {
                 MODAL_STATE.tempReduceSelection = MODAL_STATE.tempReduceSelection.filter(c => c !== coin);
                 el.classList.remove('selected');
             } else {
                 if(MODAL_STATE.tempReduceSelection.length < diff) {
                     MODAL_STATE.tempReduceSelection.push(coin);
                     el.classList.add('selected');
                 }
             }
             DOM.btnConfirmReduce.disabled = (MODAL_STATE.tempReduceSelection.length !== diff);
         });
         DOM.reduceOptions.appendChild(el);
    });
    DOM.btnConfirmReduce.disabled = true;
    DOM.modalMatrixReduce.classList.remove('hidden');
}

DOM.btnConfirmReduce.addEventListener('click', () => {
   DOM.modalMatrixReduce.classList.add('hidden');
   STATE.selectedCoins = STATE.selectedCoins.filter(c => !MODAL_STATE.tempReduceSelection.includes(c));
   STATE.matrixSize = MODAL_STATE.tempTargetSize;
   
   document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === STATE.matrixSize));
   
   if(!DOM.resultsSection.classList.contains('hidden')){
       const m = buildMatrix(STATE.lastPriceData);
       renderHeatmap(m); renderStats(m);
       DOM.displayMatrix.textContent = `${STATE.matrixSize}×${STATE.matrixSize}`;
       renderSwapGrid();
   }
   updateSelectionUI();
});

function openIncreaseModal() {
    let diff = MODAL_STATE.tempTargetSize - STATE.matrixSize;
    DOM.increaseTitle.innerHTML = `Eklenecek <strong style="color:var(--accent)">${diff}</strong> Coini Seçin`;
    DOM.increaseSearch.value = '';
    renderIncreaseGrid('');
    DOM.btnConfirmIncrease.disabled = true;
    DOM.modalMatrixIncrease.classList.remove('hidden');
}

function renderIncreaseGrid(q) {
    DOM.increaseGrid.innerHTML = '';
    q = q.trim().toUpperCase();
    let rem = STATE.allCoins.filter(c => !STATE.selectedCoins.includes(c.symbol) && (!q || c.symbol.includes(q)));
    let diff = MODAL_STATE.tempTargetSize - STATE.matrixSize;
    rem.slice(0, 100).forEach(coin => {
        let el = document.createElement('div');
        el.className = 'increase-item';
        
        if (coin.isPremium) {
            el.innerHTML = `<span class="inc-rank" style="color:var(--accent)">PRO</span> <span class="inc-sym">${coin.symbol}</span><span style="font-size:0.8rem">🔒</span>`;
            el.addEventListener('click', () => document.getElementById('modal-premium').classList.remove('hidden'));
        } else {
            if(MODAL_STATE.tempIncreaseSelection.includes(coin.symbol)) el.classList.add('selected');
            el.innerHTML = `<span class="inc-rank">#${coin.rank}</span> <span class="inc-sym">${coin.symbol}</span>`;
            el.addEventListener('click', () => {
                if(MODAL_STATE.tempIncreaseSelection.includes(coin.symbol)){
                     MODAL_STATE.tempIncreaseSelection = MODAL_STATE.tempIncreaseSelection.filter(c => c !== coin.symbol);
                     el.classList.remove('selected');
                } else {
                     if(MODAL_STATE.tempIncreaseSelection.length < diff) {
                         MODAL_STATE.tempIncreaseSelection.push(coin.symbol);
                         el.classList.add('selected');
                     }
                }
                DOM.btnConfirmIncrease.disabled = (MODAL_STATE.tempIncreaseSelection.length !== diff);
            });
        }
        DOM.increaseGrid.appendChild(el);
    });
}

DOM.increaseSearch.addEventListener('input', e => renderIncreaseGrid(e.target.value));

DOM.btnConfirmIncrease.addEventListener('click', async () => {
    DOM.modalMatrixIncrease.classList.add('hidden');
    STATE.selectedCoins.push(...MODAL_STATE.tempIncreaseSelection);
    STATE.matrixSize = MODAL_STATE.tempTargetSize;
    document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === STATE.matrixSize));
    updateSelectionUI();

    if(!DOM.resultsSection.classList.contains('hidden')) {
         showAnalysisLoader();
         DOM.loaderText.textContent = "Eklenen coin verileri alınıyor...";
         try {
             for(let i=0; i<MODAL_STATE.tempIncreaseSelection.length; i++) {
                 let coin = MODAL_STATE.tempIncreaseSelection[i];
                 DOM.loaderSubtext.textContent = `${coin} fiyat verisi çekiliyor (${i+1}/${MODAL_STATE.tempIncreaseSelection.length})...`;
                 STATE.lastPriceData[coin] = await fetchCoinPrices(coin);
                 await sleep(100); // api rate limiti korumak icon
             }
             const m = buildMatrix(STATE.lastPriceData);
             showResults(); // Gizli div çözümü
             renderHeatmap(m); renderStats(m);
             DOM.displayMatrix.textContent = `${STATE.matrixSize}×${STATE.matrixSize}`;
             renderSwapGrid();
             saveStateToLocal();
         } catch(e) {
             log(`Veri hatası: ${e.message}`, 'error');
         }
    }
});

// ═══ Dışa Aktar (Export) Fonksiyonları ═══

if(DOM.btnExportCSV) DOM.btnExportCSV.addEventListener('click', () => {
    if(!STATE.lastPriceData || !STATE.selectedCoins.length) return;
    const coins = STATE.selectedCoins;
    let csv = "Coin\\Coin," + coins.join(",") + "\n";
    const matrix = buildMatrix(STATE.lastPriceData);
    for(let i=0; i<coins.length; i++){
        csv += coins[i] + "," + matrix[i].map(v => v.toFixed(4)).join(",") + "\n";
    }
    const blob = new Blob([csv], {type: "text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Korelasyon_Matrisi_${STATE.period}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    log('CSV dosyası dışa aktarıldı.', 'log');
});

if(DOM.btnExportPNG) DOM.btnExportPNG.addEventListener('click', async () => {
    if(!STATE.lastPriceData) return;
    
    // Yüksek Çözünürlüklü Filigran Ekle
    const currentAnnots = DOM.heatmapChart.layout.annotations || [];
    const watermark = {
        text: 'Generated via CryptoCorr | Muhammed Toğmuş',
        x: 1, y: 0,
        xref: 'paper', yref: 'paper',
        xanchor: 'right', yanchor: 'bottom',
        showarrow: false,
        font: { family: 'Space Grotesk', size: window.innerWidth < 768 ? 10 : 13, color: 'rgba(255, 255, 255, 0.5)' },
        yshift: -40
    };
    
    // Filigranı Gecici Olarak Plotly'e Ekle
    await Plotly.relayout(DOM.heatmapChart, { annotations: [...currentAnnots, watermark] });
    
    // Resmi İndir
    await Plotly.downloadImage(DOM.heatmapChart, {
        format: 'png',
        width: window.innerWidth < 768 ? 800 : 1200,
        height: window.innerWidth < 768 ? 800 : 1200,
        filename: `Korelasyon_Matrisi_${STATE.period}_${new Date().toISOString().split('T')[0]}`
    });
    
    // Filigranı Geri Çek (Kullanıcının Arayüzünü Bozmama)
    setTimeout(() => {
        Plotly.relayout(DOM.heatmapChart, { annotations: currentAnnots });
    }, 200);
    log('PNG olarak indirildi.', 'log');
});

const btnInfo = document.getElementById('btn-info');
if(btnInfo) {
    btnInfo.addEventListener('click', () => {
        const modal = document.getElementById('modal-info');
        if(modal) modal.classList.remove('hidden');
    });
}

// ═══ CANLI ALARM & İZLEME LİSTESİ (WATCHLIST) ═══
const ALARM_STATE = {
    alarms: [], // { id, pair, coin1, coin2, condition (lt/gt), threshold, triggered: false }
    audio: new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3'),
    intervalId: null
};

const domAlarmPairSelect = document.getElementById('alarm-pair-select');
const domAlarmConditionSelect = document.getElementById('alarm-condition-select');
const domAlarmThresholdInput = document.getElementById('alarm-threshold-input');
const domBtnAddAlarm = document.getElementById('btn-add-alarm');
const domAlarmWatchlist = document.getElementById('alarm-watchlist');
const domAlarmLiveIndicator = document.getElementById('alarm-live-indicator');
const domToastContainer = document.getElementById('toast-container');

function updateAlarmPairSelect() {
    if(!domAlarmPairSelect) return;
    domAlarmPairSelect.innerHTML = '<option value="">Çift Seçin...</option>';
    const coins = STATE.selectedCoins;
    for(let i=0; i<coins.length; i++) {
        for(let j=i+1; j<coins.length; j++) {
            const pair = `${coins[i]} ↔ ${coins[j]}`;
            domAlarmPairSelect.innerHTML += `<option value="${coins[i]}|${coins[j]}">${pair}</option>`;
        }
    }
}

function renderAlarms() {
    if(ALARM_STATE.alarms.length === 0) {
        domAlarmWatchlist.innerHTML = `<div style="padding:16px; text-align:center; color:var(--text-4); font-size:0.78rem;">t('alarm_empty'). Yukarıdan ilk alarmınızı ekleyin.</div>`;
        domAlarmLiveIndicator.style.display = 'none';
        return;
    }
    
    domAlarmWatchlist.innerHTML = '';
    ALARM_STATE.alarms.forEach(alarm => {
        const el = document.createElement('div');
        el.className = 'watchlist-item';
        
        const condText = alarm.condition === 'lt' ? '<' : '>';
        const statusHTML = alarm.triggered ? 
            `<span class="wl-status triggered">🚨 Çaldı</span>` : 
            `<span class="wl-status active"><span class="live-dot" style="width:5px;height:5px;background:currentColor;border-radius:50%;display:inline-block;animation:pulse 1.5s infinite"></span> Aktif</span>`;
            
        el.innerHTML = `
            <div>
                <div class="wl-pair">${alarm.pair}</div>
                <div class="wl-condition">${condText} ${alarm.threshold.toFixed(2)} olursa tetikle</div>
            </div>
            <div style="display:flex; align-items:center; gap:12px">
                ${statusHTML}
                <button class="wl-delete" data-id="${alarm.id}" title="Alarmı Sil">✕</button>
            </div>
        `;
        domAlarmWatchlist.appendChild(el);
    });
    
    document.querySelectorAll('.wl-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            ALARM_STATE.alarms = ALARM_STATE.alarms.filter(a => a.id !== id);
            renderAlarms();
            manageLiveScanner();
        });
    });
    
    domAlarmLiveIndicator.style.display = ALARM_STATE.alarms.some(a => !a.triggered) ? 'inline-flex' : 'none';
}

function appendToast(title, body, isAlert = false) {
    const toast = document.createElement('div');
    toast.className = `notif-toast ${isAlert ? 'alert-type' : ''}`;
    toast.innerHTML = `
        <div class="toast-icon">${isAlert ? '🚨' : '🔔'}</div>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-msg">${body}</div>
        </div>
        <button class="toast-close">✕</button>
    `;
    
    domToastContainer.appendChild(toast);
    
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.style.animation = 'toastSlideOut 0.4s ease-in forwards';
        setTimeout(() => toast.remove(), 400);
    });
    
    setTimeout(() => {
        if(toast.parentElement) {
            toast.style.animation = 'toastSlideOut 0.4s ease-in forwards';
            setTimeout(() => toast.remove(), 400);
        }
    }, 6000);
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

if(domBtnAddAlarm) {
    domBtnAddAlarm.addEventListener('click', () => {
        const pairVal = domAlarmPairSelect.value;
        if(!pairVal) return alert('Lütfen bir coin çifti seçin.');
        
        requestNotificationPermission();
        
        const [coin1, coin2] = pairVal.split('|');
        const condition = domAlarmConditionSelect.value;
        const threshold = parseFloat(domAlarmThresholdInput.value);
        
        ALARM_STATE.alarms.push({
            id: Date.now(),
            pair: `${coin1} ↔ ${coin2}`,
            coin1,
            coin2,
            condition,
            threshold,
            triggered: false
        });
        
        renderAlarms();
        manageLiveScanner();
        
        appendToast("Alarm Kuruldu", `${coin1} ↔ ${coin2} korelasyonu arka planda izleniyor. Ekran kilitli olsa bile sesli bildirim alacaksınız.`);
    });
}

async function checkAlarms() {
    const activeAlarms = ALARM_STATE.alarms.filter(a => !a.triggered);
    if(activeAlarms.length === 0) return;
    
    // Yalnızca alarm kurulan coinleri çekelim
    const coinsToFetch = new Set();
    activeAlarms.forEach(a => { coinsToFetch.add(a.coin1); coinsToFetch.add(a.coin2); });
    
    try {
        const prices = {};
        for(let coin of coinsToFetch) {
            prices[coin] = await fetchCoinPrices(coin);
        }
        
        activeAlarms.forEach(alarm => {
            if(!prices[alarm.coin1] || !prices[alarm.coin2]) return;
            const currentCorr = pearson(prices[alarm.coin1], prices[alarm.coin2]);
            
            let isTriggered = false;
            if(alarm.condition === 'lt' && currentCorr < alarm.threshold) isTriggered = true;
            if(alarm.condition === 'gt' && currentCorr > alarm.threshold) isTriggered = true;
            
            if(isTriggered) {
                alarm.triggered = true;
                
                // Ses Çal
                ALARM_STATE.audio.play().catch(e => console.log("Audio play blocked by browser."));
                
                // HTML Toast
                appendToast("🚨 Fırsat Radarı", `${alarm.pair} bağı ${alarm.condition === 'lt'?'koptu':'güçlendi'}! Mevcut Korelasyon: ${currentCorr.toFixed(2)} (${alarm.condition==='lt'?'<':'>'} ${alarm.threshold})`, true);
                
                // Browser Notification
                if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification("CryptoCorr Alarmı 🚨", {
                        body: `${alarm.pair} korelasyonu ${currentCorr.toFixed(2)} seviyesine geldi!`,
                        icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                    });
                }
            }
        });
        
        // Eğer durumu değişen olduysa UI güncelle
        if(activeAlarms.some(a => a.triggered)) {
            renderAlarms();
            manageLiveScanner();
            // Ayrıca ana analiz paneli de açıkken grafiği yenilesin:
            if(!STATE.isAnalyzing) runAnalysis();
        }
        
    } catch(e) {
        console.error("Alarm checker hatası:", e);
    }
}

function manageLiveScanner() {
    const hasActive = ALARM_STATE.alarms.some(a => !a.triggered);
    if(hasActive && !ALARM_STATE.intervalId) {
        // Her 2 dakikada bir kontrol eder.
        ALARM_STATE.intervalId = setInterval(checkAlarms, 120000); 
    } else if(!hasActive && ALARM_STATE.intervalId) {
        clearInterval(ALARM_STATE.intervalId);
        ALARM_STATE.intervalId = null;
    }
}
