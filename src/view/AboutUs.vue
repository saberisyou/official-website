<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">About Us
    <br/>
      "Your Creative Partner in Anchoring and Advertising."
    </div>
    <div class="container">
      <div class="row CompanyIntroduction-container">

        <div class="col-xs-12 col-sm-12 col-md-6">
          <p class="textyue">
            We are a dynamic anchor and advertising company dedicated to bringing your vision to life. From conceptualizing compelling documentaries to producing live shows and digital campaigns, we deliver excellence every step of the way.
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn cbimg">
          <img
            class="img-responsive center-block"
            src="@/assets/img/dbd3167123c8445ebb4a423bb4e7cadc.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="AboutUs">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>

.cbimg {
}
.cbimg img{
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  filter: grayscale(100%);
}
.textyue{
  font-size: 18px!important;
  line-height: 36px!important;
}
.banner {
  color: #fff;
  font-size: 30px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

