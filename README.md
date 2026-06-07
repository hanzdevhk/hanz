# Hanz Personal Site

這個網站是純 HTML / CSS / JavaScript 製作，不需要 build，可直接部署到 GitHub Pages。

## 檔案內容

- `index.html`：主頁面
- `styles.css`：樣式
- `script.js`：互動效果
- `gallery.html`：高清攝影作品圖庫
- `gallery.css`：圖庫專用樣式
- `gallery.js`：圖庫載入、篩選與燈箱功能
- `assets/gallery/`：圖庫用 4K WebP 展示圖片
- `assets/gallery/thumbs/`：圖庫快速載入縮圖
- `brand-icon.png`：網站 icon / 品牌圖示
- `DSC02436-23.jpg`：攝影區主圖
- `.nojekyll`：讓 GitHub Pages 直接以靜態頁面方式部署

## GitHub Pages 部署

1. 建立一個 GitHub repository
2. 把整個資料夾內的所有檔案上傳到 repo 根目錄
3. 到 `Settings > Pages`
4. Source 選 `Deploy from a branch`
5. Branch 選 `main`，資料夾選 `/(root)`
6. 儲存後等待幾分鐘，網站就會上線

## 備註

右下角音樂按鈕播放 `assets/audio/utsukushiki-mono.mp3`。

## 新增 Gallery 相片

將原圖放進 `assets/photos/`，再更新 `gallery.js` 的作品清單並產生：

- 長邊 3840px 的 WebP 展示版本
- 長邊 1200px 的 WebP 縮圖版本

原圖保留作攝影存檔，網站只部署壓縮後的展示版本，以免訪客一次下載數百 MB。
