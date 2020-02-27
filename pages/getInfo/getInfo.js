// pages/getInfo/getInfo.js
const app = getApp();
const yy = require('../../utils/Promise.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //授权按钮状态
        flag: false,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    //授权成功后
    getUserInfo: (e) => {
        app.globalData.userInfo = e.detail.userInfo;

        yy.login({})

            .then(res => {
                return yy.request({
                    url: `${app.globalData.ip.kjb}${app.globalData.requestName.login}`,
                    method: "POST",
                    data: {
                        code: res.code,
                        iv: e.detail.iv,
                        data: e.detail.encryptedData
                    },
                })
            })

            .then(res => {
                app.globalData.userData = res.data.data
                yy.switchTab({
                    url: '/pages/signUp/signUp',
                });
            })
    },
})