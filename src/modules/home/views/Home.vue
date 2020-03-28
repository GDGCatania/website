<template>
  <div>
    <Hero></Hero>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import Hero from '@/modules/home/components/Hero.vue';

  @Component({
    components: {
      Hero,
    },
  })
  export default class Home extends Vue {

  }
</script>
