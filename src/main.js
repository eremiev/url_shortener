import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex);

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
    store: store,
    render: h => h(App)
}).$mount('#app');
