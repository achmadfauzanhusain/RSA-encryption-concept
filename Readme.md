# Your Name

# rsa-simple

A simple RSA encryption and decryption library for Node.js. It generates a public/private key pair from two prime numbers, then encrypts and decrypts text messages.

> **Note:** This package is intended for learning and demonstration purposes. Do not use it to protect real sensitive data.

## Installation

```bash
npm install your-package-name
```

## Usage

```javascript
const { generateKey, encrypt, decrypt } = require("your-package-name")

// 1. Generate keys from two prime numbers
const { publicKey, privateKey } = generateKey(61, 53)

// 2. Encrypt a message with the public key
const cipher = encrypt("hello", publicKey.e, publicKey.n)
console.log(cipher) // array of BigInt values

// 3. Decrypt the cipher with the private key
const message = decrypt(cipher, privateKey.d, privateKey.n)
console.log(message) // "hello"
```

## API

### `generateKey(p, q)`

Generates an RSA key pair.

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `p`       | number | A prime number       |
| `q`       | number | Another prime number |

**Returns:**

```javascript
{
  publicKey: { e, n },
  privateKey: { d, n }
}
```

### `encrypt(message, e, n)`

Encrypts a text message.

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `message` | string | The text to encrypt  |
| `e`       | number | Public exponent      |
| `n`       | number | Modulus              |

**Returns:** an array of `BigInt` values (the cipher).

### `decrypt(cipher, d, n)`

Decrypts a cipher back into text.

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `cipher`  | BigInt[] | The array returned by `encrypt` |
| `d`       | number   | Private exponent               |
| `n`       | number   | Modulus                        |

**Returns:** the original text as a string.

## How It Works

1. Choose two prime numbers `p` and `q`.
2. Compute `n = p × q` and `φ(n) = (p − 1) × (q − 1)`.
3. Find `e` such that `gcd(e, φ(n)) = 1`.
4. Find `d` such that `(e × d) mod φ(n) = 1`.
5. Encrypt each character: `cipher = num^e mod n`.
6. Decrypt each value: `message = cipher^d mod n`.

## Limitations

- Each character value must be smaller than `n`, so choose `p` and `q` large enough.
- Key generation uses simple brute-force search, so very large primes will be slow.

## License

MIT