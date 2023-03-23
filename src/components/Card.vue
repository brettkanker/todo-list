<script>
import { useTodoStore } from '../stores/todo';

export default {

  setup() {
    const store = useTodoStore()

    const categories = store.todos.data
      ? [...new Set(store.todos.data.map((todo) => todo.category))]
      : []

    return { categories }
  },

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
    
    edit_task_desc(todo, newDesc){
      //Task Bearbeiten mit neuem Wert
      todo.description = newDesc;
      //Task in DB Updaten
      this.$emit('edit-task', todo)
    },
  },


}
</script>

<template>
  <div class="container d-flex flex-wrap justify-content-left">
    <div class="card" v-for="todo in todos">
      <div class="card-body" :class="todo.completed == true ? 'card-open' : 'card-done'">

          <input class="form-control border-0 bg-transparent text-truncate" type="text" placeholder="Titel" style="max-width: 100%;" @change="edit_task_title(todo, $event.target.value)" :value="todo.title">
          <textarea class="form-control border-0 bg-transparent" type="text" placeholder="Beschreibung" style="max-width: 100%;" @change="edit_task_desc(todo, $event.target.value)" :value="todo.description"> </textarea>

          <div class="dropdown category">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#myDropdown">
              {{ todo.category }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="myDropdown">
              <a class="dropdown-item" v-for="category in categories" :key="category">{{ category }}</a>
            </div>
          </div>

          <!-- <p class="card-text category">{{ todo.category }}</p> -->
          <p class="card-text time">{{ todo.time }}</p>
          <p class="card-text priority">{{ todo.priority == "Hoch" ? '🔴' : (todo.priority == "Mittel" ? '🟡' : '🟢') }}</p>
        


        <p :class="todo.completed == true ? 'done' : 'open'">{{ todo.completed == true ? 'Erledigt!' : 'Offen' }}</p>
        <button class="btn btn-sm btn-outline-primary knopf" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ? 'Offen markieren' : 'Erledigt markieren' }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.done {
  color: green;
  position: absolute;
  bottom: 40px;
  left: 15px;

}

.open {
  color: red;
  position: absolute;
  bottom: 40px;
  left: 15px;
}
.card {
  margin: 20px 10px 20px 10px;
  width: 13rem;
  height: 20rem;
}

.card-open {
  background-color: rgb(219, 219, 219);
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

.knopf {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>