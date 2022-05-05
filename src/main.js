import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

// Bootstrap completo
/* import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' */

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')