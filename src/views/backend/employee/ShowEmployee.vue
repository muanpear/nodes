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
      
    </div>
  </div>
</template>

<script>
import http from "@/services/BackendService";
export default {
  data() {
    return {
      employee: [],
      showParam: "",

      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      // เปิด popup แสดงหน้าเพิ่มสินค้า
      showAddModal: false,
      showEditModal: false,

      //ตัวแปรสำหรับผูกฟอร์มเพิ่มสินค้า
      name: "",
      description: "",
      slug: "",
      price: "",
      imgSrc: "",
      fileName: "",
      imgUrl: "",
      file: null,

      //ตัวแปรแก้ไขข้อมูลสินค้า
      eid: "",
      ename: "",
      edescription: "",
      eslug: "",
      eprice: "",
      eimgUrl: "",

      //ตัวแปรค้นหาข้อมูล
      keyword: "",
    };
  },
  methods: {
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
