<template>
  <header id="header">
    <div class="container">
      <h1>Brent Hsieh</h1>
      <!-- <h2>{{ this.$route.name }}</h2> -->
      <nav>
        <ul>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/research">Research</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  // data() {
  //   return {
      
  //   }
  // },
  // computed: {
  //   currentRouteName() {
  //     console.log(this);
  //     return this.$route.name;
  //   }
  // }
}
</script>

<style lang="scss" scoped>

h1 {
  display: table-cell;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
  vertical-align: middle;
}

nav {
  display: table-cell;
  vertical-align: middle;
}

ul {

  font-size: 0;
  margin-bottom: 0;

  li {

    display: inline-block;
    font-size: 16px;
    padding: 0 0 0 15px;

    &::before {
      content: '/';
      position: relative;
      top: -1px;
      vertical-align: top;
    }

    a {
      margin: 0 0 0 15px;
    }

  }

}

</style>
