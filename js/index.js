$(function(){
	// 为导航添加事件
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("#wrapper").load(url);
	})
});