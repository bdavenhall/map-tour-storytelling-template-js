﻿define(
({
		viewer: {
			loading: {
				step1: "正在加载应用程序",
				step2: "正在加载数据",
				step3: "正在初始化浏览",
				fail: "抱歉，地图浏览加载失败",
				failButton: "重试"
			},
			errors: {
				boxTitle: "发生错误",
				invalidConfig: "严重错误: 配置无效",
				invalidConfigOwner: "严重错误: 配置无效(需要授权的所有者)",
				invalidConfigNoWebmap: "严重错误: 配置无效(需要 web 地图和授权的所有者)",
				createMap: "无法创建地图",
				invalidApp: "严重错误: 无法加载应用程序",
				noLayer: "Web 地图不包含适用于地图浏览的有效数据图层。",
				noLayerNoHostedFS: "Web 地图不包含适用于 Map Tour 的数据图层，并且您不具有创建托管要素服务所需的权限。",
				noLayerMobile: "欢迎使用地图浏览 web 应用程序。该应用程序未配置。移动设备不支持地图浏览构建器。",
				noLayerView: "欢迎使用地图浏览 web 应用程序。<br />该应用程序尚未配置。",
				noBuilderWebmapData: "Web 地图中的嵌入数据不支持 Map Tour 构建器。要使用该构建器，需要使用要素服务。要使用实际数据图层，需要使用下载版 Map Tour。",
				appSave: "保存 web 应用程序时出错",
				mapSave: "保存 web 地图时出错",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "未经授权，无法配置该应用程序",
				oldBrowserTitle: "浏览器的部分功能不受支持",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "Map Tour 构建器不支持 Windows 7 中的 Internet Explorer 10。您需要<a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>手动将文档模式强制设置为 Internet Explorer 9 标准</a>，<a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>降级到 Internet Explore 9</a> 或升级到 Windows 8。",
				oldBrowserExplain: "此浏览器不支持根据上传到地图浏览的图像自动生成缩略图。可使用此浏览器创建一个地图浏览，但需要为每个上传的图像分别提供缩略图。",
				oldBrowserExplain2: "要改善体验，请<a href='http://browsehappy.com/' target='_blank'>升级浏览器</a>或<a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>激活用于 Internet Explore 的 Google Chrome 浏览器内嵌框架</a>。",
				oldBrowserClose: "关闭"
			},
			mobileHTML: {
				showIntro: "显示简介",
				hideIntro: "隐藏简介",
				navList: "列表",
				navMap: "地图",
				navInfo: "信息"
			},
			desktopHTML: {
				storymapsText: "故事地图",
				builderButton: "切换到构建器模式"
			},
			builderHTML: {
				panelHeader: "应用程序配置",
				buttonSave: "保存",
				buttonDiscard: "取消",
				buttonSettings: "设置",
				buttonView: "视图模式",
				buttonOrganize: "组织",
				buttonAdd: "添加",
				modalCancel: "取消",
				modalApply: "应用",
				organizeHeader: "组织浏览",
				organizeGeneralCaption: "使用拖放功能对浏览点排序",
				organizeDelete: "删除",
				organizeHide: "隐藏",
				addMaxPointReached: "已达到图标集允许的最多点数，无法再添加更多的浏览点。<br /><br />请注意，如果删除现有点，则需要重新加载应用程序。",
				addMaxPointReachedMobile: "抱歉，已达到授权点的最大数目，无法添加该图片。",
				addClose: "关闭",
				addHeader: "添加新浏览点",
				addTabPicture: "图片",
				addTabInformation: "信息",
				addTabLocation: "位置",
				addSelectCaption: "选择或拖动图片",
				addSelectCaptionNoFileReader: "选择图片",
				addChangePhoto: "更改图片和缩略图",
				addPictureResolutionIntro: "图片分辨率高于所要求值:",
				addPictureResolutionOldBrowser: "图片分辨率高于所要求值。请指定一个低于 %RECOMMENDED_RES% 的分辨率，以便优化地图浏览体验。",
				addPictureResolutionResize: "将图片分辨率更改为 %RESOLUTION%",
				addPictureResolutionKeep: "保持原始分辨率 %RESOLUTION%",
				addSelectThumbnail: "选择缩略图",
				addNoThumbSelected: "未选择缩略图",
				addThumbSelected: "已选",
				addCameraSettingsHeader: "照相机设置",
				addThumbnailHeader: "缩略图",
				addLabelName: "名称",
				addLabelDescription: "说明文字",
				addTextPlaceholder: "输入内容",
				addLocatePlaceholder: "查找地址或地点",
				addPinColor: "颜色",
				addLatitude: "纬度",
				addLongitude: "经度",
				addLatitudePlaceholder: "例如 34.056",
				addLongitudePlaceholder: "例如 -117.195",
				addUploading: "上传浏览点",
				addSave: "添加浏览点",
				addMobileUploading: "正在上传图片",
				addMobileName: "输入名称",
				addMobileNameMandatory: "出错，请输入名称。",
				addMobileError: "抱歉，出现一些问题",
				settingsHeader: "应用程序设置",
				settingsTabLayout: "布局",
				settingsTabColor: "颜色",
				settingsTabLogo: "标题",
				settingsTabFields: "数据",
				settingsTabExtent: "范围",
				settingsTabZoom: "缩放级别",
				settingsLayoutExplain: "在所提供的两个布局之间选择应用程序布局。",
				settingsLayoutProfessional: "由三个面板构成的布局",
				settingsLayoutModern: "集成的布局",
				settingsLayoutSelected: "选中的布局",
				settingsLayoutSelect: "选择此布局",
				settingsColorExplain: "通过选择预定义主题或创建自定义主题来更改外观。",
				settingsLabelColor: "页眉、内容和页脚颜色",
				settingsLogoExplain: "自定义页眉徽标(不超过 250 x 50px)。",
				settingsLogoEsri: "Esri 徽标",
				settingsLogoNone: "无徽标",
				settingsLogoCustom: "自定义徽标",
				settingsLogoCustomPlaceholder: "图像 URL",
				settingsLogoCustomTargetPlaceholder: "点击链接",
				settingsLogoSocialExplain: "自定义标题右上方的链接。",
				settingsLogoSocialText: "文本",
				settingsLogoSocialLink: "链接",
				settingsDataFieldsExplain: "选择照片名称、说明文字和颜色字段。",
				settingsDataFieldsError: "应用程序无法确定相应的名称、说明文字或颜色数据。请选择要在此处使用的字段。这些设置稍后可进行更改。",
				settingsFieldsLabelName: "名称",
				settingsFieldsLabelDescription: "说明文字",
				settingsFieldsLabelColor: "颜色",
				settingsExtentExplain: "通过下面的交互式地图设置 Map Tour 初始范围。",
				settingsExtentExplainBottom: "只有包括第一个浏览点才使用该范围。该值在 Web 地图初始范围中保持不变。",
				settingsExtentDrawBtn: "确定一个新范围",
				settingsExtentModifyBtn: "编辑当前范围",
				settingsExtentApplyBtn: "应用到主地图",
				settingsZoomExplain: "根据介绍设置故事点的缩放(可选项)。",
				settingsLabelZoom: "比例/级别",
				settingsZoomFirstValue: "无",
				settingsFieldError : "请在各列表中选择一个字段",
				dataHeader: "应用程序数据",
				dataExplain: "您的 Web 地图不包含要素服务。完成此对话框，以便在您的 ArcGIS.com 组织帐户中创建托管要素服务。该要素服务将添加到 Web 地图中并公开共享，但只有您具有添加/编辑和删除的权限。<br /><br />在共享给其他用户前，只有您可以查看该应用程序。<strong>Map Tour 准备就绪后，可以通过项目页面共享该应用程序。</strong>",
				dataNameLbl: "服务名称",
				dataFolderListLbl: "文件夹",
				dataFolderListFetching: "获取文件夹 ...",
				dataRootFolder: "根目录",
				dataNameError: "输入要素服务的名称",
				dataFolderError: "选择有效的文件夹",
				dataSrcContainsInvalidChar: "要素服务名称包含一个或多个无效字符(<、>、#、%、:、\"、?、&、+、/ 或 \)。",
				dataSrvAlreadyExistsError: "组织中已经存在该名称的服务。请选择其他名称。",
				dataBtnClose: "取消浏览",
				dataBtnSave: "创建服务",
				dataFooterProgress: "正在创建",
				dataFooterSucceed: "创建成功。正在加载",
				dataFooterError: "创建失败。请重试",
				tabError: "请检查所有选项卡中的错误",
				introRecordBtn: "入口",
				introRecordActivate: "将第一个点做为入口"
			},
			addPopupJS: {
				uploadingPicture: "正在上传图片",
				uploadSuccess: "上传成功",
				uploadError: "上传图片出错",
				notJpg: "请选择 jpeg 格式的照片",
				errorNoPhoto: "选择要上传的图像",
				errorNoThumbnail: "选择要上传的缩略图",
				errorNoName: "输入该浏览点的名称",
				errorNoDescription: "输入该浏览点的说明文字",
				errorNoLocation: "设置该浏览点的位置"
			},
			builderJS: {
				noPendingChange: "无待决的更改",
				unSavedChangeSingular: "1 个未保存的更改",
				unSavedChangePlural: "未保存的更改",
				popoverDiscard: "确定要放弃未保存的更改吗?",
				yes: "是",
				no: "否",
				popoverLoseSave: "打开查看器，您将丢失所有未保存的更改",
				ok: "确定",
				popoverSaveWhenDone: "完成后请不要忘记保存",
				closeWithPendingChange: "确定要执行此操作吗? 您的更改将丢失。",
				gotIt: "确定",
				savingApplication: "保存应用程序",
				saveSuccess: "应用程序保存成功",
				saveError: "保存失败，请重试",
				dragColorPicker: "随意移动<br />或更改颜色",
				dataWarningExtent: "部分数据位于 web 地图的范围之外。这些数据不用作浏览点，如果要使用它们，请更改地图范围。",
				dataWarningVisibi: "您的地图浏览图层在当前 web 地图范围内不可见。将地图扩大到 %MAPSIZE% 可保证地图浏览图层可见。",
				dataWarningEdit: "编辑 web 地图",
				dataWarningClose: "关闭",
				signIn: "请使用帐户登录",
				signInTwo: "保存应用程序。"
			},
			organizePopupJS: {
				messageStart: "您已选择删除",
				messageSinglePoint: "一个浏览点",
				messageMultiPoint: "多个浏览点",
				messagePermantRemove: "此操作将从数据库中永久移除",
				messageRecord: "个记录",
				messageRecordPlural: "个记录",
				messageConfirm: "。是否要继续?",
				labelButtonShow: "显示",
				labelButtonHide: "隐藏"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "正在上传图片和缩略图",
				popoverUploadingThumbnail: "正在上传缩略图",
				popoverUploadSuccessful: "上传成功",
				popoverUploadError: "上传失败，请重试",
				changePicAndThumb: "更改图片",
				changeThumb: "更改缩略图",
				selectPic: "更改图片",
				selectThumb: "更改缩略图",
				uploadPicAndThumb: "应用"
			},
			headerJS:{
				editMe: "编辑!",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题"
			},
			crossFaderJS:{
				setPicture: "设置图片标题",
				setCaption: "设置图片说明文字"
			}
        }
    })
);
