<script>
export default {
    name: 'Card',

    // props: {
    //     id: {
	// 		type: Number,
	// 		required: true
	// 	},
	// 	title: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	description: {
	// 		type: String
	// 	},
	// 	category: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	time: {
	// 		type: String
	// 	},
    //     urgency: {
	// 		type: String
	// 	},
    //     status: {
	// 		type: String,
    //         required: true
	// 	},
    // },

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
    <!-- <div class="todo">
        <div class="card" style="width: 13rem;">
            <div class="card-body">
                <h5 class="card-title">{{ todo.title }}</h5>
                <p class="card-text">{{ todo.description }}</p>
                <a href="#" class="card-link">{{ todo.category }}</a>
                <p class="card-text">{{ todo.time }}</p>
                <p class="card-text">{{ todo.urgency }}</p>

                <button class="btn btn-sm btn-outline-primary" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ? 'Offen markieren' : 'Erledigt markieren' }}</button>
            </div>
        </div>
    </div> -->

    <ul class="list-group">

    <li class="list-group-item" v-for="todo in todos">

    <h3>{{todo.title}}</h3>
    <p :class="todo.completed == true ? 'done': 'open'">{{todo.completed == true ? 'Erledigt!' : 'Offen'}}</p>
    <button class="btn btn-sm btn-outline-primary" @click="toggle_todo_state(todo.id);">{{ todo.completed == true ? 'Offen markieren' : 'Erledigt markieren' }}</button>

    </li>
    </ul>

</template>

<style scoped>
  .card {
    margin: 50px 50px 20px 75px
  }

  .done {
  color: green;
}
.open {
  color: red;
}
</style>