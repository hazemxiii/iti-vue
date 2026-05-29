<template>
  <div class="card mt-3" style="max-width: 320px">
    <div class="card-body">
      <h5 class="card-title">Add New Student</h5>

      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input
          type="text"
          class="form-control form-control-sm"
          v-model="newName"
          placeholder="Student Name"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">City:</label>
        <input
          type="text"
          class="form-control form-control-sm"
          v-model="newCity"
          placeholder="Student City"
        />
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-success btn-sm" @click="addStudent">Save</button>
      </div>

      <p v-if="error" class="text-danger mt-2 mb-0 small">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "CreateStudentForm",
  setup() {
    const route = useRoute();
    const studentId = route.params.id;

    const newName = ref("");
    const newCity = ref("");
    const error = ref("");

    onMounted(async () => {
      if (studentId) {
        const res = await fetch(`http://localhost:3000/students/${studentId}`);
        const data = await res.json();
        newName.value = data.name;
        newCity.value = data.city;
      }
    });
    return { newName, newCity, error, studentId };
  },
  methods: {
    async updateStudent() {
      const res = await fetch(
        `http://localhost:3000/students/${this.studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.newName,
            city: this.newCity,
          }),
        },
      );
      if (res.ok) {
        this.$router.push({ name: "StudentsTable" });
      }
    },
    addStudent() {
      if (!this.newName || !this.newCity) {
        this.error = "Both Name and City are required.";
        return;
      }
      if (this.studentId) {
        this.updateStudent();
        return;
      }
      fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.newName,
          city: this.newCity,
        }),
      });
      this.newName = "";
      this.newCity = "";
      this.error = "";
    },
  },
};
</script>
