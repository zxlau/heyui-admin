webpackJsonp([6],{128:function(t,e){},129:function(t,e){},131:function(t,e,n){var i=n(25)(n(71),n(134),null,null,null);t.exports=i.exports},132:function(t,e,n){var i=n(25)(n(72),n(135),null,null,null);t.exports=i.exports},133:function(t,e,n){function i(t){n(129)}var a=n(25)(n(73),n(136),i,null,null);t.exports=a.exports},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loading?t._e():["login"==t.$route.name?[n("router-view")]:n("div",[n("appHead"),t._v(" "),n("div",{staticClass:"app-container"},[n("appMenu"),t._v(" "),n("div",{staticClass:"app-body"},[n("router-view")],1)],1)],1)]],2)},staticRenderFns:[]}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header"},[t._m(0),t._v(" "),n("div",{staticClass:"float-right app-header-info"},[n("span",[n("a",{directives:[{name:"font",rawName:"v-font",value:20,expression:"20"}],attrs:{href:"https://github.com/heyui/heyui-demo",target:"_blank"}},[n("i",{staticClass:"h-icon-github"})])]),t._v(" "),n("DropdownMenu",{attrs:{"class-name":"app-header-dropdown",placement:"bottom-end",datas:t.infoMenu},on:{onclick:t.trigger}},[n("span",[t._v(t._s(t.User.name))])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header-title"},[n("a",{attrs:{href:"http://www.heyui.top"}},[t._v("HEYUI")])])}]}},136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-menu"},[n("Menu",{ref:"menu",attrs:{datas:t.menus,"class-name":"h-menu-white"},on:{onclick:t.trigger}})],1)},staticRenderFns:[]}},159:function(t,e,n){t.exports=n(69)},69:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(23),u=i(a),r=n(131),o=i(r),l=n(22),c=i(l),d=n(78),s=i(d),f=n(80),p=i(f);n(128),(0,s.default)(),u.default.use(c.default),u.default.use(t);var h=(0,p.default)(),m=new u.default({router:h,el:"#app",render:function(t){return t(o.default)}});e.default=m}).call(e,n(9))},71:function(t,e,n){"use strict";(function(t,i){function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(46),r=a(u),o=n(82),l=a(o),c=n(132),d=a(c),s=n(133),f=a(s);e.default={data:function(){return{loading:!0}},store:l.default,mounted:function(){var e=this;this.$Loading("加载中"),t.User.info().then(function(t){t.ok&&(l.default.dispatch("updateAccount",t.body),e.initDict())})},methods:{initDict:function(){var e=this;t.Dict.get().then(function(t){if(t.ok){var n=t.body,a=!0,u=!1,o=void 0;try{for(var l,c=(0,r.default)(n);!(a=(l=c.next()).done);a=!0){var d=l.value;i.addDict(d.name,d.data)}}catch(t){u=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(u)throw o}}}e.loading=!1,e.$Loading.close()})}},components:{appHead:d.default,appMenu:f.default}}}).call(e,n(26),n(9))},72:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(86),u=i(a),r=n(24);e.default={data:function(){return{infoMenu:[{key:"logout",title:"退出登录",icon:"h-icon-outbox"}]}},computed:(0,u.default)({},(0,r.mapState)({User:"User"})),methods:{trigger:function(e){"logout"==e&&(t.removeLocal("Auth"),this.$router.replace("/login"))}}}}).call(e,n(16))},73:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(79),u=i(a);e.default={data:function(){return{menus:u.default}},watch:{$route:function(){this.menuSelect()}},mounted:function(){this.menuSelect()},methods:{menuSelect:function(){this.$route.name&&this.$refs.menu.select(this.$route.name)},trigger:function(t){this.$router.push({name:t.key})}}}},75:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{simple:{loadData:r,keyName:"id",titleName:"name",minWord:1}}};var a=n(154),u=i(a),r=function(t,e){(0,u.default)("https://suggest.taobao.com/sug?code=utf-8&q="+t).then(function(t){return t.json()}).then(function(t){var n=t.result,i=[];n.forEach(function(t){i.push({name:t[0],id:t[1]})}),e(i)})}},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{simple:{title:"测试",keyName:"id",parentName:"parent",titleName:"title",dataMode:"list",datas:function(){return i}}}};var i=[{id:1,title:"一级"},{id:2,title:"二级"},{id:3,title:"三级",disabled:!0},{id:10,title:"一级-0",parent:"1"},{id:11,title:"一级-1",parent:"1"},{id:12,title:"一级-2",parent:"1"},{id:13,title:"一级-3",parent:"1"},{id:14,title:"一级-4",parent:"1"},{id:101,title:"一级-0-1",parent:"10"},{id:102,title:"一级-0-2",parent:"10"},{id:103,title:"一级-0-3",parent:"10"},{id:20,title:"二级-0",parent:"2"},{id:21,title:"二级-1",parent:"2"},{id:22,title:"二级-2",parent:"2"},{id:23,title:"二级-3",parent:"2"},{id:24,title:"二级-4",parent:"2"},{id:30,title:"三级-0",parent:"3"},{id:31,title:"三级-1",parent:"3"},{id:32,title:"三级-2",parent:"3"},{id:33,title:"三级-3",parent:"3"}]},77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return{presenceStatus:{0:"离线",1:"就绪",2:"忙碌",3:"离席",4:"通话中",5:"通话中"},role:{1:"普通坐席",2:"坐席管理员"},phoneStatus:{0:"空闲",1:"占线",2:"振铃",3:"媒体音",4:"通话中"},phoneType:{1:"模拟话机",2:"IP话机",3:"软电话"},select:[{title:"选择1",key:"a1",other:"其他值"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}],simple:{1:"苹果",2:"梨子",3:"香蕉",4:"橙子",5:"樱桃"}}};e.default=i},78:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(47),u=i(a),r=n(77),o=i(r),l=n(75),c=i(l),d=n(81),s=i(d),f=n(76),p=i(f),h=function(){var e=(0,o.default)();(0,u.default)(e).forEach(function(n){t.addDict(n,e[n])}),t.config("dict.keyName","key"),t.config("dict.titleName","title"),t.config("autocomplete.configs",(0,c.default)()),t.config("tree.configs",(0,s.default)()),t.config("category.configs",(0,p.default)()),t.config("menu",{keyName:"key",titleName:"title",childrenName:"children"})};e.default=h}).call(e,n(9))},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[{title:"首页",key:"home",icon:"h-icon-home"},{title:"示例",icon:"h-icon-star-on",children:[{title:"列表展示",key:"list",icon:"h-icon-setting"},{title:"报表查询",icon:"h-icon-search",key:"search"},{title:"表单",icon:"h-icon-search",key:"form"},{title:"系统参数",key:"system",icon:"h-icon-setting"}]}];e.default=i},80:function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),u=i(a),r=function(){var e={mode:"history",routes:[{path:"/",name:"home",component:function(t){return n.e(1).then(function(){var e=[n(166)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/login",name:"login",component:function(t){return n.e(2).then(function(){var e=[n(165)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/list",name:"list",component:function(t){return n.e(4).then(function(){var e=[n(162)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/form",name:"form",component:function(t){return n.e(5).then(function(){var e=[n(161)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/search",name:"search",component:function(t){return n.e(0).then(function(){var e=[n(163)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/system",name:"system",component:function(t){return n.e(3).then(function(){var e=[n(164)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},i=new u.default(e);return i.beforeEach(function(e,n,i){t.$LoadingBar.start(),i()}),i.afterEach(function(){t.$LoadingBar.success()}),i};e.default=r}).call(e,n(9))},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{simple:{keyName:"id",parentName:"parent",titleName:"title",dataMode:"list",datas:function(){return i}}}};var i=[{id:1,title:"一级"},{id:2,title:"二级"},{id:3,title:"三级",disabled:!0},{id:10,title:"一级-0",parent:"1"},{id:11,title:"一级-1",parent:"1"},{id:12,title:"一级-2",parent:"1"},{id:13,title:"一级-3",parent:"1"},{id:14,title:"一级-4",parent:"1"},{id:101,title:"一级-0-1",parent:"10"},{id:102,title:"一级-0-2",parent:"10"},{id:103,title:"一级-0-3",parent:"10"},{id:20,title:"二级-0",parent:"2"},{id:21,title:"二级-1",parent:"2"},{id:22,title:"二级-2",parent:"2"},{id:23,title:"二级-3",parent:"2"},{id:24,title:"二级-4",parent:"2"},{id:30,title:"三级-0",parent:"3"},{id:31,title:"三级-1",parent:"3"},{id:32,title:"三级-2",parent:"3"},{id:33,title:"三级-3",parent:"3"}]},82:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(24),u=i(a);i(n(23)).default.use(u.default),e.default=new u.default.Store({state:{User:{},showMenu:!0},mutations:{updateAccount:function(t,e){t.User=e},updateMenu:function(t,e){t.showMenu=e}},actions:{updateAccount:function(t,e){t.commit("updateAccount",e)},updateMenu:function(t,e){t.commit("updateMenu",e)}},getters:{account:function(t){return t.User},showMenu:function(t){return t.showMenu}}})}},[159]);