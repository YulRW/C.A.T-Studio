// pages/articlePage/childCpns/yy-chat-card/yy-chat-card.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        chatInfo:{
            type:Object,
            value:{
            }
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        popShow: false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        chatSelect(){
            console.log('长按!!');
            this.setData({
                popShow:true
            })
        },
        popClose(){
            this.setData({
                popShow:false
            })
        }

    }
})
