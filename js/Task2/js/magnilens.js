(function($) {
	var defaults = {
		indent:20,
		top:0,
		height:null,
		width:null,
		img_src:null   //necessarily
	};

	$.fn.magnilens = (params) => {       
		var options = $.extend({}, defaults, params);
		var mainBox = $(this);
		//var img_src = (options.img_src)?options.img_src:mainBox.find('img')[0].src;
		var mainBoxSize = [mainBox.width(), mainBox.height(), mainBox.offset().left, mainBox.offset().top];
		
		var secondBox = "<div class='secondBox'><img src="+options.img_src+" class='secondImg'/></div>";
		var secondBoxSize = [mainBox.width(), mainBox.height()];
		let secondBox_css = {
			position: 'absolute',
			left: (mainBoxSize[0]+options.indent)+'px',
			top: options.top,
			'z-index': 10,
			width:(options.width)?options.width:secondBoxSize[0]+"px",
			height:(options.height)?options.height:secondBoxSize[1]+"px",
			display: 'none',
			overflow: 'hidden',
		};
		mainBox.parent().append(secondBox);
		secondBox = mainBox.parent().find('.secondBox');
		secondBox.css(secondBox_css);

		var secondImg = secondBox.find("img"); 
		let secondImg_css = {
			position: 'absolute',
		};
		secondImg.css(secondImg_css);

		var markSize = [mainBox.width()/2, mainBox.height()/2];
		var mark = "<i class='mark'></i>";
		let mark_css = {
			position:"absolute", 
			top:0, 
			left:0, 
			width:markSize[0]+"px", 
			height:markSize[1]+"px", 
			backgroundColor:"#dcdcdc", 
			display:"none", 
			opacity:0.7,
			cursor:"crosshair"
		};
		mainBox.append(mark);
		mark = mainBox.find(".mark");
		mark.css(mark_css);

		var show_w = mainBoxSize[0]-markSize[0];
		var show_h = mainBoxSize[1]-markSize[1];

		mainBox.mouseover(function(){
			mark.show();
			secondBox.show();
		}).mouseout(function(){
			mark.hide();
			secondBox.hide();
		}).mousemove(function(e){
			let secondImgSize = [secondImg.width(), secondImg.height()];
			let left = e.pageX-mainBoxSize[2]-(markSize[0]/(secondImgSize[0]/mainBoxSize[0]));
			let top = e.pageY-mainBoxSize[3]-(markSize[1]/(secondImgSize[0]/mainBoxSize[0]));
			if(left < 0){
				left = 0;
			}else if(left > show_w){
				left = show_w;
			}
			if(top < 0){
				top = 0;
			}else if(top > show_h){
				top = show_h;
			}

			mark.css({left:left+"px", top:top+"px"});

			let position_x = -(left/show_w)*(secondImgSize[0]-secondBoxSize[0]);
			let position_y = -(top/show_h)*(secondImgSize[1]-secondBoxSize[1]);
			secondImg.css({left:position_x+"px", top:position_y+"px"});
		});	
		return this;
	};
})(jQuery);