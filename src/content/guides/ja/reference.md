## 拡張子と役割

| 拡張子 | 名前 | 用途 |
| --- | --- | --- |
| .dsfr | DSF Read | Readerで閲覧・配布。Writingの保存にも使用 |
| .dsfp | DSF Project | Studioで原稿を作成・再編集 |
| .dsf / .dsp | 旧拡張子 | 対応する既存形式の入力として受付 |

新規出力には.dsfrと.dsfpを使います。旧.dspの原稿を保存する場合は、新しい.dsfpの保存先を選び、元のファイルを残してください。

<figure class="guide-screenshot">
  <a href="/screenshots/ja-press-actions.png" aria-label="スクリーンショットを拡大"><img src="/screenshots/ja-press-actions.png" alt="プレスの配布用DSFRファイルの保存操作" width="281" height="310" loading="lazy" decoding="async" /></a>
  <figcaption>配布用ファイルを書き出す入口。画面内のDSP／DSF表記と、新拡張子.dsfp／.dsfrを区別してください。 <a href="/screenshots/ja-press-actions.png">画像を拡大</a></figcaption>
</figure>

## DSF Read（.dsfr）

読むためのページ、言語、表示に必要な情報や素材をまとめたファイルです。作者の編集画面の設定をそのまま渡す原稿ファイルとは区別します。

画像ページはWebPなどで、テキスト中心のページは配置を確定した固定テキストで表現できます。固定テキストでは、制作側で決めた改行・行や列・座標を使います。

Horizonのオンライン配信と、持ち出せる.dsfrでは、素材やフォントの供給方法が異なる場合があります。オンラインで開けたことと、配布用ファイルが端末に保存できたことは別です。

## DSF Project（.dsfp）

Studioで編集を続けるプロジェクトです。原稿、編集に必要な情報、元の画像などを保持します。バックアップや、別の端末で編集を再開する用途に使います。

.dsfpを開いて編集し直すことと、.dsfrへWritingで書き込むことは異なります。作者の原稿を変更したい場合は.dsfpを使います。

## Writingの編集用と共有用

両方とも拡張子は.dsfrですが、含める書き込み情報の役割が異なります。

| 種類 | 書き込みの表示 | Writingの再編集 | 履歴 |
| --- | --- | --- | --- |
| 編集用 | できる | 続けられる | 復元用の履歴を含む |
| 共有用 | できる | ロックされる | 編集履歴は含めない |

共有用ファイル名には、編集用と区別するための-sharedが付く場合があります。履歴を意図せず渡さないよう、共有前に保存する種類を確認します。

<figure class="guide-screenshot">
  <a href="/screenshots/ja-writing-export.png" aria-label="スクリーンショットを拡大"><img src="/screenshots/ja-writing-export.png" alt="Writingの編集用DSFを作成と共有用DSFを作成の2つのボタン" width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Writingでは編集用と共有用を選びます。どちらも保存する拡張子は.dsfrです。 <a href="/screenshots/ja-writing-export.png">画像を拡大</a></figcaption>
</figure>

## ZIPコンテナの中身

DSFRとDSFPはZIPコンテナです。形式に応じたJSONと、ページ画像、フォントなどの素材をまとめます。manifest.json、meta.json、content.jsonなどが、ページ構成や言語・表示情報を表します。

全世代で同じファイル一覧ではありません。Writingの原本・書き込み・履歴の分離など、対応する形式ごとに構成は異なります。拡張子だけで内部のバージョンは判断できません。

## 9:16と固定レイアウト

基本の論理ページは360×640で、比率は9:16です。画像ページの配信ラスタは1080×1920以上を最低ラインとします。これらはページ設計や出力の基準で、端末の物理サイズを固定する指定ではありません。

Flow原稿も、配信時には改行やページ境界を確定します。Readerでの画面サイズの違いによって再改行・再ページ化する方式ではありません。

## 旧ファイルを使うとき

1. 元のファイルを残したまま、対応するアプリで開きます。
2. ページ、言語、原稿の状態を確認します。
3. 新しい拡張子で書き出し、開き直して確認します。

拡張子を手で変更するだけでは、内部形式の変換や機能の追加にはなりません。対応していないバージョンや壊れたファイルは、名前を変えても開けません。

## 保存したファイルの確認

- 保存先に目的のファイルがあるか確認します。
- .dsfrと.dsfp、Writingの編集用と共有用を区別します。
- 配布する.dsfrはReaderで、再編集する.dsfpはStudioで開き直します。
- 共有やダウンロードのボタンを押したことだけで、OS上の保存完了とは考えず、実際の保存先を確認します。
