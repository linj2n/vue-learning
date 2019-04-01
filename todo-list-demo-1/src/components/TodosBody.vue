<template>
  <section class="main" style>
    <input id="toggle-all" type="checkbox" class="toggle-all">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li class="todo" v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed}">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="todo.completed">
          <label>{{todo.title}}</label>
          <button class="destroy" @click="remove(todo)"></button>
        </div>
        <input type="text" class="edit">
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  // 向外部声明可以接受的属性
  props: {
    todos: Array,
    removeTodo: {
      type: Function,
      required: false
    }
  },
  methods: {
    remove (todo) {
      this.removeTodo(todo)
    }
  }
}
</script>
<style>
</style>
