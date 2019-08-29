<template>
  <section id="basic" class="col-xs-12 col-md-4 col-lg-6">
    <div class="row">
      <div class="col-xs-12 col-lg-5">
        <div class="avatar border-primary">
          <img src="../../assets/about/avatar.jpg">
        </div>
      </div>
      <div class="col-xs-12 col-lg-7">
        <p class="name">謝孟錡 (Brent Hsieh)</p>
        <p class="birthday">1990/12/13</p>
        <!-- <p class="gender">男性</p> -->
        <p class="mobile"><a href="tel:0936882533">0936882533</a></p>
        <p class="email"><a href="mailto:horus882@gmail.com">horus882@gmail.com</a></p>
        <Social />
      </div>
    </div>
  </section>
</template>

<script>

import Social from './Social.vue'

export default {
  name: 'Basic',
  components: {
    Social
  }
}

</script>

<style lang="scss" scoped>

.name {
  font-size: 22px;
  font-weight: 500;
}

</style>
