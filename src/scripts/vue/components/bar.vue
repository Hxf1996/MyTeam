<template>
    <h2>bar</h2>
</template>

<script>
	export default {
		route: {
		    activate: function (transition) {
		      	console.log('hook-example activated!');
		      	console.log(transition);
		      	transition.next();
		    },
		    deactivate: function (transition) {
		      	console.log('hook-example deactivated!');
		      	console.log(transition);
		      	transition.next();
		    }
		}
	}
</script>

<style>

</style>