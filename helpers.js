function textToNumber(text) {
    return text
        .toUpperCase()
        .split("")
        .map(c => c.charCodeAt(0) - 64)
        .filter(n => n >= 1 && n <= 26);
}

function numberToText(numbers) {
    return numbers
        .map(n => String.fromCharCode(Number(n) + 64))
        .join("")
}

module.exports = { textToNumber, numberToText }