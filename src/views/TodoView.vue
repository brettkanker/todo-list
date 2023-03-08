<script>

import Card from '@/components/Card.vue'

// Lade Komponente Card
export default {
    name: 'TodoView',
  components: {
    Card
  },

  data() {
    return {
        todos: [
            {
                id: 1,
                title: 'Zähne waschen!',
                description: 'Lorem ipsum',
                category: 'Zuhause',
                time: '20:30',
                urgency: 'Heiss',
                status: 'offen'
            },
            {
                id: 2,
                title: 'Hello World!',
                text: 'Lorem ipsum',
                category: 'Zuhause',
                time: '10:30',
                urgency: 'Kalt',
                status: 'offen'
            },
        ]
      
    }
  }
}
</script>


<template>

  <div v-for="todo in todos" v-bind:key="todo.id">
    <Card v-bind="todo" />
  </div>

</template>

