---
title: "Lazygitメモ"
date: 2022-05-25T04:41:10+09:00
draft: false
---

## インストール方法(scoopの場合。詳細は[ここ](https://github.com/jesseduffield/lazygit#table-of-contents))

```text
# Add the extras bucket
scoop bucket add extras

# Install lazygit
scoop install lazygit
```

## 操作方法

`lazygit`で起動

hl で画面切り替え、 jk で画面内移動

n を押して新規ブランチの作成

いらなくなったブランチは、他のブランチ選択した状態で スペース を押してチェックアウトした後、消したいブランチを選択して d をおして削除

Filesを選択中にコミットしたいファイルを選択して スペース を押すとファイルをコミット対象にできる

Filesを選択して c を押下すると、コミットメッセージを打ち込む画面が表示される。メッセージを打ち込んで Enter を押すとコミットできる

マージは、マージしたいブランチを選択して M を押すとできる

プッシュするには、ブランチを選択した状態で P を押すとプッシュできる

スタッシュは、Filesを選択している状態で s を押すとスタッシュ名の入力画面が出て入力後 Enter でできる