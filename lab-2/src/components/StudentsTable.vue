<template>
  <div class="p-3 flex-grow-1">
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex align-items-center gap-3 mt-3">
      <p class="mb-0">Number of students: {{ students.length }}</p>
      <button class="btn btn-primary btn-sm" @click="showForm = !showForm">Add Student</button>
    </div>

    <CreateStudentForm 
      v-if="showForm" 
      @save-student="addStudent" 
      @cancel="cancelForm" 
    />
  </div>
</template>

<script>
import CreateStudentForm from "./CreateStudentForm.vue";

export default {
  name: "StudentsTable",
  components: {
    CreateStudentForm
  },
  data() {
    return {
      students: [
        { id: 1, name: "Hazem", city: "Alexandria" },
      ],
      showForm: false,
    };
  },
  methods: {
    addStudent(newStudent) {
      const nextId = this.students.length > 0 
        ? Math.max(...this.students.map(s => s.id)) + 1 
        : 1;

      this.students.push({
        id: nextId,
        name: newStudent.name,
        city: newStudent.city
      });

      this.showForm = false;
    },
    cancelForm() {
      this.showForm = false;
    }
  }
};
</script>

