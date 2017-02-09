<template>
	<div class="my-left">
		<img class="face" :src="face" alt="">
		<p class="name white-text">{{ user.name }}</p>
		<ul class="home-list">
	      	<li class="" v-for="one in homeList" style="color:{{ one.color }}" @click="setActiveList($index, one.type)">
	      		{{{ one.logo }}}{{ one.name }}
	      	</li>
    	</ul>
	</div>
	<div class="my-right">
		<div v-show="activeList == 0" transition="fade" style="margin-top: 70px;">
			<div class="row" style="margin-top: 30px;">
				<div style="font-size: 30px;margin-left: 50px;margin-bottom: 20px;">最近活动</div>
				<my-activity v-for="one in minActivitys" :activity="one"></my-activity>
			</div>
			<div class="row" style="margin-top: 30px;">
				<div style="font-size: 30px;margin-left: 50px;margin-bottom: 20px;">最近通知</div>
				<my-ann v-for="one in minAnns" :ann="one"></my-ann>
			</div>
		</div>
		<div v-show="activeList == 1" transition="fade">
			<nav>
			    <div class="nav-wrapper">
			      	<div class="col s12" style="padding-left: 50px;">
				        <a href="#!" class="breadcrumb">我的社团</a>
			      	</div>
			    </div>
		  	</nav>
			<div class="row" style="margin-top: 30px;">
				<my-team v-for="one in teams" :team="one" @click="toTeam(one.id, 0)"></my-team>
			</div>
		</div>
		<div v-show="activeList == 2" transition="fade">
			<nav>
			    <div class="nav-wrapper">
			      	<div class="col s12" style="padding-left: 50px;">
				        <a href="#!" class="breadcrumb">我的活动</a>
			      	</div>
			    </div>
		  	</nav>
			<div class="row" style="margin-top: 30px;">
				<my-activity v-for="one in activitys" :activity="one"></my-activity>
			</div>
		</div>
		<div class="row" v-show="activeList == 3" style="margin-top: 100px;" transition="fade">
		    <form class="col s8 offset-s2">
		    	<p class="title">申请创建社团</p>
		      	<div class="row">
		      		<div class="input-field">
			          	<input id="team-name" type="text" class="validate" v-model="newTeam.name">
			          	<label for="team-name">社团名称</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-tutor" type="text" class="validate" v-model="newTeam.tutor">
			          	<label for="team-tutor">导师</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-motto" type="text" class="validate" v-model="newTeam.motto">
			          	<label for="team-motto">座右铭</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-purpose" type="text" class="validate" v-model="newTeam.purpose">
			          	<label for="team-purpose">宗旨</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-tel" type="tel" class="validate" v-model="newTeam.tel">
			          	<label for="team-tel">电话</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-email" type="email" class="validate" v-model="newTeam.email">
			          	<label for="team-email">邮箱</label>
			        </div>
			        <div class="input-field">
			          	<input id="team-reason" type="text" class="validate" v-model="newTeam.reason">
			          	<label for="team-reason">申请理由</label>
			        </div>
			        <div class="col s8 offset-s4 save">
				  		<a class="waves-effect waves-light btn" @click="addTeam"><i class="fa fa-file-o" aria-hidden="true"></i>&ensp;申请</a>
				  	</div>
		      	</div>
		    </form>
		</div>
		<div class="row" v-show="activeList == 4" style="margin-top: 50px;" transition="fade">
			<ul class="col s8 offset-s2 collapsible edituser" data-collapsible="accordion">
			    <li>
			      	<div class="collapsible-header active"><i class="fa fa-user-circle-o" aria-hidden="true"></i>用户信息</div>
			      	<div class="collapsible-body">
				      	<div class="row">
						    <form class="col s12">
						      	<div class="row">
									<div class="input-field">
							          	<input id="name" type="text" class="validate" v-model="user.name">
							          	<label for="name">用户名</label>
							        </div>
							        <div class="input-field">
							          	<input id="password" type="password" class="validate" v-model="user.password">
							          	<label for="password">密&emsp;码</label>
							        </div>
							        <div class="input-field">
							          	<input id="introduction" type="text" class="validate" v-model="user.introduction">
							          	<label for="introduction">介&emsp;绍</label>
							        </div>
					    		</div>
					    	</form>
					    </div>
			      	</div>
			    </li>
			    <li>
			      	<div class="collapsible-header"><i class="fa fa-address-card" aria-hidden="true"></i>个人信息</div>
			      	<div class="collapsible-body">
				      	<div class="row">
						    <form class="col s12">
						      	<div class="row">
						      		<p>
						      			<label>性&emsp;别</label>
								      	<input name="gender" type="radio" id="man" value="1" v-model="user.gender" />
								      	<label for="man">男</label>
								      	<input name="gender" type="radio" id="woman" value="0" v-model="user.gender" />
								      	<label for="woman">女</label>
								    </p>
									<div class="">
							          	<label for="birth">生&emsp;日</label>
							          	<input id="birth" type="date" class="datepicker" v-model="user.birthStr">
							        </div>
							        <div class="input-field">
							          	<input id="origin_place" type="text" class="validate" v-model="user.originPlace">
							          	<label for="origin_place">籍&emsp;贯</label>
							        </div>
							        <div class="input-field">
							          	<input id="email" type="email" class="validate" v-model="user.email">
							          	<label for="email">邮&emsp;箱</label>
							        </div>
							        <div class="input-field">
							          	<input id="tel" type="tel" class="validate" v-model="user.tel">
							          	<label for="tel">电&emsp;话</label>
							        </div>
							        <div class="input-field">
							          	<input id="id_card" type="text" class="validate" v-model="user.idCard">
							          	<label for="id_card">身份证</label>
							        </div>
							        <div class="input-field">
							          	<input id="QQ" type="text" class="validate" v-model="user.qq">
							          	<label for="QQ">Q&emsp;Q</label>
							        </div>
							        <div class="input-field">
							          	<input id="wechat" type="text" class="validate" v-model="user.wechat">
							          	<label for="wechat">微&emsp;信</label>
							        </div>
						      	</div>
						    </form>
						</div>
			      	</div>
			    </li>
			    <li>
			      	<div class="collapsible-header"><i class="fa fa-graduation-cap" aria-hidden="true"></i>校园信息</div>
			      	<div class="collapsible-body">
				      	<div class="row">
						    <form class="col s12">
						      	<div class="row">
						      		<div class="input-field">
							          	<input id="major" type="text" class="validate" v-model="user.major">
							          	<label for="major">专&emsp;业</label>
							        </div>
							        <div class="input-field">
							          	<input id="grade" type="text" class="validate" v-model="user.grade">
							          	<label for="grade">年&emsp;级</label>
							        </div>
							        <div class="input-field">
							          	<input id="clazz" type="text" class="validate" v-model="user.clazz">
							          	<label for="clazz">班&emsp;级</label>
							        </div>
							        <div class="input-field">
							          	<input id="dormitory" type="text" class="validate" v-model="user.dormitory">
							          	<label for="dormitory">宿&emsp;舍</label>
							        </div>
						      	</div>
						    </form>
						</div>
			      	</div>
			    </li>
		  	</ul>
		  	<div class="col s8 offset-s2 save">
		  		<a class="waves-effect waves-light btn" @click="saveUserUpdate"><i class="fa fa-floppy-o" aria-hidden="true"></i>&ensp;保存</a>
		  	</div>
		</div>
	</div>
	<div id="corpor" class="modal bottom-sheet" style="max-width: 100%;max-height: 100%;">
    	<div class="modal-content">
	      	<div class="collection team-list" style="width: 220px;text-align: center;">
		        <a class="collection-item" @click="setTeamList(0)">社团公告</a>
		        <a class="collection-item" @click="setTeamList(1)">近期活动</a>
		        <a class="collection-item" @click="setTeamList(2)">社团宣传</a>
		        <a class="collection-item" @click="setTeamList(3)">我的管理</a>
	      	</div>
	      	<div class="team-main">
	      		<div class="row" v-if="activeTeamList == 0">
	      		</div>
	      		<div class="row" v-if="activeTeamList == 1">
	      			<my-activity v-for="one in ajaxActivity.data" :activity="one"></my-activity>
	      		</div>
	      		<div class="row" v-if="activeTeamList == 2">
	      			<my-ann v-for="one in ajaxAnn.data" :ann="one"></my-ann>
	      		</div>
	      		<div class="row" v-if="activeTeamList == 3">
	      			<a class="waves-effect waves-light btn" style="margin-bottom: 20px;"><i class="fa fa-bell-o" aria-hidden="true"></i>管理通知</a>
	      			<a class="waves-effect waves-light btn" style="margin-bottom: 20px;"><i class="fa fa-flag-o" aria-hidden="true"></i>管理活动</a>
	      			<table class="bordered striped">
				        <thead>
				          	<tr>
				              	<th data-field="id">姓名</th>
				              	<th data-field="bir">生日</th>
				              	<th data-field="price">寝室</th>
				              	<th data-field="le">年级</th>
				              	<th data-field="pho">电话</th>
				              	<th data-field="qq">QQ</th>
				              	<th data-field="wechat">微信</th>
				          	</tr>
				        </thead>
				        <tbody>
				          	<tr v-for="one in teamUserList.data">
					            <td>{{ one.name }}</td>
					            <td>{{ one.birthStr }}</td>
					            <td>{{ one.dormitory }}</td>
					            <td>{{ one.grade }}</td>
					            <td>{{ one.tel }}</td>
					            <td>{{ one.qq }}</td>
					            <td>{{ one.wechat }}</td>
				          	</tr>
				        </tbody>
				    </table>
	      		</div>
	      	</div>
    	</div>
  	</div>
	<toast :show="toast.show" :msg="toast.msg"></toast>
</template>

<script>
	import '../../materialize.js';
    import toast from './toast';
	import myActivity from './activity';
	import myTeam from './team';
	import myAnn from './ann';

	export default {
		data: function(){
			return {
				user: {},
				homeList: [
					{
						name: "主页",
						color: "#b5b5b3",
						logo: '<i class="fa fa-paper-plane-o" aria-hidden="true"></i>',
						type: "home"
					},
					{
						name: "社团",
						color: "#3d9ee9",
						logo: '<i class="fa fa-users" aria-hidden="true"></i>',
						type: "team"
					},
					{
						name: "活动",
						color: "#de89a5",
						logo: '<i class="fa fa-paint-brush" aria-hidden="true"></i>',
						type: "activity"
					},
					{
						name: "申请",
						color: "#feca78",
						logo: '<i class="fa fa-file-o" aria-hidden="true"></i>',
						type: "apply"
					},
					{
						name: "信息修改",
						color: "#b1e0da",
						logo: '<i class="fa fa-cog" aria-hidden="true"></i>',
						type: "edit-user"
					}
				],
                toast: {
                    show: false,
                    msg: ''
                },
				activeList: 0,
				activeTeamList: 0,
				newTeam: {},
				activitys: [],
				teams: [],
				minAnns: [],
				minActivitys: [],
				ajaxActivity: {
                    data: [],
                    statu: false
                },
                ajaxAnn: {
                    data: [],
                    statu: false
                },
                teamUserList: {
                    data: [],
                    statu: false
                }
			}
		},
		created: function(){
			if(window.sessionStorage.user == undefined && window.sessionStorage.user == ""){
				alert("请先登陆！");
				window.location.href = '/';
			}else {
				this.user = JSON.parse(window.sessionStorage.user);
			}
		},
		ready: function(){
			$(".my-left").css("height",document.documentElement.clientHeight+"px");
			$(".my-right").css("height",document.documentElement.clientHeight+"px");
			$('.collapsible').collapsible();
			$('.datepicker').pickadate({
			    selectMonths: true,
			    selectYears: 15
			});
			$('#corpor').modal();
			$('#corpor').css("height", document.documentElement.clientHeight - 200 + "px");
			this.setActiveList(0);
		},
		methods: {
			setActiveList: function(index){
				$(".home-list li").removeClass("active");
				$(".home-list li").eq(index).addClass("active");
				switch(index){
					case 0:
						this.loadMain();
						break;
					case 1:
						this.loadTeam();
						break;
					case 2:
						this.loadActivity();
						break;
					case 3:
						this.loadUserList();
						break;
				}
				this.activeList = index;
			},
			loadMain: function(){
				this.$http.get(Window.config.BASEURL + "/" + this.user.id + "/activitymin").then((response)=>{
                    this.minActivitys = response.body.data;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
                this.$http.get(Window.config.BASEURL + "/" + this.user.id + "/annmin").then((response)=>{
                    this.minAnns = response.body.data;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			},
			addTeam: function(){
				let r = confirm("确定要创建社团?");
				if(r){
					this.$http.post(Window.config.BASEURL+ "/" + this.user.id + "/corpor/add", this.newTeam).then((response)=>{
	                    this.loadError(response.body.msg);
	                },(response)=>{
	                    this.loadError("出错啦~看看别的吧");
	                });
				}
			},
			loadTeam: function(){
				this.$http.get(Window.config.BASEURL + "/" + this.user.id + "/corporation").then((response)=>{
                    this.loadError(response.body.msg);
                    this.teams = response.body.data;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			},
			loadActivity: function(){
				this.$http.get(Window.config.BASEURL + "/" + this.user.id + "/activity").then((response)=>{
                    this.loadError(response.body.msg);
                    this.activitys = response.body.data;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			},
			saveUserUpdate: function(){
				let r = confirm("确定要修改个人信息?");
				if(r){
					this.$http.post(Window.config.BASEURL+ "/" + this.user.id +"/update", this.user).then((response)=>{
	                    this.loadError(response.body.msg);
	                    if(response.body.statu) {
	                    	this.user = response.body.data;
	                    	window.sessionStorage.user = JSON.stringify(response.body.data);
	                    }
	                },(response)=>{
	                    this.loadError("出错啦~看看别的吧");
	                });
				}
			},
			loadError: function(str){
                this.toast.show = true;
                this.toast.msg = str;
                var _self = this;
                setTimeout(function(){
                    _self.toast.show = false;
                    _self.toast.msg = "";
                },3000);
            },
            toTeam: function(teamId, type){
            	$('#corpor').modal('open');
            	this.activeTeamId = teamId;
                this.ajaxActivity.data = [];
                this.ajaxAnn.data = [];
            	this.setTeamList(type);
            },
            setTeamList: function(type){
				this.activeTeamList = type;
				$(".team-list a").removeClass("active");
				$(".team-list a").eq(type).addClass("active");
				switch(type){
					case 0:
						break;
					case 1:
						this.toTeamActivity();
						break;
					case 2:
						this.toTeamAnn();
						break;
					case 3:
						this.loadUserList();
						break;
				}
			},
			toTeamActivity: function(num){
				this.ajaxActivity.data = [];
				this.$http.get(Window.config.BASEURL + "/corpor/"+ this.activeTeamId + "/activity?number=1").then((response)=>{
                    var _self = this;
                    if(response.body.data != null){
                        response.body.data.forEach(function(value, index, array){
                            value.pic = Window.config.BASEURL + value.pic;
                            _self.ajaxActivity.data.push(value);
                        });
                    }
                    this.activeTeamList = 1;
                    this.ajaxActivity.statu = true;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			},
			toTeamAnn: function(num){
				this.ajaxAnn.data = [];
				this.$http.get(Window.config.BASEURL + "/corpor/"+ this.activeTeamId + "/ann?number=1").then((response)=>{
                    this.ajaxAnn.data = response.body.data;
                    this.activeTeamList = 2;
                    this.ajaxnn.statu = true;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			},
			loadUserList: function(){
				this.teamUserList.data = [];
				this.$http.get(Window.config.BASEURL + "/"+ this.activeTeamId + "/player").then((response)=>{
                    this.teamUserList.data = response.body.data;
                    this.activeTeamList = 3;
                    this.teamUserList.statu = true;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
			}
		},
        components: {
            'toast': toast,
            'my-activity': myActivity,
            'my-team': myTeam,
            'my-ann': myAnn
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
	.team-main{
		width: calc(100% - 300px);
		height: 600px;
		position: absolute;
		right: 15px;
		top: 30px;
	}
	.my-left {
		width: 300px;
		height: 100%;
		background-color: #191917;
		float: left;

		img {
			width: 70%;
			height: auto;
			margin: {
				top: 50px;
				left: auto;
				right: auto;
			};
			display: block;
			border-radius: 50%;
		}

		.name {
			user-select: none;
			font-size: 30px;
			text-align: center;
			cursor: default;
		}
		.active {
			background-color: #333333;
			border-left: 5px solid currentColor;
		}
	}
	.my-right {
		width: calc(100% - 300px);
		height: 100%;
		background-color: rgba(242, 242, 242, 0.5);
		overflow-y: auto;
		overflow-x: hidden;
		float: right;
	}
	.home-list {
		font: normal normal normal 24px/1 FontAwesome;
		i {
			margin-right: 10px;
			width: 30px;
		}
		li {
			user-select: none;
			cursor: default;
			padding: {
				top: 10px;
				bottom: 10px;
				left: 40px;
			};

			&:hover {
				background-color: #333333;
			}
		}
	}
	.collapsible-header {
		background-color: #e1e1e1;
	}
	.row .col {
		padding: 0 50px;
	}
	.row .edituser {
		padding: 0 0;
	}
	.save {
		padding: 0 0 !important;
		writing-mode: vertical-rl;
		a {
			writing-mode: horizontal-tb;
		}
	}
	.collapsible-body p {
		padding-left: 0;
	}
	.title {
		position: relative;
		margin: {
			top: -60px;
			left: -80px;
		};
		padding: 10px;
		font-size: 25px;
	}
</style>