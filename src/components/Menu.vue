<template>
  <div class="menu w-screen fixed flex pl-16 pt-1">
    <div class="logo">
      <img class="w-full"
          src="@/assets/images/gdglogo.png"
          alt="GDG Catania logo">
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Menu extends Vue {

  }
</script>

<style lang="postcss" scoped>
  .menu {
    height: 3.75rem;
  }
</style>
