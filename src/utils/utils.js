import CryptoJS from 'crypto-js'
var d = new Date();

function date(val) {
    return val >= 10 ? val : '0' + val;
}
var year = d.getFullYear();
var month = date(d.getMonth() + 1);
var day = date(d.getDate());
var str = year + '' + month + day + 'sswebkey';

/**
 * aes加密（AES/CBC/PKCS7Padding)X
 * @param word
 * @returns {*}
 */

function encrypt(word) {
    var key = CryptoJS.enc.Latin1.parse('abcdefghijklmnop');
    var iv = CryptoJS.enc.Latin1.parse('0102030405060708');
    return CryptoJS.AES.encrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    }).toString();
}
/**
 * aes解密
 * @param word
 * @returns {*}
 */
function decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse(str);
    var decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

export { encrypt, decrypt }
