---
title: "adb系メモ"
date: 2022-05-24T17:06:23+09:00
draft: false
---

## 画面回転ボタンを無効化する方法

`adb shell settings put secure show_rotation_suggestions 0` 

元に戻す方法

`adb shell settings put secure show_rotation_suggestions 1`