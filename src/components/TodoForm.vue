<template>
<div>
    <slot name="tital"></slot>
    <form @submit="addTodo">
        <input type="text" v-model="newTodo" />
    </form>
     <slot name="desc"></slot>
     <br />
     <slot>Default slot, placeholder content</slot>
 </div>      
</template>
<script>
export default {
     data() {
        return {
            newTodo: ""
            };
        },
        methods: {
            addTodp() {
                if(this.newTodo.length) {
                    this.$emit("newTodo", this.newTodo);
                    this.newTodo = "";
                }
            }
        }
        };
        </script>
        