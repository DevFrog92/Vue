const TodoList = {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <template v-for="todo in todos">
        <slot :todoo="todo">
          <li :key="todo.id">
            {{ todo.text }}
          </li>
        </slot>
      </template>
    </ul>
  `
}

const vm = new Vue({
  el: "#app",
  data: function() {
    return {
      todos: [
        {id:1, text:"C++", isCompleted:true},
        {id:1, text:"javascript", isCompleted:false},
        {id:1, text:"html", isCompleted:true},
        {id:1, text:"css", isCompleted:false},
      ]
    }
  },
  components:{
    TodoList
  }
})