<template>
    <div>
      <form
        ref="addEmployeeForm"
        @submit.prevent="submitEmployeeForm()"
        enctype="multipart/form-data"
      >
        <div class="mt-6 mb-6">
          <div class="flex items-center justify-center w-full h-auto">
            <div
              class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold text-gray-700 dark:text-gray-200"
            >
              Edit Employee
            </div>
  
            <button
              type="submit"
              class="flex items-center justify-between px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
  
            <button
              @click="closeModalAddEmployee"
              type="button"
              class="flex items-center justify-between px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <!-- <span>Close</span> -->
            </button>
            <!--Header End-->
          </div>
        </div>
  
        <div class="flex flex-wrap">
          <div class="w-full px-3 pt-5">
            <label
              class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
            >
              Information
            </label>
          </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full px-3 pb-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Employee ID
            </label>
            <div class="relative">
              <input
                v-model="empID"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
            <div v-if="v$.empID.$error" class="mt-2 text-sm text-red-500">
            {{ v$.empID.$errors[0].$message }}
          </div>
          </div>
  
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Status
            </label>
  
            <div class="relative">
              <select
                v-model="empStatus"
                class="inline w-full px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="null">Select</option>
                <option value="1" selected>Activated </option>
                <option value="0">Unactivated</option>
              </select>
  
              <div
                class="absolute inset-y-0 right-0 flex items-center w-1/12 px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex flex-wrap">
          <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Firstname
            </label>
            <div class="relative">
              <input
                v-model="empFirstname"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
          </div>
  
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Lastname
            </label>
            <div class="relative">
              <input
                v-model="empLastname"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
  
        <div class="flex flex-wrap">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Phone
            </label>
            <div class="relative">
              <input
                v-model="empPhone"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
          </div>

          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Internal Phone 
            </label>
            <div class="relative">
              <input
                v-model="empInternalPhone"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
        <hr />
  
        <div class="flex flex-wrap">
          <div class="w-full px-3 pt-5">
            <label
              class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
            >
              Department
            </label>
          </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Position
            </label>
            <div class="relative">
              <input
                v-model="empPosition"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="off"
              />
            </div>
          </div>
          
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Department
            </label>
  
            <div class="relative">
              <select
                v-model="department_id"
                class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select</option>
                <option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department.id"
                >
                  {{ department.departmentName }}
                </option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center w-2/12 px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
              <button
                type="button"
                @click="openModalAddDepartment"
                class="float-right w-4 h-4 m-2 text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div class="flex flex-wrap">
          <div class="w-full px-3 pt-5">
            <label
              class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
            >
              Work Peiod
            </label>
          </div>
        </div>
        
        <div class="flex flex-wrap">
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Start Date
          </label>
          <div class="relative">
            <input
              v-model="empStartwork"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
            <!-- <datepicker type="date" valueType="format" :format="'dd/MM/yyyy'" :value="purchaseDate"></datepicker> -->
          </div>
        </div>

        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            End Date
          </label>
          <div class="relative">
            <input
              v-model="empEndwork"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
            <!-- <datepicker type="date" valueType="format" :format="'dd/MM/yyyy'" :value="purchaseDate"></datepicker> -->
          </div>
        </div>
      </div>
   
     
      </form>
    </div>
  
    <!-- Popup Department ADD -->
    <div
      v-if="showAddDepartmentModal"
      id="addDepartmentModal"
      class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"
      ></div>
      <div
        class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg dark:bg-gray-800 modal-container md:max-w-md"
      >
        <!-- Header -->
        <div class="flex items-center justify-center w-full h-auto">
          <div
            class="flex items-start justify-start w-full h-auto py-2 text-xl text-gray-700 dark:text-gray-200"
          >
            Add Department
          </div>
          <button
            @click="closeModalAdd"
            class="text-indigo-100 transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="-2 -2 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- Modal Content-->
        <div class="w-full h-auto mb-4">
          <form
            ref="addDepartmentForm"
            @submit.prevent="submitDepartmentForm"
            enctype="multipart/form-data"
          >
            <label
              class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
              for="name"
              >Name <font color="red">*</font></label
            >
            <input
              v-model="departmentName"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              autocomplete="off"
            />
            <div
              v-if="v$.departmentName.$error"
              class="mt-2 text-sm text-red-500"
            >
              {{ v$.departmentName.$errors[0].$message }}
            </div>
  
            <label
              class="block my-3 text-xs text-gray-700 dark:text-white"
              for="address"
              >Desciption</label
            >
            <textarea
              v-model="departmentDescription"
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
              rows="3"
            ></textarea>
  
            <div class="flex flex-wrap float-right">
              <div class="px-2">
                <button
                  type="submit"
                  class="px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import http from "@/services/BackendService";
  import "@ocrv/vue-tailwind-pagination/dist/style.css";
  import useVuelidate from "@vuelidate/core";
  import { required, helpers } from "@vuelidate/validators";
  
  export default {
    data() {
      return {
        // Validateion
        v$: useVuelidate(),
        
        //input data
        empID: "",
        empStatus: "1",
        empFirstname: "",
        empLastname: "",
        empPhone:"",
        empInternalPhone:"",
        empPosition:"",
        department_id: "",
        empStartwork:"",
        empEndwork:"",

        
        // get data
        departments: [],
  
        
        showAddDepartmentModal: false,
  
        //add form department
        departmentName: "",
        departmentDescription: "",

      };
    },
    methods: {
      async getDepartments() {
        let response = await http.get(`departments`);
        this.departments = response.data;
        // console.log(this.departments);
      },
  

      openModalAddDepartment() {
        this.showAddDepartmentModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
  
      closeModalAdd() {
        this.showAddDepartmentModal = false;
      },
  
  
      // Add form
      submitDepartmentForm() {
        this.v$.$validate();
        if (!this.v$.departmentName.$invalid) {
          let data = new FormData();
          data.append("departmentName", this.departmentName);
          data.append("departmentDescription", this.departmentDescription);
  
          //to api
          http
            .post("add-department", data)
            .then(() => {
              //reset form
              this.$refs.addDepartmentForm.reset();
              this.departmentName = "";
              this.departmentDescription = "";
              this.showAddDepartmentModal = false;
  
              // reload
              this.getDepartments();
  
              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });
  
              Toast.fire({
                icon: "success",
                title: "Add Successfully",
              }).then(() => {
                this.showAddModal = false;
              });
            })
            .catch((error) => {
              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
              });
  
              Toast.fire({
                icon: "error",
                title: error.response.data.message,
              });
            });
        }
      },
      submitEmployeeForm() {
        this.v$.$validate();
        if (
          !this.v$.empID.$invalid &&
          !this.v$.department_id.$invalid
        ) {
          let data = new FormData();
          // let id = this.$route.params.id;
          data.append("empID", this.empID);
          data.append("empStatus", this.empStatus);
          data.append("empFirstname", this.empFirstname);
          data.append("empLastname", this.empLastname);
          data.append("empPhone", this.empPhone);
          data.append("empInternalPhone", this.empInternalPhone);
          data.append("empStartwork", this.empStartwork);
          data.append("empEndwork", this.empEndwork);
          data.append("empPosition", this.empPosition);
          data.append("department_id", this.department_id);
        http
        .post("add-employee", data)
            .then(() => {
              //reset form
              this.$refs.addEmployeeForm.reset();
              // this.vendorName = "";
              // this.vendorDescription = "";
              // this.showAddVendorModal = false;
  
              // // reload
              // this.getVendors();
  
              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1300,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });
  
              Toast.fire({
                icon: "success",
                title: "Add Successfully",
              }).then(() => {
                this.$router.push('employees') 
              });
            })
            .catch((error) => {
              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 9000,
                timerProgressBar: true,
              });
  
              Toast.fire({
                icon: "error",
                title: error.response.data.message,
              });
            });
        }
      },
  
    },
  
    validations() {
      return {
        empID: {
          required: helpers.withMessage("Please input employeeID", required),
        },
        department_id: {
          required: helpers.withMessage("Please select department", required),
        },
   
      };
    },


  
    mounted() {

      // this.getAssets();
   
      this.getDepartments();
    },
  };
  </script>
  