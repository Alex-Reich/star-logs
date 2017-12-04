webpackJsonp([1],{13:function(t,e,o){"use strict";var s=o(7),i=o.n(s),r=o(94),a=o(88),n=o.n(a),c=o(86),l=o.n(c),u=o(87),d=o.n(u);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Logs",component:n.a},{path:"/logs/:id",name:"Log",component:l.a},{path:"/login",name:"Login",component:d.a}]})},33:function(t,e,o){"use strict";var s=o(38),i=o.n(s),r=o(7),a=o.n(r),n=o(96),c=o(13),l=i.a.create({baseURL:"//star-logs.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),u=i.a.create({baseURL:"//star-logs.herokuapp.com/",timeout:2e3,withCredentials:!0});a.a.use(n.a);var d=new n.a.Store({state:{logs:[],shipLogs:[],activeLog:{},activeShip:{},error:{},user:{}},mutations:{setUser:function(t,e){t.user=e},setLogs:function(t,e){t.logs=e},setActiveLog:function(t,e){t.activeLog=e},setActiveShip:function(t,e){t.activeShip=e},setShipLogs:function(t,e){t.shipLogs=e},handleError:function(t,e){t.error=e}},actions:{login:function(t,e){var o=t.commit,s=t.dispatch;u.post("login",e).then(function(t){o("setUser",t.data.data),s("getShip",t.data.data.shipId),c.a.push({name:"Logs"})}).catch(function(t){o("handleError",t.response.data)})},register:function(t,e){var o=t.commit;t.dispatch;u.post("register",e).then(function(t){o("setUser",t.data.data),c.a.push({name:"Logs"})}).catch(function(t){o("handleError",t.response.data)})},authenticate:function(t){var e=t.commit,o=t.dispatch;u("authenticate").then(function(t){e("setUser",t.data.data),o("getShip",t.data.data.shipId),c.a.push({name:"Logs"})}).catch(function(){c.a.push({name:"Login"})})},logout:function(t){var e=t.commit;t.dispatch;u.delete("logout").then(function(){e("setUser",{}),c.a.push({name:"Login"})}).catch(function(){c.a.push({name:"Login"})})},getUserLogs:function(t){var e=t.commit;t.dispatch;l("mylogs").then(function(t){e("setLogs",t.data.data)}).catch(function(t){e("handleError",t)})},getLogsByShip:function(t,e){var o=t.commit;t.dispatch;l("ships/"+e+"/logs").then(function(t){o("setShipLogs",t.data.data)}).catch(function(t){o("handleError",t)})},getLog:function(t,e){var o=t.commit;t.dispatch;l("logs/"+e).then(function(t){o("setActiveLog",t.data.data)}).catch(function(t){o("handleError",t)})},createLog:function(t,e){var o=t.commit,s=t.dispatch;l.post("logs/",e).then(function(t){s("getUserLogs"),o("setActiveLog",t.data.data),c.a.push({name:"Log",params:{id:t.data.data._id}})}).catch(function(t){o("handleError",t)})},removeLog:function(t,e){var o=t.commit,s=t.dispatch;l.delete("logs/"+e._id).then(function(t){s("getUserLogs")}).catch(function(t){o("handleError",t)})},updateLog:function(t,e){var o=t.commit,s=t.dispatch;l.put("logs/"+e._id,e).then(function(t){s("getUserLogs")}).catch(function(t){o("handleError",t)})},getShip:function(t,e){var o=t.commit;t.dispatch;l("/ships/"+e).then(function(t){o("setActiveShip",t.data.data)}).catch(function(t){o("handleError",t)})},handleError:function(t,e){var o=t.commit;t.dispatch;o("handleError",e)}}});e.a=d},35:function(t,e,o){o(74);var s=o(5)(o(56),o(90),null,null);t.exports=s.exports},56:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(85),i=o.n(s);e.default={name:"app",components:{Error:i.a},mounted:function(){this.$store.dispatch("authenticate")}}},57:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error",computed:{error:function(){return this.$store.state.error}}}},58:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"log",mounted:function(){this.$store.dispatch("getLog",this.$route.params.id),this.$store.dispatch("getShip",this.user.shipId)},data:function(){return{body:"",edit:!1}},computed:{log:function(){return this.$store.state.activeLog},user:function(){return this.$store.state.user},ship:function(){return this.$store.state.activeShip}},methods:{updateLog:function(){this.$store.dispatch("updateLog",this.log),this.editToggle()},editToggle:function(){this.edit=!this.edit}}}},59:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loginForm:!0,login:{email:"",password:""},register:{name:"",email:"",password:"",rank:"",division:""}}},methods:{toggleLoginForm:function(){this.loginForm=!this.loginForm},submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},submitRegister:function(){this.$store.dispatch("register",this.register),this.register={name:"",email:"",password:"",rank:"",division:""}}},computed:{error:function(){return this.$store.state.error.message}}}},60:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"logs",data:function(){return{}},mounted:function(){this.$store.dispatch("getUserLogs")},computed:{logs:function(){return this.$store.state.logs},user:function(){return this.$store.state.user},shipLogs:function(){return this.$store.state.shipLogs}},methods:{createLog:function(){var t={title:this.user.name.split(" ").join("-")+"-"+this.user.rank+"-"+Date.now(),body:"",shipId:this.user.shipId};this.$store.dispatch("createLog",t)},removeLog:function(t){this.$store.dispatch("removeLog",t)},getLogsByShipId:function(){this.$store.dispatch("getLogsByShip",this.user.shipId)}}}},61:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(7),i=o.n(s),r=o(35),a=o.n(r),n=o(13),c=o(34),l=o.n(c),u=o(33),d=l()("//star-logs.herokuapp.com");d.on("CONNECTED",function(t){console.log(t),d.emit("update",{data:"blarg",boardId:"3289748320"})}),new i.a({el:"#app",store:u.a,router:n.a,template:"<App/>",components:{App:a.a}})},73:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e){},77:function(t,e){},85:function(t,e,o){o(76);var s=o(5)(o(57),o(92),"data-v-49c58c80",null);t.exports=s.exports},86:function(t,e,o){o(73);var s=o(5)(o(58),o(89),"data-v-0060d7bc",null);t.exports=s.exports},87:function(t,e,o){o(77);var s=o(5)(o(59),o(93),null,null);t.exports=s.exports},88:function(t,e,o){o(75);var s=o(5)(o(60),o(91),"data-v-0f65c0e7",null);t.exports=s.exports},89:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"heading row text-center"},[o("h1",[t._v(t._s(t.user.rank)+"'s Log")]),t._v(" "),o("h3",[t._v(t._s(t.ship.name))])]),t._v(" "),o("div",{staticClass:"row"},[o("button",{staticClass:"col-sm-1 col-sm-offset-11",on:{click:t.editToggle}},[o("span",{staticClass:"glyphicon glyphicon-pencil",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.edit?o("div",{staticClass:"edit-log row"},[o("h4",{staticClass:"pull-left"},[t._v(t._s(t.log.title)+" :")]),t._v(" "),o("form",{on:{submit:function(e){e.preventDefault(),t.updateLog(e)}}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.log.body,expression:"log.body"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.log.body},on:{input:function(e){e.target.composing||(t.log.body=e.target.value)}}}),t._v(" "),o("button",{staticClass:"btn btn-success pull-right",attrs:{type:"submit"}},[t._v("Update Log")])])]):o("div",{staticClass:"log row"},[o("h4",{staticClass:"pull-left col-sm-12"},[t._v(t._s(t.log.title)+" :")]),t._v(" "),o("div",{staticClass:"log-body col-sm-11 col-sm-offset-1"},[o("p",[t._v(t._s(t.log.body))])])])])},staticRenderFns:[]}},90:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{on:{click:t.createLog}},[t._v("Add Log")]),t._v(" "),o("ul",t._l(t.logs,function(e){return o("li",[o("router-link",{attrs:{to:"/logs/"+e._id}},[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"action",on:{click:function(o){t.removeLog(e)}}},[t._v("x")])],1)})),t._v(" "),o("div",{staticClass:"ship-logs"},["Captain"==t.user.rank?o("button",{on:{click:t.getLogsByShipId}},[t._v("Get MyShip Logs")]):t._e(),t._v(" "),o("ul",t._l(t.shipLogs,function(e){return o("li",[o("router-link",{attrs:{to:"/logs/"+e._id}},[t._v(t._s(e.title))])],1)}))])])},staticRenderFns:[]}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.error.message?o("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")]):t._e()},staticRenderFns:[]}},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h1",[t._v("WELCOME TO STARFLEET")]),t._v(" "),o("p",[t._v("please login to continue:")]),t._v(" "),t.error?o("h5",{staticClass:"text-danger"},[o("b",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t.loginForm?o("div",{staticClass:"login"},[o("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitLogin(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"YOUREMAIL@starfleet.co",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||(t.login.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||(t.login.password=e.target.value)}}})]),t._v(" "),t._m(0)])]):o("div",{staticClass:"register"},[o("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitRegister(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"name",required:""},domProps:{value:t.register.name},on:{input:function(e){e.target.composing||(t.register.name=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"YOUREMAIL@starfleet.co",required:""},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||(t.register.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"rank"}},[t._v("Rank")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.rank,expression:"register.rank"}],staticClass:"form-control",attrs:{type:"text",name:"rank",required:""},domProps:{value:t.register.rank},on:{input:function(e){e.target.composing||(t.register.rank=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"division"}},[t._v("Division")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.division,expression:"register.division"}],staticClass:"form-control",attrs:{type:"text",name:"division"},domProps:{value:t.register.division},on:{input:function(e){e.target.composing||(t.register.division=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",required:""},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||(t.register.password=e.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),t.loginForm?o("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Not a user? Click here to register")]):o("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Already a user? Click here to login")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{attrs:{type:"submit"}},[t._v("Login")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{attrs:{type:"submit"}},[t._v("Register")])])}]}},99:function(t,e){}},[61]);
//# sourceMappingURL=app.61f43d3d21fb2a8c3064.js.map