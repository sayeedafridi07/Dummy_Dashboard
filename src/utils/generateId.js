function SHA256(value) {
    const bitsPerCharacter = 8;
    const hexadecimalCase = 0;

    function addSafe(x, y) {
        const leastSignificantWord = (x & 0xFFFF) + (y & 0xFFFF);
        const mostSignificantWord = (x >> 16) + (y >> 16) + (leastSignificantWord >> 16);
        return (mostSignificantWord << 16) | (leastSignificantWord & 0xFFFF);
    }

    function shiftRight(X, n) {
        return (X >>> n) | (X << (32 - n));
    }

    function shiftRightLogical(X, n) {
        return (X >>> n);
    }

    function choose(X, Y, Z) {
        return ((X & Y) ^ ((~X) & Z));
    }

    function majority(X, Y, Z) {
        return ((X & Y) ^ (X & Z) ^ (Y & Z));
    }

    function sigma0_256(X) {
        return (shiftRight(X, 2) ^ shiftRight(X, 13) ^ shiftRight(X, 22));
    }

    function sigma1_256(X) {
        return (shiftRight(X, 6) ^ shiftRight(X, 11) ^ shiftRight(X, 25));
    }

    function gamma0_256(X) {
        return (shiftRight(X, 7) ^ shiftRightLogical(X, 18) ^ shiftRightLogical(X, 3));
    }

    function gamma1_256(X) {
        return (shiftRight(X, 17) ^ shiftRightLogical(X, 19) ^ shiftRightLogical(X, 10));
    }

    function coreSHA256(message, length) {
        const K = [
            0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
            0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
            0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
            0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
            0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
            0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
            0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
            0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
        ];

        const HASH = [
            0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
        ];

        let W = new Array(64);
        let a, b, c, d, e, f, g, h, i, j;
        let T1, T2;

        message[length >> 5] |= 0x80 << (24 - length % 32);
        message[((length + 64 >> 9) << 4) + 15] = length;

        for (let i = 0; i < message.length; i += 16) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];

            for (let j = 0; j < 64; j++) {
                if (j < 16) W[j] = message[j + i];
                else W[j] = addSafe(addSafe(addSafe(gamma1_256(W[j - 2]), W[j - 7]), gamma0_256(W[j - 15])), W[j - 16]);

                T1 = addSafe(addSafe(addSafe(addSafe(h, sigma1_256(e)), choose(e, f, g)), K[j]), W[j]);
                T2 = addSafe(sigma0_256(a), majority(a, b, c));

                h = g;
                g = f;
                f = e;
                e = addSafe(d, T1);
                d = c;
                c = b;
                b = a;
                a = addSafe(T1, T2);
            }

            HASH[0] = addSafe(a, HASH[0]);
            HASH[1] = addSafe(b, HASH[1]);
            HASH[2] = addSafe(c, HASH[2]);
            HASH[3] = addSafe(d, HASH[3]);
            HASH[4] = addSafe(e, HASH[4]);
            HASH[5] = addSafe(f, HASH[5]);
            HASH[6] = addSafe(g, HASH[6]);
            HASH[7] = addSafe(h, HASH[7]);
        }

        return HASH;
    }

    function stringToUTF8(value) {
        return unescape(encodeURIComponent(value));
    }

    function UTF8ToString(value) {
        return decodeURIComponent(escape(value));
    }

    function stringToBinaryArray(str) {
        const binaryArray = [];
        const mask = (1 << bitsPerCharacter) - 1;
        for (let i = 0; i < str.length * bitsPerCharacter; i += bitsPerCharacter) {
            binaryArray[i >> 5] |= (str.charCodeAt(i / bitsPerCharacter) & mask) << (24 - i % 32);
        }
        return binaryArray;
    }

    function binaryArrayToHex(binaryArray) {
        const hexTable = hexadecimalCase ? '0123456789ABCDEF' : '0123456789abcdef';
        let hexString = '';
        for (let i = 0; i < binaryArray.length * 4; i++) {
            hexString += hexTable.charAt((binaryArray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                hexTable.charAt((binaryArray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
        }
        return hexString;
    }

    const inputValue = value || '';
    const inputUTF8 = stringToUTF8(inputValue);
    const inputBinaryArray = stringToBinaryArray(inputUTF8);
    const hashArray = coreSHA256(inputBinaryArray, inputUTF8.length * bitsPerCharacter);
    const hashHex = binaryArrayToHex(hashArray);
    return hashHex;
}

function generateId(value = '', length = 36) {
    const sha256Hash = SHA256(value);
    let hashHex = '';

    if (value === '') {
        const timestamp = Date.now().toString();
        const hashHex = SHA256(timestamp).slice(0, length);
        return hashHex;
    }

    hashHex = sha256Hash.slice(0, length);
    return hashHex;
}

export default generateId;