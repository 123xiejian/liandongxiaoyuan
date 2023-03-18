module.exports = {
	PID: 'A00',

	NAV_COLOR: '#ffffff',
	NAV_BG: '#11406C',

	MEET_NAME: '活动/预约', 
 
	MENU_ITEM: ['首页', '预约', '我的'], // 第1,4,5菜单

	NEWS_CATE: '4=运动交友,5=学术课堂,6=学习互助,7=比赛通知',
	MEET_TYPE: '1=来访预约|leftbig2,2=校园活动|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}