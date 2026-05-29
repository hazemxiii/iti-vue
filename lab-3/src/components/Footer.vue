<template>
  <footer class="bg-dark text-white text-center py-2 mt-3">
    <small>Copyright &copy; {{ year }} All rights reserved.</small>
  </footer>
</template>
<script>
export default {
    name: "FooterComponent",
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>