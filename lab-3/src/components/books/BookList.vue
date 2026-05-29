<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <BookCard v-for="book in books" :key="book.isbn" :book="book" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BookCard from "./BookCard.vue";

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:3000/books");
    books.value = await response.json();
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
};

onMounted(() => {
  fetchBooks();
});
</script>
