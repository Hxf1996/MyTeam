<template>
    <div class="col m3">
        <div class="card">
            <div class="card-content" style="font-size: 16px;">
                <span class="card-title">{{ activity.name }}</span>
                <i class="fa fa-star" aria-hidden="true" v-for="star in activity.level"></i>
                <p>{{ activity.description }}</p><br/>
                <p><i class="fa fa-home" aria-hidden="true"></i>&emsp;{{ activity.place }}</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i>&emsp;{{ activity.principalTel }}</p>
                <p><i class="fa fa-clock-o" aria-hidden="true"></i>&emsp;{{ activity.beginTimeStr }}&ensp;-&ensp;{{ activity.endTimeStr }}</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props: ['activity']
	}
</script>

<style lang='sass'>

</style>