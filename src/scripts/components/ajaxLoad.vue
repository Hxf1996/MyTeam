<template>
	<div class="ajax-load preloader-wrapper big" :class="{ 'active': !statu }">
        <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props: ['statu']
	}
</script>

<style lang='sass'>
    .ajax-load {
        position: absolute;
        left: 50%;
        margin-left: -32px;
        top: 30px;
    }
</style>