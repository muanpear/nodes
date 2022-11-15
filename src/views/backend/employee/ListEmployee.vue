<template>
      <!-- Section Search / ค้นหา -->
      <div class="flex items-center justify-between my-8">
        <h2 class="my-6 text-sm font-semibold text-gray-700 md:text-xl dark:text-gray-200">
            Employee list ({{ employees.total }})
        </h2>
        <div class="flex justify-center flex-1 lg:mr-32">
          <div class="relative w-full max-w-xl ml-4 mr-6 focus-within:text-gray-500">
            <div class="absolute inset-y-0 flex items-center pl-2">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd">
                </path>
                </svg>
            </div>
            <form @submit.prevent="onSubmit">
                <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนชื่อสินค้าที่ต้องการค้นหา"
                        aria-label="Search"
                 />
                 <button @click="submitSearchForm" type="submit" class="hidden">Submit</button>
            </form>
          </div>

          <div>
            <button @click="submitSearchForm" class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
              <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>ค้นหา</span>
            </button>
          </div>
          <div>
            <button @click="resetSearchForm" class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple">
              <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
                <span>ล้าง</span>
            </button>
          </div>          
        </div>
      </div>  
      <!-- Close Section Search / ค้นหา-->
      <!-- <div
        class="bg-white accordion accordion-flush dark:bg-gray-800"
        id="accordionFlushExample"
      >
        <div
          class="bg-white border border-b-0 border-l-0 border-r-0 border-gray-200 rounded-none accordion-item dark:bg-gray-800"
        >
          <h2
            class="mb-0 bg-white accordion-header dark:bg-gray-800"
            id="flush-headingThree"
          >
            <button
              class="relative flex items-center w-full px-5 py-4 text-base text-left text-gray-800 transition bg-white border-0 rounded-none accordion-button collapsed dark:bg-gray-800 focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h2
                class="my-6 text-sm font-semibold text-gray-700 md:text-xl dark:text-gray-200"
              >
                Search
              </h2>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse "
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="flex justify-center flex-1 lg:mr-32">
              <div
                class="relative w-full max-w-xl ml-4 mr-6 focus-within:text-gray-500"
              >
                <div class="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <form @submit.prevent="onSubmit">
                  <input
                    v-model="keyword"
                    class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                    type="text"
                    aria-label="Search"
                  />
                  <button @click="submitSearchForm" type="submit" class="hidden">
                    Submit
                  </button>
                </form>
              </div>
  
              <div>
                <button
                  @click="submitSearchForm"
                  class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>ค้นหา</span>
                </button>
              </div>
  
              <div>
                <button
                  @click="resetSearchForm"
                  class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>ล้าง</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  
      <div class="flex items-center justify-between my-1">
        <router-link :to="'/add-employee'">
        <button
          class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
        >
          <svg
            class="w-4 h-4 mr-2 -ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>เพิ่ม</span>
        </button>
      </router-link>
      </div>
  
      <!-- table Employee / ตารางแสดงข้อมูลพนักงาน-->
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
              >
                <th class="px-4 py-3">NO</th>
                <th class="px-4 py-3">EmployeeID</th>
                <th class="px-4 py-3">NAME</th>                
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Department</th>
                <th class="px-4 py-3">Manage</th>                
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
            >
              <tr
                v-for="(employee, employeeRow) in employees.data"
                :key="employee.id"
                class="text-gray-700 dark:text-gray-400 hover:bg-blue-100"
              >
              
                <td class="px-4 py-3 text-sm">{{ employeeRow + 1 }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                        <router-link :to="'/employee/' + employee.id ">
                      <p class="font-semibold">
                        {{ employee.empID  }}
                      </p></router-link
                    >
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">                 
                  <div class="flex items-center text-sm">
                        <!-- Avatar with inset shadow -->
                        
                        <div
                        class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                        >
                        <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                        ></div>
                        </div>
                        <div>
                          <router-link :to="'/employee/' + employee.id ">
                            <p class="font-semibold">{{ employee.empFirstname }} {{ employee.empLastname }}</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                                {{ employee.empPosition }}
                            </p>
                          </router-link>
                        </div>
                      
                    </div>
                    
                </td>
                <td class="px-4 py-3 text-sm">
                  <span v-if="employee.empStatus == 0"
                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-800"
                    >Unactivated</span
                  >
                  <span v-if="employee.empStatus == 1"
                    class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:green-red-800"
                    >Activated</span
                  >
                </td>
                
                
                <td class="px-4 py-3 text-sm">
                  <p class="font-semibold">{{ employee.departments.departmentName }}</p>
                  
                </td>
                <td class="px-4 py-3 text-sm">
                  <router-link :to="'/edit/' + employee.id">
                    <button
                      class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-400 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline-purple"
                    >
                      <svg
                        class="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                  </router-link>
  
                  <button
                    @click="onClickDelete(employee.id)"
                    class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Close table Employee / ตารางแสดงข้อมูลพนักงาน-->

          <!-- แสดงผลตัวแบ่งหน้าเพจ-->
          <VueTailwindPagination
            :current="currentPage"
            :total="total"
            :per-page="perPage"
            @page-changed="onPageClick($event)"
          />
        </div>
      </div>
  
</template>
  
  <script>
  import http from "@/services/BackendService";
  import "@ocrv/vue-tailwind-pagination/dist/style.css";
  import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
  import useVuelidate from "@vuelidate/core";
 
  
  export default {
    components: {
      VueTailwindPagination,
    },
    data() {
      return {        
        v$: useVuelidate(),  
        currentPage: 0,
        perPage: 0,
        total: 0,  
        employees: [],
        keyword: ''    
      };
    },

    mounted() {
      this.currentPage = 1;      
      this.getEmployees(this.currentPage);
      
    },

    methods: {
        // ฟังก์ชันดึงข้อมูล  employees มาแสดงตามลำดับหน้า ทั้งหมด
        async getEmployees(pageNumber) {
        let response = await http.get(`employees?page=${pageNumber}`);
        let responseEmployee = response.data;
    
        this.employees = responseEmployee;
        this.currentPage = responseEmployee.current_page;
        this.perPage = responseEmployee.per_page;
        this.total = responseEmployee.total;

        console.log(this.employees);
      }, 
      /***********************************************************************
      * Funtion Search employee - ส่วนของการค้นหาข้อมูลพนักงาน จาก API 
      ************************************************************************/      

      submitSearchForm() {
        if (this.keyword != "") {
          // เรียกค้นไปยัง api ของ laravel
          http.get(`employee/search/${this.keyword}`).then((response) => {
            let responseEmployee = response.data;
            this.employees = responseEmployee;
            this.currentPage = responseEmployee.current_page;
            this.perPage = responseEmployee.per_page;
            this.total = responseEmployee.total;
          });
        } else {
          this.$swal.fire("กรุณาป้อนข้อมูลที่ต้องการค้นหา!!!");
        }
      },

      
      /***********************************************************************
      * Funtion Reset Search employee - ส่วนของการสร้างฟังก์ชั่นสำหรับล้างการค้นหา 
      ************************************************************************/  
     
      resetSearchForm() {
        this.currentPage = 1;// รีเซตเป็นหน้า 1
        this.getEmployees(this.currentPage); // ดึงรายการออกมาทั้งหมด
        this.keyword = "";// เคลียร์ข้อมูลช่่องค้นหาเป็น ค่าวว่าง
      }, 


     /***********************************************************************
     * Funtion Change Page  - ส่วนของกาสร้างฟังก์ชั่น คลิ๊กเปลี่ยนหน้า
     ************************************************************************/ 
      onPageClick(event) {
        this.currentPage = event;
        //เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
        if (this.keyword == "") {
          // ไม่ได้ค้นหา
          this.getEmployees(this.currentPage);
        } else {
          this.getEmployeesSearch(this.currentPage);
        }
      },
      

      /***********************************************************************
      * Funtion Search employee By page - ส่วนของการค้นหาข้อมูลพนักงานตามลำดับหน้า 
      ************************************************************************/      

      async getEmployeesSearch(pageNumber) {
        let response = await http.get(`employee/search/${this.keyword}?page=${pageNumber}`);
        let responseEmployee = response.data;
  
        this.employees = responseEmployee;
        this.currentPage = responseEmployee.current_page;
        this.perPage = responseEmployee.per_page;
        this.total = responseEmployee.total;

        // show log data
        console.log(this.employees);
        // console.log(response.status);
        // console.log(response.headers);
      },  
      // onClickDelete(){
      //   this.currentPage = 1; 
      //   this.getEmployees(this.currentPage)
      //   // this.getEmployees(this.currentPage);
      // }
      onClickDelete(id){
        // this.currentPage = 1; 
        this.$swal.fire({
          title: "Are you sure?",
          text: "คุณต้องการลบข้อมูล Contact ออกจากระบบหรือไม่!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes!",
        }).then((result) =>{
              if(result.isConfirmed){
                http
                  .delete(`delete-employee/${id}`)
                  .then(() => {
                    this.$swal.fire(
                      'Success!',
                      'คุณออกจากระบบเรียบร้อยแล้ว !!.',
                      'success'
                    )
                  
                  // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
                  if(this.keyword == ""){  // ถ้าไมไ่ด้ค้นหา
                        this.getEmployees(this.currentPage);
                    }else{
                        this.getEmployeesSearch(this.currentPage)
                    }

                }).catch((error)=>{
                  console.log(error.data);
                  console.log(error.status);
                  console.log(error.headers);
                })
              }
        });

      },      

    }  
    
  };
  </script>
  