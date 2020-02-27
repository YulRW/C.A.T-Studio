let CryptoJS = require('../static/crypto-js.js');


var key = CryptoJS.enc.Latin1.parse('f9007dfd8a95c0bf');
var iv = CryptoJS.enc.Latin1.parse('f9007dfd8a95c0bf');

// 加密
function EncryptData(data) {
    var srcs = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

// 解密
function DecryptData(data) {
    var stime = new Date().getTime();
    var decrypt = CryptoJS.AES.decrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var result = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypt).toString());
    var etime = new Date().getTime();
    // console.log("DecryptData Time:" + (etime - stime));
    return result;
}

module.exports = {
    EncryptData,
    DecryptData
}
