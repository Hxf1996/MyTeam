<template>
    <div class="col m3">
    	<div class="card">
            <div class="card-image" style="height: 200px;overflow: hiddden;">
                <img :src="pic">
                <span class="card-title">{{ team.name }}</span>
            </div>
            <div class="card-content hidden-ellipsis">
                <p>{{ team.purpose }}</p>
                <p>{{ team.introduction }}</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props: ['team'],
        computed: {
            pic: function(){
                return Window.config.BASEURL + this.team.pic;
            }
        }
	}
</script>

<style lang='sass'>
    .close {
        font: normal normal normal 24px/1 FontAwesome;
        &:before {
            content: "\f00d";
        }
    }
</style>