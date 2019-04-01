export default {
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  }
}
