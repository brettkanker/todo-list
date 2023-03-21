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

    }

  
}
</script>

<template>
    <div class="container d-flex flex-wrap justify-content-left">
        <div class="card child" v-for="todo in todos" style="width: 13rem;">
            <div class="card-body" :class="todo.completed == true ? 'card-open': 'card-done'">
                <h5 class="card-title">{{ todo.title }}</h5>
                <p class="card-text">{{ todo.description }}</p>
                <a href="#" class="card-link">{{ todo.category }}</a>
                <p class="card-text">{{ todo.time }}</p>
                <p class="card-text">{{ todo.urgency }}</p>

                <p :class="todo.completed == true ? 'done': 'open'">{{todo.completed == true ? 'Erledigt!' : 'Offen'}}</p>
                <button class="btn btn-sm btn-outline-primary" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ? 'Offen markieren' : 'Erledigt markieren' }}</button>

            </div>
        </div>
    </div>

</template>

<style scoped>

.done {
  color: green;
}
.open {
  color: red;
}

.child {
    margin: 20px 10px 20px 10px;
}

.card-open {
    background-color: rgb(219, 219, 219);
}


</style>