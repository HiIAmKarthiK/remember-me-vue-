(function(e){function t(t){for(var c,i,u=t[0],l=t[1],a=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0db6":function(e,t,n){"use strict";n("a6f0")},1533:function(e,t,n){},"2a10":function(e,t,n){"use strict";n("ee39")},"345b":function(e,t,n){"use strict";n("d09b")},"41c5":function(e,t,n){"use strict";n("a7dc")},"4ac0":function(e,t,n){"use strict";n("8a35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,i){var u=Object(c["q"])("the-header"),l=Object(c["q"])("tab-resource");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(u,{title:"RememberMe"}),Object(c["j"])(l)],64)}function o(e,t,n,r,o,i){return Object(c["l"])(),Object(c["g"])("header",null,[Object(c["h"])("h1",null,Object(c["s"])(n.title),1)])}var i={props:["title"]},u=(n("0db6"),n("6b0d")),l=n.n(u);const a=l()(i,[["render",o],["__scopeId","data-v-19fd62ff"]]);var s=a,d=Object(c["i"])("Active Resources"),b=Object(c["i"])("Add Resource");function f(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l,null,{default:Object(c["t"])((function(){return[Object(c["j"])(u,{onClick:t[0]||(t[0]=function(e){return i.selectComponent("resource-container")}),mode:i.isResourceConatainer},{default:Object(c["t"])((function(){return[d]})),_:1},8,["mode"]),Object(c["j"])(u,{onClick:t[1]||(t[1]=function(e){return i.selectComponent("add-resource")}),mode:i.isAddResource},{default:Object(c["t"])((function(){return[b]})),_:1},8,["mode"])]})),_:1}),(Object(c["l"])(),Object(c["e"])(c["b"],null,[(Object(c["l"])(),Object(c["e"])(Object(c["r"])(o.selectedComponent)))],1024))],64)}n("accc"),n("0d03"),n("c740"),n("a434"),n("a4d3"),n("e01a"),n("9911");function j(e,t,n,r,o,i){var u=Object(c["q"])("learning-resource");return Object(c["l"])(),Object(c["g"])("ul",null,[(Object(c["l"])(!0),Object(c["g"])(c["a"],null,Object(c["o"])(i.resources,(function(e){return Object(c["l"])(),Object(c["e"])(u,{key:e.id,title:e.title,description:e.description,link:e.link,id:e.id},null,8,["title","description","link","id"])})),128))])}var O={class:"list__content"},p=Object(c["i"])("Delete"),h=["href"];function v(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("card");return Object(c["l"])(),Object(c["g"])("li",null,[Object(c["j"])(l,null,{default:Object(c["t"])((function(){return[Object(c["h"])("div",O,[Object(c["h"])("header",null,[Object(c["h"])("h1",null,Object(c["s"])(n.title),1),Object(c["j"])(u,{onClick:t[0]||(t[0]=function(e){return i.deleteItem(n.id)}),mode:"flat"},{default:Object(c["t"])((function(){return[p]})),_:1})]),Object(c["h"])("p",null,Object(c["s"])(n.description),1),Object(c["h"])("footer",null,[Object(c["h"])("a",{href:n.link},"View Link",8,h)])])]})),_:1})])}var m={props:["title","description","link","id"],inject:["deleteItem"]};n("aa9c");const g=l()(m,[["render",v],["__scopeId","data-v-1f892777"]]);var _=g,k={components:{LearningResource:_},inject:["resources"]};n("ca07");const y=l()(k,[["render",j],["__scopeId","data-v-1891c8b6"]]);var I=y,C=function(e){return Object(c["n"])("data-v-74a3fca0"),e=e(),Object(c["m"])(),e},R=C((function(){return Object(c["h"])("p",null,"Unfortunately, atleast one input is invalid.",-1)})),w=C((function(){return Object(c["h"])("p",null,"Please make sure all the input fields are not empty.",-1)})),q=Object(c["i"])("Okay"),x={class:"form"},$={class:"input-group"},S=C((function(){return Object(c["h"])("label",{for:""},"Title",-1)})),P={type:"text",ref:"title"},A={class:"input-group"},D=C((function(){return Object(c["h"])("label",{for:""},"Description",-1)})),M={rows:"3",ref:"desc"},T={class:"input-group"},E=C((function(){return Object(c["h"])("label",{for:""},"Link",-1)})),L={type:"text",ref:"link"},V={class:"button-group"},J=Object(c["i"])("Submit");function G(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("error-modal"),a=Object(c["q"])("card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[o.isInputInvalid?(Object(c["l"])(),Object(c["e"])(l,{key:0,title:"Invalid Input",onClose:i.acceptError},{default:Object(c["t"])((function(){return[R,w]})),actions:Object(c["t"])((function(){return[Object(c["j"])(u,{mode:"purple",onClick:i.acceptError},{default:Object(c["t"])((function(){return[q]})),_:1},8,["onClick"])]})),_:1},8,["onClose"])):Object(c["f"])("",!0),Object(c["j"])(a,null,{default:Object(c["t"])((function(){return[Object(c["h"])("div",x,[Object(c["h"])("div",$,[S,Object(c["h"])("input",P,null,512)]),Object(c["h"])("div",A,[D,Object(c["h"])("textarea",M,null,512)]),Object(c["h"])("div",T,[E,Object(c["h"])("input",L,null,512)]),Object(c["h"])("div",V,[Object(c["j"])(u,{onClick:i.submitData},{default:Object(c["t"])((function(){return[J]})),_:1},8,["onClick"])])])]})),_:1})],64)}n("498a");var H={inject:["addResource"],data:function(){return{isInputInvalid:!1}},methods:{submitData:function(){var e=this.$refs.title.value,t=this.$refs.desc.value,n=this.$refs.link.value;""!=e.trim()&&""!=t.trim()&&""!=n.trim()?this.addResource(e,t,n):this.isInputInvalid=!0},acceptError:function(){this.isInputInvalid=!1}}};n("41c5");const U=l()(H,[["render",G],["__scopeId","data-v-74a3fca0"]]);var z=U,B={components:{ResourceContainer:I,AddResource:z},data:function(){return{selectedComponent:"resource-container",resources:[{id:"official-guide",title:"Official guide Vue.js",description:"Official Vue.js documentation",link:"https://vuejs.org"},{id:"google",title:"Google",description:"search google for everything",link:"https://google.com"}]}},methods:{selectComponent:function(e){this.selectedComponent=e},addResource:function(e,t,n){var c={id:(new Date).toISOString(),title:e,description:t,link:n};this.resources.unshift(c),this.selectedComponent="resource-container"},deleteItem:function(e){var t=this.resources.findIndex((function(t){return t.id==e}));this.resources.splice(t,1)}},provide:function(){return{resources:this.resources,addResource:this.addResource,deleteItem:this.deleteItem}},computed:{isResourceConatainer:function(){return"resource-container"==this.selectedComponent?null:"flat"},isAddResource:function(){return"add-resource"==this.selectedComponent?null:"flat"}}};const F=l()(B,[["render",f]]);var K=F,N={components:{TheHeader:s,TabResource:K}};n("345b");const Q=l()(N,[["render",r]]);var W=Q,X={class:"card"};function Y(e,t){return Object(c["l"])(),Object(c["g"])("div",X,[Object(c["p"])(e.$slots,"default",{},void 0,!0)])}n("4ac0");const Z={},ee=l()(Z,[["render",Y],["__scopeId","data-v-5596f9b4"]]);var te=ee;function ne(e,t,n,r,o,i){return Object(c["l"])(),Object(c["g"])("button",{class:Object(c["k"])(n.mode)},[Object(c["p"])(e.$slots,"default",{},void 0,!0)],2)}var ce={props:["mode"]};n("2a10");const re=l()(ce,[["render",ne],["__scopeId","data-v-4c01db0f"]]);var oe=re,ie={open:""},ue=Object(c["i"])("Okay");function le(e,t,n,r,o,i){var u=Object(c["q"])("base-button");return Object(c["l"])(),Object(c["e"])(c["c"],{to:"body"},[Object(c["h"])("div",{class:"backdrop",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(c["h"])("dialog",ie,[Object(c["h"])("header",null,[Object(c["p"])(e.$slots,"header",{},(function(){return[Object(c["h"])("h2",null,Object(c["s"])(n.title),1)]}),!0)]),Object(c["h"])("p",null,[Object(c["p"])(e.$slots,"default",{},void 0,!0)]),Object(c["h"])("footer",null,[Object(c["p"])(e.$slots,"actions",{},(function(){return[Object(c["j"])(u,{mode:"purple",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},{default:Object(c["t"])((function(){return[ue]})),_:1})]}),!0)])])])}var ae={props:{title:{type:String,required:!1}},emits:["close"]};n("8aaf");const se=l()(ae,[["render",le],["__scopeId","data-v-04643068"]]);var de=se,be=Object(c["d"])(W);be.component("card",te),be.component("base-button",oe),be.component("error-modal",de),be.mount("#app")},"8a35":function(e,t,n){},"8aaf":function(e,t,n){"use strict";n("1533")},a6f0:function(e,t,n){},a7dc:function(e,t,n){},aa9c:function(e,t,n){"use strict";n("c500")},c500:function(e,t,n){},ca07:function(e,t,n){"use strict";n("ffe8")},d09b:function(e,t,n){},ee39:function(e,t,n){},ffe8:function(e,t,n){}});
//# sourceMappingURL=app.d294917d.js.map