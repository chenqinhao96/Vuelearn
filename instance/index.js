/**
 * Created by chenqinhao on 2017/5/12.
 */
var vm = new Vue({
  el: '#app',
  data: {
    a: 1,
    msg: 'Hello ChenQinHao',
    rawHtml: 'I m HTML',
    disabled: false,
    ok: true,
    message: 'Chenqinhao',
    id: 10,
    seen: true,
    url: "http://www.google.com",
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
    answer: 'I cannot give you an answer until you ask a question!',
    question: ''
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    },
    question: function (val) {
      this.answer = 'Wating for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce (
      function() {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Question unually contain a question mark. ;-)'
          return
        }
        vm.answer = 'Thinking...'
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (err) {
            vm.answer = 'Error! Could not reach the api.' + err
          })
        }, 500
    ),
    doSomething: function () {
      alert("doSomething...")
    },
    doSubmit: function () {
      alert(this.msg)
    },
    reverseStr: function (value) {
      console.log("method msg")
      return value.split('').reverse().join('')
    }
  },
  computed: {
    reverseMsg: function () {
      console.log("compute msg")
      return this.reverseStr(this.msg)
    },
    now: function () {
      return new Date()
    },
    fullName1: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newVal) {
        var names = newVal.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    filterA: function (value) {
      return value + "A"
    },
    filterB: function (value) {
      return value + "B"
    },
    reverseC: function (value) {
      return value.split('').reverse().join('')
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate: ' + this.$el)
  },
  created: function () {
    console.log('created: ' + this.$el + "," + this.$data.a)
  },
  beforeMount: function () {
    console.log('beforeMount: ' + this.$el + "," + this.$data.a)
  },
  mounted: function () {
    console.log('mounted: '  + this.$el + "," + this.$data.a)
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  destory: function () {
    console.log('destory')
  }
})
