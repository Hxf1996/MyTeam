<template>
	<footer>
		<div class="footer-wrap">
			<a v-for="one in wraps" :href="one.href">{{ one.title }}</a>
		</div>
		<div class="footer-link">
			<a v-for="one in links" :href="one.url"><span>{{ one.title }}</span></a>
		</div>
		<div class="footer-copy">&#xa9;2016&emsp;wanshe.com&emsp;&emsp;京ICP备13046642号</div>
	</footer>
</template>

<script>
	export default {
		data: function(){
			return {
				wraps: [
					{title: '新浪微博',href: '#'},
					{title: '微信',href: '#'},
					{title: '腾讯微博',href: '#'},
					{title: 'QQ空间',href: '#'}
				],
				links: [
					{
						url: '#',
						title: '院校合作'
					},
					{
						url: '#',
						title: '人才招聘'
					},
					{
						url: '#',
						title: '联系我们'
					},
					{
						url: '#',
						title: '常见问题'
					},
					{
						url: '#',
						title: '意见反馈'
					},
					{
						url: '#',
						title: '友情链接'
					},
				]
			};
		}
	}
</script>

<style lang='sass'>
	footer {
		clear: both;
		position: relative;
		width: 100%;
		background-color: rgb(44, 43, 43);
		@media screen and (min-width: 1000px){
			& {
				font-size: calc( 625% + 5 * (100vw - 1920px)/96);
			}
		}
		a {
			text-decoration: none;
			color: #fff;
		}
		.footer-wrap {
			display: flex;
			justify-content: center;
			padding-top: 20px;

			a {
				height: 32px;
				width: 32px;
				background: url(../../resource/images/wrap-logo.png);
				background-repeat: no-repeat;
				margin: 0 9px;
				font-size: 0;
			}
			a:first-child {
				&:hover {
					background-position: 0 -41px;
				}
			}
			a:nth-child(2) {
				background-position: -52px 0px;
				&:hover {
					background-position: -52px -41px;
				}
			}
			a:nth-child(3) {
				background-position: -104px 0px;
				&:hover {
					background-position: -104px -41px;
				}
			}
			a:nth-child(4) {
				background-position: -156px 0px;
				&:hover {
					background-position: -156px -41px;
				}
			}
		}
		.footer-link, .footer-copy {
			font-size: 16px;
			max-width: 1200px;
			margin: {
				left: auto;
				right: auto;
			};
			padding: {
				top: 20px;
				bottom: 20px;
			}
		}
		.footer-link {
			display: flex;
			justify-content: center;
			border-bottom: 1px solid #d0d6d9;
			span {
				padding: 0 16px;
				&:hover {
					color: #ff9595;
					text-decoration:underline;
				}
			}
		}
		.footer-copy {
			text-align: center;
		}
		@media screen and (max-width: 1000px){
			& {
				display: none;
			}
		}
	}
</style>