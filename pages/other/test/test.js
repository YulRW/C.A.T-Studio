// pages/test/test.js
// const md5 = require('../../js/md5.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number:"11",
        pwd:"",
        pwd: "",
        captcha:"",
        imgUrl:"",


        tabsPage:0,
        test: [
            '前端', '后台'
        ],


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(md5);
        
        // console.log(b64);

       

    },
    handleNum(e){
        this.data.number = e.detail.value;
    },
    handlePwd(e) {
        this.data.pwd = e.detail.value;
    },
    handleCaptcha(e) {
        this.data.captcha = e.detail.value;
    },
    getcaptchaImg(){
        wx.request({
            url: 'http://xsgl.gdut.edu.cn/index.php/student/login/captcha',
            method: "get",
            data: {
                h: 30,
                w: 100,
                t: new Date().getTime(),   //验证码
            },
            responseType:"arraybuffer",
            success:res=>{
                console.log(res);
                let temp = wx.arrayBufferToBase64(res.data)
                this.setData({
                    imgUrl: temp
                })
            }
        })

    },
    handleCaptcha(e) {
        this.data.captcha = e.detail.value;
    },
    login(){
        this.setData({
            pwd: md5.hexMD5(this.data.pwd)
        })
        wx.request({
            url: 'http://xsgl.gdut.edu.cn/index.php/student/login',
            data: {
                snum: parseInt(this.data.number),
                pwd: this.data.pwd,
                captcha: this.data.captcha,   //验证码
                remember: 0, //是否记住登录
            },
            method: "post",
            dataType: "json",
            success: res =>{
                console.log(res)
            },
            fail :res =>{
                console.log(res)
            }

        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})