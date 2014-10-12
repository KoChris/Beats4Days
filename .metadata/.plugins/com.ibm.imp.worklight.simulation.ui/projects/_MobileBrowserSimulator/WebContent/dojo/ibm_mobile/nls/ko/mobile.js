//>>built
define({      
//begin v1.x content
	'xdomain_reduced_func' : '테스트 클라이언트 서버에서 웹 페이지를 보지 않는 경우 테스트 클라이언트 기능을 제대로 사용할 수 없습니다.',

	'index_title' : '모바일 브라우저 시뮬레이터',
	'index_desc' : '모바일 브라우저 시뮬레이터는 모바일 웹 페이지를 다양한 모바일 브라우저 크기 및 모양으로 볼 수 있도록 돕습니다.',
	'index_webpage' : '웹 페이지:',
	'index_go' : '이동 / 새로 고치기',
	'index_go_simple_preview' : '단순 미리보기 열기',
	'index_scale' : '모든 디바이스 배율 조정:',
	'index_scale_pp' : '100%',
	'index_scale_fit' : '창에 맞추기',
	'index_scale_physical' : '실제 디바이스 크기',
	'index_add_device' : '디바이스 추가',
	'index_calibrate' : '실제 크기 조정',
	'index_calibrate_dialog_title' : '실제 크기 조정',
	'index_scaling_warning' : '모바일 브라우저 시뮬레이터는 이 브라우저에서 컨텐츠 크기 조정을 지원하지 않습니다. 모바일 브라우저 시뮬레이터는 가장 최근 버전의 Mozilla Firefox 또는 Internet Explorer 9 및 그 이상에서 컨텐츠 크기 조정을 지원합니다.',
	'index_xdomain_warning' : '현재 표시되는 웹 페이지는 이 테스트 클라이언트와 다른 서버에 있습니다. ',
	'index_enable_useragent_switching' : '사용자 에이전트 전환 사용',
	'index_useragent_switching_desc' : '사용자 에이전트 ID 전환은 시뮬레이터가 브라우저에서 사용자 에이전트 ID를 변경할 수 있도록 해줍니다. 따라서 시뮬레이터에서 페이지가 로드될 때 올바른 사용자 에이전트 ID 문자열을 사용하여 페이지가 요청됩니다.',
	'index_useragent_switching_support' : '사용자 에이전트 전환은 다음 브라우저에서 지원됩니다.',
	'index_useragent_extension_install_title' : '사용자 에이전트 Switcher 확장기능 설치',
	'index_useragent_extension_install_instructions_1' : '모바일 브라우저 시뮬레이터가 사용자 에이전트 ID 문자열을 자동으로 전환하게 하려면 브라우저에서 확장기능을 설치해야 합니다.',
	'index_useragent_extension_install_instructions_2' : '시뮬레이터가 현재 버전의 확장기능이 설치되지 않았음을 발견했습니다. 아래의 링크를 사용하여 브라우저에 최신 확장 기능을 설치하십시오.',
	'index_useragent_extension_install_btn' : '브라우저 확장기능 설치',
	'index_useragent_extension_install_instructions_chrome1' : '참고: 확장기능을 설치하려 시도한 후 \"확장기능, 애플리케이션 및 사용자 스크립트는 Chrome Web Store를 통해서만 추가할 수 있습니다.\"라는 메시지를 받는 경우에는 확장기능을 수동으로 설치해야 합니다. 수행해야 할 단계는 다음과 같습니다. ',
	'index_useragent_extension_install_instructions_chrome2' : 'Chrome 설정을 여십시오.',
	'index_useragent_extension_install_instructions_chrome3' : 'Chrome 확장기능 페이지로 이동하십시오. ',
	'index_useragent_extension_install_instructions_chrome4' : '다운로드한 확장기능 파일을 다운로드 도구 모음에서 확장기능 페이지로 끌어서 놓으십시오. ',
	'index_need_http' : "상대 경로가 아닌 경로 사용 시 경로 앞에 'http://'를 첨부해야 합니다.",
	'index_splash_title' : "로드 중...",
	'index_splash_status' : "시뮬레이터는 바로 준비됩니다.",	
	'MobileDeviceTree_by_platform' : '플랫폼별',
	'MobileDeviceTree_by_resolution' : '해상도별',
	'MobileDeviceTree_platforms' : '플랫폼',
	'MobileDeviceTree_resolutions' : '해상도',
	'MobileBrowserSimulator_rotate' : '회전',
	'MobileBrowserSimulator_remove_device': '디바이스 제거',
	'MobileBrowserSimulator_xdomain_warning' : '현재 표시되는 웹 페이지는 이 테스트 클라이언트와 다른 서버에 있습니다.',
	'MobileBrowserSimulator_skin' : '스킨',
	'QRCodeTooltip' : '이 QRCode를 스캔하여 자체 모바일 디바이스에 시뮬레이션된 웹 페이지를 로드하십시오.',
	'QRCodeIPTooltip' : '자체 모바일 디바이스에서 시뮬레이션된 웹 페이지에 액세스할 때 사용할 IP 또는 호스트 이름을 선택/입력해야 합니다.',
	'QRCodeIPHostName' : 'IP/호스트 이름',
	'PPICalculator_desc' : '다양한 모바일 디바이스의 실제 크기에서 페이지를 보려면 모니터를 조정해야 합니다.',
	'PPICalculator_step_1' : '표준 크기의 신용 카드 윗부분이 검정 실선과 나란히 맞도록 화면에 놓으십시오.',
	'PPICalculator_step_2' : '회색 점선을 끌거나 화살표 키를 사용해 카드의 아랫부분과 맞추십시오.',
	'Mozilla_Firefox' : 'Mozilla Firefox ',
	'Google_Chrome' : 'Google Chrome',
	'Safari' : 'Safari',
	'Internet_Explorer' : 'Internet Explorer',
	'IncorrectBrowser' : "웹 브라우저의 현재 버전은 완전히 지원되지 않습니다.",
	'Downgrade' : "다음으로 다운그레이드해야 합니다.",
	'Upgrade' : "다음으로 업그레이드해야 합니다.",
	'OrLater' : "이상",
	'Firefox_version_warning' : "Firefox 버전 17-22에서는 디바이스당 사용자 에이전트 스위칭이 지원되지 않습니다.",

	// Apache Cordova support specific labels.
	'index_enable_cordova' : "디바이스 API 시뮬레이션",
	'index_cordova_enable_desc' : 'Apache Cordova API 시뮬레이션을 사용합니다.',	
	'index_cordova_support' : 'Apache Cordova 시뮬레이션은 Android, iPhone, iPad, Windows Phone, Windows 8 및 BlackBerry 10 환경에서 지원되며 다음 브라우저에서만 사용할 수 있습니다.'

//end v1.x content
});
