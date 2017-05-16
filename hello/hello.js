/**
 * Created by chenqinhao on 2017/5/12.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        message: '页面加载于' + new Date()
    }
})
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
})
var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'}
        ]
    }
})
var app5 = new Vue({
    el: '#app5',
    data: {
        message: '我是消息'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app6',
    data: {
        message: ''
    }
})