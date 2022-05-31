---
title: "サイトをpwa対応したよ"
date: 2022-05-24T18:47:42+09:00
draft: false
---

### やり方...(というか僕がやったこと)

1. manifest.jsonを作成する

以下のようなjsonファイルを作りました

```json
{
  "name": "nullc.at",
  "short_name": "nullc.at",
  "theme_color": "#96CCE7",
  "background_color": "#13141C",
  "display": "standalone",
  "Scope": "https://nullc.at",
  "start_url": "/index.html",
  "icons": [
    {
      "src": "/pwa.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "splash_pages": null
}

```

このjsonファイルを`/assets/manifest.json`に配置する

2. manifest.jsonを読み込む

`head.html`に

```text
<link rel="manifest" href="{{ (resources.Get "manifest.json").RelPermalink }}">
```

を追加する

3. theme colorを追加する

僕はこれをしなくてどうしたらいいかわからなくて一日かかりました(あんぽんたん)

`head.html`に

```html
<meta name="theme-color" content="#96cce7">
```

を追加すると...できたぁあああああああああああああああ！！！！

はい

5. service worker対応

以下のようなjsファイルを作りました

```js
console.log("hello from service worker");

self.addEventListener('fetch', function(event) {

});
```

空だと動かないらしいのでfetchイベントをテキトーに追加するといい感じになる(らしい)ので追加します

5. service workerを登録する

bodyに

```html
<script>
  if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
</script>
```

を追加するといい感じに動くようになります。

### pwa対応ついでに...

pwaの画像をみじょみじょしてるときにfaviconもいい感じにするといいって教わったのでfaviconもいい感じにしちゃいましょう

[realfavicongenerator.net](https://realfavicongenerator.net/)を使っていい感じに自動生成してもらいましょう！！！

上のサイトで生成したファイルをrootフォルダに展開して

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#96cce7">
<meta name="msapplication-TileColor" content="#96cce7">
```

をheadに追加しましょう

それだけでいい感じになっちゃうのですごい

![pwa.png](/images/pwa.png)

ちゃんとできてる！やったね！
