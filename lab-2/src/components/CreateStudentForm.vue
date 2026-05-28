<template>
  <div class="card mt-3" style="max-width: 320px;">
    <div class="card-body">
      <h5 class="card-title">Add New Student</h5>

      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input type="text" class="form-control form-control-sm" v-model="newName" placeholder="Student Name" />
      </div>

      <div class="mb-3">
        <label class="form-label">City:</label>
        <input type="text" class="form-control form-control-sm" v-model="newCity" placeholder="Student City" />
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-success btn-sm" @click="submitForm">Save</button>
        <button class="btn btn-secondary btn-sm" @click="closeForm">Cancel</button>
      </div>

      <p v-if="error" class="text-danger mt-2 mb-0 small">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateStudentForm",
  data() {
    return {
      newName: "",
      newCity: "",
      error: ""
    };
  },
  methods: {
    submitForm() {
      if (!this.newName || !this.newCity) {
        this.error = "Both Name and City are required.";
        return;
      }
      this.$emit("save-student", {
        name: this.newName,
        city: this.newCity
      });
      this.newName = "";
      this.newCity = "";
      this.error = "";
    },
    closeForm() {
      this.$emit("cancel");
      this.newName = "";
      this.newCity = "";
      this.error = "";
    }
  }
};
</script>