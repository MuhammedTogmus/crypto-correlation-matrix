# 📈 Crypto Correlation Matrix Dashboard

A real-time Data Analytics Dashboard that fetches historical cryptocurrency data via Binance API. It dynamically calculates the Pearson Correlation Coefficient using matrix algorithms and visualizes the statistical dependencies as an interactive Heatmap. 

Built to demonstrate data-driven decision-making and applied mathematics in financial markets.

## 🧠 Mathematical Foundation (Pearson Correlation)
The core algorithm calculates the linear correlation between two cryptocurrency price arrays using the following statistical formula:

$$r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}$$

## 🛠️ Technologies & Algorithms
* **Data Fetching:** Asynchronous REST API integration (Binance Public API).
* **Data Processing:** JavaScript array manipulation, matrix mapping, and statistical algorithms.
* **Visualization:** Plotly.js for rendering the interactive Heatmap.
* **UI/UX:** Dark mode, responsive design, financial terminal aesthetics.

## 🚀 How it Works
1. Fetches the last 30 days of daily closing prices for major volume coins.
2. Constructs a correlation matrix.
3. Renders a color-coded heatmap where `1` indicates perfect positive correlation and `-1` indicates perfect negative correlation.
<img width="1919" height="908" alt="Ekran görüntüsü 2026-03-28 143250" src="https://github.com/user-attachments/assets/93eda792-d9cd-4c4b-83de-07a513d776f6" />
<img width="1907" height="1079" alt="Ekran görüntüsü 2026-03-28 143953" src="https://github.com/user-attachments/assets/82e1edda-2170-4748-9556-ea81b3f7cc1b" />
<img width="1919" height="1079" alt="Ekran görüntüsü 2026-03-28 143943" src="https://github.com/user-attachments/assets/65c0442c-22db-4d2b-993f-dbaf30d82c87" />
<img width="1919" height="1079" alt="Ekran görüntüsü 2026-03-28 143933" src="https://github.com/user-attachments/assets/d552c6d3-a637-40a2-94ff-fbfcf8e983e7" />
