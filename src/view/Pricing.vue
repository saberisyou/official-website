<template>
  <div id="Pricing">
    <!--    <div class="container text-center">-->
    <!--      <h3>Our Pricing</h3>-->
    <!--      <p style="color: #b2b2b2">The Best Pricing You Never See</p>-->
    <!--    </div>-->
    <div class="container">
      <div class="Pricing-container">
        <div
          class="Pricing-item"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.id)"
        >
          <div class="Pricing-item-wrapper">
            <div class="Pricing-item-top">
              {{ item.title }}
            </div>
            <div class="Pricing-item-price">PHP{{ item.price }}</div>
            <div class="Price-buy" :class="`buy_${index}`">Buy Now</div>
            <div v-for="tt in item.list" class="Pricing-item-list">
              <h4>{{ tt.title }}</h4>
              <p>{{ tt.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Pricing">
import { useRouter } from 'vue-router'
const serviceList = [
  {
    id: 'section-1',
    title: 'Basic Package',
    price: '₱10,000',
    list: [
      {
        title: 'Quick Turnaround',
        content:
          'Offers fast design services to ensure projects are completed in a short timeframe, ideal for clients needing rapid deployment.'
      },
      {
        title: 'Essential Design Services',
        content:
          'Includes simple graphic design, social media images, or basic promotional materials, catering to the needs of small businesses or individuals.'
      },
      {
        title: 'Limited Revisions',
        content:
          'Provides 1-2 free revisions to ensure client satisfaction with the final design.'
      }
    ]
  },

  {
    id: 'section-2',
    title: 'Advanced Package',
    price: '₱30,000',
    list: [
      {
        title: 'Comprehensive Design Services',
        content:
          'Includes branding elements, brochures, and integrated social media designs, offering a more holistic approach to brand identity.'
      },
      {
        title: 'Increased Revisions',
        content:
          'Offers 3-5 free revisions, allowing clients to express their needs fully and achieve a satisfactory design.'
      },
      {
        title: 'Market Research Support',
        content:
          ' Provides basic market research during the design process to ensure the design aligns with target audience preferences.'
      }
    ]
  },
  {
    id: 'section-3',
    title: 'Custom Package',
    price: '₱50,000',
    list: [
      {
        title: 'Fully Customized Design',
        content:
          'Delivers tailored design solutions based on specific client needs, covering all brand assets.'
      },
      {
        title: 'Unlimited Revisions',
        content:
          'Provides unlimited revisions to ensure complete client satisfaction throughout the design process.'
      },
      {
        title: 'Multi-Channel Integration',
        content:
          'Design solutions encompass multiple channels (such as websites, social media, and print materials), ensuring brand consistency.'
      }
    ]
  }
]

const router = useRouter()

function ServiceClick(id) {
  // router.push({
  //   name: 'serviceDetail',
  //   state: {
  //     id
  //   }
  // })
}
</script>
<style scoped>
.Price-buy {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ececee;
  line-height: 44px;
  margin: 20px;
  border-radius: 44px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.Price-buy:hover {
  background: #dcdbdb;
}

.buy_0 {
  background: linear-gradient(91deg, #615afe, #ba7aff 99.08%);
  color: #fff;
}
.buy_0:hover {
  background: linear-gradient(91deg, #615afe, #ba7aff 99.08%);
  opacity: 0.8;
  color: #fff;
}

.Pricing-container {
  padding: 30px 50px;
  display: flex;
  gap: 20px;
  width: 100%;
}
.Pricing-item {
  margin: 0 0 50px;
  width: calc(100% / 3);
  flex: 1;
}
.Pricing-item-list {
  padding: 20px;
}
.Pricing-item-list p {
  height: 70px;
  color: #888;
}

.Pricing-item-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  background: rgba(244, 244, 244, 1);
}
.Pricing-item-price {
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  padding: 0 20px;
  height: 100px;
}
.Pricing-item-top {
  width: 100%;
  padding: 20px 20px 40px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}
.Pricing-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Pricing-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Pricing-item-img {
  width: 100%;
  overflow: hidden;
}
.Pricing-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}
.Pricing-item-border {
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
.Pricing-item-wrapper:hover .Pricing-item-top > i {
  opacity: 0;
}
.Pricing-item-wrapper:hover .Pricing-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Pricing-item-wrapper:hover .Pricing-item-img > img {
  transform: scale(1.1, 1.1);
}
.Pricing-item-wrapper:hover > .Pricing-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
@media screen and (max-width: 997px) {
  .Pricing-container {
    flex-direction: column;
  }
  .Pricing-item {
    width: 100%;
    min-width: 100%;
  }
}
</style>
