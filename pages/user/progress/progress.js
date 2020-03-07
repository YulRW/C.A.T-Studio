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

        var array = [ 'gbSdXrEZ6f1QVcTAQIwBEhcOMr8EdvMKfAAZ8Xal4mY', 'MSZh8bVBbQbTNgr8sJGXh3WQiX57E7tvRBg_sATsJBY']
        if (this.data.notice.status == 5 || this.data.notice.status == 6){
            array = ['MSZh8bVBbQbTNgr8sJGXh3WQiX57E7tvRBg_sATsJBY']
        }
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
        /**
         * 流程：进入页面后
         * 1. 是否有status更新？有-》请求最新status，并把更新状态去除
         * 2. 全局中app是否有面试Data？有-》写入
         * 3. 是否登录了？有-》请求面试数据，写入
         * 4. 没有登录，等待回调，写入
         */


        if (app.globalData.status.progressChange) {
            console.log(1)
            this.getNotice(1);
            app.globalData.status.progressChange = false;
        } else if (app.globalData.progressData) {
            console.log(2)
            this.setData({
                notice: app.globalData.progressData,
                isLoading:false
            })
            console.log(app.globalData.progressData)
        } else if (app.globalData.status.userData) {
            console.log(3)
            let status = app.globalData.userData.status;
            this.getNotice(status);
        } else {
            console.log(4)
            app.loginCallback = data => {
                let status = data.status;
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
                app.globalData.progressData = res.data.data
                this.setData({
                    notice: res.data.data
                })

                this.setData({
                    isLoading: false
                })
            })
    },
    onShow() {



    }
})