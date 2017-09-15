var meta=meta || {};
meta.common=(function(){
	var init=function(path){
		alert('session 전'+path);
		onCreate();
		meta.session.init(path);
		alert('session 후 ctx'+$$());
		alert('session 후 js'+js());
		alert('session 후 css'+css());
		alert('session 후 img'+img());
		meta.index.init();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return{
		init : init
	};
})();

var $$=function(){return meta.session.getPath('ctx');};
var js=function(){return meta.session.getPath('js');};
var img=function(){return meta.session.getPath('img');};
var css=function(){return meta.session.getPath('css');};

meta.index=(function(){
	var $wrapper;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#btn').on('click',function(){
			alert('버튼클릭');
		});//이벤트 핸들러 : function
	};
	var setContentView=function(){
		var $wrapper = $('#wrapper');
		var $image = $('<img/>',
				{
					id : 'loading',
					src : img()+'/loading.gif' 
				}
			);
		$wrapper.append($image);
		//image.appendTo($('#wrapper'));
		//$('#wrapper').empty();
		var $button=$('<input/>',
				{
					id : 'btn',
					type : 'button',
					value : '버튼'
				});
		//btn.appendTo($('#wrapper'));
		$wrapper.append($button);
	};
	return {
		init : init
	};
})();

meta.session=(function(){
	var init=function(y){
		onCreate(y);
	};
	var onCreate=function(y){
		setContentView(y);
	};
	var setContentView=function(y){
		sessionStorage.setItem('ctx',y);
		sessionStorage.setItem('js',y+'/resources/js');
		sessionStorage.setItem('img',y+'/resources/img');
		sessionStorage.setItem('css',y+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	};
})();