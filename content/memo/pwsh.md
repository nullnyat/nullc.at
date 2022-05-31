---
title: "pwshの設定"
date: 2022-04-16T17:20:12+09:00
draft: false
---

## まずやること

実行ポリシーを変更する
```text
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

設定プロファイルのスクリプトを作成
```text
New-Item $Profile
```

## fish風のオートサジェスト機能を有効にする方法

`Invoke-Item $Profile`でテキストエディタを開く

中身に
```text
Set-PSReadLineOption -PredictionSource History
Set-PSReadlineOption -HistoryNoDuplicates
Set-PSReadLineKeyHandler -Key "Ctrl+f" -Function ForwardWord
```
を追加するとできる

## oh-my-poshの設定

`Invoke-Item $Profile`でテキストエディタを開く

中身に
```text
if ($env:WT_PROFILE_ID) {
    Import-Module oh-my-posh
    Set-PoshPrompt -Theme {{theme}}
}
```
を追加するとできる

themeフォルダは`./Users/{{username}}/AppData/Local/oh-my-posh/themes`にある

---

僕のoh-my-poshのテーマは↓

negligible.ncat.omp.json
```json
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "alignment": "left",
      "segments": [
        {
          "foreground": "#96CCE7",
          "style": "powerline",
          "template": "{{ if .WSL }}WSL at {{ end }}{{.Icon}}",
          "type": "os"
        },
        {
          "foreground": "#96CCE7",
          "properties": {
            "style": "full"
          },
          "style": "plain",
          "template": " {{ .Path }} ",
          "type": "path"
        },
        {
          "foreground": "#FF9D9D",
          "properties": {
            "fetch_status": true
          },
          "style": "plain",
          "template": ":: {{ .HEAD }}{{ .BranchStatus }}{{ if .Staging.Changed }} \uf046 {{ .Staging.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Working.Changed }} \uf044 {{ .Working.String }}{{ end }} ",
          "type": "git"
        }
      ],
      "type": "prompt"
    },
    {
      "alignment": "right",
      "segments": [
        {
          "foreground": "#FF9D9D",
          "properties": {
            "root_icon": "root"
          },
          "style": "plain",
          "template": "| \uf0e7 ",
          "type": "root"
        },
        {
          "foreground": "#96CCE7",
          "style": "powerline",
          "template": "| \ue798 {{ if .Error }}{{ .Error }}{{ else }}{{ .Full }}{{ end }} ",
          "type": "dart"
        },
        {
          "foreground": "#B0E7CB",
          "style": "powerline",
          "template": "| \ue718 {{ if .PackageManagerIcon }}{{ .PackageManagerIcon }} {{ end }}{{ .Full }} ",
          "type": "node"
        },
        {
          "foreground": "#96CCE7",
          "properties": {
            "display_mode": "context",
            "fetch_virtual_env": true
          },
          "style": "plain",
          "template": "| \ue235 {{ .Venv }} ",
          "type": "python"
        },
        {
          "foreground_templates": [
            "{{if eq \"Charging\" .State.String}}#B0E7CB{{end}}",
            "{{if eq \"Discharging\" .State.String}}#96CCE7{{end}}",
            "{{if eq \"Full\" .State.String}}#FF9D9D{{end}}"
          ],
          "invert_powerline": true,
          "properties": {
            "charged_icon": "\uf00d ",
            "charging_icon": "\ue234 "
          },
          "style": "powerline",
          "template": "| {{ if not .Error }}{{ .Icon }}{{ .Percentage }}{{ end }}{{ .Error }} \uf295 ",
          "type": "battery"
        },
        {
          "foreground": "#CBE8CB",
          "style": "plain",
          "template": "| {{ .CurrentDate | date .Format }} ",
          "type": "time"
        }
      ],
      "type": "prompt"
    },
    {
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "foreground": "#CBE8CB",
          "foreground_templates": [
            "{{ if gt .Code 0 }}red{{ end }}"
          ],
          "properties": {
            "always_enabled": true
          },
          "style": "powerline",
          "template": "\u279c ",
          "type": "exit"
        }
      ],
      "type": "prompt"
    }
  ],
  "version": 2
}
```