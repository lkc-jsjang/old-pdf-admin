import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
// import module1 from './modules/module1'

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // module1
  },
});

export default store;
