// components/yy-input/yy-input.js
/**
 * 支持：
 * title
 * placeholder
 * err
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,

        },
        placeholder: {
            type: String,
            value: ''
        },
        err: {
            type: String,
            value: '',
            observer: function(newVal, oldVal) {
                if (newVal) {
                    console.log(newVal)
                    this.changeColor('errColor')
                }else{
                    this.changeColor('usuColor')
                }
            }
        },
        maxlength:{
            type:Number,
            value:-1
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        focusCSS: false,
        // 提示条颜色
        msgColor: 'usuColor'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleInput(e) {

            this.triggerEvent('input', e.detail, {})
        },

        changeColor(color) {
            console.log(color)
            this.setData({
                msgColor: color
            })

        },
        isEmpty(value) {
            return /^\s*$/.test(value);
        },
        handleFocus() {
            this.setData({
                focusCSS: true
            })
            this.setData({
                placeholderMsg: this.properties.placeholder
            })
        },
        handleBlur(e) {
            console.log(this.isEmpty(e.detail.value))
            if (this.isEmpty(e.detail.value)) {
                this.setData({
                    focusCSS: false,
                    placeholderMsg: ''
                })
            }

        },
    }
})