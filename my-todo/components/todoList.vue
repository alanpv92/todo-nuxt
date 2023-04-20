<template>
     <div class="mt-5 grid grid-cols-12">
        <div class="col-span-9" v-for="todo in getTodos" :key="todo.id" >
            <TodoItemCard :id="todo.id" :completed="todo.completed" :title="todo.title"/>
        </div>
     </div>
</template>


<script lang="ts">
 
import { useTodoStore } from '~/store/todo';

export default {
  computed:{
    getTodos(){
        return useTodoStore().todos
    }
  }

}


</script>