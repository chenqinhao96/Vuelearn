/**
 * Created by chenqinhao on 2017/5/12.
 */
var child = {
  template: '<div>I m child component</div>'
}
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo }}</li>'
})
Vue.component('my-component', {
  props: [],
  template: '<div>A custom component!</div>'
})
Vue.component('simple-counter', {
  template: '<button @click="increase">{{ counter }} - {{ count }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  props: ['count'],
  methods: {
    increase: function () {
      this.counter += 1
      if (this.counter > this.count) {
        this.counter = 0
      }
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {},
  components: {
    'child': child
  }
})

Vue.component('myList', {
  template:
    `
    <ul>
        <slot name="item"
            v-for="item in items"
            :text="item.text">    
        </slot>
    </ul>
    `
  ,
  props: ['items']
})

var app1 = new Vue({
  el: '#app1',
  data: {
    list: ['蔬菜', '奶酪', '酸奶'],
    items: [
      {text: "A"},
      {text: "B"},
      {text: "C"}
    ]
  }
})
