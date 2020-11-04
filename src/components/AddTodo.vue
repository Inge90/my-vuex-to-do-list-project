<template>
  <div>
    <div class="jumbotron">
    <p class="lead">Add a new activity to the to-do list</p>
    <hr class="my-4">
      <div class="add form-group" >
        <form @submit="onClickSubmit">
          <input type="text" v-model="title" placeholder="Add new To-do...">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["AddListTodo"]),
    onClickSubmit(event) {
      event.preventDefault();
      this.AddListTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #757780;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #757780;
  color: #fff;
  border: 1px #757780 solid;
  cursor: pointer;
}


</style>
