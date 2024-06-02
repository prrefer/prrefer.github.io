const art = document.getElementById("art")
let symbol = '*'

setInterval(() => {
    let newSymbol = symbol === '*' ? '+' : '*'
    art.innerText = art.innerText.replaceAll(symbol, newSymbol)
    symbol = newSymbol
}, 1000);
