import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from '@/components/app';

Vue.use(BootstrapVue);

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    components: {
        App
    }
});
