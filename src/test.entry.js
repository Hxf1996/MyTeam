import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 创建一个路由器实例
var router = new VueRouter({
	history: true,
	abstract: true
});
// 路由索引定义
router.map({
    '/foo/:username': {
    	name: 'username',
        component: function(resolve){
        	require(['./scripts/vue/components/foo.vue'], resolve);
        },
        type: 'heheh',
        // 二级路由设置
        subRoutes: {
	      '/bar': {
	        component: function(resolve){
	        	require(['./scripts/vue/components/bar.vue'], resolve);
	        }
	      }
	    }
    },
    '/bar': {
        component: function(resolve){
        	require(['./scripts/vue/components/bar.vue'], resolve);
        }
    }
});
// 创建根组件
var App = Vue.extend({});
// 启动实例
router.start(App, '#app');