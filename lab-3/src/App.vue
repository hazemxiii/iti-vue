<template>
  <HeaderComponent />
  <div class="d-flex">
    <SideBar :activePage="page" @changePage="changePage" />
    <router-view />
  </div>
  <FooterComponent />
</template>

<script>
import SideBar from "./components/SideBar.vue";
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      page: "students",
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
  components: {
    SideBar,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
