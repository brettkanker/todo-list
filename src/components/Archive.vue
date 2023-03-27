<script>
import { useTodoStore } from '../stores/todo';
import axios from 'axios';

export default {
  name: 'Archive',
  props: {
    todos: Array,
  },

  methods: {

    un_archive_todo(todo){
      todo.archived = false;
      this.$emit('edit-task', todo)
    },

    delete_todo: function(todo) {
      axios.delete('http://localhost:3000/todos/' + todo.id, todo)
        .then(response => {
          todo.archived = false;
          this.$emit('delete-todo', todo);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },


}
</script>

<template>
  <div class="container d-flex flex-wrap justify-content-left">
    <div v-for="todo in todos">
        <div v-if="todo.archived">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title title overflow-hidden">{{ todo.title }}</h5>
                    <p class="card-text description overflow-hidden">{{ todo.description }}</p>
                    <p class="card-text category">{{ todo.category }}</p>
                    <p class="card-text day">{{ todo.day }}</p>
                    <p class="card-text priority">{{ todo.priority }}</p>
                    <p :class="todo.completed == true ? 'done': 'open'">{{todo.completed == true ? 'Erledigt!' : 'Offen'}}</p>

                    <button class="btn bg-transparent border-dark button1" @click="un_archive_todo(todo)">Speichern</button>
                    <button class="btn bg-transparent border-dark button2" @click="delete_todo(todo)">Löschen</button>
                </div>
            </div>   
        </div>
        
    </div>
  </div>
</template>

<style scoped>

.done {
  color: green;
  position: absolute;
  bottom: 45px;
  left: 22px;

}

.open {
  color: red;
  position: absolute;
  bottom: 45px;
  left: 22px;
}
.card {
  margin: 20px 15px 20px 10px;
  width: 14rem;
  height: 20rem;
  background-image: url(../assets/paper.jpg);
}

.category {
  position: absolute;
  top: 193px;
  left: 120px;
}

.day {
  position: absolute;
  top: 193px;
  left: 55px;
}

.priority {
  position: absolute;
  top: 193px;
  left: 17px;
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