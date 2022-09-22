$(() => {
    // 스크롤 메뉴
    let previousScroll = 0;
    let lsm = $(".likeAndShare");
    let rsm = $(".titleList");
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        let scrollTop = $(window).scrollTop();
    
        if(currentScroll > 210){
            lsm.css("position", "fixed").css("top", "112px");
            rsm.css("position", "fixed").css("top", "112px");
        }else if(currentScroll == scrollTop){
            lsm.css("position", "").css("top", "");
            rsm.css("position", "").css("top", "");
        }
        
    })

    // 좌측 좋아요 , 로그인 되어있을때 활성
    let isLike = true;
    let likebtn = $(".likeBox");
    likebtn.click(()=> {
        if(isLike){
            likebtn.css({
                backgroundColor:"#12B886",
                color:"#fff"
            })
            likebtn.addClass("likeOn")
            likebtn.removeClass("hoverLSM")
            likeCnt(isLike); // true 카운트 증가
            isLike = false
        }else {
            likebtn.css({
                backgroundColor:"#FFFFFF",
                color:"#868E96"
            }).animate({
                transform : "scale(1.2)"
            }, 1000)
            likebtn.addClass("hoverLSM")
            likebtn.removeClass("likeOn")
            likeCnt(isLike); // false 카운트 감소
            isLike = true
        }
        
    })

    function likeCnt(bools) {
        let cnt = $(".likeCnt");
        
        // ajax 처리
        if(bools){
            // 카운트 증가
        }else {
            // 카운트 감소
        }
    }

    // 좌측 공유 텝
    let sharebtn = $(".shareIcon");
    let facebook = $(".etcbox1");
    let twitter = $(".etcbox2");
    let address = $(".etcbox3");
    let shareTag = $(".shareTag");
    sharebtn.click(function() {
        facebook.fadeIn(300).animate({
            top:"-52px",
            left:"65px",
        },300);
        twitter.fadeIn(300).animate({
            left:"90px"
        }, 300);
        address.fadeIn(300).animate({
            top:"52px",
            left:"65px"
        },300)
        sharebtn.toggleClass("checked");
        if(!sharebtn.hasClass("checked")){
            facebook.animate({
                top:"0px",
                left:"8px",
            },300).fadeOut(300);
            twitter.animate({
                left:"8px"
            }, 300).fadeOut(300);
            address.animate({
                top:"0px",
                left:"8px"
            },300).fadeOut(300);
            shareTag.removeClass("checked")
        }
    })
    shareTag.click(function(){
        facebook.animate({
            top:"0px",
            left:"8px",
        },300).fadeOut(300);
        twitter.animate({
            left:"8px"
        }, 300).fadeOut(300);
        address.animate({
            top:"0px",
            left:"8px"
        },300).fadeOut(300);
        sharebtn.removeClass("checked")
    })

    // 시리즈 보기, 숨기기
    let toggleBtn = $(".seriesToggle");
    let hideSeries = $(".hideSeries")
    let showSeries = $(".showSeries")
    let ol = $(".seriesInfo ol");
    toggleBtn.html(
        '<svg class="showAndHide" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M7 10l5 5 5-5z"></path>' +
        '</svg>'+
        '목록 보기'
    )
    toggleBtn.click((e) => {
        ol.slideDown(100)
        showSeries.toggleClass("hideSeries")
        if(toggleBtn.hasClass("hideSeries")){
            toggleBtn.html(
                '<svg class="showAndHide" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M7 14l5-5 5 5z"></path>' +
                '</svg>'+
                '숨기기'
            )
        }else {
            toggleBtn.html(
                '<svg class="showAndHide" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M7 10l5 5 5-5z"></path>' +
                '</svg>'+
                '목록 보기'
            )
            ol.slideUp(100)
        }
    })


    // 글쓴이 이메일 hover
    $(".authorEmail").mouseover(function() {
        $('.emailHover').css("display", "flex")
    })
    $(".authorEmail").mouseout(function () {
        $('.emailHover').css("display", "none")
    })

    
})