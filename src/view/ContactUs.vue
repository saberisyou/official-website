<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">Let’s Collaborate</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="please enter name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="please enter your email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">Phone Number</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="please enter phone number"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">Details</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="please enter Details"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    class="btn btn-default btn-block"
                    @click.stop="submitForm"
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="ContactUs">
import WOW from 'wow.js'
import { onMounted } from 'vue'
// 百度地图BMap构造函数
let BMap = null
onMounted(() => {
})
function submitForm() {
  window.open(
    'https://neveryu.github.io/web-bookmarks/interview/',
    'web-bookmarks'
  )
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

