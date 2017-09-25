<template>
	<div id="app">
		<div class="" v-if="this.$route.query.search === 'search'">
			<input type="search" v-model="search" placeholder="请再次输入内容"/><label for="">搜索</label>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import command from '@/js/command' 
	export default {
		name: 'app',
		data(){
			return {
				search: ''
			}
		},
		created(){
//			console.log(this.$route.query)
		},
		watch: {
			search (val, oldVal) {
				command.exec(this, val)
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>