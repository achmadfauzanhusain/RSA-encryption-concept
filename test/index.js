const { expect } = require('chai')
const { generateKey, encrypt, decrypt } = require('../index')

describe('encrypt-decrypt', () => {
    it('mengembalikan angka asli dari ciphertext', () => {
        const { publicKey, privateKey } = generateKey(2, 7)

        const cipher = encrypt('AM', publicKey.e, publicKey.n)
        const result = decrypt(cipher, privateKey.d, privateKey.n)

        expect(result).to.deep.equal([1n, 13n])
    })
})