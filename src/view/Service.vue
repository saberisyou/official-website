<template>
  <div id="Service">
    <div class="container text-center">
      <h3>Our Service</h3>
      <p style="color: #b2b2b2">The Best Service You Never See</p>
    </div>
    <div class="container">
      <div class="Service-container row">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.id)"
        >
          <div class="Service-item-wrapper">
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
            <div class="Service-item-footer" v-html="item.eng_title ">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Service">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import WOW from 'wow.js'
import service1 from '@/assets/img/service1.jpg'
import service2 from '@/assets/img/service2.jpg'
import service3 from '@/assets/img/service3.jpg'
import service4 from '@/assets/img/service4.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: 'Video Production',
    eng_title: 'We specialize in producing high-quality videos tailored to meet your unique needs. Our end-to-end video production services ensure a seamless process from concept to delivery.\n' +
      'What We Offer:\n' +
      '<br/>' + '<br/>' +
      'Concept Development: Turning your ideas into engaging scripts and storyboards.\n' +
      'Corporate Videos: Enhance your brand image with professional corporate films for presentations, marketing, and internal use.\n' +
      'Documentaries: Tell compelling stories with expert research, interviews, and creative storytelling.\n' +
      'Promotional Videos: Create attention-grabbing advertisements, product demos, or social media campaigns.\n' +
      'Post-Production: Editing, color grading, sound design, and motion graphics for polished, professional results.',
    img: service1
  },
  {
    id: 'section-2',
    title: 'Live Events and Shows',
    eng_title: 'Whether it’s a corporate event, product launch, or entertainment showcase, we deliver memorable live experiences that resonate with audiences.\n' +
      'What We Offer:\n' +
      '<br/>' + '<br/>' +
      'Event Conceptualization: Creative themes and formats tailored to your objectives.\n' +
      'Event Hosting (Anchoring): Professional anchors to engage and captivate your audience.\n' +
      'Event Production: Stage design, lighting, sound systems, and multimedia integration for a flawless execution.\n' +
      'Broadcast & Streaming: Extend your event’s reach with live streaming and digital broadcasting',
    img: service2
  },
  {
    id: 'section-3',
    title: 'Advertising Solutions',
    eng_title: 'Our advertising services are designed to help your brand stand out in a crowded market. We create campaigns that deliver measurable results.\n' +
      'What We Offer:\n' +
      '<br/>' + '<br/>' +
      'Digital Advertising: Targeted campaigns on platforms like Google, Facebook, and YouTube.\n' +
      'Traditional Advertising: Creative content for TV, radio, and print media.\n' +
      'Brand Storytelling: Unique, impactful narratives that align with your brand identity.\n' +
      'Social Media Campaigns: Eye-catching content and strategy to boost engagement.\n' +
      'Content Strategy & Copywriting: Develop compelling messages that connect with your audience.',
    img: service3
  },
  {
    id: 'section-4',
    title: 'Event and Show Production',
    eng_title: 'Our team can bring your vision to life by creating custom events and shows that leave a lasting impact.\n' +
      'What We Offer:\n' +
      '<br/>' + '<br/>' +
      'TV and Online Shows: Full production for talk shows, talent showcases, and episodic series.\n' +
      'Thematic Entertainment: Create shows with customized themes for corporate or public events.\n' +
      'Talent Management: Connect with hosts, performers, and influencers for your events.',
    img: service4
  }
]

const router = useRouter()

function ServiceClick(id) {
  router.push({
    name: 'serviceDetail',
    state: {
      id
    }
  })
}
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>
<style scoped >
.Service-item-footer{
  display: flex;
  height: 660px;
  padding: 20px;

}
.Service-container {
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Service-item-img {
  width: 100%;
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>

