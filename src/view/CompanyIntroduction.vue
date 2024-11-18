<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">LMG CREATIVE GROUP CORP
    <br/>
      "Creative Ideas, Seamless Execution, Captivating Results."
    </div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn cbimg">
          <img
            class="img-responsive center-block"
            src="@/assets/img/a9882eb193184e52ba9330ce0be98e05.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 style="margin-top: 0">LMG CREATIVE GROUP CORP</h2>
          <p>
           Your Anchor and Advertising Solution
          </p>
          <p class=".text-justify">
            LMG CREATIVE GROUP CORP is a full-service anchor and advertising company dedicated to bringing stories to life through innovative concepts and flawless execution. We specialize in creating impactful content and experiences, from professionally crafted videos and documentaries to unforgettable live events and advertising campaigns. Our mission is to empower businesses and individuals to connect with their audience in meaningful ways.
          </p>
          <p class=".text-justify">
            Vision:
            <br/>
            To be the leading creative agency that sets new standards in content creation and advertising, inspiring audiences and elevating brands globally.
          </p>
          <p class=".text-justify">
            Mission:
            <br/>
            To deliver high-quality, customized solutions that resonate with our clients' goals.
            To harness creativity, innovation, and technology in every project.
            To build lasting partnerships through exceptional service and measurable results.
          </p>
          <p class=".text-justify">
            Core Values:
            <br/>
            Creativity: Thinking outside the box to deliver fresh and original ideas.
            Excellence: Maintaining the highest standards in every project we undertake.
            Collaboration: Partnering closely with clients to ensure their vision becomes reality.
            Integrity: Conducting our business ethically and transparently.
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
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
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  filter: grayscale(100%);
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

