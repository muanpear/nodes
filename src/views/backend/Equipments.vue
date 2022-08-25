<style lang="css">
.xx {
  fill: none;
  stroke: #ffffff;
}

.yy {
  fill: none;
  stroke: #000000;
}
</style>
<template>
  <div v-if="showList">
    <!-- Cards -->
    <div class="grid gap-6 mt-5 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Assets
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            6389
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Use
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            46,760
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Spare
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            376
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Destroy
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            35
          </p>
        </div>
      </div>
    </div>
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
                  placeholder="ป้อนชื่อสินค้าที่ต้องการค้นหา"
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
              <td class="px-4 py-3 text-sm">{{ asset.statusAsset }}</td>
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
                      Created {{ format_date(asset.created_at) }}
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
  </div>

  <div v-if="showAdd">
    <form
      ref="addAssetForm"
      @submit.prevent="submitAssetForm"
      enctype="multipart/form-data"
    >
      <div class="mt-6 mb-6">
        <div class="flex items-center justify-center w-full h-auto">
          <div
            class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold text-gray-700 dark:text-gray-200"
          >
            Add New
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
        <div class="w-full px-3 pb-2 mb-6 md:w-1/2 md:mb-0">
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
              id="grid-last-name"
              type="number"
              autocomplete="off"
            />
          </div>
        </div>

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
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white"
            for="grid-state"
          >
            Warranty
          </label>
          <div class="relative">
            <input
              @change="checkWarrantyToggle($event)"
              id="checkbox"
              type="checkbox"
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
                v-model="warrantyDesciption"
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
            <img
              v-if="imgUrl1"
              class="w-full rounded-t-md h-72"
              src="@/assets/img/no-image.png"
              alt=""
            />
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
      warrantyDesciption: "",
      warrantyExpire: "",

      assets: [],
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
    async getAssets(pageNumber) {
      let response = await http.get(`assets?page=${pageNumber}`);
      let responseAsset = response.data;
    
      this.assets = responseAsset;
       this.currentPage = responseAsset.current_page;
      this.perPage = responseAsset.per_page;
      this.total = responseAsset.total;
      console.log(this.assets);
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
        this.$swal.fire("ป้อนชื่อสินค้าที่ต้องการค้นหาก่อน");
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
        return moment(String(value)).format("DD/MM/YYYY hh:mm");
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
