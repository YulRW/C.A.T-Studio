// rpx 转换为 px ，传参类型是数字（Number）
function rpxTorpx(rpx) {
    let deviceWidth = wx.getSystemInfoSync().windowWidth; //获取设备屏幕宽度
    let px = (deviceWidth / 750) * Number(rpx);
    return px;
}

// px 转换为 rpx ，传参类型是数字（Number）
function pxTorpx(px) {
    let deviceWidth = wx.getSystemInfoSync().windowWidth; //获取设备屏幕宽度
    let rpx = (750 / Number(px)) * deviceWidth;
    return rpx;
}

module.exports = {
    rpxTorpx,
    pxTorpx
}