# 観測者不在の街

## 作品概要
白依市公式サイトを探索し、消された少女「有坂燈」の痕跡を追うWeb探索型ARG。

## 起動方法
```bash
npm install
npm run dev
```

## ビルド方法
```bash
npm run build
```

## 主要ルート一覧
`/` `/search` `/faq` `/contact` `/archive/old-safety-2024` `/data/a17` `/support/cognitive-stability/04-b` `/staff/mashiba-note` `/logs/erase-2213` `/facility/basement-b/a17` `/oracle/dialogue-12` `/mio/chat` `/mio/final` `/final/name` `/final/choice` `/ending/public` `/ending/sisters` `/ending/stability`

## 進行確認用キーワード
有坂燈 / A-17 / 04-B / M-04 / 真柴 / B棟 / ORACLE-M / 成瀬

## 画像差し替え
`public/images` 配下に指定ファイル名で配置。未配置時はCSSプレースホルダー表示。

## localStorageリセット
ブラウザDevToolsで `localStorage.removeItem('oracleM.progress')` を実行。

## 制作上の注意
- localStorageで進行管理
- 静的エクスポート可能構成
- 実メール送信やログインなし
