<template>
    <div class="w-full h-24 rounded-lg shadow-2xl grid grid-cols-12 mt-6">
        <div class="col-span-8 flex   items-center">
            <p class="p-3 text-4xl line-through " v-if="completed">{{ title }}</p>
            <p class="p-3 text-4xl" v-if="!completed">{{ title }}</p>
           

        </div>
        <div class=" col-span-4 col-start-10 flex justify-between ">
                 <button class="flex-1 bg-green-700 text-white  text-4xl" @click="changeTodoStatus(id) " v-if="!completed">✓</button>
                 <button class="bg-red-700  text-white mr-1 text-4xl  flex-1 " @click="removeTodo(id)">✕</button>
        </div>
    </div>
</template>


<script lang="ts">
import { useTodoStore } from '~/store/todo';
export default{
    props:{
        id:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        completed:{
            type:Boolean,
            required:true
        }, 
    }
   ,methods:{
    removeTodo(id:number){
        useTodoStore().removeTodo(id);
    },
    changeTodoStatus(id:number){
        useTodoStore().toggleStatusToComplete(id);
    }
   } 
}


</script>