function textToNumber(text) {
    return text
        .toUpperCase()
        .split("")
        .map(c => c.charCodeAt(0) - 64)
        .filter(n => n >= 1 && n <= 26);
}

module.exports = { textToNumber }