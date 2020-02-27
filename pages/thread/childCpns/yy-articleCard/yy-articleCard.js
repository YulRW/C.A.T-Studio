// pages/thread/childCpns/yy-articleCard/yy-articleCard.js
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        //文章Obj（包含 --》作者&个性签名&文章标签&文章标题&文章内容&文章点赞&文章讨论）
        articleData: {
            type: Object,
            value: {
                article: {
                    //文章标签类别
                    status: "标签",
                    //文章标题
                    title: "暂无标题",
                    //文章内容部分展示
                    content: "暂无内容",
                    //点赞数量
                    agreementNum: "0",
                    // 讨论数量
                    commentNum: "0"
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickArticle() {
            this.triggerEvent("clickArticle", {}, {})
        },
        agreeArticle() {
            wx.request({
                url: `${app.globalData.ip.kjb}${app.globalData.requestName.agree}`,
                method: 'post',
                data: {
                    time: new Date().getTime(),
                    articleId: this.properties.articleData.article.id,
                    userId: app.globalData.userData.id
                },
                success: res => {
                    this.properties.articleData.article.agreementNum++;
                },
            })
        }
    }
})