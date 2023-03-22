<script>
export default {
  name: 'Card',

  props: {
    todos: Array,
  },

  methods: {

    toggle_todo_state(id) {
      this.$emit('toggle-todo-state', id)
    },

    edit_task_title(todo, newTitle){
      //Task Bearbeiten mit neuem Wert
      todo.title = newTitle;
      //Task in DB Updaten
      this.$emit('edit-task', todo)
    },
    
    edit_desc(todo, newdesc){
      //Task Bearbeiten mit neuem Wert
      todo.desc = newTdecs;
      //Task in DB Updaten
      this.$emit('edit-task', todo)
    }

  }


}
</script>

<template>
  <div class="container d-flex flex-wrap justify-content-left">
    <div class="card child" v-for="todo in todos">
      <div class="card-body" :class="todo.completed == true ? 'card-open' : 'card-done'">
        <input class="card-title title overflow-hidden border-0 bg-transparent" @change="edit_task_title(todo, $event.target.value)" :value="todo.title">

        <p class="card-text description overflow-hidden">{{ todo.description }}</p>
        <p class="card-text category">{{ todo.category }}</p>
        <p class="card-text time">{{ todo.time }}</p>
        <p class="card-text priority">{{ todo.priority == "Hoch" ? '🔴' : (todo.priority == "Mittel" ? '🟡' : '🟢') }}</p>


        <p :class="todo.completed == true ? 'done' : 'open'">{{ todo.completed == true ? 'Erledigt!' : 'Offen' }}</p>
        <button class="btn btn-sm btn-outline-primary" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ?
          'Offen markieren' : 'Erledigt markieren' }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.done {
  color: green;
  position: absolute;
  bottom: 40px;
  left: 10px;

}

.open {
  color: red;
  position: absolute;
  bottom: 40px;
  left: 10px;
}

.card {
  margin: 20px 10px 20px 10px;
  width: 13rem;
  height: 20rem;
}

.card-open {
  background-color: rgb(219, 219, 219);
}

.title {
  position: absolute;
  top: 15px;
  left: 10px;
  height: 50px;
}

.description {
  position: absolute;
  top: 70px;
  left: 10px;
  height: 100px;
}

.category {
  position: absolute;
  top: 200px;
  left: 100px;
}

.time {
  position: absolute;
  top: 200px;
  left: 40px;
}

.priority {
  position: absolute;
  top: 200px;
  left: 10px;
}


.btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>