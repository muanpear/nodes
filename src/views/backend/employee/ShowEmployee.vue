<!-- eslint-disable vue/require-v-for-key -->
<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    <!-- SHOW{{ $route.params.id }} -->
    Employee Detail
  </h2>
  <!-- <h5>{{ employee }}</h5> -->

  <div class="flex flex-wrap">
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <div
        class="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col items-center pt-5 pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://f.ptcdn.info/491/057/000/p8f7b665ep025g4hYj3-o.jpg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ employee.empFirstname }} {{ employee.empLastname }}
          </h5>
          <!-- <span class="text-sm text-gray-500 dark:text-gray-400"
            >{{ employee.departments.departmentName }}</span
          > -->
          <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">EmployeeID : {{ employee.empID }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Status : {{ employee.empStatus }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Position : {{ employee.empPosition }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phone : {{ employee.empPhone }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phone Ext : {{ employee.empInternalPhone }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Start Work : {{ employee.empStartwork }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Start End : {{ employee.empEndwork }}</span>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"></span>
            </li>
            
        </ul>
        </div>
      </div>
    </div>
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <div
        class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-between mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white"
          >
          Assets use
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    NB-TELECOM777
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    245345345435
                  </p>
                </div>
       
              </div>
            </li>
        
            
            
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    PC-146
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    2465675765
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-between mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white"
          >
          System use
          </h5>
          <button @click="openModalAddSystem"
                    class="float-right px-1 py-1 mx-1 leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                  </button>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <p class="dark:text-gray-400">E-Mail</p>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    User: Naichangyai
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <button
                    class="float-right px-1 py-1 mx-1 leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple"
                  >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </button>
                </div>
              </div>
            </li>
        
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                  <p>Printer</p>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    User: Naichangyai
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <button
                    class="float-right px-1 py-1 mx-1 leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple"
                  >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </button>
                </div>
              </div>
            </li>
            
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                  <p>Drive</p>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    192.168.200.98 | U: j.worasak P: WSlink2019
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    192.168.200.60 | U: j.worasak P: WSlink2019
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    192.168.196.8 | U: j.worasak P: WSlink2019
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>

  <!-- Popup สำหรับเพิ่ม Add new System -->
  <div
    v-if="showAddSystemModal"
    id="addSystemModal"
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
          Add new system
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
          ref="addSystemForm"
          @submit.prevent="submitSystemForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Type <font color="red">*</font></label
          >
          <select
              v-model="category_id"
              class="inline w-full px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
            <option value="null">Select</option>
            <option v-for="type in types" :value="type.value">{{type.name}}</option>
             
             
                
              
            </select>
       

          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name / Domain</label
          >
          <input
            v-model="categoryCode"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />

          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Username</label
          >
          <input
            v-model="categoryCode"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />

          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Password</label
          >
          <input
            v-model="categoryCode"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />

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
export default {
  data() {
    return {
      types: [
      { name: 'E-mail', value: 'email' },
      { name: 'Printer', value: 'printer' },
      { name: 'Drive', value: 'drive' },
    ],
      employee: [],
      showParam: "",

      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      // เปิด popup แสดงหน้าเพิ่มสินค้า
      showAddSystemModal: false,
    

      //ตัวแปรสำหรับผูกฟอร์มเพิ่มสินค้า
      name: "",
      description: "",
      slug: "",
      price: "",
      imgSrc: "",
      fileName: "",
      imgUrl: "",
      file: null,

      

      //ตัวแปรค้นหาข้อมูล
      keyword: "",
    };
  },
  methods: {
    openModalAddSystem() {
      this.showAddSystemModal = true;
      // this.showList = false;
      // this.showAdd = true;
    },

    closeModalAdd() {
      this.showAddSystemModal = false;

      this.onResetForm();
    },

    async getEmployee(id) {
      let response = await http.get(`employee/${id}`);
      let responseEmployee = response.data;

      this.employee = responseEmployee;

      console.log(this.employee);
    },
  },

  mounted() {
    this.currentPage = 1;
    // this.showParam = $route.params.id
    this.getEmployee(this.$route.params.id);
  },
};
</script>
