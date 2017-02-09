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
		id: '',
		secret: '',
		label: {
			statu: '',
			msg: ''
		}
	},
	created: function(){
		this.id = this.getQueryString("id");
		this.secret = this.getQueryString("secret");
		if(this.id != null && this.secret != null){
			this.toActivate();
		}else {
			this.label.msg = '∩ω∩请正常使用哦~~~';
		}
	},
	methods: {
		getQueryString: function(name){
			let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			let r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]); return null;
		},
		toActivate: function(){
			this.label.statu = 'ajax-loader';
			this.label.msg = '正在验证，请等待';
			this.$http.post(Window.config.userActivate, {id: this.id,secret: this.secret}).then((response)=>{
            	this.label.msg = response.body.msg;
                if(response.body.statu){
                	this.label.statu = 'ajax-success';
                	setTimeout(function(){
				        window.location.href = "/welcome.html";
				    },2000);
                }else{
                	this.label.statu = 'ajax-error';
					setTimeout(function(){
				        window.location.href = "/index.html";
				    },2000);
                }
            },(response)=>{
                this.label.statu = 'ajax-error';
                this.label.msg = '出错了,请重试！';
            });
		}
	}
});
