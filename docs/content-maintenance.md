# 公式ガイドの更新基準

確認日: 2026-10-23。DSF本体 main 1bdca31 と現在の実装を参照。

- src/content/guides/{ja,en}/*.md: 詳細記事。各言語で同じslugを持つ。
- src/data/guide.ts: 並び順、タイトル、説明、トップカード。
- src/pages/[lang]/[slug].astro: Markdownを描画し、見出しから目次を生成。
- src/assets/horizon-mark.svg: 本体 assets/brand/horizon-mark.svg の承認済みDマーク。そのまま使用。
- public/favicon.svg: 本体 public/studio-icon.svg を使用。

## 確認元

- docs/product-terminology.md: Horizon、Studio、Reader、Read/Reads、表示方法。
- docs/file-format-spec.md: 新拡張子、旧形式入力、固定テキスト、Writing形式。過去の実装段階の記録を現状と取り違えない。
- docs/cloud-save-contract.md: 通常保存、クラウドと端末内コピー、競合時の境界。
- js/i18n-studio.js、js/works.js: 現行ダッシュボード・発行・リーズ・公開状態。
- docs/shared-menu-language-policy.md: メニュー言語と本文言語の区別。
- js/viewer.js、js/platform-menu.js: Readerの入力形式・ナビゲーション。
- scripts/writing-w1/reader-writing.mjs、js/reader-writing-bridge.js、js/reader-writing-offline.js、scripts/verify-writing-tools-dock.mjs: Writingの現在の道具・右端収納・終了・端末内下書きと準備。古い上下ドロワーは案内しない。
- docs/dsf-writing-file-save-20261017.md: 編集用/共有用のファイルとOS側の保存確認。

## 公開記事の原則

本体の機能を改変せず案内する。開発履歴や内部フラグを操作手順に混ぜない。端末保存・クラウド保存・発行・公開を区別する。料金や期限の固定値は本体の現行表示を案内し、未確認の値を載せない。iPhone実機や完全なオフライン動作の保証をローカル/ステージング記録だけから書かない。記事のリンク・目次・日英切替・狭い画面と本文の可読性を検証する。
