<template>
	<div class="register-login"  transition="fade-scale-origin">
		
	</div>
</template>

<script>
	
</script>

<style lang="sass">
	.register-login {
		background-color: green;
		border-radius: 20px;
		position: absolute;
		bottom: 104px;
		right: 80px;
	}
	.fade- {
		&scale-origin- {
			&transition {
				width: calc(100vw - 85px);
				max-width: 400px;
				height: 200px;
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
</style>