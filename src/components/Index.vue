<template>
 <div>   
  
   <div style="text-align:center;"><h2><font color="#0099ff">WebOffice 在线编辑WORD ,EXCEL等文档处理演示</font></h2><br><br>
<br><b><font style="font-size:12pt;color:green">自动识动Office文档类型</font></b><br><br>
<table width=90% bgcolor=black cellpadding=1 cellspacing=1 align=center>
	<tr bgcolor=#cccccc>
		<th align=center nowrap><b>文件编号</b></td></th>
		<th><b>文件名</b></td></th>
		<th><b>类型</b></td></th>
		<th><b>文件大小</b></td></th>
		<th align=center><b>操作</b></td></th>
	</tr> 
	<tr>
		<td bgcolor=white align=center>230</td>
		<td bgcolor=white>测试文档20161108144356</td>
		<td bgcolor=white><a href="#" @click='WebClick'><img src="../assets/images/doc.gif" border=0></a>&nbsp;&nbsp;</td>
		<td bgcolor=white>11685</td><td bgcolor=white align=center><a href="#" @click='WebClick'>编辑</a>&nbsp;&nbsp; </td>
	</tr>
</table></div>
   
 </div>
</template>
<script>
 import * as WebCtrl from '../assets/WebOffice.js'  //注意路径
 export default {
 data () {
  return {
   testvalue: ''
  }
 },
 methods:{  
   WebClick:function(){   
	WebCtrl.ShowPage();
   } 
 }
} 
</script>
<style>
@import url("../assets/css/common.css");
</style>
 