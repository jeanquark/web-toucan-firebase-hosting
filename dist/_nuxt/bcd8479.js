(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{449:function(t,e,r){"use strict";r.r(e);r(22),r(21);var c={props:{siteKey:{type:String,default:""},dataTheme:{default:"light",type:String,validator:function(t){return["dark","light"].includes(t)}},dataSize:{default:null,type:String,validator:function(t){return["compact","normal","invisible"].includes(t)}},dataBadge:{default:"bottomright",type:String,validator:function(t){return["bottomright","bottomleft","inline"].includes(t)}},dataTabindex:{default:0,type:Number}},beforeDestroy:function(){this.$recaptcha.destroy()},mounted:function(){this.$recaptcha.init(),this.$recaptcha.on("recaptcha-error",this.onError),this.$recaptcha.on("recaptcha-success",this.onSuccess),this.$recaptcha.on("recaptcha-expired",this.onExpired)},computed:{computedDataSize:function(){return this.dataSize||this.$recaptcha.size||"normal"}},methods:{onError:function(t){return this.$emit("error",t)},onSuccess:function(t){return this.$emit("success",t)},onExpired:function(){return this.$emit("expired")}}},n=r(78),component=Object(n.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":this.siteKey||this.$recaptcha.siteKey,"data-size":this.computedDataSize,"data-theme":this.dataTheme,"data-badge":this.dataBadge,"data-tabindex":this.dataTabindex,"data-callback":"recaptchaSuccessCallback","data-expired-callback":"recaptchaExpiredCallback","data-error-callback":"recaptchaErrorCallback"}})}),[],!1,null,null,null);e.default=component.exports}}]);