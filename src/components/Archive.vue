<script>
import { useTodoStore } from '../stores/todo';

export default {
  name: 'Archive',
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
    },

  },

  methods: {

    archive_todo(todo){
      todo.archived = true;
      this.$emit('edit-task', todo)
    },

    
  },


}
</script>

<template>
  <div class="container d-flex flex-wrap justify-content-left">

    <div v-for="todo in todos">
        <div class="card">
            <div class="card-body">
                <p>{{ todo.id }}</p>
            </div>
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