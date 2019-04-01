<template>
  <header class="header">
    <h1>todos</h1>
    <input
      autofocus="autofocus"
      autocomplete="off"
      placeholder="What needs to be done?"
      class="new-todo"
      v-model="newTodo"
      @keyup.enter="add"
    >
  </header>
</template>
<script>
export default {
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  // 本组件的数据域，需要写成函数形式
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    add () {
      // 1. 校验
      const inputTodo = this.newTodo.trim()
      if (!inputTodo) {
        alert('内容非空')
        return
      }
      // 2. 封装 todo
      const todo = {
        title: inputTodo,
        completed: false
      }
      this.addTodo(todo)
      this.newTodo = ''
    }
  }
}
</script>
<style>
</style>
