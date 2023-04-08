var w=Object.defineProperty;var C=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(s,n,e)=>n in s?w(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e,k=(s,n)=>{for(var e in n||(n={}))B.call(n,e)&&b(s,e,n[e]);if(C)for(var e of C(n))S.call(n,e)&&b(s,e,n[e]);return s};var y=(s,n,e)=>(b(s,typeof n!="symbol"?n+"":n,e),e);var _=(s,n,e)=>new Promise((r,c)=>{var d=t=>{try{a(e.next(t))}catch(o){c(o)}},f=t=>{try{a(e.throw(t))}catch(o){c(o)}},a=t=>t.done?r(t.value):Promise.resolve(t.value).then(d,f);a((e=e.apply(s,n)).next())});import{a as useDesign,f as useUserStore,a9 as getBotList,aa as sendMsg,ab as wsUrl,ac as Api,ad as getGroupList,ae as getFriendList,af as getGroupMemberList,w as withInstall}from"./index.aaa1a380.js";import{A as defineComponent,bn as storeToRefs,r as ref,B as openBlock,D as createElementBlock,w as createVNode,a5 as withCtx,aa as Fragment,ao as renderList,a1 as createBlock,K as normalizeClass,u as unref,bo as Avatar,ap as Popover,v as message,m as lib,P as reactive,j as computed,a_ as Divider,bp as FormItem,bq as Select,an as Input,aS as Button,a4 as mergeProps,aY as Form,ad as createTextVNode,M as Modal,br as ExclamationCircleOutlined,ai as onUnmounted,H as createBaseVNode,aw as SearchOutlined,J as toDisplayString,X as normalizeStyle,bs as Tag,bt as Image,bu as Table,bv as commonjsGlobal,bw as getDefaultExportFromCjs,al as watchEffect,bx as SelectOptGroup,by as SelectOption,W as toRefs}from"./vendor.a45ea33e.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */var BotSwitch_vue_vue_type_style_index_0_lang="";const _sfc_main$7=defineComponent({setup(s){const{prefixCls:n}=useDesign("botSwitch"),e=useUserStore(),{qq:r}=storeToRefs(e),c=ref([]),d=()=>_(this,null,function*(){c.value=[];let a=yield getBotList();for(let t of a)c.value.push({id:t,pic:"http://q4.qlogo.cn/g?b=qq&nk="+t+"&s=640"});r.value===0&&a.length>0&&e.setQQ(a[0])}),f=a=>{e.setQQ(a.id),message.info("\u5207\u6362\u5230QQ: "+r.value)};return d(),(a,t)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Popover),{title:"\u70B9\u51FB\u4E0B\u5217\u5934\u50CF, \u5207\u6362QQ\u53F7",trigger:"click"},{content:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(c.value,o=>(openBlock(),createBlock(unref(Avatar),{key:o.id,src:o.pic,onClick:u=>f(o),class:normalizeClass(`${unref(n)}__avatar`)},null,8,["src","onClick","class"]))),128))]),default:withCtx(()=>[createVNode(unref(Avatar),{src:"http://q4.qlogo.cn/g?b=qq&nk="+unref(r)+"&s=640"},null,8,["src"])]),_:1})]))}});var elements={};Object.defineProperty(elements,"__esModule",{value:!0});var segment=elements.segment=void 0;segment=elements.segment={text(s){return{type:"text",text:s}},face(s){return{type:"face",id:s}},sface(s,n){return{type:"sface",id:s,text:n}},bface(s,n){return{type:"bface",file:s,text:n}},rps(s){return{type:"rps",id:s}},dice(s){return{type:"dice",id:s}},at(s,n,e){return typeof s=="number"||s==="all"?{type:"at",qq:s,text:n,dummy:e}:{type:"at",qq:0,id:String(s),text:n,dummy:e}},image(s,n,e,r){return{type:"image",file:s,cache:n,timeout:e,headers:r}},flash(s,n,e,r){return{type:"flash",file:s,cache:n,timeout:e,headers:r}},record(s){return{type:"record",file:s}},video(s){return{type:"video",file:s}},json(s){return{type:"json",data:s}},xml(s,n){return{type:"xml",data:s,id:n}},mirai(s){return{type:"mirai",data:s}},share(s,n,e,r){return{type:"share",url:s,title:n,image:e,content:r}},location(s,n,e,r){return{type:"location",lat:s,lng:n,address:e,id:r}},poke(s){return{type:"poke",id:s}},fromCqcode(s){const n=[],e=s.matchAll(/\[CQ:[^\]]+\]/g);let r=0;for(let c of e){const d=s.slice(r,c.index).replace(/&#91;|&#93;|&amp;/g,unescapeCQ);d&&n.push({type:"text",text:d});const f=c[0];let a=f.replace("[CQ:","type=");a=a.substr(0,a.length-1),n.push(qs(a)),r=c.index+f.length}if(r<s.length){const c=s.slice(r).replace(/&#91;|&#93;|&amp;/g,unescapeCQ);c&&n.push({type:"text",text:c})}return n}};function unescapeCQ(s){return s==="&#91;"?"[":s==="&#93;"?"]":s==="&amp;"?"&":""}function unescapeCQInside(s){return s==="&#44;"?",":s==="&#91;"?"[":s==="&#93;"?"]":s==="&amp;"?"&":""}function qs(s,n=",",e="="){const r={},c=s.split(n);for(let d of c){const f=d.indexOf(e);f!==-1&&(r[d.substring(0,f)]=d.substr(f+1).replace(/&#44;|&#91;|&#93;|&amp;/g,unescapeCQInside))}for(let d in r)try{d!=="text"&&(r[d]=JSON.parse(r[d]))}catch(f){}return r}function genCqcode(s){let n="";for(const e of s){if(e.type==="text"){n+=e.text;continue}const r=k({},e);delete r.type;const c=lib.stringify(r,{delimiter:",",indices:!1,encoder:d=>{const f=d.toString();return f.replace(/&|,|\[|\]/g,escapeCQInside),f}});n+="[CQ:"+e.type+(c?",":"")+c+"]"}return n}function escapeCQInside(s){return s==="&"?"&amp;":s===","?"&#44;":s==="["?"&#91;":s==="]"?"&#93;":""}var MessageSendBox_vue_vue_type_style_index_0_lang="";const _hoisted_1$2=createTextVNode("\u53D1\u9001\u6D88\u606F"),_hoisted_2$1=createTextVNode("\u53D1\u9001"),_hoisted_3$1=createTextVNode("\u91CD\u7F6E"),_sfc_main$6=defineComponent({setup(s){const{prefixCls:n}=useDesign("messageSendBox"),e=reactive({gidList:[],msg:"",cqInput:"",cqOptions:[]}),r=computed(()=>({labelCol:{span:4},wrapperCol:{span:14}})),c=()=>{e.cqOptions=[],e.cqOptions.push({value:genCqcode([segment.face(0)]),label:"face QQ\u8868\u60C5(id=0~324)",key:"face"}),e.cqOptions.push({value:genCqcode([segment.rps(1)]),label:"rps \u731C\u62F3\u9B54\u6CD5\u8868\u60C5(id=1~3)",key:"rps"}),e.cqOptions.push({value:genCqcode([segment.at("all","\u53C2\u65701")]),label:"at @\u67D0\u4EBA",key:"at"}),e.cqOptions.push({value:genCqcode([segment.image("http://q4.qlogo.cn/g?b=qq&nk=1&s=640",!1)]),label:"image \u56FE\u7247",key:"image"}),e.cqOptions.push({value:genCqcode([segment.record("https://mm.cqu.cc/share/zhifubaodaozhang/mp3/1.mp3")]),label:"record \u8BED\u97F3",key:"record"}),e.cqOptions.push({value:genCqcode([segment.video("http://q4.qlogo.cn/g?b=qq&nk=1&s=640")]),label:"video \u77ED\u89C6\u9891",key:"video"}),e.cqOptions.push({value:genCqcode([segment.poke(123456)]),label:"poke \u6233\u4E00\u6233",key:"poke"}),e.cqOptions.push({value:genCqcode([segment.share("http://q4.qlogo.cn/g?b=qq&nk=1&s=640","\u6807\u9898")]),label:"share \u94FE\u63A5\u5206\u4EAB",key:"share"}),e.cqOptions.push({value:"[CQ:cardimage,file=https://i.pixiv.re/img-master/img/2020/03/25/00/00/08/80334602_p0_master1200.jpg]",label:"cardimage \u88C5\u903C\u5927\u56FE",key:"cardimage"}),e.cqOptions.push({value:"[CQ:tts,text=\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u6D88\u606F]",label:"tts \u6587\u672C\u8F6C\u8BED\u97F3",key:"tts"}),e.cqOptions.push({value:"[CQ:reply,id=123456]",label:"reply \u56DE\u590D",key:"reply"}),e.cqOptions.push({value:"[CQ:music,type=163,id=28949129]",label:"music \u97F3\u4E50\u5206\u4EAB",key:"music"}),e.cqOptions.push({value:"[CQ:forward,id=123456]",label:"forward \u5408\u5E76\u8F6C\u53D1",key:"forward"})},d=()=>{e.msg+=e.cqInput},f=l=>{e.gidList=l},a=useUserStore(),{qq:t}=storeToRefs(a),o=()=>{Modal.confirm({title:()=>"\u786E\u5B9A\u8981\u53D1\u9001\u5168\u90E8\u7FA4\u804A?",icon:()=>createVNode(ExclamationCircleOutlined),content:()=>createVNode("div",{style:"color:red;"},"\u91CD\u590D\u4FE1\u606F, \u8BF7\u52FF\u591A\u6B21\u53D1\u9001\u5168\u90E8\u7FA4\u804A"),onOk(){sendMsg({selfId:t.value,gidList:e.gidList,message:e.msg}),message.info("\u53D1\u9001\u6210\u529F")},class:"test"})},u=()=>{if(e.gidList.includes(0)){o();return}sendMsg({selfId:t.value,gidList:e.gidList,message:e.msg}),message.info("\u53D1\u9001\u6210\u529F")},i=()=>{e.msg=""};return c(),(l,g)=>(openBlock(),createElementBlock("div",{class:normalizeClass(`${unref(n)}__sendbox`)},[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1$2]),_:1}),createVNode(unref(Form),mergeProps({layout:"horizontal"},unref(r),{model:unref(e)}),{default:withCtx(()=>[createVNode(unref(GroupAndFriendSelect),{onChangeGidList:f}),createVNode(unref(FormItem),{label:"\u793A\u4F8BCQ\u7801"},{default:withCtx(()=>[createVNode(unref(Select),{value:unref(e).cqInput,"onUpdate:value":g[0]||(g[0]=p=>unref(e).cqInput=p),"show-search":"",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u793A\u4F8BCQ\u7801",style:{width:"200px"},options:unref(e).cqOptions,onChange:d},null,8,["value","options"])]),_:1}),createVNode(unref(FormItem),{label:"\u6D88\u606F"},{default:withCtx(()=>[createVNode(unref(Input).TextArea,{value:unref(e).msg,"onUpdate:value":g[1]||(g[1]=p=>unref(e).msg=p),placeholder:"\u8BF7\u8F93\u5165\u6D88\u606F",style:{width:"400px"},rows:4},null,8,["value"])]),_:1}),createVNode(unref(FormItem),{"wrapper-col":{span:14,offset:4}},{default:withCtx(()=>[createVNode(unref(Button),{type:"primary",onClick:u,class:normalizeClass(`${unref(n)}__action`)},{default:withCtx(()=>[_hoisted_2$1]),_:1},8,["class"]),createVNode(unref(Button),{type:"primary",onClick:i,class:normalizeClass(`${unref(n)}__action`)},{default:withCtx(()=>[_hoisted_3$1]),_:1},8,["class"])]),_:1})]),_:1},16,["model"])],2))}});class Websocket1{constructor(n){y(this,"socket");this.socket=new WebSocket(n)}onMessage(n){this.socket.onmessage=n}onOpen(n){this.socket.onopen=n}onError(n){this.socket.onerror=n}onClose(n){this.socket.onclose=n}send(n){this.socket.send(JSON.stringify(n))}}const _hoisted_1$1=createTextVNode("\u6D88\u606F"),_hoisted_2={style:{padding:"8px"}},_hoisted_3=createTextVNode(" Search "),_hoisted_4=createTextVNode(" Reset "),_hoisted_5={key:0},_hoisted_6={key:0},_hoisted_7=createTextVNode("\u7FA4\u804A"),_hoisted_8={key:1},_hoisted_9=createTextVNode("\u79C1\u804A"),_hoisted_10={key:0},_hoisted_11={key:1},_hoisted_12={key:2},_hoisted_13={key:3},_sfc_main$5=defineComponent({setup(__props){const searchInput=ref(),sortedInfo=ref(),filteredInfo=ref(),columns=computed(()=>{const s=sortedInfo.value||{};return[{title:"\u65F6\u95F4",dataIndex:"time",key:"time",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(n,e)=>e.time.toString().toLowerCase().includes(n.toLowerCase()),onFilterDropdownVisibleChange:n=>{n&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6D88\u606Fid",dataIndex:"message_id",key:"message_id",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(n,e)=>e.message_id.toString().toLowerCase().includes(n.toLowerCase()),onFilterDropdownVisibleChange:n=>{n&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u7FA4\u540D",dataIndex:"group_name",key:"group_name",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"group_name"},onFilter:(n,e)=>e.group_name.toString().toLowerCase().includes(n.toLowerCase()),onFilterDropdownVisibleChange:n=>{n&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6635\u79F0",dataIndex:"nickname",key:"nickname",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"nickname"},onFilter:(n,e)=>e.nickname.toString().toLowerCase().includes(n.toLowerCase()),onFilterDropdownVisibleChange:n=>{n&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"message_type",key:"message_type",slots:{customRender:"message_type"},filters:[{text:"\u7FA4\u804A",value:"group"},{text:"\u79C1\u804A",value:"private"}],onFilter:(n,e)=>e.message_type.toString()===n,sorter:(n,e)=>n.message_type.length-e.message_type.length,sortOrder:s.columnKey==="message_type"&&s.order,ellipsis:!0},{title:"\u6D88\u606F\u5185\u5BB9",dataIndex:"raw_message",key:"raw_message",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"raw_message"},onFilter:(n,e)=>e.raw_message.toString().toLowerCase().includes(n.toLowerCase()),onFilterDropdownVisibleChange:n=>{n&&setTimeout(()=>{searchInput.value.focus()},100)}}]}),msgTableData=ref([]),state=reactive({searchText:"",searchedColumn:""}),handleSearch=(s,n,e)=>{n(),state.searchText=s[0],state.searchedColumn=e},handleChange=(s,n,e)=>{console.log("Various parameters",s,n,e),filteredInfo.value=n,sortedInfo.value=e},handleReset=s=>{s(),state.searchText=""},ws=new Websocket1(wsUrl+Api.data);return ws.onOpen(s=>{console.log(s),console.log("msg ws\u8FDE\u63A5\u5DF2\u6253\u5F00")}),ws.onMessage(event=>{let myDate=new Date;console.log(event.data);let result=eval("("+event.data+")");if(result.time=myDate.toLocaleString(),result.key=String(result.message_id),msgTableData.value.unshift(result),msgTableData.value.length>1e3){let s=Math.ceil(msgTableData.value.length/2);msgTableData.value.splice(s)}}),ws.onClose(()=>{console.log("ws\u8FDE\u63A5\u5DF2\u5173\u95ED")}),ws.onError(s=>{console.log("ws\u51FA\u73B0\u9519\u8BEF"+s)}),onUnmounted(()=>{ws.socket.close()}),(s,n)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1$1]),_:1}),createVNode(unref(Table),{columns:unref(columns),"data-source":msgTableData.value,onChange:handleChange},{filterDropdown:withCtx(({setSelectedKeys:e,selectedKeys:r,confirm:c,clearFilters:d,column:f})=>[createBaseVNode("div",_hoisted_2,[createVNode(unref(Input),{ref:(a,t)=>{t.searchInput=a,searchInput.value=a},placeholder:`\u641C\u7D22 ${f.title}`,value:r[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:a=>e(a.target.value?[a.target.value]:[]),onPressEnter:a=>handleSearch(r,c,f.dataIndex)},null,8,["placeholder","value","onChange","onPressEnter"]),createVNode(unref(Button),{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:a=>handleSearch(r,c,f.dataIndex)},{icon:withCtx(()=>[createVNode(unref(SearchOutlined))]),default:withCtx(()=>[_hoisted_3]),_:2},1032,["onClick"]),createVNode(unref(Button),{size:"small",style:{width:"90px"},onClick:a=>handleReset(d)},{default:withCtx(()=>[_hoisted_4]),_:2},1032,["onClick"])])]),customRender:withCtx(({text:e,column:r})=>[unref(state).searchText&&unref(state).searchedColumn===r.dataIndex?(openBlock(),createElementBlock("span",_hoisted_5,[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.toString().split(new RegExp(`(?<=${unref(state).searchText})|(?=${unref(state).searchText})`,"i")),(c,d)=>(openBlock(),createElementBlock(Fragment,null,[c.toLowerCase()===unref(state).searchText.toLowerCase()?(openBlock(),createElementBlock("mark",{class:"highlight",key:d},toDisplayString(c),1)):(openBlock(),createElementBlock(Fragment,{key:1},[createTextVNode(toDisplayString(c),1)],64))],64))),256))])):(openBlock(),createElementBlock(Fragment,{key:1},[createTextVNode(toDisplayString(e),1)],64))]),filterIcon:withCtx(e=>[createVNode(unref(SearchOutlined),{style:normalizeStyle({color:e?"#108ee9":void 0})},null,8,["style"])]),nickname:withCtx(({record:e})=>[createVNode(unref(Avatar),{src:"http://q4.qlogo.cn/g?b=qq&nk="+e.user_id+"&s=640"},null,8,["src"]),createBaseVNode("span",null,toDisplayString(e.nickname),1)]),group_name:withCtx(({record:e})=>[createVNode(unref(Avatar),{src:"https://p.qlogo.cn/gh/"+e.group_id+"/"+e.group_id+"/640/"},null,8,["src"]),createBaseVNode("span",null,toDisplayString(e.group_name),1)]),message_type:withCtx(({text:e})=>[e==="group"?(openBlock(),createElementBlock("span",_hoisted_6,[createVNode(unref(Tag),{color:"green"},{default:withCtx(()=>[_hoisted_7]),_:1})])):(openBlock(),createElementBlock("span",_hoisted_8,[createVNode(unref(Tag),{color:"red"},{default:withCtx(()=>[_hoisted_9]),_:1})]))]),raw_message:withCtx(({text:e})=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(segment).fromCqcode(e),(r,c)=>(openBlock(),createElementBlock("li",{key:c},[r.type==="text"?(openBlock(),createElementBlock("div",_hoisted_10,toDisplayString(r.text),1)):r.type==="image"?(openBlock(),createElementBlock("div",_hoisted_11,[createVNode(unref(Image),{width:200,src:r.url},null,8,["src"])])):r.type==="face"?(openBlock(),createElementBlock("div",_hoisted_12,[createVNode(unref(Image),{width:50,src:"https://blog.imashimaro.com/emoji/qq/"+r.id+"@2x.gif"},null,8,["src"])])):(openBlock(),createElementBlock("div",_hoisted_13,toDisplayString(r),1))]))),128))]),_:1},8,["columns","data-source"])]))}});var ansi_up={};(function(s){(function(n,e){if(typeof s.nodeName!="string")e(s);else{var r={};e(r),n.AnsiUp=r.default}})(commonjsGlobal,function(n){var e=this&&this.__makeTemplateObject||function(a,t){return Object.defineProperty?Object.defineProperty(a,"raw",{value:t}):a.raw=t,a},r;(function(a){a[a.EOS=0]="EOS",a[a.Text=1]="Text",a[a.Incomplete=2]="Incomplete",a[a.ESC=3]="ESC",a[a.Unknown=4]="Unknown",a[a.SGR=5]="SGR",a[a.OSCURL=6]="OSCURL"})(r||(r={}));var c=function(){function a(){this.VERSION="5.1.0",this.setup_palettes(),this._use_classes=!1,this.bold=!1,this.italic=!1,this.underline=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(a.prototype,"use_classes",{get:function(){return this._use_classes},set:function(t){this._use_classes=t},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(t){this._url_whitelist=t},enumerable:!1,configurable:!0}),a.prototype.setup_palettes=function(){var t=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach(function(v){v.forEach(function(x){t.palette_256.push(x)})});for(var o=[0,95,135,175,215,255],u=0;u<6;++u)for(var i=0;i<6;++i)for(var l=0;l<6;++l){var g={rgb:[o[u],o[i],o[l]],class_name:"truecolor"};this.palette_256.push(g)}for(var p=8,h=0;h<24;++h,p+=10){var m={rgb:[p,p,p],class_name:"truecolor"};this.palette_256.push(m)}},a.prototype.escape_txt_for_html=function(t){return t.replace(/[&<>"']/gm,function(o){if(o==="&")return"&amp;";if(o==="<")return"&lt;";if(o===">")return"&gt;";if(o==='"')return"&quot;";if(o==="'")return"&#x27;"})},a.prototype.append_buffer=function(t){var o=this._buffer+t;this._buffer=o},a.prototype.get_next_packet=function(){var t={kind:r.EOS,text:"",url:""},o=this._buffer.length;if(o==0)return t;var u=this._buffer.indexOf("");if(u==-1)return t.kind=r.Text,t.text=this._buffer,this._buffer="",t;if(u>0)return t.kind=r.Text,t.text=this._buffer.slice(0,u),this._buffer=this._buffer.slice(u),t;if(u==0){if(o==1)return t.kind=r.Incomplete,t;var i=this._buffer.charAt(1);if(i!="["&&i!="]")return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;if(i=="["){this._csi_regex||(this._csi_regex=d(e([`
                        ^                           # beginning of line
                                                    #
                                                    # First attempt
                        (?:                         # legal sequence
                          [                      # CSI
                          ([<-?]?)              # private-mode char
                          ([d;]*)                    # any digits or semicolons
                          ([ -/]?               # an intermediate modifier
                          [@-~])                # the command
                        )
                        |                           # alternate (second attempt)
                        (?:                         # illegal sequence
                          [                      # CSI
                          [ -~]*                # anything legal
                          ([\0-:])              # anything illegal
                        )
                    `],[`
                        ^                           # beginning of line
                                                    #
                                                    # First attempt
                        (?:                         # legal sequence
                          \\x1b\\[                      # CSI
                          ([\\x3c-\\x3f]?)              # private-mode char
                          ([\\d;]*)                    # any digits or semicolons
                          ([\\x20-\\x2f]?               # an intermediate modifier
                          [\\x40-\\x7e])                # the command
                        )
                        |                           # alternate (second attempt)
                        (?:                         # illegal sequence
                          \\x1b\\[                      # CSI
                          [\\x20-\\x7e]*                # anything legal
                          ([\\x00-\\x1f:])              # anything illegal
                        )
                    `])));var l=this._buffer.match(this._csi_regex);if(l===null)return t.kind=r.Incomplete,t;if(l[4])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;l[1]!=""||l[3]!="m"?t.kind=r.Unknown:t.kind=r.SGR,t.text=l[2];var g=l[0].length;return this._buffer=this._buffer.slice(g),t}if(i=="]"){if(o<4)return t.kind=r.Incomplete,t;if(this._buffer.charAt(2)!="8"||this._buffer.charAt(3)!=";")return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;this._osc_st||(this._osc_st=f(e([`
                        (?:                         # legal sequence
                          (\\)                    # ESC                           |                           # alternate
                          (\x07)                      # BEL (what xterm did)
                        )
                        |                           # alternate (second attempt)
                        (                           # illegal sequence
                          [\0-]                 # anything illegal
                          |                           # alternate
                          [\b-]                 # anything illegal
                          |                           # alternate
                          [-]                 # anything illegal
                        )
                    `],[`
                        (?:                         # legal sequence
                          (\\x1b\\\\)                    # ESC \\
                          |                           # alternate
                          (\\x07)                      # BEL (what xterm did)
                        )
                        |                           # alternate (second attempt)
                        (                           # illegal sequence
                          [\\x00-\\x06]                 # anything illegal
                          |                           # alternate
                          [\\x08-\\x1a]                 # anything illegal
                          |                           # alternate
                          [\\x1c-\\x1f]                 # anything illegal
                        )
                    `]))),this._osc_st.lastIndex=0;{var p=this._osc_st.exec(this._buffer);if(p===null)return t.kind=r.Incomplete,t;if(p[3])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t}{var h=this._osc_st.exec(this._buffer);if(h===null)return t.kind=r.Incomplete,t;if(h[3])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t}this._osc_regex||(this._osc_regex=d(e([`
                        ^                           # beginning of line
                                                    #
                        ]8;                    # OSC Hyperlink
                        [ -:<-~]*       # params (excluding ;)
                        ;                           # end of params
                        ([!-~]{0,512})        # URL capture
                        (?:                         # ST
                          (?:\\)                  # ESC                           |                           # alternate
                          (?:\x07)                    # BEL (what xterm did)
                        )
                        ([ -~]+)              # TEXT capture
                        ]8;;                   # OSC Hyperlink End
                        (?:                         # ST
                          (?:\\)                  # ESC                           |                           # alternate
                          (?:\x07)                    # BEL (what xterm did)
                        )
                    `],[`
                        ^                           # beginning of line
                                                    #
                        \\x1b\\]8;                    # OSC Hyperlink
                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)
                        ;                           # end of params
                        ([\\x21-\\x7e]{0,512})        # URL capture
                        (?:                         # ST
                          (?:\\x1b\\\\)                  # ESC \\
                          |                           # alternate
                          (?:\\x07)                    # BEL (what xterm did)
                        )
                        ([\\x20-\\x7e]+)              # TEXT capture
                        \\x1b\\]8;;                   # OSC Hyperlink End
                        (?:                         # ST
                          (?:\\x1b\\\\)                  # ESC \\
                          |                           # alternate
                          (?:\\x07)                    # BEL (what xterm did)
                        )
                    `])));var l=this._buffer.match(this._osc_regex);if(l===null)return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;t.kind=r.OSCURL,t.url=l[1],t.text=l[2];var g=l[0].length;return this._buffer=this._buffer.slice(g),t}}},a.prototype.ansi_to_html=function(t){this.append_buffer(t);for(var o=[];;){var u=this.get_next_packet();if(u.kind==r.EOS||u.kind==r.Incomplete)break;u.kind==r.ESC||u.kind==r.Unknown||(u.kind==r.Text?o.push(this.transform_to_html(this.with_state(u))):u.kind==r.SGR?this.process_ansi(u):u.kind==r.OSCURL&&o.push(this.process_hyperlink(u)))}return o.join("")},a.prototype.with_state=function(t){return{bold:this.bold,italic:this.italic,underline:this.underline,fg:this.fg,bg:this.bg,text:t.text}},a.prototype.process_ansi=function(t){for(var o=t.text.split(";");o.length>0;){var u=o.shift(),i=parseInt(u,10);if(isNaN(i)||i===0)this.fg=this.bg=null,this.bold=!1,this.italic=!1,this.underline=!1;else if(i===1)this.bold=!0;else if(i===3)this.italic=!0;else if(i===4)this.underline=!0;else if(i===22)this.bold=!1;else if(i===23)this.italic=!1;else if(i===24)this.underline=!1;else if(i===39)this.fg=null;else if(i===49)this.bg=null;else if(i>=30&&i<38)this.fg=this.ansi_colors[0][i-30];else if(i>=40&&i<48)this.bg=this.ansi_colors[0][i-40];else if(i>=90&&i<98)this.fg=this.ansi_colors[1][i-90];else if(i>=100&&i<108)this.bg=this.ansi_colors[1][i-100];else if((i===38||i===48)&&o.length>0){var l=i===38,g=o.shift();if(g==="5"&&o.length>0){var p=parseInt(o.shift(),10);p>=0&&p<=255&&(l?this.fg=this.palette_256[p]:this.bg=this.palette_256[p])}if(g==="2"&&o.length>2){var h=parseInt(o.shift(),10),m=parseInt(o.shift(),10),v=parseInt(o.shift(),10);if(h>=0&&h<=255&&m>=0&&m<=255&&v>=0&&v<=255){var x={rgb:[h,m,v],class_name:"truecolor"};l?this.fg=x:this.bg=x}}}}},a.prototype.transform_to_html=function(t){var o=t.text;if(o.length===0||(o=this.escape_txt_for_html(o),!t.bold&&!t.italic&&!t.underline&&t.fg===null&&t.bg===null))return o;var u=[],i=[],l=t.fg,g=t.bg;t.bold&&u.push("font-weight:bold"),t.italic&&u.push("font-style:italic"),t.underline&&u.push("text-decoration:underline"),this._use_classes?(l&&(l.class_name!=="truecolor"?i.push(l.class_name+"-fg"):u.push("color:rgb("+l.rgb.join(",")+")")),g&&(g.class_name!=="truecolor"?i.push(g.class_name+"-bg"):u.push("background-color:rgb("+g.rgb.join(",")+")"))):(l&&u.push("color:rgb("+l.rgb.join(",")+")"),g&&u.push("background-color:rgb("+g.rgb+")"));var p="",h="";return i.length&&(p=' class="'+i.join(" ")+'"'),u.length&&(h=' style="'+u.join(";")+'"'),"<span"+h+p+">"+o+"</span>"},a.prototype.process_hyperlink=function(t){var o=t.url.split(":");if(o.length<1||!this._url_whitelist[o[0]])return"";var u='<a href="'+this.escape_txt_for_html(t.url)+'">'+this.escape_txt_for_html(t.text)+"</a>";return u},a}();function d(a){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var u=a.raw[0],i=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,l=u.replace(i,"");return new RegExp(l)}function f(a){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var u=a.raw[0],i=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,l=u.replace(i,"");return new RegExp(l,"g")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=c})})(ansi_up);var AnsiUp=getDefaultExportFromCjs(ansi_up);function removeHtmlTab(s){return s.replace(/<[^<>]+?>/g,"")}function escape2Html(s){const n={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return s.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(e,r){return n[r]})}var LogWebsocket_vue_vue_type_style_index_0_lang="";const _hoisted_1=createTextVNode("\u65E5\u5FD7"),_sfc_main$4=defineComponent({setup(s){const{prefixCls:n}=useDesign("logWebsocket"),e=ref([]),r=[{title:"\u5185\u5BB9",dataIndex:"msg",key:"msg",slots:{customRender:"msg"}}],c=new Websocket1(wsUrl+Api.getLog),d=new AnsiUp;return c.onOpen(f=>{console.log(f),console.log("log ws\u8FDE\u63A5\u5DF2\u6253\u5F00")}),c.onMessage(f=>{let a=d.ansi_to_html(f.data);if(e.value.unshift({msg:escape2Html(removeHtmlTab(a))}),e.value.length>1e3){let t=Math.ceil(e.value.length/2);e.value.splice(t)}}),c.onClose(()=>{console.log("ws\u8FDE\u63A5\u5DF2\u5173\u95ED")}),c.onError(f=>{console.log("ws\u51FA\u73B0\u9519\u8BEF"+f)}),onUnmounted(()=>{c.socket.close()}),(f,a)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1]),_:1}),createVNode(unref(Table),{columns:r,"data-source":e.value,class:normalizeClass(`${unref(n)}__table`)},{msg:withCtx(({text:t})=>[createBaseVNode("span",{class:normalizeClass(`${unref(n)}__msg`)},toDisplayString(t),3)]),_:1},8,["data-source","class"])]))}}),_sfc_main$3=defineComponent({emits:["changeGidList"],setup(s,{emit:n}){const e=ref([]),r=useUserStore(),{qq:c}=storeToRefs(r),d=ref([]),f=ref([]),a=()=>_(this,null,function*(){d.value=yield getGroupList({selfId:c.value}),d.value.unshift({group_id:0,group_name:"\u5168\u90E8\u7FA4\u804A",group_create_time:0,group_level:0,max_member_count:0,member_count:0})}),t=()=>_(this,null,function*(){f.value=yield getFriendList({selfId:c.value})}),o=()=>{n("changeGidList",e.value)};return watchEffect(()=>{a(),t()}),(u,i)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(FormItem),{label:"\u7FA4\u804A & \u597D\u53CB"},{default:withCtx(()=>[createVNode(unref(Select),{value:e.value,"onUpdate:value":i[0]||(i[0]=l=>e.value=l),mode:"multiple",style:{width:"40%"},placeholder:"\u8BF7\u9009\u62E9\u7FA4\u804A & \u597D\u53CB",onChange:o},{default:withCtx(()=>[createVNode(unref(SelectOptGroup),{label:"\u7FA4\u804A"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(d.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:l.group_id,key:l.group_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.group_name+" ("+l.group_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1}),createVNode(unref(SelectOptGroup),{label:"\u597D\u53CB"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(f.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:-l.user_id,key:l.user_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.nickname+" ("+l.user_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1})]))}});var GroupSelect_vue_vue_type_style_index_0_lang="";const _sfc_main$2=defineComponent({emits:["changeGroupId"],setup(s,{emit:n}){const{prefixCls:e}=useDesign("groupSelect"),r=ref(),c=useUserStore(),{qq:d}=storeToRefs(c),f=ref([]),a=()=>_(this,null,function*(){f.value=yield getGroupList({selfId:d.value}),f.value!==null&&f.value.unshift({group_id:0,group_name:"\u79C1\u804A",group_create_time:0,group_level:0,max_member_count:0,member_count:0})}),t=()=>{n("changeGroupId",r.value)},o=(u,i)=>i.value.toLowerCase().indexOf(u.toLowerCase())>=0;return watchEffect(()=>{a()}),(u,i)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(FormItem),{"has-feedback":"",label:"\u7FA4\u804A",name:"groupId"},{default:withCtx(()=>[createVNode(unref(Select),{value:r.value,"onUpdate:value":i[0]||(i[0]=l=>r.value=l),"show-search":"",placeholder:"\u8BF7\u9009\u62E9\u7FA4\u804A",onChange:t,onFilterOption:o,class:normalizeClass(`${unref(e)}__groupSelect`)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(f.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:l.group_id,key:l.group_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.group_name+" ("+l.group_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","class"])]),_:1})]))}});var GroupMemberSelect_vue_vue_type_style_index_0_lang="";const _sfc_main$1=defineComponent({props:{groupId:Number},emits:["changeGroupUserId"],setup(s,{emit:n}){const e=s,{prefixCls:r}=useDesign("groupMemberSelect"),{groupId:c}=toRefs(e),d=ref(),f=useUserStore(),{qq:a}=storeToRefs(f),t=ref([]),o=()=>_(this,null,function*(){t.value=yield getGroupMemberList({selfId:a.value,groupId:c==null?void 0:c.value}),t.value!==null&&t.value.unshift({age:0,area:"",card:"",card_changeable:!1,group_id:0,join_time:0,last_sent_time:0,level:"",nickname:"\u6240\u6709\u7FA4\u5458",role:"",sex:"",shut_up_timestamp:0,title:"",title_expire_time:0,unfriendly:!1,user_id:0})}),u=()=>{n("changeGroupUserId",d.value)},i=(l,g)=>g.value.toLowerCase().indexOf(l.toLowerCase())>=0;return watchEffect(()=>{o()}),(l,g)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(FormItem),{"has-feedback":"",label:"\u7FA4\u6210\u5458",name:"userId"},{default:withCtx(()=>[createVNode(unref(Select),{value:d.value,"onUpdate:value":g[0]||(g[0]=p=>d.value=p),"show-search":"",placeholder:"\u8BF7\u9009\u62E9\u7FA4\u6210\u5458",onChange:u,onFilterOption:i,class:normalizeClass(`${unref(r)}__groupMemberSelect`)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(t.value,p=>(openBlock(),createBlock(unref(SelectOption),{value:p.user_id,key:p.user_id},{default:withCtx(()=>[createTextVNode(toDisplayString(p.nickname+" ("+p.user_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","class"])]),_:1})]))}});var FriendSelect_vue_vue_type_style_index_0_lang="";const _sfc_main=defineComponent({emits:["changeUserId"],setup(s,{emit:n}){const{prefixCls:e}=useDesign("friendSelect"),r=ref(),c=useUserStore(),{qq:d}=storeToRefs(c),f=ref([]),a=()=>_(this,null,function*(){f.value=yield getFriendList({selfId:d.value})}),t=()=>{n("changeUserId",r.value)},o=(u,i)=>i.value.toLowerCase().indexOf(u.toLowerCase())>=0;return watchEffect(()=>{a()}),(u,i)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(FormItem),{"has-feedback":"",label:"\u597D\u53CB",name:"userId"},{default:withCtx(()=>[createVNode(unref(Select),{value:r.value,"onUpdate:value":i[0]||(i[0]=l=>r.value=l),"show-search":"",placeholder:"\u8BF7\u9009\u62E9\u597D\u53CB",onChange:t,onFilterOption:o,class:normalizeClass(`${unref(e)}__friendSelect`)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(f.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:l.user_id,key:l.user_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.nickname+" ("+l.user_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","class"])]),_:1})]))}}),BotSwitch=withInstall(_sfc_main$7),MessageSendBox=withInstall(_sfc_main$6),MessageWebsocket=withInstall(_sfc_main$5),LogWebsocket=withInstall(_sfc_main$4),GroupAndFriendSelect=withInstall(_sfc_main$3),GroupSelect=withInstall(_sfc_main$2),GroupMemberSelect=withInstall(_sfc_main$1),FriendSelect=withInstall(_sfc_main);export{BotSwitch as B,FriendSelect as F,GroupAndFriendSelect as G,LogWebsocket as L,MessageSendBox as M,MessageWebsocket as a,GroupMemberSelect as b,GroupSelect as c};
