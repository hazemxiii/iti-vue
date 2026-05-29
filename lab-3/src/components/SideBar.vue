<template>
  <ul class="list-group list-group-flush border-end" style="min-width: 150px">
    <li
      :class="{ active: $route.path === '/students' }"
      class="list-group-item"
    >
      <router-link to="/students">Students</router-link>
    </li>
    <li
      :class="{ active: $route.path === '/add-student' }"
      class="list-group-item"
    >
      <router-link to="/add-student">Add Student</router-link>
    </li>
    <li :class="{ active: $route.path === '/books' }" class="list-group-item">
      <router-link to="/books">Books</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SideBar",
};
</script>
<style scoped>
.list-group-item.active {
  background-color: #0d6efd;
}

a {
  text-decoration: none;
}
.list-group-item.active a {
  color: white;
}
</style>
