<template>
	<div class="slider">
        <ul class="slides">
            <li>
                <img src="../../resource/images/banner.png">
                <div class="caption center-align">
                    <h3>万社--开启梦想中大学</h3>
                    <h5 class="light grey-text text-lighten-3">加入我们，开启一个新的生活</h5>
                </div>
            </li>
            <li>
                <img src="../../resource/images/banner1.jpg">
                <div class="caption left-align">
                    <h3>美好的校园</h3>
                    <h5 class="light grey-text text-lighten-3">一起欣赏，就在这里</h5>
                </div>
            </li>
        </ul>
    </div>
    <div class="row animated" v-show="showOne" transition="fade">
        <div class="col s6 m3 animated team tooltipped" v-for="focusTeam in focusTeams" transition="fade" @click="showDetail(focusTeam.id)" data-activates="detail" data-position="left" data-delay="50" data-tooltip="点我试试">
            <div class="card">
                <div class="card-image" style="height: 200px;overflow: hidden;">
                    <img :src="focusTeam.pic" v-if="focusTeam.pic">
                    <span class="card-title">{{ focusTeam.name }}</span>
                </div>
                <div class="card-content hidden-ellipsis">
                    <p>{{ focusTeam.purpose }}</p>
                    <p>{{ focusTeam.introduction }}</p>
                </div>
                <div class="card-action">
                    <a class="disabled blue-text text-accent-1" v-if="focusTeam.joined == 1">正在审核</a>
                    <a class="disabled grey-text text-lighten-1" v-if="focusTeam.joined == 2">已经加入</a>
                    <a data-target="join-team" @click.stop="showEntryForm(focusTeam.id)" v-if="focusTeam.joined == 0 || focusTeam.joined == null">加入我们</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col load-more" @click="getTeam(teamPage)" :class="[loadMore.statu]">&ensp;{{ loadMore.msg }}</div>
    <ul id="detail" class="side-nav">
        <li style="background: url({{ team.pic }});">
            <div class="logo"><img :src="team.logo"></div>
            <div class="detail-head name white-text" >{{ team.name }}</div>
            <div class="detail-head purpose white-text">{{ team.purpose }}</div>
            <div class="detail-head introduction white-text">{{ team.introduction }}</div>
        </li>
        <li>
            <div class="row">
                <div class="col s12" style="padding: 0 0;">
                    <ul class="tabs">
                        <li class="tab col s3" :class="{ 'active': tab }" @click="toggleTab(true)">历程</li>
                        <li class="tab col s3" :class="{ 'active': !tab }" @click="toggleTab(false)">活动</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <div class="history" v-show="tab">
                        <ajax-load :statu="ajaxHistory.statu"></ajax-load>
                        <div v-if="ajaxHistory.data.length == 0 && ajaxHistory.statu" class="no-data">
                            暂无数据
                        </div>
                        <div v-for="one in ajaxHistory.data">
                            <div class="card">
                                <div class="card-image waves-effect waves-block waves-light" style="min-height: 200px;">
                                  <img class="activator" :src="one.pic" v-if="one.pic">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">{{ one.title }}
                                        <i class="material-icons right ellipsis"></i>
                                    </span>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">{{ one.title }}
                                        <i class="material-icons right close"></i>
                                    </span>
                                    <p>{{ one.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="activety" v-show="!tab">
                        <ajax-load :statu="ajaxActivity.statu"></ajax-load>
                        <div v-if="ajaxActivity.data.length == 0 && ajaxActivity.statu" class="no-data">
                            暂无数据
                        </div>
                        <div v-for="one in ajaxActivity.data">
                            <div class="row">
                                <div class="col m12">
                                    <div class="card">
                                        <div class="card-content" style="font-size: 16px;">
                                            <span class="card-title">{{ one.name }}</span>
                                            <i class="fa fa-star" aria-hidden="true" v-for="star in one.level"></i>
                                            <p>{{ one.description }}</p>
                                            <p><i class="fa fa-home" aria-hidden="true"></i>&emsp;{{ one.place }}</p>
                                            <p><i class="fa fa-phone" aria-hidden="true"></i>&emsp;{{ one.principalTel }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div id="join-team" class="modal">
        <div class="modal-content">
            <h4>欢迎加入{{ joinTeam.team.name }}</h4>
            <div class="input-field col">
                <input id="brief_introduction" type="text" class="validate" v-model="joinTeam.from.briefIntroduction">
                <label for="brief_introduction">自我简介</label>
            </div>
            <div class="input-field col">
                <input id="strength" type="text" class="validate" v-model="joinTeam.from.strength">
                <label for="strength">强项</label>
            </div>
            <div class="input-field col">
                <input id="prize" type="text" class="validate" v-model="joinTeam.from.prize">
                <label for="prize">获奖经历</label>
            </div>
            <div class="input-field col">
                <input id="reason" type="text" class="validate" v-model="joinTeam.from.reason">
                <label for="reason">加入原因</label>
            </div>
        </div>
        <div class="modal-footer">
            <a @click="userJoinTeam(joinTeam.team.id)" class=" modal-action modal-close waves-effect waves-green btn-flat">申请</a>
        </div>
    </div>
    <toast :show="toast.show" :msg="toast.msg"></toast>
    <my-footer></my-footer>
</template>

<script>
    import '../../materialize.js';
    import ajaxLoad from './ajaxLoad';
    import toast from './toast';
    import footer from './footer.vue';

	export default {
        data: function(){
            return {
                slider: [
                    {
                        url: '../../resource/images/one-screen.jpg',
                        title: '万社--开启梦想中大学',
                        label: '这是我们的小口号。'
                    },
                    {
                        url: '../../resource/images/one-screen.jpg',
                        title: '万社',
                        label: '这是我们的小口号。'
                    }
                ],
                focusTeams: [],
                showOne: false,
                toast: {
                    show: false,
                    msg: ''
                },
                team: {},
                teamPage: 1,
                tab: true,
                ajaxHistory: {
                    data: [],
                    statu: false
                },
                ajaxActivity: {
                    data: [],
                    statu: false
                },
                loadMore: {
                    msg: '加载更多',
                    statu: 'normal'
                },
                joinTeam: {
                    team: {},
                    from: {
                        briefIntroduction: '',
                        strength: '',
                        prize: '',
                        reason: ''
                    }
                }
            };
        },
        created: function(){
            if(window.sessionStorage.user != undefined && window.sessionStorage.user != ""){
                this.user = JSON.parse(window.sessionStorage.user);
            }
            this.showOne = true;
            if(this.focusTeams.length == 0 ){
                this.getTeam(this.teamPage);
            }
        },
        ready: function(){
            $('.slider').slider({full_width: true,indicators: false});
        },
        methods: {
            showDetail: function(id){
                if(this.team.id != this.focusTeams[id - 1].id){
                    this.ajaxHistory = {data: [],statu: false};
                    this.ajaxActivity = {data: [],statu: false};
                }
                this.team = this.focusTeams[id - 1];
                if(this.ajaxHistory.data.length == 0 ){
                    this.getHistory(id, 10);
                }
                if(this.ajaxActivity.data.length == 0 ){
                    this.getActivity(id, 10);
                }
            },
            toggleTab: function(active){
                this.tab = active;
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
            getTeam: function(page_num){
                this.loadMore.msg = "正在加载";
                this.loadMore.statu = "load";
                let userId = 0;
                if(this.user != null){
                    userId = this.user.id;
                }
                this.$http.get(Window.config.BASEURL + "/" + userId + "/corpor/min?number=" + page_num).then((response)=>{
                    var _self = this;
                    if(response.body.data.length != 0){
                        response.body.data.forEach(function(value, index, array){
                            array[index].logo = Window.config.BASEURL + value.logo;
                            array[index].pic = Window.config.BASEURL + value.pic;
                            _self.focusTeams.push(value);
                        });
                        this.$nextTick(function(){
                            $('.team').sideNav({
                                menuWidth: 1000,
                                edge: 'right',
                                closeOnClick: true,
                                draggable: true
                            });
                            $('#join-team').modal();
                            this.loadMore.msg = "加载更多";
                            this.loadMore.statu = "normal";
                        });
                        this.teamPage++;
                    }else {
                        this.loadError(msg);
                    }
                },(response)=>{
                    this.loadError("怎么找不到小组，刷新试试~");
                });
            },
            showEntryForm: function(corporId){
                if(window.sessionStorage.user != undefined && window.sessionStorage.user != ""){
                    this.user = JSON.parse(window.sessionStorage.user);
                }
                if(this.user == null){
                    this.loadError("请登陆后重试~~~");
                }else {
                    this.joinTeam.team = this.focusTeams[corporId-1];
                    $('#join-team').modal('open');
                }
            },
            userJoinTeam: function(corporId){
                this.$http.post(Window.config.BASEURL+ "/" + this.user.id +"/signcorpor/" + corporId, this.joinTeam.from).then((response)=>{
                    this.loadError(response.body.msg);
                    if(response.body.statu) {
                        this.focusTeams[corporId - 1].joined = 1;
                    }
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
            },
            getHistory: function(teamId, num){
                this.$http.get(Window.config.teamBase + "/" + teamId + "/ann?number=" + num).then((response)=>{
                    var _self = this;
                    if(response.body.data != null){
                        response.body.data.forEach(function(value, index, array){
                            if(value.pic != null){
                                value.pic = Window.config.BASEURL + value.pic;
                            }
                            _self.ajaxHistory.data.push(value);
                        });
                    }
                    this.ajaxHistory.statu = true;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
            },
            getActivity: function(teamId, num){
                this.$http.get(Window.config.BASEURL + "/corpor/"+ teamId + "/activity?number=" + num).then((response)=>{
                    var _self = this;
                    if(response.body.data != null){
                        response.body.data.forEach(function(value, index, array){
                            value.pic = Window.config.BASEURL + value.pic;
                            _self.ajaxActivity.data.push(value);
                        });
                    }
                    this.ajaxActivity.statu = true;
                },(response)=>{
                    this.loadError("出错啦~看看别的吧");
                });
            }
        },
        components: {
            'ajax-load': ajaxLoad,
            'toast': toast,
            'my-footer': footer
        }
	}
</script>

<style lang='sass'>
    a:hover {
        cursor:pointer
    }
    .hidden-ellipsis p{
        line-height: 1.6rem;
        height: 1.6rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    #detail > li{
        &:nth-child(1) {
            width: 100%;
            height: 500px;
            position: relative;
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: #000;
                opacity: 0.3;
            }
        }
        &:nth-child(2) {
            background-color: #FAFAFA;
            min-height: 700px;
        }
        .logo {
            width: 140px;
            height: 140px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0 0 10px #fff;
            position: absolute;
            left: 50%;
            margin: {
                left: -70px;
                top: 60px;
            };

            img {
                width: 100%;
                min-height: 100%;
            }
        }
        .detail-head {
            width: 500px;
            position: absolute;
            left: 50%;
            margin-left: -250px;
            text-align: center;
        }
        .name {
            font-size: 2.5rem;
            top: 220px;
        }
        .purpose {
            font-size: 1.5rem;
            top: 270px;
        }
        .introduction {
            font-size: 1rem;
            top: 320px;
        }
    }
    .tabs {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
        .tab {
            font-size: 1.5rem;
            user-select: none;
            cursor: pointer;
        }
    }
    .close {
        font: normal normal normal 24px/1 FontAwesome;
        &:before {
            content: "\f00d";
        }
    }
    .ellipsis {
        font: normal normal normal 24px/1 FontAwesome;
        &:before {
            content: "\f142";
        }
    }
    .history, .activety {
        position: relative;
    }
    .load-more {
        font-size: 20px;
        padding: 15px;
        text-align: center;
        background-color: #e0e0e0;
        font: normal normal normal 24px/1 FontAwesome;
        margin-bottom: 35px;

        &:hover {
            cursor: pointer;
        }
    }
    .normal {
        &:before {
            content: "\f0e2";
        }
    }
    .load {
        &:before {
            content: "\f021";
        }
    }
    .modal {
        max-width: 700px;
        background-color: #fff;
        .modal-footer {
            background-color: #fff;
        }
    }
    .no-data {
        font: normal normal normal 44px/1 FontAwesome;
        text-align: center;
        margin-top: 20px;

        &:before {
            content: "\f11a";
        }
    }
</style>