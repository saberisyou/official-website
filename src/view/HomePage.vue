<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 大数据管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive"
            src="@/assets/img/img1.png"
            alt="大数据管理系统"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
            Overview of an Advertising System
          </h2>
          <p>
            An advertising system is a comprehensive platform designed to help businesses and advertisers effectively manage, deploy, and optimize their advertising campaigns. With the rapid growth of digital marketing, advertising systems play a crucial role in enhancing brand visibility, increasing sales, and improving customer engagement. Below is an overview of the key components, features, and benefits of an advertising system.
          </p>

        </div>
      </div>
    </div>

    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>Experts around you</h1>
        <h3>Provide excellent IT services 24/7</h3>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >
          contact us
        </button>

      </div>
    </div>

    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">Customer Reviews</p>
        <swiper
          class="swiper-container customer-swiper hidden-xs"
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          loop
          autoplay
          :pagination="{
            clickable: true
          }"
        >
          <swiper-slide
            class="swiper-slide customer-block"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo" :class="computedClassNames[index]">
              <img class="center-block" :src="logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">{{ item.title }}</div>
          </swiper-slide>
        </swiper>

        <div class="row visible-xs customer-block">
          <div
            class="col-xs-12"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo" :class="computedClassNames[index]">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">
              <small>{{ item.title }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo" />
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import {  ref, computed, onMounted } from 'vue'
// import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.jpg'
import logo from '@/assets/img/9c218fb8732e4e7c5d7cddcf620110c07d85a8a5561789-GGji7H.jpeg'
import logo_hp from '@/assets/img/logo_hp.png'
import logo_kk from '@/assets/img/logo_kk.png'
import logo_toyota from '@/assets/img/logo_toyota.png'

import img_tel from '@/assets/img/tel.png'
import img_computer from '@/assets/img/computer.png'
import img_qq from '@/assets/img/qq.png'
import img_skill from '@/assets/img/skill.png'
import ContactUs from "@/view/ContactUs.vue";
const items = ref(['Item1', 'Item2', 'Item3', 'Item4']);

const computedClassNames = computed(() =>
  items.value.map((_, index) => `customer-logo_${index+1}`)
);

const swiperList = [
  {
    img: banner1,
    title: 'The Art of Storytelling Through Creativity and Innovation',
    content: 'Bringing Stories to Life Through Creativity and Innovation'
  },
  {
    img: banner2,
    title: ' Innovative Video and Live Event Solutions',
    content: 'Expertly crafting videos, documentaries, live events, and advertising solutions that captivate audiences and drive results'
  },
  {
    img: banner1,
    title: 'Explore Our Services',
    content: 'Contact Us for a Consultation'
  },
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]
const company = import.meta.env.VITE_APP_COMPANYNAME
const customerList = [
  {
    logo: logo_hp,
    title:
      '',
    content:
      `Working with ${company} has been an exceptional experience from start to finish. From our initial consultation, it was clear that they truly understood our vision and goals. Their team took the time to listen to our needs and provided valuable insights that helped shape our project. The level of professionalism and dedication they exhibited was impressive, making us feel confident that we were in good hands.`
  },
  {
    logo: logo_kk,
    title:
      '',
    content:
      `The creativity and innovation that  ${company} brought to the table were outstanding. They transformed our ideas into captivating visuals that not only told our story but also resonated with our target audience. The attention to detail in every aspect of the production was remarkable, and it was evident that they are passionate about their craft. The final product exceeded our expectations and has received positive feedback from both our team and our clients.`
  },
  {
    logo: logo_toyota,
    title:
      '',
    content:
      'Communication throughout the project was seamless. The team kept us updated at every stage, ensuring that we were aligned and informed. They were always available to address any questions or concerns we had, which made the entire process smooth and enjoyable. Their collaborative approach fostered a sense of partnership that we truly appreciated.'
  },
  {
    logo: logo_kk,
    title: '',
    content:
      'Overall, we are thrilled with the results and would highly recommend [Your Company Name] to anyone looking for top-notch video production and creative solutions. Their expertise, creativity, and commitment to excellence have made a significant impact on our brand, and we look forward to working with them again in the future.'
  },
]

const serverList = [
  {
    logo: img_tel,
    title: 'Tailored Solutions',
    content: '<p>Our agency specializes in creating customized advertising strategies that align with each client\'s unique goals and target audience. We take the time to understand your brand, industry, and specific needs, ensuring that our solutions are effective and relevant.</p>'
  },
  {
    logo: img_computer,
    title: 'Creative Excellence',
    content: '<p>We pride ourselves on our innovative and creative approach to advertising. Our talented team of designers, copywriters, and strategists work collaboratively to develop captivating campaigns that resonate with audiences and elevate your brand\'s presence in the market.'
  },
  {
    logo: img_qq,
    title: 'Comprehensive Analytics',
    content: '<p>Our agency utilizes advanced analytics tools to track and measure the performance of all advertising campaigns. By providing detailed insights and reports, we help clients understand the effectiveness of their investments and make data-driven decisions for continuous improvement</p>'
  },
  {
    logo: img_skill,
    title: 'Strong Industry Relationships',
    content: '<p>We have established strong relationships with various media outlets, influencers, and industry partners. This network allows us to secure optimal placements and negotiate better rates, ensuring that your campaigns reach the right audience at the right time</p>'
  }
]

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url('../assets/img/contact_us_bg.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url('../assets/img/weixin.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url('../assets/img/weibo.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url('../assets/img/twitter.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px 80px;
  min-height: 400px;
}
#customer .customer-logo  {
  width: 94px;
  height: 94px;
  position: relative;
  overflow: hidden;
}
#customer .customer-logo img {
  object-fit: cover;
  width: 500px;
  position: absolute;
  left: -204px;
  top:-192px;
  pointer-events: none;
}
#customer .customer-logo_2 img {
  left: -204px;
  top:-70px;
}
#customer .customer-logo_3 img {
  left: -364px;
  top:-70px;
}
#customer .customer-logo_4 img {
  left: -50px;
  top:-335px;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  padding-top: 20px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}

#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}

#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

