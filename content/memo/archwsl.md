---
title: "Archwslをwindowsにインストールする"
date: 2022-04-18T14:58:05+09:00
draft: false
---

## まずやること

インストールするLinuxを標準でWSL2上で動くようにするために`wsl --set-default-version 2`を実行する

---

## ArchWSLのインストール

[ここ](https://github.com/yuk7/ArchWSL)から`.appx`と`.cer`のやつをインストール

`.cer`を信頼されたルート証明書としてインストール

`.appx`をインストール

windowsterminalで新しいプロファイルを作成してそこのコマンドラインに`wsl.exe ~ -d Arch`を設定する

---

## ArchWSLの設定

まず色々アップデートする
```shell
# 鍵の初期化&更新
pacman-key --init
pacman-key --populate archlinux
pacman -Syy archlinux-keyring

# パッケージの更新
pacman -Syu
```

ユーザー追加を追加する
```shell
useradd -m -g wheel {{username}}
passwd {{username}}
```

Sudo権限を与えるために`%wheel ALL=(ALL:ALL) NOPASSWD: ALL`のコメントアウトを外す

デフォルトのログインユーザーを変更する
```shell
arch config --default-user {{username}}
```

---

## yayのインストール

```shell
cd ~ ; mkdir abs;
pacman -S base-devel git
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## pacmanの高速化

```shell
yay -S powerpill
yay --save --pacman powerpill
```

## genieのインストール

```shell
cd ~/abs
mkdir dotnet; cd dotnet
yay -S wget
wget https://github.com/arkane-systems/genie/files/3827049/dotnet-PKGBUILD.tar.gz
tar -xzvf dotnet-PKGBUILD.tar.gz
makepkg -si

```

---

## fishの設定

`sudo pacman -S fish`でインストール

`~/.bashrc`に`exec fish`を追加

## oh-my-fishの設定

`curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish`でインストール

themeの設定は `omf install {{theme}}`でやる。

ちなみに僕の使ってるThemeはclearanceです。

theme一覧は[ここ](https://github.com/oh-my-fish/oh-my-fish/blob/master/docs/Themes.md)。

---

## tmuxの設定

`sudo pacman -S tmux`でインストール

色々設定を変えたいときは`~/.tmux.conf`の中身を変更する

中身を
```text
set -g @plugins '                  \
  tmux-plugins/tpm                 \
  tmux-plugins/tmux-yank           \
  tmux-plugins/tmux-open           \
  tmux-plugins/tmux-resurrect      \
  tmux-plugins/tmux-battery        \
  tmux-plugins/tmux-pain-control   \
  arcticicestudio/nord-tmux        \
'

run -b '~/.tmux/plugins/tpm/tpm'
```
にすると(僕が)幸せになれる

tmuxを開いて`ctrl+b`→`ctrl+i`でプラグインがインストールできる

## UwUFetchのインストール

```shell
git clone https://github.com/TheDarkBug/uwufetch.git
cd uwufetch
sudo make install
```

---

参考にさせていただいた記事

- https://qiita.com/Gen-Arch/items/f2921e2b010115aa2495
- https://wiki.archlinux.jp/index.php/WSL_%E3%81%AB%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
- https://qiita.com/Gen-Arch/items/f2921e2b010115aa2495
- https://www.asobou.co.jp/blog/web/archilinux-on-wsl2
- https://zenn.dev/nazo6/scraps/879349bcab4c10
- https://qiita.com/progrhyme/items/6f936033b9d23efb1741