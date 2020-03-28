import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '@/store/root-store-models';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
  },
});
