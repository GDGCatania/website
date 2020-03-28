import { NavigationGuard } from 'vue-router';

export type Next = Parameters<NavigationGuard>[2];

// temporary workaround to Vuex issue, lacking a Next type
// more on: https://github.com/vuejs/vue-router/pull/2497
