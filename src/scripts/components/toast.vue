<template>
	<div class="toast animated" v-if="show" transition="shake">
        {{ msg }}
    </div>
</template>

<script>
	export default {
        props: ['show','msg']
	}
</script>

<style lang='sass'>
    .toast {
        position: absolute;
        right: 100px;
        top: 100px;
        background-color: rgb(83, 83, 83);
        padding: 15px 5px;
        z-index: 999;
    }
</style>