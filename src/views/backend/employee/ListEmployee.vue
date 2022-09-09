<template>
      <div
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
      </div>
  
      <div class="flex items-center justify-between my-8">
        <button
          @click="openModalAddAsset"
          class="flex items-center justify-between px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
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
      </div>
  
      <!-- table inventory -->
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
              >
                <th class="px-4 py-3">ID</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">S/N</th>
                <th class="px-4 py-3">Category</th>
                <th class="px-4 py-3">Manage</th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
            >
              <tr
                v-for="(asset, assetRow) in assets.data"
                :key="asset.id"
                class="text-gray-700 dark:text-gray-400 hover:bg-blue-100"
              >
                <td class="px-4 py-3 text-sm">{{ assetRow + 1 }}</td>
                <td class="px-4 py-3 text-sm">
                  <span
                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800"
                    >{{ asset.statusAsset }}</span
                  >
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div
                      class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        :src="asset.photo"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <router-link :to="'/shows/' + asset.id">
                        <p class="font-semibold">
                          {{ asset.tagIt }}
                        </p></router-link
                      >
  
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                        - Created {{ format_date(asset.created_at) }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ asset.serialNumber }}
                  </p>
                </td>
                <td class="px-4 py-3 text-sm">
                  <p class="font-semibold">{{ asset.categorys }}</p>
                  <!-- <div class="flex items-center text-sm">
                    <div
                      class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                      
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold"></p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                        Updated 
                      </p>
                    </div>
                  </div> -->
                </td>
                <td class="px-4 py-3 text-sm">
                  <router-link :to="'/edit/' + asset.id">
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
                    @click="onClickDelete(asset.id)"
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
  import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
  import useVuelidate from "@vuelidate/core";
  import { required, helpers } from "@vuelidate/validators";
  import moment from "moment";
  
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
  

  
        
  
  
      };
    },
    methods: {
      async getAssets(pageNumber) {
        let response = await http.get(`assets?page=${pageNumber}`);
        let responseAsset = response.data;
  
        this.assets = responseAsset;
        this.currentPage = responseAsset.current_page;
        this.perPage = responseAsset.per_page;
        this.total = responseAsset.total;
        console.log(this.assets);
      },
  
      /***********************************************************************
       * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
       ************************************************************************/
      // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
      // async getProducts(pageNumber) {
      //   let response = await http.get(`products?page=${pageNumber}`);
      //   let responseProduct = response.data;
      //   this.products = responseProduct;
      //   this.currentPage = responseProduct.current_page;
      //   this.perPage = responseProduct.per_page;
      //   this.total = responseProduct.total;
      // },
      // // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api เมื่อมีการค้นหา (search)
      // async getProductsSearch(pageNumber) {
      //   let response = await http.get(
      //     `products/search/${this.keyword}?page=${pageNumber}`
      //   );
      //   let responseProduct = response.data;
      //   this.products = responseProduct;
      //   this.currentPage = responseProduct.current_page;
      //   this.perPage = responseProduct.per_page;
      //   this.total = responseProduct.total;
      // },
      // สร้างฟังก์ชันสำหรับการคลิ๊กเปลี่ยนหน้า
      onPageClick(event) {
        this.currentPage = event;
        //เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
        if (this.keyword == "") {
          // ไม่ได้ค้นหา
          this.getAssets(this.currentPage);
        } else {
          // this.getProductsSearch(this.currentPage);
        }
      },
  
      listLocations(id) {
        console.log(id);
        console.log(this.getLocations(id));
  
        // this.showList = false;
        // this.showAdd = true;
      },
      checkWarrantyToggle(event) {
        if (event.target.checked) {
          this.checkWarranty = true;
        } else {
          this.checkWarranty = false;
        }
      },
      //ส่วนเพิ่มสินค้าใหม่
      //เปิดปิด popup
      openModalAddAsset() {
        this.showList = false;
        this.showAdd = true;
      },
      closeModalAddAsset() {
        this.showList = true;
        this.showAdd = false;
      },
      openModalAddCategory() {
        this.showAddCategoryModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
      openModalAddVendor() {
        this.showAddVendorModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
      openModalAddBrand() {
        this.showAddBrandModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
      openModalAddSite() {
        this.showAddSiteModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
      openModalAddLocation() {
        this.showAddLocationModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
      openModalAddDepartment() {
        this.showAddDepartmentModal = true;
        // this.showList = false;
        // this.showAdd = true;
      },
  
      closeModalAdd() {
        this.showAddCategoryModal = false;
        this.showAddVendorModal = false;
        this.showAddBrandModal = false;
        this.showAddSiteModal = false;
        this.showAddLocationModal = false;
        this.showAddDepartmentModal = false;
        this.onResetForm();
      },
  
      // สร้างฟังก์ชั่นแสดงภาพสินค้า
      onFileChange(e) {
        this.imgUrl1 = false;
        const file = e.target.files[0];
        this.file = e.target.files[0];
        this.imgUrl = URL.createObjectURL(file);
        this.eimgUrl = URL.createObjectURL(file);
      },
  
      removeImg() {
        // const file = e.target.files[0];
        this.file = "";
        this.imgSrc = "";
        this.imgUrl = "";
        this.$refs.fileupload.value = null;
        this.imgUrl1 = true;
      },
  
      //reset form
      onResetForm() {
        // การเคลียร์ค่าทั้งหมดในฟอร์ม ใช้ ref
  
        if (this.$refs.addCategoryForm) {
          this.$refs.addCategoryForm.reset();
          this.categoryName = "";
          this.categoryCode = "";
          this.categoryDescription = "";
          this.showAddCategoryModal = false;
        }
  
        if (this.$refs.addVendorForm) {
          this.$refs.addVendorForm.reset();
          this.vendorName = "";
          this.vendorDescription = "";
          this.showAddVendorModal = false;
        }
  
        if (this.$refs.addBrandForm) {
          this.$refs.addBrandForm.reset();
          this.brandName = "";
          this.brandDescription = "";
          this.showAddBrandModal = false;
        }
      },
  
      // Add form
      submitCategoryForm() {
        this.v$.$validate();
        if (!this.v$.categoryName.$invalid) {
          let data = new FormData();
          data.append("categoryName", this.categoryName);
          data.append("categoryCode", this.categoryCode);
          data.append("categoryDescription", this.categoryDescription);
  
          //to api
          http
            .post("add-category", data)
            .then(() => {
              this.$refs.addCategoryForm.reset();
              this.categoryName = "";
              this.categoryCode = "";
              this.categoryDescription = "";
  
              this.showAddCategoryModal = false;
  
              // reload
              this.getCategorys();
  
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
                title: "เพิ่มข้อมูลใหม่เรียบร้อยแล้ว",
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
  
      submitVendorForm() {
        this.v$.$validate();
        if (!this.v$.vendorName.$invalid) {
          let data = new FormData();
          data.append("vendorName", this.vendorName);
          data.append("vendorDescription", this.vendorDescription);
  
          //to api
          http
            .post("add-vendor", data)
            .then(() => {
              //reset form
              this.$refs.addVendorForm.reset();
              this.vendorName = "";
              this.vendorDescription = "";
              this.showAddVendorModal = false;
  
              // reload
              this.getVendors();
  
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
  
      submitBrandForm() {
        this.v$.$validate();
        if (!this.v$.brandName.$invalid) {
          let data = new FormData();
          data.append("brandName", this.brandName);
          data.append("brandDescription", this.brandDescription);
  
          //to api
          http
            .post("add-brand", data)
            .then(() => {
              //reset form
              this.$refs.addBrandForm.reset();
              this.brandName = "";
              this.brandDescription = "";
              this.showAddBrandModal = false;
  
              // reload
              this.getBrands();
  
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
  
      submitSiteForm() {
        this.v$.$validate();
        if (!this.v$.siteName.$invalid) {
          let data = new FormData();
          data.append("siteName", this.siteName);
          data.append("address", this.address);
          data.append("latitude", this.latitude);
          data.append("longtitude", this.longtitude);
          data.append("siteDescription", this.siteDescription);
  
          //to api
          http
            .post("add-site", data)
            .then(() => {
              //reset form
              this.$refs.addsiteForm.reset();
              this.siteName = "";
              this.address = "";
              this.latitude = "";
              this.longtitude = "";
              this.siteDescription = "";
              this.showAddSiteModal = false;
  
              // reload
              this.getSites();
  
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
  
      submitLocationForm() {
        this.v$.$validate();
        if (!this.v$.locationName.$invalid) {
          let data = new FormData();
          data.append("site_id", this.new_site_id);
          data.append("locationName", this.locationName);
  
          //to api
          http
            .post("add-location", data)
            .then(() => {
              //reset form
              this.$refs.addLocationForm.reset();
              this.new_site_id = "";
              this.locationName = "";
              this.showAddLocationModal = false;
  
              // reload
              this.getLocations();
  
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
      submitAssetForm() {
        this.v$.$validate();
        if (
          !this.v$.category_id.$invalid &&
          !this.v$.statusAsset.$invalid &&
          !this.v$.tagIt.$invalid
        ) {
          let data = new FormData();
          data.append("category_id", this.category_id);
          data.append("statusAsset", this.statusAsset);
          data.append("tagIt", this.tagIt);
          data.append("tagOld", this.tagOld);
          data.append("tagSap", this.tagSap);
          data.append("vender_id", this.vender_id);
          data.append("purchaseDate", this.purchaseDate);
          data.append("poID", this.poID);
          data.append("receiveDate", this.receiveDate);
          data.append("brand_id", this.brand_id);
          data.append("model", this.model);
          data.append("cost", this.cost);
          data.append("serialNumber", this.serialNumber);
          data.append("specification", this.specification);
          data.append("site_id", this.site_id);
          data.append("location_id", this.location_id);
          data.append("department_id", this.department_id);
          data.append("photo", this.file);
          data.append("checkWarranty", this.checkWarranty);
          data.append("warrantyDescription", this.warrantyDescription);
          data.append("warrantyExpire", this.warrantyExpire);
          console.log(this.checkWarranty);
          console.log(this.warrantyExpire);
          //  to api
          http
            .post("add-asset", data)
            .then(() => {
              //reset form
              this.$refs.addAssetForm.reset();
              // this.vendorName = "";
              // this.vendorDescrption = "";
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
  
      openModalEditProduct(id) {
        http.get(`products/${id}`).then((response) => {
          this.eid = response.data.id;
          this.ename = response.data.name;
          this.edescription = response.data.description;
          this.eslug = response.data.slug;
          this.eprice = response.data.price;
          this.eimgUrl = response.data.image;
  
          this.showEditModal = true;
        });
      },
  
      closeModalEditProduct() {
        this.showEditModal = false;
      },
  
      //สร้างฟังก์ชั่นสำหรับอัพเดตแก้ไขข้อมูล
      // submitFormEdit(id) {
      //   let data = new FormData();
      //   data.append("name", this.ename);
      //   data.append("description", this.edescription);
      //   data.append("slug", this.eslug);
      //   data.append("price", this.eprice);
      //   data.append("file", this.file);
  
      //   // Send Patch request to laravel
      //   data.append("_method", "PUT");
      //   http
      //     .post(`products/${id}`, data)
      //     .then((response) => {
      //       console.log(response.data);
      //       //ดึงล่าสุดมาโชว์
      //       if (this.keyword == "") {
      //         this.getProducts(this.currentPage);
      //       } else {
      //         this.getProductsSearch(this.currentPage);
      //       }
  
      //       const Toast = this.$swal.mixin({
      //         toast: true,
      //         position: "top-end",
      //         showConfirmButton: false,
      //         timer: 1500,
      //         timerProgressBar: true,
      //         didOpen: (toast) => {
      //           toast.addEventListener("mouseenter", this.$swal.stopTimer);
      //           toast.addEventListener("mouseleave", this.$swal.resumeTimer);
      //         },
      //       });
  
      //       Toast.fire({
      //         icon: "success",
      //         title: "อัพเดตข้อมูลเรียบร้อยแล้ว",
      //       }).then(() => {
      //         this.showEditModal = false;
      //       });
      //     })
      //     .catch((error) => {
      //       console.log(error.response.data);
      //       console.log(error.response.status);
      //       console.log(error.response.headers);
      //     });
      // },
  
      //ส่วนการลบ
      //สร้างฟังก์ชั่นสำหรับลบ
      // onClickDelete(id) {
      //   this.$swal
      //     .fire({
      //       title: "ยืนยันการลบรายการนี้",
      //       showDenyButton: false,
      //       showCancelButton: true,
      //       confrimButtonText: `ยืนยัน`,
      //       cancelButtonText: `ปิดหน้าต่าง`,
      //     })
      //     .then((result) => {
      //       if (result.isConfirmed) {
      //         http
      //           .delete(`products/${id}`)
      //           .then(() => {
      //             this.$swal.fire("ลบรายการแล้ว", "", "success");
      //             // ดึงล่าสุดมาแสดง
      //             // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
      //             if (this.keyword == "") {
      //               this.getProducts(this.currentPage);
      //             } else {
      //               this.getProductsSearch(this.currentPage);
      //             }
      //           })
      //           .catch((error) => {
      //             console.log(error.response.data);
      //             console.log(error.response.status);
      //             console.log(error.response.headers);
      //           });
      //       }
      //     });
      // },
  
      //ส่วนการค้นหาสินค้า
      submitSearchForm() {
        if (this.keyword != "") {
          // เรียกค้นไปยัง api ของ laravel
          http.get(`products/search/${this.keyword}`).then((response) => {
            let responseProduct = response.data;
            this.products = responseProduct;
            this.currentPage = responseProduct.current_page;
            this.perPage = responseProduct.per_page;
            this.total = responseProduct.total;
          });
        } else {
          this.$swal.fire("ใส่ก่อน");
        }
      },
  
      //สร้างฟังก์ชั่นสำหรับล้างการค้นหา
      resetSearchForm() {
        this.currentPage = 1;
        // this.getProducts(this.currentPage);
        this.keyword = "";
      },
  
      //สร้างฟังก์ชั่นจัดรูปแบบวันที่
      format_date(value) {
        if (value) {
          return moment(String(value)).format("DD/MM/YYYY");
        }
      },
  
      // สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
      formatPrice(value) {
        let val = (value / 1).toFixed(2).replace(",", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    },
  
    validations() {
      return {
        categoryName: {
          required: helpers.withMessage("Please input name", required),
        },
        vendorName: {
          required: helpers.withMessage("Please input name", required),
        },
        brandName: {
          required: helpers.withMessage("Please input name", required),
        },
        siteName: {
          required: helpers.withMessage("Please input name", required),
        },
        locationName: {
          required: helpers.withMessage("Please input name", required),
        },
        departmentName: {
          required: helpers.withMessage("Please input name", required),
        },
        category_id: {
          required: helpers.withMessage("Please input name", required),
        },
        statusAsset: {
          required: helpers.withMessage("Please input name", required),
        },
        tagIt: {
          required: helpers.withMessage("Please input name", required),
        },
      };
    },
    //   imageData() {
    //   return {
    //     previewUrl: "",
    //     updatePreview() {
    //       var reader,
    //         files = document.getElementById("thumbnail").files;
  
    //       reader = new FileReader();
  
    //       reader.onload = e => {
    //         this.previewUrl = e.target.result;
    //       };
  
    //       reader.readAsDataURL(files[0]);
    //     },
    //     clearPreview() {
    //       // document.getElementById("thumbnail").value = null;
    //       // this.previewUrl = "";
    //       this.imgUrl = "";
    //     }
    //   }
    // },
    clearPreview() {
      // document.getElementById("thumbnail").value = null;
      // this.previewUrl = "";
      this.imgUrl = "";
    },
  
    mounted() {
      this.currentPage = 1;
      // อ่านสินค้าจาก API
      this.getAssets(this.currentPage);
      // this.getAssets();
      this.getCategorys();
      this.getVendors();
      this.getBrands();
      this.getSites();
      this.getLocations();
      this.getDepartments();
    },
  };
  </script>
  