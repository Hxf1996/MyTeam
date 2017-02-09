<template>
    <div class="col m3">
    	<div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" :src="pic">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ ann.title }}
                    <i class="material-icons right ellipsis"></i>
                </span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ ann.title }}
                    <i class="material-icons right close"></i>
                </span>
                <p>{{ ann.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props: ['ann'],
        computed: {
            pic: function(){
                return Window.config.BASEURL + this.ann.pic;
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