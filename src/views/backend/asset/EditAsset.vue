<template>
  <div>
    <form
      ref="addAssetForm"
      @submit.prevent="submitAssetForm()"
      enctype="multipart/form-data"
    >
      <div class="mt-6 mb-6">
        <div class="flex items-center justify-center w-full h-auto">
          <div
            class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold text-gray-700 dark:text-gray-200"
          >
            Edit
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
            @click="closeModalAddAsset"
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
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Category
          </label>

          <div class="relative">
            <select
              v-model="category_id"
              class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="null">Select</option>
              <option
                v-for="category in categorys"
                :key="category.id"
                :value="category.id"
              >
                {{ category.categoryName }}
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
              @click="openModalAddCategory"
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

          <div v-if="v$.category_id.$error" class="mt-2 text-sm text-red-500">
            {{ v$.category_id.$errors[0].$message }}
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
              v-model="statusAsset"
              disabled
              class="inline w-full px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="null">Select</option>
              <option value="N" selected>N (New เครื่องใหม่)</option>
              <option value="U">U (Use มีคนใช้งาน)</option>
              <option value="B">B (Borrow ยืมใช้ชั่วคราว)</option>
              <option value="R">R (Return กลับคืน IT)</option>
              <option value="D">D (Defective ไม่สมบูรณ์)</option>
              <option value="W">W (WriteOff ทิ้งทำลาย)</option>
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
          <div v-if="v$.statusAsset.$error" class="mt-2 text-sm text-red-500">
            {{ v$.statusAsset.$errors[0].$message }}
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            IT Label
          </label>
          <div class="relative">
            <input
              v-model="tagIt"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              autocomplete="off"
            />
            <div v-if="v$.tagIt.$error" class="mt-2 text-sm text-red-500">
              {{ v$.tagIt.$errors[0].$message }}
            </div>
          </div>
        </div>

        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            SAP Code
          </label>
          <div class="relative">
            <input
              v-model="tagSap"
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
            Legacy Code (Optional)
          </label>
          <div class="relative">
            <input
              v-model="tagOld"
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
            Purcharse
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Purchased from
          </label>

          <div class="relative">
            <select
              v-model="vender_id"
              class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select</option>
              <option
                v-for="vendor in vendors"
                :key="vendor.id"
                :value="vendor.id"
              >
                {{ vendor.vendorName }}
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
              @click="openModalAddVendor"
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

        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Purchase Date
          </label>
          <div class="relative">
            <input
              v-model="purchaseDate"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
            <!-- <datepicker type="date" valueType="format" :format="'dd/MM/yyyy'" :value="purchaseDate"></datepicker> -->
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            PurcharseOrderID
          </label>
          <div class="relative">
            <input
              v-model="poID"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
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
            Receive Date
          </label>
          <div class="relative">
            <input
              v-model="receiveDate"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
            <!-- <datepicker type="date" valueType="format" :format="'dd/MM/yyyy'" :value="purchaseDate"></datepicker> -->
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Cost
          </label>
          <div class="relative">
            <input
              v-model="cost"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
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
            Detail
          </label>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Brand
          </label>

          <div class="relative">
            <select
              v-model="brand_id"
              class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select</option>
              <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                {{ brand.brandName }}
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
              @click="openModalAddBrand"
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

        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Model
          </label>
          <div class="relative">
            <input
              v-model="model"
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
            S/N
          </label>
          <div class="relative">
            <input
              v-model="serialNumber"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
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
            Warranty
          </label>
          <div class="relative">
            <input
            disabled
              @change="checkWarrantyToggle($event)"
              id="checkbox"
              type="checkbox"
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
            Specification
          </label>
          <div class="relative">
            <textarea
              v-model="specification"
              class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
            />
          </div>
        </div>
      </div>

      <hr />
      <div id="warrantyForm" v-if="checkWarranty">
        <div class="flex flex-wrap">
          <div class="w-full px-3 pt-5">
            <label
              class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
            >
              Warranty
            </label>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Description
            </label>
            <div class="relative">
              <textarea
                v-model="warrantyDescription"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
              for="grid-state"
            >
              Expire Date
            </label>
            <div class="relative">
              <input
                v-model="warrantyExpire"
                class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="flex flex-wrap">
        <div class="w-full px-3 pt-5">
          <label
            class="block mb-2 text-lg font-bold tracking-wide text-gray-700 dark:text-white"
          >
            Site, Location, Category and Department
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Site
          </label>

          <div class="relative">
            <select
              v-model="site_id"
              v-on:change="listLocations($event.target.value)"
              class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select</option>
              <option v-for="site in sites" :key="site.id" :value="site.id">
                {{ site.siteName }}
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
              @click="openModalAddSite"
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

        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Location
          </label>

          <div class="relative">
            <select
              v-model="location_id"
              class="inline w-11/12 px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select</option>
              <option
                v-for="location in locations"
                :key="location.id"
                :value="location.id"
              >
                {{ location.locationName }}
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
              @click="openModalAddLocation"
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

      <div class="flex flex-wrap">
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
            Photo
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="justify-center h-screen">
          <div class="flex justify-center">
            <input
              ref="fileupload"
              @change="onFileChange"
              class="inline px-1 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
              type="file"
            />
            <button
            type="button"
              class="px-1 py-1 ml-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
              @click="removeImg()"
            >
              <svg
                width="16"
                height="16"
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
            </button>
          </div>
          <div class="flex justify-center">
            <!-- <img
              v-if="imgUrl1"
              class="w-full rounded-t-md h-72"
              src="@/assets/img/no-image.png"
              alt=""
            /> -->
            <img v-if="imgUrl" :src="imgUrl" class="w-full rounded-t-md h-72" />
          </div>
        </div>
      </div>
    </form>
  </div>

  <!-- Popup สำหรับเพิ่ม Category -->
  <div
    v-if="showAddCategoryModal"
    id="addCategoryModal"
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
          Category
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
          ref="addCategoryForm"
          @submit.prevent="submitCategoryForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name <font color="red">*</font></label
          >
          <input
            v-model="categoryName"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />
          <div v-if="v$.categoryName.$error" class="mt-2 text-sm text-red-500">
            {{ v$.categoryName.$errors[0].$message }}
          </div>

          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Code</label
          >
          <input
            v-model="categoryCode"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />

          <label
            class="block my-3 text-xs text-gray-700 dark:text-white"
            for="description"
            >Description</label
          >
          <textarea
            v-model="categoryDescription"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            rows="5"
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

  <!-- Popup สำหรับเพิ่ม Vendor -->
  <div
    v-if="showAddVendorModal"
    id="addVendorModal"
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
          New Vendor & Dealer
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
          ref="addVendorForm"
          @submit.prevent="submitVendorForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name <font color="red">*</font></label
          >
          <input
            v-model="vendorName"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />
          <div v-if="v$.vendorName.$error" class="mt-2 text-sm text-red-500">
            {{ v$.vendorName.$errors[0].$message }}
          </div>

          <label
            class="block my-3 text-xs text-gray-700 dark:text-white"
            for="description"
            >Description</label
          >
          <textarea
            v-model="vendorDescription"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            rows="5"
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

  <!-- Popup สำหรับเพิ่ม Brand -->
  <div
    v-if="showAddBrandModal"
    id="addBrandModal"
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
          Brand
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
          ref="addBrandForm"
          @submit.prevent="submitBrandForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name <font color="red">*</font></label
          >
          <input
            v-model="brandName"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
          />
          <div v-if="v$.brandName.$error" class="mt-2 text-sm text-red-500">
            {{ v$.brandName.$errors[0].$message }}
          </div>

          <label
            class="block my-3 text-xs text-gray-700 dark:text-white"
            for="description"
            >Description</label
          >
          <textarea
            v-model="brandDescription"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            rows="5"
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

  <!-- Popup สำหรับเพิ่ม Site -->
  <div
    v-if="showAddSiteModal"
    id="addSiteModal"
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
          Site
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
          ref="addSiteForm"
          @submit.prevent="submitSiteForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name <font color="red">*</font></label
          >
          <input
            v-model="siteName"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text"
            autocomplete="off"
          />
          <div v-if="v$.siteName.$error" class="mt-2 text-sm text-red-500">
            {{ v$.siteName.$errors[0].$message }}
          </div>

          <label
            class="block my-3 text-xs text-gray-700 dark:text-white"
            for="address"
            >Address</label
          >
          <textarea
            v-model="address"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            rows="3"
            autocomplete="off"
          ></textarea>

          <div class="flex flex-wrap">
            <div class="w-full px-1 pb-2 mb-6 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
                for="grid-state"
              >
                Latitude
              </label>
              <div class="relative">
                <input
                  class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  autocomplete="off"
                  v-model="latitude"
                />
              </div>
            </div>

            <div class="w-full px-1 mb-6 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
                for="grid-state"
              >
                Longtitude
              </label>
              <div class="relative">
                <input
                  class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  autocomplete="off"
                  v-model="longtitude"
                />
              </div>
            </div>
          </div>

          <label
            class="block my-3 text-xs text-gray-700 dark:text-white"
            for="address"
            >Desciption</label
          >
          <textarea
            v-model="siteDescription"
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

  <!-- Popup Location ADD -->
  <div
    v-if="showAddLocationModal"
    id="addLocationModal"
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
          Add Location
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
          ref="addLocationForm"
          @submit.prevent="submitLocationForm"
          enctype="multipart/form-data"
        >
          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Choose Site <font color="red">*</font></label
          >

          <select
            v-model="new_site_id"
            required="true"
            class="inline w-full px-2 py-1 pr-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Select</option>
            <option v-for="site in sites" :key="site.id" :value="site.id">
              {{ site.siteName }}
            </option>
          </select>

          <label
            class="block my-3 mb-2 text-xs text-gray-700 dark:text-white"
            for="name"
            >Name <font color="red">*</font></label
          >
          <input
            v-model="locationName"
            class="block w-full px-4 py-1 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            autocomplete="off"
          />
          <div v-if="v$.locationName.$error" class="mt-2 text-sm text-red-500">
            {{ v$.locationName.$errors[0].$message }}
          </div>

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
import moment from "moment";

export default {
  data() {
    return {
      // ตัวแปรเรียกใช้งาน Validateion
      v$: useVuelidate(),

      currentPage: 0,
      perPage: 0,
      total: 0,

      category_id: null,
      statusAsset: null,
      tagIt: "",
      tagOld: "",
      tagSap: "",
      vender_id: "",
      purchaseDate: "",
      brand_id: "",
      model: "",
      cost: "",
      serialNumber: "",
      specification: "",
      site_id: "",
      location_id: "",
      department_id: "",
      warrantyDescription: "",
      warrantyExpire: "",

      asset: [],
      categorys: [],
      vendors: [],
      brands: [],
      sites: [],
      locations: [],
      departments: [],

      showList: true,
      showAdd: false,

      checkWarranty: false,
      // เปิด popup แสดงหน้าเพิ่มสินค้า
      showAddCategoryModal: false,
      showAddVendorModal: false,
      showAddSiteModal: false,
      showAddBrandModal: false,
      showAddLocationModal: false,
      showAddDepartmentModal: false,

      showEditModal: false,

      //varrible form
      //add form category
      categoryName: "",
      categoryCode: "",
      categoryDescription: "",

      //add form vendor
      vendorName: "",
      vendorDescription: "",

      //add form brand
      brandName: "",
      brandDescription: "",

      //add form site
      siteName: "",
      address: "",
      latitude: "",
      longtitude: "",
      siteDescription: "",

      //add form location
      new_site_id: "",
      locationName: "",

      //add form department
      departmentName: "",
      departmentDescription: "",

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

      imgUrl1: true,
    };
  },
  methods: {
    async getAsset(id) {
      let response = await http.get(`asset/${id}`);
      let responseAsset = response.data;

      this.asset = responseAsset;

      this.category_id = responseAsset.category_id;
      this.statusAsset = responseAsset.statusAsset;
      this.tagIt = responseAsset.tagIt;
      this.tagOld = responseAsset.tagOld;
      this.tagSap = responseAsset.tagSap;
      this.vender_id = responseAsset.vender_id;
      this.purchaseDate = responseAsset.purchaseDate;
      this.brand_id = responseAsset.brand_id;
    this.model = responseAsset.model;
      this.cost= responseAsset.cost;
      this.serialNumber= responseAsset.serialNumber;
      this.specification= responseAsset.specification;
      this.site_id= responseAsset.site_id;

      this.getLocations(responseAsset.site_id);
      this.location_id = responseAsset.location_id;
      this.department_id= responseAsset.department_id;

      this.imgUrl = responseAsset.photo;

if (responseAsset.warranties.id != null){
     this.checkWarranty = true
      this.warrantyDescription= responseAsset.warranties.warrantyDescription;
      this.warrantyExpire= responseAsset.warranties.warrantyExpire;
}
     
     

      console.log(responseAsset.location_id);
    },
    async getCategorys() {
      let response = await http.get(`categorys`);
      this.categorys = response.data;
      // console.log(this.categorys);
    },
    async getVendors() {
      let response = await http.get(`vendors`);
      this.vendors = response.data;
      // console.log(this.vendors);
    },
    async getBrands() {
      let response = await http.get(`brands`);
      this.brands = response.data;
      // console.log(this.brands);
    },
    async getSites() {
      let response = await http.get(`sites`);
      this.sites = response.data;
      // console.log(this.sites);
    },
    async getLocations(id) {
      let response = await http.get(`locations/` + id);
      this.locations = response.data;
      // console.log(this.locations);
    },
    async getDepartments() {
      let response = await http.get(`departments`);
      this.departments = response.data;
      // console.log(this.departments);
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
        !this.v$.tagIt.$invalid
      ) {
        let data = new FormData();
        let id = this.$route.params.id;
        data.append("category_id", this.category_id);
        data.append("tagIt", this.tagIt);
        data.append("tagOld", this.tagOld);
        data.append("tagSap", this.tagSap);
        data.append("vender_id", this.vender_id);
        data.append("purchaseDate", this.purchaseDate);
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
        data.append("_method", "PUT");
      http
        .post(`update-asset/${id}`, data)
          .then(() => {
            //reset form
            this.$refs.addAssetForm.reset();
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

    //สร้างฟังก์ชั่นจัดรูปแบบวันที่
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm");
      }
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
    this.getAsset(this.$route.params.id);
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
