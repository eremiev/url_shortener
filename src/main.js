import Vue from 'vue'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(Vuex);
Vue.use(VTooltip);
Vue.use(BootstrapVue);
Vue.use(VueClipboard);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        longUrlsArray: [],
        shortUrlsArray: []
    },
    getters: {
        longUrlsArray: state => state.longUrlsArray,
        shortUrlsArray: state => state.shortUrlsArray
    },
    mutations: {
        // Mutations
        updateLongUrlArray: (state, payload) => {
            state.longUrlsArray = payload;
        },
        updateShortUrlArray: (state, payload) => {
            state.shortUrlsArray.push(payload);
        },
        clearShortUrlArray: (state) => {
            state.shortUrlsArray = [];
        }
    }
});


new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
