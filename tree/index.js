/**
 * Created by chenqinhao on 2017/5/13.
 */
Vue.component('treeFolder', {
  template:
    `
      <p @click.stop.prevent="folder.show = !folder.show">
          <span>{{ folder.name }}</span>
          <tree-folder-contents v-if="folder.show" :children="folder.children"></tree-folder-contents>
      </p>
    `
  ,
  props: ['folder']
})
Vue.component('treeFolderContents', {
  template:
  `
    <ul>
        <li v-for="child of children" @click.stop="child.children?'':child.show=true">
            <tree-folder v-if="child.children" :folder="child"></tree-folder>
            <span v-else>{{ child.name }}</span>
        </li>
    </ul>
  `,
  props: ['children', 'show']
})
var vm = new Vue({
  el: '#app',
  data: {
    a:{},
    message: '',
    files: [
      {
        name: "A",
        show: false,
        children: [
          {
            name: "A1",
            show: false,
            children: [{name: "a1", show: false}]
          },
          {
            name: "A2",
            show: false,
            children: [{name: "a2",show: false}]
          }
        ]
      },
      {
        name: "B",
        show: false,
        children: [
          {
            name: "B1",
            show: false,
            children: [{name: "b1", show: false}]
          }
        ]
      }
    ]
  },
  created: function () {
    this.a.b = "111"
    this.b= "222"
    Vue.set(this, 'b', 33333)
    this.$set(this.a, 'b', 33333333333333)
    this.a = Object.assign({}, this.a, {c:2,d:4})
  }
})