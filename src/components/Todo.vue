<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index"
        @click="todoDone(index)">
         {{index}} - {{ todo }}
        </li>
    </ul>
</template>
<script>
export default {
    prop: {
      todos: {
        type: Array,
        required: true
        }
    },
methods: {
    todoDone(indes) {
        console.log(index);
        //$emit emots and event from the child component to the parent component
        this.emit("removeTodo", index);
    }
 }
};
</script>

