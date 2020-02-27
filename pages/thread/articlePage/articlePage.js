// pages/articlePage/articlePage.js
const app = getApp();
const g = app.globalData;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //当前文章id
        articleId: '',
        inputShow: true,
        inputBottom: "0px",
        articleData: {},
        chatInfo: [],
        chatInput: "",


    },

    clickInput() {
        this.setData({
            inputShow: !this.data.inputShow,
        })
    },
    inputBlur() {
        this.setData({
            inputBottom: '0px',
            inputShow: !this.data.inputShow,
        })
    },
    inputFocus(e) {
        let hei = e.detail.height + 'px';
        this.setData({
            inputBottom: hei
        })
    },
    //输入绑定事件,把Input框输入的值存入变量
    handleChatInput(e) {
        this.setData({
            chatInput: e.detail.value
        })
    },
    //发送评论事件
    sendChat() {
        //获取评论内容
        let text = this.data.chatInput;

        let url = `${g.ip.kjb}${g.requestName.commentArticle}`

        wx.request({
            url: url,
            data: {
                content: text,
                fromId: g.userData.id,
                toId: null,
                time: new Date().getTime(), // 当前时间戳
                articleId: this.data.articleId, // 点赞的文章id 
            },
            method: 'POST',
            success: (res) => {
                console.log(res.data.data)
                let obj = {
                    userInfo: {
                        username: "YulRW",
                    },
                    chatContent: {
                        content: text
                    }
                };
                let oldArray = this.data.chatInfo;
                oldArray.unshift(obj);
                this.setData({
                    chatInfo: oldArray
                })
                wx.showToast({
                    title: '评论发布成功!',
                })
            },
        })

    },
    agreeArticle() {
        wx.request({
            url: `${app.globalData.ip.kjb}${app.globalData.requestName.agree}`,
            method: 'post',
            data: {
                time: new Date().getTime(),
                articleID: this.data.articleData.article.id,
                userId: app.globalData.userData.id
            },
            success: res => {
            },
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let id = options.id;
        this.setData({
            articleId: id
        })
        let url = `${g.ip.kjb}${g.requestName.specificArticle}/${id}`
        wx.request({
            url: url,
            method: 'GET',
            success: (res) => {
                let data = res.data.data;
                console.log(data)
                this.setData({
                    chatInfo: data.comments,
                    articleData: data
                })


            },
        })


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