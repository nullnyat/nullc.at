// themeが設定されていない時
if (!localStorage.getItem('theme')) {
    // OSの設定を取得
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // ダークモードに設定
        localStorage.setItem('theme', 'dark')
    } else {
        // ライトモードに設定
        localStorage.setItem('theme', 'light')
    }
}

function updateDOM() {
    const theme = localStorage.getItem('theme')

    const dom = [
        ['body', 'body--dark', 'body--light'],
        ['.main__header__functions', 'main__header__functions--dark', 'main__header__functions--light'],
    ]

    dom.forEach(item => {
        const element = document.querySelector(item[0])

        switch (theme) {
            case 'dark':
                element.classList.remove(item[2])
                element.classList.add(item[1])
                break

            case 'light':
                element.classList.remove(item[1])
                element.classList.add(item[2])
                break
        }
    })
}

window.addEventListener('DOMContentLoaded', updateDOM)
