const { textToNumber } = require("./helpers")

function generateKey(p, q) {
    const n = p * q
    const totient_euler = (p - 1) * (q - 1)

    // cari e
    let e = 2
    while (e < totient_euler) {
        let a = e, b = totient_euler
        while (b) [a, b] = [b, a % b]
        if (a === 1) break
        e++
    }

    // cari d
    let d = 1
    while ((e * d) % totient_euler !== 1) d++

    return { 
        publicKey: { e, n }, 
        privateKey: { d, n } 
    }
}

function encrypt(message, e, n) {
    const numbers = textToNumber(message) // array, mis. [1, 13, 6, ...]

    return numbers.map((num) => {
        // cipher = num^e mod n
        let cipher = 1n

        for (let i = 0n; i < BigInt(e); i++) {
            cipher = (cipher * BigInt(num)) % BigInt(n)
        }

        return cipher
    })
}

function decrypt(cipher, d, n) {
    // message = cipher^d mod n
    return cipher.map((c) => {
        let message = 1n

        for (let i = 0n; i < BigInt(d); i++) {
            message = (message * BigInt(c)) % BigInt(n)
        }

        return message
    })
}

module.exports = { generateKey, encrypt, decrypt }