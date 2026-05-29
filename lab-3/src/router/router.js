import { createRouter, createWebHistory } from "vue-router";

import StudentsTable from "../components/StudentsTable.vue";
import CreateStudentForm from "../components/CreateStudentForm.vue";
import StudentDetails from "../components/StudentDetails.vue";
import BookList from "../components/books/BookList.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: StudentsTable,
  },
  {
    path: "/students",
    name: "StudentsTable",
    component: StudentsTable,
  },
  {
    path: "/add-student",
    name: "CreateStudentForm",
    component: CreateStudentForm,
  },
  {
    path: "/student/:id",
    name: "StudentDetails",
    component: StudentDetails,
  },
  {
    path: "/edit-student/:id",
    name: "EditStudentForm",
    component: CreateStudentForm,
  },
  {
    path: "/books",
    name: "Books",
    component: BookList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
