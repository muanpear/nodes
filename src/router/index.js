import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

// Import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import Scan from '@/views/frontend/Scan.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// Backend
import Dashbaord from '@/views/backend/Dashboard.vue'
import Products from '@/views/backend/Products.vue'
import Equipments from '@/views/backend/Equipments.vue'
import ShowAsset from '@/views/backend/asset/ShowAsset.vue'
import EditAsset from '@/views/backend/asset/EditAsset.vue'
import ListEmployee from '@/views/backend/employee/ListEmployee.vue'
import AddEmployee from '@/views/backend/employee/AddEmployee.vue'
import ShowEmployee from '@/views/backend/employee/ShowEmployee.vue'
import CheckoutForm from '@/views/backend/checkout/CheckoutForm.vue'
import GeneratePdf from '@/views/backend/checkout/GeneratePdf.vue'
import PdfForm from '@/views/backend/checkout/PdfForm.vue'
//สร้างฟังก์ชั่นเช็ค route ก่อนเรียกใช้งาน auth guard
function authGuard(to, from, next) {
  let isAuthenticated = false

  if(localStorage.getItem('user')){
    isAuthenticated = true  // ถ้ามี localstorge
  }else{
    isAuthenticated = false // ถ้าไม่มี localstorge
  }

  if(isAuthenticated){
    next()  // อนุญาติให้เข้าสู่ route และโหลด components ที่ต้องการ
  }else{
    next({name: 'Login'})
  }
}

const routes = [

  /** Frontend Route */
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/scan',
    // component: FrontendLayout,
   
        name: 'Scan',
        component: Scan
   ,
 
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดหน้าผลงานของเรา'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าติดต่อเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดสมัครสมาชิกใหม่'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดหน้าลืมรหัสผ่าน'
    }
  },

  // Error 404 
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },

  /** Frontend Route */
  {
    path: '/',
    component: BackendLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashbaord,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Dashboard'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Products'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'equipments',
        name: 'Equipments',
        component: Equipments,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'shows/:id',
        name: 'ShowAsset',
        component: ShowAsset,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'edit/:id',
        name: 'EditAsset',
        component: EditAsset,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'employees',
        name: 'ListEmployee',
        component: ListEmployee,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'add-employee',
        name: 'AddEmployee',
        component: AddEmployee,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'employee/:id',
        name: 'ShowEmployee',
        component: ShowEmployee,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    component: BackendLayout,
    children: [
      {
        path: 'checkout',
        name: 'CheckoutForm',
        component: CheckoutForm,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'pdfgen',
        name: 'GeneratePdf',
        component: GeneratePdf,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  },
  {
    path: '/',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'pdfform',
        name: 'PdfForm',
        component: PdfForm,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Asset'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router