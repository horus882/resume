<template>
  <header id="header" class="fixed-top">
      <!-- <h2>{{ this.$route.name }}</h2> -->
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1>
          <router-link to="/about" class="navbar-brand">Brent Hsieh</router-link>
        </h1>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/about" class="nav-link"><i class="fas fa-address-card"></i>About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link"><i class="fas fa-folder"></i>Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/research" class="nav-link"><i class="fas fa-flask"></i>Research</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  // display: table-cell;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
  vertical-align: middle;
}

nav {
  // display: table-cell;
  vertical-align: middle;
}

ul {

  font-size: 0;
  margin-bottom: 0;

  li {

    display: inline-block;
    font-size: 16px;
    padding: 0 0 0 15px;

    // &::before {
    //   content: '/';
    //   position: relative;
    //   // top: -1px;
    //   color: rgba(255, 255, 255, .5);
    //   vertical-align: middle;
    // }

    a {

      // display: inline-block;
      // vertical-align: middle;
      // margin: 0 0 0 15px;

      i {margin-right: 7.5px;}

    }

  }

}

</style>
