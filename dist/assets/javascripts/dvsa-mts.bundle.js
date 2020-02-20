/*!
 * 
 *   Name: dvsa-front-end/dvsa-mts
 *   Version: 1.3.24
 *   Contributors: Martin D Marriott <martind@kainos.com>, James Nelson <j.nelson@kainos.com>, Tameem Safi <https://github.com/tameemsafi>
 *   Timestamp: February 20th 2020, 2:44:39 pm
 *   Source: https://github.com/dvsa/front-end
 * 
 */
webpackJsonp([0],{212:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initCheckAll=t.CHECK_ALL_CONFIG=void 0;var i=n(320),r=t.CHECK_ALL_CONFIG={classes:{groupContainer:"js-check-all-group",checkAll:"js-check-all"}};t.initCheckAll=function(){var e=document.querySelectorAll("."+r.classes.groupContainer);if(e){[].concat(s(e)).forEach(function(e){return new i.CheckAll(e)})}}},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FILTER_CONFIG={selectors:{component:".js-filter-wrapper",messageList:".js-message-list",checkboxes:".js-message-filter",filteredView:".js-message-panel",filterNotice:"message-panel__notice"},data:{noFilterNotice:"Select a message type to view",noMessagesNotice:"No messages",messages:"[data-type]"}}},300:function(e,t,n){"use strict";n(47),n(50),n(51),n(53),n(54),n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(64),n(65),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(83),n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(37),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151);var s=n(4),i=n(301);(0,s.domReady)(function(){(0,s.initGDS)(),(0,i.initModules)()})},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initModules=void 0;var s=n(302),i=n(304),r=n(306),o=n(308),a=n(310),l=n(312),c=n(314),u=n(316),d=n(318),f=n(212),m=n(321),g=n(324),h=n(325),p=n(327);t.initModules=function(){(0,s.initCritieraValidation)(),(0,i.initSelectToggle)(),(0,r.initDoubleClickPrevention)(),(0,o.initMarkRepairs)(),(0,a.initShowHideToggle)(),(0,l.initFormDisableDetailsHiddenFields)(),(0,c.initOdometerReading)(),(0,u.initFormDisableOnSubmit)(),(0,d.initMotTestSearch)(),(0,f.initCheckAll)(),(0,m.initMessageFilter)(),(0,g.initMtsLogin)(),(0,h.initTextareaAutoresize)(),(0,p.initCookieManager)()}},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initCritieraValidation=void 0;var s=n(303);t.initCritieraValidation=function(){new s.CriteriaValidation}},303:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CriteriaValidation=void 0;var i=n(4);t.CriteriaValidation=function e(){var t=this;s(this,e),this.init=function(){t.grabCriteriaFromDOM(),t.addEvents()},this.grabCriteriaFromDOM=function(){t.elements.criteriaElements&&t.elements.criteriaElements.forEach(function(e){var n=e.getAttribute(t.attributes.name),s=e.getAttribute(t.attributes.param);n&&t.criteria.push({name:n,param:s,element:e})})},this.addEvents=function(){(0,i.delegateEvent)(document,"keyup",t.selectors.passwordElement,t.checkCriteriaHandler),(0,i.delegateEvent)(document,"paste",t.selectors.passwordElement,t.checkCriteriaHandler),(0,i.delegateEvent)(document,"keypress",t.selectors.passwordElement,t.checkCriteriaHandler)},this.checkCriteriaHandler=function(){if(t.elements.passwordElement){var e=t.elements.passwordElement.value;t.criteria.forEach(function(n){var s=n.name,r=n.param,o=n.element;if(s&&o){t[s](e,r)?((0,i.toggleClass)(o,t.classnames.pass,!0),(0,i.toggleClass)(o,t.classnames.fail,!1)):((0,i.toggleClass)(o,t.classnames.pass,!1),(0,i.toggleClass)(o,t.classnames.fail,!0))}})}},this.hasMixedCase=function(e){return!!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(e)},this.minLength=function(e,t){return!!new RegExp("^.{"+t+",}$").test(e)},this.notMatch=function(e,t){return e===t},this.hasNumeric=function(e){return!!/[0-9]/.test(e)},this.hasUpperCase=function(e){return!!/[A-Z]/.test(e)},this.hasLowerCase=function(e){return!!/[a-z]/.test(e)},this.classnames={neurtal:"criteria__criterion",fail:"criteria__criterion--has-failed",pass:"criteria__criterion--has-passed"},this.attributes={name:"data-criteria",param:"data-criteria-param"},this.selectors={criteriaElement:"["+this.attributes.name+"]",passwordElement:"#password"},this.criteria=[],this.elements={criteriaElements:Array.from(document.querySelectorAll(this.selectors.criteriaElement)),passwordElement:document.querySelector(this.selectors.passwordElement)},this.init()}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initSelectToggle=void 0;var s=n(305);t.initSelectToggle=function(){new s.SelectToggle}},305:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SelectToggle=void 0;var i=n(4);t.SelectToggle=function e(){var t=this;s(this,e),this.init=function(){t.setupInitialStateFromDOM(),(0,i.delegateEvent)(document,"change",t.selectors.selectElements,t.selectChangeHandler)},this.setupInitialStateFromDOM=function(){t.elements.selectElements&&t.elements.selectElements.forEach(function(e){t.updateSelectFieldStateFromDOM(e)})},this.selectChangeHandler=function(e){var n=e.target;n&&t.updateSelectFieldStateFromDOM(n)},this.updateSelectFieldStateFromDOM=function(e){if(e){var n=t.getElementDetails(e);n&&(-1!==n.targetValues.indexOf(e.value)?(n.targetElement.display="block",(0,i.toggleClass)(n.targetElement,t.classnames.jsHidden,!1)):(n.targetElement.display="none",(0,i.toggleClass)(n.targetElement,t.classnames.jsHidden,!0)),t.updateAriaAttributes(e),t.clearAllInputData(e))}},this.getElementDetails=function(e){if(!e)return!1;var n=e.getAttribute(t.attributes.target),s=document.querySelector("#"+n),i=e.getAttribute(t.attributes.targetValue);return!(!n||!s)&&{targetId:n,targetElement:s,targetValues:i.split(",")}},this.updateAriaAttributes=function(e){if(e){var n=t.getElementDetails(e);n&&(e.setAttribute(t.attributes.aria.controls,n.targetId),-1!==n.targetValues.indexOf(e.value)?e.setAttribute(t.attributes.aria.expanded,!0):e.setAttribute(t.attributes.aria.expanded,!1))}},this.clearAllInputData=function(e){var n=Array.from(e.querySelectorAll(t.selectors.inputs));n&&n.forEach(function(e){e.getAttribute(t.attributes.retainValue)||(e.value="")})},this.classnames={jsHidden:"js-hidden"},this.attributes={target:"data-target",targetValue:"data-target-value",retainValue:"retain-value",aria:{controls:"aria-controls",hidden:"aria-hidden",expanded:"aria-expanded"}},this.selectors={selectElements:"select["+this.attributes.target+"]",inputs:'textarea:not([value=""]), input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'},this.elements={selectElements:Array.from(document.querySelectorAll(this.selectors.selectElements))},this.init()}},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initDoubleClickPrevention=void 0;var s=n(307);t.initDoubleClickPrevention=function(){new s.DoubleClickPrevention}},307:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DoubleClickPrevention=void 0;var i=n(46),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=n(4);t.DoubleClickPrevention=function e(){var t=this;s(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,o.delegateEvent)(document,"submit",t.selectors.preventDoubleClickForm,t.submitFormHandler)},this.submitFormHandler=function(e){var n=(0,r.default)(JSON.stringify(e));if(-1===t.state.validatedForms.indexOf(n)){var s=e.target.getAttribute(t.attributes.submitButtonId),i=document.querySelector("#"+s);i&&i.setAttribute(t.attributes.disabled,t.attributes.disabled)}else e.preventDefault()},this.classnames={preventDoubleClickForm:"prevent-double-click-form"},this.attributes={submitButtonId:"submit-button-id",disabled:"disabled"},this.selectors={preventDoubleClickForm:"."+this.classnames.preventDoubleClickForm},this.state={validatedForms:[]}}},308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMarkRepairs=void 0;var s=n(309);t.initMarkRepairs=function(){new s.MarkRepairs}},309:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MarkRepairs=void 0;var i=n(204),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=n(4);t.MarkRepairs=function e(){var t=this;s(this,e),this.init=function(){t.addEvents()},this.addEvents=function(){(0,o.delegateEvent)(document,"click",t.selectors.buttonMarkRepaired,t.markRepairedButtonClickHandler)},this.markRepairedButtonClickHandler=function(e){e.preventDefault();var n=e.target;if(n){n.disabled=!0;var s=(0,o.closestParentOfEl)(n,t.selectors.rfrForm),i=(0,o.closestParentOfEl)(n,t.selectors.rfrItem),a=i.querySelector(t.selectors.itemStatus);if(!s||!i||!a)return console.warn("Could not find RFR form, RFR item and status DOM elements");var l=s.getAttribute(t.attributes.action)||n.getAttribute(t.attributes.url),c=(0,o.serializeForm)(s)||n.getAttribute(t.attributes.form);if(!l||!c)return console.warn("Could not find route URL or form data");(0,o.toggleClass)(i,t.classnames.hasStatus,!0),(0,o.toggleClass)(i,t.classnames.hasSuccess,!1),a.textContent=t.messages.loading;var u='That didn\'t work, <a class="js-buttonMarkRepaired" href="" data-url="'+l+'" data-form="'+c+'">try again</a>',d={headers:{"X-Requested-With":"XMLHttpRequest"}};r.default.post(l,c,d).then(function(e){var s=e.data;s&&s.success?((0,o.toggleClass)(i,t.classnames.hasStatus,!1),(0,o.toggleClass)(i,t.classnames.hasSuccess,s.action===t.responseActions.repair),t.updateCount(s.defectType,s.action),t.updateBrakeTest(s.brakeTestOutcome,s.brakesTested,s.brakeTestResults,s.disableSubmitButton),n.disabled=!1):a.innerHTML=u}).catch(function(e){a.innerHTML=u,n.disabled=!1})}},this.updateCount=function(e,n){switch(e){case"advisory":t.updateCountForAllElements(t.elements.numberOfAdvisories,n);break;case"minor":t.updateCountForAllElements(t.elements.numberOfMinors,n);break;case"failure":t.updateCountForAllElements(t.elements.numberOfFailures,n);break;default:return console.warn("Invalid type")}},this.updateCountForAllElements=function(e,n){e&&Array.isArray(e)&&e.forEach(function(e){t.updateCountForElement(e,n)})},this.updateCountForElement=function(e,n){if(e){var s=parseInt(e.textContent)||0;n===t.responseActions.repair?s--:s++,e.textContent=s}},this.updateBrakeTest=function(e,n,s,i){if(!t.elements.actionPanel)return console.warn("Could not find brake tests action panel");t.elements.brakeTest.testStatus&&(t.elements.brakeTest.testStatus.textContent=e),t.elements.brakeTest.actions&&(!0===n&&!0===s?(0,o.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!1):(0,o.toggleClass)(t.elements.brakeTest.actions,t.classnames.uHidden,!0)),t.elements.brakeTest.addBrakeTest&&(!1===n||!0===s?(0,o.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!0):(0,o.toggleClass)(t.elements.brakeTest.addBrakeTest,t.classnames.uHidden,!1)),t.elements.brakeTest.summary&&!1===n&&t.elements.brakeTest.summary.remove(),t.elements.brakeTest.reviewTestButton&&(t.elements.brakeTest.reviewTestButton.disabled=!0===i)},this.classnames={uHidden:"u-hidden",hasStatus:"has-status",hasSuccess:"has-success"},this.attributes={disabled:"disabled",action:"action",url:"data-url",form:"data-form"},this.selectors={brakeTest:{actionPanel:".js-brakeTestActionPanel",testStatus:".js-brakeTestStatus",addBrakeTest:".js-addBrakeTest",actions:".js-brakeTestActions",reviewTestButton:".js-reviewTestButton",summary:".js-brakeTestSummary"},numberOfFailures:".js-numberOfFailures",numberOfAdvisories:".js-numberOfAdvisories",numberOfMinors:".js-numberOfMinors",buttonMarkRepaired:".js-buttonMarkRepaired",rfrForm:".js-rfrForm",rfrItem:".js-rfrItem",itemStatus:".js-itemStatus"},this.elements={brakeTest:{testStatus:document.querySelector(this.selectors.brakeTest.testStatus),addBrakeTest:document.querySelector(this.selectors.brakeTest.addBrakeTest),actions:document.querySelector(this.selectors.brakeTest.actions),reviewTestButton:document.querySelector(this.selectors.brakeTest.reviewTestButton),summary:document.querySelector(this.selectors.brakeTest.summary)},actionPanel:document.querySelector(this.selectors.brakeTest.actionPanel),numberOfFailures:Array.from(document.querySelectorAll(this.selectors.numberOfFailures)),numberOfAdvisories:Array.from(document.querySelectorAll(this.selectors.numberOfAdvisories)),numberOfMinors:Array.from(document.querySelectorAll(this.selectors.numberOfMinors))},this.responseActions={repair:"repair"},this.messages={loading:"Loading"},this.init()}},310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initShowHideToggle=void 0;var s=n(311);t.initShowHideToggle=function(){new s.ShowHideToggle}},311:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ShowHideToggle=void 0;var i=n(4);t.ShowHideToggle=function e(){var t=this;s(this,e),this.init=function(){t.setupInitialStateFromDOM(),t.addEvents()},this.setupInitialStateFromDOM=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach(function(e){var n=t.getElementDetails(e);if(n){var s=n.targetState!==t.targetStates.open;s?(n.toggleType!==t.toggleTypes.responsive&&n.targetElement?(0,i.toggleClass)(n.targetElement,t.classnames.jsHidden,s):(0,i.toggleClass)(n.targetElement,t.classnames.hideSmall,s),n.toggleType===t.toggleTypes.class&&n.targetElements&&n.targetElements.forEach(function(e){(0,i.toggleClass)(e,t.classnames.jsHidden,s)})):((0,i.toggleClass)(n.targetElement,t.classnames.jsHidden,!1),e.textContent=n.openedText)}})},this.addEvents=function(){(0,i.delegateEvent)(document,"click",t.selectors.showHideToggle,t.showHideToggleClickHandler)},this.showHideToggleClickHandler=function(e){e.target,e.preventDefault(),t.updateElementState(e.target)},this.updateElementState=function(e){if(e){var n=t.getElementDetails(e);if(n){var s=n.targetState===t.targetStates.closed;if(n.toggleType===t.toggleTypes.responsive&&n.targetElement?(0,i.toggleClass)(n.targetElement,t.classnames.hideSmall,!s):(0,i.toggleClass)(n.targetElement,t.classnames.jsHidden,!s),n.toggleType===t.toggleTypes.class&&n.targetElements&&n.targetElements.forEach(function(e){(0,i.toggleClass)(e,t.classnames.jsHidden,!s)}),e.setAttribute(t.attributes.targetState,s?t.targetStates.open:t.targetStates.closed),t.updateAllShowHideToggles(),n.targetId){var r=document.querySelector("#"+n.targetId+"Parent");r&&r.scrollIntoView(!0)}}}},this.updateAllShowHideToggles=function(){t.elements.showHideToggles&&t.elements.showHideToggles.forEach(function(e){var n=t.getElementDetails(e);if(n){var s=n.targetState===t.targetStates.closed;e.textContent=s?n.closedText:n.openedText,n.diableToggleSwitchClass||((0,i.toggleClass)(e,t.classnames.toggleSwitch,!s),(0,i.toggleClass)(e,t.classnames.toggleSwitchOpen,s))}})},this.getElementDetails=function(e){if(e){var n=e.getAttribute(t.attributes.openedText),s=e.getAttribute(t.attributes.closedText),i=e.getAttribute(t.attributes.target),r=e.getAttribute(t.attributes.toggleType),o=!!i&&document.querySelector("#"+i),a=e.getAttribute(t.attributes.targetState),l=e.getAttribute(t.attributes.toggleClass),c=e.getAttribute(t.attributes.initialState),u=!(r!==t.toggleTypes.class||!l)&&Array.from(document.querySelectorAll("."+l)),d=e.getAttribute(t.attributes.disableToggleSwitchClass);if(o||u)return{openedText:n,closedText:s,targetId:i,toggleType:r,targetElement:o,targetState:a,toggleClass:l,initialState:c,targetElements:u,disableToggleSwitchClass:d}}},this.classnames={jsHidden:"js-hidden",hideSmall:"hide-small",toggleSwitch:"toggle-switch",toggleSwitchOpen:"toggle-switch--open"},this.attributes={targetState:"data-target-state",openedText:"data-opened-text",target:"data-target",toggleType:"data-toggle-type",closedText:"data-closed-text",toggleClass:"data-toggle-class",disableToggleSwitchClass:"data-disable-toggle-switch-class",initialState:"data-initial-state"},this.targetStates={closed:"closed",open:"open"},this.selectors={showHideToggle:'[data-action="showHideToggle"]'},this.elements={showHideToggles:Array.from(document.querySelectorAll(this.selectors.showHideToggle))},this.toggleTypes={responsive:"responsive",class:"class"},this.init()}},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableDetailsHiddenFields=void 0;var s=n(313);t.initFormDisableDetailsHiddenFields=function(){new s.FormSubmitDisableDetailsHiddenFields}},313:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmitDisableDetailsHiddenFields=void 0;var i=n(4);t.FormSubmitDisableDetailsHiddenFields=function e(){var t=this;s(this,e),this.init=function(){(0,i.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit)},this.onFormSubmit=function(e){if(!e.target||!e.target.getAttribute(t.attributes.ignoreFormDisableDetails)){var n=Array.from(document.querySelectorAll(t.selectors.details));n&&Array.isArray(n)&&n.forEach(function(e){if(e){var n=Array.from(e.querySelectorAll("input"));n&&Array.isArray(n)&&n.forEach(function(e){e&&(0,i.isElementHidden)(e)&&e.setAttribute(t.attributes.disabled,t.attributes.disabled)})}})}},this.selectors={form:"form",details:"details"},this.attributes={disabled:"disabled",ignoreFormDisableDetails:"data-ignore-form-disable-details"},this.init()}},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initOdometerReading=void 0;var s=n(315);t.initOdometerReading=function(){new s.OdometerReading}},315:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.OdometerReading=void 0;var i=n(4);t.OdometerReading=function e(){var t=this;s(this,e),this.init=function(){(0,i.delegateEvent)(document,"click",t.selectors.unknown,t.onUnknownOrNoOdometerClick),(0,i.delegateEvent)(document,"click",t.selectors.noOdometer,t.onUnknownOrNoOdometerClick),(0,i.delegateEvent)(document,"click",t.selectors.odometer,t.onOdometerClick)},this.onUnknownOrNoOdometerClick=function(e){t.elements.odometer.value=""},this.onOdometerClick=function(e){t.elements.odoInputRadio.click()},this.selectors={unknown:".js-unknown",noOdometer:".js-noOdometer",odometer:".js-odometer",odoInputRadio:".js-odoInputRadio"},this.elements={odometer:document.querySelector(this.selectors.odometer),odoInputRadio:document.querySelector(this.selectors.odoInputRadio)},this.elements.odometer&&this.elements.odoInputRadio&&this.init()}},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFormDisableOnSubmit=void 0;var s=n(317);t.initFormDisableOnSubmit=function(){new s.FormDisableOnSubmit}},317:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FormDisableOnSubmit=void 0;var i=n(4);t.FormDisableOnSubmit=function e(){var t=this;s(this,e),this.init=function(){(0,i.delegateEvent)(document,"submit",t.selectors.form,t.onFormSubmit),t.setupAllFormsInState()},this.setupAllFormsInState=function(){t.elements.forms&&t.elements.forms.forEach(function(e){t.state.forms.push({element:e,submitted:!1}),e.setAttribute(t.attributes.formStateIndex,t.state.forms.length-1)})},this.onFormSubmit=function(e){if(e&&e.target&&!e.target.getAttribute(t.attributes.ignoreFormDisableSubmitButton)){var n=e.target,s=n.getAttribute(t.attributes.formStateIndex),i=t.state.forms[s]||!1,r=n.querySelector(t.selectors.submitButton);if(r&&i&&!i.submitted){var o=r.getAttribute(t.attributes.value),a=r.getAttribute(t.attributes.name),l=document.createElement("input");l.type="hidden",l.name=a,l.value=o,r.parentNode.appendChild(l),r.name="",r.setAttribute(t.attributes.disabled,t.attributes.disabled),t.state.forms[s].submitted=!0}}},this.selectors={form:"form",submitButton:'input[type="submit"]'},this.attributes={disabled:"disabled",value:"value",name:"name",formStateIndex:"data-form-state-index",ignoreDisableFormSubmit:"data-ignore-form-disable-submit-button"},this.elements={forms:Array.from(document.querySelectorAll(this.selectors.form))},this.state={forms:[]},this.init()}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMotTestSearch=void 0;var s=n(319);t.initMotTestSearch=function(){new s.MOTTestSearch}},319:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MOTTestSearch=void 0;var i=n(4);t.MOTTestSearch=function e(){var t=this;s(this,e),this.init=function(){(0,i.addEventListenerToEl)(t.elements.type,"change",t.updateFormBasedOnTypeValue),t.updateFormBasedOnTypeValue()},this.updateFormBasedOnTypeValue=function(){t.elements.vtsSearch.setAttribute(t.attributes.placeholder,t.messages.placeholders[t.elements.type.value]),t.elements.searchValueLabelText.innerText=t.messages.inputLabels[t.elements.type.value],t.elements.form.setAttribute(t.attributes.action,t.state.baseUrl+"/"+t.elements.type.value),-1!==[t.state.typeOptions.vtsDate,t.state.typeOptions.tester].indexOf(t.elements.type.value)?t.elements.dateRangeFields.style.display="block":t.elements.dateRangeFields.style.display="none"},this.elements={form:document.querySelector("#vts-search-form"),type:document.querySelector("#type"),dateRangeFields:document.querySelector("#dateRangeFields"),dates:{month1:document.querySelector("#month1"),year1:document.querySelector("#year1"),month2:document.querySelector("#month2"),year2:document.querySelector("#year2")},searchFieldRow:document.querySelector("#search-field-row"),searchValueLabel:document.querySelector("#search-value-label"),searchValueLabelText:document.querySelector("#search-value-label-text"),vtsSearch:document.querySelector("#vts-search")},this.attributes={baseUrl:"data-base-url",action:"action",placeholder:"placeholder"},this.state={baseUrl:"",typeOptions:{vts:"vts",vtsDate:"vtsDate",tester:"tester",vrm:"vrm",vin:"vin",testNumber:"testNumber"}},this.messages={placeholders:{vts:"eg. V12345",vtsDate:"eg. V12345",tester:"enter username",vrm:"eg. VK02 MOT",vin:"eg. WV1ZZZ8ZH6H091596",testNumber:"eg. 999999999014"},inputLabels:{vts:"Site name",vtsDate:"Site name",tester:"Tester name",vrm:"Vehicle registration",vin:"Vehicle VIN",testNumber:"MOT test number"}},this.elements.form&&(this.state.baseUrl=this.elements.form.getAttribute(this.attributes.baseUrl),this.init())}},320:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckAll=void 0;var r=n(15),o=n(212);t.CheckAll=function e(t){var n=this;if(i(this,e),this.init=function(){n.state.elements.count=n.countNumOfCheckboxItems(),n.state.elements.checkboxes.forEach(function(e){return(0,r.addEventListenerToEl)(e,"change",n.toggleChecks)})},this.toggleChecks=function(e){var t=o.CHECK_ALL_CONFIG.classes.checkAll,s=e.target.classList.contains(t),i=n.countCheckedItems();if(s||i==n.state.elements.count)return n.selectAllToggleState();n.state.allChecked=!1,n.state.elements.allTarget.checked=!1},this.selectAllToggleState=function(){n.state.allChecked=!n.state.allChecked,n.state.elements.allTarget.checked=n.state.allChecked,n.state.elements.checkboxes.map(function(e){return e.checked=n.state.allChecked})},this.countNumOfCheckboxItems=function(){return n.state.elements.checkboxes.filter(n.excludeCheckAll).length},this.countCheckedItems=function(){return n.state.elements.checkboxes.filter(n.excludeCheckAll).filter(function(e){return e.checked}).length},this.excludeCheckAll=function(e){if(!e.classList.contains(o.CHECK_ALL_CONFIG.classes.checkAll))return e},t){var a=t.querySelectorAll("input"),l=[].concat(s(a)),c=t.querySelector("."+o.CHECK_ALL_CONFIG.classes.checkAll);this.state={allChecked:!1,elements:{allTarget:c,checkboxes:l,count:0}},this.init()}}},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initMessageFilter=void 0;var s=n(322);n(213),t.initMessageFilter=function(){var e=document.querySelectorAll(".js-filter-wrapper"),t=void 0;if(!(e.length<1))for(t=0;t<e.length;++t)new s.MessagesFilter(e[t])}},322:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesFilter=void 0;var r=n(213),o=n(200),a=n(323),l=(t.MessagesFilter=function e(t){if(i(this,e),l.call(this),t){var n=t,o=document.querySelector(".js-message-list"),a=[].concat(s(n.querySelectorAll(r.FILTER_CONFIG.selectors.checkboxes))),c=[].concat(s(o.querySelectorAll(r.FILTER_CONFIG.data.messages))),u=n.querySelector(r.FILTER_CONFIG.selectors.filteredView),d=document.querySelector(r.FILTER_CONFIG.selectors.messageList),f=document.createElement("p");f.classList.add(""+r.FILTER_CONFIG.selectors.filterNotice),f.style.display="none",d.parentNode.insertBefore(f,d),this.elements={component:n,checkboxes:a,messageList:o,messageItems:c,filteredView:u,filterNoticeTarget:d};var m=this.elements.checkboxes.map(function(e){return e.attributes["data-type"].value});this.state={allFilters:m,currFilters:m},this.init()}},function(){var e=this;this.init=function(){Array.from(e.elements.checkboxes).forEach(function(t){(0,o.addEventListenerToEl)(t,"change",e.handleCheck)}),"sn"==(0,a.getQueryVariable)("filter")&&e.filterSpecialNotices(),e.handleCheck()},this.filterSpecialNotices=function(){var t=[];e.elements.checkboxes.forEach(function(e){e.checked=!1,"Special notice"==e.attributes["data-type"].value&&(e.checked=!0),t.push("Special notice")}),e.state.currFilters=t,e.filterMessages(e.state.currFilters)},this.handleCheck=function(t){var n=[],s=[],i=!0;e.elements.checkboxes.forEach(function(e){if(e.checked){var t=e.attributes["data-type"].value;n.push(t);var i=e.attributes["data-filter"].value;s.push(i)}}),n.length===e.elements.checkboxes.length&&(i=!1),e.state.currFilters=n,e.filterMessages(e.state.currFilters),i?e.updateMessageLinks(s.join("+")):e.updateMessageLinks()},this.filterMessages=function(t){var n=Array.from(e.elements.messageItems),s=0;n.forEach(function(e){var n=e.attributes["data-type"].value;t.includes(n)?e.classList.remove("hidden"):(e.classList.add("hidden"),s++)});var i=document.querySelector(".message-panel__notice");i.style.display="none",0===e.state.currFilters.length?(i.innerHTML=r.FILTER_CONFIG.data.noFilterNotice,i.style.display="block"):0!==n.length&&n.length!==s||(i.innerHTML=r.FILTER_CONFIG.data.noMessagesNotice,i.style.display="block")},this.updateMessageLinks=function(t){e.elements.messageItems.forEach(function(e){Array.from(e.querySelectorAll("a")).forEach(function(e){var n=e.href;n=n.split("?")[0],t&&(n=n+"?filter="+t),e.href=n})})}})},323:function(e,t,n){"use strict";function s(e){for(var t=window.location.search.substring(1),n=t.split("&"),s=0;s<n.length;s++){var i=n[s].split("=");if(i[0]==e)return i[1]}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryVariable=s},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initMtsLogin=function(){var e=document.querySelector(".js-password-behaviour"),t=function(){""===e.value?e.style.color="#FFF":e.style.color="#000"};e&&(e.onkeypress=function(e){if("Enter"===e.key)return document.getElementById("Login").submit(),!1},e.oncontextmenu=function(e){void 0!==e.preventDefault&&e.preventDefault(),void 0!==e.stopPropagation&&e.stopPropagation()},e.onkeydown=function(e){if(("c"===e.key||"x"===e.key)&&(e.metaKey||e.ctrlKey))return!1},e.onpaste=function(n){var s=void 0,i=void 0;n.stopPropagation(),n.preventDefault(),s=n.clipboardData||window.clipboardData,void 0!==s&&(i=s.getData("Text"),e.value=i.replace(/\n/g,"").replace(/\v/g,"").replace(/\f/g,"").replace(/\r/g,"")),t()},e.ondragstart=function(e){return e.preventDefault()},e.oncopy=function(e){return!1},e.oncut=function(e){return!1},e.onfocus=function(e){t()},e.oninput=function(e){t()})}},325:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initTextareaAutoresize=void 0;var s=n(326);t.initTextareaAutoresize=function(){new s.TextareaAutoresize}},326:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.TextareaAutoresize=function(){function e(){s(this,e),this.init()}return i(e,[{key:"init",value:function(){document.querySelectorAll("textarea.autoresize").forEach(function(t){t.style.boxSizing="border-box";var n=t.offsetHeight-t.clientHeight;e.resize(t,n),t.addEventListener("input",function(){e.resize(t,n)})})}}],[{key:"resize",value:function(e,t){e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}]),e}()},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initCookieManager=void 0;var s=n(328);t.initCookieManager=function(){new s.CookieManager}},328:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CookieManager=void 0;var i=n(329),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.CookieManager=function e(){s(this,e),r.default.init(cookieManagerConfig)}},329:function(e,t,n){"use strict";var s=function(){"undefined"==typeof console&&(console={log:function(){},info:function(){},debug:function(){},warn:function(){},error:function(){}});var e={"delete-undefined-cookies":!0,"user-preference-cookie-name":"cm-user-preferences","user-preference-cookie-secure":!1,"user-preference-cookie-expiry-days":365,"user-preference-configuration-form-id":!1,"user-preference-saved-callback":!1,"cookie-banner-id":!1,"cookie-banner-visibility-class":"hidden","cookie-banner-visible-on-page-with-preference-form":!0,"cookie-manifest":[]},t=function(t){var s=e;for(var i in t)s[i]=t[i];console.debug(s),n(s),l(s),h(s)},n=function(e){var t=e["user-preference-cookie-name"],n=s(t);n||console.info("User preference cookie is not set or valid. This cookie defines user preferences. Assuming non-consent, and deleting all non-essential cookies if config allows.");var r=decodeURIComponent(document.cookie).split(";");if(1!==r.length||!r[0].match(/^ *$/)){for(var a=0;a<r.length;a++){var l=r[a].split(/=(.*)/)[0].trim();if(l!==t){var c=i(l,e);!1!==c?!1!==c.optional?n&&!1!==n.hasOwnProperty(c["category-name"])?"off"!==n[c["category-name"]]&&"false"!==n[c["category-name"]]?console.info('Cookie "'+l+'" is listed under category "'+c["category-name"]+'"; user preferences opts in-to this category; cleared for use.'):(console.info('Cookie "'+l+'" is listed under category "'+c["category-name"]+'"; user preferences opts out of this category; deleting.'),o(l)):(console.info('Cookie "'+l+'" is listed  Cannot find category "'+c.category_name+'" in user preference cookie "'+t+'"; assuming non-consent; deleting.'),o(l)):console.debug('Cookie "'+l+'" is marked as non-optional; skipping.'):e["delete-undefined-cookies"]?(console.info('Cookie "'+l+'" is not in the manifest and "delete-undefined-cookies" is enabled; deleting.'),o(l)):console.info('Cookie "'+l+'" is not in the manifest and "delete-undefined-cookies" is disabled; skipping.')}}console.debug("Finishing processing all cookies.")}},s=function(e){var t=r(e);if(!t)return!1;try{return JSON.parse(t)}catch(t){return console.error('Unable to parse user preference cookie "'+e+'" as JSON.',t),!1}},i=function(e,t){for(var n=t["cookie-manifest"],s=0;s<n.length;s++)for(var i=n[s].cookies,r=0;r<i.length;r++){var o=i[r];if(e.startsWith(o))return console.debug('Cookie "'+e+'" found in manifest.'),n[s]}return console.debug('Cookie "'+e+'" NOT found in manifest.'),!1},r=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie),s=n.split(";"),i=0;i<s.length;i++){for(var r=s[i];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return!1},o=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;",document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+window.location.hostname+";path=/;",document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=."+window.location.hostname+";path=/;";var t=window.location.hostname.indexOf("."),n=window.location.hostname.substring(t);document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+n+";path=/;",document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=."+n+";path=/;",console.debug(window.location.hostname),console.debug(n),console.debug('Deleted cookie "'+e+'"')},a=function(e,t){var n=e["user-preference-cookie-name"],s=b(e,"user-preference-cookie-secure"),i=365;y(e,"user-preference-cookie-expiry-days")&&(i=e["user-preference-cookie-expiry-days"]);var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var o="expires="+r.toUTCString(),a=n+"="+encodeURIComponent(t)+";"+o+";path=/";s&&(a+=";secure"),document.cookie=a},l=function e(t){if(!k(t,"user-preference-configuration-form-id"))return void console.debug("Skipping binding to user cookie preference form.");if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",function(){e(t)}),void console.debug("DOM is not ready; adding event to bind to form when ready.");var s=c(t);null!==s&&(s.addEventListener("submit",function(e){d(e,t),n(t),p(t)}),console.debug('Found and bound to cookie preference form with ID "'+t["user-preference-configuration-form-id"]+'".'),u(t))},c=function(e){return document.getElementById(e["user-preference-configuration-form-id"])},u=function(e){if(v(e,"set-checkboxes-in-preference-form"))return void console.log("Skipping set preferences in form");var t=c(e);if(null!==t){var n=s(e["user-preference-cookie-name"]);for(var i in n)for(var r=t.querySelectorAll('input[name="'+i+'"]'),o=0;o<r.length;o++)n.hasOwnProperty(i)&&(r[o].checked=r[o].value===n[i])}},d=function(e,t){e.preventDefault(),console.debug("Saving user cookie preferences from Form...");for(var n=document.getElementById(t["user-preference-configuration-form-id"]),s=n.querySelectorAll('input[type="radio"]:checked'),i={},r=0;r<s.length;r++){var o=s.item(r),a=o.getAttribute("name"),l=o.getAttribute("value");console.log("Processing Radio: "+a+" = "+l+")}",r),i[o.getAttribute("name")]=o.getAttribute("value")}m(t,i),!1!==t["user-preference-saved-callback"]&&"function"==typeof t["user-preference-saved-callback"]&&t["user-preference-saved-callback"]()},f=function(e,t){e.preventDefault(),console.debug("Saving user cookie preferences from Cookie Banner (accept all)...");for(var n={},s=0;s<t["cookie-manifest"].length;s++){var i=t["cookie-manifest"][s];i.optional&&(n[i["category-name"]]="on")}m(t,n)},m=function(e,t){a(e,JSON.stringify(t)),console.debug("Saved user cookie preferences to cookie",r(e["user-preference-cookie-name"]))},g=function(e,t){null!==e&&e.addEventListener("click",function(e){f(e,t),n(t),p(t)})},h=function e(t){if(!k(t,"cookie-banner-id")&&!k(t,"cookie-banner-visibility-class"))return void console.debug("Skipping binding to cookie banner as both cookie-banner-id and cookie-banner-visibility-class are not defined");if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",function(){e(t)}),void console.debug("DOM is not ready; adding event to bind to cookie banner when ready.");var n=document.getElementById(t["cookie-banner-id"]),s=document.querySelector('button[type="submit"]');null!==n&&(g(s,t),console.debug('Found and bound to cookie banner with ID "'+t["cookie-banner-id"]+'".'),p(t))},p=function(e){var t=document.getElementById(e["cookie-banner-id"]),n=e["cookie-banner-visibility-class"];if(null===t||null===n)return void console.error("Cannot work with cookie banner unless cookie-banner-id and cookie-banner-visibility-class are configured.");var i=document.getElementById(e["user-preference-configuration-form-id"]),r=e["cookie-banner-visible-on-page-with-preference-form"],o=e["user-preference-cookie-name"];s(o)?t.classList.contains(n)||(t.classList.add(n),console.debug("Cookie banner was set to visible.")):null!==i&&!1===r?t.classList.add(n):(t.classList.remove(n),console.debug("Cookie banner was set to visible."))},b=function(e,t){return e.hasOwnProperty(t)&&!0===e[t]},v=function(e,t){return!e.hasOwnProperty(t)||!1===e[t]},y=function(e,t){return e.hasOwnProperty(t)&&!isNaN(e[t])},k=function(e,t){return e.hasOwnProperty(t)&&"string"==typeof e[t]&&""!==e[t].trim()};return{init:t}}();e.exports=s}},[300]);