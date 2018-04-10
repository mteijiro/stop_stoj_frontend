webpackJsonp([1],{0:function(e,t){},"05RE":function(e,t){},"3cbv":function(e,t){},"4+hh":function(e,t){},"B/NW":function(e,t){},E5z0:function(e,t){},Ii5r:function(e,t){},Jq5x:function(e,t,n){e.exports=n.p+"static/img/WPIxMiljopunkt.96a041c.png"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={name:"App",data:function(){return{menuVisible:!1,username:""}},methods:{displayUserName:function(){this.getCookie("token");this.username=this.getCookie("username")},getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var a=n[o];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return console.log(a.substring(t.length,a.length)),a.substring(t.length,a.length)}return""}},beforeMount:function(){this.displayUserName()},updated:function(){this.displayUserName()},mounted:function(){}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed-last"}},[n("md-app-toolbar",{staticClass:"md-large md-dense md-primary"},[n("div",{staticClass:"md-toolbar-row"},[n("div",{staticClass:"md-toolbar-section-start"},[n("span",{staticClass:"md-title"},[e._v("Noise Complaint App")])])]),e._v(" "),e.username.length>0?n("label",[e._v("Logged In: "+e._s(e.username))]):e._e(),e._v(" "),n("div",{staticClass:"md-toolbar-row"},[n("md-tabs",{staticClass:"md-primary"},[n("md-tab",{attrs:{id:"tab-menu","md-label":"Menu",to:"/"}}),e._v(" "),n("md-tab",{attrs:{id:"tab-submit","md-label":"Submit A Complaint",to:"SubmitAComplaint"}}),e._v(" "),n("md-tab",{attrs:{id:"tab-create","md-label":"Register",to:"CreateAUser"}}),e._v(" "),n("md-tab",{attrs:{id:"tab-about","md-label":"About",to:"About"}}),e._v(" "),n("md-tab",{attrs:{id:"tab-login","md-label":"Login",to:"Login"}})],1)],1)]),e._v(" "),n("md-app-content",[n("br"),e._v(" "),n("router-view")],1)],1)],1)])},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(e){n("Qe1B"),n("jakZ")},"data-v-715abf46",null).exports,s=n("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Welcome!")]),e._v(" "),n("p",[e._v("Welcome to the Noise Complaint App! This app serves two purposes: to help inform about Copenhagen’s noise complaint process and to collect nightlife noise complaint data. The app will walk you through the process of submitting a noise complaint. Currently, we are only accepting noise complaints pertaining to street noise and private celebrations; however, the app will walk you through the process of submitting any other type of noise complaint to the proper authorities.")]),e._v(" "),n("p",[e._v("For the testing period, we ask you to create a username and password that will allow you into the noise complaint system. Please visit the create an account tab at the top of the screen to do so.")]),e._v(" "),n("p",[e._v("Please note that this app is not finished yet and is currently being worked on. Before our system becomes available to the public we will be clearing the database of all complaints, and accounts created during the testing period. However, please refrain from submitting any personal information in a complaint as we are still actively improving the data security systems.")]),e._v(" "),n("h2",[e._v("Disclaimer")]),e._v(" "),n("p",[e._v("Your noise complaint submission will be sent to our database for noise disturbance data collection. For any emergencies, please contact the Police at 112.")])])}]};var l=n("VU/8")({name:"main-menu"},d,!1,function(e){n("gDOl")},"data-v-799f6ca3",null).exports,m=n("Xxa5"),u=n.n(m),c=n("exGp"),p=n.n(c),f=n("nrd6"),v=n.n(f),h={name:"leaflet-map",props:{newCoords:{latitude:{type:Number,default:0},longitude:{type:Number,default:0}}},data:function(){return{mymap:{},myMarker:{},curCoords:{latCoord:{type:Number,default:0},longCoord:{type:Number,default:0}}}},mounted:function(){var e=v.a.map("mapid",{minZoom:13,maxZoom:18,maxBounds:[[55.71,12.5],[55.65,12.66]]}).setView([55.679479,12.56947],13);v.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',id:"mapbox.streets"}).addTo(e),this.myMarker=v.a.marker([55.679479,12.56947],{draggable:!0}).addTo(e).bindPopup("<b>Location</b><br />Drag me to your location.").openPopup();var t=this;this.myMarker.on("dragend",function(e){t.curCoords.latCoord=this.getLatLng().lat,t.curCoords.longCoord=this.getLatLng().lng,t.$emit("coordsChanged",t.curCoords)}),this.mymap=e},methods:{updateCoords:function(){this.curCoords.latCoord=this.newCoords.latitude,this.curCoords.longCoord=this.newCoords.longitude,this.mymap.setView([this.curCoords.latCoord,this.curCoords.longCoord],this.mymap.getZoom()),this.myMarker.setLatLng([this.curCoords.latCoord,this.curCoords.longCoord]).update()}},watch:{newCoords:{handler:function(e,t){this.updateCoords()}}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",this._b({attrs:{id:"mapid"}},"div",this.mymap,!1))])},staticRenderFns:[]};var _=n("VU/8")(h,g,!1,function(e){n("05RE")},"data-v-051c82ff",null).exports,b=n("E+XS"),C={name:"SubmitAComplaint",props:{},components:{"leaflet-map":_},data:function(){return{newComplaint:{username:"",password:"",category:"",severity:"",latitude:0,longitude:0,comments:"",imageUP:null,audioUP:null},returnParty:"Police",lookupAddress:"",provider:null,formIndex:0,endFormIndex:4,myCredentials:{username:"",password:""},imageUpload:null,audioUpload:null,formSteps:["login","category","location","submit","done"],categories:[{key:1,value:"Street Noise"},{key:2,value:"Traffic"},{key:3,value:"Business Venue"},{key:4,value:"Construction"},{key:5,value:"Private Property"},{key:6,value:"Other"}],noiseGuardCategories:["Business Venue","Construction"]}},methods:{searchAddress:function(){var e=this;return p()(u.a.mark(function t(){var n,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("addressBox").value,t.next=3,e.provider.search({query:n});case 3:o=t.sent,e.newComplaint.longitude=o[0].x,e.newComplaint.latitude=o[0].y;case 6:case"end":return t.stop()}},t,e)}))()},isNoiseGuard:function(e){for(var t=this.noiseGuardCategories,n=0;n<t.length;n++)if(e===t[n])return!0;return!1},onNoiseGuardSelected:function(){this.isNoiseGuard(this.newComplaint.category)?this.returnParty="Noise Guard":this.returnParty="Police"},getUserLocation:function(){var e,t=this;e=function(e){null!=e&&(t.newComplaint.latitude=e.coords.latitude,t.newComplaint.longitude=e.coords.longitude)},navigator.geolocation?navigator.geolocation.getCurrentPosition(e):e(null)},backButtonPressed:function(){this.formIndex>0&&(this.formIndex=this.formIndex-1)},nextButtonPressed:function(){this.formIndex<this.endFormIndex-1&&(this.onNoiseGuardSelected(),"Noise Guard"===this.returnParty?this.formIndex=4:this.formIndex=this.formIndex+1)},onDragMapCoords:function(e){this.newComplaint.latitude=e.latCoord,this.newComplaint.longitude=e.longCoord},onImageSelected:function(e){this.imageUpload=e.target.files[0],this.newComplaint.imageUP=this.imageUpload},onAudioSelected:function(e){this.audioUpload=e.target.files[0],this.newComplaint.audioUP=this.audioUpload},submitComplaint:function(e,t){this.formIndex===this.endFormIndex-1&&(this.sendToDatabase(e,t),this.formIndex=this.formIndex+1)},compileCredentials:function(e){var t=new FormData;return t.append("username",e.username),t.append("password",e.password),t},compileComplaint:function(e){var t=new FormData;return t.append("severity",e.severity),t.append("category",e.category),t.append("latitude",String(e.latitude)),t.append("longitude",String(e.longitude)),t.append("comments",e.comments),null!=e.imageUP&&t.append("image",e.imageUP,e.imageUP.name),null!=e.audioUP&&t.append("audio",e.audioUP,e.audioUP.name),t},sendToDatabase:function(e,t){var n=this.compileComplaint(t),o="Token "+JSON.parse(this.getCookie("token"));fetch("http://localhost:8000/complaints/",{mode:"cors",headers:{Authorization:o},body:n,method:"POST"}).then(this.handleErrors).then(function(e){console.log("Complaint Success")}).catch(function(e){console.log(e)})},handleErrors:function(e){if(!e.ok)throw Error(e.statusText);return e},getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var a=n[o];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return console.log(a.substring(t.length,a.length)),a.substring(t.length,a.length)}return""}},created:function(){},mounted:function(){this.provider=new b.OpenStreetMapProvider}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"greetings"},[n("h1",[e._v("Submit A Complaint")]),e._v(" "),n("form",[n("md-steppers",{attrs:{"md-active-step":e.formSteps[e.formIndex]}},[n("md-step",{attrs:{id:e.formSteps[0],"md-description":e.formIndex[0],"md-label":e.formIndex[0],"md-done":e.formIndex>0},on:{click:function(t){e.formIndex=0}}},[0===e.formIndex?[n("h2",[e._v("You must be logged in to submit a complaint.")]),e._v(" "),n("router-link",{attrs:{to:"Login"}},[e._v("You can log in here")]),e._v(" "),n("p",[e._v("If your username does not appear below then you are not logged in")]),e._v(" "),n("h3",[e._v("You are currently logged in as: "+e._s(e.getCookie("username")))])]:e._e()],2),e._v(" "),n("md-step",{attrs:{id:e.formSteps[1],"md-label":e.formIndex[1],"md-done":e.newComplaint.category.length>1},on:{click:function(t){e.formIndex=1}}},[1===e.formIndex?[n("md-field",[n("label",[e._v("Category")]),e._v(" "),n("md-select",{attrs:{name:"category",id:"category"},model:{value:e.newComplaint.category,callback:function(t){e.$set(e.newComplaint,"category",t)},expression:"newComplaint.category"}},[n("md-option",{attrs:{disabled:"",value:""}},[e._v("Select Severity")]),e._v(" "),e._l(e.categories,function(t){return n("md-option",{key:t.key,attrs:{value:t.value}},[e._v("\n                "+e._s(t.value)+"\n              ")])})],2)],1)]:e._e()],2),e._v(" "),n("md-step",{attrs:{id:e.formSteps[2],"md-label":e.formIndex[2],"md-done":0!==e.newComplaint.latitude&&0!==e.newComplaint.longitude},on:{click:function(t){e.formIndex=2}}},[2===e.formIndex?[n("br"),e._v(" "),n("md-field",[n("label",[e._v("Location (Search by Address):")]),e._v(" "),n("md-input",{attrs:{id:"addressBox"}}),e._v(" "),n("span",{staticClass:"md-helper-text"},[e._v("e.g. Regnbuepladsen 7")])],1),e._v(" "),n("md-button",{staticClass:"md-raised",on:{click:function(t){e.searchAddress(e.lookupAddress)}}},[e._v("Search")]),e._v(" "),n("p",{attrs:{id:"locationDisplay"}},[e._v("Please drag the arrow to your location.")]),e._v(" "),n("leaflet-map",{attrs:{id:"myMap",newCoords:{latitude:e.newComplaint.latitude,longitude:e.newComplaint.longitude}},on:{coordsChanged:e.onDragMapCoords}})]:e._e()],2),e._v(" "),n("md-step",{attrs:{id:e.formSteps[3],"md-label":e.formIndex[3],"md-done":e.formIndex>3},on:{click:function(t){e.formIndex=3}}},[3===e.formIndex?[n("md-field",[n("label",[e._v("Comments:")]),e._v(" "),n("md-textarea",{model:{value:e.newComplaint.comments,callback:function(t){e.$set(e.newComplaint,"comments",t)},expression:"newComplaint.comments"}})],1),e._v(" "),n("md-field",[n("label",[e._v("Image")]),e._v(" "),n("md-file",{attrs:{accept:"image/*",placeholder:"Upload image file..."},on:{change:e.onImageSelected}})],1),e._v(" "),n("md-field",[n("label",[e._v("Audio")]),e._v(" "),n("md-file",{attrs:{accept:"audio/*",placeholder:"Upload audio file..."},on:{change:e.onAudioSelected}})],1)]:e._e()],2),e._v(" "),n("md-step",{attrs:{id:e.formSteps[4],"md-label":e.formIndex[4]},on:{click:function(t){e.formIndex=4}}},[e.formIndex===e.endFormIndex&&"Police"===e.returnParty?[n("h3",[e._v("Thank you")]),e._v(" "),n("p",[e._v("Your complaint has been submitted")]),e._v(" "),n("P",[e._v("If you require immediate action, please call the police at 114.")])]:e._e(),e._v(" "),e.formIndex===e.endFormIndex&&"Noise Guard"===e.returnParty?[n("h3",[e._v("Thank you")]),e._v(" "),n("p",[e._v("Thank you for your complaint, however we do not accept complaints related to:")]),e._v(" "),n("ul",[n("li",[e._v("Musical noise from event (no restorations)")]),e._v(" "),n("li",[e._v("Music noise from restaurants")]),e._v(" "),n("li",[e._v("Music noise due to open doors / windows")]),e._v(" "),n("li",[e._v("Noise from construction site (not Metro)")]),e._v(" "),n("li",[e._v("Noise from facade renovation")]),e._v(" "),n("li",[e._v("Noise from supply (construction site)")]),e._v(" "),n("li",[e._v("Noise from Goods Delivery (Retail)")]),e._v(" "),n("li",[e._v("Noise from ventilation or similar")]),e._v(" "),n("li",[e._v("Noisy work outside allowed time (Construction site)...")]),e._v(" "),n("li",[e._v("Other Noise Generations (No Construction Site)")])]),e._v(" "),n("p",[e._v("If you would like to submit a complaint about noise being generated by one of these sources, please visit\n            the København Kommune’s noise complaint form via this link:\n             "),n("a",{attrs:{href:"https://www.kk.dk/støj"}},[e._v("https://www.kk.dk/støj")])]),e._v(" "),n("p",[e._v("If you would like to submit a complaint about noise generated by cafes, restaurants, events or other\n            venues, please contact the Noise Unit or Noise Guard.")]),e._v(" "),n("p",[e._v("Noise Unit: Man-Tors 9:00-15:00. Tel. 26 86 58 27")]),e._v(" "),n("p",[e._v("Noise Guard: Tors 19:00-01:00, Fre-Lør 21:00-03:00. Tel. 33 66 25 85")])]:e._e()],2)],1),e._v(" "),n("br"),e._v(" "),n("div",[e.formIndex>0&&e.formIndex<e.endFormIndex?[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.backButtonPressed()}}},[e._v("Back")])]:e._e(),e._v(" "),e.formIndex<e.endFormIndex-1&&e.getCookie("username").length>0?[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.nextButtonPressed()}}},[e._v("Next")])]:e._e(),e._v(" "),e.formIndex===e.endFormIndex-1?[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.submitComplaint(e.myCredentials,e.newComplaint)}}},[e._v("Submit\n        ")])]:e._e()],2)],1)])},staticRenderFns:[]};var w=n("VU/8")(C,y,!1,function(e){n("E5z0")},"data-v-4f14d896",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("About")]),e._v(" "),o("p",[e._v("This app was developed for the purpose of collecting data on noise disturbances throughout the city of\n    Copenhagen. Each complaint submitted through this app will be entered into a database that will help create\n    a deeper understanding of the nightlife noise problem in Copenhagen. We hope that the data collected by this\n    app will help raise awareness of the nightlife noise problem, and provide evidence to promote changes in the\n    way that noise complaints are handled.")]),e._v(" "),o("h2",[e._v("Developed by:")]),e._v(" "),o("p",[e._v("Christopher Cyr, Brent Reissman, Michael Taylor and Chad Underhill,\n    from the Worcester Polytechnic Institute under the guidance and supervision of Centerleader\n    Marianne Spang Bech from Miljøpunkt Indre By and Christianshavn")]),e._v(" "),o("img",{attrs:{alt:"WPIxMiljopunkt",src:n("Jq5x")}})])}]};var x=n("VU/8")({name:"about"},k,!1,function(e){n("B/NW")},"data-v-0c682117",null).exports,I=n("mvHQ"),N=n.n(I),P={name:"CreateAUser",data:function(){return{myCredentials:{username:"",password:"",confirmPassword:"",firstName:"",lastName:""}}},methods:{compileCredentials:function(e){var t=new FormData;return t.append("username",e.username),t.append("password",e.password),t.append("first_name",e.firstName),t.append("last_name",e.lastName),t},createUser:function(e){var t=this.compileCredentials(e);fetch("http://18.197.28.234:8000/users/",{mode:"cors",body:t,method:"POST"}).then(function(e){return e.json()}).then(function(e){return N()(e)})}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Register")]),e._v(" "),n("form",[n("md-field",[n("label",[e._v("Username:")]),e._v(" "),n("md-input",{attrs:{type:"text"},model:{value:e.myCredentials.username,callback:function(t){e.$set(e.myCredentials,"username",t)},expression:"myCredentials.username"}})],1),e._v(" "),n("md-field",[n("label",[e._v("Password:")]),e._v(" "),n("md-input",{attrs:{type:"password"},model:{value:e.myCredentials.password,callback:function(t){e.$set(e.myCredentials,"password",t)},expression:"myCredentials.password"}})],1),e._v(" "),n("md-field",[n("label",[e._v("Confirm Password:")]),e._v(" "),n("md-input",{attrs:{type:"password"},model:{value:e.myCredentials.confirmPassword,callback:function(t){e.$set(e.myCredentials,"confirmPassword",t)},expression:"myCredentials.confirmPassword"}}),e._v(" "),e.myCredentials.password!==e.myCredentials.confirmPassword?n("span",{staticStyle:{color:"darkred","margin-right":"35px","margin-top":"5px"}},[e._v("Passwords do not match")]):e._e()],1),e._v(" "),n("md-field",[n("label",[e._v("First Name:")]),e._v(" "),n("md-input",{attrs:{type:"text"},model:{value:e.myCredentials.firstName,callback:function(t){e.$set(e.myCredentials,"firstName",t)},expression:"myCredentials.firstName"}})],1),e._v(" "),n("md-field",[n("label",[e._v("Last Name:")]),e._v(" "),n("md-input",{attrs:{type:"text"},model:{value:e.myCredentials.lastName,callback:function(t){e.$set(e.myCredentials,"lastName",t)},expression:"myCredentials.lastName"}})],1),e._v(" "),n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button",value:"submit"},on:{click:function(t){e.createUser(e.myCredentials)}}},[e._v("Create")])],1)])},staticRenderFns:[]};var S=n("VU/8")(P,U,!1,function(e){n("3cbv")},"data-v-6f7f1c34",null).exports,A={name:"Login",data:function(){return{myCredentials:{username:"",password:"",token:""}}},methods:{compileCredentials:function(e){var t=new FormData;return t.append("username",e.username),t.append("password",e.password),t},login:function(){var e=this,t=this.compileCredentials(this.myCredentials);fetch("http://localhost:8000/get-token/",{mode:"cors",body:t,method:"POST"}).then(function(e){return e.json()}).then(function(e){return N()(e.token)}).then(function(t){e.myCredentials.token=t,console.log(t),document.cookie="username="+e.myCredentials.username,document.cookie="token="+t})},getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var a=n[o];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return console.log(a.substring(t.length,a.length)),a.substring(t.length,a.length)}return""}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Login")]),e._v(" "),n("md-field",[n("label",[e._v("Username:")]),e._v(" "),n("md-input",{model:{value:e.myCredentials.username,callback:function(t){e.$set(e.myCredentials,"username",t)},expression:"myCredentials.username"}})],1),e._v(" "),n("md-field",[n("label",[e._v("Password:")]),e._v(" "),n("md-input",{attrs:{type:"password"},model:{value:e.myCredentials.password,callback:function(t){e.$set(e.myCredentials,"password",t)},expression:"myCredentials.password"}})],1),e._v(" "),n("p",[e._v("Our website uses cookies to store your authentication details.")]),e._v(" "),n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.login()}}},[e._v("Submit")]),e._v(" "),n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.getCookie("token")}}},[e._v("TestCookie")])],1)},staticRenderFns:[]};var F=n("VU/8")(A,M,!1,function(e){n("Zrv6")},"data-v-04aa7cd1",null).exports;o.default.use(s.a);var T=new s.a({routes:[{path:"/",name:"MainMenu",component:l},{path:"/SubmitAComplaint",name:"SubmitAComplaint",component:w},{path:"/About",name:"About",component:x},{path:"/CreateAUser",name:"CreateAUser",component:S},{path:"/Login",name:"Login",component:F}]}),B=n("8+8L"),L=n("Lgyv"),E=n.n(L);n("4+hh"),n("Ii5r");o.default.use(E.a),o.default.use(B.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:T,components:{App:r},template:"<App/>"})},Qe1B:function(e,t){},Zrv6:function(e,t){},gDOl:function(e,t){},jakZ:function(e,t){}},["NHnr"]);