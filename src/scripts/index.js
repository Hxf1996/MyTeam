// 引入组件
import tools from './components/tools.vue';
import footer from './components/footer.vue';

// 引入js文件
import VueResource from 'vue-resource';
// 配置文件
import config from './config.js';
Vue.use(VueResource);

// 配置
Window.config = config;
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

let app = new Vue({
	el: 'body',
	data: {
		showLoad: true,
		opacity: 1,
		filter: 10,
		focus: {
			'one': false,
			'two': false,
			'three': false
		},
		focusTeams: [
			{
				src: '/images/logo1.jpg',
				url: '#'
			},
			{
				src: '/images/logo2.png',
				url: '#'
			},
			{
				src: '/images/logo3.jpg',
				url: '#'
			},
			{
				src: '/images/logo4.jpg',
				url: '#'
			}
		]
	},
	compiled: function(){
		this.showLoad = false;
		this.mouseWheel();
	},
	components: {
		'my-tool': tools,
		'my-footer': footer
	},
	methods: {
		join: function(){
			window.location.href = '/welcome.html';
		},
		toClear: function(){
			this.filter = 0;
		},
		toDark: function(){
			this.filter = 10;
		},
		mouseWheel: function(){
			let scrollHeight = document.body.scrollTop;
			let screenHeight = document.documentElement.clientHeight;
			this.opacity = 1 - ( scrollHeight / screenHeight ) / 1.5;
			if( !this.focusOne && scrollHeight > screenHeight / 3){
				this.addActive('one');
			}
			if( !this.focusTwo && scrollHeight > screenHeight){
				this.addActive('two');
			}
			if( !this.focusThree && scrollHeight > screenHeight * 1.8){
				this.addActive('three');
			}
		},
		addActive: function(num){
			this.focus[num] = true;
		}
	}
});
