<template>
  <ul class="list-group list-group-flush border-end" style="min-width: 150px;">
    <li @click="changePage('home')" :class="{'active': activePage === 'home'}" class="list-group-item">Home</li>
    <li @click="changePage('students')" :class="{'active': activePage === 'students'}" class="list-group-item">Students</li>
    <li @click="changePage('about')" :class="{'active': activePage === 'about'}" class="list-group-item">About</li>
    <li @click="changePage('contact')" :class="{'active': activePage === 'contact'}" class="list-group-item">Contact</li>
  </ul>
</template>
<script>
export default {
  name: "SideBar",
  props: {
    activePage: String
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
};
</script>
<style scoped>
.list-group-item.active {
  background-color: #0d6efd;
}
</style>
