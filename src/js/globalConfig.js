/*
 * 全局配置
 */

(function(window) {
	var _global = {
		_globalConfig: {
			debug: process.env.NODE_ENV === 'development'
		},
		/*
		 * 日志配置
		 */
		_logConfig: function() {
			if(this._globalConfig.debug) {
				require('vconsole/dist/vconsole.min')
				console.log('%cNow you can console log...', 'color:red;font-size:18px;')
			}
		},
		/*
		 * 初始化配置
		 */
		initConfig: function() {
			this._logConfig()
		},

	}
	try {
		let sessionConfig = JSON.parse(sessionStorage.globalConfig || '{}');
		_global._globalConfig.debug = sessionConfig.debug !== undefined ? sessionConfig.debug : _global._globalConfig.debug;
		_global._globalConfig.console = sessionConfig.console !== undefined ? sessionConfig.console : _global._globalConfig.console;
	} catch(error) {

	}
	_global.initConfig()
	window.globalConfig = Object.assign({}, window.globalConfig || {}, _global._globalConfig)
})(window)