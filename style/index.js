/**
 * Created by chenqinhao on 2017/5/13.
 */
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
var vm = new Vue({
  el: '#app',
  data: {
    ok:true,
    isActive: true,
    hasError: true,
    classObject: {
      'text-success': true,
      'text-size': true
    },
    activeClass: 'active',
    errorClass: 'text-danger',
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  },
  methods: {

  },
  computed: {
    classObj: function () {
      return {
        active: this.isActive && !this.hasError,
        'text-success': true
      }
    }
  },
  watch: {

  },
  filters: {

  }
})