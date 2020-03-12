// pages/studio/studio.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        card: [{
            title: '',
            text: '',
            icon: ''
        }],
        item: [{
            title: '',
            text: [],
            icon: ''
        }],
        project: [{
            title: '',
            text: '',
            icon: ''
        }],
        swiperList: [{
            id: 0,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }, {
            id: 1,
            type: 'image',
            url: '/assets/pic/1.jpg',
        }, {
            id: 2,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }, {
            id: 3,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }, {
            id: 4,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }, {
            id: 5,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }, {
            id: 6,
            type: 'image',
            url: '/assets/pic/1.jpg'
        }],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
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