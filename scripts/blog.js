
// $(document).ready()
$(function(){
    // animate bar function
    var animateBar = function($item,noAni){
        var spanLeft = $item.find('span').offset().left;
        var conLeft = $item.parent().offset().left;
        var left = spanLeft - conLeft - 4;
        var width = $item.find('span').width() + 8;

        if(noAni){
            $('#cateBar').css({left:left,width:width})
        }else{
            $('#cateBar').stop().animate({left:left,width:width},300)
        }
    }
    
	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	$('.artical-cate li')
        .mouseenter(function(){
		    animateBar($(this));
	    })
        .mouseleave(function(){
			animateBar($('.artical-cate .on'));
		});

	$(window).resize(function(e) {
		waitForFinalEvent( function(){ animateBar($('.artical-cate .on')); } );
	});

    // bar status depends on location.pathname
    var naviBarInit = function (){
        // remove class 'on'
        $(".artical-cate li").removeClass( "on" );

        // parse url
        var path_arg = location.pathname;

        if( path_arg == "/" ) {
            $("#nav_home_id").addClass("on");
        } else if( path_arg.indexOf("about.html") >= 0 ) {
            $("#nav_about_id").addClass("on");
        } else if( path_arg.indexOf("works.html") >= 0 ) {
            $("#nav_works_id").addClass("on");
        } else {
            // articles.html or posts
            $("#nav_articles_id").addClass("on");
        }

        $('.cate-bar').css( {visibility:"visible"} );
        animateBar($('.artical-cate .on'),true);
    };

    naviBarInit();
});
