import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {

  state: () => ({ 
    todos: [],
    current_todo: Object
  }),

  getters: {
    
    todos_completed: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.completed == true
        ));
      }
    },

    todos_open: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.completed == false
        ));
      }
    }

  },

  actions: {
    
    async fetchTodos() {
      try {
        this.todos = await axios.get(
          "http://localhost:3000/todos"
        );
      }
      catch (error) {
        console.log(error);
      }
    },

    async toggleTodo(id) {

      // Change in local data
      this.todos.data = this.todos.data.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
          this.current_todo = todo;
        }
        return todo;
      });


      // PUT request to server after toggle... :-)
      await axios.put(`http://localhost:3000/todos/${id}`, {
        title: this.current_todo.title,
        description: this.current_todo.description,
        category: this.current_todo.category,
        priority: this.current_todo.priority,
        time: this.current_todo.time,
        completed: this.current_todo.completed
      });

    },
    

    async addTodo() {

      // TODO :-)
      // Axios POST request

    },

    async editTodo() {

      // TODO :-)
      // Axios PUT request

    },

    async deleteTodo() {

      // TODO :-)
      // Axios DELETE request

    }

  },

})
