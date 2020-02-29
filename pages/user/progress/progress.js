// pages/progress/progress.js
const app = getApp();
const yy = require('../../../utils/Promise.js')
Page({
    previewImg(e) {
        let url = e.currentTarget.dataset.id;
        wx.previewImage({
            urls: [url],
        })
    },
    getNextNotice() {
        var array = ['UkKVRb8O6V3cybQnQXG2gqm-1hijIzv_l6_R0axMG80', 'gbSdXrEZ6f1QVcTAQIwBEhcOMr8EdvMKfAAZ8Xal4mY', 'MSZh8bVBbQbTNgr8sJGXh3WQiX57E7tvRBg_sATsJBY']
        wx.requestSubscribeMessage({
            tmplIds: array,
            success: res => {
                console.log('消息订阅', res);
                if (res.errMsg == 'requestSubscribeMessage:ok') {
                    // wx.showToast({
                    //     title: '消息订阅成功！',
                    // })
                }
            }

        })
    },

    /**
     * 页面的初始数据
     */
    data: {
        notice: {
            title: '一面成功',
            content: '文本消息',
            status: false
        },

        isLoading: true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let status;
        if (app.globalData.status.userData) {
            status = app.globalData.userData.status;
            this.getNotice(status);
        } else {
            app.loginCallback = data => {
                status = data.status;
                this.getNotice(status);
            }
        }
    },
    getNotice(status) {
        yy.request({
                url: `${app.globalData.ip.kjb}${app.globalData.requestName.progressRes}`,
                data: {
                    status
                },
                method: 'POST',
            })
            .then(res => {
                console.log(res.data.data)
                this.setData({
                    notice: res.data.data
                })

                this.setData({
                    isLoading: false
                })
            })
    },
    onShow(){
        if(app.globalData.status.progressChange){
            this.getNotice(1);
            app.globalData.status.progressChange = false;
        }
    }
})