const Crypto = require("crypto");

const randomeIsbn = ((digits) => {
    const buff =  Crypto.randomBytes(digits);
    const int  = buff.readUIntBE(0, digits);
    return int
})

export default randomeIsbn