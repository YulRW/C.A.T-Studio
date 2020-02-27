// pages/catSteps/catSteps.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        catActive: 2,
        catSteps: [{
                text: '未报名',
                desc: ''
            },
            {
                text: '已报名',
                desc: ''
            },
            {
                text: '一轮面试',
                desc: ''
            },
            {
                text: '二轮面试',
                desc: ''
            },
            {
                text: '一轮考核',
                desc: ''
            },
            {
                text: '二轮考核',
                desc: ''
            }
        ]

    },
    msg() {
        var array = ['UkKVRb8O6V3cybQnQXG2gqm-1hijIzv_l6_R0axMG80','gbSdXrEZ6f1QVcTAQIwBEhcOMr8EdvMKfAAZ8Xal4mY', 'MSZh8bVBbQbTNgr8sJGXh3WQiX57E7tvRBg_sATsJBY']
        wx.requestSubscribeMessage({
            tmplIds: array,
            success: res => {
                console.log('消息订阅', res);
                if (res.errMsg == 'requestSubscribeMessage:ok') {
                    wx.showToast({
                        title: '消息订阅成功！',
                    })
                }
            }

        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        var steps = app.globalData.userData.status;
        this.setData({
            catActive: steps
        })
        console.log(steps);

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})