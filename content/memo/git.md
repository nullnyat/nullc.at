---
title: "Git系のメモ"
date: 2022-05-24T23:00:22+09:00
draft: false
---

ユーザー名とメールアドレスの設定

```text
git config --global user.name "{{username}}"
git config --global user.email "{{email}}"
```

GPGの設定(詳細は[ここ](/memo/gpg))

```text
gpg --full-gen-key --expert
gpg -a --export {{keyID}}
git config --global gpg.program gpg
git config --global user.signingkey {{keyID}}
git config --global commit.gpgsign true
git config --global tag.gpgsign true
```

git設定の確認は

```text
git config --list
```

リポジトリの初期設定的なやつ

```text
git init
git remote add origin {{giturl}}
git branch -M master
git add .
git commit -m "Initial commit"
git push -u origin master
```

クローン方法

```text
git clone {{giturl}}
```

プッシュ

```text
git push origin {{branch name}}
```

ブランチを作成

```text
git branch {{branch name}}
```

ブランチ切り替え

```text
git checkout {{branch name}}
```

ブランチ作成&切り替え

```text
git checkout -b {{branch name}}
```

リモートから変更を取得する方法

```text
git pull
```

ファイルの登録

```text
git add {{file name}}
```

コミット

```text
git commit -m "{{commit message}}"
```

変更を確認する

```text
git status
```

add取り消し

```text
git reset HEAD {{file name}}
```

リモートとローカルのファイルの差分を確認する

```text
git diff {{file name}}
```

変更履歴をみる

```text
git log
```

指定したコミットの変更点を見る

```text
git show {{コミットのハッシュ値}}
```

コミットの取り消し

```text
git reset --hard HEAD^
```

オプション

- --hard：コミット取り消した上でワークディレクトリの内容も書き換えたい場合
- --soft：ワークディレクトリの内容はそのままでコミットだけを取り消したい場合
- HEAD^：直前のコミット
- HEAD~{n} ：n個前のコミット

コミットの打ち消し

```text
git revert {{コミットのハッシュ値}}
```

コミットメッセージの修正

```text
git commit --amend {{commit message}}
```

pushの取り消し

```text
git reset --hard {{戻したいコミットのハッシュ値}}
git push -f
```

ブランチ名変更

```text
git branch -m {{古いブランチ名}} {{新しいブランチ名}}
```

ブランチ削除

```text
git branch -d {{branch name}}
```

ローカルブランチをリモートに反映

```text
git push -u origin {{branch name}}
```

リモートのブランチをローカルに反映

```text
git branch {{branch name}} origin/{{branch name}}
```

リモートのブランチをローカルに反映&切り替え

```text
git branch -b {{branch name}} origin/{{branch name}}
```

全てのブランチを確認

```text
git branch -a
```

ブランチを比較

```text
git diff {{branch name}} {{branch name}}
```

ブランチをマージ

```text
git merge {{branch name}}
```

ブランチをリベース

```text
git rebase {{branch name}}
```