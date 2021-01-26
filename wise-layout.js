//(function(){
$.fn.alignLeftTo = function (obj, borderName, deviation) {
    if (borderName===undefined) {
        borderName = 'left';
    }
    if (deviation===undefined) {
        deviation = 0;
    }
    var to_left = $(obj).offset().left + deviation;
    var to_top = this.offset().top;

    if (borderName === 'left') {

    } else if (borderName === 'right') {
        var obj_width_padding_border = $(obj).widthWithPaddingBorder();
        to_left = $(obj).offset().left + obj_width_padding_border + deviation;
    } else {
        return false;
    }

    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.alignRightTo = function (obj, borderName, deviation) {
    if (borderName===undefined) {
        borderName = 'left';
    }
    if (deviation===undefined) {
        deviation = 0;
    }
    var this_width_padding_border = this.widthWithPaddingBorder();
    var to_left = $(obj).offset().left - this_width_padding_border + deviation;
    var to_top = this.offset().top;

    if (borderName === 'left') {

    } else if (borderName === 'right') {
        var obj_width_padding_border = $(obj).widthWithPaddingBorder();
        to_left = $(obj).offset().left + obj_width_padding_border - this_width_padding_border + deviation;
    } else {
        return false;
    }

    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.alignTopTo = function (obj, borderName, deviation) {
    if (borderName===undefined) {
        borderName = 'top';
    }
    if (deviation===undefined) {
        deviation = 0;
    }
    var to_top = $(obj).offset().top + deviation;
    var to_left = this.offset().left;

    if (borderName === 'top') {

    } else if (borderName === 'bottom') {
        to_top = $(obj).offset().top + $(obj).height() + deviation;
    } else {
        return false;
    }

    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.alignBottomTo = function (obj, borderName, deviation) {
    if (borderName===undefined) {
        borderName = 'top';
    }
    if (deviation===undefined) {
        deviation = 0;
    }
    var to_top = $(obj).offset().top - this.height() + deviation;
    var to_left = this.offset().left;

    if (borderName === 'top') {

    } else if (borderName === 'bottom') {
        to_top = $(obj).offset().top + $(obj).height() - this.height() + deviation;
    } else {
        return false;
    }

    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.alignVerticalCenterTo = function (obj, deviation) {
    if (deviation===undefined) {
        deviation = 0;
    }
    var to_top = $(obj).offset().top + $(obj).height() / 2 - this.height() / 2 + deviation;
    var to_left = this.offset().left;
    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.cssNumber = function(attr) {
    var attr_value = this.css(attr);
    if (attr_value===undefined) {
        return 0;
    }
    return Number(attr_value.split('px')[0]);
}
$.fn.widthWithPaddingBorder = function() {
    return this.width() + this.cssNumber('padding-left') + this.cssNumber('padding-right') + this.cssNumber('border-width')*2;
}
$.fn.heightWithPaddingBorder = function() {
    return this.height() + this.cssNumber('padding-top') + this.cssNumber('padding-bottom') + this.cssNumber('border-width')*2;
}
$.fn.alignHorizonCenterTo = function (obj, deviation) {
    if (deviation===undefined) {
        deviation = 0;
    }
    var to_top = this.offset().top;
    // var obj_left_padding_border = 
    var this_width_padding_border = this.widthWithPaddingBorder();//this.width() + this.cssNumber('padding-left') + this.cssNumber('padding-right') + this.cssNumber('border-width')*2;
    var obj_width_padding_border = $(obj).widthWithPaddingBorder();//$(obj).width() + $(obj).cssNumber('padding-left') + $(obj).cssNumber('padding-right') + $(obj).cssNumber('border-width')*2;
    var to_left = $(obj).offset().left + obj_width_padding_border / 2 - this_width_padding_border / 2 + deviation;
    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.placeToCenterOf = function (obj, xDeviation, yDeviation) {
    if (xDeviation===undefined) {
        xDeviation = 0;
    }
    if (yDeviation===undefined) {
        yDeviation = 0;
    }
    $(this).alignHorizonCenterTo(obj, xDeviation).alignVerticalCenterTo(obj, yDeviation);
    return this;
}
$.fn.placeCenterToPoint = function (point, xDeviation, yDeviation) {
    if (xDeviation===undefined) {
        xDeviation = 0;
    }
    if (yDeviation===undefined) {
        yDeviation = 0;
    }
    var to_top = Number(point.y) - $(this).heightWithPaddingBorder()/2 + yDeviation;
    var to_left = Number(point.x) - $(this).widthWithPaddingBorder()/2 + xDeviation;
    this.offset({ top: to_top, left: to_left });
    return this;
}
$.fn.getCenterPoint = function () {
    var top = this.offset().top;
    var left = this.offset().left;
    var width_padding_border = $(this).widthWithPaddingBorder();
    var height_padding_border = $(this).heightWithPaddingBorder();
    var center_x = Number(left) + width_padding_border/2;
    var center_y = Number(top) + height_padding_border/2;
    return {x: center_x, y: center_y};
}
$.fn.move = function (x, y) {
    if (x===undefined) {
        x = 0;
    }
    if (y===undefined) {
        y = 0;
    }
    x = Number(x);
    y = Number(y);
    var to_top = this.offset().top;
    var to_left = this.offset().left;
    this.offset({ top: to_top + y, left: to_left + x });
    return this;
}
$.fn.moveTo = function (x, y) {
    if (x===undefined) {
        x = 0;
    }
    if (y===undefined) {
        y = 0;
    }
    x = Number(x);
    y = Number(y);
    // var to_top = this.offset().top;
    // var to_left = this.offset().left;
    this.offset({ top: y, left: x });
    return this;
}
$.fn.sameWidthWith = function (obj, deviation=0) {
    this.css("width", $(obj).width()+deviation);
    return this;
}
$.fn.sameHeightWith = function (obj, deviation=0) {
    this.css("height", $(obj).height()+deviation);
    return this;
}
$.fn.setWidthRatioTo = function (obj, ratio, deviation=0) {
    const obj_w = $(obj).width();
    const self_w = obj_w * ratio + deviation;
    this.css("width", self_w);
    return this;
}
$.fn.setHeightRatioTo = function (obj, ratio, deviation) {
    const obj_h = $(obj).height();
    const self_h = obj_h * ratio + deviation;
    this.css("height", self_h);
    return this;
}
$.fn.sameRowWith = function (obj, colSpace=0) {
    this.alignTopTo(obj, 'top').alignLeftTo(obj, 'right', colSpace);
    return this;
}
$.fn.sameColWith = function (obj, rowSpace=0) {
    this.alignLeftTo(obj, 'left').alignTopTo(obj, 'bottom', rowSpace);
    return this;
}

$.fn.show2 = function () {
    // const style = this.attr('style').replace(/\s*display\s*:\s*none\s*!important;/g, '')
    // this.attr('style', style);
	showDom$(this);
    return this;
}
$.fn.hide2 = function () {
    // let style = this.attr('style');
    // style = style===undefined? '' : style;
    // this.attr('style', `${style}display: none!important;`);
	hideDom$(this);
    return this;
}
$.fn.showBorder = function (color) {
    this.css('border-width', '1px');
    this.css('border-style', 'solid');
    this.css('border-color', color);
    return this;
}
$.fn.drag = function(dragStartCallback, dragMoveCallback, dragEndCallback){	
	return this.each(function() {
		var $document = $(document),
			$this = $(this),
			active,
			initialGapX,
			initialGapY;
		
		function calDeltaXY(e, x0, y0){
			var x, y;
			if(e.type==='mousedown' || e.type==='mousemove' || e.type==='mouseup'){
				console.log('pageX: ', e.pageX);
				x = e.pageX - x0;
				y = e.pageY - y0;
			}else if(e.type==='touchstart' || e.type==='touchmove' || e.type==='touchend'){
				console.log('pageX: ', e.originalEvent.changedTouches[0].pageX);
				x = e.originalEvent.changedTouches[0].pageX - x0;
				y = e.originalEvent.changedTouches[0].pageY - y0;
			}
			return [x, y];
		}
		
		$this.on('mousedown touchstart', function(e) {
			if(active) return;
			var initial_gap_arr = calDeltaXY(e, $this.offset().left, $this.offset().top); // initial gap between touch point x/y and DOM element top/left
			initialGapX = initial_gap_arr[0];
			initialGapY = initial_gap_arr[1];
			
			active = true;
			
			if(typeof dragStartCallback==='function'){
				dragStartCallback({x: initialGapX, y: initialGapY, evt: e, target: $this});
			}
			if (window.mozInnerScreenX == null) return false;
		});
		
		$document.on('mousemove touchmove', function(e) {
			if(!active) return;
			var offset_arr = calDeltaXY(e, initialGapX, initialGapY);
			if(active) $this.offset({
				left: offset_arr[0],
				top: offset_arr[1]
			});
			if(active && typeof dragMoveCallback==='function'){
				dragMoveCallback({x: offset_arr[0], y: offset_arr[1], evt: e, target: $this});
			}
		}).on('mouseup touchend', function(e) {
			if(!active) return;
			var offset_arr = calDeltaXY(e, initialGapX, initialGapY);
			if(active && typeof dragEndCallback==='function'){
				dragEndCallback({x: offset_arr[0], y: offset_arr[1], evt: e, target: $this});
			}
			active = false;
		});
	});
};

$.fn.dragX = function(xRange, dragStartCallback, dragMoveCallback, dragEndCallback){ // xRange = [x0, x1]
	return this.each(function() {
		var $document = $(document),
			$this = $(this),
			active,
			initialGapX,
			initialGapY,
			initialTop;
			
		function calDeltaXY(e, x0, y0){
			var x, y;
			if(e.type==='mousedown' || e.type==='mousemove' || e.type==='mouseup'){
				console.log('pageX: ', e.pageX);
				x = e.pageX - x0;
				y = e.pageY - y0;
			}else if(e.type==='touchstart' || e.type==='touchmove' || e.type==='touchend'){
				console.log('pageX: ', e.originalEvent.changedTouches[0].pageX);
				x = e.originalEvent.changedTouches[0].pageX - x0;
				y = e.originalEvent.changedTouches[0].pageY - y0;
			}
			return [x, y];
		}
		
		$this.on('mousedown touchstart', function(e) {
			if(active) return;
			var initial_gap_arr = calDeltaXY(e, $this.offset().left, $this.offset().top); // initial gap between touch point x/y and DOM element top/left
			initialGapX = initial_gap_arr[0];
			initialGapY = initial_gap_arr[1];
			initialTop = $this.offset().top;
			
			active = true;
			
			if(typeof dragStartCallback==='function'){
				dragStartCallback({x: initialGapX, y: initialGapY, evt: e, target: $this});
			}
			if (window.mozInnerScreenX == null) return false;
		});
		
		$document.on('mousemove touchmove', function(e) {
			if(!active) return;
			var offset_arr = calDeltaXY(e, initialGapX, initialGapY);
			if(offset_arr[0]<xRange[0] || offset_arr[0]>xRange[1]) {
				console.log('[move] offset_arr[0]: ', offset_arr[0],' xRange: ', xRange[0],xRange[1]);
				return;
			}
			if(active) $this.offset({
				left: offset_arr[0],
				top: initialTop // fixed
			});
			if(active && typeof dragMoveCallback==='function'){
				dragMoveCallback({x: xy_arr[0], y: initialGapY, evt: e, target: $this});
			}                
		}).on('mouseup touchend', function(e) {
			if(!active) return;
			var offset_arr = calDeltaXY(e, initialGapX, initialGapY);
			if(offset_arr[0]<xRange[0] || offset_arr[0]>xRange[1]) {
				console.log('[end] offset_arr[0]: ', offset_arr[0],' xRange: ', xRange[0],xRange[1]);
				return;
			}
			if(active && typeof dragEndCallback==='function'){
				dragEndCallback({x: xy_arr[0], y: initialGapY, evt: e, target: $this});
			}                
			active = false;
		});
	});
};

// other utils
function hideDom(areaSelector) {
    const area_$ = $(areaSelector);
    if (area_$.length < 1) {
        console.log('areaSelector invalid!');
        return false;
    }
    let area_style = area_$.attr('style');
    area_style = area_style===undefined? '' : area_style;
	const r = /\s*display\s*:\s*[a-z]+\s*(!important)?\s*;/g;
	let matched_style_arr = area_style.match(r);
    if(matched_style_arr===null) matched_style_arr = [];
	const display_css_str = 'display: none!important;';
    area_style = (matched_style_arr.length===0)? area_style+display_css_str : area_style.replace(r, display_css_str);
    area_$.attr('style', area_style);
    // area_$.attr('style', `${area_style}display: none!important;`);
}
function showDom(areaSelector, displayCssStr='') {
    const area_$ = $(areaSelector);
    if (area_$.length < 1) {
        console.log('areaSelector invalid!');
        return false;
    }
    // const area_style = area_$.attr('style').replace(/\s*display\s*:\s*none\s*!important;/g, '');
    const r = /\s*display\s*:\s*[a-z]+\s*(!important)?\s*;/g;
    let area_style = area_$.attr('style');
    area_style = area_style===undefined? '' : area_style;
    let matched_style_arr = area_style.match(r);
    if(matched_style_arr===null) matched_style_arr = [];
    area_style = (matched_style_arr.length===0)? area_style+displayCssStr : area_style.replace(r, displayCssStr);
    area_$.attr('style', area_style);
}
function hideDom$(area$) {
    if (area$.length != 1) {
        console.log('Invalid Dom jquery object!');
        return false;
    }
    let area_style = area$.attr('style');
    area_style = area_style===undefined? '' : area_style;
	const r = /\s*display\s*:\s*[a-z]+\s*(!important)?\s*;/g;
	let matched_style_arr = area_style.match(r);
    if(matched_style_arr===null) matched_style_arr = [];
	const display_css_str = 'display: none!important;';
    area_style = (matched_style_arr.length===0)? area_style+display_css_str : area_style.replace(r, display_css_str);
    area$.attr('style', area_style);
    // area$.attr('style', `${area_style}display: none!important;`);
}
function showDom$(area$, displayCssStr='') {
    if (area$.length != 1) {
        console.log('Invalid Dom jquery object!');
        return false;
    }
    //const area_style = area$.attr('style').replace(/\s*display\s*:\s*none\s*!important;/g, '')
    const r = /\s*display\s*:\s*[a-z]+\s*(!important)?\s*;/g;
    let area_style = area$.attr('style');
    area_style = area_style===undefined? '' : area_style;
    let matched_style_arr = area_style.match(r);
    if(matched_style_arr===null) matched_style_arr = [];
    area_style = (matched_style_arr.length===0)? area_style+displayCssStr : area_style.replace(r, displayCssStr);
    area$.attr('style', area_style);
}

function adjustBodyHeightAccordingToBgImg(url, cb=function(){console.log('adjustBodyHeightAccordingToBgImg finished!')}){
      var img_$ = $("<img/>");
      img_$.attr("src", url).load(function() {
        window.realBgImgWidth = this.width;
        window.realBgImgHeight = this.height;
        var scale = window.realBgImgWidth / window.screen.width;
        window.layoutScale = scale;
        bg_img_h = window.realBgImgHeight / scale;
        $('.body').css('height', bg_img_h+'px');

        window.playerPosInfo = {
          top: 293 / scale,
          left: 23 / scale,
          right: 353 / scale,
          bottom: 394 / scale
        }
        window.currentTitlePosInfo = {
          p1_x: 53 / scale,
          p1_y: 428 / scale,
          p2_x: 323 / scale,
          p2_y: 428 / scale,
          top: 396 / scale,
          height: (428-400) * 2 / scale,
          width: 375 / scale
        }
        window.currentTitleBgPosInfo = {
          top: 416 / scale,
          left: 120 / scale,
          width: 135 / scale,
          height: 20 / scale
        }
        window.listPosInfo = {
          top: 575 / scale,
          left: 53 / scale,
          right: 323 / scale,
          bottom: 813 / scale
        }

        $('.body').bind('DOMNodeInserted', function (e) {
          // if (e.target.id==='player') {
            $('#player').moveTo(window.playerPosInfo.left, window.playerPosInfo.top);
            $('#player').width(window.playerPosInfo.right - window.playerPosInfo.left);
            $('#player').height(window.playerPosInfo.bottom - window.playerPosInfo.top);
          // }

          // if (e.target.classList.value==='current_title') {
            $('.current_title').height(window.currentTitlePosInfo.height);
            // var cur_title_w = window.currentTitlePosInfo.width;// window.currentTitlePosInfo.p2_x - window.currentTitlePosInfo.p1_x;
            // var cur_title_x = window.screen.width/2 - cur_title_w/2;
            // var cur_title_y = window.currentTitlePosInfo.p1_y - $('.current_title').height()/2;
            // $('.current_title').moveTo(cur_title_x, cur_title_y);
            $('.current_title').moveTo(0, window.currentTitlePosInfo.top);
            $('.current_title').width(window.currentTitlePosInfo.width);
          // }

          if (!window.isListPosInitialized) {
            $('.list ul').moveTo(window.listPosInfo.left, window.listPosInfo.top);
            $('.list ul').width(window.listPosInfo.right - window.listPosInfo.left);
            // $('.list ul').height(window.listPosInfo.bottom - window.listPosInfo.top);
            window.isListPosInitialized = true;
          }
        })
        cb();
      });
    }

    function adjustCurrentTitleBg() {
      // url = './img/current_title_bg.png';
      var cur_title_w = window.currentTitleBgPosInfo.p2_x - window.currentTitlePosInfo.p1_x;
      var cur_title_x = window.screen.width/2 - cur_title_w/2;
      var cur_title_y = window.currentTitlePosInfo.p1_y - $('.current_title').height()/2;
      $('.current_title').moveTo(cur_title_x, cur_title_y);
      $('.current_title').width(cur_title_w);

    }
    // adjustBodyHeightAccordingToBgImg('./img/bg-zb@0.5x.png');
    // adjustBodyHeightAccordingToBgImg('./img/long-bg-zb@0.5x.jpg');
	
//})();