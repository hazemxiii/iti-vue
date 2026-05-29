<template>
  <div v-if="!loading" class="p-3 flex-grow-1">
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
          <td class="actions-cell">
            <button
              class="btn btn-danger btn-sm"
              @click="deleteStudent(student.id)"
            >
              Delete
            </button>
            <button
              class="btn btn-success btn-sm"
              @click="
                $router.push({
                  name: 'EditStudentForm',
                  params: { id: student.id },
                })
              "
            >
              Edit
            </button>
            <button
              class="btn btn-primary btn-sm"
              @click="
                $router.push({
                  name: 'StudentDetails',
                  params: { id: student.id },
                })
              "
            >
              View
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex align-items-center gap-3 mt-3">
      <p class="mb-0">Number of students: {{ students.length }}</p>
    </div>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "StudentsTable",
  setup() {
    const students = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const res = await fetch("http://localhost:3000/students");
      const data = await res.json();
      students.value = data;
      loading.value = false;
    });
    return { students, loading };
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    async deleteStudent(id) {
      const res = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });
      console.log(res);
      this.students = this.students.filter((student) => student.id !== id);
    },
    cancelForm() {
      this.showForm = false;
    },
  },
};
</script>
<style scoped>
.actions-cell {
  display: flex;
  gap: 10px;
}
</style>
