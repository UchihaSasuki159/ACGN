/**
 * Created by Administrator on 2016/10/5 0005.
 */
$(function () {
    //让搜索框出来
    $(".header .nav-menu").find(".right").click(function () {
        $(".header .input").find(".right").show();
    });
    //导航效果
    $(".nav-menu>li").hover(function(){
        $(this).children("a").addClass("bgg");
        $(this).find("li").removeClass("hide").addClass("show")
    },function(){
        $(this).children("a").removeClass("bgg");
        $(this).find("li").removeClass("show").addClass("hide")
    });

    //轮播图
    $(".gallery_output img").not(":first").hide();

    $(".gallery a").click(function() {
        if ( $("#" + this.rel).is(":hidden") ) {
            $(".gallery_output img").slideUp();
            $("#" + this.rel).slideDown();
        };
    });
    //小屏幕时点击图标出现导航
    $(".ph-button").click(function(){
        $(".ph-nav-menu").toggle();
    });
    //侧边栏到一定程度固定
    $(window).scroll(function(){
        if($(document).scrollTop()>=$('.aside .link-wrap').offset().top){

            $('.link').addClass('fix')
        }else{

            $('.link').removeClass('fix')
        };
        if($(document).scrollTop()>$(".main").offset().top){
            $(".return").css("display","block")
        }else{
            $(".return").css("display","none")
        };
        $(".return").on("click",function () {
            $(document).scrollTop(0)
        });
    });
    //右侧搜索框展开关闭
    $(".search-box .search-icon").on("mouseover",function(){
        $(this).hide();
        $(".search-box .search-input").show();
    });
    $(".search-box .search-input").click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".search-box .search-input").hide();
        $(".search-box .search-icon").show()
    })
})

