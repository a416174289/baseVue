<template>
 <div><table width=100% bgcolor=#cccccc cellpadding=1 cellspacing=1>
<tr>
<td valign=top width=80 bgcolor=white align=center>
 <table id="tablebut"><tr><td valign="top">
 <input type=hidden name=oper value=doedit id=oper></input>
[<b style="color:green">保存操作</b>]<br>
<input type="button"  class="button" value="同步保存" style="width:80px" @click="WebHttpSave();"/></input><br />
<input type=submit class="button" value="异步保存" @click="WebSave()"></input><br>
<input type=button class="button" value="重调文档"  @click="WebDocReload()"></input></br>
[<b style="color:green">复制</b>]</br>
<input type="button" class="button" value="充许复制" @click='NoCopyIt(0)'></input></br>
<input type="button" class="button" value="不充许复制" @click='NoCopyIt(1)'></input></br>
[<b style="color:green">打开保存</b>]<br>
<input type=button class="button" value="打开方式一" @click="WebOpen1()"></input><br>
<input type=button class="button" value="打开方式二" @click="WebOpen2()"></input><br>
<input type=button class="button" value="打开方式三" @click="WebOpen3()"></input><br> 
<input type=button class="button" value="新建文件EXCEL" @click="CreateXLS()"></input><br>
<input type=button class="button" value="新建文件WORD" @click="CreateDoc()"></input><br>
<input type=button class="button" value="新建文件PPT" @click="CreatePpt()"></input><br>
<input type=button class="button" value="保存到C:\a.doc"  @click="WebSaveC()"><br>
<input type=button class="button" value="打开本地文件"  @click="WebOpenLocal()"></input><br>
<input type=button class="button" value="存为本地文件"  @click="WebSaveLocal()"></input><br>
<input type=button class="button" value="指定页保存"  @click="WebSavePage()"></input><br>

<input type=button class="button" value="删除文件"  @click="WebDelFile()"></input><br>
[<b style="color:green">文档转换</b>]<br>


<input type=button class="button" value="保存本地PDF"  @click="WebSaveLocalPdf()"></input><br>
<input type=button class="button" value="保存本地HTML"  @click="WebSaveLocalHTML()"></input><br>
 
[<b style="color:green">打印控制</b>]<br>
<input type=button class="button" value="打印预览"  @click="WebDocPrintPreView()"></input><br>
<input type=button class="button" value="设置后打印一"  @click="WebDocPrint()"></input><br>
<input type=button class="button" value="设置后打印二"  @click="WebDocPrint2()"></input><br>
<input type=button class="button" value="直接打印"  @click="WebPrintDirc()"></input><br>
[<b style="color:green">窗口设置</b>]<br>
<input type=button class="button" value="关闭标题栏"   @click="WebTitlebar(false)"></input><br>
<input type=button class="button" value="打开标题栏"   @click="WebTitlebar(true)"></input><br>
<input type=button class="button" value="关闭菜单栏"   @click="WebMenubar(false)"></input><br>
<input type=button class="button" value="打开菜单栏"   @click="WebMenubar(true)"></input><br>
<input type=button class="button" value="关闭工具栏"   @click="WebToolbar(false)"></input><br>
<input type=button class="button" value="打开工具栏"   @click="WebToolbar(true)"></input><br> 

 
 
[<b style="color:green">文档视图</b>]<br>
<input type=button class="button" value="普通视图"  @click="WebShowView(1)"></input><br>
<input type=button class="button" value="大纲视图"  @click="WebShowView(2)"></input><br>
<input type=button class="button" value="页面视图"  @click="WebShowView(3)"></input><br>
<input type=button class="button" value="打印预览"  @click="WebShowView(4)"></input><br>
<input type=button class="button" value="主控视图"  @click="WebShowView(5)"></input><br>
<input type=button class="button" value="WEB视图"  @click="WebShowView(6)"></input><br>
<input type=button class="button" value="阅读视图"  @click="WebShowView(7)"></input><br>
[<b style="color:green">文档属性</b>]<br>
<input type=button class="button" value="Application示例" @click="WebGetUser()"></input><br>
<input type=button class="button" value="ActiveDocument示例" @click="WebActive()"></input><br>
<input type=button class="button" value="取得缓冲路径"  @click="WebTempPath()"></input><br>


</td><td valign="top">

[<b style="color:green">全屏显示</b>]<br>
<input type=button class="button" value="桌面全屏" @click="WebScreen()"></input></br> 
[<b style="color:green">鉴名盖章</b>]<br>
<input type=button class="button" value="手写签名"  @click="WebDocSignature()"></input><br>
<input type="button" class="button" value="添加财务章" @click='WebSignature(1)'></input></br>
<input type="button" class="button" value="添加合同章" @click='WebSignature(2)'></input></br>
<input type="button" class="button" value="添加行政章" @click='WebSignature(3)'></input></br>
[<b style="color:green">书签/替换</b>]<br>
<input type=button class="button" value="替换文本" @click="WebReplace()"></input><br>
<input type=button class="button" value="添加书签" @click="WebAddMark()"></input><br>
<input type=button class="button" value="书签红色" @click="WebMarkRed()"></input><br>

<input type=button class="button" value="删除书签" @click="WebDelMark()"></input><br>
<input type=button class="button" value="获得书签" @click="WebGetMark()"></input><br>
 
<input type="button" class="button" value="智能填充" @click="WebSmartAdd()"/></input><br />

<input type="button" class="button" value="智能读取" @click="WebSmartRead()"/></input><br />

<input type=button class="button" value="设置套红SetFieldValue" @click="WebSetValue()"></input><br>
<input type=button class="button" value="插入图片" @click="WebAddPic()"></input><br>
<input type=button class="button" value="插入浮动图片" @click="WebAddFloatPic()"></input><br>
<input type=button class="button" value="EXCEL加入图片SetFieldValue" @click="WebXlsPic()"></input><br>
<input type=button class="button" name="insertword"  value="插入WORD文档"  @click="WebInsertDoc()"></input><br>
 
[<b style="color:green">文档保护</b>]<br>
<input type=button class="button" value="文档完全保护" @click="WebProtect()"></input><br>
<input type=button class="button" value="文档解除保护" @click="WebUnProtect()"></input><br>
<input type=button class="button" value="保护后接受修订" @click="WebProtect1()"></input><br>
<input type=button class="button" value="保护后充许批注" @click="WebProtect2()"></input><br>

[<b style="color:green">页面控制</b>]<br>
<input type=button class="button" value="文档页数"  @click="WebDocumentPageCount()"></input><br>
<input type=button class="button" value="插入页眉"  @click="add1()"></input><br>
<input type=button class="button" value="插入页码"  @click="add2()"></input><br>
<input type=button class="button" value="插入字符"  @click="add3()"></input><br>
<input type=button class="button" value="插入表格"  @click="add4()"></input><br>
[<b style="color:green">Word对话框</b>]<br>
<input type=button class="button" value="项目符号与编号ToolsBulletsNumbers"  @click="add5()"></input><br>
<input type=button class="button" value="排序文字TableSort"  @click="add6()"></input><br>
<input type=button class="button" value="字数统计ToolsWordCount"  @click="add7()"></input><br>
<input type=button class="button" value="取消选择ShrinkSelection"  @click="add8()"></input><br>
<input type=button class="button" value="选择全部EditSelectAll"  @click="add9()"></input><br>
<input type=button class="button" value="插入页码InsertPageField"  @click="add10()"></input><br>
<input type=button class="button" value="插入日期InsertDateField"  @click="add11()"></input><br>
<input type=button class="button" value="插入时间InsertTimeField"  @click="add12()"></input><br>
<input type=button class="button" value="页面设置FilePageSetup"  @click="add13()"></input><br>
<input type=button class="button" value="制表位FormatTabs"  @click="add14()"></input><br>
<input type=button class="button" value="样式FormatStyle"  @click="add15()"></input><br>
<input type=button class="button" value="字体格式对话框FormatDefineStyleFont"  @click="add16()"></input><br>
<input type=button class="button" value="制表位FormatDefineStyleTabs"  @click="add17()"></input><br>
<input type=button class="button" value="样式FormatDefineStyleFrame"  @click="add18()"></input><br>
<input type=button class="button" value="段落格式对话框FormatParagraph"  @click="add19()"></input><br>
<input type=button class="button" value="节的样式FormatSectionLayout"  @click="add20()"></input><br>
<input type=button class="button" value="分栏FormatColumns"  @click="add21()"></input><br>

</td><td valign="top">
</td></tr></table>

 

</td> 
<td valign="top" bgcolor="white"> 
   <div id="WebOCX"><object classid="clsid:FF09E4FA-BFAA-486E-ACB4-86EB0AE875D5" codebase="http://www.officectrl.com/weboffice/WebOffice.ocx#Version=2018,1,6,2" id="WebOffice" width="100%" height="900" ><param name="BorderStyle" value="1"><param name="Menubar" value="0"><param name="Titlebar" value="1"><param name="Toolbars" value="1"></object></div>
   </td>
   </tr>
   </table>
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
 mounted:function(){ 
	WebCtrl.LoadCtrl(WebOCX); 
	document.getElementById('WebOffice').UserName="贵州鼎慧大数据科技有限公司";
	if(document.getElementById('WebOffice'))
	  WebOffice.Open('http://www.officectrl.com/officecs/file/4167975720113410419.doc'); 
 },
 methods:{    
	NoCopyIt:function(e){WebCtrl.isNotCopy(e);},
	WebSignature:function(e){
	var strpic;
	if(e==1)strpic='001.gif';
	if(e==2)strpic='002.gif';
	if(e==3)strpic='003.gif';
	WebCtrl.WebSignature('http://www.officectrl.com/weboffice/images/'+strpic)
	},
	WebSave:function(){WebOffice.Save('http://www.officectrl.com/officecs/uploadedit.aspx?oper=edit&flsid=4167975720113410419&flag=1'); //uploadedit.aspx是表单一个文件上传的后二进制接收器
	},
	WebHttpSave:function(){
		WebOffice.HttpInit(); 
		WebOffice.HttpAddPostString('filename','4167975720113410419.doc');	 
		WebOffice.HttpAddPostCurrFile("docfile","");
		var strResults=WebOffice.HttpPost('http://www.officectrl.com/officecs/postsave.aspx'); //postsave.aspx是表单一个文件上传的后二进制接收器
		if(strResults=='ok')alert('保存成功！');},
	WebDocReload:function(){location.reload();},
	WebOpen1:function(){WebOffice.WebLoadFile('http://www.officectrl.com/weboffice/temp/%E6%95%B0%E6%8D%AE%E6%99%BA%E8%83%BD%E8%AF%86%E5%88%AB%E4%B8%BA%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%98%E5%82%A8%E8%A1%A8%E6%A0%BC%E6%95%B0%E6%8D%AE%E7%AE%97%E6%B3%95%2Edocx','Word.Document');},
	WebOpen2:function(){WebOffice.Close();WebOffice.WebOpen('http://www.officectrl.com/weboffice/temp/file1.doc','doc');},
	WebOpen3:function(){WebOffice.WebLoadFile('http://www.officectrl.com/weboffice/temp/file1.doc',null);},
	CreateXLS:function(){WebOffice.WebLoadFile('','xls');},
	CreateDoc:function(){WebOffice.WebLoadFile('','doc');},
	CreatePpt:function(){WebOffice.WebLoadFile('','ppt');},
	WebSaveC:function(){WebOffice.ActiveDocument.SaveAs('c:\\a.doc');alert('已保存到c盘a.doc');   },
	WebOpenLocal:function(){WebOffice.showdialog(1);},
	WebSaveLocal:function(){WebOffice.showdialog(3);},
	WebSavePage:function(){WebOffice.SetPageAs('c:\\b.doc',1,0);alert('已将文档第1页的内容另存为c盘根目录下的b.doc文件');},
	WebDelFile:function(){WebOffice.DeleteLocalFile('c:\\a.doc');alert('已将c盘根目a.doc删除')},
	WebSaveLocalPdf:function(){
		var pdfile = "c:\\a.pdf";
		var WebOffice=document.getElementById('WebOffice');
		WebOffice.ActiveDocument.ExportAsFixedFormat(pdfile, 17);
		alert('已在C盘根目录下生成' + pdfile + '，请到你本地电脑的C盘目录查看！');
	},
	WebSaveLocalHTML:function(){
		var htmlfullpath = "c:\\a.html";
		WebOffice.ActiveDocument.saveas(htmlfullpath, 8);
		alert('已在C盘根目录下生成' + htmlfullpath + '，请到你本地电脑的C盘目录查看！');
	},
	WebGetUser:function(){
		var app=WebOffice.GetApplication;
		alert('用Application对象取得当前WORD文档用户名是：'+app.username);
	},
	WebActive:function(){WebOffice.WebDialogs(129);},
	WebTempPath:function(){var a=WebOffice.TempFilePath;alert(a);},
	WebDocPrintPreView:function(){WebOffice.ActiveDocument.Application.PrintPreview = 1;},
	WebDocPrint:function(){WebOffice.printout(true);},
	WebDocPrint2:function(){WebOffice.ActiveDocument.Application.Dialogs(88).Show();},
	WebPrintDirc:function(){WebOffice.ActiveDocument.PrintOut();},
	WebTitlebar:function(e){WebOffice.Titlebar = e},
	WebMenubar:function(e){WebOffice.MenuBars = e;},
	WebToolbar:function(e){WebOffice.Toolbars = e},
	WebShowView:function(e){WebOffice.ShowView(e);},
	WebDocSignature:function(){try{
		var hr=WebOffice.WebSign();
			if (hr)
			{
				var doc = WebOffice.ActiveDocument;	
				WebOffice.SetFieldValue('mark_1','','::ADDMARK::');
				var strFile = WebOffice.WebSignTempFile; 
				WebOffice.SetFieldValue('mark_1',strFile,'::FLOATJPG::');
				//WebOffice.WebSignTempFileDel(); 			
			}
			else
			alert('Word文档下可用本功能!');
			
		}catch(e){alert(e);}},
	WebScreen:function(e){WebOffice.WebFullScreen();},
	WebReplace:function(){
	alert('本次替换示例将WORD文档里面a字母替换成b字母!');WebOffice.ReplaceText('a','b',0)},
WebAddMark:function(e){WebOffice.SetFieldValue('mark_1','test','::ADDMARK::');},
WebMarkRed:function(e){WebOffice.SetFieldValue('mark_1','255','::SETCOLOR::');},
WebDelMark:function(e){WebOffice.SetFieldValue('mark_1','','::DELMARK::');},
WebGetMark:function(e){WebOffice.SetFieldValue('mark_1','','::GETMARK::');},
WebSmartAdd:function(e){
alert('本功能接下来演示从服务器远程加载一个模板文档mark.doc到光标当前位置，此模板内部有两个隐藏的域：姓名和手机号。');
WebOffice.InSertFile('http://www.officectrl.com/weboffice/temp/mark.doc',0);
WebOffice.SetFieldValue('姓名','','::GETMARK::');
alert('模板已加载成功，接下来对域：姓名和手机号，分别以：小王 和13612989282值进行自动填充！');
WebOffice.SetFieldValue('姓名','小王','::ADDMARK::');
WebOffice.SetFieldValue('手机号','','::GETMARK::');
WebOffice.SetFieldValue('手机号','13612989282','::ADDMARK::');
},
WebSmartRead:function(e){
alert('本功能演示智能填充完成后，读取文档里的隐藏的域值：姓名和手机号实际的值！');
var name=WebOffice.GetFieldValue('姓名','');
var hao=WebOffice.GetFieldValue('手机号','');
alert('姓名：'+name+'  手机号：'+hao);
},
WebSetValue:function(e){
WebOffice.SetFieldValue('mark_1','','::ADDMARK::');
WebOffice.SetFieldValue('mark_1','http://www.officectrl.com/weboffice/temp/file1.doc','::FILE::');
},
WebAddPic:function(e){
	var strRoot='http://www.officectrl.com/weboffice';
	WebOffice.SetFieldValue('mark_1','','::ADDMARK::');
	WebOffice.SetFieldValue('mark_1',strRoot + '/images/weboffice.jpg','::JPG::');
},
WebAddFloatPic:function(e){
	var strRoot='http://www.officectrl.com/weboffice';
	WebOffice.SetFieldValue('mark_1','','::ADDMARK::');
	WebOffice.SetFieldValue('mark_1',strRoot + '/images/weboffice.jpg','::FLOATJPG::');
},
WebXlsPic:function(e){
WebOffice.SetFieldValue('mark_1','test','::ADDMARK::');
WebOffice.SetFieldValue('mark_1','http://www.officectrl.com/weboffice/images/weboffice.jpg','::JPG::');
},
WebInsertDoc:function(e){
WebOffice.InSertFile('http://www.officectrl.com/weboffice/temp/file1.doc',0)},

WebProtect:function(e){WebOffice.ProtectDoc(1,2,'123')},
WebUnProtect:function(e){WebOffice.ProtectDoc(0,0,'123');},
WebProtect1:function(e){WebOffice.ProtectDoc(1,0,'123');},
WebProtect2:function(e){WebOffice.ProtectDoc(1,1,'123')},
WebDocumentPageCount:function(e){
var intPageTotal = WebOffice.ActiveDocument.Application.ActiveDocument.BuiltInDocumentProperties(14);
	alert("文档页总数："+intPageTotal);
},
add1:function(e){WebOffice.ActiveDocument.ActiveWindow.ActivePane.View.SeekView=9},
add2:function(e){WebOffice.WebDialogs(294);},
add3:function(e){WebOffice.WebDialogs(162);},
add4:function(e){WebOffice.WebDialogs(129);},

add5:function(e){WebOffice.WebDialogs(196);},
add6:function(e){WebOffice.WebDialogs(199);},
add7:function(e){WebOffice.WebDialogs(228);},
add8:function(e){WebOffice.WebDialogs(236);},
add9:function(e){WebOffice.WebDialogs(237);},
add10:function(e){WebOffice.WebDialogs(239);},
add11:function(e){WebOffice.WebDialogs(240);},
add12:function(e){WebOffice.WebDialogs(241);},
add13:function(e){WebOffice.WebDialogs(178);},
add14:function(e){WebOffice.WebDialogs(179);},
add15:function(e){WebOffice.WebDialogs(180);},
add16:function(e){WebOffice.WebDialogs(181);},
add17:function(e){WebOffice.WebDialogs(183);},
add18:function(e){WebOffice.WebDialogs(184);},
add19:function(e){WebOffice.WebDialogs(175);},
add20:function(e){WebOffice.WebDialogs(176);},
add21:function(e){WebOffice.WebDialogs(177);}
 }
} 
</script> 
<style>
</style>