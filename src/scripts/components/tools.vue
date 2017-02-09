<template>
	<div class="tools" :class="{'active': active}" @click="use" @mouseleave="unuse(true)" @mouseenter="unuse(false)">
		<div v-if="login">
			<img :src="face" alt="">
			<div class="tool" @click.stop="zone">
				<i class="fa fa-connectdevelop" aria-hidden="true"></i>
			</div>
			<div class="tool" @click.stop="unlogin">
				<i class="fa fa-sign-out" aria-hidden="true"></i>
			</div>
		</div>
		<div v-else>
			<i class="fa fa-user-o" aria-hidden="true"></i>
			<div class="tool" @click.stop="toggleBox('login')">
				<i class="fa fa-sign-in" aria-hidden="true"></i>
			</div>
			<div class="tool" @click.stop="toggleBox('register')">
				<i class="fa fa-user-plus" aria-hidden="true"></i>
			</div>
		</div>
	</div>
	<div id="shade-box" class="shade-box" v-show="showShade" @click="toggleBox" @mousewheel.prevent @DOMMouseScroll.prevent>
		<component class="transition" :is="toolboxs" @click.stop @login="toLoginStatu" @toggle="toggleBox" keep-live></component>
	</div>
</template>

<script>
	export default {
		compiled: function(){
			if(window.sessionStorage.user != undefined && window.sessionStorage.user != ""){
				this.toLoginStatu(JSON.parse(window.sessionStorage.user));
			}
		},
		data: function(){
			return {
				active: false,
				showShade: false,
				toolboxs: '',
				login: false,
				user: {
					photo: ""
				}
			};
		},
		components: {
			'user-login': function (resolve){
				require(['./user-login.vue'], resolve);
			},
			'user-register': function (resolve){
				require(['./user-register.vue'], resolve);
			}
		},
		methods: {
			toLoginStatu: function (userS){
	   			this.login = true;
	   			this.user = userS;
			},
			use: function (){
				this.active = true;
				this.toolboxs = '';
			},
			unuse: function (isCreate){
				let _self = this;
				var obj = function(){
					_self.active = false;
				};
				clearTimeout(this.activeTimeOut);
				if(isCreate){
					this.activeTimeOut = setTimeout(function(){
						obj();
					},3000);
				}
			},
			toggleBox: function (type){
				this.active = false;
				this.showShade = !this.showShade;
				this.toolboxs = 'user-'+type;
			},
			unlogin: function(){
				window.sessionStorage.user = "";
				this.user = {};
				this.login = false;
				this.$dispatch('unlogin', '');
			},
			zone: function(){
				this.$dispatch('zone', '');
			}
		},
		computed: {
			face: function(){
				let photo = Window.config.BASEURL + this.user.photo;
				return photo;
			}
		}
	}
</script>

<style lang="sass">
	.tools {
		height: 80px;
		width: 80px;
		background-color: #686868;
		opacity: .4;
		position:fixed;
		right:20px;
		bottom: 20px;
		border-radius: 50%;
		text-align: center;
		line-height: 75px;
		font-size: 50px;
		transition: all .5s ease;
		cursor: pointer;
		z-index: 999;

		&:hover {
			opacity: 1;
			box-shadow: 0 0 10px #1f1d1d;
		}
		& > div > img {
			width: 100%;
			height: auto;
			border-radius: 50%;
		}
		.tool {
			width: 60px;
			height: 60px;
			background-color: #aeaeae;
			border-radius: 50%;
			position: absolute;
			transition: all 1s ease;
			margin:{
				left: -100px;
				top: -65px;
			}
			transform-origin: 140px 30px;
			font-size: .8em;
			i {
				position: absolute;
				transition: all .5s ease;
			}
			&:nth-child(2){
				transform: rotate(-100deg);
				i {
					transform: rotate(100deg);
					margin: {
						left: -17px;
						top: 10px;
					}
				}
			}
			&:nth-child(3) {
				transform: rotate(-170deg);
				i {
					transform: rotate(1700deg);
					margin: {
						left: -21px;
						top: 7px;
					}
				}
			}
		}
	}
	.active {
		.tool {
			&:nth-child(2){
				transform: rotate(80deg);
				i {
					transform: rotate(-80deg);
				}
			}
			&:nth-child(3) {
				transform: rotate(10deg);
				i {
					transform: rotate(-10deg);
				}
			}
		}
	}
	.shade-box {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.6);
	}
</style>