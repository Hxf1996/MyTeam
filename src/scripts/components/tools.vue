<template>
	<div class="tools" :class="{'active': active}" @click="use" @mouseleave="unuse(true)" @mouseenter="unuse(false)">
		<i class="fa fa-user-o" aria-hidden="true"></i>
		<div class="tool" @click.stop="toggleBox('login')">
			<i class="fa fa-sign-in" aria-hidden="true"></i>
		</div>
		<div class="tool" @click.stop="toggleBox('register')">
			<i class="fa fa-user-plus" aria-hidden="true"></i>
		</div>
	</div>
	<div id="shade-box" class="shade-box" v-show="showShade" @click="toggleBox" @mousewheel.prevent @DOMMouseScroll.prevent>
		<component class="transition" :is="toolboxs" @click.stop keep-live></component>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				active: false,
				showShade: false,
				toolboxs: ''
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
			use: function(){
				this.active = true;
				this.toolboxs = '';
			},
			unuse: function(isCreate){
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
			toggleBox: function(type){
				this.active = false;
				this.showShade = !this.showShade;
				this.toolboxs = 'user-'+type;
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

		&:hover {
			opacity: 1;
			box-shadow: 0 0 10px #1f1d1d;
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
		z-index: 9;
	}
</style>