<template>
	<div class="user-login"  transition="fade-scale-origin">
		<div class="row">
		    <form class="col s12">
		        <div class="col s12">
		          This is an inline input field:
		          <div class="input-field inline">
		            <input id="email" type="email" class="validate">
		            <label for="email" data-error="wrong" data-success="right">Email</label>
		          </div>
		        </div>
		    </form>
	  	</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="sass">
	.user-login {
		background-color: red;
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