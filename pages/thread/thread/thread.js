// pages/thread/thread.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bughandle: 0,
        tabsPage: 0,
        articleData: [{
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 3天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "2020潘通年度流行色 「经典蓝」新鲜出炉！（附配色方案）",
                    content: "「经典蓝」无疑是一个略显保守，但是非常贴合当下语境的色彩。它充满了确信感，让人觉得安全，屏蔽了焦虑。同 2019 年充满前进感的「活力珊瑚橙」相比，「经典蓝」更加内敛和笃定，悄无声息地增加每一个的信心。除了发布这一年度色彩之外，潘通色彩研究所还专门制定了5套配色方案，这些配色方案应该会在接下来的 2020 年，得到更加广泛的应用。",
                    good: "30",
                    chat: "15"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 5天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "你需掌握的CSS知识都在这了（长文建议收藏，文末有福利）",
                    content: "1.CSS盒模型，在不同浏览器的差异css 标准盒子模型css盒子模型 又称为框模型（Box Model），包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素。如下图：",
                    good: "50",
                    chat: "16"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },
            {
                userInfo: {
                    username: "YulRW",
                    introduce: "前端臭弟弟 · 4天前",
                },
                articleInfo: {
                    tag: "专栏",
                    title: "不再头秃！typescript平滑重构vue项目",
                    content: "我刚接手手头这个项目的时候，console里到处飘红，整个项目哪哪都是bug,满目疮痍。经过一段时间的调整，虽然可以正常运行，但是很多问题迟迟没有解决，比如乱七八糟的调用、没有闭合的if else、没有处理的try catch……可以说，为了维护这一个问题多多的项目，牺牲了很多我的头发...以上是牢骚段落。作为一个深知“懒是第一生产力”的工具人，在烦躁之余，一直在寻找一劳永逸的方法。终于，typescript进入我的视线。有了typescipt，一些基础的问题可以直接在编写、编译时报错，它的好处我也不必多说了。",
                    good: "10",
                    chat: "5"
                }
            },


        ],
        articleDataO: {
            front: {
                page: 1,
                name: "前端",
                list: []
            },
            back: {
                page: 1,
                name: '后台',
                list: []
            },
            design: {
                page: 1,
                name: '设计',
                list: []
            },
            skill: {
                page: 1,
                name: '技术',
                list: []
            },
            share: {
                page: 1,
                name: '分享',
                list: []
            },
            communication: {
                page: 1,
                name: '交流',
                list: []
            }

        }

    },
    handlePageChange(e) {
        //临时解决bug
        if (this.data.bughandle < 4) {
            this.setData({
                bughandle: this.data.bughandle + 1
            })
            return;
        }

        let index = e.detail.index;

        
        //加载文章(index为文章类型索引)
        this.loadArticle(index);



    },
    loadArticle(index){
        wx.showToast({
            title: '开始请求文章',
        })
        let type = Object.keys(this.data.articleDataO)[index];
        let pageKey = `articleDataO.${type}.page`;
        let pageList = `articleDataO.${type}.list`;
        //请求文章
        wx.request({
            url: `${app.globalData.ip.kjb}${app.globalData.requestName.getArticle}`,
            method: 'get',
            data: {
                pn: this.data.articleDataO[type].page,
                type: index
            },

            success: res => {
                wx.showToast({
                    title: '请求文章成功',
                })
                //页数加1
                console.log(res)
                this.setData({
                    [pageKey]: this.data.articleDataO[type].page + 1,

                })
                let list = res.data.data.list;

                if (list.length === 0) {
                    wx.showToast({
                        title: '没有文章了!',
                        icon: 'none'
                    })
                    return;
                }

                let oldList = this.data.articleDataO[type].list;
                oldList.push(...list);
                this.setData({
                    [pageList]: oldList
                })

            },
            fail: res =>{
                wx.showToast({
                    title: '请求失败!',
                    icon: 'none'
                })

                app.globalData.errorMsg = res;

            }


        })

    },
    //点击文章后事件
    clickArticle(e) {
        let id = e.currentTarget.dataset.id;

        wx.navigateTo({
            url: '/pages/articlePage/articlePage?id=' + id
        })
    },
    // 页面触底时执行
    onReachBottom:function () {
        wx.showToast({
            title: '更新文章...',
        })
        this.loadArticle(this.data.tabsPage);


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
        console.log('下拉刷新')
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