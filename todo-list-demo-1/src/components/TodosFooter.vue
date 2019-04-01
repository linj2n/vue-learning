<template>
  <footer class="footer" v-show="todos.length" v-cloak>
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      {{ remaining | pluralize }} left
    </span>
    <button
      class="clear-completed"
      @click="removeCompleted"
      v-show="todos.length > remaining"
    >Clear completed</button>
  </footer>
</template>
<script>
import filterUtil from '../utils/filterUtil.js'
export default {
  props: {
    todos: {
      type: Array
    },
    removeAllCompleted: {
      type: Function
    }
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },
  computed: {
    remaining () {
      return filterUtil.active(this.todos).length
    }
  },
  methods: {
    removeCompleted () {
      if (window.confirm('确定清除已完成的吗?')) {
        this.removeAllCompleted()
      }
    }
  }
}
</script>
