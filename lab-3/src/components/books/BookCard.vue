<template>
  <div class="col">
    <div
      class="card h-100 border-0 shadow-sm border-top border-4 book-card-hover"
      :class="book.pages < 50 ? 'border-warning' : 'border-success'"
    >
      <div class="position-relative overflow-hidden" style="height: 250px">
        <img
          :src="book.imageUrl"
          class="w-100 h-100 object-fit-cover"
          :alt="book.title"
        />

        <span
          class="badge bg-dark bg-opacity-75 position-absolute top-0 end-0 m-3 shadow-sm"
        >
          {{ book.category }}
        </span>

        <span
          class="badge position-absolute top-0 start-0 m-3 shadow-sm"
          :class="
            book.pages < 50 ? 'bg-warning text-dark' : 'bg-success text-white'
          "
        >
          <i class="bi bi-file-earmark-text"></i>
          {{ book.pages }} pages
        </span>
      </div>

      <div class="card-body d-flex flex-column p-3">
        <h3 class="h6 fw-bold text-dark mb-1 text-truncate">
          {{ book.title }}
        </h3>

        <p class="text-secondary small mb-3">by {{ book.author }}</p>

        <div class="mt-auto pt-3 border-top border-light-subtle">
          <div class="d-flex justify-content-between mb-2 small text-muted">
            <span>ISBN</span>
            <span class="fw-semibold text-dark font-monospace">
              {{ book.isbn }}
            </span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <span class="small text-muted">Price</span>
            <span class="h5 fw-bold text-primary mb-0">
              {{ formatPrice(book.price) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  book: {
    type: Object,
    required: true,
  },
});
const formatPrice = (price) => {
  return `$${Number(price).toFixed(2)}`;
};
</script>
