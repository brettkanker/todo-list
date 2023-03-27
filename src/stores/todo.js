import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {

  state: () => ({ 
    todos: [],
    current_todo: Object
  }),

  getters: {

    archived_todos: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.archived == true
        ));
      } 
    },

    non_archived_todos: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.archived == false
        ));
      } 
    },
    
    todos_completed: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.completed == true && todo.archived == false
        ));
      }
    },

    todos_open: (state) => {
      if (state.todos.data) {
        return state.todos.data.filter(todo => (
          todo.completed == false && todo.archived == false
        ));
      }
    },

    todos_sorted: (state) => {
      if (state.todos.data) {
        return state.todos.data.sort((a,b) => a.completed - b.completed)
      }
    },

    // Get all unique categories in todos
    categories: (state) => {
      const categories = []
      state.todos.data.forEach((todo) => {
        if (!categories.includes(todo.category)) {
          categories.push(todo.category)
        }
      })
      return categories
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
        archived: this.current_todo.archived,
        completed: this.current_todo.completed
      });

    },
    

    async addTodo() {

      // TODO :-)
      // Axios POST request

    },

    async editTask(todo) {
      axios.put("http://localhost:3000/todos/" + todo.id, todo)
    },


  },

})
