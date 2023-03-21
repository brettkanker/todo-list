<script>

// Lade nötige Komponenten für Pinia
import { mapState, mapWritableState, mapActions } from 'pinia'

// Lade Store
import { useTodoStore } from '@/stores/todo'

// Lade Komponente TodoList
import TodoList from '@/components/Card.vue'

export default {

  components: {
    TodoList
  },

  data() {
		return {

		}
	},
  
  computed: {
    ...mapWritableState(useTodoStore, ['todos', 'todos_open', 'todos_completed']),
  },
  
  methods: {
   ...mapActions(useTodoStore, ['fetchTodos', 'toggleTodo'])
  },
  
  
  mounted() {
		this.fetchTodos();
	}
  

}
</script>


<template>
  <main>

    <!-- Tab navigatioon -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">

      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="all-todos-tab" data-bs-toggle="tab" data-bs-target="#all-todos" type="button" role="tab">Alle ({{ todos != undefined ? todos.data.length : 0 }})</button>
      </li>

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="open-todos-tab" data-bs-toggle="tab" data-bs-target="#open-todos" type="button" role="tab">Offene ({{ todos_open != undefined ? todos_open.length : 0 }})</button>
      </li>

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="closed-todos-tab" data-bs-toggle="tab" data-bs-target="#closed-todos" type="button" role="tab">Abgeschlossene ({{ todos_completed != undefined ? todos_completed.length : 0 }})</button>
      </li>

    </ul>


    <!-- Tab content -->
    <div class="tab-content" id="todos">

      <div class="tab-pane fade show active" id="all-todos" role="tabpanel">
        <TodoList :todos="todos.data" />
      </div>

      <div class="tab-pane fade show active" id="open-todos" role="tabpanel">
        <TodoList :todos="todos_open" @toggle-todo-state="toggleTodo" />
      </div>

      <div class="tab-pane fade" id="closed-todos" role="tabpanel">
        <TodoList :todos="todos_completed" @toggle-todo-state="toggleTodo" />
      </div>

    </div>

    <hr />


   
  

  </main>
</template>

<style scoped>

li {
  list-style-type: none;
}

.done {
  color: green;
}

.open {
  color: red;
}
</style>