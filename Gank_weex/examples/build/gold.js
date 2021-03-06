/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/17d6308dbc70084602904d2d6b6219cc", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(14);

	;
	    const GOLD_API = '__API__URL'
	    __weex_module__.exports = {
	        data: function () {return {
	            baseURL: '',
	            dir: 'examples',
	            itemList: [{
	                "tagsTitleArray": [
	                    "Android",
	                    "开源",
	                    "Google"
	                ],
	                "category": "android",
	                "tags": {
	                    "__type": "Relation",
	                    "className": "Tag"
	                },
	                "hotIndex": 3839,
	                "viewsCount": 1667,
	                "subscribers": {
	                    "__type": "Relation",
	                    "className": "_User"
	                },
	                "collectionCount": 205,
	                "content": "带你学习了解 Google 新开元的 FlexboxLayout。",
	                "hot": false,
	                "original": true,
	                "type": "article",
	                "title": "Google 开源的 FlexboxLayout",
	                "author": "googdev",
	                "english": false,
	                "rankIndex": 0.038876303392851856,
	                "url": "https://gold.xitu.io/entry/5738887a71cfe40057038b8a/view",
	                "entryView": {
	                    "__type": "Pointer",
	                    "className": "EntryView",
	                    "objectId": "57393a6a79bc44005c5f5b35"
	                },
	                "gfw": false,
	                "commentsCount": 0,
	                "user": {
	                    "username": "googdev",
	                    "avatar_large": "http://tp4.sinaimg.cn/2942550243/180/5679223253/1",
	                    "avatar_hd": "http://tva1.sinaimg.cn/crop.0.0.180.180.180/af63c0e3jw1eaigs3bfuvj20500500so.jpg",
	                    "objectId": "55fe1c23ddb263b5605b2c03",
	                    "role": "editor",
	                    "company": "薄荷科技",
	                    "self_description": "微信公众账号: AndroidDeveloper「googdev」 | 个人博客: http://stormzhang.com",
	                    "blogAddress": "http://stormzhang.com",
	                    "totalHotIndex": 125411,
	                    "postedEntriesCount": 31,
	                    "collectedEntriesCount": 34,
	                    "totalCollectionsCount": 4772,
	                    "subscribedTagsCount": 12,
	                    "followeesCount": 20,
	                    "followersCount": 386
	                },
	                "subscribersCount": 0,
	                "screenshot": {
	                    "__type": "File",
	                    "id": "5738887a1ea4930064378e0e",
	                    "name": "flexbox.jpg",
	                    "url": "http://ac-mhke0kuv.clouddn.com/9fd3273139b7d8e2c3df.jpg"
	                },
	                "originalUrl": "http://mp.weixin.qq.com/s?__biz=MzA4NTQwNDcyMA==&mid=2650661681&idx=1&sn=b151aba0c5fb702492f6bbd82211988d#rd",
	                "objectId": "5738887a71cfe40057038b8a",
	                "createdAt": "2016-05-15T14:32:26.936Z",
	                "updatedAt": "2016-06-09T07:45:40.264Z",
	                "className": "Entry",
	                "createdAtString": "2016-05-15T14:32:26.936Z",
	                "updatedAtString": "2016-06-09T07:45:40.264Z",
	                "isCollected": false
	            }]
	        }},
	        created: function() {
	            this.getBaseURL()
	            this.fetchData()
	        },
	        methods: {
	            add: function() {
	                this.count++
	                    this.fetchData()
	            },
	            contentFilter: function(content) {
	                return content.slice(0, 80)
	            },
	            genFetchUri: function() {
	                if (this.itemList.length) {
	                    return GOLD_API + this.itemList[this.itemList.length - 1].createdAtString
	                } else {
	                    var now = new Date()
	                    return GOLD_API + now.toISOString()
	                }
	            },
	            fetchData: function() {
	                var stream = __weex_require__('@weex-module/stream');
	                var self = this;
	                var GET_URL = this.genFetchUri()

	                stream.sendHttp({
	                    method: 'GET',
	                    url: GET_URL
	                }, function(ret) {
	                    console.log('get', ret);
	                    self.json = ret;
	                    try {
	                        if (self.itemList.length) {
	                            self.itemList = self.itemList.concat(JSON.parse(ret).data)
	                        } else {
	                            self.itemList = JSON.parse(ret).data
	                        }
	                    } catch (e) {
	                        console.log(e)
	                    }

	                });

	            },
	            getBaseURL: function() {
	                var bundleUrl = this.$getConfig().bundleUrl;
	                bundleUrl = new String(bundleUrl);
	                console.log('hit', bundleUrl);
	                var nativeBase;
	                var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	                var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	                if (isAndroidAssets) {
	                    nativeBase = 'file://assets/';
	                } else if (isiOSAssets) {
	                    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	                    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	                    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	                } else {
	                    var host = 'localhost:12580';
	                    var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	                    if (matches && matches.length >= 2) {
	                        host = matches[1];
	                    }
	                    nativeBase = 'http://' + host + '/' + this.dir + '/build/';
	                }
	                var h5Base = './index.html?page=./' + this.dir + '/build/';
	                // in Native
	                var base = nativeBase;
	                if (typeof window === 'object') {
	                    // in Browser or WebView
	                    base = h5Base;
	                }
	                this.baseURL = base;
	            },
	            goRead: function(url) {
	                var params = {
	                    'url': this.baseURL + 'component/web-demo.js?viewurl=' + url
	                }
	                var navigator = __weex_require__('@weex-module/navigator');
	                navigator.push(params, function(e) {
	                    console.log(e)
	                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "events": {
	        "loadmore": "fetchData"
	      },
	      "attr": {
	        "loadmoreoffset": "2000"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "row"
	          ],
	          "repeat": function () {return this.itemList},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "events": {
	                "click": function ($event) {this.goRead(this.url,$event)}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 800,
	                        "height": 300
	                      },
	                      "shown": function () {return this.screenshot},
	                      "attr": {
	                        "src": function () {return this.screenshot.url}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "title-box"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "item-title"
	                              ],
	                              "attr": {
	                                "value": function () {return this.title}
	                              }
	                            },
	                            {
	                              "type": "div",
	                              "classList": [
	                                "avatar-box"
	                              ],
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "classList": [
	                                    "avatar"
	                                  ],
	                                  "shown": function () {return this.user&&this.user.avatar_large},
	                                  "attr": {
	                                    "src": function () {return this.user.avatar_large}
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "content-box"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.contentFilter(this.content)}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "tag-box"
	                          ],
	                          "children": [
	                            {
	                              "type": "div",
	                              "classList": [
	                                "tag-item"
	                              ],
	                              "repeat": {
	                                "expression": function () {return this.tagsTitleArray},
	                                "value": "tag"
	                              },
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "attr": {
	                                    "value": function () {return this.tag}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "classList": [
	                                "collection-box"
	                              ],
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "classList": [
	                                    "collection-icon-box"
	                                  ],
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "attr": {
	                                        "src": "http://covteam.u.qiniudn.com/heart2.png"
	                                      },
	                                      "classList": [
	                                        "collection-icon"
	                                      ]
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "classList": [
	                                    "collection-count"
	                                  ],
	                                  "children": [
	                                    {
	                                      "type": "text",
	                                      "classList": [
	                                        "collection-count-text"
	                                      ],
	                                      "attr": {
	                                        "value": "23"
	                                      }
	                                    }
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "list": {
	    "width": 750,
	    "height": 1200
	  },
	  "row": {
	    "width": 750,
	    "backgroundColor": "#fafafa",
	    "flexDirection": "column"
	  },
	  "item": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": 40,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "paddingBottom": 10
	  },
	  "item-title": {
	    "fontSize": 40
	  },
	  "title-box": {
	    "position": "relative",
	    "paddingTop": 10,
	    "paddingLeft": 20,
	    "paddingRight": 70
	  },
	  "content-box": {
	    "paddingTop": 10,
	    "paddingLeft": 20,
	    "paddingRight": 10
	  },
	  "avatar-box": {
	    "position": "absolute",
	    "right": 20,
	    "top": 10,
	    "width": 50,
	    "height": 50,
	    "borderBottomLeftRadius": 25,
	    "borderBottomRightRadius": 25,
	    "borderTopLeftRadius": 25,
	    "borderTopRightRadius": 25
	  },
	  "avatar": {
	    "width": 50,
	    "height": 50
	  },
	  "tag-box": {
	    "positon": "relative",
	    "flexDirection": "row",
	    "minHeight": 70,
	    "paddingTop": 10,
	    "paddingLeft": 20,
	    "paddingRight": 80
	  },
	  "tag-item": {
	    "marginRight": 10,
	    "marginTop": 10
	  },
	  "collection-icon": {
	    "width": 50,
	    "height": 50
	  },
	  "collection-box": {
	    "position": "absolute",
	    "right": 10,
	    "flexDirection": "row"
	  },
	  "collection-count-text": {
	    "fontSize": 30,
	    "marginTop": 10,
	    "marginLeft": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/17d6308dbc70084602904d2d6b6219cc", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, exports, __weex_module__){

	;
	  __webpack_require__(2);
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(6);
	  __webpack_require__(7);
	  __webpack_require__(8);
	  __webpack_require__(9);
	  __webpack_require__(10);
	  __webpack_require__(11);
	  __webpack_require__(12);

	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-button", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: ''
	    }},
	    methods: {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-hn", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-list-item", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff'
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-panel", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tip", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-countdown", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function() {
	        if (this.remain <= 0) {
	            return;
	        }
	        // this.isWeb = this.$getConfig().env.platform === 'Web';
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', Object.assign({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', Object.assign({}, this.time));
	                }
	                this._app.updateActions(); 
	            }
	        },
	        format: function(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	            // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	            return remain > 0;
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden"
	  }
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-marquee", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function () {
	        if (this.interval > 0
	                && this.step > 0
	                && this.duration > 0) {
	            this.nextTick();    
	        }
	    },
	    methods: {
	        nextTick: function() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function() {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	              styles: {
	                transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	              },
	              timingFunction: 'ease',
	              duration: self.duration
	            }, function() {
	                self.index = (self.index + 1) % (self.count);
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(9);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',
	          backgroundColor: 'black',
	          height: 88,
	          title: "",
	          titleColor: 'black',
	          rightItemSrc: '',
	          rightItemTitle: '',
	          rightItemColor: 'black',
	          leftItemSrc: '',
	          leftItemTitle: '',
	          leftItemColor: 'black',
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(12);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0,
	          selectedColor: '#ff0000',
	          unselectedColor: '#000000',
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = this.selectedColor;
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = this.unselectedColor;
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	})
	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	exports.getDevices =  function getDevices(config){
	    var devices = {
	        width : config.env.deviceWidth,
	        height : config.env.deviceHeight
	    };
	     return devices;
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/image", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(1);
	    var DevicesUtil = __webpack_require__(13);
	    var stream = __weex_require__('@weex-module/stream');
	    var modal = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data: function () {return {
	            loading_display: 'hide',
	            items: [],
	            devices: {
	                width: null,
	                height: null
	            },
	            api: {
	                page: 1,
	                count: 10
	            }
	        }},

	        //生命周期函数 created
	        created: function() {
	            console.log('created');
	            var config = this.$getConfig();
	            var devices = DevicesUtil.getDevices(config);
	            this.devices.width = devices.width;
	            this.devices.height = devices.height;
	            this.loadData(this.api.count, this.api.page);
	        },

	        methods: {

	            loadData: function(count, page) {
	                this.loading_display = 'show';
	                var vm = this;
	                var apiUrl = "http://gank.io/api/data/%E7%A6%8F%E5%88%A9/" + count + "/" + page;
	                //var apiUrl = `http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${count}/${page}`;
	                //获取设备相关信息
	                //加载数据
	                stream.fetch({
	                    method: 'GET',
	                    url: apiUrl,
	                    type: 'json'
	                }, function(response) {
	                    if (response.data.results.length != 0) {
	                        vm.loading_display = 'hide';
	                        vm.items = vm.items.concat(response.data.results);
	                        vm.api.page = vm.items.length / vm.api.count + 1;
	                    } else {
	                        modal.toast({
	                            'message': '数据为空',
	                            'duration': 2
	                        });
	                    }
	                }, function(response) {
	                    //加载进度
	                });
	            },
	            refresh: function() {
	                this.items = [];
	                this.loadData(10, 1);
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "attr": {
	    "loadmoreoffset": "200"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "classList": [
	        "loading-view"
	      ],
	      "attr": {
	        "display": function () {return this.loading_display}
	      },
	      "events": {
	        "refresh": "refresh"
	      },
	      "children": [
	        {
	          "type": "loading-indicator",
	          "style": {
	            "height": 60,
	            "width": 60
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.items},
	      "children": [
	        {
	          "type": "wxc-list-item",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "padding": 10
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "resize": "cover",
	                    "src": function () {return this.url}
	                  },
	                  "style": {
	                    "width": function () {return (this.devices.width) + 'px'},
	                    "height": 400
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading-view"
	      ],
	      "attr": {
	        "display": function () {return this.loading_display}
	      },
	      "events": {
	        "loading": function ($event) {this.loadData(this.api.count,this.api.page,$event)}
	      },
	      "children": [
	        {
	          "type": "loading-indicator",
	          "style": {
	            "height": 60,
	            "width": 60
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "text": {
	    "fontSize": 30,
	    "color": "#FF0000",
	    "marginLeft": 50,
	    "marginTop": 50
	  },
	  "item": {
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginTop": 20
	  },
	  "loading-view": {
	    "height": 80,
	    "width": 720,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	})
	})

/***/ }
/******/ ]);