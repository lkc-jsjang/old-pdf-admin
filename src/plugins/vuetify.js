import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#01A900', //main
        'green-500': '#00C400', //main
        'green-400': '#11D70D', //light
        'green-200': '#6CEF64',
        'green-600': '#01A900', //dark
        'green-700': '#018600',
        'bg-white': '#FFFFFF',
        'bg-off-white': '#F5F5F5',
        'bg-divider': '#EEEEEE',
      },
    },
  },
});
