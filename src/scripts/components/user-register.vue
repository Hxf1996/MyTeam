<template>
	<div class="register-login"  transition="fade-scale-origin1">
		<form>
	        <div class="input" :class="{'active': user.studentId}">
	            <input id="username" name="username" class="input-normal" type="text" v-model="user.studentId">
	            <label for="username">学号</label>
	        </div>
	        <div class="input" :class="{'active': user.email}">
	            <input id="email" name="email" class="input-normal" type="email" v-model="user.email">
	            <label for="email">邮箱</label>
	        </div>
	        <div class="input" :class="{'active': user.password}">
	            <input id="password" name="password" class="input-normal" type="password" v-model="user.password">
	            <label for="password">密码</label>
	        </div>
	        <div class="label" :class="{'active': active}">
				<div :class="[label.statu]"></div>
				<span>{{ label.msg }}</span>
			</div>
	        <span class="button" @click="register">注册</span>
	    </form>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				active: false,
				user: {
					studentId: '',
					email: '',
					password: ''
				},
				label: {
					statu: 'ajax-loader',
					msg: '正在注册'
				}
			}
		},
		methods: {
			register: function(){
				this.active = true;
				var _self = this;
				this.$http.post(Window.config.userRegister, this.user).then((response)=>{
	                if(response.body.statu){
	                	this.label.statu = 'ajax-success';
	                	if(window.location.pathname != '/welcome.html'){
	                		setTimeout(function(){
			                	window.location.href = '/welcome.html';
			                },1000);
	                	}
	                }else{
						this.label.statu = 'ajax-error';
	                }
	                this.label.msg = response.body.msg;
	            },(response)=>{
	                this.label.statu = 'ajax-error';
	                this.label.msg = '出错了,请重试！';
	            })
	            setTimeout(function(){
						_self.active = false;
						_self.label.statu = 'ajax-loader';
						_self.label.msg = '正在注册';
				},4000);
			}
		}
	}
</script>

<style lang="sass">
	.register-login {
		background-color: #fff;
		border-radius: 20px;
		position: absolute;
		bottom: 104px;
		right: 80px;
		box-shadow: 0 0 80px #fff;
		padding-top: 24px;
		@import '../../sass/layouts/_input.scss';
		.input {
			font-size: 14px;
			width: 80%;
			margin: 0 auto;
			color: #15bbf9;
		}
		.button {
			font-size: 20px;
			padding: 4px 10px;
			background-color: #15bbf9;
			position: absolute;
			width: 90px;
			right: -5px;
			box-shadow: -3px -3px 8px #999;
			user-select: none;
			margin-top: 10px;
			&:active {
				cursor: pointer;
				box-shadow: -1px -1px 1px #c6c6c6;
				margin-top: 7px;
			}
		}
		.label {
			font-size: 20px;
			position: absolute;
			user-select: none;
			margin-top: 10px;
			right: 130px;
			color: #2d2d2d;
			display: none;
		}
		.active {
			display: block;
		}
	}
	.fade- {
		&scale-origin1- {
			&transition {
				width: calc(100vw - 85px);
				max-width: 400px;
				height: 270px;
				@media screen and (min-width: 1000px) {
					& {
						width: 400px;
					}
				}
			}
			&enter, &leave {
				height: 0px;
				width: 0px;
				overflow: hidden;
				white-space:nowrap;
			}
		}
	}

	.ajax-loader {
		position: absolute;
		margin-left: -20px;
		margin-top: 9px;
		font-size: 0.2rem;
	}
	.ajax-error {
		color: red;
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		&::before {
			content: "\f00d";
			box-sizing: border-box;
		}
		& + span {
			color: red;
		}
	}
	.ajax-success {
		color: green;
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		&::before {
			content: "\f00c";
			box-sizing: border-box;
		}
		& + span {
			color: green;
		}
	}
</style>