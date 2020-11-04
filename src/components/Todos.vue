<template>
  <div>

    <div class="legend">
      <span>Double click to mark as complete</span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in DataList"
        :key="todo.id"
        class="todo"
        v-bind:class="{'completed':todo.completed}"
      >
        {{ todo.title }}
        <i @click="DeleteListTodo(todo.id)" class="fas fa-eraser"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["ListTodos", "DeleteListTodo", "UpdateList"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.UpdateList(updTodo);
    }
  },
  computed: mapGetters(["DataList"]),
  created() {
    this.ListTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #757780;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #000;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
 
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;

}

.completed {
  text-decoration: line-through;
  color: #000;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
