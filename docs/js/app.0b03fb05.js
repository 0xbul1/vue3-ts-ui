(function(e){function t(t){for(var r,o,l=t[0],c=t[1],i=t[2],b=0,f=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0545":function(e,t,n){},"60de":function(e,t,n){},6861:function(e,t,n){},8398:function(e,t,n){},"935e":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app"},u={class:"app-container"},o=Object(r["d"])("pre",null," ------input start------",-1),l=Object(r["d"])("pre",null," ------input end------",-1),c=Object(r["d"])("pre",null," ------form start------",-1),i=Object(r["d"])("pre",null," ------form end------",-1),d=Object(r["d"])("pre",null," ------tabs start------",-1),b=Object(r["d"])("pre",null," ------tabs end------",-1),f=Object(r["d"])("pre",null,"\n\n                                                                                           ------to be continued------\n      ",-1);function s(e,t,n,s,m,p){var j=Object(r["n"])("input-demo"),O=Object(r["n"])("form-demo"),v=Object(r["n"])("tabs-demo");return Object(r["j"])(),Object(r["b"])("div",a,[Object(r["d"])("div",u,[o,Object(r["d"])(j),l,c,Object(r["d"])(O),i,d,Object(r["d"])(v),b,f])])}var m={class:"demo-box"};function p(e,t){var n=Object(r["n"])("ft-input");return Object(r["j"])(),Object(r["b"])("div",m,[Object(r["d"])("p",null,"text:"+Object(r["o"])(e.text),1),Object(r["d"])(n,{placeholder:"请输入XXX",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.text=t})},null,8,["modelValue"])])}n("caad");var j="formKey",O="formItemKey",v=(n("935e"),Object(r["e"])({name:"FtInput",inheritAttrs:!1,props:{modelValue:{type:String,default:""},type:{validator:function(e){return["text","password","number","tel","textarea","time"].includes(e)},default:"text:"}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,a=t.attrs,u=Object(r["g"])(O),o=function(t){var r=t.target.value;r!==e.modelValue&&(n("update:modelValue",r),null===u||void 0===u||u.handlerControlChange(r))},l=function(){null===u||void 0===u||u.handlerControlBlur(e.modelValue)};return function(){return Object(r["d"])("div",{class:"ft-field-wrap"},[Object(r["d"])("input",{placeholder:a.placeholder,class:"ft-field",type:e.type,onInput:o,onBlur:l,value:e.modelValue,autocomplete:"new-password"},null)])}}})),h=Object(r["e"])({name:"InputDemo",components:{FtInput:v},setup:function(e,t){t.emit;var n=Object(r["m"])("aaa");return{text:n}}});h.render=p;var g=h,y=(n("b0c0"),{class:"demo-box"}),V=Object(r["d"])("button",{type:"submit"},"提交按钮",-1);function w(e,t){var n=Object(r["n"])("ft-input"),a=Object(r["n"])("ft-form-item"),u=Object(r["n"])("ft-form");return Object(r["j"])(),Object(r["b"])("div",y,[Object(r["d"])(u,{model:e.formValues,rules:e.formRules,ref:"FtForm",onValidate:e.handleValidate},{default:Object(r["r"])((function(){return[Object(r["d"])(a,{label:"姓名",prop:"name",rules:e.nameRules},{default:Object(r["r"])((function(){return[Object(r["d"])(n,{placeholder:"请输入XXX",modelValue:e.formValues.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formValues.name=t})},null,8,["modelValue"])]})),_:1},8,["rules"]),Object(r["d"])(a,{label:"密码",prop:"password"},{default:Object(r["r"])((function(){return[Object(r["d"])(n,{placeholder:"请输入XXX",type:"password",modelValue:e.formValues.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.formValues.password=t})},null,8,["modelValue"])]})),_:1}),Object(r["d"])(a,null,{default:Object(r["r"])((function(){return[V]})),_:1})]})),_:1},8,["model","rules","onValidate"])])}var x=Object(r["e"])({name:"FormDemo",setup:function(e,t){t.emit;var n=Object(r["m"])("aaa"),a=Object(r["l"])({name:"",password:""}),u=Object(r["l"])({name:[{required:!0,message:"请输入姓名",trigger:"blur"},{max:6,message:"不超过6位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"最少6位",trigger:"blur"}]}),o=Object(r["m"])(null),l=function(){},c=function(e){console.log("handleValidate",e)};return{text:n,formValues:a,formRules:u,submit:l,FtForm:o,handleValidate:c}}});x.render=w;var T=x,P={class:"demo-box"},S={style:{color:"red"}},F=Object(r["c"])(" apple "),I=Object(r["c"])("tabTwo"),_=Object(r["c"])("tabThree");function X(e,t){var n=Object(r["n"])("ft-tab-pane"),a=Object(r["n"])("ft-tabs");return Object(r["j"])(),Object(r["b"])("div",P,[Object(r["d"])(a,{modelValue:e.currentTabName,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.currentTabName=t})},{default:Object(r["r"])((function(){return[Object(r["d"])(n,{name:"apple"},{tabTitle:Object(r["r"])((function(e){return[Object(r["d"])("b",S,Object(r["o"])(e),1)]})),default:Object(r["r"])((function(){return[F]})),_:1}),Object(r["d"])(n,{name:"tabTwo"},{default:Object(r["r"])((function(){return[I]})),_:1}),Object(r["d"])(n,{name:"tabThree"},{default:Object(r["r"])((function(){return[_]})),_:1})]})),_:1},8,["modelValue"])])}n("c740"),n("a434"),n("159b"),n("d81d"),n("8398");var k="TabsKey",C=Object(r["e"])({name:"FtTabs",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,a=t.slots,u=Object(r["m"])([]),o=Object(r["m"])(e.modelValue),l=function(e){u.value.push(e)},c=function(e){if(u.value.length){var t=u.value.findIndex((function(t){return t.name===e}));t>-1&&u.value.splice(t,1)}},i=function(){u.value.length&&u.value.forEach((function(e){e.changeShow(e.name===o.value)}))};Object(r["i"])((function(){!o.value&&u.value.length&&n("update:modelValue",u.value[0].name),i()})),Object(r["q"])((function(){return e.modelValue}),(function(e){o.value=e,i()})),Object(r["k"])(k,{addPane:l,removePane:c});var d=function(e){e!==o.value&&n("update:modelValue",e)},b=function(){return u.value.map((function(e){var t=e.name===o.value?"active":"";return Object(r["d"])("div",{class:"ft-tab-pane "+t,onClick:d.bind(null,e.name)},[e.tabTitleSlot?e.tabTitleSlot(e.name):e.name])}))};return function(){return Object(r["d"])("div",{class:"ft-tabs"},[Object(r["d"])("div",{class:"navs"},[b()]),a.default()])}}}),D=Object(r["e"])({name:"TabsDemo",components:{FtTabs:C},setup:function(e,t){t.emit;var n=Object(r["m"])("");return{currentTabName:n}}});D.render=X;var q=D,A=Object(r["e"])({name:"App",components:{InputDemo:g,FormDemo:T,TabsDemo:q}});n("f8d0");A.render=s;var M=A;n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("0545");function U(e){var t=Object(r["f"])();console.log(t),t&&Object.assign(t.proxy,e)}var B=Object(r["e"])({name:"FtForm",props:{model:{type:Object,required:!0},rules:Object},emits:["validate"],setup:function(e,t){var n=t.emit,a=t.slots,u=[],o=function(e){u.push(e),console.log(u,"formItems")},l=function(e){if(u.length){var t=u.findIndex((function(t){return t.id===e}));t>-1&&u.splice(t)}};Object(r["k"])(j,{model:e.model,rules:e.rules,addItem:o,removeItem:l});var c=function(t){return Promise.all(u.filter((function(e){return e.prop})).map((function(t){return t.validate(e.model[t.prop])}))).then((function(){return t&&t(!0),n("validate",!0),Promise.resolve(!0)})).catch((function(e){return t&&t(!1),n("validate",e),Promise.reject(e)}))};U({validate:c});var i=function(e){e.preventDefault(),c()};return function(){return Object(r["d"])("form",{class:"ft-form",onSubmit:i},[a.default()])}}}),K=n("ade3"),N=n("2a95"),R=0;function E(){return"form-item"+R++}var J=Object(r["e"])({name:"FtFormItem",props:{label:{type:String,default:""},prop:{type:String,default:""},rules:{type:[Object,Array]}},setup:function(e,t){t.emit;var n=t.slots,a=E(),u=Object(r["m"])(""),o=Object(r["g"])(j);Object(r["i"])((function(){null===o||void 0===o||o.addItem({id:a,prop:e.prop,validate:c})})),Object(r["h"])((function(){null===o||void 0===o||o.removeItem(a)}));var l=function(t){var n=e.rules||(null===o||void 0===o?void 0:o.rules[e.prop]);if(n){var r=Array.isArray(n)?n:[n];return t?r.filter((function(e){return e.trigger===t})):r}return[]},c=function(t,n){var r=n||l();if(r.length&&e.prop){var a=new N["a"](Object(K["a"])({},e.prop,r));return a.validate(Object(K["a"])({},e.prop,t)).then((function(){return u.value="",!0})).catch((function(e){var t=e.errors;return u.value=t[0].message,Promise.reject(t)}))}return Promise.resolve(!0)},i=function(e){var t=l("change");t.length&&c(e,t)},d=function(e){var t=l("blur");t.length&&c(e,t).catch((function(e){console.error(e)}))};Object(r["k"])(O,{handlerControlChange:i,handlerControlBlur:d});var b=function(){return n.label?n.label():Object(r["d"])("label",{class:"item-label"},[e.label])};return function(){return Object(r["d"])("div",{class:"ft-form-item"},[b(),Object(r["d"])("div",{class:"item-content"},[Object(r["d"])("div",{class:"item-content-wrap"},[n.default()]),Object(r["s"])(Object(r["d"])("p",{class:"item-error"},[u.value]),[[r["p"],u.value]])])])}}}),z=Object(r["e"])({name:"FtTabPane",props:{name:{type:String,required:!0}},setup:function(e,t){t.emit;var n=t.slots,a=Object(r["g"])(k),u=Object(r["m"])(!1),o=function(e){u.value=e};return Object(r["i"])((function(){null===a||void 0===a||a.addPane({name:e.name,tabTitleSlot:n.tabTitle,changeShow:o})})),Object(r["h"])((function(){null===a||void 0===a||a.removePane(e.name)})),function(){return Object(r["s"])(Object(r["d"])("div",{class:"pane"},[n.default()]),[[r["p"],u.value]])}}}),G=[v,B,J,C,z],H=function(e){G.forEach((function(t){return e.component(t.name,t)}))};n("6861");Object(r["a"])(M).use(H).mount("#app")},f8d0:function(e,t,n){"use strict";n("60de")}});
//# sourceMappingURL=app.0b03fb05.js.map