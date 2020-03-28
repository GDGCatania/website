<template>
  <div class="hero w-screen h-screen flex">
    <div class="hero__content m-auto">
      <h1 class="text-4xl text-white">
        Google Developer Group Catania
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Hero extends Vue {

  }
</script>

<style lang="postcss" scoped>
  .hero {
    background-image: url('~@/assets/images/catania_bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
