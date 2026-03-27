/* ═══════════════════════════════════════════════════════════════
   CRYPTO CORRELATION TERMINAL - ANA JAVASCRIPT DOSYASI
   ─────────────────────────────────────────────────────────────
   Binance API üzerinden en hacimli coinlerin son 30 günlük
   kapanış fiyatlarını çeker, Pearson korelasyon matrisini
   hesaplar ve Plotly.js ile ısı haritası olarak görselleştirir.
   ═══════════════════════════════════════════════════════════════ */

// ─── Yapılandırma Sabitleri ───
const CONFIG = {
    // Analiz edilecek coin sembolleri (Binance USDT çiftleri)
    coins: ['BTC', 'ETH', 'BNB', 'SOL', 'XRP'],
    // Son kaç günlük veri çekilecek
    days: 30,
    // Binance API temel adresi
    baseUrl: 'https://api.binance.com/api/v3',
    // Kline (mum grafik) aralığı: 1 günlük
    interval: '1d'
};

// ─── DOM Referansları ───
const DOM = {
    loaderContainer: document.getElementById('loader-container'),
    loaderText: document.getElementById('loader-text'),
    loaderSubtext: document.getElementById('loader-subtext'),
    loaderProgress: document.getElementById('loader-progress'),
    heatmapSection: document.getElementById('heatmap-section'),
    heatmapChart: document.getElementById('heatmap-chart'),
    statsSection: document.getElementById('stats-section'),
    statsGrid: document.getElementById('stats-grid'),
    statusBadge: document.getElementById('status-badge'),
    consoleBody: document.getElementById('console-body'),
    consoleStatus: document.getElementById('console-status'),
    headerTime: document.getElementById('header-time'),
    headerDate: document.getElementById('header-date'),
    coinCount: document.getElementById('coin-count'),
    dataPeriod: document.getElementById('data-period'),
    footerStatus: document.getElementById('footer-status'),
    btnRefresh: document.getElementById('btn-refresh')
};

// ═══════════════════════════════════════════════
// BÖLÜM 1: Yardımcı Fonksiyonlar
// ═══════════════════════════════════════════════

/**
 * Konsol paneline log satırı ekler
 * @param {string} message - Gösterilecek mesaj
 * @param {string} type - Mesaj tipi: 'info' | 'success' | 'error' | 'warn'
 */
function logToConsole(message, type = '') {
    const line = document.createElement('p');
    line.className = `console-line ${type}`;
    const timestamp = new Date().toLocaleTimeString('tr-TR');
    line.textContent = `[${timestamp}] ${message}`;
    DOM.consoleBody.appendChild(line);
    // Otomatik en alta kaydır
    DOM.consoleBody.scrollTop = DOM.consoleBody.scrollHeight;
}

/**
 * Yükleme ilerleme çubuğunu günceller
 * @param {number} percent - İlerleme yüzdesi (0-100)
 * @param {string} text - Ana yükleme metni
 * @param {string} subtext - Alt açıklama metni
 */
function updateProgress(percent, text, subtext) {
    DOM.loaderProgress.style.width = `${percent}%`;
    if (text) DOM.loaderText.textContent = text;
    if (subtext) DOM.loaderSubtext.textContent = subtext;
}

/**
 * Header saatini ve tarihini günceller
 */
function updateClock() {
    const now = new Date();
    DOM.headerTime.textContent = now.toLocaleTimeString('tr-TR');
    DOM.headerDate.textContent = now.toLocaleDateString('tr-TR');
}

/**
 * Belirli bir süre bekler (animasyon geçişleri için)
 * @param {number} ms - Milisaniye cinsinden bekleme süresi
 * @returns {Promise}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ═══════════════════════════════════════════════
// BÖLÜM 2: Binance API Veri Çekme
// ═══════════════════════════════════════════════

/**
 * Binance API'den belirli bir coinin günlük kapanış fiyatlarını çeker
 * Kline (candlestick) endpoint'i kullanılır
 * @param {string} symbol - Coin sembolü (ör: 'BTC')
 * @returns {Promise<number[]>} Kapanış fiyatları dizisi
 */
async function fetchCoinData(symbol) {
    // Binance'da çift formatı: BTCUSDT, ETHUSDT vb.
    const pair = `${symbol}USDT`;

    // API parametreleri
    const params = new URLSearchParams({
        symbol: pair,
        interval: CONFIG.interval,
        limit: CONFIG.days
    });

    const url = `${CONFIG.baseUrl}/klines?${params}`;

    logToConsole(`${symbol}/USDT verisi çekiliyor...`, 'info');

    try {
        const response = await fetch(url);

        // HTTP hata kontrolü
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        // Kline verisinin 4. indeksi kapanış fiyatıdır
        // [OpenTime, Open, High, Low, Close, Volume, ...]
        const closePrices = data.map(kline => parseFloat(kline[4]));

        logToConsole(`${symbol}/USDT: ${closePrices.length} günlük veri alındı ✓`, 'success');

        return closePrices;
    } catch (error) {
        logToConsole(`HATA: ${symbol} verisi alınamadı - ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Tüm coinlerin verilerini paralel olarak çeker
 * @returns {Promise<Object>} { coinAdı: [fiyatlar] } formatında obje
 */
async function fetchAllCoinData() {
    logToConsole('Binance API bağlantısı kuruluyor...', 'info');
    updateProgress(10, 'Canlı Veriler Çekiliyor...', 'Binance API bağlantısı kuruldu');

    const priceData = {};
    const totalCoins = CONFIG.coins.length;

    // Her coin için sırayla veri çek (rate limit koruması)
    for (let i = 0; i < totalCoins; i++) {
        const coin = CONFIG.coins[i];
        const progress = 10 + ((i + 1) / totalCoins) * 40;

        updateProgress(
            progress,
            'Canlı Veriler Çekiliyor...',
            `${coin}/USDT fiyat verisi alınıyor (${i + 1}/${totalCoins})`
        );

        priceData[coin] = await fetchCoinData(coin);
        // API rate limit'e takılmamak için kısa bekleme
        await sleep(200);
    }

    logToConsole(`Toplam ${totalCoins} coin verisi başarıyla alındı ✓`, 'success');
    return priceData;
}

// ═══════════════════════════════════════════════
// BÖLÜM 3: Pearson Korelasyon Hesaplama
// ═══════════════════════════════════════════════

/**
 * İki fiyat dizisi arasındaki Pearson Korelasyon Katsayısını hesaplar
 *
 * Formül: r = Σ((xi - x̄)(yi - ȳ)) / √(Σ(xi - x̄)² × Σ(yi - ȳ)²)
 *
 * @param {number[]} x - Birinci fiyat dizisi
 * @param {number[]} y - İkinci fiyat dizisi
 * @returns {number} Korelasyon katsayısı (-1 ile 1 arasında)
 */
function pearsonCorrelation(x, y) {
    const n = Math.min(x.length, y.length);

    // Ortalama hesapla
    let sumX = 0, sumY = 0;
    for (let i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
    }
    const meanX = sumX / n;
    const meanY = sumY / n;

    // Kovaryans ve standart sapma bileşenlerini hesapla
    let numerator = 0;    // Σ((xi - x̄)(yi - ȳ))
    let denomX = 0;       // Σ(xi - x̄)²
    let denomY = 0;       // Σ(yi - ȳ)²

    for (let i = 0; i < n; i++) {
        const dx = x[i] - meanX;
        const dy = y[i] - meanY;
        numerator += dx * dy;
        denomX += dx * dx;
        denomY += dy * dy;
    }

    // Payda sıfır kontrolü (sabit diziler için)
    const denominator = Math.sqrt(denomX * denomY);
    if (denominator === 0) return 0;

    // Korelasyon katsayısını döndür
    return numerator / denominator;
}

/**
 * Tüm coin çiftleri için korelasyon matrisini oluşturur
 * NxN boyutunda simetrik matris üretir
 *
 * @param {Object} priceData - { coinAdı: [fiyatlar] } formatında veri
 * @returns {number[][]} NxN korelasyon matrisi
 */
function buildCorrelationMatrix(priceData) {
    const coins = CONFIG.coins;
    const n = coins.length;
    const matrix = [];

    logToConsole('Pearson korelasyon matrisi hesaplanıyor...', 'info');
    updateProgress(60, 'Korelasyon Analizi Yapılıyor...', 'Pearson katsayıları hesaplanıyor');

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                // Bir coinin kendisiyle korelasyonu her zaman 1.0
                matrix[i][j] = 1.0;
            } else {
                // İki farklı coin arasındaki korelasyon
                matrix[i][j] = pearsonCorrelation(
                    priceData[coins[i]],
                    priceData[coins[j]]
                );
            }
            // Sonucu 4 ondalık basamağa yuvarla
            matrix[i][j] = Math.round(matrix[i][j] * 10000) / 10000;
        }
    }

    logToConsole(`${n}x${n} korelasyon matrisi oluşturuldu ✓`, 'success');
    return matrix;
}

// ═══════════════════════════════════════════════
// BÖLÜM 4: Plotly.js ile Isı Haritası Çizimi
// ═══════════════════════════════════════════════

/**
 * Korelasyon matrisini Plotly.js ısı haritası olarak render eder
 * @param {number[][]} matrix - NxN korelasyon matrisi
 */
function renderHeatmap(matrix) {
    logToConsole('Isı haritası render ediliyor...', 'info');
    updateProgress(80, 'Görselleştirme Oluşturuluyor...', 'Plotly.js ısı haritası çiziliyor');

    const coins = CONFIG.coins;

    // Her hücrenin üzerinde gösterilecek metin (korelasyon değeri)
    const annotations = [];
    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            annotations.push({
                x: coins[j],
                y: coins[i],
                text: matrix[i][j].toFixed(2),
                showarrow: false,
                font: {
                    family: 'JetBrains Mono, monospace',
                    size: 14,
                    color: Math.abs(matrix[i][j]) > 0.6 ? '#ffffff' : '#8892a8',
                    weight: 600
                }
            });
        }
    }

    // Plotly veri yapısı
    const plotData = [{
        z: matrix,
        x: coins,
        y: coins,
        type: 'heatmap',
        colorscale: [
            [0,    '#ff1744'],  // -1: Güçlü negatif (kırmızı)
            [0.15, '#d50000'],
            [0.3,  '#4a1942'],
            [0.45, '#1a1a2e'],  // 0 civarı: Nötr (koyu)
            [0.5,  '#0d1225'],
            [0.55, '#1a1a2e'],
            [0.7,  '#0d3b66'],
            [0.85, '#0077b6'],
            [1,    '#00e5ff']   // +1: Güçlü pozitif (neon cyan)
        ],
        zmin: -1,
        zmax: 1,
        showscale: true,
        hoverongaps: false,
        hovertemplate:
            '<b>%{y} ↔ %{x}</b><br>' +
            'Korelasyon: <b>%{z:.4f}</b><br>' +
            '<extra></extra>',
        colorbar: {
            title: {
                text: 'Korelasyon',
                font: { family: 'Inter, sans-serif', size: 12, color: '#8892a8' },
                side: 'right'
            },
            tickfont: { family: 'JetBrains Mono', size: 11, color: '#8892a8' },
            tickvals: [-1, -0.5, 0, 0.5, 1],
            ticktext: ['-1.0', '-0.5', '0.0', '+0.5', '+1.0'],
            len: 0.9,
            thickness: 14,
            outlinewidth: 0,
            bgcolor: 'rgba(0,0,0,0)'
        }
    }];

    // Plotly layout (düzen) ayarları
    const layout = {
        annotations: annotations,
        xaxis: {
            side: 'bottom',
            tickfont: { family: 'JetBrains Mono', size: 13, color: '#e4e8f1', weight: 600 },
            tickangle: 0,
            gridcolor: 'rgba(26,35,64,0.5)',
            linecolor: '#1a2340'
        },
        yaxis: {
            autorange: 'reversed',
            tickfont: { family: 'JetBrains Mono', size: 13, color: '#e4e8f1', weight: 600 },
            gridcolor: 'rgba(26,35,64,0.5)',
            linecolor: '#1a2340'
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin: { l: 70, r: 80, t: 30, b: 60 },
        height: 520,
        font: { family: 'Inter, sans-serif' }
    };

    // Plotly grafik yapılandırması
    const plotConfig = {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d'],
        displaylogo: false,
        toImageButtonOptions: {
            format: 'png',
            filename: 'kripto_korelasyon_haritasi',
            height: 800,
            width: 1200,
            scale: 2
        }
    };

    // Grafiği çiz
    Plotly.newPlot(DOM.heatmapChart, plotData, layout, plotConfig);

    logToConsole('Isı haritası başarıyla oluşturuldu ✓', 'success');
}

// ═══════════════════════════════════════════════
// BÖLÜM 5: İstatistik Kartları
// ═══════════════════════════════════════════════

/**
 * Korelasyon matrisinden önemli istatistikleri çıkarır ve
 * istatistik kartlarını oluşturur
 * @param {number[][]} matrix - NxN korelasyon matrisi
 */
function renderStatistics(matrix) {
    const coins = CONFIG.coins;
    const pairs = [];

    // Matrisin üst üçgeninden tüm benzersiz çiftleri çıkar
    for (let i = 0; i < coins.length; i++) {
        for (let j = i + 1; j < coins.length; j++) {
            pairs.push({
                pair: `${coins[i]} ↔ ${coins[j]}`,
                value: matrix[i][j]
            });
        }
    }

    // Korelasyon değerine göre sırala (en yüksekten en düşüğe)
    pairs.sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

    // İstatistik kartlarını oluştur
    DOM.statsGrid.innerHTML = '';
    pairs.forEach(({ pair, value }) => {
        const card = document.createElement('div');
        card.className = 'stat-card';

        // Değere göre renk sınıfını belirle
        let colorClass = 'neutral';
        if (value > 0.3) colorClass = 'positive';
        else if (value < -0.3) colorClass = 'negative';

        card.innerHTML = `
            <span class="stat-pair">${pair}</span>
            <span class="stat-value ${colorClass}">${value > 0 ? '+' : ''}${value.toFixed(4)}</span>
        `;
        DOM.statsGrid.appendChild(card);
    });

    logToConsole('İstatistik tablosu güncellendi ✓', 'success');
}

// ═══════════════════════════════════════════════
// BÖLÜM 6: UI Durum Yönetimi
// ═══════════════════════════════════════════════

/**
 * Yükleme tamamlandığında arayüzü günceller
 */
function showResults() {
    // Loader'ı gizle
    DOM.loaderContainer.classList.add('hidden');

    // Sonuç bölümlerini göster
    DOM.heatmapSection.classList.remove('hidden');
    DOM.statsSection.classList.remove('hidden');

    // Bilgi kartlarını güncelle
    DOM.coinCount.textContent = `${CONFIG.coins.length} Coin`;
    DOM.dataPeriod.textContent = `Son ${CONFIG.days} Gün`;

    // Header badge'ini canlı olarak işaretle
    DOM.statusBadge.className = 'header-badge live';
    DOM.statusBadge.innerHTML = '<span class="pulse-dot"></span>VERİLER GÜNCEL';

    // Footer durumunu güncelle
    DOM.footerStatus.textContent = '● Çevrimiçi';
    DOM.footerStatus.style.color = '#00e676';

    // Konsol durumunu güncelle
    DOM.consoleStatus.textContent = 'TAMAMLANDI';
}

/**
 * Hata durumunda arayüzü günceller
 * @param {Error} error - Oluşan hata
 */
function showError(error) {
    DOM.loaderText.textContent = 'Veri Alınamadı!';
    DOM.loaderText.style.color = '#ff1744';
    DOM.loaderSubtext.textContent = `Hata: ${error.message} — Yeniden denenecek...`;
    DOM.statusBadge.innerHTML = '<span class="pulse-dot"></span>BAĞLANTI HATASI';
    DOM.statusBadge.style.color = '#ff1744';
    DOM.consoleStatus.textContent = 'HATA';
    DOM.consoleStatus.style.color = '#ff1744';

    // 5 saniye sonra tekrar dene
    logToConsole('5 saniye sonra yeniden denenecek...', 'warn');
    setTimeout(() => {
        DOM.loaderText.style.color = '';
        initApp();
    }, 5000);
}

// ═══════════════════════════════════════════════
// BÖLÜM 7: Ana Uygulama Akışı
// ═══════════════════════════════════════════════

/**
 * Uygulamayı başlatır - tüm veri akışını yönetir
 */
async function initApp() {
    try {
        // Arayüzü sıfırla
        DOM.loaderContainer.classList.remove('hidden');
        DOM.heatmapSection.classList.add('hidden');
        DOM.statsSection.classList.add('hidden');
        updateProgress(0, 'Sistem Başlatılıyor...', 'Binance API\'ye bağlanılıyor');

        logToConsole('═══ Yeni analiz başlatıldı ═══', 'info');
        logToConsole(`Hedef coinler: ${CONFIG.coins.join(', ')}`, 'info');
        logToConsole(`Veri aralığı: Son ${CONFIG.days} gün`, 'info');

        await sleep(500);

        // Adım 1: Tüm coinlerin fiyat verilerini çek
        const priceData = await fetchAllCoinData();

        // Adım 2: Korelasyon matrisini hesapla
        updateProgress(55, 'Korelasyon Analizi Yapılıyor...', 'Pearson katsayıları hesaplanıyor');
        await sleep(300);
        const correlationMatrix = buildCorrelationMatrix(priceData);

        // Adım 3: Isı haritasını çiz
        updateProgress(75, 'Görselleştirme Oluşturuluyor...', 'Plotly.js ile render ediliyor');
        await sleep(300);
        renderHeatmap(correlationMatrix);

        // Adım 4: İstatistik kartlarını oluştur
        updateProgress(90, 'İstatistikler Hesaplanıyor...', 'Son dokunuşlar yapılıyor');
        await sleep(300);
        renderStatistics(correlationMatrix);

        // Adım 5: Tamamlandı
        updateProgress(100, 'Analiz Tamamlandı ✓', 'Tüm veriler güncel');
        logToConsole('═══ Analiz başarıyla tamamlandı ═══', 'success');

        await sleep(600);
        showResults();

    } catch (error) {
        logToConsole(`KRİTİK HATA: ${error.message}`, 'error');
        showError(error);
    }
}

// ─── Saat güncelleme döngüsü ───
updateClock();
setInterval(updateClock, 1000);

// ─── Yenile butonu olayı ───
DOM.btnRefresh.addEventListener('click', () => {
    logToConsole('Manuel yenileme tetiklendi', 'warn');
    initApp();
});

// ─── Uygulama başlangıcı ───
// Sayfa yüklendiğinde otomatik başlat
document.addEventListener('DOMContentLoaded', () => {
    logToConsole('DOM hazır, uygulama başlatılıyor...', 'info');
    initApp();
});
