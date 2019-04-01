<template>
  <div class="todoapp" id="app" v-cloak>
    <todos-header :addTodo="addTodo"/>
    <todos-body :todos="todos" :removeTodo="removeTodo"/>
    <todos-footer :todos="todos" :removeAllCompleted="removeAllCompleted"/>
  </div>
</template>

<script>
import TodosHeader from './components/TodosHeader.vue'
import TodosBody from './components/TodosBody.vue'
import TodosFooter from './components/TodosFooter.vue'
import filterUtil from './utils/filterUtil.js'

export default {
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (todo) {
      todo.id = this.todos.length
      this.todos.unshift(todo)
    },
    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    removeAllCompleted () {
      this.todos = filterUtil.active(this.todos)
    }
  },
  computed: {
    remaining () {
      return filterUtil.active(this.todos).length
    }
  },
  name: 'App',
  components: {
    TodosHeader,
    TodosBody,
    TodosFooter
  }
}
</script>

<style>
</style>
