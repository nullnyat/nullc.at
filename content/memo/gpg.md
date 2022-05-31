---
title: "署名付きcommitする方法"
date: 2022-04-24T15:38:24+09:00
draft: false
---

`gpg --full-gen-key --expert`でkeyを発行

`gpg -a --export {{keyID}}`でエクスポート

表示されたkeyをcopyしてgithubにペースト

`git config --global gpg.program gpg`で署名するのにインストールしたGPGを指定
(WSLの場合`/mnt/c/Program Files (x86)/GnuPG/bin/gpg.exe`)

`git config --global user.signingkey {{keyID}}`でIDの指定

すべてのコミットなどに署名をつけるためにした二つのコマンドを実行

```text
git config --global commit.gpgsign true
git config --global tag.gpgsign true
```
