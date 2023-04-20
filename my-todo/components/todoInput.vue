<template>
    <div class="grid grid-cols-12" >
         <div class="col-span-8">
            <input v-model="title" type="text" placeholder="Enter Todo" class="border w-full h-14 px-2  rounded-lg shadow-lg" />
           
         </div>
         <div class="flex justify-start align-middle col-span-1">
            <button @click="addTodo" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl border-r-0 w-full shadow-lg mx-2">Add</button>
         </div>
    </div>
</template>

<script lang="ts">
 import { useTodoStore } from '~/store/todo';
 import {Todo} from "@/types/todo"; 
 export default {
    data(){
        return {
            title:''
        }
    },
    methods:{
        addTodo(){
            const todo:Todo={
                id:Date.now(),
                title:this.title,
                completed:false
            }
            useTodoStore().addTodo(todo)
         this.title='';   
        }
    }

 }

</script>