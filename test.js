const dotenv = require('dotenv')
const crypto = require('crypto')
dotenv.config()

const key = process.env.KEY
console.log(key)

crypto.createPublicKey({ key, format: 'pem', type: 'spki' })
