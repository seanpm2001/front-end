/*!
 * 
 *   Name: dvsa-front-end/dvsa-manuals
 *   Version: 1.7.2
 *   Timestamp: July 14th 2022, 8:24:34 am
 *   Source: https://github.com/dvsa/front-end
 *
 */!function(){var t,e={3095:function(t,e,n){"use strict";n(142),n(1786),n(5368),n(6964),n(2152),n(4821),n(9103),n(1303),n(3318),n(162),n(3834),n(8416),n(8184),n(147),n(9192),n(1572),n(2139),n(685),n(5535),n(3049),n(6633),n(8989),n(8270),n(4510),n(3984),n(5769),n(55),n(6014),n(851),n(5767),n(9375),n(3533),n(4672),n(4157),n(5095),n(9892),n(4882),n(1520),n(7476),n(9622),n(5115),n(9176),n(8838),n(6059),n(8306),n(191),n(9539),n(823),n(7732),n(6620),n(2850),n(6774),n(1466),n(9357),n(1876),n(6142),n(522),n(8295),n(2e3),n(2310),n(4899),n(8977),n(6997),n(3403),n(2516),n(6479),n(9371),n(5972),n(1889),n(1736),n(6503),n(6786),n(932),n(7526),n(1591),n(9073),n(347),n(579),n(4669),n(7710),n(3514),n(5789),n(9978),n(8472),n(6946),n(5068),n(413),n(2773),n(6409),n(3276),n(8351),n(1784),n(2770),n(2564),n(4633),n(1181),n(5666),n(1798);var r=n(2218),i=n(925);(0,r.domReady)((function(){(0,r.initGDS)(),(0,i.initModules)()}))},1966:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DvsaManualMeta=void 0;var r=n(2218);e.DvsaManualMeta=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.init=function(){e.setupStateFromDOM(),e.updateDOMBasedOnState(),(0,r.delegateEvent)(document,"click","."+e.classnames.linkShowHide,e.onShowHideLinkClick),(0,r.delegateEvent)(document,"click","."+e.classnames.linkTop,e.onTopLinkClick)},this.setupStateFromDOM=function(){e.elements.showHideLinks.forEach((function(t){var n=t.getAttribute(e.attributes.target);if(n){var r=t.getAttribute(e.attributes.openText),i=t.getAttribute(e.attributes.hiddenText);t.setAttribute(e.attributes.aria.controls,n),e.state.historySections.push({targetId:n,showHideLinkElement:t,historyElement:document.querySelector("#"+n),open:!1,openText:r,hiddenText:i})}}))},this.onShowHideLinkClick=function(t){t.preventDefault();var n=t.target.getAttribute(e.attributes.target);n&&e.updateOpenStateOfHistorySection(n,!1,(function(t){e.updateDOMBasedOnState()}))},this.onTopLinkClick=function(t){t.preventDefault();var n=t.target.getAttribute(e.attributes.target);n&&e.updateOpenStateOfHistorySection(n,!0,(function(t){e.updateDOMBasedOnState((function(){t.historyElement.scrollIntoView(!0)}))}))},this.updateOpenStateOfHistorySection=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2];t&&e.state.historySections.forEach((function(i,a){i.targetId===t&&(e.state.historySections[a].open=!!n||!e.state.historySections[a].open,"function"==typeof r&&r(i))}))},this.updateDOMBasedOnState=function(t){e.state.historySections.forEach((function(t){t.showHideLinkElement&&t.historyElement&&(t.showHideLinkElement.innerHTML=t.open?t.openText:t.hiddenText,(0,r.toggleClass)(t.historyElement,e.classnames.openHistory,t.open),t.showHideLinkElement.setAttribute(e.attributes.aria.expanded,t.open),t.open?t.historyElement.removeAttribute(e.attributes.aria.hidden):t.historyElement.setAttribute(e.attributes.aria.hidden,"true"))})),"function"==typeof t&&t()},this.classnames={openHistory:"dvsa-manual-meta__history--open",linkShowHide:"dvsa-manual-meta__link--show-hide",linkTop:"dvsa-manual-meta__link--top-link"},this.elements={links:Array.from(document.querySelectorAll(".dvsa-manual-meta__link")),showHideLinks:Array.from(document.querySelectorAll("."+this.classnames.linkShowHide)),openLinks:Array.from(document.querySelectorAll("."+this.classnames.linkTop))},this.attributes={target:"data-target",openText:"data-open-text",hiddenText:"data-hidden-text",aria:{controls:"aria-controls",expanded:"aria-expanded",hidden:"aria-hidden"}},this.state={historySections:[]},this.elements.links&&this.elements.showHideLinks&&this.elements.openLinks&&this.init()}},1517:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initDvsaManualMeta=void 0;var r=n(1966);e.initDvsaManualMeta=function(){new r.DvsaManualMeta}},925:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initModules=void 0;var r=n(7859),i=n(1517);e.initModules=function(){(0,r.initManualSmartSurvey)(),(0,i.initDvsaManualMeta)()}},7859:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initManualSmartSurvey=void 0;var r=n(590);e.initManualSmartSurvey=function(){new r.ManualSmartSurvey}},590:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ManualSmartSurvey=void 0;var r=n(2218),i=o(n(3493)),a=o(n(2568));function o(t){return t&&t.__esModule?t:{default:t}}e.ManualSmartSurvey=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.init=function(){e.setupAllIframes(),(0,r.addEventListenerToEl)(window,"resize",(0,i.default)(e.updateAllIframes,50)),(0,r.addEventListenerToEl)(window,"scroll",(0,i.default)(e.updateAllIframes,50)),(0,r.addEventListenerToEl)(window,"message",e.onPostMessageReceived)},this.setupAllIframes=function(){e.elements.smartSurveyElements.forEach((function(t){var n=t.getAttribute(e.attributes.heading).trim();n=n.replace(/\n/g,""),e.state.smartsurveys.push({attached:!1,smartSurveyElement:t,src:t.getAttribute(e.attributes.iframeSrc),headingHash:(0,a.default)(n)})})),e.updateAllIframes()},this.updateAllIframes=function(){e.state.smartsurveys&&e.state.smartsurveys.forEach((function(t,n){t.attached||(0,r.isElementInViewport)(t.smartSurveyElement,200)&&(t.smartSurveyElement.innerHTML=e.generateIframeCode(t.src),e.state.smartsurveys[n].attached=!0)}))},this.onPostMessageReceived=function(t){if(t&&t.data){var n=JSON.parse(t.data);if(n.event_id&&n.value&&n.event_id===e.events.smartSurveyRadioClicked&&"No"===n.value){var i=(0,a.default)(n.heading),o=!1;if(e.state.smartsurveys.forEach((function(t){t.headingHash===i&&(o=t)})),!o)return;(0,r.toggleClass)(o.smartSurveyElement,e.classnames.manualSmartSurvey.iframeFeedbackOpen,!0)}}},this.generateIframeCode=function(t){return'\n      <iframe\n        src="'+t+'"\n        frameborder="0"\n        class="'+e.classnames.manualSmartSurvey.iframe+'"\n      ></iframe>\n    '},this.classnames={manualSmartSurvey:{base:"manual-smart-survey",iframe:"manual-smart-survey__iframe",iframeFeedbackOpen:"manual-smart-survey--feedback-open"}},this.attributes={heading:"data-heading",iframeSrc:"data-iframe-src",iframeAttached:"data-iframe-attached"},this.elements={smartSurveyElements:Array.from(document.querySelectorAll("."+this.classnames.manualSmartSurvey.base))},this.events={smartSurveyRadioClicked:"smartsurvey_radio_clicked"},this.state={smartsurveys:[]},this.elements.smartSurveyElements&&0!=this.elements.smartSurveyElements.length&&this.init()}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},4239:function(t,e,n){var r=n(2705),i=n(9607),a=n(2333),o=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?i(t):a(t)}},7561:function(t,e,n){var r=n(7990),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},3279:function(t,e,n){var r=n(9152),i=n(7771),a=n(4841),o=Math.max,s=Math.min;t.exports=function(t,e,n){var u,c,l,f,d,v,m=0,h=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function S(e){var n=u,r=c;return u=c=void 0,m=e,f=t.apply(r,n)}function b(t){return m=t,d=setTimeout(O,e),h?S(t):f}function g(t){var n=t-v;return void 0===v||n>=e||n<0||p&&t-m>=l}function O(){var t=i();if(g(t))return k(t);d=setTimeout(O,function(t){var n=e-(t-v);return p?s(n,l-(t-m)):n}(t))}function k(t){return d=void 0,y&&u?S(t):(u=c=void 0,f)}function w(){var t=i(),n=g(t);if(u=arguments,c=this,v=t,n){if(void 0===d)return b(v);if(p)return clearTimeout(d),d=setTimeout(O,e),S(v)}return void 0===d&&(d=setTimeout(O,e)),f}return e=a(e)||0,r(n)&&(h=!!n.leading,l=(p="maxWait"in n)?o(a(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==d&&clearTimeout(d),m=0,u=v=c=d=void 0},w.flush=function(){return void 0===d?f:k(i())},w}},9152:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),i=n(7005);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(5639);t.exports=function(){return r.Date.now()}},3493:function(t,e,n){var r=n(3279),i=n(9152);t.exports=function(t,e,n){var a=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),r(t,e,{leading:a,maxWait:e,trailing:o})}},4841:function(t,e,n){var r=n(7561),i=n(9152),a=n(3448),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):o.test(t)?NaN:+t}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,t=[],r.O=function(e,n,i,a){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],a=t[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(s=!1,a<o&&(o=a));if(s){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,i,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={973:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,o=n[0],s=n[1],u=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var l=u(r)}for(e&&e(n);c<o.length;c++)a=o[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},n=self.webpackChunkdvsa_front_end=self.webpackChunkdvsa_front_end||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var i=r.O(void 0,[736],(function(){return r(3095)}));i=r.O(i)}();