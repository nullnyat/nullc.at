---
title: "Twitterのいいねを消すスクリプト"
date: 2022-04-11T19:48:56+09:00
draft: false
---

````javascript
setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 5000)
````

---

- [source](https://gist.github.com/aymericbeaumet/d1d6799a1b765c3c8bc0b675b1a1547d)
