import { createStore } from 'vuex'

export default createStore({
  state: {
    showSideMenu:true
  },
  mutations: {
    //ฟังก์ชั่นซ่อนแสดงเมนู mobile
    toggleSideMenu(state){
      state.showSideMenu = !state.showSideMenu
    },
  },
  actions: {
  },
  modules: {
  }
})
