import { defineStore } from "pinia";
import { Todo } from "~/types/todo";

export const useTodoStore = defineStore("todos", {
  state() {
    return {
      todos: [] as Todo[],
    };
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      });
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleStatusToComplete(id: number) {
      this.todos = this.todos.map((todo) => {
        if (todo.id == id) {
          return {
            id: todo.id,
            title: todo.title,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});
