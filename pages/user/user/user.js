// pages/user/user.js
const app = getApp();
Page({
    toLogin() {
        wx.navigateTo({
            url: '/pages/getInfo/getInfo',
        })
    },
    /**
     * 页面的初始数据
     */
    data: {
        isLogin: false,
        netRequest:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // this.wave = this.selectComponent("#yy-wave");
        // this.wave.__hideInfo()
        app.loginCallback = res => {
            this.setData({
                netRequest:true,
                isLogin:res.loginStatus
            })
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (app.globalData.status.netRequest) {
            this.setData({
                netRequest: true,
                isLogin: app.globalData.status.userData
            })
        }
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