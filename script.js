/* CryptoCorr v4 - 10x10 Matris, 5 Renk Teması, Coin Swap */

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
    btnConfirmIncrease: document.getElementById('btn-confirm-increase')
};

// Gecici Modal State
const MODAL_STATE = {
    tempTargetSize: 0,
    tempReduceSelection: [],
    tempIncreaseSelection: []
};

// ═══ Yardımcılar ═══
function log(m, t = 'log') { const ts = new Date().toLocaleTimeString('tr-TR'); console[t](`[CryptoCorr ${ts}]`, m); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function updateClock() { DOM.navTime.textContent = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }); }
function fmtVol(v) { return v >= 1e9 ? (v/1e9).toFixed(1)+'B' : v >= 1e6 ? (v/1e6).toFixed(0)+'M' : v.toFixed(0); }

// ═══ Binance API: Top 200 ═══
async function fetchTop200() {
    log('Top 200 coin çekiliyor...');
    DOM.initialLoaderProgress.style.width = '20%';
    DOM.initialLoaderSubtext.textContent = 'Piyasa verileri alınıyor...';
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
    DOM.initialLoaderProgress.style.width = '90%';
    log(`${coins.length} coin alındı`);
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
        if (STATE.selectedCoins.length >= STATE.matrixSize && !STATE.selectedCoins.includes(coin.symbol)) el.classList.add('disabled');
        el.innerHTML = `<span class="coin-rank">#${coin.rank}</span><span class="coin-symbol">${coin.symbol}</span><span class="coin-vol">$${fmtVol(coin.quoteVolume)}</span><span class="coin-check">✓</span>`;
        el.addEventListener('click', () => toggleCoin(coin.symbol));
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
    DOM.selectionCounter.textContent = `${c} / ${m} seçildi`;
    DOM.selectionCounter.className = 'counter' + (c === m ? ' complete' : '');
    DOM.displayMatrix.textContent = `${m}×${m}`;
    DOM.btnAnalyze.disabled = c !== m;
    renderChips();
    DOM.coinListContainer.querySelectorAll('.coin-item').forEach(el => {
        const s = el.dataset.symbol, sel = STATE.selectedCoins.includes(s);
        el.classList.toggle('selected', sel);
        el.classList.toggle('disabled', c >= m && !sel);
    });
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
    for(let i=0;i<n;i++) for(let j=0;j<n;j++) {
        annots.push({
            x:coins[j],y:coins[i],text:matrix[i][j].toFixed(2),showarrow:false,
            font:{family:'Space Grotesk',size:n<=5?15:(n<=7?12:10),
                  color:STATE.theme==='classic'?(Math.abs(matrix[i][j])>0.3?'#263238':'#78909C'):(Math.abs(matrix[i][j])>0.5?'#eaecef':'#848e9c'),weight:700}
        });
    }
    Plotly.newPlot(DOM.heatmapChart, [{
        z:matrix,x:coins,y:coins,type:'heatmap',colorscale:theme.scale,
        zmin:-1,zmax:1,showscale:true,hoverongaps:false,
        hovertemplate:'<b>%{y} ↔ %{x}</b><br>r = <b>%{z:.4f}</b><extra></extra>',
        colorbar:{title:{text:'r',font:{family:'Space Grotesk',size:12,color:'#848e9c'},side:'right'},
            tickfont:{family:'Space Grotesk',size:10,color:'#848e9c'},
            tickvals:[-1,-.5,0,.5,1],ticktext:['-1.0','-0.5','0.0','+0.5','+1.0'],
            len:.85,thickness:10,outlinewidth:0,bgcolor:'rgba(0,0,0,0)'}
    }], {
        annotations:annots,
        xaxis:{side:'bottom',tickfont:{family:'Space Grotesk',size:n<=6?13:11,color:'#eaecef',weight:700},tickangle:0,gridcolor:'rgba(43,49,57,0.5)',linecolor:'#2b3139'},
        yaxis:{autorange:'reversed',tickfont:{family:'Space Grotesk',size:n<=6?13:11,color:'#eaecef',weight:700},gridcolor:'rgba(43,49,57,0.5)',linecolor:'#2b3139'},
        paper_bgcolor:'rgba(0,0,0,0)',plot_bgcolor:'rgba(0,0,0,0)',
        margin:{l:50,r:60,t:16,b:40},
        height:n<=5?420:(n<=7?480:(n<=8?540:600)),
        font:{family:'Inter'}
    }, {responsive:true,displayModeBar:false});
    DOM.scaleGradient.style.background = theme.gradient;
    DOM.resultCoinsLabel.textContent = coins.join(' • ') + ` — Son ${CONFIG.periodMap[STATE.period].label}`;
}

// ═══ İstatistikler (sağ panel) ═══
function renderStats(matrix) {
    const coins = STATE.selectedCoins, pairs = [];
    for(let i=0;i<coins.length;i++) for(let j=i+1;j<coins.length;j++) pairs.push({pair:`${coins[i]} ↔ ${coins[j]}`,value:matrix[i][j]});
    pairs.sort((a,b) => Math.abs(b.value)-Math.abs(a.value));
    DOM.statsGrid.innerHTML = '';
    pairs.forEach(({pair,value}) => {
        const el=document.createElement('div');el.className='stat-card';
        let cls=value>0.3?'positive':value<-0.3?'negative':'neutral';
        el.innerHTML=`<span class="stat-pair">${pair}</span><span class="stat-value ${cls}">${value>0?'+':''}${value.toFixed(4)}</span>`;
        DOM.statsGrid.appendChild(el);
    });
}

// ═══ Coin Swap (alt panel) ═══
function renderSwapGrid(filter = '') {
    DOM.swapGrid.innerHTML = '';
    const q = filter.trim().toUpperCase();
    const remaining = STATE.allCoins.filter(c => !STATE.selectedCoins.includes(c.symbol) && (!q || c.symbol.includes(q)));
    remaining.slice(0, 100).forEach(coin => {
        const el = document.createElement('div');
        el.className = 'swap-coin';
        el.innerHTML = `<span class="sc-rank">#${coin.rank}</span><span class="sc-sym">${coin.symbol}</span>`;
        el.addEventListener('click', () => openSwapModal(coin.symbol));
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
    // Yeniden analiz
    await runAnalysis();
}

// ═══ Renk teması değiştir ═══
function setTheme(themeName) {
    STATE.theme = themeName;
    document.querySelectorAll('.theme-dot').forEach(d => d.classList.toggle('active', d.dataset.theme === themeName));
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
}
function showAnalysisLoader() {
    DOM.coinSelector.classList.add('hidden');DOM.resultsSection.classList.add('hidden');
    DOM.analysisLoader.classList.remove('hidden');
    DOM.loaderProgress.style.width='0%';DOM.loaderText.textContent='Veriler Analiz Ediliyor';
    DOM.navStatus.className='nav-status';DOM.navStatus.innerHTML='<span class="status-dot"></span>Analiz...';
}
function showResults() {
    DOM.analysisLoader.classList.add('hidden');DOM.coinSelector.classList.add('hidden');
    DOM.resultsSection.classList.remove('hidden');
    DOM.displayMatrix.textContent=`${STATE.selectedCoins.length}×${STATE.selectedCoins.length}`;
    DOM.displayPeriod.textContent=CONFIG.periodMap[STATE.period].label;
    DOM.navStatus.className='nav-status live';DOM.navStatus.innerHTML='<span class="status-dot"></span>Veriler Güncel';
    renderSwapGrid();
}

// ═══ Ana Akış ═══
async function initApp() {
    try {
        STATE.allCoins = await fetchTop200();
        DOM.initialLoaderProgress.style.width='100%';DOM.initialLoaderText.textContent='Hazır';
        await sleep(300);
        renderCoinList(STATE.allCoins); renderChips(); updateSelectionUI(); showSelector();
    } catch(e) {
        log(`Hata: ${e.message}`,'error');
        DOM.initialLoaderText.textContent='Bağlantı Hatası';DOM.initialLoaderSubtext.textContent='5s sonra tekrar...';
        setTimeout(initApp,5000);
    }
}

async function runAnalysis() {
    if(STATE.isAnalyzing) return; STATE.isAnalyzing=true;
    try {
        showAnalysisLoader(); await sleep(150);
        const data = await fetchSelectedData();
        STATE.lastPriceData = data;
        DOM.loaderProgress.style.width='65%';DOM.loaderText.textContent='Korelasyon Hesaplanıyor';
        await sleep(100);
        const matrix = buildMatrix(data);
        DOM.loaderProgress.style.width='80%';DOM.loaderText.textContent='Grafik Oluşturuluyor';
        await sleep(100);
        renderHeatmap(matrix); renderStats(matrix);
        DOM.loaderProgress.style.width='100%';DOM.loaderText.textContent='Tamamlandı';
        await sleep(300); showResults();
    } catch(e) {
        log(`Hata: ${e.message}`,'error');
        DOM.loaderText.textContent='Başarısız';DOM.loaderSubtext.textContent=e.message;
        await sleep(2000); showSelector();
    } finally { STATE.isAnalyzing=false; }
}

// ═══ Event Listeners ═══
updateClock(); setInterval(updateClock,30000);

document.querySelectorAll('#matrix-toggles .toggle-btn').forEach(b => b.addEventListener('click', () => setMatrixSize(parseInt(b.dataset.size))));
document.querySelectorAll('.period-btn').forEach(b => b.addEventListener('click', () => {
    STATE.period=b.dataset.period;
    document.querySelectorAll('.period-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    DOM.displayPeriod.textContent=CONFIG.periodMap[STATE.period].label;
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
    DOM.modalMatrixSize.classList.remove('hidden');
});
// Periyot modalını aç
DOM.cardPeriod.addEventListener('click', () => {
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
             renderHeatmap(m); renderStats(m);
             DOM.displayMatrix.textContent = `${STATE.matrixSize}×${STATE.matrixSize}`;
             renderSwapGrid();
             showResults();
         } catch(e) {
             log(`Veri hatası: ${e.message}`, 'error');
         }
    }
});
