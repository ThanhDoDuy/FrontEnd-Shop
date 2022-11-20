"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{11645(a,b,c){var d=c(64463),e=c(59753),f=c(65935),g=c(54650);function h(){let a=new URL(document.location.href,window.location.origin),b=new URLSearchParams(a.search);b.set("response_error","true"),window.location.replace(`${window.location.pathname}?${b.toString()}`)}(0,e.on)("remote-input-error","#js-codespaces-repository-select",()=>{let a=document.querySelector("#js-codespaces-unable-load-repositories-warning");a.hidden=!1}),(0,f.AC)(".js-new-codespace-form",async function(a,b){let c=a.closest("[data-replace-remote-form-target]"),d=c.querySelector(".js-new-codespace-submit-button");d instanceof HTMLInputElement&&(d.disabled=!0),a.classList.remove("is-error"),a.classList.add("is-loading");try{let e=await b.html();if(200!==e.status&&h(),c.replaceWith(e.html),"true"===c.getAttribute("data-allow-update-url")){let f=new FormData(document.querySelector("form.js-new-codespace-form"));!function(a){let b=new URL(document.location.href,window.location.origin),c=new URLSearchParams(b.search),d=["vscs_target"];for(let[e,f]of a.entries()){if(d.includes(e)||!f){c.delete(e);continue}c.set(e,f)}window.history.replaceState({},"",`?${c.toString()}`)}(f)}}catch(g){throw h(),g}});let i=null;function j(a){if(i=a,null!==a){let b=document.querySelector(".js-codespace-loading-steps");b.setAttribute("data-current-state",i)}}(0,d.N7)(".js-codespace-loading-steps",{constructor:HTMLElement,add(a){let b=a.getAttribute("data-current-state");b&&j(b)}}),(0,d.N7)(".js-codespace-advance-state",{constructor:HTMLElement,add(a){let b=a.getAttribute("data-state");b&&j(b)}});let k=null;function l(a){let b=document.querySelector(".js-workbench-form-container form");b&&a?(m(b,a),n(b,a),(0,g.Bt)(b)):j("failed")}function m(a,b){let c=a.querySelector(".js-cascade-token");c&&c.setAttribute("value",b)}function n(a,b){let c=a.querySelector(".js-partner-info");if(c){let d=c.getAttribute("value");d&&(d=d.replace("%CASCADE_TOKEN_PLACEHOLDER%",b),c.setAttribute("value",d))}}(0,d.N7)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:g.Bt}),(0,d.N7)(".js-workbench-form-container",{constructor:HTMLElement,add(a){let b=a.querySelector(".js-cascade-token");(function a(b,c){if(""!==c.value){let d=b.querySelector("form");(0,g.Bt)(d)}else{var e;let h=document.querySelector(".js-fetch-cascade-token");e=h,(0,f.AC)(".js-fetch-cascade-token",async function(a,b){try{let c=await b.json(),d=c.json;k=d.token}catch(e){}}),(0,g.Bt)(e),function(a,b,c){let d=document.querySelector(a);if(d){let e=Date.now(),f=()=>{let a=Date.now()-e;if(k||a>=1e4){clearInterval(g),b(k||void 0);return}},g=setInterval(f,50)}}(".js-workbench-form-container",l,1e4)}})(a,b)}});var o=c(76006),p=c(69567),q=c(19146),r=c(75662);function s(a){let b=a.querySelectorAll(".js-toggle-hidden");for(let c of b)c.hidden=!c.hidden;let d=a.querySelectorAll(".js-toggle-disabled");for(let e of d)e.getAttribute("aria-disabled")?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")}async function t(){let a=document.querySelector(".js-codespaces-details-container");a&&(a.open=!1);let b=document.querySelector("new-codespace");if(b&&!b.getAttribute("data-no-submit-on-create"))try{let c=await fetch("/codespaces/new");if(c&&c.ok){let d=(0,r.r)(document,await c.text());b.replaceWith(d)}}catch(e){}}async function u(a,b){let c=document.querySelector(`#${a}`),d=await (0,q.W)({content:c.content.cloneNode(!0),dialogClass:"project-dialog"});return b&&b.setAttribute("aria-expanded","true"),d.addEventListener("dialog:remove",function(){b&&s(b)},{once:!0}),d}async function v(a){let b=await fetch(a.action,{method:a.method,body:new FormData(a),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(b.ok){let c=await b.json();if(c.codespace_url)window.location.href=c.codespace_url,s(a),t(),w();else{let d=a.closest("get-repo")||a.closest("new-codespace");d?(a.setAttribute("data-src",c.loading_url),a.dispatchEvent(new CustomEvent("pollvscode"))):a.closest("create-button")&&(a.setAttribute("data-src",c.loading_url),a.dispatchEvent(new CustomEvent("prpollvscode"))),s(a)}}else if(422===b.status){let e=await b.json();if("concurrency_limit_error"===e.error_type)await u("concurrency-error",a);else{let f=document.querySelector("template.js-flash-template"),g=e.error;f.after(new p.R(f,{className:"flash-error",message:g})),s(a)}}}async function w(){let a=document.querySelector(".js-codespaces-completable"),b=a&&a.getAttribute("data-src");if(!b)return;let c=await fetch(b,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(c.ok){let d=(0,r.r)(document,await c.text());a.replaceWith(d)}else throw Error(`Unexpected response: ${c.statusText}`)}(0,e.on)("submit",".js-toggle-hidden-codespace-form",function(a){let b=a.currentTarget;s(b)}),(0,e.on)("submit",".js-create-codespaces-form-command",function(a){let b=a.currentTarget;b.classList.contains("js-open-in-vscode-form")||(t(),s(b))}),(0,e.on)("submit",".js-open-in-web-form",async function(a){let b=a.currentTarget;a.preventDefault(),b.submit()}),(0,e.on)("submit","form.js-open-in-vscode-form",async function(a){a.preventDefault();let b=a.currentTarget;await v(b)});var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){u("concurrency-error")}};y=x([o.Ih],y);var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class NewCodespaceElement extends HTMLElement{async connectedCallback(){let a=new URL(document.location.href,window.location.origin),b=new URLSearchParams(a.search);b.has("response_error")&&(b.delete("response_error"),window.history.replaceState({},"",`?${b.toString()}`))}toggleLoadingVscode(){let a=this.loadingVscode.hidden,b=this.children;for(let c=0;c<b.length;c++)b[c].hidden=a;this.loadingVscode.hidden=!a}machineTypeSelected(a){let b=a.currentTarget,c=b.getAttribute("data-sku-name");this.skuNameInput&&c&&(this.skuNameInput.value=c),this.advancedOptionsForm&&(0,g.Bt)(this.advancedOptionsForm)}pollForVscode(a){this.toggleLoadingVscode();let b=a.currentTarget.getAttribute("data-src");b&&this.vscodePoller.setAttribute("src",b)}vscsTargetUrlUpdated(a){let b=a.currentTarget;this.vscsTargetUrl.value=b.value}};z([o.fA],A.prototype,"vscsTargetUrl",void 0),z([o.fA],A.prototype,"loadingVscode",void 0),z([o.fA],A.prototype,"vscodePoller",void 0),z([o.fA],A.prototype,"advancedOptionsForm",void 0),z([o.fA],A.prototype,"skuNameInput",void 0),A=z([o.Ih],A);var B=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let C=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}async exportBranch(a){a.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1;let b=await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});b.ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let a=this.getAttribute("data-exported-codespace-url")||"",b=await this.poll(a);if(b){if(b.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let c=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=c}}}async poll(a,b=1e3){if(this.abortPoll?.signal.aborted)return;let c=await fetch(a,{signal:this.abortPoll?.signal});return 202===c.status||404===c.status?(await new Promise(a=>setTimeout(a,b)),this.poll(a,1.5*b)):c}constructor(...a){super(...a),this.abortPoll=null}};B([o.fA],C.prototype,"form",void 0),B([o.fA],C.prototype,"loadingIndicator",void 0),B([o.fA],C.prototype,"viewBranchLink",void 0),C=B([o.Ih],C);var D=c(98249),E=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let F=class OptionsPopoverElement extends HTMLElement{connectedCallback(){let a=document.getElementById("codespaces-dropdown-list");null!=a&&(a.onscroll=()=>this.updateDetailsOnScroll(0,a.scrollTop+window.pageYOffset),document.onscroll=()=>this.updateDetailsOnScroll(0,a?.scrollTop+window.pageYOffset),onresize=()=>this.updateDetailsOnScroll(0,a?.scrollTop+window.pageYOffset))}reset(a){for(a?.preventDefault(),this.dropdownDetails&&(this.dropdownDetails.hidden=!1),this.modalDetails&&(this.modalDetails.hidden=!0),this.exportDetails&&(this.exportDetails.hidden=!0),this.publishDetails&&(this.publishDetails.hidden=!0),this.editorDetails&&(this.editorDetails.hidden=!0),this.skuForm&&(this.skuForm.hidden=!1);this.resultMessage?.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage&&(this.resultMessage.hidden=!0),this.errorMessage&&(this.errorMessage.hidden=!0)}updateDetailsOnScroll(a,b){let c=document.getElementById("codespaces-dropdown-list");if(null!=c){this.reset(void 0);let d=document.querySelectorAll("details");for(let e of d)this.isSubMenu(e)&&e.children[1]&&(b&&b>a?e.children[1].style.marginTop=`-${b}px`:e.children[1].style.marginTop="0px")}}isSubMenu(a){return"options-popover.dropdownDetails"===a.getAttribute("data-target")||"options-popover.editorDetails"===a.getAttribute("data-target")||"options-popover.exportDetails"===a.getAttribute("data-target")||"options-popover.publishDetails"===a.getAttribute("data-target")}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails&&(this.exportDetails.open=!0,this.exportDetails.hidden=!1),this.insertBranchExportComponent()}showEditors(){this.dropdownDetails.hidden=!0,this.editorDetails&&(this.editorDetails.open=!0,this.editorDetails.hidden=!1)}closeEditors(){this.dropdownDetails.open=!0,this.dropdownDetails.hidden=!1,this.editorDetails&&(this.editorDetails.open=!1,this.editorDetails.hidden=!0)}showPublishAndExportModal(){this.dropdownDetails.hidden=!0,this.publishDetails&&(this.publishDetails.open=!0,this.publishDetails.hidden=!1),this.insertBranchExportComponent()}showRenamePrompt(){if(this.renameButton&&this.renameForm&&this.renameInput){let a=this.renameButton.getAttribute("data-rename-prompt"),b=this.renameButton.getAttribute("data-display-name");if(a&&b){let c=prompt(a,b)||null,d=c?.trim();d&&b!==d&&(this.renameInput.value=d,(0,g.Bt)(this.renameForm))}}}async insertBranchExportComponent(){let a=this.querySelector("[data-branch-export-url]");if(!a)return;let b=a.getAttribute("data-branch-export-url");if(!b)return;let c=await (0,D.a)(document,b);c&&(a.innerHTML="",a.appendChild(c))}applyPublishParams(){if(this.publishForm){let a=Object.fromEntries(new FormData(this.publishForm).entries()),b=this.querySelector('[data-target="export-branch.form"]');if(b){let c=`?name=${a.name}&visibility=${a.visibility}`,d=(b.getAttribute("action")||"").split("?")[0]+c;b.setAttribute("action",d)}}}openDeepLink(a){a.preventDefault();let b=a.target,c=b.closest("button")?.getAttribute("data-update-url");c&&window.open(c,"_self"),this.reset(a)}};E([o.fA],F.prototype,"dropdownDetails",void 0),E([o.fA],F.prototype,"modalDetails",void 0),E([o.fA],F.prototype,"settingsModal",void 0),E([o.fA],F.prototype,"skuForm",void 0),E([o.fA],F.prototype,"resultMessage",void 0),E([o.fA],F.prototype,"errorMessage",void 0),E([o.fA],F.prototype,"exportDetails",void 0),E([o.fA],F.prototype,"publishDetails",void 0),E([o.fA],F.prototype,"publishForm",void 0),E([o.fA],F.prototype,"editorDetails",void 0),E([o.fA],F.prototype,"renameButton",void 0),E([o.fA],F.prototype,"renameForm",void 0),E([o.fA],F.prototype,"renameInput",void 0),F=E([o.Ih],F),c(55843),c(82368);var G=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let H=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let a of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))a.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let a of this.vscsTargetUrls)a.value=this.vscsTargetUrl.value}updateLocations(a){let b=a.currentTarget;this.setLocationValues(b.value)}setLocationValues(a){for(let b of this.locations)b.value=a}toggleLocationConfigs(a){for(let b of this.locationConfigs)if(b.getAttribute("data-vscs-target")===a){b.hidden=!1;let c=b.querySelector("option");c&&(c.selected=!0,this.setLocationValues(c.value))}else b.hidden=!0}};G([o.fA],H.prototype,"regionConfig",void 0),G([o.fA],H.prototype,"vscsTarget",void 0),G([o.fA],H.prototype,"vscsTargetUrl",void 0),G([o.GO],H.prototype,"locationConfigs",void 0),G([o.GO],H.prototype,"vscsTargets",void 0),G([o.GO],H.prototype,"vscsTargetUrls",void 0),G([o.GO],H.prototype,"locations",void 0),H=G([o.Ih],H)},54679(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},19146(a,b,c){c.d(b,{W:()=>e});var d=c(59753);async function e(a){let b=document.querySelector("#site-details-dialog"),c=b.content.cloneNode(!0),e=c.querySelector("details"),f=e.querySelector("details-dialog"),g=e.querySelector(".js-details-dialog-spinner");a.detailsClass&&e.classList.add(...a.detailsClass.split(" ")),a.dialogClass&&f.classList.add(...a.dialogClass.split(" ")),a.label?f.setAttribute("aria-label",a.label):a.labelledBy&&f.setAttribute("aria-labelledby",a.labelledBy),document.body.append(c);try{let h=await a.content;g.remove(),f.prepend(h)}catch(i){g.remove();let j=document.createElement("span");j.textContent=a.errorMessage||"Couldn't load the content",j.classList.add("my-6"),j.classList.add("mx-4"),f.prepend(j)}return e.addEventListener("toggle",()=>{e.hasAttribute("open")||((0,d.f)(f,"dialog:remove"),e.remove())}),f}},98249(a,b,c){c.d(b,{D:()=>g,a:()=>f});var d=c(2825),e=c(75662);async function f(a,b,c){let f=new Request(b,c);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);return(0,d.t)((0,d.P)(a),g),(0,e.r)(a,await g.text())}function g(a,b,c=1e3,d=[200]){return async function c(e){let f=new Request(a,b);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(202===g.status)return await new Promise(a=>setTimeout(a,e)),c(1.5*e);if(d.includes(g.status))return g;if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);throw Error(`Unexpected ${g.status} response status from poll endpoint`)}(c)}},54650(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(76177),f=c(54679);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},2825(a,b,c){function d(a){let b=[...a.querySelectorAll("meta[name=html-safe-nonce]")].map(a=>a.content);if(b.length<1)throw Error("could not find html-safe-nonce on document");return b}c.d(b,{P:()=>d,t:()=>f});let e=class ResponseError extends Error{constructor(a,b){super(`${a} for HTTP ${b.status}`),this.response=b}};function f(a,b,c=!1){let d=b.headers.get("content-type")||"";if(!c&&!d.startsWith("text/html"))throw new e(`expected response with text/html, but was ${d}`,b);if(c&&!(d.startsWith("text/html")||d.startsWith("application/json")))throw new e(`expected response with text/html or application/json, but was ${d}`,b);let f=b.headers.get("x-html-safe");if(f){if(!a.includes(f))throw new e("response X-HTML-Safe nonce did not match",b)}else throw new e("missing X-HTML-Safe nonce",b)}},55843(a,b,c){var d=c(76006),e=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let f=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let a=this.closest("details");a&&a.addEventListener("toggle",()=>{a.open&&this.source.focus()})}relayKeydown(a){if((this.isControlTab(a.target)||a.target===this.source)&&("ArrowDown"===a.key||"Tab"===a.key))a.preventDefault(),a.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===a.key){let b=this.closest("details");b&&b.removeAttribute("open")}}isControlTab(a){return!!a&&!!this.control&&Array.from(this.control.children).includes(a)}relayInput(a){if(!a.target)return;let b=a.target,c=b.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:c}))}routeCustomEvent(a){let b=this.sinks[this.selectedIndex];b.dispatchEvent(a)}get selectedIndex(){if(!this.control)return 0;let a=this.control.querySelector('[aria-selected="true"]');return a?Array.from(this.control.children).indexOf(a):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(a){this.source.value=this.storedInput[this.selectedIndex];let b=a.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=b,this.source.setAttribute("aria-label",b),this.notifySelected()}notifySelected(){let a=this.sinks[this.selectedIndex],b=new CustomEvent("tab-selected");a.dispatchEvent(b)}};e([d.fA],f.prototype,"source",void 0),e([d.GO],f.prototype,"sinks",void 0),e([d.fA],f.prototype,"control",void 0),f=e([d.Ih],f)},75662(a,b,c){c.d(b,{r:()=>d});function d(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}},76177(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-911b971","app_assets_modules_github_ref-selector_ts"],()=>b(11645));var c=a.O()}])
//# sourceMappingURL=codespaces-369b94a2ab93.js.map