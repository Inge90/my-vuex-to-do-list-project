<template>
  <div>
     <div class="row">
    <div class="col">
       <div class='filter'>
    Filter To-dos:
    <select @change="FilterList($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
    </div>
    </div>
    <div class="col">
      
    </div>
  </div>

  
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["FilterList"])
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #757780 1px solid;
}

.filter{
  float: left;
}

</style>
