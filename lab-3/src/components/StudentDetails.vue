<template>
  <div class="container mt-5">
    <!-- Error Message -->
    <div v-if="error" class="alert alert-danger text-center shadow-sm">
      {{ error }}
    </div>

    <!-- Student Details -->
    <div v-else class="card shadow-lg border-0">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Student Details</h3>
      </div>

      <div class="card-body">
        <div class="row mb-3">
          <div class="col-sm-3 fw-bold">Name:</div>
          <div class="col-sm-9">{{ student.name }}</div>
        </div>

        <div class="row mb-3">
          <div class="col-sm-3 fw-bold">City:</div>
          <div class="col-sm-9">{{ student.city }}</div>
        </div>
      </div>

      <div class="card-footer text-muted">Student ID: {{ studentId }}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "StudentDetails",
  setup() {
    const route = useRoute();
    const studentId = route.params.id;

    const student = ref({});
    const error = ref(null);

    onMounted(async () => {
      try {
        const res = await fetch(`http://localhost:3000/students/${studentId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch student");
        }

        const data = await res.json();
        student.value = data;
      } catch (err) {
        error.value = err.message;
      }
    });

    return { student, studentId, error };
  },
};
</script>
