<template>
  <div class="mt-6 mb-6">
    <div class="flex items-center justify-center w-full h-auto">
      <div
        class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold text-gray-700 dark:text-gray-200"
      >
        Checkout
      </div>

      <!--Header End-->
    </div>
  </div>

  <div class="flex flex-wrap pt-2">
    <button
      @click="showAddAsset"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Select Assets
      <svg
        aria-hidden="true"
        class="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>

  <div v-if="assets_select.length > 0">
    <div class="flex flex-wrap">
      <div class="w-full px-3 pt-5">
        <label
          class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
        >
          Assets Pending
        </label>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full px-3 pb-3 mb-6 md:mb-0">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">
                No.
              </th>
              <th scope="col" class="px-6 py-3">
                IT TAG
              </th>
              <th scope="col" class="px-6 py-3">
                TYPE
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Site
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(asset, index) in assets_select"
              :key="asset.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="px-6 py-4">
                {{ index + 1 }}
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ asset.tagIt }}
              </th>
              <td class="px-6 py-4">
                {{ asset.categorys.categoryName }}
              </td>
              <td class="px-6 py-4">
                {{ asset.statusAsset }}
              </td>
              <td class="px-6 py-4">
                {{ asset.sites.siteName }}
              </td>
              <td class="px-6 py-4">
                {{ asset.locations.locationName }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex flex-wrap pt-5">
      <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
          for="grid-state"
        >
          Assign to
        </label>
        <div class="relative">
          <select
            v-model="department_id"
            class="inline w-full px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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

      <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
          for="grid-state"
        >
          Check-out Date
        </label>
        <div class="relative">
          <input
            v-model="checkoutDate"
            class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="date"
          />
          <!-- <datepicker type="date" valueType="format" :format="'dd/MM/yyyy'" :value="purchaseDate"></datepicker> -->
        </div>
      </div>
    </div>

    <div class="flex justify-center pt-5">
      <div>
        <button
          type="submit"
          class="px-4 py-2 mt-4 text-sm text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple"
        >
          Checkout
        </button>
      </div>
      <div class="px-2">
        <button
          type="submit"
          class="px-4 py-2 mt-4 text-sm text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!--end asset select-->
  <!-- Popup Select Asset -->
  <div
    v-if="addAssetModal"
    id="addAssetModal"
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"
    ></div>
    <div
      class="z-50 w-full max-w-screen-md max-h-full p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg dark:bg-gray-800 modal-container"
    >
      <!-- Header -->
      <div class="flex items-center justify-center w-full h-auto">
        <div
          class="flex items-start justify-start w-full h-auto py-2 text-xl text-gray-700 dark:text-gray-200"
        >
          Select Assets
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
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="pb-4 bg-white dark:bg-gray-900">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
              @keyup.enter="submitSearchForm"
              v-model="keyword"
                type="text"
                id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for assets"
              />
            </div>
          </div>

          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      v-model="checkAll"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  IT TAG
                </th>
                <th scope="col" class="px-6 py-3">
                  TYPE
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Site
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="asset in assets.data"
                :key="asset.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      v-model="assets_select"
                      type="checkbox"
                      :value="asset"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only"
                      >checkbox</label
                    >
                  </div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ asset.tagIt }}
                </th>
                <td class="px-6 py-4">
                  {{ asset.categorys.categoryName }}
                </td>
                <td class="px-6 py-4">
                  {{ asset.statusAsset }}
                </td>
                <td class="px-6 py-4">
                  {{ asset.sites.siteName }}
                </td>
                <td class="px-6 py-4">
                  {{ asset.locations.locationName }}
                </td>
              </tr>
            </tbody>
          </table>
          <!-- แสดงผลตัวแบ่งหน้าเพจ-->
          <!-- <VueTailwindPagination
            :current="currentPage"
            :total="total"
            :per-page="perPage"
            @page-changed="onPageClick($event)"
          /> -->

          <div class="flex flex-wrap float-right">
            <div class="px-2">
              <button
                @click="closeModalAdd()"
                class="px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/services/BackendService";
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  components: {
    // VueTailwindPagination,
  },
  data() {
    return {
      // Validateion
      v$: useVuelidate(),

      currentPage: 0,
      perPage: 2,
      total: 0,

      //input data
      empID: "",
      empStatus: "1",
      empFirstname: "",
      empLastname: "",
      empPhone: "",
      empInternalPhone: "",
      empPosition: "",
      department_id: "",
      empStartwork: "",
      empEndwork: "",

      // get data

      assets: [],
      assets_select: [],
      checked: [],

      keyword: "",
      addAssetModal: false,

      //add form department
      departmentName: "",
      departmentDescription: "",
    };
  },
  methods: {
    onPageClick(event) {
      this.currentPage = event;

      if (this.keyword == "") {
        // ไม่ได้ค้นหา
        this.getAssets(this.currentPage);
      } else {
        // this.getProductsSearch(this.currentPage);
      }
    },
    //       checkAll: function(){

    // this.isCheckAll = !this.isCheckAll;
    // this.asset_all = [];
    // if(this.isCheckAll){	// Check all

    //   for (var key in this.assets_select) {
    //               this.asset_all.push(this.assets_select[key]);
    //               console.log(key)
    //           }

    // }

    // },
    // updateCheckall: function(){
    // if(this.asset_all.length == this.assets_select.length){
    //           this.isCheckAll = true;
    //         }else{
    //           this.isCheckAll = false;
    //         }
    // },
    async getAssets(pageNumber) {
      let response = await http.get(`assets?page=${pageNumber}`);
      let responseAsset = response.data;

      this.assets = responseAsset;
      // this.currentPage = responseAsset.current_page;
      // this.perPage = responseAsset.per_page;
      // this.total = responseAsset.total;

      // let response = await http.get(`assets?page=${pageNumber}`);
      // this.assets = response.data.data;
      // console.log(this.assets);
    },

    submitSearchForm() {
      
      if (this.keyword != "") {
           http.get(`asset/search/${this.keyword}`).then((response) => {
          let responseAsset = response.data;
          this.assets = responseAsset;
          // this.currentPage = responseAsset.current_page;
          // this.perPage = responseAsset.per_page;
          // this.total = responseAsset.total;
        });
      } else {
        this.$swal.fire("ใส่ก่อน");
      }
      //   // เรียกค้นไปยัง api ของ laravel
      //   http.get(`assets/search/${this.keyword}`).then((response) => {
      //     let responseAsset = response.data;
      //     this.assets = responseAsset;
      //     // this.currentPage = responseAsset.current_page;
      //     // this.perPage = responseAsset.per_page;
      //     // this.total = responseAsset.total;
      //   });
      // } else {
      //   this.$swal.fire("ใส่ก่อน");
      // }
    },

    showAddAsset() {
      this.addAssetModal = true;
      // this.showList = false;
      // this.showAdd = true;
    },

    closeModalAdd() {
      this.addAssetModal = false;
    },

    //     selectAssets(id){
    //         //in here you can check what ever condition  before append to array.
    //         if(this.assets_select.includes(id)){
    //             // eslint-disable-next-line no-undef
    //             this.assets_select=debounce(() => {
    //   console.log('debug')
    // }, 500)
    //         }else{
    //             this.assets_select.push(id)
    //         }
    //         console.log(this.assets_select)
    //     },

    //       assetsAdd() {
    // this.assets_select
    //       },

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
      if (!this.v$.empID.$invalid && !this.v$.department_id.$invalid) {
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
              this.$router.push("employees");
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
    this.currentPage = 1;

    this.getAssets(this.currentPage);
  },

  computed: {
    checkAll: {
      get: function() {
        return this.assets.data
          ? this.assets_select.length == this.assets.data.length
          : false;
      },
      set: function(value) {
        var checked = [];
        if (value) {
          this.assets.data.forEach(function(asset) {
            checked.push(asset);
          });
        }
        this.assets_select = checked;
      },
    },
  },
};
</script>
