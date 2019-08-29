<template>
  <section id="skills" class="col-xs-12">
    <h2 class="text-primary"><i class="fas fa-xs fa-wrench"></i>Skills</h2>
    <div class="">
      <h3>Front-End</h3>
      <p>
        <span class="badge badge-pill badge-secondary" v-for="item in frontend">{{ item }}</span>
      </p>
    </div>
    <div class="">
      <h3>Back-End</h3>
      <p>
        <span class="badge badge-pill badge-secondary" v-for="item in backend">{{ item }}</span>
      </p>
    </div>
    <div class="">
      <h3>Tools / Others</h3>
      <p>
        <span class="badge badge-pill badge-secondary" v-for="item in others">{{ item }}</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      frontend: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Web Design',
        'Bootstrap',
        'jQuery',
        'Vue.js',
        'React.js',
        'SCSS',
        'SVG',
        'SEO',
        '各平台 API 串接'
      ],
      backend: [
        'PHP',
        'MySQL',
        'phpMyAdmin'
      ],
      others: [
        'VS Code',
        'Sublime Text',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'NPM',
        'Git',
        'Gulp',
        'Spark AR',
        'Pusher',
        'Google Vision',
        'Google Analytics'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#skills {

  p {
  }

  .badge {

    font-size: 14px;
    font-weight: 400;
    margin: 5px 5px;

  }

  .badge-pill {
    padding: 0.5em 0.8em;
  }

}

</style>
