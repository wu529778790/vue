<template>
	<div class="">
		<input type="checkbox" name="debug" id="debug" v-model="config.debug"/><label for="debug">日志开关{{config.debug}}</label>
		<p>修改配置，请返回刷新页面</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				config: window.globalConfig
			}
		},
		watch: {
			config: {
				handler(val, oldVal) {
					window.globalConfig = this.config
					try{
						sessionStorage.globalConfig = JSON.stringify(this.config)
						console.log(sessionStorage)
					}catch(e){
						// handle the exception
					}
				},
				deep:true
			}
		}
	}
</script>

<style>
</style>