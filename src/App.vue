<template>
  <div id="app">

    <Header />

    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->

    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  // watch: {
  //   $route (to, from) {
  //     console.log(to)
  //   }
  // }
}

</script>

<style lang="scss">

@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);

html {
  overflow-y: scroll;
}

#app {
  color: #333333;
  font-size: 16px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: sourcehansans-tc, 'Noto Sans S Chinese', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Tahoma, Verdana, Arial, Helvetica, sans-serif;
  font-weight: 400;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50px;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

ul {
  padding: 0;
}

#main {
  padding-top: 50px;
}

p.comment {
  color: #aaaaaa;
  font-style: italic;
}

</style>
