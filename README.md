# DSF Horizon Official Guide

Astroで静的HTMLを生成するDSF公式ガイド。CMS・データベースは使用しません。

## 構成

- / → /ja/（日本語トップ）
- /ja/・/en/：独自デザインのトップページ
- start/：DSF Horizonを知る
- read/：リードを読む
- writing/：書き込みを残す
- create/：リードをつくる
- publish/：リードを公開する
- reference/：ファイルと仕様

記事本文は src/content/guides/{ja,en}/*.md、入口の情報は src/data/guide.ts、共通画面は src/layouts/GuideLayout.astro、見た目は src/styles/guide.css で管理します。Astro Content Collectionsで本文を管理し、目次を自動生成します。更新基準と本体の確認元は docs/content-maintenance.md を参照。日英の同じページ間で言語を切り替えられます。

## 開発

- npm ci
- npm run dev -- --host 127.0.0.1
- npm run build
- npm run preview -- --host 127.0.0.1

GitHub Actionsはmaster/mainへのpushでCloudflare Pagesに公開します。本番公開時は変更をレビュー・検証してからコミットし、masterへ反映します。

## CMS廃止

Sveltia管理画面、認証Workerのソース・CIジョブ、認証URL注入処理を削除しました。Cloudflare上の既存WorkerやGitHub OAuth App、Secrets/Variablesは変更していません。不要になったクラウド側の認証資源は別途整理できます。

## 用語・仕様の確認元（2026-10-23）

DSF本体 main（1bdca31）の docs/product-terminology.md、docs/file-format-spec.md、docs/dsf-writing-spec.md と最新UIの表示に合わせています。公開環境への反映状況を保証する記載ではありません。

- Horizon：リードを探す・公開する・集めるプラットフォーム
- Studio：原稿の作成・編集／Reader：閲覧
- リード（Read）は1件、リーズ（Reads）は複数や一覧
- 新規出力は.dsfr（Read）と.dsfp（Project）。Writingの編集用・共有用はどちらも.dsfr
- 画像だけに限定せず、配置・組版を確定した固定テキストの配信も説明
