---
title: "Scoopのこと"
date: 2022-04-16T17:19:38+09:00
draft: false
---

## scoopの導入方法

```text
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```
でインストール

## bucketの追加
```text
scoop bucket add extras
scoop bucket add versions
```

## 僕の入れてるものを一括で入れるコマンド

```text
scoop install git hugo-extended sudo go python nodejs16 gcc
```

## update方法
```text
scoop update *
```