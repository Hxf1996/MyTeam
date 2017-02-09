// const BASEURL = 'http://115.29.139.172';
const BASEURL = 'http://192.168.1.101:8088/corporation';
const webpackConfig = {
	BASEURL: BASEURL,
	userLogin: BASEURL+'/login',
	userRegister: BASEURL+'/register',
	userActivate: BASEURL+'/activate',
	focusTeams: BASEURL+'/corpor/min?number=',
	teamBase: BASEURL+'/corpor'
}

module.exports = webpackConfig;