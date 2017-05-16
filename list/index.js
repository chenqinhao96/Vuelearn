/**
 * Created by chenqinhao on 2017/5/13.
 */
Vue.component('todo-item', {
  template:
    `
    <li>
      {{ title }}
      <button @click="$emit(\'remove\')">X</button>
    </li>
    `
  ,
  props: ['title']
})
var vm = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Hello',
    items: [
      { message: 'Chen' },
      { message: 'Qin Hao' }
    ],
    object: {
      firstName: 'Chen',
      lastName: 'QinHao',
      Age: 21
    },
    todos: [
      { title: '打代码', isComplete: true },
      { title: '吃饭', isComplete: false },
      { title: '洗澡', isComplete: true }
      ],
    newTodoText: '',
    message: ''
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(
        {
          title: this.newTodoText,
          isComplete: false
        }
      )
      this.newTodoText  = ''
    },
    toggleConplete: function (index) {
      this.todos[index].isComplete = !this.todos[index].isComplete
    },
    warn: function (message, event) {
      if (event)
        event.preventDefault()
      alert(message)
    },
    onSubmit: function () {
      alert('submit')
    },
    onChild: function () {
      alert('child')
    },
    onParent: function () {
      alert('parent')
    },
    onMeta: function () {
      alert('meta')
    }

  }
})