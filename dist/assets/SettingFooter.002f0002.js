import{_ as b,J as k,a as h,Z as v,f as R,V as O,b as M,ba as j,a7 as f,b2 as A,b3 as B,h as T}from"./index.aaa1a380.js";import{A as $,cj as w,bl as x,a0 as c,B as D,D as F,w as o,a5 as i,ad as u,J as d,K as J,u as m}from"./vendor.a45ea33e.js";const N=$({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:x},setup(){const e=k(),{prefixCls:p}=h("setting-footer"),{t:s}=M(),{createSuccessModal:g,createMessage:r}=T(),C=v(),l=R(),t=O();function n(){const{isSuccessRef:a}=j(JSON.stringify(m(t.getProjectConfig),null,2));m(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(f);const{colorWeak:a,grayMode:y}=f;A(a),B(y),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function _(){localStorage.clear(),t.resetAllState(),e.resetState(),C.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:n,handleResetSetting:S,handleClearAndRedo:_}}});function P(e,p,s,g,r,C){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return D(),F("div",{class:J(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),u(" "+d(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=b(N,[["render",P],["__scopeId","data-v-40ca4b3c"]]);export{W as default};
