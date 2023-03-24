<script>
import { useTodoStore } from '../stores/todo';

export default {
  name: 'Card',
  props: {
    todos: Array,
  },

  computed: {
    categories() {
      const todos = useTodoStore().todos.data
      const categories = new Set()
      todos.forEach(todo => categories.add(todo.category))
      return Array.from(categories)
    },

    days() {
      const days = new Set()
      days.add('Mo')
      days.add('Di')
      days.add('Mi')
      days.add('Do')
      days.add('Fr')
      days.add('Sa')
      days.add('So')
      return Array.from(days)
    },

    priorities() {
      const priorities = new Set()
      priorities.add('🔴')
      priorities.add('🟡')
      priorities.add('🟢')
      return Array.from(priorities)
    }
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
      todo.description = newDesc;
      this.$emit('edit-task', todo)
    },

    edit_task_category(todo, newCategory){
      todo.category = newCategory;
      this.$emit('edit-task', todo)
    },

    edit_task_day(todo, newDay){
      todo.day = newDay;
      this.$emit('edit-task', todo)
    },

    edit_task_priority(todo, newPriority){
      todo.priority = newPriority;
      this.$emit('edit-task', todo)
    },

    archive_todo(todo){
      todo.archived = true;
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
            <button class="btn bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#myCatDropdown">
              {{ todo.category }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="myCatDropdown">
              <a class="dropdown-item" v-for="category in categories" :key="category" @click="edit_task_category(todo, category)" :value="category">{{ category }}</a>
            </div>
          </div>

          <div class="dropdown day">
            <button class="btn bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#myDayDropdown">
              {{ todo.day }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="myDayDropdown">
              <a class="dropdown-item" v-for="day in days" :key="day" @click="edit_task_day(todo, day)" :value="day">{{ day }}</a>
            </div>
          </div>
          
          <div class="dropdown priority">
            <button class="btn bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#myPrioDropdown">
              {{ todo.priority }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="myPrioDropdown">
              <a class="dropdown-item" v-for="priority in priorities" :key="priority" @click="edit_task_priority(todo, priority)" :value="priority">{{ priority }}</a>
            </div>
          </div>

         <p :class="todo.completed == true ? 'done' : 'open'">{{ todo.completed == true ? 'Erledigt!' : 'Offen' }}</p>
         <button class="btn btn-sm btn-outline-primary button1" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ? 'Offen markieren' : 'Erledigt markieren' }}</button>

         <button class="btn bg-transparent button2" @click="archive_todo(todo)">🗑️</button>
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
  margin: 20px 15px 20px 10px;
  width: 14rem;
  height: 20rem;
}

.card-open {
  background-color: rgb(219, 219, 219);
}

.category {
  position: absolute;
  top: 193px;
  left: 120px;
}

.day {
  position: absolute;
  top: 193px;
  left: 60px;
}

.priority {
  position: absolute;
  top: 193px;
  left: 5px;
}

.button1 {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.button2 {
  position: absolute;
  bottom: 10px;
  right: 7px;
}
</style>