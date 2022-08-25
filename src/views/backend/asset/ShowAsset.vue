<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        SHOW{{ $route.params.id }}
    </h2>
    <h5>{{asset}}</h5>
</template>

<script>


import http from "@/services/BackendService";
export default {
  
  data() {
    return {
      asset: [],
      showParam : "",

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
    
    async getAsset(id) {
      let response = await http.get(`asset/${id}`);
      let responseAsset = response.data;
    
      this.asset = responseAsset;
    
      console.log(this.asset);
    },
 

    

   
  },

 
  mounted() {
    this.currentPage = 1;
    // this.showParam = $route.params.id
    this.getAsset(this.$route.params.id);
  },
};
</script>