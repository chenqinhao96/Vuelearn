/**
 * Created by chenqinhao on 2017/5/13.
 */
var vm = new Vue({
  el: '#app',
  data: {
    show: false,
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left'
    },
    enter: function(el, done) {
      Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 800})
      Velocity(el, {fontSize: '1em'}, {complete: done})
    },
    leave: function (el, done) {
      Velocity(el, {translateX: '15px'}, {rotateZ: '50deg'}, {duration: 800})
      Velocity(el, {rotateZ: '100deg'}, {loop: 2})
      Velocity(el, {rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0}, {complete: done})
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
})