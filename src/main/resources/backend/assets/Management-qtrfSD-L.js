import{i as E}from"./index-CM78VC0T.js";import{d as P,r as m,j as v,o as W,c as x,n as t,l,F as y,f as A,m as r,g as d,e as c,y as G,i as H,k,t as J,z as K,u}from"./index-D_0vH8B_.js";const ee=P({__name:"Management",setup(O){const{proxy:g}=H();let s=m({page:1,pageSize:5});const b=v(1);let o="待专家审核";const _=m([]),z=m(["待审核","待接单","待维修","已维修","工单销项","返工工单"]),C=A();v("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg");const L=e=>{s.pageSize=e,p()},S=e=>{s.page=e,p()};function T(e,i){return i.riskLevel===e}function I(e,i){return i.defectType===e}function U(e){return e.riskLevel==="一级风险"?"info":e.riskLevel==="二级风险"?"warning":"danger"}const p=async()=>{g.$startLoading();const e=await E({...s,status:o});if(g.$closeLoading(),e.code!==1)return g.$message.error("获取列表失败");_.splice(0,_.length,...e.data.records),b.value=e.data.total},j=e=>{console.log(e),C.push({path:"/defect/management/review",query:{id:e.picId}})},$=e=>{e==="0"?o="待专家审核":e==="1"?o="待维修人员接单":e==="2"?o="维修人员已接单，待维修":e==="3"?o="维修完成，待专家复审":e==="4"?o="专家复审通过，可销项":o="专家复审未通过，返工",console.log(o),p()};return W(()=>{p()}),(e,i)=>{const f=r("el-breadcrumb-item"),B=r("el-breadcrumb"),n=r("el-table-column"),h=r("el-image"),N=r("el-tag"),R=r("el-button"),V=r("el-table"),q=r("el-pagination"),F=r("el-tab-pane"),M=r("el-tabs"),D=r("el-card");return d(),x(y,null,[t(B,{separator:"/"},{default:l(()=>[t(f,{to:{path:"/home"}},{default:l(()=>[c("首页")]),_:1}),t(f,null,{default:l(()=>[c("缺陷检测管理")]),_:1}),t(f,null,{default:l(()=>[c("缺陷事件处理")]),_:1})]),_:1}),t(D,null,{default:l(()=>[t(M,{type:"card",class:"demo-tabs",onTabChange:$},{default:l(()=>[(d(!0),x(y,null,G(z,(w,Q)=>(d(),k(F,{label:w},{default:l(()=>[t(V,{data:_,stripe:"",border:"",fit:"",style:{width:"100%"}},{default:l(()=>[t(n,{type:"index",fixed:"",sortable:"",label:"序号",align:"center",width:"80"}),t(n,{prop:"id",label:"id",align:"center",width:"200"}),t(n,{prop:"picId",label:"图片编号",align:"center",width:"300"}),t(n,{prop:"inspectId",label:"巡检工编号",align:"center",width:"200"}),t(n,{prop:"description",label:"描述",align:"center",width:"200"}),t(n,{prop:"inspectedInfo",label:"寻监工信息",align:"center",width:"200"}),t(n,{label:"原始图片",width:"100"},{default:l(a=>[t(h,{style:{width:"60px",height:"60px"},src:a.row.originalUrl,"preview-src-list":[a.row.originalUrl]},null,8,["src","preview-src-list"])]),_:1}),t(n,{label:"分析后图片",width:"100"},{default:l(a=>[t(h,{style:{width:"60px",height:"60px"},src:a.row.analyzedUrl,"preview-src-list":[a.row.analyzedUrl]},null,8,["src","preview-src-list"])]),_:1}),t(n,{prop:"defectType",filters:[{text:"裂痕",value:"裂痕"},{text:"物理损坏",value:"物理损坏"},{text:"电气损坏",value:"电气损坏"},{text:"脏污",value:"脏污"},{text:"积雪覆盖",value:"积雪覆盖"},{text:"清洁",value:"清洁"}],label:"缺陷类型",align:"center",width:"150","filter-method":I}),t(n,{prop:"riskLevel",filters:[{text:"一级风险",value:"一级风险"},{text:"二级风险",value:"二级风险"},{text:"三级风险",value:"三级风险"}],label:"风险等级",align:"center",width:"150","filter-method":T},{default:l(a=>[t(N,{type:U(a.row),"disable-transitions":""},{default:l(()=>[c(J(a.row.riskLevel),1)]),_:2},1032,["type"])]),_:1}),t(n,{prop:"createTime",sortable:"",label:"创建时间",align:"center",width:"200"}),t(n,{prop:"updateTime",sortable:"",label:"更新时间",align:"center",width:"200"}),w==="待审核"?(d(),k(n,{key:0,fixed:"right",label:"操作",width:"120",align:"center"},{default:l(a=>[t(R,{link:"",type:"primary",size:"small",onClick:X=>j(a.row)},{default:l(()=>[c("审查")]),_:2},1032,["onClick"])]),_:1})):K("",!0)]),_:2},1032,["data"]),t(q,{"current-page":u(s).page,"onUpdate:currentPage":i[0]||(i[0]=a=>u(s).page=a),"page-size":u(s).pageSize,"onUpdate:pageSize":i[1]||(i[1]=a=>u(s).pageSize=a),"page-sizes":[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper",total:b.value,onSizeChange:L,onCurrentChange:S},null,8,["current-page","page-size","total"])]),_:2},1032,["label"]))),256))]),_:1})]),_:1})],64)}}});export{ee as default};