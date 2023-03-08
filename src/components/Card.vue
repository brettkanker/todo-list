<script>
export default {
    name: 'Card',

    props: {
        id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String
		},
		category: {
			type: String,
			required: true
		},
		time: {
			type: String
		},
        urgency: {
			type: String
		},
        status: {
			type: String,
            required: true
		},
    }

  
}
</script>


<template>
    <div class="todo">
        <div class="card" style="width: 13rem;">
            <div class="card-body">
                <h5 class="card-title">{{ todo.title }}</h5>
                <p class="card-text">{{ todo.description }}</p>
                <a href="#" class="card-link">{{ todo.category }}</a>
                <p class="card-text">{{ todo.time }}</p>
                <p class="card-text">{{ todo.urgency }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .card {
    margin: 50px 50px 20px 75px
  }
</style>