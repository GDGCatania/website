<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Menu from '@/components/Menu.vue';

  @Component({
    components: {
      Menu,
    },
  })
  export default class App extends Vue {

  }
</script>
<style lang="postcss" src="./assets/css/app.pcss"></style>
