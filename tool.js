
const bigCategory = document.getElementById("bigcategory")

bigCategory.addEventListener("change", function () {

    const fruit = document.getElementById("bigcategory").selectedIndex
    const smallCategory = document.getElementById("smallcategory")
    const option = document.createElement("option")
    const apple = ["ふじ", "ジョナゴールド", "王林"]
    const grape = ["デラウェア", "ピオーネ", "巨峰"]
    const orange = ["甘夏", "日向夏", "伊予柑"]

    // ここにデフォルトに戻すコード（if文かwhile文で）が必要だと思っています。
    // ネットで調べてもわからなかったのでヒントを教えて欲しいです。

    if (fruit === 1) {
        for (let i = 0; i < apple.length; i++) {
            smallCategory.appendChild(option.cloneNode(true)).textContent = apple[i]
        }
    } else if (fruit === 2) {
        for (let i = 0; i < grape.length; i++) {
            smallCategory.appendChild(option.cloneNode(true)).textContent = grape[i]
        }
    } else if (fruit === 3) {
        for (let i = 0; i < grape.length; i++) {
            smallCategory.appendChild(option.cloneNode(true)).textContent = orange[i]
        }
    }
})