<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">Career Opportunity</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>Advertising Specialist</h2>
        <p>Join Our Team!</p>
        <ol>Are you a creative thinker with a passion for crafting compelling advertising campaigns? Do you thrive in a fast-paced, innovative environment? LMG Creative Group Corp, is looking for a talented Advertising Specialist to join our dynamic team!</ol>
        <p>What You’ll Do:</p>
        <ol>
          <li>
            Develop Campaigns: Conceptualize and execute advertising campaigns across multiple platforms, including digital, print, and broadcast.
          </li>
          <li>Market Research: Analyze market trends and audience behavior to create targeted and effective strategies.</li>
          <li>
            Content Creation: Collaborate with the creative team to produce engaging content, from ad copy to visuals.
          </li>
          <li>
            Performance Analysis: Monitor and evaluate the effectiveness of campaigns, optimizing for better results.
          </li>
          <li>
            Client Collaboration: Work closely with clients to understand their needs and deliver customized solutions.
          </li>
        </ol>
        <p>What We’re Looking For:</p>
        <ol>
          <li>
            Proven experience in advertising, marketing, or a related field.
          </li>
          <li> Strong creative and analytical skills.</li>
          <li>
            Proficiency in digital advertising platforms (e.g., Google Ads, Facebook Ads).
          </li>
          <li>
            Excellent communication and teamwork abilities.
          </li>
          <li>
            Ability to manage multiple projects and meet deadlines.
          </li>
        </ol>


        <p>  How to Apply:</p>
<ol>


        If you’re ready to bring your creativity and expertise to our team, we’d love to hear from you!
        Send your resume and portfolio to lmgcreativegroupcorp@gmail.com.
        Include the subject line: Application for Advertising Specialist.
</ol>

        <button
          class="center-block btn btn-warning btn-lg"
          @click.stop="submitForm"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup name="JobChance">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  let wow = new WOW()
  wow.init()
})
function submitForm() {
  window.open('https://neveryu.github.io/neveryu/', 'NeverYu')
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.JobChance-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

