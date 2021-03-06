/* 
* please keep the code elegant
*/

// config
import config from './config/config';
import httpConfig from './config/http';
import routerConfig from './config/route';
import i18nConfig from './i18n/config';

// service
import commonSer from './common/commonSer';
import qService from './services/q-service';
import dService from './services/d-service';
import hService from './services/h-service';
import xService from './services/x-service';
import toolService from './services/tool-service';
import unitService from './services/unit-service';
import dateService from './services/date-service';
import kpiDetailService from './services/kpiDetailService';
import AuthTool  from './services/auth-tool';
import generalService from './services/generalService';
import dictService from './services/dictService';

// resource
import accountRes from './resources/account-res';
import kpiRes from './resources/kpi-res';
import kpiSpanRes from './resources/SpanKPI-res';
import dataDetailFactory from './resources/dataDetailFactory';
import dictFactory from './resources/dictFactory';

// directive
import headerDirect from './common/header/headerDirect';

// filter
import economyFilter from './filter/EconomyFilter';
import GDPDetailFilter from './filter/GDPDetailFilter'
import kpiStatusTextFilter from './filter/publicsecurity/kpiStatusTextFilter';
import kpiStatusClassFilter from './filter/publicsecurity/kpiStatusClassFilter';
import insuranceFilter from './filter/insuranceFilter';
import populationFilter from './filter/PopulationFilter';
import energyFilter from './filter/Environment/EnergyFilter';
import landFilter from './filter/Environment/LandFilter';
import publicsecuritythreeFilter from './filter/publicsecurity/publicsecuritythreeFilter';
import publicsecuritydetailFilter from './filter/publicsecurity/publicsecuritydetailFilter';
import kpiUnitFilter from './filter/publicsecurity/kpiUnitFilter';
import applyDateFilter from './filter/applyDateFilter';
import unitTransFilter from './filter/unitTransFilter';
import FinanceDetailFilter from './filter/FinanceFilter';
import FinancialDetailFilter from './filter/FinancialFilter';
import investmentDetailFilter from './filter/investDetailFilter';
import industryDetailFilter from './filter/industryFilter';
import lvThreeFilter from './filter/lvThreeFilter';
// controllers

import appCtrl from './appCtrl';
// 登陆及首页Controller
import portalCtrl from './auth/portal/portalCtrl';
import inCtrl from './in/inCtrl';
import exampleCtrl from './in/example/exampleCtrl';
import homeCtrl from './in/home/homeCtrl';
// 侧边栏Controller
import meCtrl from './in/me/meCtrl';
import datepickCtrl from './in/datepick/datepickCtrl';
import changepswCtrl from './in/changepsw/changepswCtrl';
// 经济模块Controller
import economyCtrl from './in/economy/economyCtrl.js';
import economylistCtrl from './in/economy/one/economylistCtrl.js';
import economydetailCtrl from './in/economy/two/economydetailCtrl.js';
import economyByStateCtrl from './in/economy/one/bystate/bystateCtrl.js';
import thirdgdpcontroller from './in/economy/EconomyThird/thirdgdpcontroller.js';
import thirdfinancecontroller from './in/economy/EconomyThird/thirdfinance/thirdfinance.js';
import thirdinvestcontroller from './in/economy/EconomyThird/thirdinvest/thirdinvest.js';
import thirdindustrycontroller from './in/economy/EconomyThird/thirdindustry/thirdindustry.js';
import thirdfisicalcontroller from './in/economy/EconomyThird/thirdfisical/thirdfisical.js';
import thirdHomeCtrl from './in/economy/EconomyThird/thirdHomeCtrl.js';
//环境模块Controller
import environmentCtrl from './in/Environment/EnvironmentCtrl.js';
import environmentlistCtrl from './in/Environment/one/EnvironmentlistCtrl.js';
import environmentdetailCtrl from './in/Environment/two/EnvironmentDetailCtrl.js';
import environmentByStateCtrl from './in/Environment/one/bystate/bystateCtrl.js';
import waterThreeCtrl from './in/Environment/three/water/waterThreeCtrl.js';
import airThreeCtrl from './in/Environment/three/air/airThreeCtrl.js';
import landThreeCtrl from './in/Environment/three/land/landThreeCtrl.js';
import energyThreeCtrl from './in/Environment/three/energy/energyThreeCtrl.js';

// 民生模块Controller
import livehoodCtrl from './in/livehood/livehoodCtrl.js';
import livehoodlistCtrl from './in/livehood/one/livehoodlistCtrl.js';
import livehooddetailCtrl from './in/livehood/two/livehooddetailCtrl.js';
import livehoodByStateCtrl from './in/livehood/one/bystate/bystateCtrl.js';
import populationThreeCtrl from './in/livehood/three/population/populationThreeCtrl.js';
import insuranceCtrl from './in/livehood/three/insurance/insuranceCtrl.js';
import priceThreeCtrl from './in/livehood/three/price/priceThreeCtrl.js';

// 公共安全模块Controller
import publicsecurityCtrl from './in/publicsecurity/publicsecurityCtrl.js';
import publicsecuritylistCtrl from './in/publicsecurity/one/publicsecuritylistCtrl.js';
import publicsecuritydetailCtrl from './in/publicsecurity/two/publicsecuritydetailCtrl.js';
import publicsecurityByStateCtrl from './in/publicsecurity/one/bystate/bystateCtrl.js';
import policeCtrl from './in/publicsecurity/three/police/policeCtrl.js';
import policeCallCtrl from './in/publicsecurity/three/police/policeCallCtrl.js';
import criminalCtrl from './in/publicsecurity/three/police/criminalCtrl.js';
import accidentthreeCtrl from './in/publicsecurity/three/accident/accidentthreeCtrl.js';
import firethreeCtrl from './in/publicsecurity/three/fire/firethreeCtrl.js';
import petitionthreeCtrl from './in/publicsecurity/three/petition/petitionthreeCtrl.js';
import safetythreeCtrl from './in/publicsecurity/three/safety/safetythreeCtrl.js';
// 城市管理模块Controller
import cmCtrl from './in/citymanager/cmCtrl.js';
import cmlistCtrl from './in/citymanager/one/cmlistCtrl.js';
import cmdetailCtrl from './in/citymanager/two/cmdetailCtrl.js';
import cmByStateCtrl from './in/citymanager/one/bystate/bystateCtrl.js';
import cmrefuseCtrl from './in/citymanager/three/refuse/cmrefuseCtrl.js';
import cmpunishCtrl from './in/citymanager/three/punish/cmpunishCtrl.js';
import cmfixCtrl from './in/citymanager/three/fix/cmfixCtrl.js';
import cmicmCtrl from './in/citymanager/three/icm/cmicmCtrl.js';
// 公共事业Controller
import publicServiceCtrl from './in/publicService/publicServiceCtrl.js';
import publicServicelistCtrl from './in/publicService/one/publicServicelistCtrl.js';
import publicServicedetailCtrl from './in/publicService/two/publicServicedetailCtrl.js';
import publicServiceByStateCtrl from './in/publicService/one/bystate/bystateCtrl.js';
// import peducationCtrl from './in/publicService/three/education/peducationCtrl.js';
import phealthCareCtrl from './in/publicService/three/healthCare/phealthCareCtrl.js';
import hlthPblcHlthCtrl from './in/publicService/three/healthCare/hlthPblcHlthCtrl.js';
import ptelecomCtrl from './in/publicService/three/telecom/ptelecomCtrl.js';
import psngrTransportationCtrl from './in/publicService/three/traffic/psngrTransportationCtrl.js';
import trnspAdminPermitCtrl from './in/publicService/three/traffic/trnspAdminPermitCtrl.js';
import gdsTransCtrl from './in/publicService/three/traffic/gdsTransCtrl.js';
import driverTrainCtrl from './in/publicService/three/traffic/driverTrainCtrl.js';
import trnspInfstCnstrCtrl from './in/publicService/three/traffic/trnspInfstCnstrCtrl.js';
import eduGuaranteeCtrl from './in/publicService/three/education/eduGuaranteeCtrl.js';
// import ptrafficCtrl from './in/publicService/three/traffic/ptrafficCtrl.js';

angular.module('soraka',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngResource', 'ngStorage', 'mobile-angular-ui','ui.bootstrap', 'highcharts-ng', '720kb.datepicker','mobile-angular-ui.gestures','angular-svg-round-progressbar'])



  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)
  .constant('BASE_URL', 'http://10.60.36.96:8080/api') // 测试
  // .constant('BASE_URL', '/api') // 发布

  // 基础配置
  .config(httpConfig)
  .config(routerConfig)
  
  // 自动执行
  .run(i18nConfig)

  // services 初始化
  .service('commonSer', commonSer)
  .service('qService', qService)
  .service('dService', dService)
  .service('hService', hService)
  .service('xService', xService)
  .service('toolService', toolService)
  .service('AuthTool',AuthTool)
  .service('dateService',dateService)
  .service('generalService',generalService)
  .service('dictService',dictService)
  .service('kpiDetailService',kpiDetailService)
  .service('unitService',unitService)


  // factory 初始化
  .factory('accountRes', accountRes)
  .factory('kpiRes',kpiRes)
  .factory('kpiSpanRes',kpiSpanRes)
  .factory('dataDetailFactory',dataDetailFactory)
  .factory('dictFactory',dictFactory)


  // directive 初始化
  .directive('lcHeader', headerDirect)
  
  // filter 初始化
  .filter('economyFilter',economyFilter)
  .filter('GDPDetailFilter',GDPDetailFilter)
  .filter('kpiStatusTextFilter', kpiStatusTextFilter)
  .filter('kpiStatusClassFilter', kpiStatusClassFilter)
  .filter('insuranceFilter',insuranceFilter)
  .filter('populationFilter', populationFilter)
  .filter('energyFilter',energyFilter)
  .filter('landFilter',landFilter)
  .filter('publicsecuritythreeFilter',publicsecuritythreeFilter)
  .filter('publicsecuritydetailFilter',publicsecuritydetailFilter)
  .filter('kpiUnitFilter',kpiUnitFilter)
  .filter('applyDateFilter',applyDateFilter)
  .filter('unitTransFilter',unitTransFilter)
  .filter('FinanceDetailFilter',FinanceDetailFilter)
  .filter('FinancialDetailFilter',FinancialDetailFilter)
  .filter('investmentDetailFilter',investmentDetailFilter)
  .filter('industryDetailFilter',industryDetailFilter)
  .filter('lvThreeFilter',lvThreeFilter)


  // controllers 初始化
  .controller('appCtrl', appCtrl)
  .controller('portalCtrl', portalCtrl)
  .controller('inCtrl', inCtrl)
  .controller('homeCtrl', homeCtrl)
  .controller('exampleCtrl', exampleCtrl)
  // 侧边栏controllers
  .controller('meCtrl', meCtrl)
  .controller('datepickCtrl', datepickCtrl)
  .controller('changepswCtrl', changepswCtrl)
  // 经济controllers
  .controller('economyCtrl', economyCtrl)
  .controller('economylistCtrl', economylistCtrl)
  .controller('economydetailCtrl', economydetailCtrl)
  .controller('economyByStateCtrl', economyByStateCtrl)
  .controller('thirdgdpcontroller',thirdgdpcontroller)
  .controller('thirdfinancecontroller',thirdfinancecontroller)
  .controller('thirdinvestcontroller',thirdinvestcontroller)
  .controller('thirdindustrycontroller',thirdindustrycontroller)
  .controller('thirdfisicalcontroller',thirdfisicalcontroller)
  .controller('thirdHomeCtrl',thirdHomeCtrl)
  // 环境controllers
  .controller('environmentCtrl', environmentCtrl)
  .controller('environmentlistCtrl', environmentlistCtrl)
  .controller('environmentdetailCtrl', environmentdetailCtrl)
  .controller('environmentByStateCtrl', environmentByStateCtrl)
  .controller('waterThreeCtrl',waterThreeCtrl)
  .controller('airThreeCtrl',airThreeCtrl)
  .controller('landThreeCtrl',landThreeCtrl)
  .controller('energyThreeCtrl',energyThreeCtrl)

  // 民生controllers
  .controller('livehoodCtrl', livehoodCtrl)
  .controller('livehoodlistCtrl', livehoodlistCtrl)
  .controller('livehooddetailCtrl', livehooddetailCtrl)
  .controller('livehoodByStateCtrl', livehoodByStateCtrl)
  .controller('populationThreeCtrl',populationThreeCtrl)
  .controller('insuranceCtrl',insuranceCtrl)
  .controller('priceThreeCtrl',priceThreeCtrl)
  // 公共安全controllers
  .controller('publicsecurityCtrl', publicsecurityCtrl)
  .controller('publicsecuritylistCtrl', publicsecuritylistCtrl)
  .controller('publicsecuritydetailCtrl', publicsecuritydetailCtrl)
  .controller('publicsecurityByStateCtrl', publicsecurityByStateCtrl)
  .controller('policeCtrl',policeCtrl)
  .controller('policeCallCtrl',policeCallCtrl)
  .controller('criminalCtrl',criminalCtrl)
  .controller('accidentthreeCtrl',accidentthreeCtrl)
  .controller('firethreeCtrl',firethreeCtrl)
  .controller('petitionthreeCtrl',petitionthreeCtrl)
  .controller('safetythreeCtrl',safetythreeCtrl)

  // 公共事业controllers
  .controller('publicServiceCtrl', publicServiceCtrl)
  .controller('publicServicelistCtrl', publicServicelistCtrl)
  .controller('publicServicedetailCtrl', publicServicedetailCtrl)
  .controller('publicServiceByStateCtrl', publicServiceByStateCtrl)
  // .controller('peducationCtrl', peducationCtrl)
  .controller('phealthCareCtrl', phealthCareCtrl)
  .controller('ptelecomCtrl', ptelecomCtrl)
  .controller('psngrTransportationCtrl', psngrTransportationCtrl)
  .controller('trnspAdminPermitCtrl', trnspAdminPermitCtrl)
  .controller('gdsTransCtrl', gdsTransCtrl)
  .controller('driverTrainCtrl', driverTrainCtrl)
  .controller('trnspInfstCnstrCtrl', trnspInfstCnstrCtrl)
  .controller('eduGuaranteeCtrl', eduGuaranteeCtrl)
  .controller('hlthPblcHlthCtrl', hlthPblcHlthCtrl)

  // 城市管理controllers
  .controller('cmCtrl', cmCtrl)
  .controller('cmlistCtrl', cmlistCtrl)
  .controller('cmdetailCtrl', cmdetailCtrl)
  .controller('cmByStateCtrl', cmByStateCtrl)
  .controller('cmrefuseCtrl', cmrefuseCtrl)
  .controller('cmpunishCtrl', cmpunishCtrl)
  .controller('cmfixCtrl', cmfixCtrl)
  .controller('cmicmCtrl', cmicmCtrl)
  ;