// pages/signUpBefore/signUpBefore.js
const app = getApp();
const g = app.globalData;
const yy = require('../../utils/Promise.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {},

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

        if (!app.globalData.status.userData) {
            yy.showModal({
                    title: '温馨提示',
                    content: '抱歉，要使用报名功能请先进行登录授权，只需一步即可',
                    confirmText: "一键登录",
                    confirmColor: "#0f4c81"
                })
                .then(res => {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/getInfo/getInfo'
                        })
                        throw 'err';
                    } else if (res.cancel) {
                        wx.switchTab({
                            url: '/pages/user/user/user',
                        })
                        throw 'err';
                    }
                })
                .catch(res => {

                })


        } else {
            wx.redirectTo({
                url: '/pages/signUpN/signUpN'
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