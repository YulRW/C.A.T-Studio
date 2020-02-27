// pages/articlePage/childCpns/yy-heart-btn/yy-heart-btn.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        widAndHei:{
            type:String,
            value:"150rpx",
            observer: function (newVal, oldVal) {
                let whrpxBtn = parseInt(newVal)/3 + 'rpx';
                let whrpxC = -parseInt(newVal)/3/2 + 'rpx';
                this.setData({
                    whrpx: newVal,
                    whrpxBtn: whrpxBtn,
                    whrpxC: whrpxC
                })
            }
        }
        

    },

    /**
     * 组件的初始数据
     */
    data: {
        cssAnimate: "left",
        addAnimate: "",
        animateAfter: false,
        whrpx:"150rpx",
        
    },

    /**
     * 组件的方法列表
     */
    methods: {

        addAnimateFun() {
            if (this.data.animateAfter === true) {
                this.setData({
                    cssAnimate: "left",
                    addAnimate: "",
                    animateAfter: false
                })
            } else {
                this.setData({
                    cssAnimate: "right",
                    addAnimate: "heartAnimation",
                    animateAfter: true
                })

            }

        },

    }
})