// pages/user/queue/queue.js

// 获取promise接口
const yy = require('../../../utils/Promise.js');
const app = getApp();
const g = app.globalData;
var setTime;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        notice: {
            title: '面试预约',
            status: 0,
            direction: 0,
            num: 0
        },
        select: [
            '3月22日 20:00-23:00',
            '3月23日 20:00-23:00',
            '3月24日 20:00-23:00'
        ],

        statusText: {
            noSuc: '当前未预约',
            suc: '当前已预约',
            no: '抱歉，当前预约功能还未开放，如有疑问请联系师兄/师姐，谢谢！'
        },
        time: '',

        index: -1,


        // 动画
        change: {
            one: '',
            two:'',
            ticket:''
        },

        // 前面人数
        num: '',


    },
    handleSelect(e) {
        let index = Number(e.detail.value);
        this.setData({
            time: this.data.select[index],
            index: index + 1
        })
        wx.setStorage({
            key:'batch',
            data:index + 1
        })
    },

    animateEnd() {

        this.setData({
            notice: this.data.tempData
        })

        this.refreshRequest()
    },

    back(){
        wx.switchTab({
            url: '/pages/user/user/user',
        })
    },

    push() {



        if (this.data.time === '') {
            wx.showToast({
                icon: 'none',
                title: '请先选择预约时间',
            })
        } else {
            let index = this.data.index
            //获取发送IP地址
            let url = g.ip.kjb + g.requestName.queue
            wx.showLoading({
                title: '正在急速取号中...',
                mask: true
            })
            yy.request({
                    url: url,
                    method: 'POST',
                    data: {
                        userId: g.userData.id,
                        batch: index
                    }
                })
                .then(res => {
                    wx.hideLoading()
                    console.log(res)
                    if (res.data.code === 200) { //如果预约成功

                        //获取发送IP地址
                        let url2 = g.ip.kjb + g.requestName.getArrange
                        yy.request({
                                url: url2,
                                method: 'POST',
                                data: {
                                    id: g.userData.id

                                }
                            })
                            .then(res => {
                                console.log(res)
                                this.setData({
                                    'change.one': 'hinge',
                                    'change.two': 'bounceIn',
                                    'change.ticket':'bounceInLeft',
                                    tempData: res.data.data
                                })
                            })
                    } else {
                        yy.showToast({
                            icon: 'none',
                            title: '请求繁忙，请稍后再试',
                        })
                        throw 'err'
                    }
                })
        }


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getPageData()

    },

    getPageData() {
        //获取发送IP地址
        let url = g.ip.kjb + g.requestName.getArrange
        console.log(g.userData.id)
        yy.request({
                url: url,
                method: 'POST',
                data: {
                    id: g.userData.id

                }
            })
            .then(res => {
                console.log(res)
                this.setData({
                    notice: res.data.data,
                    isLoading:false
                })
                this.refreshRequest()
            })
    },

    refreshRequest() {
        clearTimeout(setTime)
        if (this.data.notice.status === 1) {

            var index = wx.getStorageSync('batch')

            //获取发送IP地址
            let url = g.ip.kjb + g.requestName.refreshArrange
            yy.request({
                    url: url,
                    method: 'POST',
                    data: {
                        direction: this.data.notice.direction,
                        arrangeCode: this.data.notice.arrangeCode,
                        batch: index
                    }
                })
                .then(res => {
                    console.log(res)

                    this.setData({
                        num: res.data.data
                    })

                    if (res.data.data !== -1) {
                        setTime = setTimeout(this.refreshRequest, 30000)
                    }
                })
        }
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