webpackJsonp([1],{"+3og":function(t,e){},"+ZKU":function(t,e){},"0Y+k":function(t,e){},"3R45":function(t,e){},"4yJi":function(t,e){},"5O/2":function(t,e){},"5QNi":function(t,e){},"7zjz":function(t,e){},"8lv5":function(t,e){},Chq7:function(t,e){},KNeJ:function(t,e){},KWak:function(t,e){},"M/gT":function(t,e){},M2nq:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("rO5f"),n=a.n(i),s=a("Ai5V"),r=a.n(s),o=a("qwW+"),l=a.n(o),c=a("v0Yl"),u=a.n(c),v=a("ZyiM"),d=a.n(v),m=a("hMX9"),f=a.n(m),h=a("6SnW"),g=a.n(h),p=a("xYNs"),_=a.n(p),y=a("kQvj"),b=a.n(y),C=a("Ehs3"),x=a.n(C),$=(a("sVYa"),a("uMhA"),a("7+uW")),k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var L=a("VU/8")({name:"App"},k,!1,function(t){a("qbxe")},null,null).exports,w=a("/ocq"),z=a("Gu7T"),R=a.n(z),N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-container"},[e("div",{staticClass:"btn"},[e("span",[this._v(this._s(this.title))])])])},staticRenderFns:[]};var F=a("VU/8")({props:["title"],data:function(){return{}}},N,!1,function(t){a("Y2Sm")},"data-v-56de25d0",null).exports,P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-item"},[a("div",{staticClass:"image-info"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.movieinfo.movie_image,expression:"movieinfo['movie_image']"}],staticClass:"image"}),t._v(" "),a("div",{staticClass:"score"},[t._v(t._s(t.movieinfo.movie_score))])]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.movieinfo.movie_title))]),t._v(" "),a("div",{staticClass:"remark"},[t._v(t._s(t.movieinfo.movie_desc))])])},staticRenderFns:[]};var U=a("VU/8")({props:["movieinfo"],data:function(){return{}}},P,!1,function(t){a("nbni")},"data-v-1536be11",null).exports,M=a("GQaK"),E={data:function(){return{picScroll:!1,categoryList:{},select:{itype:-1,iarea:-1,characteristic:-1,year:-1,charge:-1}}},mounted:function(){var t=this;this.$on("category",function(e){t.categoryList=e,t.$nextTick(function(){t._initPics()})})},watch:{categoryList:function(){var t=this;this.$nextTick(function(){t._initPics()})}},methods:{_initPics:function(){var t=this,e=this.$refs.wrapper;this.$nextTick(function(){if(t.picScroll)for(var a=0;a<e.length;a++)t["picScroll"+a].refresh();else for(var i=0;i<e.length;i++)t["picScroll"+i]=new M.a(e[i],{scrollX:!0,eventPassthrough:"vertical"})})},categoryTouch:function(t){this.select[t.key]=t.key_val,this.$emit("getitem",this.select)}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-expansion-panel",[a("div",{staticClass:"category-all",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"title"},[t._v("查看所有分类")])]),t._v(" "),a("div",{staticClass:"category-box"},t._l(t.categoryList,function(e,i){return a("div",{key:i,staticClass:"category-list"},[a("div",{staticClass:"label"},[a("div",[t._v(t._s(e[0].label))])]),t._v(" "),a("div",{ref:"wrapper",refInFor:!0,staticClass:"wrapper"},[a("ul",{ref:"list",refInFor:!0,staticClass:"list"},t._l(e,function(e){return a("div",{key:e.key_val,staticClass:"itembox"},[a("div",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.categoryTouch(e,a)},expression:"(e)=>categoryTouch(item,e)"}],class:{current:e.key_val==t.select[e.key]}},[t._v("\n                                   "+t._s(e.name)+"\n                               \n                               ")])])}),0)])])}),0)])],1)},staticRenderFns:[]};var T=a("VU/8")(E,I,!1,function(t){a("hRki")},"data-v-d33e85ca",null).exports,V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs"},[a("mu-tabs",{attrs:{value:t.state.active_tab,"full-width":"",color:"teal"},on:{"update:value":function(e){return t.$set(t.state,"active_tab",e)}}},[a("mu-tab",{attrs:{to:"/"}},[t._v("\r\n            电影\r\n        ")]),t._v(" "),a("mu-tab",{attrs:{to:"/tv"}},[t._v("\r\n            电视剧\r\n        ")]),t._v(" "),a("mu-tab",{attrs:{to:"/variety"}},[t._v("\r\n            综艺\r\n        ")]),t._v(" "),a("mu-tab",{attrs:{to:"/cartoon"}},[t._v("\r\n            动漫\r\n        ")])],1)],1)},staticRenderFns:[]};var q=a("VU/8")({data:function(){return{active3:0}}},V,!1,function(t){a("y7qm")},"data-v-f87bab20",null).exports,A=a("//Fk"),S=a.n(A),j=a("mtWM"),K=a.n(j),X=a("lbHh"),Y=a.n(X),D=a("sXio");$.default.use(D.a,{position:"top",time:2e3,close:!1});var W=K.a.create({baseURL:"http://127.0.0.1:7001/",timeout:36e5,widthCredentials:!1});W.interceptors.request.use(function(t){var e=Y.a.get("vplayer"),a=Y.a.get("name"),i=t.url;return console.log(i),"login"==i||"registe"==i?t:a&&e&&a.trim()&&e.trim()?(t.headers.token=e,t.headers.name=a,t):(D.a.message("登录信息已经失效"),void Pt.replace("/registe"))},function(t){S.a.reject(t)}),W.interceptors.response.use(function(t){var e=t.data;return 403==e.code?(D.a.message("登录信息已经失效"),Pt.push("/login"),S.a.reject(e)):200!==e.code?(console.log("----错误----"),D.a.message(e.msg),S.a.reject(e)):e},function(t){return D.a.message("服务器发生未知错误"),S.a.reject({code:400,msg:t.message})});var Z=W;function Q(t){return Z({url:"movieItem",method:"post",data:t})}function H(t){return Z({url:"movieSearch",method:"post",data:t})}var J={name:"HelloWorld",components:{"search-btn":F,"movie-item":U,"v-category":T,"v-tabs":q},data:function(){return{categoryList:{},movielist:[],loading:!1,page:1,size:30,category:{},Loading:null,loadingAll:!1}},methods:{loadMore:function(){var t=this;this.loading=!0,this.page+=1,Q({page:this.page,size:this.size,category:this.category}).then(function(e){t.loading=!1,200==e.code&&(t.movielist=[].concat(R()(t.movielist),R()(e.data)),e.data&&e.data.length<t.size&&(t.loadingAll=!0))}).catch(function(e){t.loading=!1})},getCategryList:function(){var t,e=this;(t={},Z({url:"movieCategory",method:"post",data:t})).then(function(t){200==t.code&&(e.categoryList=t.data,e.$refs.category.$emit("category",t.data))}).catch(function(t){e.loading=!1})},getItem:function(t){console.log(t),this.category=t,this.page=1,this.getMovieItem()},getMovieItem:function(){var t=this;this.Loading=this.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),Q({page:this.page,size:this.size,category:this.category}).then(function(e){t.Loading.close(),200==e.code&&(t.movielist=e.data,e.data&&e.data.length<t.size&&(t.loadingAll=!0))}).catch(function(e){t.loading=!1,t.Loading.close()})},toPLayer:function(t,e){this.state.url=t.movie_url,this.$router.push("/player")}},created:function(){this.state.active_tab=0,this.getCategryList(),this.getMovieItem()}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("router-link",{attrs:{to:"/search"}},[a("search-btn",{attrs:{title:"搜索电影名称"}})],1)],1),t._v(" "),a("v-category",{ref:"category",on:{getitem:t.getItem}}),t._v(" "),a("mu-load-more",{staticClass:"loadMore",attrs:{loading:t.loading,"loaded-all":t.loadingAll},on:{load:t.loadMore}},[a("div",{staticClass:"movie-list"},t._l(t.movielist,function(e){return a("div",{key:e.movie_title,staticClass:"item"},[a("movie-item",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.toPLayer(e,a)},expression:"(e)=>toPLayer(item,e)"}],attrs:{movieinfo:e}})],1)}),0)]),t._v(" "),a("v-tabs")],1)},staticRenderFns:[]};var O=a("VU/8")(J,G,!1,function(t){a("KNeJ")},"data-v-8f35b03c",null).exports,B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-item"},[a("div",{staticClass:"image-info"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.tvinfo.tv_image,expression:"tvinfo['tv_image']"}],staticClass:"image"}),t._v(" "),a("div",{staticClass:"caption"},[t._v(t._s(t.tvinfo.tv_caption))])]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.tvinfo.tv_title))]),t._v(" "),a("div",{staticClass:"remark"},[t._v(t._s(t.tvinfo.tv_desc))])])},staticRenderFns:[]};var tt={data:function(){return{picScroll:!1,categoryList:{},select:{feature:-1,iarea:-1,year:-1,pay:-1}}},mounted:function(){var t=this;this.$on("category",function(e){t.categoryList=e,t.$nextTick(function(){t._initPics()})})},watch:{categoryList:function(){var t=this;this.$nextTick(function(){t._initPics()})}},methods:{_initPics:function(){var t=this,e=this.$refs.wrapper;this.$nextTick(function(){if(t.picScroll)for(var a=0;a<e.length;a++)t["picScroll"+a].refresh();else for(var i=0;i<e.length;i++)t["picScroll"+i]=new M.a(e[i],{scrollX:!0,eventPassthrough:"vertical"})})},categoryTouch:function(t){this.select[t.key]=t.key_val,this.$emit("getitem",this.select)}}},et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-expansion-panel",[a("div",{staticClass:"category-all",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"title"},[t._v("查看所有分类")])]),t._v(" "),a("div",{staticClass:"category-box"},t._l(t.categoryList,function(e,i){return a("div",{key:i,staticClass:"category-list"},[a("div",{staticClass:"label"},[a("div",[t._v(t._s(e[0].label))])]),t._v(" "),a("div",{ref:"wrapper",refInFor:!0,staticClass:"wrapper"},[a("ul",{ref:"list",refInFor:!0,staticClass:"list"},t._l(e,function(e){return a("div",{key:e.key_val,staticClass:"itembox"},[a("div",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.categoryTouch(e,a)},expression:"(e)=>categoryTouch(item,e)"}],class:{current:e.key_val==t.select[e.key]}},[t._v("\n                                   "+t._s(e.name)+"\n                               \n                               ")])])}),0)])])}),0)])],1)},staticRenderFns:[]};function at(t){return Z({url:"tvItem",method:"post",data:t})}var it={name:"tv",components:{"search-btn":F,"tv-item":a("VU/8")({props:["tvinfo"],data:function(){return{}}},B,!1,function(t){a("5QNi")},"data-v-514c748b",null).exports,"tv-category":a("VU/8")(tt,et,!1,function(t){a("KWak")},"data-v-73204456",null).exports,"v-tabs":q},data:function(){return{categoryList:{},tvList:[],loading:!1,page:1,size:30,category:{},Loading:null,loadingAll:!1}},methods:{loadMore:function(){var t=this;this.loading=!0,this.page+=1,at({page:this.page,size:this.size,category:this.category}).then(function(e){t.loading=!1,200==e.code&&(t.tvList=[].concat(R()(t.tvList),R()(e.data)),e.data&&e.data.length<t.size&&(t.loadingAll=!0))}).catch(function(e){t.loading=!1})},getCategryList:function(){var t,e=this;(t={},Z({url:"tvCategory",method:"post",data:t})).then(function(t){200==t.code&&(e.categoryList=t.data,e.$refs.category.$emit("category",t.data))}).catch(function(t){e.loading=!1})},getItem:function(t){console.log(t),this.category=t,this.page=1,this.getTvItem()},getTvItem:function(){var t=this;this.Loading=this.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),at({page:this.page,size:this.size,category:this.category}).then(function(e){t.Loading.close(),200==e.code&&(t.tvList=e.data,e.data&&e.data.length<t.size&&(t.loadingAll=!0))}).catch(function(e){t.loading=!1,t.Loading.close()})},toPLayer:function(t,e){console.log(t),this.state.item_id=t.id,this.$router.push("/tvlist")}},created:function(){this.state.active_tab=1,this.getCategryList(),this.getTvItem()}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("router-link",{attrs:{to:"/search"}},[a("search-btn",{attrs:{title:"搜索电视剧名称"}})],1)],1),t._v(" "),a("tv-category",{ref:"category",on:{getitem:t.getItem}}),t._v(" "),a("mu-load-more",{staticClass:"loadMore",attrs:{loading:t.loading,"loaded-all":t.loadingAll},on:{load:t.loadMore}},[a("div",{staticClass:"movie-list"},t._l(t.tvList,function(e){return a("div",{key:e.tv_title,staticClass:"item"},[a("tv-item",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.toPLayer(e,a)},expression:"(e)=>toPLayer(item,e)"}],attrs:{tvinfo:e}})],1)}),0)]),t._v(" "),a("v-tabs")],1)},staticRenderFns:[]};var st=a("VU/8")(it,nt,!1,function(t){a("3R45")},"data-v-35a093c9",null).exports,rt={components:{"v-tabs":q},data:function(){return{}},created:function(){this.state.active_tab=3}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    动漫\n    "),e("v-tabs")],1)},staticRenderFns:[]},lt=a("VU/8")(rt,ot,!1,null,null,null).exports,ct={components:{"v-tabs":q},data:function(){return{}},created:function(){this.state.active_tab=2}},ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    综艺\n    "),e("v-tabs")],1)},staticRenderFns:[]},vt=a("VU/8")(ct,ut,!1,null,null,null).exports,dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tv-list"},[e("div",{staticClass:"item",class:{current:this.url==this.list.tv_url}},[this._v("\n        "+this._s(this.list.tv_num)+"\n    ")]),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:1==this.list.is_trail_notice,expression:"list['is_trail_notice'] == 1"}],staticClass:"mark"},[e("img",{staticClass:"mark_pic",attrs:{src:"//i.gtimg.cn/qqlive/images/mark/mark_12.png",alt:"预告",srcset:"//i.gtimg.cn/qqlive/images/mark/mark_12@2x.png 2x"}})])])},staticRenderFns:[]};var mt={components:{"v-tv-list":a("VU/8")({props:["list","url"],data:function(){return{}}},dt,!1,function(t){a("gZ6Y")},"data-v-2b096c3a",null).exports},data:function(){return{list:[],Loading:null,url:""}},methods:{getList:function(){var t,e=this;this.Loading=this.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),(t={id:this.state.item_id},Z({url:"tvList",method:"post",data:t})).then(function(t){e.Loading.close(),200==t.code&&(console.log(t.data),e.list=t.data)}).catch(function(t){e.Loading.close()})},goPlayer:function(t){this.url=t.tv_url,this.state.tv_list_url=t.tv_url,this.state.url=t.tv_url,this.$router.push("/player")}},created:function(){this.url=this.state.tv_list_url,this.getList()}},ft={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tv-lists"},t._l(t.list,function(e){return a("v-tv-list",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.goPlayer(e,a)},expression:"(e)=>goPlayer(list,e)"}],key:e.tv_num,attrs:{list:e,url:t.url}})}),1)},staticRenderFns:[]};var ht=a("VU/8")(mt,ft,!1,function(t){a("bfX/")},"data-v-138c0701",null).exports,gt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("iframe",{attrs:{src:this.url,width:"100%",height:"100%"}})])},staticRenderFns:[]};var pt=a("VU/8")({data:function(){return{url:""}},created:function(){this.url="http://jx.598110.com/?url="+this.state.url}},gt,!1,function(t){a("M/gT")},"data-v-9a2957da",null).exports,_t={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},data:function(){return{value:"",page:1,size:30}},methods:{search:function(t){if(this.value.trim()){this.page=1;var e={search:this.value,page:this.page,size:this.size};this.$emit("search",e)}else console.log("111111"),this.$toast.message("搜索内容不能为空")}}},yt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container"},[a("div",{staticClass:"search"},[a("form",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"focus",rawName:"v-focus",value:!0,expression:"true"}],staticClass:"input",attrs:{placeholder:"输入电影名称"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]),t._v(" "),a("div",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.search(e)},expression:"(e)=>search(e)"}],staticClass:"btn"},[t._v("\n        搜索\n   ")])])},staticRenderFns:[]};var bt={components:{"v-search":a("VU/8")(_t,yt,!1,function(t){a("8lv5")},"data-v-2bfa0343",null).exports,"movie-item":U},data:function(){return{movielist:[],toastInstanse:null,search:{},loading:!1,Loading:null}},methods:{loadMore:function(){var t=this;this.loading=!0,this.search.page+=1,H(this.search).then(function(e){t.loading=!1,200==e.code?t.movielist=[].concat(R()(t.movielist),R()(e.data)):t.$toast.message(e.msg)})},toPLayer:function(t,e){this.state.url=t.movie_url,this.$router.push("/player")},searchMovie:function(t){var e=this;this.search=t,this.Loading=this.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),H(t).then(function(t){e.Loading.close(),200==t.code&&(e.movielist=t.data)})}}},Ct={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-search",{on:{search:t.searchMovie}}),t._v(" "),a("mu-load-more",{attrs:{loading:t.loading},on:{load:t.loadMore}},[a("div",{staticClass:"movie-list"},t._l(t.movielist,function(e){return a("div",{key:e.movie_title,staticClass:"item"},[a("movie-item",{directives:[{name:"tap",rawName:"v-tap",value:function(a){return t.toPLayer(e,a)},expression:"(e)=>toPLayer(item,e)"}],attrs:{movieinfo:e}})],1)}),0)])],1)},staticRenderFns:[]};var xt=a("VU/8")(bt,Ct,!1,function(t){a("fKNI")},"data-v-c99e7bec",null).exports;var $t={data:function(){return{usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=6},message:"用户名最小长度为6"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=6},message:"密码最小长度为6"}],form:{name:"",pass:"",store:!0},btnDisable:!0,loading:!1}},methods:{validate:function(t){var e=this;this.$refs.form.validate().then(function(t){e.btnDisable=!t})},submit:function(){var t=this;this.$refs.form.validate().then(function(e){var a;e&&(t.loading=t.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),(a=t.form,Z({url:"login",method:"post",data:a})).then(function(e){t.loading.close(),200==e.code&&(Y.a.set("name",e.data.name,{expires:365}),Y.a.set("vplayer",e.data.token,{expires:365}),t.$toast.message("登录成功"),t.$router.replace("/"))}))})}}},kt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.form}},[a("mu-form-item",{attrs:{label:"用户名",prop:"name",rules:t.usernameRules}},[a("mu-text-field",{attrs:{prop:"name"},on:{input:t.validate},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("mu-form-item",{attrs:{label:"密码",prop:"pass",rules:t.passwordRules}},[a("mu-text-field",{attrs:{type:"password",prop:"pass"},on:{input:t.validate},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),t._v(" "),a("mu-form-item",{staticClass:"storage"},[a("mu-checkbox",{attrs:{label:"记住密码"},model:{value:t.form.store,callback:function(e){t.$set(t.form,"store",e)},expression:"form.store"}})],1),t._v(" "),a("mu-form-item",{staticClass:"submit"},[a("mu-button",{attrs:{color:"primary",round:"",disabled:t.btnDisable},on:{click:t.submit}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var Lt=a("VU/8")($t,kt,!1,function(t){a("yUXu")},"data-v-3f4344bc",null).exports,wt={data:function(){return{usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=6},message:"用户名最小长度为6"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=6},message:"密码最小长度为6"}],form:{name:"",pass:""},btnDisable:!0,loading:null}},methods:{validate:function(t){var e=this;this.$refs.form.validate().then(function(t){e.btnDisable=!t})},submit:function(){var t=this;this.$refs.form.validate().then(function(e){var a;e&&(t.loading=t.$loading({overlayColor:"rgba(0,0,0,.2)",size:48,color:"primary",className:""}),(a=t.form,Z({url:"registe",method:"post",data:a})).then(function(e){t.loading.close(),200==e.code&&(t.$toast.message("注册成功 ，直接登录"),t.$router.replace("/login"))}))})}}},zt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.form}},[a("mu-form-item",{attrs:{label:"用户名","help-text":"建议使用手机或qq号码",prop:"name",rules:t.usernameRules}},[a("mu-text-field",{attrs:{prop:"name"},on:{input:t.validate},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("mu-form-item",{attrs:{label:"密码",prop:"pass",rules:t.passwordRules}},[a("mu-text-field",{attrs:{type:"password",prop:"pass"},on:{input:t.validate},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),t._v(" "),a("mu-form-item",{staticClass:"submit"},[a("mu-button",{attrs:{color:"primary",round:"",disabled:t.btnDisable},on:{click:t.submit}},[t._v("注册")])],1),t._v(" "),a("mu-form-item",{staticClass:"storage login"},[a("router-link",{attrs:{to:"/login"}},[t._v("已经有用户名？直接登录")])],1)],1)],1)},staticRenderFns:[]};var Rt=a("VU/8")(wt,zt,!1,function(t){a("+ZKU")},"data-v-2d7e7bc7",null).exports,Nt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404 ")])},staticRenderFns:[]},Ft=a("VU/8")(null,Nt,!1,null,null,null).exports;$.default.use(w.a);var Pt=new w.a({mode:"history",routes:[{path:"/",name:"movie",component:O},{path:"/tv",name:"tv",component:st},{path:"/cartoon",name:"cartoon",component:lt},{path:"/variety",name:"variety",component:vt},{path:"/tvlist",name:"tvlist",component:ht},{path:"/player",name:"player",component:pt},{path:"/search",name:"search",component:xt},{path:"/login",name:"login",component:Lt},{path:"/registe",name:"registe",component:Rt},{path:"*",name:"404",component:Ft}]}),Ut=a("GoTr"),Mt=a.n(Ut),Et=(a("k84x"),a("uEvk"),a("+nBf")),It=a.n(Et),Tt=a("cTzj"),Vt=a.n(Tt),qt=(a("Chq7"),a("0Y+k"),a("1kwf"));a("n4oI");$.default.use(qt.a),$.default.use(It.a),$.default.use(D.a,{position:"top",time:2e3,close:!1}),$.default.use(Vt.a,{}),$.default.use(Mt.a),$.default.use(x.a),$.default.use(b.a),$.default.use(_.a),$.default.use(g.a),$.default.use(f.a),$.default.use(d.a),$.default.use(u.a),$.default.use(l.a),$.default.use(r.a),$.default.use(n.a),$.default.prototype.state={url:"",active_tab:0,item_id:0,tv_list_url:""},$.default.config.productionTip=!1,new $.default({el:"#app",router:Pt,components:{App:L},template:"<App/>"})},Y2Sm:function(t,e){},"bfX/":function(t,e){},bmTF:function(t,e){},csDf:function(t,e){},fKNI:function(t,e){},gZ6Y:function(t,e){},hRki:function(t,e){},"i+Ai":function(t,e){},k84x:function(t,e){},k8Pb:function(t,e){},kLMm:function(t,e){},"m/7z":function(t,e){},mhXF:function(t,e){},n4oI:function(t,e){},nbni:function(t,e){},pCZj:function(t,e){},q1I5:function(t,e){},qQji:function(t,e){},qbxe:function(t,e){},uEvk:function(t,e){},uMhA:function(t,e){},uPa8:function(t,e){},w6w5:function(t,e){},y7qm:function(t,e){},yUXu:function(t,e){},"z+11":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.922b1c636ac6e1538691.js.map