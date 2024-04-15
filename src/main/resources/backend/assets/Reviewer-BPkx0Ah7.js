import{d as M,c as P,u as G}from"./index-CWz7Ae3v.js";import{b as H,a as V,r as h,o as J,c as K,q as e,m as t,n as d,i as Q,g as u,u as p,s as W,e as F,k as X,_ as Y}from"./index-kk0mXoR3.js";const Z={class:"dialog-footer"},ee={class:"dialog-footer"},le=H({__name:"Reviewer",setup(te){const{proxy:m}=X();let r=V({name:"",page:1,pageSize:5}),y=h(1),v=V([]);const w=h(!1),n=V({nickName:"",password:"",phone:""}),g=h(!1),s=V({});function S(a){Object.assign(s,a),g.value=!0}async function R(){if(n.nickName===""||n.password===""||n.phone==="")return m.$message.error("请添加完整信息");m.$startLoading();const a=await P(n);m.$closeLoading(),console.log(a)}const L=a=>{r.pageSize=a,f()},I=a=>{r.page=a,f()},E=()=>{n.nickName="",n.password="",n.phone="",w.value=!0};function U(a){a&&a.resetFields()}async function $(){m.$startLoading();const a=await G(s.id,s);if(m.$closeLoading(),g.value=!1,a.code!=1)return m.$message.error("更新失败");m.$message.success("更新成功"),f()}function j(a){Object.assign(s,a),$()}const f=async()=>{const a=await M(r);if(a.code!==1)return m.$message.error("获取列表失败");v.splice(0,v.length,...a.data.records),y.value=a.data.total};return J(()=>{f()}),(a,o)=>{const C=d("el-breadcrumb-item"),B=d("el-breadcrumb"),c=d("el-button"),_=d("el-input"),z=d("el-col"),D=d("el-row"),i=d("el-table-column"),T=d("el-switch"),q=d("el-table"),A=d("el-pagination"),O=d("el-card"),b=d("el-form-item"),N=d("el-form"),x=d("el-dialog");return Q(),K("div",null,[e(B,{separator:"/"},{default:t(()=>[e(C,{to:{path:"/home"}},{default:t(()=>[u("首页")]),_:1}),e(C,null,{default:t(()=>[u("人员管理")]),_:1}),e(C,null,{default:t(()=>[u("巡检人员")]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(D,{gutter:20},{default:t(()=>[e(z,{span:8,offset:0},{default:t(()=>[e(_,{placeholder:"输入用户名查询",modelValue:p(r).name,"onUpdate:modelValue":o[0]||(o[0]=l=>p(r).name=l),clearable:"",onClear:f},{append:t(()=>[e(c,{icon:p(W),onClick:f},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),e(z,{span:4,offset:0},{default:t(()=>[e(c,{type:"primary",onClick:E},{default:t(()=>[u("新增")]),_:1})]),_:1})]),_:1}),e(q,{data:p(v),stripe:"",border:"",fit:"",style:{width:"100%"}},{default:t(()=>[e(i,{fixed:"",type:"index",sortable:"",label:"序号",align:"center",width:"100"}),e(i,{prop:"id",label:"ID",align:"center",width:"200"}),e(i,{prop:"nickName",label:"用户名",align:"center",width:"150"}),e(i,{prop:"password",label:"密码",align:"center",width:"300"}),e(i,{prop:"phone",label:"手机号",align:"center",width:"120"}),e(i,{prop:"createTime",sortable:"",label:"创建时间",align:"center",width:"300"}),e(i,{prop:"updateTime",sortable:"",label:"最后更新时间",align:"center",width:"300"}),e(i,{prop:"status",label:"状态",align:"center",width:"150"},{default:t(l=>[e(T,{modelValue:l.row.status,"onUpdate:modelValue":k=>l.row.status=k,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-value":1,"inactive-value":0,onClick:k=>j(l.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),e(i,{fixed:"right",label:"操作",width:"120",align:"center"},{default:t(l=>[e(c,{link:"",type:"primary",size:"small",onClick:k=>S(l.row)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(A,{"current-page":p(r).page,"onUpdate:currentPage":o[1]||(o[1]=l=>p(r).page=l),"page-size":p(r).pageSize,"onUpdate:pageSize":o[2]||(o[2]=l=>p(r).pageSize=l),"page-sizes":[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper",total:p(y),onSizeChange:L,onCurrentChange:I},null,8,["current-page","page-size","total"])]),_:1}),e(x,{"align-center":"",title:"编辑",modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=l=>g.value=l),width:"50%",onClose:o[7]||(o[7]=l=>U(a.editFormRef))},{footer:t(()=>[F("span",Z,[e(c,{onClick:o[5]||(o[5]=l=>g.value=!1)},{default:t(()=>[u("取 消")]),_:1}),e(c,{type:"primary",onClick:$},{default:t(()=>[u("确 定")]),_:1})])]),default:t(()=>[e(N,{model:s,ref:"editFormRef","label-width":"100px"},{default:t(()=>[e(b,{label:"姓名",prop:"name"},{default:t(()=>[e(_,{modelValue:s.nickName,"onUpdate:modelValue":o[3]||(o[3]=l=>s.nickName=l)},null,8,["modelValue"])]),_:1}),e(b,{label:"手机号",prop:"phone"},{default:t(()=>[e(_,{modelValue:s.phone,"onUpdate:modelValue":o[4]||(o[4]=l=>s.phone=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(x,{"align-center":"",title:"新增审查人员",modelValue:w.value,"onUpdate:modelValue":o[12]||(o[12]=l=>w.value=l),width:"40%",onClose:o[13]||(o[13]=l=>U(a.addFormRef))},{footer:t(()=>[F("span",ee,[e(c,{onClick:o[11]||(o[11]=l=>w.value=!1)},{default:t(()=>[u("取 消")]),_:1}),e(c,{type:"primary",onClick:R},{default:t(()=>[u("确 定")]),_:1})])]),default:t(()=>[e(N,{model:n,ref:"addFormRef","label-width":"100px"},{default:t(()=>[e(b,{label:"姓名",prop:"name"},{default:t(()=>[e(_,{modelValue:n.nickName,"onUpdate:modelValue":o[8]||(o[8]=l=>n.nickName=l)},null,8,["modelValue"])]),_:1}),e(b,{label:"手机号",prop:"phone"},{default:t(()=>[e(_,{modelValue:n.phone,"onUpdate:modelValue":o[9]||(o[9]=l=>n.phone=l)},null,8,["modelValue"])]),_:1}),e(b,{label:"密码",prop:"password"},{default:t(()=>[e(_,{modelValue:n.password,"onUpdate:modelValue":o[10]||(o[10]=l=>n.password=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}}),ne=Y(le,[["__scopeId","data-v-c1a44318"]]);export{ne as default};