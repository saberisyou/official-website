import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: 'home'
        }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: 'service'
        }
      },
      {
        path: '/servicedetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: 'Our Service'
        }
      },
      {
        path: '/companyprofile',
        name: 'companyprofile',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: 'Company profile'
        }
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('@/view/AboutUs.vue'),
        meta: {
          title: 'About Us'
        }
      },
      {
        path: '/careerOpportunity',
        name: 'CareerOpportunity',
        component: () => import('@/view/JobChance.vue'),
        meta: {
          title: 'Career Opportunity'
        }
      },
      {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/view/ContactUs.vue'),
        meta: {
          title: 'Contact Us'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}

