const crypto = require('crypto')
function createKeyPair() {
	const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
		namedCurve: 'sect239k1'
	})

	return {
		privateKey: privateKey.export({ type: 'sec1', format: 'pem' }),
		publicKey: publicKey.export({ type: "spki", format: "pem" }),
	}
}

console.log(createKeyPair().publicKey)
