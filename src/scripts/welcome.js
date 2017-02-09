// 引入js文件
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// 配置文件
import config from './config.js';

Vue.use(VueResource);
Vue.use(VueRouter);

// 配置
Window.config = config;
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
Vue.transition('fade', {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutDown'
});
Vue.transition('shake', {
    enterClass: 'shake',
    leaveClass: 'shake'
});
// 引入组件
import tools from './components/tools.vue';

import index from './components/index.vue';
import zone from './components/zone.vue';
import corpor from './components/corpor.vue';

// 创建一个路由器实例
let router = new VueRouter({
	hashbang: true
});
// 路由索引定义
router.map({
    '/': {
    	name: 'index',
        component: index
    },
    '/user': {
        name: 'zone',
        component: zone
    },
    '/corpor/:corporId': {
        name: 'corpor',
        component: corpor
    }
});

// 创建根组件
let App = Vue.extend({
	components: {
		'my-tool': tools
	},
    methods: {
        zone: function(){
            router.go({ name: 'zone' });
        },
        unlogin: function(){
            router.go({ name: 'index' });
        },
        corpor: function(corporId){
            router.go({ 'name': 'index', 'corporId': corporId});
        }
    }
});

// 启动实例
router.start(App, '#app');